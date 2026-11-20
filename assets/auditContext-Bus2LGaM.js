const e="x-audit-context";function o(t){return t.replace(/[^\x20-\x7E]/g,"").slice(0,200)}function a(t,n){return typeof(t==null?void 0:t.setHeader)!="function"?t:t.setHeader(e,o(n))}export{a as w};
