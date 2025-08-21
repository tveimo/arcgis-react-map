import{i8 as c}from"./index-cGsjYgnw.js";import{n}from"./glsl-Cj7KC756.js";import{e as i}from"./VertexAttribute-B3BTnNfN.js";var t;function v(e,o){for(let a=0;a<4;a++)e[a]=s(o[a]);return e}function s(e){return isNaN(e)?255:e*(254/255)}(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(t||(t={}));function u(e,o){switch(o.normalType){case r.Compressed:e.attributes.add(i.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(n`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:e.attributes.add(i.NORMAL,"vec3"),e.vertex.code.add(n`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:e.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:c(o.normalType);case r.COUNT:}}var r;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(r||(r={}));export{r as a,t as n,v as o,u as t};
