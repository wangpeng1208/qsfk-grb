import{u as h,r as m,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.98 5.11A8.79 8.79 0 0112 2a8.79 8.79 0 018.9 7H22v2h-1v9h1v2H2v-2h1v-9H2V9h1.1a8.86 8.86 0 011.88-3.89zM5 11v9h3v-3a4 4 0 118 0v3h3v-9H5zm13.85-2a6.98 6.98 0 00-1.37-2.61 6.41 6.41 0 00-3.08-2.05A12.53 12.53 0 0115.94 9h2.9zm-4.92 0a10.7 10.7 0 00-1.71-4.36L12 4.35l-.22.29A10.7 10.7 0 0010.08 9h3.85zM8.06 9A12.53 12.53 0 019.6 4.34 6.41 6.41 0 006.52 6.4 6.98 6.98 0 005.15 9h2.9zM14 20v-3a2 2 0 00-4 0v3h4z"}}]},P=y({name:"Shop2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=h(t),v=a(()=>["t-icon","t-icon-shop-2",o.value]),c=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:v.value,style:c.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{P as default};
