import{u as f,r as h,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as o}from"./index-CpJFga7x.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 1v1h6V1h2v2.16l-1 3V15h1v3h2v5H5v-5h2v-3h1V6.16l-1-3V1h2zm1 6v8h4V7h-4zm4.28-2l.33-1H9.4l.33 1h4.56zM9 17v1h6v-1H9zm8 3H7v1h10v-1z"}}]},P=y({name:"MonumentIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:v}=f(r),c=o(()=>["t-icon","t-icon-monument",a.value]),p=o(()=>s(s({},v.value),t.style)),u=o(()=>({class:c.value,style:p.value,onClick:m=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:m})}}));return()=>h(d,u.value)}});export{P as default};
