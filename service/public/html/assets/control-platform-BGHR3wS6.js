import{u as m,r as O,_ as y}from"./index-0JxUx2HH.js";import{d,l as o}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .86L22 6.4V17.6l-10 5.55L2 17.6V6.4L12 .86zM4 8.9v7.51l7 3.89v-7.7L4 8.9zm9 11.4l7-3.89V8.9l-7 3.7v7.7zm-1-9.43l7.12-3.77L12 3.14 4.88 7.1 12 10.87z"}}]},j=d({name:"ControlPlatformIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:l,style:s}=m(t),p=o(()=>["t-icon","t-icon-control-platform",l.value]),f=o(()=>c(c({},s.value),r.style)),u=o(()=>({class:p.value,style:f.value,onClick:v=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:v})}}));return()=>O(P,u.value)}});export{j as default};
