import{u as O,r as m,_ as y}from"./index-ChiVvrNs.js";import{d as g,l as a}from"./index-Bl4AiOyE.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21 12a9 9 0 10-18 0 9 9 0 0018 0zM12 1a11 11 0 110 22 11 11 0 010-22zm.77 8.82H8.53v-2h7.65v7.66h-2v-4.25L8.82 16.6 7.4 15.18l5.37-5.36z"}}]},b=g({name:"ArrowRightUpCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=O(t),s=a(()=>["t-icon","t-icon-arrow-right-up-circle",o.value]),u=a(()=>c(c({},p.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,v.value)}});export{b as default};
