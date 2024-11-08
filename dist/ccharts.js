import { defineComponent as _, openBlock as r, createElementBlock as d, createElementVNode as s, toDisplayString as a } from "vue";
const i = { class: "outline large_width" }, p = { class: "mainText" }, l = { class: "secText" }, m = {
  name: "BadgeChart"
}, x = /* @__PURE__ */ _({
  ...m,
  __name: "BadgeChart",
  props: {
    mainText: {},
    secondText: {}
  },
  setup(t) {
    const e = t;
    return (o, n) => (r(), d("div", i, [
      s("div", p, a(e.mainText), 1),
      s("div", l, a(e.secondText), 1)
    ]));
  }
}), h = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, g = /* @__PURE__ */ h(x, [["__scopeId", "data-v-976a876a"]]);
export {
  g as BadgeChart
};
