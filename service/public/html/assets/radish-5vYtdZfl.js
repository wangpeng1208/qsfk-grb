import{u as d,r as O,_ as h}from"./index-ChiVvrNs.js";import{d as m,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.39 1.95V6.2L20 2.59 21.41 4l-3.6 3.61h4.24v2h-4.5a8.3 8.3 0 011.55 2.98c.64 2.6-.64 5.87-3.94 7.92-2.74 1.7-6.85 2.54-12.5 1.67l-.73-.11-.11-.72a23.91 23.91 0 01-.06-7.8c.67-3.76 2.42-6.27 4.51-7.62a6.7 6.7 0 015.14-1.03 8.3 8.3 0 012.98 1.55v-4.5h2zm-1.7 7.37l-.02-.01a11.02 11.02 0 00-.35-.33c-.25-.22-.59-.5-.98-.81A6.84 6.84 0 0011 6.86h-.02l-.03-.01a4.26 4.26 0 00-2.45.2L10.9 9.5l-1.42 1.4L6.7 8.1c-1.23 1.03-2.34 2.74-2.88 5.3L6.9 16.5 5.5 17.9l-1.99-2c-.07 1.3-.02 2.76.2 4.4 4.12.53 7.15.04 9.28-.9l-2.9-2.91 1.42-1.41 3.26 3.27c2.18-1.64 2.76-3.83 2.4-5.3l-.01-.03v-.02a6.84 6.84 0 00-1.32-2.35 17.7 17.7 0 00-1.14-1.33v-.01z"}}]},P=m({name:"RadishIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-radish",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(y,u.value)}});export{P as default};
