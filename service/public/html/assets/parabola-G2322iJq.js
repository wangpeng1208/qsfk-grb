import{u as h,r as O,_ as y}from"./index-CzBgriim.js";import{d as m,l as n}from"./index-Bbii3Das.js";function c(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?c(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.08 7.91c-.23.44-.47.9-.68 1.19a29.88 29.88 0 01-2.22 2.75C4.58 12.45 3.88 13 3 13H2v-2h1c.02 0 .22 0 .75-.55.5-.52 1.14-1.34 2.05-2.55.1-.14.25-.42.5-.89l.13-.26c.3-.56.68-1.27 1.15-1.94C8.48 3.5 9.9 2 12 2s3.52 1.5 4.42 2.8a18.76 18.76 0 011.28 2.21c.25.47.4.75.5.89a28.38 28.38 0 002.05 2.55c.53.54.73.55.75.55h1v2h-1c-.88 0-1.58-.54-2.18-1.15A29.88 29.88 0 0116.6 9.1a9.72 9.72 0 01-.68-1.19l-.12-.23c-.3-.55-.63-1.16-1.02-1.74C13.95 4.75 13.05 4 12 4c-1.05 0-1.95.75-2.78 1.94a16.83 16.83 0 00-1.14 1.97zM4 16v2h7v-2h2v2h7v-2h2v5h-2v-1h-7v1h-2v-1H4v1H2v-5h2z"}}]},P=m({name:"ParabolaIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:r}=a,t=n(()=>e.size),{className:o,style:s}=h(t),v=n(()=>["t-icon","t-icon-parabola",o.value]),p=n(()=>i(i({},s.value),r.style)),u=n(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(b,u.value)}});export{P as default};