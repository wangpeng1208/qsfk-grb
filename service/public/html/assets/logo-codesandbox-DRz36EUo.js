import{u as d,r as m,_ as O}from"./index-CzBgriim.js";import{d as y,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.34 6.42L12 .85l9.66 5.57v11.16L12 23.15l-9.66-5.57V6.42zM12 3.15L9.67 4.5 12 5.85l2.33-1.35L12 3.15zm4.33 2.5L12 8.15l-4.33-2.5L5.34 7 12 10.85 18.66 7l-2.33-1.35zm3.33 3.08L13 12.58v7.69l2.34-1.35v-5l4.32-2.5V8.74zm0 5l-2.32 1.35v2.68l2.32-1.34v-2.68zm-15.32-2.3l4.32 2.5v4.99L11 20.27v-7.7L4.34 8.74v2.7zm0 2.3v2.7l2.32 1.33v-2.68l-2.32-1.34z"}}]},P=y({name:"LogoCodesandboxIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:c}=d(t),v=o(()=>["t-icon","t-icon-logo-codesandbox",l.value]),p=o(()=>s(s({},c.value),r.style)),u=o(()=>({class:v.value,style:p.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>m(g,u.value)}});export{P as default};
