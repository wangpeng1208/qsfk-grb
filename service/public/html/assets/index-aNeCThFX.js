import{d as S,C as h,a1 as P,E as k,a8 as w,l as x,_ as i,a as c,$ as j,P as _,L as N,ad as T}from"./index-CpJFga7x.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var E={content:{type:[String,Function]},default:{type:[String,Function]},disabled:{type:Boolean,default:void 0},download:{type:[String,Boolean]},hover:{type:String,default:"underline",validator:function(e){return e?["color","underline"].includes(e):!0}},href:{type:String,default:""},prefixIcon:{type:Function},size:{type:String,default:"medium",validator:function(e){return e?["small","medium","large"].includes(e):!0}},suffixIcon:{type:Function},target:{type:String,default:""},theme:{type:String,default:"default",validator:function(e){return e?["default","primary","danger","warning","success"].includes(e):!0}},underline:Boolean,onClick:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),t.push.apply(t,a)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?m(Object(t),!0).forEach(function(a){i(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}var D=S({name:"TLink",props:I({},E),emits:["click"],setup:function(e,t){var a=t.emit,l=_(),s=N(),r=h("link"),d=P(),g=d.STATUS,y=d.SIZE,p=k("classPrefix"),b=p.classPrefix,o=w(),C=x(function(){return["".concat(r.value),"".concat(r.value,"--theme-").concat(e.theme),i(i(i(i({},y.value[e.size],e.size!=="medium"),g.value.disabled,o.value),"".concat(b.value,"-is-underline"),e.underline),"".concat(r.value,"--hover-").concat(e.hover),!o.value)]}),O=function(u){o.value||a("click",u)};return function(){var f=l("default","content"),u=s("prefixIcon"),v=s("suffixIcon");return c("a",{class:j(C.value),href:o.value||!e.href?void 0:e.href,target:e.target?e.target:void 0,download:e.download?e.download:void 0,onClick:O},[u?c("span",{class:"".concat(r.value,"__prefix-icon")},[u]):null,f,v?c("span",{class:"".concat(r.value,"__suffix-icon")},[v]):null])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var L=T(D);export{L};
