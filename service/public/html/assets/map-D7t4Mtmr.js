import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1.84l6.07 3.55L22 2.5v15.57l-7 4.09-6.07-3.55L2 21.5V5.93l7-4.09zm1 15.09l4 2.33V7.07l-4-2.33v12.19zM8 4.74L4 7.07V18.5l4-1.67V4.74zm8 2.43v12.09l4-2.33V5.5l-4 1.67z"}}]},j=d({name:"MapIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),c=a(()=>["t-icon","t-icon-map",l.value]),u=a(()=>p(p({},s.value),r.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{j as default};
