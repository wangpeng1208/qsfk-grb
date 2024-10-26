import{bb as g,a_ as o,bc as u,Z as l,bd as I}from"./index-Dys89YLq.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var c=g,K=o,O=u,f=l,P=I;function S(n,i,v,d){if(!f(n))return n;i=K(i,n);for(var t=-1,e=i.length,x=e-1,r=n;r!=null&&++t<e;){var s=P(i[t]),a=v;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(t!=x){var _=r[s];a=d?d(_,s,r):void 0,a===void 0&&(a=f(_)?_:O(i[t+1])?[]:{})}c(r,s,a),r=r[s]}return n}var h=S;export{h as _};
