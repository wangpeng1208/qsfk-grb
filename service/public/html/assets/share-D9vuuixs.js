import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16 1.04a4 4 0 11-.86 6.26l-6.28 3.63a3.98 3.98 0 010 2.14l6.28 3.63a4 4 0 11-1 1.73L7.86 14.8a4 4 0 110-5.6l6.28-3.63a4 4 0 011.85-4.53zm3.72 2.46a2 2 0 10-3.46 2 2 2 0 003.46-2zM3.07 12.53a2 2 0 103.86-1.06 2 2 0 00-3.86 1.06zM19 17.77a2 2 0 10-2 3.46 2 2 0 002-3.46z"}}]},P=d({name:"ShareIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),p=a(()=>["t-icon","t-icon-share",o.value]),u=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>m(g,f.value)}});export{P as default};
