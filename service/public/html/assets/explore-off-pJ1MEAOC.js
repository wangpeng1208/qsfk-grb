import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.47 1.97a11 11 0 0114.56 14.56l-.41.9-1.83-.81.42-.92A9 9 0 008.3 3.8l-.93.4-.82-1.82.91-.4zM3 1.6l7.6 7.6 4.21 4.2 7.6 7.61L21 22.41l-1.96-1.96a11 11 0 01-15.5-15.5L1.6 3.01 3 1.59zm1.97 4.8a9 9 0 0012.65 12.65l-3.6-3.6-1.54 4.03-2.1-5.84-5.85-2.1 4.03-1.55-3.6-3.6zm12.47.17l-1.93 5.03-1.87-.71.32-.84-.84.32-.71-1.86 5.03-1.94z"}}]},j=d({name:"ExploreOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),c=a(()=>["t-icon","t-icon-explore-off",l.value]),f=a(()=>p(p({},s.value),r.style)),u=a(()=>({class:c.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(g,u.value)}});export{j as default};
