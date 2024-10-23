import{Z as O,b3 as A,b4 as C}from"./index-CpJFga7x.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var L=/\s/;function M(e){for(var r=e.length;r--&&L.test(e.charAt(r)););return r}var j=M,B=j,R=/^\s+/;function F(e){return e&&e.slice(0,B(e)+1).replace(R,"")}var w=F,D=w,_=O,H=A,p=NaN,P=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,X=/^0o[0-7]+$/i,Z=parseInt;function q(e){if(typeof e=="number")return e;if(H(e))return p;if(_(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=_(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=D(e);var t=U.test(e);return t||X.test(e)?Z(e.slice(2),t?2:8):P.test(e)?p:+e}var z=q;/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var G=C,J=function(){return G.Date.now()},K=J,Q=O,x=K,$=z,V="Expected a function",Y=Math.max,ee=Math.min;function ne(e,r,t){var u,s,l,o,i,f,d=0,I=!1,c=!1,b=!0;if(typeof e!="function")throw new TypeError(V);r=$(r)||0,Q(t)&&(I=!!t.leading,c="maxWait"in t,l=c?Y($(t.maxWait)||0,r):l,b="trailing"in t?!!t.trailing:b);function T(n){var a=u,m=s;return u=s=void 0,d=n,o=e.apply(m,a),o}function S(n){return d=n,i=setTimeout(v,r),I?T(n):o}function k(n){var a=n-f,m=n-d,E=r-a;return c?ee(E,l-m):E}function h(n){var a=n-f,m=n-d;return f===void 0||a>=r||a<0||c&&m>=l}function v(){var n=x();if(h(n))return y(n);i=setTimeout(v,k(n))}function y(n){return i=void 0,b&&u?T(n):(u=s=void 0,o)}function N(){i!==void 0&&clearTimeout(i),d=0,u=f=s=i=void 0}function W(){return i===void 0?o:y(x())}function g(){var n=x(),a=h(n);if(u=arguments,s=this,f=n,a){if(i===void 0)return S(f);if(c)return clearTimeout(i),i=setTimeout(v,r),T(f)}return i===void 0&&(i=setTimeout(v,r)),o}return g.cancel=N,g.flush=W,g}var ie=ne;export{ie as d,z as t};
