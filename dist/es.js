import { useCssVars as B, unref as o, computed as c, ref as p, openBlock as d, createElementBlock as _, createElementVNode as t, normalizeClass as w, normalizeStyle as D, toDisplayString as j, createCommentVNode as C, renderSlot as S, withDirectives as h, vModelText as f, createVNode as b, pushScopeId as z, popScopeId as Z, createApp as T } from "vue";
const k = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==";
const I = (r, e) => {
  const s = r.__vccOpts || r;
  for (const [n, l] of e)
    s[n] = l;
  return s;
}, L = { class: "circle-progress" }, P = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, U = ["r"], A = ["r"], N = { class: "circle-progress__content" }, V = {
  key: 0,
  class: "circle-progress__percentage"
}, W = {
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
  setup(r) {
    const e = r;
    B((m) => ({
      aac957ea: o(u),
      "7ff68dbe": o(v),
      28313514: e.strokeWidth,
      f3958144: e.animationDuration,
      "4d7e856a": e.colorFilled,
      bf594238: e.colorUnfilled
    }));
    const s = c(() => e.max <= e.value), n = c(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": s.value,
      "circle-progress__line--unfilled": !s.value
    })), l = c(() => ({
      strokeDashoffset: v.value,
      strokeDasharray: u.value
    })), a = c(() => s.value ? e.max : e.value), M = p(null), g = p(48), u = c(() => g.value * Math.PI * 2), v = c(() => u.value - u.value * a.value / e.max), x = c(() => Math.floor(e.value / e.max * 100) + "%");
    return (m, K) => (d(), _("div", L, [
      (d(), _("svg", P, [
        t("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: g.value,
          cx: "52",
          cy: "52"
        }, null, 8, U),
        t("circle", {
          class: w(["circle-progress__circle circle-progress__line--top", o(n)]),
          style: D(o(l)),
          ref_key: "fillingCircle",
          ref: M,
          r: g.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, A)
      ])),
      t("div", N, [
        r.percentage ? (d(), _("span", V, j(o(x)), 1)) : C("", !0),
        S(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, y = /* @__PURE__ */ I(W, [["__scopeId", "data-v-11a577e7"]]);
const i = (r) => (z("data-v-5c1a02c6"), r = r(), Z(), r), G = { class: "circle-wrapper" }, O = /* @__PURE__ */ i(() => /* @__PURE__ */ t("img", { src: k }, null, -1)), H = /* @__PURE__ */ i(() => /* @__PURE__ */ t("h1", { class: "circle-title" }, "MCircle Progress Bar", -1)), E = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", null, "for Vue 3", -1)), q = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", null, "Highly customizable & lightweight circular progressbar component for Vue 3, built with SVG and extensively customizable", -1)), F = { class: "circle-inputs" }, J = { class: "circle-input__wrapper" }, Q = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", { class: "circle-input__title circle-input__current" }, "Current Value", -1)), $ = { class: "circle-input__wrapper" }, R = /* @__PURE__ */ i(() => /* @__PURE__ */ t("p", { class: "circle-input__title circle-input__max" }, "Max Value", -1)), X = {
  __name: "App",
  setup(r) {
    const e = p(20), s = p(100);
    return (n, l) => (d(), _("div", G, [
      O,
      H,
      E,
      q,
      t("div", F, [
        t("div", J, [
          Q,
          h(t("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[0] || (l[0] = (a) => e.value = a),
            type: "text"
          }, null, 512), [
            [f, e.value]
          ])
        ]),
        t("div", $, [
          R,
          h(t("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[1] || (l[1] = (a) => s.value = a),
            type: "text"
          }, null, 512), [
            [f, s.value]
          ])
        ])
      ]),
      b(y, {
        value: e.value,
        max: s.value,
        percentage: "",
        rounded: ""
      }, null, 8, ["value", "max"])
    ]));
  }
}, Y = /* @__PURE__ */ I(X, [["__scopeId", "data-v-5c1a02c6"]]);
T(Y).mount("#app");
const te = {
  install: (r, e) => {
    r.component("CircleProgressBar", y);
  }
};
export {
  te as default
};
