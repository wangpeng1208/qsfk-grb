import{u as d,r as O,_ as m}from"./index-CzBgriim.js";import{d as y,l}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1a11 11 0 100 22 11 11 0 000-22zm4 7v8H8V8h8z"}}]},h=y({name:"StopCircleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=d(t),p=l(()=>["t-icon","t-icon-stop-circle-filled",a.value]),u=l(()=>c(c({},s.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,f.value)}});export{h as default};
