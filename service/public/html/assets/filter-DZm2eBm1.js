import{u as O,r as m,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.57 3h18.86l-6.93 9.82V21h-5v-8.18L2.57 3zm3.86 2l5.07 7.18V19h1v-6.82L17.57 5H6.43z"}}]},P=d({name:"FilterIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=O(t),p=a(()=>["t-icon","t-icon-filter",l.value]),u=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,f.value)}});export{P as default};
