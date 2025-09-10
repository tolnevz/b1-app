import { openBlock as t, createElementBlock as l, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "#5f6368",
  viewBox: "0 -960 960 960"
};
function r(d, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    n("path", { d: "M480-74.26 234.26-320l49.5-49.5L480-173.5l196.24-196 49.5 49.5zm-196.24-516L234.26-640 480-885.74 725.74-640l-49.26 49.74L480-786.5z" }, null, -1)
  ]));
}
const s = { render: r };
export {
  s as default,
  r as render
};
