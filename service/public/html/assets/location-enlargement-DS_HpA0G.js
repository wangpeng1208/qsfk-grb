import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d as g,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a7 7 0 00-7 7c0 2.86 1.78 5.62 3.74 7.76a26.16 26.16 0 003.26 3 24.68 24.68 0 003.26-3C17.22 15.62 19 12.86 19 10a7 7 0 00-7-7zm0 20.21l-.57-.39-.03-.02-.07-.05a16.88 16.88 0 01-1.22-.94 28.16 28.16 0 01-2.85-2.7C5.22 16.88 3 13.64 3 10a9 9 0 0118 0c0 3.64-2.22 6.88-4.26 9.11a28.15 28.15 0 01-4.14 3.7h-.02l-.01.01-.57.4zM13 6.5v3h3v2h-3v3h-2v-3H8v-2h3v-3h2z"}}]},P=g({name:"LocationEnlargementIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=m(r),p=a(()=>["t-icon","t-icon-location-enlargement",o.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,u.value)}});export{P as default};
