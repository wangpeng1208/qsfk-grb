import{u as d,r as O,_ as m}from"./index-CzBgriim.js";import{d as y,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.6 6.28a7.5 7.5 0 0114.8 0 6.5 6.5 0 011.06 12.01l-.9.46-.9-1.78.88-.46a4.5 4.5 0 00-1.23-8.44l-.77-.14-.05-.78a5.5 5.5 0 00-10.98 0l-.05.78-.77.14a4.5 4.5 0 00-1.23 8.44l.89.46-.91 1.78-.9-.46a6.5 6.5 0 011.06-12zm7.4 3.3L17.41 15 16 16.41l-3-3V23h-2v-9.59l-3 3L6.59 15 12 9.59z"}}]},h=y({name:"CloudUploadIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=d(t),s=a(()=>["t-icon","t-icon-cloud-upload",l.value]),u=a(()=>c(c({},p.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{h as default};
