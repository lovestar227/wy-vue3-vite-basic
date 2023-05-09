import {
  f as e,
  as as a,
  g as o,
  C as d,
  o as n,
  at as c,
  au as p,
  av as r,
  aw as i,
  ax as l,
  ay as f,
  az as $,
  aA as u,
  aB as m,
  aC as _,
  aD as g,
  aE as h,
  aF as x,
  aG as w,
  aH as I,
  aI as k,
  aJ as y,
  aK as B,
  aL as C
} from "./.pnpm-4a45e2d5.js";
const v = e({ name: "WyIconify" }),
  D = e({
    ...v,
    props: { icon: { default: "" } },
    setup(s) {
      const t = s;
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
          n(), o(d(c), { icon: t.icon, class: "icon-svg" }, null, 8, ["icon"])
        )
      );
    }
  });
export { D as _ };
