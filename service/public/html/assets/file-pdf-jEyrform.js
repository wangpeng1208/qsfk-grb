import{u as h,r as m,_ as d}from"./index-Bqwwrko2.js";import{d as O,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59V11h-2V9h-6V3H5v18h16v2H3V1zm12 2.41V7h3.59L15 3.41zM6 12h3.71c.71 0 1.29.58 1.29 1.29v2.42c0 .71-.58 1.29-1.29 1.29H8v3H6v-8zm2 3h1v-1H8v1zm3.5-3h3.71c.71 0 1.29.58 1.29 1.29v5.42c0 .71-.58 1.29-1.29 1.29H11.5v-8zm2 2v4h1v-4h-1zm3.5-.71c0-.71.58-1.29 1.29-1.29h3.38v2H19v1h2.67v2H19v3h-2v-6.71z"}}]},b=O({name:"FilePdfIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=h(t),s=a(()=>["t-icon","t-icon-file-pdf",o.value]),p=a(()=>v(v({},c.value),r.style)),f=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>m(y,f.value)}});export{b as default};
