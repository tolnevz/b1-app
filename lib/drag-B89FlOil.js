import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#434343",
  viewBox: "0 -960 960 960"
};
function l(d, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", { d: "M160-360v-80h640v80zm0-160v-80h640v80z" }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
