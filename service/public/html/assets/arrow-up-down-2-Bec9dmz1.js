import{u as O,r as m,_ as y}from"./index-ChiVvrNs.js";import{d,l as o}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.5 2.5v8.59l3-3 1.41 1.41-5.41 5.41-5.41-5.41 1.41-1.41 3 3V2.5h2zm-10 6.59l5.41 5.41-1.41 1.41-3-3v8.59h-2v-8.59l-3 3-1.41-1.41L7.5 9.09z"}}]},h=d({name:"ArrowUpDown2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=O(t),c=o(()=>["t-icon","t-icon-arrow-up-down-2",a.value]),u=o(()=>p(p({},s.value),r.style)),v=o(()=>({class:c.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(w,v.value)}});export{h as default};