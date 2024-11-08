import { defineComponent as a, openBlock as r, createElementBlock as d, createElementVNode as n, toDisplayString as c } from "vue";
const i = { class: "outline large_width" }, p = { class: "mainText" }, l = { class: "secText" }, m = a({
  name: "BadgeChart"
}), x = /* @__PURE__ */ a({
  ...m,
  props: {
    mainText: {},
    secondText: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (r(), d("div", i, [
      n("div", p, c(t.mainText), 1),
      n("div", l, c(t.secondText), 1)
    ]));
  }
}), f = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, _] of t)
    o[s] = _;
  return o;
}, u = /* @__PURE__ */ f(x, [["__scopeId", "data-v-3a9ee6ff"]]);
export {
  u as BadgeChart
};
