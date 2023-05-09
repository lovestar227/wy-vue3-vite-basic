import { f as a, B as n, F as c, V as o, o as t } from "./.pnpm-4a45e2d5.js";
const i = ["xlink:href"],
  l = a({ name: "WyIconFont", inheritAttrs: !1 }),
  u = a({
    ...l,
    props: { icon: { default: "" }, svg: { type: Boolean, default: !1 } },
    setup(r) {
      const e = r;
      return (s, f) =>
        e.svg
          ? (t(),
            n(
              "svg",
              o(
                { key: 0, class: "wy-icon-svg", "aria-hidden": "true" },
                s.$attrs
              ),
              [c("use", { "xlink:href": "#" + e.icon }, null, 8, i)],
              16
            ))
          : (t(),
            n(
              "i",
              o({ key: 1, class: ["iconfont wy-icon", e.icon] }, s.$attrs),
              null,
              16
            ));
    }
  });
export { u as _ };
