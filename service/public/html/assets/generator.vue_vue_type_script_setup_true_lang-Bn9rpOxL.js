import{d as U,r as S,e as b,o as _,c as F,w as n,a as t,b as v,p as I,u as B,y as N,n as P,B as T}from"./index-Bbii3Das.js";import{I as D}from"./index-CGpzlmyY.js";import{S as $}from"./index-DyMK9WKq.js";import{F as G,a as O}from"./index-DXOBqNco.js";import{R}from"./index-BdGTSLMf.js";import{C as j,a as z}from"./index-m1SedByb.js";import{I as E}from"./index-CknG8Rj8.js";import{T as L}from"./index-DFKfGQQV.js";import{D as q}from"./index-Zc3uWvbC.js";const A={key:0,style:{padding:"15px 0"}},oe=U({__name:"generator",setup(H,{expose:V}){const k=[{label:"数字",value:1},{label:"小写字母",value:2},{label:"大写字母",value:3},{label:"八进制",value:4},{label:"十六进制-小写",value:5},{label:"十六进制-大写",value:6},{label:"二进制",value:7},{label:"点号",value:8},{label:"单引号",value:9},{label:"叹号",value:10},{label:'下划线"_"',value:14},{label:'减号"-"',value:15},{label:'井号"#"',value:16},{label:'美元符号"$"',value:18},{label:'百分号"%"',value:19},{label:"@",value:20},{label:"&",value:21},{label:"^",value:22}],h=[{label:"逗号",value:","},{label:"空格",value:" "},{label:"|",value:"|"},{label:"----",value:"----"},{label:"____",value:"____"}],e=S({n1:{prefix:"",suffix:"",startpos:"1"},n2:{chars:[1,2,3],length:15},count:500,onlyPwd:!1,splitFormat:","}),u=b(""),d=b(!1),x=()=>{d.value=!0;let m="";for(let a=0;a<e.count;a++){let s=e.n1.prefix+(parseInt(e.n1.startpos)+a).toString().padStart(3,"0")+e.n1.suffix,l="";for(let r=0;r<e.n2.length;r++){let i=Math.floor(Math.random()*e.n2.chars.length);switch(e.n2.chars[i]){case 1:l+=Math.floor(Math.random()*10);break;case 2:l+=String.fromCharCode(Math.floor(Math.random()*26)+97);break;case 3:l+=String.fromCharCode(Math.floor(Math.random()*26)+65);break;case 4:l+=Math.floor(Math.random()*8);break;case 5:l+=Math.floor(Math.random()*16).toString(16);break;case 6:l+=Math.floor(Math.random()*16).toString(16).toUpperCase();break;case 7:l+=Math.floor(Math.random()*2);break;case 8:l+=".";break;case 9:l+="'";break;case 10:l+="!";break;case 14:l+="_";break;case 15:l+="-";break;case 16:l+="#";break;case 17:l+="/";break;case 18:l+="$";break;case 19:l+="%";break;case 20:l+="@";break;case 21:l+="&";break;case 22:l+="^";break}}e.onlyPwd?s="":s+=e.splitFormat,a===e.count-1?m+=s+l:m+=s+l+`
`}u.value=m,d.value=!1},p=b(!1);return V({init:()=>{p.value=!0}}),(m,a)=>{const s=D,l=$,r=G,i=R,g=j,f=E,M=z,c=T,y=O,w=L,C=q;return _(),F(C,{visible:p.value,"onUpdate:visible":a[10]||(a[10]=o=>p.value=o),header:"卡密生成器",footer:!1,"close-btn":!0,size:"80%"},{default:n(()=>[t(y,{ref:"form",class:"base-form",data:e,"label-align":"left","label-width":80,onSubmit:x},{default:n(()=>[t(r,{label:"卡号配置",tips:" "},{default:n(()=>[t(l,null,{default:n(()=>[t(s,{modelValue:e.n1.prefix,"onUpdate:modelValue":a[0]||(a[0]=o=>e.n1.prefix=o),placeholder:"卡号前缀",tips:"卡号前缀"},null,8,["modelValue"]),t(s,{modelValue:e.n1.suffix,"onUpdate:modelValue":a[1]||(a[1]=o=>e.n1.suffix=o),placeholder:"卡号后缀",tips:"卡号后缀"},null,8,["modelValue"]),t(s,{type:"number",modelValue:e.n1.startpos,"onUpdate:modelValue":a[2]||(a[2]=o=>e.n1.startpos=o),placeholder:"卡号起始值",tips:"卡号起始值"},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{label:"卡号卡密连接",tips:" "},{default:n(()=>[t(i,{modelValue:e.splitFormat,"onUpdate:modelValue":a[3]||(a[3]=o=>e.splitFormat=o),options:h},null,8,["modelValue"])]),_:1}),t(r,{label:"卡密字符"},{default:n(()=>[t(g,{modelValue:e.n2.chars,"onUpdate:modelValue":a[4]||(a[4]=o=>e.n2.chars=o),options:k},null,8,["modelValue"])]),_:1}),t(r,{label:"卡密长度"},{default:n(()=>[t(f,{modelValue:e.n2.length,"onUpdate:modelValue":a[5]||(a[5]=o=>e.n2.length=o),min:"6",max:"30",placeholder:"生成的卡密长度"},null,8,["modelValue"])]),_:1}),t(r,{label:"生成数量"},{default:n(()=>[t(f,{type:"number",min:"1",modelValue:e.count,"onUpdate:modelValue":a[6]||(a[6]=o=>e.count=o),placeholder:"生成数量"},null,8,["modelValue"])]),_:1}),t(r,{label:"仅生成卡密"},{default:n(()=>[t(M,{modelValue:e.onlyPwd,"onUpdate:modelValue":a[7]||(a[7]=o=>e.onlyPwd=o)},null,8,["modelValue"])]),_:1}),t(r,null,{default:n(()=>[t(c,{theme:"primary",class:"form-submit-confirm",type:"submit",loading:d.value},{default:n(()=>[v(" 生成 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["data"]),u.value?(_(),I("div",A,[t(w,{modelValue:u.value,"onUpdate:modelValue":a[8]||(a[8]=o=>u.value=o),style:{height:"400px"}},null,8,["modelValue"]),t(c,{theme:"success",onClick:a[9]||(a[9]=o=>B(N)(u.value))},{default:n(()=>[v("复制")]),_:1})])):P("",!0)]),_:1},8,["visible"])}}});export{oe as _};
