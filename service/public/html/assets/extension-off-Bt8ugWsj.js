import{u as O,r as h,_ as m}from"./index-0JxUx2HH.js";import{d as y,l as a}from"./index-DyfhlEKp.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7305)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 3.99A3 3 0 0114 4h6v6a3 3 0 01.01 6l.05 2.52L18 16.4V14h2a1 1 0 100-2h-2V6h-6V4a1 1 0 10-2 0v2H7.59L5.53 3.94 8 4zm-7-2.4L22.41 23 21 24.41 18.59 22h-5l-.12-.86a2.5 2.5 0 00-4.94 0L8.4 22H2v-6.4l.86-.13a2.5 2.5 0 000-4.94L2 10.4V5.41L-.41 3 1 1.59zM4 7.4v1.35a4.5 4.5 0 010 8.48V20h2.76a4.5 4.5 0 018.48 0h1.35L4 7.41z"}}]}]},b=y({name:"ExtensionOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-extension-off",o.value]),f=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>h(d,u.value)}});export{b as default};
