import{u as m,r as O,_ as h}from"./index-CzBgriim.js";import{d as y,l as a}from"./index-Bbii3Das.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.24 0a5.48 5.48 0 010 7h4.76a3.5 3.5 0 100-7h-4.76zM2 12a5.5 5.5 0 015.5-5.5h9a5.5 5.5 0 110 11h-9A5.5 5.5 0 012 12z"}}]},b=y({name:"ComponentSwitchIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=m(r),p=a(()=>["t-icon","t-icon-component-switch",o.value]),u=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>O(d,f.value)}});export{b as default};
