import{u as m,r as y,_ as O}from"./index-B4p2E3Fl.js";import{d as h,l as a}from"./index-CpJFga7x.js";function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h5.08A3.93 3.93 0 0111 5.92V11H5.92A3.93 3.93 0 012 7.08V2zm2 2v3.08C4 8.14 4.86 9 5.92 9H9V5.92C9 4.86 8.14 4 7.08 4H4zm12.92 0C15.86 4 15 4.86 15 5.92V9h3.08C19.14 9 20 8.14 20 7.08V4h-3.08zM13 5.92A3.93 3.93 0 0116.92 2H22v5.08A3.93 3.93 0 0118.08 11H13V5.92zM5.92 15C4.86 15 4 15.86 4 16.92V20h3.08C8.14 20 9 19.14 9 18.08V15H5.92zM2 16.92A3.93 3.93 0 015.92 13H11v5.08A3.93 3.93 0 017.08 22H2v-5.08zM13 13h5.08A3.93 3.93 0 0122 16.92V22h-5.08A3.93 3.93 0 0113 18.08V13zm2 2v3.08c0 1.06.86 1.92 1.92 1.92H20v-3.08c0-1.06-.86-1.92-1.92-1.92H15z"}}]},z=h({name:"System3Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),p=a(()=>["t-icon","t-icon-system-3",o.value]),v=a(()=>i(i({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,u.value)}});export{z as default};
