import{u as m,r as d,_ as O}from"./index-CzBgriim.js";import{d as y,l as o}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 25 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2.5h8.48l2 2.5H24v16H13v-2h9V7H11.52l-2-2.5H4v8.25H2V2.5zm5.05 10.59L11.91 18l-4.86 4.92-1.42-1.41 2.48-2.5H1v-2h7.1l-2.47-2.52 1.42-1.4z"}}]},P=y({name:"FolderImportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:s}=m(t),c=o(()=>["t-icon","t-icon-folder-import",l.value]),v=o(()=>p(p({},s.value),r.style)),u=o(()=>({class:c.value,style:v.value,onClick:f=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:f})}}));return()=>d(g,u.value)}});export{P as default};