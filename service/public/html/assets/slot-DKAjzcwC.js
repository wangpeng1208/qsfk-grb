import{be as s,aX as o,aB as f,bf as d,W as c,F as v}from"./index-Dys89YLq.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function h(){var l=o();return function(e,t){var r,n;t||(t=l.slots);var u=((r=t)===null||r===void 0||(n=r.default)===null||n===void 0?void 0:n.call(r))||[];return s(u).filter(function(i){var a;return(a=i.type.name)===null||a===void 0?void 0:a.endsWith(e)})}}function y(){var l=o();return function(){var e,t=l.slots,r=(t==null||(e=t.default)===null||e===void 0?void 0:e.call(t))||[];return r.filter(function(n){return f(n.type)==="symbol"&&!n.children?!1:n.type!==d}).map(function(n){return n.children&&c(n.children)&&n.type===v?n.children:n}).flat()}}export{y as a,h as u};
