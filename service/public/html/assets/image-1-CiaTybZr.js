import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d as g,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 4a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0zM9.93 8.12l4.42 7.02 2.58-3.98L23.97 22H1.19L9.93 8.12zm0 3.76L4.8 20h15.47l-3.35-5.16-2.6 4.01-4.4-6.97z"}}]},h=g({name:"Image1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-image-1",o.value]),u=a(()=>s(s({},c.value),r.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(d,f.value)}});export{h as default};
