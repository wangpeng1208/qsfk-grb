import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d as h,l as a}from"./index-Bbii3Das.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20.5.59V19.5H1.6L20.5.59zM6.41 17.5h12.1V5.41L6.4 17.5zm14.1 3.5v2h-19v-2h19z"}}]},P=h({name:"SharpnessIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=O(t),c=a(()=>["t-icon","t-icon-sharpness",o.value]),u=a(()=>i(i({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var s;return(s=e.onClick)===null||s===void 0?void 0:s.call(e,{e:f})}}));return()=>m(d,v.value)}});export{P as default};
