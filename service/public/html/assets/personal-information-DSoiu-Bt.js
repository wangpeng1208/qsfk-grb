import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V23H3V1zm2 2v18h14V7.41L14.59 3H5zm7 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3.5 1.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM6 19a4 4 0 014-4h4a4 4 0 014 4v1h-2v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H6v-1z"}}]},b=d({name:"PersonalInformationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=m(t),c=a(()=>["t-icon","t-icon-personal-information",o.value]),v=a(()=>s(s({},p.value),r.style)),f=a(()=>({class:c.value,style:v.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>O(h,f.value)}});export{b as default};
