import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d,l}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.53.63l.7.7 2.48 2.48 8.48 8.48.71.71-.7.7-8.5 8.5-.7.7-.7-.7-8.5-8.5-.7-.7.7-.7 7.79-7.78-1.77-1.77-.7-.71L9.51.63zM5.93 12h12.14L12 5.93 5.93 12zm12.14 2H5.93L12 20.07 18.07 14zm2.68 3.39l.78.99.53.67c.59.73.59 1.85 0 2.58-.31.4-.78.66-1.31.66s-1-.26-1.31-.66a2.13 2.13 0 010-2.58l.53-.67.78-1z"}}]},h=d({name:"FillColorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:o,style:c}=m(t),p=l(()=>["t-icon","t-icon-fill-color",o.value]),u=l(()=>s(s({},c.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:v})}}));return()=>O(g,f.value)}});export{h as default};
