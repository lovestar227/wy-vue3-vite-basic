import {
  d as Be,
  f as b,
  v as O,
  x as L,
  y as oe,
  A as ke,
  B as d,
  h as n,
  w as a,
  r as y,
  o as s,
  g as w,
  K as me,
  C as o,
  D as fe,
  F as i,
  G as He,
  H as J,
  u as xe,
  I as j,
  J as E,
  L as v,
  O as ze,
  P as ee,
  Q as De,
  R as x,
  S as T,
  T as Z,
  U as te,
  V as ue,
  W as ve,
  X as Oe,
  Y as Re,
  Z as Pe,
  j as Se,
  _ as We,
  $ as Ve,
  a0 as Ae,
  a1 as Fe,
  a2 as Ne,
  a3 as qe
} from "./.pnpm-665f29a7.js";
import { m as je } from "./index-bbfdc4c8.js";
import {
  g as X,
  s as F,
  r as Ce,
  _ as R,
  a as de,
  h as ne,
  u as Te,
  m as Ee,
  $ as Y
} from "./index-ef0657e7.js";
import { t as Ye, _ as Je } from "./theme-c85abded.js";
import { _ as se } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c6b83baf.js";
import { u as ye, h as we, a as be, r as $e } from "./user-e1c9ffd8.js";
import { _ as pe } from "./WyIconify.vue_vue_type_script_setup_true_lang-08e57051.js";
const ae = Be({
    id: "setting",
    state: () => {
      var t, e, c, l, u;
      return {
        title: X().title,
        showHeader:
          ((t = F.getItem("setting")) == null ? void 0 : t.showHeader) ??
          X().showHeader,
        openBtnPosition:
          ((e = F.getItem("setting")) == null ? void 0 : e.openBtnPosition) ??
          X().openBtnPosition,
        sidebarIsOpen:
          ((c = F.getItem("setting")) == null ? void 0 : c.sidebarIsOpen) ??
          X().sidebarIsOpen,
        showScreenFull:
          ((l = F.getItem("setting")) == null ? void 0 : l.showScreenFull) ??
          X().showScreenFull,
        showDarkToogle:
          ((u = F.getItem("setting")) == null ? void 0 : u.showScreenFull) ??
          X().showDarkToogle
      };
    },
    getters: {
      getTitle(t) {
        return t.title;
      },
      getopenBtnPosition(t) {
        return t.openBtnPosition;
      },
      getShowHeader(t) {
        return t.showHeader;
      },
      getSidebarIsOpen(t) {
        return t.sidebarIsOpen;
      },
      getShowScreenFull(t) {
        return t.showScreenFull;
      },
      getShowDarkToogle(t) {
        return t.showDarkToogle;
      }
    },
    actions: {
      toggleSideBar(t) {
        (t = t ?? !this.sidebarIsOpen),
          (this.sidebarIsOpen = t),
          this.changeSetting({ sidebarIsOpen: t });
      },
      toggleHeader(t) {
        (t = t ?? !this.showHeader),
          (this.showHeader = t),
          this.changeSetting({ showHeader: t });
      },
      changeSetting(t) {
        const e = F.getItem("setting") || {};
        Object.assign(e, t), F.setItem("setting", e);
      }
    }
  }),
  Ke = { class: "main-view" },
  Ge = { key: 1, class: "fixed-page" },
  Ue = b({ name: "MainView" }),
  Xe = b({
    ...Ue,
    setup(t) {
      const e = Ce(),
        c = O(() =>
          e.allAliveRoute.map(p => {
            var _;
            return (_ = p.meta) == null ? void 0 : _.componentName;
          })
        ),
        l = L(null),
        u = oe();
      return (
        ke(
          () => u,
          (p, _) => {
            var h;
            l.value &&
              (h = p.meta) != null &&
              h.scrollTop &&
              l.value.setScrollTop(0);
          },
          { deep: !0 }
        ),
        (p, _) => {
          const h = y("el-backtop"),
            f = y("el-scrollbar"),
            S = y("router-view");
          return (
            s(),
            d("div", Ke, [
              n(S, null, {
                default: a(({ Component: m, route: C }) => {
                  var M;
                  return [
                    (M = C.meta) != null && M.fixedPage
                      ? (s(),
                        d("div", Ge, [
                          (s(),
                          w(
                            me,
                            { include: o(c) },
                            [
                              (s(),
                              w(fe(m), {
                                key: C.fullPath,
                                class: "main-content"
                              }))
                            ],
                            1032,
                            ["include"]
                          ))
                        ]))
                      : (s(),
                        w(
                          f,
                          { key: 0, ref_key: "mainViewScrollBarRef", ref: l },
                          {
                            default: a(() => [
                              n(h, {
                                target: ".main-view .el-scrollbar__wrap",
                                "visibility-height": 50
                              }),
                              (s(),
                              w(
                                me,
                                { include: o(c) },
                                [
                                  (s(),
                                  w(fe(m), {
                                    key: C.fullPath,
                                    class: "main-content"
                                  }))
                                ],
                                1032,
                                ["include"]
                              ))
                            ]),
                            _: 2
                          },
                          1536
                        ))
                  ];
                }),
                _: 1
              })
            ])
          );
        }
      );
    }
  });
