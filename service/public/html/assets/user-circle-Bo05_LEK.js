import{u as m,r as O,_ as y}from"./index-Bqwwrko2.js";import{d,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 00-7.23 14.37A5 5 0 019.5 14h5a5 5 0 014.73 3.37A9 9 0 0012 3zm5.5 16.12V19a3 3 0 00-3-3h-5a3 3 0 00-3 3v.12a8.96 8.96 0 0011 0zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm11-6a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM7.5 8.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"}}]},P=d({name:"UserCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-user-circle",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};