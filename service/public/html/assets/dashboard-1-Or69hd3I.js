import{u as f,r as m,_ as d}from"./index-CzBgriim.js";import{d as O,l as a}from"./index-Bbii3Das.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v7H2V2zm2 2v3h5V4H4zm9-2h9v11h-9V2zm2 2v7h5V4h-5zM2 11h9v11H2V11zm2 2v7h5v-7H4zm9 2h9v7h-9v-7zm2 2v3h5v-3h-5z"}}]},z=O({name:"Dashboard1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=f(t),c=a(()=>["t-icon","t-icon-dashboard-1",o.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:h=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:h})}}));return()=>m(y,u.value)}});export{z as default};
