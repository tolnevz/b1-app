import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#434343",
  viewBox: "0 -960 960 960"
};
function l(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", { d: "M260-450v-60h440v60z" }, null, -1)
  ]));
}
const s = { render: l };
export {
  s as default,
  l as render
};
