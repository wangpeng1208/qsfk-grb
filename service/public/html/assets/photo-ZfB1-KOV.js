import{_ as h}from"./dep-f0c03047-DIxjOVuh.js";import{u as m,r as O}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 8a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M6.05 2a.6.6 0 00-.5.27L4.73 3.5H2.01a.51.51 0 00-.51.51v8.48c0 .28.23.51.51.51h11.98c.28 0 .51-.23.51-.51V4.01a.51.51 0 00-.51-.51h-2.72l-.82-1.23a.6.6 0 00-.5-.27h-3.9zm.22 1h3.46l1 1.5h2.77V12h-11V4.5h2.77l1-1.5z",fillOpacity:.9}}]},j=y({name:"PhotoIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=m(r),s=a(()=>["t-icon","t-icon-photo",o.value]),f=a(()=>c(c({},p.value),t.style)),u=a(()=>({class:s.value,style:f.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(d,u.value)}});export{j as default};
