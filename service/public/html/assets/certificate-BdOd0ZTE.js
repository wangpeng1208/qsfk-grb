import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as h,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v18H1V3zm2 2v14h18V5h-2v6.5l-3-2.25-3 2.25V5H3zm12 0v2.5l1-.75 1 .75V5h-2zM5 11h6v2H5v-2zm0 4h14v2H5v-2z"}}]},P=h({name:"CertificateIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=m(r),p=a(()=>["t-icon","t-icon-certificate",i.value]),v=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>O(d,f.value)}});export{P as default};
