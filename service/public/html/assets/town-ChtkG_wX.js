import{u as h,r as m,_ as O}from"./index-B4p2E3Fl.js";import{d as y,l as o}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h5.44L11 5.91V2h5.47L22 8.64V22H2V2zm11 2v16h7V9.36L15.53 4H13zm-2 16V8.89L6.56 4H4v16h7zM6 8h2v2H6V8zm9 0h2v2h-2V8zm-9 4h2v2H6v-2zm9 0h2v2h-2v-2zm-9 4h2v2H6v-2zm9 0h2v2h-2v-2z"}}]},w=y({name:"TownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:s}=h(t),c=o(()=>["t-icon","t-icon-town",a.value]),p=o(()=>v(v({},s.value),r.style)),u=o(()=>({class:c.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{w as default};
