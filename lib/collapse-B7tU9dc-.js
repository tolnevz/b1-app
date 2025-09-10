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
    o("path", { d: "M290-79.26 242.26-127 480-364.74 717.74-127 670-79.26l-190-190zm190-517L242.26-834 290-881.74l190 190 190-190L717.74-834z" }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
