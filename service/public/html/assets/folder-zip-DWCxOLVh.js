import{u as h,r as d,_ as O}from"./index-CzBgriim.js";import{d as m,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v16H1V2.5zm2 2V19h11v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-5.48l-2-2.5H3zM16 9v2h2v2h-2v2h2v2h-2v2h5V7h-3v2h-2z"}}]},P=m({name:"FolderZipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=h(t),v=o(()=>["t-icon","t-icon-folder-zip",a.value]),c=o(()=>p(p({},s.value),r.style)),u=o(()=>({class:v.value,style:c.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(y,u.value)}});export{P as default};
