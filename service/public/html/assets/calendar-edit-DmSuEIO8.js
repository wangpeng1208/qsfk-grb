import{u as d,r as h,_ as m}from"./index-ChiVvrNs.js";import{d as O,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1v3h8V1h2v3h4v8h-2v-1H4v9h8v2H2V4h4V1h2zM4 9h16V6H4v3zm15.29 4.09l4.12 4.12-5.28 5.29H14v-4.13l5.29-5.28zm-.68 3.5l1.3 1.3.68-.68-1.3-1.3-.68.68zm-.11 2.7L17.2 18 16 19.2v1.3h1.3l1.2-1.2z"}}]},P=O({name:"CalendarEditIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),v=a(()=>["t-icon","t-icon-calendar-edit",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(y,u.value)}});export{P as default};
