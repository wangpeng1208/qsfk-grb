import{u as O,r as y,_ as d}from"./index-B4p2E3Fl.js";import{d as m,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0z"}},{tag:"path",attrs:{fill:"currentColor",d:"M8 8h8v8H8V8z"}}]},P=m({name:"StopCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-stop-circle",o.value]),u=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>y(g,f.value)}});export{P as default};