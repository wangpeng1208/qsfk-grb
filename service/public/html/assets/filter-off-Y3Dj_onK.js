import{u as O,r as m,_ as y}from"./index-B4p2E3Fl.js";import{d,l}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1.59L21.41 20 20 21.41l-5.5-5.5V21h-5v-8.18L4.93 6.35 1.6 3 3 1.59zm8.5 11.32V19h1v-5.09l-1-1zM6.54 3h14.89l-6.03 8.55-1.64-1.15L17.57 5H9.51l-.9.02L6.54 3z"}}]},P=d({name:"FilterOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),f=l(()=>["t-icon","t-icon-filter-off",a.value]),p=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:f.value,style:p.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,u.value)}});export{P as default};