const Ze = R(Xe, [["__scopeId", "data-v-0a570a8d"]]),
  Qe = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  et = i(
    "path",
    {
      fill: "currentColor",
      d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    },
    null,
    -1
  ),
  tt = i(
    "path",
    {
      fill: "currentColor",
      d: "m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    },
    null,
    -1
  ),
  ot = [et, tt];
function nt(t, e) {
  return s(), d("svg", Qe, ot);
}
const st = { name: "ep-back", render: nt },
  at = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  lt = i(
    "path",
    {
      fill: "currentColor",
      d: "M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
    },
    null,
    -1
  ),
  ct = [lt];
function it(t, e) {
  return s(), d("svg", at, ct);
}
const rt = { name: "ep-check", render: it };
function Ie() {
  const { locale: t, t: e } = He(),
    c = de();
  function l() {
    c.setLocale("zh-CN"), (t.value = "zh-CN");
  }
  function u() {
    c.setLocale("en"), (t.value = "en");
  }
  return { t: e, locale: t, translateZh: l, translateEn: u };
}
function he() {
  const t = ae(),
    e = O(() => !t.getSidebarIsOpen);
  function c() {
    t.toggleSideBar();
  }
  return { isCollapse: e, toggleSideBar: c };
}
const _t = b({ name: "OpenBtn" }),
  ut = b({
    ..._t,
    props: { collapse: { type: Boolean } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const c = t,
        l = () => {
          e("toggleClick");
        };
      return (u, p) => {
        const _ = pe,
          h = y("el-tooltip");
        return (
          s(),
          d(
            "div",
            {
              class: J(["open-btn-box", t.collapse ? "open-btn-collapse" : ""])
            },
            [
              n(
                h,
                {
                  placement: "right",
                  effect: "dark",
                  content: c.collapse ? "点击展开" : "点击折叠"
                },
                {
                  default: a(() => [
                    n(
                      _,
                      {
                        icon: c.collapse ? "ep:expand" : "ep:fold",
                        class: "collapse-icon",
                        onClick: l
                      },
                      null,
                      8,
                      ["icon"]
                    )
                  ]),
                  _: 1
                },
                8,
                ["content"]
              )
            ],
            2
          )
        );
      };
    }
  });
const Le = R(ut, [["__scopeId", "data-v-c7ff46e4"]]),
  dt = { class: "header-breadcrumb" },
  pt = ["onClick"],
  ht = { key: 1, class: "no-redirect" },
  gt = b({ name: "Breadcrumb" }),
  mt = b({
    ...gt,
    setup(t) {
      const e = xe(),
        c = O(() => {
          var u, p;
          return (p = (u = e.currentRoute.value) == null ? void 0 : u.meta) ==
            null
            ? void 0
            : p.parentRoute;
        }),
        l = u => {
          if (u.redirect) {
            e.push(u.redirect);
            return;
          }
          e.push(u.path);
        };
      return (u, p) => {
        const _ = y("el-breadcrumb-item"),
          h = y("el-breadcrumb");
        return (
          s(),
          d("div", dt, [
            n(
              h,
              { separator: "/" },
              {
                default: a(() => [
                  (s(!0),
                  d(
                    j,
                    null,
                    E(
                      o(c),
                      (f, S) => (
                        s(),
                        w(
                          _,
                          { key: f.path },
                          {
                            default: a(() => [
                              S != o(c).length - 1
                                ? (s(),
                                  d(
                                    "span",
                                    {
                                      key: 0,
                                      onClick: m => l(f),
                                      class: "can-redirect"
                                    },
                                    v(u.$t(f.title)),
                                    9,
                                    pt
                                  ))
                                : (s(), d("span", ht, v(u.$t(f.title)), 1))
                            ]),
                            _: 2
                          },
                          1024
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  });
const ft = R(mt, [["__scopeId", "data-v-ece15a80"]]),
  vt = { class: "screen-full-box" },
  yt = b({ name: "ScreenFull" }),
  wt = b({
    ...yt,
    setup(t) {
      const { isFullscreen: e, toggle: c } = ze();
      return (l, u) => {
        const p = se;
        return (
          s(),
          d("div", vt, [
            n(
              p,
              {
                title: o(e)
                  ? l.$t("buttons.exitFullScreen")
                  : l.$t("buttons.fullScreen"),
                icon: o(e) ? "icon-quxiaoquanping" : "icon-quanping",
                onClick: o(c)
              },
              null,
              8,
              ["title", "icon", "onClick"]
            )
          ])
        );
      };
    }
  });
const bt = R(wt, [["__scopeId", "data-v-e3d9bfea"]]),
  $t = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  kt = i(
    "path",
    {
      fill: "currentColor",
      d: "M418.496 871.04L152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224c44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216a573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296c-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944c-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792l22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656l45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248l-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656l-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
    },
    null,
    -1
  ),
  xt = [kt];
function St(t, e) {
  return s(), d("svg", $t, xt);
}
const Ct = { name: "ep-soccer", render: St },
  Tt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  It = i(
    "path",
    {
      fill: "currentColor",
      d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
    },
    null,
    -1
  ),
  Lt = i(
    "path",
    {
      fill: "currentColor",
      d: "m220.8 256l-71.232 80l71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496l-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
    },
    null,
    -1
  ),
  Mt = [It, Lt];
function Bt(t, e) {
  return s(), d("svg", Tt, Mt);
}
const Ht = { name: "ep-guide", render: Bt },
  zt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Dt = i(
    "path",
    {
      fill: "currentColor",
      d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
    },
    null,
    -1
  ),
  Ot = [Dt];
function Rt(t, e) {
  return s(), d("svg", zt, Ot);
}
const Pt = { name: "ep-brush-filled", render: Rt },
  Wt = () =>
    ne.$get("https://qifu-api.baidubce.com/ip/local/geo/v1/district", null, {
      requestOutside: !0
    }),
  Vt = t =>
    ne.$get("https://api.seniverse.com/v3/weather/now.json", t, {
      requestOutside: !0
    }),
  At = t =>
    ne.$get("https://api.seniverse.com/v3/weather/daily.json", t, {
      requestOutside: !0
    }),
  Ft = t =>
    ne.$get("https://api.seniverse.com/v3/life/suggestion.json", t, {
      requestOutside: !0
    }),
  ie = new Map([
    ["白天晴", "Day Sunny"],
    ["夜晚晴", "Night Sunny"],
    ["多云", "Cloudy"],
    ["白天晴间多云", "Day Partly Cloudy"],
    ["夜晚晴间多云", "Night Partly Cloudy"],
    ["白天大部多云", "Day Partly Cloudy"],
    ["夜晚大部多云", "Night Partly Cloudy"],
    ["阴", "Overcast"],
    ["阵雨", "Shower"],
    ["雷阵雨", "Thundershower"],
    ["雷阵雨伴有冰雹", "Thundershower with Hail"],
    ["小雨", "Light Rain"],
    ["中雨", "Moderate Rain"],
    ["大雨", "Heavy Rain"],
    ["暴雨", "Storm"],
    ["大暴雨", "Heavy Storm"],
    ["特大暴雨", "Heavy Storm"],
    ["冻雨", "Ice Rain"],
    ["雨夹雪", "Sleet"],
    ["阵雪", "Snow Flurry"],
    ["小雪", "Light Snow"],
    ["中雪", "Moderate Snow"],
    ["大雪", "Heavy Snow"],
    ["暴雪", "Snowstorm"],
    ["浮尘", "Dust"],
    ["扬沙", "Dust"],
    ["沙尘暴", "Duststorm"],
    ["强沙尘暴", "Duststorm"],
    ["雾", "Foggy"],
    ["霾", "Haze"],
    ["风", "Windy"],
    ["大风", "Windy"],
    ["飓风", "Hurricane"],
    ["热带风暴", "Hurricane"],
    ["龙卷风", "Tornado"],
    ["冷", "Cold"],
    ["热", "Day Sunny"]
  ]),
  re = {
    ac: {
      name: "空调",
      icon: "icon-kongtiao",
      长时间开启: 1,
      部分时间开启: 3,
      较少开启: 3,
      开启制暖空调: 1
    },
    air_pollution: {
      name: "空气污染",
      icon: "icon-kongqijiance",
      优: 1,
      良: 3,
      中: 3,
      较差: 3,
      很差: 1
    },
    airing: {
      name: "晾晒",
      icon: "icon-liangyifu",
      极适宜: 1,
      适宜: 1,
      基本适宜: 3,
      较适宜: 3,
      不太适宜: 3,
      不适宜: 3,
      不宜: 2
    },
    allergy: {
      name: "过敏",
      icon: "icon-pifuguomin",
      极不易发: 1,
      不易发: 3,
      较易发: 3,
      易发: 3,
      极易发: 1
    },
    beer: {
      name: "啤酒",
      icon: "icon-pijiu",
      不适宜: 2,
      较不适宜: 3,
      较适宜: 3,
      适宜: 1
    },
    boating: {
      name: "划船",
      icon: "icon-huachuan",
      适宜: 1,
      较适宜: 3,
      不适宜: 2
    },
    car_washing: {
      name: "洗车",
      icon: "icon-xiche",
      适宜: 1,
      较适宜: 3,
      较不宜: 3,
      不宜: 2
    },
    comfort: {
      name: "舒适度",
      icon: "icon-baobaoshufu",
      舒适: 1,
      较舒适: 1,
      较不舒适: 3,
      不舒适: 3,
      很不舒适: 2,
      极不舒适: 2,
      非常不舒适: 2
    },
    dressing: {
      name: "穿衣",
      icon: "icon-shangyi",
      穿衣: 1,
      炎热: 1,
      热: 1,
      舒适: 1,
      较舒适: 1,
      较冷: 1,
      冷: 1,
      寒冷: 1
    },
    fishing: { name: "钓鱼", icon: "icon-yu", 适宜: 1, 较适宜: 3, 不宜: 2 },
    flu: {
      name: "感冒",
      icon: "icon-ganmao",
      少发: 3,
      较易发: 2,
      易发: 1,
      极易发: 1
    },
    kiteflying: {
      name: "放风筝",
      icon: "icon-fengzheng",
      适宜: 1,
      较适宜: 3,
      不宜: 2
    },
    makeup: {
      name: "化妆",
      icon: "icon-huazhuangpin",
      保湿: 1,
      保湿防晒: 1,
      滋润保湿: 1,
      防晒: 1,
      去油: 1,
      去油防晒: 1,
      防脱水: 1,
      防脱水防晒: 1
    },
    morning_sport: {
      name: "晨练",
      icon: "icon-paobu",
      适宜: 1,
      较适宜: 1,
      较不宜: 3,
      不宜: 3
    },
    road_condition: {
      name: "路况",
      icon: "icon-shishilukuang",
      干燥: 1,
      潮湿: 1,
      湿滑: 1,
      积雪: 1,
      积冰: 1
    },
    shopping: {
      name: "购物",
      icon: "icon-a-gouwugouwudai",
      适宜: 1,
      较适宜: 3,
      较不宜: 3,
      不适宜: 2
    },
    sport: {
      name: "运动",
      icon: "icon-yumaoqiu",
      适宜: 1,
      较适宜: 2,
      较不宜: 2
    },
    sunscreen: {
      name: "防晒",
      icon: "icon-fangshai",
      弱: 3,
      较弱: 3,
      中等: 2,
      强: 1,
      极强: 1
    },
    traffic: {
      name: "交通",
      icon: "icon-qiche",
      良好: 1,
      较好: 1,
      一般: 2,
      较差: 1,
      很差: 1,
      暂无: 3
    },
    umbrella: { name: "雨伞", icon: "icon-yusan", 不带伞: 1, 带伞: 1, 暂无: 3 },
    uv: {
      name: "紫外线",
      icon: "icon-ziwaixianruo",
      最弱: 3,
      弱: 3,
      中等: 2,
      强: 1,
      很强: 1
    }
  },
  Nt = [
    "dressing",
    "makeup",
    "sport",
    "traffic",
    "airing",
    "umbrella",
    "shopping",
    "kiteflying",
    "fishing",
    "car_washing",
    "boating",
    "beer",
    "ac",
    "allergy",
    "comfort",
    "flu",
    "morning_sport",
    "road_condition",
    "uv",
    "sunscreen",
    "air_pollution"
  ],
  qt = t => {
    const e = [
      [null, null],
      [null, null]
    ];
    let c = 0,
      l = 0,
      u = 1,
      p = 0;
    for (; c < 2; ) {
      for (const _ of Nt) {
        if (c > 1) break;
        const h = t[_];
        !h ||
          !h.brief ||
          (re[_][h.brief] === u &&
            ((e[c][l] = {
              id: p++,
              name: re[_].name,
              icon: re[_].icon,
              brief: h.brief,
              details: h.details
            }),
            ++l > 1 && ((l = 0), c++)));
      }
      u++;
    }
    return e;
  },
  jt = { key: 0, class: "simple-weather" },
  Et = { key: 0, class: "weather-loading" },
  Yt = { class: "now-weather" },
  Jt = ["src"],
  Kt = { class: "now-temperature" },
  Gt = { class: "weather-title" },
  Ut = { class: "title-left" },
  Xt = ["src"],
  Zt = { class: "today" },
  Qt = { class: "today-day" },
  eo = { class: "today-en" },
  to = { class: "weather-title" },
  oo = { class: "title-left" },
  no = { class: "weather-content-days" },
  so = ["src"],
  ao = { class: "weather-title" },
  lo = { class: "title-left" },
  co = { class: "weather-content-life" },
  io = { class: "weather-life-item" },
  ro = { class: "life-message" },
  _o = { class: "brief" },
  uo = { class: "details" },
  po = b({ name: "SimpleWeather" }),
  ho = b({
    ...po,
    setup(t) {
      const e = "/wy-vue3-vite-basic",
        c = {
          key: "SqOhhSmsbAOffhH0B",
          location: F.getItem("location"),
          language: "zh-Hans"
        },
        l = L(!1),
        u = L(!1),
        p = L(!1),
        _ = U(),
        h = L(""),
        f = L(""),
        S = L("");
      let m = !1;
      const C = L([]);
      let M = [];
      const K = L([]),
        z = L(),
        N = () => {
          Vt(c).then(I => {
            (h.value = I.results[0].location.name),
              (f.value = I.results[0].now.temperature + "°C");
            let k = I.results[0].now.text;
            if (k === "晴" || k === "晴间多云" || k === "大部多云") {
              const r = ee().hour();
              r >= 6 && r < 18 ? (k = "白天" + k) : (k = "夜晚" + k);
            }
            (S.value = k), (l.value = !1);
          });
        },
        G = () => {
          if (m) return;
          (u.value = !0), (p.value = !0);
          const I = [At({ ...c, start: 0, days: 3 }), Ft({ ...c, days: 3 })];
          Promise.all(I).then(k => {
            const r = k[0].results[0].daily;
            r.forEach(g => {
              g.date = ee(g.date).format("DD/MM/YYYY");
            }),
              (C.value = r),
              (u.value = !1),
              (M = k[1].results[0].suggestion),
              (K.value = qt(M[0])),
              (m = !0),
              (p.value = !1);
          });
        };
      function U() {
        const I = ee().date(),
          k = ee().day();
        return {
          day: I,
          en: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"][k]
        };
      }
      const q = () => {
        (m = !1),
          z.value && o(z).hide(),
          (l.value = !0),
          Wt().then(I => {
            const k = I.data.lat + ":" + I.data.lng;
            F.setItem("location", k), (c.location = k), N();
          });
      };
      return (
        De(() => {
          c.location ? ((l.value = !0), N()) : q();
        }),
        (I, k) => {
          const r = se,
            g = Pt,
            P = y("el-button"),
            $ = y("el-col"),
            B = y("el-row"),
            V = Ht,
            Q = y("el-skeleton"),
            le = Ct,
            ce = y("el-popover");
          return o(f)
            ? (s(),
              d("div", jt, [
                o(l)
                  ? (s(),
                    d("div", Et, [
                      n(r, {
                        icon: "icon-loading",
                        svg: "",
                        style: { width: "30px", height: "30px" },
                        class: "loading-rotate"
                      }),
                      x(" 获取天气中 ")
                    ]))
                  : T("", !0),
                o(l)
                  ? T("", !0)
                  : (s(),
                    w(
                      ce,
                      {
                        key: 1,
                        ref_key: "weatherPopoverRef",
                        ref: z,
                        placement: "bottom",
                        trigger: "click",
                        "popper-class": "weather-popover",
                        width: "400",
                        onShow: G
                      },
                      {
                        reference: a(() => [
                          i("div", Yt, [
                            o(S)
                              ? (s(),
                                d(
                                  "img",
                                  {
                                    key: 0,
                                    src:
                                      o(e) +
                                      "/weather/" +
                                      o(ie).get(o(S)) +
                                      ".png",
                                    class: "now-weather-png"
                                  },
                                  null,
                                  8,
                                  Jt
                                ))
                              : T("", !0),
                            i("span", Kt, v(o(f)), 1)
                          ])
                        ]),
                        default: a(() => [
                          i("div", Gt, [
                            i("div", Ut, [
                              n(g, { class: "weather-title-icon" }),
                              x(" 实时天气 ")
                            ]),
                            n(
                              P,
                              { class: "weather-title-right-btn", onClick: q },
                              { default: a(() => [x("更新")]), _: 1 }
                            )
                          ]),
                          n(
                            B,
                            { class: "weather-content-now" },
                            {
                              default: a(() => [
                                n(
                                  $,
                                  { span: 6 },
                                  {
                                    default: a(() => [
                                      o(S)
                                        ? (s(),
                                          d(
                                            "img",
                                            {
                                              key: 0,
                                              src:
                                                o(e) +
                                                "/weather/" +
                                                o(ie).get(o(S)) +
                                                ".png",
                                              style: { width: "60px" }
                                            },
                                            null,
                                            8,
                                            Xt
                                          ))
                                        : T("", !0)
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  $,
                                  { span: 8 },
                                  {
                                    default: a(() => [
                                      i("div", Zt, [
                                        i("span", Qt, v(o(_).day), 1),
                                        i("span", eo, v(o(_).en), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }
                                ),
                                n(
                                  $,
                                  { span: 10 },
                                  {
                                    default: a(() => [
                                      n(
                                        B,
                                        { justify: "center" },
                                        {
                                          default: a(() => [
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(" 城市: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(v(o(h)), 1)
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      n(
                                        B,
                                        { justify: "center" },
                                        {
                                          default: a(() => [
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(" 天气: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(v(o(S)), 1)
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      n(
                                        B,
                                        { justify: "center" },
                                        {
                                          default: a(() => [
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(" 温度: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            n(
                                              $,
                                              { span: 6 },
                                              {
                                                default: a(() => [
                                                  x(v(o(f)), 1)
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          i("div", to, [
                            i("div", oo, [
                              n(V, { class: "weather-title-icon" }),
                              x(" 逐日预报 ")
                            ])
                          ]),
                          i("div", no, [
                            n(
                              Q,
                              {
                                rows: 2,
                                loading: o(u),
                                throttle: 500,
                                style: { height: "120px" }
                              },
                              {
                                default: a(() => [
                                  (s(!0),
                                  d(
                                    j,
                                    null,
                                    E(
                                      o(C),
                                      W => (
                                        s(),
                                        w(
                                          B,
                                          { key: W.date, class: "day-weather" },
                                          {
                                            default: a(() => [
                                              n(
                                                $,
                                                { span: 4 },
                                                {
                                                  default: a(() => [
                                                    i(
                                                      "img",
                                                      {
                                                        src:
                                                          o(e) +
                                                          "/weather/" +
                                                          o(ie).get(
                                                            W.text_day
                                                          ) +
                                                          ".png",
                                                        class: "day-weather-png"
                                                      },
                                                      null,
                                                      8,
                                                      so
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              ),
                                              n(
                                                $,
                                                { span: 8 },
                                                {
                                                  default: a(() => [
                                                    i(
                                                      "span",
                                                      null,
                                                      v(W.date),
                                                      1
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              ),
                                              n(
                                                $,
                                                { span: 8 },
                                                {
                                                  default: a(() => [
                                                    i(
                                                      "span",
                                                      null,
                                                      v(W.low) +
                                                        "°C ~ " +
                                                        v(W.high) +
                                                        "°C",
                                                      1
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              ),
                                              n(
                                                $,
                                                { span: 4 },
                                                {
                                                  default: a(() => [
                                                    i(
                                                      "span",
                                                      null,
                                                      v(W.text_day),
                                                      1
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              )
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ["loading"]
                            )
                          ]),
                          i("div", ao, [
                            i("div", lo, [
                              n(le, { class: "weather-title-icon" }),
                              x(" 生活指数 ")
                            ])
                          ]),
                          i("div", co, [
                            n(
                              Q,
                              {
                                rows: 2,
                                loading: o(u),
                                throttle: 500,
                                style: { height: "120px" }
                              },
                              {
                                default: a(() => [
                                  (s(!0),
                                  d(
                                    j,
                                    null,
                                    E(
                                      o(K),
                                      (W, H) => (
                                        s(),
                                        w(
                                          B,
                                          {
                                            class: "life-row",
                                            gutter: 10,
                                            key: H
                                          },
                                          {
                                            default: a(() => [
                                              (s(!0),
                                              d(
                                                j,
                                                null,
                                                E(
                                                  W,
                                                  D => (
                                                    s(),
                                                    w(
                                                      $,
                                                      { span: 12, key: D.id },
                                                      {
                                                        default: a(() => [
                                                          i("div", io, [
                                                            n(
                                                              r,
                                                              {
                                                                icon: D.icon,
                                                                svg: "",
                                                                style: {
                                                                  width: "35px",
                                                                  height: "35px"
                                                                }
                                                              },
                                                              null,
                                                              8,
                                                              ["icon"]
                                                            ),
                                                            i("div", ro, [
                                                              i(
                                                                "div",
                                                                _o,
                                                                v(D.name) +
                                                                  "：" +
                                                                  v(D.brief),
                                                                1
                                                              ),
                                                              i(
                                                                "div",
                                                                uo,
                                                                v(D.details),
                                                                1
                                                              )
                                                            ])
                                                          ])
                                                        ]),
                                                        _: 2
                                                      },
                                                      1024
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 1
                              },
                              8,
                              ["loading"]
                            )
                          ])
                        ]),
                        _: 1
                      },
                      512
                    ))
              ]))
            : T("", !0);
        }
      );
    }
  });
const go = R(ho, [["__scopeId", "data-v-a25d7288"]]),
  mo = { class: "navbar" },
  fo = { class: "vertical-header-right" },
  vo = { class: "user-box" },
  yo = ["src"],
  wo = { key: 1 },
  bo = b({ name: "Navbar" }),
  $o = b({
    ...bo,
    setup(t) {
      const { logout: e } = Te(),
        { showScreenFull: c, showDarkToogle: l, openBtnPosition: u } = ae(),
        p = O(() => {
          var z;
          return (z = de().signUser) == null ? void 0 : z.userName;
        }),
        _ = O(() => (p.value ? { marginRight: "10px" } : "")),
        h = O(() => (z, N) => ({
          background: z === N ? Ye().themeColor.mainColor : "",
          color: z === N ? "#fff" : "#000"
        })),
        { locale: f, translateZh: S, translateEn: m } = Ie(),
        { isCollapse: C, toggleSideBar: M } = he(),
        K = {
          display: "inline-flex",
          float: "left",
          width: "auto",
          height: "50px",
          "align-items": "center"
        };
      return (z, N) => {
        const G = se,
          U = rt,
          q = y("el-dropdown-item"),
          I = y("el-dropdown-menu"),
          k = y("el-dropdown"),
          r = Je,
          g = st;
        return (
          s(),
          d("div", mo, [
            o(u) === "top"
              ? (s(),
                w(
                  Le,
                  { key: 0, collapse: o(C), onToggleClick: o(M), style: K },
                  null,
                  8,
                  ["collapse", "onToggleClick"]
                ))
              : T("", !0),
            n(ft),
            i("div", fo, [
              n(go),
              o(c) ? (s(), w(bt, { key: 0 })) : T("", !0),
              n(
                k,
                { trigger: "click", class: "toogle-locale" },
                {
                  dropdown: a(() => [
                    n(
                      I,
                      { class: "translate" },
                      {
                        default: a(() => [
                          n(
                            q,
                            {
                              style: Z(o(h)(o(f), "zh-CN")),
                              class: "transition-dropdown-item",
                              onClick: o(S)
                            },
                            {
                              default: a(() => [
                                x(" 简体中文 "),
                                te(
                                  n(
                                    U,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[ue, o(f) === "zh-CN"]]
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["style", "onClick"]
                          ),
                          n(
                            q,
                            {
                              style: Z(o(h)(o(f), "en")),
                              class: "transition-dropdown-item",
                              onClick: o(m)
                            },
                            {
                              default: a(() => [
                                x(" English "),
                                te(
                                  n(
                                    U,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[ue, o(f) === "en"]]
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["style", "onClick"]
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  default: a(() => [
                    i("span", null, [
                      o(f) === "en"
                        ? (s(),
                          w(G, {
                            key: 0,
                            icon: "icon-zhongyingwenqiehuan-yingwen",
                            class: "toogle-locale-icon"
                          }))
                        : T("", !0),
                      o(f) === "zh-CN"
                        ? (s(),
                          w(G, {
                            key: 1,
                            icon: "icon-zhongyingwenqiehuan-zhongwen",
                            class: "toogle-locale-icon"
                          }))
                        : T("", !0)
                    ])
                  ]),
                  _: 1
                }
              ),
              o(l) ? (s(), w(r, { key: 1 })) : T("", !0),
              n(
                k,
                { trigger: "click" },
                {
                  dropdown: a(() => [
                    n(
                      I,
                      { class: "logout" },
                      {
                        default: a(() => [
                          n(
                            q,
                            { onClick: o(e) },
                            {
                              default: a(() => [
                                n(g, { style: { "margin-right": "5px" } }),
                                x(" " + v(z.$t("buttons.loginOut")), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ["onClick"]
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  default: a(() => [
                    i("span", vo, [
                      o(ye)
                        ? (s(),
                          d(
                            "img",
                            { key: 0, src: o(ye), style: Z(o(_)) },
                            null,
                            12,
                            yo
                          ))
                        : T("", !0),
                      o(p) ? (s(), d("p", wo, v(o(p)), 1)) : T("", !0)
                    ])
                  ]),
                  _: 1
                }
              )
            ])
          ])
        );
      };
    }
  });
const ko = R($o, [["__scopeId", "data-v-f520b917"]]),
  xo = b({ name: "WyToolTip", inheritAttrs: !1 }),
  So = b({
    ...xo,
    props: {
      text: { default: "" },
      multipleJudgments: { type: Boolean, default: !1 }
    },
    setup(t) {
      const e = t,
        c = L(null),
        l = L(!0),
        u = L(!1);
      function p() {
        u.value ||
          e.multipleJudgments ||
          Re(() => {
            const _ = c.value;
            (_ == null ? void 0 : _.scrollWidth) >
            (_ == null ? void 0 : _.clientWidth)
              ? (l.value = !1)
              : (l.value = !0),
              (u.value = !0);
          });
      }
      return (_, h) => {
        const f = y("el-tooltip");
        return (
          s(),
          w(
            f,
            { placement: "top", offset: -10, disabled: l.value },
            {
              content: a(() => [
                ve(_.$slots, "content", {}, () => [x(v(e.text), 1)], !0)
              ]),
              default: a(() => [
                i(
                  "span",
                  Oe(
                    {
                      ref_key: "textRef",
                      ref: c,
                      onMouseover: p,
                      class: "tool-tip-text"
                    },
                    _.$attrs
                  ),
                  [ve(_.$slots, "default", {}, () => [x(v(e.text), 1)], !0)],
                  16
                )
              ]),
              _: 3
            },
            8,
            ["disabled"]
          )
        );
      };
    }
  });
const Me = R(So, [["__scopeId", "data-v-efdc7c34"]]),
  _e = "WYJS",
  Co = b({ name: "Logo" }),
  To = b({
    ...Co,
    props: { collapse: Boolean },
    setup(t) {
      const e = t,
        c = {
          "margin-left": "10px",
          color: "#fff",
          "font-weight": 600,
          "font-size": "20px",
          flex: 1
        };
      return (l, u) => {
        const p = se,
          _ = y("router-link"),
          h = Me;
        return (
          s(),
          d(
            "div",
            { class: J(["sidebar-logo-box", { collapse: e.collapse }]) },
            [
              e.collapse
                ? (s(),
                  w(
                    _,
                    { key: 0, title: _e, class: "sidebar-logo-link", to: "/" },
                    {
                      default: a(() => [
                        n(p, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        })
                      ]),
                      _: 1
                    }
                  ))
                : (s(),
                  w(
                    _,
                    { key: 1, title: _e, class: "sidebar-logo-link", to: "/" },
                    {
                      default: a(() => [
                        n(p, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        }),
                        n(h, { text: _e, style: c, multipleJudgments: "" })
                      ]),
                      _: 1
                    }
                  ))
            ],
            2
          )
        );
      };
    }
  });
const Io = R(To, [["__scopeId", "data-v-36d560bd"]]),
  Lo = { key: 0, class: "sub-menu-icon" },
  Mo = { class: "menu-text-box" },
  Bo = { key: 0, class: "sub-menu-icon" },
  Ho = b({ name: "SideBarItem" }),
  zo = b({
    ...Ho,
    props: { item: { type: Object } },
    setup(t) {
      const e = t,
        c = O(() => {
          const l = { display: "flex", alignItems: "center" };
          return e.item.parentName && (l["font-size"] = "12px"), l;
        });
      return (l, u) => {
        const p = pe,
          _ = Me,
          h = y("el-menu-item"),
          f = y("side-bar-item", !0),
          S = y("el-sub-menu");
        return !e.item.children || e.item.children.length == 0
          ? (s(),
            w(
              h,
              { key: 0, index: e.item.path, style: Z(o(c)) },
              {
                title: a(() => [
                  i("div", Mo, [
                    n(_, null, {
                      content: a(() => [x(v(l.$t(e.item.meta.title)), 1)]),
                      default: a(() => [
                        x(" " + v(l.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: a(() => {
                  var m, C;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (s(),
                        d("div", Lo, [
                          n(
                            p,
                            {
                              icon: (C = e.item.meta) == null ? void 0 : C.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : T("", !0)
                  ];
                }),
                _: 1
              },
              8,
              ["index", "style"]
            ))
          : (s(),
            w(
              S,
              { key: 1, index: e.item.path, "popper-class": "side-bar-popper" },
              {
                title: a(() => {
                  var m, C;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (s(),
                        d("div", Bo, [
                          n(
                            p,
                            {
                              icon: (C = e.item.meta) == null ? void 0 : C.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : T("", !0),
                    n(_, null, {
                      content: a(() => [x(v(l.$t(e.item.meta.title)), 1)]),
                      default: a(() => [
                        x(" " + v(l.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }),
                default: a(() => [
                  (s(!0),
                  d(
                    j,
                    null,
                    E(
                      e.item.children,
                      m => (
                        s(), w(f, { key: m.path, item: m }, null, 8, ["item"])
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ["index"]
            ));
      };
    }
  });
const Do = R(zo, [["__scopeId", "data-v-29b6a693"]]),
  Oo = { class: "side-bar" },
  Ro = { class: "side-bar-top" },
  Po = { class: "side-bar-middle" },
  Wo = { key: 0, class: "side-bar-bottom" },
  Vo = b({ name: "SideBar" }),
  Ao = b({
    ...Vo,
    setup(t) {
      const e = oe(),
        { openBtnPosition: c } = ae(),
        { isCollapse: l, toggleSideBar: u } = he(),
        p = _ => {};
      return (_, h) => {
        const f = y("el-menu"),
          S = y("el-scrollbar");
        return (
          s(),
          d("div", Oo, [
            i("div", Ro, [n(Io, { collapse: o(l) }, null, 8, ["collapse"])]),
            i("div", Po, [
              n(S, null, {
                default: a(() => [
                  n(
                    f,
                    {
                      router: "",
                      "unique-opened": "",
                      mode: "vertical",
                      class: "outer-most",
                      collapse: o(l),
                      "default-active": o(e).path,
                      "collapse-transition": !1,
                      onSelect: h[0] || (h[0] = m => p(m))
                    },
                    {
                      default: a(() => [
                        (s(!0),
                        d(
                          j,
                          null,
                          E(
                            o(Ee),
                            m => (
                              s(),
                              w(Do, { key: m.path, item: m }, null, 8, ["item"])
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["collapse", "default-active"]
                  )
                ]),
                _: 1
              })
            ]),
            o(c) === "bottom"
              ? (s(),
                d("div", Wo, [
                  n(Le, { collapse: o(l), onToggleClick: o(u) }, null, 8, [
                    "collapse",
                    "onToggleClick"
                  ])
                ]))
              : T("", !0)
          ])
        );
      };
    }
  });
const Fo = R(Ao, [["__scopeId", "data-v-737c92d7"]]),
  No = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  qo = i(
    "path",
    { fill: "currentColor", d: "M384 192v640l384-320.064z" },
    null,
    -1
  ),
  jo = [qo];
function Eo(t, e) {
  return s(), d("svg", No, jo);
}
const Yo = { name: "ep-caret-right", render: Eo },
  Jo = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Ko = i(
    "path",
    {
      fill: "currentColor",
      d: "M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
    },
    null,
    -1
  ),
  Go = [Ko];
function Uo(t, e) {
  return s(), d("svg", Jo, Go);
}
const Xo = { name: "ep-close", render: Uo },
  Zo = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Qo = i(
    "path",
    { fill: "currentColor", d: "M672 192L288 511.936L672 832z" },
    null,
    -1
  ),
  en = [Qo];
function tn(t, e) {
  return s(), d("svg", Zo, en);
}
const on = { name: "ep-caret-left", render: tn },
  nn = t => (Ae("data-v-d832f0f0"), (t = t()), Fe(), t),
  sn = { class: "header-tag-main" },
  an = { class: "tag-box-left" },
  ln = { class: "tag-box", ref: "tag-box" },
  cn = ["onMouseenter", "onMouseleave"],
  rn = { class: "tag-item-box" },
  _n = nn(() => i("div", { class: "tag-process" }, null, -1)),
  un = { class: "tag-box-right" },
  dn = b({ name: "Tag" }),
  pn = b({
    ...dn,
    setup(t) {
      const e = Ce(),
        c = O(() => [
          {
            path: "/home",
            name: "HomePage",
            meta: {
              icon: "home-filled",
              title: Y("menus.homePage"),
              notCloseTag: !0
            }
          },
          ...e.routeHistroy.filter(r => r.path !== "/home")
        ]),
        l = oe(),
        u = xe(),
        p = O(() => l.fullPath),
        _ = function (r) {
          e.removeRouteHistory(r),
            p.value == r && u.push(c.value[c.value.length - 1].path);
        },
        h = Pe(),
        f = function (r) {
          const g = h.refs["tag-item" + r][0];
          g &&
            !we(g, "tag-active") &&
            (be(g, "tag-move-in"), $e(g, "tag-move-out"));
        },
        S = function (r) {
          const g = h.refs["tag-item" + r][0];
          g &&
            !we(g, "tag-active") &&
            (be(g, "tag-move-out"), $e(g, "tag-move-in"));
        },
        m = L(0),
        C = function (r) {
          const g = h.refs["tag-box"],
            P = h.refs.tags.$el,
            $ = g.offsetWidth,
            B = P.offsetWidth;
          if (!($ > B + 16 && (r < 0 || m.value >= 0)))
            if (r > 0) {
              const V = Math.abs(m.value);
              m.value += V > r ? r : V;
            } else {
              const V = $ - m.value - B - 16;
              m.value += V > r ? V : r;
            }
        },
        M = Se([
          {
            id: "refresh",
            icon: "ep:refresh",
            name: Y("buttons.refresh"),
            show: !0
          },
          {
            id: "closeCurrentTag",
            icon: "ep:close",
            name: Y("buttons.closeCurrentTag"),
            show: !0
          },
          {
            id: "closeLeftTag",
            icon: "fa:arrow-circle-o-left",
            name: Y("buttons.closeLeftTag"),
            show: !0
          },
          {
            id: "closeRightTag",
            icon: "fa:arrow-circle-o-right",
            name: Y("buttons.closeRightTag"),
            show: !0
          },
          {
            id: "closeOtherTag",
            icon: "fa:exclamation-triangle",
            name: Y("buttons.closeOtherTag"),
            show: !0
          },
          {
            id: "closeAllTag",
            icon: "ep:warning-filled",
            name: Y("buttons.closeAllTag"),
            show: !0
          }
        ]),
        K = O(() => M.filter(r => r.show)),
        z = function (r, g, P) {
          if (P) {
            h.refs["tag-dropdown"].forEach(B => {
              B.id !== r && B.handleClose();
            });
            const $ = c.value.length;
            (M[1].show = g !== 0),
              (M[2].show = !(g === 0 || g === 1)),
              (M[3].show = g !== $ - 1),
              (M[4].show = !($ < 3)),
              (M[5].show = !($ < 3));
          }
        },
        N = function (r, g) {
          new Map([
            ["refresh", G],
            ["closeCurrentTag", _],
            ["closeLeftTag", U],
            ["closeRightTag", q],
            ["closeOtherTag", I],
            ["closeAllTag", k]
          ]).get(r)(g);
        };
      function G(r) {
        const { fullPath: g, query: P } = o(l);
        e.clearKeepAliveCache(r),
          u.replace({ path: "/redirect" + g, query: P });
      }
      function U(r) {
        e.removeRouteHistoryLeft(r);
      }
      function q(r) {
        e.removeRouteHistoryRight(r);
      }
      function I(r) {
        e.removeRouteHistoryOther(r);
      }
      function k() {
        e.removeRouteHistoryAll();
      }
      return (r, g) => {
        const P = on,
          $ = y("router-link"),
          B = pe,
          V = y("el-dropdown-item"),
          Q = y("el-dropdown-menu"),
          le = y("el-dropdown"),
          ce = Xo,
          W = Yo;
        return (
          s(),
          d("div", sn, [
            i("div", an, [
              n(P, {
                class: "left-btn-icon",
                onClick: g[0] || (g[0] = H => C(100))
              })
            ]),
            i(
              "div",
              ln,
              [
                n(
                  We,
                  {
                    name: "tags",
                    class: "tags",
                    tag: "div",
                    ref: "tags",
                    style: Z({ transform: `translateX(${m.value}px)` })
                  },
                  {
                    default: a(() => [
                      (s(!0),
                      d(
                        j,
                        null,
                        E(o(c), (H, D) => {
                          var ge;
                          return (
                            s(),
                            d(
                              "div",
                              {
                                class: J([
                                  "tag-item",
                                  {
                                    "can-close-tag": !(
                                      (ge = H.meta) != null && ge.notCloseTag
                                    ),
                                    "tag-active": H.path === o(p)
                                  }
                                ]),
                                key: H.path,
                                ref_for: !0,
                                ref: "tag-item" + D,
                                onMouseenter: A => f(D),
                                onMouseleave: A => S(D)
                              },
                              [
                                i("div", rn, [
                                  (s(),
                                  w(
                                    le,
                                    {
                                      ref_for: !0,
                                      ref: "tag-dropdown",
                                      trigger: "contextmenu",
                                      placement: "bottom-start",
                                      id: H.path,
                                      key: "tag-dropdown-" + H.path,
                                      onVisibleChange: A => z(H.path, D, A)
                                    },
                                    {
                                      dropdown: a(() => [
                                        n(
                                          Q,
                                          null,
                                          {
                                            default: a(() => [
                                              (s(!0),
                                              d(
                                                j,
                                                null,
                                                E(
                                                  o(K),
                                                  A => (
                                                    s(),
                                                    w(
                                                      V,
                                                      {
                                                        key: A.id,
                                                        onClick: bn =>
                                                          N(A.id, H.path)
                                                      },
                                                      {
                                                        default: a(() => [
                                                          n(
                                                            B,
                                                            {
                                                              icon: A.icon,
                                                              class:
                                                                "dropdown-item-icon"
                                                            },
                                                            null,
                                                            8,
                                                            ["icon"]
                                                          ),
                                                          i(
                                                            "span",
                                                            null,
                                                            v(r.$t(A.name)),
                                                            1
                                                          )
                                                        ]),
                                                        _: 2
                                                      },
                                                      1032,
                                                      ["onClick"]
                                                    )
                                                  )
                                                ),
                                                128
                                              ))
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        )
                                      ]),
                                      default: a(() => [
                                        n(
                                          $,
                                          {
                                            to: H.path,
                                            class: J([
                                              "tag-name",
                                              { "first-tag": D == 0 }
                                            ])
                                          },
                                          {
                                            default: a(() => [
                                              x(v(r.$t(H.meta.title)), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ["to", "class"]
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ["id", "onVisibleChange"]
                                  )),
                                  D != 0
                                    ? (s(),
                                      w(
                                        ce,
                                        {
                                          key: 0,
                                          class: "close-btn",
                                          onClick: Ve(A => _(H.path), ["stop"])
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ))
                                    : T("", !0),
                                  _n
                                ])
                              ],
                              42,
                              cn
                            )
                          );
                        }),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ["style"]
                )
              ],
              512
            ),
            i("div", un, [
              n(W, {
                class: "right-btn-icon",
                onClick: g[1] || (g[1] = H => C(-100))
              })
            ])
          ])
        );
      };
    }
  });
const hn = R(pn, [["__scopeId", "data-v-d832f0f0"]]);
function gn() {
  const t = oe(),
    { changeTitle: e } = Te(),
    { locale: c } = Ie();
  e(t.meta),
    ke(
      () => c.value,
      l => {
        e(t.meta);
      }
    );
}
const mn = { class: "main-wrapper" },
  fn = { class: "app-mask" },
  vn = { key: 0, class: "header-wrapper" },
  yn = b({ name: "Layout" }),
  wn = b({
    ...yn,
    setup(t) {
      gn();
      const { isCollapse: e } = he(),
        c = ae(),
        l = Se({
          appMaskShow: O(() => de().appMaskShow),
          showHeader: O(() => c.showHeader)
        }),
        u = L({});
      qe(je, u);
      function p(_) {
        u.value = _;
      }
      return (_, h) => {
        const f = Ne("resize");
        return (
          s(),
          d(
            "div",
            {
              class: J(["app-wrapper", o(e) ? "hide-sidebar" : "open-sidebar"])
            },
            [
              i("div", mn, [
                i(
                  "div",
                  {
                    class: J([
                      "left-wrapper",
                      o(e) ? "collapse-left" : "open-left"
                    ])
                  },
                  [n(Fo)],
                  2
                ),
                i(
                  "div",
                  {
                    class: J([
                      "right-wrapper",
                      o(e) ? "open-right" : "collapse-right"
                    ])
                  },
                  [
                    te(i("div", fn, null, 512), [[ue, l.appMaskShow]]),
                    l.showHeader
                      ? (s(), d("div", vn, [n(ko), n(hn)]))
                      : T("", !0),
                    te(n(Ze, null, null, 512), [[f, p]])
                  ],
                  2
                )
              ])
            ],
            2
          )
        );
      };
    }
  });
const Ln = R(wn, [["__scopeId", "data-v-cf13bae1"]]);
export { Ln as default };
