import {
  o as I,
  B as L,
  F as l,
  f as S,
  v as H,
  U as V,
  R as f,
  L as $,
  C as n,
  H as D,
  x as u,
  A as U,
  aq as K,
  g as T,
  w as t,
  h as i,
  aM as B,
  P as W,
  Q as j,
  r as C,
  _ as N,
  $ as A
} from "./.pnpm-4a45e2d5.js";
import { _ as R } from "./index-607170c1.js";
const E = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  q = l(
    "path",
    {
      fill: "currentColor",
      d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
    },
    null,
    -1
  ),
  Q = l(
    "path",
    { fill: "currentColor", d: "M64 832h896v64H64zm256-640h128v96H320z" },
    null,
    -1
  ),
  G = l(
    "path",
    {
      fill: "currentColor",
      d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
    },
    null,
    -1
  ),
  J = [q, Q, G];
function O(r, v) {
  return I(), L("svg", E, J);
}
const X = { name: "ep-school", render: O },
  Y = S({ name: "WyPopoverListItem" }),
  Z = S({
    ...Y,
    props: {
      item: { default: null },
      activeItemKey: { default: null },
      keyField: { default: "key" },
      valueField: { default: "value" },
      showField: { default: "value" }
    },
    emits: ["update"],
    setup(r, { emit: v }) {
      const e = r,
        F = H(() => (typeof e.item == "object" ? e.item[e.showField] : e.item)),
        p = o => {
          v("update", { key: o[e.keyField] ? o[e.keyField] : o, value: o });
        },
        _ = () => {
          if (e.activeItemKey)
            return typeof e.item == "object"
              ? e.item[e.keyField] === e.activeItemKey
                ? "wy-item-active"
                : ""
              : e.item === e.activeItemKey
              ? "wy-item-active"
              : "";
        };
      return (o, h) => (
        I(),
        L(
          "div",
          {
            class: D(["wy-item", _()]),
            onClick: h[0] || (h[0] = c => p(r.item))
          },
          [V(o.$slots, "default", {}, () => [f($(n(F)), 1)], !0)],
          2
        )
      );
    }
  });
const ee = R(Z, [["__scopeId", "data-v-fb8db30e"]]),
  le = {
    class: "icon-svg",
    viewBox: "0 0 1024 1024",
    width: "1.2em",
    height: "1.2em"
  },
  te = l(
    "path",
    {
      fill: "currentColor",
      d: "m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704z"
    },
    null,
    -1
  ),
  se = [te];
