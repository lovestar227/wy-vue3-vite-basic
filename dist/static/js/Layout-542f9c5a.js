import {
  d as Be,
  f as O,
  v as D,
  x as I,
  y as oe,
  A as $e,
  r as y,
  o as n,
  B as d,
  h as o,
  w as s,
  g as w,
  K as me,
  C as fe,
  D as i,
  F as He,
  G as J,
  u as Se,
  H as j,
  I as E,
  J as v,
  L as ze,
  O as a,
  P as ee,
  Q as De,
  R as $,
  S as C,
  T as Z,
  U as te,
  V as _e,
  W as ve,
  X as Oe,
  Y as Re,
  j as xe,
  Z as Pe,
  _ as We,
  $ as Ve,
  a0 as Ae,
  a1 as Fe,
  a2 as Ne,
  a3 as qe
} from "./.pnpm-c4ae2d5d.js";
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
} from "./index-649cc330.js";
import { t as Ye, _ as Je } from "./theme-e6c43231.js";
import { _ as se } from "./WyIconFont.vue_vue_type_script_setup_true_lang-cb6e4f8d.js";
import { u as ye, h as we, a as be, r as ke } from "./user-e1c9ffd8.js";
import { _ as pe } from "./WyIconify.vue_vue_type_script_setup_true_lang-6b7d70c3.js";
const ae = Be({
    id: "setting",
    state: () => {
      var t, e, c, l, _;
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
          ((_ = F.getItem("setting")) == null ? void 0 : _.showScreenFull) ??
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
  Ue = O({
    name: "MainView",
    __name: "MainView",
    setup(t) {
      const e = Ce(),
        c = D(() =>
          e.allAliveRoute.map(p => {
            var u;
            return (u = p.meta) == null ? void 0 : u.componentName;
          })
        ),
        l = I(null),
        _ = oe();
      return (
        $e(
          () => _,
          (p, u) => {
            var h;
            l.value &&
              (h = p.meta) != null &&
              h.scrollTop &&
              l.value.setScrollTop(0);
          },
          { deep: !0 }
        ),
        (p, u) => {
          const h = y("el-backtop"),
            f = y("el-scrollbar"),
            S = y("router-view");
          return (
            n(),
            d("div", Ke, [
              o(S, null, {
                default: s(({ Component: m, route: x }) => {
                  var L;
                  return [
                    (L = x.meta) != null && L.fixedPage
                      ? (n(),
                        d("div", Ge, [
                          (n(),
                          w(
                            me,
                            { include: c.value },
                            [
                              (n(),
                              w(fe(m), {
                                key: x.fullPath,
                                class: "main-content"
                              }))
                            ],
                            1032,
                            ["include"]
                          ))
                        ]))
                      : (n(),
                        w(
                          f,
                          { key: 0, ref_key: "mainViewScrollBarRef", ref: l },
                          {
                            default: s(() => [
                              o(h, {
                                target: ".main-view .el-scrollbar__wrap",
                                "visibility-height": 50
                              }),
                              (n(),
                              w(
                                me,
                                { include: c.value },
                                [
                                  (n(),
                                  w(fe(m), {
                                    key: x.fullPath,
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
const Xe = R(Ue, [["__scopeId", "data-v-e1dceab1"]]),
  Ze = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Qe = i(
    "path",
    {
      fill: "currentColor",
      d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    },
    null,
    -1
  ),
  et = i(
    "path",
    {
      fill: "currentColor",
      d: "m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    },
    null,
    -1
  ),
  tt = [Qe, et];
function ot(t, e) {
  return n(), d("svg", Ze, tt);
}
const nt = { name: "ep-back", render: ot },
  st = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  at = i(
    "path",
    {
      fill: "currentColor",
      d: "M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
    },
    null,
    -1
  ),
  lt = [at];
function ct(t, e) {
  return n(), d("svg", st, lt);
}
const it = { name: "ep-check", render: ct };
function Ie() {
  const { locale: t, t: e } = He(),
    c = de();
  function l() {
    c.setLocale("zh-CN"), (t.value = "zh-CN");
  }
  function _() {
    c.setLocale("en"), (t.value = "en");
  }
  return { t: e, locale: t, translateZh: l, translateEn: _ };
}
function he() {
  const t = ae(),
    e = D(() => !t.getSidebarIsOpen);
  function c() {
    t.toggleSideBar();
  }
  return { isCollapse: e, toggleSideBar: c };
}
const rt = O({
  name: "OpenBtn",
  __name: "OpenBtn",
  props: { collapse: { type: Boolean } },
  emits: ["toggleClick"],
  setup(t, { emit: e }) {
    const c = t,
      l = () => {
        e("toggleClick");
      };
    return (_, p) => {
      const u = pe,
        h = y("el-tooltip");
      return (
        n(),
        d(
          "div",
          { class: J(["open-btn-box", _.collapse ? "open-btn-collapse" : ""]) },
          [
            o(
              h,
              {
                placement: "right",
                effect: "dark",
                content: c.collapse ? "点击展开" : "点击折叠"
              },
              {
                default: s(() => [
                  o(
                    u,
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
const Le = R(rt, [["__scopeId", "data-v-6276e521"]]),
  ut = { class: "header-breadcrumb" },
  _t = ["onClick"],
  dt = { key: 1, class: "no-redirect" },
  pt = O({
    name: "Breadcrumb",
    __name: "Breadcrumb",
    setup(t) {
      const e = Se(),
        c = D(() => {
          var _, p;
          return (p = (_ = e.currentRoute.value) == null ? void 0 : _.meta) ==
            null
            ? void 0
            : p.parentRoute;
        }),
        l = _ => {
          if (_.redirect) {
            e.push(_.redirect);
            return;
          }
          e.push(_.path);
        };
      return (_, p) => {
        const u = y("el-breadcrumb-item"),
          h = y("el-breadcrumb");
        return (
          n(),
          d("div", ut, [
            o(
              h,
              { separator: "/" },
              {
                default: s(() => [
                  (n(!0),
                  d(
                    j,
                    null,
                    E(
                      c.value,
                      (f, S) => (
                        n(),
                        w(
                          u,
                          { key: f.path },
                          {
                            default: s(() => [
                              S != c.value.length - 1
                                ? (n(),
                                  d(
                                    "span",
                                    {
                                      key: 0,
                                      onClick: m => l(f),
                                      class: "can-redirect"
                                    },
                                    v(_.$t(f.title)),
                                    9,
                                    _t
                                  ))
                                : (n(), d("span", dt, v(_.$t(f.title)), 1))
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
const ht = R(pt, [["__scopeId", "data-v-89f96e1c"]]),
  gt = { class: "screen-full-box" },
  mt = O({
    name: "ScreenFull",
    __name: "ScreenFull",
    setup(t) {
      const { isFullscreen: e, toggle: c } = ze();
      return (l, _) => {
        const p = se;
        return (
          n(),
          d("div", gt, [
            o(
              p,
              {
                title: a(e)
                  ? l.$t("buttons.exitFullScreen")
                  : l.$t("buttons.fullScreen"),
                icon: a(e) ? "icon-quxiaoquanping" : "icon-quanping",
                onClick: a(c)
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
const ft = R(mt, [["__scopeId", "data-v-2e47fbc5"]]),
  vt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  yt = i(
    "path",
    {
      fill: "currentColor",
      d: "M418.496 871.04L152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224c44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216a573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296c-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944c-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792l22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656l45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248l-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656l-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
    },
    null,
    -1
  ),
  wt = [yt];
function bt(t, e) {
  return n(), d("svg", vt, wt);
}
const kt = { name: "ep-soccer", render: bt },
  $t = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  St = i(
    "path",
    {
      fill: "currentColor",
      d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
    },
    null,
    -1
  ),
  xt = i(
    "path",
    {
      fill: "currentColor",
      d: "m220.8 256l-71.232 80l71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496l-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
    },
    null,
    -1
  ),
  Ct = [St, xt];
function Tt(t, e) {
  return n(), d("svg", $t, Ct);
}
const It = { name: "ep-guide", render: Tt },
  Lt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Mt = i(
    "path",
    {
      fill: "currentColor",
      d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
    },
    null,
    -1
  ),
  Bt = [Mt];
function Ht(t, e) {
  return n(), d("svg", Lt, Bt);
}
const zt = { name: "ep-brush-filled", render: Ht },
  Dt = () =>
    ne.$get("https://qifu-api.baidubce.com/ip/local/geo/v1/district", null, {
      requestOutside: !0
    }),
  Ot = t =>
    ne.$get("https://api.seniverse.com/v3/weather/now.json", t, {
      requestOutside: !0
    }),
  Rt = t =>
    ne.$get("https://api.seniverse.com/v3/weather/daily.json", t, {
      requestOutside: !0
    }),
  Pt = t =>
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
  Wt = [
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
  Vt = t => {
    const e = [
      [null, null],
      [null, null]
    ];
    let c = 0,
      l = 0,
      _ = 1,
      p = 0;
    for (; c < 2; ) {
      for (const u of Wt) {
        if (c > 1) break;
        const h = t[u];
        !h ||
          !h.brief ||
          (re[u][h.brief] === _ &&
            ((e[c][l] = {
              id: p++,
              name: re[u].name,
              icon: re[u].icon,
              brief: h.brief,
              details: h.details
            }),
            ++l > 1 && ((l = 0), c++)));
      }
      _++;
    }
    return e;
  },
  At = { key: 0, class: "simple-weather" },
  Ft = { key: 0, class: "weather-loading" },
  Nt = { class: "now-weather" },
  qt = ["src"],
  jt = { class: "now-temperature" },
  Et = { class: "weather-title" },
  Yt = { class: "title-left" },
  Jt = ["src"],
  Kt = { class: "today" },
  Gt = { class: "today-day" },
  Ut = { class: "today-en" },
  Xt = { class: "weather-title" },
  Zt = { class: "title-left" },
  Qt = { class: "weather-content-days" },
  eo = ["src"],
  to = { class: "weather-title" },
  oo = { class: "title-left" },
  no = { class: "weather-content-life" },
  so = { class: "weather-life-item" },
  ao = { class: "life-message" },
  lo = { class: "brief" },
  co = { class: "details" },
  io = O({
    name: "SimpleWeather",
    __name: "SimpleWeather",
    setup(t) {
      const e = "/wy-vue3-vite-basic",
        c = {
          key: "SqOhhSmsbAOffhH0B",
          location: F.getItem("location"),
          language: "zh-Hans"
        },
        l = I(!1),
        _ = I(!1),
        p = I(!1),
        u = U(),
        h = I(""),
        f = I(""),
        S = I("");
      let m = !1;
      const x = I([]);
      let L = [];
      const K = I([]),
        H = I(),
        N = () => {
          Ot(c).then(T => {
            (h.value = T.results[0].location.name),
              (f.value = T.results[0].now.temperature + "°C");
            let k = T.results[0].now.text;
            if (k === "晴" || k === "晴间多云" || k === "大部多云") {
              const r = ee().hour();
              r >= 6 && r < 18 ? (k = "白天" + k) : (k = "夜晚" + k);
            }
            (S.value = k), (l.value = !1);
          });
        },
        G = () => {
          if (m) return;
          (_.value = !0), (p.value = !0);
          const T = [Rt({ ...c, start: 0, days: 3 }), Pt({ ...c, days: 3 })];
          Promise.all(T).then(k => {
            const r = k[0].results[0].daily;
            r.forEach(g => {
              g.date = ee(g.date).format("DD/MM/YYYY");
            }),
              (x.value = r),
              (_.value = !1),
              (L = k[1].results[0].suggestion),
              (K.value = Vt(L[0])),
              (m = !0),
              (p.value = !1);
          });
        };
      function U() {
        const T = ee().date(),
          k = ee().day();
        return {
          day: T,
          en: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"][k]
        };
      }
      const q = () => {
        (m = !1),
          H.value && a(H).hide(),
          (l.value = !0),
          Dt().then(T => {
            const k = T.data.lat + ":" + T.data.lng;
            F.setItem("location", k), (c.location = k), N();
          });
      };
      return (
        De(() => {
          c.location ? ((l.value = !0), N()) : q();
        }),
        (T, k) => {
          const r = se,
            g = zt,
            P = y("el-button"),
            b = y("el-col"),
            M = y("el-row"),
            V = It,
            Q = y("el-skeleton"),
            le = kt,
            ce = y("el-popover");
          return a(f)
            ? (n(),
              d("div", At, [
                a(l)
                  ? (n(),
                    d("div", Ft, [
                      o(r, {
                        icon: "icon-loading",
                        svg: "",
                        style: { width: "30px", height: "30px" },
                        class: "loading-rotate"
                      }),
                      $(" 获取天气中 ")
                    ]))
                  : C("", !0),
                a(l)
                  ? C("", !0)
                  : (n(),
                    w(
                      ce,
                      {
                        key: 1,
                        ref_key: "weatherPopoverRef",
                        ref: H,
                        placement: "bottom",
                        trigger: "click",
                        "popper-class": "weather-popover",
                        width: "400",
                        onShow: G
                      },
                      {
                        reference: s(() => [
                          i("div", Nt, [
                            a(S)
                              ? (n(),
                                d(
                                  "img",
                                  {
                                    key: 0,
                                    src:
                                      a(e) +
                                      "/weather/" +
                                      a(ie).get(a(S)) +
                                      ".png",
                                    class: "now-weather-png"
                                  },
                                  null,
                                  8,
                                  qt
                                ))
                              : C("", !0),
                            i("span", jt, v(a(f)), 1)
                          ])
                        ]),
                        default: s(() => [
                          i("div", Et, [
                            i("div", Yt, [
                              o(g, { class: "weather-title-icon" }),
                              $(" 实时天气 ")
                            ]),
                            o(
                              P,
                              { class: "weather-title-right-btn", onClick: q },
                              { default: s(() => [$("更新")]), _: 1 }
                            )
                          ]),
                          o(
                            M,
                            { class: "weather-content-now" },
                            {
                              default: s(() => [
                                o(
                                  b,
                                  { span: 6 },
                                  {
                                    default: s(() => [
                                      a(S)
                                        ? (n(),
                                          d(
                                            "img",
                                            {
                                              key: 0,
                                              src:
                                                a(e) +
                                                "/weather/" +
                                                a(ie).get(a(S)) +
                                                ".png",
                                              style: { width: "60px" }
                                            },
                                            null,
                                            8,
                                            Jt
                                          ))
                                        : C("", !0)
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  b,
                                  { span: 8 },
                                  {
                                    default: s(() => [
                                      i("div", Kt, [
                                        i("span", Gt, v(a(u).day), 1),
                                        i("span", Ut, v(a(u).en), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }
                                ),
                                o(
                                  b,
                                  { span: 10 },
                                  {
                                    default: s(() => [
                                      o(
                                        M,
                                        { justify: "center" },
                                        {
                                          default: s(() => [
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(" 城市: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(v(a(h)), 1)
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      o(
                                        M,
                                        { justify: "center" },
                                        {
                                          default: s(() => [
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(" 天气: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(v(a(S)), 1)
                                                ]),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        }
                                      ),
                                      o(
                                        M,
                                        { justify: "center" },
                                        {
                                          default: s(() => [
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(" 温度: ")
                                                ]),
                                                _: 1
                                              }
                                            ),
                                            o(
                                              b,
                                              { span: 6 },
                                              {
                                                default: s(() => [
                                                  $(v(a(f)), 1)
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
                          i("div", Xt, [
                            i("div", Zt, [
                              o(V, { class: "weather-title-icon" }),
                              $(" 逐日预报 ")
                            ])
                          ]),
                          i("div", Qt, [
                            o(
                              Q,
                              {
                                rows: 2,
                                loading: a(_),
                                throttle: 500,
                                style: { height: "120px" }
                              },
                              {
                                default: s(() => [
                                  (n(!0),
                                  d(
                                    j,
                                    null,
                                    E(
                                      a(x),
                                      W => (
                                        n(),
                                        w(
                                          M,
                                          { key: W.date, class: "day-weather" },
                                          {
                                            default: s(() => [
                                              o(
                                                b,
                                                { span: 4 },
                                                {
                                                  default: s(() => [
                                                    i(
                                                      "img",
                                                      {
                                                        src:
                                                          a(e) +
                                                          "/weather/" +
                                                          a(ie).get(
                                                            W.text_day
                                                          ) +
                                                          ".png",
                                                        class: "day-weather-png"
                                                      },
                                                      null,
                                                      8,
                                                      eo
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              ),
                                              o(
                                                b,
                                                { span: 8 },
                                                {
                                                  default: s(() => [
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
                                              o(
                                                b,
                                                { span: 8 },
                                                {
                                                  default: s(() => [
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
                                              o(
                                                b,
                                                { span: 4 },
                                                {
                                                  default: s(() => [
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
                          i("div", to, [
                            i("div", oo, [
                              o(le, { class: "weather-title-icon" }),
                              $(" 生活指数 ")
                            ])
                          ]),
                          i("div", no, [
                            o(
                              Q,
                              {
                                rows: 2,
                                loading: a(_),
                                throttle: 500,
                                style: { height: "120px" }
                              },
                              {
                                default: s(() => [
                                  (n(!0),
                                  d(
                                    j,
                                    null,
                                    E(
                                      a(K),
                                      (W, B) => (
                                        n(),
                                        w(
                                          M,
                                          {
                                            class: "life-row",
                                            gutter: 10,
                                            key: B
                                          },
                                          {
                                            default: s(() => [
                                              (n(!0),
                                              d(
                                                j,
                                                null,
                                                E(
                                                  W,
                                                  z => (
                                                    n(),
                                                    w(
                                                      b,
                                                      { span: 12, key: z.id },
                                                      {
                                                        default: s(() => [
                                                          i("div", so, [
                                                            o(
                                                              r,
                                                              {
                                                                icon: z.icon,
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
                                                            i("div", ao, [
                                                              i(
                                                                "div",
                                                                lo,
                                                                v(z.name) +
                                                                  "：" +
                                                                  v(z.brief),
                                                                1
                                                              ),
                                                              i(
                                                                "div",
                                                                co,
                                                                v(z.details),
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
            : C("", !0);
        }
      );
    }
  });
const ro = R(io, [["__scopeId", "data-v-8daa92d3"]]),
  uo = { class: "navbar" },
  _o = { class: "vertical-header-right" },
  po = { class: "user-box" },
  ho = ["src"],
  go = { key: 1 },
  mo = O({
    name: "Navbar",
    __name: "Navbar",
    setup(t) {
      const { logout: e } = Te(),
        { showScreenFull: c, showDarkToogle: l, openBtnPosition: _ } = ae(),
        p = D(() => {
          var H;
          return (H = de().signUser) == null ? void 0 : H.userName;
        }),
        u = D(() => (p.value ? { marginRight: "10px" } : "")),
        h = D(() => (H, N) => ({
          background: H === N ? Ye().themeColor.mainColor : "",
          color: H === N ? "#fff" : "#000"
        })),
        { locale: f, translateZh: S, translateEn: m } = Ie(),
        { isCollapse: x, toggleSideBar: L } = he(),
        K = {
          display: "inline-flex",
          float: "left",
          width: "auto",
          height: "50px",
          "align-items": "center"
        };
      return (H, N) => {
        const G = se,
          U = it,
          q = y("el-dropdown-item"),
          T = y("el-dropdown-menu"),
          k = y("el-dropdown"),
          r = Je,
          g = nt;
        return (
          n(),
          d("div", uo, [
            a(_) === "top"
              ? (n(),
                w(
                  Le,
                  { key: 0, collapse: a(x), onToggleClick: a(L), style: K },
                  null,
                  8,
                  ["collapse", "onToggleClick"]
                ))
              : C("", !0),
            o(ht),
            i("div", _o, [
              o(ro),
              a(c) ? (n(), w(ft, { key: 0 })) : C("", !0),
              o(
                k,
                { trigger: "click", class: "toogle-locale" },
                {
                  dropdown: s(() => [
                    o(
                      T,
                      { class: "translate" },
                      {
                        default: s(() => [
                          o(
                            q,
                            {
                              style: Z(h.value(a(f), "zh-CN")),
                              class: "transition-dropdown-item",
                              onClick: a(S)
                            },
                            {
                              default: s(() => [
                                $(" 简体中文 "),
                                te(
                                  o(
                                    U,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[_e, a(f) === "zh-CN"]]
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["style", "onClick"]
                          ),
                          o(
                            q,
                            {
                              style: Z(h.value(a(f), "en")),
                              class: "transition-dropdown-item",
                              onClick: a(m)
                            },
                            {
                              default: s(() => [
                                $(" English "),
                                te(
                                  o(
                                    U,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[_e, a(f) === "en"]]
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
                  default: s(() => [
                    i("span", null, [
                      a(f) === "en"
                        ? (n(),
                          w(G, {
                            key: 0,
                            icon: "icon-zhongyingwenqiehuan-yingwen",
                            class: "toogle-locale-icon"
                          }))
                        : C("", !0),
                      a(f) === "zh-CN"
                        ? (n(),
                          w(G, {
                            key: 1,
                            icon: "icon-zhongyingwenqiehuan-zhongwen",
                            class: "toogle-locale-icon"
                          }))
                        : C("", !0)
                    ])
                  ]),
                  _: 1
                }
              ),
              a(l) ? (n(), w(r, { key: 1 })) : C("", !0),
              o(
                k,
                { trigger: "click" },
                {
                  dropdown: s(() => [
                    o(
                      T,
                      { class: "logout" },
                      {
                        default: s(() => [
                          o(
                            q,
                            { onClick: a(e) },
                            {
                              default: s(() => [
                                o(g, { style: { "margin-right": "5px" } }),
                                $(" " + v(H.$t("buttons.loginOut")), 1)
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
                  default: s(() => [
                    i("span", po, [
                      a(ye)
                        ? (n(),
                          d(
                            "img",
                            { key: 0, src: a(ye), style: Z(u.value) },
                            null,
                            12,
                            ho
                          ))
                        : C("", !0),
                      p.value ? (n(), d("p", go, v(p.value), 1)) : C("", !0)
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
const fo = R(mo, [["__scopeId", "data-v-48785db8"]]),
  vo = O({
    name: "WyToolTip",
    inheritAttrs: !1,
    __name: "index",
    props: {
      text: { default: "" },
      multipleJudgments: { type: Boolean, default: !1 }
    },
    setup(t) {
      const e = t,
        c = I(null),
        l = I(!0),
        _ = I(!1);
      function p() {
        _.value ||
          e.multipleJudgments ||
          Re(() => {
            const u = c.value;
            (u == null ? void 0 : u.scrollWidth) >
            (u == null ? void 0 : u.clientWidth)
              ? (l.value = !1)
              : (l.value = !0),
              (_.value = !0);
          });
      }
      return (u, h) => {
        const f = y("el-tooltip");
        return (
          n(),
          w(
            f,
            { placement: "top", offset: -10, disabled: l.value },
            {
              content: s(() => [
                ve(u.$slots, "content", {}, () => [$(v(e.text), 1)], !0)
              ]),
              default: s(() => [
                i(
                  "span",
                  Oe(
                    {
                      ref_key: "textRef",
                      ref: c,
                      onMouseover: p,
                      class: "tool-tip-text"
                    },
                    u.$attrs
                  ),
                  [ve(u.$slots, "default", {}, () => [$(v(e.text), 1)], !0)],
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
const Me = R(vo, [["__scopeId", "data-v-fb5b74d4"]]),
  ue = "WYJS",
  yo = O({
    name: "Logo",
    __name: "Logo",
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
      return (l, _) => {
        const p = se,
          u = y("router-link"),
          h = Me;
        return (
          n(),
          d(
            "div",
            { class: J(["sidebar-logo-box", { collapse: e.collapse }]) },
            [
              e.collapse
                ? (n(),
                  w(
                    u,
                    { key: 0, title: ue, class: "sidebar-logo-link", to: "/" },
                    {
                      default: s(() => [
                        o(p, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        })
                      ]),
                      _: 1
                    }
                  ))
                : (n(),
                  w(
                    u,
                    { key: 1, title: ue, class: "sidebar-logo-link", to: "/" },
                    {
                      default: s(() => [
                        o(p, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        }),
                        o(h, { text: ue, style: c, multipleJudgments: "" })
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
const wo = R(yo, [["__scopeId", "data-v-eee1217c"]]),
  bo = { key: 0, class: "sub-menu-icon" },
  ko = { class: "menu-text-box" },
  $o = { key: 0, class: "sub-menu-icon" },
  So = O({
    name: "SideBarItem",
    __name: "SideBarItem",
    props: { item: { type: Object } },
    setup(t) {
      const e = t,
        c = D(() => {
          const l = { display: "flex", alignItems: "center" };
          return e.item.parentName && (l["font-size"] = "12px"), l;
        });
      return (l, _) => {
        const p = pe,
          u = Me,
          h = y("el-menu-item"),
          f = y("side-bar-item", !0),
          S = y("el-sub-menu");
        return !e.item.children || e.item.children.length == 0
          ? (n(),
            w(
              h,
              { key: 0, index: e.item.path, style: Z(c.value) },
              {
                title: s(() => [
                  i("div", ko, [
                    o(u, null, {
                      content: s(() => [$(v(l.$t(e.item.meta.title)), 1)]),
                      default: s(() => [
                        $(" " + v(l.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: s(() => {
                  var m, x;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (n(),
                        d("div", bo, [
                          o(
                            p,
                            {
                              icon: (x = e.item.meta) == null ? void 0 : x.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : C("", !0)
                  ];
                }),
                _: 1
              },
              8,
              ["index", "style"]
            ))
          : (n(),
            w(
              S,
              { key: 1, index: e.item.path, "popper-class": "side-bar-popper" },
              {
                title: s(() => {
                  var m, x;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (n(),
                        d("div", $o, [
                          o(
                            p,
                            {
                              icon: (x = e.item.meta) == null ? void 0 : x.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : C("", !0),
                    o(u, null, {
                      content: s(() => [$(v(l.$t(e.item.meta.title)), 1)]),
                      default: s(() => [
                        $(" " + v(l.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }),
                default: s(() => [
                  (n(!0),
                  d(
                    j,
                    null,
                    E(
                      e.item.children,
                      m => (
                        n(), w(f, { key: m.path, item: m }, null, 8, ["item"])
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
const xo = R(So, [["__scopeId", "data-v-cd2f06cd"]]),
  Co = { class: "side-bar" },
  To = { class: "side-bar-top" },
  Io = { class: "side-bar-middle" },
  Lo = { key: 0, class: "side-bar-bottom" },
  Mo = O({
    name: "SideBar",
    __name: "SideBar",
    setup(t) {
      const e = oe(),
        { openBtnPosition: c } = ae(),
        { isCollapse: l, toggleSideBar: _ } = he(),
        p = u => {};
      return (u, h) => {
        const f = y("el-menu"),
          S = y("el-scrollbar");
        return (
          n(),
          d("div", Co, [
            i("div", To, [o(wo, { collapse: a(l) }, null, 8, ["collapse"])]),
            i("div", Io, [
              o(S, null, {
                default: s(() => [
                  o(
                    f,
                    {
                      router: "",
                      "unique-opened": "",
                      mode: "vertical",
                      class: "outer-most",
                      collapse: a(l),
                      "default-active": a(e).path,
                      "collapse-transition": !1,
                      onSelect: h[0] || (h[0] = m => p(m))
                    },
                    {
                      default: s(() => [
                        (n(!0),
                        d(
                          j,
                          null,
                          E(
                            a(Ee),
                            m => (
                              n(),
                              w(xo, { key: m.path, item: m }, null, 8, ["item"])
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
            a(c) === "bottom"
              ? (n(),
                d("div", Lo, [
                  o(Le, { collapse: a(l), onToggleClick: a(_) }, null, 8, [
                    "collapse",
                    "onToggleClick"
                  ])
                ]))
              : C("", !0)
          ])
        );
      };
    }
  });
const Bo = R(Mo, [["__scopeId", "data-v-8455ef67"]]),
  Ho = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  zo = i(
    "path",
    { fill: "currentColor", d: "M384 192v640l384-320.064z" },
    null,
    -1
  ),
  Do = [zo];
function Oo(t, e) {
  return n(), d("svg", Ho, Do);
}
const Ro = { name: "ep-caret-right", render: Oo },
  Po = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Wo = i(
    "path",
    {
      fill: "currentColor",
      d: "M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
    },
    null,
    -1
  ),
  Vo = [Wo];
function Ao(t, e) {
  return n(), d("svg", Po, Vo);
}
const Fo = { name: "ep-close", render: Ao },
  No = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  qo = i(
    "path",
    { fill: "currentColor", d: "M672 192L288 511.936L672 832z" },
    null,
    -1
  ),
  jo = [qo];
function Eo(t, e) {
  return n(), d("svg", No, jo);
}
const Yo = { name: "ep-caret-left", render: Eo },
  Jo = t => (Ae("data-v-efd1e521"), (t = t()), Fe(), t),
  Ko = { class: "header-tag-main" },
  Go = { class: "tag-box-left" },
  Uo = { class: "tag-box", ref: "tag-box" },
  Xo = ["onMouseenter", "onMouseleave"],
  Zo = { class: "tag-item-box" },
  Qo = Jo(() => i("div", { class: "tag-process" }, null, -1)),
  en = { class: "tag-box-right" },
  tn = O({
    name: "Tag",
    __name: "Tag",
    setup(t) {
      const e = Ce(),
        c = D(() => [
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
        _ = Se(),
        p = D(() => l.fullPath),
        u = function (r) {
          e.removeRouteHistory(r),
            p.value == r && _.push(c.value[c.value.length - 1].path);
        },
        h = Ve(),
        f = function (r) {
          const g = h.refs["tag-item" + r][0];
          g &&
            !we(g, "tag-active") &&
            (be(g, "tag-move-in"), ke(g, "tag-move-out"));
        },
        S = function (r) {
          const g = h.refs["tag-item" + r][0];
          g &&
            !we(g, "tag-active") &&
            (be(g, "tag-move-out"), ke(g, "tag-move-in"));
        },
        m = I(0),
        x = function (r) {
          const g = h.refs["tag-box"],
            P = h.refs.tags.$el,
            b = g.offsetWidth,
            M = P.offsetWidth;
          if (!(b > M + 16 && (r < 0 || m.value >= 0)))
            if (r > 0) {
              const V = Math.abs(m.value);
              m.value += V > r ? r : V;
            } else {
              const V = b - m.value - M - 16;
              m.value += V > r ? V : r;
            }
        },
        L = xe([
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
        K = D(() => L.filter(r => r.show)),
        H = function (r, g, P) {
          if (P) {
            h.refs["tag-dropdown"].forEach(M => {
              M.id !== r && M.handleClose();
            });
            const b = c.value.length;
            (L[1].show = g !== 0),
              (L[2].show = !(g === 0 || g === 1)),
              (L[3].show = g !== b - 1),
              (L[4].show = !(b < 3)),
              (L[5].show = !(b < 3));
          }
        },
        N = function (r, g) {
          new Map([
            ["refresh", G],
            ["closeCurrentTag", u],
            ["closeLeftTag", U],
            ["closeRightTag", q],
            ["closeOtherTag", T],
            ["closeAllTag", k]
          ]).get(r)(g);
        };
      function G(r) {
        const { fullPath: g, query: P } = a(l);
        e.clearKeepAliveCache(r),
          _.replace({ path: "/redirect" + g, query: P });
      }
      function U(r) {
        e.removeRouteHistoryLeft(r);
      }
      function q(r) {
        e.removeRouteHistoryRight(r);
      }
      function T(r) {
        e.removeRouteHistoryOther(r);
      }
      function k() {
        e.removeRouteHistoryAll();
      }
      return (r, g) => {
        const P = Yo,
          b = y("router-link"),
          M = pe,
          V = y("el-dropdown-item"),
          Q = y("el-dropdown-menu"),
          le = y("el-dropdown"),
          ce = Fo,
          W = Ro;
        return (
          n(),
          d("div", Ko, [
            i("div", Go, [
              o(P, {
                class: "left-btn-icon",
                onClick: g[0] || (g[0] = B => x(100))
              })
            ]),
            i(
              "div",
              Uo,
              [
                o(
                  Pe,
                  {
                    name: "tags",
                    class: "tags",
                    tag: "div",
                    ref: "tags",
                    style: Z({ transform: `translateX(${m.value}px)` })
                  },
                  {
                    default: s(() => [
                      (n(!0),
                      d(
                        j,
                        null,
                        E(c.value, (B, z) => {
                          var ge;
                          return (
                            n(),
                            d(
                              "div",
                              {
                                class: J([
                                  "tag-item",
                                  {
                                    "can-close-tag": !(
                                      (ge = B.meta) != null && ge.notCloseTag
                                    ),
                                    "tag-active": B.path === p.value
                                  }
                                ]),
                                key: B.path,
                                ref_for: !0,
                                ref: "tag-item" + z,
                                onMouseenter: A => f(z),
                                onMouseleave: A => S(z)
                              },
                              [
                                i("div", Zo, [
                                  (n(),
                                  w(
                                    le,
                                    {
                                      ref_for: !0,
                                      ref: "tag-dropdown",
                                      trigger: "contextmenu",
                                      placement: "bottom-start",
                                      id: B.path,
                                      key: "tag-dropdown-" + B.path,
                                      onVisibleChange: A => H(B.path, z, A)
                                    },
                                    {
                                      dropdown: s(() => [
                                        o(
                                          Q,
                                          null,
                                          {
                                            default: s(() => [
                                              (n(!0),
                                              d(
                                                j,
                                                null,
                                                E(
                                                  K.value,
                                                  A => (
                                                    n(),
                                                    w(
                                                      V,
                                                      {
                                                        key: A.id,
                                                        onClick: rn =>
                                                          N(A.id, B.path)
                                                      },
                                                      {
                                                        default: s(() => [
                                                          o(
                                                            M,
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
                                      default: s(() => [
                                        o(
                                          b,
                                          {
                                            to: B.path,
                                            class: J([
                                              "tag-name",
                                              { "first-tag": z == 0 }
                                            ])
                                          },
                                          {
                                            default: s(() => [
                                              $(v(r.$t(B.meta.title)), 1)
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
                                  z != 0
                                    ? (n(),
                                      w(
                                        ce,
                                        {
                                          key: 0,
                                          class: "close-btn",
                                          onClick: We(A => u(B.path), ["stop"])
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ))
                                    : C("", !0),
                                  Qo
                                ])
                              ],
                              42,
                              Xo
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
            i("div", en, [
              o(W, {
                class: "right-btn-icon",
                onClick: g[1] || (g[1] = B => x(-100))
              })
            ])
          ])
        );
      };
    }
  });
const on = R(tn, [["__scopeId", "data-v-efd1e521"]]);
function nn() {
  const t = oe(),
    { changeTitle: e } = Te(),
    { locale: c } = Ie();
  e(t.meta),
    $e(
      () => c.value,
      l => {
        e(t.meta);
      }
    );
}
const sn = { class: "main-wrapper" },
  an = { class: "app-mask" },
  ln = { key: 0, class: "header-wrapper" },
  cn = O({
    name: "Layout",
    __name: "Layout",
    setup(t) {
      nn();
      const { isCollapse: e } = he(),
        c = ae(),
        l = xe({
          appMaskShow: D(() => de().appMaskShow),
          showHeader: D(() => c.showHeader)
        }),
        _ = I({});
      Ne(je, _);
      function p(u) {
        _.value = u;
      }
      return (u, h) => {
        const f = qe("resize");
        return (
          n(),
          d(
            "div",
            {
              class: J(["app-wrapper", a(e) ? "hide-sidebar" : "open-sidebar"])
            },
            [
              i("div", sn, [
                i(
                  "div",
                  {
                    class: J([
                      "left-wrapper",
                      a(e) ? "collapse-left" : "open-left"
                    ])
                  },
                  [o(Bo)],
                  2
                ),
                i(
                  "div",
                  {
                    class: J([
                      "right-wrapper",
                      a(e) ? "open-right" : "collapse-right"
                    ])
                  },
                  [
                    te(i("div", an, null, 512), [[_e, l.appMaskShow]]),
                    l.showHeader
                      ? (n(), d("div", ln, [o(fo), o(on)]))
                      : C("", !0),
                    te(o(Xe, null, null, 512), [[f, p]])
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
const fn = R(cn, [["__scopeId", "data-v-81ea8e5f"]]);
export { fn as default };