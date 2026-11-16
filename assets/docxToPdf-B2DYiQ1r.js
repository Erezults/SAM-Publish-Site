const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DW1FpNGA.js","assets/vendor-react-cTsSo_gI.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/jspdf.es.min-DiVRZ_oZ.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./vendor-react-cTsSo_gI.js";const x=2,T=.85,g=595.28,p=841.89,d=794,C=Math.round(d*(p/g)),I=`
  direction: rtl;
  text-align: right;
  width: ${d}px;
  box-sizing: border-box;
  padding: 64px 56px;
  background: #ffffff;
  font-family: Arial, "Noto Sans Hebrew", "Segoe UI", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #1a1a1a;
  overflow: visible;
`;function A(s){const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="-99999px",t.style.zIndex="-1",t.style.pointerEvents="none";const e=document.createElement("div");e.setAttribute("dir","rtl"),e.style.cssText=I,e.innerHTML=s;const r=document.createElement("style");return r.textContent=`
    .docx-convert-root h1, .docx-convert-root h2, .docx-convert-root h3 { text-align: right; margin: 0.8em 0 0.4em; }
    .docx-convert-root h1 { font-size: 1.6em; text-align: center; }
    .docx-convert-root h2 { font-size: 1.25em; border-bottom: 1px solid #ccc; padding-bottom: 0.2em; }
    .docx-convert-root p { margin: 0.5em 0; }
    .docx-convert-root ol, .docx-convert-root ul { padding-right: 1.6em; padding-left: 0; margin: 0.6em 0; }
    .docx-convert-root li { margin: 0.3em 0; }
    .docx-convert-root table { width: 100%; border-collapse: collapse; margin: 0.8em 0; }
    .docx-convert-root td, .docx-convert-root th { border: 1px solid #999; padding: 0.3em 0.6em; text-align: right; vertical-align: top; }
    .docx-convert-root a { color: inherit; text-decoration: none; }
  `,e.classList.add("docx-convert-root"),t.appendChild(r),t.appendChild(e),document.body.appendChild(t),{root:t,content:e}}async function H(s){const[t,e,r]=await Promise.all([m(()=>import("./index-DW1FpNGA.js").then(o=>o.i),__vite__mapDeps([0,1,2])),m(()=>import("./html2canvas.esm-QH1iLAAe.js"),[]),m(()=>import("./jspdf.es.min-DiVRZ_oZ.js").then(o=>o.j),__vite__mapDeps([3,1]))]),v=e.default,{jsPDF:u}=r,_=await s.arrayBuffer(),{value:E}=await t.convertToHtml({arrayBuffer:_}),{root:w,content:b}=A(E);try{await document.fonts.ready;const o=await v(b,{scale:x,backgroundColor:"#ffffff",useCORS:!0,width:d,windowWidth:d}),i=C*x,y=Math.max(1,Math.ceil(o.height/i)),l=new u({unit:"pt",format:"a4",orientation:"portrait"}),n=document.createElement("canvas");n.width=o.width,n.height=i;const a=n.getContext("2d");if(!a)throw new Error("docx conversion could not get a 2D canvas context");for(let c=0;c<y;c++){const f=c*i,h=Math.min(i,o.height-f);a.fillStyle="#ffffff",a.fillRect(0,0,n.width,n.height),a.drawImage(o,0,f,o.width,h,0,0,o.width,h);const P=n.toDataURL("image/jpeg",T);c>0&&l.addPage("a4","portrait"),l.addImage(P,"JPEG",0,0,g,p)}return l.output("blob")}finally{w.remove()}}export{H as convertDocxToPdf};
