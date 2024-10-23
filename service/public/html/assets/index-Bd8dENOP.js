import{e as A,_ as i,X as y,Z as b,W as g,bD as m,d as S,a9 as T,ao as M,r as $,C as h,l as d,a as C,a3 as _,L as D,an as k,ad as R}from"./index-CpJFga7x.js";import{i as v}from"./dep-d524834c-s9Vwwbzr.js";import{a as G}from"./useListener-BYORuXQ9.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var I={align:{type:String,default:"top",validator:function(e){return e?["start","end","center","stretch","baseline","top","middle","bottom"].includes(e):!0}},gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start",validator:function(e){return e?["start","end","center","space-around","space-between"].includes(e):!0}},tag:{type:String,default:"div"}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var w=function(e){var n="xs";return e<768?n="xs":e>=768&&e<992?n="sm":e>=992&&e<1200?n="md":e>=1200&&e<1400?n="lg":e>=1400&&e<1880?n="xl":n="xxl",n};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P(Object(n),!0).forEach(function(r){i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function E(){var t=A(w(m?0:window.innerWidth)),e=function(){t.value=w(m?0:window.innerWidth)};return G("resize",e),t}function L(t,e){var n=e.justify,r=e.align;return[t,i(i({},"".concat(t,"--").concat(n),n),"".concat(t,"--align-").concat(r),r)]}function X(t,e){var n={},r=function(a){return Object.assign(n,{marginLeft:"".concat(a/-2,"px"),marginRight:"".concat(a/-2,"px")})},c=function(a){return Object.assign(n,{rowGap:"".concat(a,"px")})},s={isNumber:function(a){y(a)&&r(a)},isArray:function(a){g(a)&&a.length&&(s.isNumber(a[0]),y(a[1])&&c(a[1]),b(a[0])&&!v(a[0][e])&&r(a[0][e]),b(a[1])&&!v(a[1][e])&&c(a[1][e]))},isObject:function(a){b(a)&&a[e]&&(g(a)&&a.length?(r(a[e][0]),c(a[e][1])):r(a[e]))}};return Object.keys(s).forEach(function(o){s[o](t)}),n}function J(t){return y(t)?"".concat(t," ").concat(t," 0"):/^\d+(\.\d+)?(px|r?em|%)$/.test(t)?"0 0 ".concat(t):t}function K(t,e){var n={},r=function(o){return Object.assign(n,{paddingLeft:"".concat(o/2,"px"),paddingRight:"".concat(o/2,"px")})},c={isNumber:function(o){y(o)&&r(o)},isArray:function(o){g(o)&&o.length&&(y(o[0])&&r(o[0]),b(o[0])&&o[0][e]&&r(o[0][e]))},isObject:function(o){b(o)&&o[e]&&r(o[e])}};return Object.keys(c).forEach(function(s){c[s](t)}),n}function W(t,e){var n=e.span,r=e.order,c=e.offset,s=e.push,o=e.pull,a=["xs","sm","md","lg","xl","xxl"],f=a.reduce(function(p,l){var O=e[l],u={};return y(O)?u.span=O:b(O)&&(u=O||{}),j(j({},p),{},i(i(i(i(i({},"".concat(t,"-").concat(l,"-").concat(u.span),!v(u.span)),"".concat(t,"-").concat(l,"-order-").concat(u.order),parseInt(u.order,10)>=0),"".concat(t,"-").concat(l,"-offset-").concat(u.offset),parseInt(u.offset,10)>=0),"".concat(t,"-").concat(l,"-push-").concat(u.push),parseInt(u.push,10)>=0),"".concat(t,"-").concat(l,"-pull-").concat(u.pull),parseInt(u.pull,10)>=0))},{});return j(i(i(i(i(i(i({},"".concat(t),!0),"".concat(t,"-").concat(n),!v(n)),"".concat(t,"-order-").concat(r),r),"".concat(t,"-offset-").concat(c),c),"".concat(t,"-push-").concat(s),s),"".concat(t,"-pull-").concat(o),o),f)}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N(Object(n),!0).forEach(function(r){i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function F(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!_(t)}var U=S({name:"TRow",props:V({},I),setup:function(e){var n=T(e),r=n.gutter,c=D();M("rowContext",$({gutter:r}));var s=E(),o=h("row"),a=d(function(){return L(o.value,e)}),f=d(function(){return X(e.gutter,s.value)});return function(){var p,l=e.tag;return C(l,{class:a.value,style:f.value},F(p=c("default"))?p:{default:function(){return[p]}})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Z={flex:{type:[String,Number]},lg:{type:[Number,Object]},md:{type:[Number,Object]},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},sm:{type:[Number,Object]},span:{type:Number},tag:{type:String,default:"div"},xl:{type:[Number,Object]},xs:{type:[Number,Object]},xxl:{type:[Number,Object]}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x(Object(n),!0).forEach(function(r){i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function B(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!_(t)}var H=S({name:"TCol",inject:["rowContext"],props:q({},Z),setup:function(e){var n=h("col"),r=D(),c=k("rowContext",Object.create(null)),s=E(),o=d(function(){return W(n.value,e)}),a=d(function(){var f={},p=e.flex;if(p&&(f.flex=J(p)),c){var l=c.gutter;Object.assign(f,K(l,s.value))}return f});return function(){var f,p=e.tag;return C(p,{class:o.value,style:a.value},B(f=r("default"))?f:{default:function(){return[f]}})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ee=R(U),te=R(H);export{te as C,ee as R};
