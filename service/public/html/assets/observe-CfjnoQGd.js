/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function u(o,t,r,i){if(typeof window>"u")return null;if(!window||!window.IntersectionObserver)return r(),null;var n=null;try{n=new window.IntersectionObserver(function(e){var s=e[0];s.isIntersecting&&(r(),n.unobserve(o))},{rootMargin:"0px 0px ".concat(i,"px 0px"),root:t}),n.observe(o)}catch(e){console.error(e),r()}return n}export{u as o};
