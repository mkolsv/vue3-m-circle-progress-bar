import { useCssVars as b, unref as a, computed as c, ref as d, openBlock as _, createElementBlock as p, createElementVNode as t, normalizeClass as V, normalizeStyle as S, toDisplayString as w, createCommentVNode as k, renderSlot as $, withDirectives as m, vModelText as h, createVNode as P, pushScopeId as q, popScopeId as A, createApp as I } from "vue";
const y = (r, e) => {
  const s = r.__vccOpts || r;
  for (const [n, l] of e)
    s[n] = l;
  return s;
}, F = { class: "circle-progress" }, M = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, N = ["r"], z = ["r"], D = { class: "circle-progress__content" }, U = {
  key: 0,
  class: "circle-progress__percentage"
}, E = {
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
    }
  },
  setup(r) {
    const e = r;
    b((g) => ({
      29829665: a(u),
      "1e05c207": a(v),
      "45d505a5": e.colorFilled,
      "38f6f8be": e.colorUnfilled
    }));
    const s = c(() => e.max <= e.value), n = c(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), l = c(() => ({
      strokeDashoffset: v.value,
      strokeDasharray: u.value
    })), o = c(() => s.value ? e.max : e.value), C = d(null), f = d(48), u = c(() => f.value * Math.PI * 2), v = c(() => u.value - u.value * o.value / e.max), B = c(() => Math.floor(e.value / e.max * 100) + "%");
    return (g, X) => (_(), p("div", F, [
      (_(), p("svg", M, [
        t("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: f.value,
          cx: "52",
          cy: "52"
        }, null, 8, N),
        t("circle", {
          class: V(["circle-progress__circle circle-progress__line--top", a(n)]),
          style: S(a(l)),
          ref_key: "fillingCircle",
          ref: C,
          r: f.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, z)
      ])),
      t("div", D, [
        r.percentage ? (_(), p("span", U, w(a(B)), 1)) : k("", !0),
        $(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, x = /* @__PURE__ */ y(E, [["__scopeId", "data-v-6c5cf986"]]);
const i = (r) => (q("data-v-f9b39818"), r = r(), A(), r), O = { class: "circle-wrapper" }, G = /* @__PURE__ */ i(() => /* @__PURE__ */ t("h1", { class: "circle-title" }, "MCircle Progress Bar", -1)), H = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", null, "for Vue 3", -1)), L = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", null, "Highly customizable & lightweight circular progressbar component for Vue 3, built with SVG and extensively customizable", -1)), R = { class: "circle-inputs" }, T = { class: "circle-input__wrapper" }, j = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", { class: "circle-input__title circle-input__current" }, "Current Value", -1)), J = { class: "circle-input__wrapper" }, K = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", { class: "circle-input__title circle-input__max" }, "Max Value", -1)), Q = {
  __name: "App",
  setup(r) {
    const e = d(20), s = d(100);
    return (n, l) => (_(), p("div", O, [
      G,
      H,
      L,
      t("div", R, [
        t("div", T, [
          j,
          m(t("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[0] || (l[0] = (o) => e.value = o),
            type: "text"
          }, null, 512), [
            [h, e.value]
          ])
        ]),
        t("div", J, [
          K,
          m(t("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[1] || (l[1] = (o) => s.value = o),
            type: "text"
          }, null, 512), [
            [h, s.value]
          ])
        ])
      ]),
      P(x, {
        value: e.value,
        max: s.value,
        percentage: "",
        rounded: ""
      }, null, 8, ["value", "max"])
    ]));
  }
}, W = /* @__PURE__ */ y(Q, [["__scopeId", "data-v-f9b39818"]]);
I(W).mount("#app");
const Z = {
  install: (r, e) => {
    r.component("CircleProgressBar", x);
  }
};
export {
  Z as default
};
