import{u as y,r as m,_ as O}from"./index-CzBgriim.js";import{d,l as o}from"./index-Bbii3Das.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v12.41L14.41 22H2V2zm2 2v16h9v-7h7V4H4zm14.59 11H15v3.59L18.59 15zM6 8h12v2H6V8zm0 4h5v2H6v-2z"}}]},P=d({name:"StickyNoteIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:c}=y(r),p=o(()=>["t-icon","t-icon-sticky-note",a.value]),v=o(()=>s(s({},c.value),t.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(h,u.value)}});export{P as default};