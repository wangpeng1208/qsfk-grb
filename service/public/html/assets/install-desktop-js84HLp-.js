import{u as O,r as m,_ as y}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M20 2v4.66l1.53-1.47 1.38 1.45L19 10.38l-3.91-3.74 1.38-1.45L18 6.66V2h2zM1 3h13v2H3v11h18v-4h2v6H1V3zm4 17h14v2H5v-2z"}}]},P=d({name:"InstallDesktopIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=O(r),c=a(()=>["t-icon","t-icon-install-desktop",l.value]),v=a(()=>s(s({},p.value),t.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(h,u.value)}});export{P as default};
