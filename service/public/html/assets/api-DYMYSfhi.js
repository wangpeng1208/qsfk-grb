import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7197)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M.59 12L5 7.59 6.41 9l-3 3 3 3L5 16.41.59 12zm7-7L12 .59 16.41 5 15 6.41l-3-3-3 3L7.59 5zM9 17.59l3 3 3-3L16.41 19 12 23.41 7.59 19 9 17.59zM11 13v-2h2v2h-2zm6.59 2l3-3-3-3L19 7.59 23.41 12 19 16.41 17.59 15z"}}]}]},b=d({name:"ApiIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),s=a(()=>["t-icon","t-icon-api",l.value]),u=a(()=>p(p({},c.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(g,v.value)}});export{b as default};
