import{u as m,r as O,_ as d}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h4.74l2.03 1.97a11.51 11.51 0 018.36-.04L17.61 1H23v12c-.24 5.61-5.13 10-11 10S1.24 18.61 1 13V1zm2 5.6a10.82 10.82 0 012.89-2.67L4.93 3H3v3.6zm0 5.99C3 17.18 6.97 21 12 21c5.03 0 9-3.82 9-8.41 0-3.27-2-6.14-4.98-7.53a9.47 9.47 0 00-8.04 0A8.38 8.38 0 003 12.6zM21 6.6V3h-2.4l-.64.83c1.19.73 2.22 1.67 3.04 2.77zM9 9v3H7V9h2zm8 0v3h-2V9h2zm-5 2.26l.9 1.8c.37.75.85.98 1.18 1 .22.02.45-.03.67-.18l.83-.57 1.12 1.66-.82.56c-.36.24-.76.41-1.17.49-.18.44-.4.93-.67 1.38-.2.34-.44.7-.73.99-.26.26-.7.61-1.3.61-.61 0-1.06-.35-1.32-.61a4.9 4.9 0 01-.73-.99c-.26-.45-.49-.94-.67-1.38a3.1 3.1 0 01-1.16-.49l-.83-.56 1.12-1.66.83.57c.22.15.45.2.67.19.33-.03.8-.26 1.19-1.02l.9-1.79zm-.68 4.42a8.04 8.04 0 00.68 1.18 8.02 8.02 0 00.68-1.18c-.24-.14-.47-.3-.68-.5-.21.2-.44.36-.68.5z"}}]},b=y({name:"DogeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-doge",o.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,u.value)}});export{b as default};
