import{u as d,r as O,_ as m}from"./index-Bqwwrko2.js";import{d as h,l as a}from"./index-Dys89YLq.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7171)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 .59L23.41 22 22 23.41 19.59 21H1V3h.59l-1-1L2 .59zM3 5v4h4.59l-4-4H3zm0 6v8h14.59l-8-8H3zm4.58-8H23v15.42l-2-2V11h-5.41l-2-2H21V5H9.59l-2-2zM5 14h5v2H5v-2z"}}]}]},b=h({name:"CreditcardOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=d(t),p=a(()=>["t-icon","t-icon-creditcard-off",l.value]),f=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:f.value,onClick:u=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:u})}}));return()=>O(y,v.value)}});export{b as default};
