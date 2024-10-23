import{d as L,E as he,C as D,G as de,a1 as Y,l as H,_ as T,aa as ge,a as P,J as ve,L as be,P as ee,aX as me,O as E,a9 as te,a5 as ae,Q as _e,a3 as re,N as G,ad as $}from"./index-CpJFga7x.js";import{u as ne}from"./useVModel-CzdLJ13E.js";import{S as pe,E as ye}from"./common-CF_MvV9u.js";/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function j(t){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(t)}var ke=/^\s+/,Se=/\s+$/;function u(t,e){if(t=t||"",e=e||{},t instanceof u)return t;if(!(this instanceof u))return new u(t,e);var a=Ce(t);this._originalInput=t,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||a.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),a,r,n,i,o,s;return a=e.r/255,r=e.g/255,n=e.b/255,a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*o+.0722*s},setAlpha:function(e){return this._a=ie(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=q(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=q(this._r,this._g,this._b),a=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+a+", "+r+"%, "+n+"%)":"hsva("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=W(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=W(this._r,this._g,this._b),a=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+a+", "+r+"%, "+n+"%)":"hsla("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return U(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return we(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(h(this._r,255)*100)+"%",g:Math.round(h(this._g,255)*100)+"%",b:Math.round(h(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%)":"rgba("+Math.round(h(this._r,255)*100)+"%, "+Math.round(h(this._g,255)*100)+"%, "+Math.round(h(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Be[U(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var a="#"+Z(this._r,this._g,this._b,this._a),r=a,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=u(e);r="#"+Z(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+a+",endColorstr="+r+")"},toString:function(e){var a=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,i=!a&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return u(this.toString())},_applyModification:function(e,a){var r=e.apply(null,[this].concat([].slice.call(a)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(Pe,arguments)},brighten:function(){return this._applyModification(Fe,arguments)},darken:function(){return this._applyModification(Oe,arguments)},desaturate:function(){return this._applyModification(Re,arguments)},saturate:function(){return this._applyModification(Te,arguments)},greyscale:function(){return this._applyModification(He,arguments)},spin:function(){return this._applyModification(Ie,arguments)},_applyCombination:function(e,a){return e.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(je,arguments)},complement:function(){return this._applyCombination(Ne,arguments)},monochromatic:function(){return this._applyCombination(Ve,arguments)},splitcomplement:function(){return this._applyCombination(Ee,arguments)},triad:function(){return this._applyCombination(X,[3])},tetrad:function(){return this._applyCombination(X,[4])}};u.fromRatio=function(t,e){if(j(t)=="object"){var a={};for(var r in t)t.hasOwnProperty(r)&&(r==="a"?a[r]=t[r]:a[r]=N(t[r]));t=a}return u(t,e)};function Ce(t){var e={r:0,g:0,b:0},a=1,r=null,n=null,i=null,o=!1,s=!1;return typeof t=="string"&&(t=De(t)),j(t)=="object"&&(x(t.r)&&x(t.g)&&x(t.b)?(e=Me(t.r,t.g,t.b),o=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):x(t.h)&&x(t.s)&&x(t.v)?(r=N(t.s),n=N(t.v),e=Ae(t.h,r,n),o=!0,s="hsv"):x(t.h)&&x(t.s)&&x(t.l)&&(r=N(t.s),i=N(t.l),e=xe(t.h,r,i),o=!0,s="hsl"),t.hasOwnProperty("a")&&(a=t.a)),a=ie(a),{ok:o,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a}}function Me(t,e,a){return{r:h(t,255)*255,g:h(e,255)*255,b:h(a,255)*255}}function W(t,e,a){t=h(t,255),e=h(e,255),a=h(a,255);var r=Math.max(t,e,a),n=Math.min(t,e,a),i,o,s=(r+n)/2;if(r==n)i=o=0;else{var l=r-n;switch(o=s>.5?l/(2-r-n):l/(r+n),r){case t:i=(e-a)/l+(e<a?6:0);break;case e:i=(a-t)/l+2;break;case a:i=(t-e)/l+4;break}i/=6}return{h:i,s:o,l:s}}function xe(t,e,a){var r,n,i;t=h(t,360),e=h(e,100),a=h(a,100);function o(b,_,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?b+(_-b)*6*d:d<1/2?_:d<2/3?b+(_-b)*(2/3-d)*6:b}if(e===0)r=n=i=a;else{var s=a<.5?a*(1+e):a+e-a*e,l=2*a-s;r=o(l,s,t+1/3),n=o(l,s,t),i=o(l,s,t-1/3)}return{r:r*255,g:n*255,b:i*255}}function q(t,e,a){t=h(t,255),e=h(e,255),a=h(a,255);var r=Math.max(t,e,a),n=Math.min(t,e,a),i,o,s=r,l=r-n;if(o=r===0?0:l/r,r==n)i=0;else{switch(r){case t:i=(e-a)/l+(e<a?6:0);break;case e:i=(a-t)/l+2;break;case a:i=(t-e)/l+4;break}i/=6}return{h:i,s:o,v:s}}function Ae(t,e,a){t=h(t,360)*6,e=h(e,100),a=h(a,100);var r=Math.floor(t),n=t-r,i=a*(1-e),o=a*(1-n*e),s=a*(1-(1-n)*e),l=r%6,b=[a,o,i,i,s,a][l],_=[s,a,a,o,i,i][l],d=[i,i,s,a,a,o][l];return{r:b*255,g:_*255,b:d*255}}function U(t,e,a,r){var n=[S(Math.round(t).toString(16)),S(Math.round(e).toString(16)),S(Math.round(a).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function we(t,e,a,r,n){var i=[S(Math.round(t).toString(16)),S(Math.round(e).toString(16)),S(Math.round(a).toString(16)),S(ue(r))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Z(t,e,a,r){var n=[S(ue(r)),S(Math.round(t).toString(16)),S(Math.round(e).toString(16)),S(Math.round(a).toString(16))];return n.join("")}u.equals=function(t,e){return!t||!e?!1:u(t).toRgbString()==u(e).toRgbString()};u.random=function(){return u.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Re(t,e){e=e===0?0:e||10;var a=u(t).toHsl();return a.s-=e/100,a.s=V(a.s),u(a)}function Te(t,e){e=e===0?0:e||10;var a=u(t).toHsl();return a.s+=e/100,a.s=V(a.s),u(a)}function He(t){return u(t).desaturate(100)}function Pe(t,e){e=e===0?0:e||10;var a=u(t).toHsl();return a.l+=e/100,a.l=V(a.l),u(a)}function Fe(t,e){e=e===0?0:e||10;var a=u(t).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(255*-(e/100)))),a.g=Math.max(0,Math.min(255,a.g-Math.round(255*-(e/100)))),a.b=Math.max(0,Math.min(255,a.b-Math.round(255*-(e/100)))),u(a)}function Oe(t,e){e=e===0?0:e||10;var a=u(t).toHsl();return a.l-=e/100,a.l=V(a.l),u(a)}function Ie(t,e){var a=u(t).toHsl(),r=(a.h+e)%360;return a.h=r<0?360+r:r,u(a)}function Ne(t){var e=u(t).toHsl();return e.h=(e.h+180)%360,u(e)}function X(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var a=u(t).toHsl(),r=[u(t)],n=360/e,i=1;i<e;i++)r.push(u({h:(a.h+i*n)%360,s:a.s,l:a.l}));return r}function Ee(t){var e=u(t).toHsl(),a=e.h;return[u(t),u({h:(a+72)%360,s:e.s,l:e.l}),u({h:(a+216)%360,s:e.s,l:e.l})]}function je(t,e,a){e=e||6,a=a||30;var r=u(t).toHsl(),n=360/a,i=[u(t)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,i.push(u(r));return i}function Ve(t,e){e=e||6;for(var a=u(t).toHsv(),r=a.h,n=a.s,i=a.v,o=[],s=1/e;e--;)o.push(u({h:r,s:n,v:i})),i=(i+s)%1;return o}u.mix=function(t,e,a){a=a===0?0:a||50;var r=u(t).toRgb(),n=u(e).toRgb(),i=a/100,o={r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a};return u(o)};u.readability=function(t,e){var a=u(t),r=u(e);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)};u.isReadable=function(t,e,a){var r=u.readability(t,e),n,i;switch(i=!1,n=$e(a),n.level+n.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};u.mostReadable=function(t,e,a){var r=null,n=0,i,o,s,l;a=a||{},o=a.includeFallbackColors,s=a.level,l=a.size;for(var b=0;b<e.length;b++)i=u.readability(t,e[b]),i>n&&(n=i,r=u(e[b]));return u.isReadable(t,r,{level:s,size:l})||!o?r:(a.includeFallbackColors=!1,u.mostReadable(t,["#fff","#000"],a))};var z=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Be=u.hexNames=Ge(z);function Ge(t){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[t[a]]=a);return e}function ie(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function h(t,e){ze(t)&&(t="100%");var a=Le(t);return t=Math.min(e,Math.max(0,parseFloat(t))),a&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function V(t){return Math.min(1,Math.max(0,t))}function y(t){return parseInt(t,16)}function ze(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function Le(t){return typeof t=="string"&&t.indexOf("%")!=-1}function S(t){return t.length==1?"0"+t:""+t}function N(t){return t<=1&&(t=t*100+"%"),t}function ue(t){return Math.round(parseFloat(t)*255).toString(16)}function J(t){return y(t)/255}var k=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",a="(?:"+e+")|(?:"+t+")",r="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",n="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?";return{CSS_UNIT:new RegExp(a),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function x(t){return!!k.CSS_UNIT.exec(t)}function De(t){t=t.replace(ke,"").replace(Se,"").toLowerCase();var e=!1;if(z[t])t=z[t],e=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var a;return(a=k.rgb.exec(t))?{r:a[1],g:a[2],b:a[3]}:(a=k.rgba.exec(t))?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=k.hsl.exec(t))?{h:a[1],s:a[2],l:a[3]}:(a=k.hsla.exec(t))?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=k.hsv.exec(t))?{h:a[1],s:a[2],v:a[3]}:(a=k.hsva.exec(t))?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=k.hex8.exec(t))?{r:y(a[1]),g:y(a[2]),b:y(a[3]),a:J(a[4]),format:e?"name":"hex8"}:(a=k.hex6.exec(t))?{r:y(a[1]),g:y(a[2]),b:y(a[3]),format:e?"name":"hex"}:(a=k.hex4.exec(t))?{r:y(a[1]+""+a[1]),g:y(a[2]+""+a[2]),b:y(a[3]+""+a[3]),a:J(a[4]+""+a[4]),format:e?"name":"hex8"}:(a=k.hex3.exec(t))?{r:y(a[1]+""+a[1]),g:y(a[2]+""+a[2]),b:y(a[3]+""+a[3]),format:e?"name":"hex"}:!1}function $e(t){var e,a;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),a=(t.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),a!=="small"&&a!=="large"&&(a="small"),{level:e,size:a}}/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var We={closable:Boolean,color:{type:String,default:""},content:{type:[String,Function]},default:{type:[String,Function]},disabled:Boolean,icon:{type:Function,default:void 0},maxWidth:{type:[String,Number]},shape:{type:String,default:"square",validator:function(e){return e?["square","round","mark"].includes(e):!0}},size:{type:String,default:"medium",validator:function(e){return e?["small","medium","large"].includes(e):!0}},theme:{type:String,default:"default",validator:function(e){return e?["default","primary","warning","danger","success"].includes(e):!0}},title:{type:String,default:""},variant:{type:String,default:"dark",validator:function(e){return e?["dark","light","outline","light-outline"].includes(e):!0}},onClick:Function,onClose:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var oe=L({name:"TTag",props:We,setup:function(e){var a=he("tag"),r=a.globalConfig,n=D("tag"),i=de({CloseIcon:ve}),o=i.CloseIcon,s=be(),l=ee(),b=Y(),_=b.SIZE,d=me(),A=d.vnode,F=H(function(){return["".concat(n.value),"".concat(n.value,"--").concat(e.theme),"".concat(n.value,"--").concat(e.variant),T(T(T(T({},"".concat(n.value,"--ellipsis"),e.maxWidth),"".concat(n.value,"--close"),e.closable),"".concat(n.value,"--disabled"),e.disabled),_.value[e.size],e.size!=="medium"),e.shape!=="square"&&"".concat(n.value,"--").concat(e.shape)]}),O=H(function(){return c()}),p=H(function(){return e.maxWidth?{maxWidth:isNaN(Number(e.maxWidth))?String(e.maxWidth):"".concat(e.maxWidth,"px")}:{}}),c=function(){var f=e.color,g=e.variant;if(!f)return{};var R=u(f).getLuminance(),w={color:R>.5?"black":"white"};if((g==="outline"||g==="light-outline")&&(w.borderColor=f),g!=="outline"){var I=function(){var B=u(f).toRgb(),le=B.r,fe=B.g,ce=B.b;return"rgba(".concat(le,", ").concat(fe,", ").concat(ce,", 0.1)")};w.backgroundColor=g==="dark"?f:I()}return g!=="dark"&&(w.color=f),w},M=function(f){var g;e.disabled||(g=e.onClick)===null||g===void 0||g.call(e,{e:f})},C=function(){if(!e.closable)return null;var f="".concat(n.value,"__icon-close");return r.value.closeIcon?E(r.value.closeIcon(E),{class:f}):P(o,{onClick:function(R){var w,I=R.e;I&&I.stopPropagation(),(w=e.onClose)===null||w===void 0||w.call(e,{e:I})},class:f},null)},m=function(f){if(e.maxWidth){var g=A.props||{};if(Reflect.has(g,"title"))return g.title||void 0;if(f)return f}};return function(){var v=C(),f=l("default","content"),g=s("icon"),R=m(ge(f)?f:"");return P("div",{class:F.value,style:O.value,onClick:M},[g,P("span",{class:e.maxWidth?"".concat(n.value,"--text"):void 0,style:p.value,title:R},[f]),!e.disabled&&v])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var qe={checked:{type:Boolean,default:void 0},modelValue:{type:Boolean,default:void 0},defaultChecked:Boolean,checkedProps:{type:Object},content:{type:[String,Number,Array,Function]},default:{type:[String,Function]},disabled:Boolean,size:{type:String,default:"medium",validator:function(e){return e?["small","medium","large"].includes(e):!0}},uncheckedProps:{type:Object},value:{type:[String,Number]},onChange:Function,onClick:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function K(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,r)}return a}function Q(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?K(Object(a),!0).forEach(function(r){T(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function Ue(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!re(t)}var se=L({name:"TCheckTag",props:qe,setup:function(e){var a=D("tag"),r=Y(),n=r.SIZE,i=ee(),o=te(e),s=o.checked,l=o.modelValue,b=ne(s,l,e.defaultChecked,e.onChange,"checked"),_=ae(b,2),d=_[0],A=_[1],F=H(function(){return["".concat(a.value),"".concat(a.value,"--check"),n.value[e.size],T(T({},"".concat(a.value,"--checked"),d.value),"".concat(a.value,"--disabled"),e.disabled)]}),O=H(function(){var m=Q({theme:"primary"},e.checkedProps),v=Q({},e.uncheckedProps);return d.value?m:v}),p=function(v){var f=v.e;if(!e.disabled){var g;(g=e.onClick)===null||g===void 0||g.call(e,{e:f}),A(!d.value,{e:f,value:e.value})}},c=function(v){var f,g=v.code||((f=v.key)===null||f===void 0?void 0:f.trim()),R=pe.test(g)||ye.test(g);R&&(v.preventDefault(),A(!d.value,{e:v,value:e.value}))},M=function(v){v.currentTarget.addEventListener("keydown",c)},C=function(v){v.currentTarget.removeEventListener("keydown",c)};return function(){var m=i("default","content");return P(oe,_e({class:F.value,disabled:e.disabled,tabindex:e.disabled?void 0:"0",onFocus:M,onBlur:C},O.value,{onClick:p}),Ue(m)?m:{default:function(){return[m]}})}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var Ze={checkedProps:{type:Object},multiple:Boolean,options:{type:Array},uncheckedProps:{type:Object},value:{type:Array,default:void 0},modelValue:{type:Array,default:void 0},defaultValue:{type:Array,default:function(){return[]}},onChange:Function};/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */function Xe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!re(t)}var Je=L({name:"TCheckTagGroup",props:Ze,setup:function(e,a){var r=te(e),n=r.value,i=r.modelValue,o=r.options,s=D("check-tag-group"),l=H(function(){return[s.value]}),b=ne(n,i,e.defaultValue,e.onChange),_=ae(b,2),d=_[0],A=_[1],F=function(c,M){var C=M.value;if(c)e.multiple?A(d.value.concat(C),{e:M.e,type:"check",value:C}):A([C],{e:M.e,type:"check",value:C});else{var m=[];e.multiple&&(m=d.value.filter(function(v){return v!==C})),A(m,{e:M.e,type:"uncheck",value:C})}},O=function(c){return a.slots.option?a.slots.option(c):a.slots.label?a.slots.label(c):c.label?G(c.label)?c.label(E):c.label:c.content&&G(c.content)?c.content(E):c.default&&G(c.default)?c.default(E):c.value};return function(){return P("div",{class:l.value},[(o.value||[]).map(function(p){var c;return P(se,{key:p.value,value:p.value,checkedProps:e.checkedProps,uncheckedProps:e.uncheckedProps,checked:d.value.includes(p.value),onChange:F,disabled:p.disabled,size:p.size,"data-value":p.value},Xe(c=O(p))?c:{default:function(){return[c]}})})])}}});/**
 * tdesign v1.10.1
 * (c) 2024 tdesign
 * @license MIT
 */var tt=$(oe);$(se);$(Je);export{tt as T,u as t};
