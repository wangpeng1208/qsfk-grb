import{u as f,r as m,_ as O}from"./index-0JxUx2HH.js";import{d as y,l as a}from"./index-DyfhlEKp.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 2h2v2H7V2zm4 0h2v2h-2V2zm4 0h2v2h-2V2zM9 5v5h2V5h2v5h2V5h2v5h4v10h2v2H1v-2h2V10h4V5h2zm-4 7v3h1.16l2.84.95 3-1 3 1 2.84-.95H19v-3H5zm14 5h-.84L15 18.05l-3-1-3 1L5.84 17H5v3h14v-3z"}}]},P=y({name:"CakeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=f(t),s=a(()=>["t-icon","t-icon-cake",o.value]),p=a(()=>v(v({},c.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>m(d,h.value)}});export{P as default};