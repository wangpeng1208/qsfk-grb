import{u as d,r as O,_ as g}from"./index-Bqwwrko2.js";import{d as y,l as o}from"./index-Dys89YLq.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1C5.93 1 1 6.05 1 12.28c0 4.98 3.15 9.2 7.52 10.7.55.1.73-.25.73-.54v-2.1c-3.06.68-3.7-1.33-3.7-1.33-.5-1.3-1.22-1.65-1.22-1.65-1-.7.08-.69.08-.69 1.1.08 1.68 1.16 1.68 1.16.98 1.73 2.58 1.23 3.2.94.1-.73.39-1.23.7-1.5-2.44-.3-5-1.26-5-5.58 0-1.23.42-2.24 1.12-3.03a4.15 4.15 0 01.11-2.98s.93-.3 3.03 1.15a10.3 10.3 0 015.5 0c2.1-1.46 3.03-1.15 3.03-1.15.6 1.55.22 2.7.1 2.98.71.8 1.14 1.8 1.14 3.03 0 4.33-2.58 5.28-5.02 5.56.39.35.75 1.04.75 2.1v3.09c0 .3.18.65.73.54A11.26 11.26 0 0023 12.28C23 6.05 18.07 1 12 1z"}}]},P=y({name:"LogoGithubFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:s}=d(r),p=o(()=>["t-icon","t-icon-logo-github-filled",a.value]),u=o(()=>c(c({},s.value),t.style)),v=o(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,v.value)}});export{P as default};
