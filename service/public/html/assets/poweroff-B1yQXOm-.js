import{u as O,r as m,_ as y}from"./index-Bqwwrko2.js";import{d,l as o}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 2v10h-2V2h2zm3.78 1.73l.8.59A9.49 9.49 0 0112 21.5 9.5 9.5 0 016.41 4.32l.8-.6L8.4 5.35l-.81.6A7.49 7.49 0 0012 19.5a7.5 7.5 0 004.41-13.57l-.8-.59 1.17-1.61z"}}]},b=d({name:"PoweroffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:p}=O(t),c=o(()=>["t-icon","t-icon-poweroff",a.value]),f=o(()=>s(s({},p.value),r.style)),u=o(()=>({class:c.value,style:f.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>m(g,u.value)}});export{b as default};