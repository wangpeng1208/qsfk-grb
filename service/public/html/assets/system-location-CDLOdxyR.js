import{u as m,r as y,_ as O}from"./index-CzBgriim.js";import{d as h,l as a}from"./index-Bbii3Das.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 1h22v10h-2V3H3v13h9v2H1V1zm17.5 13a2.75 2.75 0 00-2.75 2.75c0 1.25.73 2.45 1.61 3.42.41.45.82.82 1.14 1.08.32-.26.73-.63 1.14-1.08.88-.97 1.61-2.17 1.61-3.42A2.75 2.75 0 0018.5 14zm0 9.7l-.55-.37h-.01l-.01-.01-.04-.03a7.7 7.7 0 01-.6-.45c-.39-.31-.9-.76-1.4-1.32-1-1.1-2.14-2.77-2.14-4.77a4.75 4.75 0 119.5 0c0 2-1.14 3.67-2.14 4.77a12.83 12.83 0 01-2 1.77l-.04.03-.01.01-.56.37zM17.25 16h2.5v2h-2.5v-2zm-15 5H12v2H2.25v-2z"}}]},P=h({name:"SystemLocationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-system-location",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
