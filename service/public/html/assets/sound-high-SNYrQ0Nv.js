import{u as m,r as d,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 1.29v21.42L5.74 17.5H1v-11h4.74L15 1.29zM5 8.5H3v7h2v-7zm2 7.41l6 3.38V4.71L7 8.08v7.83zM20.45 5.64l.7.7a8 8 0 010 11.32l-.7.7-1.41-1.41.7-.7a6 6 0 000-8.5l-.7-.7 1.41-1.41zm-3.18 3.18l1.41-1.42.7.71a5.5 5.5 0 010 7.78l-.7.7-1.41-1.4.7-.72a3.5 3.5 0 000-4.95l-.7-.7zm-.36.35l.71.7a3 3 0 010 4.25l-.7.7-1.42-1.4.7-.71a1 1 0 000-1.42l-.7-.7 1.41-1.42z"}}]},P=y({name:"SoundHighIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=m(t),p=a(()=>["t-icon","t-icon-sound-high",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{P as default};
