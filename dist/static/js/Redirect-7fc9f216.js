import { f as e, u as c, C as n, B as p, o as u } from "./.pnpm-4a45e2d5.js";
const _ = { class: "redirect-page" },
  d = e({ name: "Redirect" }),
  h = e({
    ...d,
    setup(f) {
      const { currentRoute: t, replace: s } = c(),
        { params: a, query: o } = n(t),
        { path: r } = a;
      return s({ path: "/" + r, query: o }), (i, l) => (u(), p("div", _));
    }
  });
export { h as default };
