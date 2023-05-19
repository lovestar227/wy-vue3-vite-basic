import { t as C, _ as v } from "./theme-e6c43231.js";
import { g, _ as x } from "./index-649cc330.js";
import {
  f as V,
  x as S,
  v as _,
  r as y,
  o as T,
  B as k,
  D as o,
  J as m,
  h as c,
  O as p,
  aO as B,
  a0 as I,
  a1 as w
} from "./.pnpm-c4ae2d5d.js";
const h = t => (I("data-v-30312e40"), (t = t()), w(), t),
  D = { class: "theme-page" },
  N = { class: "color-content" },
  O = h(() => o("h1", null, "修改主题色", -1)),
  U = { class: "system-color" },
  A = { class: "system-color" },
  E = { class: "dark-content" },
  H = h(() => o("h1", null, "切换明暗模式", -1)),
  J = V({
    name: "ThemePage",
    __name: "index",
    setup(t) {
      const d = S([
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
        s = C(),
        l = _(() => {
          var e;
          return (e = s.themeColor) == null ? void 0 : e.mainColor;
        }),
        a = _(() => {
          var e;
          return (e = s.themeColor) == null ? void 0 : e.hoverColor;
        }),
        f = e => {
          e
            ? s.setThemeColor({
                mainColor: e,
                hoverColor: new B(e).tint(80).toHexString()
              })
            : s.setThemeColor(g().themeColor);
        },
        u = e => {
          s.setThemeColor({ hoverColor: e });
        };
      return (e, n) => {
        const i = y("el-color-picker");
        return (
          T(),
          k("div", D, [
            o("div", N, [
              O,
              o("div", U, [
                o("span", null, "主色:" + m(l.value), 1),
                c(
                  i,
                  {
                    modelValue: l.value,
                    "onUpdate:modelValue": n[0] || (n[0] = r => (l.value = r)),
                    predefine: p(d),
                    "color-format": "hex",
                    onChange: f
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ]),
              o("div", A, [
                o("span", null, "鼠标悬浮色:" + m(a.value), 1),
                c(
                  i,
                  {
                    modelValue: a.value,
                    "onUpdate:modelValue": n[1] || (n[1] = r => (a.value = r)),
                    predefine: p(d),
                    "color-format": "hex",
                    onChange: u
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ])
            ]),
            o("div", E, [H, c(v)])
          ])
        );
      };
    }
  });
const j = x(J, [["__scopeId", "data-v-30312e40"]]);
export { j as default };
