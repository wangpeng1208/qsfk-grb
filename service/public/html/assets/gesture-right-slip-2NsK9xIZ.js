import{u as h,r as g,_ as O}from"./index-0JxUx2HH.js";import{d as m,l as a}from"./index-DyfhlEKp.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.4 5.2a11 11 0 0113.2 0h-2.1v2h4.98V1.5h-2v1.87a13.01 13.01 0 00-14.97 0V1.5h-2v5.7H7.5v-2H5.4zm3.84 2.37a2.76 2.76 0 115.52 0v2.95h1.15c.5 0 .97.13 1.4.38L20.92 13a2.76 2.76 0 011.22 3.25l-1.78 5.35a2.76 2.76 0 01-2.61 1.89h-7.09c-.86 0-1.66-.4-2.18-1.08l-4.3-5.59.94-1.41a1.88 1.88 0 011.97-.8l2.14.48V7.57zM12 6.8a.76.76 0 00-.76.76V17.6l-4.5-1-.1.15 3.43 4.45c.14.19.37.3.6.3h7.09c.32 0 .61-.2.71-.52l1.79-5.35a.76.76 0 00-.34-.9l-3.62-2.1a.76.76 0 00-.39-.11h-3.15V7.57A.76.76 0 0012 6.8z"}}]},P=m({name:"GestureRightSlipIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=h(t),p=a(()=>["t-icon","t-icon-gesture-right-slip",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>g(y,v.value)}});export{P as default};
