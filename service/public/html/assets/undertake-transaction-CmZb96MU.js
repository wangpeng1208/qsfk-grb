import{u as m,r as d,_ as O}from"./index-B4p2E3Fl.js";import{d as h,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.5 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10 5.5a4.5 4.5 0 016.5-4.03A4.49 4.49 0 0123 5.5a4.5 4.5 0 01-6.5 4.03A4.49 4.49 0 0110 5.5zm8.25 2.49l.25.01a2.5 2.5 0 10-.25-4.99 4.48 4.48 0 010 4.98zm-9.81 5.26a1.25 1.25 0 00-.89.36L5.5 15.66v3.84h5.63l5.8-1.45 3.53-1.5a.56.56 0 00-.41-1.03h-.02L13.6 17H10v-2h3.13a.87.87 0 100-1.75h-4.7zm7.55 1.15l3.55-.82a2.56 2.56 0 011.8 4.76l-.03.02-3.74 1.6-6.2 1.54H0v-7.25h4.09l2.05-2.05a3.25 3.25 0 012.3-.95h4.69a2.87 2.87 0 012.86 3.15zM3.5 16.25H2v3.25h1.5v-3.25z"}}]},P=h({name:"UndertakeTransactionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-undertake-transaction",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>d(y,v.value)}});export{P as default};
