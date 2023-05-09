import {
  f as l,
  x as $,
  ap as N,
  aq as P,
  o as c,
  B as _,
  I as x,
  J as F,
  C as h,
  H as L,
  S as b,
  T as S,
  F as n,
  U as W,
  h as f,
  L as I,
  w as g,
  R as V,
  r as k,
  a0 as R,
  _ as O,
  $ as T,
  Q as D,
  P as U,
  X as H,
  am as M,
  g as z,
  D as q
} from "./.pnpm-4a45e2d5.js";
import { _ as m } from "./index-8c990705.js";
import { _ as E } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c29fe689.js";
import { u as G, h as J, a as Q } from "./user-e1c9ffd8.js";
const X = { class: "wy-fan" },
  j = { class: "hide-fan" },
  K = { class: "open-fan" },
  Y = l({ name: "WyFan" }),
  Z = l({
    ...Y,
    props: { list: { default: () => [] }, defaultActive: { default: -1 } },
    setup(s) {
      const e = s,
        a = $([]),
        o = $(-1),
        r = N(i => {
          o.value > -1 && (a.value[o.value].open = !1),
            (a.value[i].open = !0),
            (o.value = i);
        }, 500),
        d = () => {
          o.value > -1 && (a.value[o.value].open = !1), (o.value = -1);
        };
      return (
        P(() => {
          (a.value = e.list ? e.list : []),
            e.defaultActive > -1 &&
              e.defaultActive < a.value.length &&
              ((a.value[e.defaultActive].open = !0),
              (o.value = e.defaultActive));
        }),
        (i, u) => (
          c(),
          _("div", X, [
            (c(!0),
            _(
              x,
              null,
              F(
                h(a),
                (t, p) => (
                  c(),
                  _(
                    "div",
                    {
                      class: L([
                        "wy-fan-item",
                        [t.open ? "wy-fan-item-active" : "wy-fan-item-hide"]
                      ]),
                      key: t.id
                    },
                    [
                      b(
                        n(
                          "div",
                          j,
                          [
                            W(
                              i.$slots,
                              "hide-fan",
                              {
                                item: t,
                                index: p,
                                activeFanIndex: h(o),
                                openFan: h(r)
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[S, !t.open]]
                      ),
                      b(
                        n(
                          "div",
                          K,
                          [
                            W(
                              i.$slots,
                              "open-fan",
                              {
                                item: t,
                                index: p,
                                activeFanIndex: h(o),
                                closeFan: d
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[S, t.open]]
                      )
                    ],
                    2
                  )
                )
              ),
              128
            ))
          ])
        )
      );
    }
  });
const ee = m(Z, [["__scopeId", "data-v-778489db"]]),
  ne = { class: "home-imagine" },
  te = l({ name: "Imagine" }),
  oe = l({
    ...te,
    setup(s) {
      return (e, a) => (c(), _("div", ne, "建造中"));
    }
  });
const se = m(oe, [["__scopeId", "data-v-da643ac0"]]),
  ae = s => (O("data-v-c8dd2b1a"), (s = s()), T(), s),
  ce = { class: "home-origin" },
  ie = { class: "open-fan-header" },
  _e = { class: "open-fan-header-left" },
  le = { class: "open-fan-header-right" },
  de = ae(() => n("div", { class: "open-fan-body" }, "建造中", -1)),
  re = { class: "open-fan-footer" },
  ue = { class: "poem-box" },
  pe = l({ name: "Origin" }),
  fe = l({
    ...pe,
    props: {
      index: null,
      item: null,
      activeFanIndex: null,
      closeFan: { type: Function },
      showFanBagImage: { type: Function }
    },
    setup(s) {
      const e = s;
      return (a, o) => {
        const r = E,
          d = k("el-button"),
          i = R("motion-fade");
        return (
          c(),
          _("div", ce, [
            n("header", ie, [
              n("div", _e, [
                b(
                  f(
                    r,
                    {
                      icon: e.item.icon,
                      svg: "",
                      class: "open-fan-header-icon"
                    },
                    null,
                    8,
                    ["icon"]
                  ),
                  [[i]]
                ),
                n("span", null, I(e.item.title), 1)
              ]),
              n("div", le, [
                f(
                  d,
                  {
                    class: "right-close-btn",
                    onClick:
                      o[0] ||
                      (o[0] = () => {
                        e.showFanBagImage(e.index, e.activeFanIndex),
                          e.closeFan();
                      })
                  },
                  { default: g(() => [V("关闭")]), _: 1 }
                )
              ])
            ]),
            de,
            n("footer", re, [
              n("div", ue, [
                (c(!0),
                _(
                  x,
                  null,
                  F(
                    e.item.poems,
                    (u, t) => (
                      c(), _("span", { class: "poem-item", key: t }, I(u), 1)
                    )
                  ),
                  128
                ))
              ])
            ])
          ])
        );
      };
    }
  });
const me = m(fe, [["__scopeId", "data-v-c8dd2b1a"]]),
  ve = { class: "home-run" },
  he = l({ name: "Run" }),
  ge = l({
    ...he,
    setup(s) {
      return (e, a) => (c(), _("div", ve, "建造中"));
    }
  });
const ye = m(ge, [["__scopeId", "data-v-a84404b6"]]),
  Ie = { class: "home-study" },
  $e = l({ name: "Study" }),
  xe = l({
    ...$e,
    setup(s) {
      return (e, a) => (c(), _("div", Ie, "建造中"));
    }
  });
const Fe = m(xe, [["__scopeId", "data-v-579823ad"]]),
  be = s => (O("data-v-f1962e6e"), (s = s()), T(), s),
  ke = { class: "home-updateLog" },
  Ae = { class: "log-list" },
  we = { class: "version" },
  Ce = be(() => n("br", null, null, -1)),
  Be = l({ name: "UpdateLog" }),
  De = l({
    ...Be,
    setup(s) {
      const e = [
          {
            version: "V1.0.1",
            items: [
              "1.chore: 修改base路径，静态网站部署gitee",
              "2.feat: 首页增加更新日志",
              "3.fix: 修改默认主题色",
              "3.fix: 预设颜色选择",
              "4.feat: 还原默认主题色"
            ]
          },
          {
            version: "V1.0.0",
            items: [
              "1. 大版本1.0.0发布",
              "2. 基础框架搭建完成",
              "3. 集成vue-i18n、Element Plus、Echarts等",
              "4. 图标使用iconfont、iconify",
              "5. WyWitch 开关组件",
              "6. WyDarkToogle 明暗模式切换开关",
              "7. WyToolTip 自动判断文本是否溢出显示 tooltip 组件",
              "8. WyPopoverList 悬浮列表组件",
              "9. WyFan 扇子组件",
              "10. WyIconFont iconfont组件",
              "11. WyIconify iconify组件",
              "12. 按钮自动loading Hook",
              "13. 主题色功能",
              "14. 404页面",
              "15. 500页面"
            ]
          }
        ],
        a = [
          "#C71A54",
          "#F9AA17",
          "#04E850",
          "#31DAAD",
          "#31BBDA",
          "#317ADA",
          "#3137DA",
          "#7231DA",
          "#C71AAA"
        ],
        o = d => ({ "background-color": a[d % 9] }),
        r = d => ({ color: a[d % 9] });
      return (d, i) => {
        const u = k("el-scrollbar");
        return (
          c(),
          _("div", ke, [
            n("div", Ae, [
              f(u, null, {
                default: g(() => [
                  (c(),
                  _(
                    x,
                    null,
                    F(e, (t, p) =>
                      n("div", { class: "log-item", key: t.version }, [
                        n(
                          "div",
                          { class: "log-item-circle", style: D(o(p)) },
                          null,
                          4
                        ),
                        e.length > 1
                          ? (c(),
                            _(
                              "div",
                              {
                                key: 0,
                                class: "log-item-line",
                                style: D(o(p))
                              },
                              null,
                              4
                            ))
                          : U("", !0),
                        n(
                          "div",
                          { class: "log-item-message", style: D(r(p)) },
                          [
                            n("span", we, " 版本：" + I(t.version), 1),
                            (c(!0),
                            _(
                              x,
                              null,
                              F(
                                t.items,
                                (A, w) => (
                                  c(), _("span", { key: w }, [V(I(A), 1), Ce])
                                )
                              ),
                              128
                            ))
                          ],
                          4
                        )
                      ])
                    ),
                    64
                  ))
                ]),
                _: 1
              })
            ])
          ])
        );
      };
    }
  });
const Se = m(De, [["__scopeId", "data-v-f1962e6e"]]),
  We = { class: "home-page" },
  Le = { class: "fan-hide-item" },
  Ve = ["onClick"],
  Oe = { class: "fan-item-title" },
  Te = l({ name: "HomePage" }),
  Ee = l({
    ...Te,
    setup(s) {
      const e = $([
          {
            id: 1,
            icon: "icon-food-pistachio",
            open: !1,
            title: "起点",
            poems: [
              "合抱之木",
              "生于毫末",
              "九层之台",
              "起于垒土",
              "千里之行",
              "始于足下"
            ]
          },
          { id: 2, icon: "icon-food-strawberry", open: !1, title: "过程" },
          { id: 3, icon: "icon-food-popcorn", open: !1, title: "学习" },
          { id: 4, icon: "icon-food-pecan", open: !1, title: "奔跑" },
          { id: 5, icon: "icon-food-eggyolkcake", open: !1, title: "想象" }
        ]),
        a = H(),
        o = i => {
          switch (i.id) {
            case 1:
              return me;
            case 2:
              return Se;
            case 3:
              return Fe;
            case 4:
              return ye;
            case 5:
              return se;
          }
        },
        r = (i, u) => {
          if (u > -1) {
            const t = a.refs["fan-item-bagImage" + u];
            t && !J(t, "fan-item-opacity-in") && Q(t, "fan-item-opacity-in");
          }
        },
        d = $(!0);
      return (
        M(() => {
          const i = new Image();
          (i.onload = () => {
            d.value = !1;
          }),
            (i.src = G);
        }),
        (i, u) => {
          const t = E,
            p = k("el-skeleton-item"),
            A = k("el-skeleton"),
            w = ee;
          return (
            c(),
            _("div", We, [
              f(
                w,
                { list: h(e), "default-active": 1 },
                {
                  "hide-fan": g(
                    ({ item: v, index: y, activeFanIndex: C, openFan: B }) => [
                      n("div", Le, [
                        n(
                          "div",
                          {
                            class: "fan-item-open-btn",
                            onClick: () => {
                              r(y, C), B(y);
                            }
                          },
                          [
                            f(
                              t,
                              { icon: v.icon, svg: "", class: "open-btn-icon" },
                              null,
                              8,
                              ["icon"]
                            )
                          ],
                          8,
                          Ve
                        ),
                        n("div", Oe, I(v.title), 1),
                        f(
                          A,
                          {
                            loading: h(d),
                            animated: "",
                            class: "fan-item-bagImage"
                          },
                          {
                            template: g(() => [
                              f(p, {
                                variant: "image",
                                style: "width: 100%; height: 100%"
                              })
                            ]),
                            default: g(() => [
                              b(
                                n(
                                  "div",
                                  {
                                    class: L(["fan-item-bagImage"]),
                                    ref: "fan-item-bagImage" + y
                                  },
                                  null,
                                  512
                                ),
                                [[S, !v.open]]
                              )
                            ]),
                            _: 2
                          },
                          1032,
                          ["loading"]
                        )
                      ])
                    ]
                  ),
                  "open-fan": g(
                    ({ item: v, index: y, activeFanIndex: C, closeFan: B }) => [
                      (c(),
                      z(
                        q(o(v)),
                        {
                          item: v,
                          index: y,
                          activeFanIndex: C,
                          closeFan: B,
                          showFanBagImage: r
                        },
                        null,
                        8,
                        ["item", "index", "activeFanIndex", "closeFan"]
                      ))
                    ]
                  ),
                  _: 1
                },
                8,
                ["list"]
              )
            ])
          );
        }
      );
    }
  });
const He = m(Ee, [["__scopeId", "data-v-0f170d40"]]);
export { He as default };
