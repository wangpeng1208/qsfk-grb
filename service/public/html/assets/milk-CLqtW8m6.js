import{u as m,r as h,_ as O}from"./index-CzBgriim.js";import{d as y,l}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.85 1H6.15v3.59L4 9.49V23h16V9.49l-2.15-4.9V1zm-.92 6.48L18 9.9V21h-1.95V9.88l.88-2.4zm-2.88 3.22V21H6V10.7h8.05zm-7.52-2L7.8 5.8h7.62l-1.07 2.9H6.53zm1.62-4.9V3h7.7v.8h-7.7zM13 13h-1.43L10 14.58 8.42 13H7v6h2v-2.59l1 1 1-1V19h2v-6z"}}]},P=y({name:"MilkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=m(t),p=l(()=>["t-icon","t-icon-milk",a.value]),v=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,u.value)}});export{P as default};