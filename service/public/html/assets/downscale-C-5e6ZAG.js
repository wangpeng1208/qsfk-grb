import{u as h,r as m,_ as O}from"./index-CzBgriim.js";import{d,l as a}from"./index-Bbii3Das.js";function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v2H4v6H2V2zm19.41 2L16.4 9.03l3.52.02v2L12.98 11l-.04-6.91 2-.01.02 3.52L20 2.6 21.41 4zM2 12h4v2H4v2H2v-4zm6 0h4v4h-2v-2H8v-2zm14 1v9h-8v-2h6v-7h2zM4 18v2h2v2H2v-4h2zm8 0v4H8v-2h2v-2h2z"}}]},b=d({name:"DownscaleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=h(t),c=a(()=>["t-icon","t-icon-downscale",o.value]),p=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(y,u.value)}});export{b as default};
