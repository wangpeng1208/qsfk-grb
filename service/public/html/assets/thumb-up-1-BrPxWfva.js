import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d as h,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.55 1.76l1.72.58a3.7 3.7 0 012.53 3.5V8.3h3.87a3 3 0 012.96 3.46l-1.18 7.7A3 3 0 0117.48 22H3V10.1h3.85l3.7-8.34zm1.1 2.48l-3.5 7.86H5V20h12.48a1 1 0 001-.85l1.18-7.7a1 1 0 00-1-1.15H12.8V5.85a1.7 1.7 0 00-1.15-1.61z"}}]},P=h({name:"ThumbUp1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),c=a(()=>["t-icon","t-icon-thumb-up-1",l.value]),u=a(()=>p(p({},s.value),r.style)),f=a(()=>({class:c.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(b,f.value)}});export{P as default};
