import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as h,l as o}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V12h-2V9h-6V3H5v18h6v2H3V1zm12 2.41V7h3.59L15 3.41zm4.05 10.68L23.91 19l-4.86 4.92-1.42-1.41 2.48-2.5H13v-2h7.1l-2.47-2.52 1.42-1.4z"}}]},P=h({name:"FileExportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=m(t),c=o(()=>["t-icon","t-icon-file-export",a.value]),u=o(()=>p(p({},s.value),r.style)),v=o(()=>({class:c.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,v.value)}});export{P as default};
