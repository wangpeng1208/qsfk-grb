import{u as d,r as O,_ as m}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a7 7 0 00-7 7c0 2.86 1.78 5.62 3.74 7.76a26.16 26.16 0 003.26 3 24.68 24.68 0 003.26-3C17.22 15.62 19 12.86 19 10a7 7 0 00-7-7zm0 20.21l-.57-.39-.03-.02-.07-.05a16.88 16.88 0 01-1.22-.94 28.16 28.16 0 01-2.85-2.7C5.22 16.88 3 13.64 3 10a9 9 0 0118 0c0 3.64-2.22 6.88-4.26 9.11a28.15 28.15 0 01-4.14 3.7h-.02l-.01.01-.57.4zM8 9.5h8v2H8v-2z"}}]},P=y({name:"LocationReductionIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=d(r),p=a(()=>["t-icon","t-icon-location-reduction",o.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(g,v.value)}});export{P as default};
