import { openBlock as t, createElementBlock as o, createElementVNode as n } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#434343",
  viewBox: "0 -960 960 960"
};
function r(d, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    n("path", { d: "M480-253.85 253.85-480 296-522.15l154 154V-750h60v381.85l154-154L706.15-480z" }, null, -1)
  ]));
}
const s = { render: r };
export {
  s as default,
  r as render
};
