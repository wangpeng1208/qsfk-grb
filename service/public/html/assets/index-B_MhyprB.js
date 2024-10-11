import{e as i,bD as X,v as O,aT as D,d as E,a9 as A,a5 as U,C as B,l as m,_ as h,N as L,U as $,a as J,Q as k,ac as F,aX as K,L as Q,P as Y,ad as q}from"./index-DyfhlEKp.js";import{p as z,P as G}from"./index-Dz3F8iWe.js";import{u as H}from"./useVModel-CsuQbcSh.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var W={delay:{type:Number},destroyOnClose:{type:Boolean,default:!0},duration:{type:Number},placement:{type:String,default:"top"},showArrow:{type:Boolean,default:!0},theme:{type:String,default:"default",validator:function(e){return e?["default","primary","success","danger","warning","light"].includes(e):!0}}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Z=function(){var e=i(0),n=i(0),t=function(v){e.value=v.clientX,n.value=v.clientY};return X||(O(function(){window.addEventListener("mousemove",t,{passive:!0})}),D(function(){window.removeEventListener("mousemove",t)})),{x:e,y:n}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function P(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),n.push.apply(n,t)}return n}function l(o){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P(Object(n),!0).forEach(function(t){h(o,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))})}return o}var ee=E({name:"TTooltip",props:l(l({},z),W),setup:function(e,n){var t=i(null),s=i(null),v=A(e),S=v.visible,C=v.modelValue,T=H(S,C,e.defaultVisible,e.onVisibleChange,"visible"),p=U(T,2),V=p[0],y=p[1],f=K(),c=i(e.visible||e.defaultVisible),b=B(),_=Q(),g=Y(),j=Z(),w=j.x,d=i(w.value);O(function(){e.duration&&c.value&&(t.value=setTimeout(function(){y(!1,{}),clearTimeout(t.value),t.value=null},e.duration))});var M=function(a,r){t.value&&(r==null?void 0:r.trigger)!=="document"||(a&&(d.value=w.value),y(a,r))},I=m(function(){return["".concat(b.value,"-tooltip"),h({},"".concat(b.value,"-tooltip--").concat(e.theme),e.theme),e.overlayClassName]}),N=m(function(){return l(l({},(f==null?void 0:f.vnode.props)||{}),{},{placement:e.placement==="mouse"?"bottom-left":e.placement,showArrow:e.placement==="mouse"?!1:e.showArrow,overlayClassName:I.value,onVisibleChange:M,disabled:e.disabled})}),x=m(function(){if(e.placement!=="mouse"||d.value===0)return e.overlayInnerStyle;var u=function(r){return{transform:"translateX(".concat(d.value-r.getBoundingClientRect().left,"px)")}};return e.overlayInnerStyle?function(a,r){return l(l({},u(a)),L(e.overlayInnerStyle)?e.overlayInnerStyle(a,r):e.overlayInnerStyle)}:u});$(function(){return c.value},function(){t.value&&!c.value&&(clearTimeout(t.value),t.value=null)});var R=function(){var a,r;(a=s.value)===null||a===void 0||(r=a.update)===null||r===void 0||r.call(a)};return n.expose({updatePopper:R}),function(){var u=_("content");return!u&&!e.content?g("default","triggerElement"):J(G,k(F(N.value,["content","default"]),{ref:s,overlayInnerStyle:x.value,visible:V.value}),{default:function(){return[g("default","triggerElement")]},content:function(){return u}})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var re=q(ee);export{re as T};
