import{n as N}from"./glsl-Cj7KC756.js";import{ol as ze,om as De,bg as Ve,aQ as Fe,on as Ue,cF as Ee,b7 as Ge,oo as je,op as He,oq as Le,or as _e,dO as Be,os as qe,ot as ke,ou as Ze,ov as Ye,ow as Xe,ox as Qe,ik as We,fY as re,aP as C,fE as j,be as z,bo as K,fH as F,fG as V,bc as B,fW as Je,aS as ve,aR as Ke,ba as $e}from"./index-Btyj_e22.js";import{e as et}from"./mat4f64-q_b6UJoq.js";import{u as tt}from"./meshVertexSpaceUtils-CHeQiXId.js";import{e as me}from"./projectVectorToVector-DR1g-LQg.js";import{o as nt,x as ot}from"./hydratedFeatures-DrQB8grU.js";import{r as I,t as xe,n as U}from"./vec3f32-WCVSSNPR.js";import{n as E,p as G,Y as be,Z as Ae,s as st,_ as rt,$ as at,o as Se,g as lt,q as we,a0 as it,a1 as ct,w as ut,j as ft,a2 as pt,l as ht}from"./OutputColorHighlightOID.glsl-BhrI3wMp.js";import{A as dt,U as Te}from"./Indices-LFDuyM-C.js";import{M as wt,l as Ot,q as mt}from"./plane-DLQjn7Jn.js";import{k as gt}from"./sphere-BWM9spN1.js";import{t as b}from"./orientedBoundingBox-M3P743N3.js";import{e as A}from"./VertexAttribute-B3BTnNfN.js";import{s as vt}from"./BufferView-CYbRrMZQ.js";function Jt(t){t.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Kt(t,n){if(t.type==="point")return _(t,n,!1);if(nt(t))switch(t.type){case"extent":return _(t.center,n,!1);case"polygon":return _(t.centroid,n,!1);case"polyline":return _(ye(t),n,!0);case"mesh":return _(tt(t.vertexSpace,t.spatialReference)??t.extent.center,n,!1);case"multipoint":return}else switch(t.type){case"extent":return _(xt(t),n,!0);case"polygon":return _(At(t),n,!0);case"polyline":return _(ye(t),n,!0);case"multipoint":return}}function ye(t){const n=t.paths[0];if(!n||n.length===0)return null;const o=He(n,Le(n)/2);return me(o[0],o[1],o[2],t.spatialReference)}function xt(t){return me(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function At(t){const n=t.rings[0];if(!n||n.length===0)return null;const o=_e(t.rings,!!t.hasZ);return me(o[0],o[1],o[2],t.spatialReference)}function _(t,n,o){const e=o?t:ot(t);return n&&t?je(t,e,n)?e:null:e}function en(t,n,o,e=0){if(t){n||(n=Ee());const r=t;let f=.5*r.width*(o-1),s=.5*r.height*(o-1);return r.width<1e-7*r.height?f+=s/20:r.height<1e-7*r.width&&(s+=f/20),Ge(n,r.xmin-f-e,r.ymin-s-e,r.xmax+f+e,r.ymax+s+e),n}return null}function tn(t,n,o=null){const e=De(Ue);return t!=null&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],t.length>3&&(e[3]=t[3])),n!=null&&(e[3]=n),o&&Ve(e,e,o),e}function nn(t=ze,n,o,e=1){const r=new Array(3);if(n==null||o==null)r[0]=1,r[1]=1,r[2]=1;else{let f,s=0;for(let l=2;l>=0;l--){const i=t[l],c=i!=null,a=l===0&&!f&&!c,p=o[l];let y;i==="symbol-value"||a?y=p!==0?n[l]/p:1:c&&i!=="proportional"&&isFinite(i)&&(y=p!==0?i/p:1),y!=null&&(r[l]=y,f=y,s=Math.max(s,Math.abs(y)))}for(let l=2;l>=0;l--)r[l]==null?r[l]=f:r[l]===0&&(r[l]=.001*s)}for(let f=2;f>=0;f--)r[f]/=e;return Fe(r)}function yt(t){return t.isPrimitive!=null}function on(t){return Pt(yt(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Pt(t){const n=o=>o==null||o>=0;return Array.isArray(t)?t.every(n):n(t)}function sn(t,n,o,e=et()){return t&&Ye(e,e,-t/180*Math.PI),n&&Xe(e,e,n/180*Math.PI),o&&Qe(e,e,o/180*Math.PI),e}function rn(t,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const e=Be(n),r=qe(t)*e,f=ke(t)*e,s=Ze(t)*(n.isGeographic?1:e);return r===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(r,f,s)}var Oe;(function(t){function n(s,l){const i=s[l],c=s[l+1],a=s[l+2];return Math.sqrt(i*i+c*c+a*a)}function o(s,l){const i=s[l],c=s[l+1],a=s[l+2],p=1/Math.sqrt(i*i+c*c+a*a);s[l]*=p,s[l+1]*=p,s[l+2]*=p}function e(s,l,i){s[l]*=i,s[l+1]*=i,s[l+2]*=i}function r(s,l,i,c,a,p=l){(a=a||s)[p]=s[l]+i[c],a[p+1]=s[l+1]+i[c+1],a[p+2]=s[l+2]+i[c+2]}function f(s,l,i,c,a,p=l){(a=a||s)[p]=s[l]-i[c],a[p+1]=s[l+1]-i[c+1],a[p+2]=s[l+2]-i[c+2]}t.length=n,t.normalize=o,t.scale=e,t.add=r,t.subtract=f})(Oe||(Oe={}));const k=Oe,fe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Mt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],$t=[0,0,1,0,1,1,0,1],bt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ie=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)Ie[6*t+n]=t;const q=new Array(36);for(let t=0;t<6;t++)q[6*t]=0,q[6*t+1]=1,q[6*t+2]=2,q[6*t+3]=2,q[6*t+4]=3,q[6*t+5]=0;function an(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let e=0;e<8;e++)o[3*e]=fe[e][0]*n[0],o[3*e+1]=fe[e][1]*n[1],o[3*e+2]=fe[e][2]*n[2];return new G(t,[[A.POSITION,new b(o,bt,3,!0)],[A.NORMAL,new b(Mt,Ie,3)],[A.UV0,new b($t,q,2)]])}const pe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],St=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Tt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],It=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function ln(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let e=0;e<6;e++)o[3*e]=pe[e][0]*n[0],o[3*e+1]=pe[e][1]*n[1],o[3*e+2]=pe[e][2]*n[2];return new G(t,[[A.POSITION,new b(o,Tt,3,!0)],[A.NORMAL,new b(St,It,3)]])}const te=I(-.5,0,-.5),ne=I(.5,0,-.5),oe=I(0,0,.5),se=I(0,.5,0),Z=U(),Y=U(),Q=U(),W=U(),J=U();j(Z,te,se),j(Y,te,ne),B(Q,Z,Y),z(Q,Q),j(Z,ne,se),j(Y,ne,oe),B(W,Z,Y),z(W,W),j(Z,oe,se),j(Y,oe,te),B(J,Z,Y),z(J,J);const he=[te,ne,oe,se],Rt=[0,-1,0,Q[0],Q[1],Q[2],W[0],W[1],W[2],J[0],J[1],J[2]],Ct=[0,1,2,3,1,0,3,2,1,3,0,2],Nt=[0,0,0,1,1,1,2,2,2,3,3,3];function cn(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let e=0;e<4;e++)o[3*e]=he[e][0]*n[0],o[3*e+1]=he[e][1]*n[1],o[3*e+2]=he[e][2]*n[2];return new G(t,[[A.POSITION,new b(o,Ct,3,!0)],[A.NORMAL,new b(Rt,Nt,3)]])}function un(t,n,o,e,r={uv:!0}){const f=-Math.PI,s=2*Math.PI,l=-Math.PI/2,i=Math.PI,c=Math.max(3,Math.floor(o)),a=Math.max(2,Math.floor(e)),p=(c+1)*(a+1),y=E(3*p),x=E(3*p),P=E(2*p),w=[];let h=0;for(let m=0;m<=a;m++){const T=[],u=m/a,M=l+u*i,$=Math.cos(M);for(let R=0;R<=c;R++){const H=R/c,g=f+H*s,D=Math.cos(g)*$,S=Math.sin(M),ee=-Math.sin(g)*$;y[3*h]=D*n,y[3*h+1]=S*n,y[3*h+2]=ee*n,x[3*h]=D,x[3*h+1]=S,x[3*h+2]=ee,P[2*h]=H,P[2*h+1]=u,T.push(h),++h}w.push(T)}const d=new Array;for(let m=0;m<a;m++)for(let T=0;T<c;T++){const u=w[m][T],M=w[m][T+1],$=w[m+1][T+1],R=w[m+1][T];m===0?(d.push(u),d.push($),d.push(R)):m===a-1?(d.push(u),d.push(M),d.push($)):(d.push(u),d.push(M),d.push($),d.push($),d.push(R),d.push(u))}const O=[[A.POSITION,new b(y,d,3,!0)],[A.NORMAL,new b(x,d,3,!0)]];return r.uv&&O.push([A.UV0,new b(P,d,2,!0)]),r.offset&&(O[0][0]=A.OFFSET,O.push([A.POSITION,new b(Float64Array.from(r.offset),Te(d.length),3,!0)])),new G(t,O)}function fn(t,n,o,e){const r=zt(n,o);return new G(t,r)}function zt(t,n,o){let e,r;e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<e.length;i+=3)k.scale(e,i,t/k.length(e,i));let f={};function s(i,c){i>c&&([i,c]=[c,i]);const a=i.toString()+"."+c.toString();if(f[a])return f[a];let p=e.length;return e.length+=3,k.add(e,3*i,e,3*c,e,p),k.scale(e,p,t/k.length(e,p)),p/=3,f[a]=p,p}for(let i=0;i<n;i++){const c=r.length,a=new Array(4*c);for(let p=0;p<c;p+=3){const y=r[p],x=r[p+1],P=r[p+2],w=s(y,x),h=s(x,P),d=s(P,y),O=4*p;a[O]=y,a[O+1]=w,a[O+2]=d,a[O+3]=x,a[O+4]=h,a[O+5]=w,a[O+6]=P,a[O+7]=d,a[O+8]=h,a[O+9]=w,a[O+10]=h,a[O+11]=d}r=a,f={}}const l=Ae(e);for(let i=0;i<l.length;i+=3)k.normalize(l,i);return[[A.POSITION,new b(Ae(e),r,3,!0)],[A.NORMAL,new b(l,r,3,!0)]]}function pn(t,{normal:n,position:o,color:e,rotation:r,size:f,centerOffsetAndDistance:s,uvi:l,featureAttribute:i,objectAndLayerIdColor:c=null}={}){const a=o?ve(o):C(),p=n?ve(n):Ke(0,0,1),y=e?[e[0],e[1],e[2],e.length>3?e[3]:255]:[255,255,255,255],x=f!=null&&f.length===2?f:[1,1],P=r!=null?[r]:[0],w=Te(1),h=[[A.POSITION,new b(a,w,3,!0)],[A.NORMAL,new b(p,w,3,!0)],[A.COLOR,new b(y,w,4,!0)],[A.SIZE,new b(x,w,2)],[A.ROTATION,new b(P,w,1,!0)]];if(l&&h.push([A.UVI,new b(l,w,l.length)]),s!=null){const d=[s[0],s[1],s[2],s[3]];h.push([A.CENTEROFFSETANDDISTANCE,new b(d,w,4)])}if(i){const d=[i[0],i[1],i[2],i[3]];h.push([A.FEATUREATTRIBUTE,new b(d,w,4)])}return new G(t,h,null,be.Point,c)}function Dt(t,n,o,e,r=!0,f=!0){let s=0;const l=n,i=t;let c=I(0,s,0),a=I(0,s+i,0),p=I(0,-1,0),y=I(0,1,0);e&&(s=i,a=I(0,0,0),c=I(0,s,0),p=I(0,1,0),y=I(0,-1,0));const x=[a,c],P=[p,y],w=o+2,h=Math.sqrt(i*i+l*l);if(e)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*l,s,Math.sin(M)*l);x.push($);const R=I(i*Math.cos(M)/h,-l/h,i*Math.sin(M)/h);P.push(R)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*l,s,Math.sin(M)*l);x.push($);const R=I(i*Math.cos(M)/h,l/h,i*Math.sin(M)/h);P.push(R)}const d=new Array,O=new Array;if(r){for(let u=3;u<x.length;u++)d.push(1),d.push(u-1),d.push(u),O.push(0),O.push(0),O.push(0);d.push(x.length-1),d.push(2),d.push(1),O.push(0),O.push(0),O.push(0)}if(f){for(let u=3;u<x.length;u++)d.push(u),d.push(u-1),d.push(0),O.push(u),O.push(u-1),O.push(1);d.push(0),d.push(2),d.push(x.length-1),O.push(1),O.push(2),O.push(P.length-1)}const m=E(3*w);for(let u=0;u<w;u++)m[3*u]=x[u][0],m[3*u+1]=x[u][1],m[3*u+2]=x[u][2];const T=E(3*w);for(let u=0;u<w;u++)T[3*u]=P[u][0],T[3*u+1]=P[u][1],T[3*u+2]=P[u][2];return[[A.POSITION,new b(m,d,3,!0)],[A.NORMAL,new b(T,O,3,!0)]]}function hn(t,n,o,e,r,f=!0,s=!0){return new G(t,Dt(n,o,e,r,f,s))}function dn(t,n,o,e,r,f,s){const l=r?xe(r):I(1,0,0),i=f?xe(f):I(0,0,0);s??(s=!0);const c=U();z(c,l);const a=U();F(a,c,Math.abs(n));const p=U();F(p,a,-.5),V(p,p,i);const y=I(0,1,0);Math.abs(1-$e(c,y))<.2&&re(y,0,0,1);const x=U();B(x,c,y),z(x,x),B(y,x,c);const P=2*e+(s?2:0),w=e+(s?2:0),h=E(3*P),d=E(3*w),O=E(2*P),m=new Array(3*e*(s?4:2)),T=new Array(3*e*(s?4:2));s&&(h[3*(P-2)]=p[0],h[3*(P-2)+1]=p[1],h[3*(P-2)+2]=p[2],O[2*(P-2)]=0,O[2*(P-2)+1]=0,h[3*(P-1)]=h[3*(P-2)]+a[0],h[3*(P-1)+1]=h[3*(P-2)+1]+a[1],h[3*(P-1)+2]=h[3*(P-2)+2]+a[2],O[2*(P-1)]=1,O[2*(P-1)+1]=1,d[3*(w-2)]=-c[0],d[3*(w-2)+1]=-c[1],d[3*(w-2)+2]=-c[2],d[3*(w-1)]=c[0],d[3*(w-1)+1]=c[1],d[3*(w-1)+2]=c[2]);const u=(g,D,S)=>{m[g]=D,T[g]=S};let M=0;const $=U(),R=U();for(let g=0;g<e;g++){const D=g*(2*Math.PI/e);F($,y,Math.sin(D)),F(R,x,Math.cos(D)),V($,$,R),d[3*g]=$[0],d[3*g+1]=$[1],d[3*g+2]=$[2],F($,$,o),V($,$,p),h[3*g]=$[0],h[3*g+1]=$[1],h[3*g+2]=$[2],O[2*g]=g/e,O[2*g+1]=0,h[3*(g+e)]=h[3*g]+a[0],h[3*(g+e)+1]=h[3*g+1]+a[1],h[3*(g+e)+2]=h[3*g+2]+a[2],O[2*(g+e)]=g/e,O[2*g+1]=1;const S=(g+1)%e;u(M++,g,g),u(M++,g+e,g),u(M++,S,S),u(M++,S,S),u(M++,g+e,g),u(M++,S+e,S)}if(s){for(let g=0;g<e;g++){const D=(g+1)%e;u(M++,P-2,w-2),u(M++,g,w-2),u(M++,D,w-2)}for(let g=0;g<e;g++){const D=(g+1)%e;u(M++,g+e,w-1),u(M++,P-1,w-1),u(M++,D+e,w-1)}}const H=[[A.POSITION,new b(h,m,3,!0)],[A.NORMAL,new b(d,T,3,!0)],[A.UV0,new b(O,m,2,!0)]];return new G(t,H)}function wn(t,n,o,e,r,f){e=e||10,r=r==null||r,vt(n.length>1);const s=[[0,0,0]],l=[],i=[];for(let c=0;c<e;c++){l.push([0,-c-1,-(c+1)%e-1]);const a=c/e*2*Math.PI;i.push([Math.cos(a)*o,Math.sin(a)*o])}return Vt(t,i,n,s,l,r,f)}function Vt(t,n,o,e,r,f,s=I(0,0,0)){const l=n.length,i=E(o.length*l*3+(6*e.length||0)),c=E(o.length*l*3+(e?6:0)),a=new Array,p=new Array;let y=0,x=0;const P=C(),w=C(),h=C(),d=C(),O=C(),m=C(),T=C(),u=C(),M=C(),$=C(),R=C(),H=C(),g=C(),D=wt();re(M,0,1,0),j(w,o[1],o[0]),z(w,w),f?(V(u,o[0],s),z(h,u)):re(h,0,0,1),Pe(w,h,M,M,O,h,Me),K(d,h),K(H,O);for(let v=0;v<e.length;v++)F(m,O,e[v][0]),F(u,h,e[v][2]),V(m,m,u),V(m,m,o[0]),i[y++]=m[0],i[y++]=m[1],i[y++]=m[2];c[x++]=-w[0],c[x++]=-w[1],c[x++]=-w[2];for(let v=0;v<r.length;v++)a.push(r[v][0]>0?r[v][0]:-r[v][0]-1+e.length),a.push(r[v][1]>0?r[v][1]:-r[v][1]-1+e.length),a.push(r[v][2]>0?r[v][2]:-r[v][2]-1+e.length),p.push(0),p.push(0),p.push(0);let S=e.length;const ee=e.length-1;for(let v=0;v<o.length;v++){let ge=!1;v>0&&(K(P,w),v<o.length-1?(j(w,o[v+1],o[v]),z(w,w)):ge=!0,V($,P,w),z($,$),V(R,o[v-1],d),Ot(o[v],$,D),mt(D,gt(R,P),u)?(j(u,u,o[v]),z(h,u),B(O,$,h),z(O,O)):Pe($,d,H,M,O,h,Me),K(d,h),K(H,O)),f&&(V(u,o[v],s),z(g,u));for(let L=0;L<l;L++)if(F(m,O,n[L][0]),F(u,h,n[L][1]),V(m,m,u),z(T,m),c[x++]=T[0],c[x++]=T[1],c[x++]=T[2],V(m,m,o[v]),i[y++]=m[0],i[y++]=m[1],i[y++]=m[2],!ge){const ce=(L+1)%l;a.push(S+L),a.push(S+l+L),a.push(S+ce),a.push(S+ce),a.push(S+l+L),a.push(S+l+ce);for(let ue=0;ue<6;ue++){const Ne=a.length-6;p.push(a[Ne+ue]-ee)}}S+=l}const Re=o[o.length-1];for(let v=0;v<e.length;v++)F(m,O,e[v][0]),F(u,h,e[v][1]),V(m,m,u),V(m,m,Re),i[y++]=m[0],i[y++]=m[1],i[y++]=m[2];const le=x/3;c[x++]=w[0],c[x++]=w[1],c[x++]=w[2];const ie=S-l;for(let v=0;v<r.length;v++)a.push(r[v][0]>=0?S+r[v][0]:-r[v][0]-1+ie),a.push(r[v][2]>=0?S+r[v][2]:-r[v][2]-1+ie),a.push(r[v][1]>=0?S+r[v][1]:-r[v][1]-1+ie),p.push(le),p.push(le),p.push(le);const Ce=[[A.POSITION,new b(i,a,3,!0)],[A.NORMAL,new b(c,p,3,!0)]];return new G(t,Ce)}function On(t,n,o,e,r){const f=We(3*n.length),s=new Array(2*(n.length-1));let l=0,i=0;for(let a=0;a<n.length;a++){for(let p=0;p<3;p++)f[l++]=n[a][p];a>0&&(s[i++]=a-1,s[i++]=a)}const c=[[A.POSITION,new b(f,s,3,!0)]];if(o&&o.length===n.length&&o[0].length===3){const a=E(3*o.length);let p=0;for(let y=0;y<n.length;y++)for(let x=0;x<3;x++)a[p++]=o[y][x];c.push([A.NORMAL,new b(a,s,3,!0)])}return e&&c.push([A.COLOR,new b(e,dt(e.length/4),4)]),new G(t,c,null,be.Line)}function mn(t,n,o,e,r,f=0){const s=new Array(18),l=[[-o,f,r/2],[e,f,r/2],[0,n+f,r/2],[-o,f,-r/2],[e,f,-r/2],[0,n+f,-r/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)s[3*c]=l[c][0],s[3*c+1]=l[c][1],s[3*c+2]=l[c][2];return new G(t,[[A.POSITION,new b(s,i,3,!0)]])}function gn(t,n){const o=t.getMutableAttribute(A.POSITION).data;for(let e=0;e<o.length;e+=3){const r=o[e],f=o[e+1],s=o[e+2];re(X,r,f,s),Je(X,X,n),o[e]=X[0],o[e+1]=X[1],o[e+2]=X[2]}}function vn(t,n=t){const o=t.attributes,e=o.get(A.POSITION).data,r=o.get(A.NORMAL).data;if(r){const f=n.getMutableAttribute(A.NORMAL).data;for(let s=0;s<r.length;s+=3){const l=r[s+1];f[s+1]=-r[s+2],f[s+2]=l}}if(e){const f=n.getMutableAttribute(A.POSITION).data;for(let s=0;s<e.length;s+=3){const l=e[s+1];f[s+1]=-e[s+2],f[s+2]=l}}}function de(t,n,o,e,r){return!(Math.abs($e(n,t))>r)&&(B(o,t,n),z(o,o),B(e,o,t),z(e,e),!0)}function Pe(t,n,o,e,r,f,s){return de(t,n,r,f,s)||de(t,o,r,f,s)||de(t,e,r,f,s)}const Me=.99619469809,X=C(),Ft=.5;function xn(t,n){t.include(st),t.attributes.add(A.POSITION,"vec3"),t.attributes.add(A.NORMAL,"vec3"),t.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;rt(o,n),at(o,n),o.uniforms.add(new Se("viewport",e=>e.camera.fullViewport),new lt("polygonOffset",e=>e.shaderPolygonOffset),new we("cameraGroundRelative",e=>e.camera.aboveGround?1:-1)),n.hasVerticalOffset&&it(o),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||ct(o),n.draped||(o.uniforms.add(new we("perDistancePixelRatio",e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(Ft)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ut(o),n.hasScreenSizePerspective&&ft(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ut(t){t.uniforms.add(new pt("alignPixelEnabled",n=>n.alignPixelEnabled)),t.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ae;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(ae||(ae={}));function An(t){t.vertex.uniforms.add(new we("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ae.Occluded?1:n.hudRenderStyle===ae.NotOccluded?0:.75),new Se("viewport",n=>n.camera.fullViewport),new ht("hudVisibilityTexture",n=>{var o;return(o=n.hudVisibility)==null?void 0:o.getTexture()})),t.vertex.include(Ut),t.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function yn(t){return t.type==="point"}export{tn as A,an as D,sn as E,rn as G,vn as M,mn as O,en as U,on as Z,Dt as a,nn as b,yn as c,Ft as d,ae as e,hn as f,pn as g,zt as h,Pt as i,On as j,ln as k,Ut as l,Pe as m,An as n,un as o,dn as p,gn as q,fn as r,cn as s,Jt as t,xn as u,wn as v,Kt as w,Vt as x};
