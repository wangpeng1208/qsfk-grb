import{u as O,r as m,_ as y}from"./index-Bqwwrko2.js";import{d,l}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.66 7.17l-5.3 5.3-1.42-1.41 5.3-5.3 1.42 1.41zm5.65 0l-10.6 10.6-6.37-6.36L7.76 10l4.95 4.95 9.19-9.2 1.41 1.42zM2.11 10l4.94 4.95.35-.35L8.82 16l-1.77 1.77L.69 11.4 2.1 10z"}}]},P=d({name:"CheckDoubleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:o,style:s}=O(t),p=l(()=>["t-icon","t-icon-check-double",o.value]),u=l(()=>c(c({},s.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:v})}}));return()=>m(b,f.value)}});export{P as default};