import{u as f,r as O,_ as y}from"./index-Bqwwrko2.js";import{d as g,l as a}from"./index-Dys89YLq.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm12-7.67v1.19A6.56 6.56 0 0118.48 11h1.19v2h-1.19A6.56 6.56 0 0113 18.48v1.19h-2v-1.19A6.56 6.56 0 015.52 13H4.33v-2h1.19A6.56 6.56 0 0111 5.52V4.33h2zm-1 3.11a4.56 4.56 0 100 9.12 4.56 4.56 0 000-9.12zm0 4.45a.11.11 0 100 .22.11.11 0 000-.22zM9.89 12a2.11 2.11 0 114.22 0 2.11 2.11 0 01-4.22 0z"}}]},P=g({name:"MapAimingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=f(t),c=a(()=>["t-icon","t-icon-map-aiming",i.value]),v=a(()=>p(p({},s.value),r.style)),u=a(()=>({class:c.value,style:v.value,onClick:m=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:m})}}));return()=>O(d,u.value)}});export{P as default};
