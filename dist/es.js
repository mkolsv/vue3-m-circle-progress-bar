import { useCssVars as B, unref as a, computed as r, ref as p, openBlock as _, createElementBlock as d, createElementVNode as s, normalizeClass as w, normalizeStyle as D, toDisplayString as j, createCommentVNode as C, renderSlot as b, withDirectives as h, vModelText as I, createVNode as z, pushScopeId as S, popScopeId as Z, createApp as T } from "vue";
const L = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==";
const f = (t, e) => {
  const c = t.__vccOpts || t;
  for (const [n, l] of e)
    c[n] = l;
  return c;
}, P = { class: "circle-progress" }, U = {
  class: "circle-progress__svg",
  viewBox: "0 0 104 104",
  width: "104",
  height: "104"
}, k = ["r"], A = ["r"], N = { class: "circle-progress__content" }, V = {
  key: 0,
  class: "circle-progress__percentage"
}, G = {
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
  setup(t) {
    const e = t;
    B((m) => ({
      29829665: a(u),
      "1e05c207": a(v),
      "45d505a5": e.colorFilled,
      "38f6f8be": e.colorUnfilled
    }));
    const c = r(() => e.max <= e.value), n = r(() => ({
      "circle-progress__line--top--rounded": e.rounded,
      "circle-progress__line--filled": c.value,
      "circle-progress__line--unfilled": !c.value
    })), l = r(() => ({
      strokeDashoffset: v.value,
      strokeDasharray: u.value
    })), o = r(() => c.value ? e.max : e.value), M = p(null), g = p(48), u = r(() => g.value * Math.PI * 2), v = r(() => u.value - u.value * o.value / e.max), x = r(() => Math.floor(e.value / e.max * 100) + "%");
    return (m, K) => (_(), d("div", P, [
      (_(), d("svg", U, [
        s("circle", {
          class: "circle-progress__circle circle-progress__line--back",
          r: g.value,
          cx: "52",
          cy: "52"
        }, null, 8, k),
        s("circle", {
          class: w(["circle-progress__circle circle-progress__line--top", a(n)]),
          style: D(a(l)),
          ref_key: "fillingCircle",
          ref: M,
          r: g.value,
          cx: "52",
          cy: "52",
          transform: "rotate(-270 52 52)"
        }, null, 14, A)
      ])),
      s("div", N, [
        t.percentage ? (_(), d("span", V, j(a(x)), 1)) : C("", !0),
        b(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}, y = /* @__PURE__ */ f(G, [["__scopeId", "data-v-6c5cf986"]]);
const i = (t) => (S("data-v-5c1a02c6"), t = t(), Z(), t), W = { class: "circle-wrapper" }, O = /* @__PURE__ */ i(() => /* @__PURE__ */ s("img", { src: L }, null, -1)), H = /* @__PURE__ */ i(() => /* @__PURE__ */ s("h1", { class: "circle-title" }, "MCircle Progress Bar", -1)), E = /* @__PURE__ */ i(() => /* @__PURE__ */ s("p", null, "for Vue 3", -1)), F = /* @__PURE__ */ i(() => /* @__PURE__ */ s("p", null, "Highly customizable & lightweight circular progressbar component for Vue 3, built with SVG and extensively customizable", -1)), J = { class: "circle-inputs" }, Q = { class: "circle-input__wrapper" }, $ = /* @__PURE__ */ i(() => /* @__PURE__ */ s("p", { class: "circle-input__title circle-input__current" }, "Current Value", -1)), q = { class: "circle-input__wrapper" }, R = /* @__PURE__ */ i(() => /* @__PURE__ */ s("p", { class: "circle-input__title circle-input__max" }, "Max Value", -1)), X = {
  __name: "App",
  setup(t) {
    const e = p(20), c = p(100);
    return (n, l) => (_(), d("div", W, [
      O,
      H,
      E,
      F,
      s("div", J, [
        s("div", Q, [
          $,
          h(s("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[0] || (l[0] = (o) => e.value = o),
            type: "text"
          }, null, 512), [
            [I, e.value]
          ])
        ]),
        s("div", q, [
          R,
          h(s("input", {
            class: "circle-input",
            "onUpdate:modelValue": l[1] || (l[1] = (o) => c.value = o),
            type: "text"
          }, null, 512), [
            [I, c.value]
          ])
        ])
      ]),
      z(y, {
        value: e.value,
        max: c.value,
        percentage: "",
        rounded: ""
      }, null, 8, ["value", "max"])
    ]));
  }
}, Y = /* @__PURE__ */ f(X, [["__scopeId", "data-v-5c1a02c6"]]);
T(Y).mount("#app");
const se = {
  install: (t, e) => {
    t.component("CircleProgressBar", y);
  }
};
export {
  se as default
};
