import {
  f as l,
  x as $,
  aq as V,
  ar as M,
  o,
  B as _,
  I as b,
  J as x,
  C as u,
  H as L,
  U as F,
  V as B,
  F as n,
  W as S,
  h as f,
  L as I,
  w as h,
  R as P,
  r as A,
  a2 as N,
  a0 as E,
  a1 as O,
  T as D,
  S as U,
  Z as H,
  Q as z,
  g as q,
  D as G
} from "./.pnpm-665f29a7.js";
import { _ as v } from "./index-ef0657e7.js";
import { _ as R } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c6b83baf.js";
import { u as J, h as Q, a as Z } from "./user-e1c9ffd8.js";
const j = { class: "wy-fan" },
  K = { class: "hide-fan" },
  X = { class: "open-fan" },
  Y = l({ name: "WyFan" }),
  ee = l({
    ...Y,
    props: { list: { default: () => [] }, defaultActive: { default: -1 } },
    setup(s) {
      const e = s,
        a = $([]),
        c = $(-1),
        d = V(i => {
          c.value > -1 && (a.value[c.value].open = !1),
            (a.value[i].open = !0),
            (c.value = i);
        }, 500),
        p = () => {
          c.value > -1 && (a.value[c.value].open = !1), (c.value = -1);
        };
      return (
        M(() => {
          (a.value = e.list ? e.list : []),
            e.defaultActive > -1 &&
              e.defaultActive < a.value.length &&
              ((a.value[e.defaultActive].open = !0),
              (c.value = e.defaultActive));
        }),
        (i, r) => (
          o(),
          _("div", j, [
            (o(!0),
            _(
              b,
              null,
              x(
                u(a),
                (t, m) => (
                  o(),
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
                      F(
                        n(
                          "div",
                          K,
                          [
                            S(
                              i.$slots,
                              "hide-fan",
                              {
                                item: t,
                                index: m,
                                activeFanIndex: u(c),
                                openFan: u(d)
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[B, !t.open]]
                      ),
                      F(
                        n(
                          "div",
                          X,
                          [
                            S(
                              i.$slots,
                              "open-fan",
                              {
                                item: t,
                                index: m,
                                activeFanIndex: u(c),
                                closeFan: p
                              },
                              void 0,
                              !0
                            )
                          ],
                          512
                        ),
                        [[B, t.open]]
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
const te = v(ee, [["__scopeId", "data-v-778489db"]]),
  ne = { class: "home-imagine" },
  oe = l({ name: "Imagine" }),
  se = l({
    ...oe,
    setup(s) {
      return (e, a) => (o(), _("div", ne, "建造中"));
    }
  });
const ae = v(se, [["__scopeId", "data-v-da643ac0"]]),
  ce = s => (E("data-v-c8dd2b1a"), (s = s()), O(), s),
  ie = { class: "home-origin" },
  _e = { class: "open-fan-header" },
  le = { class: "open-fan-header-left" },
  de = { class: "open-fan-header-right" },
  re = ce(() => n("div", { class: "open-fan-body" }, "建造中", -1)),
  ue = { class: "open-fan-footer" },
  pe = { class: "poem-box" },
  fe = l({ name: "Origin" }),
  ve = l({
    ...fe,
    props: {
      index: null,
      item: null,
      activeFanIndex: null,
      closeFan: { type: Function },
      showFanBagImage: { type: Function }
    },
    setup(s) {
      const e = s;
      return (a, c) => {
        const d = R,
          p = A("el-button"),
          i = N("motion-fade");
        return (
          o(),
          _("div", ie, [
            n("header", _e, [
              n("div", le, [
                F(
                  f(
                    d,
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
              n("div", de, [
                f(
                  p,
                  {
                    class: "right-close-btn",
                    onClick:
                      c[0] ||
                      (c[0] = () => {
                        e.showFanBagImage(e.index, e.activeFanIndex),
                          e.closeFan();
                      })
                  },
                  { default: h(() => [P("关闭")]), _: 1 }
                )
              ])
            ]),
            re,
            n("footer", ue, [
              n("div", pe, [
                (o(!0),
                _(
                  b,
                  null,
                  x(
                    e.item.poems,
                    (r, t) => (
                      o(), _("span", { class: "poem-item", key: t }, I(r), 1)
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
const me = v(ve, [["__scopeId", "data-v-c8dd2b1a"]]),
  ge = { class: "home-run" },
  he = l({ name: "Run" }),
  ye = l({
    ...he,
    setup(s) {
      return (e, a) => (o(), _("div", ge, "建造中"));
    }
  });
const Ie = v(ye, [["__scopeId", "data-v-a84404b6"]]),
  $e = { class: "home-study" },
  be = l({ name: "Study" }),
  xe = l({
    ...be,
    setup(s) {
      return (e, a) => (o(), _("div", $e, "建造中"));
    }
  });
const Fe = v(xe, [["__scopeId", "data-v-579823ad"]]),
  W = [
    {
      version: "v1.0.3",
      items: [
        "1.修改开发环境的基础路径为/wy-vue3-vite-basic",
        "2.增加实时天气功能，使用心知天气API获取数据包括实时天气、逐日预报、生活指数，PC只能通过IP精确到城市",
        "3.stylelint 允许 :global",
        "4.修改axios配置，支持访问外部接口",
        "5.增加外部接口-根据IP获取位置、经纬度（精确到城市）"
      ]
    },
    {
      version: "v1.0.2",
      items: [
        "1.docs: 修改README，增加gitee仓库挂件",
        "2.refactor: 提取更新日志到uplogs.ts"
      ]
    },
    {
      version: "v1.0.1",
      items: [
        "1.chore: 修改base路径，静态网站部署gitee",
        "2.feat: 首页增加更新日志",
        "3.fix: 修改默认主题色",
        "3.fix: 预设颜色选择",
        "4.feat: 还原默认主题色"
      ]
    },
    {
      version: "v1.0.0",
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
  Ae = s => (E("data-v-b3cda278"), (s = s()), O(), s),
  ke = { class: "home-updateLog" },
  we = { class: "log-list" },
  Ce = { class: "version" },
  De = Ae(() => n("br", null, null, -1)),
  Be = l({ name: "UpdateLog" }),
  Se = l({
    ...Be,
    setup(s) {
      const e = [
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
        a = d => ({ "background-color": e[d % 9] }),
        c = d => ({ color: e[d % 9] });
      return (d, p) => {
        const i = A("el-scrollbar");
        return (
          o(),
          _("div", ke, [
            n("div", we, [
              f(i, null, {
                default: h(() => [
                  (o(!0),
                  _(
                    b,
                    null,
                    x(
                      u(W),
                      (r, t) => (
                        o(),
                        _("div", { class: "log-item", key: r.version }, [
                          n(
                            "div",
                            { class: "log-item-circle", style: D(a(t)) },
                            null,
                            4
                          ),
                          u(W).length > 1
                            ? (o(),
                              _(
                                "div",
                                {
                                  key: 0,
                                  class: "log-item-line",
                                  style: D(a(t))
                                },
                                null,
                                4
                              ))
                            : U("", !0),
                          n(
                            "div",
                            { class: "log-item-message", style: D(c(t)) },
                            [
                              n("span", Ce, " 版本：" + I(r.version), 1),
                              (o(!0),
                              _(
                                b,
                                null,
                                x(
                                  r.items,
                                  (m, k) => (
                                    o(), _("span", { key: k }, [P(I(m), 1), De])
                                  )
                                ),
                                128
                              ))
                            ],
                            4
                          )
                        ])
                      )
                    ),
                    128
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
const We = v(Se, [["__scopeId", "data-v-b3cda278"]]),
  Le = { class: "home-page" },
  Pe = { class: "fan-hide-item" },
  Ee = ["onClick"],
  Oe = { class: "fan-item-title" },
  Re = l({ name: "HomePage" }),
  Te = l({
    ...Re,
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
        c = i => {
          switch (i.id) {
            case 1:
              return me;
            case 2:
              return We;
            case 3:
              return Fe;
            case 4:
              return Ie;
            case 5:
              return ae;
          }
        },
        d = (i, r) => {
          if (r > -1) {
            const t = a.refs["fan-item-bagImage" + r];
            t && !Q(t, "fan-item-opacity-in") && Z(t, "fan-item-opacity-in");
          }
        },
        p = $(!0);
      return (
        z(() => {
          const i = new Image();
          (i.onload = () => {
            p.value = !1;
          }),
            (i.src = J);
        }),
        (i, r) => {
          const t = R,
            m = A("el-skeleton-item"),
            k = A("el-skeleton"),
            T = te;
          return (
            o(),
            _("div", Le, [
              f(
                T,
                { list: u(e), "default-active": 1 },
                {
                  "hide-fan": h(
                    ({ item: g, index: y, activeFanIndex: w, openFan: C }) => [
                      n("div", Pe, [
                        n(
                          "div",
                          {
                            class: "fan-item-open-btn",
                            onClick: () => {
                              d(y, w), C(y);
                            }
                          },
                          [
                            f(
                              t,
                              { icon: g.icon, svg: "", class: "open-btn-icon" },
                              null,
                              8,
                              ["icon"]
                            )
                          ],
                          8,
                          Ee
                        ),
                        n("div", Oe, I(g.title), 1),
                        f(
                          k,
                          {
                            loading: u(p),
                            animated: "",
                            class: "fan-item-bagImage"
                          },
                          {
                            template: h(() => [
                              f(m, {
                                variant: "image",
                                style: "width: 100%; height: 100%"
                              })
                            ]),
                            default: h(() => [
                              F(
                                n(
                                  "div",
                                  {
                                    class: L(["fan-item-bagImage"]),
                                    ref: "fan-item-bagImage" + y
                                  },
                                  null,
                                  512
                                ),
                                [[B, !g.open]]
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
                  "open-fan": h(
                    ({ item: g, index: y, activeFanIndex: w, closeFan: C }) => [
                      (o(),
                      q(
                        G(c(g)),
                        {
                          item: g,
                          index: y,
                          activeFanIndex: w,
                          closeFan: C,
                          showFanBagImage: d
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
const He = v(Te, [["__scopeId", "data-v-427ccf97"]]);
export { He as default };