function ie(r, v) {
  return I(), L("svg", le, se);
}
const oe = { name: "ep-search", render: ie },
  ae = { class: "wy-popover-header" },
  ne = { key: 0, class: "wy-search" },
  de = { class: "wy-popover-footer" },
  ue = S({ name: "WyPopoverList" }),
  ce = S({
    ...ue,
    props: {
      list: { default: () => [] },
      poppverClass: { default: "" },
      modelValue: null,
      showSearch: { type: Boolean, default: !0 },
      searchField: { default: () => ["value"] },
      inputClass: { default: "" },
      listClass: { default: "" },
      itemSize: { default: 32 },
      keyField: { default: "key" },
      valueField: { default: "" },
      showField: { default: "value" },
      direction: { default: "vertical" },
      minItemSize: { default: void 0 },
      sizeField: { default: "size" },
      typeField: { default: "type" },
      buffer: { default: 200 },
      listTag: { default: "div" },
      simpleItem: { type: Boolean, default: !0 }
    },
    emits: ["update:modelValue"],
    setup(r, { emit: v }) {
      const e = r,
        F = u(null),
        p = () => {
          var s;
          (s = F.value) == null || s.hide();
        },
        _ = H(() =>
          c.value && typeof c.value == "object" ? c.value[e.showField] : c.value
        ),
        o = u(""),
        h = u([]);
      U(
        () => o.value,
        s => {
          !s || !e.searchField || !e.searchField.length
            ? (h.value = e.list)
            : (h.value = e.list.filter(m =>
                e.searchField.some(w => m[w] && m[w].includes(s))
              ));
        },
        { immediate: !0 }
      );
      const c = u(null),
        k = u(null),
        d = u(null),
        y = s => {
          e.valueField
            ? v("update:modelValue", s.value[e.valueField])
            : v("update:modelValue", s.value),
            (c.value = s.value),
            (k.value = s.key),
            p();
        },
        g = function () {
          e.modelValue &&
            e.list &&
            e.list.length &&
            typeof e.list[0] == "object" &&
            (e.valueField
              ? ((c.value = e.list.filter(
                  s => s[e.valueField] === e.modelValue
                )[0]),
                (k.value = c.value[e.keyField]))
              : ((c.value = e.modelValue), (k.value = c.value[e.keyField])));
        };
      return (
        K(() => {
          e.simpleItem && (d.value = { "line-height": e.itemSize + "px" }), g();
        }),
        (s, m) => {
          const w = C("el-input"),
            z = oe,
            a = ee,
            P = C("RecycleScroller"),
            M = C("el-popover");
          return (
            I(),
            T(
              M,
              {
                "popper-class":
                  "wy-popover-list " +
                  ((e == null ? void 0 : e.poppverClass) || ""),
                ref_key: "popoverRef",
                ref: F
              },
              {
                reference: t(() => [
                  V(s.$slots, "reference", { result: n(_) }, () => [
                    i(
                      w,
                      {
                        modelValue: n(_),
                        "onUpdate:modelValue":
                          m[0] || (m[0] = x => (B(_) ? (_.value = x) : null)),
                        readonly: "",
                        class: D([
                          "wy-trigger-input",
                          (e == null ? void 0 : e.inputClass) || ""
                        ])
                      },
                      null,
                      8,
                      ["modelValue", "class"]
                    )
                  ])
                ]),
                default: t(() => [
                  l("div", ae, [V(s.$slots, "header", { hidePopover: p })]),
                  e.showSearch
                    ? (I(),
                      L("div", ne, [
                        i(
                          w,
                          {
                            modelValue: n(o),
                            "onUpdate:modelValue":
                              m[1] ||
                              (m[1] = x => (B(o) ? (o.value = x) : null))
                          },
                          { prefix: t(() => [i(z)]), _: 1 },
                          8,
                          ["modelValue"]
                        )
                      ]))
                    : W("", !0),
                  V(s.$slots, "default", { hidePopover: p }, () => [
                    i(
                      P,
                      {
                        class: D(
                          "wy-scroller " +
                            ((e == null ? void 0 : e.listClass) || "")
                        ),
                        items: n(h),
                        "item-size": e.itemSize,
                        "key-field": e.keyField,
                        direction: e.direction,
                        "min-item-size": e.minItemSize,
                        "size-field": e.sizeField,
                        "type-field": e.typeField,
                        buffer: e.buffer,
                        listTag: e.listTag
                      },
                      {
                        default: t(({ item: x }) => [
                          i(
                            a,
                            {
                              item: x,
                              "active-item-key": n(k),
                              onUpdate: y,
                              "key-field": e.keyField,
                              valueField: e.valueField,
                              showField: e.showField,
                              style: j(n(d))
                            },
                            {
                              default: t(() => [
                                V(s.$slots, "list-item", { item: x })
                              ]),
                              _: 2
                            },
                            1032,
                            [
                              "item",
                              "active-item-key",
                              "key-field",
                              "valueField",
                              "showField",
                              "style"
                            ]
                          )
                        ]),
                        _: 3
                      },
                      8,
                      [
                        "class",
                        "items",
                        "item-size",
                        "key-field",
                        "direction",
                        "min-item-size",
                        "size-field",
                        "type-field",
                        "buffer",
                        "listTag"
                      ]
                    )
                  ]),
                  l("div", de, [V(s.$slots, "footer", { hidePopover: p })])
                ]),
                _: 3
              },
              8,
              ["popper-class"]
            )
          );
        }
      );
    }
  });
