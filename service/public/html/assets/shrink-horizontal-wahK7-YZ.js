import{u as h,r as O,_ as m}from"./index-B4p2E3Fl.js";import{d as y,l as o}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 11h5.09l-2.5-2.5L5.5 7.09 10.41 12 5.5 16.91 4.09 15.5l2.5-2.5H1.5v-2zM13 3v18h-2V3h2zm.59 9l4.91-4.91 1.41 1.41-2.5 2.5h5.09v2h-5.09l2.5 2.5-1.41 1.41L13.59 12z"}}]},P=y({name:"ShrinkHorizontalIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=h(t),p=o(()=>["t-icon","t-icon-shrink-horizontal",a.value]),u=o(()=>s(s({},c.value),r.style)),v=o(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,v.value)}});export{P as default};
