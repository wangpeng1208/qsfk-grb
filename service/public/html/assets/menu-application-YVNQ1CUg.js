import{u as f,r as m,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as a}from"./index-DyfhlEKp.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 3h3v3H3V3zm7.5 0h3v3h-3V3zM18 3h3v3h-3V3zM3 10.5h3v3H3v-3zm7.5 0h3v3h-3v-3zm7.5 0h3v3h-3v-3zM3 18h3v3H3v-3zm7.5 0h3v3h-3v-3zm7.5 0h3v3h-3v-3z"}}]},b=y({name:"MenuApplicationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=f(r),c=a(()=>["t-icon","t-icon-menu-application",o.value]),s=a(()=>v(v({},p.value),t.style)),u=a(()=>({class:c.value,style:s.value,onClick:h=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:h})}}));return()=>m(d,u.value)}});export{b as default};
