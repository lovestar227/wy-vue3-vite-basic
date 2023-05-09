import {
  x as p,
  f,
  o as l,
  B as d,
  h as _,
  w as i,
  F as v,
  C as s,
  R as k,
  L as x,
  P as b,
  r as u
} from "./.pnpm-4a45e2d5.js";
import { _ as C } from "./index-dbabfea5.js";
function y(c) {
  const { apiFun: n } = c,
    e = p(!1);
  return {
    loading: e,
    loadData: t => (
      (e.value = !0),
      n(t).then(
        o => ((e.value = !1), o),
        o => ((e.value = !1), Promise.reject(o))
      )
    )
  };
}
const B = { class: "hooks-page" },
  D = { class: "hooks-card-body" },
  N = { key: 0, class: "api-result" },
  P = f({ name: "HooksPage" }),
  V = f({
    ...P,
    setup(c) {
      function n() {
        return new Promise((a, m) => {
          setTimeout(() => {
            a({ code: 200, message: "完成了", data: {} });
          }, 3e3);
        });
      }
      const e = y({ apiFun: n }),
        r = e.loading,
        t = p(null);
      function o() {
        (t.value = null),
          e.loadData().then(a => {
            t.value = a;
          });
      }
      return (a, m) => {
        const h = u("el-button"),
          g = u("el-card");
        return (
          l(),
          d("div", B, [
            _(
              g,
              { header: "按钮自动loading Hook", class: "hooks-card" },
              {
                default: i(() => [
                  v("div", D, [
                    _(
                      h,
                      { loading: s(r), onClick: o },
                      { default: i(() => [k("你好")]), _: 1 },
                      8,
                      ["loading"]
                    ),
                    s(t)
                      ? (l(), d("div", N, " 接口返回结果：" + x(s(t)), 1))
                      : b("", !0)
                  ])
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  });
const H = C(V, [["__scopeId", "data-v-19e921c5"]]);
export { H as default };
