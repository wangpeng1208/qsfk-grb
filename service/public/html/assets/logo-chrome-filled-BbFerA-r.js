import{u as d,r as m,_ as g}from"./index-0JxUx2HH.js";import{d as O,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 23A11 11 0 0022.51 8.75h-7.05a4.73 4.73 0 01.65 5.63l-4.96 8.59c.28.02.57.03.85.03z"}},{tag:"path",attrs:{fill:"currentColor",d:"M9.56 22.73l3.52-6.1a4.76 4.76 0 01-5.2-2.25l-4.96-8.6a11 11 0 006.63 16.95z"}},{tag:"path",attrs:{fill:"currentColor",d:"M3.93 4.52a11 11 0 0118 2.73H12a4.75 4.75 0 00-4.55 3.37l-3.52-6.1zM9.18 13.62a3.25 3.25 0 110 0z"}}]},C=O({name:"LogoChromeFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-logo-chrome-filled",l.value]),u=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(y,f.value)}});export{C as default};
