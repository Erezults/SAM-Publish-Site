import{c as s,ab as n,j as d}from"./appMount-BmI2HeJK.js";import{j as f}from"./vendor-react-cTsSo_gI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]),o={priority:{key:"priority",text:"מועדף",className:"bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/40",bg:"#fae8ff",fg:"#86198f",border:"#f0abfc"},carryover:{key:"carryover",text:"נישא",className:"bg-amber-500/20 text-amber-400 border-amber-500/40",bg:"#fef3c7",fg:"#92400e",border:"#fcd34d"}};function c(e){return e===n.PRIORITY?o.priority:e===n.CARRYOVER?o.carryover:null}const i=e=>{var a;return((a=c(e))==null?void 0:a.text)??""};function h(e,a="שריון ותיק"){const r=i(e);return r?`${a} · ${r}`:a}function y({grade:e,corner:a=!1,className:r}){const t=c(e);return t?f.jsx("span",{"data-testid":`veteran-grade-${t.key}`,className:d("rounded border px-1 text-[9px] leading-3 font-bold whitespace-nowrap",t.className,a&&"absolute -top-1.5 -left-2 z-10",r),children:t.text}):null}export{p as C,y as V,o as a,b,h as c,i as v};
