import{u as d,r as m,_ as O}from"./index-CzBgriim.js";import{d as y,l}from"./index-Bbii3Das.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .81l8.38 5.39-1.08 1.68-.3-.2v3.43l3.37 2.06-1.04 1.7-.33-.2V22H3v-7.33l-.33.2-1.04-1.7L5 11.1V7.69l-.3.2L3.62 6.2 12 .81zm-5 5.6v3.47l5-3.05 5 3.05V6.4L12 3.2 7 6.4zm-2 7.04V20h6v-4h2v4h6v-6.55l-7-4.28-7 4.28z"}}]},P=y({name:"Building5Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=d(t),p=l(()=>["t-icon","t-icon-building-5",a.value]),u=l(()=>s(s({},c.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};