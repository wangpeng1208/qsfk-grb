import{O as o,l as a}from"./index-Bbii3Das.js";function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?i(Object(t),!0).forEach(function(n){u(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function l(e){var r=["fillOpacity","fillRule","clipRule"];return r.includes(e)?e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase():e}function f(e,r){var t=Object.keys(e.attrs).reduce((n,c)=>(n[l(c)]=e.attrs[c],n),{});return o(e.tag,s(s({},t),r),(e.children||[]).map(n=>f(n,{})))}var d="t",p="zh-CN",v={classPrefix:d,locale:p};function O(){var{classPrefix:e}=v;return{SIZE:{default:"",xs:"".concat(e,"-size-xs"),small:"".concat(e,"-size-s"),medium:"".concat(e,"-size-m"),large:"".concat(e,"-size-l"),xl:"".concat(e,"-size-xl"),block:"".concat(e,"-size-full-width")},STATUS:{loading:"".concat(e,"-is-loading"),disabled:"".concat(e,"-is-disabled"),focused:"".concat(e,"-is-focused"),success:"".concat(e,"-is-success"),error:"".concat(e,"-is-error"),warning:"".concat(e,"-is-warning"),selected:"".concat(e,"-is-selected"),active:"".concat(e,"-is-active"),checked:"".concat(e,"-is-checked"),current:"".concat(e,"-is-current"),hidden:"".concat(e,"-is-hidden"),visible:"".concat(e,"-is-visible"),expanded:"".concat(e,"-is-expanded"),indeterminate:"".concat(e,"-is-indeterminate")}}}function m(e){var r=O().SIZE,t=a(()=>e.value in r?r[e.value]:""),n=a(()=>e.value===void 0||e.value in r?{}:{fontSize:e.value});return{style:n,className:t}}export{u as _,f as r,m as u};
