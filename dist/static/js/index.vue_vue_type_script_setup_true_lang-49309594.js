import{o as h,B as w,D as s,f as $,O as i,v as p,x as _,A as z,T as f,U as m,V as y,W as g,G as V,aT as k,aU as B,g as S,w as x,h as v}from"./.pnpm-4cd026a8.js";import{_ as C}from"./index-2d07fa95.js";const D={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},W=s("path",{fill:"currentColor",d:"M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"},null,-1),M=[W];function R(c,o){return h(),w("svg",D,M)}const T={render:R},A={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},L=s("path",{fill:"currentColor",d:"M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"},null,-1),N=[L];function O(c,o){return h(),w("svg",A,N)}const U={render:O},X={class:"icon"},E={class:"icon"},G=$({name:"WySwitch",__name:"index",props:{modelValue:{type:Boolean,default:!1},width:{default:40},height:{default:22},hasBorder:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(c,{emit:o}){const e=c,t=i(e.modelValue),d={"--wy-switch-open-bgc":"#409eff","--wy-switch-close-bgc":"#dcdfe6","--wy-switch-open-border-color":"#8e8e93","--wy-switch-close-border-color":"#8e8e93","--wy-switch-open-circle-color":"#fff","--wy-switch-close-circle-color":"#fff","--wy-switch-transition":"0.5s"},u=p(()=>({border:e.hasBorder?"":"0",width:e.width?`${e.width}px`:"100%",height:e.height?`${e.height}px`:"22px","border-radius":e.height?`${e.height/2}px`:"11px"})),a=p(()=>({top:e.hasBorder?"1px":"2px",right:t?"1px":"auto",left:t?"auto":"1px",width:e.width?`${e.height-4}px`:"100%",height:e.height?`${e.height-4}px`:"22px"})),l=_(null),n=_(null),b=()=>{o("update:modelValue",!e.modelValue),o("change",!e.modelValue)};return z(()=>e.modelValue,r=>{t===r?n.value.style.transform="none":t?n.value.style.transform=`translateX(calc( -${l.value.clientWidth}px + 100% + 2px))`:t||(n.value.style.transform=`translateX(calc( ${l.value.clientWidth}px - 100% - 2px))`)}),(r,I)=>(h(),w("div",{class:V(["wy-switch",e.modelValue?"wy-switch-open":"wy-switch-close"]),style:d},[s("button",{class:"wy-switch-botton",type:"button",onClick:b,style:f(u.value),ref_key:"buttonRef",ref:l},[s("span",{class:"circle",style:f(a.value),ref_key:"circleRef",ref:n},[m(s("span",X,[g(r.$slots,"open-circle",{},void 0,!0)],512),[[y,e.modelValue]]),m(s("span",E,[g(r.$slots,"close-circle",{},void 0,!0)],512),[[y,!e.modelValue]])],4)],4)],2))}});const H=C(G,[["__scopeId","data-v-eeae5097"]]),F=$({name:"WyDarkToogle",__name:"index",emits:["change"],setup(c,{emit:o}){const e={"--wy-switch-open-bgc":"#616162","--wy-switch-close-bgc":"#f1f1f1","--wy-switch-open-circle-color":"#000000"},t=k(),d=B(t);function u(a){o("change",a),d(a)}return(a,l)=>(h(),S(H,{"model-value":i(t),onChange:u,style:e,"has-border":"",class:"wy-dark-toogle"},{"open-circle":x(()=>[v(i(T),{style:{color:"#fff"}})]),"close-circle":x(()=>[v(i(U))]),_:1},8,["model-value"]))}});export{F as _};
