import{u as d,r as m,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as o}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M.59 12l4.95-4.95 1.41 1.41L3.41 12l3.54 3.54-1.41 1.41L.59 12zm8.2 8.73l4.48-17.94 1.94.48-4.48 17.94-1.94-.48zm8.26-5.2L20.59 12l-3.54-3.54 1.41-1.41L23.41 12l-4.95 4.95-1.41-1.41z"}}]},j=y({name:"CodeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=d(t),p=o(()=>["t-icon","t-icon-code",a.value]),u=o(()=>c(c({},s.value),r.style)),f=o(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>m(g,f.value)}});export{j as default};