const b = r => (N("data-v-28a18e95"), (r = r()), A(), r),
  re = { class: "list-page" },
  pe = b(() => l("h1", null, "输入框弹出式列表选择组件", -1)),
  _e = b(() =>
    l(
      "ul",
      null,
      [
        l("li", null, "默认触发元素为输入框"),
        l("li", null, "默认的单项数据类型为 { key: string, value: string }"),
        l("li", null, "绑定值是对象字段")
      ],
      -1
    )
  ),
  fe = { class: "w-200px" },
  ve = b(() =>
    l(
      "ul",
      null,
      [
        l(
          "li",
          null,
          ' 自定义列表的keyField和单项的数据类型，比如默认的单项数据类型为 { id: i + "", show: "显示" + i, save: "芜湖" + i } '
        )
      ],
      -1
    )
  ),
  me = { class: "w-200px" },
  he = { class: "w-200px" },
  ye = b(() =>
    l("ul", null, [l("li", null, "自定义列表的单项和显示结果")], -1)
  ),
  ge = { class: "w-200px inline-block" },
  we = b(() => l("h3", null, "当ElPopover使用", -1)),
  Fe = { class: "w-200px" },
  ke = b(() => l("h3", null, "提供了内容的header、footer slot", -1)),
  ze = { class: "w-200px" },
  xe = S({ name: "ListPage" }),
  Ve = S({
    ...xe,
    setup(r) {
      const v = u([]);
      for (let d = 1; d <= 1e4; d++)
        v.value.push({ id: d, show: "显示" + d, save: "芜湖" + d });
      const e = u([]);
      for (let d = 1; d <= 1e4; d++) e.value.push({ key: d, value: d });
      const F = [
          { id: 1, dept: "部门1", fullDept: "法人1/市场1/部门1" },
          { id: 2, dept: "部门2", fullDept: "法人2/市场2/部门2" },
          { id: 3, dept: "部门3", fullDept: "法人3/市场3/部门3" },
          { id: 4, dept: "部门4", fullDept: "法人4/市场4/部门4" }
        ],
        p = u(50),
        _ = u("芜湖2"),
        o = u(3);
      u({ key: 50, value: 50 });
      const h = { display: "flex", "align-items": "center", height: "32px" },
        c = { "font-size": "12px", height: "20px", "lint-height": "20px" },
        k = u(null);
      return (d, y) => {
        const g = ce,
          s = C("el-card"),
          m = C("el-input"),
          w = X,
          z = C("el-button");
        return (
          I(),
          L("div", re, [
            pe,
            i(
              s,
              { class: "list-page-card" },
              {
                header: t(() => [_e]),
                default: t(() => [
                  l("div", fe, [
                    l("h3", null, "存储的值：" + $(n(p)), 1),
                    i(
                      g,
                      {
                        list: n(e),
                        modelValue: n(p),
                        "onUpdate:modelValue":
                          y[0] || (y[0] = a => (B(p) ? (p.value = a) : null)),
                        trigger: "click",
                        width: 200,
                        placement: "bottom",
                        valueField: "value",
                        persistent: !1
                      },
                      null,
                      8,
                      ["list", "modelValue"]
                    )
                  ])
                ]),
                _: 1
              }
            ),
            i(
              s,
              { class: "list-page-card" },
              {
                header: t(() => [ve]),
                default: t(() => [
                  l("div", me, [
                    l("h3", null, "存储的值：" + $(n(_)), 1),
                    l("div", he, [
                      i(
                        g,
                        {
                          list: n(v),
                          modelValue: n(_),
                          "onUpdate:modelValue":
                            y[1] || (y[1] = a => (B(_) ? (_.value = a) : null)),
                          trigger: "click",
                          width: 200,
                          placement: "bottom",
                          persistent: !1,
                          keyField: "id",
                          searchField: ["show"],
                          valueField: "save",
                          showField: "show"
                        },
                        null,
                        8,
                        ["list", "modelValue"]
                      )
                    ])
                  ])
                ]),
                _: 1
              }
            ),
            i(
              s,
              { class: "list-page-card" },
              {
                header: t(() => [ye]),
                default: t(() => [
                  l("h3", null, "存储的值：" + $(n(o)), 1),
                  f(" 部门： "),
                  l("div", ge, [
                    i(
                      g,
                      {
                        list: F,
                        modelValue: n(o),
                        "onUpdate:modelValue":
                          y[2] || (y[2] = a => (B(o) ? (o.value = a) : null)),
                        "list-class": "auto-list",
                        trigger: "click",
                        width: 400,
                        "item-size": 54,
                        placement: "bottom-start",
                        keyField: "id",
                        showField: "fullDept",
                        persistent: !1,
                        valueField: "id",
                        "simple-item": !1,
                        "show-arrow": !1
                      },
                      {
                        reference: t(({ result: a }) => [
                          l("div", null, [
                            i(
                              m,
                              {
                                value: a,
                                readonly: "",
                                class: "wy-trigger-input input-inline"
                              },
                              null,
                              8,
                              ["value"]
                            )
                          ])
                        ]),
                        "list-item": t(({ item: a }) => [
                          l("div", { class: "dept-box", style: h }, [
                            i(w),
                            f(" " + $(a.dept), 1)
                          ]),
                          l(
                            "div",
                            { class: "full-dept-box", style: c },
                            $(a.fullDept),
                            1
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["modelValue"]
                    )
                  ])
                ]),
                _: 1
              }
            ),
            i(
              s,
              { class: "list-page-card" },
              {
                header: t(() => [we]),
                default: t(() => [
                  l("div", Fe, [
                    i(
                      g,
                      {
                        trigger: "hover",
                        width: 200,
                        placement: "right",
                        persistent: !1,
                        showSearch: !1
                      },
                      {
                        reference: t(() => [
                          i(z, null, {
                            default: t(() => [f(" 悬浮我 ")]),
                            _: 1
                          })
                        ]),
                        default: t(() => [f(" 你好 ")]),
                        _: 1
                      }
                    )
                  ])
                ]),
                _: 1
              }
            ),
            i(
              s,
              { class: "list-page-card" },
              {
                header: t(() => [ke]),
                default: t(() => [
                  l("div", ze, [
                    i(
                      g,
                      {
                        trigger: "click",
                        width: 200,
                        placement: "right",
                        persistent: !1,
                        showSearch: !1,
                        ref_key: "popoverRef",
                        ref: k
                      },
                      {
                        reference: t(() => [
                          i(z, null, {
                            default: t(() => [f(" 点击我 ")]),
                            _: 1
                          })
                        ]),
                        header: t(() => [f(" 头部 ")]),
                        footer: t(({ hidePopover: a }) => [
                          i(
                            z,
                            {
                              type: "primary",
                              class: "float-right ml-10px",
                              onClick: a
                            },
                            { default: t(() => [f("确定")]), _: 2 },
                            1032,
                            ["onClick"]
                          ),
                          i(
                            z,
                            { class: "float-right", onClick: a },
                            { default: t(() => [f("取消")]), _: 2 },
                            1032,
                            ["onClick"]
                          )
                        ]),
                        default: t(() => [f(" 你好 ")]),
                        _: 1
                      },
                      512
                    )
                  ])
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  });
const Ie = R(Ve, [["__scopeId", "data-v-28a18e95"]]);
export { Ie as default };
