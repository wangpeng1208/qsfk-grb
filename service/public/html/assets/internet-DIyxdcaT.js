import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.05 11a9 9 0 016.28-7.6 16.9 16.9 0 00-2.3 7.6H3.05zM11 1.05a11 11 0 000 21.9l.01.01.43.03a12.48 12.48 0 001.14 0l.43-.03a11 11 0 000-21.91v-.01L12.57 1a11.16 11.16 0 00-1.14 0l-.43.03zM12 3c1.7 2.26 2.77 5 2.97 8H9.03c.2-3 1.27-5.74 2.97-8zM7.03 13a16.9 16.9 0 002.3 7.6A9 9 0 013.05 13h3.98zM12 21c-1.7-2.26-2.77-5-2.97-8h5.94c-.2 3-1.27 5.74-2.97 8zm2.67-.4a16.9 16.9 0 002.3-7.6h3.98a9 9 0 01-6.28 7.6zm2.3-9.6a16.9 16.9 0 00-2.3-7.6 9 9 0 016.28 7.6h-3.98z"}}]},z=d({name:"InternetIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=m(r),p=a(()=>["t-icon","t-icon-internet",o.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,v.value)}});export{z as default};
