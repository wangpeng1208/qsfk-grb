import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.5 19.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM2 18a3.5 3.5 0 104.67-3.3 2 2 0 011.83-1.2h7a4 4 0 004-4v-.14a3.5 3.5 0 10-2 0v.14a2 2 0 01-2 2h-7c-.73 0-1.41.2-2 .54V9.36a3.5 3.5 0 10-2 0v5.28A3.5 3.5 0 002 18zM18.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"}}]},P=d({name:"GitBranchIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-git-branch",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
