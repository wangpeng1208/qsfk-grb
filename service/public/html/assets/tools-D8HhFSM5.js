import{u as O,r as m,_ as y}from"./index-Bqwwrko2.js";import{d,l}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.53 1.87a8.5 8.5 0 0111.5 9.79l5.14 5.15-1.41 1.42-5.99-6 .18-.57A6.5 6.5 0 008.34 3.4l4.23 4.23-4.95 4.95-4.23-4.23a6.5 6.5 0 008.27 7.61l.58-.18 5.99 6-1.42 1.4-5.15-5.15a8.5 8.5 0 01-9.8-11.48l.26-.63h1.67l3.83 3.83 2.12-2.12-3.83-3.83V2.12l.62-.25zm9.22 12.47l4.95 4.95-1.41 1.41-4.95-4.95 1.41-1.41z"}}]},h=d({name:"ToolsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:o,style:c}=O(t),p=l(()=>["t-icon","t-icon-tools",o.value]),u=l(()=>s(s({},c.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:v})}}));return()=>m(g,f.value)}});export{h as default};
