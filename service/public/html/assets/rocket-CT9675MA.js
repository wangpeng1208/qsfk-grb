import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.56 3.1h1.34v1.34a7 7 0 01-2.05 4.95l-7.56 7.56-4.24-4.24 7.56-7.56a7 7 0 014.95-2.05zM18 13.07l2.26-2.26a9 9 0 002.64-6.37V1.1h-3.34a9 9 0 00-6.37 2.64L10.93 6l-5.65-.71-4.24 4.23 13.44 13.44 4.23-4.24-.7-5.65zm-1.79 1.79l.4 3.14-2.13 2.13-1.77-1.77 3.5-3.5zM9.14 7.79l-3.5 3.5-1.77-1.77L6 7.4l3.14.39zm-3.5 9.16L2.1 20.48.7 19.07l3.53-3.54 1.42 1.42zm2.82 2.83L4.93 23.3 3.5 21.9l3.54-3.54 1.41 1.42z"}}]},P=d({name:"RocketIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),p=a(()=>["t-icon","t-icon-rocket",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};
