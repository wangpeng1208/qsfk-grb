import{u as d,r as m,_ as O}from"./index-Bqwwrko2.js";import{d as y,l as o}from"./index-Dys89YLq.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19 22.7l-9.26-5.2H5v-11h4.74L19 1.29v21.42zM9 8.5H7v7h2v-7zm2 7.41l6 3.38V4.71l-6 3.37v7.83z"}}]},P=y({name:"SoundMuteIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:c}=d(r),u=o(()=>["t-icon","t-icon-sound-mute",a.value]),p=o(()=>s(s({},c.value),t.style)),v=o(()=>({class:u.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(g,v.value)}});export{P as default};
