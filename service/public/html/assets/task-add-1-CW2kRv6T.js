import{u as d,r as h,_ as O}from"./index-ChiVvrNs.js";import{d as m,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 000 18h1v2h-1a11 11 0 114.23-21.16l.93.39-.77 1.84-.93-.38A8.97 8.97 0 0012 3zm11.41 1.5L12 15.91 6.09 10 7.5 8.59l4.5 4.5 10-10 1.41 1.41zM20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"}}]},P=m({name:"TaskAdd1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=d(t),p=a(()=>["t-icon","t-icon-task-add-1",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(y,u.value)}});export{P as default};