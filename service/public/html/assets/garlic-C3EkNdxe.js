import{u as O,r as m,_ as y}from"./index-0JxUx2HH.js";import{d,l as a}from"./index-DyfhlEKp.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15.5.28v2.06c-.01.74-.02 1.63.3 2.7.38 1.23 1.2 2.73 3.15 4.3 2.15 1.76 4 4.8 4.05 7.64a5.42 5.42 0 01-1.82 4.28C19.9 22.4 18 23 15.5 23c-.5 0-.96-.2-1.2-.33-.72.24-1.5.33-2.3.33-.92 0-1.65-.2-2.23-.48A8.82 8.82 0 017 23c-2.95 0-4.74-2.53-5.12-5.16a8.1 8.1 0 013.38-7.87 29.32 29.32 0 004.31-3.73 7.67 7.67 0 00-.21-1.67l-.15-.71L15.5.28zM9.03 9.56c-.76.66-1.66 1.38-2.63 2.06a6.1 6.1 0 00-2.55 5.93C4.16 19.65 5.44 21 7 21c.35 0 .7-.03 1-.09-1.36-2.07-1.44-5.48.38-9.49.27-.69.48-1.3.65-1.86zm7.43 11.4a5.76 5.76 0 003.4-1.2A3.42 3.42 0 0021 17.02c-.03-2.1-1.49-4.64-3.32-6.13-2.22-1.8-3.3-3.63-3.79-5.26a9.13 9.13 0 01-.36-1.93l-2.07 1.18c.07.46.13 1.03.1 1.73-.03 1.34-.36 3.1-1.33 5.57l-.01.02-.01.02c-2.15 4.73-1.06 7.5.21 8.37.29.2.77.41 1.58.41a4.5 4.5 0 001.94-.35c.5-.24.87-.63 1.07-1.33.22-.76.24-1.9-.1-3.59a14.2 14.2 0 00-.74-2.3l-.11-.3c-.35-.9-.7-1.91-.9-3.2l-.14-1L15 8.66l.14.99c.16 1.07.46 1.92.79 2.79l.1.28c.3.78.63 1.63.84 2.62a9.7 9.7 0 01.07 4.54c-.12.4-.28.77-.48 1.1z"}}]},j=d({name:"GarlicIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-garlic",l.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as default};