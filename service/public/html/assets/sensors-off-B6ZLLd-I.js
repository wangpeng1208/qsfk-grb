import{u as O,r as y,_ as d}from"./index-CzBgriim.js";import{d as m,l as a}from"./index-Bbii3Das.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7452)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21.22 4.32a11.96 11.96 0 01-.06 15.43L22.41 21 21 22.41l-8.48-8.48a2 2 0 01-2.45-2.45L7.83 9.24a4.97 4.97 0 00.33 5.96l.64.77-1.54 1.28-.64-.77a6.98 6.98 0 01-.23-8.67L4.26 5.67a10 10 0 00.06 12.73l.64.77-1.54 1.28-.64-.77a12 12 0 01.06-15.43L1.59 3 3 1.59l8.48 8.48a2 2 0 012.45 2.45l2.24 2.24a4.97 4.97 0 00-.33-5.96l-.64-.77 1.54-1.28.64.77a6.98 6.98 0 01.23 8.67l2.13 2.14a9.96 9.96 0 00-.06-12.73l-.64-.77 1.54-1.28.64.77z"}}]}]},h=m({name:"SensorsOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-sensors-off",l.value]),f=a(()=>i(i({},c.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>y(g,u.value)}});export{h as default};
