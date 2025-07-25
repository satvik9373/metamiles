! function() {
    "use strict";
    var e = {
            6664: function(e, t, n) {
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    a = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                        return i(t, e), t
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = n(6654),
                    u = a(n(1920));

                function l(e) {
                    void 0 === e && (e = !1), s({
                        forceReload: e
                    }), (0, c.initializeLiveEmbeds)({
                        forceReload: e,
                        onLiveEmbedLoad: function(t) {
                            s({
                                container: t,
                                forceReload: e
                            })
                        }
                    })
                }

                function s(e) {
                    (0, c.initializePopovers)(e), (0, c.initializePopups)(e), (0, c.initializeSidetabs)(e), (0, c.initializeSliders)(e), (0, c.initializeWidgets)(e)
                }
                var d = function() {
                    return l(!1)
                };
                e.exports = o(o({}, u), {
                    load: d,
                    reload: function() {
                        return l(!0)
                    }
                }), document.addEventListener("DOMContentLoaded", d, !1), "interactive" !== document.readyState && "complete" !== document.readyState || d()
            },
            8027: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_DOMAIN = t.POPUP_SIZE = t.SLIDER_WIDTH = t.SLIDER_POSITION = t.LIVE_EMBED_ATTRIBUTE = t.SIDETAB_ATTRIBUTE = t.WIDGET_ATTRIBUTE = t.SLIDER_ATTRIBUTE = t.POPUP_ATTRIBUTE = t.POPOVER_ATTRIBUTE = void 0, t.POPOVER_ATTRIBUTE = "data-tf-popover", t.POPUP_ATTRIBUTE = "data-tf-popup", t.SLIDER_ATTRIBUTE = "data-tf-slider", t.WIDGET_ATTRIBUTE = "data-tf-widget", t.SIDETAB_ATTRIBUTE = "data-tf-sidetab", t.LIVE_EMBED_ATTRIBUTE = "data-tf-live", t.SLIDER_POSITION = "right", t.SLIDER_WIDTH = 800, t.POPUP_SIZE = 100, t.DEFAULT_DOMAIN = "form.typeform.com"
            },
            7528: function(e, t, n) {
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                        }
                        return n
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createPopover = void 0;
                var i = n(6797),
                    a = n(1320),
                    c = function(e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t))
                    },
                    u = function(e, t) {
                        void 0 === e && (e = "span"), void 0 === t && (t = "tf-v1-popover-button-icon");
                        var n = document.createElement(e);
                        return n.className = "".concat(t, " tf-v1-close-icon"), n.innerHTML = i.closeIconSvg, n.dataset.testid = t, n
                    },
                    l = {
                        buttonColor: "#3a7685"
                    };
                t.createPopover = function(e, t) {
                    void 0 === t && (t = {});
                    var n, s, d, f = o(o({}, l), t),
                        p = f.domain,
                        v = r(f, ["domain"]),
                        m = (0, i.createIframe)("popover", {
                            formId: e,
                            domain: p,
                            options: v
                        }),
                        b = m.iframe,
                        h = m.embedId,
                        y = m.refresh,
                        g = m.focus,
                        O = function(e, t) {
                            var n = document.createElement("div");
                            return n.className = "tf-v1-popover", n.dataset.testid = "tf-v1-popover", (0, i.setElementSize)(n, {
                                width: e,
                                height: t
                            })
                        }(v.width, v.height),
                        _ = function() {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-popover-wrapper", e.dataset.testid = "tf-v1-popover-wrapper", e
                        }(),
                        w = function(e, t) {
                            var n = (0, i.getTextColor)(t),
                                o = document.createElement("div");
                            o.className = "tf-v1-popover-button-icon";
                            var r = (0, i.triggerIconSvg)(n),
                                a = null == e ? void 0 : e.startsWith("http");
                            return o.innerHTML = a ? "<img alt='popover trigger icon button' src='".concat(e, "'/>") : null != e ? e : r, o.dataset.testid = "default-icon", o
                        }(v.customIcon, v.buttonColor || l.buttonColor),
                        E = function() {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return t.className = "tf-v1-popover-button-icon", t.dataset.testid = "spinner-icon", t.append(e), t
                        }(),
                        P = u(),
                        S = u("button", "tf-v1-popover-close"),
                        T = function(e, t) {
                            void 0 === t && (t = {});
                            var n = (0, i.getTextColor)(e),
                                o = document.createElement("button");
                            return o.className = "tf-v1-popover-button", o.dataset.testid = "tf-v1-popover-button", o.style.backgroundColor = e, o.style.color = n, (0, i.addAttributesToElement)(o, t), o
                        }(v.buttonColor || l.buttonColor, v.buttonProps);
                    (v.container || document.body).append(O), _.append(b), O.append(T), O.append(S), T.append(w);
                    var j = function() {
                        s && s.parentNode && (s.classList.add("closing"), setTimeout((function() {
                            (0, i.unmountElement)(s)
                        }), 250))
                    };
                    v.tooltip && v.tooltip.length > 0 && (s = function(e, t) {
                        var n = document.createElement("span");
                        n.className = "tf-v1-popover-tooltip-close", n.dataset.testid = "tf-v1-popover-tooltip-close", n.innerHTML = i.closeIconSvg, n.onclick = t;
                        var o = document.createElement("div");
                        o.className = "tf-v1-popover-tooltip-text", o.innerHTML = e;
                        var r = document.createElement("div");
                        return r.className = "tf-v1-popover-tooltip", r.dataset.testid = "tf-v1-popover-tooltip", r.appendChild(o), r.appendChild(n), r
                    }(v.tooltip, j), O.append(s)), v.notificationDays && (v.enableSandbox || (0, a.canBuildNotificationDot)(e)) && (d = (0, a.buildNotificationDot)(), T.append(d)), b.onload = function(e) {
                        (null == e ? void 0 : e.isTrusted) && (O.classList.add("open"), _.style.opacity = "1", S.style.opacity = "1", c(E, P), (0, i.addCustomKeyboardListener)(M))
                    };
                    var I = function() {
                            (0, i.isOpen)(_) || (j(), d && (d.classList.add("closing"), v.notificationDays && !v.enableSandbox && (0, a.saveNotificationDotHideUntilTime)(e, v.notificationDays), setTimeout((function() {
                                (0, i.unmountElement)(d)
                            }), 250)), setTimeout((function() {
                                (0, i.isInPage)(_) ? (_.style.opacity = "0", S.style.opacity = "0", _.style.display = "flex", setTimeout((function() {
                                    O.classList.add("open"), _.style.opacity = "1", S.style.opacity = "1"
                                })), c(w, P)) : (O.append(_), c(w, E), _.style.opacity = "0", S.style.opacity = "0")
                            })))
                        },
                        M = function() {
                            var n;
                            (0, i.isOpen)(O) && ((0, i.handlePreventReopenOnClose)(v, e), null === (n = t.onClose) || void 0 === n || n.call(t), setTimeout((function() {
                                v.keepSession ? _.style.display = "none" : (0, i.unmountElement)(_), O.classList.remove("open"), c(P, w)
                            }), 250))
                        };
                    (0, i.setAutoClose)(h, v.autoClose, M);
                    var C = function() {
                        (0, i.isOpen)(_) ? M(): I()
                    };
                    return T.onclick = (0, i.invokeWithoutDefault)(C), S.onclick = (0, i.invokeWithoutDefault)(M), v.open && !(0, i.isOpen)(_) && (n = (0, i.handleCustomOpen)(I, v, e)), {
                        open: I,
                        close: M,
                        toggle: C,
                        refresh: y,
                        focus: g,
                        unmount: function() {
                            (0, i.unmountElement)(O), v.open && (null == n ? void 0 : n.remove) && n.remove()
                        }
                    }
                }
            },
            1797: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(7528), t), r(n(6100), t)
            },
            1320: function(e, t) {
                var n = this && this.__assign || function() {
                    return n = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, n.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildNotificationDot = t.canBuildNotificationDot = t.saveNotificationDotHideUntilTime = void 0;
                var o = "tfNotificationData",
                    r = function() {
                        var e = localStorage.getItem(o);
                        return e ? JSON.parse(e) : {}
                    },
                    i = function(e) {
                        e && localStorage.setItem(o, JSON.stringify(e))
                    };
                t.saveNotificationDotHideUntilTime = function(e, t) {
                    var o, a = new Date;
                    a.setDate(a.getDate() + t), i(n(n({}, r()), ((o = {})[e] = {
                        hideUntilTime: a.getTime()
                    }, o)))
                }, t.canBuildNotificationDot = function(e) {
                    var t = function(e) {
                        var t;
                        return (null === (t = r()[e]) || void 0 === t ? void 0 : t.hideUntilTime) || 0
                    }(e);
                    return (new Date).getTime() > t && (t && function(e) {
                        var t = r();
                        delete t[e], i(t)
                    }(e), !0)
                }, t.buildNotificationDot = function() {
                    var e = document.createElement("span");
                    return e.className = "tf-v1-popover-unread-dot", e.dataset.testid = "tf-v1-popover-unread-dot", e
                }
            },
            6100: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            9630: function(e, t, n) {
                var o = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createPopup = void 0;
                var r = n(6797),
                    i = n(8027),
                    a = n(6797);
                t.createPopup = function(e, t) {
                    if (void 0 === t && (t = {}), !(0, r.hasDom)()) return {
                        open: function() {},
                        close: function() {},
                        toggle: function() {},
                        refresh: function() {},
                        focus: function() {},
                        unmount: function() {}
                    };
                    var n, c = t.width,
                        u = t.height,
                        l = t.size,
                        s = void 0 === l ? i.POPUP_SIZE : l,
                        d = t.onClose,
                        f = t.domain,
                        p = o(t, ["width", "height", "size", "onClose", "domain"]),
                        v = (0, r.createIframe)("popup", {
                            formId: e,
                            domain: f,
                            options: p
                        }),
                        m = v.iframe,
                        b = v.embedId,
                        h = v.refresh,
                        y = v.focus,
                        g = document.body.style.overflow,
                        O = function() {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-popup", e.dataset.testid = "tf-v1-popup", e.style.opacity = "0", e
                        }(),
                        _ = function() {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-spinner", e
                        }(),
                        w = function(e, t, n) {
                            var o = document.createElement("div");
                            return o.className = "tf-v1-iframe-wrapper", o.style.opacity = "0", (0, r.isDefined)(e) && (0, r.isDefined)(t) ? (0, r.setElementSize)(o, {
                                width: e,
                                height: t
                            }) : (o.style.width = "calc(".concat(n, "% - 80px)"), o.style.height = "calc(".concat(n, "% - 80px)"), o)
                        }(c, u, s);
                    w.append(m), O.append(_), O.append(w);
                    var E = p.container || document.body;
                    m.onload = function(e) {
                        (null == e ? void 0 : e.isTrusted) && (w.style.opacity = "1", setTimeout((function() {
                            _.style.display = "none"
                        }), 250), (0, r.addCustomKeyboardListener)(S))
                    };
                    var P = function() {
                            (0, a.isOpen)(O) || ((0, a.isInPage)(O) ? O.style.display = "flex" : (_.style.display = "block", E.append(O)), document.body.style.overflow = "hidden", setTimeout((function() {
                                O.style.opacity = "1"
                            })))
                        },
                        S = function() {
                            (0, a.isOpen)(O) && ((0, r.handlePreventReopenOnClose)(p, e), null == d || d(), O.style.opacity = "0", document.body.style.overflow = g, setTimeout((function() {
                                p.keepSession ? O.style.display = "none" : T()
                            }), 250))
                        };
                    w.append(function(e) {
                        var t = document.createElement("button");
                        return t.className = "tf-v1-close tf-v1-close-icon", t.innerHTML = r.closeIconSvg, t.ariaLabel = "Close", t.onclick = (0, r.invokeWithoutDefault)(e), t
                    }(S)), (0, r.setAutoClose)(b, p.autoClose, S), p.open && !(0, a.isOpen)(O) && (n = (0, r.handleCustomOpen)(P, p, e));
                    var T = function() {
                        (0, r.unmountElement)(O), p.open && (null == n ? void 0 : n.remove) && n.remove()
                    };
                    return {
                        open: P,
                        close: S,
                        toggle: function() {
                            (0, a.isOpen)(O) ? S(): P()
                        },
                        refresh: h,
                        focus: y,
                        unmount: T
                    }
                }
            },
            5970: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(9630), t), r(n(7394), t)
            },
            7394: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            382: function(e, t, n) {
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                        }
                        return n
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSidetab = void 0;
                var i = n(6797),
                    a = {
                        buttonColor: "#3a7685",
                        buttonText: "Launch me"
                    },
                    c = function(e, t) {
                        void 0 === e && (e = "div"), void 0 === t && (t = "tf-v1-sidetab-button-icon");
                        var n = document.createElement(e);
                        return n.className = "".concat(t, " tf-v1-close-icon"), n.innerHTML = i.closeIconSvg, n.dataset.testid = t, n
                    },
                    u = function(e, t) {
                        var n = e.parentNode;
                        n && (n.removeChild(e), n.appendChild(t))
                    };
                t.createSidetab = function(e, t) {
                    void 0 === t && (t = {});
                    var n, l = o(o({}, a), t),
                        s = l.domain,
                        d = r(l, ["domain"]),
                        f = (0, i.createIframe)("side-tab", {
                            formId: e,
                            domain: s,
                            options: d
                        }),
                        p = f.iframe,
                        v = f.embedId,
                        m = f.refresh,
                        b = f.focus,
                        h = function(e, t, n, o) {
                            var r = document.createElement("div");
                            return r.className = "tf-v1-sidetab", r.dataset.testid = "tf-v1-sidetab", (0, i.setElementSize)(r, {
                                width: e,
                                height: t
                            }), void 0 !== n ? (r.style.top = "calc(".concat((0, i.getValueWithUnits)(n), " + ").concat((0, i.getValueWithUnits)(t || 580), " / 2)"), r.style.bottom = "auto") : void 0 !== o && (r.style.top = "auto", r.style.bottom = "calc(".concat((0, i.getValueWithUnits)(o), " - ").concat((0, i.getValueWithUnits)(t || 580), " / 2)")), r
                        }(d.width, d.height, d.top, d.bottom),
                        y = function() {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-sidetab-wrapper", e.dataset.testid = "tf-v1-sidetab-wrapper", e
                        }(),
                        g = function() {
                            var e = document.createElement("div");
                            e.className = "tf-v1-spinner";
                            var t = document.createElement("div");
                            return t.className = "tf-v1-sidetab-button-icon", t.dataset.testid = "spinner-icon", t.append(e), t
                        }(),
                        O = function(e) {
                            var t = e.backgroundColor,
                                n = e.textColor,
                                o = e.width,
                                r = e.height,
                                a = e.align,
                                c = void 0 === a ? "center" : a,
                                u = e.buttonProps,
                                l = void 0 === u ? {} : u,
                                s = document.createElement("button");
                            return s.className = "tf-v1-sidetab-button", s.style.backgroundColor = t, s.style.color = n || (0, i.getTextColor)(t), (0, i.addAttributesToElement)(s, l), (0, i.setElementSize)(s, {
                                width: o,
                                height: r
                            }), r && (s.style.left = "-".concat((0, i.getValueWithUnits)(r))), "top" === c ? (s.style.transform = "rotate(-90deg) translateX(-100%)", s.style.top = "0") : "bottom" === c && (s.style.transform = "rotate(-90deg) translateX(0)", s.style.top = "auto", s.style.bottom = "-".concat((0, i.getValueWithUnits)(r || 48))), s
                        }({
                            backgroundColor: d.buttonColor || a.buttonColor,
                            textColor: d.buttonTextColor,
                            width: d.buttonHeight,
                            height: d.buttonWidth,
                            align: d.buttonAlign,
                            buttonProps: d.buttonProps
                        }),
                        _ = function(e, t) {
                            var n = document.createElement("span");
                            return n.className = "tf-v1-sidetab-button-text", n.innerHTML = e, t && (n.style.fontSize = (0, i.getValueWithUnits)(t)), n
                        }(d.buttonText || a.buttonText, d.buttonTextSize),
                        w = function(e, t, n, o) {
                            var r = n || (0, i.getTextColor)(t),
                                a = document.createElement("div");
                            a.className = "tf-v1-sidetab-button-icon", o && (a.style.width = (0, i.getValueWithUnits)(o), a.style.height = (0, i.getValueWithUnits)(o));
                            var c = (0, i.triggerIconSvg)(r),
                                u = null == e ? void 0 : e.startsWith("http");
                            return a.innerHTML = u ? "<img alt='popover trigger icon button' src='".concat(e, "'/>") : null != e ? e : c, a.dataset.testid = "default-icon", a
                        }(d.customIcon, d.buttonColor || a.buttonColor, d.buttonTextColor, d.buttonTextSize),
                        E = c(),
                        P = c("button", "tf-v1-sidetab-close");
                    (d.container || document.body).append(h), y.append(p), h.append(O), h.append(P), O.append(w), O.append(_), setTimeout((function() {
                        h.classList.add("ready")
                    }), 250), p.onload = function(e) {
                        (null == e ? void 0 : e.isTrusted) && (h.classList.add("open"), u(g, E), (0, i.addCustomKeyboardListener)(T))
                    };
                    var S = function() {
                            (0, i.isOpen)(y) || ((0, i.isInPage)(y) ? (y.style.display = "flex", h.classList.add("open"), u(w, E)) : (h.append(y), u(w, g)))
                        },
                        T = function() {
                            var t;
                            (0, i.isOpen)(y) && ((0, i.handlePreventReopenOnClose)(d, e), null === (t = d.onClose) || void 0 === t || t.call(d), h.classList.remove("open"), setTimeout((function() {
                                d.keepSession ? y.style.display = "none" : (0, i.unmountElement)(y), u(E, w)
                            }), 250))
                        };
                    (0, i.setAutoClose)(v, d.autoClose, T);
                    var j = function() {
                        (0, i.isOpen)(y) ? T(): S()
                    };
                    return O.onclick = (0, i.invokeWithoutDefault)(j), P.onclick = (0, i.invokeWithoutDefault)(T), d.open && !(0, i.isOpen)(y) && (n = (0, i.handleCustomOpen)(S, d, e)), {
                        open: S,
                        close: T,
                        toggle: j,
                        refresh: m,
                        focus: b,
                        unmount: function() {
                            (0, i.unmountElement)(h), d.open && (null == n ? void 0 : n.remove) && n.remove()
                        }
                    }
                }
            },
            1434: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(382), t), r(n(7668), t)
            },
            7668: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            2603: function(e, t, n) {
                var o = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSlider = void 0;
                var r = n(6797),
                    i = n(8027);
                t.createSlider = function(e, t) {
                    if (void 0 === t && (t = {}), !(0, r.hasDom)()) return {
                        open: function() {},
                        close: function() {},
                        toggle: function() {},
                        refresh: function() {},
                        focus: function() {},
                        unmount: function() {}
                    };
                    var n, a = t.position,
                        c = void 0 === a ? i.SLIDER_POSITION : a,
                        u = t.width,
                        l = void 0 === u ? i.SLIDER_WIDTH : u,
                        s = t.onClose,
                        d = t.domain,
                        f = o(t, ["position", "width", "onClose", "domain"]),
                        p = (0, r.createIframe)("slider", {
                            formId: e,
                            domain: d,
                            options: f
                        }),
                        v = p.iframe,
                        m = p.embedId,
                        b = p.refresh,
                        h = p.focus,
                        y = document.body.style.overflow,
                        g = function(e) {
                            var t = document.createElement("div");
                            return t.className = "tf-v1-slider ".concat(e), t.dataset.testid = "tf-v1-slider", t.style.opacity = "0", t
                        }(c),
                        O = function() {
                            var e = document.createElement("div");
                            return e.className = "tf-v1-spinner", e
                        }(),
                        _ = function(e, t) {
                            var n = document.createElement("div");
                            return n.className = "tf-v1-iframe-wrapper", n.style[e] = "-100%", (0, r.setElementSize)(n, {
                                width: t
                            })
                        }(c, l);
                    _.append(v), g.append(O), g.append(_);
                    var w = f.container || document.body;
                    v.onload = function(e) {
                        (null == e ? void 0 : e.isTrusted) && (_.style[c] = "0", setTimeout((function() {
                            O.style.display = "none"
                        }), 500), (0, r.addCustomKeyboardListener)(P))
                    };
                    var E = function() {
                            (0, r.isOpen)(g) || ((0, r.isInPage)(g) ? (g.style.display = "flex", setTimeout((function() {
                                _.style[c] = "0"
                            }))) : (w.append(g), O.style.display = "block"), document.body.style.overflow = "hidden", setTimeout((function() {
                                g.style.opacity = "1"
                            })))
                        },
                        P = function() {
                            (0, r.isOpen)(g) && ((0, r.handlePreventReopenOnClose)(f, e), null == s || s(), g.style.opacity = "0", _.style[c] = "-100%", document.body.style.overflow = y, setTimeout((function() {
                                f.keepSession ? g.style.display = "none" : S()
                            }), 500))
                        };
                    (0, r.setAutoClose)(m, f.autoClose, P), _.append(function(e) {
                        var t = document.createElement("button");
                        return t.className = "tf-v1-close tf-v1-close-icon", t.innerHTML = r.closeIconSvg, t.ariaLabel = "Close", t.onclick = (0, r.invokeWithoutDefault)(e), t
                    }(P)), f.open && !(0, r.isOpen)(g) && (n = (0, r.handleCustomOpen)(E, f, e));
                    var S = function() {
                        (0, r.unmountElement)(g), f.open && (null == n ? void 0 : n.remove) && n.remove()
                    };
                    return {
                        open: E,
                        close: P,
                        toggle: function() {
                            (0, r.isOpen)(g) ? P(): E()
                        },
                        refresh: b,
                        focus: h,
                        unmount: S
                    }
                }
            },
            4071: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(2603), t), r(n(3162), t)
            },
            3162: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            718: function(e, t, n) {
                var o = this && this.__rest || function(e, t) {
                        var n = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                        }
                        return n
                    },
                    r = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, r, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createWidget = void 0;
                var i = n(6797),
                    a = n(8554),
                    c = n(2313),
                    u = n(1126);
                t.createWidget = function(e, t) {
                    if (!(0, i.hasDom)()) return {
                        refresh: function() {},
                        focus: function() {},
                        unmount: function() {}
                    };
                    var n = t.domain,
                        l = o(t, ["domain"]);
                    l.inlineOnMobile = t.inlineOnMobile || t.fullScreen;
                    var s = document.body.style.overflow;
                    l.inlineOnMobile || !l.forceTouch && !(0, i.isFullscreen)() || (l.displayAsFullScreenModal = !0, l.forceTouch = !0, l.autoResize = !1);
                    var d = (0, i.createIframe)("widget", {
                            formId: e,
                            domain: n,
                            options: l
                        }),
                        f = d.embedId,
                        p = d.iframe,
                        v = d.refresh,
                        m = d.focus,
                        b = (0, c.buildWidget)(p, l.width, l.height);
                    if (l.fullScreen && (0, u.overrideFullScreenStyles)(t.container, p), l.autoResize) {
                        var h = r("string" == typeof l.autoResize ? l.autoResize.split(",").map((function(e) {
                                return parseInt(e)
                            })) : [], 2),
                            y = h[0],
                            g = h[1];
                        window.addEventListener("message", (0, a.getFormHeightChangedHandler)(f, (function(e) {
                            var n = Math.max(e.height, y || 0);
                            g && (n = Math.min(n, g)), t.container.style.height = "".concat(n, "px")
                        })))
                    }
                    l.autoFocus && window.addEventListener("message", (0, a.getFormReadyHandler)(f, (function() {
                        setTimeout((function() {
                            m()
                        }), 1e3)
                    })));
                    var O, _ = function() {
                        return t.container.append(b)
                    };
                    if (t.container.innerHTML = "", t.lazy ? (0, i.lazyInitialize)(t.container, _) : _(), l.displayAsFullScreenModal) {
                        var w = "",
                            E = t.container,
                            P = E.style.height;
                        window.addEventListener("message", (0, a.getWelcomeScreenHiddenHandler)(f, (function() {
                            E.classList.add("tf-v1-widget-fullscreen"), void 0 !== t.opacity && (E.style.backgroundColor = w)
                        }))), window.addEventListener("message", (0, a.getFormThemeHandler)(f, (function(e) {
                            var t;
                            w = (0, i.changeColorOpacity)(null === (t = null == e ? void 0 : e.theme) || void 0 === t ? void 0 : t.backgroundColor)
                        })));
                        var S = ((O = document.createElement("button")).className = "tf-v1-widget-close tf-v1-close-icon", O.innerHTML = "&times;", O.ariaLabel = "Close", O);
                        S.onclick = (0, i.invokeWithoutDefault)((function() {
                            var e;
                            if (E.style.height = P, null === (e = t.onClose) || void 0 === e || e.call(t), E.classList.remove("tf-v1-widget-fullscreen"), E.style.backgroundColor = "", l.fullScreen && (document.body.style.overflow = s), t.keepSession) {
                                var n = document.createElement("div");
                                n.className = "tf-v1-widget-iframe-overlay", n.onclick = function() {
                                    E.classList.add("tf-v1-widget-fullscreen"), (0, i.unmountElement)(n)
                                }, b.append(n)
                            } else t.container.innerHTML = "", _(), E.append(S)
                        })), E.append(S)
                    }
                    return {
                        refresh: v,
                        focus: m,
                        unmount: function() {
                            (0, i.unmountElement)(b)
                        }
                    }
                }
            },
            1419: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildWidget = void 0;
                var o = n(6797);
                t.buildWidget = function(e, t, n) {
                    var r = document.createElement("div");
                    return r.className = "tf-v1-widget", r.dataset.testid = "tf-v1-widget", r.append(e), (0, o.setElementSize)(r, {
                        width: t,
                        height: n
                    })
                }
            },
            2313: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1419), t)
            },
            1126: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.overrideFullScreenStyles = void 0, t.overrideFullScreenStyles = function(e, t) {
                    Object.assign(e.style, {
                        zIndex: "10001",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }), t.style.borderRadius = "0", Object.assign(document.body.style, {
                        overflow: "hidden"
                    })
                }
            },
            9321: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(718), t), r(n(4058), t)
            },
            4058: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            1920: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1797), t), r(n(5970), t), r(n(4071), t), r(n(9321), t), r(n(1434), t)
            },
            5455: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildOptionsFromAttributes = void 0;
                var o = n(6797);
                t.buildOptionsFromAttributes = function(e) {
                    return (0, o.loadOptionsFromAttributes)(e, {
                        source: "string",
                        domain: "string",
                        medium: "string",
                        mediumVersion: "string",
                        open: "string",
                        openValue: "integer",
                        preventReopenOnClose: "boolean",
                        hideFooter: "boolean",
                        hideHeaders: "boolean",
                        opacity: "integer",
                        disableTracking: "boolean",
                        onReady: "function",
                        onStarted: "function",
                        onSubmit: "function",
                        onQuestionChanged: "function",
                        onHeightChanged: "function",
                        onDuplicateDetected: "function",
                        autoResize: "stringOrBoolean",
                        onClose: "function",
                        onEndingButtonClick: "function",
                        transitiveSearchParams: "arrayOrBoolean",
                        hidden: "record",
                        buttonColor: "string",
                        buttonTextColor: "string",
                        buttonTextSize: "integerOrString",
                        buttonWidth: "integerOrString",
                        buttonHeight: "integerOrString",
                        buttonAlign: "string",
                        top: "integerOrString",
                        bottom: "integerOrString",
                        customIcon: "string",
                        width: "integerOrString",
                        height: "integerOrString",
                        size: "integer",
                        buttonText: "string",
                        position: "string",
                        enableSandbox: "boolean",
                        tooltip: "string",
                        notificationDays: "integer",
                        autoClose: "integerOrBoolean",
                        shareGaInstance: "stringOrBoolean",
                        forceTouch: "boolean",
                        inlineOnMobile: "boolean",
                        autoFocus: "boolean",
                        tracking: "record",
                        redirectTarget: "string",
                        iframeProps: "record",
                        buttonProps: "record",
                        lazy: "boolean",
                        keepSession: "boolean",
                        hubspot: "boolean",
                        disableScroll: "boolean",
                        fullScreen: "boolean",
                        noHeading: "boolean",
                        preselect: "record",
                        respectOpenModals: "string",
                        noScrollbars: "boolean"
                    })
                }
            },
            6654: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(8806), t), r(n(8933), t), r(n(7833), t), r(n(5361), t), r(n(2103), t), r(n(1412), t)
            },
            1412: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeLiveEmbeds = void 0;
                var o = n(8027),
                    r = n(201);
                t.initializeLiveEmbeds = function(e) {
                    for (var t = e.forceReload, n = e.onLiveEmbedLoad, i = document.querySelectorAll("[".concat(o.LIVE_EMBED_ATTRIBUTE, "]")), a = function(e) {
                            var a = i.item(e);
                            if ("true" !== a.dataset.tfLoading && "true" !== a.dataset.tfLoaded || t) {
                                var c = a.getAttribute(o.LIVE_EMBED_ATTRIBUTE);
                                if (!c) throw new Error("Invalid ".concat(o.LIVE_EMBED_ATTRIBUTE, "=").concat(c, " for embed #").concat(e));
                                a.dataset.tfLoading = "true", (0, r.fetchLiveEmbed)(c).then((function(e) {
                                    var t = e.html;
                                    a.innerHTML = t, n(a), delete a.dataset.tfLoading, a.dataset.tfLoaded = "true"
                                }))
                            }
                        }, c = 0; c < i.length; c += 1) a(c)
                }
            },
            8806: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializePopovers = void 0;
                var o = n(1797),
                    r = n(8027),
                    i = n(7308);
                t.initializePopovers = function(e) {
                    var t = e.container,
                        n = e.forceReload,
                        a = void 0 !== n && n;
                    (0, i.initialize)({
                        embedElementAttribute: r.POPOVER_ATTRIBUTE,
                        cssFilename: "popover.css",
                        container: t,
                        forceReload: a,
                        factoryMethod: function(e, t, n) {
                            var r = (0, o.createPopover)(e, t).toggle;
                            n.onclick = r
                        }
                    })
                }
            },
            8933: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializePopups = void 0;
                var o = n(5970),
                    r = n(8027),
                    i = n(6797),
                    a = n(7308);
                t.initializePopups = function(e) {
                    var t = e.container,
                        n = e.forceReload,
                        c = void 0 !== n && n;
                    (0, a.initialize)({
                        embedElementAttribute: r.POPUP_ATTRIBUTE,
                        cssFilename: "popup.css",
                        container: t,
                        forceReload: c,
                        factoryMethod: function(e, t, n) {
                            var r = (0, o.createPopup)(e, t).toggle;
                            n.onclick = (0, i.invokeWithoutDefault)(r)
                        }
                    })
                }
            },
            2103: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeSidetabs = void 0;
                var o = n(1434),
                    r = n(8027),
                    i = n(7308);
                t.initializeSidetabs = function(e) {
                    var t = e.container,
                        n = e.forceReload,
                        a = void 0 !== n && n;
                    (0, i.initialize)({
                        embedElementAttribute: r.SIDETAB_ATTRIBUTE,
                        cssFilename: "sidetab.css",
                        container: t,
                        forceReload: a,
                        factoryMethod: function(e, t) {
                            (0, o.createSidetab)(e, t)
                        }
                    })
                }
            },
            7833: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeSliders = void 0;
                var o = n(4071),
                    r = n(8027),
                    i = n(6797),
                    a = n(7308);
                t.initializeSliders = function(e) {
                    var t = e.container,
                        n = e.forceReload,
                        c = void 0 !== n && n;
                    (0, a.initialize)({
                        embedElementAttribute: r.SLIDER_ATTRIBUTE,
                        cssFilename: "slider.css",
                        container: t,
                        forceReload: c,
                        factoryMethod: function(e, t, n) {
                            var r = (0, o.createSlider)(e, t).toggle;
                            n.onclick = (0, i.invokeWithoutDefault)(r)
                        }
                    })
                }
            },
            5361: function(e, t, n) {
                var o = this && this.__assign || function() {
                    return o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, o.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeWidgets = void 0;
                var r = n(9321),
                    i = n(8027),
                    a = n(7308);
                t.initializeWidgets = function(e) {
                    var t = e.container,
                        n = e.forceReload,
                        c = void 0 !== n && n;
                    (0, a.initialize)({
                        embedElementAttribute: i.WIDGET_ATTRIBUTE,
                        cssFilename: "widget.css",
                        container: t,
                        forceReload: c,
                        factoryMethod: function(e, t, n) {
                            (0, r.createWidget)(e, o(o({}, t), {
                                container: n
                            }))
                        }
                    })
                }
            },
            7308: function(e, t, n) {
                var o = this && this.__awaiter || function(e, t, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function a(e) {
                                try {
                                    u(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                try {
                                    u(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, c)
                            }
                            u((o = o.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__generator || function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function c(c) {
                            return function(u) {
                                return function(c) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                        if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = c[1], c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1], r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        c = t.call(e, a)
                                    } catch (e) {
                                        c = [6, e], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, u])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initialize = void 0;
                var i = n(6797),
                    a = n(5455),
                    c = n(1176);
                t.initialize = function(e) {
                    var t = e.embedElementAttribute,
                        n = e.cssFilename,
                        u = e.forceReload,
                        l = void 0 !== u && u,
                        s = e.factoryMethod,
                        d = e.container,
                        f = void 0 === d ? document : d;
                    return o(void 0, void 0, void 0, (function() {
                        var e, o, u, d, p;
                        return r(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    (e = f.querySelectorAll("[".concat(t, "]"))).length > 0 && (0, i.includeCss)(n), o = 0, r.label = 1;
                                case 1:
                                    if (!(o < e.length)) return [3, 5];
                                    if (u = e.item(o), !l && "true" === u.dataset.tfLoaded) return [3, 4];
                                    if (!(d = u.getAttribute(t))) throw new Error("Invalid ".concat(t, "=").concat(d, " for embed #").concat(o));
                                    return u.hasAttribute("data-tf-hubspot") ? [4, (0, i.waitForHubspotCookie)()] : [3, 3];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    p = (0, c.mergeOptions)((0, a.buildOptionsFromAttributes)(u), f === document ? {} : (0, a.buildOptionsFromAttributes)(f)), s(d, p, u), u.dataset.tfLoaded = "true", r.label = 4;
                                case 4:
                                    return o += 1, [3, 1];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }
            },
            1176: function(e, t) {
                var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, n.apply(this, arguments)
                    },
                    o = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, r, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mergeOptions = void 0, t.mergeOptions = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return e.reduce((function(e, t) {
                        return Object.entries(t).forEach((function(t) {
                            var r = o(t, 2),
                                i = r[0],
                                a = r[1];
                            if (void 0 === a) return e;
                            "object" == typeof e[i] && "object" == typeof a ? e[i] = n(n({}, e[i]), a) : e[i] = a
                        })), e
                    }), {})
                }
            },
            201: function(e, t) {
                var n = this && this.__awaiter || function(e, t, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function a(e) {
                                try {
                                    u(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                try {
                                    u(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, c)
                            }
                            u((o = o.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function c(c) {
                            return function(u) {
                                return function(c) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                        if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = c[1], c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1], r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        c = t.call(e, a)
                                    } catch (e) {
                                        c = [6, e], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, u])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.fetchLiveEmbed = void 0, t.fetchLiveEmbed = function(e) {
                    return n(void 0, void 0, void 0, (function() {
                        var t;
                        return o(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch("https://api.typeform.com/single-embed/".concat(e))];
                                case 1:
                                    if (!(t = n.sent()).ok) throw new Error("Cannot fetch embed ".concat(e));
                                    return [4, t.json()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        }))
                    }))
                }
            },
            5084: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addAttributesToElement = void 0;
                var o = n(7377);
                t.addAttributesToElement = function(e, t) {
                    void 0 === t && (t = {}), Object.keys(t).forEach((function(n) {
                        e.setAttribute((0, o.camelCaseToKebabCase)(n), t[n])
                    }))
                }
            },
            3626: function(e, t, n) {
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, r, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.buildIframeSrc = void 0;
                var i = n(8027),
                    a = n(4527),
                    c = n(2346),
                    u = n(2698),
                    l = n(863),
                    s = {
                        widget: "embed-widget",
                        popup: "popup-blank",
                        slider: "popup-drawer",
                        popover: "popup-popover",
                        "side-tab": "popup-side-panel"
                    };
                t.buildIframeSrc = function(e) {
                    var t = e.domain,
                        n = e.formId,
                        d = e.type,
                        f = e.embedId,
                        p = e.options,
                        v = function(e, t, n) {
                            var r = n.transitiveSearchParams,
                                i = n.source,
                                a = n.medium,
                                c = n.mediumVersion,
                                l = n.hideFooter,
                                d = n.hideHeaders,
                                f = n.opacity,
                                p = n.disableTracking,
                                v = n.enableSandbox,
                                m = n.shareGaInstance,
                                b = n.forceTouch,
                                h = n.displayAsFullScreenModal,
                                y = n.tracking,
                                g = n.redirectTarget,
                                O = n.autoResize,
                                _ = n.disableScroll,
                                w = n.onEndingButtonClick,
                                E = n.noHeading,
                                P = n.noScrollbars,
                                S = (0, u.getTransitiveSearchParams)(r);
                            return o(o(o({}, {
                                "typeform-embed-id": t,
                                "typeform-embed": s[e],
                                "typeform-source": i,
                                "typeform-medium": a,
                                "typeform-medium-version": c,
                                "embed-hide-footer": l ? "true" : void 0,
                                "embed-hide-headers": d ? "true" : void 0,
                                "embed-opacity": f,
                                "disable-tracking": p || v ? "true" : void 0,
                                "__dangerous-disable-submissions": v ? "true" : void 0,
                                "share-ga-instance": m ? "true" : void 0,
                                "force-touch": b ? "true" : void 0,
                                "add-placeholder-ws": "widget" === e && h ? "true" : void 0,
                                "typeform-embed-redirect-target": g,
                                "typeform-embed-handles-redirect": 1,
                                "typeform-embed-auto-resize": O ? "true" : void 0,
                                "typeform-embed-disable-scroll": _ ? "true" : void 0,
                                "typeform-embed-handle-ending-button-click": w ? "true" : void 0,
                                "typeform-embed-no-heading": E ? "true" : void 0,
                                "typeform-embed-no-scrollbars": P ? "true" : void 0
                            }), S), y)
                        }(d, f, function(e) {
                            return e.noHeading || (e.noHeading = document.querySelectorAll("h1").length > 0), o(o({}, {
                                source: null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.hostname.replace(/^www\./, ""),
                                medium: "embed-sdk",
                                mediumVersion: "next"
                            }), (0, a.removeUndefinedKeys)(e));
                            var t
                        }(p)),
                        m = function(e, t) {
                            return void 0 === t && (t = i.DEFAULT_DOMAIN), e.startsWith("http://") || e.startsWith("https://") ? new URL(e) : new URL("https://".concat(t, "/to/").concat(e))
                        }(n, t);
                    if (Object.entries(v).filter((function(e) {
                            var t = r(e, 2)[1];
                            return (0, c.isDefined)(t)
                        })).forEach((function(e) {
                            var t = r(e, 2),
                                n = t[0],
                                o = t[1];
                            m.searchParams.set(n, o)
                        })), p.hubspot) {
                        var b = (0, l.getHubspotHiddenFields)();
                        p.hidden = o(o({}, p.hidden), b)
                    }
                    return m.hash = function(e, t) {
                        var n = new URLSearchParams;
                        t.hidden && Object.entries(t.hidden).filter((function(e) {
                            var t = r(e, 2)[1];
                            return (0, c.isDefined)(t) && "" !== t
                        })).forEach((function(o) {
                            var i = r(o, 2),
                                a = i[0],
                                c = i[1];
                            "boolean" == typeof t.transitiveSearchParams && e.searchParams.delete(a), n.set(a, c)
                        }));
                        var o = function(e) {
                            if (!e) return null;
                            var t = Object.keys(e).at(0),
                                n = t && e[t] || void 0;
                            return void 0 === t || void 0 === n ? null : {
                                key: "answers-".concat(t),
                                value: n
                            }
                        }(t.preselect);
                        if (o) {
                            var i = o.key,
                                a = o.value;
                            n.set(i, a)
                        }
                        return n.toString()
                    }(m, p), m.href
                }
            },
            2391: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.changeColorOpacity = void 0, t.changeColorOpacity = function(e, t) {
                    return void 0 === e && (e = ""), void 0 === t && (t = 255), e.startsWith("rgba(") ? null == e ? void 0 : e.replace(/, [\d.]+\)$/, ", ".concat(t, ")")) : e
                }
            },
            6289: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.closeIconSvg = void 0, t.closeIconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414Z" fill="currentColor"/>\n</svg>'
            },
            8972: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.handleCustomOpen = t.handlePreventReopenOnClose = void 0;
                var n = {
                    remove: function() {}
                };
                t.handlePreventReopenOnClose = function(e, t) {
                    e.preventReopenOnClose && r(t)
                };
                t.handleCustomOpen = function(e, t, r) {
                    var i = t.open,
                        a = t.openValue,
                        c = t.preventReopenOnClose,
                        u = function(e, t, n, r) {
                            return function() {
                                var i, a;
                                if (!(r && o(t) || "all" === n && (a = document.querySelector(".tf-v1-popup, .tf-v1-slider, .tf-v1-popover-wrapper, .tf-v1-sidetab-wrapper"), (null == a ? void 0 : a.offsetHeight) || (null == a ? void 0 : a.offsetWidth) || (null === (i = null == a ? void 0 : a.getClientRects()) || void 0 === i ? void 0 : i.length)) || "same" === n && function(e) {
                                        var t = document.querySelectorAll(".tf-v1-popup, .tf-v1-slider, .tf-v1-popover-wrapper, .tf-v1-sidetab-wrapper");
                                        return Array.from(t).some((function(t) {
                                            var n, o = null === (n = t.querySelector("iframe")) || void 0 === n ? void 0 : n.src;
                                            return (null == o ? void 0 : o.includes("typeform.com/to/".concat(e))) || (null == o ? void 0 : o.startsWith(e))
                                        }))
                                    }(t))) return e()
                            }
                        }(e, r, t.respectOpenModals, c);
                    switch (i) {
                        case "load":
                            return u(), n;
                        case "exit":
                            return a ? function(e, t) {
                                var n = 0,
                                    o = function(r) {
                                        r.clientY < e && r.clientY < n ? (document.removeEventListener("mousemove", o, !0), t()) : n = r.clientY
                                    };
                                return document.addEventListener("mousemove", o, !0), {
                                    remove: function() {
                                        return document.removeEventListener("mousemove", o, !0)
                                    }
                                }
                            }(a, u) : n;
                        case "time":
                            return setTimeout((function() {
                                u()
                            }), a), n;
                        case "scroll":
                            return a ? function(e, t) {
                                function n() {
                                    var o = window.pageYOffset || document.documentElement.scrollTop,
                                        r = document.documentElement.clientTop || 0,
                                        i = document.documentElement.scrollHeight,
                                        a = o - r,
                                        c = a / i * 100,
                                        u = a + window.innerHeight >= i;
                                    (c >= e || u) && (t(), document.removeEventListener("scroll", n))
                                }
                                return document.addEventListener("scroll", n), {
                                    remove: function() {
                                        return document.removeEventListener("scroll", n)
                                    }
                                }
                            }(a, u) : n;
                        default:
                            return n
                    }
                };
                var o = function(e) {
                        return document.cookie.includes("tf-".concat(e, "-closed=true"))
                    },
                    r = function(e) {
                        document.cookie = "tf-".concat(e, "-closed=true;Path=/")
                    }
            },
            1553: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createIframe = void 0;
                var o = n(3626),
                    r = n(6797),
                    i = n(8866),
                    a = n(8554),
                    c = n(2256),
                    u = n(7144),
                    l = n(5511);
                t.createIframe = function(e, t) {
                    var n = t.formId,
                        s = t.domain,
                        d = t.options,
                        f = (0, i.generateEmbedId)(),
                        p = d.iframeProps,
                        v = void 0 === p ? {} : p,
                        m = d.onReady,
                        b = d.onStarted,
                        h = d.onQuestionChanged,
                        y = d.onHeightChanged,
                        g = d.onSubmit,
                        O = d.onEndingButtonClick,
                        _ = d.onDuplicateDetected,
                        w = d.shareGaInstance,
                        E = (0, o.buildIframeSrc)({
                            formId: n,
                            domain: s,
                            embedId: f,
                            type: e,
                            options: d
                        }),
                        P = document.createElement("iframe");
                    return P.src = E, P.dataset.testid = "iframe", P.style.border = "0px", P.allow = "microphone; camera", (0, r.addAttributesToElement)(P, v), P.addEventListener("load", c.triggerIframeRedraw, {
                        once: !0
                    }), window.addEventListener("message", (0, a.getFormReadyHandler)(f, m)), window.addEventListener("message", (0, a.getFormStartedHandler)(f, b)), window.addEventListener("message", (0, a.getFormQuestionChangedHandler)(f, h)), window.addEventListener("message", (0, a.getFormHeightChangedHandler)(f, y)), window.addEventListener("message", (0, a.getFormSubmitHandler)(f, g)), window.addEventListener("message", (0, a.getFormThemeHandler)(f, (function(e) {
                        var t;
                        if (null == e ? void 0 : e.theme) {
                            var n = document.querySelector(".tf-v1-close-icon");
                            n && (n.style.color = null === (t = e.theme) || void 0 === t ? void 0 : t.color)
                        }
                    }))), window.addEventListener("message", (0, a.getThankYouScreenButtonClickHandler)(f, O)), window.addEventListener("message", (0, a.getRedirectHandler)(f, P)), window.addEventListener("message", (0, a.getDuplicateDetectedHandler)(f, _)), "widget" !== e && window.addEventListener("message", u.dispatchCustomKeyEventFromIframe), w && window.addEventListener("message", (0, a.getFormReadyHandler)(f, (function() {
                        (0, r.setupGaInstance)(P, f, w)
                    }))), {
                        iframe: P,
                        embedId: f,
                        refresh: function() {
                            return (0, l.refreshIframe)(P)
                        },
                        focus: function() {
                            var e;
                            null === (e = P.contentWindow) || void 0 === e || e.postMessage("embed-focus", "*")
                        }
                    }
                }
            },
            8866: function(e, t) {
                var n = this && this.__read || function(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var o, r, i = n.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return a
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateEmbedId = void 0, t.generateEmbedId = function() {
                    var e = Math.random();
                    return n(String(e).split("."), 2)[1]
                }
            },
            8554: function(e, t, n) {
                var o = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
                    }
                    return n
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getRedirectHandler = t.getThankYouScreenButtonClickHandler = t.getFormThemeHandler = t.getWelcomeScreenHiddenHandler = t.getDuplicateDetectedHandler = t.getFormSubmitHandler = t.getFormHeightChangedHandler = t.getFormQuestionChangedHandler = t.getFormStartedHandler = t.getFormReadyHandler = void 0;
                var r = n(8743);
                t.getFormReadyHandler = function(e, t) {
                    return a("form-ready", e, t)
                }, t.getFormStartedHandler = function(e, t) {
                    return a("form-started", e, t)
                }, t.getFormQuestionChangedHandler = function(e, t) {
                    return a("form-screen-changed", e, t)
                }, t.getFormHeightChangedHandler = function(e, t) {
                    return a("form-height-changed", e, t)
                }, t.getFormSubmitHandler = function(e, t) {
                    return a("form-submit", e, t)
                }, t.getDuplicateDetectedHandler = function(e, t) {
                    return a("duplicate-detected", e, t)
                }, t.getWelcomeScreenHiddenHandler = function(e, t) {
                    return a("welcome-screen-hidden", e, t)
                }, t.getFormThemeHandler = function(e, t) {
                    return a("form-theme", e, t)
                }, t.getThankYouScreenButtonClickHandler = function(e, t) {
                    return a("thank-you-screen-button-click", e, t)
                }, t.getRedirectHandler = function(e, t) {
                    return a(["redirect-after-submit", "thank-you-screen-redirect"], e, (0, r.handleFormRedirect)(t))
                };
                var i = function(e, t) {
                    return Array.isArray(e) ? e.includes(t) : e === t
                };

                function a(e, t, n) {
                    return function(r) {
                        var a = r.data,
                            c = a.type,
                            u = a.embedId,
                            l = o(a, ["type", "embedId"]);
                        i(e, c) && u === t && (null == n || n(l))
                    }
                }
            },
            8743: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.handleFormRedirect = void 0, t.handleFormRedirect = function(e) {
                    return function(t) {
                        var n, o, r = t.url,
                            i = t.target;
                        if (r) switch (void 0 === i ? "_parent" : i) {
                            case "_self":
                                e.src = (n = e.src, (o = r).includes("#") && o.startsWith("".concat(n, "#")) ? o.includes("?") ? o.replace("#", "&tf-embed-ts=".concat(Date.now(), "#")) : o.replace("#", "?tf-embed-ts=".concat(Date.now(), "#")) : o);
                                break;
                            case "_blank":
                                window.open(r, "_blank");
                                break;
                            case "_top":
                                var a = document.createElement("a");
                                a.href = r, a.target = "_top", document.body.appendChild(a), a.click(), document.body.removeChild(a);
                                break;
                            default:
                                window.location.href = r
                        } else console.error("Redirect failed, no URL provided")
                    }
                }
            },
            339: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(1553), t), r(n(7144), t)
            },
            5511: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.refreshIframe = void 0, t.refreshIframe = function(e) {
                    if (e) {
                        var t = e.src;
                        if (t.includes("&refresh")) {
                            var n = t.split("&refresh#");
                            e.src = n.join("#")
                        } else(n = t.split("#"))[0] = "".concat(n[0], "&refresh"), e.src = n.join("#")
                    }
                }
            },
            7144: function(e, t) {
                var n = this && this.__awaiter || function(e, t, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function a(e) {
                                try {
                                    u(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                try {
                                    u(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, c)
                            }
                            u((o = o.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function c(c) {
                            return function(u) {
                                return function(c) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                        if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = c[1], c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1], r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        c = t.call(e, a)
                                    } catch (e) {
                                        c = [6, e], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, u])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.dispatchCustomKeyEventFromIframe = t.removeCustomKeyboardListener = t.addCustomKeyboardListener = void 0;
                var r = "Escape",
                    i = function(e, i) {
                        return n(void 0, void 0, void 0, (function() {
                            return o(this, (function(n) {
                                return e.code === r && "function" == typeof i && (i(), (0, t.removeCustomKeyboardListener)()), [2]
                            }))
                        }))
                    };
                t.addCustomKeyboardListener = function(e) {
                    return window.document.addEventListener("keydown", (function(t) {
                        return i(t, e)
                    }))
                }, t.removeCustomKeyboardListener = function() {
                    return window.document.removeEventListener("keydown", i)
                }, t.dispatchCustomKeyEventFromIframe = function(e) {
                    "form-close" === e.data.type && window.document.dispatchEvent(new KeyboardEvent("keydown", {
                        code: r
                    }))
                }
            },
            2256: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.triggerIframeRedraw = void 0, t.triggerIframeRedraw = function() {
                    this.style.transform = "translateZ(0)"
                }
            },
            8939: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTextColor = void 0;
                var o = n(2938);
                t.getTextColor = function(e) {
                    if (!e) return "#FFFFFF";
                    var t = e.startsWith("#") ? (0, o.hexRgb)(e) : function(e) {
                            var t = {
                                    red: 0,
                                    green: 0,
                                    blue: 0
                                },
                                n = e.match(/\d+/g);
                            return n && (t.red = parseInt(n[0], 10), t.green = parseInt(n[0], 10), t.blue = parseInt(n[0], 10)), t
                        }(e),
                        n = t.red,
                        r = t.green,
                        i = t.blue;
                    return Math.round((299 * n + 587 * r + 114 * i) / 1e3) > 150 ? "#000000" : "#FFFFFF"
                }
            },
            2698: function(e, t) {
                var n = this && this.__assign || function() {
                    return n = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }, n.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTransitiveSearchParams = void 0, t.getTransitiveSearchParams = function(e) {
                    var t = new URL(window.location.href);
                    return "boolean" == typeof e && e ? Object.fromEntries(t.searchParams.entries()) : Array.isArray(e) && e.length > 0 ? e.reduce((function(e, o) {
                        var r, i = t.searchParams.get(o);
                        return i ? n(n({}, e), ((r = {})[o] = i, r)) : e
                    }), {}) : {}
                }
            },
            8252: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hasDom = void 0, t.hasDom = function() {
                    return "undefined" != typeof document && "undefined" != typeof window
                }
            },
            2938: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hexRgb = void 0;
                var n = "a-f\\d",
                    o = "#?[".concat(n, "]{3}[").concat(n, "]?"),
                    r = "#?[".concat(n, "]{6}([").concat(n, "]{2})?"),
                    i = new RegExp("[^#".concat(n, "]"), "gi"),
                    a = new RegExp("^".concat(o, "$|^").concat(r, "$"), "i");
                t.hexRgb = function(e) {
                    if ("string" != typeof e || i.test(e) || !a.test(e)) throw new TypeError("Expected a valid hex string");
                    8 === (e = e.replace(/^#/, "")).length && (e = e.slice(0, 6)), 4 === e.length && (e = e.slice(0, 3)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                    var t = Number.parseInt(e, 16);
                    return {
                        red: t >> 16,
                        green: t >> 8 & 255,
                        blue: 255 & t
                    }
                }
            },
            863: function(e, t, n) {
                var o = this && this.__awaiter || function(e, t, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function a(e) {
                                try {
                                    u(o.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                try {
                                    u(o.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, c)
                            }
                            u((o = o.apply(e, t || [])).next())
                        }))
                    },
                    r = this && this.__generator || function(e, t) {
                        var n, o, r, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function c(c) {
                            return function(u) {
                                return function(c) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                        if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                r = c;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, o = c[1], c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < r[1]) {
                                                    a.label = r[1], r = c;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(c);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        c = t.call(e, a)
                                    } catch (e) {
                                        c = [6, e], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, u])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.waitForHubspotCookie = t.getHubspotHiddenFields = t.getHubspotCookieValue = void 0;
                var i = n(4623);
                t.getHubspotCookieValue = function() {
                    var e = document.cookie.match(new RegExp("(^| )".concat("hubspotutk", "=([^;]+)")));
                    return e && e[2] || void 0
                }, t.getHubspotHiddenFields = function() {
                    return {
                        hubspot_page_name: document.title,
                        hubspot_page_url: window.location.href,
                        hubspot_utk: (0, t.getHubspotCookieValue)()
                    }
                }, t.waitForHubspotCookie = function() {
                    return o(void 0, void 0, void 0, (function() {
                        var e, n;
                        return r(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    e = 10, n = 0, o.label = 1;
                                case 1:
                                    return !(0, t.getHubspotCookieValue)() && n < e ? [4, (0, i.sleep)(250)] : [3, 4];
                                case 2:
                                    o.sent(), o.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }
            },
            9071: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.includeCss = void 0, t.includeCss = function(e) {
                    var t = function(e) {
                        return "".concat("https://embed.typeform.com/next/css/").concat(e)
                    }(e);
                    if (!document.querySelector('link[href="'.concat(t, '"]'))) {
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.href = t, document.head.append(n)
                    }
                }
            },
            6797: function(e, t, n) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                        void 0 === o && (o = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, o, r)
                    } : function(e, t, n, o) {
                        void 0 === o && (o = n), e[o] = t[n]
                    }),
                    r = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n(3626), t), r(n(339), t), r(n(8252), t), r(n(9071), t), r(n(2346), t), r(n(7377), t), r(n(6563), t), r(n(4527), t), r(n(9533), t), r(n(1451), t), r(n(8972), t), r(n(4748), t), r(n(4392), t), r(n(8939), t), r(n(9917), t), r(n(1987), t), r(n(2391), t), r(n(863), t), r(n(6890), t), r(n(5084), t), r(n(6289), t), r(n(9832), t)
            },
            6890: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.invokeWithoutDefault = void 0, t.invokeWithoutDefault = function(e) {
                    return function(t) {
                        null == t || t.preventDefault(), e()
                    }
                }
            },
            2346: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isDefined = void 0, t.isDefined = function(e) {
                    return null != e
                }
            },
            1987: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isVisible = t.isInPage = t.isOpen = void 0, t.isOpen = function(e) {
                    return (0, t.isInPage)(e) && (0, t.isVisible)(e)
                }, t.isInPage = function(e) {
                    return !!e.parentNode
                }, t.isVisible = function(e) {
                    return "none" !== e.style.display
                }
            },
            9917: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.lazyInitialize = void 0, t.lazyInitialize = function(e, t) {
                    var n = new IntersectionObserver((function(e) {
                        e.forEach((function(e) {
                            e.isIntersecting && (t(), n.unobserve(e.target))
                        }))
                    }));
                    n.observe(e)
                }
            },
            7377: function(e, t) {
                var n = this && this.__assign || function() {
                        return n = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, n.apply(this, arguments)
                    },
                    o = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, r, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadOptionsFromAttributes = t.transformAttributeValue = t.camelCaseToKebabCase = void 0, t.camelCaseToKebabCase = function(e) {
                    return e.split("").map((function(e, t) {
                        return e.toUpperCase() === e ? "".concat(0 !== t ? "-" : "").concat(e.toLowerCase()) : e
                    })).join("")
                };
                var r = function(e) {
                        return e || void 0
                    },
                    i = function(e) {
                        if (null !== e) return "" === e || "yes" === e || "true" === e
                    },
                    a = function(e) {
                        var t = e ? parseInt(e, 10) : NaN;
                        return isNaN(t) ? void 0 : t
                    },
                    c = "%ESCAPED_COMMA%",
                    u = function(e) {
                        if (e) return e.replace(/\s/g, "").replace(/\\,/g, c).split(",").filter((function(e) {
                            return !!e
                        })).map((function(e) {
                            return e.replace(c, ",")
                        }))
                    };
                t.transformAttributeValue = function(e, t) {
                    var l, s, d;
                    switch (t) {
                        case "string":
                            return r(e);
                        case "boolean":
                            return i(e);
                        case "integer":
                            return a(e);
                        case "function":
                            return function(e) {
                                var t = e && e in window ? window[e] : void 0;
                                return "function" == typeof t ? t : void 0
                            }(e);
                        case "array":
                            return u(e);
                        case "record":
                            return function(e) {
                                if (e) return e.replace(/\\,/g, c).split(",").filter((function(e) {
                                    return !!e
                                })).map((function(e) {
                                    return e.replace(c, ",")
                                })).reduce((function(e, t) {
                                    var r, i = t.match(/^([^=]+)=(.*)$/);
                                    if (i) {
                                        var a = o(i, 3),
                                            c = a[1],
                                            u = a[2];
                                        return n(n({}, e), ((r = {})[c.trim()] = u, r))
                                    }
                                    return e
                                }), {})
                            }(e);
                        case "integerOrString":
                            return function(e) {
                                if (e) return e.match(/^[0-9]+$/) ? a(e) : r(e)
                            }(e);
                        case "integerOrBoolean":
                            return null !== (l = a(e)) && void 0 !== l ? l : i(e);
                        case "stringOrBoolean":
                            return null !== (s = r(e)) && void 0 !== s ? s : i(e);
                        case "arrayOrBoolean":
                            return null !== (d = u(e)) && void 0 !== d ? d : i(e);
                        default:
                            throw new Error("Invalid attribute transformation ".concat(t))
                    }
                }, t.loadOptionsFromAttributes = function(e, o) {
                    return Object.keys(o).reduce((function(r, i) {
                        var a;
                        return n(n({}, r), ((a = {})[i] = (0, t.transformAttributeValue)(e.getAttribute("data-tf-".concat((0, t.camelCaseToKebabCase)(i))), o[i]), a))
                    }), {})
                }
            },
            6563: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isFullscreen = t.isMobile = t.isBigScreen = void 0, t.isBigScreen = function() {
                    return window.screen.width >= 1024 && window.screen.height >= 768
                }, t.isMobile = function() {
                    return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase())
                }, t.isFullscreen = function() {
                    return (0, t.isMobile)() && !(0, t.isBigScreen)()
                }
            },
            4527: function(e, t, n) {
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, o = arguments.length; n < o; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var o, r, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeUndefinedKeys = void 0;
                var i = n(2346);
                t.removeUndefinedKeys = function(e) {
                    return Object.entries(e).filter((function(e) {
                        var t = r(e, 2)[1];
                        return (0, i.isDefined)(t)
                    })).reduce((function(e, t) {
                        var n, i = r(t, 2),
                            a = i[0],
                            c = i[1];
                        return o(o({}, e), ((n = {})[a] = c, n))
                    }), {})
                }
            },
            4748: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setAutoClose = t.DEFAULT_AUTO_CLOSE_TIME = void 0;
                var o = n(8554);
                t.DEFAULT_AUTO_CLOSE_TIME = 500, t.setAutoClose = function(e, n, r) {
                    n && r && window.addEventListener("message", (0, o.getFormSubmitHandler)(e, (function() {
                        return setTimeout(r, (o = "number" == typeof(e = n) ? e : 0, Math.max(o, t.DEFAULT_AUTO_CLOSE_TIME)));
                        var e, o
                    })))
                }
            },
            9533: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setElementSize = t.getValueWithUnits = void 0, t.getValueWithUnits = function(e) {
                    return "string" != typeof e || e.match(/^[0-9]+$/) ? "".concat(e, "px") : e
                }, t.setElementSize = function(e, n) {
                    var o = n.width,
                        r = n.height;
                    return o && (e.style.width = (0, t.getValueWithUnits)(o)), r && (e.style.height = (0, t.getValueWithUnits)(r)), e
                }
            },
            4392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setupGaInstance = t.sendGaIdMessage = void 0, t.sendGaIdMessage = function(e, t, n) {
                    var o = {
                        embedId: e,
                        gaClientId: t
                    };
                    setTimeout((function() {
                        n && n.contentWindow && n.contentWindow.postMessage({
                            type: "ga-client-id",
                            data: o
                        }, "*")
                    }), 0)
                };
                var n = function(e) {
                        console.error(e)
                    },
                    o = function(e) {
                        n("Whoops! You enabled the shareGaInstance feature in your typeform embed but ".concat(e, ".\n\n") + "Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID.\n\nIt is also possible the Google Analytics was blocked by your adblock plugin.")
                    };
                t.setupGaInstance = function(e, r, i) {
                    var a = "string" == typeof i ? i : void 0;
                    if (window.gtag) {
                        if (a || (a = function() {
                                if (window.dataLayer) {
                                    var e = window.dataLayer.find((function(e) {
                                        return e.length > 1 && "config" === e[0]
                                    }));
                                    return e && e[1]
                                }
                            }()), !a) return void o("the tracking ID could not be retrieved");
                        var c = !1;
                        window.gtag("get", a, "client_id", (function(n) {
                            c = !0, (0, t.sendGaIdMessage)(r, n, e)
                        })), setTimeout((function() {
                            c || o("the tracker with ID ".concat(a, " was not found"))
                        }), 3e3)
                    } else try {
                        var u = function(e, t) {
                            return t ? e.find((function(e) {
                                return e.get("trackingId") === t
                            })) : e[0]
                        }(window.ga.getAll(), a);
                        u ? (0, t.sendGaIdMessage)(r, u.get("clientId"), e) : o("the tracker with ID ".concat(a, " was not found"))
                    } catch (e) {
                        o("the Google Analytics object was not found"), n(e)
                    }
                }
            },
            4623: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sleep = void 0, t.sleep = function(e) {
                    return new Promise((function(t) {
                        return setTimeout(t, e)
                    }))
                }
            },
            9832: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.triggerIconSvg = void 0, t.triggerIconSvg = function(e) {
                    return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path\n      fill-rule="evenodd"\n      clip-rule="evenodd"\n      d="M2.002 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.697l-5.748 3.832A1 1 0 0 1 6.002 22v-3h-2a2 2 0 0 1-2-2V5Zm18 0h-16v12h3a1 1 0 0 1 1 1v2.131l4.445-2.963a1 1 0 0 1 .555-.168h7V5Z"\n      fill='.concat(e, '\n    />\n    <path\n      fill-rule="evenodd"\n      clip-rule="evenodd"\n      d="M7.5 12.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"\n      fill=').concat(e, "\n    />\n  </svg>")
                }
            },
            1451: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.unmountElement = void 0, t.unmountElement = function(e) {
                    var t;
                    null === (t = e.parentNode) || void 0 === t || t.removeChild(e)
                }
            }
        },
        t = {},
        n = function n(o) {
            var r = t[o];
            if (void 0 !== r) return r.exports;
            var i = t[o] = {
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.exports
        }(6664);
    window.tf = n
}();