import{d as ve,C as R,l as p,a9 as de,a5 as fe,a8 as me,e as O,an as ge,_ as y,aZ as L,aB as C,U as S,bo as he,bO as ye,T as U,v as pe,a1 as be,a as w,Q as H,L as xe,ad as Se}from"./index-Bbii3Das.js";import{i as we}from"./dep-d524834c-s9Vwwbzr.js";import{o as _e}from"./helper-DuXnSC7u.js";import{a as Te}from"./const-DCUPODAK.js";import{u as ze}from"./useVModel-mAS2bV03.js";import{u as Ve}from"./useLengthLimit-Drp21OsL.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var s,Oe=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow-y:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,Ce=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Pe(n){if(!(typeof window>"u"||!n)){var e=window.getComputedStyle(n),r=e.getPropertyValue("box-sizing")||e.getPropertyValue("-moz-box-sizing")||e.getPropertyValue("-webkit-box-sizing"),o=parseFloat(e.getPropertyValue("padding-bottom"))+parseFloat(e.getPropertyValue("padding-top")),d=parseFloat(e.getPropertyValue("border-bottom-width"))+parseFloat(e.getPropertyValue("border-top-width")),f=Ce.map(function(l){return"".concat(l,":").concat(e.getPropertyValue(l))}).join(";");return{sizingStyle:f,paddingSize:o,borderSize:d,boxSizing:r}}}function k(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;s||(s=document.createElement("textarea"),document.body.appendChild(s));var o=Pe(n),d=o.paddingSize,f=o.borderSize,l=o.boxSizing,P=o.sizingStyle;s.setAttribute("style","".concat(P,";").concat(Oe)),s.value=n.value||n.placeholder||"";var m=s.scrollHeight,b={};l==="border-box"?m+=f:l==="content-box"&&(m-=d),s.value="";var V=s.scrollHeight-d;if(e!==null){var x=V*e;l==="border-box"&&(x=x+d+f),m=Math.max(x,m),b.minHeight="".concat(x,"px")}if(r!==null){var _=V*r;l==="border-box"&&(_=_+d+f),m=Math.min(_,m)}return b.height="".concat(m,"px"),s.parentNode&&s.parentNode.removeChild(s),s=null,b}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var je={allowInputOverMax:{type:Boolean,default:!1},autofocus:Boolean,autosize:{type:[Boolean,Object],default:!1},disabled:{type:Boolean,default:void 0},maxcharacter:{type:Number},maxlength:{type:[Number,String]},name:{type:String,default:""},placeholder:{type:String,default:void 0},readonly:Boolean,status:{type:String,validator:function(e){return["default","success","warning","error"].includes(e)}},tips:{type:[String,Function]},value:{type:[String,Number]},modelValue:{type:[String,Number]},defaultValue:{type:[String,Number]},onBlur:Function,onChange:Function,onFocus:Function,onKeydown:Function,onKeypress:Function,onKeyup:Function,onValidate:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function X(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),r.push.apply(r,o)}return r}function Ie(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?X(Object(r),!0).forEach(function(o){y(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function $(n){var e={};return Object.keys(n).forEach(function(r){we(n[r])||(e[r]=n[r])}),e}var Ne=ve({name:"TTextarea",inheritAttrs:!1,props:Ie({},je),setup:function(e,r){var o=r.attrs,d=r.expose,f=R(),l=R("textarea"),P=p(function(){return"".concat(l.value,"__tips")}),m=p(function(){return"".concat(l.value,"__limit")}),b=de(e),V=b.value,x=b.modelValue,_=ze(V,x,e.defaultValue,e.onChange),A=fe(_,2),c=A[0],J=A[1],T=me(),z=O({}),v=O(),j=O(!1),I=O(!1),Z=function(){var a;return(a=v.value)===null||a===void 0?void 0:a.focus()},G=function(){var a;return(a=v.value)===null||a===void 0?void 0:a.blur()},g=function(){var a;if(e.autosize===!0)z.value=k(v.value);else if(e.autosize&&C(e.autosize)==="object"){var u=e.autosize,i=u.minRows,h=u.maxRows;z.value=k(v.value,i,h)}else o.rows?z.value={height:"auto",minHeight:"auto"}:o.style&&(a=v.value)!==null&&a!==void 0&&(a=a.style)!==null&&a!==void 0&&a.height&&(z.value={height:v.value.style.height})},Q=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=v.value,i=String(a);u&&u.value!==i&&(u.value=i,c.value=i)},K=function(a){var u=a.target,i=u.value;if(e.maxcharacter&&e.maxcharacter>=0){var h=L(i,e.maxcharacter);i=C(h)==="object"&&h.characters}!I.value&&J(i,{e:a}),U(function(){return Q(i)}),g()},Y=function(a){K(a)},q=function(){I.value=!0},W=function(a){I.value=!1,K(a)},N=function(a,u){var i;if(!T.value){var h="on".concat(a[0].toUpperCase()).concat(a.slice(1));(i=e[h])===null||i===void 0||i.call(e,c.value,{e:u})}},ee=function(a){N("keydown",a)},ae=function(a){N("keyup",a)},te=function(a){N("keypress",a)},ne=function(a){var u;g(),!T.value&&(j.value=!0,(u=e.onFocus)===null||u===void 0||u.call(e,c.value,{e:a}))},F=ge(Te,void 0),re=function(a){var u;g(),j.value=!1,(u=e.onBlur)===null||u===void 0||u.call(e,c.value,{e:a}),F==null||F.handleBlur()},oe=p(function(){return[l.value,y(y({},"".concat(f.value,"-is-disabled"),T.value),"".concat(f.value,"-is-readonly"),e.readonly)]}),ue=p(function(){return $({autofocus:e.autofocus,disabled:T.value,readonly:e.readonly,placeholder:e.placeholder,maxlength:!e.allowInputOverMax&&e.maxlength||void 0,name:e.name||void 0})}),ie=p(function(){var t=L(String(c.value||""));return C(t)==="object"?t.length:t}),le=p(function(){return{value:[void 0,null].includes(c.value)?void 0:String(c.value),status:e.status,maxlength:Number(e.maxlength),maxcharacter:e.maxcharacter,allowInputOverMax:e.allowInputOverMax,onValidate:e.onValidate}}),ce=Ve(le),B=ce.tStatus;S(function(){return c.value},function(){return g()}),S(v,function(t){t&&g()}),S(function(){return e.autofocus},function(t){t&&v.value.focus()}),S(z,function(t){var a=o.style;he(v.value,ye(a,t))}),S(c,function(){U(function(){return g()})}),S(function(){return e.autosize},g,{deep:!0}),d({focus:Z,blur:G}),pe(function(){g()});var se=xe();return function(){var t,a=$({onFocus:ne,onBlur:re,onKeydown:ee,onKeyup:ae,onKeypress:te}),u=be(),i=u.STATUS,h=p(function(){return["".concat(l.value,"__inner"),y(y(y(y({},"".concat(f.value,"-is-").concat(B.value),B.value),i.value.disabled,T.value),i.value.focused,j.value),"".concat(f.value,"-resize-none"),C(e.autosize)==="object"),"narrow-scrollbar"]}),D=se("tips"),E=D&&w("div",{class:"".concat(P.value," ").concat(l.value,"__tips--").concat(e.status||"normal")},[D]),M=e.maxcharacter&&w("span",{class:m.value},["".concat(ie.value,"/").concat(e.maxcharacter)])||!e.maxcharacter&&e.maxlength&&w("span",{class:m.value},["".concat(c.value?(t=String(c.value))===null||t===void 0?void 0:t.length:0,"/").concat(e.maxlength)]);return w("div",H({class:oe.value},_e(o,["style"])),[w("textarea",H({onInput:Y,onCompositionstart:q,onCompositionend:W,ref:v,value:c.value,class:h.value},a,ue.value),null),E||M?w("div",{class:["".concat(l.value,"__info_wrapper"),y({},"".concat(l.value,"__info_wrapper_align"),!E)]},[E,M]):null])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Me=Se(Ne);export{Me as T};
