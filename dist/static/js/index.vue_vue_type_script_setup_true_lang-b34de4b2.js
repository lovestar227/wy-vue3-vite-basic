import{f as v,at as C,x as c,r as w,o as y,g as _,au as g,O as t,w as s,as as a,G as B}from"./.pnpm-2cbd34b1.js";const x=v({name:"WyButton",__name:"index",props:{wave:{type:Boolean,default:!1},onClick:{type:Function,default:null}},setup(f,{expose:r}){const n=f,l=C(),i=c(null),o=c(!1),p=()=>{o.value=!0,setTimeout(()=>{o.value=!1},1e3)},d=e=>{o&&n.wave&&p(),n.onClick&&n.onClick(e)};return r({elRef:i}),(e,u)=>{const m=w("el-button");return y(),_(m,{ref_key:"elButtonRef",ref:i,class:B(t(o)?"wy-button-wave":""),onClick:u[0]||(u[0]=k=>d(k))},g({default:s(()=>[a(e.$slots,"default")]),_:2},[t(l).loading?{name:"loading",fn:s(()=>[a(e.$slots,"loading")]),key:"0"}:void 0,t(l).icon?{name:"icon",fn:s(()=>[a(e.$slots,"icon")]),key:"1"}:void 0]),1032,["class"])}}});export{x as _};
