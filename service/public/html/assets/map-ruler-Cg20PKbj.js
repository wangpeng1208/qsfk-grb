import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_8450)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.86.22l7.8 7.8-15.8 15.81-7.81-7.8L15.85.21zm0 2.82l-2.19 2.19 1.6 1.6-1.4 1.41-1.61-1.6-2.19 2.19 2.4 2.4-1.4 1.41-2.4-2.4-2.2 2.19 1.6 1.6-1.4 1.41-1.6-1.6-2.2 2.18 5 4.99L20.83 8.03l-4.98-4.99z"}}]}]},h=d({name:"MapRulerIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),s=a(()=>["t-icon","t-icon-map-ruler",l.value]),u=a(()=>p(p({},c.value),r.style)),f=a(()=>({class:s.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,f.value)}});export{h as default};
