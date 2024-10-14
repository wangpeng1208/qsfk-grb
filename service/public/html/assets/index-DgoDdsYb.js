import{d as R,C as o,a1 as V,l as t,a,a2 as W,a3 as X,L as Z,aa as k,ad as q}from"./index-Bl4AiOyE.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var G={actions:{type:[String,Function]},avatar:{type:[String,Function]},bordered:{type:Boolean,default:!0},content:{type:[String,Function]},cover:{type:[String,Function]},default:{type:[String,Function]},description:{type:[String,Function]},footer:{type:[String,Function]},header:{type:[String,Function]},headerBordered:Boolean,hoverShadow:Boolean,loading:{type:[Boolean,Function],default:!1},loadingProps:{type:Object},shadow:Boolean,size:{type:String,default:"medium",validator:function(e){return e?["medium","small"].includes(e):!0}},status:{type:String,default:""},subtitle:{type:[String,Function]},theme:{type:String,default:"normal",validator:function(e){return e?["normal","poster1","poster2"].includes(e):!0}},title:{type:[String,Function]}};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function K(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!X(i)}var Q=R({name:"TCard",props:G,setup:function(e,w){var u=w.slots,n=Z(),l=o("card"),y=V(),b=y.SIZE,F=t(function(){var r=[l.value];return e.size==="small"&&r.push("".concat(b.value[e.size])),e.bordered&&r.push("".concat(l.value,"--bordered")),e.shadow&&r.push("".concat(l.value,"--shadow")),e.hoverShadow&&r.push("".concat(l.value,"--shadow-hover")),r}),c=t(function(){var r=["".concat(l.value,"__header")];return e.headerBordered?r.concat("".concat(l.value,"__title--bordered")):["".concat(l.value,"__header")]}),p=o("card__header-wrapper"),N=o("card__avatar"),B=o("card__title"),T=o("card__subtitle"),O=o("card__description"),d=o("card__actions"),P=o("card__body"),j=o("card__cover"),A=o("card__footer"),E=o("card__footer-wrapper"),v=t(function(){return e.theme==="poster2"}),f=t(function(){return e.title||u.title}),h=t(function(){return e.header||u.header}),_=t(function(){return e.subtitle||u.subtitle}),C=t(function(){return e.avatar||u.avatar}),S=t(function(){return e.description||u.description}),g=t(function(){return e.status||u.status}),s=t(function(){return e.actions||u.actions}),H=t(function(){return e.footer||u.footer}),x=t(function(){return e.cover||u.cover}),z=t(function(){return e.loading||u.loading}),I=t(function(){return e.content||u.content||e.default||u.default}),L=t(function(){return h.value||f.value||_.value||S.value||C.value||g.value&&v.value||s.value&&!v.value}),D=t(function(){return H.value||s.value&&v.value}),J=function(){return h.value?a("div",{class:c.value},[n("header")]):a("div",{class:c.value},[a("div",{class:p.value},[C.value&&a("div",{class:N.value},[n("avatar")]),a("div",null,[f.value&&a("div",{class:B.value},[n("title")]),_.value&&a("div",{class:T.value},[n("subtitle")]),S.value&&a("p",{class:O.value},[n("description")])])]),s.value&&!v.value&&a("div",{class:d.value},[n("actions")]),g.value&&a("div",{class:d.value},[n("status")])])},M=function(){var m=k(e.cover);return a("div",{class:j.value},[m?a("img",{src:e.cover},null):n("cover")])};return function(){var r=a("div",{class:F.value},[L.value?J():null,x.value?M():null,I.value&&a("div",{class:P.value},[n("default")||n("content")]),D.value&&a("div",{class:A.value},[a("div",{class:E.value},[n("footer")]),s.value&&v.value&&a("div",{class:d.value},[n("actions")])])]);return z.value?n("loading")||a(W,e.loadingProps,K(r)?r:{default:function(){return[r]}}):r}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Y=q(Q);export{Y as C};
