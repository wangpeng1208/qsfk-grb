import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.1 3.11l16.87 5.93-4.32 3.08 5.71 5.7-3.54 3.54-5.7-5.7-3.09 4.32L3.11 3.1zm3.28 3.27l3.26 9.3 2.22-3.1 5.96 5.96.71-.71-5.96-5.96 3.1-2.22-9.3-3.27z"}}]},j=d({name:"CursorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=O(t),p=o(()=>["t-icon","t-icon-cursor",a.value]),u=o(()=>s(s({},c.value),r.style)),f=o(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>m(g,f.value)}});export{j as default};
