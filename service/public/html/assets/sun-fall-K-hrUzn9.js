import{u as h,r as m,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 3v3h-2V3h2zm7.49 3.93l-2.13 2.12-1.41-1.41 2.12-2.13 1.42 1.42zM4.93 5.5l2.12 2.13-1.41 1.41L3.5 6.93 4.93 5.5zM12 10a4 4 0 00-4 4v1H6v-1a6 6 0 0112 0v1h-2v-1a4 4 0 00-4-4zM1 13h3v2H1v-2zm19 0h3v2h-3v-2zM1 17h8.3l2.7 1.8 2.7-1.8H23v2h-7.7L12 21.2 8.7 19H1v-2z"}}]},z=y({name:"SunFallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:v}=h(t),c=a(()=>["t-icon","t-icon-sun-fall",l.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(d,u.value)}});export{z as default};
