import{u as h,r as m,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as a}from"./index-CpJFga7x.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 3h22v18H1V3zm2 2v4h18V5H3zm18 6h-2v5h-2v-5h-2v5h-2v-5h-2v5H9v-5H7v5H5v-5H3v8h18v-8z"}}]},b=y({name:"PianoIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=h(t),p=a(()=>["t-icon","t-icon-piano",o.value]),c=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:p.value,style:c.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(d,u.value)}});export{b as default};
