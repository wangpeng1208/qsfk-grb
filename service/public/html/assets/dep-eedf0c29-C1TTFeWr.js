import{b7 as g,b6 as l,aM as I,b8 as w}from"./index-DyfhlEKp.js";import{_ as A,b as C}from"./index-c2cc7QiC.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var M=g,R=A,S=C,d=l,o=I,p=w,D=200;function E(_,r,a,e){var c=-1,f=R,h=!0,b=_.length,s=[],y=r.length;if(!b)return s;a&&(r=d(r,o(a))),e?(f=S,h=!1):r.length>=D&&(f=p,h=!1,r=new M(r));r:for(;++c<b;){var n=_[c],i=a==null?n:a(n);if(n=e||n!==0?n:0,h&&i===i){for(var t=y;t--;)if(r[t]===i)continue r;s.push(n)}else f(r,i,e)||s.push(n)}return s}var U=E;export{U as _};
