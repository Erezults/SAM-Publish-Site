const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DW1FpNGA.js","assets/vendor-react-cTsSo_gI.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/jspdf.es.min-DiVRZ_oZ.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./vendor-react-cTsSo_gI.js";const x=2,C=.85,g=595.28,p=841.89,s=794,I=Math.round(s*(p/g)),A=`
  direction: rtl;
  text-align: right;
  width: ${s}px;
  box-sizing: border-box;
  padding: 64px 56px;
  background: #ffffff;
  font-family: Arial, "Noto Sans Hebrew", "Segoe UI", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #1a1a1a;
  overflow: visible;
`;function D(r){const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="-99999px",t.style.zIndex="-1",t.style.pointerEvents="none";const e=document.createElement("div");e.setAttribute("dir","rtl"),e.style.cssText=A,e.innerHTML=r;const i=document.createElement("style");return i.textContent=`
    .docx-convert-root h1, .docx-convert-root h2, .docx-convert-root h3 { text-align: right; margin: 0.8em 0 0.4em; }
    .docx-convert-root h1 { font-size: 1.6em; text-align: center; }
    .docx-convert-root h2 { font-size: 1.25em; border-bottom: 1px solid #ccc; padding-bottom: 0.2em; }
    .docx-convert-root p { margin: 0.5em 0; }
    .docx-convert-root ol, .docx-convert-root ul { padding-right: 1.6em; padding-left: 0; margin: 0.6em 0; }
    .docx-convert-root li { margin: 0.3em 0; }
    .docx-convert-root table { width: 100%; border-collapse: collapse; margin: 0.8em 0; }
    .docx-convert-root td, .docx-convert-root th { border: 1px solid #999; padding: 0.3em 0.6em; text-align: right; vertical-align: top; }
    .docx-convert-root a { color: inherit; text-decoration: none; }
  `,e.classList.add("docx-convert-root"),t.appendChild(i),t.appendChild(e),document.body.appendChild(t),{root:t,content:e}}class H extends Error{constructor(t){super(`docx converter libraries failed to load: ${t instanceof Error?t.message:String(t)}`),this.name="ConverterLoadError"}}async function S(r){let t;try{t=await Promise.all([m(()=>import("./index-DW1FpNGA.js").then(o=>o.i),__vite__mapDeps([0,1,2])),m(()=>import("./html2canvas.esm-QH1iLAAe.js"),[]),m(()=>import("./jspdf.es.min-DiVRZ_oZ.js").then(o=>o.j),__vite__mapDeps([3,1]))])}catch(o){throw new H(o)}const[e,i,v]=t,u=i.default,{jsPDF:_}=v,E=await r.arrayBuffer(),{value:w}=await e.convertToHtml({arrayBuffer:E}),{root:b,content:y}=D(w);try{await document.fonts.ready;const o=await u(y,{scale:x,backgroundColor:"#ffffff",useCORS:!0,width:s,windowWidth:s}),a=I*x,P=Math.max(1,Math.ceil(o.height/a)),l=new _({unit:"pt",format:"a4",orientation:"portrait"}),n=document.createElement("canvas");n.width=o.width,n.height=a;const c=n.getContext("2d");if(!c)throw new Error("docx conversion could not get a 2D canvas context");for(let d=0;d<P;d++){const f=d*a,h=Math.min(a,o.height-f);c.fillStyle="#ffffff",c.fillRect(0,0,n.width,n.height),c.drawImage(o,0,f,o.width,h,0,0,o.width,h);const T=n.toDataURL("image/jpeg",C);d>0&&l.addPage("a4","portrait"),l.addImage(T,"JPEG",0,0,g,p)}return l.output("blob")}finally{b.remove()}}export{H as ConverterLoadError,S as convertDocxToPdf};
