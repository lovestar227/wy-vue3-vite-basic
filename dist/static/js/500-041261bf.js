import { _ as a } from "./WyIconFont.vue_vue_type_script_setup_true_lang-c29fe689.js";
import {
  f as o,
  S as c,
  o as n,
  B as i,
  F as e,
  h as d,
  L as r,
  a0 as p
} from "./.pnpm-4a45e2d5.js";
import { _ as l } from "./index-02f47d16.js";
const m = { class: "page-500" },
  f = { class: "middle-box" },
  v = { class: "icon-500" },
  u = o({ name: "500" }),
  g = o({
    ...u,
    setup(h) {
      return (s, x) => {
        const t = a,
          _ = p("motion-fade");
        return c(
          (n(),
          i("div", m, [
            e("div", null, [
              d(t, {
                icon: "icon-food-doughnut",
                svg: "",
                class: "icon-food-cake"
              })
            ]),
            e("div", f, [e("span", v, r(s.$t("page.500.pageError")), 1)])
          ])),
          [[_]]
        );
      };
    }
  });
const D = l(g, [["__scopeId", "data-v-579d679e"]]);
export { D as default };
