import{u as m,r as O,_ as h}from"./index-0JxUx2HH.js";import{d as y,l}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 4h6v2H7.41l3 3L9 10.41l-3-3V10H4V4zm10 0h6v6h-2V7.41l-3 3L13.59 9l3-3H14V4zm-3.59 11l-3 3H10v2H4v-6h2v2.59l3-3L10.41 15zM15 13.59l3 3V14h2v6h-6v-2h2.59l-3-3L15 13.59z"}}]},P=y({name:"Fullscreen2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=m(t),p=l(()=>["t-icon","t-icon-fullscreen-2",a.value]),v=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
