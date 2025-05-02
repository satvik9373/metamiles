"use strict";
(() => {
    (self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
        [9073], {
            1048: (D, h, e) => {
                e.d(h, {
                    z: () => c
                });
                var o = e(17771),
                    g = e(14794),
                    y = e.n(g),
                    c = E => {
                        var f = o.useRef(!1),
                            l = u => {
                                var a;
                                f.current || (f.current = !0, y().trackAnswerChanged(Object.assign({
                                    block_type: E.field.type,
                                    block_index: (a = E.blockIndex) !== null && a !== void 0 ? a : -1,
                                    block_ref: E.field.ref
                                }, u && {
                                    response_prefilled: "browser_autocomplete"
                                })))
                            },
                            d = (u, a) => {
                                y().sendEventWithCache(u, a)
                            };
                        return {
                            trackAnswerChangedOnce: l,
                            trackEvent: d
                        }
                    }
            },
            14259: (D, h, e) => {
                e.d(h, {
                    EB: () => o,
                    Es: () => f,
                    Eu: () => E,
                    uW: () => y
                });
                var o = (l, d) => l > d,
                    g = (l, d) => l === d,
                    y = (l, d) => "contains" in d && d.contains(l) || d instanceof Array && d.includes(l),
                    c = l => l.key.length === 1,
                    E = (l, d, u, a) => {
                        u && (o(d.length, u) || g(d.length, u)) && c(l) && (a == null || a(!0, "maxLength"))
                    },
                    f = (l, d, u) => {
                        var a, m;
                        if (d) {
                            var {
                                value: b
                            } = l.target, i = (a = l.clipboardData) === null || a === void 0 ? void 0 : a.types;
                            if (i && y("text/plain", i)) {
                                var n = (m = l.clipboardData) === null || m === void 0 ? void 0 : m.getData("text/plain");
                                n && o(b.length + n.length, d) && (u == null || u(!0, "maxLength"))
                            }
                        }
                    }
            },
            14278: (D, h, e) => {
                e.r(h), e.d(h, {
                    EmailRenderer: () => u,
                    default: () => b
                });
                var o = e(17771),
                    g = e(87559),
                    y = e(31610),
                    c = e(64944),
                    E = e(1048),
                    f = e(80391),
                    l = e(50025),
                    d = e(84404),
                    u = i => {
                        var n, {
                                onChange: w,
                                locale: P = "en",
                                field: A,
                                theme: _,
                                answer: r
                            } = i,
                            {
                                t
                            } = (0, c.c)(f, P),
                            {
                                trackAnswerChangedOnce: s
                            } = (0, E.z)(i);

                        function p(C, R) {
                            w([C]), !(0, d.SV)(A) && s(R)
                        }
                        return o.createElement(y.A, Object.assign({}, i, {
                            autoComplete: (0, g.r2)() ? "off" : "email",
                            color: (n = _.colors) === null || n === void 0 ? void 0 : n.secondary,
                            maxLength: l.yL,
                            onChange: p,
                            placeholder: t("email.defaults.placeholder"),
                            type: "email",
                            value: r,
                            dir: "ltr"
                        }))
                    },
                    a = i => o.createElement(u, Object.assign({}, i));
                const b = a
            },
            31610: (D, h, e) => {
                e.d(h, {
                    A: () => u
                });
                var o = e(17771),
                    g = e(75703),
                    y = e(87559),
                    c = e(52809),
                    E = e(87506),
                    f = e(14259),
                    l = function(a, m) {
                        var b = {};
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && m.indexOf(i) < 0 && (b[i] = a[i]);
                        if (a != null && typeof Object.getOwnPropertySymbols == "function")
                            for (var n = 0, i = Object.getOwnPropertySymbols(a); n < i.length; n++) m.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, i[n]) && (b[i[n]] = a[i[n]]);
                        return b
                    },
                    d = a => {
                        var {
                            ariaDescribedBy: m,
                            ariaLabelledBy: b,
                            autoComplete: i,
                            color: n = y.gB,
                            inputPattern: w,
                            isActive: P,
                            maxLength: A,
                            onChange: _ = c.lQ,
                            onCommit: r = c.lQ,
                            onError: t = c.lQ,
                            onBlur: s = c.lQ,
                            onFocus: p = c.lQ,
                            inputId: C = "",
                            value: R = [],
                            focusableRef: M
                        } = a, j = l(a, ["ariaDescribedBy", "ariaLabelledBy", "autoComplete", "color", "inputPattern", "isActive", "maxLength", "onChange", "onCommit", "onError", "onBlur", "onFocus", "inputId", "value", "focusableRef"]), I = (0, o.useRef)(null), W = (0, o.useRef)(), x = (0, o.useMemo)(() => R.length > 0 ? R[0] : "", [R]), [k, L] = (0, o.useState)(x);
                        (0, o.useEffect)(() => {
                            x !== k && L(x)
                        }, [x]);
                        var $ = v => {
                                var O, K;
                                if (A) {
                                    var T = (O = v.clipboardData) === null || O === void 0 ? void 0 : O.types;
                                    if (T && (0, f.uW)("text/plain", T)) {
                                        var S = (K = v.clipboardData) === null || K === void 0 ? void 0 : K.getData("text/plain");
                                        S && (0, f.EB)(k.length + S.length, A) && t(!0, "maxLength")
                                    }
                                }
                            },
                            U = (0, o.useCallback)(v => {
                                var O;
                                (0, E.Ci)(v) ? ((0, y.CI)() && ((O = I == null ? void 0 : I.current) === null || O === void 0 || O.blur()), v == null || v.persist(), P && r(v)) : W.current = {
                                    key: v.key
                                }, P && (0, f.Eu)(v, v.target.value, A, t)
                            }, [P, r, t, A]),
                            B = v => {
                                var O;
                                if (P) {
                                    var K = ((O = W.current) === null || O === void 0 ? void 0 : O.key) === "Unidentified",
                                        T = v.target.value;
                                    L(T), _(T.slice(0, A), K)
                                }
                            };
                        return o.createElement(g.A, Object.assign({
                            autoComplete: (0, y.r2)() ? "off" : i,
                            getRef: v => {
                                M && (M.current = v), I.current = v
                            },
                            onKeyDown: U,
                            onChange: B,
                            onPaste: $,
                            onFocus: p,
                            onBlur: s,
                            maxLength: A,
                            name: i,
                            inputId: C,
                            value: k,
                            color: n,
                            "aria-describedby": m,
                            "aria-labelledby": b,
                            tabIndex: 0,
                            pattern: w
                        }, j))
                    };
                const u = o.memo(d)
            },
            64944: (D, h, e) => {
                e.d(h, {
                    c: () => y
                });
                var o = e(17771),
                    g = e(73623),
                    y = (c, E, f) => (0, o.useMemo)(() => (0, g.H)(c, E, f), [c, E, f])
            },
            75703: (D, h, e) => {
                e.d(h, {
                    A: () => _
                });
                var o = e(7897),
                    g = e(25734),
                    y = e(17771),
                    c = e(32336),
                    E = e(86881),
                    f = e(57773),
                    l = e(94567),
                    d = e(34717),
                    u = e(87559),
                    a = (0, l.AH)(["", ";"], r => {
                        var {
                            $size: t
                        } = r;
                        return t ? c.yM[t] : null
                    }),
                    m = l.Ay.input.withConfig({
                        displayName: "InputField",
                        componentId: "sc-__sc-26uh88-0"
                    })(["display:block;width:100%;font-family:inherit;color:", ";", ";border:none;outline:none;border-radius:0;appearance:none;background:none;transform:translateZ(0);-webkit-transform:translateZ(0);", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:unset;&::-ms-clear{display:none;width:0;height:0;}-webkit-text-fill-color:", ";background-color:transparent !important;animation:native-autofill-in 1ms;-webkit-animation:native-autofill-in 1ms;transition:background-color 100000000s,box-shadow ", " ", ";box-shadow:", ";&:focus{box-shadow:", ";}&:read-only{caret-color:transparent;&:focus{box-shadow:", ";}}&::placeholder{font-family:inherit;font-weight:400;opacity:1;color:", ";line-height:normal;}[dir='rtl'] &[id^='number']::placeholder{direction:rtl;text-align:right;}&:-webkit-autofill,&:-webkit-autofill-selected,&:-webkit-autofill:focus,&:-webkit-autofill:hover,&:-webkit-autofill:active{", ";background-color:transparent;-webkit-text-fill-color:", ";-webkit-tap-highlight-color:transparent;}&:-webkit-autofill::first-line{", ";-webkit-text-fill-color:", ";}"], r => {
                        var {
                            $color: t
                        } = r;
                        return t
                    }, r => r.$usedInDropdown ? `
   padding-block-start: 0;
   padding-block-end: var(--spacing-100);
   padding-inline-start: 0;
   padding-inline-end: var(--spacing-400);
  ` : `
   padding-block-start: 0;
   padding-block-end: var(--spacing-100);
   padding-inline-start: 0;
   padding-inline-end: 0;
  `, a, r => {
                        var {
                            value: t,
                            $color: s,
                            backgroundColor: p
                        } = r;
                        return t ? s : (0, u.jh)(s, p, .7)
                    }, c.qk, c.u3, r => {
                        var {
                            $showBorder: t,
                            $color: s
                        } = r;
                        return t ? "0 1px ".concat((0, u.VI)(s)) : "none"
                    }, r => {
                        var {
                            $showBorder: t,
                            $color: s
                        } = r;
                        return t ? "0 2px ".concat(s) : "none"
                    }, r => {
                        var {
                            $showBorder: t,
                            $color: s
                        } = r;
                        return t ? "0 1px ".concat((0, u.VI)(s)) : "none"
                    }, r => {
                        var {
                            $color: t,
                            backgroundColor: s
                        } = r;
                        return (0, u.jh)(t, s, .7)
                    }, a, r => {
                        var {
                            $color: t
                        } = r;
                        return t
                    }, a, r => {
                        var {
                            $color: t
                        } = r;
                        return t
                    }),
                    b = l.Ay.div.withConfig({
                        displayName: "InputWrapper",
                        componentId: "sc-__sc-26uh88-1"
                    })(["width:100%;position:relative;"]),
                    i = e(46651),
                    n = ["color", "dataQa", "getRef", "inputId", "showBorder", "size", "type", "usedInDropdown", "isReadOnly", "fontSizeType"];

                function w(r, t) {
                    var s = Object.keys(r);
                    if (Object.getOwnPropertySymbols) {
                        var p = Object.getOwnPropertySymbols(r);
                        t && (p = p.filter(function(C) {
                            return Object.getOwnPropertyDescriptor(r, C).enumerable
                        })), s.push.apply(s, p)
                    }
                    return s
                }

                function P(r) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? w(Object(s), !0).forEach(function(p) {
                            (0, o.A)(r, p, s[p])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : w(Object(s)).forEach(function(p) {
                            Object.defineProperty(r, p, Object.getOwnPropertyDescriptor(s, p))
                        })
                    }
                    return r
                }
                var A = r => {
                    var t = (0, l.DP)(),
                        {
                            color: s,
                            dataQa: p,
                            getRef: C,
                            inputId: R,
                            showBorder: M = !0,
                            size: j,
                            type: I = "text",
                            usedInDropdown: W = !1,
                            isReadOnly: x = !1,
                            fontSizeType: k = c.go.inputText
                        } = r,
                        L = (0, g.A)(r, n);
                    return (0, i.jsx)(f.J9, {
                        children: $ => {
                            var {
                                breakpoint: U
                            } = $, B, v, O = j ? (0, E.Vu)(j, U) : (0, d.$v)(k, U, t == null || (B = t.fields) === null || B === void 0 ? void 0 : B.fontSize);
                            return (0, i.jsx)(b, {
                                children: (0, i.jsx)(m, P({
                                    "data-qa": p,
                                    id: R,
                                    readOnly: x,
                                    ref: C,
                                    type: I,
                                    $color: s,
                                    $showBorder: M,
                                    $size: O,
                                    backgroundColor: t == null || (v = t.colors) === null || v === void 0 ? void 0 : v.background,
                                    $usedInDropdown: W
                                }, L))
                            })
                        }
                    })
                };
                const _ = A
            },
            78306: (D, h, e) => {
                e.d(h, {
                    A: () => g
                });
                var o = {
                    ARROW_DOWN: "ArrowDown",
                    ARROW_LEFT: "ArrowLeft",
                    ARROW_RIGHT: "ArrowRight",
                    ARROW_UP: "ArrowUp",
                    BACKSPACE: "Backspace",
                    DEAD: "Dead",
                    DELETE: "Delete",
                    ENTER: "Enter",
                    ESCAPE: "Escape",
                    PAGE_DOWN: "PageDown",
                    PAGE_UP: "PageUp",
                    SPACE: " ",
                    TAB: "Tab",
                    UNIDENTIFIED: "Unidentified"
                };
                const g = o
            },
            87506: (D, h, e) => {
                e.d(h, {
                    C8: () => a,
                    Ci: () => f,
                    IM: () => b,
                    Ku: () => u,
                    LV: () => m,
                    eb: () => E,
                    f2: () => g,
                    fQ: () => d,
                    jd: () => y,
                    nx: () => i,
                    vY: () => c
                });
                var o = e(78306);

                function g(n) {
                    return n.ctrlKey || n.metaKey
                }

                function y(n) {
                    return f(n) && g(n)
                }

                function c(n) {
                    return n.key === o.A.TAB
                }

                function E(n) {
                    return n.shiftKey
                }

                function f(n) {
                    return n.key === o.A.ENTER && !l(n.keyCode)
                }
                var l = n => n === 229;

                function d(n) {
                    return n.key === o.A.BACKSPACE
                }

                function u(n) {
                    return n >= "a" && n <= "z"
                }

                function a(n) {
                    return n.key === o.A.SPACE
                }

                function m(n) {
                    return n.key === o.A.ARROW_DOWN
                }

                function b(n) {
                    return n.key === o.A.ARROW_UP
                }

                function i(n) {
                    return n.key === o.A.ESCAPE
                }
            }
        }
    ]);
})();