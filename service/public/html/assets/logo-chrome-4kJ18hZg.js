import{u as m,r as O,_ as h}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1a11 11 0 110 22 11 11 0 010-22zM5.16 6.15L7.38 10l.22-.37A5.01 5.01 0 0112.1 7h7.38a9 9 0 00-14.33-.85zM3.93 8.02a9 9 0 006.43 12.84L12.58 17h-.5a5 5 0 01-4.49-2.64L3.93 8.02zm8.66 12.96A9 9 0 0020.5 9h-4.45l.24.42a5.01 5.01 0 010 5.16l-3.69 6.4zM9.4 13.5A3 3 0 0012 15h.04a2.99 2.99 0 002.53-1.45l.03-.05A3.06 3.06 0 0015 12a3.02 3.02 0 00-.4-1.5l-.03-.05A2.99 2.99 0 0012.07 9H12c-.12 0-.23 0-.35.02A3 3 0 009.4 10.5l-.05.1a2.99 2.99 0 000 2.8l.05.1z"}}]},P=y({name:"LogoChromeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-logo-chrome",o.value]),u=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(g,f.value)}});export{P as default};
