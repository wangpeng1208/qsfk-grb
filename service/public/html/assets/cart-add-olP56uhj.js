import{u as d,r as m,_ as O}from"./index-0JxUx2HH.js";import{d as h,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M0 1h4.76l3 11h10.52l3.09-9.26 1.9.63L19.71 14H7.78l-.5 2H22v2H4.72l1.25-4.99L3.24 3H0V1zm14 1v3h3v2h-3v3h-2V7H9V5h3V2h2zM4 21a2 2 0 114 0 2 2 0 01-4 0zm14 0a2 2 0 114 0 2 2 0 01-4 0z"}}]},P=h({name:"CartAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-cart-add",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(y,u.value)}});export{P as default};
