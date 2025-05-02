"use strict";
(() => {
    (self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
        [2032], {
            1697: (M, x, r) => {
                r.d(x, {
                    C: () => P,
                    z: () => d
                });
                var h = r(7897),
                    g = r(25734),
                    i = r(17771),
                    v = r(37255),
                    y = r(22537),
                    u = r(87559),
                    O = r(46651),
                    j = ["value", "children"];

                function b(o, a) {
                    var t = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(o);
                        a && (e = e.filter(function(s) {
                            return Object.getOwnPropertyDescriptor(o, s).enumerable
                        })), t.push.apply(t, e)
                    }
                    return t
                }

                function _(o) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a] != null ? arguments[a] : {};
                        a % 2 ? b(Object(t), !0).forEach(function(e) {
                            (0, h.A)(o, e, t[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(t, e))
                        })
                    }
                    return o
                }
                var f = (0, i.createContext)(void 0),
                    E = (0, i.createContext)(void 0),
                    P = o => {
                        var {
                            value: a,
                            children: t
                        } = o, e = (0, g.A)(o, j), s = (0, i.useContext)(f), n = (0, i.useContext)(E), l = typeof a == "number" ? {
                            "data-value-number": a.toString()
                        } : {
                            "data-value-string": a
                        };
                        return t({
                            focusedValue: s,
                            props: _(_(_({}, e), l), {}, {
                                "aria-checked": n === a,
                                role: "radio",
                                tabIndex: s === a ? 0 : -1
                            })
                        })
                    },
                    d = o => {
                        var {
                            children: a,
                            selected: t,
                            items: e,
                            onChange: s = u.lQ,
                            isBlockChanging: n
                        } = o, l = (0, i.useRef)(null), [p, m] = (0, i.useState)(t || e[0]);
                        (0, v.A)(() => {
                            t && m(t)
                        }, [t]);
                        var D = (0, i.useCallback)(() => {
                                var c = e.indexOf(p) === 0 ? e[e.length - 1] : e[e.indexOf(p) - 1];
                                m(c)
                            }, [p, e]),
                            k = (0, i.useCallback)(() => {
                                var c = e.indexOf(p) === e.length - 1 ? e[0] : e[e.indexOf(p) + 1];
                                m(c)
                            }, [p, e]),
                            w = (0, i.useCallback)(c => {
                                (0, y.f2)(c) || (((0, y.Mm)(c) || (0, y.IM)(c)) && (document.dir === "rtl" ? k() : D()), ((0, y.D2)(c) || (0, y.LV)(c)) && (document.dir === "rtl" ? D() : k()), ((0, y.C8)(c) || (0, y.Ci)(c)) && (c.preventDefault(), n || s(p, c)))
                            }, [p, t, n]),
                            C = (0, i.useCallback)(c => {
                                var A = c.target.closest('[role="radio"]');
                                if (!A) return null;
                                var I = A.getAttribute("data-value-number"),
                                    B = A.getAttribute("data-value-string");
                                return I ? parseInt(I, 10) : B
                            }, []),
                            R = (0, i.useCallback)(c => {
                                m(C(c))
                            }, [m, C]),
                            W = (0, i.useCallback)(c => {
                                var A = C(c);
                                A != null && s(A, c)
                            }, [s, C]);
                        return (0, v.A)(() => {
                            if (l.current) {
                                var c = l.current.querySelector('[tabindex="0"]');
                                c && c.focus()
                            }
                        }, [p, l]), (0, O.jsx)(f.Provider, {
                            value: p,
                            children: (0, O.jsx)(E.Provider, {
                                value: t,
                                children: (0, O.jsx)("div", {
                                    onClick: c => {
                                        c.persist(), W(c)
                                    },
                                    onFocus: R,
                                    onKeyDown: c => {
                                        c.persist(), w(c)
                                    },
                                    ref: l,
                                    role: "radiogroup",
                                    children: a
                                })
                            })
                        })
                    }
            },
            3467: (M, x, r) => {
                r.d(x, {
                    A: () => t
                });
                var h = r(7897),
                    g = r(25734),
                    i = r(17771),
                    v = r(94567),
                    y = r(32336),
                    u = r(87559),
                    O = r(46651),
                    j = ["children", "choiceRef", "className", "color", "contextBackgroundColor", "dataQa", "dataQaIndex", "disabled", "hasAppraisalResult", "hovered", "onClick", "opaque", "selectable", "selected", "tagName"];

                function b(e, s) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        s && (l = l.filter(function(p) {
                            return Object.getOwnPropertyDescriptor(e, p).enumerable
                        })), n.push.apply(n, l)
                    }
                    return n
                }

                function _(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var n = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? b(Object(n), !0).forEach(function(l) {
                            (0, h.A)(e, l, n[l])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(l) {
                            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
                        })
                    }
                    return e
                }
                var f = 40,
                    E = e => {
                        var {
                            $selected: s,
                            $color: n
                        } = e;
                        return s ? "inset 0 0 0 2px ".concat((0, u.JO)(n)) : "inset 0 0 0 1px ".concat((0, u.FN)(n))
                    },
                    P = e => {
                        var {
                            opaque: s,
                            contextBackgroundColor: n,
                            $color: l
                        } = e;
                        return s ? (0, u.jh)(n, l, .1) : (0, u.h3)(l)
                    },
                    d = (0, v.AH)(["&[data-selectable='true']:hover:not([aria-disabled='true']),&[data-force-hovered='true']{background-color:", ";}"], e => e.opaque ? (0, u.jh)(e.contextBackgroundColor, e.$color, .3) : (0, u.VI)(e.$color)),
                    o = v.Ay.div.withConfig({
                        displayName: "Root",
                        componentId: "sc-__sc-164255h-0"
                    })(["position:relative;display:flex;align-items:center;border-radius:var(--sampler-theme-border-radius);background-color:", ";box-shadow:", ";color:", ";max-width:100%;height:inherit;min-height:", "px;outline:0;padding-block-start:4px;padding-block-end:4px;transition-duration:", ";transition-property:background-color,color,border-color,opacity,box-shadow;transition-timing-function:", ";width:", ";word-break:break-word;[data-focus-visible][aria-disabled='false'] &{box-shadow:", ";background-color:", ";}", "{box-shadow:", ";background-color:", ";}", ";cursor:", ";opacity:", ";@media (hover:hover){", "}"], e => P(e), e => E(e), e => e.$color, f, y.qk, y.u3, e => e.width ? "".concat(e.width) : "100%", e => "inset 0 0 0 2px ".concat(e.$color), e => e.opaque ? (0, u.jh)(e.contextBackgroundColor, e.$color, .3) : (0, u.VI)(e.$color), u._W, e => e.$selected ? "inset 0 0 0 2px ".concat((0, u.JO)(e.$color)) : "inset 0 0 0 1px ".concat((0, u.FN)(e.$color)), e => e.opaque ? (0, u.jh)(e.contextBackgroundColor, e.$color, .1) : (0, u.h3)(e.$color), e => e.$selected && u.jx, e => e.disabled ? "auto" : "pointer", e => e.disabled && !e.hasAppraisalResult ? .5 : 1, d),
                    a = i.forwardRef((e, s) => {
                        var {
                            children: n,
                            choiceRef: l,
                            className: p,
                            color: m = "#777",
                            contextBackgroundColor: D = "#FFF",
                            dataQa: k,
                            dataQaIndex: w,
                            disabled: C = !1,
                            hasAppraisalResult: R = !1,
                            hovered: W,
                            onClick: c,
                            opaque: A,
                            selectable: I = !0,
                            selected: B = !1,
                            tagName: K
                        } = e, H = (0, g.A)(e, j), L = T => {
                            !C && c && c(l, T)
                        };
                        return (0, O.jsx)(o, _(_({
                            $color: m,
                            $selected: I && B,
                            "aria-disabled": C,
                            as: K,
                            className: p,
                            contextBackgroundColor: D,
                            "data-force-hovered": !C && W,
                            "data-qa": k,
                            "data-qa-index": w,
                            "data-qa-selected": B,
                            "data-selectable": I,
                            disabled: C,
                            hasAppraisalResult: R,
                            onClick: L,
                            opaque: A,
                            ref: s
                        }, H), {}, {
                            children: n
                        }))
                    });
                a.displayName = "BaseChoice";
                const t = a
            },
            15389: (M, x, r) => {
                r.d(x, {
                    A: () => s
                });
                var h = r(7897),
                    g = r(25734),
                    i = r(17771),
                    v = r(94567),
                    y = r(11558),
                    u = r.n(y),
                    O = r(80508),
                    j = r(4477),
                    b = r(49146),
                    _ = r(42896),
                    f = r(46651),
                    E = ["children", "choiceRef", "color", "contextBackgroundColor", "dataQa", "dataQaIndex", "disabled", "hovered", "keyHelperHint", "keyHelperLetter", "onClick", "opaque", "selectable", "selected", "withKeyHelperLetter", "withKeyHelperHint", "tagName", "onBlur", "ariaLabel", "ariaDescribedBy", "enableSelectionCheckmark", "appraisal"];

                function P(n, l) {
                    var p = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var m = Object.getOwnPropertySymbols(n);
                        l && (m = m.filter(function(D) {
                            return Object.getOwnPropertyDescriptor(n, D).enumerable
                        })), p.push.apply(p, m)
                    }
                    return p
                }

                function d(n) {
                    for (var l = 1; l < arguments.length; l++) {
                        var p = arguments[l] != null ? arguments[l] : {};
                        l % 2 ? P(Object(p), !0).forEach(function(m) {
                            (0, h.A)(n, m, p[m])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(p)) : P(Object(p)).forEach(function(m) {
                            Object.defineProperty(n, m, Object.getOwnPropertyDescriptor(p, m))
                        })
                    }
                    return n
                }
                var o = v.Ay.div.withConfig({
                        displayName: "ChoiceContent",
                        componentId: "sc-__sc-1r651ck-0"
                    })(["width:100%;min-width:100px;display:flex;align-items:center;flex:1;text-align:start;", ";word-break:break-word;"], n => !n.withKeyHelper && "padding-inline-start: var(--sampler-sem-radius-inlinestart)"),
                    a = v.Ay.div.withConfig({
                        displayName: "CheckboxContent",
                        componentId: "sc-__sc-1r651ck-1"
                    })(["flex-shrink:0;padding-block-start:0;padding-block-end:0;padding-inline-start:8px;padding-inline-end:10px;opacity:", ";"], n => n.visible ? 1 : 0),
                    t = i.forwardRef((n, l) => {
                        var {
                            children: p,
                            choiceRef: m,
                            color: D,
                            contextBackgroundColor: k,
                            dataQa: w,
                            dataQaIndex: C,
                            disabled: R,
                            hovered: W,
                            keyHelperHint: c = "Key",
                            keyHelperLetter: A,
                            onClick: I,
                            opaque: B,
                            selectable: K = !0,
                            selected: H,
                            withKeyHelperLetter: L = !0,
                            withKeyHelperHint: T = !0,
                            tagName: U,
                            onBlur: $,
                            ariaLabel: F,
                            ariaDescribedBy: V,
                            enableSelectionCheckmark: Q = !0,
                            appraisal: N
                        } = n, G = (0, g.A)(n, E), S = !!A && L;
                        return (0, f.jsxs)(_.A, d(d({
                            choiceRef: m,
                            color: D,
                            contextBackgroundColor: k,
                            dataQa: w,
                            dataQaIndex: C,
                            disabled: R,
                            hasAppraisalResult: !!N,
                            hovered: W,
                            onBlur: $,
                            onClick: I,
                            opaque: B,
                            ref: l,
                            selectable: K,
                            selected: H,
                            tagName: U
                        }, G), {}, {
                            children: [S && (0, f.jsx)(b.Ay, {
                                color: D,
                                contextBackgroundColor: k,
                                hint: T ? c : void 0,
                                inverted: H,
                                letter: A,
                                appraisal: N
                            }), p && (0, f.jsx)(o, {
                                "data-qa": "".concat(w, "-").concat(C, "-readable-element"),
                                "aria-label": F,
                                "aria-describedby": V,
                                withKeyHelper: S,
                                children: p
                            }), (0, f.jsx)(a, {
                                visible: K && H && Q,
                                children: (0, f.jsx)(j.A, {
                                    color: D,
                                    dataQa: "icon-check-svg",
                                    svg: O.A
                                })
                            })]
                        }))
                    });
                t.displayName = "CheckboxChoice";
                const s = (0, i.memo)(t, u())
            },
            23889: (M, x, r) => {
                r.d(x, {
                    c: () => d
                });
                var h = r(7897),
                    g = r(25734),
                    i = r(17771),
                    v = r(94567),
                    y = r(23890),
                    u = r(98847),
                    O = r(46651),
                    j = ["visible", "className", "style"];

                function b(o, a) {
                    var t = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(o);
                        a && (e = e.filter(function(s) {
                            return Object.getOwnPropertyDescriptor(o, s).enumerable
                        })), t.push.apply(t, e)
                    }
                    return t
                }

                function _(o) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a] != null ? arguments[a] : {};
                        a % 2 ? b(Object(t), !0).forEach(function(e) {
                            (0, h.A)(o, e, t[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(t, e))
                        })
                    }
                    return o
                }
                var f = o => (0, v.i7)(["0%{height:0;margin:0;}99%{height:", ";}100%{height:unset;}"], o),
                    E = v.Ay.div.withConfig({
                        displayName: "AnimationHeightWrapper",
                        componentId: "sc-__sc-1rkp6n7-0"
                    })(["animation:", " ", ";"], f("32px"), u.HI),
                    P = v.Ay.div.withConfig({
                        displayName: "AnimationSlideWrapper",
                        componentId: "sc-__sc-1rkp6n7-1"
                    })(["animation:", " ", ";"], y.MW.slideDown.in, u.HI);

                function d(o) {
                    var a = t => {
                        var {
                            visible: e,
                            className: s,
                            style: n
                        } = t, l = (0, g.A)(t, j);
                        return e ? (0, O.jsx)(E, {
                            className: s,
                            style: n,
                            children: (0, O.jsx)(P, {
                                children: (0, O.jsx)(o, _({
                                    visible: e
                                }, l))
                            })
                        }) : null
                    };
                    return a.displayName = "WithHeightAnimation(".concat(o.displayName, ")"), a
                }
            },
            39989: (M, x, r) => {
                r.d(x, {
                    Ck: () => E,
                    Fe: () => o,
                    Vr: () => b,
                    XY: () => d,
                    bL: () => O,
                    jG: () => a,
                    rP: () => _
                });
                var h = r(94567),
                    g = r(32336),
                    i = r(87559),
                    v = 24,
                    y = 1,
                    u = v - 2,
                    O = h.Ay.div.withConfig({
                        displayName: "Root",
                        componentId: "sc-__sc-1iyh3rv-0"
                    })(["display:flex;align-self:flex-start;margin-block-start:var(--spacing-50);margin-block-end:0;margin-inline-start:var(--spacing-100);margin-inline-end:var(--spacing-100);"]),
                    j = {
                        inverted: (0, h.AH)(["border-color:", ";background-color:", ";color:", ";"], t => t.$color, t => t.$color, t => t.contextBackgroundColor),
                        notInverted: (0, h.AH)(["border-color:", ";background-color:", ";color:", ";"], t => (0, i.FN)(t.$color), t => (0, i.JO)(t.contextBackgroundColor), t => t.$color)
                    },
                    b = h.Ay.div.withConfig({
                        displayName: "KeyHelperWrapper",
                        componentId: "sc-__sc-1iyh3rv-1"
                    })(["position:relative;width:", "px;min-width:", "px;height:", "px;border-radius:var(--sampler-comp-radius-keyhint);", ";font-family:", ";", ";"], v, u, v, g.yM.sizeN2, g.dH, t => t.inverted ? j.inverted : j.notInverted),
                    _ = h.Ay.span.withConfig({
                        displayName: "Letter",
                        componentId: "sc-__sc-1iyh3rv-2"
                    })(["width:", "px;height:", "px;display:flex;align-items:center;font-weight:700;justify-content:center;flex-direction:column;text-align:center;"], u, u),
                    f = {
                        inverted: (0, h.AH)(["border-color:", ";background-color:", ";"], t => t.$color, t => t.$color),
                        notInverted: (0, h.AH)(["border-color:", ";background-color:", ";"], t => (0, i.FN)(t.$color), t => t.contextBackgroundColor)
                    },
                    E = h.Ay.div.withConfig({
                        displayName: "Hint",
                        componentId: "sc-__sc-1iyh3rv-3"
                    })(["height:", "px;display:flex;justify-content:center;align-items:center;border-width:", "px;border-style:solid;border-radius:var(--sampler-comp-radius-keyhint);", ";"], v, y, t => t.inverted ? f.inverted : f.notInverted),
                    P = {
                        inverted: (0, h.AH)(["color:", ";"], t => (0, i.BB)(t.contextBackgroundColor)),
                        notInverted: (0, h.AH)(["color:", ";"], t => (0, i.BB)(t.$color))
                    },
                    d = h.Ay.span.withConfig({
                        displayName: "HintText",
                        componentId: "sc-__sc-1iyh3rv-4"
                    })(["display:none;padding-inline-start:", "px;white-space:nowrap;", ";"], g.zA - y, t => t.inverted ? P.inverted : P.notInverted),
                    o = (0, h.AH)([":focus:not([aria-disabled='true']) ", "{display:block;}&[data-force-focused='true'] ", "{display:block;}", " ", "{display:none;}"], d, d, i._W, d),
                    a = h.Ay.div.withConfig({
                        displayName: "HintWrapper",
                        componentId: "sc-__sc-1iyh3rv-5"
                    })(["position:absolute;inset-inline-end:0;"])
            },
            42896: (M, x, r) => {
                r.d(x, {
                    A: () => g
                });
                var h = r(3467);
                const g = h.A
            },
            49146: (M, x, r) => {
                r.d(x, {
                    Ay: () => P
                });
                var h = r(17771),
                    g = r(7897),
                    i = r(46651);

                function v(d, o) {
                    var a = Object.keys(d);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(d);
                        o && (t = t.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(d, e).enumerable
                        })), a.push.apply(a, t)
                    }
                    return a
                }

                function y(d) {
                    for (var o = 1; o < arguments.length; o++) {
                        var a = arguments[o] != null ? arguments[o] : {};
                        o % 2 ? v(Object(a), !0).forEach(function(t) {
                            (0, g.A)(d, t, a[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach(function(t) {
                            Object.defineProperty(d, t, Object.getOwnPropertyDescriptor(a, t))
                        })
                    }
                    return d
                }
                var u = d => (0, i.jsxs)("svg", y(y({
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, d), {}, {
                    children: [(0, i.jsx)("g", {
                        clipPath: "url(#clip0_5527_28)",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.75 1.289a.75.75 0 0 1 .06 1.059L4.186 8.65a.75.75 0 0 1-1.09.03L.22 5.806a.75.75 0 1 1 1.06-1.06L3.595 7.06 8.69 1.35a.75.75 0 0 1 1.06-.061Z"
                        })
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: "clip0_5527_28",
                            children: (0, i.jsx)("path", {
                                d: "M0 0h10v10H0z"
                            })
                        })
                    })]
                }));
                const O = u;
                var j = r(74146),
                    b = r(39989),
                    _ = d => {
                        var {
                            value: o
                        } = d;
                        return (0, i.jsx)(b.rP, {
                            children: o === "correct" ? (0, i.jsx)(O, {
                                fill: "currentColor"
                            }) : (0, i.jsx)(j.A, {
                                fill: "currentColor"
                            })
                        })
                    },
                    f = d => {
                        var {
                            color: o,
                            contextBackgroundColor: a,
                            letter: t,
                            hint: e,
                            inverted: s,
                            appraisal: n
                        } = d;
                        return (0, i.jsx)(b.bL, {
                            children: (0, i.jsx)(b.Vr, {
                                $color: o,
                                "aria-hidden": !0,
                                contextBackgroundColor: a,
                                inverted: s,
                                children: (0, i.jsx)(b.jG, {
                                    "data-qa": "key-hint-wrapper-".concat(t),
                                    children: (0, i.jsxs)(b.Ck, {
                                        $color: o,
                                        contextBackgroundColor: a,
                                        inverted: s,
                                        children: [e && (0, i.jsx)(b.XY, {
                                            contextBackgroundColor: a,
                                            "data-qa": "key-hint",
                                            inverted: s,
                                            children: e
                                        }), n && (0, i.jsx)(_, {
                                            value: n
                                        }), !n && t && (0, i.jsx)(b.rP, {
                                            children: t
                                        })]
                                    })
                                })
                            })
                        })
                    };
                const P = f
            }
        }
    ]);
})();