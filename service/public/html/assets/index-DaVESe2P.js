import{d as g,l as c,ax as b,v as S,O as s,az as h,bS as j,ad as P}from"./index-Bl4AiOyE.js";var w=typeof window>"u";function C(e,n){if(!w&&!(!document||!e||typeof e!="string")&&!(document.querySelectorAll(".".concat(n,'[src="').concat(e,'"]')).length>0)){var t=document.createElement("script");t.setAttribute("class",n),t.setAttribute("src",e),document.body.appendChild(t)}}var I={name:{type:String,default:""},size:{type:String,default:void 0},url:{type:[String,Array],default:void 0},loadDefaultIcons:{type:Boolean,default:!0},onClick:Function};function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?u(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var{classPrefix:l}=j,z="https://tdesign.gtimg.com/icon/0.2.1/fonts/index.js",A=g({name:"Icon",props:I,setup(e,n){var{attrs:t}=n,r=c(()=>e.size),o=c(()=>e.name||""),{className:f,style:d}=b(r),y=c(()=>{var a=[];return a=e.url instanceof Array?e.url.concat():[e.url],e.loadDefaultIcons&&a.push(z),a}),p=c(()=>["".concat(l,"-icon"),"".concat(l,"-icon-").concat(o.value),f.value]),m=c(()=>v(v({},d.value),t.style));S(()=>{Array.from(new Set(y.value)).forEach(a=>{C(a,"".concat(l,"-svg-js-stylesheet--unique-class"))})});var O=c(()=>({class:p.value,style:m.value,onClick:a=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:a})}}));return()=>s("svg",O.value,s("use",{href:e.url?"#".concat(o.value):"#t-icon-".concat(o.value)}))}}),D=A;/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var k=P(D,"TIcon");export{k as I};
