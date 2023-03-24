import { useCssVars as y, unref as l, computed as r, ref as _, openBlock as a, createElementBlock as o, createElementVNode as i, normalizeClass as h, normalizeStyle as x, toDisplayString as C, createCommentVNode as B, renderSlot as k } from "vue";
const q = { class: "circle-progress" }, S = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, b = ["r"], D = ["r"], F = { class: "circle-progress__content" }, P = {
  key: 0,
  class: "circle-progress__percentage"
}, w = {
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
    y((d) => ({
      "7ab0f836": l(s),
      "1ab8cb54": l(u),
      "5c3d0382": e.strokeWidth,
      "9512876e": e.animationDuration,
      fa1df314: e.colorFilled,
      c1d3ed62: e.colorUnfilled
    }));
    const t = r(() => e.max <= e.value), f = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": t.value,
      "circle-progress__line--unfilled": !t.value
    })), p = r(() => ({
      strokeDashoffset: u.value,
      strokeDasharray: s.value
    })), g = r(() => t.value ? e.max : e.value), m = _(null), c = _(48), s = r(() => c.value * Math.PI * 2), u = r(() => s.value - s.value * g.value / e.max), v = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (d, N) => (a(), o("div", q, [
      (a(), o("svg", S, [
        i("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: c.value,
          cx: "52",
          cy: "52"
        }, null, 8, b),
        i("circle", {
          class: h(["circle-progress__circle circle-progress__line--top", l(f)]),
          style: x(l(p)),
          ref_key: "fillingCircle",
          ref: m,
          r: c.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, D)
      ])),
      i("div", F, [
        n.percentage ? (a(), o("span", P, C(l(v)), 1)) : B("", !0),
        k(d.$slots, "default")
      ])
    ]));
  }
};
export {
  w as CircleProgressBar
};
