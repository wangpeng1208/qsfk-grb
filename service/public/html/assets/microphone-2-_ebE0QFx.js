import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as a}from"./index-CpJFga7x.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16 3a5 5 0 100 10 5 5 0 000-10zM9 7.64A7 7 0 1116.37 15l-9.23 7.28a1.17 1.17 0 01-.11.09 2.32 2.32 0 01-1.3.37c-.85 0-1.83-.43-2.93-1.52-1.1-1.1-1.52-2.08-1.52-2.93a2.32 2.32 0 01.44-1.4 2 2 0 01.02-.01L9 7.64zm.4 2.72L3.3 18.12c-.01.01-.03.06-.02.14 0 .16.07.67.94 1.53.86.87 1.38.94 1.54.94.07 0 .12-.01.13-.02l7.76-6.12a7.02 7.02 0 01-4.23-4.23zM10.42 15L8 17.41 6.59 16 9 13.59 10.41 15z"}}]},P=d({name:"Microphone2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:p}=m(t),s=a(()=>["t-icon","t-icon-microphone-2",o.value]),u=a(()=>c(c({},p.value),r.style)),f=a(()=>({class:s.value,style:u.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>O(g,f.value)}});export{P as default};