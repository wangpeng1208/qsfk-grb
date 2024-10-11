import{d as f,C as v,_ as i,a as c,P as p,ad as y}from"./index-DyfhlEKp.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var g={align:{type:String,default:"center",validator:function(t){return t?["left","right","center"].includes(t):!0}},content:{type:[String,Function]},dashed:Boolean,default:{type:[String,Function]},layout:{type:String,default:"horizontal",validator:function(t){return t?["horizontal","vertical"].includes(t):!0}},theme:{type:String,validator:function(t){return t?["horizontal","vertical"].includes(t):!0}}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,n)}return e}function O(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?u(Object(e),!0).forEach(function(n){i(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}var h=f({name:"TDivider",props:O({},g),setup:function(t){var e=v("divider"),n=p();return function(){var o=t.layout,l=t.dashed,s=t.align,a=n("default","content"),d=["".concat(e.value),["".concat(e.value,"--").concat(o)],i(i(i({},"".concat(e.value,"--dashed"),!!l),"".concat(e.value,"--with-text"),!!a),"".concat(e.value,"--with-text-").concat(s),!!a)];return c("div",{class:d},[a&&c("span",{class:"".concat(e.value,"__inner-text")},[a])])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var j=y(h);export{j as D};
