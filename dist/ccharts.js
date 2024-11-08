import { defineComponent as r, openBlock as _, createElementBlock as d, createElementVNode as n, toDisplayString as c } from "vue";
const i = { class: "outline large_width" }, p = { class: "mainText" }, l = { class: "secText" }, m = /* @__PURE__ */ r({
  __name: "BadgeChart",
  props: {
    mainText: {},
    secondText: {}
  },
  setup(t) {
    const e = t;
    return (o, s) => (_(), d("div", i, [
      n("div", p, c(e.mainText), 1),
      n("div", l, c(e.secondText), 1)
    ]));
  }
}), x = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, a] of e)
    o[s] = a;
  return o;
}, h = /* @__PURE__ */ x(m, [["__scopeId", "data-v-0d262f5f"]]);
export {
  h as BadgeChart
};
