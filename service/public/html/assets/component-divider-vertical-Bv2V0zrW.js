import{u as m,r as d,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as o}from"./index-DyfhlEKp.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5 2h14v7H5V2zm2 2v3h10V4H7zm-5 7h20v2H2v-2zm3 4h14v7H5v-7zm2 2v3h10v-3H7z"}}]},P=y({name:"ComponentDividerVerticalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:v}=m(t),p=o(()=>["t-icon","t-icon-component-divider-vertical",a.value]),s=o(()=>c(c({},v.value),r.style)),u=o(()=>({class:p.value,style:s.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>d(h,u.value)}});export{P as default};
