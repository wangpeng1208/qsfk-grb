import{u as d,r as m,_ as O}from"./index-0JxUx2HH.js";import{d as h,l as o}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v5h-2V7H10.52l-2-2.5H3V19h10v2H1V2.5zm18.5 11c-.69 0-1.25.56-1.25 1.25v.75H24V22h-9v-6.5h1.25v-.75a3.25 3.25 0 015.54-2.3l.71.7-1.41 1.42-.7-.7a1.24 1.24 0 00-.89-.37zm-2.5 4V20h5v-2.5h-5z"}}]},P=h({name:"FolderUnlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:s}=d(t),p=o(()=>["t-icon","t-icon-folder-unlocked",l.value]),v=o(()=>c(c({},s.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>m(y,u.value)}});export{P as default};
