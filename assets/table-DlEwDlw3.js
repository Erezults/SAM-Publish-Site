import{c as d,s as p,e as c}from"./appMount-wPt0sRE0.js";import{r as n,j as o}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=d("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=d("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=d("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=d("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=d("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=d("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=d("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]),i=new Set;async function S(e,a){if(i.has(e))throw new Error("עדכון החבר כבר מתבצע");i.add(e);try{const{data:t,error:r}=await p.rpc("admin_set_consistency_group_for_round",{p_profile_id:e,p_status:a.status??null,p_locked:a.locked??null,p_confirm_override:a.confirmOverride??!1,p_expected_round_id:a.expectedRoundId??null});if(r)throw r;const s=t;if((s==null?void 0:s.id)!==e||typeof s.locked!="boolean"||typeof s.recalculated!="boolean")throw new Error("לא התקבלה תוצאת עדכון תקינה; יש לרענן את רשימת החברים");return s}finally{i.delete(e)}}function A(e){const a=e&&typeof e=="object"&&"message"in e?String(e.message):String(e);return a.includes("CONSISTENCY_OVERRIDE_REQUIRED")?"החבר חסום לפי שני הסבבים הקודמים. העלאה למתמיד דורשת אישור חריגה מפורש במסך הסבבים.":a.includes("CONSISTENCY_HISTORY_MISSING")?"חסרים נתוני סיום סבב; יש להשלים את הבדיקה לפני העלאה למתמיד.":a.includes("CONSISTENCY_ROUND_CHANGED")?"הסבב השתנה מאז פתיחת האישור; רענן ובדוק מחדש לפני אישור חריגה.":a}function H(e){return e.recalculated?`הנעילה הוסרה; הקבוצה כעת: ${e.status==="regular"?"מתמיד":e.status==="occasional"?"מזדמן":"אורח"}${e.blocked?" — כלל שני הסבבים ממשיך לחול":""}`:"הנעילה הוסרה; אין סבב פתוח ולכן הקבוצה לא חושבה מחדש."}async function I(e,a){const t=[...new Set(e)];if(t.some(r=>i.has(r)))throw new Error("עדכון חברים כבר מתבצע; המתן לסיומו");t.forEach(r=>i.add(r));try{const{data:r,error:s}=await p.rpc("admin_bulk_set_consistency_group",{p_profile_ids:t,p_status:a});if(s)throw s;const l=r;if(!l||!Number.isInteger(l.updated)||!Number.isInteger(l.skipped)||l.updated<0||l.skipped<0)throw new Error("לא התקבלה תוצאת עדכון קבוצתי תקינה");return l}finally{t.forEach(r=>i.delete(r))}}const y=n.forwardRef(({className:e,...a},t)=>o.jsx("div",{className:"relative w-full overflow-auto",children:o.jsx("table",{ref:t,className:c("w-full caption-bottom text-sm",e),...a})}));y.displayName="Table";const h=n.forwardRef(({className:e,...a},t)=>o.jsx("thead",{ref:t,className:c("[&_tr]:border-b",e),...a}));h.displayName="TableHeader";const m=n.forwardRef(({className:e,...a},t)=>o.jsx("tbody",{ref:t,className:c("[&_tr:last-child]:border-0",e),...a}));m.displayName="TableBody";const u=n.forwardRef(({className:e,...a},t)=>o.jsx("tfoot",{ref:t,className:c("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a}));u.displayName="TableFooter";const f=n.forwardRef(({className:e,...a},t)=>o.jsx("tr",{ref:t,className:c("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",e),...a}));f.displayName="TableRow";const b=n.forwardRef(({className:e,...a},t)=>o.jsx("th",{ref:t,className:c("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));b.displayName="TableHead";const k=n.forwardRef(({className:e,...a},t)=>o.jsx("td",{ref:t,className:c("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));k.displayName="TableCell";const w=n.forwardRef(({className:e,...a},t)=>o.jsx("caption",{ref:t,className:c("mt-4 text-sm text-muted-foreground",e),...a}));w.displayName="TableCaption";export{C as A,v as C,y as T,M as W,h as a,f as b,b as c,m as d,k as e,N as f,A as g,H as h,_ as i,j,T as k,I as l,E as m,R as n,S as s};
