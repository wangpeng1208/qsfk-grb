import{u as m,r as O,_ as y}from"./index-Bqwwrko2.js";import{d,l as a}from"./index-Dys89YLq.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v2.5h-2V1h2zm8.41 2.5L15 9.91 13.59 8.5 20 2.09l1.41 1.41zM4 2.09l11.97 11.96a4 4 0 11-1.42 1.42L12 12.9l-2.55 2.56a4 4 0 11-1.42-1.42l2.56-2.55-8-8L4 2.09zM13 5v2.5h-2V5h2zM7.41 16.09A2 2 0 104.6 18.9 2 2 0 007.4 16.1zm12 0a2 2 0 10-2.82 2.82 2 2 0 002.82-2.82z"}}]},P=d({name:"Cut1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=m(r),p=a(()=>["t-icon","t-icon-cut-1",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{P as default};
