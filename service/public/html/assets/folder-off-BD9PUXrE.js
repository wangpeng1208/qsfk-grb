import{u as O,r as d,_ as m}from"./index-ChiVvrNs.js";import{d as y,l}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.48 2.5l2 2.5H14v2h-3.48l-2-2.5H3v12.91l-2 2V2.5h8.48zM21.41 4l-1 1H23v15H5.41L3 22.41 1.59 21 20 2.59 21.41 4zm-3 3l-11 11H21V7h-2.59z"}}]},P=y({name:"FolderOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:o,style:c}=O(t),f=l(()=>["t-icon","t-icon-folder-off",o.value]),p=l(()=>s(s({},c.value),r.style)),u=l(()=>({class:f.value,style:p.value,onClick:v=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:v})}}));return()=>d(g,u.value)}});export{P as default};
