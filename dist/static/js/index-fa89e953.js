import { t as g, _ as x } from "./theme-c85abded.js";
import { g as V, _ as S } from "./index-ef0657e7.js";
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
  aN as f,
  aO as B,
  r as I,
  a0 as N,
  a1 as w
} from "./.pnpm-665f29a7.js";
const C = n => (N("data-v-1948a318"), (n = n()), w(), n),
  U = { class: "theme-page" },
  A = { class: "color-content" },
  D = C(() => o("h1", null, "修改主题色", -1)),
  E = { class: "system-color" },
  F = { class: "system-color" },
  H = { class: "dark-content" },
  L = C(() => o("h1", null, "切换明暗模式", -1)),
  O = h({ name: "ThemePage" }),
  P = h({
    ...O,
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
        a = m(() => {
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
      return (e, r) => {
        const i = I("el-color-picker");
        return (
          T(),
          k("div", U, [
            o("div", A, [
              D,
              o("div", E, [
                o("span", null, "主色:" + p(s(l)), 1),
                d(
                  i,
                  {
                    modelValue: s(l),
                    "onUpdate:modelValue":
                      r[0] || (r[0] = c => (f(l) ? (l.value = c) : null)),
                    predefine: s(_),
                    "color-format": "hex",
                    onChange: u
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ]),
              o("div", F, [
                o("span", null, "鼠标悬浮色:" + p(s(a)), 1),
                d(
                  i,
                  {
                    modelValue: s(a),
                    "onUpdate:modelValue":
                      r[1] || (r[1] = c => (f(a) ? (a.value = c) : null)),
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
            o("div", H, [L, d(x)])
          ])
        );
      };
    }
  });
const j = S(P, [["__scopeId", "data-v-1948a318"]]);
export { j as default };
