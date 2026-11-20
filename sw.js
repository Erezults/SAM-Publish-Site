// Service Worker: push notifications + instant start-up (perf, Erez 2026-11-19).
//
// Start-up caching (same-origin GET only; Supabase / any other origin is never touched):
//  - /assets/* are content-hashed and never change → cache-first (a new release has new file names).
//  - /fonts/*, /icons/* → cache-first.
//  - opening the app (a navigation to an app route) → the cached app shell at once, while the network copy
//    is fetched in the background and stored for the next open (stale-while-revalidate). When that copy differs,
//    every open window gets {type: 'sam-shell-updated'} and the page reloads itself if it has only just
//    started (src/lib/startupCache.ts), so nobody stays on an old release.
//  - offline / a failed fetch falls back to whatever is cached; nothing is cached from a failed response.
const SHELL_CACHE = 'sam-shell-v1';
const ASSET_CACHE = 'sam-assets-v1';
const KEEP_CACHES = [SHELL_CACHE, ASSET_CACHE];
const MAX_ASSETS = 400;

self.addEventListener('install', () => {
  self.skipWaiting();
});

// The page sends the same-origin assets it already loaded (from the browser cache — no new download), so the
// very next open is served from here, not only the one after (src/lib/startupCache.ts).
self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.type !== 'sam-cache-urls' || !Array.isArray(data.urls)) return;
  event.waitUntil((async () => {
    const cache = await caches.open(ASSET_CACHE);
    for (const href of data.urls.slice(0, 200)) {
      try {
        const url = new URL(href, self.location.origin);
        if (url.origin !== self.location.origin) continue;
        if (!/^\/(assets|fonts|icons)\//.test(url.pathname)) continue;
        if (await cache.match(url.pathname)) continue;
        const response = await fetch(url.pathname);
        if (response.ok && response.type === 'basic') await cache.put(url.pathname, response);
      } catch {
        // best effort
      }
    }
    await trimAssets();
    if (!(await caches.open(SHELL_CACHE).then((c) => c.match('/index.html')))) await refreshShell().catch(() => null);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) if (!KEEP_CACHES.includes(name)) await caches.delete(name);
    await clients.claim();
  })());
});

function isAppNavigation(request, url) {
  if (request.mode !== 'navigate') return false;
  if (url.pathname.startsWith('/docs/')) return false; // static documents
  return !/\.[a-z0-9]+$/i.test(url.pathname); // app routes have no file extension
}

async function trimAssets() {
  const cache = await caches.open(ASSET_CACHE);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ASSETS; i++) await cache.delete(keys[i]); // oldest first
}

async function cacheFirst(event, request) {
  const cache = await caches.open(ASSET_CACHE);
  const key = new URL(request.url).pathname;
  const hit = await cache.match(key);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic') {
    event.waitUntil(cache.put(key, response.clone()).then(trimAssets));
  }
  return response;
}

async function refreshShell() {
  const cache = await caches.open(SHELL_CACHE);
  const response = await fetch('/index.html', { cache: 'no-store' });
  if (!response.ok || response.type !== 'basic') return null;
  const fresh = await response.clone().text();
  const old = await cache.match('/index.html');
  const changed = !old || (await old.text()) !== fresh;
  // stamp when this copy was fetched (the shell's age decides between "instant" and "fresh first", below)
  await cache.put('/index.html', new Response(fresh, { headers: { 'content-type': 'text/html; charset=utf-8', 'x-sam-cached-at': String(Date.now()) } }));
  if (changed && old) {
    for (const client of await clients.matchAll({ type: 'window' })) client.postMessage({ type: 'sam-shell-updated' });
  }
  return fresh;
}

// A shell fetched less than SHELL_INSTANT_MS ago opens instantly; an older one (a phone returning after hours or
// days, maybe after a release) asks the network first and falls back to it only if the network is slower than
// SHELL_NETWORK_WAIT_MS — so a returning phone gets the current release, not yesterday's (2026-11-20).
const SHELL_INSTANT_MS = 6 * 60 * 60 * 1000;
const SHELL_NETWORK_WAIT_MS = 3000;

async function appShell(event) {
  const cache = await caches.open(SHELL_CACHE);
  const cached = await cache.match('/index.html');
  const refresh = refreshShell().catch(() => null);
  event.waitUntil(refresh);
  if (cached) {
    const at = Number(cached.headers.get('x-sam-cached-at') || 0);
    if (at && Date.now() - at >= 0 && Date.now() - at < SHELL_INSTANT_MS) return cached;
    const timeout = new Promise((resolve) => setTimeout(() => resolve(null), SHELL_NETWORK_WAIT_MS));
    const fresh = await Promise.race([refresh.then(() => cache.match('/index.html')), timeout]);
    return fresh || cached;
  }
  // first open with this service worker: the network, as before
  try {
    return await fetch(event.request);
  } catch (err) {
    const late = await caches.match('/index.html');
    if (late) return late;
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // Supabase and every other origin: untouched
  if (isAppNavigation(request, url)) {
    event.respondWith(appShell(event));
    return;
  }
  if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/fonts/') || url.pathname.startsWith('/icons/')) {
    event.respondWith(cacheFirst(event, request));
  }
});

// Push event - handle incoming push notifications
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received');
  
  let data = {
    title: 'שולחן ערוך',
    body: 'התראה חדשה',
    icon: '/icons/app-icon-blue.png',
    badge: '/icons/app-icon-blue.png',
    data: {}
  };
  
  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch (e) {
      data.body = event.data.text();
    }
  }
  
  const options = {
    body: data.body,
    icon: data.icon || '/icons/app-icon-blue.png',
    badge: data.badge || '/icons/app-icon-blue.png',
    vibrate: Array.isArray(data.vibrate) ? data.vibrate : [100, 50, 100],
    data: data.data || {},
    dir: 'rtl',
    lang: 'he',
    tag: data.tag || 'default',
    renotify: true,
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || []
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification clicked');
  
  event.notification.close();
  
  // Only same-origin targets (S-064): a push can never steer a member to an outside page
  let urlToOpen = '/';
  try {
    const target = new URL(event.notification.data?.url || '/', self.location.origin);
    if (target.origin === self.location.origin) urlToOpen = target.href;
  } catch (e) {
    urlToOpen = '/';
  }
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Check if there's already a window/tab open
        for (const client of windowClients) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.navigate(urlToOpen);
            return client.focus();
          }
        }
        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  console.log('[Service Worker] Notification closed');
});
