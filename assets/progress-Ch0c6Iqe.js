import{c as d,E as p,g,av as $,ax as h}from"./appMount-CEPZPJtX.js";import{j as l,r as u}from"./vendor-react-BtTuLuy6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=d("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=d("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),v={priority:{key:"priority",text:"מועדף",className:"bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/40",bg:"#fae8ff",fg:"#86198f",border:"#f0abfc"},carryover:{key:"carryover",text:"נישא",className:"bg-amber-500/20 text-amber-400 border-amber-500/40",bg:"#fef3c7",fg:"#92400e",border:"#fcd34d"}};function b(e){return e===p.PRIORITY?v.priority:e===p.CARRYOVER?v.carryover:null}const M=e=>{var a;return((a=b(e))==null?void 0:a.text)??""};function X(e,a="שריון ותיק"){const o=M(e);return o?`${a} · ${o}`:a}function Y({grade:e,corner:a=!1,className:o}){const r=b(e);return r?l.jsx("span",{"data-testid":`veteran-grade-${r.key}`,className:g("rounded border px-1 text-[9px] leading-3 font-bold whitespace-nowrap",r.className,a&&"absolute -top-1.5 -left-2 z-10",o),children:r.text}):null}var c="Progress",f=100,[w]=$(c),[I,A]=w(c),y=u.forwardRef((e,a)=>{const{__scopeProgress:o,value:r=null,max:t,getValueLabel:C=_,...k}=e;(t||t===0)&&!m(t)&&console.error(L(`${t}`,"Progress"));const s=m(t)?t:f;r!==null&&!x(r,s)&&console.error(S(`${r}`,"Progress"));const n=x(r,s)?r:null,V=i(n)?C(n,s):void 0;return l.jsx(I,{scope:o,value:n,max:s,children:l.jsx(h.div,{"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":i(n)?n:void 0,"aria-valuetext":V,role:"progressbar","data-state":E(n,s),"data-value":n??void 0,"data-max":s,...k,ref:a})})});y.displayName=c;var N="ProgressIndicator",P=u.forwardRef((e,a)=>{const{__scopeProgress:o,...r}=e,t=A(N,o);return l.jsx(h.div,{"data-state":E(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...r,ref:a})});P.displayName=N;function _(e,a){return`${Math.round(e/a*100)}%`}function E(e,a){return e==null?"indeterminate":e===a?"complete":"loading"}function i(e){return typeof e=="number"}function m(e){return i(e)&&!isNaN(e)&&e>0}function x(e,a){return i(e)&&!isNaN(e)&&e<=a&&e>=0}function L(e,a){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function S(e,a){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var R=y,j=P;const G=u.forwardRef(({className:e,value:a,...o},r)=>l.jsx(R,{ref:r,className:g("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...o,children:l.jsx(j,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(a||0)}%)`}})}));G.displayName=R.displayName;export{O as C,G as P,B as S,Y as V,v as a,X as b,z as c,M as v};
