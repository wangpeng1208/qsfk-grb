import{u as O,r as m,_ as y}from"./index-Bqwwrko2.js";import{d,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm12 5.1l4.91 4.85-1.4 1.42L19 16.4v7.11h-2v-7.1l-2.5 2.47-1.41-1.42L18 12.6zM8 16a4 4 0 00-4 4h8.8v2H2v-2a6 6 0 016-6h4.75v2H8z"}}]},b=d({name:"UserArrowUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=O(t),c=a(()=>["t-icon","t-icon-user-arrow-up",o.value]),u=a(()=>s(s({},p.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
