import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d as g,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.1 4a4.3 4.3 0 00-4.4 4.2c0 .26.03.52.07.77L7 10.15H5.8c-.96 0-1.8.87-1.8 1.85v1H2v-1a3.91 3.91 0 012.7-3.68V8.2A6.3 6.3 0 0111.1 2c.55 0 1.08.07 1.59.2a6.33 6.33 0 014.53 4.18c.72.09 1.4.32 2.01.66A5.85 5.85 0 0122 12v1h-2v-1c0-1.3-.76-2.67-1.74-3.22a3.61 3.61 0 00-1.82-.45l-.85.02-.15-.84a4.29 4.29 0 00-3.23-3.38A4.6 4.6 0 0011.1 4zM2 14h6v2H2v-2zm8 0h12v2H10v-2zm7 4h5v2h-5v-2zM2 20v-2h13v2H2z"}}]},P=g({name:"FogIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=m(t),s=a(()=>["t-icon","t-icon-fog",o.value]),p=a(()=>c(c({},v.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,u.value)}});export{P as default};
