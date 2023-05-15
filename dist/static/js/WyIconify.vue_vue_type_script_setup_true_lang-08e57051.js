import {
  f as e,
  at as a,
  g as o,
  C as d,
  o as n,
  au as c,
  av as p,
  aw as r,
  ax as i,
  ay as l,
  az as f,
  aA as $,
  aB as u,
  aC as m,
  aD as _,
  aE as g,
  aF as h,
  aG as x,
  aH as w,
  aI as I,
  aJ as k,
  aK as y,
  aL as B,
  aM as C
} from "./.pnpm-665f29a7.js";
const v = e({ name: "WyIconify" }),
  D = e({
    ...v,
    props: { icon: { default: "" } },
    setup(t) {
      const s = t;
      return (
        a("ep:set-up", p),
        a("ep:edit", r),
        a("ep:home-filled", i),
        a("ep:cold-drink", l),
        a("ep:refresh", f),
        a("ep:close", $),
        a("ep:warning-filled", u),
        a("ep:pear", m),
        a("ep:ice-cream-round", _),
        a("ep:odometer", g),
        a("ep:lightning", h),
        a("ep:sunset", x),
        a("ep:expand", w),
        a("ep:fold", I),
        a("ep:apple", k),
        a("fa:exclamation-triangle", y),
        a("fa:arrow-circle-o-left", B),
        a("fa:arrow-circle-o-right", C),
        (b, z) => (
          n(), o(d(c), { icon: s.icon, class: "icon-svg" }, null, 8, ["icon"])
        )
      );
    }
  });
export { D as _ };
