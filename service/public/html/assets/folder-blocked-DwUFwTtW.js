import{u as d,r as m,_ as O}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v5h-2V7H10.52l-2-2.5H3V19h8.5v2H1V2.5zm17.5 11a3.5 3.5 0 00-3.08 5.17l4.75-4.75a3.48 3.48 0 00-1.67-.42zm3.08 1.83l-4.75 4.75a3.5 3.5 0 004.74-4.74zM13 17a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"}}]},P=y({name:"FolderBlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-folder-blocked",l.value]),u=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>m(b,f.value)}});export{P as default};
