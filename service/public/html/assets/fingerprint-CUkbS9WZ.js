import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as g,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 11a10 10 0 1120 0v3c0 2.64-.57 5.15-1.6 7.41l-.4.91-1.83-.82.42-.91C19.49 18.58 20 16.35 20 14v-3a8 8 0 10-16 0v3H2v-3zm4.5 0a5.5 5.5 0 1111 0v3c0 2.8-.85 5.4-2.31 7.56l-.56.83-1.66-1.12.56-.83A11.44 11.44 0 0015.5 14v-3a3.5 3.5 0 10-7 0v3A4.5 4.5 0 014 18.5H2v-2h2A2.5 2.5 0 006.5 14v-3zm6.5-1v4a9 9 0 01-4.64 7.87l-.87.49-.97-1.75.87-.48A7 7 0 0011 14v-4h2z"}}]},P=g({name:"FingerprintIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:p}=m(t),s=a(()=>["t-icon","t-icon-fingerprint",i.value]),v=a(()=>c(c({},p.value),r.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
