import{o as $,B,D as l,f as L,v as R,W as V,R as f,J as I,O as n,G as D,x as u,A as M,ar as T,r as S,g as U,w as t,h as i,aN as b,S as K,T as N,a0 as j,a1 as A}from"./.pnpm-c4ae2d5d.js";import{_ as H}from"./index-649cc330.js";const E={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},G=l("path",{fill:"currentColor",d:"M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"},null,-1),J=l("path",{fill:"currentColor",d:"M64 832h896v64H64zm256-640h128v96H320z"},null,-1),O=l("path",{fill:"currentColor",d:"M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"},null,-1),q=[G,J,O];function Q(_,v){return $(),B("svg",E,q)}const X={name:"ep-school",render:Q},Y=L({name:"WyPopoverListItem",__name:"WyPopoverListItem",props:{item:{default:null},activeItemKey:{default:null},keyField:{default:"key"},valueField:{default:"value"},showField:{default:"value"}},emits:["update"],setup(_,{emit:v}){const e=_,k=R(()=>typeof e.item=="object"?e.item[e.showField]:e.item),r=o=>{v("update",{key:o[e.keyField]?o[e.keyField]:o,value:o})},p=()=>{if(e.activeItemKey)return typeof e.item=="object"?e.item[e.keyField]===e.activeItemKey?"wy-item-active":"":e.item===e.activeItemKey?"wy-item-active":""};return(o,h)=>($(),B("div",{class:D(["wy-item",p()]),onClick:h[0]||(h[0]=c=>r(o.item))},[V(o.$slots,"default",{},()=>[f(I(n(k)),1)],!0)],2))}});const Z=H(Y,[["__scopeId","data-v-e985ddec"]]),ee={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},le=l("path",{fill:"currentColor",d:"m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704z"},null,-1),te=[le];function se(_,v){return $(),B("svg",ee,te)}const ie={name:"ep-search",render:se},oe={class:"wy-popover-header"},ae={key:0,class:"wy-search"},ne={class:"wy-popover-footer"},de=L({name:"WyPopoverList",__name:"index",props:{list:{default:()=>[]},poppverClass:{default:""},modelValue:{},showSearch:{type:Boolean,default:!0},searchField:{default:()=>["value"]},inputClass:{default:""},listClass:{default:""},itemSize:{default:32},keyField:{default:"key"},valueField:{default:""},showField:{default:"value"},direction:{default:"vertical"},minItemSize:{default:void 0},sizeField:{default:"size"},typeField:{default:"type"},buffer:{default:200},listTag:{default:"div"},simpleItem:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(_,{emit:v}){const e=_,k=u(null),r=()=>{var s;(s=k.value)==null||s.hide()},p=R(()=>c.value&&typeof c.value=="object"?c.value[e.showField]:c.value),o=u(""),h=u([]);M(()=>o.value,s=>{!s||!e.searchField||!e.searchField.length?h.value=e.list:h.value=e.list.filter(m=>e.searchField.some(w=>m[w]&&m[w].includes(s)))},{immediate:!0});const c=u(null),F=u(null),d=u(null),y=s=>{e.valueField?v("update:modelValue",s.value[e.valueField]):v("update:modelValue",s.value),c.value=s.value,F.value=s.key,r()},g=function(){e.modelValue&&e.list&&e.list.length&&typeof e.list[0]=="object"&&(e.valueField?(c.value=e.list.filter(s=>s[e.valueField]===e.modelValue)[0],F.value=c.value[e.keyField]):(c.value=e.modelValue,F.value=c.value[e.keyField]))};return T(()=>{e.simpleItem&&(d.value={"line-height":e.itemSize+"px"}),g()}),(s,m)=>{const w=S("el-input"),x=ie,a=Z,P=S("RecycleScroller"),W=S("el-popover");return $(),U(W,{"popper-class":"wy-popover-list "+((e==null?void 0:e.poppverClass)||""),ref_key:"popoverRef",ref:k},{reference:t(()=>[V(s.$slots,"reference",{result:n(p)},()=>[i(w,{modelValue:n(p),"onUpdate:modelValue":m[0]||(m[0]=z=>b(p)?p.value=z:null),readonly:"",class:D(["wy-trigger-input",(e==null?void 0:e.inputClass)||""])},null,8,["modelValue","class"])])]),default:t(()=>[l("div",oe,[V(s.$slots,"header",{hidePopover:r})]),e.showSearch?($(),B("div",ae,[i(w,{modelValue:n(o),"onUpdate:modelValue":m[1]||(m[1]=z=>b(o)?o.value=z:null)},{prefix:t(()=>[i(x)]),_:1},8,["modelValue"])])):K("",!0),V(s.$slots,"default",{hidePopover:r},()=>[i(P,{class:D("wy-scroller "+((e==null?void 0:e.listClass)||"")),items:n(h),"item-size":e.itemSize,"key-field":e.keyField,direction:e.direction,"min-item-size":e.minItemSize,"size-field":e.sizeField,"type-field":e.typeField,buffer:e.buffer,listTag:e.listTag},{default:t(({item:z})=>[i(a,{item:z,"active-item-key":n(F),onUpdate:y,"key-field":e.keyField,valueField:e.valueField,showField:e.showField,style:N(n(d))},{default:t(()=>[V(s.$slots,"list-item",{item:z})]),_:2},1032,["item","active-item-key","key-field","valueField","showField","style"])]),_:3},8,["class","items","item-size","key-field","direction","min-item-size","size-field","type-field","buffer","listTag"])]),l("div",ne,[V(s.$slots,"footer",{hidePopover:r})])]),_:3},8,["popper-class"])}}});const C=_=>(j("data-v-764bc0f8"),_=_(),A(),_),ue={class:"list-page"},ce=C(()=>l("h1",null,"输入框弹出式列表选择组件",-1)),re=C(()=>l("ul",null,[l("li",null,"默认触发元素为输入框"),l("li",null,"默认的单项数据类型为 { key: string, value: string }"),l("li",null,"绑定值是对象字段")],-1)),pe={class:"w-200px"},_e=C(()=>l("ul",null,[l("li",null,' 自定义列表的keyField和单项的数据类型，比如默认的单项数据类型为 { id: i + "", show: "显示" + i, save: "芜湖" + i } ')],-1)),fe={class:"w-200px"},ve={class:"w-200px"},me=C(()=>l("ul",null,[l("li",null,"自定义列表的单项和显示结果")],-1)),he={class:"w-200px inline-block"},ye=C(()=>l("h3",null,"当ElPopover使用",-1)),ge={class:"w-200px"},we=C(()=>l("h3",null,"提供了内容的header、footer slot",-1)),ke={class:"w-200px"},Fe=L({name:"ListPage",__name:"index",setup(_){const v=u([]);for(let d=1;d<=1e4;d++)v.value.push({id:d,show:"显示"+d,save:"芜湖"+d});const e=u([]);for(let d=1;d<=1e4;d++)e.value.push({key:d,value:d});const k=[{id:1,dept:"部门1",fullDept:"法人1/市场1/部门1"},{id:2,dept:"部门2",fullDept:"法人2/市场2/部门2"},{id:3,dept:"部门3",fullDept:"法人3/市场3/部门3"},{id:4,dept:"部门4",fullDept:"法人4/市场4/部门4"}],r=u(50),p=u("芜湖2"),o=u(3);u({key:50,value:50});const h={display:"flex","align-items":"center",height:"32px"},c={"font-size":"12px",height:"20px","lint-height":"20px"},F=u(null);return(d,y)=>{const g=de,s=S("el-card"),m=S("el-input"),w=X,x=S("el-button");return $(),B("div",ue,[ce,i(s,{class:"list-page-card"},{header:t(()=>[re]),default:t(()=>[l("div",pe,[l("h3",null,"存储的值："+I(n(r)),1),i(g,{list:n(e),modelValue:n(r),"onUpdate:modelValue":y[0]||(y[0]=a=>b(r)?r.value=a:null),trigger:"click",width:200,placement:"bottom",valueField:"value",persistent:!1},null,8,["list","modelValue"])])]),_:1}),i(s,{class:"list-page-card"},{header:t(()=>[_e]),default:t(()=>[l("div",fe,[l("h3",null,"存储的值："+I(n(p)),1),l("div",ve,[i(g,{list:n(v),modelValue:n(p),"onUpdate:modelValue":y[1]||(y[1]=a=>b(p)?p.value=a:null),trigger:"click",width:200,placement:"bottom",persistent:!1,keyField:"id",searchField:["show"],valueField:"save",showField:"show"},null,8,["list","modelValue"])])])]),_:1}),i(s,{class:"list-page-card"},{header:t(()=>[me]),default:t(()=>[l("h3",null,"存储的值："+I(n(o)),1),f(" 部门： "),l("div",he,[i(g,{list:k,modelValue:n(o),"onUpdate:modelValue":y[2]||(y[2]=a=>b(o)?o.value=a:null),"list-class":"auto-list",trigger:"click",width:400,"item-size":54,placement:"bottom-start",keyField:"id",showField:"fullDept",persistent:!1,valueField:"id","simple-item":!1,"show-arrow":!1},{reference:t(({result:a})=>[l("div",null,[i(m,{value:a,readonly:"",class:"wy-trigger-input input-inline"},null,8,["value"])])]),"list-item":t(({item:a})=>[l("div",{class:"dept-box",style:h},[i(w),f(" "+I(a.dept),1)]),l("div",{class:"full-dept-box",style:c},I(a.fullDept),1)]),_:1},8,["modelValue"])])]),_:1}),i(s,{class:"list-page-card"},{header:t(()=>[ye]),default:t(()=>[l("div",ge,[i(g,{trigger:"hover",width:200,placement:"right",persistent:!1,showSearch:!1},{reference:t(()=>[i(x,null,{default:t(()=>[f(" 悬浮我 ")]),_:1})]),default:t(()=>[f(" 你好 ")]),_:1})])]),_:1}),i(s,{class:"list-page-card"},{header:t(()=>[we]),default:t(()=>[l("div",ke,[i(g,{trigger:"click",width:200,placement:"right",persistent:!1,showSearch:!1,ref_key:"popoverRef",ref:F},{reference:t(()=>[i(x,null,{default:t(()=>[f(" 点击我 ")]),_:1})]),header:t(()=>[f(" 头部 ")]),footer:t(({hidePopover:a})=>[i(x,{type:"primary",class:"float-right ml-10px",onClick:a},{default:t(()=>[f("确定")]),_:2},1032,["onClick"]),i(x,{class:"float-right",onClick:a},{default:t(()=>[f("取消")]),_:2},1032,["onClick"])]),default:t(()=>[f(" 你好 ")]),_:1},512)])]),_:1})])}}});const Ve=H(Fe,[["__scopeId","data-v-764bc0f8"]]);export{Ve as default};
