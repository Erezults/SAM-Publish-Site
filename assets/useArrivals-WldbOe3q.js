import{c as R}from"./appMount-DNEbbKn9.js";import{r as e}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=R("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),h=5e3,E="arrival-pulse";function g(A,{ready:w=!0,resetKey:s,durationMs:u=h}={}){const a=e.useRef(null),v=e.useRef(s),[n,f]=e.useState(()=>new Map),l=A.join("");return e.useEffect(()=>{if(!w)return;v.current!==s&&(v.current=s,a.current=null,f(new Map));const o=new Set(l?l.split(""):[]),c=a.current;if(a.current=o,!c)return;const i=[...o].filter(t=>!c.has(t));if(i.length===0)return;const p=Date.now();f(t=>{const r=new Map(t);for(const m of i)r.set(m,p);return r})},[l,w,s]),e.useEffect(()=>{if(n.size===0)return;const o=Math.min(...n.values())+u,c=setTimeout(()=>{const i=Date.now();f(p=>{const t=new Map;return p.forEach((r,m)=>{r+u>i&&t.set(m,r)}),t})},Math.max(0,o-Date.now()));return()=>clearTimeout(c)},[n,u]),e.useMemo(()=>new Set(n.keys()),[n])}export{E as A,S as N,g as u};
