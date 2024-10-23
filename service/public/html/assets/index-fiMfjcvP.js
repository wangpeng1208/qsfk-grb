import{br as j,d as z,C as w,l as p,W as x,X as y,aa as g,a5 as N,_ as o,a as u,F as C,L as _,ad as F}from"./index-CpJFga7x.js";import{a as T}from"./slot-DL8tHB3s.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var k={align:{type:String,validator:function(e){return e?["start","end","center","baseline"].includes(e):!0}},breakLine:Boolean,direction:{type:String,default:"horizontal",validator:function(e){return e?["vertical","horizontal"].includes(e):!0}},separator:{type:[String,Function]},size:{type:[String,Number,Array],default:"medium"}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function m(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),a.push.apply(a,t)}return a}function b(r){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?m(Object(a),!0).forEach(function(t){o(r,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))})}return r}var O={small:"8px",medium:"16px",large:"24px"},A=j(),D=z({name:"TSpace",props:b(b({},k),{},{forceFlexGapPolyfill:Boolean}),setup:function(e){var a=w("space"),t=_(),f=T(),v=p(function(){return e.forceFlexGapPolyfill||A}),S=p(function(){var n="";x(e.size)?n=e.size.map(function(l){return y(l)?"".concat(l,"px"):g(l)&&O[l]||l}).join(" "):g(e.size)?n=O[e.size]||e.size:y(e.size)&&(n="".concat(e.size,"px"));var i={};if(v.value){var d=n.split(" "),c=N(d,2),s=c[0],h=c[1];i["--td-space-column-gap"]=s,i["--td-space-row-gap"]=h||s}else i.gap=n;return i});function P(){var n=f(),i=t("separator");return n.map(function(d,c){var s=c+1!==n.length&&i;return u(C,null,[u("div",{class:"".concat(a.value,"-item")},[d]),s&&u("div",{class:"".concat(a.value,"-item-separator")},[i])])})}return function(){var n=["".concat(a.value),o(o(o(o({},"".concat(a.value,"-align-").concat(e.align),e.align),"".concat(a.value,"-").concat(e.direction),e.direction),"".concat(a.value,"--break-line"),e.breakLine),"".concat(a.value,"--polyfill"),v.value)];return u("div",{class:n,style:S.value},[P()])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var M=F(D);export{M as S};
