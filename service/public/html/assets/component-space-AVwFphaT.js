import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d,l as o}from"./index-DyfhlEKp.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 3h20v8H2V3zm2 2v4h16V5H4zm-2 8h20v8H2v-8zm2 2v4h16v-4H4z"}}]},P=d({name:"ComponentSpaceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:p}=m(r),s=o(()=>["t-icon","t-icon-component-space",a.value]),v=o(()=>c(c({},p.value),t.style)),u=o(()=>({class:s.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,u.value)}});export{P as default};
