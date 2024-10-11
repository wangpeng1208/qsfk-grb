import{be as x,b1 as o,bf as u,Z as l,bg as I}from"./index-DyfhlEKp.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var K=x,O=o,P=u,f=l,S=I;function b(n,i,g,d){if(!f(n))return n;i=O(i,n);for(var t=-1,e=i.length,v=e-1,r=n;r!=null&&++t<e;){var s=S(i[t]),a=g;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(t!=v){var _=r[s];a=d?d(_,s,r):void 0,a===void 0&&(a=f(_)?_:P(i[t+1])?[]:{})}K(r,s,a),r=r[s]}return n}var h=b;export{h as _};
