import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as a}from"./index-CpJFga7x.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.47 4.8a9.4 9.4 0 001.08-2.12l1.9.64a11.75 11.75 0 01-1.52 2.9 10.83 10.83 0 012.34 4.6c.47 2.06.25 4.4-1.5 6.13l-2.11 2.12-.73-.73c-1.9 1.7-4.1 2.97-6.26 3.5-2.47.59-5 .24-6.88-1.63-1.87-1.88-2.22-4.4-1.62-6.88a14.94 14.94 0 013.49-6.26l-.73-.73 2.12-2.12c1.73-1.72 4.06-1.95 6.11-1.5 1.6.35 3.14 1.13 4.31 2.08zm-1.25 1.56a8.67 8.67 0 00-3.49-1.68c-1.65-.37-3.18-.13-4.27.96l-.7.7 5.36 5.37h3.42v3.41l1.12 1.12.7-.7c1.1-1.1 1.34-2.63.96-4.28a8.85 8.85 0 00-1.7-3.48l-.65.66-.02.02-1.41-1.41.68-.69zm-.7 10.57l-.98-.98v-2.24h-2.25L7.07 8.49a12.9 12.9 0 00-2.96 5.31c-.48 2-.15 3.74 1.1 5 1.25 1.24 2.99 1.57 4.99 1.09a12.9 12.9 0 005.31-2.96z"}}]},P=d({name:"NutIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),p=a(()=>["t-icon","t-icon-nut",l.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};
