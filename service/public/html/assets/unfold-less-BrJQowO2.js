import{u as d,r as O,_ as m}from"./index-0JxUx2HH.js";import{d as y,l as o}from"./index-DyfhlEKp.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 3.59l4 4 4-4L17.41 5 12 10.41 6.59 5 8 3.59zm4 10L17.41 19 16 20.41l-4-4-4 4L6.59 19 12 13.59z"}}]},j=y({name:"UnfoldLessIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=d(t),p=o(()=>["t-icon","t-icon-unfold-less",a.value]),u=o(()=>i(i({},c.value),r.style)),f=o(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(g,f.value)}});export{j as default};
