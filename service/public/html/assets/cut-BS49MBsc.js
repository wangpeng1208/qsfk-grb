import{u as O,r as m,_ as y}from"./index-B4p2E3Fl.js";import{d,l as a}from"./index-CpJFga7x.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.41 4.59A2 2 0 104.6 7.4 2 2 0 007.4 4.6zM3.17 3.17a4 4 0 016.28 4.86L12 10.6l8-8L21.41 4 9.45 15.97a4 4 0 11-1.42-1.42L10.6 12 8.03 9.45a4 4 0 01-4.86-6.28zM15 13.6L21.41 20 20 21.41 13.59 15 15 13.59zm-7.59 3A2 2 0 104.6 19.4 2 2 0 007.4 16.6z"}}]},j=d({name:"CutIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=O(r),p=a(()=>["t-icon","t-icon-cut",o.value]),u=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>m(g,f.value)}});export{j as default};