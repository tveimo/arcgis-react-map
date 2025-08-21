import{i8 as ia,kl as ee,au as na,kk as _e,kq as sa,hP as Va,fY as k,aP as z,mc as Ba,_ as pe,h2 as la,jW as le,ar as d,as as Se,at as Ha,cK as ne,dS as Wa,dW as He,dY as ka,dX as qa,a3 as Ua,hK as Za,jt as Ja,jH as Xa,du as Ya,b7 as _,fg as Ka,wm as X,ie as Qa,k0 as We,ku as ke,bo as eo,aR as ao,be as oo,fE as ye,fU as to,fH as qe,ba as ro,hS as io}from"./index-cGsjYgnw.js";import{O as no}from"./InterleavedLayout-Dt7Xk85W.js";import{n as x,u as ae,r as Ue,o as Ce,t as so,C as lo}from"./ShaderOutput-Bdd80V3g.js";import{a as w,t as ve,n as Z}from"./NormalAttribute.glsl-BP_M2Ld9.js";import{aZ as co,a_ as uo,a$ as A,b0 as mo,b1 as fe,b2 as ca,b3 as da,b4 as ho,b5 as po,a8 as ce,b6 as vo,b7 as fo,a1 as go,ad as xo,b8 as K,g as G,k as oe,_ as j,ar as V,b9 as B,c as Q,h as $,at as H,r as bo,e as wo,ba as Mo,A as D,bb as To,ag as ua,d as ma,aa as ha,aX as pa,ae as So,v as Le,x as ge,ac as va,bc as yo,q as de,aM as Co,ah as No,ai as Ze,a5 as Ne,l as $o,o as E,bd as p,aL as Pe,a6 as Ie,a7 as ue,a2 as Oo,be as Eo,bf as zo,i as Ge,bg as Io,b as _o,bh as fa,$ as me,bi as ga,as as xa,f as ba,a as wa,bj as Ma,au as Ta,ab as he,bk as Sa,K as Lo,av as Po,az as Go,F as Ao,aA as Ro,aB as Do,aC as Fo,aw as jo,ax as Vo,ay as Bo,z as Ho,B as P,C as m,D as Wo,E as $e,aD as ko,N as qo,aq as Uo,aV as Zo,aE as Jo,O as Xo,W as Yo}from"./OutputColorHighlightOID.glsl-pO7ykQqY.js";import{i as N,a as Je,e as te,n as re}from"./basicInterfaces-CZwQPxTp.js";import{e as f}from"./VertexAttribute-B3BTnNfN.js";import{B as Ae,g as Re,f as Ko}from"./renderState-BEh_Q5tn.js";import{n as i,t as v}from"./glsl-Cj7KC756.js";import{a as xe}from"./BindType-BBwFZqyN.js";import{i as be}from"./ShaderBuilder-Cba1LVoe.js";import{e as De,r as q}from"./mat3f64-B5o_lm6j.js";import{r as Xe}from"./mat4f64-q_b6UJoq.js";import"./boundedPlane-B-r3v9r8.js";import"./sphere-Fi8gi249.js";function Qo(e,a){const t=e.fragment;switch(t.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),a.doubleSidedMode){case T.None:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case T.View:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case T.WindingOrder:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ia(a.doubleSidedMode);case T.COUNT:}}var T;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(T||(T={}));function dr({normalTexture:e,metallicRoughnessTexture:a,metallicFactor:t,roughnessFactor:r,emissiveTexture:o,emissiveFactor:s,occlusionTexture:l}){return e==null&&a==null&&o==null&&(s==null||na(s,_e))&&l==null&&(r==null||r===1)&&(t==null||t===1)}const et=ee(1,1,.5),ur=ee(0,.6,.2),mr=ee(0,1,.2);function ya(e,a){switch(a.normalType){case w.Attribute:case w.Compressed:e.include(ve,a),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new uo("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new A("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)),e.vertex.code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case w.ScreenDerivative:e.vertex.code.add(i`void forwardNormal() {}`);break;default:ia(a.normalType);case w.COUNT:}}let at=class extends co{constructor(){super(...arguments),this.transformNormalViewFromGlobal=De()}},ot=class extends mo{constructor(){super(...arguments),this.transformNormalGlobalFromModel=De(),this.toMapSpace=sa()}};function Ca(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Na(e,a){a.instancedColor?(e.attributes.add(f.INSTANCECOLOR,"vec4"),e.vertex.include(fe),e.vertex.include(ca),e.vertex.include(da),e.vertex.code.add(i`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${f.INSTANCECOLOR}));
      }
    `)):e.vertex.code.add(i`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Ye=De();function $a(e,a){const{hasModelTransformation:t,instancedDoublePrecision:r,instanced:o,output:s,hasVertexTangents:l}=a;t&&(e.vertex.uniforms.add(new ho("model",c=>c.modelTransformation??Xe)),e.vertex.uniforms.add(new A("normalLocalOriginFromModel",c=>(Va(Ye,c.modelTransformation??Xe),Ye)))),o&&r&&(e.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(f.INSTANCEMODEL,"mat3"),e.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;r&&(n.include(po,a),n.uniforms.add(new ce("viewOriginHi",c=>vo(k(se,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),se)),new ce("viewOriginLo",c=>fo(k(se,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),se)))),n.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===x.Normal&&(go(n),n.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),l&&n.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const se=z();function Oa(e,a){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new xo("symbolColorMixMode",t=>K[t.colorMixMode])),a.hasSymbolColors?(e.vertex.include(fe),e.vertex.include(ca),e.vertex.include(da),e.attributes.add(f.SYMBOLCOLOR,"vec4"),e.vertex.code.add(i`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${f.SYMBOLCOLOR}));
    }
  `)):e.vertex.code.add(i`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(i`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.int(K.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.int(K.ignore)} : symbolColorMixMode;
    }
  `)}function tt(e,a){switch(a.output){case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:case x.ViewshedShadow:e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}function W(e,a){rt(e,a,new G("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function rt(e,a,t){const r=e.fragment,o=a.alphaDiscardMode,s=o===N.Blend;o!==N.Mask&&o!==N.MaskBlend||r.uniforms.add(t),r.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${o===N.Opaque?"color.a = 1.0;":`if (color.a < ${s?i.float(oe):"textureAlphaCutoff"}) {
              discard;
             } ${v(o===N.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function Ea(e,a){const{vertex:t,fragment:r,varyings:o}=e,{hasColorTexture:s,alphaDiscardMode:l}=a,n=s&&l!==N.Opaque,{output:c,normalType:h,hasColorTextureTransform:M}=a;switch(c){case x.Depth:j(t,a),e.include(V,a),r.include(H,a),e.include(B,a),n&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(n,i`vec4 texColor = texture(tex, ${M?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:case x.ViewshedShadow:case x.ObjectAndLayerIdColor:j(t,a),e.include(V,a),e.include(B,a),e.include(Q,a),e.include(tt,a),r.include(H,a),e.include(wo,a),Mo(e),o.add("depth","float",{invariant:!0}),n&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(n,i`vec4 texColor = texture(tex, ${M?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${c===x.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case x.Normal:{j(t,a),e.include(V,a),e.include(ve,a),e.include(ya,a),e.include(B,a),e.include(Q,a),n&&r.uniforms.add(new $("tex",S=>S.texture)),h===w.ScreenDerivative&&o.add("vPositionView","vec3",{invariant:!0});const g=h===w.Attribute||h===w.Compressed;t.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${g?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(H,a),e.include(W,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(n,i`vec4 texColor = texture(tex, ${M?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${h===w.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case x.Highlight:j(t,a),e.include(V,a),e.include(B,a),e.include(Q,a),n&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(H,a),e.include(W,a),e.include(bo,a),r.main.add(i`
        discardBySlice(vpos);
        ${v(n,i`vec4 texColor = texture(tex, ${M?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function it(e,a){const t=e.fragment,{hasVertexTangents:r,doubleSidedMode:o,hasNormalTexture:s,textureCoordinateType:l,bindType:n,hasNormalTextureTransform:c}=a;r?(e.attributes.add(f.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),o===T.WindingOrder?t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),s&&l!==D.None&&(e.include(To,a),t.uniforms.add(n===xe.Pass?new $("normalTexture",h=>h.textureNormal):new ua("normalTexture",h=>h.textureNormal)),c&&(t.uniforms.add(new ma("scale",h=>h.scale??Ba)),t.uniforms.add(new A("normalTextureTransformMatrix",h=>h.normalTextureTransformMatrix??q))),t.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&t.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(i`return tangentSpace * rawNormal;
}`))}const nt=3e5,Ke=5e5,Oe=4;function za(){const e=new be,a=e.fragment;e.include(ha);const t=(Oe+1)/2,r=1/(2*t*t);return a.include(pa),a.uniforms.add(new $("depthMap",o=>o.depthTexture),new ua("tex",o=>o.colorTexture),new So("blurSize",o=>o.blurSize),new G("projScale",(o,s)=>{const l=s.camera.distance;return l>5e4?Math.max(0,o.projScale-(l-5e4)):o.projScale})),a.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),a.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Oe)}; r <= ${i.int(Oe)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const st=Object.freeze(Object.defineProperty({__proto__:null,build:za},Symbol.toStringTag,{value:"Module"}));let Qe=class extends Le{constructor(a,t){super(a,t,new ge(st,()=>pe(()=>Promise.resolve().then(()=>kt),void 0)))}initializePipeline(){return Ae({colorWrite:Re})}};const lt="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let ct=class extends va{constructor(){super(...arguments),this.projScale=1}},dt=class extends ct{constructor(){super(...arguments),this.intensity=1}},ut=class extends va{},mt=class extends ut{constructor(){super(...arguments),this.blurSize=la()}};const ea=16;function Ia(){const e=new be,a=e.fragment;return e.include(ha),e.include(yo),a.include(pa),a.uniforms.add(new de("radius",t=>we(t.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),a.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),a.uniforms.add(new $("normalMap",t=>t.normalTexture),new $("depthMap",t=>t.depthTexture),new G("projScale",t=>t.projScale),new $("rnm",t=>t.noiseTexture),new ma("rnmScale",(t,r)=>le(aa,r.camera.fullWidth/t.noiseTexture.descriptor.width,r.camera.fullHeight/t.noiseTexture.descriptor.height)),new G("intensity",t=>t.intensity),new Co("screenSize",t=>le(aa,t.camera.fullWidth,t.camera.fullHeight))).main.add(i`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${i.int(ea)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${i.int(ea)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function we(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const aa=la(),ht=Object.freeze(Object.defineProperty({__proto__:null,build:Ia,getRadius:we},Symbol.toStringTag,{value:"Module"}));let oa=class extends Le{constructor(a,t){super(a,t,new ge(ht,()=>pe(()=>Promise.resolve().then(()=>qt),void 0)))}initializePipeline(){return Ae({colorWrite:Re})}};const Y=2;let J=class extends No{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Ze.SSAO,this.isEnabled=()=>!1,this._enableTime=ne(0),this._passParameters=new dt,this._drawParameters=new mt}initialize(){const e=Uint8Array.from(atob(lt),t=>t.charCodeAt(0)),a=new Wa(32);a.wrapMode=He.CLAMP_TO_EDGE,a.pixelFormat=ka.RGB,a.wrapMode=He.REPEAT,a.hasMipmap=!0,this._passParameters.noiseTexture=new qa(this.renderingContext,a,e),this.techniques.precompile(oa),this.techniques.precompile(Qe),this.addHandles(Ua(()=>this.isEnabled(),()=>this._enableTime=ne(0)))}destroy(){this._passParameters.noiseTexture=Za(this._passParameters.noiseTexture)}render(e){const a=e.find(({name:Me})=>Me==="normals"),t=a==null?void 0:a.getTexture(),r=a==null?void 0:a.getTexture(Ja);if(!t||!r)return;const o=this.techniques.get(oa),s=this.techniques.get(Qe);if(!o.compiled||!s.compiled)return this._enableTime=ne(performance.now()),void this.requestRender(Je.UPDATE);this._enableTime===0&&(this._enableTime=ne(performance.now()));const l=this.renderingContext,n=this.view.qualitySettings.fadeDuration,c=this.bindParameters,h=c.camera,M=h.relativeElevation,g=Ya((Ke-M)/(Ke-nt),0,1),S=n>0?Math.min(n,performance.now()-this._enableTime)/n:1,y=S*g;this._passParameters.normalTexture=t,this._passParameters.depthTexture=r,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*pt/we(h)**6*y;const I=h.fullViewport[2],O=h.fullViewport[3],b=this.fboCache.acquire(I,O,"ssao input",Ne.RG8UNORM);l.bindFramebuffer(b.fbo),l.setViewport(0,0,I,O),l.bindTechnique(o,c,this._passParameters,this._drawParameters),l.screen.draw();const R=Math.round(I/Y),F=Math.round(O/Y),U=this.fboCache.acquire(R,F,"ssao blur",Ne.R8UNORM);l.bindFramebuffer(U.fbo),this._drawParameters.colorTexture=b.getTexture(),le(this._drawParameters.blurSize,0,Y/O),l.bindTechnique(s,c,this._passParameters,this._drawParameters),l.setViewport(0,0,R,F),l.screen.draw(),b.release();const ie=this.fboCache.acquire(R,F,Ze.SSAO,Ne.R8UNORM);return l.bindFramebuffer(ie.fbo),l.setViewport(0,0,I,O),l.setClearColor(1,1,1,0),l.clear(Xa.COLOR),this._drawParameters.colorTexture=U.getTexture(),le(this._drawParameters.blurSize,Y/I,0),l.bindTechnique(s,c,this._passParameters,this._drawParameters),l.setViewport(0,0,R,F),l.screen.draw(),l.setViewport4fv(h.fullViewport),U.release(),S<1&&this.requestRender(Je.UPDATE),ie}};d([Se()],J.prototype,"consumes",void 0),d([Se()],J.prototype,"produces",void 0),d([Se({constructOnly:!0})],J.prototype,"isEnabled",void 0),J=d([Ha("esri.views.3d.webgl-engine.effects.ssao.SSAO")],J);const pt=.5;function Fe(e,a){a.receiveAmbientOcclusion?(e.uniforms.add(new $o("ssaoTex",t=>{var r;return(r=t.ssao)==null?void 0:r.getTexture()})),e.constants.add("blurSizePixelsInverse","float",1/Y),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function vt(e,a){const t=e.fragment,r=a.lightingSphericalHarmonicsOrder!==void 0?a.lightingSphericalHarmonicsOrder:2;r===0?(t.uniforms.add(new ce("lightingAmbientSH0",({lighting:o})=>k(ta,o.sh.r[0],o.sh.g[0],o.sh.b[0]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(t.uniforms.add(new E("lightingAmbientSH_R",({lighting:o})=>_(L,o.sh.r[0],o.sh.r[1],o.sh.r[2],o.sh.r[3])),new E("lightingAmbientSH_G",({lighting:o})=>_(L,o.sh.g[0],o.sh.g[1],o.sh.g[2],o.sh.g[3])),new E("lightingAmbientSH_B",({lighting:o})=>_(L,o.sh.b[0],o.sh.b[1],o.sh.b[2],o.sh.b[3]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(t.uniforms.add(new ce("lightingAmbientSH0",({lighting:o})=>k(ta,o.sh.r[0],o.sh.g[0],o.sh.b[0])),new E("lightingAmbientSH_R1",({lighting:o})=>_(L,o.sh.r[1],o.sh.r[2],o.sh.r[3],o.sh.r[4])),new E("lightingAmbientSH_G1",({lighting:o})=>_(L,o.sh.g[1],o.sh.g[2],o.sh.g[3],o.sh.g[4])),new E("lightingAmbientSH_B1",({lighting:o})=>_(L,o.sh.b[1],o.sh.b[2],o.sh.b[3],o.sh.b[4])),new E("lightingAmbientSH_R2",({lighting:o})=>_(L,o.sh.r[5],o.sh.r[6],o.sh.r[7],o.sh.r[8])),new E("lightingAmbientSH_G2",({lighting:o})=>_(L,o.sh.g[5],o.sh.g[6],o.sh.g[7],o.sh.g[8])),new E("lightingAmbientSH_B2",({lighting:o})=>_(L,o.sh.b[5],o.sh.b[6],o.sh.b[7],o.sh.b[8]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),a.pbrMode!==p.Normal&&a.pbrMode!==p.Schematic||t.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ta=z(),L=sa();function ft(e){e.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function je(e,a){e.include(Pe),a.pbrMode!==p.Normal&&a.pbrMode!==p.Schematic&&a.pbrMode!==p.Simplified&&a.pbrMode!==p.TerrainWithWater||(e.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),a.pbrMode!==p.Normal&&a.pbrMode!==p.Schematic||(e.include(ft),e.code.add(i`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Mr(e,a){e.include(Pe),e.code.add(i`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${a.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function gt(e){e.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function xt(e){e.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Ve(e){e.constants.add("ambientBoostFactor","float",zo)}function Be(e){e.uniforms.add(new de("lightingGlobalFactor",a=>a.lighting.globalFactor))}function _a(e,a){const t=e.fragment,{pbrMode:r,spherical:o,hasColorTexture:s}=a;t.include(Fe,a),r!==p.Disabled&&t.include(je,a),e.include(vt,a),t.include(Pe),t.include(xt,a);const l=!(r===p.Schematic&&!s);switch(l&&t.include(gt),t.code.add(i`
    const float GAMMA_SRGB = ${i.float(Ka)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${v(r!==p.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Ve(t),Be(t),Ie(t),t.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${o?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ue(t),t.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case p.Disabled:case p.WaterOnIntegratedMesh:case p.Water:e.include(Eo),t.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case p.Normal:case p.Schematic:t.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),a.useFillLights?t.uniforms.add(new Oo("hasFillLights",n=>n.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new de("lightingSpecularStrength",n=>n.lighting.mainLight.specularStrength),new de("lightingEnvironmentStrength",n=>n.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),t.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${l?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case p.Simplified:case p.TerrainWithWater:Ie(t),ue(t),t.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);default:case p.COUNT:}}let bt=class extends Ge{constructor(a,t,r,o){super(a,"mat4",xe.Draw,(s,l,n,c)=>s.setUniformMatrix4fv(a,t(l,n,c),o),r)}},wt=class extends Ge{constructor(a,t,r,o){super(a,"mat4",xe.Pass,(s,l,n)=>s.setUniformMatrix4fv(a,t(l,n),o),r)}};function Mt(e){e.fragment.uniforms.add(new wt("shadowMapMatrix",(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),La(e)}function Tt(e){e.fragment.uniforms.add(new bt("shadowMapMatrix",(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),La(e)}function La(e){const{fragment:a}=e;a.uniforms.add(new E("cascadeDistances",t=>t.shadowMap.cascadeDistances),new Io("numCascades",t=>t.shadowMap.numCascades)),a.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function St(e){e.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}class yt extends Ge{constructor(a,t){super(a,"sampler2DShadow",xe.Bind,(r,o)=>r.bindTexture(a,t(o)))}}function Pa(e,a){a.receiveShadows&&(e.include(Mt),Aa(e))}function Ga(e,a){a.receiveShadows&&(e.include(Tt),Aa(e))}function Aa(e){e.include(St);const{fragment:a}=e;a.uniforms.add(new yt("shadowMap",t=>t.shadowMap.depthTexture)),a.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Ct(e,a){a.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new A("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??q)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function Nt(e,a){a.hasNormalTextureTransform&&a.textureCoordinateType!==D.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new A("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??q)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function $t(e,a){a.hasEmissionTextureTransform&&a.textureCoordinateType!==D.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new A("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??q)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function Ot(e,a){a.hasOcclusionTextureTransform&&a.textureCoordinateType!==D.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new A("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??q)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Et(e,a){a.hasMetallicRoughnessTextureTransform&&a.textureCoordinateType!==D.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new A("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??q)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Ra(e){e.include(_o),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(Z.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(Z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(Z.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(Z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(Z.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function zt(e,a){a.snowCover&&(e.code.add(i`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}function Da(e){const a=new be,{attributes:t,vertex:r,fragment:o,varyings:s}=a,{output:l,normalType:n,offsetBackfaces:c,spherical:h,receiveShadows:M,snowCover:g,pbrMode:S,textureAlphaPremultiplied:y,instancedDoublePrecision:I,hasVertexColors:O,hasVertexTangents:b,hasColorTexture:R,hasNormalTexture:F,hasNormalTextureTransform:U,hasColorTextureTransform:ie,hasBloom:Me}=e;if(j(r,e),t.add(f.POSITION,"vec3"),s.add("vpos","vec3",{invariant:!0}),a.include(Q,e),a.include($a,e),a.include(fa,e),a.include(Ct,e),!ae(l))return a.include(Ea,e),a;a.include(Nt,e),a.include($t,e),a.include(Ot,e),a.include(Et,e),me(r,e),a.include(ve,e),a.include(V,e);const Te=n===w.Attribute||n===w.Compressed;return Te&&c&&a.include(Ca),a.include(it,e),a.include(ya,e),a.include(Na,e),s.add("vPositionLocal","vec3"),a.include(B,e),a.include(ga,e),a.include(Oa,e),a.include(xa,e),r.uniforms.add(new ba("externalColor",C=>C.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),a.include(wa,e),r.include(fe),r.include(Ma),r.main.add(i`
    forwardNormalizedVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(Te,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(b,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(Te&&c,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${i.int(K.ignore)} && vcolorExt.a < ${i.float(oe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),a.include(_a,e),o.include(Fe,e),a.include(W,e),a.include(I?Pa:Ga,e),o.include(H,e),a.include(Ta,e),me(o,e),o.uniforms.add(r.uniforms.get("localOrigin"),new he("ambient",C=>C.ambient),new he("diffuse",C=>C.diffuse),new G("opacity",C=>C.opacity),new G("layerOpacity",C=>C.layerOpacity)),R&&o.uniforms.add(new $("tex",C=>C.texture)),a.include(Sa,e),o.include(je,e),o.include(Ra),a.include(Qo,e),o.include(zt,e),Ve(o),Be(o),ue(o),o.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${R?i`
            vec4 texColor = texture(tex, ${ie?"colorUV":"vuv0"});
            ${v(y,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${n===w.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${M?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":v(h,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${v(O,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${v(O,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${F?`mat3 tangentSpace = computeTangentSpace(${b?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${U?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${h?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(g,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${S===p.Normal||S===p.Schematic?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${Me?"vec4(0.0)":"getEmissions(albedo)"};
            ${v(g,`mrr = applySnowToMRR(mrr, snow);
                 emission = snowCoverForEmissions(emission, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${v(g,", snow")});
  `),a}const It=Object.freeze(Object.defineProperty({__proto__:null,build:Da},Symbol.toStringTag,{value:"Module"}));class _t extends at{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=et,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=te.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrength=0,this.emissiveSource=X.Color,this.emissiveBaseColor=_e,this.instancedDoublePrecision=!1,this.normalType=w.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ee(.2,.2,.2),this.diffuse=ee(.8,.8,.8),this.externalColor=Qa(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=z(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=re.Less,this.textureAlphaMode=N.Blend,this.textureAlphaCutoff=oe,this.textureAlphaPremultiplied=!1,this.renderOccluded=Lo.Occlude,this.isDecoration=!1}}class yr extends ot{constructor(){super(...arguments),this.origin=z(),this.slicePlaneLocalOrigin=this.origin}}class Fa extends Le{constructor(a,t,r=new ge(It,()=>pe(()=>Promise.resolve().then(()=>Ut),void 0))){super(a,t,r),this.type="DefaultMaterialTechnique"}_makePipeline(a,t){const{oitPass:r,output:o,transparent:s,cullFace:l,customDepthTest:n,hasOccludees:c}=a;return Ae({blending:ae(o)&&s?Fo(r):null,culling:Pt(a)?Ko(l):null,depthTest:{func:Do(r,Lt(n))},depthWrite:Ro(a),drawBuffers:Go(o,Ao(r,o)),colorWrite:Re,stencilWrite:c?Bo:null,stencilTest:c?t?jo:Vo:null,polygonOffset:Po(a)})}initializePipeline(a){return this._occludeePipelineState=this._makePipeline(a,!0),this._makePipeline(a,!1)}getPipeline(a){return a?this._occludeePipelineState:super.getPipeline()}}function Lt(e){return e===re.Lequal?We.LEQUAL:We.LESS}function Pt(e){return e.cullFace!==te.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class u extends Ho{constructor(a){super(),this.spherical=a,this.alphaDiscardMode=N.Opaque,this.doubleSidedMode=T.None,this.pbrMode=p.Disabled,this.cullFace=te.None,this.normalType=w.Attribute,this.customDepthTest=re.Less,this.emissionSource=P.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===P.Texture||this.hasOcclusionTexture||this.hasNormalTexture?D.Default:D.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}d([m({count:N.COUNT})],u.prototype,"alphaDiscardMode",void 0),d([m({count:T.COUNT})],u.prototype,"doubleSidedMode",void 0),d([m({count:p.COUNT})],u.prototype,"pbrMode",void 0),d([m({count:te.COUNT})],u.prototype,"cullFace",void 0),d([m({count:w.COUNT})],u.prototype,"normalType",void 0),d([m({count:re.COUNT})],u.prototype,"customDepthTest",void 0),d([m({count:P.COUNT})],u.prototype,"emissionSource",void 0),d([m()],u.prototype,"hasVertexColors",void 0),d([m()],u.prototype,"hasSymbolColors",void 0),d([m()],u.prototype,"hasVerticalOffset",void 0),d([m()],u.prototype,"hasColorTexture",void 0),d([m()],u.prototype,"hasMetallicRoughnessTexture",void 0),d([m()],u.prototype,"hasOcclusionTexture",void 0),d([m()],u.prototype,"hasNormalTexture",void 0),d([m()],u.prototype,"hasScreenSizePerspective",void 0),d([m()],u.prototype,"hasVertexTangents",void 0),d([m()],u.prototype,"hasOccludees",void 0),d([m()],u.prototype,"instancedDoublePrecision",void 0),d([m()],u.prototype,"hasModelTransformation",void 0),d([m()],u.prototype,"offsetBackfaces",void 0),d([m()],u.prototype,"vvSize",void 0),d([m()],u.prototype,"vvColor",void 0),d([m()],u.prototype,"receiveShadows",void 0),d([m()],u.prototype,"receiveAmbientOcclusion",void 0),d([m()],u.prototype,"textureAlphaPremultiplied",void 0),d([m()],u.prototype,"instanced",void 0),d([m()],u.prototype,"instancedColor",void 0),d([m()],u.prototype,"writeDepth",void 0),d([m()],u.prototype,"transparent",void 0),d([m()],u.prototype,"enableOffset",void 0),d([m()],u.prototype,"terrainDepthTest",void 0),d([m()],u.prototype,"cullAboveTerrain",void 0),d([m()],u.prototype,"snowCover",void 0),d([m()],u.prototype,"hasBloom",void 0),d([m()],u.prototype,"hasColorTextureTransform",void 0),d([m()],u.prototype,"hasEmissionTextureTransform",void 0),d([m()],u.prototype,"hasNormalTextureTransform",void 0),d([m()],u.prototype,"hasOcclusionTextureTransform",void 0),d([m()],u.prototype,"hasMetallicRoughnessTextureTransform",void 0);function ja(e){const a=new be,{attributes:t,vertex:r,fragment:o,varyings:s}=a,{output:l,offsetBackfaces:n,pbrMode:c,snowCover:h,spherical:M,hasBloom:g}=e,S=c===p.Normal||c===p.Schematic;if(j(r,e),t.add(f.POSITION,"vec3"),s.add("vpos","vec3",{invariant:!0}),a.include(Q,e),a.include($a,e),a.include(fa,e),a.include(wa,e),ae(l)&&(me(a.vertex,e),a.include(ve,e),a.include(V,e),n&&a.include(Ca),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),a.include(B,e),a.include(ga,e),a.include(Oa,e),a.include(Na,e),a.include(xa,e),r.include(fe),r.include(Ma),r.uniforms.add(new ba("externalColor",y=>y.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),r.main.add(i`
      forwardNormalizedVertexColor();

      MaskedColor maskedColorExt =
        applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

      vcolorExt = maskedColorExt.color;
      forwardColorMixMode(maskedColorExt.mask);

      bool alphaCut = opacityMixMode != ${i.int(K.ignore)} && vcolorExt.a < ${i.float(oe)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();

      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${v(n,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),ae(l)){const{hasColorTexture:y,hasColorTextureTransform:I,receiveShadows:O}=e;a.include(_a,e),o.include(Fe,e),a.include(W,e),a.include(e.instancedDoublePrecision?Pa:Ga,e),o.include(H,e),a.include(Ta,e),me(o,e),Ie(o),Ve(o),Be(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new he("ambient",b=>b.ambient),new he("diffuse",b=>b.diffuse),new G("opacity",b=>b.opacity),new G("layerOpacity",b=>b.layerOpacity)),y&&o.uniforms.add(new $("tex",b=>b.texture)),a.include(Sa,e),o.include(je,e),o.include(Ra),ue(o),o.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${y?`texture(tex, ${I?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(y,`${v(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${O?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":M?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      ${v(h,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${v(S,`vec3 normalGround = ${M?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${S?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(h,i`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${h||g?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${v(h,", 1.0")});`)}return a.include(Ea,e),a}const Gt=Object.freeze(Object.defineProperty({__proto__:null,build:ja},Symbol.toStringTag,{value:"Module"}));class At extends Fa{constructor(a,t){super(a,t,new ge(Gt,()=>pe(()=>Promise.resolve().then(()=>Zt),void 0))),this.type="RealisticTreeTechnique"}}class Cr extends Wo{constructor(a,t){super(a,Dt),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[$e.OPAQUE_MATERIAL,r=>(Ue(r)||Ce(r))&&!this.transparent],[$e.TRANSPARENT_MATERIAL,r=>(Ue(r)||Ce(r))&&this.transparent&&this.parameters.writeDepth],[$e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,r=>(so(r)||Ce(r))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Ft(this.parameters),this._configuration=new u(t.spherical)}isVisibleForOutput(a){return a!==x.Shadow&&a!==x.ShadowExcludeHighlight&&a!==x.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:a,colorMixMode:t,opacity:r,externalColor:o}=this.parameters;return a*(t==="replace"?1:r)*(t==="ignore"||isNaN(o[3])?1:o[3])>=oe}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!na(this.parameters.emissiveBaseColor,_e)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===X.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===X.Color)}getConfiguration(a,t){const{parameters:r,_configuration:o}=this,{treeRendering:s,doubleSided:l,doubleSidedType:n}=r;return super.getConfiguration(a,t,this._configuration),o.hasNormalTexture=!s&&!!r.normalTextureId,o.hasColorTexture=!!r.textureId,o.hasVertexTangents=!s&&r.hasVertexTangents,o.instanced=r.isInstanced,o.instancedDoublePrecision=r.instancedDoublePrecision,o.vvSize=!!r.vvSize,o.hasVerticalOffset=r.verticalOffset!=null,o.hasScreenSizePerspective=r.screenSizePerspective!=null,o.hasSlicePlane=r.hasSlicePlane,o.alphaDiscardMode=r.textureAlphaMode,o.normalType=s?w.Attribute:r.normalType,o.transparent=this.transparent,o.writeDepth=r.writeDepth,o.customDepthTest=r.customDepthTest??re.Less,o.hasOccludees=t.hasOccludees,o.cullFace=r.hasSlicePlane?te.None:r.cullFace,o.cullAboveTerrain=t.cullAboveTerrain,o.hasModelTransformation=!s&&r.modelTransformation!=null,o.hasVertexColors=r.hasVertexColors,o.hasSymbolColors=r.hasSymbolColors,o.doubleSidedMode=s?T.WindingOrder:l&&n==="normal"?T.View:l&&n==="winding-order"?T.WindingOrder:T.None,o.instancedColor=r.hasInstancedColor,ae(a)?(o.terrainDepthTest=t.terrainDepthTest,o.receiveShadows=r.receiveShadows,o.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&t.ssao!=null):(o.terrainDepthTest=!1,o.receiveShadows=o.receiveAmbientOcclusion=!1),o.vvColor=!!r.vvColor,o.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,o.pbrMode=r.usePBR?r.isSchematic?p.Schematic:p.Normal:p.Disabled,o.hasMetallicRoughnessTexture=!s&&!!r.metallicRoughnessTextureId,o.emissionSource=s?P.None:r.emissiveTextureId!=null&&r.emissiveSource===X.Emissive?P.Texture:r.usePBR?r.emissiveSource===X.Emissive?P.EmissiveColor:P.SymbolColor:P.None,o.hasOcclusionTexture=!s&&!!r.occlusionTextureId,o.offsetBackfaces=!(!this.transparent||!r.offsetTransparentBackfaces),o.oitPass=t.oitPass,o.enableOffset=t.camera.relativeElevation<ko,o.snowCover=t.snowCover,o.hasBloom=lo(a),o.hasColorTextureTransform=!!r.colorTextureTransformMatrix,o.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,o.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,o.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,o.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,o}intersect(a,t,r,o,s,l){if(this.parameters.verticalOffset!=null){const n=r.camera;k(ze,t[12],t[13],t[14]);let c=null;switch(r.viewingMode){case ke.Global:c=oo(ra,ze);break;case ke.Local:c=eo(ra,Ht)}let h=0;const M=ye(Wt,ze,n.eye),g=to(M),S=qe(M,M,1/g);let y=null;this.parameters.screenSizePerspective&&(y=ro(c,S)),h+=qo(n,g,this.parameters.verticalOffset,y??0,this.parameters.screenSizePerspective),qe(c,c,h),io(Ee,c,r.transform.inverseRotation),o=ye(Vt,o,Ee),s=ye(Bt,s,Ee)}Uo(a,r,o,s,Zo(r.verticalOffset),l)}createGLMaterial(a){return new Rt(a)}createBufferWriter(){return new Jo(this._vertexBufferLayout)}get transparent(){return jt(this.parameters)}}class Rt extends Yo{constructor(a){super({...a,...a.material.parameters})}beginSlot(a){this._material.setParameters({receiveShadows:a.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=a.camera.viewInverseTransposeMatrix;return k(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?At:Fa,a)}}class Dt extends _t{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Ft(e){const a=no().vec3f(f.POSITION);return e.normalType===w.Compressed?a.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):a.vec3f(f.NORMAL),e.hasVertexTangents&&a.vec4f(f.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&a.vec2f16(f.UV0),e.hasVertexColors&&a.vec4u8(f.COLOR),e.hasSymbolColors&&a.vec4u8(f.SYMBOLCOLOR),Xo()&&a.vec4u8(f.OLIDCOLOR),a}function jt(e){const{drivenOpacity:a,opacity:t,externalColor:r,layerOpacity:o,texture:s,textureId:l,textureAlphaMode:n,colorMixMode:c}=e,h=r[3];return a||t<1&&c!=="replace"||h<1&&c!=="ignore"||o<1||(s!=null||l!=null)&&n!==N.Opaque&&n!==N.Mask&&c!=="replace"}const Vt=z(),Bt=z(),Ht=ao(0,0,1),ra=z(),Ee=z(),ze=z(),Wt=z(),kt=Object.freeze(Object.defineProperty({__proto__:null,build:za},Symbol.toStringTag,{value:"Module"})),qt=Object.freeze(Object.defineProperty({__proto__:null,build:Ia,getRadius:we},Symbol.toStringTag,{value:"Module"})),Ut=Object.freeze(Object.defineProperty({__proto__:null,build:Da},Symbol.toStringTag,{value:"Module"})),Zt=Object.freeze(Object.defineProperty({__proto__:null,build:ja},Symbol.toStringTag,{value:"Module"}));export{Dt as H,_a as L,jt as Q,Cr as W,xt as a,Ke as b,tt as c,Fe as d,nt as e,Qo as f,Be as g,Ga as h,zt as i,T as j,yr as k,vt as m,dr as n,ur as o,Mr as r,mr as s,et as t,Ve as v};
