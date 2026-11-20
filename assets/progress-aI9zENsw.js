import{c as m,aC as $,aE as f,j as I}from"./appMount-DHuJKoRF.js";import{r as u,j as l}from"./vendor-react-cTsSo_gI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=m("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=m("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var d="Progress",c=100,[j]=$(d),[E,w]=j(d),x=u.forwardRef((e,r)=>{const{__scopeProgress:n,value:o=null,max:a,getValueLabel:N=M,...b}=e;(a||a===0)&&!p(a)&&console.error(R(`${a}`,"Progress"));const t=p(a)?a:c;o!==null&&!v(o,t)&&console.error(V(`${o}`,"Progress"));const s=v(o,t)?o:null,C=i(s)?N(s,t):void 0;return l.jsx(E,{scope:n,value:s,max:t,children:l.jsx(f.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":i(s)?s:void 0,"aria-valuetext":C,role:"progressbar","data-state":P(s,t),"data-value":s??void 0,"data-max":t,...b,ref:r})})});x.displayName=d;var g="ProgressIndicator",h=u.forwardRef((e,r)=>{const{__scopeProgress:n,...o}=e,a=w(g,n);return l.jsx(f.div,{"data-state":P(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...o,ref:r})});h.displayName=g;function M(e,r){return`${Math.round(e/r*100)}%`}function P(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function i(e){return typeof e=="number"}function p(e){return i(e)&&!isNaN(e)&&e>0}function v(e,r){return i(e)&&!isNaN(e)&&e<=r&&e>=0}function R(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${c}\`.`}function V(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${c} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var y=x,S=h;const _=u.forwardRef(({className:e,value:r,...n},o)=>l.jsx(y,{ref:o,className:I("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...n,children:l.jsx(S,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));_.displayName=y.displayName;export{L as C,_ as P,D as S};
