import{u as d,r as m,_ as O}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 3.5H4v-2h16v2zm-8 .59L16.91 9l-1.41 1.41-2.5-2.5v8.18l2.5-2.5L16.91 15 12 19.91 7.09 15l1.41-1.41 2.5 2.5V7.9l-2.5 2.5L7.09 9 12 4.09zm8 18.41H4v-2h16v2z"}}]},P=y({name:"ExpandVerticalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=d(t),s=a(()=>["t-icon","t-icon-expand-vertical",l.value]),v=a(()=>c(c({},p.value),r.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,u.value)}});export{P as default};
