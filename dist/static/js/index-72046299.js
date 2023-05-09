import { t as x, _ as g } from "./theme-ec27e5b4.js";
import {
  f as h,
  x as V,
  v as f,
  o as S,
  B as y,
  F as o,
  L as m,
  C as s,
  h as d,
  aM as p,
  aN as k,
  r as T,
  _ as B,
  $ as I
} from "./.pnpm-4a45e2d5.js";
import { _ as N } from "./index-02f47d16.js";
const u = t => (B("data-v-4f6ff553"), (t = t()), I(), t),
  w = { class: "theme-page" },
  U = { class: "color-content" },
  $ = u(() => o("h1", null, "修改主题色", -1)),
  D = { class: "system-color" },
  E = { class: "system-color" },
  F = { class: "dark-content" },
  H = u(() => o("h1", null, "切换明暗模式", -1)),
  L = h({ name: "ThemePage" }),
  M = h({
    ...L,
    setup(t) {
      const _ = V([
          "#ff4500",
          "#ff8c00",
          "#ffd700",
          "#90ee90",
          "#00ced1",
          "#1e90ff",
          "#c71585",
          "#c7158577"
        ]),
        n = x(),
        l = f(() => {
          var e;
          return (e = n.themeColor) == null ? void 0 : e.mainColor;
        }),
        r = f(() => {
          var e;
          return (e = n.themeColor) == null ? void 0 : e.hoverColor;
        }),
        C = e => {
          n.setThemeColor({
            mainColor: e,
            hoverColor: new k(e).tint(80).toHexString()
          });
        },
        v = e => {
          n.setThemeColor({ hoverColor: e });
        };
      return (e, a) => {
        const i = T("el-color-picker");
        return (
          S(),
          y("div", w, [
            o("div", U, [
              $,
              o("div", D, [
                o("span", null, "主色:" + m(s(l)), 1),
                d(
                  i,
                  {
                    modelValue: s(l),
                    "onUpdate:modelValue":
                      a[0] || (a[0] = c => (p(l) ? (l.value = c) : null)),
                    predefine: s(_),
                    "color-format": "hex",
                    onChange: C
                  },
                  null,
                  8,
                  ["modelValue", "predefine"]
                )
              ]),
              o("div", E, [
                o("span", null, "鼠标悬浮色:" + m(s(r)), 1),
                d(
                  i,
                  {
                    modelValue: s(r),
                    "onUpdate:modelValue":
                      a[1] || (a[1] = c => (p(r) ? (r.value = c) : null)),
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
            o("div", F, [H, d(g)])
          ])
        );
      };
    }
  });
const j = N(M, [["__scopeId", "data-v-4f6ff553"]]);
export { j as default };
