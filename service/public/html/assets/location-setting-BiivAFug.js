import{u as m,r as O,_ as g}from"./index-0JxUx2HH.js";import{d as y,l as n}from"./index-DyfhlEKp.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 3a7 7 0 017 7v1h2v-1a9 9 0 10-18 0c0 3.64 2.22 6.88 4.26 9.11a28.15 28.15 0 003.8 3.44c.39.3.8.56 1.2.84l1.13-1.65c-.38-.26-.77-.51-1.14-.8l-.86-.67c-.73-.6-1.7-1.46-2.65-2.5C5.78 15.61 4 12.86 4 10a7 7 0 017-7zm0 5a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"}},{tag:"path",attrs:{fill:"currentColor",d:"M19 12.75v1.38a4 4 0 011.85 1.07l1.2-.7 1 1.74-1.2.69a4 4 0 010 2.14l1.2.69-1 1.73-1.2-.69A4 4 0 0119 21.87v1.38h-2v-1.38a4 4 0 01-1.85-1.07l-1.2.7-1-1.74 1.2-.69a4 4 0 010-2.14l-1.2-.69 1-1.73 1.2.69A4 4 0 0117 14.13v-1.38h2zm-2.75 4.28a2 2 0 000 1.94l.04.06a2 2 0 003.42 0l.04-.06a2 2 0 000-1.94l-.04-.06a2 2 0 00-3.42 0l-.04.06z"}}]},P=y({name:"LocationSettingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=m(r),p=n(()=>["t-icon","t-icon-location-setting",l.value]),v=n(()=>c(c({},s.value),t.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
