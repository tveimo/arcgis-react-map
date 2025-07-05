import{m as c}from"./ProgramTemplate-uxhqcgRI.js";import{o as h,e as _,a as g,b as y}from"./ProgramTemplate-uxhqcgRI.js";import{R as F,a as v}from"./FramebufferObject-CqAHZCWA.js";import{dX as P}from"./index-Btyj_e22.js";import{t as l}from"./NestedMap-C3hRTnZR.js";class d{constructor(e){this._rctx=e,this._store=new l}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,s){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const n=new c(this._rctx,e,t,o,s);return n.ref(),this._store.set(e,t,n),n}get test(){}}function p(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function $(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:s,options:r,namespace:n}=o,f=n?`${n}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${s}
`}else{const s=o.options;let r=0;for(const n in s)e+=`#define ${s[n]} ${(r++).toFixed()}
`;e+=`#define ${t} ${s[o.value]}
`}}return e}export{h as BufferObject,F as FramebufferObject,c as Program,d as ProgramCache,v as Renderbuffer,_ as ShaderCompiler,P as Texture,g as VertexArrayObject,y as createProgram,$ as glslifyDefineMap};
