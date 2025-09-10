import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#5f6368",
  viewBox: "0 -960 960 960"
};
function r(s, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    o("path", { d: "M287-229.85 231.85-287l192-193-192-195L287-732.15l194 195 192-195L728.15-675l-192 195 192 193L673-229.85l-192-195z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
