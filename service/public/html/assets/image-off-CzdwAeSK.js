import{u as m,r as O,_ as y}from"./index-CzBgriim.js";import{d as g,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 .59L.59 22 2 23.41 3.41 22H22V3.41L23.41 2 22 .59zM11.5 13.9L17.59 20H5.4l6.09-6.09zM20 19.6l-7.09-7.09 1.07-1.06a3.21 3.21 0 004.46-4.46L20 5.4V19.6zm-4.47-9.62l1.44-1.44a1.22 1.22 0 01-1.44 1.44zM2 2v15.66l2-1.7V4h11.36l2.37-2H2z"}}]},h=g({name:"ImageOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),p=a(()=>["t-icon","t-icon-image-off",l.value]),f=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(d,u.value)}});export{h as default};
