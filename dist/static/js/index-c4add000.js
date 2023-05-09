import {
  f as _,
  x as C,
  ap as O,
  aq as T,
  o as a,
  B as c,
  I as $,
  J as b,
  C as h,
  H as B,
  S as I,
  T as k,
  F as n,
  U as w,
  h as y,
  L as g,
  w as F,
  R as D,
  r as S,
  a0 as E,
  _ as W,
  $ as L,
  Q as A,
  P as N,
  X as P,
  g as R,
  D as U
} from "./.pnpm-4a45e2d5.js";
import { _ as v } from "./index-607170c1.js";
import { _ as V } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c29fe689.js";
import { h as H, a as z } from "./index-3c161a70.js";
const M = { class: "wy-fan" },
  q = { class: "hide-fan" },
  G = { class: "open-fan" },
  J = _({ name: "WyFan" }),
  Q = _({
    ...J,
    props: { list: { default: () => [] }, defaultActive: { default: -1 } },
    setup(o) {
      const e = o,
        s = C([]),
        t = C(-1),
        u = O(r => {
          t.value > -1 && (s.value[t.value].open = !1),
            (s.value[r].open = !0),
            (t.value = r);
        }, 500),
        d = () => {
          t.value > -1 && (s.value[t.value].open = !1), (t.value = -1);
        };
      return (
        T(() => {
          (s.value = e.list ? e.list : []),
            e.defaultActive > -1 &&
              e.defaultActive < s.value.length &&
              ((s.value[e.defaultActive].open = !0),
              (t.value = e.defaultActive));
        }),
        (r, p) => (
          a(),
          c("div", M, [
            (a(!0),
            c(
              $,
              null,
              b(
                h(s),
                (i, l) => (
                  a(),
                  c(
                    "div",
                    {
                      class: B([
                        "wy-fan-item",
                        [i.open ? "wy-fan-item-active" : "wy-fan-item-hide"]
                      ]),
                      key: i.id
                    },
                    [
                      I(
                        n(
                          "div",
                          q,
                          [
                            w(
                              r.$slots,
                              "hide-fan",
                              {
                                item: i,
                                index: l,
                                activeFanIndex: h(t),
                                openFan: h(u)
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[k, !i.open]]
                      ),
                      I(
                        n(
                          "div",
                          G,
                          [
                            w(
                              r.$slots,
                              "open-fan",
                              {
                                item: i,
                                index: l,
                                activeFanIndex: h(t),
                                closeFan: d
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[k, i.open]]
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
const X = v(Q, [["__scopeId", "data-v-778489db"]]),
  j = { class: "home-imagine" },
  K = _({ name: "Imagine" }),
  Y = _({
    ...K,
    setup(o) {
      return (e, s) => (a(), c("div", j, "建造中"));
    }
  });
const Z = v(Y, [["__scopeId", "data-v-da643ac0"]]),
  ee = o => (W("data-v-c8dd2b1a"), (o = o()), L(), o),
  ne = { class: "home-origin" },
  te = { class: "open-fan-header" },
  oe = { class: "open-fan-header-left" },
  se = { class: "open-fan-header-right" },
  ae = ee(() => n("div", { class: "open-fan-body" }, "建造中", -1)),
  ce = { class: "open-fan-footer" },
  ie = { class: "poem-box" },
  _e = _({ name: "Origin" }),
  le = _({
    ..._e,
    props: {
      index: null,
      item: null,
      activeFanIndex: null,
      closeFan: { type: Function },
      showFanBagImage: { type: Function }
    },
    setup(o) {
      const e = o;
      return (s, t) => {
        const u = V,
          d = S("el-button"),
          r = E("motion-fade");
        return (
          a(),
          c("div", ne, [
            n("header", te, [
              n("div", oe, [
                I(
                  y(
                    u,
                    {
                      icon: e.item.icon,
                      svg: "",
                      class: "open-fan-header-icon"
                    },
                    null,
                    8,
                    ["icon"]
                  ),
                  [[r]]
                ),
                n("span", null, g(e.item.title), 1)
              ]),
              n("div", se, [
                y(
                  d,
                  {
                    class: "right-close-btn",
                    onClick:
                      t[0] ||
                      (t[0] = () => {
                        e.showFanBagImage(e.index, e.activeFanIndex),
                          e.closeFan();
                      })
                  },
                  { default: F(() => [D("关闭")]), _: 1 }
                )
              ])
            ]),
            ae,
            n("footer", ce, [
              n("div", ie, [
                (a(!0),
                c(
                  $,
                  null,
                  b(
                    e.item.poems,
                    (p, i) => (
                      a(), c("span", { class: "poem-item", key: i }, g(p), 1)
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
const de = v(le, [["__scopeId", "data-v-c8dd2b1a"]]),
  re = { class: "home-run" },
  pe = _({ name: "Run" }),
  ue = _({
    ...pe,
    setup(o) {
      return (e, s) => (a(), c("div", re, "建造中"));
    }
  });
const fe = v(ue, [["__scopeId", "data-v-a84404b6"]]),
  ve = { class: "home-study" },
  me = _({ name: "Study" }),
  he = _({
    ...me,
    setup(o) {
      return (e, s) => (a(), c("div", ve, "建造中"));
    }
  });
const ye = v(he, [["__scopeId", "data-v-579823ad"]]),
  ge = o => (W("data-v-4b67fb49"), (o = o()), L(), o),
  $e = { class: "home-updateLog" },
  be = { class: "log-list" },
  Ie = { class: "version" },
  Fe = ge(() => n("br", null, null, -1)),
  xe = _({ name: "UpdateLog" }),
  Ae = _({
    ...xe,
    setup(o) {
      const e = [
          {
            version: "V1.0.1",
            items: ["1. 首页增加更新日志", "2.修改默认主题色"]
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
        s = [
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
        t = d => ({ "background-color": s[d % 9] }),
        u = d => ({ color: s[d % 9] });
      return (d, r) => {
        const p = S("el-scrollbar");
        return (
          a(),
          c("div", $e, [
            n("div", be, [
              y(p, null, {
                default: F(() => [
                  (a(),
                  c(
                    $,
                    null,
                    b(e, (i, l) =>
                      n("div", { class: "log-item", key: i.version }, [
                        n(
                          "div",
                          { class: "log-item-circle", style: A(t(l)) },
                          null,
                          4
                        ),
                        e.length > 1
                          ? (a(),
                            c(
                              "div",
                              {
                                key: 0,
                                class: "log-item-line",
                                style: A(t(l))
                              },
                              null,
                              4
                            ))
                          : N("", !0),
                        n(
                          "div",
                          { class: "log-item-message", style: A(u(l)) },
                          [
                            n("span", Ie, " 版本：" + g(i.version), 1),
                            (a(!0),
                            c(
                              $,
                              null,
                              b(
                                i.items,
                                (f, m) => (
                                  a(), c("span", { key: m }, [D(g(f), 1), Fe])
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
const Ce = v(Ae, [["__scopeId", "data-v-4b67fb49"]]),
  ke = { class: "home-page" },
  we = { class: "fan-hide-item" },
  Be = ["onClick"],
  De = { class: "fan-item-title" },
  Se = _({ name: "HomePage" }),
  We = _({
    ...Se,
    setup(o) {
      const e = C([
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
        s = P(),
        t = d => {
          switch (d.id) {
            case 1:
              return de;
            case 2:
              return Ce;
            case 3:
              return ye;
            case 4:
              return fe;
            case 5:
              return Z;
          }
        },
        u = (d, r) => {
          if (r > -1) {
            const p = s.refs["fan-item-bagImage" + r];
            p && !H(p, "fan-item-opacity-in") && z(p, "fan-item-opacity-in");
          }
        };
      return (d, r) => {
        const p = V,
          i = X;
        return (
          a(),
          c("div", ke, [
            y(
              i,
              { list: h(e), "default-active": 1 },
              {
                "hide-fan": F(
                  ({ item: l, index: f, activeFanIndex: m, openFan: x }) => [
                    n("div", we, [
                      n(
                        "div",
                        {
                          class: "fan-item-open-btn",
                          onClick: () => {
                            u(f, m), x(f);
                          }
                        },
                        [
                          y(
                            p,
                            { icon: l.icon, svg: "", class: "open-btn-icon" },
                            null,
                            8,
                            ["icon"]
                          )
                        ],
                        8,
                        Be
                      ),
                      n("div", De, g(l.title), 1),
                      I(
                        n(
                          "div",
                          {
                            class: B(["fan-item-bagImage"]),
                            ref: "fan-item-bagImage" + f
                          },
                          null,
                          512
                        ),
                        [[k, !l.open]]
                      )
                    ])
                  ]
                ),
                "open-fan": F(
                  ({ item: l, index: f, activeFanIndex: m, closeFan: x }) => [
                    (a(),
                    R(
                      U(t(l)),
                      {
                        item: l,
                        index: f,
                        activeFanIndex: m,
                        closeFan: x,
                        showFanBagImage: u
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
      };
    }
  });
const Ee = v(We, [["__scopeId", "data-v-ab41cc23"]]);
export { Ee as default };
