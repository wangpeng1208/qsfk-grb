import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d as h,l as a}from"./index-Bbii3Das.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 2v1.08A6 6 0 006 9a5 5 0 00-5 5v8h22v-8a5 5 0 00-5-5 6 6 0 00-5-5.92V2h-2zm7 9a3 3 0 013 3v6h-3v-9zm-2 9h-3v-5h-2v5H8V10h8v10zM6 20H3v-6a3 3 0 013-3v9zM8.13 8a4 4 0 017.74 0H8.13z"}}]},P=h({name:"Castle2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),v=a(()=>["t-icon","t-icon-castle-2",o.value]),p=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
