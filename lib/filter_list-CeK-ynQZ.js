import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#5f6368",
  viewBox: "0 -960 960 960"
};
function n(i, e) {
  return t(), o("svg", l, e[0] || (e[0] = [
    r("path", { d: "M411.15-260v-60h137.31v60zM256.16-450v-60h447.3v60zM140-640v-60h680v60z" }, null, -1)
  ]));
}
const h = { render: n };
export {
  h as default,
  n as render
};
