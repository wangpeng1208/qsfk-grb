import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.64 4.22l-.71.71a9.97 9.97 0 000 14.14l.7.7-1.4 1.42-.72-.7a11.97 11.97 0 010-16.97l.71-.71 1.42 1.41zm14.14-1.41l.7.7a11.97 11.97 0 010 16.98l-.7.7-1.42-1.41.71-.7a9.97 9.97 0 000-14.15l-.7-.7 1.4-1.42zM8.46 7.05l-.7.7a5.98 5.98 0 000 8.5l.7.7-1.41 1.41-.7-.7a7.98 7.98 0 010-11.32l.7-.7 1.41 1.41zm8.49-1.41l.7.7a7.98 7.98 0 010 11.32l-.7.7-1.41-1.41.7-.7a5.98 5.98 0 000-8.5l-.7-.7 1.4-1.41zM12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 115 3.87v4.9h-2v-4.9A4 4 0 018 12z"}}]},h=d({name:"Sensors1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),p=a(()=>["t-icon","t-icon-sensors-1",l.value]),u=a(()=>i(i({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{h as default};
