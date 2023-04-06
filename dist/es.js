(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--67737188)}to{stroke-dashoffset:var(--588fa7e0)}}.circle-progress__circle{fill:transparent;stroke-width:var(--56526745)}.circle-progress__line--back{stroke:#eceef1;stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--218b6e62);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--0761ef7c)}.circle-progress__line--unfilled{stroke:var(--6a1e6e56)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as y, useCssVars as h, unref as l, computed as r, ref as _, openBlock as a, createElementBlock as c, createElementVNode as i, normalizeClass as x, normalizeStyle as C, toDisplayString as B, createCommentVNode as k, renderSlot as q } from "vue";
const S = { class: "circle-progress" }, D = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, F = ["r"], P = ["r"], b = { class: "circle-progress__content" }, N = {
  key: 0,
  class: "circle-progress__percentage"
}, z = /* @__PURE__ */ y({
  __name: "CircleProgressBar",
  props: {
    max: {
      type: Number,
      required: !0
    },
    value: {
      type: Number,
      required: !0
    },
    colorFilled: {
      type: String,
      required: !1,
      default: "#FF5533"
    },
    colorUnfilled: {
      type: String,
      required: !1,
      default: "#3BB44A"
    },
    percentage: {
      type: Boolean,
      required: !1,
      default: !1
    },
    rounded: {
      type: Boolean,
      required: !1,
      default: !1
    },
    animationDuration: {
      type: String,
      required: !1,
      default: "0.5s"
    },
    strokeWidth: {
      type: String,
      required: !1,
      default: "5px"
    }
  },
  setup(n) {
    const e = n;
    h((d) => ({
      67737188: l(s),
      "588fa7e0": l(u),
      56526745: e.strokeWidth,
      "218b6e62": e.animationDuration,
      "0761ef7c": e.colorFilled,
      "6a1e6e56": e.colorUnfilled
    }));
    const t = r(() => e.max <= e.value), f = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": t.value,
      "circle-progress__line--unfilled": !t.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: s.value
    })), g = r(() => t.value ? e.max : e.value), m = _(null), o = _(48), s = r(() => o.value * Math.PI * 2), u = r(() => s.value - s.value * g.value / e.max), v = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, V) => (a(), c("div", S, [
      (a(), c("svg", D, [
        i("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: o.value,
          cx: "52",
          cy: "52"
        }, null, 8, F),
        i("circle", {
          class: x(["circle-progress__circle circle-progress__line--top", l(f)]),
          style: C(l(p)),
          ref_key: "fillingCircle",
          ref: m,
          r: o.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, P)
      ])),
      i("div", b, [
        n.percentage ? (a(), c("span", N, B(l(v)), 1)) : k("", !0),
        q(d.$slots, "default")
      ])
    ]));
  }
});
export {
  z as CircleProgressBar
};
