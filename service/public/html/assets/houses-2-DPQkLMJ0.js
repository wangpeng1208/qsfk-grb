import{u as h,r as m,_ as O}from"./index-ChiVvrNs.js";import{d as y,l as o}from"./index-Bl4AiOyE.js";function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9 2v2h9.57l4.2 7H21v11H3V11H1.23l4.2-7H7V2h2zm-4 9v9h4v-5h6v5h4v-9H5zm14.23-2l-1.8-3H6.57l-1.8 3h14.46zM13 20v-3h-2v3h2z"}}]},P=y({name:"Houses2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=h(t),p=o(()=>["t-icon","t-icon-houses-2",a.value]),v=o(()=>i(i({},c.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{P as default};
