import{u as d,r as O,_ as g}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8792_7013)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M.5.51h5.7v5h-2V3.4a11 11 0 000 13.19v-2.1h2v4.99H.5v-2h1.87a13.01 13.01 0 010-14.98H.5v-2zM10 7.65a.76.76 0 00-1.3.75l5.01 8.69-4.4 1.38v.18l5.2 2.15c.2.09.45.07.66-.04l6.13-3.55a.76.76 0 00.37-.8l-1.13-5.53a.76.76 0 00-.74-.6l-4.2-.02a.76.76 0 00-.38.1l-2.74 1.58-2.47-4.3zM7.98 5.64c1.32-.76 3-.31 3.77 1l1.48 2.56 1-.57c.42-.25.9-.38 1.39-.37l4.2.02c1.3 0 2.42.92 2.68 2.2L23.63 16a2.76 2.76 0 01-1.33 2.94l-6.13 3.55c-.74.43-1.64.49-2.43.16l-6.52-2.7.1-1.69c.06-.77.58-1.44 1.32-1.67l2.1-.66L6.96 9.4c-.77-1.32-.31-3 1-3.76z"}}]}]},P=y({name:"GestureUpAndDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-gesture-up-and-down",l.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{P as default};
