import{u as m,r as d,_ as O}from"./index-CzBgriim.js";import{d as y,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V23H3V1zm2 2v18h14V9h-6V3H5zm10 .41V7h3.59L15 3.41zm-3.8 8.8L9.42 14l1.8 1.8-1.42 1.4L6.6 14l3.2-3.2 1.42 1.4zm3-1.42L17.42 14l-3.2 3.2-1.42-1.4 1.8-1.8-1.8-1.8 1.42-1.4z"}}]},P=y({name:"FileCode1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=m(t),p=o(()=>["t-icon","t-icon-file-code-1",a.value]),u=o(()=>s(s({},c.value),r.style)),f=o(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>d(h,f.value)}});export{P as default};
