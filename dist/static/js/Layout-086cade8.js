import{d as Ie,f as D,v as z,x as T,y as ne,A as ye,r as w,o as n,B as d,h as o,w as s,g as k,C as Le,K as Me,D as i,F as Be,G as Y,u as be,H as j,I as E,J as v,L as He,O as a,P as te,Q as ze,R as $,S as I,T as Z,U as oe,V as _e,W as ge,X as Oe,Y as De,j as ke,Z as Re,_ as Pe,$ as Ve,a0 as Ae,a1 as Ne,a2 as We,a3 as Fe}from"./.pnpm-4cd026a8.js";import{m as qe}from"./index-bbfdc4c8.js";import{g as X,s as W,r as $e,_ as R,a as ue,h as se,u as Se,t as je,m as Ee,$ as K}from"./index-2d07fa95.js";import{_ as Ke}from"./index.vue_vue_type_script_setup_true_lang-49309594.js";import{_ as ae}from"./WyIconFont.vue_vue_type_script_setup_true_lang-b282a2fa.js";import{u as me,h as fe,a as ve,r as we}from"./user-e1c9ffd8.js";import{_ as de}from"./WyIconify.vue_vue_type_script_setup_true_lang-06ca0fb4.js";const Q=Ie({id:"setting",state:()=>{var t,e,c,l,u;return{title:X().title,showHeader:((t=W.getItem("setting"))==null?void 0:t.showHeader)??X().showHeader,openBtnPosition:((e=W.getItem("setting"))==null?void 0:e.openBtnPosition)??X().openBtnPosition,sidebarIsOpen:((c=W.getItem("setting"))==null?void 0:c.sidebarIsOpen)??X().sidebarIsOpen,showScreenFull:((l=W.getItem("setting"))==null?void 0:l.showScreenFull)??X().showScreenFull,showDarkToogle:((u=W.getItem("setting"))==null?void 0:u.showScreenFull)??X().showDarkToogle}},getters:{getTitle(t){return t.title},getopenBtnPosition(t){return t.openBtnPosition},getShowHeader(t){return t.showHeader},getSidebarIsOpen(t){return t.sidebarIsOpen},getShowScreenFull(t){return t.showScreenFull},getShowDarkToogle(t){return t.showDarkToogle}},actions:{toggleSideBar(t){t=t??!this.sidebarIsOpen,this.sidebarIsOpen=t,this.changeSetting({sidebarIsOpen:t})},toggleHeader(t){t=t??!this.showHeader,this.showHeader=t,this.changeSetting({showHeader:t})},changeSetting(t){const e=W.getItem("setting")||{};Object.assign(e,t),W.setItem("setting",e)}}}),Ye={class:"main-view"},Ge=D({name:"MainView",__name:"MainView",setup(t){const e=$e(),c=z(()=>e.allAliveRoute.map(h=>{var _;return(_=h.meta)==null?void 0:_.componentName})),l=T(null),u=ne();return ye(()=>u,(h,_)=>{var p;l.value&&((p=h.meta)!=null&&p.scrollTop)&&l.value.setScrollTop(0)},{deep:!0}),(h,_)=>{const p=w("el-backtop"),m=w("el-scrollbar"),S=w("router-view");return n(),d("div",Ye,[o(S,null,{default:s(({Component:f,route:x})=>{var L;return[o(m,{ref_key:"mainViewScrollBarRef",ref:l,"view-class":(L=x.meta)!=null&&L.fixedPage?"fixed-page":""},{default:s(()=>[o(p,{target:".main-view .el-scrollbar__wrap","visibility-height":50}),(n(),k(Me,{include:c.value},[(n(),k(Le(f),{key:x.fullPath,class:"main-content"}))],1032,["include"]))]),_:2},1032,["view-class"])]}),_:1})])}}});const Je=R(Ge,[["__scopeId","data-v-4c006845"]]),Ue={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Xe=i("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),Ze=i("path",{fill:"currentColor",d:"m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1),Qe=[Xe,Ze];function et(t,e){return n(),d("svg",Ue,Qe)}const tt={name:"ep-back",render:et},ot={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},nt=i("path",{fill:"currentColor",d:"M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1),st=[nt];function at(t,e){return n(),d("svg",ot,st)}const lt={name:"ep-check",render:at};function xe(){const{locale:t,t:e}=Be(),c=ue();function l(){c.setLocale("zh-CN"),t.value="zh-CN"}function u(){c.setLocale("en"),t.value="en"}return{t:e,locale:t,translateZh:l,translateEn:u}}function pe(){const t=Q(),e=z(()=>!t.getSidebarIsOpen);function c(){t.toggleSideBar()}return{isCollapse:e,toggleSideBar:c}}const ct=D({name:"OpenBtn",__name:"OpenBtn",props:{collapse:{type:Boolean}},emits:["toggleClick"],setup(t,{emit:e}){const c=t,l=()=>{e("toggleClick")};return(u,h)=>{const _=de,p=w("el-tooltip");return n(),d("div",{class:Y(["open-btn-box",u.collapse?"open-btn-collapse":""])},[o(p,{placement:"right",effect:"dark",content:c.collapse?"点击展开":"点击折叠"},{default:s(()=>[o(_,{icon:c.collapse?"ep:expand":"ep:fold",class:"collapse-icon",onClick:l},null,8,["icon"])]),_:1},8,["content"])],2)}}});const Ce=R(ct,[["__scopeId","data-v-00676efc"]]),it={class:"header-breadcrumb"},rt=["onClick"],_t={key:1,class:"no-redirect"},ut=D({name:"Breadcrumb",__name:"Breadcrumb",setup(t){const e=be(),c=z(()=>{var u,h;return(h=(u=e.currentRoute.value)==null?void 0:u.meta)==null?void 0:h.parentRoute}),l=u=>{if(u.redirect){e.push(u.redirect);return}e.push(u.path)};return(u,h)=>{const _=w("el-breadcrumb-item"),p=w("el-breadcrumb");return n(),d("div",it,[o(p,{separator:"/"},{default:s(()=>[(n(!0),d(j,null,E(c.value,(m,S)=>(n(),k(_,{key:m.path},{default:s(()=>[S!=c.value.length-1?(n(),d("span",{key:0,onClick:f=>l(m),class:"can-redirect"},v(u.$t(m.title)),9,rt)):(n(),d("span",_t,v(u.$t(m.title)),1))]),_:2},1024))),128))]),_:1})])}}});const dt=R(ut,[["__scopeId","data-v-89f96e1c"]]),pt={class:"screen-full-box"},ht=D({name:"ScreenFull",__name:"ScreenFull",setup(t){const{isFullscreen:e,toggle:c}=He();return(l,u)=>{const h=ae;return n(),d("div",pt,[o(h,{title:a(e)?l.$t("buttons.exitFullScreen"):l.$t("buttons.fullScreen"),icon:a(e)?"icon-quxiaoquanping":"icon-quanping",onClick:a(c)},null,8,["title","icon","onClick"])])}}});const gt=R(ht,[["__scopeId","data-v-5585de6d"]]),mt={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ft=i("path",{fill:"currentColor",d:"M418.496 871.04L152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224c44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216a573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296c-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944c-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792l22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656l45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248l-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656l-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"},null,-1),vt=[ft];function wt(t,e){return n(),d("svg",mt,vt)}const yt={name:"ep-soccer",render:wt},bt={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},kt=i("path",{fill:"currentColor",d:"M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"},null,-1),$t=i("path",{fill:"currentColor",d:"m220.8 256l-71.232 80l71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496l-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"},null,-1),St=[kt,$t];function xt(t,e){return n(),d("svg",bt,St)}const Ct={name:"ep-guide",render:xt},Tt={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},It=i("path",{fill:"currentColor",d:"M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"},null,-1),Lt=[It];function Mt(t,e){return n(),d("svg",Tt,Lt)}const Bt={name:"ep-brush-filled",render:Mt},Ht=()=>se.$get("https://qifu-api.baidubce.com/ip/local/geo/v1/district",null,{requestOutside:!0}),zt=t=>se.$get("https://api.seniverse.com/v3/weather/now.json",t,{requestOutside:!0}),Ot=t=>se.$get("https://api.seniverse.com/v3/weather/daily.json",t,{requestOutside:!0}),Dt=t=>se.$get("https://api.seniverse.com/v3/life/suggestion.json",t,{requestOutside:!0}),ie=new Map([["白天晴","Day Sunny"],["夜晚晴","Night Sunny"],["多云","Cloudy"],["白天晴间多云","Day Partly Cloudy"],["夜晚晴间多云","Night Partly Cloudy"],["白天大部多云","Day Partly Cloudy"],["夜晚大部多云","Night Partly Cloudy"],["阴","Overcast"],["阵雨","Shower"],["雷阵雨","Thundershower"],["雷阵雨伴有冰雹","Thundershower with Hail"],["小雨","Light Rain"],["中雨","Moderate Rain"],["大雨","Heavy Rain"],["暴雨","Storm"],["大暴雨","Heavy Storm"],["特大暴雨","Heavy Storm"],["冻雨","Ice Rain"],["雨夹雪","Sleet"],["阵雪","Snow Flurry"],["小雪","Light Snow"],["中雪","Moderate Snow"],["大雪","Heavy Snow"],["暴雪","Snowstorm"],["浮尘","Dust"],["扬沙","Dust"],["沙尘暴","Duststorm"],["强沙尘暴","Duststorm"],["雾","Foggy"],["霾","Haze"],["风","Windy"],["大风","Windy"],["飓风","Hurricane"],["热带风暴","Hurricane"],["龙卷风","Tornado"],["冷","Cold"],["热","Day Sunny"]]),re={ac:{name:"空调",icon:"icon-kongtiao",长时间开启:1,部分时间开启:3,较少开启:3,开启制暖空调:1},air_pollution:{name:"空气污染",icon:"icon-kongqijiance",优:1,良:3,中:3,较差:3,很差:1},airing:{name:"晾晒",icon:"icon-liangyifu",极适宜:1,适宜:1,基本适宜:3,较适宜:3,不太适宜:3,不适宜:3,不宜:2},allergy:{name:"过敏",icon:"icon-pifuguomin",极不易发:1,不易发:3,较易发:3,易发:3,极易发:1},beer:{name:"啤酒",icon:"icon-pijiu",不适宜:2,较不适宜:3,较适宜:3,适宜:1},boating:{name:"划船",icon:"icon-huachuan",适宜:1,较适宜:3,不适宜:2},car_washing:{name:"洗车",icon:"icon-xiche",适宜:1,较适宜:3,较不宜:3,不宜:2},comfort:{name:"舒适度",icon:"icon-baobaoshufu",舒适:1,较舒适:1,较不舒适:3,不舒适:3,很不舒适:2,极不舒适:2,非常不舒适:2},dressing:{name:"穿衣",icon:"icon-shangyi",穿衣:1,炎热:1,热:1,舒适:1,较舒适:1,较冷:1,冷:1,寒冷:1},fishing:{name:"钓鱼",icon:"icon-yu",适宜:1,较适宜:3,不宜:2},flu:{name:"感冒",icon:"icon-ganmao",少发:3,较易发:2,易发:1,极易发:1},kiteflying:{name:"放风筝",icon:"icon-fengzheng",适宜:1,较适宜:3,不宜:2},makeup:{name:"化妆",icon:"icon-huazhuangpin",保湿:1,保湿防晒:1,滋润保湿:1,防晒:1,去油:1,去油防晒:1,防脱水:1,防脱水防晒:1},morning_sport:{name:"晨练",icon:"icon-paobu",适宜:1,较适宜:1,较不宜:3,不宜:3},road_condition:{name:"路况",icon:"icon-shishilukuang",干燥:1,潮湿:1,湿滑:1,积雪:1,积冰:1},shopping:{name:"购物",icon:"icon-a-gouwugouwudai",适宜:1,较适宜:3,较不宜:3,不适宜:2},sport:{name:"运动",icon:"icon-yumaoqiu",适宜:1,较适宜:2,较不宜:2},sunscreen:{name:"防晒",icon:"icon-fangshai",弱:3,较弱:3,中等:2,强:1,极强:1},traffic:{name:"交通",icon:"icon-qiche",良好:1,较好:1,一般:2,较差:1,很差:1,暂无:3},umbrella:{name:"雨伞",icon:"icon-yusan",不带伞:1,带伞:1,暂无:3},uv:{name:"紫外线",icon:"icon-ziwaixianruo",最弱:3,弱:3,中等:2,强:1,很强:1}},Rt=["dressing","makeup","sport","traffic","airing","umbrella","shopping","kiteflying","fishing","car_washing","boating","beer","ac","allergy","comfort","flu","morning_sport","road_condition","uv","sunscreen","air_pollution"],Pt=t=>{const e=[[null,null],[null,null]];let c=0,l=0,u=1,h=0;for(;c<2;){for(const _ of Rt){if(c>1)break;const p=t[_];!p||!p.brief||re[_][p.brief]===u&&(e[c][l]={id:h++,name:re[_].name,icon:re[_].icon,brief:p.brief,details:p.details},++l>1&&(l=0,c++))}u++}return e},Vt={key:0,class:"simple-weather"},At={key:0,class:"weather-loading"},Nt={class:"now-weather"},Wt=["src"],Ft={class:"now-temperature"},qt={style:{"margin-left":"10px"}},jt={class:"weather-title"},Et={class:"title-left"},Kt=["src"],Yt={class:"today"},Gt={class:"today-day"},Jt={class:"today-en"},Ut={class:"weather-title"},Xt={class:"title-left"},Zt={class:"weather-content-days"},Qt=["src"],eo={class:"weather-title"},to={class:"title-left"},oo={class:"weather-content-life"},no={class:"weather-life-item"},so={class:"life-message"},ao={class:"brief"},lo={class:"details"},co=D({name:"SimpleWeather",__name:"SimpleWeather",setup(t){const e="/wy-vue3-vite-basic",c={key:"SqOhhSmsbAOffhH0B",location:W.getItem("location"),language:"zh-Hans"},l=T(!1),u=T(!1),h=T(!1),_=U(),p=T(""),m=T(""),S=T("");let f=!1;const x=T([]);let L=[];const G=T([]),H=T(),F=()=>{zt(c).then(C=>{p.value=C.results[0].location.name,m.value=C.results[0].now.temperature+"°C";let b=C.results[0].now.text;if(b==="晴"||b==="晴间多云"||b==="大部多云"){const r=te().hour();r>=6&&r<18?b="白天"+b:b="夜晚"+b}S.value=b,l.value=!1})},J=()=>{if(f)return;u.value=!0,h.value=!0;const C=[Ot({...c,start:0,days:3}),Dt({...c,days:3})];Promise.all(C).then(b=>{const r=b[0].results[0].daily;r.forEach(g=>{g.date=te(g.date).format("DD/MM/YYYY")}),x.value=r,u.value=!1,L=b[1].results[0].suggestion,G.value=Pt(L[0]),f=!0,h.value=!1})};function U(){const C=te().date(),b=te().day();return{day:C,en:["Sun","Mon","Tues","Wed","Thur","Fri","Sat"][b]}}const q=()=>{f=!1,H.value&&a(H).hide(),l.value=!0,Ht().then(C=>{const b=C.data.lat+":"+C.data.lng;W.setItem("location",b),c.location=b,F()})};return ze(()=>{c.location?(l.value=!0,F()):q()}),(C,b)=>{const r=ae,g=Bt,P=w("el-button"),y=w("el-col"),M=w("el-row"),A=Ct,ee=w("el-skeleton"),le=yt,ce=w("el-popover");return a(m)?(n(),d("div",Vt,[a(l)?(n(),d("div",At,[o(r,{icon:"icon-loading",svg:"",class:"loading-rotate"}),$(" 获取天气中 ")])):(n(),k(ce,{key:1,ref_key:"weatherPopoverRef",ref:H,placement:"bottom",trigger:"click","popper-class":"weather-popover",width:"400",onShow:J},{reference:s(()=>[i("div",Nt,[a(S)?(n(),d("img",{key:0,src:a(e)+"/weather/"+a(ie).get(a(S))+".png",class:"now-weather-png"},null,8,Wt)):I("",!0),i("span",Ft,[i("span",null,v(a(m)),1),i("span",qt,v(a(S)),1)])])]),default:s(()=>[i("div",jt,[i("div",Et,[o(g,{class:"weather-title-icon"}),$(" 实时天气 ")]),o(P,{class:"weather-title-right-btn",onClick:q},{default:s(()=>[$("更新")]),_:1})]),o(M,{class:"weather-content-now"},{default:s(()=>[o(y,{span:6},{default:s(()=>[a(S)?(n(),d("img",{key:0,src:a(e)+"/weather/"+a(ie).get(a(S))+".png",style:{width:"60px"}},null,8,Kt)):I("",!0)]),_:1}),o(y,{span:8},{default:s(()=>[i("div",Yt,[i("span",Gt,v(a(_).day),1),i("span",Jt,v(a(_).en),1)])]),_:1}),o(y,{span:10},{default:s(()=>[o(M,{justify:"center"},{default:s(()=>[o(y,{span:6},{default:s(()=>[$(" 城市: ")]),_:1}),o(y,{span:6},{default:s(()=>[$(v(a(p)),1)]),_:1})]),_:1}),o(M,{justify:"center"},{default:s(()=>[o(y,{span:6},{default:s(()=>[$(" 天气: ")]),_:1}),o(y,{span:6},{default:s(()=>[$(v(a(S)),1)]),_:1})]),_:1}),o(M,{justify:"center"},{default:s(()=>[o(y,{span:6},{default:s(()=>[$(" 温度: ")]),_:1}),o(y,{span:6},{default:s(()=>[$(v(a(m)),1)]),_:1})]),_:1})]),_:1})]),_:1}),i("div",Ut,[i("div",Xt,[o(A,{class:"weather-title-icon"}),$(" 逐日预报 ")])]),i("div",Zt,[o(ee,{rows:2,loading:a(u),throttle:500,style:{height:"120px"}},{default:s(()=>[(n(!0),d(j,null,E(a(x),V=>(n(),k(M,{key:V.date,class:"day-weather"},{default:s(()=>[o(y,{span:4},{default:s(()=>[i("img",{src:a(e)+"/weather/"+a(ie).get(V.text_day)+".png",class:"day-weather-png"},null,8,Qt)]),_:2},1024),o(y,{span:8},{default:s(()=>[i("span",null,v(V.date),1)]),_:2},1024),o(y,{span:8},{default:s(()=>[i("span",null,v(V.low)+"°C ~ "+v(V.high)+"°C",1)]),_:2},1024),o(y,{span:4},{default:s(()=>[i("span",null,v(V.text_day),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["loading"])]),i("div",eo,[i("div",to,[o(le,{class:"weather-title-icon"}),$(" 生活指数 ")])]),i("div",oo,[o(ee,{rows:2,loading:a(u),throttle:500,style:{height:"120px"}},{default:s(()=>[(n(!0),d(j,null,E(a(G),(V,B)=>(n(),k(M,{class:"life-row",gutter:10,key:B},{default:s(()=>[(n(!0),d(j,null,E(V,O=>(n(),k(y,{span:12,key:O.id},{default:s(()=>[i("div",no,[o(r,{icon:O.icon,svg:"",style:{width:"35px",height:"35px"}},null,8,["icon"]),i("div",so,[i("div",ao,v(O.name)+"："+v(O.brief),1),i("div",lo,v(O.details),1)])])]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["loading"])])]),_:1},512))])):I("",!0)}}});const io=R(co,[["__scopeId","data-v-4a6b5558"]]),ro={class:"navbar"},_o={class:"vertical-header-right"},uo={class:"user-box"},po=["src"],ho={key:1},go=D({name:"Navbar",__name:"Navbar",setup(t){const{logout:e}=Se(),{showScreenFull:c,showDarkToogle:l,openBtnPosition:u}=Q(),h=z(()=>{var H;return(H=ue().signUser)==null?void 0:H.userName}),_=z(()=>h.value?{marginRight:"10px"}:""),p=z(()=>(H,F)=>({background:H===F?je().themeColor.mainColor:"",color:H===F?"#fff":"#000"})),{locale:m,translateZh:S,translateEn:f}=xe(),{isCollapse:x,toggleSideBar:L}=pe(),G={display:"inline-flex",float:"left",width:"auto",height:"50px","align-items":"center"};return(H,F)=>{const J=ae,U=lt,q=w("el-dropdown-item"),C=w("el-dropdown-menu"),b=w("el-dropdown"),r=Ke,g=tt;return n(),d("div",ro,[a(u)==="top"?(n(),k(Ce,{key:0,collapse:a(x),onToggleClick:a(L),style:G},null,8,["collapse","onToggleClick"])):I("",!0),o(dt),i("div",_o,[o(io),a(c)?(n(),k(gt,{key:0})):I("",!0),o(b,{trigger:"click",class:"toogle-locale"},{dropdown:s(()=>[o(C,{class:"translate"},{default:s(()=>[o(q,{style:Z(p.value(a(m),"zh-CN")),class:"transition-dropdown-item",onClick:a(S)},{default:s(()=>[$(" 简体中文 "),oe(o(U,{style:{"margin-left":"10px"}},null,512),[[_e,a(m)==="zh-CN"]])]),_:1},8,["style","onClick"]),o(q,{style:Z(p.value(a(m),"en")),class:"transition-dropdown-item",onClick:a(f)},{default:s(()=>[$(" English "),oe(o(U,{style:{"margin-left":"10px"}},null,512),[[_e,a(m)==="en"]])]),_:1},8,["style","onClick"])]),_:1})]),default:s(()=>[i("span",null,[a(m)==="en"?(n(),k(J,{key:0,icon:"icon-zhongyingwenqiehuan-yingwen",class:"toogle-locale-icon"})):I("",!0),a(m)==="zh-CN"?(n(),k(J,{key:1,icon:"icon-zhongyingwenqiehuan-zhongwen",class:"toogle-locale-icon"})):I("",!0)])]),_:1}),a(l)?(n(),k(r,{key:1})):I("",!0),o(b,{trigger:"click"},{dropdown:s(()=>[o(C,{class:"logout"},{default:s(()=>[o(q,{onClick:a(e)},{default:s(()=>[o(g,{style:{"margin-right":"5px"}}),$(" "+v(H.$t("buttons.loginOut")),1)]),_:1},8,["onClick"])]),_:1})]),default:s(()=>[i("span",uo,[a(me)?(n(),d("img",{key:0,src:a(me),style:Z(_.value)},null,12,po)):I("",!0),h.value?(n(),d("p",ho,v(h.value),1)):I("",!0)])]),_:1})])])}}});const mo=R(go,[["__scopeId","data-v-0302ac8d"]]),fo=D({name:"WyTooltip",inheritAttrs:!1,__name:"index",props:{text:{default:""},multipleJudgments:{type:Boolean,default:!1}},setup(t){const e=t,c=T(null),l=T(!0),u=T(!1);function h(){u.value&&!e.multipleJudgments||De(()=>{const _=c.value;(_==null?void 0:_.scrollWidth)>(_==null?void 0:_.clientWidth)?l.value=!1:l.value=!0,u.value=!0})}return(_,p)=>{const m=w("el-tooltip");return n(),k(m,{placement:"top",offset:-10,disabled:l.value},{content:s(()=>[ge(_.$slots,"content",{},()=>[$(v(e.text),1)],!0)]),default:s(()=>[i("span",Oe({ref_key:"textRef",ref:c,onMouseover:h,class:"tool-tip-text"},_.$attrs),[ge(_.$slots,"default",{},()=>[$(v(e.text),1)],!0)],16)]),_:3},8,["disabled"])}}});const Te=R(fo,[["__scopeId","data-v-616a1eb1"]]),vo=D({name:"Logo",__name:"Logo",props:{collapse:Boolean},setup(t){const e=t,c=z(()=>Q().title),l={"margin-left":"10px",color:"#fff","font-weight":600,"font-size":"20px",flex:1};return(u,h)=>{const _=ae,p=w("router-link"),m=Te;return n(),d("div",{class:Y(["sidebar-logo-box",{collapse:e.collapse}])},[e.collapse?(n(),k(p,{key:0,title:a(c),class:"sidebar-logo-link",to:"/"},{default:s(()=>[o(_,{icon:"icon-food-cookie",svg:"",style:{width:"35px",height:"35px"}})]),_:1},8,["title"])):(n(),k(p,{key:1,title:a(c),class:"sidebar-logo-link",to:"/"},{default:s(()=>[o(_,{icon:"icon-food-cookie",svg:"",style:{width:"35px",height:"35px"}}),o(m,{text:a(c),style:l,multipleJudgments:""},null,8,["text"])]),_:1},8,["title"]))],2)}}});const wo=R(vo,[["__scopeId","data-v-f84ef7c2"]]),yo={key:0,class:"sub-menu-icon"},bo={class:"menu-text-box"},ko={key:0,class:"sub-menu-icon"},$o=D({name:"SideBarItem",__name:"SideBarItem",props:{item:{type:Object}},setup(t){const e=t,c=z(()=>{const l={display:"flex",alignItems:"center"};return e.item.parentName&&(l["font-size"]="12px"),l});return(l,u)=>{const h=de,_=Te,p=w("el-menu-item"),m=w("side-bar-item",!0),S=w("el-sub-menu");return!e.item.children||e.item.children.length==0?(n(),k(p,{key:0,index:e.item.path,style:Z(c.value)},{title:s(()=>[i("div",bo,[o(_,null,{content:s(()=>[$(v(l.$t(e.item.meta.title)),1)]),default:s(()=>[$(" "+v(l.$t(e.item.meta.title)),1)]),_:1})])]),default:s(()=>{var f,x;return[(f=e.item.meta)!=null&&f.icon?(n(),d("div",yo,[o(h,{icon:(x=e.item.meta)==null?void 0:x.icon},null,8,["icon"])])):I("",!0)]}),_:1},8,["index","style"])):(n(),k(S,{key:1,index:e.item.path,"popper-class":"side-bar-popper"},{title:s(()=>{var f,x;return[(f=e.item.meta)!=null&&f.icon?(n(),d("div",ko,[o(h,{icon:(x=e.item.meta)==null?void 0:x.icon},null,8,["icon"])])):I("",!0),o(_,null,{content:s(()=>[$(v(l.$t(e.item.meta.title)),1)]),default:s(()=>[$(" "+v(l.$t(e.item.meta.title)),1)]),_:1})]}),default:s(()=>[(n(!0),d(j,null,E(e.item.children,f=>(n(),k(m,{key:f.path,item:f},null,8,["item"]))),128))]),_:1},8,["index"]))}}});const So=R($o,[["__scopeId","data-v-941671b1"]]),xo={class:"side-bar"},Co={class:"side-bar-top"},To={class:"side-bar-middle"},Io={key:0,class:"side-bar-bottom"},Lo=D({name:"SideBar",__name:"SideBar",setup(t){const e=ne(),{openBtnPosition:c}=Q(),{isCollapse:l,toggleSideBar:u}=pe(),h=_=>{};return(_,p)=>{const m=w("el-menu"),S=w("el-scrollbar");return n(),d("div",xo,[i("div",Co,[o(wo,{collapse:a(l)},null,8,["collapse"])]),i("div",To,[o(S,null,{default:s(()=>[o(m,{router:"","unique-opened":"",mode:"vertical",class:"outer-most",collapse:a(l),"default-active":a(e).path,"collapse-transition":!1,onSelect:p[0]||(p[0]=f=>h(f))},{default:s(()=>[(n(!0),d(j,null,E(a(Ee),f=>(n(),k(So,{key:f.path,item:f},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),a(c)==="bottom"?(n(),d("div",Io,[o(Ce,{collapse:a(l),onToggleClick:a(u)},null,8,["collapse","onToggleClick"])])):I("",!0)])}}});const Mo=R(Lo,[["__scopeId","data-v-8455ef67"]]),Bo={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ho=i("path",{fill:"currentColor",d:"M384 192v640l384-320.064z"},null,-1),zo=[Ho];function Oo(t,e){return n(),d("svg",Bo,zo)}const Do={name:"ep-caret-right",render:Oo},Ro={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Po=i("path",{fill:"currentColor",d:"M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),Vo=[Po];function Ao(t,e){return n(),d("svg",Ro,Vo)}const No={name:"ep-close",render:Ao},Wo={class:"icon-svg",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Fo=i("path",{fill:"currentColor",d:"M672 192L288 511.936L672 832z"},null,-1),qo=[Fo];function jo(t,e){return n(),d("svg",Wo,qo)}const Eo={name:"ep-caret-left",render:jo},Ko=t=>(Ae("data-v-96c8a2a5"),t=t(),Ne(),t),Yo={class:"header-tag-main"},Go={class:"tag-box-left"},Jo={class:"tag-box",ref:"tag-box"},Uo=["onMouseenter","onMouseleave"],Xo={class:"tag-item-box"},Zo=Ko(()=>i("div",{class:"tag-process"},null,-1)),Qo={class:"tag-box-right"},en=D({name:"Tag",__name:"Tag",setup(t){const e=$e(),c=z(()=>[{path:"/home",name:"HomePage",meta:{icon:"home-filled",title:K("menus.homePage"),notCloseTag:!0}},...e.routeHistroy.filter(r=>r.path!=="/home")]),l=ne(),u=be(),h=z(()=>l.fullPath),_=function(r){e.removeRouteHistory(r),h.value==r&&u.push(c.value[c.value.length-1].path)},p=Ve(),m=function(r){const g=p.refs["tag-item"+r][0];g&&!fe(g,"tag-active")&&(ve(g,"tag-move-in"),we(g,"tag-move-out"))},S=function(r){const g=p.refs["tag-item"+r][0];g&&!fe(g,"tag-active")&&(ve(g,"tag-move-out"),we(g,"tag-move-in"))},f=T(0),x=function(r){const g=p.refs["tag-box"],P=p.refs.tags.$el,y=g.offsetWidth,M=P.offsetWidth;if(!(y>M+16&&(r<0||f.value>=0)))if(r>0){const A=Math.abs(f.value);f.value+=A>r?r:A}else{const A=y-f.value-M-16;f.value+=A>r?A:r}},L=ke([{id:"refresh",icon:"ep:refresh",name:K("buttons.refresh"),show:!0},{id:"closeCurrentTag",icon:"ep:close",name:K("buttons.closeCurrentTag"),show:!0},{id:"closeLeftTag",icon:"fa:arrow-circle-o-left",name:K("buttons.closeLeftTag"),show:!0},{id:"closeRightTag",icon:"fa:arrow-circle-o-right",name:K("buttons.closeRightTag"),show:!0},{id:"closeOtherTag",icon:"fa:exclamation-triangle",name:K("buttons.closeOtherTag"),show:!0},{id:"closeAllTag",icon:"ep:warning-filled",name:K("buttons.closeAllTag"),show:!0}]),G=z(()=>L.filter(r=>r.show)),H=function(r,g,P){if(P){p.refs["tag-dropdown"].forEach(M=>{M.id!==r&&M.handleClose()});const y=c.value.length;L[1].show=g!==0,L[2].show=!(g===0||g===1),L[3].show=g!==y-1,L[4].show=!(y<3),L[5].show=!(y<3)}},F=function(r,g){new Map([["refresh",J],["closeCurrentTag",_],["closeLeftTag",U],["closeRightTag",q],["closeOtherTag",C],["closeAllTag",b]]).get(r)(g)};function J(r){const{fullPath:g,query:P}=a(l);e.clearKeepAliveCache(r),u.replace({path:"/redirect"+g,query:P})}function U(r){e.removeRouteHistoryLeft(r)}function q(r){e.removeRouteHistoryRight(r)}function C(r){e.removeRouteHistoryOther(r)}function b(){e.removeRouteHistoryAll()}return(r,g)=>{const P=Eo,y=w("router-link"),M=de,A=w("el-dropdown-item"),ee=w("el-dropdown-menu"),le=w("el-dropdown"),ce=No,V=Do;return n(),d("div",Yo,[i("div",Go,[o(P,{class:"left-btn-icon",onClick:g[0]||(g[0]=B=>x(100))})]),i("div",Jo,[o(Re,{name:"tags",class:"tags",tag:"div",ref:"tags",style:Z({transform:`translateX(${f.value}px)`})},{default:s(()=>[(n(!0),d(j,null,E(c.value,(B,O)=>{var he;return n(),d("div",{class:Y(["tag-item",{"can-close-tag":!((he=B.meta)!=null&&he.notCloseTag),"tag-active":B.path===h.value}]),key:B.path,ref_for:!0,ref:"tag-item"+O,onMouseenter:N=>m(O),onMouseleave:N=>S(O)},[i("div",Xo,[(n(),k(le,{ref_for:!0,ref:"tag-dropdown",trigger:"contextmenu",placement:"bottom-start",id:B.path,key:"tag-dropdown-"+B.path,onVisibleChange:N=>H(B.path,O,N)},{dropdown:s(()=>[o(ee,null,{default:s(()=>[(n(!0),d(j,null,E(G.value,N=>(n(),k(A,{key:N.id,onClick:cn=>F(N.id,B.path)},{default:s(()=>[o(M,{icon:N.icon,class:"dropdown-item-icon"},null,8,["icon"]),i("span",null,v(r.$t(N.name)),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),default:s(()=>[o(y,{to:B.path,class:Y(["tag-name",{"first-tag":O==0}])},{default:s(()=>[$(v(r.$t(B.meta.title)),1)]),_:2},1032,["to","class"])]),_:2},1032,["id","onVisibleChange"])),O!=0?(n(),k(ce,{key:0,class:"close-btn",onClick:Pe(N=>_(B.path),["stop"])},null,8,["onClick"])):I("",!0),Zo])],42,Uo)}),128))]),_:1},8,["style"])],512),i("div",Qo,[o(V,{class:"right-btn-icon",onClick:g[1]||(g[1]=B=>x(-100))})])])}}});const tn=R(en,[["__scopeId","data-v-96c8a2a5"]]);function on(){const t=ne(),{changeTitle:e}=Se(),{locale:c}=xe();e(t.meta),ye(()=>c.value,l=>{e(t.meta)})}const nn={class:"main-wrapper"},sn={class:"app-mask"},an={key:0,class:"header-wrapper"},ln=D({name:"Layout",__name:"Layout",setup(t){on();const{isCollapse:e}=pe(),c=Q(),l=ke({appMaskShow:z(()=>ue().appMaskShow),showHeader:z(()=>c.showHeader)}),u=T({});We(qe,u);function h(_){u.value=_}return(_,p)=>{const m=Fe("resize");return n(),d("div",{class:Y(["app-wrapper",a(e)?"hide-sidebar":"open-sidebar"])},[i("div",nn,[i("div",{class:Y(["left-wrapper",a(e)?"collapse-left":"open-left"])},[o(Mo)],2),i("div",{class:Y(["right-wrapper",a(e)?"open-right":"collapse-right"])},[oe(i("div",sn,null,512),[[_e,l.appMaskShow]]),l.showHeader?(n(),d("div",an,[o(mo),o(tn)])):I("",!0),oe(o(Je,null,null,512),[[m,h]])],2)])],2)}}});const mn=R(ln,[["__scopeId","data-v-81ea8e5f"]]);export{mn as default};