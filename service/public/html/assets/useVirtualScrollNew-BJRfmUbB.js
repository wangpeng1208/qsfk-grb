import{e as m,l as D,U as p,$ as N,a5 as y,bJ as z,b3 as W}from"./index-Bl4AiOyE.js";import{u as X}from"./useResizeObserver-BUPtuDKJ.js";import{t as J}from"./dep-af55fe23-C5ZQDf4C.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var q=W;function K(t,n,l){for(var c=-1,S=t.length;++c<S;){var g=t[c],s=n(g);if(s!=null&&(R===void 0?s===s&&!q(s):l(s,R)))var R=s,d=g}return d}var F=K;function P(t,n){return t>n}var Q=P,Z=F,ee=Q,ae=z;function le(t){return t&&t.length?Z(t,ae,ee):void 0}var te=le;function ie(t,n){return t<n}var re=ie,ne=F,ue=re,ve=z;function oe(t){return t&&t.length?ne(t,ve,ue):void 0}var de=oe;function fe(t,n){for(var l,c=-1,S=t.length;++c<S;){var g=n(t[c]);g!==void 0&&(l=l===void 0?g:l+g)}return l}var se=fe,he=se,ce=z;function ge(t){return t&&t.length?he(t,ce):0}var T=ge,Re=function(n,l){var c,S,g=m([]),s=m((((c=l.value.data)===null||c===void 0?void 0:c.length)||0)*(((S=l.value.scroll)===null||S===void 0?void 0:S.rowHeight)||50)),R=m(0),d=[],_=m(0),C=m(0),$=m([0,15]),v=D(function(){var i,e,a=l.value.scroll;return a?{bufferSize:a.bufferSize||10,isFixedRowHeight:(i=a.isFixedRowHeight)!==null&&i!==void 0?i:!1,rowHeight:a.rowHeight||47,threshold:a.threshold||100,type:a.type,fixedRows:(e=a.fixedRows)!==null&&e!==void 0?e:[0,0]}:{}}),w=D(function(){var i=l.value.data;return v.value.type==="virtual"&&v.value.threshold<i.length});function M(){for(var i,e,a=(i=(e=n.value)===null||e===void 0?void 0:e.scrollTop)!==null&&i!==void 0?i:0,r=v.value.fixedRows[0],u=[],x=0,o=-1,f=-1,b=0,h=0,I=l.value.data.length;h<I;h++){var H,V=(H=d[h])!==null&&H!==void 0?H:v.value.rowHeight;if(b=b+V,b>a&&o===-1&&(o=h,o-v.value.bufferSize>0&&(x=b-V-T(u))),o===-1&&(u.push(V),u.length>v.value.bufferSize&&u.shift()),f===-1&&(b>_.value+a||h===l.value.data.length-1)&&(f=h),o!==-1&&f!==-1)break}var A=te([o-v.value.bufferSize,0]),j=de([f+v.value.bufferSize,l.value.data.length]),k=T(d.slice(0,Math.min(A,r)));return{startIndex:A,endIndex:j,translateY:x-k}}var E=J(function(){var i=M(),e=i.startIndex,a=i.endIndex,r=i.translateY,u=v.value.fixedRows,x=y(u,2),o=x[0],f=x[1],b=o?l.value.data.slice(0,o):[];o&&e<o&&(b=b.slice(0,e));var h=f?l.value.data.slice(l.value.data.length-f):[],I=a-l.value.data.length+1+(f??0);f&&I>0&&(h=h.slice(I)),$.value.join()!==[e,a].join()&&e>=0&&(s.value=r,g.value=b.concat(l.value.data.slice(e,a),h),$.value=[e,a])},100),Y=function(e){var a;if(!(!w.value||!e||v.value.isFixedRowHeight||!n.value)){var r=((a=e.ref.value)===null||a===void 0?void 0:a.getBoundingClientRect().height)||v.value.rowHeight,u=e.data.VIRTUAL_SCROLL_INDEX;if(d[u]!==r){var x=r-d[u];d[u]=r,R.value=R.value+x}}},B=function(){w.value&&E()},G=function(e){var a=y(e,1),r=a[0].contentRect,u=16;Math.abs(r.width-C.value)>u&&n.value&&(n.value.scrollTop=0,s.value=0),C.value=r.width,_.value=r.height},O=function(e){e.forEach(function(a,r){a.VIRTUAL_SCROLL_INDEX=r})},L=function(e){var a=e.index,r=e.top,u=r===void 0?0:r,x=e.behavior,o=T(d.slice(0,a+1))-u;n.value.scrollTo({top:o,behavior:x||"auto"})},U=function(e){if(L(e),!v.value.isFixedRowHeight)var a,r=(a=e.time)!==null&&a!==void 0?a:60,u=setTimeout(function(){L(e),clearTimeout(u)},r)};return X(D(function(){return w.value?n.value:void 0}),G),p(function(){return[N(l.value.data),v.value,w.value,n.value]},function(){if(!(!w.value||!n.value)){var i=l.value.data;if(O(i),_.value=n.value.getBoundingClientRect().height,d.length!==l.value.data.length){var e=Array.from(d);e.length=l.value.data.length,e.fill(v.value.rowHeight||47),d=e}R.value=T(d),$.value=[0,0],E()}},{immediate:!0}),p(function(){return _.value},function(){E()}),{visibleData:g,translateY:s,scrollHeight:R,isVirtualScroll:w,handleScroll:B,handleRowMounted:Y,scrollToElement:U}};export{Re as u};
