import{u as m,r as O,_ as y}from"./index-Bqwwrko2.js";import{d,l as a}from"./index-Dys89YLq.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M23 22V6h-4.54A4 4 0 0012 1.35 3.99 3.99 0 005.54 6H1v16h22zM13 4a2 2 0 114 0 2 2 0 01-4 0zm1.41 4H21v6H3V8h6.59l-3 3L8 12.41l4-4 4 4L17.41 11l-3-3zM3 16h18v4H3v-4zm8-12a2 2 0 11-4 0 2 2 0 014 0z"}}]},P=d({name:"GiftIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-gift",o.value]),v=a(()=>s(s({},c.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>O(g,f.value)}});export{P as default};
