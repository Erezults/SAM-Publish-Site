// SAM service worker — OFF SWITCH (data-safety review of PR #76, C2, 2026-11-20).
//
// Ship it as /sw.js to turn the start-up caching off at once (procedure: docs/qa/dev-e2e-2611.md, "Service worker
// off switch"): it keeps push notifications exactly as before, has NO fetch handler (every request goes to the
// network as before PR #76), deletes the caches PR #76 created and takes control of open pages immediately.
const CACHES_TO_DELETE = ['sam-shell-v1', 'sam-assets-v1', 'sam-docs-v1'];

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (CACHES_TO_DELETE.includes(name) || name.startsWith('sam-')) await caches.delete(name);
    }
    await clients.claim();
  })());
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
