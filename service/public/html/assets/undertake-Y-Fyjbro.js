import{u as d,r as O,_ as h}from"./index-Bqwwrko2.js";import{d as m,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.86 8.78a1.38 1.38 0 00-.97.4L5.7 11.36v4.14h6.01l6.15-1.54 3.74-1.6a.64.64 0 00-.48-1.18h-.02l-6.77 1.56h-3.76v-2h3.25a.98.98 0 000-1.96H8.86zm7.92 1.35l3.84-.89a2.65 2.65 0 011.86 4.93l-.03.01-3.95 1.69-6.54 1.63H0V9.95h4.29l2.18-2.19a3.38 3.38 0 012.4-.98h4.95a2.98 2.98 0 012.96 3.35zM3.7 11.95H2v3.55h1.7v-3.55z"}}]},P=m({name:"UndertakeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=d(t),p=a(()=>["t-icon","t-icon-undertake",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(y,v.value)}});export{P as default};
