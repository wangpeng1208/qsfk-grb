import{u as y,r as O,_ as m}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 2H2v20h20V2zm-2 2v7h-2.55l-2.02 3.23-5.87-7.82L5.55 11H4V4h16zM4 13h2.45l2.99-3.41 6.13 8.18L18.55 13H20v7H4v-7z"}}]},P=d({name:"ActivityIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=y(r),p=a(()=>["t-icon","t-icon-activity",i.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,u.value)}});export{P as default};
