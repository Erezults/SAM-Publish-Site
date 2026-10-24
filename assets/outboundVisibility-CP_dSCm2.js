import{c as i,s as u,g as d,w as y}from"./appMount-CEPZPJtX.js";import{r as c,j as n}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=i("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=i("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=i("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=i("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=i("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),l=new Set;async function z(e,t){if(l.has(e))throw new Error("עדכון החבר כבר מתבצע");l.add(e);try{const{data:r,error:s}=await u.rpc("admin_set_consistency_group_for_round",{p_profile_id:e,p_status:t.status??null,p_locked:t.locked??null,p_confirm_override:t.confirmOverride??!1,p_expected_round_id:t.expectedRoundId??null});if(s)throw s;const a=r;if((a==null?void 0:a.id)!==e||typeof a.locked!="boolean"||typeof a.recalculated!="boolean")throw new Error("לא התקבלה תוצאת עדכון תקינה; יש לרענן את רשימת החברים");return a}finally{l.delete(e)}}function q(e){const t=e&&typeof e=="object"&&"message"in e?String(e.message):String(e);return t.includes("CONSISTENCY_OVERRIDE_REQUIRED")?"החבר חסום לפי שני הסבבים הקודמים. העלאה למתמיד דורשת אישור חריגה מפורש במסך הסבבים.":t.includes("CONSISTENCY_HISTORY_MISSING")?"חסרים נתוני סיום סבב; יש להשלים את הבדיקה לפני העלאה למתמיד.":t.includes("CONSISTENCY_ROUND_CHANGED")?"הסבב השתנה מאז פתיחת האישור; רענן ובדוק מחדש לפני אישור חריגה.":t}function D(e){return e.recalculated?`הנעילה הוסרה; הקבוצה כעת: ${e.status==="regular"?"מתמיד":e.status==="occasional"?"מזדמן":"אורח"}${e.blocked?" — כלל שני הסבבים ממשיך לחול":""}`:"הנעילה הוסרה; אין סבב פתוח ולכן הקבוצה לא חושבה מחדש."}async function P(e,t){const r=[...new Set(e)];if(r.some(s=>l.has(s)))throw new Error("עדכון חברים כבר מתבצע; המתן לסיומו");r.forEach(s=>l.add(s));try{const{data:s,error:a}=await u.rpc("admin_bulk_set_consistency_group",{p_profile_ids:r,p_status:t});if(a)throw a;const o=s;if(!o||!Number.isInteger(o.updated)||!Number.isInteger(o.skipped)||o.updated<0||o.skipped<0)throw new Error("לא התקבלה תוצאת עדכון קבוצתי תקינה");return o}finally{r.forEach(s=>l.delete(s))}}const h=c.forwardRef(({className:e,...t},r)=>n.jsx("div",{className:"relative w-full overflow-auto",children:n.jsx("table",{ref:r,className:d("w-full caption-bottom text-sm",e),...t})}));h.displayName="Table";const m=c.forwardRef(({className:e,...t},r)=>n.jsx("thead",{ref:r,className:d("[&_tr]:border-b",e),...t}));m.displayName="TableHeader";const b=c.forwardRef(({className:e,...t},r)=>n.jsx("tbody",{ref:r,className:d("[&_tr:last-child]:border-0",e),...t}));b.displayName="TableBody";const w=c.forwardRef(({className:e,...t},r)=>n.jsx("tfoot",{ref:r,className:d("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));w.displayName="TableFooter";const k=c.forwardRef(({className:e,...t},r)=>n.jsx("tr",{ref:r,className:d("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",e),...t}));k.displayName="TableRow";const x=c.forwardRef(({className:e,...t},r)=>n.jsx("th",{ref:r,className:d("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));x.displayName="TableHead";const _=c.forwardRef(({className:e,...t},r)=>n.jsx("td",{ref:r,className:d("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));_.displayName="TableCell";const g=c.forwardRef(({className:e,...t},r)=>n.jsx("caption",{ref:r,className:d("mt-4 text-sm text-muted-foreground",e),...t}));g.displayName="TableCaption";const C=new Set;async function N(){const{data:e,error:t}=await u.from("profiles").select("id").eq("is_test_account",!0);if(t)throw t;return new Set((e||[]).map(r=>r.id))}async function G(){const{data:e,error:t}=await u.from("profiles").select("id, user_id").eq("is_test_account",!0);if(t)throw t;const r=e||[];return{profileIds:new Set(r.map(s=>s.id)),userIds:new Set(r.map(s=>s.user_id).filter(s=>!!s))}}function L(e,t,r,s=!1){return s||t.size===0?[...e]:e.filter(a=>!r(a).some(o=>!!o&&t.has(o)))}function U(e,t,r){return!!e.profileId&&t.has(e.profileId)?{name:r,emoji:"👤",hidden:!0}:{name:e.name||r,emoji:e.emoji||"👤",hidden:!1}}function Y(){const{data:e}=y({queryKey:["outbound-hidden-profile-ids"],queryFn:N,staleTime:3e5});return e??C}function V(e,t){if(!e||t.size===0)return e;const r=a=>{var f;if(typeof a=="string")return t.has(a);if(!a||typeof a!="object")return!1;const o=a;return typeof o.profileId=="string"&&t.has(o.profileId)||typeof o.profile_id=="string"&&t.has(o.profile_id)||typeof((f=o.profile)==null?void 0:f.id)=="string"&&t.has(o.profile.id)},s=a=>{if(Array.isArray(a))return a.filter(o=>!r(o)).map(s);if(a&&typeof a=="object"&&Object.getPrototypeOf(a)===Object.prototype){const o={};for(const[f,p]of Object.entries(a))o[f]=s(p);return o}return a};return s(e)}export{E as A,H as C,h as T,v as W,m as a,k as b,x as c,b as d,_ as e,S as f,q as g,D as h,V as i,O as j,R as k,N as l,I as m,L as n,U as o,P as p,A as q,M as r,z as s,G as t,Y as u};
