import{u as m,r as h,_ as O}from"./index-Bqwwrko2.js";import{d as y,l}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 2l11 1.1v4.8l-2.93.3 1 13.8h-7.16l1.1-13.29-.62.06-.12.01L12.1 9H12l-2.92-.29 1 13.3H2.92L3.93 8.2 1 7.9V3.1L12 2zM5.92 8.4L5.07 20h2.85L7.06 8.51 5.92 8.4zm11.11.11l-.95 11.5h2.84l-.84-11.6c-.15 0-.3.02-.44.04h-.01l-.6.06zM3 4.91V6.1l9 .9 2.08-.2.12-.02a490.33 490.33 0 003.22-.32h.01l1.47-.15L21 6.1V4.9L12 4l-9 .9z"}}]},P=y({name:"ShimenIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=m(t),p=l(()=>["t-icon","t-icon-shimen",a.value]),u=l(()=>s(s({},c.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>h(d,v.value)}});export{P as default};
