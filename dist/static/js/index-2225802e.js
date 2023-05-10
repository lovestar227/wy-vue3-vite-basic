import { t as g, _ as x } from "./theme-1bf29921.js";
import { g as V, _ as S } from "./index-3253de75.js";
import {
  f as h,
  x as y,
  v as m,
  o as T,
  B as k,
  F as o,
  L as p,
  C as s,
  h as d,
  aM as f,
  aN as B,
  r as I,
  _ as N,
  $ as w
} from "./.pnpm-4a45e2d5.js";
const C = n => (N("data-v-1948a318"), (n = n()), w(), n),
  U = { class: "theme-page" },
  $ = { class: "color-content" },
  A = C(() => o("h1", null, "修改主题色", -1)),
  D = { class: "system-color" },
  E = { class: "system-color" },
  F = { class: "dark-content" },
  H = C(() => o("h1", null, "切换明暗模式", -1)),
  L = h({ name: "ThemePage" }),
  M = h({
    ...L,
    setup(n) {
      const _ = y([
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
                hoverColor: new B(e).tint(80).toHexString()
              })
            : t.setThemeColor(V().themeColor);
        },
        v = e => {
          t.setThemeColor({ hoverColor: e });
        };
      return (e, a) => {
        const i = I("el-color-picker");
        return (
          T(),
          k("div", U, [
            o("div", $, [
              A,
              o("div", D, [
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
              o("div", E, [
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
            o("div", F, [H, d(x)])
          ])
        );
      };
    }
  });
const j = S(M, [["__scopeId", "data-v-1948a318"]]);
export { j as default };
