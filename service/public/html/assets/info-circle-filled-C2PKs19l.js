import{u as d,r as O,_ as m}from"./index-ChiVvrNs.js";import{d as y,l}from"./index-Bl4AiOyE.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"}}]},P=y({name:"InfoCircleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=d(t),p=l(()=>["t-icon","t-icon-info-circle-filled",a.value]),f=l(()=>c(c({},s.value),r.style)),u=l(()=>({class:p.value,style:f.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>O(h,u.value)}});export{P as default};
