import{u as h,r as m,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.5 0v2h7V0h2v2H21v8.5h-2V9H5v12h9v2H3V2h3.5V0h2zM5 7h14V4H5v3zm13.75 7A2.75 2.75 0 0016 16.75c0 1.25.73 2.45 1.61 3.42.41.45.82.82 1.14 1.08.32-.26.73-.63 1.14-1.08.88-.97 1.61-2.17 1.61-3.42A2.75 2.75 0 0018.75 14zm0 9.7l-.75-.5a11.33 11.33 0 01-1.86-1.68c-1-1.1-2.14-2.77-2.14-4.77a4.75 4.75 0 119.5 0c0 2-1.14 3.67-2.14 4.77a12.83 12.83 0 01-1.86 1.67c-.24.18-.5.34-.75.51zM17.5 16H20v2h-2.5v-2z"}}]},P=y({name:"TaskLocationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=h(r),p=a(()=>["t-icon","t-icon-task-location",o.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{P as default};
