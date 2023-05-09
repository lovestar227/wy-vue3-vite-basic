import { _ as a } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c29fe689.js";
import {
  f as o,
  S as c,
  B as n,
  F as e,
  h as i,
  L as d,
  o as r,
  a0 as p
} from "./.pnpm-4a45e2d5.js";
import { _ as l } from "./index-02f47d16.js";
const m = { class: "page-404" },
  f = { class: "middle-box" },
  v = { class: "icon-404" },
  u = o({ name: "404" }),
  g = o({
    ...u,
    setup(h) {
      return (s, k) => {
        const t = a,
          _ = p("motion-fade");
        return c(
          (r(),
          n("div", m, [
            e("div", null, [
              i(t, { icon: "icon-food-cake", svg: "", class: "icon-food-cake" })
            ]),
            e("div", f, [e("span", v, d(s.$t("page.404.pageLoss")), 1)])
          ])),
          [[_]]
        );
      };
    }
  });
const b = l(g, [["__scopeId", "data-v-e3528cbe"]]);
export { b as default };
