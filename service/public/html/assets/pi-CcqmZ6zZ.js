import{u as O,r as m,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.16 3h18.26v2H15.8c-.2 2.2-.37 5.14-.42 7.74-.02 1.49 0 2.85.07 3.9.04.53.1.95.15 1.26.06.29.1.39.1.39.64.81 2.55 1.31 4.59-.7l.71-.7 1.4 1.42-.7.7c-2.6 2.56-6 2.58-7.6.47a2.94 2.94 0 01-.46-1.2c-.08-.42-.14-.93-.18-1.5-.08-1.13-.1-2.56-.08-4.07.05-2.58.21-5.48.41-7.71h-3.46c-.17 2.46-.62 5.7-1.52 8.54a15.56 15.56 0 01-2.08 4.4 5.86 5.86 0 01-3.55 2.49l-.98.2-.38-1.97.98-.2c.82-.16 1.6-.72 2.31-1.7.72-.99 1.31-2.31 1.79-3.82.83-2.61 1.26-5.61 1.42-7.94H3.16V3zm12.55 15.29l-.01-.02.01.02z"}}]},h=d({name:"PiIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-pi",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,v.value)}});export{h as default};
