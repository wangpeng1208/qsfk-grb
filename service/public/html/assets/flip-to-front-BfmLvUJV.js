import{u as m,r as h,_ as O}from"./index-CzBgriim.js";import{d as y,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 3h14v14H7V3zm2 2v10h10V5H9zM5 7.5v3H3v-3h2zm0 5v3H3v-3h2zm0 5V19h1.5v2H3v-3.5h2zm6.5 1.5v2h-3v-2h3zm2 0h3v2h-3v-2z"}}]},z=y({name:"FlipToFrontIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:p}=m(t),s=o(()=>["t-icon","t-icon-flip-to-front",a.value]),c=o(()=>v(v({},p.value),r.style)),f=o(()=>({class:s.value,style:c.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>h(d,f.value)}});export{z as default};
