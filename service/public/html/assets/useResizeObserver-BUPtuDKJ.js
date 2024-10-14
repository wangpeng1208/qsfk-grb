import{U as v,as as a}from"./index-Bl4AiOyE.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function d(r,u){if(!(typeof window>"u")){var i=window&&window.ResizeObserver;if(i){var e=null,s=function(){!e||!r.value||(e.unobserve(r.value),e.disconnect(),e=null)},o=function(t){e=new ResizeObserver(u),e.observe(t)};r&&v(r,function(n){s(),n&&o(n)},{immediate:!0,flush:"post"}),a(function(){s()})}}}export{d as u};
