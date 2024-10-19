import{l as s,X as g,aY as d,aZ as h,a5 as x,U as b,v as p,a_ as y,Z as _}from"./index-Bbii3Das.js";import{l as L}from"./log-ZJhmUOBa.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function O(a,l){if(a==null)return{};var t={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(l.includes(r))continue;t[r]=a[r]}return t}function P(a,l){if(a==null)return{};var t,r,v=O(a,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)t=o[r],l.includes(t)||{}.propertyIsEnumerable.call(a,t)&&(v[t]=a[t])}return v}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function S(a){var l=function(e){var n=a.value,u=n.allowInputOverMax,c=n.maxlength,m=n.maxcharacter;if(!(c||m)||u||!e)return e;if(c)return y(e,c);if(m){var f=h(e,m);if(_(f))return f.characters}},t=s(function(){var i=a.value,e=i.maxlength,n=i.maxcharacter,u=i.value;if(g(u))return String(u);if(e&&n&&L.warn("Input","Pick one of maxlength and maxcharacter please."),e){var c=u!=null&&u.length?d(u):0;return"".concat(c,"/").concat(e)}return n?"".concat(h(u||""),"/").concat(n):""}),r=s(function(){if(t.value){var i=t.value.split("/"),e=x(i,2),n=e[0],u=e[1];return Number(n)>Number(u)?"error":""}return""}),v=s(function(){var i=a.value.status;return i||r.value}),o=function(){var e,n;(e=(n=a.value).onValidate)===null||e===void 0||e.call(n,{error:r.value?"exceed-maximum":void 0})};return b(r,o),p(function(){r.value&&o()}),{tStatus:v,limitNumber:t,getValueByLimitNumber:l}}export{P as _,S as u};
