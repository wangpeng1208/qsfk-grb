import{u as f,r as d,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as o}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 6.5v11h7.91l5.5-5.5-5.5-5.5H2zm2 2h5.09l3.5 3.5-3.5 3.5H4v-7zm10.59-1l4.5 4.5-4.5 4.5L16 17.91 21.91 12 16 6.09 14.59 7.5z"}}]},P=y({name:"ComponentBreadcrumbIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:p}=f(t),s=o(()=>["t-icon","t-icon-component-breadcrumb",a.value]),u=o(()=>c(c({},p.value),r.style)),v=o(()=>({class:s.value,style:u.value,onClick:m=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:m})}}));return()=>d(b,v.value)}});export{P as default};
