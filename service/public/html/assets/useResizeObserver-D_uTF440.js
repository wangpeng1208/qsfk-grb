import{U as v,ap as a}from"./index-Dys89YLq.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function d(r,s){if(!(typeof window>"u")){var i=window&&window.ResizeObserver;if(i){var e=null,u=function(){!e||!r.value||(e.unobserve(r.value),e.disconnect(),e=null)},o=function(t){e=new ResizeObserver(s),e.observe(t)};r&&v(r,function(n){u(),n&&o(n)},{immediate:!0,flush:"post"}),a(function(){u()})}}}export{d as u};
