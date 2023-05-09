import { t as g, _ as x } from "./theme-642738a4.js";
import { g as V, _ as S } from "./index-6356c864.js";
import {
  f as h,
  x as b,
  v as m,
  o as y,
  B as T,
  F as o,
  L as p,
  C as s,
  h as d,
  aM as f,
  aN as k,
  r as B,
  _ as I,
  $ as N
} from "./.pnpm-4a45e2d5.js";
const C = n => (I("data-v-24b5db94"), (n = n()), N(), n),
  w = { class: "theme-page" },
  U = { class: "color-content" },
  $ = C(() => o("h1", null, "修改主题色", -1)),
  A = { class: "system-color" },
  D = { class: "system-color" },
  E = { class: "dark-content" },
  F = C(() => o("h1", null, "切换明暗模式", -1)),
  H = h({ name: "ThemePage" }),
  L = h({
    ...H,
    setup(n) {
      const _ = b([
          "#C71A54",
          "#ff4500",
          "#ff8c00",
          "#ffd700",
          "#90ee90",
          "#00ced1",
          "#1e90ff",
          "#9515C7",
          "#c71585"
        ]),
        t = g(),
        l = m(() => {
          var e;
          return (e = t.themeColor) == null ? void 0 : e.mainColor;
        }),
        r = m(() => {
          var e;
          return (e = t.themeColor) == null ? void 0 : e.hoverColor;
        }),
        u = e => {
          e
            ? t.setThemeColor({
                mainColor: e,
                hoverColor: new k(e).tint(80).toHexString()
              })
            : t.setThemeColor(V().themeColor);
        },
        v = e => {
          t.setThemeColor({ hoverColor: e });
        };
      return (e, a) => {
        const i = B("el-color-picker");
        return (
          y(),
          T("div", w, [
            o("div", U, [
              $,
              o("div", A, [
                o("span", null, "主色:" + p(s(l)), 1),
                d(
                  i,
                  {
                    modelValue: s(l),
                    "onUpdate:modelValue":
                      a[0] || (a[0] = c => (f(l) ? (l.value = c) : null)),
                    predefine: s(_),
                    "color-format": "hex",
                    onChange: u
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ]),
              o("div", D, [
                o("span", null, "鼠标悬浮色:" + p(s(r)), 1),
                d(
                  i,
                  {
                    modelValue: s(r),
                    "onUpdate:modelValue":
                      a[1] || (a[1] = c => (f(r) ? (r.value = c) : null)),
                    predefine: s(_),
                    "color-format": "hex",
                    onChange: v
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ])
            ]),
            o("div", E, [F, d(x)])
          ])
        );
      };
    }
  });
const j = S(L, [["__scopeId", "data-v-24b5db94"]]);
export { j as default };
