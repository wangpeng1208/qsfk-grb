import{u as m,r as O,_ as d}from"./index-CzBgriim.js";import{d as y,l}from"./index-Bbii3Das.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 1h9v3H22v2h-2.03l-.5 17H4.53l-.5-17H2V4h5.5V1zm2 3h5V3h-5v1zM6.03 6l.44 15h11.06l.44-15H6.03zm3.14 3.26L12 12.09l2.83-2.83 1.41 1.41-2.83 2.83 2.83 2.83-1.41 1.41L12 14.91l-2.83 2.83-1.41-1.41 2.83-2.83-2.83-2.83 1.41-1.41z"}}]},P=y({name:"Delete1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:c}=m(r),p=l(()=>["t-icon","t-icon-delete-1",a.value]),u=l(()=>s(s({},c.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{P as default};
