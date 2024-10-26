import{e as O,b8 as b,aX as P}from"./index-Dys89YLq.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function g(s,v,i,a){var p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"value",l=P(),c=l.emit,m=l.vnode,n=O(),u=m.props||{},d=Object.prototype.hasOwnProperty.call(u,"modelValue")||Object.prototype.hasOwnProperty.call(u,"model-value"),f=Object.prototype.hasOwnProperty.call(u,p)||Object.prototype.hasOwnProperty.call(u,b(p));return d?[v,function(e){c("update:modelValue",e);for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];a==null||a.apply(void 0,[e].concat(o))}]:f?[s,function(e){c("update:".concat(p),e);for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];a==null||a.apply(void 0,[e].concat(o))}]:(n.value=i,[n,function(e){n.value=e;for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];a==null||a.apply(void 0,[e].concat(o))}])}export{g as u};
