import{u as m,r as O,_ as d}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.48 1H20v2h-4.02l-.65 2.22h4.74L18.86 23H6.22l-.87-12.72A4.2 4.2 0 012 6.22a4.2 4.2 0 014.23-4.16 4.22 4.22 0 014.11 3.16h2.9L14.49 1zm-1.82 6.22H7.14l.24 3.48 4.07.67 1.21-4.15zM12 13.48l-4.48-.73L8.1 21h8.9l.45-6.62-5.44-.9zm5.58-1.1l.35-5.16h-3.19l-1.3 4.47 4.14.69zM8.2 5.22a2.23 2.23 0 00-1.98-1.16A2.2 2.2 0 004 6.22c0 .8.48 1.53 1.2 1.9L5 5.22h3.21z"}}]},P=y({name:"DrinkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),p=a(()=>["t-icon","t-icon-drink",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{P as default};
