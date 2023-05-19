import { f as r, o, B as s, D as c, X as t } from "./.pnpm-c4ae2d5d.js";
const i = ["xlink:href"],
  p = r({
    name: "WyIconFont",
    inheritAttrs: !1,
    __name: "WyIconFont",
    props: { icon: { default: "" }, svg: { type: Boolean, default: !1 } },
    setup(a) {
      const e = a;
      return (n, l) =>
        e.svg
          ? (o(),
            s(
              "svg",
              t(
                { key: 0, class: "wy-icon-svg", "aria-hidden": "true" },
                n.$attrs
              ),
              [c("use", { "xlink:href": "#" + e.icon }, null, 8, i)],
              16
            ))
          : (o(),
            s(
              "i",
              t({ key: 1, class: ["iconfont wy-icon", e.icon] }, n.$attrs),
              null,
              16
            ));
    }
  });
export { p as _ };
