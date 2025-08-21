import{aP as R,i9 as it,i0 as ht,fJ as ri,fW as K,fZ as at,h_ as Ye,aR as qe,vz as si,fY as B,fG as ze,au as ni,bo as ie,f0 as oi,hI as li,e9 as ci,hi as ft,dL as di,ar as T,oi as pi,b7 as hi,kq as fi,_ as ui,jy as ut,du as je,am as Ut,oh as mi,vH as ue,fE as Ee,ba as mt,fH as We,fU as vi,vR as gi,on as Si,ie as Ti,fd as Xe,ch as _i,aw as Ei,ga as bi,vS as yi}from"./index-cGsjYgnw.js";import{t as Oi}from"./orientedBoundingBox-B5-jGkVl.js";import{aH as Ai,aI as Ri,aJ as xi,g as Z,z as Mt,A as jt,B as Wt,C as _,ab as Se,aK as vt,c as Ci,$ as Li,q as rt,w as st,h as Di,f as Qe,aL as Pi,e as Ii,a as $i,_ as wi,a9 as Ni,aM as zi,o as Fi,at as Ui,au as Mi,b as ji,k as me,v as Wi,x as Vi,u as gt,aN as Bi,aw as St,ax as ki,ay as Tt,az as Ce,aA as Hi,aB as Gi,aC as Ji,F as Zi,aO as Yi,aP as _t,aQ as qi,aR as Xi,aS as Et,E as Q,D as Qi,K as fe,O as Vt,aF as Ki,aG as ea,aT as bt,p as ta,Y as ia}from"./OutputColorHighlightOID.glsl-pO7ykQqY.js";import{e as Ne,r as aa}from"./mat4f64-q_b6UJoq.js";import{U as yt,E as ra}from"./sphere-Fi8gi249.js";import{m as sa,p as Le,M as Ue,V as q,O as Ot}from"./plane-HiwvP9tU.js";import{t as na}from"./basicInterfaces-CZwQPxTp.js";import{s as oa,n as la,t as ca}from"./BufferView-UaDNtq90.js";import{E as da,e as d}from"./VertexAttribute-B3BTnNfN.js";import{b as pa}from"./Octree-BvSBVBQF.js";import{j as De}from"./frustum-8atK0_DA.js";import{M as ha,h as Ve,v as Bt,B as fa}from"./lineSegment-CdImpY8L.js";import{O as ua}from"./InterleavedLayout-Dt7Xk85W.js";import{n as Ke,u as _e,i as ma,S as va,s as At,e as ga}from"./ShaderOutput-Bdd80V3g.js";import{B as Pe,g as Be,c as Rt}from"./renderState-BEh_Q5tn.js";import{m as Sa}from"./computeTranslationToOriginAndRotation-BpriSjts.js";import{t as Ta,c as kt}from"./dehydratedFeatureUtils-Cy6Rpke8.js";import{u as _a}from"./hydratedFeatures-BZUOXjjw.js";import{n as c,t as nt}from"./glsl-Cj7KC756.js";import"./BindType-BBwFZqyN.js";import{i as Ea}from"./ShaderBuilder-Cba1LVoe.js";var xt,Ct,Lt;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(xt||(xt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(Ct||(Ct={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(Lt||(Lt={}));var Fe;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Fe||(Fe={}));function ba(t,e){return t==null&&(t=[]),t.push(e),t}function ya(t,e){if(t==null)return null;const i=t.filter(a=>a!==e);return i.length===0?null:i}function zr(t,e,i,a,r){Ie[0]=t.get(e,0),Ie[1]=t.get(e,1),Ie[2]=t.get(e,2),Ai(Ie,se,3),i.set(r,0,se[0]),a.set(r,0,se[1]),i.set(r,1,se[2]),a.set(r,1,se[3]),i.set(r,2,se[4]),a.set(r,2,se[5])}const Ie=R(),se=new Float32Array(6);let Oa=class{constructor(e={}){this.id=it(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new Ht),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){oa(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const i of this._highlightIds)e.addHighlight(i);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];if(i){for(const a of this._highlightIds)i.removeHighlight(a);this._emit("geometryRemoved",{object:this,geometry:i}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,a=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:a}),da(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new Ri;for(const i of this._geometries)i.occludees=ba(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=ya(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new xi(e);for(const a of this._geometries)a.addHighlight(i);return this._emit("highlightChanged",this),this._highlightIds.add(i),i}removeHighlight(e){this._highlightIds.delete(e);for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===na.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return ht(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Ne()){return ht(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new Dt,this._validateBoundingVolume(this._bvWorldSpace,be.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new Dt,this._validateBoundingVolume(this._bvObjectSpace,be.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const a=i===be.ObjectSpace;for(const r of this._geometries){const s=r.boundingInfo;s&&Aa(s,e,a?r.transformation:this.getCombinedShaderTransformation(r))}ri(yt(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const s=r.boundingInfo;if(s==null)continue;const o=a?r.transformation:this.getCombinedShaderTransformation(r),n=sa(o);K(Pt,s.center,o);const l=at(Pt,yt(e.bounds)),p=s.radius*n;e.bounds[3]=Math.max(e.bounds[3],l+p)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,i){var a;(a=this.layer)==null||a.events.emit(e,i)}get geometries(){return this._geometries}get transformation(){return this._transformation??aa}set transformation(e){this._transformation=Ye(this._transformation??Ne(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ye(this._shaderTransformation??Ne(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};class Ht{constructor(){this.min=qe(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=qe(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}let Dt=class extends Ht{constructor(){super(...arguments),this.bounds=ra()}};function Aa(t,e,i){const a=t.bbMin,r=t.bbMax;if(si(i)){const s=B(Ra,i[12],i[13],i[14]);ze(W,a,s),ze(J,r,s);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],W[o]),e.max[o]=Math.max(e.max[o],J[o]);return}if(K(W,a,i),ni(a,r))for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],W[s]),e.max[s]=Math.max(e.max[s],W[s]);else{K(J,r,i);for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],W[s],J[s]),e.max[s]=Math.max(e.max[s],W[s],J[s]);for(let s=0;s<3;++s){ie(W,a),ie(J,r),W[s]=r[s],J[s]=a[s],K(W,W,i),K(J,J,i);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],W[o],J[o]),e.max[o]=Math.max(e.max[o],W[o],J[o])}}}const Ra=R(),W=R(),J=R(),Pt=R();var be;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(be||(be={}));const xa=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Ca=class{constructor(e,i,a=""){this.stage=e,this.apiLayerViewUid=a,this.id=it(),this.events=new oi,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new li,this._objects=new Map,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??Fe.ASYNC,e.addLayer(this);for(const r of xa)this._handles.add(this.events.on(r,s=>e.handleEvent(r,s)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return ci(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(ft(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const i of e)this._objects.set(i.id,i),i.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const i=new Array;for(const a of e)this._objects.delete(a.id)&&i.push(a);if(i.length!==0&&(this.events.emit("layerObjectsRemoved",i),i.forEach(a=>a.layer=null),this._octree!=null)){for(let a=0;a<i.length;)ft(this._objectsAdded,i[a])?(i[a]=i[i.length-1],i.length-=1):++a;this._octree.remove(i)}}sync(){this.updatePolicy!==Fe.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new pa(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=di(this._octree),this._objectsAdded.length=0}get test(){}},La=class{constructor(e,i){this.vec3=e,this.id=i}};function It(t,e,i,a){return new La(qe(t,e,i),a)}var H;function Da(t,e){const{attributes:i,varyings:a,vertex:r,fragment:s}=t,{animation:o}=e;o!==H.None&&(i.add(d.TIMESTAMPS,"vec3"),a.add("vTimeStamp","float"),a.add("vFirstTime","float"),a.add("vLastTime","float"),r.main.add(c`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;`),s.uniforms.add(new Z("timeElapsed",n=>n.timeElapsed)),s.uniforms.add(new Z("trailLength",n=>n.trailLength)),o===H.FadingTrail&&s.constants.add("decayRate","float",2.3),s.code.add(c`
    float getTrailOpacity(float x) {
      ${Pa(o)}
    }`),s.code.add(c`vec4 animate(vec4 color) {
float totalTimeWithTrail = vLastTime - vFirstTime + trailLength;
float timeAtHead = mod(timeElapsed - vFirstTime, totalTimeWithTrail) + vFirstTime;
float t = timeAtHead - vTimeStamp;
vec4 animatedColor = color * step(0.0, t);
animatedColor.a *= getTrailOpacity(t / trailLength);
return animatedColor;
}`))}function Pa(t){switch(t){case H.FixedTrail:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case H.FadingTrail:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;case H.FullTrail:default:return"return 1.0;"}}(function(t){t[t.None=0]="None",t[t.FullTrail=1]="FullTrail",t[t.FixedTrail=2]="FixedTrail",t[t.FadingTrail=3]="FadingTrail",t[t.COUNT=4]="COUNT"})(H||(H={}));var ce,ye;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ce||(ce={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(ye||(ye={}));let V=class extends Mt{constructor(){super(...arguments),this.space=ce.Screen,this.anchor=ye.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=jt.None,this.emissionSource=Wt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1,this.overlayEnabled=!1,this.snowCover=!1}get draped(){return this.space===ce.Draped}};T([_({count:ce.COUNT})],V.prototype,"space",void 0),T([_({count:ye.COUNT})],V.prototype,"anchor",void 0),T([_()],V.prototype,"occluder",void 0),T([_()],V.prototype,"writeDepth",void 0),T([_()],V.prototype,"hideOnShortSegments",void 0),T([_()],V.prototype,"hasCap",void 0),T([_()],V.prototype,"hasTip",void 0),T([_()],V.prototype,"vvSize",void 0),T([_()],V.prototype,"vvColor",void 0),T([_()],V.prototype,"vvOpacity",void 0),T([_()],V.prototype,"hasOccludees",void 0),T([_()],V.prototype,"terrainDepthTest",void 0),T([_()],V.prototype,"cullAboveTerrain",void 0);const $t=8;function Ia(t,e){const{vertex:i,attributes:a}=t;i.uniforms.add(new Z("intrinsicWidth",r=>r.width)),e.vvSize?(a.add(d.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Se("vvSizeMinSize",r=>r.vvSize.minSize),new Se("vvSizeMaxSize",r=>r.vvSize.maxSize),new Se("vvSizeOffset",r=>r.vvSize.offset),new Se("vvSizeFactor",r=>r.vvSize.factor),new Se("vvSizeFallback",r=>r.vvSize.fallback)),i.code.add(c`float getSize() {
if (isnan(sizeFeatureAttribute)) {
return vvSizeFallback.x;
}
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(a.add(d.SIZE,"float"),i.code.add(c`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(a.add(d.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new vt("vvOpacityValues",r=>r.vvOpacity.values,$t),new vt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,$t),new Z("vvOpacityFallback",r=>r.vvOpacity.fallback,{supportsNaN:!0})),i.code.add(c`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${nt(e.vvColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):i.code.add(c`vec4 applyOpacity(vec4 color) {
return color;
}`),e.vvColor?(t.include(Ci,e),a.add(d.COLORFEATUREATTRIBUTE,"float"),i.code.add(c`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(a.add(d.COLOR,"vec4"),i.code.add(c`vec4 getColor() {
return applyOpacity(color);
}`))}function Gt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function $a(t){if(t==null)return 1;const e=Gt(t);return Math.floor(e.reduce((i,a)=>i+a))}function wa(t){return Gt(t).reduce((e,i)=>Math.max(e,i))}function Na(t){return t==null?pi:t.length===4?t:hi(za,t[0],t[1],t[2],1)}const za=fi();function Fa(t,e){if(!e.stippleEnabled)return void t.fragment.code.add(c`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(e.draped&&e.stipplePreferContinuous),{vertex:a,fragment:r}=t;r.include(Ta),e.draped||(Li(a,e),a.uniforms.add(new rt("worldToScreenPerDistanceRatio",({camera:s})=>1/s.perScreenPixelRatio)).code.add(c`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),a.code.add(c`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${c.float(Ma)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),a.code.add(c`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),a.code.add(c`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),st(a),a.code.add(c`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),r.uniforms.add(new Di("stipplePatternTexture",s=>s.stippleTexture),new Z("stipplePatternSDFNormalizer",s=>Ua(s.stipplePattern)),new Z("stipplePatternPixelSizeInv",s=>1/Jt(s))),e.stippleOffColorEnabled&&r.uniforms.add(new Qe("stippleOffColor",s=>Na(s.stippleOffColor))),r.code.add(c`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),r.code.add(c`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${nt(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function Ua(t){return t?(Math.floor(.5*(wa(t)-1))+.5)/t.pixelRatio:1}function Jt(t){const e=t.stipplePattern;return e?$a(t.stipplePattern)/e.pixelRatio:1}const Ma=.4,Zt=64,ja=Zt/2,Wa=ja/5,Va=Zt/Wa,Vr=.25;function Ba(t,e){const i=t.vertex;st(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Va).code.add(c`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ce.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new rt("perRenderPixelRatio",a=>a.camera.perRenderPixelRatio)),i.code.add(c`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var de;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(de||(de={}));let A=class extends Mt{constructor(){super(...arguments),this.capType=de.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.animation=H.FixedTrail,this.textureCoordinateType=jt.None,this.emissionSource=Wt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}};T([_({count:de.COUNT})],A.prototype,"capType",void 0),T([_()],A.prototype,"hasPolygonOffset",void 0),T([_()],A.prototype,"writeDepth",void 0),T([_()],A.prototype,"draped",void 0),T([_()],A.prototype,"stippleEnabled",void 0),T([_()],A.prototype,"stippleOffColorEnabled",void 0),T([_()],A.prototype,"stipplePreferContinuous",void 0),T([_()],A.prototype,"roundJoins",void 0),T([_()],A.prototype,"applyMarkerOffset",void 0),T([_()],A.prototype,"vvSize",void 0),T([_()],A.prototype,"vvColor",void 0),T([_()],A.prototype,"vvOpacity",void 0),T([_()],A.prototype,"falloffEnabled",void 0),T([_()],A.prototype,"innerColorEnabled",void 0),T([_()],A.prototype,"hasOccludees",void 0),T([_()],A.prototype,"occluder",void 0),T([_()],A.prototype,"terrainDepthTest",void 0),T([_()],A.prototype,"cullAboveTerrain",void 0),T([_()],A.prototype,"wireframe",void 0),T([_()],A.prototype,"discardInvisibleFragments",void 0),T([_()],A.prototype,"objectAndLayerIdColorInstanced",void 0),T([_({count:H.COUNT})],A.prototype,"animation",void 0);const Oe=1;function Yt(t){const e=new Ea,{attributes:i,varyings:a,vertex:r,fragment:s}=e,{applyMarkerOffset:o,draped:n,output:l,capType:p,stippleEnabled:m,falloffEnabled:E,roundJoins:f,wireframe:u,innerColorEnabled:S,animation:b}=t;s.include(Pi),e.include(Ia,t),e.include(Fa,t),e.include(Ii,t),e.include($i,t),e.include(Da,t);const y=o&&!n;y&&(r.uniforms.add(new Z("markerScale",h=>h.markerScale)),e.include(Ba,{space:ce.World})),wi(r,t),r.uniforms.add(new Ni("inverseProjectionMatrix",h=>h.camera.inverseProjectionMatrix),new zi("nearFar",h=>h.camera.nearFar),new Z("miterLimit",h=>h.join!=="miter"?0:h.miterLimit),new Fi("viewport",h=>h.camera.fullViewport)),r.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(d.POSITION,"vec3"),i.add(d.PREVIOUSDELTA,"vec4"),i.add(d.NEXTDELTA,"vec4"),i.add(d.LINEPARAMETERS,"vec2"),i.add(d.U0,"float"),a.add("vColor","vec4"),a.add("vpos","vec3",{invariant:!0}),a.add("vLineDistance","float"),a.add("vLineWidth","float");const G=m;G&&a.add("vLineSizeInv","float");const j=p===de.ROUND,v=m&&j,x=E||v;x&&a.add("vLineDistanceNorm","float"),j&&(a.add("vSegmentSDF","float"),a.add("vReverseSegmentSDF","float")),r.code.add(c`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),r.code.add(c`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),r.code.add(c`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),st(r),r.constants.add("aaWidth","float",m?0:1).main.add(c`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y)-3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(lineParameters.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${G?c`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),y&&r.main.add(c`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),r.main.add(c`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(m||j)&&r.main.add(c`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${j?c`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),r.main.add(c`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?r.main.add(c`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${m?c`min(1.0, subdivisionFactor * ${c.float((Oe+2)/(Oe+1))})`:c`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):r.main.add(c`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const L=p!==de.BUTT;return r.main.add(c`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${L?c`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),r.main.add(c`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(lineParameters.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${x?c`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),j&&r.main.add(c`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),m&&(n?r.uniforms.add(new rt("worldToScreenRatio",h=>1/h.screenToPCSRatio)):r.main.add(c`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.main.add(c`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),n?r.main.add(c`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.main.add(c`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.uniforms.add(new Z("stipplePatternPixelSize",h=>Jt(h))),r.main.add(c`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),r.main.add(c`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${u&&!n?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(Ui,t),e.include(Mi,t),s.include(ji),s.main.add(c`discardBySlice(vpos);
discardByTerrainDepth();`),u?s.main.add(c`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(j&&s.main.add(c`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${c.float(me)}) {
          discard;
        }
      `),v?s.main.add(c`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${c.float(me)}, stippleCoverage);
      `):s.main.add(c`float stippleAlpha = getStippleAlpha();`),l!==Ke.ObjectAndLayerIdColor&&s.main.add(c`discardByStippleAlpha(stippleAlpha, ${c.float(me)});`),s.uniforms.add(new Qe("intrinsicColor",h=>h.color)),s.main.add(c`vec4 color = intrinsicColor * vColor;`),S&&(s.uniforms.add(new Qe("innerColor",h=>h.innerColor??h.color),new Z("innerWidth",(h,g)=>h.innerWidth*g.camera.pixelRatio)),s.main.add(c`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),s.main.add(c`vec4 finalColor = blendStipple(color, stippleAlpha);`),E&&(s.uniforms.add(new Z("falloff",h=>h.falloff)),s.main.add(c`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),m||s.main.add(c`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),b!==H.None&&s.main.add(c`
        finalColor = animate(finalColor);

        ${nt(l!==Ke.ObjectAndLayerIdColor,c`
            if (finalColor.a <= ${c.float(me)}) {
              discard;
            }`)}
      `)),s.main.add(c`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),e}const ka=Object.freeze(Object.defineProperty({__proto__:null,build:Yt,ribbonlineNumRoundJoinSubdivisions:Oe},Symbol.toStringTag,{value:"Module"}));let Ha=class extends Wi{constructor(e,i){super(e,i,new Vi(ka,()=>ui(()=>Promise.resolve().then(()=>ur),void 0)),qt),this.primitiveType=i.wireframe?ut.LINES:ut.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:a,output:r,hasOccludees:s,hasPolygonOffset:o}=e,n=a===gt.NONE,l=a===gt.FrontFace;return Pe({blending:_e(r)?Ji(a):null,depthTest:{func:Gi(a)},depthWrite:Hi(e),drawBuffers:Ce(r,Zi(a,r)),colorWrite:Be,stencilWrite:s?Tt:null,stencilTest:s?i?St:ki:null,polygonOffset:n||l?o?wt:null:Bi})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?wt:null,{output:a,hasOccludees:r}=e;this._occluderPipelineTransparent=Pe({blending:Rt,polygonOffset:i,depthTest:_t,depthWrite:null,colorWrite:Be,stencilWrite:null,stencilTest:r?Yi:null,drawBuffers:Ce(a)}),this._occluderPipelineOpaque=Pe({blending:Rt,polygonOffset:i,depthTest:r?_t:Et,depthWrite:null,colorWrite:Be,stencilWrite:r?Xi:null,stencilTest:r?qi:null,drawBuffers:Ce(a)}),this._occluderPipelineMaskWrite=Pe({blending:null,polygonOffset:i,depthTest:Et,depthWrite:null,colorWrite:null,stencilWrite:r?Tt:null,stencilTest:r?St:null,drawBuffers:Ce(a)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case Q.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case Q.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const wt={factor:0,units:-4},qt=new Map([[d.POSITION,0],[d.PREVIOUSDELTA,1],[d.NEXTDELTA,2],[d.U0,3],[d.LINEPARAMETERS,4],[d.COLOR,5],[d.COLORFEATUREATTRIBUTE,5],[d.SIZE,6],[d.SIZEFEATUREATTRIBUTE,6],[d.OPACITYFEATUREATTRIBUTE,7],[d.OLIDCOLOR,8],[d.TIMESTAMPS,9]]);var M;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(M||(M={}));class Ga extends Qi{constructor(e){super(e,Za),this._configuration=new A,this.vertexAttributeLocations=qt,this.produces=new Map([[Q.OPAQUE_MATERIAL,i=>ma(i)||_e(i)&&this.parameters.renderOccluded===fe.OccludeAndTransparentStencil],[Q.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>va(i)],[Q.OCCLUDER_MATERIAL,i=>At(i)&&this.parameters.renderOccluded===fe.OccludeAndTransparentStencil],[Q.TRANSPARENT_OCCLUDER_MATERIAL,i=>At(i)&&this.parameters.renderOccluded===fe.OccludeAndTransparentStencil],[Q.TRANSPARENT_MATERIAL,i=>_e(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==fe.OccludeAndTransparentStencil],[Q.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>_e(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==fe.OccludeAndTransparentStencil],[Q.DRAPED_MATERIAL,i=>ga(i)]])}getConfiguration(e,i){super.getConfiguration(e,i,this._configuration),this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===Q.DRAPED_MATERIAL;const a=this.parameters.stipplePattern!=null&&e!==Ke.Highlight;return this._configuration.stippleEnabled=a,this._configuration.stippleOffColorEnabled=a&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=a&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&qa(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===fe.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest&&_e(e),this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration}get visible(){var e;return this.parameters.color[3]>=me||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>me}setParameters(e,i){e.animation=this.parameters.animation,super.setParameters(e,i)}intersectDraped({attributes:e,screenToWorldRatio:i},a,r,s,o){if(!a.options.selectionMode)return;const n=e.get(d.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const y=e.get(d.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(y)?l*=this.parameters.vvSize.fallback[0]:l*=je(this.parameters.vvSize.offset[0]+y*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(l*=n.data[0]);const p=r[0],m=r[1],E=(l/2+4)*i;let f=Number.MAX_VALUE,u=0;const S=e.get(d.POSITION).data,b=et(this.parameters,e)?S.length-2:S.length-5;for(let y=0;y<b;y+=3){const G=S[y],j=S[y+1],v=(y+3)%S.length,x=p-G,L=m-j,h=S[v]-G,g=S[v+1]-j,pe=je((h*x+g*L)/(h*h+g*g),0,1),$=h*pe-x,he=g*pe-L,Y=$*$+he*he;Y<f&&(f=Y,u=y/3)}f<E*E&&s(o.distance,o.normal,u)}intersect(e,i,a,r,s,o){const{options:n,camera:l,rayBegin:p,rayEnd:m}=a;if(!n.selectionMode||!e.visible||!l)return;if(!la(i))return void Ut.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const E=e.attributes,f=E.get(d.POSITION).data;let u=this.parameters.width;if(this.parameters.vvSize){const v=E.get(d.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(v)||(u*=je(this.parameters.vvSize.offset[0]+v*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else E.has(d.SIZE)&&(u*=E.get(d.SIZE).data[0]);const S=Xa;mi(S,a.point);const b=u*l.pixelRatio/2+4*l.pixelRatio;B(Te[0],S[0]-b,S[1]+b,0),B(Te[1],S[0]+b,S[1]+b,0),B(Te[2],S[0]+b,S[1]-b,0),B(Te[3],S[0]-b,S[1]-b,0);for(let v=0;v<4;v++)if(!l.unprojectFromRenderScreen(Te[v],ee[v]))return;Le(l.eye,ee[0],ee[1],He),Le(l.eye,ee[1],ee[2],Ge),Le(l.eye,ee[2],ee[3],Je),Le(l.eye,ee[3],ee[0],Ze);let y=Number.MAX_VALUE,G=0;const j=et(this.parameters,E)?f.length-2:f.length-5;for(let v=0;v<j;v+=3){N[0]=f[v]+i[12],N[1]=f[v+1]+i[13],N[2]=f[v+2]+i[14];const x=(v+3)%f.length;if(z[0]=f[x]+i[12],z[1]=f[x+1]+i[13],z[2]=f[x+2]+i[14],q(He,N)<0&&q(He,z)<0||q(Ge,N)<0&&q(Ge,z)<0||q(Je,N)<0&&q(Je,z)<0||q(Ze,N)<0&&q(Ze,z)<0)continue;if(l.projectToRenderScreen(N,oe),l.projectToRenderScreen(z,le),oe[2]<0&&le[2]>0){Ee(X,N,z);const h=l.frustum,g=-q(h[De.NEAR],N)/mt(X,Ot(h[De.NEAR]));We(X,X,g),ze(N,N,X),l.projectToRenderScreen(N,oe)}else if(oe[2]>0&&le[2]<0){Ee(X,z,N);const h=l.frustum,g=-q(h[De.NEAR],z)/mt(X,Ot(h[De.NEAR]));We(X,X,g),ze(z,z,X),l.projectToRenderScreen(z,le)}else if(oe[2]<0&&le[2]<0)continue;oe[2]=0,le[2]=0;const L=ha(Ve(oe,le,Ft),S);L<y&&(y=L,ie(Nt,N),ie(zt,z),G=v/3)}if(y<b*b){let v=Number.MAX_VALUE;if(fa(Ve(Nt,zt,Ft),Ve(p,m,Qa),ne)){Ee(ne,ne,p);const x=vi(ne);We(ne,ne,1/x),v=x/at(p,m)}o(v,ne,G)}}get _layout(){const e=ua().vec3f(d.POSITION).vec4f16(d.PREVIOUSDELTA).vec4f16(d.NEXTDELTA).f32(d.U0).vec2f16(d.LINEPARAMETERS);return this.parameters.vvColor?e.f32(d.COLORFEATUREATTRIBUTE):e.vec4u8(d.COLOR,{glNormalized:!0}),this.parameters.vvSize?e.f32(d.SIZEFEATUREATTRIBUTE):e.f32(d.SIZE),this.parameters.vvOpacity&&e.f32(d.OPACITYFEATUREATTRIBUTE),Vt()&&e.vec4u8(d.OLIDCOLOR),this.parameters.hasAnimation&&e.vec3f16(d.TIMESTAMPS),e}createBufferWriter(){return new Ya(this._layout,this.parameters)}createGLMaterial(e){return new Ja(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){const{hasAnimation:i,animationSpeed:a}=this.parameters;return!!i&&(this.setParameters({timeElapsed:gi(e.time)*a},!1),e.dt>0)}}class Ja extends ea{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(Ha,e)}}class Za extends Ki{constructor(){super(...arguments),this.width=0,this.color=Si,this.join="miter",this.cap=de.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=0,this.animation=H.None,this.animationSpeed=1,this.trailLength=1}get transparent(){var e;return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}get hasAnimation(){return this.animation!==H.None}}class Ya{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i;const a=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=a;break;case"round":this.numJoinSubdivisions=Oe+a}}_isClosed(e){return et(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const a=e.get(d.POSITION).indices.length/2+1,r=this._isClosed(e);let s=r?2:2*2;return s+=((r?a:a-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),s+=2,this._parameters.wireframe&&(s=2+4*(s-2)),s}write(e,i,a,r,s,o){var lt,ct,dt,pt;const n=a.get(d.POSITION),l=n.indices,p=n.data.length/3,m=(lt=a.get(d.DISTANCETOSTART))==null?void 0:lt.data;l&&l.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");const E=(this.vertexBufferLayout.fields.has(d.SIZEFEATUREATTRIBUTE)?(ct=a.get(d.SIZEFEATUREATTRIBUTE))==null?void 0:ct.data[0]:(dt=a.get(d.SIZE))==null?void 0:dt.data[0])??1;let f=[1,1,1,1],u=0;const S=this.vertexBufferLayout.fields.has(d.COLORFEATUREATTRIBUTE);S?u=a.get(d.COLORFEATUREATTRIBUTE).data[0]:a.has(d.COLOR)&&(f=a.get(d.COLOR).data);const b=(pt=a.get(d.TIMESTAMPS))==null?void 0:pt.data,y=b&&this.vertexBufferLayout.fields.has(d.TIMESTAMPS),G=this.vertexBufferLayout.fields.has(d.OPACITYFEATUREATTRIBUTE),j=G?a.get(d.OPACITYFEATUREATTRIBUTE).data[0]:0,v=new Float32Array(s.buffer),x=ca(s.buffer),L=new Uint8Array(s.buffer),h=this.vertexBufferLayout.stride/4;let g=o*h;const pe=g;let $=0;const he=m?(D,w,ae)=>$=m[ae]:(D,w,ae)=>$+=at(D,w),Y=v.BYTES_PER_ELEMENT/x.BYTES_PER_ELEMENT,ot=4/Y,k=(D,w,ae,re,Re,ti,ii,ai)=>{v[g++]=w[0],v[g++]=w[1],v[g++]=w[2],bt(D,w,x,g*Y),g+=ot,bt(ae,w,x,g*Y),g+=ot,v[g++]=ai;let te=g*Y;if(x[te++]=Re,x[te++]=ti,g=Math.ceil(te/Y),S)v[g]=u;else{const U=Math.min(4*ii,f.length-4),xe=4*g;L[xe]=255*f[U],L[xe+1]=255*f[U+1],L[xe+2]=255*f[U+2],L[xe+3]=255*f[U+3]}if(g++,v[g++]=E,G&&(v[g++]=j),Vt()){let U=4*g;r?(L[U++]=r[0],L[U++]=r[1],L[U++]=r[2],L[U++]=r[3]):(L[U++]=0,L[U++]=0,L[U++]=0,L[U++]=0),g=Math.ceil(.25*U)}y&&(te=g*Y,x[te++]=re[0],x[te++]=re[1],x[te++]=re[2],g=Math.ceil(te/Y))};g+=h,B(O,n.data[0],n.data[1],n.data[2]),y&&B(F,b[0],b[1],b[2]),e&&K(O,O,e);const Ae=this._isClosed(a);if(Ae){const D=n.data.length-3;B(I,n.data[D],n.data[D+1],n.data[D+2]),e&&K(I,I,e)}else B(C,n.data[3],n.data[4],n.data[5]),e&&K(C,C,e),k(O,O,C,F,1,M.LEFT_CAP_START,0,0),k(O,O,C,F,1,M.RIGHT_CAP_START,0,0),ie(I,O),ie(O,C),y&&B(F,b[3],b[4],b[5]);const Me=Ae?0:1,ge=Ae?p:p-1;for(let D=Me;D<ge;D++){const w=(D+1)%p*3;B(C,n.data[w],n.data[w+1],n.data[w+2]),e&&K(C,C,e),he(I,O,D),k(I,O,C,F,0,M.LEFT_JOIN_END,D,$),k(I,O,C,F,0,M.RIGHT_JOIN_END,D,$);const ae=this.numJoinSubdivisions;for(let re=0;re<ae;++re){const Re=(re+1)/(ae+1);k(I,O,C,F,Re,M.LEFT_JOIN_END,D,$),k(I,O,C,F,Re,M.RIGHT_JOIN_END,D,$)}k(I,O,C,F,1,M.LEFT_JOIN_START,D,$),k(I,O,C,F,1,M.RIGHT_JOIN_START,D,$),ie(I,O),ie(O,C),y&&B(F,b[w],b[w+1],b[w+2])}return Ae?(B(C,n.data[3],n.data[4],n.data[5]),e&&K(C,C,e),$=he(I,O,ge),k(I,O,C,F,0,M.LEFT_JOIN_END,Me,$),k(I,O,C,F,0,M.RIGHT_JOIN_END,Me,$)):($=he(I,O,ge),k(I,O,O,F,0,M.LEFT_CAP_END,ge,$),k(I,O,O,F,0,M.RIGHT_CAP_END,ge,$)),ke(v,pe+h,v,pe,h),g=ke(v,g-h,v,g,h),this._parameters.wireframe&&this._addWireframeVertices(s,pe,g,h),null}_addWireframeVertices(e,i,a,r){const s=new Float32Array(e.buffer,a*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,a-i);let n=0;const l=p=>n=ke(o,p,s,n,r);for(let p=0;p<o.length-1;p+=2*r)l(p),l(p+2*r),l(p+1*r),l(p+2*r),l(p+1*r),l(p+3*r)}}function ke(t,e,i,a,r){for(let s=0;s<r;s++)i[a++]=t[e++];return a}function et(t,e){return t.isClosed?e.get(d.POSITION).indices.length>2:!1}function qa(t){return t.anchor===ye.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const N=R(),z=R(),X=R(),ne=R(),Xa=R(),oe=ue(),le=ue(),Nt=R(),zt=R(),Ft=Bt(),Qa=Bt(),I=R(),O=R(),C=R(),F=R(),Te=[ue(),ue(),ue(),ue()],ee=[R(),R(),R(),R()],He=Ue(),Ge=Ue(),Je=Ue(),Ze=Ue();let Hr=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+it(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const m=It(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,m),m}const a=this._gridSize,r=Math.round(e[0]/a),s=Math.round(e[1]/a),o=Math.round(e[2]/a),n=`${r}/${s}/${o}`;let l=this._origins.get(n);const p=.5*a;if(Ee(P,e,i.vec3),P[0]=Math.abs(P[0]),P[1]=Math.abs(P[1]),P[2]=Math.abs(P[2]),P[0]<p&&P[1]<p&&P[2]<p){if(l){const m=Math.max(...P);if(Ee(P,e,l.vec3),P[0]=Math.abs(P[0]),P[1]=Math.abs(P[1]),P[2]=Math.abs(P[2]),Math.max(...P)<m)return l}return i}return l||(l=It(r*a,s*a,o*a,n),this._origins.set(n,l)),l}_drawOriginBox(e,i=Ti(1,1,0,1)){const a=window.view,r=a.stage,s=i.toString();if(!this._objects.has(s)){this._material=new Ga({width:2,color:i});const u=new Ca(r,{pickable:!1}),S=new Oa({castShadow:!1});u.add(S),this._objects.set(s,S)}const o=this._objects.get(s),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],l=n.length,p=new Array(3*l),m=new Array,E=.5*this._gridSize;for(let u=0;u<l;u++)p[3*u]=e[0]+(1&n[u]?E:-E),p[3*u+1]=e[1]+(2&n[u]?E:-E),p[3*u+2]=e[2]+(4&n[u]?E:-E),u>0&&m.push(u-1,u);Xe(p,this._originSR,0,p,a.renderSpatialReference,0,l);const f=new ta(this._material,[[d.POSITION,new Oi(p,m,3,!0)]],null,ia.Line);o.addGeometry(f)}get test(){}};const P=R();class Jr{constructor(e,i=null,a=0){this.array=e,this.spatialReference=i,this.offset=a}}function Xt(t){return"array"in t}function $e(t,e,i="ground"){if(kt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Xt(e)){let a=e.offset;return t.getElevation(e.array[a++],e.array[a++],e.array[a]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function Zr(t,e,i,a,r,s,o,n,l,p,m){const E=nr[m.mode];let f,u,S=0;if(Xe(t,e,i,a,l.spatialReference,r,n))return E!=null&&E.requiresAlignment(m)?(S=E.applyElevationAlignmentBuffer(a,r,s,o,n,l,p,m),f=s,u=o):(f=a,u=r),Xe(f,l.spatialReference,u,s,p.spatialReference,o,n)?S:void 0}function Qt(t,e,i,a,r){const s=(kt(t)?t.z:Xt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const o=$e(e,t,"ground")??0;return r.verticalDistanceToGround=0,r.sampledElevation=o,void(r.z=o)}case"relative-to-ground":{const o=$e(e,t,"ground")??0,n=i.geometryZWithOffset(s,a);return r.verticalDistanceToGround=n,r.sampledElevation=o,void(r.z=n+o)}case"relative-to-scene":{const o=$e(e,t,"scene")??0,n=i.geometryZWithOffset(s,a);return r.verticalDistanceToGround=n,r.sampledElevation=o,void(r.z=n+o)}case"absolute-height":{const o=i.geometryZWithOffset(s,a),n=$e(e,t,"ground")??0;return r.verticalDistanceToGround=o-n,r.sampledElevation=n,void(r.z=o)}default:return void(r.z=0)}}function Yr(t,e,i,a){return Qt(t,e,i,a,ve),ve.z}function qr(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:tt.UPDATE:t.onTheGroundChanged}function Xr(t){return t==="relative-to-ground"||t==="relative-to-scene"}function Qr(t){return t!=="absolute-height"}function Kr(t,e,i,a,r){Qt(e,i,r,a,ve),Ka(t,ve.verticalDistanceToGround);const s=ve.sampledElevation,o=Ye(or,t.transformation);return we[0]=e.x,we[1]=e.y,we[2]=ve.z,Sa(e.spatialReference,we,o,a.spatialReference)?t.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function Ka(t,e){for(let i=0;i<t.geometries.length;++i){const a=t.geometries[i].getMutableAttribute(d.CENTEROFFSETANDDISTANCE);a&&a.data[3]!==e&&(a.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],d.CENTEROFFSETANDDISTANCE))}}function er(t,e,i,a,r,s){let o=0;const n=s.spatialReference;e*=3,a*=3;for(let l=0;l<r;++l){const p=t[e],m=t[e+1],E=t[e+2],f=s.getElevation(p,m,E,n,"ground")??0;o+=f,i[a]=p,i[a+1]=m,i[a+2]=f,e+=3,a+=3}return o/r}function tr(t,e,i,a,r,s,o,n){let l=0;const p=n.calculateOffsetRenderUnits(o),m=n.featureExpressionInfoContext,E=s.spatialReference;e*=3,a*=3;for(let f=0;f<r;++f){const u=t[e],S=t[e+1],b=t[e+2],y=s.getElevation(u,S,b,E,"ground")??0;l+=y,i[a]=u,i[a+1]=S,i[a+2]=m==null?b+y+p:y+p,e+=3,a+=3}return l/r}function ir(t,e,i,a,r,s,o,n){let l=0;const p=n.calculateOffsetRenderUnits(o),m=n.featureExpressionInfoContext,E=s.spatialReference;e*=3,a*=3;for(let f=0;f<r;++f){const u=t[e],S=t[e+1],b=t[e+2],y=s.getElevation(u,S,b,E,"scene")??0;l+=y,i[a]=u,i[a+1]=S,i[a+2]=m==null?b+y+p:y+p,e+=3,a+=3}return l/r}function ar(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function rr(t,e,i,a,r,s,o,n){const l=n.calculateOffsetRenderUnits(o),p=n.featureExpressionInfoContext;e*=3,a*=3;for(let m=0;m<r;++m){const E=t[e],f=t[e+1],u=t[e+2];i[a]=E,i[a+1]=f,i[a+2]=p==null?u+l:l,e+=3,a+=3}return 0}class sr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var tt;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(tt||(tt={}));const nr={"absolute-height":{applyElevationAlignmentBuffer:rr,requiresAlignment:ar},"on-the-ground":{applyElevationAlignmentBuffer:er,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:tr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:ir,requiresAlignment:()=>!0}},or=Ne(),ve=new sr,we=R(),lr=()=>Ut.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function cr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function es(t,e,i,a){const r=t==null?void 0:t.expression;if(typeof r!="string")return null;const s=fr(r);if(s!=null)return{cachedResult:s};const o=await _i();Ei(i);const n=o.arcadeUtils,l=n.createSyntaxTree(r);return n.dependsOnView(l)?(a!=null&&a.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:n.createFunction(l),context:n.createExecContext(null,{sr:e}),modules:o}}}function dr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function pr(t,e){if(t!=null&&!Kt(t)){if(!e||!t.arcade)return void lr().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=_a(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function hr(t){if(t!=null){if(Kt(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function ts(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const a=i==null?void 0:i.expression;return e||a==="0"||(i=null),i??null}const is={cachedResult:0};function Kt(t){return t.cachedResult!=null}function fr(t){return t==="0"?0:null}class ei{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=bi(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const a=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?a:e+a}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const a=this.featureExpressionInfoContext;return a!=null&&(i+=hr(a)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=yi(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,a){if(e==null)return void(this._featureExpressionInfoContext=null);const r=e==null?void 0:e.arcade;r&&i!=null&&a!=null?(this._featureExpressionInfoContext=cr(e),pr(this._featureExpressionInfoContext,dr(r.modules,i,a))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new ei;return e!=null&&i.setFromElevationInfo(e),i}}const ur=Object.freeze(Object.defineProperty({__proto__:null,build:Yt,ribbonlineNumRoundJoinSubdivisions:Oe},Symbol.toStringTag,{value:"Module"}));export{Oa as A,ja as B,Fe as C,Vr as D,Ka as E,V as F,zr as G,Yr as H,$e as I,Ga as Q,sr as R,Lt as a,Ct as b,es as c,ts as d,xt as e,Qt as f,pr as g,is as h,tt as i,Xr as j,Ca as k,Hr as l,qr as m,Qr as n,ei as o,Kr as p,de as q,Jr as r,dr as s,It as t,Zr as u,ce as v,Ia as w,Ba as x,ye as y,Zt as z};
