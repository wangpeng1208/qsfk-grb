import{u as m,r as O,_ as y}from"./index-B4p2E3Fl.js";import{d,l as a}from"./index-CpJFga7x.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13.45 22.24l-1.72-.58a3.7 3.7 0 01-2.53-3.5V15.7H5.33a3 3 0 01-2.96-3.46l1.18-7.7A3 3 0 016.52 2H22v11.9h-4.85l-3.7 8.34zM17.5 11.9H20V4h-2.5v7.9zm-2-7.9H6.52a1 1 0 00-1 .85l-1.18 7.7a1 1 0 001 1.15h5.86v4.45c0 .73.47 1.38 1.16 1.61l3.14-7.07V4z"}}]},w=d({name:"ThumbDown2Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),p=a(()=>["t-icon","t-icon-thumb-down-2",o.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(h,v.value)}});export{w as default};
