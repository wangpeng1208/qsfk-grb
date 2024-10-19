import{v as r,as as s}from"./index-Bbii3Das.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function t(e,n){r(function(){window.addEventListener(e,n)}),s(function(){window.removeEventListener(e,n)})}function v(e,n){t("resize",e);var i=null;r(function(){!window.ResizeObserver||!n||(i=new window.ResizeObserver(e),i.observe(n))}),s(function(){var o;(o=i)===null||o===void 0||o.disconnect()})}export{t as a,v as u};
