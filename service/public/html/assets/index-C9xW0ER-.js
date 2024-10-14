import{d as w,e as C,C as O,U as b,a as h,_ as d,P,W as S,X as g,N as k,O as N,ad as _}from"./index-Bl4AiOyE.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var j={animation:{type:String,default:"none",validator:function(t){return t?["gradient","flashed","none"].includes(t):!0}},delay:{type:Number,default:0},loading:{type:Boolean,default:!0},rowCol:{type:Array},theme:{type:String,validator:function(t){return t?["text","avatar","paragraph","avatar-text","tab","article"].includes(t):!0}}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function y(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),n.push.apply(n,e)}return n}function T(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(e){d(i,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})}return i}var E={text:[1],avatar:[{type:"circle",size:"56px"}],paragraph:[1,1,{width:"70%"}],"avatar-text":[[{type:"circle"},{type:"text",height:"32px"}]],tab:[{height:"30px"},{height:"200px"}],article:[{type:"rect",height:"30px",width:"100%"},{type:"rect",height:"200px",width:"100%"},[{type:"text",height:"30px"},{type:"text",height:"30px"},{type:"text",height:"30px"}],[{type:"text",height:"30px"},{type:"text",height:"30px"}],[{type:"text",height:"30px"},{type:"text",height:"30px"}],[{type:"text",height:"30px"},{type:"text",height:"30px"}]]},I=function(t){var n=["width","height","marginRight","marginLeft","margin","size","background","backgroundColor"],e=Object.create(null);return n.forEach(function(r){if(r in t){var o=g(t[r])?"".concat(t[r],"px"):t[r];if(r==="size"){var s=[o,o];e.width=s[0],e.height=s[1]}else e[r]=o}}),e},A=w({name:"TSkeleton",props:T({},j),setup:function(t,n){var e=n.slots,r=C(!1),o=O("skeleton"),s=P(),m=function(a){return["".concat(o.value,"__col"),"".concat(o.value,"--type-").concat(a.type||"text"),d({},"".concat(o.value,"--animation-").concat(t.animation),t.animation)]},x=function(a){var c=[];return S(a)?c=a:g(a)?c=new Array(a).fill({type:"text"}):c=[a],c.map(function(l){return h("div",{class:m(l),style:I(l)},[k(l.content)?l.content(N):l.content])})},f=function(a){var c=a||t.rowCol,l=function(){return["".concat(o.value,"__row")]};return c.map(function(v){return h("div",{class:l()},[x(v)])})},p=null;return b(function(){return t.loading},function(u){if(!u){clearTimeout(p),r.value=!1;return}t.delay>0?p=setTimeout(function(){clearTimeout(p),r.value=!0},t.delay):r.value=!0},{immediate:!0}),function(){var u=s("default","content");if(e.default&&!r.value)return h("div",null,[u]);if(r.value){var a=[];return t.theme&&a.push(f(E[t.theme])),t.rowCol&&a.push(f(t.rowCol)),!t.theme&&!t.rowCol&&a.push(f([1,1,1,{width:"70%"}])),h("div",{class:o.value},[a])}}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var z=_(A);export{z as S};
