import{u as m,r as O,_ as y}from"./index-ChiVvrNs.js";import{d,l as a}from"./index-Bl4AiOyE.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9 11a11 11 0 110-22 11 11 0 010 22zm-4.18-6.82V8.52h2v4.25l5.36-5.37 1.42 1.42-5.37 5.36h4.24v2H7.82z"}}]},h=d({name:"ArrowLeftDownCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=m(t),p=a(()=>["t-icon","t-icon-arrow-left-down-circle",o.value]),f=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:f.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>O(w,u.value)}});export{h as default};
