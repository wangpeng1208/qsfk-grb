import{u as m,r as d,_ as h}from"./index-0JxUx2HH.js";import{d as O,l as a}from"./index-DyfhlEKp.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2h6v3.53c.2.15.52.36.95.57.87.44 2.22.9 4.05.9 1.83 0 3.18-.46 4.05-.9.43-.2.74-.42.95-.57V2h6v20h-6v-5H7v5H1V2zm6 13h4V8.96a10.7 10.7 0 01-4-1.1V15zm6-6.04V15h4V7.87l-.05.02c-.95.48-2.26.93-3.95 1.07zM3 4v16h2V4H3zm16 0v16h2V4h-2z"}}]},P=O({name:"Bridge1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-bridge-1",o.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(y,u.value)}});export{P as default};
