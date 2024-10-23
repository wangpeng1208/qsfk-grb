import{d as X,l as j,ax as B,ay as K,az as q,Z as C,aa as _,a5 as h,X as R}from"./index-CpJFga7x.js";import{i as D}from"./dep-d524834c-s9Vwwbzr.js";import{l as A}from"./log-ZJhmUOBa.js";function L(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,i)}return t}function V(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?L(Object(t),!0).forEach(function(i){q(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}var H={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.5 8.09l-5.5 5.5-5.5-5.5L5.09 9.5 12 16.41l6.91-6.91-1.41-1.41z"}}]},sr=X({name:"ChevronDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(r,e){var{attrs:t}=e,i=j(()=>r.size),{className:a,style:n}=B(i),l=j(()=>["t-icon","t-icon-chevron-down",a.value]),o=j(()=>V(V({},n.value),t.style)),s=j(()=>({class:l.value,style:o.value,onClick:f=>{var u;return(u=r.onClick)===null||u===void 0?void 0:u.call(r,{e:f})}}));return()=>K(H,s.value)}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function S(r){return new Array(r).fill(0).join("")}function k(r){if(!r)return!0;if(R(r))return!Number.isNaN(r);var e=/^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(r);if(!e)return!1;for(var t=0,i=0,a=0,n=0,l=r.length;n<l;n++)if(r[n]==="."&&(a+=1,a>1)||/(e|E)+/.test(r[n])&&(t+=1,t>1)||r[n]==="-"&&(i+=1,i>2))return!1;return!0}function d(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return r.indexOf(".")!==-1?(A.error("InputNumber","num is not a integer number."),r):!r||r==="0"&&e?"":r==="0"?r:(e?r.replace(/0+$/,""):r.replace(/^0+/,""))||"0"}function F(r,e){for(var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=d(r,t),a=d(e,t),n=i.length>a.length,l=n?i:a,o=n?a:i,s=[],f=[],u=t?0:l.length-o.length,c=t?o.length:l.length,g=c-1;g>=0;g--){var b=g-u,v=Number(l[g])+(Number(o[b])||0)+(f[g]||0);v>=10&&(f[g-1]=1),s.unshift(String(v%10))}return f[-1]&&s.unshift("1"),t?s.concat(l.slice(c,l.length)).join(""):s.join("")}function y(r,e){var t=r.split("."),i=h(t,2),a=i[0],n=a===void 0?"0":a,l=i[1],o=l===void 0?"0":l,s=e.split("."),f=h(s,2),u=f[0],c=u===void 0?"0":u,g=f[1],b=g===void 0?"0":g,v=F(n,c);if(o==="0"&&b==="0")return v;var m=d(o,!0),N=d(b,!0),p=F(m,N,!0),$=p.length;return $>m.length&&$>N.length?[d(F(v,"1")),d(p.slice(1),!0)].filter(function(E){return E}).join("."):[d(v),d(p,!0)].filter(function(E){return E}).join(".")}function G(r,e){var t=d(r),i=d(e);if(t.length===i.length){for(var a=0,n=t.length;a<n;a++){if(t[a]>i[a])return 1;if(t[a]<i[a])return-1}return 0}return t.length>i.length?1:-1}function U(r,e){for(var t=r&&r!=="0"?r.replace(/0+$/,""):"0",i=e&&e!=="0"?e.replace(/0+$/,""):"0",a=Math.max(t.length,i.length),n=0,l=a;n<l;n++){if((t[n]||0)>(i[n]||0))return 1;if((t[n]||0)<(i[n]||0))return-1}return 0}function P(r){var e=r.split("e"),t=h(e,2),i=t[0],a=t[1];if(!a)return r;var n=r.split("."),l=h(n,2),o=l[0],s=l[1],f=s===void 0?"":s,u=Number(a),c=f.split("e"),g=h(c,1),b=g[0];if(u>b.length){var v=S(u-b.length);return i.replace(/(^0+|\.)/g,"")+v}var m=o.replace(/^0+/,"")+b.slice(0,u),N=b.slice(u);return N?[m,N].join("."):m}function J(r,e){var t=P(r).split("."),i=h(t,2),a=i[0],n=i[1],l=P(e).split("."),o=h(l,2),s=o[0],f=o[1],u=G(a.replace("-",""),s.replace("-","")),c=a.includes("-"),g=s.includes("-");return c&&!g?-1:!c&&g?1:c&&g?u===0?0:u>0?-1:1:u===0?U(n,f):u}function T(r){return[-1/0,1/0].includes(Number(r))}function z(r){return Number(r)<Number.MAX_SAFE_INTEGER&&Number(r)>Number.MIN_SAFE_INTEGER}function x(r,e,t){var i=z(r)&&z(e)&&!t,a=T(r)||T(e);return i||a?Number(r)===Number(e)?0:Number(r)>Number(e)?1:-1:J(String(r),String(e))}function w(r,e,t){if(r===e)return"0";for(var i=t||{},a=i.decimal,n=i.stayZero,l=d(r),o=d(e),s=G(l,o)>0,f=s?l:o,u=s?o:l,c=[],g=[],b=a?0:f.length-u.length,v=a?u.length:f.length,m=v-1;m>=0;m--){var N=m-b,p=Number(f[m])-(Number(u[N])||0)-(g[m]||0);p<0&&(g[m-1]=1,p+=10),c.unshift(String(p))}if(a)return c.concat(f.slice(v,f.length)).join("");var $=c.join("");return n||($=$.replace(/^0+/,"")),d(s?$:"-".concat($))}function I(r,e){if(r===e)return"0";var t=x(r,e,!0)>0,i=t?r:e,a=t?e:r,n=i.split("."),l=h(n,2),o=l[0],s=l[1],f=s===void 0?"0":s,u=a.split("."),c=h(u,2),g=c[0],b=c[1],v=b===void 0?"0":b,m=w(o,g);if(f==="0"&&v==="0")return t?m:"-".concat(m);var N="",p=f;f.length<v.length&&(p="".concat(f).concat(S(v.length-f.length))),U(p,v)>=0?N=w(p,v,{decimal:!0}):(f.length<v.length||f==="0"?(N=w("1".concat(p),v,{stayZero:!0}),N=S(v.length-N.length)+N):N=w(f,v,{decimal:!0}),m=w(m,"1"));var $=N?[m,N].join("."):m;return t?$:"-".concat($)}function Q(r,e){var t=r[0]==="-",i=e[0]==="-";if(t&&!i){var a=y(r.slice(1),e);return"-".concat(a)}return t&&i?I(e.slice(1),r.slice(1)):!t&&i?y(r,e.slice(1)):I(r,e)}function W(r,e){var t=r[0]==="-",i=e[0]==="-";if(t&&!i)return I(e,r.slice(1));if(t&&i){var a=y(e.slice(1),r.slice(1));return"-".concat(a)}return!t&&i?I(r,e.slice(1)):y(r,e)}function Z(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(t)return r.toFixed(e);var i=r.toString().split("."),a=h(i,2),n=a[0],l=a[1];if(e===0)return n;var o=l.slice(0,e);return l.length<e&&(o+=S(e-l.length)),[n,o].join(".")}function Y(r,e){if(C(e)){var t;return Z(r,e.places,(t=e.enableRound)!==null&&t!==void 0?t:!0)}return Z(r,e,!0)}function rr(r){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(Number.isNaN(Number(r)))return"";if(!i)return Y(Number(r),t);var a=C(t)?t.places:t,n=C(t)&&(e=t.enableRound)!==null&&e!==void 0?e:!0;if(!_(r))return String(r);var l=r.split("."),o=h(l,2),s=o[0],f=o[1];if(!f)return a>0&&n?[r,S(a)].join("."):r;if(a===0)return n&&Number(f[0])>=5?y(s,"1"):s;var u=f.slice(0,a);if(f.length<a)u+=S(a-f.length);else if(n){var c,g=(c=u.match(/^0+/))===null||c===void 0?void 0:c[0].length,b=u.match(/^9+/),v=Number(f[a])>=5;u=v?y(u,"1"):u,g&&v&&g+u.length>=a&&(u="".concat(S(a-u.length)).concat(u)),b&&u.length>a&&(s=(Number(s)+1).toString(),u=S(a))}return[s,u].join(".")}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function fr(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!r&&r!==0?!0:t&&_(r)?x(r,e,t)<0:r<e}function or(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!r&&r!==0?!0:t&&_(r)?x(r,e,t)>0:r>e}function er(r,e){if(r!==""){var t=e.max,i=e.min,a=e.lastValue,n=e.largeNumber;return k(r)?n&&(_(t)||t===1/0)&&(_(i)||i===-1/0)?x(t,r,n)<0?t:x(i,r,n)>0?i:r:Math.max(Number(i),Math.min(Number(t),Number(r))):a}}function M(r,e){var t,i;if(!r||!e)return(r||0)+(e||0);var a=((t=r.toString().split(".")[1])===null||t===void 0?void 0:t.length)||0,n=((i=e.toString().split(".")[1])===null||i===void 0?void 0:i.length)||0;if(!a&&!n)return r+e;var l=r,o=e,s=Math.abs(a-n),f=Math.pow(10,Math.max(a,n));if(s>0){var u=Math.pow(10,s);a>n?(l=Number(r.toString().replace(".","")),o=Number(e.toString().replace(".",""))*u):(l=Number(r.toString().replace(".",""))*u,o=Number(e.toString().replace(".","")))}else l=Number(r.toString().replace(".","")),o=Number(e.toString().replace(".",""));return(l+o)/f}function O(r,e){var t,i;if(!r||!e)return(r||0)-(e||0);var a=((t=r.toString().split(".")[1])===null||t===void 0?void 0:t.length)||0,n=((i=e.toString().split(".")[1])===null||i===void 0?void 0:i.length)||0,l=Math.pow(10,Math.max(a,n)),o=a>=n?a:n;return Number(((r*l-e*l)/l).toFixed(o))}function tr(r,e){return r<0&&e>0?O(e,Math.abs(r)):r<0&&e<0?M(Math.abs(r),Math.abs(e))*-1:r>0&&e<0?O(r,Math.abs(e)):M(r,e)}function ir(r,e){return r<0&&e>0?M(Math.abs(r),e)*-1:r<0&&e<0?O(Math.abs(e),Math.abs(r)):r>0&&e<0?M(r,Math.abs(e)):O(r,e)}function vr(r){var e=r.op,t=r.step,i=r.lastValue,a=r.max,n=r.min,l=r.largeNumber;if(t<=0)return A.error("InputNumber","step must be larger than 0."),i;var o=R(t)?String(t):t,s;return e==="add"?l&&_(i)?s=W(String(i),String(o)):s=tr(Number(i||0),Number(t)):e==="reduce"&&(l&&_(i)?s=Q(String(i),String(o)):s=ir(Number(i||0),Number(t))),D(i)&&(s=er(s,{max:a,min:n,lastValue:i,largeNumber:l})),l?s:Number(s)}function gr(r){var e=r.largeNumber,t=r.value,i=r.max,a=r.min;if(!(D(t)||D(e))){e&&R(t)&&A.warn("InputNumber","largeNumber value must be a string.");var n;return x(t,i,e)>0?n="exceed-maximum":x(t,a,e)<0?n="below-minimum":n=void 0,n}}var ar=["-",".","e","E","+"];function cr(r,e){var t,i;if(["",null,void 0].includes(r))return!0;if(r.slice(0,2)==="00"||r.match(/\s/g)||((t=r.match(/\./g))===null||t===void 0?void 0:t.length)>1||((i=r.match(/e/g))===null||i===void 0?void 0:i.length)>1)return!1;var a=r.slice(1);if(/(\+|-)/.test(a)&&!/e+/i.test(a))return!1;var n=e&&k(r)||!Number.isNaN(Number(r));return!(!n&&!ar.includes(r.slice(-1))||/e/i.test(r)&&!/\de/i.test(r))}function mr(r,e){return parseFloat(r)!==e&&!Number.isNaN(Number(r))}function br(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(["",null,void 0].includes(r)||!/\d+/.test(r))){var t=e.decimalPlaces,i=e.largeNumber,a=e.isToFixed,n=r.replace(/[.|+|\-|e]$/,"");return i&&(n=P(n)),t!==void 0&&(n=rr(n,t,i)),i||a?n:parseFloat(n)}}function Nr(r){var e=/^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;return e.test(r)?r.replace(/,/g,""):r}export{or as a,fr as b,sr as c,Nr as d,cr as e,br as f,gr as g,mr as h,vr as i,O as j,rr as l,M as p};
