import { f as c, u as o, O as n, B as p, o as u } from "./.pnpm-c4ae2d5d.js";
const _ = { class: "redirect-page" },
  l = c({
    name: "Redirect",
    __name: "Redirect",
    setup(i) {
      const { currentRoute: e, replace: t } = o(),
        { params: r, query: a } = n(e),
        { path: s } = r;
      return t({ path: "/" + s, query: a }), (m, d) => (u(), p("div", _));
    }
  });
export { l as default };
