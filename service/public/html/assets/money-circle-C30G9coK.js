import{_ as y}from"./dep-f0c03047-DIxjOVuh.js";import{u as m,r as h}from"./index-0JxUx2HH.js";import{d as O,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.5 7.5h-2v1h2v1h-2V12h-1V9.5h-2v-1h2v-1h-2v-1h1.46L5.61 4.81l.78-.62L8 6.2l1.61-2.01.78.62L9.04 6.5h1.46v1z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M15 8A7 7 0 101 8a7 7 0 0014 0zm-1 0A6 6 0 112 8a6 6 0 0112 0z",fillOpacity:.9}}]},j=O({name:"MoneyCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),s=a(()=>["t-icon","t-icon-money-circle",l.value]),v=a(()=>c(c({},p.value),r.style)),f=a(()=>({class:s.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>h(d,f.value)}});export{j as default};
