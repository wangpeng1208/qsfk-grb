import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d as g,l}from"./index-Bbii3Das.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16 4a4 4 0 00-4 4v2h-1c-3.4 0-6.49-1.3-8.8-3.43A9.55 9.55 0 008 17.34l1.73.68-1.52 1.07c-.8.55-1.65 1.02-2.56 1.4A11 11 0 0020 10V8.47l.23-.27c.54-.67.93-1.17 1.28-1.66-.28.11-.55.2-.79.25l-.77.18-.35-.72A4 4 0 0016 4zm6.98 1.75l1.01.7-.56.83c-.42.6-.83 1.17-1.43 1.9V10A13 13 0 012.3 21.14L.05 19.8l2.58-.49c1.03-.19 2-.52 2.91-.96A11.5 11.5 0 01.81 4.26l.62-1.57 1.08 1.3C4.33 6.2 6.99 7.7 10 7.96A6 6 0 0120.95 4.6c.37-.16.76-.38 1-.58l.78-.63L24 4.95l-.78.63a4.4 4.4 0 01-.23.17z"}}]},P=g({name:"LogoTwitterIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:o,style:s}=O(r),p=l(()=>["t-icon","t-icon-logo-twitter",o.value]),u=l(()=>c(c({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>m(d,v.value)}});export{P as default};
