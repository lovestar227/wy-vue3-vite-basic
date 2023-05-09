import {
  o as h,
  B as w,
  F as a,
  f as d,
  C as c,
  v as f,
  x as p,
  A as S,
  Q as _,
  S as g,
  T as y,
  U as x,
  H as z,
  aO as V,
  aP as k,
  g as B,
  w as v,
  h as C,
  d as T
} from "./.pnpm-4a45e2d5.js";
import { _ as D, b as M, g as R, s as b, c as W } from "./index-607170c1.js";
const L = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 1024 1024"
  },
  I = a(
    "path",
    {
      fill: "currentColor",
      d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
    },
    null,
    -1
  ),
  O = [I];
function A(o, t) {
  return h(), w("svg", L, O);
}
const F = { render: A },
  H = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 1024 1024"
  },
  N = a(
    "path",
    {
      fill: "currentColor",
      d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
    },
    null,
    -1
  ),
  X = [N];
function j(o, t) {
  return h(), w("svg", H, X);
}
const E = { render: j },
  P = { class: "icon" },
  Q = { class: "icon" },
  U = d({ name: "WySwitch" }),
  q = d({
    ...U,
    props: {
      modelValue: { type: Boolean, default: !1 },
      width: { default: 40 },
      height: { default: 22 },
      hasBorder: { type: Boolean, default: !1 }
    },
    emits: ["update:modelValue", "change"],
    setup(o, { emit: t }) {
      const e = o,
        s = c(e.modelValue),
        u = {
          "--wy-switch-open-bgc": "#409eff",
          "--wy-switch-close-bgc": "#dcdfe6",
          "--wy-switch-open-border-color": "#8e8e93",
          "--wy-switch-close-border-color": "#8e8e93",
          "--wy-switch-open-circle-color": "#fff",
          "--wy-switch-close-circle-color": "#fff",
          "--wy-switch-transition": "0.5s"
        },
        m = f(() => ({
          border: e.hasBorder ? "" : "0",
          width: e.width ? `${e.width}px` : "100%",
          height: e.height ? `${e.height}px` : "22px",
          "border-radius": e.height ? `${e.height / 2}px` : "11px"
        })),
        l = f(() => ({
          top: e.hasBorder ? "1px" : "2px",
          right: s ? "1px" : "auto",
          left: s ? "auto" : "1px",
          width: e.width ? `${e.height - 4}px` : "100%",
          height: e.height ? `${e.height - 4}px` : "22px"
        })),
        r = p(null),
        n = p(null),
        $ = () => {
          t("update:modelValue", !e.modelValue), t("change", !e.modelValue);
        };
      return (
        S(
          () => e.modelValue,
          i => {
            s === i
              ? (n.value.style.transform = "none")
              : s
              ? (n.value.style.transform = `translateX(calc( -${r.value.clientWidth}px + 100% + 2px))`)
              : s ||
                (n.value.style.transform = `translateX(calc( ${r.value.clientWidth}px - 100% - 2px))`);
          }
        ),
        (i, K) => (
          h(),
          w(
            "div",
            {
              class: z([
                "wy-switch",
                e.modelValue ? "wy-switch-open" : "wy-switch-close"
              ]),
              style: u
            },
            [
              a(
                "button",
                {
                  class: "wy-switch-botton",
                  type: "button",
                  onClick: $,
                  style: _(c(m)),
                  ref_key: "buttonRef",
                  ref: r
                },
                [
                  a(
                    "span",
                    {
                      class: "circle",
                      style: _(c(l)),
                      ref_key: "circleRef",
                      ref: n
                    },
                    [
                      g(
                        a(
                          "span",
                          P,
                          [x(i.$slots, "open-circle", {}, void 0, !0)],
                          512
                        ),
                        [[y, e.modelValue]]
                      ),
                      g(
                        a(
                          "span",
                          Q,
                          [x(i.$slots, "close-circle", {}, void 0, !0)],
                          512
                        ),
                        [[y, !e.modelValue]]
                      )
                    ],
                    4
                  )
                ],
                4
              )
            ],
            2
          )
        )
      );
    }
  });
const G = D(q, [["__scopeId", "data-v-fecdb2c5"]]),
  J = d({ name: "WyDarkToogle" }),
  ee = d({
    ...J,
    emits: ["change"],
    setup(o, { emit: t }) {
      const e = {
          "--wy-switch-open-bgc": "#616162",
          "--wy-switch-close-bgc": "#f1f1f1",
          "--wy-switch-open-circle-color": "#000000"
        },
        s = V(),
        u = k(s);
      function m(l) {
        t("change", l), u(l);
      }
      return (l, r) => (
        h(),
        B(
          G,
          {
            "model-value": c(s),
            onChange: m,
            style: e,
            "has-border": "",
            class: "wy-dark-toogle"
          },
          {
            "open-circle": v(() => [C(c(F), { style: { color: "#fff" } })]),
            "close-circle": v(() => [C(c(E))]),
            _: 1
          },
          8,
          ["model-value"]
        )
      );
    }
  }),
  te = T({
    id: "Theme",
    state: () => ({ themeColor: M() ?? R().themeColor }),
    getters: {
      getThemeColor(o) {
        return o.themeColor;
      }
    },
    actions: {
      setThemeColor(o) {
        const t = b.getItem("themeColor") || {};
        Object.assign(t, this.themeColor, o),
          (this.themeColor = t),
          b.setItem("themeColor", t),
          W(o);
      }
    }
  });
export { ee as _, te as t };
