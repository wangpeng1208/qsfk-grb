import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d as h,l}from"./index-CpJFga7x.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 1h11v2H6v18h12V11h2v12H4V1zm16 0v4.66l1.53-1.47 1.38 1.45L19 9.38l-3.91-3.74 1.38-1.45L18 5.66V1h2zm-9 16h2v2h-2v-2z"}}]},P=h({name:"InstallMobileIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:c}=m(r),p=l(()=>["t-icon","t-icon-install-mobile",a.value]),v=l(()=>s(s({},c.value),t.style)),u=l(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(b,u.value)}});export{P as default};
