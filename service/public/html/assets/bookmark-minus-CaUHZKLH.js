import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as o}from"./index-CpJFga7x.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 3h9v2H6v14.06l6-4.29 6 4.29V7h2v15.94l-8-5.71-8 5.71V3zm11 0h8v2h-8V3z"}}]},P=d({name:"BookmarkMinusIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=m(t),p=o(()=>["t-icon","t-icon-bookmark-minus",a.value]),u=o(()=>s(s({},c.value),r.style)),v=o(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(b,v.value)}});export{P as default};
