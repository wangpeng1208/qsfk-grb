import{d as ae,l as A,ax as _e,ay as ke,az as Ie,e as B,v as oe,T as we,bD as je,ad as Ae,O as Te,r as ye,bd as Le,_ as I,C as j,a5 as W,a9 as be,a as N,a2 as Ve,G as Re,au as Me,a3 as Se,bm as Fe,U as z,at as le,$ as Z,E as $e,bE as Be,N as ze,ba as He,bV as Ke}from"./index-CpJFga7x.js";import{u as Ye}from"./useVModel-CzdLJ13E.js";import{u as Ue}from"./useDefaultValue-BJZ6w0Fl.js";import{t as Ge}from"./dep-af55fe23-3nGiADk5.js";import{a as qe}from"./index-Dk9r_Pa_.js";import{o as Xe}from"./observe-CfjnoQGd.js";import{p as Je,T as Qe}from"./tree-store-D-cjiqAX.js";import{u as We}from"./useVirtualScrollNew-XoyDLD8W.js";import{l as ie}from"./log-ZJhmUOBa.js";import{p as Ze}from"./dep-02de0cb4-9NqRuOAE.js";function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?se(Object(r),!0).forEach(function(n){Ie(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var er={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.5 12l-7-7v14l7-7z"}}]},rr=ae({name:"CaretRightSmallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,t){var{attrs:r}=t,n=A(()=>e.size),{className:a,style:o}=_e(n),v=A(()=>["t-icon","t-icon-caret-right-small",a.value]),l=A(()=>de(de({},o.value),r.style)),i=A(()=>({class:v.value,style:l.value,onClick:p=>{var u;return(u=e.onClick)===null||u===void 0?void 0:u.call(e,{e:p})}}));return()=>ke(er,i.value)}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function tr(e,t,r){var n=A(function(){return Math.max(r.rowHeight||48,48)}),a=B(!1),o=A(function(){return(r==null?void 0:r.type)==="lazy"&&!a.value}),v=!je&&window.requestAnimationFrame||function(i){return setTimeout(i,16.6)},l=function(){a.value||v(function(){a.value=!0})};return oe(function(){(r==null?void 0:r.type)==="lazy"&&we(function(){var i=Math.max(10,r.bufferSize||10),p=n.value*i;Xe(t.value,e.value,l,p)})}),{hasLazyLoadHolder:o,tRowHeight:n}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var nr={default:void 0},ar={name:"TTreeNode",inject:{onDrag:nr}};function or(e){return Ae(e)}function Oe(e){return Te}function lr(e){return e.$slots}function ee(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"value",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"defaultValue",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"onChange",o=t.modelValue,v;return r==="value"?v=Ye(t[r],o,e[n],e[a],r):v=Ue(t[r],e[n],e[a],r),v}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var ne=function(e){return e[e.Before=-1]="Before",e[e.Inside=0]="Inside",e[e.After=1]="After",e}(ne||{});function ir(e){var t=e.treeItemRef,r=ye({isDragOver:!1,isDragging:!1,dropPosition:0}),n=function(f){var s,c=t.value;if(c){var g=c==null||(s=c.getBoundingClientRect)===null||s===void 0?void 0:s.call(c),y=window.scrollY+g.top,C=f.pageY,S=g.height/4,b=C-y;b<S?r.dropPosition=-1:b<g.height-S?r.dropPosition=0:r.dropPosition=1}},a=function(f,s){var c,g,y,C,S,b=e.node,d=e.treeScope,h=d.drag;if(h)switch(f){case"dragStart":r.isDragging=!0,r.dropPosition=0,(c=h.handleDragStart)===null||c===void 0||c.call(h,{node:b,dragEvent:s});break;case"dragEnd":r.isDragging=!1,r.isDragOver=!1,r.dropPosition=0,u.cancel(),(g=h.handleDragEnd)===null||g===void 0||g.call(h,{node:b,dragEvent:s});break;case"dragOver":r.isDragOver=!0,u(s),(y=h.handleDragOver)===null||y===void 0||y.call(h,{node:b,dragEvent:s});break;case"dragLeave":r.isDragOver=!1,r.dropPosition=0,u.cancel(),(C=h.handleDragLeave)===null||C===void 0||C.call(h,{node:b,dragEvent:s});break;case"drop":(S=h.handleDrop)===null||S===void 0||S.call(h,{node:b,dropPosition:r.dropPosition,dragEvent:s}),r.isDragOver=!1,u.cancel();break}},o=function(f){var s=e.node;if(s.isDraggable()){f.stopPropagation(),a("dragStart",f);try{var c;(c=f.dataTransfer)===null||c===void 0||c.setData("text/plain","")}catch{}}},v=function(f){var s=e.node;s.isDraggable()&&(f.stopPropagation(),a("dragEnd",f))},l=function(f){var s=e.node;s.isDraggable()&&(f.stopPropagation(),f.preventDefault(),a("dragOver",f))},i=function(f){var s=e.node;s.isDraggable()&&(f.stopPropagation(),a("dragLeave",f))},p=function(f){var s=e.node;s.isDraggable()&&(f.stopPropagation(),f.preventDefault(),a("drop",f))},u=Ge(function(m){n(m)});return{dragStates:r,handleDragStart:o,handleDragEnd:v,handleDragOver:l,handleDragLeave:i,handleDrop:p}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function sr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H(e,t,r){var n=Le("on-".concat(r));r.replace(/^on/,"").toLowerCase();for(var a=arguments.length,o=new Array(a>3?a-3:0),v=3;v<a;v++)o[v-3]=arguments[v];typeof e[n]=="function"&&e[n].apply(e,o)}function Ce(e,t){for(var r=[],n=e;n&&n.parentNode&&(r.push(n),n!==t);)n=n.parentNode;return r}function dr(e,t,r){var n=Ce(t,r);return n.map(function(a){var o={name:e,value:(a==null?void 0:a.getAttribute(e))||"",el:a};return o}).filter(function(a){return a.value})}function cr(e,t,r){var n=dr(e,t,r),a=n.pop()||null;return a}function ur(e,t,r){var n=Ce(t,r),a=n.some(function(o){return o.classList.contains(e)});return a}function J(e,t){var r=null,n=null,a=sr({},t);if(typeof e=="function"){var o;n=e(a.createElement,(o=a.node)===null||o===void 0?void 0:o.getModel())}else typeof e=="string"&&(n=e);return(typeof n=="string"||n)&&(r=n),r}function vr(e){return typeof e=="string"||typeof e=="number"}function M(e,t){var r=null,n=null;return typeof t=="string"||typeof t=="number"?n=t:t&&vr(t.value)&&(n=t.value),r=e.getNode(n),r}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function fr(e){var t=e.props,r=e.context,n=e.scope,a=e.store,o=null,v=function(s){var c=s.dragEvent,g=s.node;o=g;var y={node:g.getModel(),e:c};H(t,r,"drag-start",y)},l=function(s){var c=s.dragEvent,g=s.node;o=g;var y={node:g.getModel(),e:c};H(t,r,"drag-end",y)},i=function(s){var c=s.dragEvent,g=s.node,y={node:g.getModel(),e:c};H(t,r,"drag-over",y)},p=function(s){var c=s.dragEvent,g=s.node,y={node:g.getModel(),e:c};H(t,r,"drag-leave",y)},u=function(s){var c,g=s.dragEvent,y=s.node,C=s.dropPosition;if(!(y.value===o.value||y.getParents().some(function(d){return d.value===o.value}))){var S={dropNode:y.getModel(),dragNode:o.getModel(),dropPosition:C,e:g};if(((c=t.allowDrop)===null||c===void 0?void 0:c.call(t,S))!==!1){var b=a.getNodes();b.some(function(d){return d.value===y.value?(C===ne.Inside?o.appendTo(a,d):C===ne.Before?y.insertBefore(o):y.insertAfter(o),!0):!1}),H(t,r,"drop",S)}}},m={handleDragStart:v,handleDragEnd:l,handleDragOver:i,handleDragLeave:p,handleDrop:u};return n.drag=m,{drag:m}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Pe(e){var t=e,r=t.store,n=j("tree").value,a=W(e.vmValue,2),o=a[0],v=a[1],l=W(e.vmActived,2),i=l[0],p=l[1],u=W(e.vmExpanded,2),m=u[0],f=u[1],s=function(d,h){var O=M(r,d),P=t.mouseEvent,x={node:O.getModel(),e:P,trigger:"setItem"};if(P){x.trigger="node-click";var E=P.target,k=P.currentTarget;ur("".concat(n,"__icon"),E,k)&&(x.trigger="icon-click")}var T=O.setExpanded(h,{directly:!0});return f(T,x),x.trigger!=="setItem"&&r.replaceExpanded(m.value||[]),T},c=function(d){var h=M(r,d);return s(h,!h.isExpanded())},g=function(d,h){var O=M(r,d),P=t.mouseEvent,x={node:O.getModel(),e:P,trigger:"setItem"};P&&(x.trigger="node-click");var E=O.setActived(h,{isAction:x.trigger==="node-click",directly:!0});return p(E,x),x.trigger!=="setItem"&&r.replaceActived(i.value||[]),E},y=function(d){var h=M(r,d);return g(h,!h.isActived())},C=function(d,h,O){var P=M(r,d),x=O==null?void 0:O.e,E={node:P.getModel(),e:x,trigger:"setItem"};x&&(E.trigger="node-click");var k=P.setChecked(h,{isAction:E.trigger==="node-click",directly:!0});return v(k,E),E.trigger!=="setItem"&&r.replaceChecked(o.value||[]),k},S=function(d,h){var O=M(r,d);if(O.isIndeterminate()){var P=O.hasEnableUnCheckedChild();return C(O,P,h)}return C(O,!O.isChecked(),h)};return{setExpanded:s,toggleExpanded:c,setActived:g,toggleActived:y,setChecked:C,toggleChecked:S}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function pr(e,t){var r=be(e),n=B(null),a=e.treeScope,o=a.store,v=o.privateMap.get(e.itemKey),l={stateId:e.stateId,props:e,context:t,treeScope:a,refProps:r,node:v,treeItemRef:n};return{state:l}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function xe(e){var t=e.context,r=j().value,n=function(l,i){var p=e.node,u=new Event("change"),m={event:u,node:p};t.emit("change",m,i)},a=!1,o=function(l){var i,p,u=e.node,m=e.treeScope,f=m.treeProps,s=f===void 0?{}:f,c=s.expandOnClickNode,g=l.target,y=u.children&&c&&(g.className==="".concat(r,"-checkbox__input")||g.tagName.toLowerCase()==="input");if(!(a||y)){a=!0,setTimeout(function(){a=!1}),c&&u.children&&((i=g.className)===null||i===void 0||(p=i.indexOf)===null||p===void 0?void 0:p.call(i,"".concat(r,"-tree__label")))!==-1&&l.preventDefault();var C={mouseEvent:l,event:l,node:u,path:u.getPath()};t.emit("click",C)}};return{handleChange:n,handleClick:o}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function gr(e){var t=j().value,r=j("tree").value,n=function(l){var i=Re({CaretRightSmallIcon:rr}),p=i.CaretRightSmallIcon;return N(p,null,null)},a=function(l){l.preventDefault()},o=function(l){var i=e.node,p=e.treeScope,u=p.scopedSlots,m=(p==null?void 0:p.treeProps)||{},f=m.icon,s=!1,c=null;f===!0?u!=null&&u.icon?c=u.icon({node:i==null?void 0:i.getModel()}):i.vmIsLeaf?c="":(s=!0,c=n(),i.loading&&i.expanded&&(c=N(Ve,null,null))):f&&(c=J(f,{createElement:l,node:i}));var g=N("span",{class:["".concat(r,"__icon"),"".concat(t,"-folder-icon"),s?"".concat(r,"__icon--default"):""],trigger:"expand",ignore:"active",onmousedown:a},[c]);return g};return{renderIcon:o}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function hr(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Se(e)}function mr(e){var t=j().value,r=j("tree").value,n=xe(e),a=n.handleChange,o=function(l){var i=e.node,p=e.treeScope,u=p.scopedSlots,m=p.treeProps,f=m===void 0?{}:m,s=f.label,c=f.expandOnClickNode,g=(f==null?void 0:f.checkProps)||{},y=null;s===!0?u!=null&&u.label?y=u.label({node:i==null?void 0:i.getModel()}):y=i.label||"":y=J(s,{createElement:l,node:i});var C=["".concat(r,"__label"),I({},"".concat(t,"-is-active"),i.isActivable()?i.actived:!1)],S=A(function(){var P,x=Array.isArray(i.children)&&((P=i.children)===null||P===void 0?void 0:P.length)>0,E=Me(i.children)&&i.children,k=x||E;return c&&k});if(i.vmCheckable){var b=!1;i.vmIsLocked&&!i.vmIsRest&&(b=!0),i.isDisabled()&&(b=!0);var d=ve(ve({},g),{},{disabled:b}),h=function(){return y}();y=N(qe,{class:C,checked:i.checked,indeterminate:i.indeterminate,disabled:b,name:String(i.value),onChange:a,stopLabelTrigger:S.value,ignore:"expand,active",props:d},hr(y)?y:{default:function(){return[h]}})}else{var O=N("span",{style:"position: relative"},[y]);y=i.isActivable()?N("span",{key:"1",ref:"label",class:C,title:i.label},[O]):N("span",{key:"2",class:C,title:i.label},[O])}return y};return{renderLabel:o}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function yr(e){var t=j("tree").value,r=function(a){var o=e.node,v=e.treeScope,l=v.scopedSlots,i=(v==null?void 0:v.treeProps)||{},p=i.line,u=!!i.icon,m=null;if(p===!0){if(l!=null&&l.line)m=l.line({node:o==null?void 0:o.getModel()});else if(o.parent&&o.tree){var f=o.vmIsLeaf,s=o.vmIsFirst,c=o.level,g=[];g.push("".concat(t,"__line")),(f||!u)&&g.push("".concat(t,"__line--leaf")),s&&u&&g.push("".concat(t,"__line--first"));var y=[],C=o.getParents();C.pop(),C.forEach(function(b,d){b.vmIsLast||y.push("calc(-".concat(d+1," * var(--space)) 0 var(--color)"))});var S={"--level":c?String(c):void 0,"box-shadow":y.join(",")};m=N("span",{class:g,style:S},null)}}else m=J(p,{createElement:a,node:o});return m};return{renderLine:r}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function br(e){var t=j("tree").value,r=function(a){var o=e.node,v=e.treeScope,l=v.scopedSlots,i=(v==null?void 0:v.treeProps)||{},p=i.operations,u=null;return l!=null&&l.operations?u=l.operations({node:o==null?void 0:o.getModel()}):u=J(p,{createElement:a,node:o}),u&&(u=N("span",{class:"".concat(t,"__operations"),ignore:"active,expand"},[u])),u};return{renderOperations:r}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Sr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fe(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Or(e){var t=e.treeScope,r=e.treeItemRef,n=t.virtualConfig,a=t.treeContentRef,o=t.scrollProps,v=j().value,l=j("tree").value,i=xe(e),p=i.handleClick,u=gr(e),m=u.renderIcon,f=mr(e),s=f.renderLabel,c=yr(e),g=c.renderLine,y=br(e),C=y.renderOperations,S=ir(e),b=S.dragStates,d=S.handleDragStart,h=S.handleDragEnd,O=S.handleDragOver,P=S.handleDragLeave,x=S.handleDrop,E=tr(a,r,ye(Sr({},o==null?void 0:o.value))),k=E.hasLazyLoadHolder,T=E.tRowHeight;function F(){var $=e.node,D=n==null?void 0:n.isVirtualScroll.value;if(D)var _=setTimeout(function(){n.handleRowMounted({ref:r,data:$}),clearTimeout(_)},100)}oe(function(){F()}),Fe(function(){F()});var K=function(){var D=e.node,_=D.level,R="--level: ".concat(_,";"),V="".concat(R);return V},Y=function(){var D=e.node,_=b.isDragOver,R=b.isDragging,V=b.dropPosition,w=[];return w.push("".concat(l,"__item")),w.push(I(I(I({},"".concat(l,"__item--open"),D.expanded),"".concat(v,"-is-active"),D.isActivable()?D.actived:!1),"".concat(v,"-is-disabled"),D.isDisabled())),w.push(I({},"".concat(l,"__item--draggable"),D.isDraggable())),D.visible?w.push("".concat(l,"__item--visible")):w.push("".concat(l,"__item--hidden")),D.vmIsLocked&&w.push("".concat(l,"__item--locked")),D.vmIsRest&&w.push("".concat(l,"__item--matched")),w.push(I(I(I(I({},"".concat(l,"__item--dragging"),R),"".concat(l,"__item--tip-top"),_&&V<0),"".concat(l,"__item--tip-bottom"),_&&V>0),"".concat(l,"__item--tip-highlight"),!R&&_&&V===0)),w},U=function(D){var _=[],R=m(D),V=g(D);V&&_.push(V),R&&_.push(R);var w=s(D);w&&_.push(w);var q=C(D);return q&&_.push(q),_},Q=function(D){var _=e.node,R=e.props;if(!_)return null;var V=_.level,w=_.value,q=K(),Ee=Y(),De=e;De.stateId=R.stateId;var Ne=N("div",{ref:"treeItemRef",class:Ee,"data-value":w,"data-level":V,style:q,onClick:function(L){return p(L)},draggable:_.isDraggable(),onDragstart:function(L){return d(L)},onDragend:function(L){return h(L)},onDragover:function(L){return O(L)},onDragleave:function(L){return P(L)},onDrop:function(L){return x(L)}},[k.value?[N("div",null,null)]:U(D)]);return Ne};return{hasLazyLoadHolder:k,tRowHeight:T,renderItemNode:Q}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pe(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Cr={stateId:{type:String},itemKey:{type:String},rowIndex:{type:Number},treeScope:{type:Object}},Pr=ae(ge(ge({props:Cr},ar),{},{setup:function(t,r){var n=pr(t,r),a=n.state,o=a.treeItemRef;B();var v=Or(a),l=v.renderItemNode;return{treeItemRef:o,renderItemNode:l}},render:function(t){var r=Oe();return typeof this.renderItemNode=="function"?this.renderItemNode(r):null}}));/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function xr(e){var t=e,r=t.props,n=t.context,a=Pe(e),o=a.toggleExpanded,v=a.toggleActived,l=a.toggleChecked,i=function(m){var f=m.mouseEvent,s=m.event,c=m.node;if(!(!c||!f)){t.mouseEvent=f;var g=r.expandOnClickNode,y=!r.disabled&&!c.disabled&&c.isActivable();["trigger","ignore"].forEach(function(S){var b=cr(S,s.target,s.currentTarget),d=(b==null?void 0:b.value)||"";d.indexOf("expand")>=0&&(S==="trigger"?g=!0:S==="ignore"&&(g=!1)),d.indexOf("active")>=0&&S==="ignore"&&(y=!1)}),g&&o(c),y&&v(c);var C={node:c.getModel(),e:f};H(r,n,"click",C),t.mouseEvent=null}},p=function(m,f){var s=r.disabled,c=m.node;!c||s||c.disabled||!c.isCheckable()||l(c,f)};return{handleChange:p,handleClick:i}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Er(e){var t=e.store,r=e.scope,n=e.allNodes,a=e.nodes,o=e.virtualConfig,v=xr(e),l=v.handleClick,i=v.handleChange,p=B(!1),u=new Map,m=function(){n.value=t.getNodes()},f=function(){var C=o==null?void 0:o.isVirtualScroll.value;if(!C){var S=[],b=!1;n.value.forEach(function(d){d.visible&&(b=!0,u.set(d.value,d.value)),u.has(d.value)&&S.push(d)}),u.forEach(function(d){t.getNode(d)||u.delete(d)}),a.value=S,p.value=!b}},s=function(){var C=o==null?void 0:o.isVirtualScroll.value;if(C){var S=o.visibleData.value;a.value=S,p.value=S.length<=0}},c=function(C,S,b,d){var h=S.VIRTUAL_SCROLL_INDEX||b,O=S[Je],P=N(Pr,{key:O,rowIndex:h,stateId:d,itemKey:O,treeScope:r,onClick:l,onChange:i},null);return P},g=function(C){var S="render-".concat(new Date().getTime()),b=a.value.map(function(d,h){return c(C,d,h,S)});return b};return z(n,f),z(o.visibleData,s),m(),f(),s(),t.emitter.on("update",m),{nodesEmpty:p,renderTreeNodes:g}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?he(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Dr(e){var t=e,r=t.props,n=t.context,a=t.allNodes,o=t.nodes,v=t.scope,l=t.treeContentRef,i=t.isScrolling,p=A(function(){return re({rowHeight:34},r.scroll)});v.scrollProps=p;var u=A(function(){var S=a.value.filter(function(b){return b.visible});return{data:S,scroll:p.value}}),m=We(l,u);v.virtualConfig=m,t.virtualConfig=m,oe(function(){var S=m==null?void 0:m.isVirtualScroll.value;S&&m.handleScroll()});var f=function(b){var d;(d=r.onScroll)===null||d===void 0||d.call(r,{e:b}),n.emit("scroll",{e:b})},s=null,c=function(){i.value=!0,s&&(clearTimeout(s),s=null),s=setTimeout(function(){s=null,i.value=!1},100)},g=0,y=function(b){c();var d=m==null?void 0:m.isVirtualScroll.value,h=b.target||b.srcElement,O=h.scrollTop;g!==O?d&&(m.handleScroll(),o.value=m.visibleData.value):g=0,g=O,f(b)},C=function(b){var d=b.index;if(!d&&d!==0){var h;if(!b.key){ie.error("Tree","scrollToElement: one of `index` or `key` must exist.");return}if(d=(h=a.value)===null||h===void 0?void 0:h.findIndex(function(O){return[le(O.data,"key"),le(O.data,"value")].includes(b.key)}),d<0){ie.error("Tree","".concat(b.key," does not exist in data, check `key` or `data` please."));return}}m.scrollToElement(re(re({},b),{},{index:d-1}))};return{treeContentRef:l,onInnerVirtualScroll:y,virtualConfig:m,scrollToElement:C}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Nr(e,t){var r=B(),n=B([]),a=B([]),o=B(!1),v=be(e),l=ee(e,v,"value","defaultValue","onChange","change"),i=ee(e,v,"actived","defaultActived","onActive","active"),p=ee(e,v,"expanded","defaultExpanded","onExpand","expand");function u(f){m.store=f,m.scope.store=f,a.value=f.getNodes()}var m={props:e,context:t,store:null,treeContentRef:r,nodes:n,allNodes:a,isScrolling:o,mouseEvent:null,virtualConfig:null,scope:{store:null,treeContentRef:r,treeProps:e,scopedSlots:{},virtualConfig:null},setStore:u,refProps:v,vmValue:l,vmActived:i,vmExpanded:p};return{state:m}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function _r(e){var t=e.props,r=e.context,n=e.refProps,a=t.valueMode,o=t.filter,v=t.keys,l=new Qe({valueMode:a,filter:o}),i=e.vmValue[0],p=e.vmActived[0],u=e.vmExpanded[0],m=function(){var h=Ze(t,["expandAll","expandLevel","expandMutex","expandParent","activable","activeMultiple","disabled","disableCheck","checkable","draggable","checkStrictly","load","lazy","valueMode","filter","allowFoldNodeOnFilter"]);l.setConfig(h)},f=function(){var h=t.expandParent;if(Array.isArray(u.value)){var O=new Map;u.value.forEach(function(x){if(O.set(x,!0),h){var E=l.getNode(x);E&&E.getModel().getParents().forEach(function(k){O.set(k.value,!0)})}});var P=Array.from(O.keys());l.setExpanded(P)}},s=!1,c=null,g=function(){if(t.allowFoldNodeOnFilter&&s)if(s=!1,t.filter){c||(c=l.getExpanded());var h=[],O=l.getNodes();O.forEach(function(P){P.vmIsLocked&&h.push(P.value)}),l.setExpanded(h)}else c&&(l.replaceExpanded(c),c=null)},y=function(h,O){t.allowFoldNodeOnFilter&&(s=h!==O)},C=function(h){var O=h.node,P={node:O.getModel()};Array.isArray(i.value)&&i.value.length>0&&l.replaceChecked(i.value),Array.isArray(u.value)&&u.value.length>0&&l.replaceExpanded(u.value),Array.isArray(p.value)&&p.value.length>0&&l.replaceActived(p.value),t!=null&&t.onLoad&&(t==null||t.onLoad(P)),r.emit("load",P)},S=function(h){l.reload(h||[]),l.refreshNodes(),Array.isArray(i.value)&&l.setChecked(i.value),f(),Array.isArray(p.value)&&l.setActived(p.value),l.refreshState()};function b(){l.setConfig({keys:v}),m(),l.append(t.data||[]),l.refreshNodes(),Array.isArray(i.value)&&l.setChecked(i.value),f(),Array.isArray(p.value)&&l.setActived(p.value),l.emitter.on("load",C),l.emitter.on("update",g)}return b(),e.setStore(l),z(function(){return Z(i.value||[])},function(d){l.replaceChecked(d)}),z(function(){return Z(u.value||[])},function(d){l.replaceExpanded(d)}),z(function(){return Z(p.value||[])},function(d){l.replaceActived(d)}),z(n.filter,function(d,h){y(d,h)}),z(n.keys,function(d){l.setConfig({keys:d})}),{store:l,rebuild:S,checkFilterExpand:y,updateStoreConfig:m,updateExpanded:f,expandFilterPath:g}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function X(e){return e&&(isNaN(Number(e))?e:"".concat(e,"px"))}function kr(e){var t=e.props,r=j("tree").value,n=j().value,a=e.virtualConfig,o=e.isScrolling,v=e.refProps,l=v.height,i=v.maxHeight,p=A(function(){var s=[r],c=t.disabled,g=t.hover,y=t.transition,C=t.checkable,S=t.draggable,b=t.expandOnClickNode,d=t.scroll;c&&s.push("".concat(n,"-is-disabled")),g&&s.push("".concat(r,"--hoverable")),C&&s.push("".concat(r,"--checkable")),S&&s.push("".concat(r,"--draggable")),y&&s.push("".concat(r,"--transition")),b&&s.push("".concat(r,"--block-node"));var h=a==null?void 0:a.isVirtualScroll.value;return h?(s.push("".concat(r,"__vscroll")),o.value&&s.push("".concat(r,"--scrolling"))):d&&d.type==="lazy"&&s.push("".concat(r,"__lazyload")),s}),u=A(function(){return{height:X(l.value),maxHeight:X(i.value),overflowY:X(l.value)||X(i.value)?"auto":void 0}}),m=A(function(){var s=a==null?void 0:a.isVirtualScroll.value,c=s?a==null?void 0:a.translateY.value:0,g="translateY(".concat(c,"px)"),y={transform:g,"-ms-transform":g,"-moz-transform":g,"-webkit-transform":g};return y}),f=A(function(){var s=a==null?void 0:a.isVirtualScroll.value,c=s?a==null?void 0:a.translateY.value:0,g="translate(0, ".concat(c,"px)");return{transform:g,"-ms-transform":g,"-moz-transform":g,"-webkit-transform":g}});return{treeClasses:p,treeContentStyles:u,scrollStyles:m,cursorStyles:f}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ir={activable:Boolean,activeMultiple:Boolean,actived:{type:Array,default:void 0},defaultActived:{type:Array},allowDrop:{type:Function},allowFoldNodeOnFilter:Boolean,checkProps:{type:Object},checkStrictly:Boolean,checkable:Boolean,data:{type:Array,default:function(){return[]}},disableCheck:{type:[Boolean,Function],default:!1},disabled:Boolean,draggable:Boolean,empty:{type:[String,Function],default:""},expandAll:Boolean,expandLevel:{type:Number,default:0},expandMutex:Boolean,expandOnClickNode:Boolean,expandParent:Boolean,expanded:{type:Array,default:void 0},defaultExpanded:{type:Array,default:function(){return[]}},filter:{type:Function},height:{type:[String,Number]},hover:Boolean,icon:{type:[Boolean,Function],default:!0},keys:{type:Object},label:{type:[String,Boolean,Function],default:!0},lazy:{type:Boolean,default:!0},line:{type:[Boolean,Function],default:!1},load:{type:Function},maxHeight:{type:[String,Number]},operations:{type:Function},scroll:{type:Object},transition:{type:Boolean,default:!0},value:{type:Array,default:void 0},modelValue:{type:Array,default:void 0},defaultValue:{type:Array,default:function(){return[]}},valueMode:{type:String,default:"onlyLeaf",validator:function(t){return t?["onlyLeaf","parentFirst","all"].includes(t):!0}},onActive:Function,onChange:Function,onClick:Function,onDragEnd:Function,onDragLeave:Function,onDragOver:Function,onDragStart:Function,onDrop:Function,onExpand:Function,onLoad:Function,onScroll:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?me(Object(r),!0).forEach(function(n){I(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function wr(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Se(e)}var jr=ae({name:"TTree",model:{prop:"value",event:"change"},props:te({},Ir),setup:function(t,r){var n=$e("tree"),a=n.t,o=n.global,v=j(),l=j("tree"),i=Nr(t,r),p=i.state,u=p.treeContentRef,m=p.isScrolling,f=_r(p),s=f.store,c=f.updateStoreConfig,g=f.rebuild;fr(p);var y=Pe(p),C=y.setActived,S=y.setExpanded,b=y.setChecked,d=Dr(p),h=d.onInnerVirtualScroll,O=d.virtualConfig,P=d.scrollToElement,x=Er(p),E=x.renderTreeNodes,k=x.nodesEmpty,T=kr(p),F=T.treeClasses,K=T.treeContentStyles,Y=T.scrollStyles,U=T.cursorStyles;return{t:a,global:o,classPrefix:v,componentName:l,state:p,store:s,treeClasses:F,treeContentRef:u,rebuild:g,updateStoreConfig:c,setActived:C,setExpanded:S,setChecked:b,renderTreeNodes:E,nodesEmpty:k,isScrolling:m,onInnerVirtualScroll:h,treeContentStyles:K,scrollStyles:Y,cursorStyles:U,virtualConfig:O,scrollToElement:P,scrollTo:P}},watch:{data:function(t){this.rebuild(t)}},methods:{refresh:function(){this.store.refreshState()},setItem:function(t,r){var n=this,a=this.store.getNode(t),o=r,v=Object.keys(o);a&&o&&(["expanded","actived","checked"].forEach(function(l){if(v.includes(l)){var i=o[l];delete o[l];var p="set".concat(Be(l)),u=n[p];ze(u)&&u.call(n,a,i)}}),a.set(o))},getItem:function(t){var r=this.store.getNode(t);return r==null?void 0:r.getModel()},getItems:function(t){var r=this.store.getNodes(t);return r.map(function(n){return n.getModel()})},appendTo:function(t,r){var n=this.store,a=[];Array.isArray(r)?a=r:a=[r],a.forEach(function(o){var v=(o==null?void 0:o.value)||"",l=M(n,v);l?n.appendNodes(t,l):n.appendNodes(t,o)})},insertBefore:function(t,r){var n=this.store,a=(r==null?void 0:r.value)||"",o=M(n,a);o?n.insertBefore(t,o):n.insertBefore(t,r)},insertAfter:function(t,r){var n=this.store,a=(r==null?void 0:r.value)||"",o=M(n,a);o?n.insertAfter(t,o):n.insertAfter(t,r)},remove:function(t){return this.store.remove(t)},getIndex:function(t){return this.store.getNodeIndex(t)},getParent:function(t){var r=this.store.getParent(t);return r==null?void 0:r.getModel()},getParents:function(t){var r=this.store.getParents(t);return r.map(function(n){return n.getModel()})},getPath:function(t){var r=this.store.getNode(t),n=[];return r&&(n=r.getPath().map(function(a){return a.getModel()})),n},getTreeData:function(t){var r=[];if(t){var n=this.store.getNode(t);if(!n)return[];r=this.store.getNodes(t)}else r=this.store.getNodes();var a={},o=[];return r.forEach(function(v){var l=v.value,i=te(te({},v.data),{},{value:l});i.children!==!0&&delete i.children,a[l]=i;var p=v.getParent();if(!p)o.push(i);else{var u=a[p.value];u?(Array.isArray(u.children)||(u.children=[]),u.children.push(i)):o.push(i)}}),o}},render:function(t){var r,n,a,o,v=this.state,l=this.treeClasses,i=this.updateStoreConfig,p=this.renderTreeNodes,u=this.nodesEmpty,m=this.isScrolling,f=this.virtualConfig,s=this.treeContentStyles,c=this.scrollStyles,g=this.cursorStyles,y=Oe(),C=v.scope,S=v.allNodes,b=v.refProps;C.scopedSlots=lr(this),i();var d=p(y),h=this.componentName,O=f.isVirtualScroll.value,P=null;if(u){var x=!this.empty&&!this.$slots.empty,E=x?this.t(this.global.empty):He(this,"empty");P=N("div",{class:"".concat(h,"__empty")},[E])}else d.length<=0&&(P=N("div",null,null));var k=this.$props,T=k.transition,F=null;!T||O&&m?F=N("div",{class:"".concat(h,"__list"),style:c},[d]):F=N(Ke,{tag:"div",class:"".concat(h,"__list"),"enter-active-class":"".concat(h,"__item--enter-active"),"leave-active-class":"".concat(h,"__item--leave-active"),style:c},wr(d)?d:{default:function(){return[d]}});var K=((r=(n=S.value)===null||n===void 0?void 0:n.filter(function($){return $.visible}).length)!==null&&r!==void 0?r:0)*((a=(o=b.scroll.value)===null||o===void 0?void 0:o.rowHeight)!==null&&a!==void 0?a:34),Y={width:"1px",height:"1px",opacity:0,pointerEvents:"none",position:"absolute",left:0,top:"".concat(K,"px")},U=N("div",{style:Y},null),Q=N("div",{class:l,ref:"treeContentRef",onScroll:this.onInnerVirtualScroll,style:s},[O&&N("div",{class:"".concat(h,"__vscroll-cursor"),style:g},null),P||F,O&&U]);return Q}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Hr=or(jr);export{Hr as T};