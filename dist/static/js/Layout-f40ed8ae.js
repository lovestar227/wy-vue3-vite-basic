import {
  d as Te,
  f as v,
  v as S,
  x as V,
  y as Q,
  A as me,
  B as d,
  h as l,
  w as r,
  r as w,
  o,
  g as y,
  K as ie,
  C as n,
  D as re,
  F as f,
  G as Ie,
  H as P,
  u as he,
  I as J,
  J as K,
  L as x,
  O as Be,
  P as k,
  Q as E,
  R as B,
  S as Y,
  T as oe,
  U as _e,
  V as Le,
  W as Me,
  X as Re,
  j as fe,
  Y as Oe,
  Z as ze,
  _ as De,
  $ as He,
  a0 as Fe,
  a1 as Pe
} from "./.pnpm-4a45e2d5.js";
import { m as We } from "./index-bbfdc4c8.js";
import {
  g as N,
  s as H,
  r as ve,
  _ as I,
  a as ne,
  u as ye,
  m as Ne,
  $ as F
} from "./index-dbabfea5.js";
import { t as Ve, _ as Ae } from "./theme-85132a7f.js";
import { _ as se } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c29fe689.js";
import { u as ue, h as de, a as pe, r as ge } from "./user-e1c9ffd8.js";
import { _ as ae } from "./WyIconify.vue_vue_type_script_setup_true_lang-4d0913ae.js";
const j = Te({
    id: "setting",
    state: () => {
      var t, e, a, s, _;
      return {
        title: N().title,
        showHeader:
          ((t = H.getItem("setting")) == null ? void 0 : t.showHeader) ??
          N().showHeader,
        openBtnPosition:
          ((e = H.getItem("setting")) == null ? void 0 : e.openBtnPosition) ??
          N().openBtnPosition,
        sidebarIsOpen:
          ((a = H.getItem("setting")) == null ? void 0 : a.sidebarIsOpen) ??
          N().sidebarIsOpen,
        showScreenFull:
          ((s = H.getItem("setting")) == null ? void 0 : s.showScreenFull) ??
          N().showScreenFull,
        showDarkToogle:
          ((_ = H.getItem("setting")) == null ? void 0 : _.showScreenFull) ??
          N().showDarkToogle
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
        const e = H.getItem("setting") || {};
        Object.assign(e, t), H.setItem("setting", e);
      }
    }
  }),
  qe = { class: "main-view" },
  Ee = { key: 1, class: "fixed-page" },
  Je = v({ name: "MainView" }),
  Ke = v({
    ...Je,
    setup(t) {
      const e = ve(),
        a = S(() =>
          e.allAliveRoute.map(u => {
            var c;
            return (c = u.meta) == null ? void 0 : c.componentName;
          })
        ),
        s = V(null),
        _ = Q();
      return (
        me(
          () => _,
          (u, c) => {
            var g;
            s.value &&
              (g = u.meta) != null &&
              g.scrollTop &&
              s.value.setScrollTop(0);
          },
          { deep: !0 }
        ),
        (u, c) => {
          const g = w("el-backtop"),
            h = w("el-scrollbar"),
            C = w("router-view");
          return (
            o(),
            d("div", qe, [
              l(C, null, {
                default: r(({ Component: m, route: b }) => {
                  var T;
                  return [
                    (T = b.meta) != null && T.fixedPage
                      ? (o(),
                        d("div", Ee, [
                          (o(),
                          y(
                            ie,
                            { include: n(a) },
                            [
                              (o(),
                              y(re(m), {
                                key: b.fullPath,
                                class: "main-content"
                              }))
                            ],
                            1032,
                            ["include"]
                          ))
                        ]))
                      : (o(),
                        y(
                          h,
                          { key: 0, ref_key: "mainViewScrollBarRef", ref: s },
                          {
                            default: r(() => [
                              l(g, {
                                target: ".main-view .el-scrollbar__wrap",
                                "visibility-height": 50
                              }),
                              (o(),
                              y(
                                ie,
                                { include: n(a) },
                                [
                                  (o(),
                                  y(re(m), {
                                    key: b.fullPath,
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
const Xe = I(Ke, [["__scopeId", "data-v-0a570a8d"]]),
  Ze = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Ge = f(
    "path",
    {
      fill: "currentColor",
      d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    },
    null,
    -1
  ),
  Ue = f(
    "path",
    {
      fill: "currentColor",
      d: "m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    },
    null,
    -1
  ),
  Ye = [Ge, Ue];
function Qe(t, e) {
  return o(), d("svg", Ze, Ye);
}
const je = { name: "ep-back", render: Qe },
  et = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  tt = f(
    "path",
    {
      fill: "currentColor",
      d: "M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
    },
    null,
    -1
  ),
  ot = [tt];
function nt(t, e) {
  return o(), d("svg", et, ot);
}
const st = { name: "ep-check", render: nt };
function we() {
  const { locale: t, t: e } = Ie(),
    a = ne();
  function s() {
    a.setLocale("zh-CN"), (t.value = "zh-CN");
  }
  function _() {
    a.setLocale("en"), (t.value = "en");
  }
  return { t: e, locale: t, translateZh: s, translateEn: _ };
}
function le() {
  const t = j(),
    e = S(() => !t.getSidebarIsOpen);
  function a() {
    t.toggleSideBar();
  }
  return { isCollapse: e, toggleSideBar: a };
}
const at = v({ name: "OpenBtn" }),
  lt = v({
    ...at,
    props: { collapse: { type: Boolean } },
    emits: ["toggleClick"],
    setup(t, { emit: e }) {
      const a = t,
        s = () => {
          e("toggleClick");
        };
      return (_, u) => {
        const c = ae,
          g = w("el-tooltip");
        return (
          o(),
          d(
            "div",
            {
              class: P(["open-btn-box", t.collapse ? "open-btn-collapse" : ""])
            },
            [
              l(
                g,
                {
                  placement: "right",
                  effect: "dark",
                  content: a.collapse ? "点击展开" : "点击折叠"
                },
                {
                  default: r(() => [
                    l(
                      c,
                      {
                        icon: a.collapse ? "ep:expand" : "ep:fold",
                        class: "collapse-icon",
                        onClick: s
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
const be = I(lt, [["__scopeId", "data-v-c7ff46e4"]]),
  ct = { class: "header-breadcrumb" },
  it = ["onClick"],
  rt = { key: 1, class: "no-redirect" },
  _t = v({ name: "Breadcrumb" }),
  ut = v({
    ..._t,
    setup(t) {
      const e = he(),
        a = S(() => {
          var _, u;
          return (u = (_ = e.currentRoute.value) == null ? void 0 : _.meta) ==
            null
            ? void 0
            : u.parentRoute;
        }),
        s = _ => {
          if (_.redirect) {
            e.push(_.redirect);
            return;
          }
          e.push(_.path);
        };
      return (_, u) => {
        const c = w("el-breadcrumb-item"),
          g = w("el-breadcrumb");
        return (
          o(),
          d("div", ct, [
            l(
              g,
              { separator: "/" },
              {
                default: r(() => [
                  (o(!0),
                  d(
                    J,
                    null,
                    K(
                      n(a),
                      (h, C) => (
                        o(),
                        y(
                          c,
                          { key: h.path },
                          {
                            default: r(() => [
                              C != n(a).length - 1
                                ? (o(),
                                  d(
                                    "span",
                                    {
                                      key: 0,
                                      onClick: m => s(h),
                                      class: "can-redirect"
                                    },
                                    x(_.$t(h.title)),
                                    9,
                                    it
                                  ))
                                : (o(), d("span", rt, x(_.$t(h.title)), 1))
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
const dt = I(ut, [["__scopeId", "data-v-ece15a80"]]),
  pt = { class: "screen-full-box" },
  gt = v({ name: "ScreenFull" }),
  mt = v({
    ...gt,
    setup(t) {
      const { isFullscreen: e, toggle: a } = Be();
      return (s, _) => {
        const u = se;
        return (
          o(),
          d("div", pt, [
            l(
              u,
              {
                title: n(e)
                  ? s.$t("buttons.exitFullScreen")
                  : s.$t("buttons.fullScreen"),
                icon: n(e) ? "icon-quxiaoquanping" : "icon-quanping",
                onClick: n(a)
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
const ht = I(mt, [["__scopeId", "data-v-e3d9bfea"]]),
  ft = { class: "navbar" },
  vt = { class: "vertical-header-right" },
  yt = { class: "user-box" },
  wt = ["src"],
  bt = { key: 1 },
  $t = v({ name: "Navbar" }),
  kt = v({
    ...$t,
    setup(t) {
      const { logout: e } = ye(),
        { showScreenFull: a, showDarkToogle: s, openBtnPosition: _ } = j(),
        u = S(() => {
          var L;
          return (L = ne().signUser) == null ? void 0 : L.userName;
        }),
        c = S(() => (u.value ? { marginRight: "10px" } : "")),
        g = S(() => (L, A) => ({
          background: L === A ? Ve().themeColor.mainColor : "",
          color: L === A ? "#fff" : "#000"
        })),
        { locale: h, translateZh: C, translateEn: m } = we(),
        { isCollapse: b, toggleSideBar: T } = le(),
        ee = {
          display: "inline-flex",
          float: "left",
          width: "auto",
          height: "50px",
          "align-items": "center"
        };
      return (L, A) => {
        const X = se,
          Z = st,
          q = w("el-dropdown-item"),
          G = w("el-dropdown-menu"),
          U = w("el-dropdown"),
          i = Ae,
          p = je;
        return (
          o(),
          d("div", ft, [
            n(_) === "top"
              ? (o(),
                y(
                  be,
                  { key: 0, collapse: n(b), onToggleClick: n(T), style: ee },
                  null,
                  8,
                  ["collapse", "onToggleClick"]
                ))
              : k("", !0),
            l(dt),
            f("div", vt, [
              n(a) ? (o(), y(ht, { key: 0 })) : k("", !0),
              l(
                U,
                { trigger: "click", class: "toogle-locale" },
                {
                  dropdown: r(() => [
                    l(
                      G,
                      { class: "translate" },
                      {
                        default: r(() => [
                          l(
                            q,
                            {
                              style: E(n(g)(n(h), "zh-CN")),
                              class: "transition-dropdown-item",
                              onClick: n(C)
                            },
                            {
                              default: r(() => [
                                B(" 简体中文 "),
                                Y(
                                  l(
                                    Z,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[oe, n(h) === "zh-CN"]]
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["style", "onClick"]
                          ),
                          l(
                            q,
                            {
                              style: E(n(g)(n(h), "en")),
                              class: "transition-dropdown-item",
                              onClick: n(m)
                            },
                            {
                              default: r(() => [
                                B(" English "),
                                Y(
                                  l(
                                    Z,
                                    { style: { "margin-left": "10px" } },
                                    null,
                                    512
                                  ),
                                  [[oe, n(h) === "en"]]
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
                  default: r(() => [
                    f("span", null, [
                      n(h) === "en"
                        ? (o(),
                          y(X, {
                            key: 0,
                            icon: "icon-zhongyingwenqiehuan-yingwen",
                            class: "toogle-locale-icon"
                          }))
                        : k("", !0),
                      n(h) === "zh-CN"
                        ? (o(),
                          y(X, {
                            key: 1,
                            icon: "icon-zhongyingwenqiehuan-zhongwen",
                            class: "toogle-locale-icon"
                          }))
                        : k("", !0)
                    ])
                  ]),
                  _: 1
                }
              ),
              n(s) ? (o(), y(i, { key: 1 })) : k("", !0),
              l(
                U,
                { trigger: "click" },
                {
                  dropdown: r(() => [
                    l(
                      G,
                      { class: "logout" },
                      {
                        default: r(() => [
                          l(
                            q,
                            { onClick: n(e) },
                            {
                              default: r(() => [
                                l(p, { style: { "margin-right": "5px" } }),
                                B(" " + x(L.$t("buttons.loginOut")), 1)
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
                  default: r(() => [
                    f("span", yt, [
                      n(ue)
                        ? (o(),
                          d(
                            "img",
                            { key: 0, src: n(ue), style: E(n(c)) },
                            null,
                            12,
                            wt
                          ))
                        : k("", !0),
                      n(u) ? (o(), d("p", bt, x(n(u)), 1)) : k("", !0)
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
const xt = I(kt, [["__scopeId", "data-v-285397a3"]]),
  St = v({ name: "WyToolTip", inheritAttrs: !1 }),
  Ct = v({
    ...St,
    props: {
      text: { default: "" },
      multipleJudgments: { type: Boolean, default: !1 }
    },
    setup(t) {
      const e = t,
        a = V(null),
        s = V(!0),
        _ = V(!1);
      function u() {
        _.value ||
          e.multipleJudgments ||
          Me(() => {
            const c = a.value;
            (c == null ? void 0 : c.scrollWidth) >
            (c == null ? void 0 : c.clientWidth)
              ? (s.value = !1)
              : (s.value = !0),
              (_.value = !0);
          });
      }
      return (c, g) => {
        const h = w("el-tooltip");
        return (
          o(),
          y(
            h,
            { placement: "top", offset: -10, disabled: s.value },
            {
              content: r(() => [
                _e(c.$slots, "content", {}, () => [B(x(e.text), 1)], !0)
              ]),
              default: r(() => [
                f(
                  "span",
                  Le(
                    {
                      ref_key: "textRef",
                      ref: a,
                      onMouseover: u,
                      class: "tool-tip-text"
                    },
                    c.$attrs
                  ),
                  [_e(c.$slots, "default", {}, () => [B(x(e.text), 1)], !0)],
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
const $e = I(Ct, [["__scopeId", "data-v-efdc7c34"]]),
  te = "WYJS",
  Tt = v({ name: "Logo" }),
  It = v({
    ...Tt,
    props: { collapse: Boolean },
    setup(t) {
      const e = t,
        a = {
          "margin-left": "10px",
          color: "#fff",
          "font-weight": 600,
          "font-size": "20px",
          flex: 1
        };
      return (s, _) => {
        const u = se,
          c = w("router-link"),
          g = $e;
        return (
          o(),
          d(
            "div",
            { class: P(["sidebar-logo-box", { collapse: e.collapse }]) },
            [
              e.collapse
                ? (o(),
                  y(
                    c,
                    { key: 0, title: te, class: "sidebar-logo-link", to: "/" },
                    {
                      default: r(() => [
                        l(u, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        })
                      ]),
                      _: 1
                    }
                  ))
                : (o(),
                  y(
                    c,
                    { key: 1, title: te, class: "sidebar-logo-link", to: "/" },
                    {
                      default: r(() => [
                        l(u, {
                          icon: "icon-food-cookie",
                          svg: "",
                          style: { width: "35px", height: "35px" }
                        }),
                        l(g, { text: te, style: a, multipleJudgments: "" })
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
const Bt = I(It, [["__scopeId", "data-v-36d560bd"]]),
  Lt = { key: 0, class: "sub-menu-icon" },
  Mt = { class: "menu-text-box" },
  Rt = { key: 0, class: "sub-menu-icon" },
  Ot = v({ name: "SideBarItem" }),
  zt = v({
    ...Ot,
    props: { item: { type: Object } },
    setup(t) {
      const e = t,
        a = S(() => {
          const s = { display: "flex", alignItems: "center" };
          return e.item.parentName && (s["font-size"] = "12px"), s;
        });
      return (s, _) => {
        const u = ae,
          c = $e,
          g = w("el-menu-item"),
          h = w("side-bar-item", !0),
          C = w("el-sub-menu");
        return !e.item.children || e.item.children.length == 0
          ? (o(),
            y(
              g,
              { key: 0, index: e.item.path, style: E(n(a)) },
              {
                title: r(() => [
                  f("div", Mt, [
                    l(c, null, {
                      content: r(() => [B(x(s.$t(e.item.meta.title)), 1)]),
                      default: r(() => [
                        B(" " + x(s.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: r(() => {
                  var m, b;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (o(),
                        d("div", Lt, [
                          l(
                            u,
                            {
                              icon: (b = e.item.meta) == null ? void 0 : b.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : k("", !0)
                  ];
                }),
                _: 1
              },
              8,
              ["index", "style"]
            ))
          : (o(),
            y(
              C,
              { key: 1, index: e.item.path, "popper-class": "side-bar-popper" },
              {
                title: r(() => {
                  var m, b;
                  return [
                    (m = e.item.meta) != null && m.icon
                      ? (o(),
                        d("div", Rt, [
                          l(
                            u,
                            {
                              icon: (b = e.item.meta) == null ? void 0 : b.icon
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]))
                      : k("", !0),
                    l(c, null, {
                      content: r(() => [B(x(s.$t(e.item.meta.title)), 1)]),
                      default: r(() => [
                        B(" " + x(s.$t(e.item.meta.title)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }),
                default: r(() => [
                  (o(!0),
                  d(
                    J,
                    null,
                    K(
                      e.item.children,
                      m => (
                        o(), y(h, { key: m.path, item: m }, null, 8, ["item"])
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
const Dt = I(zt, [["__scopeId", "data-v-29b6a693"]]),
  Ht = { class: "side-bar" },
  Ft = { class: "side-bar-top" },
  Pt = { class: "side-bar-middle" },
  Wt = { key: 0, class: "side-bar-bottom" },
  Nt = v({ name: "SideBar" }),
  Vt = v({
    ...Nt,
    setup(t) {
      const e = Q(),
        { openBtnPosition: a } = j(),
        { isCollapse: s, toggleSideBar: _ } = le(),
        u = c => {};
      return (c, g) => {
        const h = w("el-menu"),
          C = w("el-scrollbar");
        return (
          o(),
          d("div", Ht, [
            f("div", Ft, [l(Bt, { collapse: n(s) }, null, 8, ["collapse"])]),
            f("div", Pt, [
              l(C, null, {
                default: r(() => [
                  l(
                    h,
                    {
                      router: "",
                      "unique-opened": "",
                      mode: "vertical",
                      class: "outer-most",
                      collapse: n(s),
                      "default-active": n(e).path,
                      "collapse-transition": !1,
                      onSelect: g[0] || (g[0] = m => u(m))
                    },
                    {
                      default: r(() => [
                        (o(!0),
                        d(
                          J,
                          null,
                          K(
                            n(Ne),
                            m => (
                              o(),
                              y(Dt, { key: m.path, item: m }, null, 8, ["item"])
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
            n(a) === "bottom"
              ? (o(),
                d("div", Wt, [
                  l(be, { collapse: n(s), onToggleClick: n(_) }, null, 8, [
                    "collapse",
                    "onToggleClick"
                  ])
                ]))
              : k("", !0)
          ])
        );
      };
    }
  });
const At = I(Vt, [["__scopeId", "data-v-737c92d7"]]),
  qt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Et = f(
    "path",
    { fill: "currentColor", d: "M384 192v640l384-320.064z" },
    null,
    -1
  ),
  Jt = [Et];
function Kt(t, e) {
  return o(), d("svg", qt, Jt);
}
const Xt = { name: "ep-caret-right", render: Kt },
  Zt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  Gt = f(
    "path",
    {
      fill: "currentColor",
      d: "M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
    },
    null,
    -1
  ),
  Ut = [Gt];
function Yt(t, e) {
  return o(), d("svg", Zt, Ut);
}
const Qt = { name: "ep-close", render: Yt },
  jt = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  eo = f(
    "path",
    { fill: "currentColor", d: "M672 192L288 511.936L672 832z" },
    null,
    -1
  ),
  to = [eo];
function oo(t, e) {
  return o(), d("svg", jt, to);
}
const no = { name: "ep-caret-left", render: oo },
  so = t => (De("data-v-d832f0f0"), (t = t()), He(), t),
  ao = { class: "header-tag-main" },
  lo = { class: "tag-box-left" },
  co = { class: "tag-box", ref: "tag-box" },
  io = ["onMouseenter", "onMouseleave"],
  ro = { class: "tag-item-box" },
  _o = so(() => f("div", { class: "tag-process" }, null, -1)),
  uo = { class: "tag-box-right" },
  po = v({ name: "Tag" }),
  go = v({
    ...po,
    setup(t) {
      const e = ve(),
        a = S(() => [
          {
            path: "/home",
            name: "HomePage",
            meta: {
              icon: "home-filled",
              title: F("menus.homePage"),
              notCloseTag: !0
            }
          },
          ...e.routeHistroy.filter(i => i.path !== "/home")
        ]),
        s = Q(),
        _ = he(),
        u = S(() => s.fullPath),
        c = function (i) {
          e.removeRouteHistory(i),
            u.value == i && _.push(a.value[a.value.length - 1].path);
        },
        g = Re(),
        h = function (i) {
          const p = g.refs["tag-item" + i][0];
          p &&
            !de(p, "tag-active") &&
            (pe(p, "tag-move-in"), ge(p, "tag-move-out"));
        },
        C = function (i) {
          const p = g.refs["tag-item" + i][0];
          p &&
            !de(p, "tag-active") &&
            (pe(p, "tag-move-out"), ge(p, "tag-move-in"));
        },
        m = V(0),
        b = function (i) {
          const p = g.refs["tag-box"],
            R = g.refs.tags.$el,
            O = p.offsetWidth,
            z = R.offsetWidth;
          if (!(O > z + 16 && (i < 0 || m.value >= 0)))
            if (i > 0) {
              const D = Math.abs(m.value);
              m.value += D > i ? i : D;
            } else {
              const D = O - m.value - z - 16;
              m.value += D > i ? D : i;
            }
        },
        T = fe([
          {
            id: "refresh",
            icon: "ep:refresh",
            name: F("buttons.refresh"),
            show: !0
          },
          {
            id: "closeCurrentTag",
            icon: "ep:close",
            name: F("buttons.closeCurrentTag"),
            show: !0
          },
          {
            id: "closeLeftTag",
            icon: "fa:arrow-circle-o-left",
            name: F("buttons.closeLeftTag"),
            show: !0
          },
          {
            id: "closeRightTag",
            icon: "fa:arrow-circle-o-right",
            name: F("buttons.closeRightTag"),
            show: !0
          },
          {
            id: "closeOtherTag",
            icon: "fa:exclamation-triangle",
            name: F("buttons.closeOtherTag"),
            show: !0
          },
          {
            id: "closeAllTag",
            icon: "ep:warning-filled",
            name: F("buttons.closeAllTag"),
            show: !0
          }
        ]),
        ee = S(() => T.filter(i => i.show)),
        L = function (i, p, R) {
          if (R) {
            g.refs["tag-dropdown"].forEach(z => {
              z.id !== i && z.handleClose();
            });
            const O = a.value.length;
            (T[1].show = p !== 0),
              (T[2].show = !(p === 0 || p === 1)),
              (T[3].show = p !== O - 1),
              (T[4].show = !(O < 3)),
              (T[5].show = !(O < 3));
          }
        },
        A = function (i, p) {
          new Map([
            ["refresh", X],
            ["closeCurrentTag", c],
            ["closeLeftTag", Z],
            ["closeRightTag", q],
            ["closeOtherTag", G],
            ["closeAllTag", U]
          ]).get(i)(p);
        };
      function X(i) {
        const { fullPath: p, query: R } = n(s);
        e.clearKeepAliveCache(i),
          _.replace({ path: "/redirect" + p, query: R });
      }
      function Z(i) {
        e.removeRouteHistoryLeft(i);
      }
      function q(i) {
        e.removeRouteHistoryRight(i);
      }
      function G(i) {
        e.removeRouteHistoryOther(i);
      }
      function U() {
        e.removeRouteHistoryAll();
      }
      return (i, p) => {
        const R = no,
          O = w("router-link"),
          z = ae,
          D = w("el-dropdown-item"),
          ke = w("el-dropdown-menu"),
          xe = w("el-dropdown"),
          Se = Qt,
          Ce = Xt;
        return (
          o(),
          d("div", ao, [
            f("div", lo, [
              l(R, {
                class: "left-btn-icon",
                onClick: p[0] || (p[0] = $ => b(100))
              })
            ]),
            f(
              "div",
              co,
              [
                l(
                  Oe,
                  {
                    name: "tags",
                    class: "tags",
                    tag: "div",
                    ref: "tags",
                    style: E({ transform: `translateX(${m.value}px)` })
                  },
                  {
                    default: r(() => [
                      (o(!0),
                      d(
                        J,
                        null,
                        K(n(a), ($, W) => {
                          var ce;
                          return (
                            o(),
                            d(
                              "div",
                              {
                                class: P([
                                  "tag-item",
                                  {
                                    "can-close-tag": !(
                                      (ce = $.meta) != null && ce.notCloseTag
                                    ),
                                    "tag-active": $.path === n(u)
                                  }
                                ]),
                                key: $.path,
                                ref_for: !0,
                                ref: "tag-item" + W,
                                onMouseenter: M => h(W),
                                onMouseleave: M => C(W)
                              },
                              [
                                f("div", ro, [
                                  (o(),
                                  y(
                                    xe,
                                    {
                                      ref_for: !0,
                                      ref: "tag-dropdown",
                                      trigger: "contextmenu",
                                      placement: "bottom-start",
                                      id: $.path,
                                      key: "tag-dropdown-" + $.path,
                                      onVisibleChange: M => L($.path, W, M)
                                    },
                                    {
                                      dropdown: r(() => [
                                        l(
                                          ke,
                                          null,
                                          {
                                            default: r(() => [
                                              (o(!0),
                                              d(
                                                J,
                                                null,
                                                K(
                                                  n(ee),
                                                  M => (
                                                    o(),
                                                    y(
                                                      D,
                                                      {
                                                        key: M.id,
                                                        onClick: $o =>
                                                          A(M.id, $.path)
                                                      },
                                                      {
                                                        default: r(() => [
                                                          l(
                                                            z,
                                                            {
                                                              icon: M.icon,
                                                              class:
                                                                "dropdown-item-icon"
                                                            },
                                                            null,
                                                            8,
                                                            ["icon"]
                                                          ),
                                                          f(
                                                            "span",
                                                            null,
                                                            x(i.$t(M.name)),
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
                                      default: r(() => [
                                        l(
                                          O,
                                          {
                                            to: $.path,
                                            class: P([
                                              "tag-name",
                                              { "first-tag": W == 0 }
                                            ])
                                          },
                                          {
                                            default: r(() => [
                                              B(x(i.$t($.meta.title)), 1)
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
                                  W != 0
                                    ? (o(),
                                      y(
                                        Se,
                                        {
                                          key: 0,
                                          class: "close-btn",
                                          onClick: ze(M => c($.path), ["stop"])
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ))
                                    : k("", !0),
                                  _o
                                ])
                              ],
                              42,
                              io
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
            f("div", uo, [
              l(Ce, {
                class: "right-btn-icon",
                onClick: p[1] || (p[1] = $ => b(-100))
              })
            ])
          ])
        );
      };
    }
  });
const mo = I(go, [["__scopeId", "data-v-d832f0f0"]]);
function ho() {
  const t = Q(),
    { changeTitle: e } = ye(),
    { locale: a } = we();
  e(t.meta),
    me(
      () => a.value,
      s => {
        e(t.meta);
      }
    );
}
const fo = { class: "main-wrapper" },
  vo = { class: "app-mask" },
  yo = { key: 0, class: "header-wrapper" },
  wo = v({ name: "Layout" }),
  bo = v({
    ...wo,
    setup(t) {
      ho();
      const { isCollapse: e } = le(),
        a = j(),
        s = fe({
          appMaskShow: S(() => ne().appMaskShow),
          showHeader: S(() => a.showHeader)
        }),
        _ = V({});
      Pe(We, _);
      function u(c) {
        _.value = c;
      }
      return (c, g) => {
        const h = Fe("resize");
        return (
          o(),
          d(
            "div",
            {
              class: P(["app-wrapper", n(e) ? "hide-sidebar" : "open-sidebar"])
            },
            [
              f("div", fo, [
                f(
                  "div",
                  {
                    class: P([
                      "left-wrapper",
                      n(e) ? "collapse-left" : "open-left"
                    ])
                  },
                  [l(At)],
                  2
                ),
                f(
                  "div",
                  {
                    class: P([
                      "right-wrapper",
                      n(e) ? "open-right" : "collapse-right"
                    ])
                  },
                  [
                    Y(f("div", vo, null, 512), [[oe, s.appMaskShow]]),
                    s.showHeader
                      ? (o(), d("div", yo, [l(xt), l(mo)]))
                      : k("", !0),
                    Y(l(Xe, null, null, 512), [[h, u]])
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
const Lo = I(bo, [["__scopeId", "data-v-cf13bae1"]]);
export { Lo as default };
