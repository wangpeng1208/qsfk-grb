import{u as m,r as d,_ as O}from"./index-Bqwwrko2.js";import{d as y,l as a}from"./index-Dys89YLq.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .76L23.19 8.9 18.9 22.04H5.1L.8 8.89 12 .76zM3.55 10.83l2.6 8.03 4.23-5.8-6.83-2.23zm4.23 9.21h8.44L12 14.23l-4.22 5.81zm5.84-6.99l4.22 5.81 2.61-8.03-6.83 2.22zm6.21-4.12L13 3.96v7.19l6.83-2.22zM11 3.96L4.17 8.93 11 11.15V3.96z"}}]},P=y({name:"ChartRadarIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),p=a(()=>["t-icon","t-icon-chart-radar",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(h,v.value)}});export{P as default};
