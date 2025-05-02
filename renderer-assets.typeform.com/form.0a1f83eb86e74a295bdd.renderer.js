"use strict";
(() => {
    var Gl = (ve, R) => (R = Symbol[ve]) ? R : Symbol.for("Symbol." + ve),
        os = ve => {
            throw TypeError(ve)
        };
    var ls = function(ve, R) {
        this[0] = ve, this[1] = R
    };
    var Jr = ve => {
        var R = ve[Gl("asyncIterator")],
            r = !1,
            l, f = {};
        return R == null ? (R = ve[Gl("iterator")](), l = p => f[p] = h => R[p](h)) : (R = R.call(ve), l = p => f[p] = h => {
            if (r) {
                if (r = !1, p === "throw") throw h;
                return h
            }
            return r = !0, {
                done: !1,
                value: new ls(new Promise(w => {
                    var B = R[p](h);
                    B instanceof Object || os("Object expected"), w(B)
                }), 1)
            }
        }), f[Gl("iterator")] = () => f, l("next"), "throw" in R ? l("throw") : f.throw = p => {
            throw p
        }, "return" in R && l("return"), f
    };
    (self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
        [325], {
            1952: ve => {
                function R(m, u) {
                    var S = Object.keys(m);
                    if (Object.getOwnPropertySymbols) {
                        var N = Object.getOwnPropertySymbols(m);
                        u && (N = N.filter(function(C) {
                            return Object.getOwnPropertyDescriptor(m, C).enumerable
                        })), S.push.apply(S, N)
                    }
                    return S
                }

                function r(m) {
                    for (var u = 1; u < arguments.length; u++) {
                        var S = arguments[u] != null ? arguments[u] : {};
                        u % 2 ? R(Object(S), !0).forEach(function(N) {
                            l(m, N, S[N])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(S)) : R(Object(S)).forEach(function(N) {
                            Object.defineProperty(m, N, Object.getOwnPropertyDescriptor(S, N))
                        })
                    }
                    return m
                }

                function l(m, u, S) {
                    return (u = f(u)) in m ? Object.defineProperty(m, u, {
                        value: S,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : m[u] = S, m
                }

                function f(m) {
                    var u = p(m, "string");
                    return typeof u == "symbol" ? u : u + ""
                }

                function p(m, u) {
                    if (typeof m != "object" || !m) return m;
                    var S = m[Symbol.toPrimitive];
                    if (S !== void 0) {
                        var N = S.call(m, u || "default");
                        if (typeof N != "object") return N;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (u === "string" ? String : Number)(m)
                }
                var h = m => {
                        var u = document.createElement("script");
                        u.async = !0, u.src = "https://www.googletagmanager.com/gtag/js?id=".concat(m), document.head.appendChild(u), window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function() {
                            window.dataLayer.push(arguments)
                        }
                    },
                    w = () => window.location.hostname.match(/\\.typeform\\.com/) ? ".typeform.com" : window.location.hostname,
                    B = () => window.location.protocol === "https:" ? "SameSite=None;Secure" : "",
                    D = (m, u) => {
                        var {
                            gtag: S
                        } = window;
                        S("js", new Date), S("config", m, r(r({}, u ? {
                            client_id: u
                        } : {}), {}, {
                            cookie_domain: w(),
                            cookie_flags: B(),
                            transport_type: "beacon"
                        })), S("event", "pageview")
                    },
                    O = m => {
                        var {
                            embedId: u,
                            googleAnalyticsTrackingId: S
                        } = m, N = 5e3, C, W = !1, L = E => {
                            D(S, E), W = !0
                        }, te = () => {
                            C = setTimeout(() => {
                                L()
                            }, N)
                        }, K = () => {
                            var E = ee => {
                                if (ee.data.type === "ga-client-id") {
                                    var {
                                        embedId: ue,
                                        gaClientId: G
                                    } = ee.data.data, se = ue === u;
                                    se && !W && L(G), clearTimeout(C)
                                }
                            };
                            window.addEventListener("message", E)
                        };
                        te(), K()
                    },
                    y = m => {
                        var {
                            googleAnalyticsTrackingId: u,
                            instanceSharing: S
                        } = m;
                        h(u), S ? O(m) : D(u)
                    };
                ve.exports = {
                    bootGoogleAnalyticsInstanceSharingFeature: O,
                    bootGoogleAnalyticsIntegration: y
                }
            },
            2655: (ve, R, r) => {
                r.d(R, {
                    c: () => l
                });
                var l = "sticky_footer"
            },
            3502: (ve, R, r) => {
                r.d(R, {
                    J3: () => w,
                    TN: () => h
                });
                var l = r(71311),
                    f = {
                        validated: !1
                    },
                    p = (0, l.Z0)({
                        name: "captcha",
                        initialState: f,
                        reducers: {
                            validated: B => {
                                B.validated = !0
                            }
                        }
                    }),
                    {
                        validated: h
                    } = p.actions,
                    w = p.reducer
            },
            4217: (ve, R, r) => {
                r.r(R), r.d(R, {
                    default: () => Hr,
                    getCustomRedirectUrl: () => Br
                });
                var l = r(53930),
                    f = r(49350),
                    p = r(57773),
                    h = r(91488),
                    w = r(16492),
                    B = r(7280),
                    D = r(88358),
                    O = r(77917),
                    y = r(55645),
                    m = r(13332),
                    u = r(2009),
                    S = j => !!j.form.outcome,
                    N = j => j.form.hidden && Object.keys(j.form.hidden).includes("utm_source"),
                    C = r(38067),
                    W = r(89091),
                    L = r(70921),
                    te = function(j) {
                        return j.RELOAD = "reload", j.REDIRECT = "redirect", j.REDIRECT_DEFAULT = "default_redirect", j
                    }({}),
                    K = r(17771),
                    E = r(55459),
                    ee = r(34717),
                    ue = r(1907),
                    G = r(10053),
                    se = r(87559),
                    b = r(26405),
                    Ee = r(32336),
                    A = r(13615),
                    Me = r(44222),
                    M = r(7897),
                    I = r(25734),
                    P = r(94567),
                    g = r(46651),
                    ae = ["color"];

                function H(j, _) {
                    var z = Object.keys(j);
                    if (Object.getOwnPropertySymbols) {
                        var J = Object.getOwnPropertySymbols(j);
                        _ && (J = J.filter(function(Fe) {
                            return Object.getOwnPropertyDescriptor(j, Fe).enumerable
                        })), z.push.apply(z, J)
                    }
                    return z
                }

                function Y(j) {
                    for (var _ = 1; _ < arguments.length; _++) {
                        var z = arguments[_] != null ? arguments[_] : {};
                        _ % 2 ? H(Object(z), !0).forEach(function(J) {
                            (0, M.A)(j, J, z[J])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(z)) : H(Object(z)).forEach(function(J) {
                            Object.defineProperty(j, J, Object.getOwnPropertyDescriptor(z, J))
                        })
                    }
                    return j
                }
                var re = (0, P.i7)(["0%{opacity:0;transform:translate(250px,250px) scale(0);}40%{opacity:1;transform:translate(250px,250px) scale(7.28077);}86.667%{opacity:1;transform:translate(250px,250px) scale(6.54);}100%{opacity:1;transform:translate(250px,250px) scale(6.54);}"]),
                    oe = (0, P.i7)(["0%{stroke-dashoffset:-30;}100%{stroke-dashoffset:0;}"]),
                    fe = P.Ay.g.withConfig({
                        displayName: "Wrapper",
                        componentId: "sc-__sc-voa59v-0"
                    })(["transform:scale(0);animation:1000ms cubic-bezier(0.333,0,0.667,1) forwards ", ";"], re),
                    Ae = P.Ay.path.withConfig({
                        displayName: "Checkmark",
                        componentId: "sc-__sc-voa59v-1"
                    })(["stroke-dasharray:30;animation:500ms cubic-bezier(0.333,0,0.667,1) forwards ", ";"], oe),
                    Ne = j => {
                        var {
                            color: _ = "#000"
                        } = j, z = (0, I.A)(j, ae);
                        return (0, g.jsx)("svg", Y(Y({
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            preserveAspectRatio: "xMidYMid meet",
                            "data-qa": "animated-check-circle",
                            width: 500,
                            height: 500,
                            viewBox: "0 0 500 500"
                        }, z), {}, {
                            children: (0, g.jsxs)(fe, {
                                children: [(0, g.jsx)("path", {
                                    stroke: _,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    fill: "none",
                                    strokeWidth: 2.2,
                                    strokeOpacity: 1,
                                    d: " M0 20 C11.05,20 20,11.05 20,0 C20,-11.05 11.05,-20 0,-20 C-11.05,-20 -20,-11.05 -20,0 C-20,11.05 -11.05,20 0,20z "
                                }), (0, g.jsx)(Ae, {
                                    stroke: _,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    fill: "none",
                                    strokeWidth: 2,
                                    strokeOpacity: 1,
                                    d: " M9 -7 C9,-7 -3,7 -3,7 C-3,7 -9,1 -9,1 "
                                })]
                            })
                        }))
                    };
                const We = Ne;
                var qe = r(2347),
                    Ie = r(7968),
                    Mt = () => (0, g.jsxs)("svg", {
                        height: "32",
                        version: "1",
                        width: "32",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, g.jsxs)("g", {
                            clipPath: "url(#clip0_2968_21729)",
                            children: [(0, g.jsx)("rect", {
                                width: "32",
                                height: "31.9986",
                                rx: "4",
                                fill: "#0866FF"
                            }), (0, g.jsx)("path", {
                                d: "M22.2667 20.8891L23.1645 15.9997H17.9384V14.2706C17.9384 11.6868 18.9521 10.693 21.5756 10.693C22.3905 10.693 23.0464 10.7129 23.4241 10.7526V6.32036C22.7085 6.12157 20.9595 5.92285 19.9458 5.92285C14.5993 5.92285 12.1348 8.44701 12.1348 13.8929V15.9997H8.83545V20.8891H12.1348V31.9998C14 31.9998 16 31.9998 17.9384 31.9998V20.8891H22.2667Z",
                                fill: "white"
                            })]
                        }), (0, g.jsx)("defs", {
                            children: (0, g.jsx)("clipPath", {
                                id: "clip0_2968_21729",
                                children: (0, g.jsx)("rect", {
                                    width: "32",
                                    height: "31.9986",
                                    rx: "4",
                                    fill: "white"
                                })
                            })
                        })]
                    });
                const $ = Mt;
                var tt = () => (0, g.jsx)("svg", {
                    height: "32",
                    version: "1",
                    width: "32",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, g.jsxs)("g", {
                        fill: "none",
                        children: [(0, g.jsx)("rect", {
                            width: "32",
                            height: "31.9986",
                            rx: "4",
                            fill: "black"
                        }), (0, g.jsx)("path", {
                            d: "M17.9047 14.4696L25.3513 6H23.5873L17.1187 13.3525L11.956 6H6L13.8087 17.1194L6 25.9999H7.764L14.5907 18.2338L20.044 25.9999H26M8.40067 7.30158H11.1107L23.586 24.7623H20.8753",
                            fill: "white"
                        })]
                    })
                });
                const bt = tt;
                var et = () => (0, g.jsxs)("svg", {
                    height: "32",
                    version: "1",
                    width: "32",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, g.jsx)("rect", {
                        width: "32",
                        height: "31.9986",
                        rx: "4",
                        fill: "#0A66C2"
                    }), (0, g.jsx)("path", {
                        d: "M27.2731 27.2727H22.4628V18.9258C22.4628 16.4634 21.4157 15.7037 20.065 15.7037C18.6381 15.7037 17.2381 16.7773 17.2381 18.9869V27.2727H12.4279V11.9906H17.0541V14.1073H17.1159C17.5811 13.1664 19.206 11.5608 21.6886 11.5608C24.3726 11.5608 27.2731 13.1523 27.2731 17.821V27.2727ZM7.13299 9.86094C5.60042 9.86094 4.3595 8.69566 4.3595 7.09999C4.3595 5.50486 5.60042 4.33691 7.13299 4.33691C8.66487 4.33691 9.9058 5.50486 9.9058 7.09999C9.9058 8.69566 8.66487 9.86094 7.13299 9.86094ZM9.53774 27.2608H4.72753V11.9782H9.53774V27.2608Z",
                        fill: "white"
                    })]
                });
                const vt = et;
                var Ht = [{
                    name: "Facebook",
                    icon: K.createElement($, null),
                    link: "https://www.facebook.com/sharer/sharer.php?u=",
                    utmSource: "facebook"
                }, {
                    name: "X",
                    icon: K.createElement(bt, null),
                    link: "https://www.x.com/intent/post?url=",
                    utmSource: "x"
                }, {
                    name: "LinkedIn",
                    icon: K.createElement(vt, null),
                    link: "https://www.linkedin.com/shareArticle?url=",
                    utmSource: "linkedin"
                }];
                const kt = Ht;
                var nt = r(82905),
                    _t = r(90728),
                    wr = r(5884),
                    Nr = r(55345),
                    Zt = r(76214),
                    Z = r(45401),
                    ir = r(67721),
                    ze = r(67121),
                    Zr = r(66115),
                    Fr = r(72539),
                    Et = r(86300),
                    Hn = r(46055),
                    un = r(48004),
                    En = r(30287),
                    $r = r(54827),
                    dn = r(95853),
                    Bn = r(18727),
                    Cn = r(94705),
                    qr = r(28365),
                    Lt = r.n(qr),
                    Un = r(57396),
                    cn = r(4477),
                    en = j => {
                        var {
                            layoutType: _,
                            onClick: z = se.lQ,
                            providers: J = [],
                            textAlign: Fe
                        } = j, Ke, {
                            t: it
                        } = (0, Un.fN)(), $t = (0, P.DP)(), Dt = Fe || (0, un.sY)($t == null || (Ke = $t.screens) === null || Ke === void 0 ? void 0 : Ke.alignment, _), {
                            center: rt,
                            start: hr
                        } = dn.xH;
                        return (0, g.jsx)(dn.Ay, {
                            position: Dt === un.Fm.CENTER ? rt : hr,
                            space: 1,
                            children: J.map((Ve, Ir) => {
                                var {
                                    icon: Mr,
                                    link: Ur,
                                    name: Sn
                                } = Ve, mn = it("thankyou-screen.social-icon.title", {
                                    name: Sn
                                });
                                return (0, g.jsx)("a", {
                                    "aria-label": mn,
                                    href: Ur,
                                    onClick: () => z(Sn),
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    title: mn,
                                    children: (0, g.jsx)(cn.A, {
                                        "aria-hidden": "true",
                                        svg: Mr
                                    })
                                }, "social-icons-".concat(Ir))
                            })
                        })
                    };
                const Cr = en;
                var V = r(10927),
                    le = ["link", "utmSource"];

                function me(j, _) {
                    var z = Object.keys(j);
                    if (Object.getOwnPropertySymbols) {
                        var J = Object.getOwnPropertySymbols(j);
                        _ && (J = J.filter(function(Fe) {
                            return Object.getOwnPropertyDescriptor(j, Fe).enumerable
                        })), z.push.apply(z, J)
                    }
                    return z
                }

                function Ue(j) {
                    for (var _ = 1; _ < arguments.length; _++) {
                        var z = arguments[_] != null ? arguments[_] : {};
                        _ % 2 ? me(Object(z), !0).forEach(function(J) {
                            ft(j, J, z[J])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(z)) : me(Object(z)).forEach(function(J) {
                            Object.defineProperty(j, J, Object.getOwnPropertyDescriptor(z, J))
                        })
                    }
                    return j
                }

                function ft(j, _, z) {
                    return (_ = at(_)) in j ? Object.defineProperty(j, _, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : j[_] = z, j
                }

                function at(j) {
                    var _ = It(j, "string");
                    return typeof _ == "symbol" ? _ : _ + ""
                }

                function It(j, _) {
                    if (typeof j != "object" || !j) return j;
                    var z = j[Symbol.toPrimitive];
                    if (z !== void 0) {
                        var J = z.call(j, _ || "default");
                        if (typeof J != "object") return J;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (_ === "string" ? String : Number)(j)
                }

                function Rr(j, _) {
                    if (j == null) return {};
                    var z, J, Fe = Yr(j, _);
                    if (Object.getOwnPropertySymbols) {
                        var Ke = Object.getOwnPropertySymbols(j);
                        for (J = 0; J < Ke.length; J++) z = Ke[J], _.indexOf(z) === -1 && {}.propertyIsEnumerable.call(j, z) && (Fe[z] = j[z])
                    }
                    return Fe
                }

                function Yr(j, _) {
                    if (j == null) return {};
                    var z = {};
                    for (var J in j)
                        if ({}.hasOwnProperty.call(j, J)) {
                            if (_.indexOf(J) !== -1) continue;
                            z[J] = j[J]
                        }
                    return z
                }
                var Pn = "typeform-ty-screen-ref",
                    Kn = (j, _) => {
                        var z = j.indexOf("?") > 0 ? "&" : "?";
                        return "".concat(j).concat(z, "utm_source=").concat(_, "&utm_content=typeform_social")
                    },
                    vn = (j, _, z) => {
                        if (!(0, V.l)()) return "";
                        var J = "".concat(window.location.origin).concat(window.location.pathname);
                        return j && (J = "".concat(J, "?").concat(Pn, "=").concat(j)), _ && (J = Kn(J, z)), J
                    },
                    ta = j => {
                        var {
                            providers: _,
                            thankYouScreenRef: z,
                            appendUtmSourceParam: J
                        } = j;
                        return _.map(Fe => {
                            var {
                                link: Ke,
                                utmSource: it
                            } = Fe, $t = Rr(Fe, le), Dt = "".concat(vn(z, J, it)), rt = encodeURIComponent(Dt);
                            return Ue({
                                link: "".concat(Ke).concat(rt)
                            }, $t)
                        })
                    },
                    Vn = j => {
                        var {
                            providers: _,
                            thankYouScreenRef: z,
                            appendUtmSourceParam: J,
                            layoutType: Fe,
                            onClick: Ke
                        } = j, it = ta({
                            providers: _,
                            thankYouScreenRef: z,
                            appendUtmSourceParam: J
                        });
                        return K.createElement(Cr, {
                            layoutType: Fe,
                            onClick: Ke,
                            providers: it
                        })
                    };
                Vn.propTypes = {
                    appendUtmSourceParam: Lt().bool,
                    layoutType: Lt().string,
                    onClick: Lt().func,
                    position: Lt().oneOf(["center", "start"]),
                    providers: Lt().arrayOf(Lt().shape({
                        icon: Lt().node,
                        link: Lt().string,
                        name: Lt().string
                    })),
                    thankYouScreenRef: Lt().string
                }, Vn.defaultProps = {
                    providers: []
                };
                const ba = Vn;

                function Tn() {
                    return Tn = Object.assign ? Object.assign.bind() : function(j) {
                        for (var _ = 1; _ < arguments.length; _++) {
                            var z = arguments[_];
                            for (var J in z)({}).hasOwnProperty.call(z, J) && (j[J] = z[J])
                        }
                        return j
                    }, Tn.apply(null, arguments)
                }
                var sa = {
                        button: se.gB,
                        background: se.gB,
                        primary: se.gB,
                        secondary: se.gB,
                        buttonContent: se.gB
                    },
                    ua = (j, _) => {
                        j ? (0, W.eJ)(j, _) : window.location.reload()
                    },
                    U = j => j != null && j.title && j !== null && j !== void 0 && j.description && j !== null && j !== void 0 && j.shareIcons ? Ie.Im + Ie.w_ + Ie.w_ + Ie.w_ : j != null && j.title && j !== null && j !== void 0 && j.description ? Ie.Im + Ie.w_ + Ie.w_ : j != null && j.title ? Ie.Im + Ie.w_ : Ie.Im,
                    ie = j => {
                        var _, z, J, Fe, Ke, {
                                layoutType: it,
                                screenDetails: $t,
                                theme: Dt,
                                buttonLabel: rt,
                                handleRedirect: hr
                            } = j,
                            {
                                t: Ve
                            } = (0, ue.mR)(),
                            Ir = (0, Me.j)(),
                            [Mr, Ur] = (0, K.useState)(!1),
                            Sn = (0, un.sY)(Dt == null || (_ = Dt.screens) === null || _ === void 0 ? void 0 : _.alignment, it) || "center",
                            mn = Ir ? 0 : U($t);
                        return (0, $r.Z)(() => {
                            Ur(!0)
                        }, mn), Mr ? K.createElement(Hn.A, {
                            color: (z = Dt.colors) === null || z === void 0 ? void 0 : z.button,
                            centered: Sn === un.Fm.CENTER,
                            content: rt,
                            contentColor: (J = Dt.colors) === null || J === void 0 ? void 0 : J.buttonContent,
                            dataQa: "thank-you-button",
                            contextBackgroundColor: (Fe = Dt.colors) === null || Fe === void 0 ? void 0 : Fe.background,
                            helperColor: (Ke = Dt.colors) === null || Ke === void 0 ? void 0 : Ke.primary,
                            helperText: (0, _t.A)(Ve("label.buttonHint.default")),
                            onClick: hr,
                            size: "large",
                            revealAnimation: !En.A
                        }) : K.createElement(K.Fragment, null)
                    },
                    he = j => {
                        var _, {
                                brandingUrl: z,
                                brandLogo: J,
                                hasUtmSource: Fe = !1,
                                isFocusable: Ke,
                                isPulseSurveyVariant: it,
                                isRedirectEnabled: $t = !0,
                                isWinningOutcome: Dt = !1,
                                screenDetails: rt,
                                showBranding: hr,
                                showScreen: Ve,
                                t: Ir = Bt => Bt,
                                theme: Mr,
                                trackBrandingCtaClick: Ur,
                                trackButtonClick: Sn,
                                trackSocialIconClick: mn,
                                blockHeightChanging: F,
                                formId: ce,
                                isRedirectEndingScreenFeatureEnabled: de,
                                isDefaultThankyouScreen: ge
                            } = j,
                            _e = (0, K.useRef)(null),
                            jt = (0, K.useRef)(null),
                            xe = (0, K.useRef)(),
                            Ut = (0, Me.j)(),
                            [xt, lr] = (0, K.useState)(!Ut),
                            Gt = (0, p.dv)(),
                            Ye = (0, Z.M)(),
                            Yt = Gt === "sm",
                            {
                                colors: Le = sa,
                                logo: sr
                            } = Mr,
                            Kr = hr && Yt && (sr == null ? void 0 : sr.href),
                            Or = (0, K.useCallback)(() => {
                                Ur(rt.ref)
                            }, [Ur, rt]);
                        (0, K.useLayoutEffect)(() => {
                            if (_e.current && Ke && Ve) {
                                var Bt = setTimeout(() => {
                                    var ar;
                                    (ar = _e.current) === null || ar === void 0 || ar.focus()
                                }, G.$);
                                return () => clearTimeout(Bt)
                            }
                        }, [Ke, Ve]), (0, K.useEffect)(() => {
                            Ut && lr(!1)
                        }, [Ut]);
                        var Rt = Bt => {
                            if (Ve) {
                                var ar, Wr = (jt == null || (ar = jt.current) === null || ar === void 0 ? void 0 : ar.clientHeight) || 0,
                                    nn = ((Bt == null ? void 0 : Bt.scrollHeight) || 0) + Wr;
                                F(nn)
                            }
                        };
                        if (!rt || !Object.keys(rt).length) return null;
                        var {
                            layout: tn,
                            shareIcons: pn,
                            showButton: Er,
                            description: ur,
                            title: rn,
                            buttonLabel: Qt = ""
                        } = rt, nr = (0, Zr.A)(Gt, tn), dr = (tn == null ? void 0 : tn.attachment) || rt.attachment, je = (nr == null ? void 0 : nr.type) || (0, b.g)(dr), Qr = nr == null ? void 0 : nr.placement, yn = () => {
                            !Ut && (dr == null ? void 0 : dr.type) === A.r.video && lr(!xt)
                        }, Ft = Bt => {
                            Ve && ((0, Nr.nx)(Bt.nativeEvent) && yn(), Er && Bt.key === qe.A.ENTER && (Bt.stopPropagation(), Vr(Bt)))
                        }, Vr = Bt => {
                            if ($t) {
                                var {
                                    ref: ar,
                                    redirectUrl: Wr,
                                    buttonMode: nn
                                } = rt, {
                                    buttonLabel: Pt
                                } = rt, He = (0, wr.K)(Bt);
                                xe.current || Sn(ar, nn, Pt, He), xe.current = setTimeout(() => {
                                    var Sr = (0, Zt.A)() && !!window.location.search.match(/typeform-embed-handle-ending-button-click=true/i);
                                    if (Sr) {
                                        var gn = de ? {
                                            formId: ce,
                                            ref: ar
                                        } : {
                                            formId: ce
                                        };
                                        nt.OZ(gn)
                                    } else ua(Wr != null ? Wr : "", ce)
                                }, Ie.l6)
                            }
                        }, Ge = Bt => {
                            var ar = Bt.toLowerCase();
                            mn(ar)
                        }, Pr = () => it ? (0, _t.A)(`*We appreciate your feedback!*
 We'll use it to make Typeform better.`) : ge ? (0, _t.A)(Ir(Et.al)) : rt.title, Xt = () => it || !ge ? (0, _t.A)(Ir(Qt)) : (0, _t.A)(Ir(Et.y9)), Tr = () => {
                            if (!(!Ve || !Er || !Yt)) return K.createElement(Fr.A, {
                                ref: jt,
                                onClickButtonHandler: Vr,
                                onClickBrandingHandler: Or,
                                useBranding: hr,
                                label: Xt(),
                                mainButtonDataQa: "persistent-thank-you-button",
                                animationDelay: Ie.Im
                            })
                        }, Ln = () => !Ve || !Er ? K.createElement(K.Fragment, null) : K.createElement(ie, {
                            layoutType: je,
                            screenDetails: rt,
                            theme: Mr,
                            buttonLabel: Xt(),
                            handleRedirect: Vr
                        });
                        return K.createElement(G.Ay, {
                            isVisible: Ve,
                            duration: Ie.Im
                        }, K.createElement(Cn.s, {
                            "data-qa": "thank-you-screen-wrapper",
                            isVisible: Ve,
                            ref: _e,
                            onKeyDown: Ft,
                            tabIndex: -1
                        }, K.createElement(E.A, Tn({
                            attachment: ge ? void 0 : dr,
                            brandingMotto: (0, _t.A)(Ir("label.branding.motto")),
                            brandingText: (0, _t.A)(Ir("label.branding.create")),
                            brandingUrl: z
                        }, it ? null : {
                            brandLogo: J
                        }, {
                            buttonColor: Le.button,
                            buttonContent: Xt(),
                            buttonContentColor: Le.buttonContent,
                            buttonDataQa: "thank-you-button",
                            buttonEnabled: !!Er,
                            screenContentRefCallback: Rt,
                            contextBackgroundColor: Le.background,
                            dataQa: "thank-you-screen".concat(Ve ? "-visible" : "", " deep-purple-thank-you-screen").concat(Ve ? "-visible" : ""),
                            hasAttachmentFixedHeight: (0, ir.c)(),
                            helperColor: Le.primary,
                            helperText: (0, _t.A)(Ir("label.buttonHint.default")),
                            isBrandingEnabled: hr && !Kr,
                            isVideoPlaying: xt,
                            key: rt.ref,
                            layoutPlacement: Qr,
                            layoutType: je,
                            onBrandingBtnClick: Or,
                            onButtonClick: Vr,
                            onVideoClick: yn,
                            pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                            secondaryColor: Le == null ? void 0 : Le.secondary,
                            showScreen: Ve,
                            stickyFooterRef: jt,
                            buttonComponent: Ln(),
                            footerComponent: Tr(),
                            transparentFooter: Ye
                        }), Ve && K.createElement(K.Fragment, null, ge && K.createElement(dn.Ay, {
                            position: (Mr == null || (_ = Mr.screens) === null || _ === void 0 ? void 0 : _.alignment) === un.Fm.CENTER ? "center" : "start"
                        }, K.createElement(We, {
                            width: 100,
                            height: 100,
                            color: Le.button,
                            viewBox: "100 100 300 300"
                        })), rn && K.createElement(G.Ay, {
                            type: "slideUp",
                            delay: Ie.Im,
                            duration: Ie.lj,
                            curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                        }, K.createElement(Bn.A, {
                            bottom: 2
                        }, K.createElement(ee.Ay, {
                            color: Le.primary,
                            htmlTag: (0, ze.h)(),
                            type: Ee.go.screenTitle,
                            breakText: !0
                        }, Pr()))), ur && K.createElement(G.Ay, {
                            type: "slideUp",
                            delay: Ie.Im + Ie.w_,
                            duration: Ie.lj,
                            curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                        }, K.createElement(Bn.A, {
                            bottom: 2
                        }, K.createElement(ee.Ay, {
                            color: Le.primary,
                            htmlTag: "p",
                            type: Ee.go.screenDescription,
                            breakText: !0
                        }, ur))), pn && K.createElement(G.Ay, {
                            type: "slideUp",
                            delay: Ie.Im + Ie.w_ + Ie.w_,
                            duration: Ie.lj,
                            curve: "cubic-bezier(0.55, 0.00, 0.10, 1.00)"
                        }, K.createElement(ba, {
                            appendUtmSourceParam: Fe,
                            layoutType: je,
                            onClick: Ge,
                            providers: kt,
                            thankYouScreenRef: Dt ? rt.ref : null
                        }))))))
                    };
                const Se = he;

                function St(j, _) {
                    var z = Object.keys(j);
                    if (Object.getOwnPropertySymbols) {
                        var J = Object.getOwnPropertySymbols(j);
                        _ && (J = J.filter(function(Fe) {
                            return Object.getOwnPropertyDescriptor(j, Fe).enumerable
                        })), z.push.apply(z, J)
                    }
                    return z
                }

                function At(j) {
                    for (var _ = 1; _ < arguments.length; _++) {
                        var z = arguments[_] != null ? arguments[_] : {};
                        _ % 2 ? St(Object(z), !0).forEach(function(J) {
                            Nt(j, J, z[J])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(z)) : St(Object(z)).forEach(function(J) {
                            Object.defineProperty(j, J, Object.getOwnPropertyDescriptor(z, J))
                        })
                    }
                    return j
                }

                function Nt(j, _, z) {
                    return (_ = rr(_)) in j ? Object.defineProperty(j, _, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : j[_] = z, j
                }

                function rr(j) {
                    var _ = Lr(j, "string");
                    return typeof _ == "symbol" ? _ : _ + ""
                }

                function Lr(j, _) {
                    if (typeof j != "object" || !j) return j;
                    var z = j[Symbol.toPrimitive];
                    if (z !== void 0) {
                        var J = z.call(j, _ || "default");
                        if (typeof J != "object") return J;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (_ === "string" ? String : Number)(j)
                }
                var or = (j, _) => {
                        var z, J = (0, O.r4)(j),
                            Fe = Br(j, J ? Et.Xz : Et.TN),
                            Ke = (z = (0, O.fF)(j)) !== null && z !== void 0 ? z : {},
                            {
                                redirectUrl: it,
                                ref: $t,
                                buttonLabel: Dt = _.t(Et.y9),
                                buttonMode: rt
                            } = Ke,
                            hr = () => {
                                switch (rt) {
                                    case te.RELOAD:
                                        return null;
                                    case te.REDIRECT:
                                        return it;
                                    case te.REDIRECT_DEFAULT:
                                    default:
                                        return Br(j, $t === O.pi ? Et.G5 : Et.EK)
                                }
                            },
                            Ve = (0, m.ve)(j) && !(rt === te.REDIRECT_DEFAULT && Dt === _.t(Et.y9));
                        return {
                            isDefaultThankyouScreen: J,
                            isRedirectEnabled: !(0, m.jq)(j),
                            isWinningOutcome: S(j),
                            showBranding: Ve,
                            screenDetails: At(At({}, Ke), {}, {
                                buttonLabel: Dt,
                                redirectUrl: hr()
                            }),
                            showScreen: (0, y.Tt)(j),
                            theme: (0, u.O4)(j),
                            isFocusable: (0, y.aw)(j),
                            isPulseSurveyVariant: (0, h.Rn)(j),
                            brandingUrl: Fe,
                            hasUtmSource: N(j),
                            brandLogo: (0, u.LO)(j),
                            formId: (0, m.eM)(j),
                            isRedirectEndingScreenFeatureEnabled: (0, L.n4)(j)
                        }
                    },
                    fn = j => {
                        var _ = (J, Fe, Ke, it) => {
                                if (J === O.pi) return (0, w.Pr)(Et.G5);
                                switch (Fe) {
                                    case te.RELOAD:
                                        return (0, w.R9)(Et.Tz, it);
                                    case te.REDIRECT:
                                        return (0, w.R9)(Et.LQ, it, Ke);
                                    case te.REDIRECT_DEFAULT:
                                        return (0, w.Pr)(Et.zr);
                                    default:
                                }
                            },
                            z = J => {
                                var Fe = J === O.pi ? Et.Xz : Et.TN;
                                return (0, w.Pr)(Fe)
                            };
                        return At({}, (0, f.zH)({
                            trackBrandingCtaClick: J => z(J),
                            trackButtonClick: (J, Fe, Ke, it) => _(J, Fe, Ke, it),
                            trackSocialIconClick: w.gM,
                            blockHeightChanging: B.Wj
                        }, j))
                    },
                    Br = (j, _) => (0, m.jq)(j) ? null : (0, C.dH)(j)(W.Bc, _);
                const Hr = (0, D.A)((0, l.Ng)(or, fn)((0, D.A)((0, p.Wj)(Se))))
            },
            4784: (ve, R, r) => {
                r.d(R, {
                    M: () => b,
                    A: () => Me
                });
                var l = r(7897),
                    f = r(25734),
                    p = r(17771),
                    h = r(94567),
                    w = r(86881),
                    B = r(4477),
                    D = r(57773),
                    O = r(11089),
                    y = r(43388),
                    m = r(46651);

                function u(M, I) {
                    var P = Object.keys(M);
                    if (Object.getOwnPropertySymbols) {
                        var g = Object.getOwnPropertySymbols(M);
                        I && (g = g.filter(function(ae) {
                            return Object.getOwnPropertyDescriptor(M, ae).enumerable
                        })), P.push.apply(P, g)
                    }
                    return P
                }

                function S(M) {
                    for (var I = 1; I < arguments.length; I++) {
                        var P = arguments[I] != null ? arguments[I] : {};
                        I % 2 ? u(Object(P), !0).forEach(function(g) {
                            (0, l.A)(M, g, P[g])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(P)) : u(Object(P)).forEach(function(g) {
                            Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(P, g))
                        })
                    }
                    return M
                }
                var N = M => (0, m.jsxs)("svg", S(S({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, M), {}, {
                    children: [(0, m.jsx)("g", {
                        clipPath: "url(#clip0_5499_77589)",
                        children: (0, m.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.03 4.97a.75.75 0 0 0-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 1 0 1.06 1.06L8 9.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L9.06 8l1.97-1.97a.75.75 0 1 0-1.06-1.06L8 6.94 6.03 4.97Z"
                        })
                    }), (0, m.jsx)("defs", {
                        children: (0, m.jsx)("clipPath", {
                            id: "clip0_5499_77589",
                            children: (0, m.jsx)("path", {
                                d: "M0 0h16v16H0z"
                            })
                        })
                    })]
                }));
                const C = N;

                function W(M, I) {
                    var P = Object.keys(M);
                    if (Object.getOwnPropertySymbols) {
                        var g = Object.getOwnPropertySymbols(M);
                        I && (g = g.filter(function(ae) {
                            return Object.getOwnPropertyDescriptor(M, ae).enumerable
                        })), P.push.apply(P, g)
                    }
                    return P
                }

                function L(M) {
                    for (var I = 1; I < arguments.length; I++) {
                        var P = arguments[I] != null ? arguments[I] : {};
                        I % 2 ? W(Object(P), !0).forEach(function(g) {
                            (0, l.A)(M, g, P[g])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(P)) : W(Object(P)).forEach(function(g) {
                            Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(P, g))
                        })
                    }
                    return M
                }
                var te = M => (0, m.jsxs)("svg", L(L({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, M), {}, {
                    children: [(0, m.jsx)("g", {
                        clipPath: "url(#clip0_5499_77587)",
                        children: (0, m.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm4.058 6.455a.75.75 0 1 0-1.12-.998L7.21 9.637 5.28 7.708a.75.75 0 1 0-1.06 1.06l2.49 2.49a.75.75 0 0 0 1.09-.03l4.258-4.773Z"
                        })
                    }), (0, m.jsx)("defs", {
                        children: (0, m.jsx)("clipPath", {
                            id: "clip0_5499_77587",
                            children: (0, m.jsx)("path", {
                                d: "M0 0h16v16H0z"
                            })
                        })
                    })]
                }));
                const K = te;
                var E = r(32336),
                    ee = ["dataQa", "ref", "id", "message", "role", "visible", "type", "textProps", "iconProps"];

                function ue(M, I) {
                    var P = Object.keys(M);
                    if (Object.getOwnPropertySymbols) {
                        var g = Object.getOwnPropertySymbols(M);
                        I && (g = g.filter(function(ae) {
                            return Object.getOwnPropertyDescriptor(M, ae).enumerable
                        })), P.push.apply(P, g)
                    }
                    return P
                }

                function G(M) {
                    for (var I = 1; I < arguments.length; I++) {
                        var P = arguments[I] != null ? arguments[I] : {};
                        I % 2 ? ue(Object(P), !0).forEach(function(g) {
                            (0, l.A)(M, g, P[g])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(P)) : ue(Object(P)).forEach(function(g) {
                            Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(P, g))
                        })
                    }
                    return M
                }
                var se = h.Ay.div.withConfig({
                        displayName: "FeedbackWrapper",
                        componentId: "sc-__sc-15n0ilv-0"
                    })(["background-color:", ";border-radius:3px;", ";color:#fff;display:inline-flex;align-items:center;", ";min-height:", ";outline:0;padding-block-start:var(--spacing-50);padding-block-end:var(--spacing-50);padding-inline-start:var(--spacing-100);padding-inline-end:var(--spacing-150);"], M => {
                        var {
                            backgroundColor: I
                        } = M;
                        return I
                    }, M => {
                        var {
                            breakpoint: I
                        } = M;
                        return I === "sm" ? "width: 100%;" : ""
                    }, M => {
                        var {
                            isVisible: I
                        } = M;
                        return I ? "" : "visibility: hidden"
                    }, M => {
                        var {
                            breakpoint: I
                        } = M;
                        return I === "sm" ? "32px" : "28px"
                    }),
                    b = function(M) {
                        return M.error = "error", M.warning = "warning", M.correct = "correct", M.incorrect = "incorrect", M
                    }({}),
                    Ee = {
                        [b.error]: {
                            iconSvg: y.A,
                            foregroundColor: E.Tj.error_red,
                            backgroundColor: "#F7E6E6"
                        },
                        [b.warning]: {
                            iconSvg: y.A,
                            foregroundColor: E.Tj.warning,
                            backgroundColor: "#FFFAEB"
                        },
                        [b.correct]: {
                            iconSvg: K,
                            foregroundColor: E.Tj.success_green,
                            backgroundColor: "#E3E8D4"
                        },
                        [b.incorrect]: {
                            iconSvg: C,
                            foregroundColor: E.Tj.error_red,
                            backgroundColor: "#F7E6E6"
                        }
                    },
                    A = M => {
                        var I, P, g, ae, H, {
                                dataQa: Y,
                                ref: re,
                                id: oe,
                                message: fe = "",
                                role: Ae = "alert",
                                visible: Ne = !1,
                                type: We = b.error,
                                textProps: qe,
                                iconProps: Ie
                            } = M,
                            Mt = (0, f.A)(M, ee),
                            $ = (0, D.dv)(),
                            tt = (0, O.$E)(),
                            bt = (I = Ee[We]) === null || I === void 0 ? void 0 : I.iconSvg;
                        return (0, m.jsxs)(se, G(G({
                            backgroundColor: (P = Ee[We]) === null || P === void 0 ? void 0 : P.backgroundColor,
                            breakpoint: $,
                            "data-qa": "".concat(Y, "-feedback-wrapper"),
                            isVisible: Ne,
                            ref: re,
                            tabIndex: tt ? 0 : void 0
                        }, Mt), {}, {
                            children: [bt && (0, m.jsx)(B.A, G({
                                color: (g = Ee[We]) === null || g === void 0 ? void 0 : g.foregroundColor,
                                svg: (ae = Ee[We]) === null || ae === void 0 ? void 0 : ae.iconSvg,
                                boundarySize: 3
                            }, Ie)), (0, m.jsx)(w.Ay, G(G({
                                color: (H = Ee[We]) === null || H === void 0 ? void 0 : H.foregroundColor,
                                dataQa: Y,
                                id: oe,
                                responsive: !1,
                                role: Ae,
                                size: "sizeN1",
                                useDefaultFont: !0
                            }, qe), {}, {
                                children: fe
                            }))]
                        }))
                    };
                const Me = A
            },
            6556: (ve, R, r) => {
                r.d(R, {
                    $: () => h
                });
                var l = r(17771),
                    f = r(53930),
                    p = r(46618),
                    h = () => {
                        var w = (0, f.wA)(),
                            B = (0, l.useRef)(null),
                            D = (0, l.useRef)(null),
                            O = function(u) {
                                var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                                    N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                                    C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
                                if (N) {
                                    D.current = u, w((0, p.Uh)(u, !0, C));
                                    return
                                }
                                w((0, p.T1)(u)), S && B.current !== u && D.current === u && (w((0, p.jq)(u)), B.current = u)
                            },
                            y = m => {
                                w((0, p.Uh)(m, !1, !1))
                            };
                        return {
                            trackMediaPlay: O,
                            trackAutoplayFailed: y
                        }
                    }
            },
            10698: (ve, R, r) => {
                r.d(R, {
                    R: () => w
                });
                var l = r(57036),
                    f = r(13332),
                    p = r(64334),
                    h = B => ({
                        enrichment_metadata: {
                            enriched_in_renderer: B
                        }
                    });

                function* w() {
                    var B = yield(0, l.Lt)(f.IU), {
                        toggle: D,
                        active: O
                    } = B, y = D && O;
                    if (y) {
                        var m = yield(0, l.Lt)(p.m$);
                        return yield(0, l.T1)(h, m)
                    }
                }
            },
            10834: (ve, R, r) => {
                r.d(R, {
                    c: () => ee,
                    A: () => I
                });
                var l = r(17771),
                    f = r(94567),
                    p = r(32336),
                    h = r(7897),
                    w = r(46651);

                function B(P, g) {
                    var ae = Object.keys(P);
                    if (Object.getOwnPropertySymbols) {
                        var H = Object.getOwnPropertySymbols(P);
                        g && (H = H.filter(function(Y) {
                            return Object.getOwnPropertyDescriptor(P, Y).enumerable
                        })), ae.push.apply(ae, H)
                    }
                    return ae
                }

                function D(P) {
                    for (var g = 1; g < arguments.length; g++) {
                        var ae = arguments[g] != null ? arguments[g] : {};
                        g % 2 ? B(Object(ae), !0).forEach(function(H) {
                            (0, h.A)(P, H, ae[H])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(ae)) : B(Object(ae)).forEach(function(H) {
                            Object.defineProperty(P, H, Object.getOwnPropertyDescriptor(ae, H))
                        })
                    }
                    return P
                }
                var O = P => (0, w.jsx)("svg", D(D({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "none",
                    viewBox: "0 0 16 16"
                }, P), {}, {
                    className: "shouldFlipIfRtl",
                    children: (0, w.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.47 1.97a.75.75 0 0 1 1.06 0l4.897 4.896a1.25 1.25 0 0 1 0 1.768L9.53 13.53a.75.75 0 0 1-1.06-1.06l3.97-3.97H1.75a.75.75 0 1 1 0-1.5h10.69L8.47 3.03a.75.75 0 0 1 0-1.06Z"
                    })
                }));
                const y = O;
                var m = r(81776),
                    u = r(31645),
                    S = r(4477),
                    N = r(48004),
                    C = r(40854),
                    W = r(18727),
                    L = r(34717),
                    te = r(57773),
                    K = r(65533),
                    E = .7,
                    ee = {
                        ARROW: "arrow",
                        LOCK: "lock",
                        QUOTE: "quote"
                    },
                    ue = f.Ay.div.withConfig({
                        displayName: "CounterContent",
                        componentId: "sc-__sc-1bypfuk-0"
                    })(["display:flex;align-items:center;color:", ";", ";height:100%;outline:none;"], P => {
                        var {
                            $color: g
                        } = P;
                        return g
                    }, p.yM.sizeN1),
                    G = (0, f.Ay)(L.Ay).withConfig({
                        displayName: "TitleContent",
                        componentId: "sc-__sc-1bypfuk-1"
                    })(["", ";"], P => {
                        var {
                            dimmedTitle: g
                        } = P;
                        return g && (0, f.AH)(["opacity:", ";"], E)
                    }),
                    se = f.Ay.div.withConfig({
                        displayName: "CounterPosition",
                        componentId: "sc-__sc-1bypfuk-2"
                    })(["position:relative;height:", ";display:flex;align-items:center;"], P => {
                        var {
                            $height: g
                        } = P;
                        return g !== "unset" ? "".concat(g, "px") : g
                    }),
                    b = f.Ay.div.withConfig({
                        displayName: "CounterWrapper",
                        componentId: "sc-__sc-1bypfuk-3"
                    })(["position:absolute;inset-inline-end:100%;"]),
                    Ee = f.Ay.div.withConfig({
                        displayName: "HeaderWrapper",
                        componentId: "sc-__sc-1bypfuk-4"
                    })(["", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;position:relative;overflow-wrap:break-word;", ";", ""], P => {
                        var {
                            dimmed: g
                        } = P;
                        return g && (0, f.AH)(["opacity:", ";"], E)
                    }, P => P.textAlign === N.Fm.CENTER ? "justify-content: center" : "", P => {
                        var {
                            isTitleHidden: g
                        } = P;
                        return g && (0, f.AH)(["height:0;overflow:visible;"])
                    }),
                    A = f.Ay.div.withConfig({
                        displayName: "QuoteMark",
                        componentId: "sc-__sc-1bypfuk-5"
                    })(["", ";quotes:'\u201C' '\u201D';color:", ";&::before{content:open-quote;", ";}"], P => {
                        var {
                            size: g
                        } = P;
                        return g && p.yM[g]
                    }, P => {
                        var {
                            $color: g
                        } = P;
                        return g
                    }, P => {
                        var {
                            size: g
                        } = P;
                        return g && p.yM[g]
                    }),
                    Me = f.Ay.span.withConfig({
                        displayName: "LockIconWrapper",
                        componentId: "sc-__sc-1bypfuk-6"
                    })(["margin-block-start:1px;margin-inline-start:8px;"]),
                    M = P => {
                        var {
                            dataQaTitle: g,
                            title: ae,
                            ellipsis: H,
                            color: Y,
                            counterIcon: re,
                            counterColor: oe,
                            counterContent: fe,
                            counterId: Ae,
                            dimmed: Ne,
                            dimmedTitleOnly: We,
                            required: qe,
                            textAlign: Ie,
                            isGroupHeader: Mt = !1,
                            isTitleHidden: $ = !1
                        } = P, tt, bt, et = (0, te.dv)(), vt = (0, f.DP)(), Ht = Mt ? p.go.body : p.go.blockTitle, kt = (0, L.$v)(Ht, et, vt == null || (tt = vt.fields) === null || tt === void 0 ? void 0 : tt.fontSize), nt = kt && p.OP[kt].lineHeight, _t = (0, L.$v)(p.go.blockQuoteMark, et, vt == null || (bt = vt.fields) === null || bt === void 0 ? void 0 : bt.fontSize), wr = et === "sm" ? m.A : y;
                        return (0, w.jsxs)(Ee, {
                            dimmed: Ne,
                            textAlign: Ie,
                            "data-qa": "question-header",
                            isTitleHidden: $,
                            children: [(fe || re) && (0, w.jsx)(se, {
                                $height: nt,
                                children: (0, w.jsx)(b, {
                                    children: (0, w.jsx)(C.A, {
                                        right: p.LG.rightBlockCounter,
                                        children: (0, w.jsxs)(ue, {
                                            $color: oe,
                                            id: Ae,
                                            children: [re !== "quote" && (0, w.jsx)(L.Ay, {
                                                dataQa: "question-header-counter",
                                                htmlTag: "span",
                                                type: p.go.blockCounter,
                                                children: (0, w.jsx)("span", {
                                                    "aria-hidden": !0,
                                                    children: fe
                                                })
                                            }), re === ee.QUOTE && (0, w.jsx)(A, {
                                                "data-qa": "question-header-quote-mark",
                                                $color: oe,
                                                size: _t
                                            }), fe && re === ee.ARROW && (0, w.jsx)(W.A, {
                                                left: et === "sm" ? 1 / 4 : 1 / 2,
                                                children: (0, w.jsx)(S.A, {
                                                    "aria-hidden": !0,
                                                    color: oe,
                                                    svg: wr
                                                })
                                            }), fe && re === ee.LOCK && (0, w.jsx)(Me, {
                                                children: (0, w.jsx)(S.A, {
                                                    "aria-hidden": !0,
                                                    color: oe,
                                                    svg: u.A
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, w.jsxs)(G, {
                                color: Y,
                                dataQa: g,
                                ellipsis: H,
                                htmlTag: "span",
                                type: Ht,
                                align: Ie,
                                dimmedTitle: !Ne && We,
                                children: [!$ && (ae || (0, w.jsx)("div", {
                                    children: "\xA0"
                                })), qe && (0, w.jsx)(L.Ay, {
                                    "aria-hidden": !0,
                                    "data-qa": "required-asterisk",
                                    inline: !0,
                                    htmlTag: "span",
                                    type: Ht,
                                    children: "*"
                                })]
                            })]
                        })
                    };
                const I = (0, K.A)(M)
            },
            11214: (ve, R, r) => {
                r.d(R, {
                    $8: () => w,
                    Ev: () => O,
                    L$: () => h,
                    wF: () => B
                });
                var l = r(68014),
                    f = r(55645),
                    p = y => y.captcha || {},
                    h = (0, l.Mz)(p, f.mt, (y, m) => {
                        var {
                            validated: u,
                            siteKeyV2: S,
                            siteKeyV3: N
                        } = y, {
                            captcha: C,
                            spamIdentification: W
                        } = m;
                        if (N && W) return 3;
                        if (S && !u && C) return 2
                    }),
                    w = (0, l.Mz)(h, p, (y, m) => {
                        var {
                            siteKeyV2: u,
                            siteKeyV3: S
                        } = m;
                        return y === 3 ? S : u
                    }),
                    B = (0, l.Mz)(h, y => y === 2),
                    D = (0, l.Mz)(h, y => y === 3),
                    O = (0, l.Mz)(B, D, (y, m) => y || m)
            },
            17163: (ve, R, r) => {
                r.d(R, {
                    Kb: () => Ee,
                    kO: () => M
                });
                var l = r(90801),
                    f = "cookie",
                    p = "cookie_ip",
                    h = r(57036),
                    w = r(37594),
                    B = r(77264),
                    D = r(20633);

                function O(I) {
                    return "form-submitted-".concat(I)
                }

                function y(I) {
                    var P = parseInt(D.A.get(O(I)) || "") || null;
                    return P === null || isNaN(P) ? null : P
                }

                function m(I) {
                    return "tf-response-".concat(I)
                }

                function u(I) {
                    try {
                        var P = localStorage.getItem(m(I));
                        return P ? JSON.parse(P) : []
                    } catch (g) {
                        return []
                    }
                }

                function S(I) {
                    var P = u(I);
                    P.push(Date.now()), localStorage.setItem(m(I), JSON.stringify(P))
                }

                function* N(I, P) {
                    var g, ae = yield(0, h.T1)(C, I);
                    if (ae.length === 0) return !1;
                    var H = (g = P.responsesLimit) !== null && g !== void 0 ? g : 1;
                    if (!P.period) return ae.length >= H;
                    var Y = L(P.period);
                    return Y === void 0 ? !1 : yield(0, h.T1)(W, H, Y, ae)
                }

                function C(I) {
                    var P = u(I);
                    if (P.length === 0) {
                        var g = y(I);
                        P = g ? [g] : []
                    }
                    return P
                }

                function W(I, P, g) {
                    var ae = g.findIndex(Y => Y >= P),
                        H = ae > -1 ? g.slice(ae).length : 0;
                    return H >= I
                }

                function L(I) {
                    switch (I) {
                        case "day":
                            return (0, B.startOfToday)().getTime();
                        case "week":
                            return (0, B.startOfWeek)(new Date, {
                                weekStartsOn: 0
                            }).getTime();
                        case "month":
                            return (0, B.startOfMonth)(new Date).getTime();
                        case "year":
                            return (0, B.startOfYear)(new Date).getTime();
                        default:
                            return
                    }
                }

                function te(I, P, g, ae, H, Y, re) {
                    try {
                        var oe = I[Y](re),
                            fe = oe.value
                    } catch (Ae) {
                        return void g(Ae)
                    }
                    oe.done ? P(fe) : Promise.resolve(fe).then(ae, H)
                }

                function K(I) {
                    return function() {
                        var P = this,
                            g = arguments;
                        return new Promise(function(ae, H) {
                            var Y = I.apply(P, g);

                            function re(fe) {
                                te(Y, ae, H, re, oe, "next", fe)
                            }

                            function oe(fe) {
                                te(Y, ae, H, re, oe, "throw", fe)
                            }
                            re(void 0)
                        })
                    }
                }

                function* E(I, P) {
                    var g = yield(0, h.T1)(N, I, P);
                    return g ? !0 : yield(0, h.T1)(ee, I)
                }
                var ee = function() {
                        var I = K(function*(P) {
                            var g = "".concat(w.K.apiHost, "/").concat(w.K.endpoints.forms).concat(P, "/").concat(w.K.endpoints.verifyDuplicate),
                                ae = yield fetch(g, {
                                    method: "POST"
                                });
                            return ae.status === 200 ? !1 : ae.status === 409
                        });
                        return function(g) {
                            return I.apply(this, arguments)
                        }
                    }(),
                    ue = {
                        [f]: N,
                        [p]: E
                    },
                    G = r(35940),
                    se = r(54648),
                    b = r(13332);

                function* Ee() {
                    yield(0, h.T1)(A), yield(0, h.yJ)({
                        type: se.d6
                    })
                }

                function* A() {
                    var I = yield(0, h.Lt)(G.C);
                    if (I) {
                        var P = ue[I.type];
                        if (P) {
                            var g = yield(0, h.Lt)(b.eM), ae = yield(0, h.T1)(P, g, I);
                            ae && (yield(0, h.yJ)((0, se.St)())), yield(0, h.cH)(Me, g)
                        }
                    }
                }

                function* Me(I) {
                    yield(0, h.s)(l.ZF), yield(0, h.T1)(S, I)
                }

                function* M() {
                    var I = yield(0, h.Lt)(b.eM);
                    yield(0, h.yJ)((0, se.St)()), yield(0, h.T1)(S, I)
                }
            },
            20965: (ve, R, r) => {
                r.d(R, {
                    A: () => h,
                    a: () => f
                });
                var l = r(94567),
                    f = (0, l.AH)(["position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);clip-path:inset(100%);overflow:hidden;"]),
                    p = l.Ay.span.withConfig({
                        displayName: "A11yVisuallyHidden",
                        componentId: "sc-__sc-nyquty-0"
                    })(["", ""], f);
                p.displayName = "A11yVisuallyHidden";
                const h = p
            },
            21683: (ve, R, r) => {
                r.r(R), r.d(R, {
                    default: () => Sl
                });
                var l = r(17771),
                    f = r(94567),
                    p = r(10053),
                    h = r(11089),
                    w = r(47277),
                    B = r(1907),
                    D = r(57773),
                    O = r(91488),
                    y = r(16492),
                    m = r(53930),
                    u = r(87559),
                    S = r(7280),
                    N = r(38348),
                    C = r(99501),
                    W = r(35575),
                    L = r(55645),
                    te = r(12036),
                    K = r(96707),
                    E = r(13332),
                    ee = r(48002),
                    ue = r(2009),
                    G = r(22953),
                    se = r(44418),
                    b = r(49062),
                    Ee = r(28365),
                    A = r.n(Ee),
                    Me = r(77828),
                    M = r(35411),
                    I = r(8075),
                    P = r(93320),
                    g = r(46651),
                    ae = 500,
                    H = 200,
                    Y = f.Ay.div.withConfig({
                        displayName: "Wrapper",
                        componentId: "sc-__sc-1lreasu-0"
                    })(["position:absolute;top:0;left:0;right:50%;bottom:0;"]),
                    re = f.Ay.div.withConfig({
                        displayName: "MediaWrapper",
                        componentId: "sc-__sc-1lreasu-1"
                    })(["position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),
                    oe = o => {
                        var {
                            breakpoint: s,
                            enableAnimation: d = !1,
                            infoMessageOverlay: c,
                            isVisible: x,
                            mediaHref: Q,
                            mediaMetadata: ye,
                            mediaPlaceholder: be,
                            onAutoplayFailed: Oe,
                            onEnded: Pe,
                            onPlay: Be,
                            onTimeUpdate: pe,
                            properties: Qe,
                            shouldMuteAutoplay: Je
                        } = o, ne = (0, l.useRef)(null), mt = () => d ? ae : 0, pt = () => d ? H : 0;
                        return (0, g.jsx)(p.Ay, {
                            isVisible: x,
                            duration: mt(),
                            delay: pt(),
                            type: "fade",
                            children: (0, g.jsx)(Y, {
                                ref: ne,
                                children: (0, g.jsx)(re, {
                                    breakpoint: s,
                                    children: (0, g.jsx)(P.A, {
                                        href: Q,
                                        infoMessageOverlay: c,
                                        isVisible: x,
                                        mediaPlaceholder: be,
                                        metadata: ye,
                                        onAutoplayFailed: Oe,
                                        onEnded: Pe,
                                        onPlay: Be,
                                        onTimeUpdate: pe,
                                        properties: Qe,
                                        shouldMuteAutoplay: Je
                                    })
                                })
                            })
                        })
                    };
                const fe = oe;
                var Ae = r(48004),
                    Ne = r(13615),
                    We = r(44222),
                    qe = r(24407),
                    Ie = r(39853),
                    Mt = r(55178),
                    $ = r(16380),
                    tt = r(26706),
                    bt = r(46618),
                    et = r(44007),
                    vt;

                function Ht(o, s, d) {
                    return (s = kt(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function kt(o) {
                    var s = nt(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function nt(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }

                function _t(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var wr = 300,
                    Nr = 500,
                    Zt = f.Ay.div.withConfig({
                        displayName: "MouseWheelTrigger__Root",
                        componentId: "sc-i71xob-0"
                    })(vt || (vt = _t([`
  outline: none;
  width: 100%;
`])));
                class Z extends l.Component {
                    constructor() {
                        super(...arguments), Ht(this, "Lethargy", new et.j9), Ht(this, "accumulated", 0), Ht(this, "timeout", null), Ht(this, "disableTimeout", null), Ht(this, "disabledSwipe", !1), Ht(this, "handleWheelScroll", s => {
                            var {
                                upHandler: d,
                                downHandler: c
                            } = this.props, x = this.Lethargy.check(s), Q = s.deltaY;
                            !this.disabledSwipe && x !== !1 && (this.accumulated += Q, this.setTimeout(() => {
                                this.accumulated = 0
                            })), this.accumulated < -wr && (d(), this.accumulated = 0, this.disableSwipe(Nr)), this.accumulated > wr && (c(), this.accumulated = 0, this.disableSwipe(Nr))
                        })
                    }
                    setTimeout(s) {
                        this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(s, 500)
                    }
                    disableSwipe(s) {
                        this.disableTimeout && clearTimeout(this.disableTimeout), this.disabledSwipe = !0, this.disableTimeout = setTimeout(() => {
                            this.disabledSwipe = !1
                        }, s)
                    }
                    render() {
                        return l.createElement(Zt, {
                            style: this.props.customStyle,
                            onWheel: this.handleWheelScroll
                        }, this.props.children)
                    }
                }
                Z.propTypes = {
                    children: A().node,
                    customStyle: A().object,
                    downHandler: A().func,
                    upHandler: A().func
                };
                const ir = Z;
                var ze;

                function Zr() {
                    return Zr = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, Zr.apply(null, arguments)
                }

                function Fr(o, s) {
                    var d = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var c = Object.getOwnPropertySymbols(o);
                        s && (c = c.filter(function(x) {
                            return Object.getOwnPropertyDescriptor(o, x).enumerable
                        })), d.push.apply(d, c)
                    }
                    return d
                }

                function Et(o) {
                    for (var s = 1; s < arguments.length; s++) {
                        var d = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? Fr(Object(d), !0).forEach(function(c) {
                            Hn(o, c, d[c])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : Fr(Object(d)).forEach(function(c) {
                            Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(d, c))
                        })
                    }
                    return o
                }

                function Hn(o, s, d) {
                    return (s = un(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function un(o) {
                    var s = En(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function En(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }

                function $r(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var dn = f.Ay.div.withConfig({
                        displayName: "swipeable__Swipeable",
                        componentId: "sc-1ew37v3-0"
                    })(ze || (ze = $r([`
  `, `
`])), o => {
                        var {
                            fullHeight: s
                        } = o;
                        return s && "height: 100%;"
                    }),
                    Bn = o => {
                        var {
                            canSwipeNext: s,
                            canSwipePrevious: d,
                            goToNextBlock: c,
                            goToPreviousBlock: x,
                            fullHeight: Q,
                            children: ye
                        } = o, be = (0, l.useRef)(!1), Oe = (0, l.useRef)(!1), Pe = (0, l.useRef)(!1), Be = (0, m.wA)(), pe = (0, $.G)(L.DZ), Qe = (0, $.G)(ht => (0, tt.q4)(ht, pe)), Je = (0, $.G)(ht => (0, tt.Cw)(ht, pe)), ne = Je && !Qe, mt = () => {
                            if (be.current) return !1;
                            Oe.current = !s, Pe.current = !d, be.current = !0
                        }, pt = ht => {
                            be.current = !1;
                            var fr = ne ? 0 : 50;
                            if (!(Math.abs(ht.deltaY) <= fr / ht.velocity)) {
                                if (ht.dir === Ie.UP) {
                                    if (ne) return Be((0, bt.wU)({
                                        ref: pe,
                                        itemType: "scroll"
                                    }));
                                    if (s && !Oe.current) {
                                        c({
                                            navigationType: Mt.fS
                                        });
                                        return
                                    }
                                }
                                ht.dir === Ie.PX && d && !Pe.current && x({
                                    navigationType: Mt.ep
                                })
                            }
                        }, dt = {
                            delta: 10
                        };
                        ne && (dt = Et(Et({}, dt), {}, {
                            preventScrollOnSwipe: !0,
                            trackTouch: !0
                        }));
                        var ct = (0, Ie.uh)(Et({
                                onSwiped: pt,
                                onSwiping: mt
                            }, dt)),
                            lt = () => {
                                d && x({
                                    navigationType: Mt.U5
                                })
                            },
                            yt = () => {
                                s && c({
                                    navigationType: Mt.fz
                                })
                            },
                            Ct = Q ? {
                                height: "100%"
                            } : {};
                        return l.createElement(ir, {
                            customStyle: Ct,
                            downHandler: yt,
                            upHandler: lt
                        }, l.createElement(dn, Zr({
                            fullHeight: Q
                        }, ct, dt), ye))
                    };
                const Cn = Bn;
                var qr = r(97149),
                    Lt = r(75997),
                    Un = r(63257),
                    cn = r(5884),
                    en = r(84404),
                    Cr, V = (Cr = window) === null || Cr === void 0 || (Cr = Cr.location) === null || Cr === void 0 || (Cr = Cr.search) === null || Cr === void 0 ? void 0 : Cr.includes("typeform-render-all-blocks=true"),
                    le = (o, s, d, c) => {
                        var {
                            currentRef: x,
                            previousRef: Q,
                            previousActiveRef: ye,
                            nextRef: be,
                            firstInvalidBlockInReviewModeRef: Oe
                        } = d, Pe = o.ref === x, Be = o.ref === ye, pe = o.ref === Q, Qe = o.ref === be, Je = (0, en.DC)(o.type), ne = s == null ? void 0 : s.hasBeenInteractedWith, mt = o.ref === Oe, pt = c && (Pe || pe || Be);
                        return V || pt || Pe || pe || Qe || Je && ne || mt
                    },
                    me = r(89571),
                    Ue = r(55345),
                    ft = r(66115),
                    at = r(26919),
                    It = r(26616),
                    Rr = r(46768),
                    Yr = r(6556),
                    Pn = r(49350),
                    Kn = r(72768),
                    vn = r(78607),
                    ta = r(28022),
                    Vn = r(90801);

                function ba(o) {
                    return {
                        type: Vn.qb,
                        payload: {
                            isScrollNearTop: !o
                        }
                    }
                }
                var Tn = r(94369);

                function sa() {
                    return o => {
                        setTimeout(() => {
                            o({
                                type: Vn.HF,
                                payload: {
                                    isInputFocused: !1
                                }
                            })
                        }, 50)
                    }
                }

                function ua() {
                    return {
                        type: Vn.HF,
                        payload: {
                            isInputFocused: !0
                        }
                    }
                }
                var U = "ABSTAIN",
                    ie = "LOCATION_ADDRESS",
                    he = "USER_BIRTHDAY_DATE",
                    Se = "LOCATION_COUNTRY",
                    St = "USER_EMAIL",
                    At = "USER_FIRST_NAME",
                    Nt = "USER_LAST_NAME",
                    rr = "USER_NAME",
                    Lr = "COMPANY_NAME",
                    or = "USER_INFO_JOB_ROLE",
                    fn = "USER_PHONE",
                    Br = "LOCATION_ZIP_CODE",
                    Hr = "USER_GENDER",
                    j = "USER_WEBSITE",
                    _ = {
                        [U]: "off",
                        [ie]: "street-address",
                        [he]: "bday",
                        [Se]: "country",
                        [St]: "email",
                        [At]: "given-name",
                        [Nt]: "family-name",
                        [rr]: "name",
                        [Lr]: "organization",
                        [or]: "organization-title",
                        [fn]: "tel",
                        [Br]: "postal-code",
                        [Hr]: "sex",
                        [j]: "off"
                    },
                    z = r(40803),
                    J = r(36240),
                    Fe = r(41764),
                    Ke = r(60324),
                    it = r(62190),
                    $t = r(77216),
                    Dt = r(15127),
                    rt = "hide_gdpr_banner",
                    hr = "1",
                    Ve = (o, s) => {
                        var d, c = (0, L.GH)(o, s);
                        if ((d = c.application) !== null && d !== void 0 && d.iframeUrl) {
                            var x = new URL(c.application.iframeUrl),
                                Q = new URLSearchParams(x.search),
                                ye = (0, J.rf)(s)(o);
                            return ye.forEach(be => {
                                be.value !== $t.AI && Q.set(be.ref, be.value)
                            }), (0, L.CX)(c) && (0, Dt.BN)() && Q.set(rt, hr), x.search = Q, "".concat(x)
                        }
                    },
                    Ir = r(50180),
                    Mr = r(66470),
                    Ur = r(1728),
                    Sn = r(29414),
                    mn = r(7888),
                    F = r(90281),
                    ce = r(50560),
                    de = r(73795),
                    ge = r(7968),
                    _e = r(74673),
                    jt = r(41562),
                    xe = r(83926),
                    Ut = r(24038),
                    xt = r(48081),
                    lr = r(61977),
                    Gt = r(42045),
                    Ye = r(37594),
                    Yt = r(67570),
                    Le = r(63410),
                    sr = o => o.mediaServiceRespondentToken,
                    Kr = r(62512),
                    Or = r(42730),
                    Rt = r(94948),
                    tn = r(85731);

                function pn() {
                    return pn = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, pn.apply(null, arguments)
                }

                function Er(o, s) {
                    var d = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var c = Object.getOwnPropertySymbols(o);
                        s && (c = c.filter(function(x) {
                            return Object.getOwnPropertyDescriptor(o, x).enumerable
                        })), d.push.apply(d, c)
                    }
                    return d
                }

                function ur(o) {
                    for (var s = 1; s < arguments.length; s++) {
                        var d = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? Er(Object(d), !0).forEach(function(c) {
                            rn(o, c, d[c])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : Er(Object(d)).forEach(function(c) {
                            Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(d, c))
                        })
                    }
                    return o
                }

                function rn(o, s, d) {
                    return (s = Qt(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function Qt(o) {
                    var s = nr(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function nr(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }
                var dr = 40,
                    je = o => {
                        var {
                            abTests: s,
                            application: d,
                            applicationInfo: c,
                            blockIndex: x,
                            buttonText: Q,
                            canAutoFocus: ye,
                            disableNavigation: be,
                            enableNavigation: Oe,
                            featureFlags: Pe,
                            feedbackContinueLabel: Be,
                            field: pe,
                            hasBeenInteractedWith: Qe,
                            hasBranding: Je,
                            hasDescription: ne,
                            hasNavigationArrows: mt,
                            hasProgress: pt,
                            iframeUrl: dt,
                            isActive: ct,
                            isCommitted: lt,
                            isFirstBlock: yt,
                            isLivePreview: Ct,
                            isValid: ht,
                            language: fr,
                            layout: st,
                            layoutItemsSize: zt,
                            onBlockInteraction: ln,
                            onCommitAnswer: xr,
                            onInputBlur: sn,
                            onInputFocus: Dn,
                            onLivePreviewUnsupportedError: zn,
                            onStageAnswer: Wt,
                            recenter: Xr,
                            submitForm: kn,
                            t: xn,
                            theme: mr,
                            title: _r,
                            uniqueId: Gr,
                            validationError: hn,
                            value: Rn,
                            knowledgeQuizProps: Nn
                        } = o, [Jn, Yn, fa] = (0, xt.A)(ge.tm), zr = (0, m.wA)(), [qt, Qn, Na] = (0, xt.A)(ge.Oh), [ma, Xe] = (0, l.useState)(null), [Fa, ai] = (0, l.useState)(() => (0, G.Hn)(pe)), [Qi, ii] = (0, l.useState)(), [wi, Ci] = (0, l.useState)(!1), Ha = (0, m.d4)(Yt.lX), Xi = (0, m.d4)(sr), Ua = (0, m.d4)(Ke.j4), pa = (0, m.d4)(E.eM), qi = (0, m.d4)(E.r2) !== !1, Ot = !!(Ua && Ua.code === null), pr = (0, l.useRef)(null), Fn = (0, l.useRef)(), ya = (0, l.useRef)(), eo = (0, en.P4)(pe) && yt, to = ur(ur({}, Pe), s);
                        (0, l.useEffect)(() => () => {
                            fa(), Na()
                        }, []), (0, l.useEffect)(() => {
                            if (Ua) {
                                var yr = Fn.current;
                                yr == null || yr.focus()
                            }
                        }, [Ua, Fn]), (0, Lt.l6)(ct, (0, l.useCallback)(me.A, []));

                        function ro(yr) {
                            ai(yr)
                        }

                        function Li(yr) {
                            Xr(xe._N), yr && (be(), zr((0, lr.tx)()))
                        }

                        function Al(yr) {
                            zr((0, lr._K)()), yr && Oe()
                        }

                        function jl() {
                            no && zr((0, Le.xl)({
                                ref: pe.ref
                            })), ln()
                        }

                        function wl() {
                            Dn(), (0, u.CI)() && Xr(xe._N)
                        }

                        function Do(yr) {
                            var ga = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            ct && xr(pe.ref, yr, ga)
                        }

                        function Ii(yr) {
                            Wt(pe.ref, yr)
                        }

                        function Cl(yr, ga) {
                            var Nl = new Ut.EZ(ga);
                            Yn(yr), Qn(yr), Xe(Nl)
                        }

                        function Di(yr) {
                            zr((0, Gt.bM)(yr))
                        }

                        function Ll(yr) {
                            Ci(yr)
                        }
                        var xo = (0, de.Jv)(Gr),
                            Il = lt && !ht,
                            no = (0, m.d4)((0, Or.UR)(pe.ref)),
                            oi = Il || qt || no;
                        (0, l.useEffect)(() => {
                            oi && (0, tn.pW)(pr.current, 0)
                        }, [oi, pr]);
                        var Dl = ur(ur({}, pe.validations), {}, {
                                required: (0, en.gx)(pe)
                            }),
                            Ro = (0, de.gt)({
                                uniqueId: Gr,
                                isErrorMessageVisible: oi,
                                hasDescription: ne
                            }),
                            ao = (0, de._7)(Gr),
                            xl = Je || mt || pt,
                            Rl = (0, m.d4)((0, Or.GR)(pe.ref)),
                            Bl = {
                                onUploadSuccess: yr => {
                                    var {
                                        respondentToken: ga
                                    } = yr;
                                    (0, Rt.Y4)(pa, ga), zr((0, Kr.V3)(ga)), zr((0, Le.R5)({
                                        ref: pe.ref
                                    })), zr((0, Le.xl)({
                                        ref: pe.ref
                                    }))
                                },
                                onUploadError: () => {
                                    zr((0, Le.R5)({
                                        ref: pe.ref
                                    })), zr((0, Le.iN)({
                                        ref: pe.ref
                                    })), Wt(pe.ref, null)
                                },
                                onUploadStart: () => {
                                    zr((0, Le.xl)({
                                        ref: pe.ref
                                    })), zr((0, Le.mk)({
                                        ref: pe.ref
                                    }))
                                },
                                respondentToken: Xi,
                                isUploadPending: Rl,
                                dataConfig: {
                                    formId: pa,
                                    baseUrl: Ye.K.apiHost,
                                    fieldId: pe.id,
                                    visitorId: (0, Rt.ct)(pa)
                                },
                                playerMetadata: {
                                    video_title: "".concat(pa, "_").concat(pe.id),
                                    player_name: "renderer_video_answer",
                                    custom_1: pa
                                }
                            },
                            Ml = !pr.current,
                            Bo = () => no ? new Ut.HF : qt ? ma : (0, Ut.CU)(hn, pe == null ? void 0 : pe.type),
                            kl = (0, en.kh)(pe);
                        return l.createElement(jt.A, pn({}, o, {
                            autoFocusableRef: pr,
                            blockHeight: Qi,
                            delayFocus: eo ? ge.lv : 0,
                            focusOnContainer: Ml,
                            isShaking: Jn,
                            ref: ya,
                            titleCounterIcon: kl,
                            titleFor: Gr,
                            titleLabelId: ao,
                            titleTag: "label",
                            titleText: _r,
                            validations: Dl
                        }), l.createElement(ce.gp, pn({
                            answer: Rn,
                            ariaDescribedBy: Ro,
                            applicationInfo: c,
                            apiUrl: Ye.K.apiHost,
                            ariaLabelledBy: ao,
                            blockChangeTime: ge.PH,
                            blockIndex: x,
                            canAutoFocus: ye,
                            containerRef: ya,
                            featureFlags: to,
                            field: pe,
                            formId: pa,
                            focusableRef: pr,
                            getCustomMessage: xn,
                            hasBeenInteractedWith: Qe,
                            iframeUrl: dt,
                            isActive: ct,
                            isLivePreview: Ct,
                            knowledgeQuizProps: Nn,
                            locale: fr,
                            onBlockInteraction: jl,
                            onBlur: sn,
                            onChange: Ii,
                            onClose: Al,
                            onCommit: Do,
                            onError: Cl,
                            onFocus: wl,
                            onHeightChange: ii,
                            onHideHelperText: ro,
                            onHideFooterButton: Ll,
                            onLivePreviewUnsupportedError: zn,
                            onOpen: Li,
                            showKeyHintOnChoices: qi,
                            signature: Ha,
                            theme: mr,
                            uniqueId: Gr,
                            validationResult: oi ? hn == null ? void 0 : hn.validationResult : []
                        }, Bl, {
                            onFullscreenDropdownChange: Di
                        })), l.createElement(_e.A, {
                            answer: Rn,
                            application: d,
                            blockError: Bo(),
                            hideButton: wi,
                            minHeight: wi ? dr : void 0,
                            blockRef: pe.ref,
                            buttonText: Be || Q,
                            errorMessageId: xo,
                            errorMessageRef: Fn,
                            hasFormFooter: xl,
                            hideHelperText: Fa,
                            isErrorMessageVisible: !Ot && oi,
                            layout: st,
                            layoutItemsSize: zt,
                            onClick: Do,
                            submitForm: kn
                        }))
                    };
                je.defaultProps = {
                    submitForm: me.A,
                    theme: {
                        colors: {
                            secondary: u.gB
                        }
                    }
                }, je.propTypes = {
                    abTests: A().object,
                    application: A().object,
                    applicationInfo: A().object,
                    blockIndex: A().number,
                    buttonText: A().string,
                    canAutoFocus: A().bool,
                    validationResult: A().object,
                    disableNavigation: A().func,
                    enableNavigation: A().func,
                    featureFlags: A().object,
                    feedbackContinueLabel: A().string,
                    field: A().object,
                    fields: A().array,
                    hasHideHelperText: A().bool,
                    hasBranding: A().bool,
                    hasBeenInteractedWith: A().bool,
                    hasDescription: A().bool,
                    hasNavigationArrows: A().bool,
                    hasProgress: A().bool,
                    iframeUrl: A().string,
                    inlineSubmit: A().func,
                    isActive: A().bool,
                    isCommitted: A().bool,
                    isFirstBlock: A().bool,
                    isLivePreview: A().bool,
                    isValid: A().bool,
                    knowledgeQuizProps: A().shape({
                        useKnowledgeQuizBehaviour: A().bool,
                        showFeedback: A().bool
                    }),
                    language: A().string,
                    layout: A().object,
                    layoutItemsSize: A().object,
                    onBlockInteraction: A().func,
                    onCommitAnswer: A().func,
                    onInputBlur: A().func,
                    onInputFocus: A().func,
                    onLivePreviewUnsupportedError: A().func,
                    onStageAnswer: A().func,
                    recenter: A().func,
                    submitForm: A().func,
                    t: A().func,
                    theme: A().object,
                    title: A().oneOfType([A().array, A().string]),
                    uniqueId: A().string.isRequired,
                    validationError: A().instanceOf(Ut.EZ),
                    value: A().array
                };
                const Qr = je;
                var yn = r(85398),
                    Ft = r(88358),
                    Vr = r(38432),
                    Ge = ["uniqueId", "field"];

                function Pr() {
                    return Pr = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, Pr.apply(null, arguments)
                }

                function Xt(o, s) {
                    if (o == null) return {};
                    var d, c, x = Tr(o, s);
                    if (Object.getOwnPropertySymbols) {
                        var Q = Object.getOwnPropertySymbols(o);
                        for (c = 0; c < Q.length; c++) d = Q[c], s.indexOf(d) === -1 && {}.propertyIsEnumerable.call(o, d) && (x[d] = o[d])
                    }
                    return x
                }

                function Tr(o, s) {
                    if (o == null) return {};
                    var d = {};
                    for (var c in o)
                        if ({}.hasOwnProperty.call(o, c)) {
                            if (s.indexOf(c) !== -1) continue;
                            d[c] = o[c]
                        }
                    return d
                }
                var Ln = o => {
                        var s, d, c, {
                                uniqueId: x,
                                field: Q
                            } = o,
                            ye = Xt(o, Ge),
                            be = (0, f.DP)();
                        return l.createElement(jt.A, Pr({}, ye, {
                            titleText: Q.title,
                            description: (s = Q.properties) === null || s === void 0 ? void 0 : s.description,
                            suspended: !0,
                            titleFor: x,
                            theme: be,
                            uniqueId: x
                        }), l.createElement(Vr.A, {
                            animated: !0,
                            color: be == null || (d = be.colors) === null || d === void 0 ? void 0 : d.button,
                            backgroundColor: be == null || (c = be.colors) === null || c === void 0 ? void 0 : c.background,
                            dataQa: "block-loading-skeleton",
                            width: "60%",
                            height: "46px"
                        }))
                    },
                    Bt = r(66345),
                    ar = ["type", "featureFlags"];

                function Wr(o, s) {
                    var d = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var c = Object.getOwnPropertySymbols(o);
                        s && (c = c.filter(function(x) {
                            return Object.getOwnPropertyDescriptor(o, x).enumerable
                        })), d.push.apply(d, c)
                    }
                    return d
                }

                function nn(o) {
                    for (var s = 1; s < arguments.length; s++) {
                        var d = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? Wr(Object(d), !0).forEach(function(c) {
                            Pt(o, c, d[c])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : Wr(Object(d)).forEach(function(c) {
                            Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(d, c))
                        })
                    }
                    return o
                }

                function Pt(o, s, d) {
                    return (s = He(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function He(o) {
                    var s = Sr(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function Sr(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }

                function gn(o, s) {
                    if (o == null) return {};
                    var d, c, x = Kt(o, s);
                    if (Object.getOwnPropertySymbols) {
                        var Q = Object.getOwnPropertySymbols(o);
                        for (c = 0; c < Q.length; c++) d = Q[c], s.indexOf(d) === -1 && {}.propertyIsEnumerable.call(o, d) && (x[d] = o[d])
                    }
                    return x
                }

                function Kt(o, s) {
                    if (o == null) return {};
                    var d = {};
                    for (var c in o)
                        if ({}.hasOwnProperty.call(o, c)) {
                            if (s.indexOf(c) !== -1) continue;
                            d[c] = o[c]
                        }
                    return d
                }
                var ra = l.lazy(() => r.e(9915).then(r.bind(r, 43620))),
                    Ce = l.lazy(() => Promise.all([r.e(563), r.e(6822)]).then(r.bind(r, 76182))),
                    ot = l.lazy(() => r.e(8232).then(r.bind(r, 88583))),
                    cr = l.lazy(() => Promise.all([r.e(6462), r.e(9804)]).then(r.bind(r, 93286))),
                    Wn = l.lazy(() => Promise.all([r.e(6462), r.e(9804), r.e(3526)]).then(r.bind(r, 86469))),
                    na = l.lazy(() => r.e(9683).then(r.bind(r, 86309))),
                    da = l.lazy(() => r.e(2026).then(r.bind(r, 68442))),
                    ha = l.lazy(() => r.e(8620).then(r.bind(r, 56779))),
                    An = l.lazy(() => Promise.all([r.e(563), r.e(8459)]).then(r.bind(r, 64690))),
                    aa = l.lazy(() => Promise.all([r.e(6584), r.e(9162), r.e(911)]).then(r.bind(r, 22738))),
                    Oa = {
                        [F.vH]: {
                            component: (0, Ft.A)(na)
                        },
                        [F.vp]: {
                            component: (0, Ft.A)(da)
                        },
                        [F.zF]: {
                            component: (0, Ft.A)(ha)
                        },
                        [F.zl]: {
                            component: (0, Ft.A)(cr)
                        },
                        [F.uk]: {
                            component: (0, Ft.A)(An)
                        },
                        [F.DX]: {
                            component: (0, Ft.A)(Wn)
                        },
                        [F.IY]: {
                            component: (0, Ft.A)(Ce)
                        },
                        [F.F_]: {
                            component: (0, Ft.A)(ra)
                        },
                        [F._I]: {
                            component: (0, Ft.A)(ot)
                        },
                        [F.Kh]: {
                            component: (0, Ft.A)(aa)
                        }
                    },
                    kr = {
                        component: (0, Ft.A)(Qr)
                    },
                    Zn = o => {
                        var {
                            type: s,
                            featureFlags: d
                        } = o, c = gn(o, ar), {
                            onUnsupportedError: x
                        } = (0, Bt.o)(), Q = (0, m.d4)(E.eM);
                        (0, l.useEffect)(() => {
                            var {
                                blockRef: Oe,
                                isActive: Pe,
                                isLivePreview: Be,
                                onStageAnswer: pe,
                                autosavedAnswer: Qe,
                                setBlockTrackingData: Je = me.A,
                                value: ne
                            } = c;
                            if (!Be && Pe && Qe && (ne == null || !ne.length)) {
                                Je(Oe, yn.rC, yn.f2.PARTIAL_RESPONSE);
                                var mt = (0, Rt.$3)(Q, Oe);
                                if (mt) return (0, Rt.Dv)(Q, Oe);
                                pe(Oe, Qe, null, {
                                    isFromPrefilledAnswer: !0
                                })
                            }
                        }, [c.isActive]);
                        var ye = (0, ce.rl)(s, d != null ? d : {}) ? kr : Oa[s];
                        if (!ye) return null;
                        var be = nn({
                            type: s,
                            featureFlags: d,
                            onLivePreviewUnsupportedError: x
                        }, c);
                        return l.createElement(l.Suspense, {
                            fallback: l.createElement(Ln, be)
                        }, l.createElement(ye.component, be))
                    };
                const Va = Zn;
                var wa = ["title"];

                function an(o, s) {
                    if (o == null) return {};
                    var d, c, x = si(o, s);
                    if (Object.getOwnPropertySymbols) {
                        var Q = Object.getOwnPropertySymbols(o);
                        for (c = 0; c < Q.length; c++) d = Q[c], s.indexOf(d) === -1 && {}.propertyIsEnumerable.call(o, d) && (x[d] = o[d])
                    }
                    return x
                }

                function si(o, s) {
                    if (o == null) return {};
                    var d = {};
                    for (var c in o)
                        if ({}.hasOwnProperty.call(o, c)) {
                            if (s.indexOf(c) !== -1) continue;
                            d[c] = o[c]
                        }
                    return d
                }

                function Wa(o, s) {
                    var d = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var c = Object.getOwnPropertySymbols(o);
                        s && (c = c.filter(function(x) {
                            return Object.getOwnPropertyDescriptor(o, x).enumerable
                        })), d.push.apply(d, c)
                    }
                    return d
                }

                function i(o) {
                    for (var s = 1; s < arguments.length; s++) {
                        var d = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? Wa(Object(d), !0).forEach(function(c) {
                            $n(o, c, d[c])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : Wa(Object(d)).forEach(function(c) {
                            Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(d, c))
                        })
                    }
                    return o
                }

                function $n(o, s, d) {
                    return (s = In(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function In(o) {
                    var s = ui(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function ui(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }
                var di = (o, s) => (0, en.Vb)(o.type) ? i(i({}, o), {}, {
                        properties: i(i({}, o.properties), {}, {
                            fields: o.properties.fields.map(d => {
                                var {
                                    title: c
                                } = d, x = an(d, wa);
                                return i(i({}, x), {}, {
                                    title: s(c)
                                })
                            })
                        })
                    }) : o,
                    ci = (0, Kn.A)(JSON.stringify, Fe.YK),
                    Ca = (o, s, d) => {
                        var c = null;
                        return (x, Q) => {
                            var ye, be = (0, L.GH)(x, Q),
                                Oe = (0, L.pe)(x, Q),
                                Pe = (0, te.SJ)(x, be),
                                Be = Oe && (0, L.F4)(Oe),
                                pe = Oe && (0, L.wc)(Oe),
                                Qe = (0, ue.O4)(x),
                                Je = !(0, L.qr)(x) && !(0, L.Tt)(x);
                            if (c && !Pe && c.isActive === Pe && c.theme === Qe && c.isCommitted === Be && c.isBlockListVisible === Je) return c;
                            var ne = !(0, Fe.yT)(be.type, Oe),
                                mt = Oe && (0, L.ZE)(Oe),
                                pt = Oe && (0, L.gW)(Oe),
                                dt = (0, Ke.Rf)(x, Q),
                                ct = (0, Ke.wN)(x, Q),
                                lt = (0, J.G7)(x),
                                yt = o(x),
                                Ct = s(x),
                                ht = lt(yt, {
                                    allowHyperlinks: !0
                                }),
                                fr = lt(Ct, {
                                    allowHyperlinks: !0
                                }),
                                st = be.application ? Ve(x, Q) : void 0,
                                zt = (0, K.JD)(x),
                                ln = (0, E.ve)(x),
                                xr = !zt && !(0, E.Jm)(x),
                                sn = !zt && !(0, E.AT)(x),
                                Dn = (0, z.W)(x, Q),
                                zn = (0, u.r2)() ? "off" : _[Dn],
                                Wt = (0, Ae.sY)((ye = Qe.fields) === null || ye === void 0 ? void 0 : ye.alignment, d == null ? void 0 : d.type),
                                Xr = (0, Ur.ls)(x),
                                kn = Xr && (0, Ur.s7)(x) || (0, E.Z0)(x),
                                xn = (Yn, fa) => {
                                    if (!(!Yn || !fa)) return Sn.A.getOriginalLanguageChoiceLabelById(Yn, fa)
                                },
                                mr = di((0, L.Er)(x, Q), Yn => lt(Yn, {
                                    allowHyperlinks: !0
                                })),
                                _r = (0, mn.d)(x),
                                Gr = _r && (0, mn.c8)(mr),
                                hn = Gr && pe,
                                Rn = hn ? "label.knowledgeQuiz.button.continue" : void 0,
                                Nn;
                            Gr && (Nn = {
                                useKnowledgeQuizBehaviour: !0,
                                showFeedback: hn
                            });
                            var Jn = i(i({}, be), {}, {
                                abTests: (0, Ir.he)(x),
                                autoComplete: zn,
                                autosavedAnswer: (0, it.tu)(x, Q),
                                feedbackContinueLabel: Rn,
                                blockIndex: (0, L.wA)(x, Q),
                                description: fr,
                                featureFlags: (0, Ir.kc)(x),
                                field: mr,
                                formId: (0, E.eM)(x),
                                getOriginalLanguageChoiceLabel: xn,
                                hasBeenInteractedWith: pt,
                                hasBranding: ln,
                                hasDescription: !!(Ct != null && Ct.length),
                                hasNavigationArrows: xr,
                                hasProgress: sn,
                                iframeUrl: st,
                                isActive: Pe,
                                isAnswered: ne,
                                isBlockListVisible: Je,
                                isCommitted: Be,
                                isFirstBlock: (0, te.m_)(x, Q),
                                isLivePreview: (0, E.jq)(x),
                                isReviewModeEnabled: (0, E.V0)(x),
                                isScrollNearTop: (0, E.Jh)(x),
                                isValid: mt,
                                isVisibleGroupStickyHeader: (0, L.m1)(x),
                                language: kn,
                                ref: void 0,
                                scrolling: (0, E.sk)(x),
                                shouldClearInput: !ne && (0, E.jq)(x),
                                showKeyHintOnChoices: (0, E.r2)(x),
                                textAlign: Wt,
                                theme: Qe,
                                title: ht,
                                uniqueId: (0, te.AI)(x, Q),
                                validationError: dt,
                                validationErrors: ct,
                                value: ci(Oe),
                                knowledgeQuizProps: Nn
                            });
                            return c = Jn, Jn
                        }
                    },
                    _a = () => ((0, Mr.un)() && window.scrollBy(0, 0), sa()),
                    Mn = (o, s) => {
                        var {
                            blockRef: d,
                            layoutForViewport: c
                        } = s, x = (0, J._z)(d), Q = (0, J.qP)(d), ye = Ca(x, Q, c);
                        return be => ye(be, d)
                    },
                    La = (o, s) => {
                        var {
                            blockRef: d
                        } = s;
                        return i({}, (0, Pn.zH)({
                            blockHeightChanging: S.Wj,
                            onCommitAnswer: vn.Mw,
                            onStageAnswer: vn.fW,
                            goToBlock: S.P,
                            recenter: S.iZ,
                            scrollToChoice: S.sq,
                            endAutoScroll: S.qw,
                            onInputFocus: ua,
                            onInputBlur: _a,
                            onRequireStickyFooter: ta.O,
                            onRequireStickyHeader: ba,
                            onUnrecoverableError: Tn.EU,
                            setBlockTrackingData: y.zb,
                            submitForm: C.rM,
                            inlineSubmit: C.gX,
                            onBlockInteraction: () => Tn.TJ(d)
                        }, o))
                    };
                const vi = (0, m.Ng)(Mn, La)(Va);
                var fi = o => {
                    var s = (0, $.G)(L.DZ),
                        d = o === s,
                        c = (0, $.G)(L.aw),
                        x = (0, $.G)(L.bQ),
                        Q = (0, $.G)(ye => (0, te.m_)(ye, o));
                    return d ? !Q || x ? !0 : c : !1
                };
                const _n = fi;
                var wt = r(56663),
                    De = r(32705),
                    Ga = r(49180),
                    on, za, Dr, jn, Ar, Ea, mi, Ja;

                function wn(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var Za = o => {
                        var {
                            isEnhanced: s,
                            prefersReducedMotion: d,
                            shouldBeBefore: c,
                            shouldBeAfter: x
                        } = o;
                        return s && !d ? 1 : c || x ? 0 : 1
                    },
                    pi = o => {
                        var {
                            prefersReducedMotion: s,
                            shouldBeBefore: d,
                            shouldBeAfter: c,
                            isEnhanced: x
                        } = o;
                        return s ? (0, f.AH)(on || (on = wn([`
      transition: opacity `, `ms ease;
    `])), ge.PH / 2) : x ? (0, f.AH)(za || (za = wn([`
      transition: transform `, `ms
        cubic-bezier(0.53, 0, 0, 1);
      `, `
      `, `
    `])), ge.qI, d && (0, f.AH)(Dr || (Dr = wn([`
        transform: translateY(-100vh);
      `]))), c && (0, f.AH)(jn || (jn = wn([`
        transform: translateY(100vh);
      `])))) : (0, f.AH)(Ar || (Ar = wn([`
    transition: transform `, `ms ease,
      opacity `, `ms ease;
    `, `
    `, `
  `])), ge.PH, ge.PH / 2, d && (0, f.AH)(Ea || (Ea = wn([`
      transform: translateY(-100vh);
    `]))), c && (0, f.AH)(mi || (mi = wn([`
      transform: translateY(100vh);
    `]))))
                    },
                    $a = f.Ay.div.withConfig({
                        displayName: "block-list-item__Wrapper",
                        componentId: "sc-1awiua1-0"
                    })(Ja || (Ja = wn([`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-block-start: `, `px;
  pointer-events: `, `;
  opacity: `, `;
  `, `
`])), o => {
                        var {
                            topOffset: s
                        } = o;
                        return s
                    }, o => {
                        var {
                            isVisible: s,
                            shouldBeBefore: d,
                            shouldBeAfter: c
                        } = o;
                        return !s || d || c ? "none" : "auto"
                    }, Za, pi),
                    yi = o => {
                        var {
                            answer: s,
                            areBlocksVisible: d,
                            block: c,
                            blockIndex: x,
                            component: Q,
                            currentBlockIndex: ye,
                            currentRef: be,
                            disableNavigation: Oe,
                            enableNavigation: Pe,
                            goToBlock: Be,
                            goToNextBlock: pe,
                            handleCanSwipeChange: Qe,
                            handleIsVideoPlayingChange: Je,
                            isDisplayed: ne,
                            isVideoPlaying: mt,
                            layoutItemsSize: pt,
                            listIndexText: dt,
                            nextRef: ct,
                            prefersReducedMotion: lt,
                            previousActiveRef: yt,
                            previousRef: Ct,
                            topOffset: ht
                        } = o, fr = (0, m.d4)(E.V0), st = (0, m.d4)(Ke.s2), zt = st == null ? void 0 : st.ref, ln = c.ref === ct, xr = c.ref === be, sn = c.ref === yt, Dn = d && (xr || sn), zn = (0, $.G)(Rn => (0, De.n)(Rn, wt.$G)) === Ga.Gt, Wt = (0, D.dv)(), Xr = _n(c.ref), kn = (0, ft.A)(Wt, c.layout), xn = {
                            currentRef: be,
                            previousRef: Ct,
                            previousActiveRef: yt,
                            nextRef: ct
                        };
                        fr && (xn.firstInvalidBlockInReviewModeRef = zt);
                        var mr = !le(c, s, xn, d) || !V && ln && !d,
                            _r = (0, l.useCallback)(Rn => {
                                xr || (ln ? pe({
                                    navigationType: (0, cn.K)(Rn)
                                }) : Be(c.ref, {
                                    navigationType: (0, cn.K)(Rn)
                                }))
                            }, [Be, xr, ln]);
                        if (mr || !ne) return null;
                        var Gr = x > ye || !d,
                            hn = x < ye;
                        return l.createElement($a, {
                            isVisible: Dn,
                            key: c.ref,
                            onFocus: _r,
                            prefersReducedMotion: lt,
                            shouldBeAfter: Gr,
                            shouldBeBefore: hn,
                            topOffset: ht,
                            isEnhanced: !!zn
                        }, l.createElement(Q, {
                            blockRef: c.ref,
                            canAutoFocus: Xr,
                            disableNavigation: Oe,
                            enableNavigation: Pe,
                            isVideoPlaying: mt,
                            layoutItemsSize: pt,
                            listIndexText: dt,
                            onChangeCanSwipe: Qe,
                            onVideoClick: Je,
                            layoutForViewport: kn
                        }))
                    };
                const Ia = l.memo(yi);
                var Da, xa, ca, gi;

                function bi(o, s) {
                    var d = Object.keys(o);
                    if (Object.getOwnPropertySymbols) {
                        var c = Object.getOwnPropertySymbols(o);
                        s && (c = c.filter(function(x) {
                            return Object.getOwnPropertyDescriptor(o, x).enumerable
                        })), d.push.apply(d, c)
                    }
                    return d
                }

                function Ra(o) {
                    for (var s = 1; s < arguments.length; s++) {
                        var d = arguments[s] != null ? arguments[s] : {};
                        s % 2 ? bi(Object(d), !0).forEach(function(c) {
                            ia(o, c, d[c])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : bi(Object(d)).forEach(function(c) {
                            Object.defineProperty(o, c, Object.getOwnPropertyDescriptor(d, c))
                        })
                    }
                    return o
                }

                function ia(o, s, d) {
                    return (s = Ya(s)) in o ? Object.defineProperty(o, s, {
                        value: d,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[s] = d, o
                }

                function Ya(o) {
                    var s = Ba(o, "string");
                    return typeof s == "symbol" ? s : s + ""
                }

                function Ba(o, s) {
                    if (typeof o != "object" || !o) return o;
                    var d = o[Symbol.toPrimitive];
                    if (d !== void 0) {
                        var c = d.call(o, s || "default");
                        if (typeof c != "object") return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (s === "string" ? String : Number)(o)
                }

                function Pa(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var Ma = f.Ay.div.withConfig({
                        displayName: "block-list__Root",
                        componentId: "sc-gxm16y-0"
                    })(Da || (Da = Pa([`
  height: 100%;
`]))),
                    Qa = f.Ay.div.withConfig({
                        displayName: "block-list__BlocksListWrapper",
                        componentId: "sc-gxm16y-1"
                    })(xa || (xa = Pa([`
  width: 100%;
  height: `, `;
`])), o => {
                        var {
                            height: s
                        } = o;
                        return s
                    }),
                    Ri = f.Ay.div.withConfig({
                        displayName: "block-list__BlocksListContainer",
                        componentId: "sc-gxm16y-2"
                    })(ca || (ca = Pa([`
  height: 100%;
  `, `
`])), o => {
                        var {
                            isPulseSurveyActive: s
                        } = o;
                        return s && (0, f.AH)(gi || (gi = Pa([`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `])))
                    }),
                    Bi = (o, s, d, c, x, Q, ye, be, Oe, Pe, Be, pe, Qe, Je) => {
                        var ne, mt, pt, dt, ct, lt, yt = (0, ft.A)(d, s.layout) || {
                                type: Ae.$1.STACK
                            },
                            Ct = yt.type,
                            ht = yt.placement,
                            {
                                currentRef: fr
                            } = c,
                            st = (ne = s == null || (mt = s.layout) === null || mt === void 0 ? void 0 : mt.attachment) !== null && ne !== void 0 ? ne : s.attachment,
                            [zt] = (s == null ? void 0 : s.media) || [];
                        if (!le(s, o, c, x)) return null;
                        var ln = st == null ? void 0 : st.href,
                            xr = st == null ? void 0 : st.type,
                            sn = (pt = st == null || (dt = st.properties) === null || dt === void 0 ? void 0 : dt.focalPoint) !== null && pt !== void 0 ? pt : Ae.VG,
                            Dn = st == null || (ct = st.properties) === null || ct === void 0 ? void 0 : ct.brightness,
                            zn = st == null || (lt = st.properties) === null || lt === void 0 ? void 0 : lt.description,
                            Wt = s.ref === fr,
                            Xr = Be !== ln || !Wt,
                            kn = !!(zt != null && zt.enabled);
                        kn && (Ct = at.O, ht = Ae.GE.LEFT);
                        var xn = (0, Ae.Tw)(Ct, d),
                            mr = Ra(Ra({}, zt == null ? void 0 : zt.properties), {}, {
                                isAutoplay: Qe
                            });
                        return Me.zd.includes(xn) && kn ? l.createElement(fe, {
                            shouldMuteAutoplay: Je,
                            onAutoplayFailed: Oe,
                            mediaHref: zt == null ? void 0 : zt.href,
                            breakpoint: d,
                            properties: mr,
                            isVisible: Wt,
                            key: s.ref,
                            enableAnimation: Xr,
                            onPlay: be,
                            onTimeUpdate: Pe,
                            mediaMetadata: pe
                        }) : !Me.oj.includes(xn) || !st ? null : l.createElement(I.A, {
                            attachmentAlt: zn,
                            attachmentBrightness: Dn,
                            attachmentFocalPoint: sn,
                            attachmentHref: ln,
                            attachmentType: xr,
                            breakpoint: d,
                            enableAnimation: Xr,
                            isVideoPlaying: Q && Wt,
                            isVisible: Wt,
                            key: s.ref,
                            layoutPlacement: ht,
                            layoutType: Ct,
                            onVideoClick: ye,
                            pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e"
                        })
                    },
                    Xa = o => {
                        var s, {
                                answers: d,
                                blockChanging: c,
                                blocks: x,
                                canShowSubmitButton: Q,
                                component: ye,
                                currentPath: be,
                                currentRef: Oe,
                                disableNavigation: Pe,
                                enableNavigation: Be,
                                forceSubmitButtonVisible: pe,
                                goToBlock: Qe,
                                goToNextBlock: Je,
                                goToPreviousBlock: ne,
                                inlineSubmit: mt,
                                isBlockChanging: pt,
                                isLivePreview: dt,
                                isPartialSubmitButtonVisible: ct,
                                isSubmitButtonVisible: lt,
                                isVisible: yt,
                                layoutItemsSize: Ct,
                                nextRef: ht,
                                originalBlocks: fr,
                                previousActiveRef: st,
                                previousRef: zt,
                                submitFormUpToMilestone: ln,
                                theme: xr,
                                topOffset: sn
                            } = o,
                            Dn = (0, Un.A)(fr, be),
                            zn = (0, G.WY)(x, Oe),
                            Wt = (0, We.j)(),
                            Xr = (0, $.G)(O.UL),
                            kn = (0, $.G)(tt.r8),
                            xn = (0, G.At)(x),
                            mr = xn === Oe,
                            [_r, Gr] = (0, l.useState)(!1),
                            [hn, Rn] = (0, l.useState)(!1),
                            [Nn, Jn] = (0, l.useState)(!Wt),
                            [Yn, fa] = (0, l.useState)();
                        (0, l.useEffect)(() => {
                            !Nn && !Wt && Jn(!0)
                        }, [Oe, yt]), (0, l.useEffect)(() => {
                            Wt && Jn(!1)
                        }, [Wt]), (0, l.useEffect)(() => {
                            yt && c()
                        }, [yt]);
                        var zr = (0, D.dv)(),
                            qt = (0, G.GH)(x, Oe),
                            Qn = (0, ft.A)(zr, qt == null ? void 0 : qt.layout),
                            Na = (Qn == null ? void 0 : Qn.type) || Ae.$1.STACK,
                            ma = (qt == null || (s = qt.layout) === null || s === void 0 ? void 0 : s.attachment) || (qt == null ? void 0 : qt.attachment),
                            [Xe] = (qt == null ? void 0 : qt.media) || [],
                            Fa = !!(Xe != null && Xe.enabled);
                        Fa && (ma = {
                            href: Xe.href,
                            type: "video"
                        }, Na = at.O);
                        var ai = (0, l.useCallback)(Ot => {
                                var {
                                    next: pr,
                                    previous: Fn
                                } = Ot;
                                pr !== _r && Gr(pr), Fn !== hn && Rn(Fn)
                            }, [_r, hn]),
                            {
                                trackMediaPlay: Qi,
                                trackAutoplayFailed: ii
                            } = (0, Yr.$)(),
                            wi = function() {
                                var pr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                                    Fn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                Qi(Oe, kn, pr, Fn)
                            },
                            Ci = () => {
                                ii(Oe)
                            },
                            Ha = (0, l.useCallback)(() => {
                                var Ot;
                                !Wt && ((Ot = ma) === null || Ot === void 0 ? void 0 : Ot.type) === Ne.r.video && Jn(pr => !pr)
                            }, [Wt, ma, Jn]),
                            Xi = (0, l.useCallback)((Ot, pr) => {
                                if (!pt) {
                                    if ((0, Ue.nx)(Ot) && Ha(), (0, Ue.vY)(Ot) && !(0, Ue.eb)(Ot) && !lt && !ct && Q && pr) {
                                        if (qt.type !== "payment" && !(0, G.F2)("block-".concat(qt.ref), Ot.srcElement)) return;
                                        pe(!0), Ot.preventDefault();
                                        return
                                    }
                                    if ((0, Ue.jd)(Ot)) {
                                        ct ? ln(Ot) : mt(Oe, Ot), Ot.preventDefault();
                                        return
                                    }
                                    if ((0, Ue.Ci)(Ot) && !ct && !lt && !(0, Ue.eb)(Ot) && !pr) {
                                        var Fn = (0, cn.K)(Ot);
                                        Je({
                                            navigationType: Fn
                                        }), Ot.preventDefault()
                                    }
                                }
                            }, [Ha, lt, ct, Q, pe, mt, cn.K, qt, pt]),
                            Ua = {
                                currentRef: Oe,
                                previousRef: zt,
                                previousActiveRef: st,
                                nextRef: ht
                            };
                        (0, l.useEffect)(() => {
                            var Ot = (0, G.GH)(x, st);
                            if (Ot) {
                                var pr;
                                fa((pr = Ot.attachment) === null || pr === void 0 ? void 0 : pr.href)
                            }
                        }, [qt]);
                        var {
                            setCurrentMediaProgress: pa
                        } = (0, It.Z)(), qi = (0, Rr.n)(qt == null ? void 0 : qt.ref);
                        return l.createElement(Ma, null, l.createElement(qr.A.Provider, {
                            value: pt
                        }, l.createElement(Lt.fE, {
                            commonHandleKeydown: Xi,
                            areGlobalListenersDisabled: dt
                        }, l.createElement(Cn, {
                            goToPreviousBlock: ne,
                            goToNextBlock: Je,
                            canSwipeNext: _r,
                            canSwipePrevious: hn,
                            fullHeight: !0
                        }, l.createElement(Ri, {
                            isPulseSurveyActive: Xr
                        }, Xr ? l.createElement(M.A, {
                            isVisible: !0,
                            href: qe.VH
                        }) : null, l.createElement(Qa, {
                            height: Xr ? qe.hQ : "100%"
                        }, l.createElement(Me.Ay, {
                            hasAttachment: !!ma,
                            backgroundColor: xr.colors.background,
                            blocksAttachment: x.map(Ot => {
                                var pr = (0, G.yV)(d, Ot.ref);
                                return Bi(pr, Ot, zr, Ua, yt, Nn, Ha, wi, Ci, pa, Yn, qi, kn, mr)
                            }),
                            breakpoint: zr,
                            isVisible: yt,
                            isMediaEnabled: Fa,
                            layoutType: Na
                        }, x.map((Ot, pr, Fn) => {
                            var ya = Ot.ref,
                                eo = (0, G.yV)(d, ya),
                                to = (0, G.xJ)(Ot, be),
                                ro = Dn[(0, G.WY)(be, ya)],
                                Li = (0, G.WY)(Fn, ya);
                            return l.createElement(Ia, {
                                answer: eo,
                                areBlocksVisible: yt,
                                block: Ot,
                                blockIndex: Li,
                                component: ye,
                                currentBlockIndex: zn,
                                currentRef: Oe,
                                disableNavigation: Pe,
                                enableNavigation: Be,
                                goToBlock: Qe,
                                goToNextBlock: Je,
                                handleCanSwipeChange: ai,
                                handleIsVideoPlayingChange: Ha,
                                isDisplayed: to,
                                isVideoPlaying: Nn,
                                key: ya,
                                layoutItemsSize: Ct,
                                listIndexText: ro,
                                nextRef: ht,
                                previousActiveRef: st,
                                previousRef: zt,
                                topOffset: sn,
                                prefersReducedMotion: Wt || Xr
                            })
                        }))))))))
                    };
                Xa.defaultProps = {
                    blocks: [],
                    blockChanging: me.A,
                    component: vi,
                    goToBlock: me.A,
                    theme: {
                        colors: {
                            background: u.gB
                        }
                    }
                }, Xa.propTypes = {
                    answers: A().array,
                    blockChanging: A().func,
                    blocks: A().array.isRequired,
                    canShowSubmitButton: A().bool,
                    component: A().elementType,
                    currentPath: A().array,
                    currentRef: A().string,
                    disableNavigation: A().func,
                    enableNavigation: A().func,
                    forceSubmitButtonVisible: A().func,
                    goToBlock: A().func,
                    goToNextBlock: A().func,
                    goToPreviousBlock: A().func,
                    handleCanSwipeChange: A().func,
                    inlineSubmit: A().func,
                    isBlockChanging: A().bool,
                    isLivePreview: A().bool,
                    isPartialSubmitButtonVisible: A().bool,
                    isSubmitButtonVisible: A().bool,
                    isVisible: A().bool,
                    layoutItemsSize: A().object,
                    nextRef: A().string,
                    onEndAutoScroll: A().func,
                    originalBlocks: A().array,
                    previousActiveRef: A().string,
                    previousRef: A().string,
                    scrolling: A().shape({
                        anchor: A().string,
                        scrollType: A().string
                    }),
                    submitFormUpToMilestone: A().func,
                    theme: A().object,
                    topOffset: A().number
                };
                const hi = Xa;
                var Mi = 60,
                    jr = 88,
                    Gn = o => {
                        var s = (0, L.DZ)(o),
                            d = (0, u.CI)() && (0, E.Ms)(o),
                            c = !(0, K.dh)(o) && !d && (0, L.m1)(o),
                            x = c ? (0, E.OW)(o) : null,
                            Q = (0, G.Jg)(x),
                            ye = (0, ue.A)(o),
                            be = 0;
                        c && !ye && (be = Q ? jr : Mi);
                        var Oe = (0, L.GH)(o, s),
                            Pe = (0, se.Dd)(o),
                            Be = (0, b.T)(Oe, Pe);
                        return {
                            answers: (0, L.oo)(o),
                            blocks: (0, L.Tr)(o),
                            canShowSubmitButton: (0, E.UI)(o, s),
                            currentPath: (0, L.Ti)(o),
                            currentRef: s,
                            isBlockChanging: (0, E.$G)(o),
                            isLivePreview: (0, E.jq)(o),
                            isSubmitButtonVisible: (0, E.nC)(o, s),
                            isPartialSubmitButtonVisible: Be,
                            nextRef: (0, ee.h)(o, s),
                            previousActiveRef: (0, E.LU)(o),
                            previousRef: (0, te.Gq)(o),
                            scrolling: (0, E.sk)(o),
                            theme: (0, ue.O4)(o),
                            topOffset: be,
                            originalBlocks: (0, L.tT)(o)
                        }
                    },
                    ki = {
                        blockChanging: S.LD,
                        disableNavigation: S.VW,
                        enableNavigation: S.Si,
                        forceSubmitButtonVisible: S.gG,
                        goToBlock: S.P,
                        goToNextBlock: N.i,
                        goToPreviousBlock: S.AR,
                        inlineSubmit: C.gX,
                        submitFormUpToMilestone: W.td,
                        onEndAutoScroll: S.qw
                    };
                const Ni = (0, m.Ng)(Gn, ki)(hi);
                var vr = r(32336),
                    Fi = r(34717),
                    qa = r(10834),
                    Fo = r(18727),
                    Hi = r(1155),
                    lo = f.Ay.div.withConfig({
                        displayName: "HelperHeaderWrapper",
                        componentId: "sc-__sc-h1h2sl-0"
                    })(["position:relative;", " width:100%;font-size:", "px;", " &::before{content:'';position:absolute;inset-block-start:0;inset-inline-start:0;width:100%;display:block;opacity:0;height:", ";transform-origin:top center;", " background-color:", ";", ";", ";", ";", ";", ";", ";}"], o => {
                        var {
                            isMotionReduced: s = !1
                        } = o;
                        return s ? "transition: opacity 0.4s;" : "transition: 0.4s 0.2s;"
                    }, o => o.textSize, o => (0, Hi.mX)("stack", void 0, o.breakpoint), o => o.themeFontSize === vr.NB.small ? "4em" : "3.7em", o => {
                        var {
                            isMotionReduced: s = !1
                        } = o;
                        return s ? "transition: opacity 0.4s;" : "transition: 0.4s 0.2s;"
                    }, o => (0, u.u5)(o.contextBackgroundColor), o => o.groupHeaderVisible && o.questionHeaderVisible && "transform: translateY(0); opacity: 1;", o => !o.groupHeaderVisible && !o.questionHeaderVisible && (o.themeFontSize === vr.NB.small ? "transform: translateY(-4em)" : "transform: translateY(-3.7em)"), o => o.breakpoint !== "sm" && !o.groupHeaderVisible && o.questionHeaderVisible && "transform: translateY(-0.5em); opacity: 1;", o => o.breakpoint !== "sm" && o.groupHeaderVisible && !o.questionHeaderVisible && "transform: translateY(-0.5em); opacity: 1;", o => o.breakpoint === "sm" && o.groupHeaderVisible && !o.questionHeaderVisible && "opacity: 1;", o => o.groupHeaderVisible && !o.questionHeaderVisible && o.groupHeaderImage && "transform: translateY(0); opacity: 1;"),
                    Ho = f.Ay.div.withConfig({
                        displayName: "Sections",
                        componentId: "sc-__sc-h1h2sl-1"
                    })(["width:100%;display:flex;"]),
                    so = f.Ay.div.withConfig({
                        displayName: "HeadersSection",
                        componentId: "sc-__sc-h1h2sl-2"
                    })(["flex:1;min-width:0;", " ", ";", ";", ";", ";", ";@media (max-width:", "px){margin-block-start:2px;}"], o => {
                        var {
                            isMotionReduced: s = !1
                        } = o;
                        return s ? "transition: opacity 0.4s;" : "transition: 0.4s 0.2s;"
                    }, o => o.groupHeaderVisible && o.questionHeaderVisible && "transform: translateY(0.5em); opacity: 1;", o => !o.groupHeaderVisible && !o.questionHeaderVisible && (o.themeFontSize === vr.NB.small ? "transform: translateY(-4em)" : "transform: translateY(-3.7em)"), o => !o.groupHeaderVisible && o.questionHeaderVisible && "transform: translateY(-25%); opacity: 1;", o => o.groupHeaderVisible && !o.questionHeaderVisible && !o.groupHeaderImage && "transform: translateY(1em); opacity: 1;", o => o.groupHeaderVisible && !o.questionHeaderVisible && o.groupHeaderImage && "transform: translateY(30px); opacity: 1;", vr.D9.sm),
                    Uo = f.Ay.div.withConfig({
                        displayName: "GroupHeaderImageSection",
                        componentId: "sc-__sc-h1h2sl-3"
                    })(["max-width:200px;height:88px;position:relative;padding-inline-start:var(--spacing-200);padding-block-start:var(--spacing-100);padding-block-end:var(--spacing-100);display:flex;align-items:center;", ";", ""], o => !o.groupHeaderVisible && "transform: translateY(-90px)", o => {
                        var {
                            isMotionReduced: s = !1
                        } = o;
                        return !s && "transition: 0.4s 0.2s;"
                    }),
                    ei = f.Ay.img.withConfig({
                        displayName: "GroupHeaderImage",
                        componentId: "sc-__sc-h1h2sl-4"
                    })(["max-height:72px;display:block;"]),
                    Oi = o => typeof o == "string" || !Array.isArray(o) ? o : o.map(s => s.type === "br" ? " " : s),
                    Ko = o => {
                        var {
                            groupHeaderContent: s,
                            groupHeaderCounter: d,
                            groupHeaderIcon: c,
                            groupHeaderImage: x,
                            groupHeaderVisible: Q,
                            questionHeaderContent: ye,
                            questionHeaderCounter: be,
                            questionHeaderIcon: Oe,
                            questionHeaderVisible: Pe,
                            contextBackgroundColor: Be,
                            contentColor: pe,
                            counterColor: Qe
                        } = o, Je, ne, mt, pt = (0, D.dv)(), dt = (0, f.DP)(), ct = (0, We.j)(), lt = (Je = (0, Fi.$v)(vr.go.body, pt, dt == null || (ne = dt.fields) === null || ne === void 0 ? void 0 : ne.fontSize)) !== null && Je !== void 0 ? Je : "unset", yt = (dt == null || (mt = dt.fields) === null || mt === void 0 ? void 0 : mt.fontSize) || vr.NB.small;
                        return (0, g.jsx)(lo, {
                            breakpoint: pt,
                            contextBackgroundColor: Be,
                            groupHeaderImage: x,
                            groupHeaderVisible: Q,
                            isMotionReduced: ct,
                            isVisible: Q || Pe,
                            questionHeaderVisible: Pe,
                            textSize: vr.OP[lt].fontSize,
                            themeFontSize: yt,
                            children: (0, g.jsx)(Hi.Ay, {
                                noPadding: !0,
                                children: (0, g.jsxs)(Ho, {
                                    children: [(0, g.jsxs)(so, {
                                        groupHeaderImage: x,
                                        groupHeaderVisible: Q,
                                        questionHeaderVisible: Pe,
                                        themeFontSize: yt,
                                        isMotionReduced: ct,
                                        children: [(0, g.jsx)(p.Ay, {
                                            delay: 200,
                                            duration: 400,
                                            isVisible: Q,
                                            children: (0, g.jsx)(Fo.A, {
                                                bottom: Pe ? .5 : 0,
                                                children: (0, g.jsx)(qa.A, {
                                                    color: pe,
                                                    counterColor: Qe,
                                                    counterContent: d,
                                                    counterIcon: c,
                                                    dataQaTitle: "helper-header-group-title",
                                                    dimmed: Pe,
                                                    ellipsis: !0,
                                                    title: Oi(s),
                                                    update: Q,
                                                    isGroupHeader: !0
                                                })
                                            })
                                        }), (0, g.jsx)(p.Ay, {
                                            delay: 200,
                                            duration: 400,
                                            isVisible: Pe,
                                            children: (0, g.jsx)(qa.A, {
                                                color: pe,
                                                counterColor: Qe,
                                                counterContent: be,
                                                counterIcon: Oe,
                                                dataQaTitle: "helper-header-block-title",
                                                ellipsis: !0,
                                                title: Oi(ye),
                                                update: Pe,
                                                isGroupHeader: !0
                                            })
                                        })]
                                    }), !!x && (0, g.jsx)(p.Ay, {
                                        delay: 200,
                                        duration: 400,
                                        isVisible: Q,
                                        children: (0, g.jsx)(Uo, {
                                            groupHeaderVisible: Q,
                                            isMotionReduced: ct,
                                            children: (0, g.jsx)(ei, {
                                                src: x
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    };
                const uo = Ko;
                var Vo = r(61608),
                    Ui = r(30287),
                    co = function(s) {
                        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500,
                            [c, x] = (0, l.useState)(s),
                            [Q, ye] = (0, l.useState)(!0),
                            be = () => {
                                ye(!1), x(s)
                            };
                        return (0, l.useEffect)(() => {
                            ye(!0);
                            var Oe = setTimeout(be, d);
                            return () => {
                                ye(!1), clearTimeout(Oe)
                            }
                        }, [s, d]), [c, {
                            isPending: Q
                        }]
                    };
                const we = null;
                var Wo = (o, s) => {
                    var d = o.displayName || o.name || "Component",
                        c = x => {
                            var [Q] = co(x, s);
                            return l.createElement(o, Q)
                        };
                    return c.displayName = "withDebounce(".concat(d, ")"), c
                };
                const _o = Wo;
                var Go = ["activeBlockRef", "groupHeaderVisible", "groupTitle", "isBlockChanging", "questionHeaderVisible", "questionTitle"],
                    Ki;

                function Vi() {
                    return Vi = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, Vi.apply(null, arguments)
                }

                function zo(o, s) {
                    if (o == null) return {};
                    var d, c, x = Jo(o, s);
                    if (Object.getOwnPropertySymbols) {
                        var Q = Object.getOwnPropertySymbols(o);
                        for (c = 0; c < Q.length; c++) d = Q[c], s.indexOf(d) === -1 && {}.propertyIsEnumerable.call(o, d) && (x[d] = o[d])
                    }
                    return x
                }

                function Jo(o, s) {
                    if (o == null) return {};
                    var d = {};
                    for (var c in o)
                        if ({}.hasOwnProperty.call(o, c)) {
                            if (s.indexOf(c) !== -1) continue;
                            d[c] = o[c]
                        }
                    return d
                }

                function ut(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var ti = (o, s) => s ? (0, Vo.BL)(o, s.ref) && s.listIndexText ? null : s.titleCounterIcon || "arrow" : null,
                    Wi = (o, s) => {
                        var d = (0, K.dh)(o),
                            c = (0, E.Ms)(o),
                            x = (0, u.CI)() && c,
                            Q = (0, ue.A)(o),
                            ye = (0, E.b6)(o),
                            be = !d && (0, E.Ed)(o) && s.breakpoint !== "sm" && !x,
                            Oe = !d && !Q && (0, L.m1)(o) && !x,
                            Pe = be ? (0, E.Kt)(o) : null,
                            Be = Oe ? (0, E.OW)(o) : null,
                            pe = (0, L.tT)(o),
                            Qe = ti(pe, Be),
                            Je = ti(pe, Pe),
                            ne = (0, J.G7)(o);
                        return {
                            groupHeaderVisible: Oe,
                            groupTitle: (Be == null ? void 0 : Be.title) && ne(Be.title),
                            groupHeaderIcon: Qe,
                            groupHeaderCounter: ye && Be && Be.listIndexText,
                            groupHeaderImage: (0, G.Jg)(Be),
                            questionHeaderVisible: be && !Q,
                            questionTitle: (Pe == null ? void 0 : Pe.title) && ne(Pe.title),
                            questionHeaderIcon: Je,
                            questionHeaderCounter: ye && Pe && Pe.listIndexText,
                            contextBackgroundColor: (0, ue.gK)(o),
                            contentColor: (0, ue.Uo)(o),
                            counterColor: (0, ue.Em)(o),
                            oldLayout: !0,
                            isBlockChanging: (0, E.$G)(o),
                            activeBlockRef: Pe ? Pe.ref : null,
                            groupBlock: Be
                        }
                    },
                    Zo = f.Ay.div.withConfig({
                        displayName: "sticky-header-container__Wrapper",
                        componentId: "sc-ngowdl-0"
                    })(Ki || (Ki = ut([`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 100%;
  `, `;
  `, `;
`])), o => o.isVisible ? "" : "pointer-events: none;", o => o.isSmallViewport ? "" : "z-index: ".concat(vr.mh.level3)),
                    vo = Ui.A ? 0 : 300,
                    fo = _o(uo, vo),
                    oa = o => {
                        var {
                            activeBlockRef: s,
                            groupHeaderVisible: d,
                            groupTitle: c,
                            isBlockChanging: x,
                            questionHeaderVisible: Q,
                            questionTitle: ye
                        } = o, be = zo(o, Go), [Oe, Pe] = (0, l.useState)(!1);
                        (0, l.useEffect)(() => {
                            if (x) Pe(!0);
                            else {
                                var pe = setTimeout(() => Pe(!1), vo);
                                return () => clearTimeout(pe)
                            }
                        }, [x]);
                        var Be = !Oe && !x && (d || Q);
                        return l.createElement(D.J9, null, pe => {
                            var {
                                width: Qe
                            } = pe, Je = Qe < vr.D9.sm;
                            return l.createElement(Zo, {
                                "aria-hidden": !0,
                                "data-qa-stickyheader-visible": Be,
                                "data-qa-stickyheader-blockref": s,
                                isVisible: Be,
                                isSmallViewport: Je
                            }, l.createElement(fo, Vi({
                                questionHeaderVisible: Q && !Oe && !x,
                                groupHeaderVisible: d,
                                questionHeaderContent: ye,
                                groupHeaderContent: c
                            }, be)))
                        })
                    };
                oa.propTypes = {
                    activeBlockRef: A().string,
                    groupHeaderVisible: A().bool,
                    groupTitle: A().oneOfType([A().string, A().array]),
                    isBlockChanging: A().bool,
                    questionHeaderVisible: A().bool,
                    questionTitle: A().oneOfType([A().string, A().array])
                };
                const Ei = (0, D.Wj)((0, m.Ng)(Wi)(oa));
                var va = r(47571),
                    Pi = r(80508),
                    Ti = r(2655),
                    $o = r(74572),
                    _i, Gi, ri;

                function Si(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var Yo = 56,
                    Qo = f.Ay.div.withConfig({
                        displayName: "sticky-footer__CommitButtonWrapper",
                        componentId: "sc-auzuod-0"
                    })(_i || (_i = Si([`
  display: flex;
  align-items: center;
`]))),
                    Xo = f.Ay.div.withConfig({
                        displayName: "sticky-footer__StickyFooterPlaceholder",
                        componentId: "sc-auzuod-1"
                    })(Gi || (Gi = Si([`
  pointer-events: all;
  width: 100%;
  overflow: hidden;
  z-index: `, `;
  opacity: `, `;
  display: `, `;
`])), o => o.isActive ? vr.mh.level3 : vr.mh.level0, o => o.isActive ? "1" : "0", o => o.isActive ? "unset" : "none"),
                    mo = f.Ay.div.withConfig({
                        displayName: "sticky-footer__StickyFooterWrapper",
                        componentId: "sc-auzuod-2"
                    })(ri || (ri = Si([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-start: 1px solid;
  height: `, `px;
  background-color: `, `;
  border-color: `, `;
`])), o => o.$height, o => (0, u.JO)((0, u.jh)(o.contextBackgroundColor, o.$color, .2)), o => (0, u.jh)(o.contextBackgroundColor, o.$color, .3)),
                    ka = o => {
                        var {
                            blockRef: s,
                            show: d,
                            theme: c,
                            t: x,
                            breakpoint: Q,
                            buttonText: ye,
                            showButtonIcon: be,
                            isButtonTypeSubmit: Oe,
                            isLivePreview: Pe,
                            isPaymentBlockAnswered: Be,
                            onCommitAnswer: pe,
                            price: Qe,
                            recenter: Je,
                            submit: ne,
                            submitForm: mt
                        } = o, pt = (0, h.$E)(), dt = Ct => {
                            pe(s, Ct, {
                                source: Ti.c
                            })
                        }, ct = Ct => {
                            Je(xe._N), mt(Ct)
                        };
                        if (!pt) return null;
                        var lt = Q === "sm",
                            yt = be ? Pi.A : null;
                        return l.createElement(Xo, {
                            "aria-hidden": !0,
                            "data-qa": "sticky-footer-placeholder",
                            isActive: d
                        }, l.createElement(p.Ay, {
                            type: "slideUp",
                            isVisible: d
                        }, l.createElement(mo, {
                            $height: Yo,
                            contextBackgroundColor: c.colors.background,
                            $color: c.colors.secondary,
                            "data-qa": "sticky-footer",
                            "data-qa-visible": d
                        }, l.createElement(Hi.Ay, {
                            noPadding: !1
                        }, l.createElement(Qo, null, Oe ? l.createElement($o.z, {
                            centered: lt,
                            fullWidth: lt,
                            helperText: "",
                            isComplete: ne.isComplete,
                            isLivePreview: Pe,
                            isPaymentBlockAnswered: Be,
                            isSubmitting: ne.isSubmitting,
                            onClick: ct,
                            price: Qe,
                            size: "medium",
                            t: x,
                            theme: c
                        }) : l.createElement(va.Ay, {
                            fullWidth: lt,
                            onClick: dt,
                            iconSvg: yt,
                            size: "medium",
                            color: c.colors.button,
                            contentColor: c.colors.buttonContent,
                            contextBackgroundColor: c.colors.background,
                            transparent: c.hasTransparentButton,
                            dataQa: "sticky-footer-button"
                        }, x(ye)))))))
                    };
                ka.defaultProps = {
                    t: o => o,
                    recenter: o => o,
                    buttonText: "label.button.ok",
                    showButtonIcon: !0,
                    theme: {
                        colors: {
                            background: u.gB,
                            button: u.gB,
                            secondary: u.gB
                        }
                    },
                    submit: {
                        retry: {},
                        isComplete: !1,
                        isSubmitting: !1
                    }
                }, ka.propTypes = {
                    show: A().bool,
                    theme: A().object,
                    blockRef: A().string,
                    breakpoint: A().string,
                    buttonText: A().string,
                    showButtonIcon: A().bool,
                    recenter: A().func,
                    onCommitAnswer: A().func,
                    price: A().string,
                    isButtonTypeSubmit: A().bool,
                    isLivePreview: A().bool,
                    isPaymentBlockAnswered: A().bool,
                    submit: A().object,
                    submitForm: A().func,
                    t: A().func
                };
                const Vt = (0, D.Wj)((0, Ft.A)(ka));
                var qo = o => {
                        var s = (0, L.DZ)(o),
                            d = (0, E.Nz)(o),
                            c = (0, L.GH)(o, d);
                        if (!c || d !== s) return {
                            show: !1,
                            theme: (0, ue.O4)(o)
                        };
                        var x = (0, u.CI)() && (0, E.Ms)(o),
                            Q = (0, E.oJ)(o, d);
                        return {
                            blockRef: d,
                            buttonText: c.buttonText,
                            isButtonTypeSubmit: Q,
                            isLivePreview: (0, E.jq)(o),
                            isPaymentBlockAnswered: (0, Ke.tG)(o),
                            price: (0, L.VV)(o),
                            show: !(0, K.JD)(o) && !x,
                            showButtonIcon: !(0, L._s)(c),
                            submit: (0, Yt.NX)(o),
                            theme: (0, ue.O4)(o)
                        }
                    },
                    po = {
                        onCommitAnswer: vn.Mw,
                        recenter: S.iZ,
                        submitForm: C.rM
                    };
                const zi = (0, m.Ng)(qo, po)(Vt);
                var el = r(4217),
                    yo = r(86300),
                    Ta;

                function go(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var tl = f.Ay.div.withConfig({
                        displayName: "footer-wrapperstyles__FooterWrapper",
                        componentId: "sc-12dpj1x-0"
                    })(Ta || (Ta = go([`
  position: absolute;
  bottom: 0; /* stylelint-disable-line */
  left: 0; /* stylelint-disable-line */
  right: 0; /* stylelint-disable-line */
  inset-block-end: 0;
  inset-inline: 0;
  z-index: 10;
  opacity: inherit;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  -webkit-backdrop-filter: blur();
`]))),
                    bo = r(91664),
                    rl = r(84117),
                    ho = r(86881),
                    nl = r(57396),
                    Sa = r(20965),
                    al = r(51684),
                    il = o => {
                        var {
                            breakpoint: s,
                            withNavigationArrows: d
                        } = o;
                        return s === "sm" && d ? "space-between" : "flex-end"
                    },
                    ol = o => {
                        var {
                            backgroundColor: s,
                            embedBackgroundOpacity: d
                        } = o;
                        return d < 1 && s ? (0, u.ZY)(s, d) : (0, u.JO)(s)
                    },
                    ll = f.Ay.div.withConfig({
                        displayName: "Root",
                        componentId: "sc-__sc-1ckh2u2-0"
                    })(["background-color:", ";transition:background-color 500ms cubic-bezier(0.23,1,0.32,1);width:100%;display:flex;flex-direction:column;"], ol),
                    Jl = f.Ay.div.withConfig({
                        displayName: "FooterWrapper",
                        componentId: "sc-__sc-1ckh2u2-1"
                    })(["width:100%;display:flex;justify-content:flex-start;flex-direction:row-reverse;font-family:", ";padding:", "px;pointer-events:none;", ";"], vr.dH, o => o.isVisible ? vr.zA * o.paddingSize : 0, o => o.isVisible ? "" : Sa.a),
                    sl = f.Ay.div.withConfig({
                        displayName: "ButtonsWrapper",
                        componentId: "sc-__sc-1ckh2u2-2"
                    })(["display:flex;flex-direction:row;justify-content:", ";width:", ";box-shadow:none;border-radius:4px;user-select:none;line-height:0;background-color:transparent;pointer-events:auto;white-space:nowrap;"], o => il(o), o => o.breakpoint === "sm" ? "100%" : "auto"),
                    ul = f.Ay.div.withConfig({
                        displayName: "ButtonDivider",
                        componentId: "sc-__sc-1ckh2u2-3"
                    })(["background-color:", ";", ";width:1px;"], o => o.transparentButtons ? (0, u.VI)((0, u.ov)(o.contextBackgroundColor)) : (0, u.VI)((0, u.ov)(o.buttonsColor)), o => o.transparentButtons && "margin-inline-start: -1px;"),
                    Oo = f.Ay.nav.withConfig({
                        displayName: "Navigation",
                        componentId: "sc-__sc-1ckh2u2-4"
                    })(["display:flex;flex-direction:row-reverse;border-radius:var(--sampler-comp-radius-footer);", ";", ";background-color:", ";", ""], o => o.isVisible ? "" : Sa.a, o => o.isVisible ? "" : "inset-block-start: -40px", o => o.transparentButtons ? "transparent" : o.buttonsColor, o => o.withMargin && "margin-inline-end: 8px;"),
                    Eo = f.Ay.div.withConfig({
                        displayName: "LeftButtonsWrapper",
                        componentId: "sc-__sc-1ckh2u2-5"
                    })(["display:flex;", ""], o => {
                        var {
                            isFloating: s
                        } = o;
                        return s && (0, f.AH)(["flex-direction:row-reverse;"])
                    }),
                    Po = (0, f.Ay)(va.Ay).withConfig({
                        displayName: "BrandButton",
                        componentId: "sc-__sc-1ckh2u2-6"
                    })(["display:flex;border-radius:var(--sampler-comp-radius-footer);text-decoration:none;padding-block-start:0;padding-block-end:0;padding-inline-start:var(--sampler-comp-padding-footer);padding-inline-end:var(--sampler-comp-padding-footer);overflow:hidden;", " ", " ", ""], o => o.reducePadding && `
    padding-inline-start: `.concat(vr.zA, `px;
    padding-inline-end: `).concat(vr.zA, `px;
  `), o => o.multiline && `
    strong {
      display: block;
    }
  `, o => o.textSize && vr.yM[o.textSize]),
                    To = o => {
                        var {
                            dataQa: s,
                            size: d,
                            children: c
                        } = o;
                        return (0, g.jsx)("span", {
                            "data-qa": "".concat(s, "-brand-button"),
                            children: (0, g.jsx)(ho.Ay, {
                                fontWeight: "regular",
                                htmlTag: "span",
                                responsive: !1,
                                size: d,
                                children: c
                            })
                        })
                    },
                    dl = o => {
                        var {
                            brandButtonHref: s = "",
                            brandButtonText: d = (0, g.jsxs)("span", {
                                children: ["Powered by ", (0, g.jsx)("strong", {
                                    children: "Typeform"
                                })]
                            }),
                            buttonsColor: c,
                            buttonsContentColor: x,
                            contextBackgroundColor: Q = "white",
                            dataQa: ye = "footer",
                            embedBackgroundOpacity: be = 1,
                            nextButtonDisabled: Oe,
                            nextButtonOnClick: Pe = u.lQ,
                            onClickBrandButton: Be = u.lQ,
                            previousButtonDisabled: pe,
                            previousButtonOnClick: Qe = u.lQ,
                            progressBackgroundColor: Je,
                            transparentButtons: ne,
                            visible: mt,
                            withBranding: pt,
                            withNavigationArrows: dt = !0
                        } = o, {
                            t: ct
                        } = (0, nl.fN)(), lt = (0, D.dv)(), yt = (0, D.uc)(), Ct = lt !== "sm" && !(0, u.CI)(), ht = Ct ? "sizeN1" : "sizeN2", fr = yt <= vr.D9.xs, st = () => lt === "sm" ? 1 : 4, zt = mt && (dt || pt), ln = bo.A, xr = "footer_arrow_down", sn = rl.A, Dn = "footer_arrow_up";
                        return (0, g.jsxs)(ll, {
                            backgroundColor: Ct ? void 0 : Je,
                            embedBackgroundOpacity: be,
                            children: [(0, g.jsx)(Jl, {
                                "data-qa": ye,
                                isVisible: zt,
                                paddingSize: st(),
                                children: (0, g.jsxs)(sl, {
                                    breakpoint: lt,
                                    buttonsColor: c,
                                    transparentButtons: ne,
                                    withNavigationArrows: dt,
                                    children: [(0, g.jsx)(Eo, {
                                        isFloating: Ct,
                                        children: (0, g.jsxs)(Oo, {
                                            isVisible: dt,
                                            buttonsColor: c,
                                            transparentButtons: ne,
                                            withMargin: lt !== "sm" && pt,
                                            children: [(0, g.jsx)(va.Ay, {
                                                "aria-label": ct("a11y.navigation.down"),
                                                color: c,
                                                contentColor: x,
                                                contextBackgroundColor: Q,
                                                "data-qa": "".concat(ye, "-navigation-next"),
                                                "data-tracking": xr,
                                                disabled: Oe,
                                                iconButton: !0,
                                                iconSvg: ln,
                                                noShadow: !0,
                                                onClick: Pe,
                                                openBorder: "left",
                                                size: lt === "sm" ? "footerSmall" : "small",
                                                transparent: ne
                                            }), (0, g.jsx)(ul, {
                                                buttonsColor: c,
                                                contextBackgroundColor: Q,
                                                transparentButtons: ne
                                            }), (0, g.jsx)(va.Ay, {
                                                "aria-label": ct("a11y.navigation.up"),
                                                color: c,
                                                contentColor: x,
                                                contextBackgroundColor: Q,
                                                "data-qa": "".concat(ye, "-navigation-previous"),
                                                "data-tracking": Dn,
                                                disabled: pe,
                                                iconButton: !0,
                                                iconSvg: sn,
                                                noShadow: !0,
                                                onClick: Qe,
                                                openBorder: "right",
                                                size: lt === "sm" ? "footerSmall" : "small",
                                                transparent: ne
                                            })]
                                        })
                                    }), pt && (0, g.jsx)(g.Fragment, {
                                        children: (0, g.jsx)(Po, {
                                            color: c,
                                            contentColor: x,
                                            contextBackgroundColor: Q,
                                            forwardedAs: "a",
                                            href: (0, u.HO)(s),
                                            onClick: Be,
                                            noShadow: !0,
                                            openBorder: dt ? "right" : void 0,
                                            reducePadding: fr,
                                            rel: "noopener noreferrer",
                                            size: lt === "sm" ? "footerSmall" : "small",
                                            target: "_blank",
                                            transparent: ne,
                                            textSize: ht,
                                            children: (0, g.jsx)(To, {
                                                dataQa: ye,
                                                size: ht,
                                                children: d
                                            })
                                        })
                                    })]
                                })
                            }), (0, g.jsx)(al.Ay, {})]
                        })
                    };
                const cl = dl;
                var So = r(38067),
                    Ji = r(73028),
                    Zi = r(90728),
                    bn = "typeform-footer",
                    ni = "https://www.typeform.com/explore/",
                    Ao = o => {
                        var {
                            isBlockListVisible: s
                        } = o, {
                            t: d
                        } = (0, B.mR)(), c = (0, $.j)(), x = (0, $.G)(So.dH), Q = (0, $.G)(E.jq), ye = Q ? void 0 : x(ni, bn), be = (0, $.G)(K.JD), Oe = (0, $.G)(ue.sG), Pe = (0, $.G)(ue.FH), Be = (0, $.G)(ue.gK), pe = (0, $.G)(Ji.Mn), Qe = (0, $.G)(Ji.Tw), Je = (0, $.G)(ue.aX), ne = (0, $.G)(K.o7), mt = (0, $.G)(E.Ms), pt = (0, u.CI)() ? !mt : !0, dt = (0, $.G)(E.ve), ct = (0, $.G)(E.Jm), lt = !be && !ct, yt = st => {
                            c((0, N.i)({
                                navigationType: (0, cn.K)(st)
                            }))
                        }, Ct = st => {
                            c((0, S.AR)({
                                navigationType: (0, cn.K)(st)
                            }))
                        }, ht = () => {
                            c((0, y.Pr)(bn))
                        }, fr = {
                            brandButtonHref: ye,
                            brandButtonText: (0, Zi.A)(d("label.branding.poweredby")),
                            buttonsColor: Oe,
                            buttonsContentColor: Pe,
                            contextBackgroundColor: Be,
                            dataQa: "fixed-footer",
                            embedBackgroundOpacity: ne,
                            nextButtonDisabled: !pe,
                            nextButtonOnClick: yt,
                            onClickBrandButton: ht,
                            previousButtonDisabled: !Qe,
                            previousButtonOnClick: Ct,
                            progressBackgroundColor: Be,
                            transparentButtons: Je,
                            visible: pt,
                            withBranding: dt,
                            withNavigationArrows: lt
                        };
                        return l.createElement(cl, fr)
                    },
                    vl = r(34708),
                    jo;

                function fl(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var ml = f.Ay.div.withConfig({
                        displayName: "top-progress__Positioner",
                        componentId: "sc-1gvyvuh-0"
                    })(jo || (jo = fl([`
  position: absolute;
  inset-block-start: 0;
  inset-inline: 0;
  /** This should be rendered on top of the question group header **/
  z-index: `, `;
`])), vr.mh.level3),
                    pl = () => {
                        var o = !(0, $.G)(E.AT),
                            s = (0, $.G)(ue.sG),
                            d = (0, $.G)(ue.gK),
                            c = (0, $.G)(Ke.yD),
                            x = (0, $.G)(L.BH);
                        return o ? l.createElement(ml, null, l.createElement(vl.A, {
                            color: s,
                            backgroundColor: d,
                            isRounded: !1,
                            max: x,
                            min: 0,
                            value: c
                        })) : null
                    };
                const yl = pl;
                var Ai = r(72539),
                    gl = r(64334),
                    wo = r(85557),
                    Co = r(92625),
                    bl = r(77917);

                function $i() {
                    return $i = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, $i.apply(null, arguments)
                }
                var hl = () => {
                    var {
                        t: o
                    } = (0, B.mR)(), s = (0, $.j)(), d = (0, $.G)(So.dH), c = (0, $.G)(E.jq), x = (0, $.G)(K.JD), Q = (0, $.G)(Ji.Tw), ye = (0, $.G)(E.Ms), be = (0, $.G)(E.ve), Oe = (0, $.G)(E.Jm), Pe = (0, $.G)(L.DZ), Be = (0, $.G)(se.Dd), pe = (0, $.G)(Ke.tG), Qe = (0, $.G)(L.VV), Je = (0, $.G)(Yt.NX), ne = (0, $.G)(Xe => (0, L.GH)(Xe, Pe)), mt = (0, $.G)(Xe => (0, wo.gQ)(Xe, ne == null ? void 0 : ne.ref)), pt = (0, $.G)(Xe => (0, L.pe)(Xe, Pe)), dt = pt && (0, L.wc)(pt), ct = (0, $.G)(mn.d), lt = ct && (0, mn.c8)(ne), yt = lt && !dt, Ct = (0, $.G)(Xe => (0, E.oJ)(Xe, Pe)) && !mt && !yt, ht = (0, $.G)(gl.U), fr = (0, $.G)(wo.tW), st = (0, $.G)(Xe => (0, L.pe)(Xe, Pe)), zt = (0, Fe.YK)(st), ln = (0, $.G)(Xe => (0, tt.q4)(Xe, ne == null ? void 0 : ne.ref)), xr = (0, $.G)(Xe => (0, tt.Cw)(Xe, ne == null ? void 0 : ne.ref)), sn = (0, $.G)(Xe => (0, ee.h)(Xe, ne == null ? void 0 : ne.ref)), Dn = (0, $.G)(Xe => sn && (0, bl.am)(Xe, sn)), zn = (0, b.T)(ne, Be) && !Dn && !mt && !yt, Wt = c ? void 0 : d(ni, bn), Xr = (0, u.CI)() ? !ye : !0, kn = !x && !Oe, xn = zn, mr = Ct, _r = !xn && !mr, Gr = xr && ln === !1, hn = Xe => {
                        s((0, S.AR)({
                            navigationType: (0, cn.K)(Xe)
                        }))
                    }, Rn = () => {
                        s((0, y.Pr)(bn))
                    }, Nn = Xe => {
                        var {
                            ref: Fa,
                            itemType: ai
                        } = Xe;
                        s((0, bt.wU)({
                            ref: Fa,
                            itemType: ai
                        }))
                    }, Jn = Xe => {
                        if (Gr) return Nn({
                            ref: ne.ref,
                            itemType: "button"
                        });
                        s((0, W.td)(Xe))
                    }, Yn = Xe => {
                        if (Gr) return Nn({
                            ref: ne.ref,
                            itemType: "button"
                        });
                        (ne == null ? void 0 : ne.type) === F.IY && (0, Co.e)(Xe, s, Pe, zt), s((0, vn.Mw)(Pe, Xe))
                    }, fa = Xe => {
                        if (Gr) return Nn({
                            ref: ne.ref,
                            itemType: "button"
                        });
                        (ne == null ? void 0 : ne.type) === F.IY && (0, Co.e)(Xe, s, Pe, zt), s((0, C.rM)(Xe))
                    }, zr = () => {
                        if (Gr) return o("label.button.reply");
                        if ((ne == null ? void 0 : ne.type) === F.F_ || (ne == null ? void 0 : ne.type) === F.UM || (ne == null ? void 0 : ne.type) === F.zF) {
                            var Xe;
                            return (ne == null || (Xe = ne.properties) === null || Xe === void 0 ? void 0 : Xe.buttonText) || o("label.buttonNoAnswer.default")
                        }
                        return o("label.button.ok")
                    }, qt = () => Gr ? o("label.button.reply") : pe ? o("label.button.submitAndPay", {
                        price: Qe
                    }) : o("label.button.submit"), Qn = {};
                    if (xn) {
                        var Na = zr();
                        Qn = {
                            onClickButtonHandler: Jn,
                            label: Na,
                            mainButtonDataQa: "partial-submit-button",
                            useSpinner: ht || fr,
                            disabled: ht || fr
                        }
                    }
                    if (mr && (Qn = {
                            onClickButtonHandler: fa,
                            label: qt(),
                            disabled: !c && (Je.isSubmitting || Je.isComplete) || ht || fr,
                            useSpinner: !c && Je.isSubmitting || ht || fr,
                            mainButtonDataQa: "submit-button deep-purple-submit-button"
                        }), _r) {
                        var ma = zr();
                        Qn = {
                            onClickButtonHandler: Yn,
                            label: ma,
                            mainButtonDataQa: "ok-button-visible deep-purple-ok-button-visible",
                            useSpinner: ht || fr,
                            disabled: ht || fr
                        }
                    }
                    return l.createElement(Ai.A, $i({
                        useBackButton: kn && Q,
                        isButtonTypeSubmit: Ct,
                        onClickBackButtonHandler: hn,
                        useBranding: Xr && be,
                        onClickBrandingHandler: Rn,
                        typeformBrandingUrl: Wt
                    }, Qn))
                };
                const Ol = hl;
                var Lo;

                function Yi() {
                    return Yi = Object.assign ? Object.assign.bind() : function(o) {
                        for (var s = 1; s < arguments.length; s++) {
                            var d = arguments[s];
                            for (var c in d)({}).hasOwnProperty.call(d, c) && (o[c] = d[c])
                        }
                        return o
                    }, Yi.apply(null, arguments)
                }

                function El(o, s) {
                    return s || (s = o.slice(0)), Object.freeze(Object.defineProperties(o, {
                        raw: {
                            value: Object.freeze(s)
                        }
                    }))
                }
                var Io = f.Ay.div.withConfig({
                        displayName: "form__Root",
                        componentId: "sc-19pinwh-0"
                    })(Lo || (Lo = El([`
  height: 100%;
  overflow: hidden;
`]))),
                    ji = "stkv-form-root",
                    Pl = o => {
                        var s = o.target;
                        s.id === ji && (s.scrollTop = 0)
                    },
                    Tl = o => {
                        var {
                            layoutItemsSize: s = {}
                        } = o, d = (0, $.G)(L.qr), c = (0, $.G)(L.Tt), x = (0, $.G)(K.DN), Q = (0, h.$E)(), ye = !d && !c, [be, Oe] = (0, l.useState)((0, Mr.un)()), Pe = (0, $.G)(O.UL), {
                            t: Be
                        } = (0, B.mR)(), pe = (0, D.dv)(), Qe = (0, $.G)(ue.O4), Je = (0, $.j)(), ne = pe === "sm", mt = Q && ne, pt = ne, dt = pt || mt, ct = (0, $.G)(yt => (0, el.getCustomRedirectUrl)(yt, yo.Xz)), lt = (0, l.useCallback)(() => {
                            Je((0, y.Pr)(yo.Xz))
                        }, [Je, y.Pr]);
                        return (0, l.useEffect)(() => {
                            if (ye && (0, Mr.un)()) {
                                var yt = setTimeout(() => Oe(!1), ge.PH + 200);
                                return () => clearTimeout(yt)
                            }
                            return me.A
                        }, [ye]), x && d ? null : l.createElement(Io, {
                            "aria-hidden": c || d,
                            id: ji,
                            onScroll: Pl
                        }, l.createElement(Ei, null), ye && l.createElement(p.Ay, {
                            type: "fade",
                            duration: ge.kz
                        }, l.createElement(yl, null)), !c && l.createElement(Ni, {
                            component: vi,
                            isVisible: ye,
                            layoutItemsSize: s
                        }), ye && l.createElement(tl, null, ne ? l.createElement(Ol, null) : l.createElement(p.Ay, {
                            isVisible: ye,
                            type: "fadeIn",
                            duration: Ui.A ? 0 : 500,
                            delay: Ui.A ? 0 : 300
                        }, l.createElement(l.Fragment, null, l.createElement("div", {
                            "aria-hidden": be
                        }, !c && l.createElement(zi, null)), l.createElement(Ao, {
                            isBlockListVisible: ye
                        })))), l.createElement(l.Fragment, null, Pe && !ne && l.createElement(w.A, Yi({
                            breakpoint: pe,
                            buttonColor: Qe.colors.button,
                            buttonContentColor: Qe.colors.buttonContent,
                            buttonText: (0, Zi.A)(Be("label.branding.create")),
                            color: Qe.colors.primary,
                            contextBackgroundColor: Qe.colors.background,
                            isTopPositioned: dt,
                            motto: (0, Zi.A)(Be("label.branding.motto")),
                            onBtnClick: lt,
                            layoutHasBrandLogo: !1
                        }, ct ? {
                            url: ct
                        } : {}))))
                    };
                const Sl = Tl
            },
            26616: (ve, R, r) => {
                r.d(R, {
                    Z: () => p
                });
                var l = r(53930),
                    f = r(46618),
                    p = () => {
                        var h = (0, l.wA)(),
                            w = B => {
                                var {
                                    currentTime: D,
                                    videoDuration: O
                                } = B, y = D ? parseInt((100 * D / O).toFixed(0)) : 0;
                                h((0, f.gc)({
                                    mediaProgress: y
                                }))
                            };
                        return {
                            setCurrentMediaProgress: w
                        }
                    }
            },
            26706: (ve, R, r) => {
                r.d(R, {
                    Cw: () => O,
                    dJ: () => y,
                    q4: () => D,
                    r8: () => m
                });
                var l = r(12036),
                    f = r(56663),
                    p = r(49180),
                    h = r(32705),
                    w = u => {
                        var S;
                        return (S = u.media) === null || S === void 0 ? void 0 : S.ui
                    },
                    B = (u, S) => {
                        var N = w(u);
                        return N && N[S]
                    },
                    D = (u, S) => {
                        var [N] = (0, l.Us)(u, S) || [], C = B(u, S);
                        return !!(N != null && N.enabled) && !!(C != null && C.collapsed)
                    },
                    O = (u, S) => {
                        var [N] = (0, l.Us)(u, S) || [];
                        return !!(N != null && N.enabled)
                    },
                    y = (u, S) => u.media.tracking.mediaProgress,
                    m = u => (0, h.n)(u, f.Ad) === p.Gt
            },
            26919: (ve, R, r) => {
                r.d(R, {
                    O: () => f
                });
                var l = r(48004),
                    f = l.$1.SPLIT
            },
            28022: (ve, R, r) => {
                r.d(R, {
                    O: () => f
                });
                var l = r(90801);

                function f(p, h) {
                    return {
                        type: l.oV,
                        payload: {
                            blockRef: p,
                            show: h
                        }
                    }
                }
            },
            30893: (ve, R, r) => {
                r.d(R, {
                    A: () => l
                });
                class l extends Error {
                    constructor(p, h, w) {
                        super("".concat(p, ": ").concat(h)), this.code = p, this.description = h, this.details = w
                    }
                }
            },
            31645: (ve, R, r) => {
                r.d(R, {
                    A: () => D
                });
                var l = r(7897),
                    f = r(17771),
                    p = r(46651);

                function h(O, y) {
                    var m = Object.keys(O);
                    if (Object.getOwnPropertySymbols) {
                        var u = Object.getOwnPropertySymbols(O);
                        y && (u = u.filter(function(S) {
                            return Object.getOwnPropertyDescriptor(O, S).enumerable
                        })), m.push.apply(m, u)
                    }
                    return m
                }

                function w(O) {
                    for (var y = 1; y < arguments.length; y++) {
                        var m = arguments[y] != null ? arguments[y] : {};
                        y % 2 ? h(Object(m), !0).forEach(function(u) {
                            (0, l.A)(O, u, m[u])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(m)) : h(Object(m)).forEach(function(u) {
                            Object.defineProperty(O, u, Object.getOwnPropertyDescriptor(m, u))
                        })
                    }
                    return O
                }
                var B = O => (0, p.jsx)("svg", w(w({
                    width: "12",
                    height: "16",
                    viewBox: "0 0 12 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, O), {}, {
                    children: (0, p.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.036 4.464a3.464 3.464 0 1 1 6.928 0v1.06h.286c.966 0 1.75.783 1.75 1.75v5.69a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 0 12.964v-5.69c0-.967.784-1.75 1.75-1.75h.286v-1.06Zm-.286 2.56a.25.25 0 0 0-.25.25v5.69c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-5.69a.25.25 0 0 0-.25-.25h-7.5Zm5.714-1.5H3.536v-1.06a1.964 1.964 0 0 1 3.928 0v1.06ZM5.5 8.238a.75.75 0 0 1 .75.75v2.262a.75.75 0 0 1-1.5 0V8.988a.75.75 0 0 1 .75-.75Z"
                    })
                }));
                const D = B
            },
            34708: (ve, R, r) => {
                r.d(R, {
                    A: () => D
                });
                var l = r(17771),
                    f = r(44222),
                    p = r(25461),
                    h = r(46651),
                    w = O => {
                        var {
                            min: y = 0,
                            max: m = 1,
                            value: u = 0,
                            color: S = "#000",
                            backgroundColor: N = "#FFF",
                            isRounded: C = !0,
                            isLoading: W = !1
                        } = O, L = (0, f.j)(), te = (u - y) / (m - y), K = te * 100;
                        return (0, h.jsx)(p.XL, {
                            color: S,
                            isRounded: C,
                            isLoading: W,
                            "data-qa": "progress-track",
                            role: "progressbar",
                            "aria-valuenow": W ? void 0 : K,
                            "aria-label": "Form progress",
                            children: (0, h.jsx)(p.Z1, {
                                color: S,
                                backgroundColor: N,
                                "data-qa": "progress-fill",
                                isRounded: C,
                                progress: te,
                                isLoading: W,
                                isPrefersReducedMotion: L
                            })
                        })
                    };
                const D = w
            },
            36141: (ve, R, r) => {
                r.d(R, {
                    K1: () => p,
                    T1: () => f
                });
                var l = "block",
                    f = "recenter",
                    p = "choice"
            },
            37255: (ve, R, r) => {
                r.d(R, {
                    A: () => f
                });
                var l = r(17771);

                function f(p, h) {
                    var w = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        var B;
                        return w.current ? B = p() : w.current = !0, B
                    }, h)
                }
            },
            40803: (ve, R, r) => {
                r.d(R, {
                    W: () => p
                });
                var l = r(55645),
                    f = h => h.intents,
                    p = (h, w) => {
                        var B, D, O = f(h);
                        if (!(O != null && O.length)) return null;
                        var y = (0, l.GH)(h, w);
                        return y && (B = (D = O.find(m => m.id === y.id)) === null || D === void 0 ? void 0 : D.intent) !== null && B !== void 0 ? B : null
                    }
            },
            40894: (ve, R, r) => {
                r.d(R, {
                    w: () => w
                });
                var l = r(57036),
                    f = r(94948),
                    p = r(13332),
                    h = r(63410);

                function* w() {
                    yield(0, l.jP)(h.mk, function*(B) {
                        var {
                            payload: {
                                ref: D
                            }
                        } = B, O = yield(0, l.Lt)(p.eM), y = (0, f.Go)(O), m = [...y, D];
                        (0, f.Mt)(O, m)
                    }), yield(0, l.jP)(h.R5, function*(B) {
                        var {
                            payload: {
                                ref: D
                            }
                        } = B, O = yield(0, l.Lt)(p.eM);
                        (0, f.Dv)(O, D)
                    })
                }
            },
            41562: (ve, R, r) => {
                r.d(R, {
                    A: () => mn
                });
                var l = r(17771),
                    f = r(57773),
                    p = r(94567),
                    h = r(10053),
                    w = r(18727),
                    B = r(40854),
                    D = r(1155),
                    O = r(62789),
                    y = r(20965),
                    m = r(57396),
                    u = r(48004),
                    S = r(32336),
                    N = r(11949),
                    C = r(93320),
                    W = r(8075),
                    L = r(46651),
                    te = p.Ay.div.withConfig({
                        displayName: "AttachmentWrapper",
                        componentId: "sc-__sc-1ks3v0d-0"
                    })(["box-sizing:border-box;width:100%;height:100%;display:flex;flex-direction:column;line-height:0;"]),
                    K = 500,
                    E = 112,
                    ee = 80,
                    ue = 720,
                    G = 360,
                    se = 640,
                    b = (0, p.AH)(["height:", ";"], F => {
                        var {
                            hasFixedSize: ce,
                            isCollapsed: de,
                            isLivePreview: ge
                        } = F;
                        return ce ? "".concat(ue, "px") : de ? ge ? "".concat(se * .4, "px") : "40dvh" : ge ? "".concat(se - ee, "px") : "calc(100dvh - ".concat(E, "px)")
                    }),
                    Ee = p.Ay.div.withConfig({
                        displayName: "SplitMobileMediaWrapper",
                        componentId: "sc-__sc-1ks3v0d-1"
                    })(["overflow:hidden;&,mux-player{", " transition:", ";", " ", "}"], b, F => {
                        var {
                            enableAnimation: ce
                        } = F;
                        return "height ".concat(ce ? K : 0, "ms ease-in-out")
                    }, F => {
                        var {
                            isLivePreview: ce,
                            hasFixedSize: de
                        } = F;
                        return !ce && !de && (0, p.AH)(["@media (min-width:", "px){height:80dvh;}"], S.D9.sm)
                    }, F => {
                        var {
                            isCollapsed: ce,
                            hasFixedSize: de,
                            isMobile: ge,
                            isLivePreview: _e
                        } = F;
                        return !ce && ge && (0, p.AH)(["margin-block-end:", ";", ""], de ? "calc(100dvh - ".concat(ue, "px)") : "".concat(E, "px"), !_e && (0, p.AH)(["@media (min-width:", "px){margin-block-end:0;}"], S.D9.sm))
                    }),
                    A = p.Ay.div.withConfig({
                        displayName: "SplitMobileAttachmentWrapper",
                        componentId: "sc-__sc-1ks3v0d-2"
                    })(["height:", "px;"], F => F.height),
                    Me = p.Ay.div.withConfig({
                        displayName: "Root",
                        componentId: "sc-__sc-1ks3v0d-3"
                    })(["", ";"], F => !F.hasApplication && (0, D.xP)(F.breakpoint, F.layoutType) === "top" ? "flex: 1" : ""),
                    M = p.Ay.div.withConfig({
                        displayName: "StyledDivWrapper",
                        componentId: "sc-__sc-1ks3v0d-4"
                    })(["", ""], F => {
                        var {
                            hasApplication: ce,
                            isMobile: de
                        } = F;
                        return ce && de && (0, p.AH)(["display:flex;flex-direction:column;"])
                    }),
                    I = p.Ay.div.withConfig({
                        displayName: "ContentWrapper",
                        componentId: "sc-__sc-1ks3v0d-5"
                    })(["", ";text-align:", ";"], F => F.hasHorizontalPadding && (0, D.mX)(F.layoutType, F.layoutPlacement, F.breakpoint), F => (0, N.b)(F.textAlign)),
                    P = p.Ay.fieldset.withConfig({
                        displayName: "Fieldset",
                        componentId: "sc-__sc-1ks3v0d-6"
                    })(["border:0;padding-block-start:0.01em;padding-block-end:0;padding-inline-start:0;padding-inline-end:0;margin:0;min-width:0;"]);
                P.displayName = "fieldset";
                var g = F => {
                    var {
                        hasApplication: ce,
                        attachmentAlt: de,
                        attachmentBrightness: ge = u.wZ,
                        attachmentControls: _e,
                        attachmentFocalPoint: jt = u.VG,
                        attachmentHref: xe,
                        attachmentScale: Ut = 1,
                        attachmentType: xt,
                        blockContentRef: lr,
                        breakpoint: Gt,
                        children: Ye,
                        counterContent: Yt,
                        description: Le,
                        editingMediaContext: sr,
                        enableAnimation: Kr = !1,
                        hasAttachmentFixedHeight: Or,
                        hasBranding: Rt = !1,
                        hasHorizontalPadding: tn = !0,
                        hasNavigationArrows: pn = !1,
                        hasProgress: Er = !1,
                        isActive: ur = !1,
                        isFieldset: rn,
                        isTitleHidden: Qt = !1,
                        isVideoPlaying: nr = !1,
                        layoutPlacement: dr = u.GE.RIGHT,
                        layoutType: je = u.$1.STACK,
                        shouldMuteAutoplay: Qr = !1,
                        onVideoClick: yn,
                        onPlay: Ft,
                        onAutoplayFailed: Vr,
                        onMediaEnded: Ge,
                        onMediaTimeUpdate: Pr,
                        outerHeight: Xt,
                        pexelsApiKey: Tr,
                        removeTopBottonMargins: Ln,
                        required: Bt = !1,
                        rootRef: ar,
                        setEditorCanvasElement: Wr,
                        textAlign: nn = u.Fm.LEFT,
                        title: Pt,
                        media: He,
                        mediaPlaceholder: Sr,
                        isLivePreview: gn = !1
                    } = F, {
                        t: Kt
                    } = (0, m.fN)(), ra = (0, l.useRef)(null), Ce = (0, l.useRef)(null), ot = (0, u.Tw)(je, Gt), cr = ot === u.nk.STACK.DESKTOP || ot === u.nk.STACK.MOBILE, Wn = Rt || pn || Er, na = Gt === "sm", da = (0, D.uv)(Gt, je), ha = na ? E / 8 : 8, An = da + ha, aa = (0, D.Ji)(Gt, je, ot, Xt, Or), Oa = rn ? P : M, kr = Kr ? 500 : 0, Zn = Kr ? 200 : 0, Va = Kr ? 300 : 0, wa = Kr ? 300 : 0, an = "fade";
                    return (0, L.jsxs)(Me, {
                        breakpoint: Gt,
                        layoutType: je,
                        hasApplication: ce,
                        ref: ar,
                        children: [ot === u.nk.SPLIT.MOBILE && !ce && (0, L.jsx)(h.Ay, {
                            isVisible: ur,
                            duration: kr,
                            delay: Va,
                            type: an,
                            children: He != null && He.enabled ? (0, L.jsx)(Ee, {
                                "data-qa": "split-mobile-media-wrapper",
                                enableAnimation: Kr,
                                isCollapsed: He == null ? void 0 : He.isCollapsed,
                                isLivePreview: gn,
                                hasFixedSize: Or,
                                isMobile: na,
                                children: (0, L.jsx)(C.A, {
                                    href: He == null ? void 0 : He.href,
                                    isCollapsed: He.isCollapsed,
                                    isLogoVisible: He.isLogoVisible,
                                    isVisible: ur,
                                    logoSize: He == null ? void 0 : He.logoSize,
                                    mediaPlaceholder: Sr,
                                    metadata: He == null ? void 0 : He.metadata,
                                    onEnded: Ge,
                                    onPlay: Ft,
                                    onAutoplayFailed: Vr,
                                    onTimeUpdate: Pr,
                                    properties: He == null ? void 0 : He.properties,
                                    title: He.title,
                                    forceShowTitle: He.forceShowTitle,
                                    infoMessageOverlay: He == null ? void 0 : He.infoMessageOverlay
                                })
                            }) : (0, L.jsx)(L.Fragment, {
                                children: !!xe && (0, L.jsx)(A, {
                                    height: aa,
                                    children: (0, L.jsx)(W.O, {
                                        brightness: ge,
                                        cover: !0,
                                        children: (0, L.jsx)(O.Ay, {
                                            alt: de,
                                            cover: !0,
                                            focalPoint: jt,
                                            href: xe,
                                            isVisible: ur,
                                            pexelsApiKey: Tr,
                                            type: xt,
                                            isVideoPlaying: nr,
                                            onVideoClick: yn,
                                            controls: _e,
                                            editingMediaContext: sr,
                                            setEditorCanvasElement: Wr
                                        })
                                    })
                                })
                            })
                        }), (0, L.jsx)(I, {
                            breakpoint: Gt,
                            hasHorizontalPadding: tn,
                            layoutPlacement: dr,
                            layoutType: je,
                            textAlign: nn,
                            ref: lr,
                            children: (0, L.jsx)(D.Ay, {
                                noPadding: !0,
                                children: (0, L.jsx)(w.A, {
                                    bottom: Ln ? 0 : An,
                                    top: Ln ? 0 : da,
                                    children: (0, L.jsxs)(Oa, {
                                        isMobile: na,
                                        hasApplication: ce,
                                        "data-qa": "question-wrapper",
                                        children: [rn && (0, L.jsxs)(y.A, {
                                            as: "legend",
                                            children: [Yt && "".concat(Kt("a11y.label.question", {
                                                number: Yt
                                            }), " "), Bt && (0, L.jsxs)("span", {
                                                children: [" ", Kt("a11y.label.required")]
                                            })]
                                        }), ot === u.nk.FLOAT.MOBILE && (0, L.jsx)(h.Ay, {
                                            isVisible: ur,
                                            duration: kr,
                                            delay: Zn,
                                            type: an,
                                            children: (0, L.jsx)(w.A, {
                                                bottom: (0, D.Tm)(Gt, je),
                                                children: (0, L.jsx)(W.O, {
                                                    brightness: ge,
                                                    cover: !0,
                                                    children: (0, L.jsx)(O.Ay, {
                                                        alt: de,
                                                        focalPoint: jt,
                                                        href: xe,
                                                        isVisible: ur,
                                                        maxHeight: aa,
                                                        pexelsApiKey: Tr,
                                                        type: xt,
                                                        isVideoPlaying: nr,
                                                        onVideoClick: yn,
                                                        controls: _e,
                                                        editingMediaContext: sr,
                                                        setEditorCanvasElement: Wr
                                                    })
                                                })
                                            })
                                        }), (0, L.jsxs)("div", {
                                            ref: Ce,
                                            children: [!rn && Yt && (0, L.jsxs)(y.A, {
                                                children: [Kt("a11y.label.question", {
                                                    number: Yt
                                                }), Qt && Bt && (0, L.jsx)("span", {
                                                    children: Kt("a11y.label.required")
                                                })]
                                            }), Pt, Le && (0, L.jsx)(B.A, {
                                                top: S.LG.topBlockDescription,
                                                hasFormFooter: Wn,
                                                children: Le
                                            })]
                                        }), cr && (0, L.jsx)(h.Ay, {
                                            isVisible: ur,
                                            duration: kr,
                                            delay: wa,
                                            type: an,
                                            children: (0, L.jsx)(te, {
                                                children: (0, L.jsx)(w.A, {
                                                    top: (0, D.XA)(Gt, je),
                                                    children: (0, L.jsx)(W.O, {
                                                        brightness: ge,
                                                        cover: !0,
                                                        children: (0, L.jsx)(O.Ay, {
                                                            alt: de,
                                                            isCentered: nn === u.Fm.CENTER,
                                                            focalPoint: jt,
                                                            href: xe,
                                                            isVisible: ur,
                                                            maxHeight: aa,
                                                            pexelsApiKey: Tr,
                                                            scale: Ut,
                                                            type: xt,
                                                            isVideoPlaying: nr,
                                                            onVideoClick: yn,
                                                            controls: _e,
                                                            editingMediaContext: sr,
                                                            setEditorCanvasElement: Wr
                                                        })
                                                    })
                                                })
                                            })
                                        }), (0, L.jsx)(B.A, {
                                            ref: ra,
                                            hasApplication: ce,
                                            top: S.LG.topBlockContent,
                                            children: Ye
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                };
                const ae = g;
                var H = [u.nk.SPLIT.DESKTOP, u.nk.FLOAT.DESKTOP, u.nk.WALLPAPER.DESKTOP, u.nk.WALLPAPER.MOBILE],
                    Y = (0, p.i7)(["20%{transform:translateX(3px);}80%{transform:translateX(-3px);}"]),
                    re = (0, p.AH)(["animation:", " 0.15s cubic-bezier(0.36,0.07,0.19,0.97) both infinite;@media (prefers-reduced-motion:reduce){animation:none;}"], Y),
                    oe = p.Ay.section.withConfig({
                        displayName: "LayoutWrapper",
                        componentId: "sc-__sc-i7ahj-0"
                    })(["height:100%;display:flex;[dir='rtl'] &&{justify-content:flex-end;}", ""], F => F.isLeftAligned && `
    justify-content: flex-end;

    [dir='rtl'] && {
      justify-content: flex-start;
    }
  `),
                    fe = p.Ay.div.withConfig({
                        displayName: "Section",
                        componentId: "sc-__sc-i7ahj-1"
                    })(["position:relative;height:100%;width:", ";", ";display:flex;justify-content:", ";flex-direction:column;", ";visibility:visible;", ";"], F => F.isHalfWidth ? "50%" : "100%", F => F.isShaking && re, F => F.isCentered ? "center" : "flex-start", F => F.hasTransition ? "transition: all 600ms ease;" : "", F => F.isVisible ? "" : "opacity: 0; visibility: hidden;"),
                    Ae = l.forwardRef((F, ce) => {
                        var {
                            breakpoint: de,
                            children: ge,
                            dataQa: _e,
                            hasTransition: jt = !1,
                            id: xe,
                            isActive: Ut = !1,
                            isShaking: xt,
                            isVisible: lr = !1,
                            layoutType: Gt = u.$1.STACK,
                            layoutPlacement: Ye = u.GE.RIGHT,
                            onMouseEnterHandler: Yt,
                            onMouseLeaveHandler: Le
                        } = F, sr = (0, u.Tw)(Gt, de), Kr = sr === u.nk.FLOAT.DESKTOP || sr === u.nk.SPLIT.DESKTOP, Or = sr !== u.nk.SPLIT.MOBILE;
                        return (0, L.jsx)(oe, {
                            isLeftAligned: Ye === u.GE.LEFT,
                            onMouseEnter: Yt,
                            onMouseLeave: Le,
                            children: (0, L.jsx)(fe, {
                                "data-qa": _e,
                                "data-qa-block": !0,
                                "data-qa-blockref": xe,
                                hasTransition: jt,
                                id: xe ? "block-".concat(xe) : void 0,
                                isCentered: Or,
                                isHalfWidth: Kr,
                                isShaking: xt,
                                isVisible: lr,
                                ref: ce,
                                "data-qa-focused": Ut,
                                "aria-hidden": !Ut,
                                children: ge
                            })
                        })
                    });
                const Ne = Ae;
                var We = r(83926),
                    qe = r(36141),
                    Ie = r(10834),
                    Mt = r(34717),
                    $ = r(61113),
                    tt = r(61608),
                    bt = r(87559),
                    et = r(73795),
                    vt = r(84404),
                    Ht = r(91488),
                    kt = r(90606),
                    nt = r(16380),
                    _t = r(2009),
                    wr = r(13332),
                    Nr = r(55645);

                function Zt() {
                    for (var F = arguments.length, ce = new Array(F), de = 0; de < F; de++) ce[de] = arguments[de];
                    return ge => {
                        ce.forEach(_e => {
                            if (_e) {
                                if (typeof _e == "function") {
                                    _e(ge);
                                    return
                                }
                                _e.current = ge
                            }
                        })
                    }
                }
                var Z = r(89571),
                    ir = null,
                    ze = null,
                    Zr = {
                        areUploadsPublic: !0,
                        autosaveProgress: !0,
                        enabled: !0,
                        hideNavigation: !1,
                        isPublic: !0,
                        isTrial: !1,
                        language: "en",
                        modifiable: !1,
                        proSubdomainEnabled: !0,
                        showCookieConsent: !1,
                        showNumberOfSubmissions: !1,
                        showProgressBar: !0,
                        showQuestionNumber: !0,
                        showTimeToComplete: !0,
                        showTypeformBranding: !0,
                        freeFormNavigation: !1,
                        captcha: !1,
                        spamIdentification: !1,
                        enrichmentInRenderer: {
                            toggle: !1,
                            active: !1
                        }
                    },
                    Fr = {
                        colors: {
                            primary: "#000000",
                            secondary: "#0445AF",
                            button: "#0445AF",
                            buttonContent: "#FFFFFF",
                            background: "#FFFFFF"
                        },
                        hasTransparentButton: !1,
                        font: "System font",
                        fields: {
                            alignment: "left",
                            fontSize: "medium"
                        },
                        screens: {
                            alignment: "center",
                            fontSize: "medium"
                        },
                        roundedCorners: "small"
                    },
                    Et = {
                        id: "tys-id",
                        ref: "default_tys",
                        title: `Thanks for completing this typeform
Now *create your own* \u2014 it's free, easy, & beautiful`,
                        type: "thankyou_screen",
                        showButton: !0,
                        buttonLabel: "Create a Typeform"
                    },
                    Hn = {
                        id: "defaultId",
                        title: "form title",
                        fields: [],
                        theme: Fr,
                        settings: Zr,
                        hidden: {},
                        thankYouScreens: [Et]
                    },
                    un = {
                        id: "ws-id",
                        ref: "ws-ref",
                        title: "Welcome",
                        showButton: !0,
                        buttonLabel: "Start"
                    },
                    En = r(67721),
                    $r = r(12036),
                    dn = r(66115),
                    Bn = (F, ce) => {
                        if (typeof ResizeObserver == "function") {
                            var de = new ResizeObserver(xe => {
                                var [Ut] = xe, {
                                    height: xt
                                } = Ut.contentRect;
                                ce(xt)
                            });
                            return de.observe(F), () => {
                                de.disconnect()
                            }
                        } else {
                            var ge = -1,
                                _e, jt = () => {
                                    var {
                                        clientHeight: xe
                                    } = F;
                                    xe !== ge && (ge = xe, ce(xe)), _e = setTimeout(jt, 250)
                                };
                            return jt(), () => {
                                clearTimeout(_e)
                            }
                        }
                    },
                    Cn = r(26919),
                    qr = r(26706),
                    Lt = r(76214),
                    Un = r(46618),
                    cn = r(26616),
                    en = r(30287),
                    Cr = r(44222),
                    V = r(46768),
                    le = r(90281),
                    me = r(53930),
                    Ue = r(49180),
                    ft = r(56663),
                    at = r(37730),
                    It = r(50180),
                    Rr = F => (0, It.Y6)(F, ft._x) || (0, at.hH)(F, ft._x) === Ue.Gt,
                    Yr = "(Video question)",
                    Pn = r(6556),
                    Kn = r(22953),
                    vn = r(50008),
                    ta = r(82850),
                    Vn = r(97149),
                    ba = r(34195),
                    Tn = r(85731),
                    sa = r(68014),
                    ua = r(42045),
                    U = F => F.portal || ua.ue,
                    ie = (0, sa.Mz)(U, F => F.isActive),
                    he = () => (0, Lt.A)() && (0, En.c)() && window.location.search.includes("typeform-embed-no-scrollbars=true"),
                    Se, St, At;

                function Nt(F, ce) {
                    return ce || (ce = F.slice(0)), Object.freeze(Object.defineProperties(F, {
                        raw: {
                            value: Object.freeze(ce)
                        }
                    }))
                }
                var rr = 200,
                    Lr = "easeOutCubic",
                    or = 30,
                    fn = 30,
                    Br = 32,
                    Hr = p.Ay.div.withConfig({
                        displayName: "block-scroller__Root",
                        componentId: "sc-1nqcj0x-0"
                    })(Se || (Se = Nt([`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: `, `;

  `, `

  &:focus {
    outline: none;
  }
`])), () => he() ? "hidden" : "auto", F => {
                        var {
                            isScrollbarHidden: ce
                        } = F;
                        return ce && (0, p.AH)(St || (St = Nt([`
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    `])))
                    }),
                    j = p.Ay.div.withConfig({
                        displayName: "block-scroller__Positioner",
                        componentId: "sc-1nqcj0x-1"
                    })(At || (At = Nt([`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`]))),
                    _ = F => F ? F.scrollTop + fn >= F.scrollHeight - F.clientHeight : !1,
                    z = F => F ? F.scrollTop - or <= 0 : !1,
                    J = F => {
                        var ce, {
                                autoFocusableRef: de,
                                blockContentRef: ge,
                                blockRef: _e,
                                canAutoFocus: jt,
                                canScrollAndSwipe: xe = !0,
                                children: Ut,
                                counterContent: xt,
                                delayFocus: lr,
                                descriptionText: Gt,
                                endAutoScroll: Ye = Z.A,
                                focusOnContainer: Yt,
                                isActive: Le,
                                isFieldset: sr,
                                isScrollNearTop: Kr,
                                isScrollTop: Or,
                                layoutType: Rt,
                                onChangeCanSwipe: tn = Z.A,
                                onKeyDown: pn = Z.A,
                                onRequireStickyHeader: Er,
                                onScroll: ur = Z.A,
                                required: rn,
                                scrolling: Qt,
                                t: nr,
                                titleText: dr,
                                uniqueId: je
                            } = F,
                            Qr = (0, f.dv)(),
                            yn = (0, nt.j)(),
                            [Ft, Vr] = (0, l.useState)(void 0),
                            Ge = (0, l.useRef)(null),
                            Pr = (0, l.useRef)(null),
                            Xt = (0, nt.G)(ta.TE),
                            Tr = (0, l.useContext)(Vn.A),
                            Ln = (0, ba.w9)(_e),
                            Bt = (0, nt.G)(Ce => (0, wr.jq)(Ce)),
                            ar = (0, nt.G)(ie),
                            Wr = (0, nt.G)(Ce => (0, $r.E7)(Ce, _e)),
                            nn = (0, nt.G)(Ce => (0, $r.m_)(Ce, _e)),
                            Pt = (0, nt.G)(Ce => (0, qr.q4)(Ce, _e)),
                            [He] = (0, nt.G)(Ce => (0, $r.Us)(Ce, _e)) || [],
                            Sr = () => {
                                if (!(!Ge.current || !xe)) {
                                    Le && (tn({
                                        next: _(Ge.current),
                                        previous: z(Ge.current)
                                    }), ur(), He != null && He.enabled && !Pt && yn((0, Un.wU)({
                                        ref: _e,
                                        itemType: "scroll"
                                    })));
                                    var {
                                        scrollTop: Ce
                                    } = Ge.current;
                                    Ln(Ce), Ce > Br && Kr ? Er(!0) : Ce <= Br && !Kr && Er(!1)
                                }
                            },
                            gn = () => {
                                z(Ge.current) || !Ge.current || (Ge.current.scrollTop = 0)
                            };
                        (0, l.useEffect)(() => {
                            Or && gn()
                        }, [Or]), (0, l.useEffect)(() => {
                            !Le && !Tr && gn()
                        }, [Tr, Le]), (0, l.useEffect)(() => {
                            var Ce = Pt ? K : 0;
                            setTimeout(() => {
                                Ge.current && Le && xe && tn({
                                    next: _(Ge.current),
                                    previous: z(Ge.current)
                                })
                            }, Ce)
                        }, [Le, Pt]), (0, l.useEffect)(() => {
                            if (Le && Qt && Qt.scrollType === qe.T1 && Qt.anchor === We._N && Ge.current) {
                                var Ce = en.A ? 0 : rr,
                                    ot;
                                if ((0, vt.mO)(Wr)) {
                                    var cr, Wn = (cr = document.activeElement) === null || cr === void 0 ? void 0 : cr.getBoundingClientRect();
                                    ot = Wn == null ? void 0 : Wn.top
                                } else ot = Ge.current.scrollHeight - Ge.current.clientHeight;
                                (0, vn.Ay)(Ge.current, "scrollTop", ot, Ce, Lr, Ye)
                            }
                        }, [Qt]);
                        var Kt = ge == null || (ce = ge.current) === null || ce === void 0 ? void 0 : ce.clientHeight,
                            ra = Qr === "sm";
                        return (0, l.useEffect)(() => {
                            var Ce, ot;
                            if (Vr(void 0), !(!Ge.current || !Kt || !Le || Xt && nn || !jt || ar)) {
                                var cr = (0, bt.CI)() && Qr === "sm",
                                    Wn = Rt ? (0, D.uv)(Qr, Rt) * S.zA : 0,
                                    na = Kt + Wn > Ge.current.clientHeight,
                                    da = (de == null || (Ce = de.current) === null || Ce === void 0 || (Ce = Ce.getBoundingClientRect()) === null || Ce === void 0 ? void 0 : Ce.top) && (de == null || (ot = de.current) === null || ot === void 0 || (ot = ot.getBoundingClientRect()) === null || ot === void 0 ? void 0 : ot.top) > Ge.current.clientHeight,
                                    ha = de != null && de.current ? da : !!na,
                                    An = !(0, Tn.kA)(Ge.current) && (Yt || cr || ha),
                                    aa = !Tr && !(0, Tn.kA)(Ge.current);
                                if (!(!An && !aa)) {
                                    if (An) {
                                        Vr(0), (0, Tn.pW)(Ge.current, lr, (0, Lt.A)());
                                        return
                                    }
                                    if (de != null && de.current) {
                                        Vr(0), (0, Tn.pW)(de == null ? void 0 : de.current, lr);
                                        return
                                    }(0, Tn.Ay)(Ge.current, lr)
                                }
                            }
                        }, [de, jt, Kt, lr, Le, Tr, Xt, ar, Ft]), l.createElement(Hr, {
                            key: "block-scroller",
                            "data-qa": "block-scroller",
                            isScrollbarHidden: Bt && ra,
                            onScroll: Sr,
                            onKeyDown: pn,
                            ref: Ge,
                            tabIndex: Ft,
                            "aria-labelledby": sr ? (0, et._7)(je) : void 0
                        }, sr && l.createElement(y.A, {
                            id: (0, et._7)(je)
                        }, l.createElement("p", null, xt && nr("a11y.label.question", {
                            number: xt
                        }), dr, rn && nr("a11y.label.required")), l.createElement("p", null, Gt)), l.createElement(j, {
                            ref: Pr
                        }, Ut))
                    };
                const Fe = J;
                var Ke = r(28365),
                    it = r.n(Ke),
                    $t = F => {
                        var {
                            announceTitle: ce,
                            children: de,
                            htmlFor: ge,
                            htmlTag: _e,
                            id: jt,
                            required: xe,
                            t: Ut
                        } = F, xt = ["div", "span", "legend"].includes(_e), lr = xe && l.createElement(y.A, null, Ut("a11y.label.required"));
                        return l.createElement(Mt.Ay, {
                            "aria-live": ce ? "polite" : "off",
                            type: S.go.blockTitle,
                            htmlTag: _e === "legend" ? "span" : _e,
                            htmlFor: _e === "label" ? ge : null,
                            "data-qa": "block-title deep-purple-block-title",
                            role: xt ? "heading" : null,
                            "aria-level": xt ? 2 : null,
                            id: jt
                        }, de, lr)
                    };
                $t.defaultProps = {
                    htmlTag: "span",
                    required: !1,
                    ariaLive: "off"
                }, $t.propTypes = {
                    children: it().any,
                    htmlFor: it().string,
                    htmlTag: it().string,
                    id: it().string,
                    announceTitle: it().bool,
                    required: it().bool,
                    t: it().func.isRequired
                };
                const Dt = $t;

                function rt() {
                    return rt = Object.assign ? Object.assign.bind() : function(F) {
                        for (var ce = 1; ce < arguments.length; ce++) {
                            var de = arguments[ce];
                            for (var ge in de)({}).hasOwnProperty.call(de, ge) && (F[ge] = de[ge])
                        }
                        return F
                    }, rt.apply(null, arguments)
                }

                function hr(F, ce) {
                    var de = Object.keys(F);
                    if (Object.getOwnPropertySymbols) {
                        var ge = Object.getOwnPropertySymbols(F);
                        ce && (ge = ge.filter(function(_e) {
                            return Object.getOwnPropertyDescriptor(F, _e).enumerable
                        })), de.push.apply(de, ge)
                    }
                    return de
                }

                function Ve(F) {
                    for (var ce = 1; ce < arguments.length; ce++) {
                        var de = arguments[ce] != null ? arguments[ce] : {};
                        ce % 2 ? hr(Object(de), !0).forEach(function(ge) {
                            Ir(F, ge, de[ge])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(de)) : hr(Object(de)).forEach(function(ge) {
                            Object.defineProperty(F, ge, Object.getOwnPropertyDescriptor(de, ge))
                        })
                    }
                    return F
                }

                function Ir(F, ce, de) {
                    return (ce = Mr(ce)) in F ? Object.defineProperty(F, ce, {
                        value: de,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : F[ce] = de, F
                }

                function Mr(F) {
                    var ce = Ur(F, "string");
                    return typeof ce == "symbol" ? ce : ce + ""
                }

                function Ur(F, ce) {
                    if (typeof F != "object" || !F) return F;
                    var de = F[Symbol.toPrimitive];
                    if (de !== void 0) {
                        var ge = de.call(F, ce || "default");
                        if (typeof ge != "object") return ge;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (ce === "string" ? String : Number)(F)
                }
                var Sn = l.forwardRef((F, ce) => {
                    var de, ge, _e, jt, xe, Ut, xt, lr, Gt, Ye, Yt, Le, {
                            application: sr,
                            attachment: Kr,
                            isBlockListVisible: Or,
                            blockRef: Rt,
                            blockHeightChanging: tn = Z.A,
                            children: pn,
                            description: Er,
                            endAutoScroll: ur,
                            hasBranding: rn,
                            hasNavigationArrows: Qt,
                            hasProgress: nr,
                            isActive: dr,
                            isScrollNearTop: je,
                            isScrollTop: Qr,
                            isShaking: yn,
                            canAutoFocus: Ft,
                            delayFocus: Vr = 0,
                            layout: Ge,
                            listIndexText: Pr,
                            onChangeCanSwipe: Xt,
                            onKeyDown: Tr,
                            onRequireStickyHeader: Ln = Z.A,
                            onScroll: Bt = Z.A,
                            scrolling: ar,
                            suspended: Wr,
                            t: nn = jr => jr,
                            theme: Pt = Fr,
                            titleLabelId: He,
                            titleFor: Sr,
                            titleTag: gn,
                            titleText: Kt,
                            titleCounterIcon: ra = Ie.c.ARROW,
                            type: Ce,
                            uniqueId: ot,
                            validations: cr = {},
                            isVideoPlaying: Wn,
                            onVideoClick: na,
                            focusOnContainer: da = !1,
                            autoFocusableRef: ha,
                            blockHeight: An
                        } = F,
                        aa = (0, nt.j)(),
                        Oa = (0, l.useRef)(null),
                        kr = (0, l.useRef)(null),
                        Zn = (0, l.useRef)(null),
                        [Va, wa] = (0, l.useState)(0),
                        an = (0, f.dv)(),
                        si = (0, nt.G)(_t.A),
                        Wa = (0, nt.G)(Nr.tT),
                        i = (0, nt.G)(wr.b6),
                        $n = (0, nt.G)(Ht.UL),
                        In = (0, dn.A)(an, Ge),
                        ui = (0, Cr.j)(),
                        di = (0, V.n)(Rt),
                        {
                            trackMediaPlay: ci,
                            trackAutoplayFailed: Ca
                        } = (0, Pn.$)(),
                        _a = (0, me.d4)(Rr),
                        Mn = (0, nt.G)(qr.r8),
                        {
                            shouldRenderBrandWithPulseSurvey: La
                        } = (0, kt.V)({
                            brandLogo: Pt == null ? void 0 : Pt.logo
                        }),
                        vi = (0, l.useMemo)(() => an === "sm", [an]),
                        fi = gn === "legend",
                        _n = In == null ? void 0 : In.type,
                        wt = In == null ? void 0 : In.placement,
                        De = {
                            scrolling: ar,
                            canAutoFocus: Ft,
                            canScrollAndSwipe: !window.location.search.match(/typeform-embed-disable-scroll=true/i)
                        },
                        Ga = (0, nt.G)(jr => (0, wr.jq)(jr)),
                        [on] = (0, nt.G)(jr => (0, $r.Us)(jr, Rt)) || [],
                        za = (0, nt.G)(jr => (0, qr.q4)(jr, Rt)),
                        Dr = () => aa((0, Un.wU)({
                            ref: Rt,
                            itemType: "triggered_by_tf_system"
                        })),
                        jn = Ve(Ve({}, on), {}, {
                            metadata: di,
                            isCollapsed: za || (0, Lt.A)(),
                            properties: Ve(Ve({}, on == null ? void 0 : on.properties), {}, {
                                isAutoplay: Mn
                            })
                        }),
                        Ar = (de = Ge == null ? void 0 : Ge.attachment) !== null && de !== void 0 ? de : Kr,
                        Ea = !!(on != null && on.enabled);
                    Ea && (De = {
                        scrolling: {
                            scrollType: qe.T1,
                            anchor: We.wv
                        },
                        canAutoFocus: za,
                        canScrollAndSwipe: De.canScrollAndSwipe
                    }, _n = Cn.O, wt = u.GE.LEFT), sr && (_n = u.$1.SPLIT, wt = u.GE.RIGHT, vi && (_n = u.$1.WALLPAPER));
                    var mi = (ge = Ar == null || (_e = Ar.properties) === null || _e === void 0 ? void 0 : _e.focalPoint) !== null && ge !== void 0 ? ge : u.VG,
                        Ja = (jt = Ar == null || (xe = Ar.properties) === null || xe === void 0 ? void 0 : xe.brightness) !== null && jt !== void 0 ? jt : u.wZ,
                        wn = (0, u.sY)((Ut = Pt.fields) === null || Ut === void 0 ? void 0 : Ut.alignment, _n),
                        Za = (0, l.useMemo)(() => si && !(_n === u.$1.SPLIT && an === "sm"), [_n, si, an]),
                        pi = (0, nt.G)(jr => (0, $r.E7)(jr, Rt)),
                        $a = Ea && pi !== le.UM,
                        yi = nn("block.common.title"),
                        Ia = !1;
                    if (Ea && _a) {
                        var Da, xa;
                        $a = !1;
                        var ca = typeof Kt == "string" ? Kt : (Da = Kt[0]) === null || Da === void 0 ? void 0 : Da.props.children,
                            gi = !(ca != null && ca.length),
                            bi = ca === Yr;
                        Ia = gi || bi, jn = Ve(Ve({}, jn), {}, {
                            isLogoVisible: La,
                            logoSize: Pt == null || (xa = Pt.logo) === null || xa === void 0 ? void 0 : xa.size,
                            title: ca
                        })
                    }(0, l.useEffect)(() => {
                        if (kr.current) {
                            wa(kr.current.clientHeight);
                            var jr = () => {
                                kr.current && wa(kr.current.clientHeight)
                            };
                            return window.addEventListener("resize", jr, !0), () => window.removeEventListener("resize", jr, !0)
                        }
                    }, [(xt = kr.current) === null || xt === void 0 ? void 0 : xt.clientHeight]);
                    var Ra = "header-counter-".concat(Rt),
                        ia = Or && (dr || !(0, bt.CI)()),
                        Ya = (0, tt.BL)(Wa, Rt) && !!Pr,
                        Ba = Ya ? "".concat(Pr, ".") : Pr,
                        Pa = {
                            counterId: Ra,
                            counterIcon: Ya ? null : ra,
                            counterColor: Pt == null || (lr = Pt.colors) === null || lr === void 0 ? void 0 : lr.secondary,
                            counterContent: Ba
                        },
                        Ma = (0, l.useMemo)(() => {
                            var jr, Gn;
                            return (jr = Pt.logo) !== null && jr !== void 0 && jr.size ? (0, $.I)((Gn = Pt.logo) === null || Gn === void 0 ? void 0 : Gn.size, an) : 0
                        }, [(Gt = Pt.logo) === null || Gt === void 0 ? void 0 : Gt.size, an]),
                        Qa = Za ? 8 * Ma : 0;
                    (0, l.useEffect)(() => {
                        if (dr && Zn !== null && Zn !== void 0 && Zn.current) return Bn(Zn.current, jr => {
                            var Gn = An !== void 0 && An > 0;
                            tn(Gn ? An : jr + Qa)
                        })
                    }, [dr, Zn, An, sr, an]);
                    var Ri = (0, Kn.At)(Wa),
                        Bi = Rt === Ri,
                        Xa = function() {
                            var Gn, ki = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                                Ni = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                            ci(Rt, (Gn = jn.properties) === null || Gn === void 0 ? void 0 : Gn.isAutoplay, ki, Ni)
                        },
                        hi = () => {
                            Ca(Rt)
                        },
                        {
                            setCurrentMediaProgress: Mi
                        } = (0, cn.Z)();
                    return l.createElement(Ne, {
                        layoutType: _n,
                        breakpoint: an,
                        dataQa: Wr ? "loading-block-skeleton" : "blocktype-".concat(Ce, " deep-purple-blocktype-").concat(Ce),
                        hasTransition: !0,
                        id: Rt,
                        isActive: dr,
                        isShaking: dr && yn,
                        isVisible: ia,
                        ref: Zt(ce, kr),
                        layoutPlacement: wt
                    }, l.createElement(Fe, rt({
                        blockRef: Rt,
                        endAutoScroll: ur,
                        isActive: dr,
                        onChangeCanSwipe: Xt,
                        onRequireStickyHeader: Ln,
                        onScroll: Bt,
                        onKeyDown: Tr,
                        isFieldset: fi,
                        isScrollNearTop: je,
                        isScrollTop: Qr,
                        focusOnContainer: da,
                        required: cr == null ? void 0 : cr.required,
                        t: nn,
                        titleText: Kt,
                        descriptionText: Er,
                        uniqueId: ot
                    }, i ? {
                        counterContent: Ba
                    } : {}, {
                        blockContentRef: Oa,
                        delayFocus: Vr,
                        autoFocusableRef: ha,
                        layoutType: _n
                    }, De), Za && l.createElement(w.A, {
                        top: Ma
                    }), l.createElement(ae, rt({
                        hasApplication: !!sr,
                        attachmentBrightness: Ja,
                        attachmentFocalPoint: mi,
                        attachmentHref: Ar == null ? void 0 : Ar.href,
                        attachmentType: Ar == null ? void 0 : Ar.type,
                        attachmentScale: Ar == null ? void 0 : Ar.scale,
                        attachmentAlt: Ar == null || (Ye = Ar.properties) === null || Ye === void 0 ? void 0 : Ye.description,
                        isLivePreview: Ga,
                        media: jn,
                        onAutoplayFailed: hi,
                        shouldMuteAutoplay: Bi,
                        hasAttachmentFixedHeight: (0, En.c)(),
                        breakpoint: an,
                        description: !Er || Ea ? void 0 : l.createElement(Mt.Ay, {
                            id: (0, et.un)(ot),
                            align: wn,
                            type: S.go.blockDescription,
                            color: Pt == null || (Yt = Pt.colors) === null || Yt === void 0 ? void 0 : Yt.primary,
                            htmlTag: "p",
                            dataQa: "block-description",
                            breakText: !0
                        }, Er),
                        enableAnimation: !en.A && !ui,
                        hasBranding: rn,
                        hasNavigationArrows: Qt,
                        hasProgress: nr,
                        isActive: dr,
                        isFieldset: fi,
                        layoutType: _n,
                        pexelsApiKey: "563492ad6f9170000100000155494c9d9440421cbf19eb5eaac4615e",
                        outerHeight: Va,
                        removeTopBottonMargins: $n,
                        required: cr == null ? void 0 : cr.required,
                        textAlign: (0, vt.mO)(pi) ? u.Fm.LEFT : wn,
                        title: l.createElement(Ie.A, rt({
                            title: l.createElement(Dt, {
                                required: cr == null ? void 0 : cr.required,
                                t: nn,
                                id: He,
                                htmlFor: Sr,
                                htmlTag: gn
                            }, $a ? yi : Kt),
                            color: Pt == null || (Le = Pt.colors) === null || Le === void 0 ? void 0 : Le.primary,
                            required: !Ia && (cr == null ? void 0 : cr.required),
                            textAlign: wn,
                            isTitleHidden: Ia,
                            dimmedTitleOnly: $a
                        }, i ? Pa : {})),
                        isVideoPlaying: Wn,
                        onVideoClick: na,
                        onPlay: Xa,
                        onMediaEnded: Dr
                    }, i && Ba ? {
                        counterContent: Ba
                    } : {}, {
                        onMediaTimeUpdate: Mi,
                        blockContentRef: Oa,
                        rootRef: Zn,
                        isTitleHidden: Ia
                    }), pn), Za && l.createElement(w.A, {
                        top: Ma
                    })))
                });
                Sn.displayName = "BlockWrapper";
                const mn = Sn
            },
            41653: (ve, R, r) => {
                r.r(R), r.d(R, {
                    default: () => es
                });
                var l = r(71311),
                    f = r(90112),
                    p = r(62436),
                    h = r(49350),
                    w = r(88892),
                    B = r(24407),
                    D = r(94424),
                    O = r.n(D),
                    y = r(48004),
                    m = r(39541);
                const u = JSON.parse(`{"id":"Z1K27wqb","type":"quiz","title":"Respondent Pulse Survey (!don't delete!)","workspace":{"href":"https://api.typeform.com/workspaces/6ck7ew"},"theme":{"href":"https://api.typeform.com/themes/qHWOQ7"},"settings":{"language":"en","progress_bar":"proportion","meta":{"allow_indexing":false},"hide_navigation":true,"is_public":true,"is_trial":false,"show_progress_bar":false,"show_typeform_branding":true,"are_uploads_public":false,"show_time_to_complete":true,"show_number_of_submissions":false,"show_cookie_consent":false,"show_question_number":false,"pro_subdomain_enabled":false,"capabilities":{"e2e_encryption":{"enabled":false,"modifiable":false}}},"thankyou_screens":[{"id":"DefaultTyScreen","ref":"default_tys","title":"Thanks for completing this typeform\\nNow *create your own* \u2014 it's free, easy, & beautiful","type":"thankyou_screen","properties":{"show_button":true,"share_icons":false,"button_mode":"default_redirect","button_text":"Create a *typeform*"},"attachment":{"type":"image","href":"https://public-assets.typeform.com/public/admin/2dpnUBBkz2VN.gif"}}],"fields":[{"id":"YlGEHyET1K0B","title":"*Thanks for your response!*\\nHow was your experience filling out this form?","ref":"tf-pulse-survey-question-1","properties":{"start_at_one":true,"steps":5,"labels":{"left":"Very unsatisfying","center":"Neutral","right":"Very satisfying"}},"validations":{"required":true},"type":"opinion_scale"},{"id":"fX9fygruvCbA","title":"Could you tell us why you chose {{field:tf-pulse-survey-question-1}}?","ref":"tf-pulse-survey-question-2","properties":{},"validations":{"required":false},"type":"long_text"}],"hidden":["parent_form"],"_links":{"display":"https://tfproductops.typeform.com/to/Z1K27wqb"}}`);
                var S = ["googleTagManager", "googleAnalytics", "facebookPixel", "proSubdomainEnabled"];

                function N(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function C(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? N(Object(n), !0).forEach(function(a) {
                            W(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function W(e, t, n) {
                    return (t = L(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function L(e) {
                    var t = te(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function te(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function K(e, t) {
                    if (e == null) return {};
                    var n, a, v = E(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var T = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < T.length; a++) n = T[a], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (v[n] = e[n])
                    }
                    return v
                }

                function E(e, t) {
                    if (e == null) return {};
                    var n = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (t.indexOf(a) !== -1) continue;
                            n[a] = e[a]
                        }
                    return n
                }
                var ee = () => O()(u),
                    ue = e => {
                        var t = ee(),
                            n = e.form.settings,
                            {
                                googleTagManager: a,
                                googleAnalytics: v,
                                facebookPixel: T,
                                proSubdomainEnabled: k
                            } = n,
                            X = K(n, S),
                            q = C(C({}, e), {}, {
                                analytics: {},
                                form: C(C({}, e.form), {}, {
                                    settings: C(C({}, X), {}, {
                                        capabilities: {
                                            e2e_encryption: {
                                                enabled: !1,
                                                modifiable: !1
                                            }
                                        },
                                        showProgressBar: !1,
                                        showQuestionNumber: !1,
                                        hideNavigation: !0,
                                        showTypeformBranding: !1
                                    }),
                                    fields: t.fields,
                                    logic: [],
                                    variables: {},
                                    id: t.id,
                                    currentRef: null,
                                    currentScreenRef: null,
                                    hidden: {
                                        parent_form: e.form.id
                                    },
                                    theme: C(C({}, e.form.theme), {}, {
                                        screens: C(C({}, e.form.theme.screens), {}, {
                                            alignment: y.Fm.CENTER
                                        }),
                                        fields: C(C({}, e.form.theme.fields), {}, {
                                            alignment: y.Fm.CENTER
                                        })
                                    })
                                }),
                                answers: {
                                    answersList: (0, m.A)(t.fields)
                                },
                                pipingAnswers: [],
                                submit: C(C({}, e.submit), {}, {
                                    isSubmitting: !1,
                                    isSuccess: !1,
                                    isComplete: !1,
                                    errorMessage: null,
                                    retry: {
                                        showMessage: !1,
                                        timeout: 1,
                                        count: 0
                                    }
                                })
                            });
                        return q
                    },
                    G = r(54954),
                    se = r(3502),
                    b = r(90801),
                    Ee = r(88165),
                    A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                function Me(e) {
                    for (var t = "", n = 0; n < e; n++) t += A.charAt(Math.floor((0, Ee.A)() * A.length));
                    return t
                }
                var M = r(34954),
                    I = r(60677),
                    P = r(68535);

                function g(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function ae(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? g(Object(n), !0).forEach(function(a) {
                            H(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function H(e, t, n) {
                    return (t = Y(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Y(e) {
                    var t = re(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function re(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var oe = (e, t) => {
                        var {
                            translation: n,
                            targetLanguage: a
                        } = t.payload;
                        if (!n) return e;
                        var v = e;
                        try {
                            var T = (0, P.dQ)(e.form, n, a);
                            v = ae(ae({}, e), {}, {
                                form: T
                            })
                        } catch (k) {
                            console.error("There was an error when mergin translations into the state: ", k)
                        }
                        return v
                    },
                    fe = r(22958),
                    Ae = {
                        partialSubmissionsSent: !1
                    },
                    Ne = (0, l.Z0)({
                        name: "partialSubmissionsSent",
                        initialState: Ae,
                        extraReducers: {
                            [b.pu]: e => {
                                e.partialSubmissionsSent = !0
                            }
                        },
                        reducers: {}
                    });
                const We = Ne.reducer;
                var qe = r(46618),
                    Ie = r(63410),
                    Mt = r(62512),
                    $ = r(54648),
                    tt = r(44263),
                    bt = r(43042);

                function et(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function vt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? et(Object(n), !0).forEach(function(a) {
                            Ht(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Ht(e, t, n) {
                    return (t = kt(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function kt(e) {
                    var t = nt(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function nt(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function _t() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        {
                            type: t
                        } = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t) {
                        case b.HH:
                            return vt(vt({}, e), {}, {
                                isFormMarkAsClosed: !0
                            });
                        case b.Oc:
                            return vt(vt({}, e), {}, {
                                isFormMarkAsClosed: !0,
                                isCloseScreenVisible: !0
                            });
                        default:
                            return e
                    }
                }
                const wr = _t;
                var Nr = r(9257),
                    Zt = r(60324),
                    Z = r(55645);

                function ir(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function ze(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? ir(Object(n), !0).forEach(function(a) {
                            Zr(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ir(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Zr(e, t, n) {
                    return (t = Fr(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Fr(e) {
                    var t = Et(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Et(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var Hn = {
                        answersList: []
                    },
                    un = (e, t) => {
                        var {
                            payload: {
                                validationErrors: n,
                                blockRef: a,
                                shouldAnswerBeFormatted: v
                            }
                        } = t, T = (0, Zt.fO)(e.answersList, a), k = e.answersList[T];
                        return ze(ze({}, e), {}, {
                            answersList: (0, Nr.A)(T, ze(ze({}, k), {}, {
                                validationErrors: n != null ? n : [],
                                isValid: !n || n.length === 0,
                                shouldAnswerBeFormatted: v
                            }), e.answersList)
                        })
                    },
                    En = (e, t) => {
                        var {
                            payload: {
                                answer: n
                            }
                        } = t, a = (0, Z.rM)(n), v = (0, Zt.fO)(e.answersList, a), T = e.answersList[v];
                        return ze(ze({}, e), {}, {
                            answersList: (0, Nr.A)(v, ze(ze({}, n), {}, {
                                isCommitted: !1,
                                hasBeenInteractedWith: !0,
                                hasBeenSuccessfullyCommitted: T == null ? void 0 : T.hasBeenSuccessfullyCommitted
                            }), e.answersList)
                        })
                    },
                    $r = (e, t) => {
                        var {
                            payload: {
                                ref: n
                            }
                        } = t, a = e.answersList.find(k => (0, Z.rM)(k) === n), v = [...e.answersList], T = v.indexOf(a);
                        return v[T] = ze(ze({}, a), {}, {
                            isCommitted: !0,
                            hasBeenSuccessfullyCommitted: !0
                        }), ze(ze({}, e), {}, {
                            answersList: v
                        })
                    },
                    dn = (e, t) => {
                        var {
                            payload: {
                                ref: n
                            }
                        } = t;
                        return ze(ze({}, e), {}, {
                            answersList: e.answersList.map(a => (0, Z.rM)(a) !== n ? a : ze(ze({}, a), {}, {
                                isCommitted: !0
                            }))
                        })
                    },
                    Bn = e => ze(ze({}, e), {}, {
                        answersList: e.answersList.map(t => ze(ze({}, t), {}, {
                            isCommitted: !0
                        }))
                    }),
                    Cn = (e, t) => {
                        var {
                            payload: {
                                milestoneRef: n
                            }
                        } = t, a = !1;
                        return ze(ze({}, e), {}, {
                            answersList: e.answersList.map(v => {
                                var T = ze(ze({}, v), {}, {
                                    isCommitted: !a
                                });
                                return v.blockRef === n && (a = !0), T
                            })
                        })
                    },
                    qr = (e, t, n) => {
                        var a = (0, m.A)(t);
                        if (n) return a;
                        var v = e.filter(k => !!t.find(X => {
                                var {
                                    ref: q
                                } = X;
                                return q === k.blockRef
                            })),
                            T = [...v, ...a.filter(k => !e.find(X => (0, Z.rM)(X) === (0, Z.rM)(k)))];
                        return T
                    };

                function Lt() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hn,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.U6:
                            return un(e, t);
                        case b.OK:
                            return En(e, t);
                        case b.rw:
                            return $r(e, t);
                        case b.Gt:
                            return dn(e, t);
                        case b.ic:
                            return Bn(e);
                        case b.xO:
                            return Cn(e, t);
                        default:
                            return e
                    }
                }
                var Un = function() {
                    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case b.Jb:
                            return !0;
                        case b.YZ:
                            return !1;
                        default:
                            return t
                    }
                };
                const cn = Un;

                function en() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.gk:
                            return !0;
                        case b.R2:
                            return !1;
                        default:
                            return e
                    }
                }

                function Cr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function V(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Cr(Object(n), !0).forEach(function(a) {
                            le(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function le(e, t, n) {
                    return (t = me(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function me(e) {
                    var t = Ue(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Ue(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var ft = {
                        backgroundOpacity: 1,
                        hideHeaders: !1,
                        minimalFooter: !1,
                        mode: null
                    },
                    at = (e, t) => Object.keys(e).every(n => Object.keys(t).includes(n));

                function It() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return at(ft, e) || (e = V(V({}, ft), e)), e
                }
                const Rr = It;

                function Yr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Pn(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Yr(Object(n), !0).forEach(function(a) {
                            Kn(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Kn(e, t, n) {
                    return (t = vn(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function vn(e) {
                    var t = ta(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function ta(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var Vn = (e, t) => {
                        var {
                            payload: {
                                ref: n
                            }
                        } = t;
                        return Pn(Pn({}, e), {}, {
                            currentRef: n,
                            previousRef: e.currentRef,
                            requireStickyFooter: null,
                            forceSubmitButtonVisible: !1
                        })
                    },
                    ba = (e, t) => {
                        var {
                            payload: n
                        } = t;
                        return Pn(Pn({}, e), {}, {
                            isBlockChanging: n
                        })
                    },
                    Tn = (e, t) => {
                        var {
                            payload: n
                        } = t;
                        return Pn(Pn({}, e), {}, {
                            forceSubmitButtonVisible: n
                        })
                    },
                    sa = r(36141);

                function ua(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function U(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? ua(Object(n), !0).forEach(function(a) {
                            ie(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ua(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function ie(e, t, n) {
                    return (t = he(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function he(e) {
                    var t = Se(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Se(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var St = (e, t) => {
                        var {
                            payload: {
                                anchor: n,
                                target: a,
                                fast: v
                            }
                        } = t;
                        return U(U({}, e), {}, {
                            scrolling: {
                                scrollType: sa.T1,
                                anchor: n,
                                target: a,
                                fast: v
                            }
                        })
                    },
                    At = (e, t) => {
                        var {
                            payload: {
                                ref: n
                            }
                        } = t;
                        return U(U({}, e), {}, {
                            scrolling: {
                                ref: n,
                                scrollType: sa.K1
                            }
                        })
                    },
                    Nt = (e, t) => {
                        var {
                            payload: {
                                ref: n
                            }
                        } = t;
                        return U(U({}, e), {}, {
                            currentScreenRef: n
                        })
                    },
                    rr = e => U(U({}, e), {}, {
                        currentScreenRef: null
                    });

                function Lr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function or(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Lr(Object(n), !0).forEach(function(a) {
                            fn(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function fn(e, t, n) {
                    return (t = Br(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Br(e) {
                    var t = Hr(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Hr(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function j(e, t) {
                    var {
                        payload: {
                            isScrollNearTop: n
                        }
                    } = t;
                    return or(or({}, e), {}, {
                        isScrollNearTop: n
                    })
                }

                function _(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function z(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? _(Object(n), !0).forEach(function(a) {
                            J(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function J(e, t, n) {
                    return (t = Fe(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Fe(e) {
                    var t = Ke(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Ke(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function it(e, t) {
                    var {
                        payload: {
                            blockRef: n,
                            show: a = !1
                        }
                    } = t;
                    return !a && e.requireStickyFooter !== n ? e : z(z({}, e), {}, {
                        requireStickyFooter: a ? n : null
                    })
                }

                function $t(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Dt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? $t(Object(n), !0).forEach(function(a) {
                            rt(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function rt(e, t, n) {
                    return (t = hr(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function hr(e) {
                    var t = Ve(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Ve(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function Ir(e) {
                    return Dt(Dt({}, e), {}, {
                        scrolling: null
                    })
                }

                function Mr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Ur(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Mr(Object(n), !0).forEach(function(a) {
                            Sn(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Sn(e, t, n) {
                    return (t = mn(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function mn(e) {
                    var t = F(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function F(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var ce = (e, t) => {
                    var n = e == null ? void 0 : e.variables;
                    return Ur(Ur({}, e), {}, {
                        variables: Ur(Ur({}, n), {}, {
                            initialValues: Ur(Ur({}, n == null ? void 0 : n.initialValues), t.payload)
                        })
                    })
                };

                function de() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.Sl:
                            return Vn(e, t);
                        case b.F4:
                            return ba(e, t);
                        case b.fw:
                            return Tn(e, t);
                        case b.lc:
                            return Nt(e, t);
                        case b.HG:
                            return rr(e, t);
                        case b.EE:
                            return At(e, t);
                        case b.f4:
                            return St(e, t);
                        case b.yG:
                            return Ir(e, t);
                        case b.qb:
                            return j(e, t);
                        case b.oV:
                            return it(e, t);
                        case b.mE:
                            return ce(e, t);
                        default:
                            return e
                    }
                }
                var ge = r(74226);

                function _e(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function jt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? _e(Object(n), !0).forEach(function(a) {
                            xe(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function xe(e, t, n) {
                    return (t = Ut(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Ut(e) {
                    var t = xt(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function xt(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function lr() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ge.u,
                        {
                            type: t,
                            payload: n
                        } = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t) {
                        case b.HF:
                            return jt(jt({}, e), {}, {
                                isInputFocused: n.isInputFocused
                            });
                        default:
                            return e
                    }
                }
                const Gt = lr;
                var Ye = r(61977);

                function Yt(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Le(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Yt(Object(n), !0).forEach(function(a) {
                            sr(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function sr(e, t, n) {
                    return (t = Kr(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Kr(e) {
                    var t = Or(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Or(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var Rt = {
                    stripePaymentMethodId: null,
                    stripePaymentIntentId: null,
                    service: null
                };

                function tn() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rt,
                        {
                            type: t,
                            payload: n
                        } = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t) {
                        case b.jK:
                            return Le(Le({}, e), {}, {
                                stripe: Le(Le({}, e.stripe), {}, {
                                    stripePaymentMethodId: n
                                })
                            });
                        case b.yw:
                            return Le(Le({}, e), {}, {
                                stripe: Le(Le({}, e.stripe), {}, {
                                    stripePaymentIntentId: n
                                })
                            });
                        case b.cg:
                            return Le(Le({}, e), {}, {
                                stripe: Le(Le({}, e.stripe), {}, {
                                    service: n
                                })
                            });
                        default:
                            return e
                    }
                }
                var pn = [];

                function Er() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pn,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.an:
                            return t.payload;
                        default:
                            return e
                    }
                }
                var ur = r(86994);

                function rn() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ur.u,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.mu:
                            return {
                                isReviewModeEnabled: !0
                            };
                        case b.fQ:
                            return {
                                isReviewModeEnabled: !1
                            };
                        default:
                            return e
                    }
                }
                var Qt = r(7968),
                    nr = r(23638);

                function dr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function je(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? dr(Object(n), !0).forEach(function(a) {
                            Qr(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Qr(e, t, n) {
                    return (t = yn(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function yn(e) {
                    var t = Ft(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Ft(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var Vr = 2;

                function Ge() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nr.u,
                        {
                            type: t,
                            payload: n
                        } = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t) {
                        case b.Xo:
                            return je(je({}, e), {}, {
                                isSubmitting: !(n != null && n.isLivePreview)
                            });
                        case b.xl:
                            return je(je({}, e), {}, {
                                isSubmitting: !1,
                                isSuccess: !1,
                                isComplete: !1,
                                errorMessage: null,
                                retry: je(je({}, e.retry), {}, {
                                    timeout: 0
                                }),
                                navigationType: n == null ? void 0 : n.navigationType
                            });
                        case b.ZF:
                            return je(je({}, e), {}, {
                                isSubmitting: !1,
                                isSuccess: !0,
                                isComplete: !0,
                                retry: je(je({}, e.retry), {}, {
                                    count: 0,
                                    showMessage: !1,
                                    timeout: 0
                                })
                            });
                        case b.uX:
                            var {
                                showMessage: a,
                                count: v
                            } = e.retry;
                            return je(je({}, e), {}, {
                                isSubmitting: !0,
                                isSuccess: !1,
                                isComplete: !1,
                                retry: je(je({}, e.retry), {}, {
                                    count: v + 1,
                                    timeout: n.retry.timeout,
                                    showMessage: a || v >= Qt.F
                                })
                            });
                        case b.cX:
                            var T = e.retry.timeout - 1;
                            return je(je({}, e), {}, {
                                retry: je(je({}, e.retry), {}, {
                                    timeout: T > 0 ? T : 0
                                })
                            });
                        case b.Jy:
                            return je(je({}, e), {}, {
                                retry: je(je({}, e.retry), {}, {
                                    count: Vr
                                })
                            });
                        case b.eb:
                            return je(je({}, e), {}, {
                                responseId: n.responseId,
                                landingId: n.landingId,
                                landingAt: n.landingAt
                            });
                        case b.Zx:
                            return e;
                        case b.AL:
                            return je(je({}, e), {}, {
                                isSubmitting: !1,
                                isSuccess: !1,
                                isComplete: !1,
                                errorMessage: n.message,
                                retry: je({}, nr.u.retry)
                            });
                        case b.OK:
                            return je(je({}, e), {}, {
                                errorMessage: null
                            });
                        default:
                            return e
                    }
                }

                function Pr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Xt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Pr(Object(n), !0).forEach(function(a) {
                            Tr(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Tr(e, t, n) {
                    return (t = Ln(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Ln(e) {
                    var t = Bt(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Bt(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var ar = {
                    accountUid: "",
                    cookieAccountUids: null,
                    formId: "",
                    initialized: !1,
                    isFormCreator: !1,
                    isFirstConversation: null,
                    sessionId: null,
                    planName: "",
                    blockRefTracking: {}
                };

                function Wr() {
                    var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ar,
                        {
                            type: a,
                            payload: v
                        } = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a) {
                        case b.FL:
                            return Xt(Xt({}, n), {}, {
                                initialized: !0,
                                isFormCreator: (e = v == null || (t = v.cookieAccountUids) === null || t === void 0 ? void 0 : t.includes(n.accountUid)) !== null && e !== void 0 ? e : !1,
                                isFirstConversation: v == null ? void 0 : v.isFirstConversation,
                                sessionId: Me(12)
                            });
                        case b.wQ:
                            return Xt(Xt({}, n), {}, {
                                visitCurrentCycle: v.visitCurrentCycle
                            });
                        case b.LB:
                            {
                                var T, k, {
                                        responseFilled: X,
                                        ref: q
                                    } = v,
                                    Ze = (T = (k = n.blockRefTracking) === null || k === void 0 ? void 0 : k[q]) !== null && T !== void 0 ? T : {};
                                return Xt(Xt({}, n), {}, {
                                    blockRefTracking: Xt(Xt({}, n.blockRefTracking), {}, {
                                        [q]: Xt(Xt({}, Ze), {}, {
                                            responseFilled: X
                                        })
                                    })
                                })
                            }
                        default:
                            return n
                    }
                }
                const nn = Wr;

                function Pt() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.Wm:
                            return t.payload;
                        default:
                            return e
                    }
                }
                var He = r(77917),
                    Sr = r(12036),
                    gn = r(27662),
                    Kt = r(1728),
                    ra = r(29414);

                function Ce(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function ot(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Ce(Object(n), !0).forEach(function(a) {
                            cr(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function cr(e, t, n) {
                    return (t = Wn(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Wn(e) {
                    var t = na(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function na(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var da = e => !!e;

                function ha(e, t) {
                    var {
                        currentBlockRef: n,
                        resetAnswers: a
                    } = t.payload, v = (0, gn.A)(t.payload, e.isLivePreview), T = (0, Kt.s7)(e);
                    if (T) {
                        var k = ra.A.get(T);
                        k && (v = (0, P.dQ)(v, k, T))
                    }
                    var X = ot(ot({}, e), {}, {
                            submit: a ? nr.u : e.submit,
                            form: ot(ot({}, v), {}, {
                                currentRef: e.form.currentRef,
                                currentScreenRef: e.form.currentScreenRef,
                                isScrollNearTop: !0
                            })
                        }),
                        q = (0, Z.Tr)(X),
                        Ze = (0, Z.oo)(e),
                        gt = qr(Ze, q, a);
                    if (X.answers = {
                            answersList: gt
                        }, X.pipingAnswers = gt, n != null) {
                        var er = (0, He.B6)(X, n) || (0, He.am)(X, n);
                        if (er) X.form.currentScreenRef = n;
                        else {
                            X.form.currentScreenRef = null;
                            var Jt = (0, Sr.Jj)(X, n) ? n : (0, Sr.rJ)(X);
                            da(Jt) && (X.form.currentRef = Jt)
                        }
                    }
                    return X
                }
                var An = r(78354),
                    aa = r(42045);

                function Oa(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function kr(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Oa(Object(n), !0).forEach(function(a) {
                            Zn(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oa(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Zn(e, t, n) {
                    return (t = Va(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Va(e) {
                    var t = wa(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function wa(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var an = (0, h.HY)({
                        abTests: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        accessScheduling: wr,
                        accountFeatureFlags: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        portal: aa.Ay,
                        analytics: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        answers: Lt,
                        autoFocus: cn,
                        cookieConsent: G.Ay,
                        disableNavigation: en,
                        disableSubmit: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        disableTracking: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        embedSettings: Rr,
                        featureFlags: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        form: de,
                        hideSubmitButton: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        hubspotIntegration: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        integrations: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                            return t
                        },
                        input: Gt,
                        intents: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                            return t
                        },
                        isLimitedToParentSize: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        isLivePreview: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        isOfflineMode: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        isFormReady: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            return t
                        },
                        layout: Ye.Ay,
                        leadEnrichment: fe.Ay,
                        deepDive: bt.Ay,
                        numberOfSubmissions: An.Ay,
                        partialSubmissionsSent: We,
                        paymentProviders: tn,
                        pipingAnswers: Er,
                        readingDirection: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ltr";
                            return t
                        },
                        reviewMode: rn,
                        submit: Ge,
                        testVariants: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            return t
                        },
                        timeToComplete: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                            return t
                        },
                        tracking: nn,
                        translationRequest: M.Ay,
                        uniqueId: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Me(16);
                            return t
                        },
                        unrecoverableError: Pt,
                        pulseSurvey: w.Ay,
                        features: function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                            return t
                        },
                        captcha: se.J3,
                        media: qe.Ay,
                        uploads: Ie.Ay,
                        mediaServiceRespondentToken: Mt.Ay,
                        duplicatePrevention: $.Ay
                    }),
                    si = (e, t) => {
                        switch (t.type) {
                            case b.I_:
                                return ha(e, t);
                            case B.IU:
                                return kr(kr({}, e), {}, {
                                    form: kr(kr({}, e.form), {}, {
                                        settings: kr(kr({}, e.form.settings), {}, {
                                            showTypeformBranding: !0
                                        }),
                                        id: e.pulseSurvey.parentFormId
                                    })
                                });
                            case B.W7:
                                return ue(e);
                            case I.r6:
                                return oe(e, t);
                            case tt.U:
                                return kr(kr({}, e), {}, {
                                    isFormReady: !0
                                });
                            default:
                                return an(e, t)
                        }
                    };
                const Wa = si;
                var i = r(57036),
                    $n = r(91488),
                    In = r(82605),
                    ui = r(14794),
                    di = r.n(ui),
                    ci = r(94387),
                    Ca = r(87559),
                    _a = r(57773),
                    Mn = r(90281),
                    La = r(16492),
                    vi = r(2655),
                    fi = r(68727),
                    _n = r(40803),
                    wt = r(38067),
                    De = r(13332),
                    Ga = r(41764),
                    on = r(96707),
                    za = r(9237),
                    Dr = r(67570),
                    jn = r(94948),
                    Ar = ["event"];

                function Ea(e, t) {
                    if (e == null) return {};
                    var n, a, v = mi(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var T = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < T.length; a++) n = T[a], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (v[n] = e[n])
                    }
                    return v
                }

                function mi(e, t) {
                    if (e == null) return {};
                    var n = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (t.indexOf(a) !== -1) continue;
                            n[a] = e[a]
                        }
                    return n
                }

                function Ja(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function wn(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Ja(Object(n), !0).forEach(function(a) {
                            Za(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ja(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Za(e, t, n) {
                    return (t = pi(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function pi(e) {
                    var t = $a(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function $a(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function yi(e, t, n, a, v, T, k) {
                    try {
                        var X = e[T](k),
                            q = X.value
                    } catch (Ze) {
                        return void n(Ze)
                    }
                    X.done ? t(q) : Promise.resolve(q).then(a, v)
                }

                function Ia(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(a, v) {
                            var T = e.apply(t, n);

                            function k(q) {
                                yi(T, a, v, k, X, "next", q)
                            }

                            function X(q) {
                                yi(T, a, v, k, X, "throw", q)
                            }
                            k(void 0)
                        })
                    }
                }
                var Da = {
                        "S3 Datalake": !0
                    },
                    xa = (e, t, n) => new Promise(a => {
                        di().sendEvent(e, t, n, a)
                    }),
                    ca = e => {
                        (0, jn.bR)(e)
                    },
                    gi = function() {
                        var e = Ia(function*(t) {
                            yield Promise.all(t.map(n => {
                                var a, v;
                                return {
                                    data: (a = n.data) !== null && a !== void 0 ? a : {},
                                    options: (v = n.options) !== null && v !== void 0 ? v : {}
                                }
                            }).map(n => ({
                                data: wn({}, n.data),
                                options: wn(wn({}, n.options), {}, {
                                    context: {
                                        ip: "0.0.0.0"
                                    },
                                    integrations: n.options.integrations || Da
                                })
                            })).map(n => {
                                var a = n.data,
                                    {
                                        event: v
                                    } = a,
                                    T = Ea(a, Ar);
                                return xa(v, T, n.options)
                            }))
                        });
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    bi = r(62534),
                    Ra = r(66115),
                    ia = r(44418),
                    Ya = r(85398),
                    Ba = r(64334),
                    Pa = r(22953);

                function Ma(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Qa(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Ma(Object(n), !0).forEach(function(a) {
                            Ri(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ma(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Ri(e, t, n) {
                    return (t = Bi(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Bi(e) {
                    var t = Xa(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Xa(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }
                var hi = (0, Ca.CI)() ? "mobile" : "desktop";

                function Mi(e) {
                    var {
                        ref: t,
                        hasClickedAfterAutoplay: n
                    } = e;
                    return function*() {
                        var a = yield(0, i.Lt)(Z.Tr), v = yield(0, i.Lt)(Z.GH, t), T = a.findIndex(Ze => Ze.ref === t), k = (0, Pa.At)(a), X = yield(0, i.T1)(Sa, Qa({
                            item: n ? "autoplay_play_button" : "play_video_question",
                            item_type: "button",
                            block_index: T,
                            block_ref: t,
                            block_type: v.type
                        }, n && {
                            test_id: "AutoPlay",
                            payload: {
                                device: hi,
                                is_first_question: k === t
                            }
                        })), q = yield(0, i.T1)(Vt, n ? ut.TMP_ITEM_CLICKED : ut.ITEM_CLICKED, X);
                        return Qa({}, q)
                    }()
                }

                function* jr(e) {
                    yield(0, i.jP)(b.EZ, function*(t) {
                        var {
                            payload: {
                                ref: n,
                                hasClickedAfterAutoplay: a
                            }
                        } = t, v = yield(0, i.T1)(Mi, {
                            ref: n,
                            hasClickedAfterAutoplay: a
                        });
                        yield(0, i.yJ)(e, {
                            data: v
                        })
                    })
                }

                function Gn(e) {
                    var {
                        ref: t,
                        isSuccess: n,
                        withAudio: a
                    } = e;
                    return function*() {
                        var v = yield(0, i.Lt)(Z.Tr), T = yield(0, i.Lt)(Z.GH, t), k = v.findIndex(Jt => Jt.ref === t), X = (0, Pa.At)(v), q = X === t ? "first" : "following", Ze = a ? "autoplayed_with_audio" : "autoplayed", gt = {
                            feature: "autoplay_".concat(q, "_video_question"),
                            block_index: k,
                            block_ref: t,
                            block_type: T.type,
                            test_id: "AutoPlay",
                            label: n ? Ze : "blocked",
                            payload: {
                                device: hi
                            }
                        }, er = yield(0, i.T1)(Vt, ut.TMP_USE_FEATURE, gt);
                        return Qa({}, er)
                    }()
                }

                function* ki(e) {
                    yield(0, i.jP)(b.cq, function*(t) {
                        var {
                            payload: {
                                ref: n,
                                isSuccess: a,
                                withAudio: v
                            }
                        } = t, T = yield(0, i.T1)(Gn, {
                            ref: n,
                            isSuccess: a,
                            withAudio: v
                        });
                        yield(0, i.yJ)(e, {
                            data: T
                        })
                    })
                }
                var Ni = r(26706),
                    vr = r(35940),
                    Fi = r(85557),
                    qa = () => {
                        var e, t, n, a, v, T = (e = window.performance) === null || e === void 0 || (t = e.now) === null || t === void 0 ? void 0 : t.call(e),
                            k = (n = window.performance) === null || n === void 0 || (a = n.getEntriesByType) === null || a === void 0 ? void 0 : a.call(n, "navigation"),
                            X = k == null || (v = k[0]) === null || v === void 0 ? void 0 : v.domComplete;
                        return X ? Math.round(T - X) : 0
                    };

                function Fo(e) {
                    var {
                        blockRef: t,
                        followUpIndex: n
                    } = e;
                    return function*() {
                        var a = yield(0, i.Lt)(Z.bQ), v = yield(0, i.Lt)(Dr.TL), T = qa(), k = yield(0, i.Lt)(Z.wA, t);
                        a && (k += 1);
                        var X = {
                                block_ref: t,
                                block_type: Mn.Kh,
                                block_index: k,
                                child_index: n,
                                response_id: v,
                                time_since_page_load: T
                            },
                            q = yield(0, i.T1)(Vt, ut.BLOCK_EXTRA_FIELD_SHOWN, X);
                        return q
                    }()
                }

                function* Hi(e) {
                    yield(0, i.jP)(bt.dR.type, function*(t) {
                        var n = yield(0, i.T1)(Fo, t.payload);
                        yield(0, i.yJ)(e, {
                            data: n
                        })
                    })
                }
                var lo = r(74321),
                    Ho = r(49180),
                    so = r(32705);

                function* Uo(e, t) {
                    var n = yield(0, i.Lt)(so.G), a = Object.keys(n);
                    if (a.length) {
                        var v = yield(0, i.Lt)(De.eM), T = yield(0, i.Lt)(wt.af), k = yield(0, i.Lt)(wt.u0), X = yield(0, i.Lt)(Z.bQ), q = yield(0, i.Lt)(Z.j7), Ze = yield(0, i.Lt)(Z.k);
                        for (var gt of a) {
                            var er = n[gt],
                                Jt = {
                                    account_uid: T.accountUid,
                                    attribution_user_id: ci.A.getUser(),
                                    event: Ho.CJ,
                                    form_uid: v,
                                    has_welcome_screen: X,
                                    payload: {
                                        form_length: q,
                                        has_logic_jumps: Ze
                                    },
                                    test_id: gt,
                                    typeform_view_id: k,
                                    variant_label: er
                                };
                            yield(0, i.yJ)(e, {
                                data: Jt,
                                options: t
                            })
                        }
                    }
                }

                function* ei(e) {
                    for (;;) {
                        var {
                            type: t,
                            payload: n
                        } = yield(0, i.s)([b.my, b.Sl, b.HG, b.OK, b.xl, b.Gt]);
                        if (t === b.Sl) {
                            var a = yield(0, i.Lt)(Sr.m_, n.ref);
                            if (a) continue
                        }
                        if (!((t === b.OK || t === b.Sl) && n.isFromPrefilledAnswer)) return yield(0, i.T1)(e, n)
                    }
                }
                var Oi = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e),
                    Ko = e => {
                        throw TypeError(e)
                    },
                    zl = function(e, t) {
                        this[0] = e, this[1] = t
                    },
                    uo = e => {
                        var t = e[Oi("asyncIterator")],
                            n = !1,
                            a, v = {};
                        return t == null ? (t = e[Oi("iterator")](), a = T => v[T] = k => t[T](k)) : (t = t.call(e), a = T => v[T] = k => {
                            if (n) {
                                if (n = !1, T === "throw") throw k;
                                return k
                            }
                            return n = !0, {
                                done: !1,
                                value: new zl(new Promise(X => {
                                    var q = t[T](k);
                                    q instanceof Object || Ko("Object expected"), X(q)
                                }), 1)
                            }
                        }), v[Oi("iterator")] = () => v, a("next"), "throw" in t ? a("throw") : v.throw = T => {
                            throw T
                        }, "return" in t && a("return"), v
                    },
                    Vo = ["block_pos"],
                    Ui = ["block_pos"];

                function co(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function we(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? co(Object(n), !0).forEach(function(a) {
                            Wo(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : co(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Wo(e, t, n) {
                    return (t = _o(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function _o(e) {
                    var t = Go(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function Go(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function Ki(e, t) {
                    if (e == null) return {};
                    var n, a, v = Vi(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var T = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < T.length; a++) n = T[a], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (v[n] = e[n])
                    }
                    return v
                }

                function Vi(e, t) {
                    if (e == null) return {};
                    var n = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (t.indexOf(a) !== -1) continue;
                            n[a] = e[a]
                        }
                    return n
                }
                var zo = 1e3,
                    Jo = 2e3,
                    ut = {
                        BLOCK_ANSWERED: "block_answered",
                        BLOCK_EXTRA_FIELD_SHOWN: "block_extra_field_shown",
                        BLOCK_FOCUSED: "block_focused",
                        BLOCK_FOOTER_CLICKED: "block_footer_clicked",
                        BLOCK_FOOTER_VISIBLE: "block_footer_visible",
                        CONVERSATION_SUBMITTED: "conversation_submitted",
                        ITEM_CLICKED: "item_clicked",
                        MESSAGE_SHOWN: "message_shown",
                        PARTIAL_CONVERSATION_SUBMITTED: "partial_conversation_submitted",
                        PRESENT_CONVERSATION: "present_conversation",
                        REVIEW_MODE_ENTERED: "review_mode_entered",
                        START_CONVERSATION: "start_conversation",
                        SUBMIT_BUTTON_SHOWN: "submit_button_shown",
                        TMP_BLOCK_ANSWERED: "tmp_block_answered",
                        TMP_ITEM_CLICKED: "tmp_item_clicked",
                        TMP_MESSAGE_SHOWN: "tmp_message_shown",
                        TMP_USE_FEATURE: "tmp_use_feature",
                        TYPEFORM_PREVIEWED: "typeform_previewed",
                        USE_FEATURE: "use_feature"
                    },
                    ti = "standard",
                    Wi = "louvre",
                    Zo = "closed",
                    vo = "opened",
                    fo = {
                        COMPLETE: "complete_response",
                        PARTIAL: "partial_response"
                    },
                    oa = {
                        integrations: {
                            All: !1,
                            "S3 Datalake": !0
                        }
                    },
                    Ei = e => e != null && e.enabled ? Ya.k4.VIDEO : Ya.k4.TEXT,
                    va = () => (0, Ca.CI)() ? "mobile" : "desktop",
                    Pi = () => {
                        var e = new Date;
                        return e.getTimezoneOffset()
                    },
                    Ti = () => {
                        try {
                            return Intl.DateTimeFormat().resolvedOptions().timeZone
                        } catch (e) {
                            return null
                        }
                    },
                    $o = (e, t) => e && t ? "thankyou_button_and_branding" : e ? "thankyou_button" : t ? "branding" : null;

                function* _i(e) {
                    var t = yield(0, i.Lt)(Z.GH, e), n = yield(0, i.Lt)(Z.fP, e), a = {};
                    if (n) {
                        var v = yield(0, i.Lt)(Z.AH, t), T = v.properties.fields.findIndex(k => k.ref === e);
                        a = {
                            block_pos: v.index,
                            child_block_pos: T
                        }
                    } else a = {
                        block_pos: t.index
                    };
                    return a
                }

                function* Gi(e) {
                    var t = e.fieldRef,
                        n = yield(0, i.Lt)(Z.GH, t), a = yield _i(t), {
                            block_pos: v
                        } = a, T = Ki(a, Vo);
                    return we(we({
                        status: e.status,
                        block_ref: t,
                        block_type: n.type,
                        block_index: v
                    }, T), e.reason && {
                        reason: e.reason
                    })
                }

                function* ri() {
                    var e = yield(0, i.Lt)(Z.Ti), t = e && !!e.find(k => k.type === Mn.Tm);
                    if (!t) return !1;
                    var n = yield(0, i.Lt)(De.IU), {
                        toggle: a,
                        active: v
                    } = n, T = a && v;
                    return T
                }

                function* Si() {
                    var e, t = yield(0, i.Lt)(De.eM), n = yield(0, i.Lt)(wt.i0), a = yield(0, i.Lt)(Dr.lX), v = yield(0, i.Lt)(Dr.TL), T = yield(0, i.Lt)(Dr.Fg), k = yield(0, i.Lt)(Zt.sV), X = yield(0, i.T1)(jn.l5, t), q = yield(0, i.Lt)(wt.Iq), Ze = yield(0, i.Lt)(De.ve), gt = yield(0, i.Lt)(Z.Ti), er = yield(0, i.Lt)(De.h$), Jt = yield(0, i.Lt)(Zt.Aj), {
                        captcha: Xn
                    } = yield(0, i.Lt)(Z.mt), qn = yield(0, i.Lt)(vr.C), Aa = new Date().getTime(), ea = (e = window.performance) === null || e === void 0 || (e = e.timing) === null || e === void 0 ? void 0 : e.domComplete, Te = gt.some(Tt => {
                        var [br] = (Tt == null ? void 0 : Tt.media) || [];
                        return br == null ? void 0 : br.enabled
                    }), Re = gt.some(Tt => Tt.type === Mn.Ij), ke = yield(0, i.Lt)(Ba.m$), $e = yield(0, i.Lt)(Z.pS), tr = $e == null ? void 0 : $e.filter(Tt => {
                        var {
                            ref: br
                        } = Tt;
                        return br !== "default_tys"
                    }), gr = tr == null ? void 0 : tr.filter(Tt => {
                        var {
                            autoRedirect: br
                        } = Tt;
                        return !br
                    });
                    return {
                        distribution_channel: ti,
                        has_been_enriched: ke,
                        has_response_enrichment: yield ri(), has_multiple_thankyou_screens: (gr == null ? void 0 : gr.length) > 0, is_first_conversation: n, landing_token: a, local_time_offset: Pi(), local_timezone: Ti() || null, navigation_type: T, platform: va(), prefilled_data: k, respondent_method: "web_renderer", response_id: v, time_to_submit: ea ? Math.round((Aa - ea) / 1e3) : -1, visit_number_current_cycle: q, visit_number: X, typeform_branding: Ze, has_video_question: Te, has_answer_using_video: Jt, has_video_answer_enabled: er, has_duplicate_prevention: !!qn, has_spam_blocker_captcha: !!Xn, has_inline_group: Re
                    }
                }

                function Yo() {
                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jo,
                        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zo;
                    return function*() {
                        yield(0, i.s)(b.iU), yield(0, i.T1)(Qo);
                        var n = yield(0, i.T1)(f.Ix, f.u2.expanding(10));
                        yield(0, i.Zy)(Xo, n, e), yield(0, i.Zy)(Uo, n, oa);
                        var a = yield(0, i.Lt)($n.Rn);
                        a && (yield(0, i.Zy)(Zi, n, e));
                        var v = yield(0, i.Lt)(wt.Rb);
                        if (v) {
                            var T = {
                                    integrations: {
                                        All: !1,
                                        "S3 Datalake": !0,
                                        Natero: !0,
                                        "Google Analytics": !0,
                                        "Facebook Pixel": !0,
                                        AdWords: !0
                                    }
                                },
                                k = yield(0, i.T1)(nl);
                            yield(0, i.yJ)(n, {
                                data: k,
                                options: T
                            });
                            return
                        } {
                            var X = yield(0, i.T1)(bo);
                            yield(0, i.yJ)(n, {
                                data: we({}, X)
                            })
                        }
                        yield(0, i.Zy)(function*() {
                            yield(0, i.T1)(ei, function*(Te) {
                                var Re = yield(0, i.Lt)(De.eM);
                                yield(0, i.T1)(ca, Re);
                                var ke = yield(0, i.T1)(jn.QB, Re);
                                yield(0, i.yJ)((0, La.w9)(ke));
                                var $e = yield(0, i.T1)(go, Te);
                                yield(0, i.yJ)(n, {
                                    data: $e
                                })
                            })
                        }), yield(0, i.Zy)(function*() {
                            yield(0, i.jP)(b.pu, function*() {
                                var Te = yield Si(), Re = yield(0, i.T1)(Vt, ut.PARTIAL_CONVERSATION_SUBMITTED, Te), ke = yield(0, i.T1)(Ta), $e = yield(0, i.Lt)(De.jJ), tr = $e ? {
                                    online: window.navigator.onLine
                                } : {}, gr = yield(0, i.Lt)(ia.Dd), Tt = gr.fieldRef, br = yield(0, i.Lt)(Z.GH, Tt), On = yield _i(Tt), {
                                    block_pos: li
                                } = On, xi = Ki(On, Ui);
                                yield(0, i.yJ)(n, {
                                    data: we(we(we(we({}, Re), ke), tr), {}, {
                                        block_ref: Tt,
                                        block_type: br.type,
                                        block_index: li
                                    }, xi)
                                })
                            })
                        }), yield(0, i.Zy)(function*() {
                            yield(0, i.jP)(b.ZF, function*() {
                                var Te = yield(0, i.T1)(rl);
                                yield(0, i.yJ)(n, {
                                    data: Te
                                })
                            })
                        }), yield(0, i.Zy)(function*() {
                            for (var Te;;) {
                                var Re = yield(0, i.s)(b.oV), ke = yield(0, i.Lt)(Z.DZ), $e = Re.payload.blockRef;
                                if (Re.payload.show && $e === ke) {
                                    if (Te === $e) continue;
                                    Te = $e;
                                    var tr = yield(0, i.T1)(ho, ut.BLOCK_FOOTER_VISIBLE);
                                    tr && (yield(0, i.yJ)(n, {
                                        data: tr,
                                        options: oa
                                    }))
                                }
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var Te = yield(0, i.s)(b.dv), {
                                    source: Re
                                } = Te.payload;
                                if (Re === vi.c) {
                                    var ke = yield(0, i.T1)(ho, ut.BLOCK_FOOTER_CLICKED);
                                    ke && (yield(0, i.yJ)(n, {
                                        data: ke,
                                        options: oa
                                    }))
                                }
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                yield(0, i.s)(b.mu);
                                var Te = yield(0, i.Lt)(Zt.T3), Re = {
                                    invalid_answers_amount: Te
                                }, ke = yield(0, i.T1)(Vt, ut.REVIEW_MODE_ENTERED, Re), $e = oa;
                                yield(0, i.yJ)(n, {
                                    data: ke,
                                    options: $e
                                })
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)([b.BU]), Re = Te.ref, ke = yield(0, i.Lt)(De.nC, Re);
                                if (ke) {
                                    var $e = yield(0, i.Lt)(Z.GH, Re), tr = {
                                        block_ref: Re,
                                        block_type: $e ? $e.type : null,
                                        event: ut.SUBMIT_BUTTON_SHOWN,
                                        label: fo.COMPLETE
                                    }, gr = oa, Tt = yield(0, i.T1)(Vt, ut.SUBMIT_BUTTON_SHOWN, tr);
                                    yield(0, i.yJ)(n, {
                                        data: Tt,
                                        options: gr
                                    })
                                }
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)([b.bU]), Re = Te.ref, ke = yield(0, i.Lt)(Z.GH, Re), $e = {
                                    block_ref: Re,
                                    block_type: ke ? ke.type : null,
                                    event: ut.SUBMIT_BUTTON_SHOWN,
                                    label: fo.PARTIAL
                                }, tr = oa, gr = yield(0, i.T1)(Vt, ut.SUBMIT_BUTTON_SHOWN, $e);
                                yield(0, i.yJ)(n, {
                                    data: gr,
                                    options: tr
                                })
                            }
                        }), yield(0, i.Zy)(function*() {
                            var Te = oa,
                                Re = yield(0, i.Lt)(Z.rR), ke = !!Re, $e = yield(0, i.Lt)(Z.DZ), tr, gr, Tt;
                            tr = yield(0, i.Lt)(wt.pk), gr = tr($e);
                            var br = yield(0, i.Lt)(vr.u);
                            if (!br) {
                                if (ke) {
                                    Tt = yield(0, i.T1)(qo, Re, ut.BLOCK_FOCUSED);
                                    var [On] = (yield(0, i.Lt)(Sr.Us, Re)) || [];
                                    Tt.question_type = Ei(On)
                                } else {
                                    var li = yield(0, i.Lt)(Zt.VM, $e), xi = yield(0, i.Lt)(Fi.TA, $e), Mo = yield(0, i.T1)(zi, $e, ut.BLOCK_FOCUSED, we({
                                        prefilled_block: li,
                                        response_prefilled: gr.responseFilled || null
                                    }, xi)), la = yield(0, i.T1)(po, $e), [Hl] = (yield(0, i.Lt)(Sr.Us, $e)) || [];
                                    Tt = we(we(we({}, Mo), la), {}, {
                                        question_type: Ei(Hl)
                                    })
                                }
                                yield(0, i.yJ)(n, {
                                    data: Tt,
                                    options: Te
                                });
                                for (var io, Ka = function*() {
                                        var {
                                            payload: ja
                                        } = yield(0, i.s)(b.Sl), Kl = yield(0, i.Lt)(Zt.VM, ja.ref), Vl = yield(0, i.Lt)(Fi.TA, ja.ref), [Wl] = (yield(0, i.Lt)(Sr.Us, ja.ref)) || [];
                                        yield(0, i.cb)(), tr = yield(0, i.Lt)(wt.pk), gr = tr(ja.ref);
                                        var ko = yield(0, i.T1)(zi, ja.ref, ut.BLOCK_FOCUSED, we({
                                            navigation_type: ja.navigationType,
                                            prefilled_block: Kl,
                                            question_type: Ei(Wl),
                                            response_prefilled: gr.responseFilled || null
                                        }, Vl));
                                        if (!ko) return 1;
                                        var oo = yield(0, i.T1)(po, ja.ref), _l = we(we({}, ko), oo);
                                        io && (yield(0, i.ZT)(io)), io = yield(0, i.Zy)(function*() {
                                            yield(0, i.cb)(t), yield(0, i.yJ)(n, {
                                                data: _l,
                                                options: Te
                                            })
                                        })
                                    };;) yield* Jr(uo(Ka()))
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (var Te = oa, Re, ke = function*() {
                                    var gr, Tt, br, {
                                        type: On,
                                        payload: li
                                    } = yield(0, i.s)([b.Sl, b.xl]), xi = yield(0, i.Lt)(Z.DZ), Mo = yield(0, i.Lt)(De.LU);
                                    if (On === b.Sl && xi === Mo) return 0;
                                    var la = On === b.xl ? xi : Mo,
                                        Hl = yield(0, i.Lt)(Z.lh, la), io = yield(0, i.Lt)(Z.pe, la), Ka = (0, Ga.YK)(io), Ul = !!(Ka != null && (gr = Ka[0]) !== null && gr !== void 0 && gr.video_id), ja = !!(Ka != null && (Tt = Ka[0]) !== null && Tt !== void 0 && Tt.text), Kl = Ul ? "video" : "text", Vl = Ul || ja, Wl = yield(0, i.Lt)(Zt.un, la), ko = yield(0, i.Lt)(wt.pk), oo = yield(0, i.Lt)(Z.GH, la), _l = ko(la), [No] = (yield(0, i.Lt)(Sr.Us, la)) || [], ts = !!(No != null && No.enabled), rs = yield(0, i.Lt)(Ni.dJ), ns = yield(0, i.Lt)(Fi.uE, la), $l = yield(0, i.T1)(zi, la, ut.BLOCK_ANSWERED, we(we({
                                            changed_prefilled_value: Wl,
                                            answered: Hl,
                                            navigation_type: li.navigationType,
                                            response_filled: _l.responseFilled || null,
                                            question_type: Ei(No),
                                            percentage_media_played: ts ? rs : null
                                        }, Vl ? {
                                            answer_type: Kl,
                                            answer_options: (0, lo.sw)(oo == null || (br = oo.properties) === null || br === void 0 ? void 0 : br.allowedAnswerTypes) ? "video_text" : "video"
                                        } : {}), ns));
                                    if (!$l) return 0;
                                    var as = yield(0, i.T1)(el, la), is = we(we({}, $l), as);
                                    Re && (yield(0, i.ZT)(Re)), Re = yield(0, i.Zy)(function*() {
                                        yield(0, i.cb)(t), yield(0, i.yJ)(n, {
                                            data: is,
                                            options: Te
                                        })
                                    })
                                }, $e;;) $e = yield* Jr(uo(ke()))
                        }), yield(0, i.Zy)(jr, n), yield(0, i.Zy)(ki, n), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)("media/setMediaCollapsed"), {
                                    itemType: Re,
                                    ref: ke
                                } = Te, $e = yield(0, i.T1)(il, {
                                    itemType: Re,
                                    ref: ke
                                });
                                yield(0, i.yJ)(n, {
                                    data: $e
                                })
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)(b.OS), {
                                    label: Re
                                } = Te, ke = yield(0, i.T1)(al, Re);
                                yield(0, i.yJ)(n, {
                                    data: ke
                                })
                            }
                        }); {
                            var q = yield(0, i.Lt)(vr.u);
                            if (q) {
                                var Ze = ut.MESSAGE_SHOWN,
                                    gt = yield(0, i.T1)(Vt, Ze, {
                                        message: "duplicate_submission_warning"
                                    });
                                yield(0, i.yJ)(n, {
                                    data: gt
                                })
                            }
                        }
                        yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)(b.lc), Re = ut.BLOCK_FOCUSED, ke = yield(0, i.Lt)(He.fF), $e = Te.ref === (ke == null ? void 0 : ke.ref);
                                if (!(!ke || !$e || ke != null && ke.autoRedirect)) {
                                    var {
                                        showButton: tr
                                    } = ke, gr = yield(0, i.Lt)(De.ve), Tt = $o(tr, gr), br = yield(0, i.T1)(yo, Te.ref, {
                                        typeform_branding: Tt
                                    }), On = yield(0, i.T1)(Vt, Re, br), li = we(we({}, br), On);
                                    yield(0, i.yJ)(n, {
                                        data: li
                                    })
                                }
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)(b.Bj), {
                                    label: Re,
                                    navigationType: ke,
                                    buttonText: $e
                                } = Te, tr = yield(0, i.T1)(ol, Re, ke, $e);
                                yield(0, i.yJ)(n, {
                                    data: tr
                                })
                            }
                        }), yield(0, i.Zy)(function*() {
                            for (;;) {
                                var {
                                    payload: Te
                                } = yield(0, i.s)(b.zV), {
                                    label: Re
                                } = Te, ke = yield(0, i.T1)(ll, Re);
                                yield(0, i.yJ)(n, {
                                    data: ke
                                })
                            }
                        }); {
                            var er = yield(0, i.Lt)(De.be), Jt = yield(0, i.Lt)(Kt.aW);
                            if (er && Jt === I.CX.SUCCESS) {
                                var Xn = yield(0, i.T1)(Oo);
                                yield(0, i.yJ)(n, {
                                    data: Xn
                                })
                            }
                            if (er && Jt === I.CX.ERROR) {
                                var qn = yield(0, i.T1)(Eo);
                                yield(0, i.yJ)(n, {
                                    data: qn
                                })
                            }
                            er && (yield(0, i.Zy)(function*() {
                                for (;;) {
                                    var {
                                        payload: Te
                                    } = yield(0, i.s)(M.Lx);
                                    if (Te === I.CX.SUCCESS) {
                                        var Re = yield(0, i.T1)(Oo);
                                        yield(0, i.yJ)(n, {
                                            data: Re
                                        })
                                    }
                                    if (Te === I.CX.ERROR) {
                                        var ke = yield(0, i.T1)(Eo);
                                        yield(0, i.yJ)(n, {
                                            data: ke
                                        })
                                    }
                                }
                            }))
                        } {
                            var Aa = yield(0, i.Lt)(Kt.aZ);
                            if (Aa) {
                                var ea = yield(0, i.T1)(Vt, ut.TMP_MESSAGE_SHOWN, {
                                    message: "translation_languages_feature_exposed"
                                });
                                yield(0, i.yJ)(n, {
                                    data: ea
                                }), yield(0, i.Zy)(function*() {
                                    for (;;) {
                                        var {
                                            payload: Te
                                        } = yield(0, i.s)(M.Lx);
                                        if (Te === I.CX.ERROR) {
                                            var Re = yield(0, i.T1)(Vt, ut.TMP_MESSAGE_SHOWN, {
                                                message: "translation_label_error"
                                            });
                                            yield(0, i.yJ)(n, {
                                                data: Re
                                            })
                                        }
                                    }
                                }), yield(0, i.Zy)(function*() {
                                    for (;;) {
                                        var {
                                            payload: Te
                                        } = yield(0, i.s)(M.Lx);
                                        if (Te === I.CX.SUCCESS) {
                                            var Re = yield(0, i.Lt)(Kt.s7), ke = yield(0, i.T1)(sl, Re);
                                            yield(0, i.yJ)(n, {
                                                data: ke
                                            })
                                        }
                                    }
                                }), yield(0, i.Zy)(function*() {
                                    for (;;) {
                                        var {
                                            payload: Te
                                        } = yield(0, i.s)(M.zW);
                                        if ((Te == null ? void 0 : Te.status) === I.E3.DISMISSED) {
                                            var Re = yield(0, i.T1)(ul, Te == null ? void 0 : Te.reason);
                                            yield(0, i.yJ)(n, {
                                                data: Re
                                            })
                                        }
                                    }
                                })
                            }
                        }
                        yield(0, i.Zy)(Hi, n)
                    }()
                }

                function* Qo() {
                    var e = yield(0, i.Lt)(wt.RT), t = yield(0, i.T1)(mo), n = [];
                    if (e) {
                        var a = yield(0, i.Lt)(wt.Po), v = yield(0, i.Lt)(wt.Gv), T = {
                            name: ui.SUPPORTED_PROVIDERS.RUDDERSTACK,
                            config: {
                                key: e,
                                dataPlaneUrl: a,
                                options: {
                                    configUrl: v
                                }
                            }
                        };
                        n.push(T)
                    }
                    n.length && (yield(0, i.T1)(di().initRenderer, n, t))
                }

                function* Xo(e, t) {
                    for (;;) {
                        var n = yield(0, i.s)(e), a = yield(0, i.bX)(e), v = [n, ...a];
                        yield(0, i.T1)(gi, v);
                        var T = yield(0, i.Lt)(Dr.OH), k = yield(0, i.Lt)(Dr.zc);
                        !T && !k && (yield(0, i.O4)({
                            delay: (0, i.cb)(t),
                            cancel: (0, i.s)(b.xl)
                        }))
                    }
                }

                function* mo() {
                    var e = yield(0, i.Lt)(De.eM), t = yield(0, i.Lt)(wt.u0), n = yield(0, i.Lt)(wt.af), a = yield(0, i.T1)(jn.ct, e);
                    return {
                        account_uid: n.accountUid,
                        attribution_user_id: ci.A.getUser(),
                        form_uid: e,
                        form_visitor_id: a,
                        typeform_view_id: t
                    }
                }

                function* ka(e, t) {
                    var n = yield(0, i.Lt)($n.UL), a = {}, v = {};
                    if (!n) return {};
                    t.landing_token && (a = yield(0, i.Lt)($n.sk));
                    var T = B.x_.includes(e);
                    return T && (v = yield(0, i.Lt)($n.OD)), we(we({}, a), v)
                }

                function* Vt(e, t) {
                    var n = yield(0, i.T1)(mo);
                    return we(we({}, n), {}, {
                        event: e
                    }, t)
                }

                function* qo(e, t, n) {
                    var a, v = yield(0, i.Lt)(Z.Dv);
                    if (!v) return null;
                    var T = yield(0, i.Lt)(Dr.lX), k = qa(), X = (0, _a.FK)(window.innerWidth), q = (0, Ra.A)(X, v.layout), Ze = we({
                        attachment_type: ((a = v.attachment) === null || a === void 0 ? void 0 : a.type) || null,
                        block_index: 0,
                        block_ref: e,
                        block_type: Mn.ym,
                        landing_token: T,
                        layout_type: (q == null ? void 0 : q.type) || y.$1.STACK,
                        question_intent: null,
                        question_required: null,
                        response_id: null,
                        prefilled_block: null,
                        response_prefilled: null,
                        time_since_page_load: k
                    }, n), gt = yield(0, i.T1)(Vt, t, Ze);
                    return gt
                }

                function* po(e) {
                    var t = yield(0, i.Lt)(Z.Tr), n = t.find(q => q.ref === e);
                    if (!n) return null;
                    var {
                        properties: a
                    } = n, v = {};
                    if ((0, Sr.BS)(n)) {
                        var {
                            fields: T
                        } = a, k = T.filter(q => q.validations.required).map(q => q.subfieldKey).join(","), X = T.filter(q => q.validations.required).map(q => q.ref).join(",");
                        v.fields_featured = T.map(q => q.subfieldKey).join(","), v.fields_featured_refs = T.map(q => q.ref).join(","), k && (v.fields_required = k), X && (v.fields_required_refs = X)
                    }
                    return v
                }

                function* zi(e, t, n) {
                    var a, v, T = yield(0, i.Lt)(Z.Tr), k = T.find(On => On.ref === e), X = yield(0, i.Lt)(Z.Ti);
                    if (!k || !X) return null;
                    var q = yield(0, i.Lt)(Dr.lX), Ze = yield(0, i.Lt)(Dr.TL), gt = yield(0, i.Lt)(Sr.pK, e), er = yield(0, i.Lt)(_n.W, e), Jt = T.findIndex(On => On.ref === e), Xn = yield(0, i.Lt)(Z.Dv);
                    Xn && Jt++;
                    var qn = qa(),
                        Aa = (0, _a.FK)(window.innerWidth),
                        ea = (0, Ra.A)(Aa, k.layout),
                        Te = X.find(On => On.ref === e),
                        Re = (Te == null ? void 0 : Te.type) === Mn.Tm,
                        ke = (Te == null ? void 0 : Te.type) === Mn.KY,
                        $e = T && T.find(On => On.type === Mn.Tm),
                        tr = ($e == null ? void 0 : $e.ref) === e,
                        gr = we(we(we({
                            attachment_type: ((a = k.attachment) === null || a === void 0 ? void 0 : a.type) || null,
                            block_index: Jt,
                            block_ref: e,
                            block_type: k.type,
                            landing_token: q,
                            layout_type: (ea == null ? void 0 : ea.type) || y.$1.STACK,
                            question_intent: er || null,
                            question_required: gt,
                            response_id: Ze,
                            time_since_page_load: qn
                        }, n), Re && {
                            used_for_enrichment: tr && (yield ri())
                        }), ke && {
                            answer_options: (0, lo.sw)(k == null || (v = k.properties) === null || v === void 0 ? void 0 : v.allowedAnswerTypes) ? "video_text" : "video"
                        }),
                        Tt = yield(0, i.T1)(Vt, t, gr), br = yield(0, i.T1)(ka, t, Tt);
                    return we(we({}, Tt), br)
                }

                function* el(e) {
                    var t = yield(0, i.Lt)(Z.GH, e), {
                        properties: n
                    } = t, a = {};
                    if ((0, Sr.BS)(t)) {
                        var v = yield(0, i.Lt)(Z.pe, e), [T] = (0, Ga.YK)(v);
                        if (T) {
                            var k = [],
                                X = [];
                            n.fields.forEach(q => {
                                var Ze = q.type,
                                    gt = T[q.ref],
                                    er = !(0, Ga.VB)(Ze, gt);
                                er && (X.push(q.ref), k.push(q.subfieldKey))
                            }), a = {
                                fields_filled: k.join(","),
                                fields_filled_refs: X.join(","),
                                answered: !!k.length
                            }
                        }
                    }
                    return a
                }

                function* yo(e, t) {
                    var n, a = yield(0, i.Lt)(He.fF), v = yield(0, i.Lt)(Z.Tr), T = v.length, k = yield(0, i.Lt)(Z.Dv);
                    k && T++;
                    var X = yield(0, i.Lt)(Dr.lX), q = yield(0, i.Lt)(Dr.TL), Ze = qa(), gt = e === He.pi ? "thankyou_screen" : "ending", er = (0, _a.FK)(window.innerWidth), Jt = (0, Ra.A)(er, a.layout);
                    return we({
                        attachment_type: ((n = a.attachment) === null || n === void 0 ? void 0 : n.type) || null,
                        block_index: T,
                        block_ref: e,
                        block_type: gt,
                        landing_token: X,
                        layout_type: (Jt == null ? void 0 : Jt.type) || y.$1.STACK,
                        response_id: q,
                        time_since_page_load: Ze
                    }, t)
                }

                function* Ta() {
                    var e = yield(0, i.Lt)(on.DN);
                    return e ? {
                        embedding_mode: yield(0, i.Lt)(on.Tk), headers_displayed: !(yield(0, i.Lt)(on.dh)), footers_displayed: !(yield(0, i.Lt)(on.JD)), transparency: 100 - (yield(0, i.Lt)(on.o7)) * 100
                    } : {
                        embedding_mode: null
                    }
                }

                function go(e) {
                    var {
                        navigationType: t
                    } = e;
                    return function*() {
                        var n = yield(0, i.Lt)(De.eM), a = yield(0, i.Lt)(wt.i0), v = yield(0, i.Lt)(Zt.sV), T = yield(0, i.T1)(jn.l5, n), k = yield(0, i.Lt)(wt.Iq), X = yield(0, i.Lt)(Z.Dv), q = yield(0, i.Lt)(De.ve), Ze = Mn.ym;
                        if (!X) {
                            var gt = yield(0, i.Lt)(Z.lX, 0);
                            Ze = gt == null ? void 0 : gt.type
                        }
                        var er = yield(0, i.Lt)(ia.Dd), Jt = !!er, Xn = {
                            distribution_channel: ti,
                            has_partial_responses: Jt,
                            has_response_enrichment: yield ri(), height: window.innerHeight, is_first_conversation: a, local_time_offset: Pi(), local_timezone: Ti() || null, navigation_type: t, platform: va(), prefilled_data: v, renderer_version: Wi, respondent_method: "web_renderer", visit_number: T, visit_number_current_cycle: k, width: window.innerWidth, block_type: Ze, typeform_branding: q
                        }, qn = yield(0, i.T1)(Vt, ut.START_CONVERSATION, Xn), Aa = yield(0, i.T1)(Ta), ea = yield(0, i.T1)(ka, ut.START_CONVERSATION, qn);
                        return qn = we(we(we({}, qn), Aa), ea), qn
                    }()
                }

                function* tl() {
                    var e = yield(0, i.Lt)(De.eM), t = yield(0, i.T1)(jn.p5, e);
                    return yield(0, i.yJ)((0, La.w9)(t)), t
                }

                function* bo() {
                    var e = yield(0, i.Lt)(za.em), t = yield(0, i.Lt)(De.vd), n = yield(0, i.Lt)(De.Jm), a = yield(0, i.Lt)(fi.ty), v = a ? Zo : vo, T = yield(0, i.Lt)(Zt.sV), k = yield(0, i.Lt)(De.eM), X = yield(0, i.T1)(tl, k), q = yield(0, i.T1)(jn.l5, k), Ze = yield(0, i.Lt)(De.ve), gt = yield(0, i.Lt)(Z.qr), er = yield(0, i.Lt)(De.r6), Jt = yield(0, i.Lt)(vr.C), Xn = yield(0, i.Lt)(Z.Ti), qn = Xn.some(Tt => {
                        var [br] = (Tt == null ? void 0 : Tt.media) || [];
                        return br == null ? void 0 : br.enabled
                    }), Aa = yield(0, i.Lt)(De.h$), ea = !gt && Ze, Te = yield(0, i.Lt)(ia.Dd), Re = !!Te, ke = we(we({
                        distribution_channel: ti,
                        embedding_mode: null,
                        form_status: v,
                        has_partial_responses: Re,
                        has_response_enrichment: yield ri(), local_time_offset: Pi(), local_timezone: Ti() || null, platform: va(), prefilled_data: T, renderer_version: Wi, respondent_method: "web_renderer", show_navigation_arrows: !n, show_number_of_submissions: er, typeform_branding: ea, visit_number_current_cycle: X, visit_number: q, has_video_question: qn, has_video_answer_enabled: Aa
                    }, Re && {
                        partial_responses_milestone_setup: yield Gi(Te)
                    }), Jt && {
                        duplicate_prevention_type: Jt.type,
                        duplicate_prevention_shown: yield(0, i.Lt)(vr.u)
                    });
                    t && e && (ke = we(we({}, ke), {}, {
                        estimated_time_to_complete: e
                    }));
                    var $e = yield(0, i.T1)(Vt, ut.PRESENT_CONVERSATION, ke), tr = yield(0, i.T1)(Ta);
                    $e = we(we(we({}, $e), tr), bi.Ay.getEventsToBeTracked());
                    var gr = yield(0, i.T1)(ka, ut.PRESENT_CONVERSATION, $e);
                    return we(we({}, $e), gr)
                }

                function* rl() {
                    var e = yield Si(), t = yield(0, i.T1)(Vt, ut.CONVERSATION_SUBMITTED, e), n = yield(0, i.Lt)(De.jJ), a = n ? {
                        online: window.navigator.onLine
                    } : {}, v = yield(0, i.T1)(Ta), T = yield(0, i.Lt)(ia.Dd), k = !!T, X = yield(0, i.Lt)(ia.SL);
                    t = we(we(we(we({
                        completed_from_partial_response: X,
                        has_partial_responses: k
                    }, k && {
                        partial_responses_milestone_setup: yield Gi(T)
                    }), t), v), a);
                    var q = yield(0, i.T1)(ka, ut.CONVERSATION_SUBMITTED, t);
                    return we(we({}, t), q)
                }

                function* ho(e) {
                    var t = yield(0, i.Lt)(wt.i0), n = {
                        distribution_channel: ti,
                        height: window.innerHeight,
                        is_first_conversation: t,
                        local_time_offset: Pi(),
                        local_timezone: Ti() || null,
                        platform: va(),
                        renderer_version: Wi,
                        respondent_method: "web_renderer_one_question_per_screen",
                        width: window.innerWidth
                    }, a = yield(0, i.T1)(Vt, e, n), v = yield(0, i.T1)(Ta);
                    return a = we(we({}, a), v), a
                }

                function* nl() {
                    var e = yield(0, i.Lt)(wt.af), t = yield(0, i.Lt)(De.eM), n = {
                        event: ut.TYPEFORM_PREVIEWED,
                        form_uid: t,
                        account_uid: e.accountUid
                    };
                    return n
                }

                function* Sa(e) {
                    var t = yield(0, i.Lt)(wt.i0), n = yield(0, i.Lt)(Dr.lX), a = yield(0, i.Lt)(Dr.TL), v = yield(0, i.T1)(Ta), T = we(we({
                        is_first_conversation: t,
                        landing_token: n,
                        platform: va(),
                        response_id: a
                    }, v), e);
                    return T
                }

                function* al(e) {
                    var t = yield(0, i.T1)(Sa, {
                        item: "viral_branding",
                        label: e
                    }), n = yield(0, i.T1)(Vt, ut.ITEM_CLICKED, t), a = yield(0, i.Lt)($n.Rn);
                    return a && (n.form_uid = yield(0, i.Lt)($n.RY), n.form_visitor_id = yield(0, i.T1)(jn.ct, n.form_uid)), we({}, n)
                }

                function il(e) {
                    var {
                        itemType: t,
                        ref: n
                    } = e;
                    return function*() {
                        var a = yield(0, i.Lt)(Z.Tr), v = yield(0, i.Lt)(Z.GH, n), T = a.findIndex(q => q.ref === n), k = yield(0, i.T1)(Sa, {
                            item: "reply_video_question",
                            item_type: t,
                            block_index: T,
                            block_ref: n,
                            block_type: v.type
                        }), X = yield(0, i.T1)(Vt, ut.ITEM_CLICKED, k);
                        return we({}, X)
                    }()
                }

                function* ol(e, t, n) {
                    var a = yield(0, i.T1)(Sa, {
                        item: "endscreen_cta",
                        label: e,
                        value: n,
                        navigation_type: t
                    }), v = yield(0, i.T1)(Vt, ut.ITEM_CLICKED, a);
                    return v
                }

                function* ll(e) {
                    var t = yield(0, i.T1)(Sa, {
                        item: "thankyou_screen_social",
                        label: e
                    }), n = yield(0, i.T1)(Vt, ut.ITEM_CLICKED, t);
                    return n
                }

                function* Jl(e) {
                    var t = yield call(Sa, {
                        item: "change_language",
                        item_type: "menu",
                        label: e
                    }), n = yield call(Vt, ut.ITEM_CLICKED, t);
                    return n
                }

                function* sl(e) {
                    var t = yield(0, i.T1)(Vt, ut.TMP_USE_FEATURE, {
                        feature: "translation_languages",
                        label: e
                    });
                    return t
                }

                function* ul(e) {
                    var t = yield(0, i.T1)(Vt, ut.TMP_USE_FEATURE, {
                        feature: "translation_languages_dismiss_toast",
                        label: e
                    });
                    return t
                }

                function* Oo() {
                    var e = yield(0, i.Lt)(Kt.s7);
                    return yield(0, i.T1)(Vt, ut.USE_FEATURE, {
                        feature: "auto_translate",
                        label: e
                    })
                }

                function* Eo() {
                    return yield(0, i.T1)(Vt, ut.MESSAGE_SHOWN, {
                        message: "auto_translate_system_error"
                    })
                }

                function Po(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function To(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Po(Object(n), !0).forEach(function(a) {
                            dl(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Po(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function dl(e, t, n) {
                    return (t = Zl(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Zl(e) {
                    var t = cl(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function cl(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function* So(e) {
                    return yield(0, i.T1)(go, e)
                }

                function* Ji() {
                    var e = ee();
                    yield(0, i.s)(b.ZF), yield(0, i.yJ)({
                        type: B.W7
                    }), yield(0, i.yJ)((0, w.Yf)()), yield(0, i.yJ)({
                        type: b.Sl,
                        payload: {
                            ref: e.fields[0].ref
                        }
                    }), yield(0, i.T1)(In.jP)
                }

                function* Zi(e) {
                    yield(0, i.s)(w.Yf.type);
                    var t = yield(0, i.T1)(bo);
                    yield(0, i.yJ)(e, {
                        data: To({}, t)
                    });
                    var n = yield(0, i.T1)(ei, So);
                    yield(0, i.yJ)(e, {
                        data: To({}, n)
                    })
                }
                var bn = r(15127),
                    ni = r(52457),
                    Ao = r(93413),
                    vl = r(82850);

                function* jo(e) {
                    var t = yield(0, i.Lt)(De.mF), n = yield(0, i.Lt)(vl.fl), a = yield(0, i.Lt)(De.jq);
                    if (!(a || !t)) {
                        if ((0, bn.Jk)({
                                groups: e.type === G.r2.type ? n : Ao.h_,
                                timestamp: new Date
                            }), (0, bn.Xr)() && (yield(0, i.yJ)(La.g7)), !(0, bn.BN)()) {
                            yield(0, i.T1)(ni.deleteAttributionUserIdCookie), yield(0, i.T1)(ni.deleteRudderstackAnonymousIdCookie);
                            return
                        }
                        yield(0, i.yJ)(La.fz)
                    }
                }

                function* fl() {
                    var e = yield(0, i.Lt)(De.mF), t = yield(0, i.Lt)(De.jq);
                    t || !e || ((0, bn.Jk)({
                        groups: [],
                        timestamp: new Date
                    }), yield(0, i.T1)(ni.deleteAttributionUserIdCookie), yield(0, i.T1)(ni.deleteRudderstackAnonymousIdCookie))
                }

                function* ml() {
                    var e = yield(0, i.Lt)(De.jq);
                    if (!e) {
                        var t = yield(0, i.Lt)(De.mF), n = (0, bn.WU)();
                        if (!t && !n) {
                            (0, bn.Jk)({
                                groups: [...Ao.h_],
                                timestamp: new Date,
                                implicitConsent: !0
                            });
                            return
                        }
                        if (t && n) {
                            var a = (0, bn.qM)();
                            if (!a) return;
                            (0, bn.q1)()
                        }
                    }
                }

                function* pl() {
                    yield(0, i.T1)(ml), yield(0, i.p8)([G.ni.type, G.r2.type], jo), yield(0, i.p8)([G.S4.type], fl)
                }
                var yl = r(52833),
                    Ai = r(89368),
                    gl = r(11214),
                    wo = r(40894),
                    Co = r(17163),
                    bl = r(82905),
                    $i = r(52149),
                    hl = r(76214),
                    Ol = r(944),
                    Lo = r(1952),
                    Yi = e => `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','googleTagManager','`.concat(e, `');
`),
                    El = e => ` !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('set', 'autoConfig', false, '`.concat(e, `');
    fbq('init', '`).concat(e, `');
    fbq('trackSingle', '`).concat(e, "', 'PageView');"),
                    Io = e => `
  document.cookie='hubspotutk=;domain=`.concat(Ol.A.HUBSPOT_COOKIE_DOMAIN, `;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  var _hs = document.createElement('script');
  _hs.async = true;
  _hs.defer = true;
  _hs.src = '//js.hs-scripts.com/`).concat(e, `.js';
  document.head.appendChild(_hs);
`),
                    ji = function(t) {
                        var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                        if (t) {
                            var v = document.createElement("script");
                            v.type = "text/javascript", v.async = !0, v.defer = a, v.innerHTML = t, (n = document.getElementsByTagName("body")[0]) === null || n === void 0 || n.appendChild(v)
                        }
                    },
                    Pl = e => {
                        var t = Yi(e);
                        ji(t)
                    },
                    Tl = e => {
                        var t = window.location.search.indexOf("share-ga-instance=true") !== -1 && (0, hl.A)();
                        (0, Lo.bootGoogleAnalyticsIntegration)({
                            embedId: (0, $i.N)(),
                            googleAnalyticsTrackingId: e,
                            instanceSharing: t
                        })
                    },
                    Sl = e => {
                        var t = El(e);
                        ji(t, !0)
                    },
                    o = (e, t) => {
                        var n = "";
                        e && e.portal_id ? n = Io(e.portal_id) : t && t.extra && t.extra.portal_id && (n = Io(t.extra.portal_id)), ji(n)
                    },
                    s = e => e.find(t => t.provider_id === "hubspot");

                function* d() {
                    yield(0, i.s)(b.vp), yield(0, i.T1)(c)
                }

                function* c() {
                    var e = yield(0, i.Lt)(Z.mt), t = yield(0, i.Lt)(Z.P5), n = yield(0, i.Lt)(De.mF), a = !n;
                    if ((0, bn.BN)() || a) {
                        var v = t.googleTagManager || e.googleTagManager;
                        v && (yield(0, i.T1)(Pl, v));
                        var T = t.googleAnalytics || e.googleAnalytics;
                        T && (yield(0, i.T1)(Tl, T))
                    }
                    if ((0, bn.ku)() && (0, bn.LX)() || a) {
                        var k = t.facebookPixel || e.facebookPixel;
                        k && (yield(0, i.T1)(Sl, k))
                    }
                    if ((0, bn.LX)() || a) {
                        var X = yield(0, i.Lt)(Z._6), q = yield(0, i.Lt)(Z.Yl), Ze = s(q);
                        (X != null && X.portal_id || Ze) && (yield(0, i.T1)(o, X, Ze))
                    }
                }
                var x = r(50180),
                    Q = r(10698),
                    ye = r(37594),
                    be = r(19354);

                function Oe(e, t, n, a, v, T, k) {
                    try {
                        var X = e[T](k),
                            q = X.value
                    } catch (Ze) {
                        return void n(Ze)
                    }
                    X.done ? t(q) : Promise.resolve(q).then(a, v)
                }

                function Pe(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(a, v) {
                            var T = e.apply(t, n);

                            function k(q) {
                                Oe(T, a, v, k, X, "next", q)
                            }

                            function X(q) {
                                Oe(T, a, v, k, X, "throw", q)
                            }
                            k(void 0)
                        })
                    }
                }
                var Be = "".concat(ye.K.apiHost, "/").concat(ye.K.endpoints.forms),
                    pe = null,
                    Qe = function() {
                        var e = Pe(function*(t) {
                            var {
                                formId: n,
                                landingId: a,
                                landingAt: v,
                                values: T,
                                featureFlags: k,
                                respondentValidationPayload: X,
                                enrichmentMetadata: q,
                                stageBlockRef: Ze
                            } = t, gt = "".concat(Be).concat(n, "/").concat(ye.K.endpoints.partialSubmissions), er = (yield r.e(654).then(r.bind(r, 64951))).default, Jt = yield er({
                                formId: n,
                                landingAt: v,
                                landingId: a,
                                featureFlags: k,
                                values: T,
                                respondentValidationPayload: X,
                                enrichmentMetadata: q,
                                stageBlockRef: Ze
                            });
                            if (Jt.answers) {
                                var Xn = JSON.stringify(Jt);
                                if (Xn !== pe) return pe = Xn, (0, be.bE)(gt, Jt)
                            }
                        });
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }();

                function* Je() {
                    yield(0, i.p8)(b.pu, ne)
                }

                function* ne() {
                    var e = yield(0, i.Lt)(Dr._7);
                    e || (yield(0, i.s)(b.eb));
                    var t = yield(0, i.Lt)(ia.BM), n = yield(0, i.Lt)(De.eM), a = yield(0, i.Lt)(x.kc), v = yield(0, i.Lt)(Dr.lX), T = yield(0, i.Lt)(Dr.D6), k = yield(0, i.T1)(Ai.Y7), X = yield(0, i.Lt)(ia.Dd), q = yield(0, i.T1)(Q.R), Ze = yield(0, i.T1)(Qe, {
                        formId: n,
                        landingId: v,
                        landingAt: T,
                        values: t,
                        featureFlags: a,
                        respondentValidationPayload: k,
                        enrichmentMetadata: q,
                        stageBlockRef: X == null ? void 0 : X.fieldRef
                    });
                    return yield(0, i.T1)(Ai.FH), Ze
                }
                var mt = r(99501),
                    pt = r(7280);

                function* dt(e) {
                    var t = yield(0, i.Lt)(De.eM), n = yield(0, i.Lt)(Dr.oR), a = yield(0, i.Lt)(He.fF);
                    yield(0, i.yJ)((0, mt.L3)()), yield(0, i.yJ)((0, pt.IH)(a.ref)), typeof e == "function" && (yield(0, i.T1)(e, t, n))
                }
                var ct = {
                        prod: "tfprod",
                        dev: "tfdev"
                    },
                    lt = ["localhost", "0.0.0.0"],
                    yt = () => {
                        var e = window.location.hostname.split("."),
                            t = e.lastIndexOf("typeform"),
                            n = e.slice(0, t);
                        return n.length > 1 ? n[n.length - 1] === "tfdev" ? n[n.length - 2] : n[n.length - 1] : null
                    },
                    Ct = () => lt.includes(window.location.hostname),
                    ht = () => !!yt(),
                    fr = () => Ct() || ht() ? ct.dev : ct.prod;
                const st = fr;
                var zt = r(18097);

                function* ln(e, t) {
                    for (;;) {
                        var n = yield(0, i.s)(e);
                        yield(0, i.T1)(t, n.payload)
                    }
                }

                function* xr(e, t) {
                    yield(0, i.cH)(ln, e, t)
                }
                var sn = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e),
                    Dn = e => {
                        throw TypeError(e)
                    },
                    zn = function(e, t) {
                        this[0] = e, this[1] = t
                    },
                    Wt = e => {
                        var t = e[sn("asyncIterator")],
                            n = !1,
                            a, v = {};
                        return t == null ? (t = e[sn("iterator")](), a = T => v[T] = k => t[T](k)) : (t = t.call(e), a = T => v[T] = k => {
                            if (n) {
                                if (n = !1, T === "throw") throw k;
                                return k
                            }
                            return n = !0, {
                                done: !1,
                                value: new zn(new Promise(X => {
                                    var q = t[T](k);
                                    q instanceof Object || Dn("Object expected"), X(q)
                                }), 1)
                            }
                        }), v[sn("iterator")] = () => v, a("next"), "throw" in t ? a("throw") : v.throw = T => {
                            throw T
                        }, "return" in t && a("return"), v
                    },
                    Xr = "renderer",
                    kn = {
                        init: () => {
                            console.group("Datadog Browser Logs"), console.log("initialised"), console.groupEnd()
                        },
                        addLoggerGlobalContext: (e, t) => {
                            console.group("Datadog Browser Logs - addLoggerGlobalContext"), console.log("".concat(e, ": ").concat(t)), console.groupEnd()
                        },
                        logger: {
                            info: e => {
                                console.group("Datadog Browser Logs - logger.info"), console.log(e), console.groupEnd()
                            },
                            error: e => {
                                console.group("Datadog Browser Logs - logger.error"), console.log(e), console.groupEnd()
                            }
                        }
                    },
                    xn = {
                        init: () => {
                            console.group("Datadog RUM - init"), console.log("initialised"), console.groupEnd()
                        },
                        setGlobalContextProperty: (e, t) => {
                            console.group("Datadog RUM - setGlobalContextProperty"), console.log("".concat(e, ": ").concat(t)), console.groupEnd()
                        },
                        addAction: e => {
                            console.group("Datadog RUM - addAction"), console.log(e), console.groupEnd()
                        }
                    },
                    mr = () => window.DD_LOGS,
                    _r = () => window.DD_RUM;

                function Gr() {
                    var e = _r();
                    e && e.init({
                        applicationId: "8ef45d76-7592-4725-a010-baff27b2bb06",
                        clientToken: "pub7cc96b2757af4310c9398eee0d90d9a1",
                        service: Xr,
                        env: st(),
                        version: window.rendererReleaseVersion,
                        sampleRate: 100,
                        premiumSampleRate: 0,
                        useSecureSessionCookie: !0
                    })
                }

                function hn() {
                    var e = mr();
                    e && e.init({
                        clientToken: "pub7cc96b2757af4310c9398eee0d90d9a1",
                        env: st(),
                        forwardConsoleLogs: ["error"],
                        sampleRate: 100,
                        service: Xr,
                        version: window.rendererReleaseVersion
                    })
                }

                function* Rn() {
                    yield(0, i.T1)(Yn)
                }

                function* Nn() {
                    var e = yield(0, i.Lt)(wt.Rb);
                    e || (yield(0, i.s)(b.FL), yield(0, i.T1)(hn), yield(0, i.T1)(Gr), yield(0, i.T1)(Jn), yield(0, i.T1)(qt), yield(0, i.T1)(ei, Rn), yield* Jr(Wt(xr(b.ZF, fa))), yield* Jr(Wt(xr(b.AL, Qn))), yield* Jr(Wt(xr(b.uX, Na))), yield* Jr(Wt(xr(b.xl, zr))), yield* Jr(Wt(xr(zt.zC, Xe))), yield* Jr(Wt(xr(zt.ge, ma))))
                }

                function* Jn() {
                    var e = _r(),
                        t = mr(),
                        n = yield(0, i.Lt)(De.eM), a = yield(0, i.Lt)(wt.u0), v = yield(0, i.Lt)(wt.af), T = window.innerWidth, k = window.innerHeight, X = "".concat(T, " x ").concat(k), q = yield(0, i.Lt)(on.DN), Ze = yield(0, i.Lt)(on.Tk);
                    t == null || t.addLoggerGlobalContext("isTouch", (0, Ca.CI)()), t == null || t.addLoggerGlobalContext("formUid", n), t == null || t.addLoggerGlobalContext("sessionId", a), t == null || t.addLoggerGlobalContext("planName", v == null ? void 0 : v.planName), t == null || t.addLoggerGlobalContext("viewportSize", X), t == null || t.addLoggerGlobalContext("viewportWidth", T), t == null || t.addLoggerGlobalContext("viewportHeight", k), q && (t == null || t.addLoggerGlobalContext("embeddingMode", Ze)), e == null || e.setGlobalContextProperty("isTouch", (0, Ca.CI)()), e == null || e.setGlobalContextProperty("formUid", n), e == null || e.setGlobalContextProperty("sessionId", a), e == null || e.setGlobalContextProperty("planName", v == null ? void 0 : v.planName), e == null || e.setGlobalContextProperty("viewportWidth", T), e == null || e.setGlobalContextProperty("viewportHeight", k), e == null || e.setGlobalContextProperty("viewportSize", X), q && (e == null || e.setGlobalContextProperty("embeddingMode", Ze))
                }

                function Yn() {
                    var e = _r(),
                        t = mr();
                    t == null || t.logger.info("startConversation"), e == null || e.addAction("startConversation")
                }

                function fa() {
                    var e = _r(),
                        t = mr();
                    t == null || t.logger.info("conversationSubmitted"), e == null || e.addAction("conversationSubmitted")
                }

                function zr() {
                    var e = _r(),
                        t = mr();
                    t == null || t.logger.info("submitRequest"), e == null || e.addAction("submitRequest")
                }

                function qt() {
                    var e = _r(),
                        t = mr();
                    t == null || t.logger.info("visit"), e == null || e.addAction("visit")
                }

                function Qn(e) {
                    var {
                        errorCode: t,
                        errorDescription: n,
                        errorDetails: a
                    } = e;
                    if (!(0, In.nz)({
                            code: t,
                            details: a
                        }) && !(0, In.pp)({
                            code: t,
                            details: a
                        })) {
                        var v = _r(),
                            T = mr();
                        T == null || T.logger.error("submitFailed", {
                            errorCode: t,
                            errorDescription: n,
                            errorDetails: JSON.stringify(a)
                        }), v == null || v.addAction("submitFailed", {
                            errorCode: t,
                            errorDescription: n,
                            errorDetails: JSON.stringify(a)
                        })
                    }
                }

                function Na(e) {
                    var {
                        errorCode: t
                    } = e, n = _r(), a = mr();
                    a == null || a.logger.info("submitRetry", {
                        errorCode: t
                    }), n == null || n.addAction("submitRetry", {
                        errorCode: t
                    })
                }

                function ma(e) {
                    var {
                        error: t,
                        latency: n
                    } = e, a = mr();
                    a == null || a.logger.error("leadEnrichmentError", {
                        errorName: t instanceof Error ? t.name : t,
                        errorDescription: t instanceof Error ? t.message : null,
                        latency: n
                    }), a == null || a.logger.info("leadEnrichmentCall", {
                        latency: n,
                        success: !1
                    })
                }

                function Xe(e) {
                    var {
                        latency: t
                    } = e, n = mr();
                    n == null || n.logger.info("leadEnrichmentCall", {
                        latency: t,
                        success: !0
                    })
                }
                var Fa = r(38137);

                function* ai() {
                    yield(0, i.s)(b.FL), yield(0, i.cH)(Qi)
                }

                function* Qi() {
                    var e = yield(0, i.Lt)(De.eM), t = yield(0, i.Lt)(wt.u0), n = navigator.userAgent, a = yield(0, i.Lt)(so.G), v = a ? Object.keys(a).map(gt => ({
                        test_id: gt,
                        variant_label: a[gt]
                    })) : [];
                    try {
                        var T = {
                                formId: e,
                                responseId: t,
                                userAgent: n,
                                runningExperiments: JSON.stringify(v)
                            },
                            k = new Fa.J(T, {
                                endpoint: "".concat(ye.K.apiHost, "/forms/").concat(e, "/").concat(ye.K.endpoints.insights)
                            });
                        yield(0, i.jP)(b.j1, function*() {
                            yield(0, i.T1)([k, k.onClose])
                        });
                        var X = yield(0, i.Lt)(Z.qr);
                        X && (yield(0, i.T1)([k, k.onActivateBlock], {
                            id: "WelcomeScreenID"
                        }), yield(0, i.s)(b.HG));
                        var q = yield(0, i.Lt)(Z.DZ), Ze = yield(0, i.Lt)(Z.GH, q);
                        Ze && (yield(0, i.T1)([k, k.onActivateBlock], {
                            id: Ze.id
                        })), yield(0, i.jP)(b.Sl, function*(gt) {
                            var er = yield(0, i.Lt)(Z.GH, gt.payload.ref);
                            er && (yield(0, i.T1)([k, k.onActivateBlock], {
                                id: er.id
                            }))
                        }), yield(0, i.jP)(b.ZF, function*() {
                            yield(0, i.T1)([k, k.onSubmit])
                        })
                    } catch (gt) {
                        console.error(gt)
                    }
                }
                var ii = r(70606),
                    wi = ["formId", "value"];

                function Ci(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(e, v).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function Ha(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t] != null ? arguments[t] : {};
                        t % 2 ? Ci(Object(n), !0).forEach(function(a) {
                            Xi(e, a, n[a])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ci(Object(n)).forEach(function(a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                        })
                    }
                    return e
                }

                function Xi(e, t, n) {
                    return (t = Ua(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function Ua(e) {
                    var t = pa(e, "string");
                    return typeof t == "symbol" ? t : t + ""
                }

                function pa(e, t) {
                    if (typeof e != "object" || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (n !== void 0) {
                        var a = n.call(e, t || "default");
                        if (typeof a != "object") return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (t === "string" ? String : Number)(e)
                }

                function qi(e, t) {
                    if (e == null) return {};
                    var n, a, v = Ot(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var T = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < T.length; a++) n = T[a], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (v[n] = e[n])
                    }
                    return v
                }

                function Ot(e, t) {
                    if (e == null) return {};
                    var n = {};
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (t.indexOf(a) !== -1) continue;
                            n[a] = e[a]
                        }
                    return n
                }
                var pr = {
                    sendEvent: (e, t) => {
                        var n, a, {
                                formId: v,
                                value: T
                            } = t,
                            k = qi(t, wi);
                        (n = (a = window).gtag) === null || n === void 0 || n.call(a, "event", e, Ha({
                            event_category: v,
                            event_label: T,
                            typeform_id: v,
                            value: T
                        }, k))
                    },
                    events: e => {
                        switch (e) {
                            case b.rw:
                                return {
                                    eventName: "TypeformQuestionPassed",
                                    mapStateToEventData: t => {
                                        var n = (0, Z.DZ)(t),
                                            a = (0, Z.GH)(t, n);
                                        return {
                                            formId: (0, De.eM)(t),
                                            value: a.title,
                                            typeform_question_title: a.title
                                        }
                                    },
                                    shouldSendEvent: t => {
                                        var n = (0, Z.DZ)(t),
                                            a = (0, Z.GH)(t, n);
                                        return !!a && a.type !== Mn.UM && a.type !== Mn.zF
                                    }
                                };
                            case b.ZF:
                                return {
                                    eventName: "TypeformSubmit",
                                    mapStateToEventData: t => ({
                                        formId: (0, De.eM)(t),
                                        value: (0, De.$T)(t),
                                        typeform_name: (0, De.$T)(t)
                                    })
                                };
                            default:
                                return !1
                        }
                    }
                };
                const Fn = pr;
                var ya = !0,
                    eo = {
                        sendEvent: (e, t) => {
                            var n, a;
                            (n = (a = window).fbq) === null || n === void 0 || n.call(a, "trackSingleCustom", t.pixelId, e)
                        },
                        events: e => {
                            switch (e) {
                                case b.Sl:
                                case b.rw:
                                case b.HG:
                                    return {
                                        eventName: "TypeformFirstInteraction",
                                        mapStateToEventData: t => ({
                                            pixelId: (0, wt.e8)(t)
                                        }),
                                        shouldSendEvent: to
                                    };
                                case b.ZF:
                                    return {
                                        eventName: "TypeformSubmit",
                                        mapStateToEventData: t => ({
                                            pixelId: (0, wt.e8)(t)
                                        })
                                    };
                                default:
                                    return !1
                            }
                        }
                    };

                function to() {
                    return ya ? (ya = !1, !0) : !1
                }
                const ro = eo;
                var Li = !0,
                    Al = {
                        sendEvent: e => {
                            var t;
                            (t = window.googleTagManager) === null || t === void 0 || t.push({
                                event: e
                            })
                        },
                        events: e => {
                            switch (e) {
                                case b.Sl:
                                case b.rw:
                                case b.HG:
                                    return {
                                        eventName: "TypeformFirstInteraction",
                                        shouldSendEvent: jl
                                    };
                                case b.ZF:
                                    return {
                                        eventName: "TypeformSubmit"
                                    };
                                default:
                                    return !1
                            }
                        }
                    };

                function jl() {
                    return Li ? (Li = !1, !0) : !1
                }
                const wl = Al;
                var Do = {
                    [ii.BG]: Fn,
                    [ii.cm]: ro,
                    [ii.DL]: wl
                };
                const Ii = Do;

                function* Cl() {
                    var e = yield(0, i.Lt)(wt.AS);
                    yield(0, i.Zy)(function*() {
                        var t = yield(0, i.s)(b.ZF);
                        yield(0, i.T1)(Di, t, Ii, e)
                    }), yield(0, i.Zy)(function*() {
                        for (;;) {
                            var t = yield(0, i.s)(b.rw);
                            yield(0, i.T1)(Di, t, Ii, e)
                        }
                    }), yield(0, i.Zy)(function*() {
                        var t = yield(0, i.s)(b.HG);
                        yield(0, i.T1)(Di, t, Ii, e)
                    }), yield(0, i.Zy)(function*() {
                        for (;;) {
                            var t = yield(0, i.s)(b.Sl);
                            yield(0, i.T1)(Di, t, Ii, e)
                        }
                    })
                }

                function* Di(e, t, n) {
                    var a = yield(0, i.Lt)($n.UL);
                    if (!a) {
                        var v = n.filter(T => t[T] && !!t[T].events(e.type));
                        yield(0, i.Q7)(v.map(T => (0, i.T1)(Ll, t[T], e)))
                    }
                }

                function* Ll(e, t) {
                    var n = e.events(t.type),
                        a = n.shouldSendEvent ? yield(0, i.Lt)(n.shouldSendEvent): !0;
                    if (a) {
                        var v = n.mapStateToEventData ? yield(0, i.Lt)(n.mapStateToEventData): void 0;
                        yield(0, i.T1)(e.sendEvent, n.eventName, v)
                    }
                }
                var xo = r(71578),
                    Il = r(73207),
                    no = r(83634),
                    oi = r(72631),
                    Dl = r(20569),
                    Ro = r(78607),
                    ao = r(76249);

                function* xl() {
                    yield(0, i.jP)(b.F4, Rl)
                }

                function* Rl() {
                    var e = yield(0, i.Lt)(Z.DZ), t = yield(0, i.Lt)(Z.ke, e), n = yield(0, i.Lt)(Z.GH, e), a = yield(0, i.Lt)(Z.pe, e), v = yield(0, i.T1)(Z.gW, a);
                    if (t && n && !v && (0, no.hs)(n.type)) {
                        var T = yield(0, i.Lt)(Sr.m_, e), k = (0, oi.g)(n, window.location.hash), X = (0, Dl._)(n, k);
                        X && k !== null && k !== void 0 && k.length && (yield(0, ao.lv)(), yield(0, i.yJ)((0, Ro.fW)(n.ref, k, {}, {
                            isFromPrefilledAnswer: !0
                        })), T && (yield(0, ao.c2)(), yield(0, i.yJ)((0, Ro.Mw)(n.ref, {}, {
                            source: "answer_url",
                            isFromPrefilledAnswer: !0
                        }))))
                    }
                }

                function* Bl() {
                    yield(0, i.cH)(Ml)
                }

                function* Ml() {
                    var e = String(yield(0, i.Lt)(De.eM));
                    yield(0, i.yJ)((0, An.OS)());
                    try {
                        var t = yield(0, i.T1)(be.y, e);
                        return yield(0, i.yJ)((0, An.W_)(t))
                    } catch (n) {
                        yield(0, i.yJ)((0, An.C7)())
                    }
                }
                var Bo = r(54959);

                function* kl() {
                    yield(0, i.jP)([b.d], yr)
                }

                function* yr() {
                    var e = yield(0, i.Lt)(Z.aw);
                    e && (yield(0, i.yJ)((0, Bo.QH)())), yield(0, i.yJ)((0, Bo.p9)())
                }
                var ga = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e),
                    Nl = e => {
                        throw TypeError(e)
                    },
                    Yl = function(e, t) {
                        this[0] = e, this[1] = t
                    },
                    Fl = e => {
                        var t = e[ga("asyncIterator")],
                            n = !1,
                            a, v = {};
                        return t == null ? (t = e[ga("iterator")](), a = T => v[T] = k => t[T](k)) : (t = t.call(e), a = T => v[T] = k => {
                            if (n) {
                                if (n = !1, T === "throw") throw k;
                                return k
                            }
                            return n = !0, {
                                done: !1,
                                value: new Yl(new Promise(X => {
                                    var q = t[T](k);
                                    q instanceof Object || Nl("Object expected"), X(q)
                                }), 1)
                            }
                        }), v[ga("iterator")] = () => v, a("next"), "throw" in t ? a("throw") : v.throw = T => {
                            throw T
                        }, "return" in t && a("return"), v
                    };

                function* Ql(e) {
                    var t = yield(0, i.Lt)(De.jq), n = yield(0, i.Lt)(De.$c), a = yield(0, i.Lt)(De.jJ), v = yield(0, i.Lt)(De.Dc);
                    v && (yield(0, i.cH)(pl), yield(0, i.cH)(Yo)), n || t ? yield* Jr(Fl(ql(e))): a ? yield* Jr(Fl((0, Il.Ay)())): yield* Jr(Fl(Xl()))
                }

                function* Xl() {
                    var e = yield(0, i.Lt)(De.Dc), t = yield(0, i.Lt)($n.fD);
                    yield(0, i.Zy)(Co.Kb), t && (yield(0, i.cH)(Ji)), e && (yield(0, i.cH)(Cl), yield(0, i.cH)(Nn), yield(0, i.cH)(ai)), yield(0, i.T1)(Ai.hy);
                    var n = yield(0, i.Lt)(De.r6);
                    n && (yield(0, i.cH)(Bl)), yield(0, i.cH)(tt.r, $.d6), yield(0, i.Zy)(xo.Ay), yield(0, i.Zy)(kl), yield(0, i.Zy)(yl.A), yield(0, i.Zy)(wo.w), yield(0, i.Zy)(function*() {
                        yield(0, i.T1)(ei, In.jP)
                    }), yield(0, i.cH)(xl);
                    var a = yield(0, i.Lt)(gl.wF);
                    a ? (yield(0, i.Q7)([(0, i.p8)(b.xl, Ai.Ey)]), yield(0, i.Q7)([(0, i.p8)(b.f5, In.Ig)])) : yield(0, i.Q7)([(0, i.p8)(b.xl, In.Ig)]), yield(0, i.cH)(d), yield(0, i.cH)(Je)
                }

                function* ql(e) {
                    yield(0, i.cH)(tt.r), yield(0, i.Zy)(xo.Ay);
                    var t = yield(0, i.Lt)(De.eM);
                    yield(0, i.Zy)(function*() {
                        yield(0, i.T1)(ei, () => {
                            bl.A4({
                                formId: t
                            })
                        })
                    }), yield(0, i.Q7)([(0, i.jP)(b.xl, dt, e)])
                }

                function es(e, t) {
                    var n = (0, f.Ay)({
                            onError: T => {
                                setTimeout(() => {
                                    throw T
                                }, 0)
                            }
                        }),
                        a = [p.A, n],
                        v = (0, l.U1)({
                            reducer: Wa,
                            middleware: a,
                            preloadedState: e
                        });
                    return n.run(Ql, t), v
                }
            },
            42045: (ve, R, r) => {
                r.d(R, {
                    Ay: () => w,
                    bM: () => h,
                    ue: () => f
                });
                var l = r(71311),
                    f = {
                        isActive: !1
                    },
                    p = (0, l.Z0)({
                        name: "portalState",
                        initialState: f,
                        reducers: {
                            setIsPortalActive: (B, D) => {
                                B.isActive = D.payload
                            }
                        }
                    }),
                    {
                        setIsPortalActive: h
                    } = p.actions;
                const w = p.reducer
            },
            44263: (ve, R, r) => {
                r.d(R, {
                    U: () => p,
                    r: () => w
                });
                var l = r(57036),
                    f = r(90112),
                    p = "FORM_LOADED_ACTION";

                function h() {
                    return (0, f.Od)(B => (document.fonts != null ? document.fonts.ready.then(() => B(!0)).then(() => B(f.Kp)) : B(!0), () => {}))
                }

                function* w() {
                    for (var B = h(), D = arguments.length, O = new Array(D), y = 0; y < D; y++) O[y] = arguments[y];
                    yield(0, l.Q7)([(0, l.s)(B), ...O.map(m => (0, l.s)(m))]), yield(0, l.yJ)({
                        type: p
                    })
                }
            },
            46385: (ve, R, r) => {
                r.d(R, {
                    A: () => m
                });
                var l = r(7897),
                    f = r(25734),
                    p = r(17771),
                    h = r(4784),
                    w = r(46651),
                    B = ["errorMessageRef", "dataQa"];

                function D(u, S) {
                    var N = Object.keys(u);
                    if (Object.getOwnPropertySymbols) {
                        var C = Object.getOwnPropertySymbols(u);
                        S && (C = C.filter(function(W) {
                            return Object.getOwnPropertyDescriptor(u, W).enumerable
                        })), N.push.apply(N, C)
                    }
                    return N
                }

                function O(u) {
                    for (var S = 1; S < arguments.length; S++) {
                        var N = arguments[S] != null ? arguments[S] : {};
                        S % 2 ? D(Object(N), !0).forEach(function(C) {
                            (0, l.A)(u, C, N[C])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(N)) : D(Object(N)).forEach(function(C) {
                            Object.defineProperty(u, C, Object.getOwnPropertyDescriptor(N, C))
                        })
                    }
                    return u
                }
                var y = u => {
                    var {
                        errorMessageRef: S,
                        dataQa: N
                    } = u, C = (0, f.A)(u, B);
                    return (0, w.jsx)(h.A, O({
                        type: h.M.error,
                        ref: S,
                        dataQa: N,
                        "data-qa": "".concat(N, "-error-wrapper")
                    }, C))
                };
                const m = y
            },
            46618: (ve, R, r) => {
                r.d(R, {
                    Ay: () => m,
                    T1: () => D,
                    Uh: () => y,
                    gc: () => B,
                    jq: () => O,
                    wU: () => w
                });
                var l = r(71311),
                    f = r(90801),
                    p = {
                        ui: {},
                        tracking: {
                            mediaProgress: 0
                        }
                    },
                    h = (0, l.Z0)({
                        name: "media",
                        initialState: p,
                        reducers: {
                            setMediaCollapsed: (u, S) => {
                                var {
                                    ref: N
                                } = S.payload;
                                u.ui[N] = {
                                    collapsed: !0
                                }
                            },
                            setMediaProgress: (u, S) => {
                                var {
                                    mediaProgress: N
                                } = S.payload;
                                u.tracking.mediaProgress = N || 0
                            }
                        }
                    }),
                    {
                        setMediaCollapsed: w,
                        setMediaProgress: B
                    } = h.actions;

                function D(u) {
                    return {
                        type: f.EZ,
                        payload: {
                            ref: u
                        }
                    }
                }

                function O(u) {
                    return {
                        type: f.EZ,
                        payload: {
                            ref: u,
                            hasClickedAfterAutoplay: !0
                        }
                    }
                }

                function y(u, S, N) {
                    return {
                        type: f.cq,
                        payload: {
                            ref: u,
                            isSuccess: S,
                            withAudio: N
                        }
                    }
                }
                const m = h.reducer
            },
            46768: (ve, R, r) => {
                r.d(R, {
                    n: () => h
                });
                var l = r(16380),
                    f = r(13332),
                    p = r(55645),
                    h = w => {
                        var B = (0, l.G)(f.jq),
                            D = (0, l.G)(f.eM),
                            O = (0, l.G)(m => (0, p.GH)(m, w)),
                            y = O == null ? void 0 : O.id;
                        return {
                            custom_1: D,
                            player_name: B ? "renderer_video_question_live_preview" : "renderer_video_question",
                            video_title: "".concat(D, "_").concat(y)
                        }
                    }
            },
            48081: (ve, R, r) => {
                r.d(R, {
                    A: () => p
                });
                var l = r(17771),
                    f = h => {
                        var [w, B] = (0, l.useState)(!1), D = (0, l.useRef)();

                        function O() {
                            clearTimeout(D.current)
                        }

                        function y(m) {
                            B(m), O(), m && (D.current = setTimeout(() => B(!1), h))
                        }
                        return [w, y, O]
                    };
                const p = f
            },
            52833: (ve, R, r) => {
                r.d(R, {
                    A: () => B
                });
                var l = r(57036),
                    f = r(90801),
                    p = r(13332),
                    h = r(43267);

                function* w() {
                    yield(0, l.s)(f.ZF);
                    var D = yield(0, l.Lt)(p.eM);
                    yield(0, l.T1)(h.i, D)
                }

                function* B() {
                    yield(0, l.Zy)(w)
                }
            },
            55623: (ve, R, r) => {
                r.r(R), r.d(R, {
                    buildAnswersPayload: () => se,
                    default: () => ae,
                    getHiddenValues: () => b,
                    getIntegrationsMetadata: () => M,
                    getVariables: () => A,
                    replaceHiddenValue: () => I
                });
                var l = r(58756),
                    f = r(43555),
                    p = r(20633),
                    h = r(90281),
                    w = r(92765),
                    B = r(30893),
                    D = r(29414);

                function O(H, Y) {
                    var re = Object.keys(H);
                    if (Object.getOwnPropertySymbols) {
                        var oe = Object.getOwnPropertySymbols(H);
                        Y && (oe = oe.filter(function(fe) {
                            return Object.getOwnPropertyDescriptor(H, fe).enumerable
                        })), re.push.apply(re, oe)
                    }
                    return re
                }

                function y(H) {
                    for (var Y = 1; Y < arguments.length; Y++) {
                        var re = arguments[Y] != null ? arguments[Y] : {};
                        Y % 2 ? O(Object(re), !0).forEach(function(oe) {
                            m(H, oe, re[oe])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(re)) : O(Object(re)).forEach(function(oe) {
                            Object.defineProperty(H, oe, Object.getOwnPropertyDescriptor(re, oe))
                        })
                    }
                    return H
                }

                function m(H, Y, re) {
                    return (Y = u(Y)) in H ? Object.defineProperty(H, Y, {
                        value: re,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : H[Y] = re, H
                }

                function u(H) {
                    var Y = S(H, "string");
                    return typeof Y == "symbol" ? Y : Y + ""
                }

                function S(H, Y) {
                    if (typeof H != "object" || !H) return H;
                    var re = H[Symbol.toPrimitive];
                    if (re !== void 0) {
                        var oe = re.call(H, Y || "default");
                        if (typeof oe != "object") return oe;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (Y === "string" ? String : Number)(H)
                }

                function N(H, Y, re, oe, fe, Ae, Ne) {
                    try {
                        var We = H[Ae](Ne),
                            qe = We.value
                    } catch (Ie) {
                        return void re(Ie)
                    }
                    We.done ? Y(qe) : Promise.resolve(qe).then(oe, fe)
                }

                function C(H) {
                    return function() {
                        var Y = this,
                            re = arguments;
                        return new Promise(function(oe, fe) {
                            var Ae = H.apply(Y, re);

                            function Ne(qe) {
                                N(Ae, oe, fe, Ne, We, "next", qe)
                            }

                            function We(qe) {
                                N(Ae, oe, fe, Ne, We, "throw", qe)
                            }
                            Ne(void 0)
                        })
                    }
                }
                var W = {
                        [h.vH]: "date",
                        [h.a0]: "text",
                        [h.vp]: "file_name",
                        [h.YA]: "boolean",
                        [h.VF]: "text",
                        [h.zl]: "choices",
                        [h.uk]: "number",
                        [h.QR]: "number",
                        [h.DX]: "choices",
                        [h._I]: "number",
                        [h.IY]: "url",
                        [h.mx]: "boolean",
                        [h.F_]: "payment",
                        [h.nz]: "choices"
                    },
                    L = (H, Y) => {
                        var [re] = Y, oe = H.properties.choices.find(Ae => {
                            var Ne = D.A.getOriginalLanguageChoiceLabelById(H.id, Ae.id);
                            return Ae.ref === re || Ne === re || Ae.label === re
                        }), fe = D.A.getOriginalLanguageChoiceLabelById(H.id, oe.id);
                        return fe != null ? fe : oe.label
                    };

                function te(H) {
                    var [Y, re, oe] = H.split("-"), fe = "".concat(Y.padStart(4, "0"), "-").concat(re.padStart(2, "0"), "-").concat(oe.padStart(2, "0"));
                    return new Date(fe).toISOString()
                }

                function K(H, Y, re, oe) {
                    return {
                        field: {
                            id: H,
                            type: Y
                        },
                        type: re,
                        [re]: oe
                    }
                }

                function E(H, Y, re, oe) {
                    return ee.apply(this, arguments)
                }

                function ee() {
                    return ee = C(function*(H, Y, re, oe) {
                        var {
                            block: fe,
                            answer: Ae
                        } = H, Ne = Ae !== void 0 ? Ae[0] : "", We = W[fe.type], qe = (Mt, $) => {
                            if (!(!Mt || !$)) {
                                var tt = D.A.getOriginalLanguageChoiceLabelById(Mt, $);
                                return tt
                            }
                        }, Ie = (0, w.t)(fe.definition, Ae, {
                            featureFlags: oe,
                            getOriginalLanguageChoiceLabel: qe
                        });
                        if (Ie) return Ie;
                        switch (fe.type) {
                            case h.a0:
                                Ne = L(fe, Ae);
                                break;
                            case h.vH:
                                Ne = te(Ne);
                                break;
                            case h.vp:
                                Ne = Ne.s3Filename;
                                break;
                            case h.F_:
                                Ne = y({
                                    amount: Y,
                                    currency: fe.currency,
                                    name: Ne.cardholdersName
                                }, re);
                                break
                        }
                        return K(fe.id, fe.type, We, Ne)
                    }), ee.apply(this, arguments)
                }
                var ue = H => (H == null ? void 0 : H.type) !== void 0,
                    G = (H, Y, re, oe) => Promise.all(H.map(fe => E(fe, Y, re, oe))),
                    se = function() {
                        var H = C(function*(Y, re, oe, fe) {
                            var Ae = yield G(Y, re, oe, fe);
                            return (0, l.A)(Ae).filter(ue)
                        });
                        return function(re, oe, fe, Ae) {
                            return H.apply(this, arguments)
                        }
                    }();

                function b(H) {
                    return Object.keys(H).map(Y => ({
                        key: Y,
                        value: H[Y]
                    }))
                }

                function Ee(H, Y) {
                    var re = H[Y.variable],
                        oe = Y.choices.find(fe => fe.ref === re);
                    if (!oe) throw new B.A("MISSING_WINNING_OUTCOME", "Could not find matching winning outcome", "winningOutcomeRef:  ".concat(H[Y.variable]));
                    return oe
                }

                function A(H, Y) {
                    var re = (0, f.A)(["price"], H);
                    return Object.keys(re).map(oe => {
                        if (Y && oe === Y.variable) {
                            var fe = Ee(H, Y);
                            return {
                                key: oe,
                                type: "outcome_id",
                                outcome_id: fe.id
                            }
                        }
                        var Ae = H[oe],
                            Ne = typeof Ae == "string" ? "text" : "number";
                        return {
                            key: oe,
                            type: Ne,
                            [Ne]: Ae
                        }
                    })
                }

                function Me(H, Y) {
                    if (!Y) return null;
                    var re = Ee(H, Y);
                    return {
                        id: re.id,
                        title: re.title
                    }
                }

                function M() {
                    var H = p.A.get("hubspotutk") || null;
                    return H === null ? null : {
                        hubspot: {
                            utk: H,
                            page_name: document.title,
                            page_url: window.location.href
                        }
                    }
                }

                function I(H, Y, re) {
                    var oe = re.find(fe => fe.key === H);
                    oe && (oe.value = Y)
                }

                function P(H) {
                    return g.apply(this, arguments)
                }

                function g() {
                    return g = C(function*(H) {
                        var {
                            formId: Y,
                            landingAt: re = "",
                            landingId: oe,
                            payment: fe,
                            values: {
                                answers: Ae = [],
                                hidden: Ne = {},
                                variables: We = {}
                            } = {},
                            outcome: qe,
                            featureFlags: Ie,
                            thankYouScreenRef: Mt = "default_tys",
                            respondentValidationPayload: $,
                            enrichmentMetadata: tt
                        } = H, bt = b(Ne), et = A(We, qe), vt = Me(We, qe), Ht = yield se(Ae, We.price, fe, Ie), kt = M();
                        return kt != null && kt.hubspot && (I("hubspot_utk", kt.hubspot.utk, bt), I("hubspot_page_name", kt.hubspot.page_name, bt), I("hubspot_page_url", kt.hubspot.page_url, bt)), y(y(y(y(y(y(y({
                            signature: oe,
                            form_id: Y,
                            landed_at: parseInt(re)
                        }, bt.length ? {
                            hidden: bt
                        } : null), et.length ? {
                            variables: et
                        } : null), Ht.length ? {
                            answers: Ht
                        } : null), kt ? {
                            integrations_metadata: kt
                        } : null), vt ? {
                            outcome: vt
                        } : null), {}, {
                            thankyou_screen_ref: Mt
                        }, $ != null ? $ : null), tt != null ? tt : null)
                    }), g.apply(this, arguments)
                }
                const ae = P
            },
            58529: (ve, R, r) => {
                r.r(R), r.d(R, {
                    default: () => N
                });
                var l = r(17771),
                    f = r(28365),
                    p = r.n(f),
                    h = r(94567),
                    w = r(87559),
                    B = r(80508),
                    D = r(4477),
                    O = r(50060),
                    y = r(73207),
                    m;

                function u(C, W) {
                    return W || (W = C.slice(0)), Object.freeze(Object.defineProperties(C, {
                        raw: {
                            value: Object.freeze(W)
                        }
                    }))
                }
                var S = h.Ay.div.withConfig({
                    displayName: "offline-mode-badge__Root",
                    componentId: "sc-ti9iri-0"
                })(m || (m = u([`
  position: fixed;
  inset-block-start: 8px;
  inset-inline-end: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: `, `;
  color: `, `;
  border-radius: 3px;
  height: 32px;
  width: 32px;
`])), C => C.backgroundColor, C => C.contentColor);

                function N(C) {
                    var {
                        theme: W
                    } = C, [L, te] = (0, l.useState)(window.navigator.onLine), [K, E] = (0, l.useState)((0, y.FP)().length);
                    return (0, l.useEffect)(() => {
                        var ee = () => {
                            te(window.navigator.onLine)
                        };
                        return window.addEventListener("online", ee), window.addEventListener("offline", ee), () => {
                            window.removeEventListener("online", ee), window.removeEventListener("offline", ee)
                        }
                    }, []), (0, l.useEffect)(() => {
                        var ee = setInterval(() => {
                            E((0, y.FP)().length)
                        }, 1e3);
                        return () => {
                            clearInterval(ee)
                        }
                    }, []), window.navigator.serviceWorker.controller ? K === 0 ? l.createElement(S, {
                        backgroundColor: W.colors.button,
                        contentColor: (0, w.v2)(W.colors.button)
                    }, l.createElement(D.A, {
                        svg: B.A,
                        color: (0, w.v2)(W.colors.button)
                    })) : L && K > 0 ? l.createElement(S, {
                        backgroundColor: W.colors.button,
                        contentColor: (0, w.v2)(W.colors.button)
                    }, l.createElement(O.A, {
                        color: (0, w.v2)(W.colors.button)
                    })) : l.createElement(S, {
                        backgroundColor: W.colors.button,
                        contentColor: (0, w.v2)(W.colors.button)
                    }, K) : null
                }
                N.propTypes = {
                    theme: p().object
                }
            },
            61977: (ve, R, r) => {
                r.d(R, {
                    Ay: () => B,
                    _K: () => h,
                    tx: () => w
                });
                var l = r(71311),
                    f = {
                        showBrandHeader: !0
                    },
                    p = (0, l.Z0)({
                        name: "layout",
                        initialState: f,
                        reducers: {
                            showBrandHeader: D => {
                                D.showBrandHeader = !0
                            },
                            hideBrandHeader: D => {
                                D.showBrandHeader = !1
                            }
                        }
                    }),
                    {
                        showBrandHeader: h,
                        hideBrandHeader: w
                    } = p.actions;
                const B = p.reducer
            },
            65533: (ve, R, r) => {
                r.d(R, {
                    A: () => p
                });
                var l = r(1907),
                    f = r(57396);
                const p = (0, l.Nc)(null, () => {}, f.yx)
            },
            70315: (ve, R, r) => {
                r.d(R, {
                    A: () => E
                });
                var l = r(13766),
                    f = r(17771),
                    p = r(94567),
                    h = r(82744),
                    w = r.n(h),
                    B = r(57396),
                    D = r(57773),
                    O = r(20965),
                    y = r(32336),
                    m = r(23890),
                    u = r(46651),
                    S = p.Ay.div.withConfig({
                        displayName: "PlayButtonWrapper",
                        componentId: "sc-__sc-1lc2c65-0"
                    })(["position:absolute;inset-block-start:50%;inset-inline-start:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:1;display:flex;align-items:center;justify-content:flex-start;"]),
                    N = () => {
                        var ee = (0, D.dv)(),
                            ue = ee === y.LO.SMALL ? 50 : 70;
                        return (0, u.jsx)(S, {
                            "data-qa": "play-button",
                            children: (0, u.jsxs)("svg", {
                                width: ue,
                                height: ue,
                                viewBox: "0 0 72 72",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, u.jsx)("g", {
                                    filter: "url(#filter0_d_14938_19529)",
                                    children: (0, u.jsx)("path", {
                                        d: "M17 56.0388V15.9611C17 14.4437 18.6816 13.503 20.0109 14.2767L54.0227 34.0741C55.3177 34.8279 55.3277 36.665 54.0409 37.4322L20.0291 57.7125C18.7002 58.5049 17 57.5655 17 56.0388Z",
                                        fill: "white"
                                    })
                                }), (0, u.jsx)("defs", {
                                    children: (0, u.jsxs)("filter", {
                                        id: "filter0_d_14938_19529",
                                        x: "7",
                                        y: "4",
                                        width: "58",
                                        height: "64",
                                        filterUnits: "userSpaceOnUse",
                                        "color-interpolation-filters": "sRGB",
                                        children: [(0, u.jsx)("feFlood", {
                                            "flood-opacity": "0",
                                            result: "BackgroundImageFix"
                                        }), (0, u.jsx)("feColorMatrix", { in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha"
                                        }), (0, u.jsx)("feOffset", {}), (0, u.jsx)("feGaussianBlur", {
                                            stdDeviation: "5"
                                        }), (0, u.jsx)("feComposite", {
                                            in2: "hardAlpha",
                                            operator: "out"
                                        }), (0, u.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                                        }), (0, u.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "BackgroundImageFix",
                                            result: "effect1_dropShadow_14938_19529"
                                        }), (0, u.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "effect1_dropShadow_14938_19529",
                                            result: "shape"
                                        })]
                                    })
                                })]
                            })
                        })
                    },
                    C = p.Ay.div.withConfig({
                        displayName: "Root",
                        componentId: "sc-__sc-1kl9vof-0"
                    })(["width:", ";", ";pointer-events:", ";height:", ";container-type:inline-size;"], ee => ee.width, ee => ee.isCentered ? "margin: 0 auto;" : "", ee => ee.isVisible ? "auto" : "none", ee => ee.height && "".concat(ee.height)),
                    W = p.Ay.div.withConfig({
                        displayName: "InfoMessageOverlayWrapper",
                        componentId: "sc-__sc-1kl9vof-1"
                    })(["animation:", " 300ms ease-in;position:absolute;bottom:72px;inset-inline-start:50%;transform:translateX(-50%);z-index:", ";"], m.MW.fadeIn.in, y.mh.overlay),
                    L = p.Ay.figure.withConfig({
                        displayName: "VideoWrapper",
                        componentId: "sc-__sc-1kl9vof-2"
                    })(["position:relative;padding-block-end:56.25%;width:100%;height:100%;border-radius:", ";background:", ";margin:0;"], ee => ee.addFancyBorder && "20px", ee => ee.addBackground && "#000000"),
                    te = p.Ay.div.withConfig({
                        displayName: "VideoIframe",
                        componentId: "sc-__sc-1kl9vof-3"
                    })(["position:absolute;width:100%;height:100%;inset-inline-start:0;inset-block-start:0;", ";iframe{width:100%;height:100%;}"], ee => ee.addFancyBorder && "overflow: hidden; border-radius: 20px"),
                    K = ee => {
                        var {
                            addBackground: ue = !0,
                            addFancyBorder: G = !1,
                            addPlayButton: se = !1,
                            cover: b,
                            infoMessageOverlay: Ee,
                            hideCaptionsControl: A = !1,
                            autoplay: Me,
                            thumbnailTime: M,
                            height: I,
                            id: P,
                            isVideoCentered: g,
                            isVisible: ae,
                            onLoad: H = () => {},
                            onEnded: Y,
                            onTimeUpdate: re,
                            onAutoplayFailed: oe,
                            onError: fe,
                            onPlay: Ae,
                            paused: Ne,
                            scale: We = 1,
                            service: qe,
                            playerMetadata: Ie,
                            onHideAction: Mt = "destroy"
                        } = ee, $ = (0, D.dv)(), {
                            t: tt
                        } = (0, B.fN)(), bt = (0, f.useRef)(P), et = (0, f.useRef)(null), vt = (0, f.useRef)(), Ht = (0, f.useRef)(qe), kt = (0, f.useRef)(M), nt = (0, f.useRef)(A), _t = (0, f.useRef)(b), wr = Mt === "destroy", Nr = function() {
                            var Z = (0, l.A)(function*() {
                                var ir, ze;
                                (ir = et.current) === null || ir === void 0 || (ze = ir.destroy) === null || ze === void 0 || ze.call(ir), et.current = null
                            });
                            return function() {
                                return Z.apply(this, arguments)
                            }
                        }();
                        (0, f.useEffect)(() => function() {
                            Nr()
                        }, []), (0, f.useEffect)(() => {
                            if (vt.current) {
                                if (!ae)
                                    if (wr) Nr();
                                    else {
                                        var Z, ir;
                                        (Z = et.current) === null || Z === void 0 || (ir = Z.stop) === null || ir === void 0 || ir.call(Z)
                                    }
                                var ze = () => {
                                    var Fr;
                                    if (Nr(), et.current = w()(vt.current, qe, {
                                            id: P,
                                            cover: b,
                                            hideCaptionsControl: A,
                                            autoplay: Me,
                                            onAutoplayFailed: oe,
                                            onError: fe,
                                            onPlay: Ae,
                                            onEnded: Y,
                                            onTimeUpdate: re,
                                            metadata: Ie,
                                            thumbnailTime: M
                                        }), et != null && (Fr = et.current) !== null && Fr !== void 0 && Fr.onLoad) {
                                        var Et;
                                        et == null || (Et = et.current) === null || Et === void 0 || Et.onLoad().then(H)
                                    }
                                };
                                if (!et.current && (ae || !wr)) ze();
                                else if ((qe !== Ht.current || Me || P !== bt.current || M !== kt.current || A !== nt.current || b !== _t.current) && ae && ze(), _t.current = b, Ht.current = qe, kt.current = M, nt.current = A, bt.current = P, Ne) {
                                    var Zr;
                                    et == null || (Zr = et.current) === null || Zr === void 0 || Zr.pause()
                                }
                            }
                        }, [b, P, Ne, qe, vt, ae, wr, M, A]);
                        var Zt = $ === "lg" || $ === "xl" ? "".concat(We * 100, "%") : "100%";
                        return (0, u.jsx)(C, {
                            isCentered: g,
                            isVisible: !0,
                            width: Zt,
                            height: I,
                            children: (0, u.jsxs)(L, {
                                addBackground: ue,
                                addFancyBorder: G,
                                children: [(0, u.jsx)(O.A, {
                                    as: "figcaption",
                                    children: tt("a11y.video.caption")
                                }), Ee && (0, u.jsx)(W, {
                                    role: "status",
                                    children: Ee
                                }), se && (0, u.jsx)(N, {}), (0, u.jsx)(te, {
                                    addFancyBorder: G,
                                    "data-qa": "video-".concat(P, "-iframe").concat(ae ? "-" : "-not-", "visible"),
                                    ref: vt
                                })]
                            }, P)
                        })
                    };
                const E = K
            },
            70317: (ve, R, r) => {
                r.d(R, {
                    Qd: () => f,
                    X1: () => w,
                    oT: () => h,
                    zU: () => p
                });
                var l = B => B.paymentProviders.stripe,
                    f = B => l(B).accountId,
                    p = B => l(B).stripePaymentMethodId,
                    h = B => l(B).stripePaymentIntentId,
                    w = B => l(B).service
            },
            71578: (ve, R, r) => {
                r.d(R, {
                    Ay: () => y
                });
                var l = r(54648),
                    f = r(57036),
                    p = r(91488),
                    h = r(90801),
                    w = r(55645),
                    B = r(67570),
                    D = r(13332),
                    O = r(82905);

                function* y() {
                    yield(0, f.Zy)(m), yield(0, f.Zy)(u), yield(0, f.Zy)(N), yield(0, f.Zy)(W), yield(0, f.Zy)(L)
                }

                function* m() {
                    yield(0, f.s)(h.HG);
                    var te = yield(0, f.Lt)(D.eM);
                    O.dx(te)
                }

                function* u() {
                    yield(0, f.s)(h.ZF);
                    var te = yield(0, f.Lt)(p.UL);
                    if (!te) {
                        var K = yield(0, f.Lt)(D.$c), E = K ? void 0 : yield(0, f.Lt)(B.TL), ee = yield(0, f.Lt)(D.eM);
                        O.tA({
                            responseId: E,
                            formId: ee
                        })
                    }
                }

                function* S() {
                    var te = yield(0, f.Lt)(p.UL);
                    if (!te) {
                        var K = yield(0, f.Lt)(w.DZ), E = yield(0, f.Lt)(D.eM);
                        O.PM({
                            ref: K,
                            formId: E
                        })
                    }
                }

                function* N() {
                    yield(0, f.jP)([h.Sl], S)
                }

                function C(te) {
                    var {
                        payload: K
                    } = te;
                    return function*() {
                        var E = yield(0, f.Lt)(p.UL);
                        if (!E) {
                            var ee = yield(0, f.Lt)(w.DZ), ue = yield(0, f.Lt)(D.eM);
                            O.KL({
                                height: K,
                                ref: ee,
                                formId: ue
                            })
                        }
                    }()
                }

                function* W() {
                    yield(0, f.jP)([h.vQ], C)
                }

                function* L() {
                    yield(0, f.s)(l.St.type);
                    var te = yield(0, f.Lt)(D.eM);
                    O.WK({
                        formId: te
                    })
                }
            },
            73207: (ve, R, r) => {
                r.d(R, {
                    Ay: () => b,
                    FP: () => E
                });
                var l = r(57036),
                    f = r(99501),
                    p = r(19354),
                    h = r(90801),
                    w = r(13332),
                    B = r(55645),
                    D = r(67570),
                    O = r(38067),
                    y = () => window.navigator.onLine,
                    m = r(52833),
                    u = r(44263),
                    S = r(82605),
                    N = r(71578);

                function C(M, I) {
                    var P = Object.keys(M);
                    if (Object.getOwnPropertySymbols) {
                        var g = Object.getOwnPropertySymbols(M);
                        I && (g = g.filter(function(ae) {
                            return Object.getOwnPropertyDescriptor(M, ae).enumerable
                        })), P.push.apply(P, g)
                    }
                    return P
                }

                function W(M) {
                    for (var I = 1; I < arguments.length; I++) {
                        var P = arguments[I] != null ? arguments[I] : {};
                        I % 2 ? C(Object(P), !0).forEach(function(g) {
                            L(M, g, P[g])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(P)) : C(Object(P)).forEach(function(g) {
                            Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(P, g))
                        })
                    }
                    return M
                }

                function L(M, I, P) {
                    return (I = te(I)) in M ? Object.defineProperty(M, I, {
                        value: P,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : M[I] = P, M
                }

                function te(M) {
                    var I = K(M, "string");
                    return typeof I == "symbol" ? I : I + ""
                }

                function K(M, I) {
                    if (typeof M != "object" || !M) return M;
                    var P = M[Symbol.toPrimitive];
                    if (P !== void 0) {
                        var g = P.call(M, I || "default");
                        if (typeof g != "object") return g;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (I === "string" ? String : Number)(M)
                }
                var E = () => {
                        var M = window.localStorage.getItem("submissions") || "[]";
                        return JSON.parse(M)
                    },
                    ee = M => {
                        window.localStorage.setItem("submissions", JSON.stringify(M))
                    },
                    ue = () => {
                        var M = E(),
                            I = M.shift();
                        return ee(M), I
                    },
                    G = M => ee([M, ...E()]),
                    se = M => ee([...E(), M]);

                function b() {
                    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3;
                    return function*() {
                        yield(0, l.cH)(u.r), yield(0, l.Zy)(N.Ay), yield(0, l.Zy)(m.A), yield(0, l.Zy)(Me, M), yield(0, l.Zy)(Ee)
                    }()
                }

                function* Ee() {
                    for (;;) {
                        yield(0, l.s)(h.xl);
                        var M = yield(0, l.Lt)(D.oR), I = yield(0, l.Lt)(w.eM), P = yield(0, l.Lt)(B.EN), g = {
                            formId: I,
                            landingId: null,
                            landingAt: null,
                            values: M,
                            outcome: P
                        };
                        se(g), yield(0, l.yJ)((0, f.L3)()), yield(0, l.T1)(S.vY)
                    }
                }
                var A = M => new Promise(I => setTimeout(I, M));

                function* Me(M) {
                    for (;;) {
                        if (y()) {
                            var I = ue();
                            if (I) try {
                                var P = yield(0, l.Lt)(O.u0), g = yield(0, l.T1)(p.OV, I.formId, P), ae = (0, S.AN)(g);
                                yield(0, l.T1)(p.pt, W(W({}, I), {}, {
                                    landingId: ae.token,
                                    landingAt: ae.landed_at
                                }));
                                continue
                            } catch (H) {
                                G(I)
                            }
                        }
                        yield A(M)
                    }
                }
            },
            73795: (ve, R, r) => {
                r.d(R, {
                    Jv: () => l,
                    _7: () => h,
                    gt: () => w,
                    un: () => p,
                    xo: () => f
                });
                var l = O => "".concat(O, "-error-message"),
                    f = O => "".concat(O, "-input-instructions"),
                    p = O => "".concat(O, "-description"),
                    h = O => "".concat(O, "-title"),
                    w = O => {
                        var {
                            uniqueId: y,
                            isErrorMessageVisible: m,
                            hasDescription: u,
                            hasInputInstructions: S,
                            additionalIds: N
                        } = O;
                        if (!m && !u && !S && !N) return null;
                        var C = p(y),
                            W = l(y),
                            L = f(y);
                        return [u ? C : "", S ? L : "", N, m ? W : ""].filter(Boolean).join(" ")
                    },
                    B = 'input:not([type="hidden"]):not([disabled]):not([tabindex^="-"]), button:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([disabled]):not([tabindex="-1"])',
                    D = O => {
                        if (!O) return [];
                        var y = O.querySelectorAll(B);
                        return Array.from(y)
                    }
            },
            74572: (ve, R, r) => {
                r.d(R, {
                    A: () => m,
                    z: () => y
                });
                var l = r(17771),
                    f = r(28365),
                    p = r.n(f),
                    h = r(46055),
                    w = r(87559),
                    B = r(11089),
                    D = r(88358),
                    O = r(90728),
                    y = u => {
                        var {
                            ariaDescribedBy: S,
                            centered: N,
                            disabled: C,
                            fullWidth: W,
                            hasMarginBottom: L,
                            helperText: te,
                            isComplete: K,
                            isLivePreview: E,
                            isPaymentBlockAnswered: ee,
                            isSubmitting: ue,
                            isVisible: G,
                            onClick: se,
                            price: b,
                            size: Ee,
                            t: A,
                            theme: Me,
                            buttonRef: M,
                            hideHelperText: I
                        } = u, P = (0, B.$E)(), g = A("label.button.submit");
                        ee && (g = A("label.button.submitAndPay", {
                            price: b
                        }));
                        var ae = Me.colors.button,
                            H = "submit-button deep-purple-submit-button";
                        return l.createElement(h.A, {
                            ariaDescribedBy: S,
                            buttonRef: M,
                            centered: N,
                            color: ae,
                            contentColor: Me.colors.buttonContent,
                            content: g,
                            contextBackgroundColor: Me.colors.background,
                            dataQa: H,
                            disabled: C || !E && (ue || K),
                            fullWidth: W,
                            hasMarginBottom: L,
                            helperColor: Me.colors.primary,
                            helperText: !P && !N ? (0, O.A)(A(te)) : "",
                            isSpinning: !E && ue,
                            isTransparent: Me.hasTransparentButton,
                            onClick: se,
                            size: Ee,
                            tabIndex: G ? 0 : -1,
                            hideHelperText: I
                        })
                    };
                y.defaultProps = {
                    centered: !1,
                    helperText: "label.buttonHint.default",
                    size: "large",
                    theme: {
                        colors: {
                            backgroundColor: w.gB,
                            button: w.gB,
                            primary: w.gB
                        },
                        hasTransparentButton: !1
                    },
                    t: u => u
                }, y.propTypes = {
                    ariaDescribedBy: p().string,
                    buttonRef: p().object,
                    centered: p().bool,
                    disabled: p().bool,
                    fullWidth: p().bool,
                    hasMarginBottom: p().bool,
                    helperText: p().string,
                    isComplete: p().bool,
                    isLivePreview: p().bool,
                    isPaymentBlockAnswered: p().bool,
                    isSubmitting: p().bool,
                    isVisible: p().bool,
                    onClick: p().func,
                    price: p().string,
                    size: p().string,
                    t: p().func,
                    theme: p().object,
                    hideHelperText: p().bool
                };
                const m = (0, D.A)(y)
            },
            74673: (ve, R, r) => {
                r.d(R, {
                    A: () => ua
                });
                var l = r(53930),
                    f = r(28022),
                    p = r(94369),
                    h = r(35575),
                    w = r(55645),
                    B = r(48002),
                    D = r(13332),
                    O = r(60324),
                    y = r(12036),
                    m = r(67570),
                    u = r(38067),
                    S = r(2009),
                    N = r(22953),
                    C = r(44418),
                    W = r(49062),
                    L = r(77917),
                    te = r(85557),
                    K = r(7888),
                    E = r(17771),
                    ee = r(94567),
                    ue = r(10053),
                    G = r(95853),
                    se = r(40854),
                    b = r(18727),
                    Ee = r(87559),
                    A = r(57773),
                    Me = r(32336),
                    M = r(48004),
                    I = r(37255),
                    P = r(44222),
                    g = r(1907),
                    ae = r(7968),
                    H = r(97149),
                    Y = r(34195),
                    re = r(76214);

                function oe(U) {
                    var {
                        boundingClientRect: ie = {},
                        onlyTop: he = !1,
                        offsetTop: Se = 0,
                        offsetBottom: St = 0
                    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    if (!U || typeof U.getBoundingClientRect != "function") return !1;
                    var At = U.getBoundingClientRect(),
                        Nt = {
                            height: (0, re.A)() ? document.documentElement.clientHeight : ie.height || window.innerHeight || document.documentElement.clientHeight,
                            top: ie.top || 0
                        },
                        rr = At.top >= Nt.top + Se,
                        Lr = At.bottom <= Nt.height - St;
                    return he ? rr : rr && Lr
                }
                var fe = () => navigator.platform === "MacIntel",
                    Ae = r(90728),
                    Ne = r(28365),
                    We = r.n(Ne),
                    qe = r(86881),
                    Ie = r(88358),
                    Mt = r(20965),
                    $ = ["label.retrySubmit.first", "label.retrySubmit.second", "label.retrySubmit.third", "label.retrySubmit.fourth"],
                    tt = U => {
                        var ie = $.length;
                        return U > ie ? $[ie - 1] : $[U - ae.F]
                    },
                    bt = U => {
                        var {
                            count: ie,
                            timeout: he,
                            t: Se
                        } = U;
                        return he === 0 ? E.createElement("div", null, Se("label.retryLink.retrying")) : E.createElement(E.Fragment, null, E.createElement("div", {
                            "data-qa": "retry-count",
                            "aria-hidden": "true"
                        }, Se(tt(ie), {
                            timeout: he
                        })), he === 3 ? E.createElement(Mt.A, {
                            "aria-live": "assertive"
                        }, Se("label.retryLink.counter", {
                            timeout: he
                        })) : null)
                    };
                bt.propTypes = {
                    count: We().number,
                    timeout: We().number,
                    t: We().func
                }, bt.defaultProps = {
                    t: U => U
                };
                const et = (0, Ie.A)(bt);
                var vt = U => {
                    var {
                        centered: ie,
                        color: he,
                        count: Se,
                        messageKey: St,
                        t: At,
                        timeout: Nt
                    } = U;
                    return E.createElement(qe.Ay, {
                        role: "timer",
                        "aria-live": "assertive",
                        size: "sizeN1",
                        color: he,
                        useDefaultFont: !0,
                        align: ie ? "center" : "left"
                    }, (0, Ae.A)(At(St)), E.createElement(et, {
                        count: Se,
                        timeout: Nt
                    }))
                };
                vt.propTypes = {
                    centered: We().bool,
                    color: We().string,
                    count: We().number,
                    messageKey: We().string,
                    t: We().func,
                    timeout: We().number
                }, vt.defaultProps = {
                    messageKey: "label.warning.slowSubmission",
                    t: U => U
                };
                const Ht = (0, Ie.A)(vt);
                var kt = r(46055),
                    nt = r(11089),
                    _t = U => {
                        var {
                            ariaDescribedBy: ie,
                            backgroundColor: he = Ee.gB,
                            buttonColor: Se = Ee.gB,
                            buttonContentColor: St,
                            centered: At,
                            disabled: Nt,
                            helperColor: rr = Ee.gB,
                            helperText: Lr = "label.buttonHint.default",
                            label: or = "label.button.ok",
                            onClick: fn,
                            isVisible: Br = !1,
                            buttonRef: Hr,
                            t: j = Ke => Ke,
                            hideHelperText: _ = !1,
                            isSpinning: z = !1
                        } = U, J = (0, nt.$E)(), Fe = Br ? "-visible" : "";
                        return E.createElement(kt.A, {
                            ariaDescribedBy: ie,
                            centered: At,
                            color: Se,
                            contentColor: St,
                            content: (0, Ae.A)(j(or)),
                            contextBackgroundColor: he,
                            dataQa: "ok-button".concat(Fe, " deep-purple-ok-button").concat(Fe),
                            disabled: Nt,
                            helperColor: rr,
                            helperText: J ? null : (0, Ae.A)(j(Lr)),
                            onClick: fn,
                            size: "medium",
                            tabIndex: Br ? 0 : -1,
                            buttonRef: Hr,
                            hideHelperText: _,
                            isSpinning: z
                        })
                    };
                const wr = _t;
                var Nr = r(74572),
                    Zt = r(16380),
                    Z = r(11214),
                    ir;

                function ze(U, ie) {
                    return ie || (ie = U.slice(0)), Object.freeze(Object.defineProperties(U, {
                        raw: {
                            value: Object.freeze(ie)
                        }
                    }))
                }
                var Zr = ee.Ay.span.withConfig({
                        displayName: "captchacomponent__TextWithBackground",
                        componentId: "sc-1tmo5dl-0"
                    })(ir || (ir = ze([`
  display: `, `;
  border-radius: 3px;
  `, `
  padding-block-start: var(--spacing-50);
  padding-block-end: var(--spacing-50);
  padding-inline-start: var(--spacing-100);
  padding-inline-end: var(--spacing-150);
`])), U => {
                        var {
                            displayAsBlock: ie
                        } = U;
                        return ie ? "block" : "inline"
                    }, U => {
                        var {
                            backgroundColor: ie
                        } = U;
                        return ie ? "background-color: ".concat(ie, ";") : ""
                    }),
                    Fr = U => {
                        var ie, he, {
                                theme: Se,
                                center: St
                            } = U,
                            At = (0, Zt.G)(Z.Ev),
                            {
                                t: Nt
                            } = (0, g.mR)(),
                            rr = (0, A.dv)();
                        return At ? E.createElement(b.A, {
                            top: 2,
                            "data-qa": "captcha-disclaimer"
                        }, E.createElement(G.Ay, {
                            position: St ? "center" : "start"
                        }, E.createElement(qe.Ay, {
                            color: Se == null || (ie = Se.colors) === null || ie === void 0 ? void 0 : ie.primary,
                            size: "sizeN1",
                            useDefaultFont: !0,
                            dimmed: !0
                        }, E.createElement(Zr, {
                            displayAsBlock: rr === "sm" || rr === "md",
                            backgroundColor: (0, Ee.rF)(Se == null || (he = Se.colors) === null || he === void 0 ? void 0 : he.background, .6),
                            dangerouslySetInnerHTML: {
                                __html: Nt("recaptcha.disclaimer.text")
                            }
                        })))) : null
                    },
                    Et = r(46385),
                    Hn;

                function un(U, ie) {
                    return ie || (ie = U.slice(0)), Object.freeze(Object.defineProperties(U, {
                        raw: {
                            value: Object.freeze(ie)
                        }
                    }))
                }
                var En = ee.Ay.div.withConfig({
                        displayName: "error-message__ErrorMessageWrapper",
                        componentId: "sc-1qs1k8z-0"
                    })(Hn || (Hn = un([`
  `, `;
  `, `;
  `, `
`])), U => U.isFullWidth && "width: 100%;", U => U.centered && "text-align: center", U => U.isErrorIgnorable && `
    position: static;
    margin-block-end: `.concat(2 * Me.zA, `px;
  `)),
                    $r = U => {
                        var {
                            centered: ie,
                            errorMessageRef: he,
                            id: Se,
                            message: St,
                            visible: At = !1,
                            isErrorIgnorable: Nt,
                            isFullWidth: rr = !0,
                            prefersReducedMotion: Lr = !1
                        } = U;
                        return At ? E.createElement(ue.Ay, {
                            isVisible: !0,
                            type: Lr ? "fadeIn" : "slideUp"
                        }, E.createElement(En, {
                            centered: ie,
                            isErrorIgnorable: Nt,
                            isFullWidth: rr
                        }, E.createElement(Et.A, {
                            dataQa: "error-message-visible",
                            id: Se,
                            message: St,
                            errorMessageRef: he,
                            role: "alert",
                            visible: !0
                        }))) : null
                    };
                const dn = $r;
                var Bn = r(66115),
                    Cn = U => {
                        var {
                            ariaDescribedBy: ie = "",
                            buttonRef: he,
                            centered: Se = !1,
                            disabled: St,
                            fullWidth: At = !1,
                            hasMarginBottom: Nt = !1,
                            helperText: rr = "label.buttonHint.default",
                            hideHelperText: Lr = !1,
                            isSpinning: or,
                            isVisible: fn,
                            label: Br = "label.button.ok",
                            onClick: Hr,
                            size: j = "large",
                            t: _ = Ke => Ke,
                            theme: z = {
                                colors: {
                                    backgroundColor: Ee.gB,
                                    button: Ee.gB,
                                    primary: Ee.gB
                                },
                                hasTransparentButton: !1
                            }
                        } = U, J = (0, nt.$E)(), Fe = z.colors.button;
                        return E.createElement(kt.A, {
                            ariaDescribedBy: ie,
                            buttonRef: he,
                            centered: Se,
                            color: Fe,
                            contentColor: z.colors.buttonContent,
                            content: (0, Ae.A)(_(Br)),
                            contextBackgroundColor: z.colors.background,
                            dataQa: "partial-submission-button",
                            disabled: St,
                            fullWidth: At,
                            hasMarginBottom: Nt,
                            helperColor: z.colors.primary,
                            helperText: !J && !Se ? (0, Ae.A)(_(rr)) : "",
                            isTransparent: z.hasTransparentButton,
                            onClick: Hr,
                            size: j,
                            tabIndex: fn ? 0 : -1,
                            hideHelperText: Lr,
                            isSpinning: or
                        })
                    };
                const qr = Cn;
                var Lt = r(64334),
                    Un = U => {
                        var {
                            color: ie,
                            warningText: he,
                            actionText: Se
                        } = U;
                        return E.createElement(qe.Ay, {
                            color: ie,
                            size: "sizeN1",
                            useDefaultFont: !0,
                            dimmed: !0,
                            "data-qa": "phishing-warning-message"
                        }, he, " - ", E.createElement("a", {
                            href: "https://www.typeform.com/help/a/report-abuse-360034113252/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, Se))
                    };
                const cn = Un;
                var en, Cr, V;

                function le() {
                    return le = Object.assign ? Object.assign.bind() : function(U) {
                        for (var ie = 1; ie < arguments.length; ie++) {
                            var he = arguments[ie];
                            for (var Se in he)({}).hasOwnProperty.call(he, Se) && (U[Se] = he[Se])
                        }
                        return U
                    }, le.apply(null, arguments)
                }

                function me(U, ie) {
                    var he = Object.keys(U);
                    if (Object.getOwnPropertySymbols) {
                        var Se = Object.getOwnPropertySymbols(U);
                        ie && (Se = Se.filter(function(St) {
                            return Object.getOwnPropertyDescriptor(U, St).enumerable
                        })), he.push.apply(he, Se)
                    }
                    return he
                }

                function Ue(U) {
                    for (var ie = 1; ie < arguments.length; ie++) {
                        var he = arguments[ie] != null ? arguments[ie] : {};
                        ie % 2 ? me(Object(he), !0).forEach(function(Se) {
                            ft(U, Se, he[Se])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(he)) : me(Object(he)).forEach(function(Se) {
                            Object.defineProperty(U, Se, Object.getOwnPropertyDescriptor(he, Se))
                        })
                    }
                    return U
                }

                function ft(U, ie, he) {
                    return (ie = at(ie)) in U ? Object.defineProperty(U, ie, {
                        value: he,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : U[ie] = he, U
                }

                function at(U) {
                    var ie = It(U, "string");
                    return typeof ie == "symbol" ? ie : ie + ""
                }

                function It(U, ie) {
                    if (typeof U != "object" || !U) return U;
                    var he = U[Symbol.toPrimitive];
                    if (he !== void 0) {
                        var Se = he.call(U, ie || "default");
                        if (typeof Se != "object") return Se;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (ie === "string" ? String : Number)(U)
                }

                function Rr(U, ie) {
                    return ie || (ie = U.slice(0)), Object.freeze(Object.defineProperties(U, {
                        raw: {
                            value: Object.freeze(ie)
                        }
                    }))
                }
                var Yr = ee.Ay.div.withConfig({
                        displayName: "block-footer__Root",
                        componentId: "sc-1upe4h2-0"
                    })(en || (en = Rr([`
  position: relative;
`]))),
                    Pn = ee.Ay.div.withConfig({
                        displayName: "block-footer__ButtonWrapper",
                        componentId: "sc-1upe4h2-1"
                    })(Cr || (Cr = Rr([`
  `, `;
`])), U => {
                        var {
                            minHeight: ie
                        } = U;
                        return ie ? "min-height: ".concat(ie, "px;") : ""
                    }),
                    Kn = ee.Ay.div.withConfig({
                        displayName: "block-footer__SubmitButtonFooter",
                        componentId: "sc-1upe4h2-2"
                    })(V || (V = Rr([`
  width: 100%;
`]))),
                    vn = fe() ? "label.buttonHint.submit-mac" : "label.buttonHint.submit",
                    ta = U => {
                        var ie, he, Se, St, At, Nt, rr, Lr, {
                                answer: or,
                                application: fn,
                                ariaDescribedBy: Br,
                                blockError: Hr,
                                blockRef: j,
                                buttonText: _,
                                errorMessageId: z = "",
                                errorMessageRef: J,
                                hasFormFooter: Fe,
                                hideHelperText: Ke,
                                isActive: it,
                                isAnimated: $t,
                                isButtonFullWidth: Dt,
                                isButtonTypeSubmit: rt,
                                isButtonTypePartialSubmit: hr,
                                isButtonVisible: Ve,
                                isErrorMessageVisible: Ir,
                                isLivePreview: Mr,
                                isPaymentBlockAnswered: Ur,
                                isSubmitButtonVisibilityForced: Sn,
                                layout: mn,
                                layoutItemsSize: F,
                                onClick: ce,
                                onFocusLost: de,
                                onRequireStickyFooter: ge,
                                price: _e,
                                showPhishingMessage: jt,
                                submit: xe,
                                submitErrorMessageId: Ut,
                                submitErrorMessageKey: xt,
                                submitForm: lr,
                                submitPartialForm: Gt,
                                theme: Ye,
                                trackInlineSubmit: Yt,
                                trackInlinePartialSubmit: Le,
                                isErrorIgnorable: sr,
                                minHeight: Kr
                            } = U,
                            Or = (0, E.useRef)(null),
                            Rt = (0, E.useContext)(H.A),
                            tn = (0, Y.Mq)(j),
                            pn = (0, P.j)(),
                            [Er, ur] = (0, E.useState)(!1),
                            rn = (0, A.dv)(),
                            {
                                t: Qt
                            } = (0, g.mR)(),
                            nr = (0, Bn.A)(rn, mn),
                            dr = (0, M.sY)(Ye == null || (ie = Ye.fields) === null || ie === void 0 ? void 0 : ie.alignment, nr == null ? void 0 : nr.type),
                            je = dr === M.Fm.CENTER,
                            Qr = Dt || je,
                            yn = rn === "sm",
                            Ft = (0, E.useCallback)(() => {
                                if (Or.current) {
                                    var Ce = oe(Or.current, Ue(Ue({}, F), {}, {
                                            offsetBottom: Fe ? 0 : -Or.current.offsetHeight
                                        })),
                                        ot = !Rt && Ve && it && !Ce && (!fn || rn === "sm" && !!fn && !!(or != null && or.length));
                                    ge && ge(j, !!ot)
                                }
                            }, [or, fn, rn, Rt, Ve, it, j, Or, F, ge]);
                        (0, E.useEffect)(() => {
                            var Ce, ot = () => {
                                Ce = setTimeout(Ft, 200)
                            };
                            return window.addEventListener("resize", ot), () => {
                                clearTimeout(Ce), window.removeEventListener("resize", ot)
                            }
                        }, [Ft]), (0, I.A)(() => {
                            Ft()
                        }, [Ft, tn]), (0, E.useEffect)(() => {
                            var Ce = setTimeout(() => Ft(), 1500);
                            return () => clearTimeout(Ce)
                        }, []), (0, E.useEffect)(() => {
                            var Ce;
                            return Ve ? Ce = setTimeout(() => {
                                ur(rt)
                            }, 200) : ur(!1), () => clearTimeout(Ce)
                        }, [rt, Ve]);
                        var Vr = Ve && hr;
                        (0, E.useEffect)(() => {
                            it && Ve && rt ? Yt == null || Yt(j) : hr && it && (Le == null || Le(j))
                        }, [it, Ve, rt, Vr]);
                        var Ge = Ve && rt && !hr,
                            Pr = Ve && !rt && !hr,
                            Xt = (0, E.useRef)(null),
                            Tr = (0, E.useRef)(null);
                        (0, E.useEffect)(() => {
                            var Ce = null;
                            return Sn && (0, Ee.CI)() && Ge && (Ce = setTimeout(() => {
                                var ot;
                                return Tr == null || (ot = Tr.current) === null || ot === void 0 ? void 0 : ot.focus()
                            }, ae.Es + 100)), () => clearTimeout(Ce)
                        }, [Sn, Ge]); {
                            var Ln = (0, E.useRef)(Ge),
                                Bt = (0, E.useRef)(Pr),
                                ar = Tr.current === document.activeElement,
                                Wr = Xt.current === document.activeElement,
                                nn = Ln.current && !Ge && ar,
                                Pt = Bt.current && !Pr && Wr;
                            !Rt && (nn || Pt) && de && de(), Ln.current = Ge, Bt.current = Pr
                        }
                        var He = (he = Hr == null ? void 0 : Hr.getPipingValues()) !== null && he !== void 0 ? he : {},
                            Sr = Ce => {
                                Gt == null || Gt(Ce)
                            },
                            gn = yn,
                            Kt = (0, Zt.G)(Lt.U),
                            ra = (0, Zt.G)(te.tW);
                        return (0, E.useEffect)(() => {
                            if (Ir) {
                                var Ce, ot;
                                J == null || (Ce = J.current) === null || Ce === void 0 || (ot = Ce.scrollIntoView) === null || ot === void 0 || ot.call(Ce, !0)
                            }
                        }, [Ir]), E.createElement(Yr, null, E.createElement(se.A, {
                            top: Me.LG.topBlockFooter
                        }, Ir && E.createElement(dn, {
                            centered: je,
                            errorMessageRef: J,
                            id: z,
                            isErrorIgnorable: sr,
                            message: (0, Ae.A)(Qt == null ? void 0 : Qt(Hr == null ? void 0 : Hr.label, He)),
                            prefersReducedMotion: pn,
                            visible: Ir
                        }), E.createElement(Pn, {
                            ref: Or,
                            "data-qa-button-visible": !!Ve,
                            minHeight: Kr
                        }, Vr && !gn && E.createElement(ue.Ay, {
                            type: "slideUp",
                            isVisible: Vr,
                            delay: Ve && Er ? ae.Es : 0,
                            duration: $t ? ae.Es : 0
                        }, E.createElement(E.Fragment, null, E.createElement(qr, {
                            ariaDescribedBy: Br,
                            buttonRef: Tr,
                            centered: Qr,
                            disabled: Kt,
                            fullWidth: Dt,
                            helperText: vn,
                            hideHelperText: Ke,
                            isLivePreview: Mr,
                            isSpinning: Kt,
                            isVisible: Ve,
                            label: _,
                            onClick: Sr,
                            size: "medium",
                            t: Qt,
                            theme: Ye
                        }), E.createElement(Fr, {
                            theme: Ye,
                            center: Qr
                        }))), Ge && E.createElement(Kn, null, E.createElement(ue.Ay, {
                            type: "slideUp",
                            isVisible: Ge,
                            delay: Ve && !Er ? ae.Es : 0,
                            duration: $t ? ae.Es : 0
                        }, E.createElement(E.Fragment, null, !gn && E.createElement(G.Ay, {
                            position: Qr ? "center" : "start"
                        }, E.createElement(Nr.A, {
                            ariaDescribedBy: Br,
                            centered: Qr,
                            fullWidth: Dt,
                            helperText: vn,
                            isComplete: xe == null ? void 0 : xe.isComplete,
                            disabled: !it || !Ge,
                            isLivePreview: Mr,
                            isPaymentBlockAnswered: Ur,
                            isSubmitting: (xe == null ? void 0 : xe.isSubmitting) || Kt,
                            isVisible: Ve,
                            onClick: lr,
                            price: _e,
                            size: "medium",
                            t: Qt,
                            theme: Ye,
                            buttonRef: Tr,
                            hideHelperText: Ke
                        })), E.createElement(Fr, {
                            theme: Ye,
                            center: Qr
                        }), E.createElement(b.A, {
                            top: 2
                        }, Er && jt && !(xe != null && xe.retry.showMessage) && !xt && Qt && E.createElement(G.Ay, {
                            position: Qr ? "center" : "start"
                        }, E.createElement(cn, {
                            color: Ye == null || (Se = Ye.colors) === null || Se === void 0 ? void 0 : Se.primary,
                            warningText: Qt("label.warning.phishing", He),
                            actionText: Qt("label.action.phishing", He)
                        })), (xe == null ? void 0 : xe.retry.showMessage) && E.createElement(Ht, {
                            centered: je,
                            color: Ye == null || (St = Ye.colors) === null || St === void 0 ? void 0 : St.primary,
                            count: (xe == null ? void 0 : xe.retry.count) - 1,
                            timeout: xe == null ? void 0 : xe.retry.timeout
                        }), !!xt && Qt && E.createElement(dn, {
                            centered: je,
                            errorMessageRef: J,
                            id: Ut,
                            prefersReducedMotion: pn,
                            message: (0, Ae.A)(Qt(xt, He)),
                            visible: !!xt
                        }))))), Pr && !gn && E.createElement(ue.Ay, {
                            type: "slideUp",
                            isVisible: Pr,
                            delay: Ve && Er ? ae.Es : 0,
                            duration: $t ? ae.Es : 0
                        }, E.createElement(wr, {
                            ariaDescribedBy: Br,
                            backgroundColor: Ye == null || (At = Ye.colors) === null || At === void 0 ? void 0 : At.background,
                            buttonColor: Ye == null || (Nt = Ye.colors) === null || Nt === void 0 ? void 0 : Nt.button,
                            buttonContentColor: Ye == null || (rr = Ye.colors) === null || rr === void 0 ? void 0 : rr.buttonContent,
                            centered: je,
                            helperColor: Ye == null || (Lr = Ye.colors) === null || Lr === void 0 ? void 0 : Lr.primary,
                            helperText: "label.buttonHint.default",
                            disabled: !Pr || Kt,
                            isVisible: Ve,
                            label: _,
                            onClick: ce,
                            t: Qt,
                            buttonRef: Xt,
                            hideHelperText: Ke,
                            isSpinning: Kt || ra
                        })))))
                    },
                    Vn = U => E.createElement(A.J9, null, ie => {
                        var {
                            width: he
                        } = ie, Se = he < Me.D9.md, St = Se && !U.isLivePreview;
                        return E.createElement(ta, le({
                            isButtonFullWidth: St
                        }, U))
                    });
                const ba = Vn;
                var Tn = (U, ie) => {
                        var {
                            blockRef: he,
                            errorMessageId: Se,
                            errorMessageRef: St,
                            hideHelperText: At,
                            isErrorMessageVisible: Nt,
                            isErrorIgnorable: rr,
                            hideButton: Lr
                        } = ie, or = (0, w.GH)(U, he), fn = (0, y.QV)(U, he), Br = (0, D.Hk)(U), Hr = fn || (0, D.nC)(U, he), j = (0, C.Dd)(U), _ = (0, te.gQ)(U, he), z = (0, B.h)(U, or == null ? void 0 : or.ref), J = z && (0, L.am)(U, z), Fe = (0, w.pe)(U, he), Ke = Fe && (0, w.wc)(Fe), it = (0, K.d)(U), $t = it && (0, K.c8)(or), Dt = $t && !Ke, rt = (0, W.T)(or, j) && !J && !_ && !Dt, hr = (0, D.oJ)(U, he) && !_ && !Dt;
                        return {
                            errorMessageId: Se,
                            errorMessageRef: St,
                            hideHelperText: At != null ? At : (0, N.Hn)(or),
                            isActive: (0, w.ke)(U, he),
                            isButtonTypeSubmit: hr,
                            isButtonTypePartialSubmit: rt,
                            isErrorMessageVisible: Nt,
                            isLivePreview: (0, D.jq)(U),
                            isSubmitButtonVisibilityForced: (0, D.aY)(U),
                            isPaymentBlockAnswered: (0, O.tG)(U),
                            isButtonVisible: (!Nt || rr) && !Lr && !Br && Hr,
                            price: (0, w.VV)(U),
                            showPhishingMessage: (0, u.yJ)(U),
                            submit: (0, m.NX)(U),
                            submitErrorMessageId: "".concat(he, "-submission-error-message"),
                            submitErrorMessageKey: (0, m.jg)(U),
                            theme: (0, S.O4)(U)
                        }
                    },
                    sa = {
                        onRequireStickyFooter: f.O,
                        trackInlineSubmit: p.Db,
                        trackInlinePartialSubmit: p.mj,
                        submitPartialForm: h.td
                    };
                const ua = (0, l.Ng)(Tn, sa)(ba)
            },
            75997: (ve, R, r) => {
                r.d(R, {
                    Wj: () => N,
                    fE: () => m,
                    l6: () => u
                });
                var l = r(17771),
                    f = r(28365),
                    p = r.n(f),
                    h = r(89571);

                function w() {
                    return w = Object.assign ? Object.assign.bind() : function(C) {
                        for (var W = 1; W < arguments.length; W++) {
                            var L = arguments[W];
                            for (var te in L)({}).hasOwnProperty.call(L, te) && (C[te] = L[te])
                        }
                        return C
                    }, w.apply(null, arguments)
                }
                var B = ["INPUT", "TEXTAREA", "LI", "SELECT", "BUTTON"],
                    D = ["radio", "checkbox"],
                    O = "aria-haspopup",
                    y = l.createContext();
                y.displayName = "GlobalEventListenerContext";
                var m = C => {
                    var {
                        areGlobalListenersDisabled: W,
                        children: L,
                        commonHandleKeydown: te
                    } = C, K = (0, l.useRef)(null), E = ee => {
                        W || (K.current = {
                            onGlobalKeyDown: ee
                        })
                    };
                    return (0, l.useEffect)(() => {
                        if (W) return h.A;
                        var ee = ue => {
                            var G, {
                                    nodeName: se
                                } = ue.target,
                                b = ((G = ue.target.attributes) === null || G === void 0 ? void 0 : G.getNamedItem("role")) && ue.target.attributes.getNamedItem("role").value,
                                Ee = ue.target.hasAttribute(O),
                                A = B.includes(se) || D.includes(b) || Ee;
                            if (!A) {
                                var Me, M = (Me = K.current) === null || Me === void 0 ? void 0 : Me.onGlobalKeyDown;
                                M == null || M(ue)
                            }
                            te(ue, A)
                        };
                        return window.addEventListener("keydown", ee), () => {
                            window.removeEventListener("keydown", ee)
                        }
                    }, [W, te]), l.createElement(y.Provider, {
                        value: E
                    }, L)
                };
                m.propTypes = {
                    areGlobalListenersDisabled: p().bool,
                    children: p().node,
                    commonHandleKeydown: p().func
                };
                var u = (C, W) => {
                        var L = (0, l.useContext)(y);
                        (0, l.useEffect)(() => {
                            C && L(W)
                        }, [C, W])
                    },
                    S = y.Consumer,
                    N = C => function(L) {
                        var te = L.isLivePreview;
                        return te ? l.createElement(C, L) : l.createElement(S, null, K => l.createElement(C, w({}, L, {
                            updateGlobalEventListenerRef: K
                        })))
                    }
            },
            81776: (ve, R, r) => {
                r.d(R, {
                    A: () => D
                });
                var l = r(7897),
                    f = r(17771),
                    p = r(46651);

                function h(O, y) {
                    var m = Object.keys(O);
                    if (Object.getOwnPropertySymbols) {
                        var u = Object.getOwnPropertySymbols(O);
                        y && (u = u.filter(function(S) {
                            return Object.getOwnPropertyDescriptor(O, S).enumerable
                        })), m.push.apply(m, u)
                    }
                    return m
                }

                function w(O) {
                    for (var y = 1; y < arguments.length; y++) {
                        var m = arguments[y] != null ? arguments[y] : {};
                        y % 2 ? h(Object(m), !0).forEach(function(u) {
                            (0, l.A)(O, u, m[u])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(m)) : h(Object(m)).forEach(function(u) {
                            Object.defineProperty(O, u, Object.getOwnPropertyDescriptor(m, u))
                        })
                    }
                    return O
                }
                var B = O => (0, p.jsx)("svg", w(w({
                    width: "7",
                    height: "8",
                    viewBox: "0 0 7 8",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "shouldFlipIfRtl"
                }, O), {}, {
                    children: (0, p.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.046 1.546a.5.5 0 0 1 .708 0l2.1 2.1a.5.5 0 0 1 0 .707l-2.1 2.1a.5.5 0 1 1-.708-.707L4.293 4.5H.5a.5.5 0 1 1 0-1h3.793L3.046 2.253a.5.5 0 0 1 0-.707Z"
                    })
                }));
                const D = B
            },
            82605: (ve, R, r) => {
                r.d(R, {
                    vY: () => Lt,
                    AN: () => Et,
                    nz: () => nt,
                    pp: () => _t,
                    jP: () => Hn,
                    Ig: () => Un
                });
                var l = r(57036),
                    f = r(91488),
                    p = r(88892),
                    h = r(24407),
                    w = r(94369),
                    B = r(90801),
                    D = () => ({
                        type: B.HH
                    }),
                    O = () => ({
                        type: B.Oc
                    }),
                    y = r(99501);

                function m(V) {
                    return {
                        type: B.jK,
                        payload: V
                    }
                }

                function u(V) {
                    return {
                        type: B.yw,
                        payload: V
                    }
                }
                var S = r(7280),
                    N = r(78607),
                    C = r(19354),
                    W = r(66926),
                    L = r(7968),
                    te = r(13332),
                    K = r(55645),
                    E = r(67570),
                    ee = r(77917),
                    ue = r(60324),
                    G = r(70317),
                    se = r(68727),
                    b = r(50180),
                    Ee = r(38067),
                    A = r(30893),
                    Me = r(89091),
                    M = r(82905),
                    I = r(89368),
                    P = r(10698),
                    g = r(17163),
                    ae = (V, le) => (le = Symbol[V]) ? le : Symbol.for("Symbol." + V),
                    H = V => {
                        throw TypeError(V)
                    },
                    Y = function(V, le) {
                        this[0] = V, this[1] = le
                    },
                    re = V => {
                        var le = V[ae("asyncIterator")],
                            me = !1,
                            Ue, ft = {};
                        return le == null ? (le = V[ae("iterator")](), Ue = at => ft[at] = It => le[at](It)) : (le = le.call(V), Ue = at => ft[at] = It => {
                            if (me) {
                                if (me = !1, at === "throw") throw It;
                                return It
                            }
                            return me = !0, {
                                done: !1,
                                value: new Y(new Promise(Rr => {
                                    var Yr = le[at](It);
                                    Yr instanceof Object || H("Object expected"), Rr(Yr)
                                }), 1)
                            }
                        }), ft[ae("iterator")] = () => ft, Ue("next"), "throw" in le ? Ue("throw") : ft.throw = at => {
                            throw at
                        }, "return" in le && Ue("return"), ft
                    },
                    oe = 1e3,
                    fe = 1.8,
                    Ae = 6,
                    Ne = "VALIDATION_ERROR",
                    We = "FORM_CHANGED",
                    qe = "RULE_MATCHED",
                    Ie = "SPAM_LIMIT_REACHED",
                    Mt = "FILE_NOT_UPLOADED",
                    $ = "DUPLICATE_ERROR",
                    tt = "stripe",
                    bt = "PAYMENT_ERROR",
                    et = [5, 10, 15, 30],
                    vt = V => V * oe,
                    Ht = V => Math.floor(Math.pow(fe, V)),
                    kt = V => {
                        var le = et.length,
                            me = V > le ? et[le - 1] : et[V - L.F];
                        return V ? me : 1
                    },
                    nt = V => {
                        var {
                            code: le,
                            details: me
                        } = V;
                        return le === Ne && me && me.length && me[0].code === qe
                    },
                    _t = V => {
                        var {
                            code: le,
                            details: me
                        } = V;
                        return le === Ne && me && me.length && me[0].code === Ie
                    },
                    wr = V => {
                        var {
                            code: le,
                            details: me
                        } = V;
                        return le === Ne && (me == null ? void 0 : me.length) && me[0].code === Mt
                    },
                    Nr = V => {
                        var {
                            code: le,
                            details: me
                        } = V;
                        return le === Ne && (me == null ? void 0 : me.length) && me[0].code === $
                    },
                    Zt = V => nt(V) ? "label.error.ruleMatched" : V.code === We ? "label.error.formChanged" : "label.error.generic",
                    Z = V => V.decline_code || V.code || V.type,
                    ir = V => {
                        var le = V && V.code;
                        return le === bt && V.details && V.details.length && (le = V.details[0].code), wr(V) && (le = V.details[0].code), Nr(V) && (le = V.details[0].code), le
                    },
                    ze = V => V && V.description,
                    Zr = V => V && V.details,
                    Fr = (V, le) => W.A[le] || Zt(V),
                    Et = V => V.hasOwnProperty("token") ? V : {
                        response_id: V.submission.response_id,
                        token: V.signature,
                        landed_at: V.submission.landed_at
                    };

                function* Hn() {
                    for (var V, le = 0, me = yield(0, l.Lt)(te.eM), Ue = yield(0, l.Lt)(Ee.u0), ft = yield(0, l.Lt)(f.UL); !V;) try {
                        V = yield(0, l.T1)(C.OV, me, Ue);
                        var at = Et(V);
                        if (ft) return yield(0, l.yJ)((0, p.qD)({
                            landingId: at.token,
                            landingAt: at.landed_at,
                            responseId: at.response_id
                        }));
                        yield(0, l.yJ)((0, w.KQ)(at.token, at.landed_at, at.response_id)), M.A4({
                            formId: me,
                            responseId: at.response_id
                        })
                    } catch (Yr) {
                        if (nt(Yr)) {
                            var It = yield(0, l.Lt)(E.OH), Rr = It ? O : D;
                            yield(0, l.yJ)(Rr()), V = !0;
                            return
                        }
                        if (Nr(Yr)) {
                            yield(0, l.T1)(g.kO);
                            return
                        }
                        ft ? yield(0, l.yJ)((0, p.qD)({})): yield(0, l.yJ)((0, w.Bc)(Yr)), yield(0, l.cb)(vt(Ht(le % Ae))), le++
                    }
                }

                function* un() {
                    for (; yield(0, l.Lt)(E.ep);) yield(0, l.cb)(oe), yield(0, l.yJ)((0, w.kH)())
                }

                function* En(V, le) {
                    yield(0, l.cb)(oe / 2), yield(0, l.yJ)((0, y.AH)(V, le)), yield* Jr(re(un())), yield* Jr(re(Un()))
                }

                function* $r(V) {
                    var le, me = yield(0, l.T1)(P.R), Ue = yield(0, l.T1)(I.Y7), ft = yield(0, l.Lt)(E.oR), at = yield(0, l.Lt)(te.eM), It = yield(0, l.Lt)(K.EN), Rr = yield(0, l.Lt)(b.kc), Yr = (le = yield(0, l.Lt)(ee.fF)) === null || le === void 0 ? void 0 : le.ref, Pn = yield(0, l.Lt)(f.UL), Kn, vn;
                    Pn ? (Kn = yield(0, l.Lt)(f.CO), vn = yield(0, l.Lt)(f.iA)) : (Kn = yield(0, l.Lt)(E.lX), vn = yield(0, l.Lt)(E.D6));
                    var ta = yield(0, l.T1)(C.pt, {
                        formId: at,
                        landingId: Kn,
                        landingAt: vn,
                        values: ft,
                        payment: V,
                        outcome: It,
                        featureFlags: Rr,
                        thankYouScreenRef: Yr,
                        respondentValidationPayload: Ue,
                        enrichmentMetadata: me
                    });
                    return yield(0, l.T1)(I.FH), ta
                }

                function* dn() {
                    yield(0, l.yJ)(m(null)), yield(0, l.yJ)(u(null))
                }

                function* Bn(V, le) {
                    var me = V.details;
                    yield(0, l.Q7)(me.map(Ue => (0, l.yJ)((0, N.Z_)(Ue.field)))), yield(0, l.yJ)((0, S.wQ)()), yield(0, l.yJ)((0, S.cr)()), yield(0, l.yJ)((0, y.yf)(null, le, null, null))
                }

                function* Cn(V, le) {
                    var me = ir(V);
                    if (!me) return yield(0, l.T1)(En, le, "connection_error");
                    if (me === Mt) {
                        yield(0, l.T1)(Bn, V, me);
                        return
                    }
                    var Ue = Fr(V, me),
                        ft = ze(V),
                        at = Zr(V);
                    yield(0, l.T1)(dn), yield(0, l.yJ)((0, y.yf)(Ue, me, ft, at)), nt(V) && (yield(0, l.yJ)(O()))
                }

                function* qr(V) {
                    var le = Z(V);
                    return yield(0, l.T1)(dn), yield(0, l.yJ)((0, y.yf)(W.A[le] || "label.error.generic", le))
                }

                function* Lt() {
                    var V = yield(0, l.Lt)(ee.fF), le = yield(0, l.Lt)(f.fD), me = yield(0, l.Lt)(f.UL), Ue;
                    if (V != null && V.autoRedirect) {
                        if (!V.redirectUrl) {
                            var ft = yield(0, l.Lt)(ee.LK);
                            return le ? yield(0, l.yJ)((0, p.Gy)(!1)): (me && (yield(0, l.yJ)((0, p.LU)()), yield(0, l.yJ)({
                                type: h.IU
                            })), yield(0, l.yJ)((0, S.IH)(ft)))
                        }
                        Ue = V.redirectUrl
                    }
                    var at = yield(0, l.Lt)(te.C_), It = Ue || at;
                    if (It) yield(0, l.cb)(L.l6), (0, Me.Zg)(It);
                    else {
                        if (le) return yield(0, l.yJ)((0, p.Gy)(!1));
                        me && (yield(0, l.yJ)((0, p.LU)()), yield(0, l.yJ)({
                            type: h.IU
                        })), yield(0, l.yJ)((0, S.IH)(V.ref))
                    }
                }

                function* Un() {
                    yield(0, l.yJ)((0, y.uz)());
                    var V = yield(0, l.Lt)(E.Gt), le = kt(V);
                    if (yield(0, l.Lt)(se.ys)) return yield(0, l.yJ)(O());
                    if (!(yield(0, l.Lt)(E._7))) return yield* Jr(re(En(le, "no_landing")));
                    try {
                        var me = yield(0, l.Lt)(ue.WV);
                        if (me) return yield* Jr(re(cn(me, le)));
                        yield(0, l.T1)($r), yield(0, l.yJ)((0, y.L3)())
                    } catch (Ue) {
                        return yield(0, l.T1)(Cn, Ue, le)
                    }
                    yield(0, l.T1)(Lt)
                }

                function* cn(V, le) {
                    try {
                        var me = yield(0, l.Lt)(G.Qd);
                        if (!me) throw new A.A("missing_stripe_account", "label.error.generic");
                        var Ue = yield(0, l.Lt)(G.zU), ft = yield(0, l.Lt)(G.oT);
                        if (Ue && !ft) return yield* Jr(re(en(Ue, me, le)));
                        if (ft) return yield* Jr(re(Cr(ft, Ue, me, le)));
                        var at = yield(0, l.Lt)(G.X1), It = yield(0, l.T1)(at.createPaymentMethod, V);
                        return It.error ? yield(0, l.T1)(qr, It.error): (Ue = It.paymentMethod && It.paymentMethod.id, yield(0, l.yJ)(m(Ue)), yield* Jr(re(en(Ue, me, le))))
                    } catch (Rr) {
                        return yield(0, l.T1)(Cn, Rr, le)
                    }
                }

                function* en(V, le, me) {
                    try {
                        var Ue = yield(0, l.T1)($r, {
                            provider: tt,
                            [tt]: {
                                payment_method: V,
                                account_id: le
                            }
                        });
                        if (Ue.provider === tt) {
                            var ft = yield(0, l.Lt)(G.X1), at = yield(0, l.T1)(ft.handleCardAction, Ue[tt].client_secret);
                            if (at.error) return yield(0, l.T1)(qr, at.error);
                            var It = at.paymentIntent.id;
                            return yield(0, l.yJ)(u(It)), yield* Jr(re(Cr(It, V, le, me)))
                        }
                        yield(0, l.yJ)((0, y.L3)())
                    } catch (Rr) {
                        return yield(0, l.T1)(Cn, Rr, me)
                    }
                    yield(0, l.T1)(Lt)
                }

                function* Cr(V, le, me, Ue) {
                    try {
                        yield(0, l.T1)($r, {
                            provider: tt,
                            [tt]: {
                                payment_method: le,
                                account_id: me
                            },
                            ref: V
                        }), yield(0, l.yJ)((0, y.L3)())
                    } catch (ft) {
                        return yield(0, l.T1)(Cn, ft, Ue)
                    }
                    yield(0, l.T1)(Lt)
                }
            },
            83926: (ve, R, r) => {
                r.d(R, {
                    _N: () => p,
                    wv: () => l
                });
                var l = "top",
                    f = "center",
                    p = "bottom"
            },
            84117: (ve, R, r) => {
                r.d(R, {
                    A: () => D
                });
                var l = r(7897),
                    f = r(17771),
                    p = r(46651);

                function h(O, y) {
                    var m = Object.keys(O);
                    if (Object.getOwnPropertySymbols) {
                        var u = Object.getOwnPropertySymbols(O);
                        y && (u = u.filter(function(S) {
                            return Object.getOwnPropertyDescriptor(O, S).enumerable
                        })), m.push.apply(m, u)
                    }
                    return m
                }

                function w(O) {
                    for (var y = 1; y < arguments.length; y++) {
                        var m = arguments[y] != null ? arguments[y] : {};
                        y % 2 ? h(Object(m), !0).forEach(function(u) {
                            (0, l.A)(O, u, m[u])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(m)) : h(Object(m)).forEach(function(u) {
                            Object.defineProperty(O, u, Object.getOwnPropertyDescriptor(m, u))
                        })
                    }
                    return O
                }
                var B = O => (0, p.jsx)("svg", w(w({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, O), {}, {
                    children: (0, p.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.586 7a2 2 0 0 1 2.828 0l7.293 7.293a1 1 0 0 1-1.414 1.414L12 8.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 7Z"
                    })
                }));
                const D = B
            },
            85731: (ve, R, r) => {
                r.d(R, {
                    Ay: () => O,
                    pW: () => w,
                    kA: () => B
                });
                var l = ['area[href]:not([tabindex^="-"])', 'input:not([type="hidden"]):not([disabled]):not([tabindex^="-"])', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', 'a[href]:not([tabindex^="-"])', 'iframe:not([tabindex^="-"])', 'audio[controls]:not([tabindex^="-"])', 'video[controls]:not([tabindex^="-"])', '[contenteditable]:not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])'];

                function f(y) {
                    return typeof window == "undefined" || typeof document == "undefined" || typeof y.contains != "function" ? !1 : y === document.activeElement || y.contains(document.activeElement)
                }
                var p = (y, m) => {
                        var u = l.join(",");
                        if (y.matches(u)) return y;
                        if (m) {
                            var S = Array.from(y.querySelectorAll(u));
                            return S.find(N => !N.hasAttribute("href"))
                        }
                        return y.querySelector(u)
                    },
                    h = (y, m) => {
                        var u = f(y);
                        if (!u) {
                            var S = p(y, m);
                            return S != null ? S : document.body
                        }
                    },
                    w = function(m) {
                        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                        if (m) {
                            var N = () => m == null ? void 0 : m.focus({
                                preventScroll: S
                            });
                            if (u === 0) {
                                N();
                                return
                            }
                            setTimeout(N, u)
                        }
                    },
                    B = y => y ? !!y.querySelectorAll(":focus").length : !1,
                    D = function(m) {
                        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                        if (m) {
                            var N = () => {
                                var C = h(m, S);
                                C == null || C.focus()
                            };
                            if (u === 0) {
                                N();
                                return
                            }
                            setTimeout(N, u)
                        }
                    };
                const O = D
            },
            86300: (ve, R, r) => {
                r.d(R, {
                    EK: () => h,
                    G5: () => f,
                    LQ: () => B,
                    TN: () => p,
                    Tz: () => w,
                    Xz: () => l,
                    al: () => y,
                    y9: () => O,
                    zr: () => D
                });
                var l = "typeform-thankyou",
                    f = "typeform-thankyoubutton",
                    p = "typeform-endscreen",
                    h = "typeform-endscreenbutton",
                    w = "default_link",
                    B = "custom-endscreenbutton",
                    D = "typeform-endscreenbutton",
                    O = "branded-ty-button",
                    y = "branded-ty-description"
            },
            88358: (ve, R, r) => {
                r.d(R, {
                    A: () => f
                });
                var l = r(71910);
                const f = l.A
            },
            88892: (ve, R, r) => {
                r.d(R, {
                    Ay: () => N,
                    Gy: () => y,
                    LU: () => u,
                    Yf: () => m,
                    qD: () => S
                });
                var l = r(71311);

                function f(C, W) {
                    var L = Object.keys(C);
                    if (Object.getOwnPropertySymbols) {
                        var te = Object.getOwnPropertySymbols(C);
                        W && (te = te.filter(function(K) {
                            return Object.getOwnPropertyDescriptor(C, K).enumerable
                        })), L.push.apply(L, te)
                    }
                    return L
                }

                function p(C) {
                    for (var W = 1; W < arguments.length; W++) {
                        var L = arguments[W] != null ? arguments[W] : {};
                        W % 2 ? f(Object(L), !0).forEach(function(te) {
                            h(C, te, L[te])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(L)) : f(Object(L)).forEach(function(te) {
                            Object.defineProperty(C, te, Object.getOwnPropertyDescriptor(L, te))
                        })
                    }
                    return C
                }

                function h(C, W, L) {
                    return (W = w(W)) in C ? Object.defineProperty(C, W, {
                        value: L,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : C[W] = L, C
                }

                function w(C) {
                    var W = B(C, "string");
                    return typeof W == "symbol" ? W : W + ""
                }

                function B(C, W) {
                    if (typeof C != "object" || !C) return C;
                    var L = C[Symbol.toPrimitive];
                    if (L !== void 0) {
                        var te = L.call(C, W || "default");
                        if (typeof te != "object") return te;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return (W === "string" ? String : Number)(C)
                }
                var D = {
                        parentFormId: "",
                        showAfterSubmission: !1,
                        isActive: !1,
                        submit: {}
                    },
                    O = (0, l.Z0)({
                        name: "pulseSurvey",
                        initialState: D,
                        reducers: {
                            setShowAfterSubmission: (C, W) => {
                                C.showAfterSubmission = W.payload
                            },
                            activate: C => {
                                C.isActive = !0
                            },
                            deactivate: C => {
                                C.isActive = !1
                            },
                            setSubmitProperties: (C, W) => {
                                C.submit = p({}, W.payload)
                            }
                        }
                    }),
                    {
                        setShowAfterSubmission: y,
                        activate: m,
                        deactivate: u,
                        setSubmitProperties: S
                    } = O.actions;
                const N = O.reducer
            },
            89091: (ve, R, r) => {
                r.d(R, {
                    Bc: () => B,
                    Zg: () => u,
                    eJ: () => S
                });
                var l = r(88395),
                    f = r.n(l),
                    p = r(82905),
                    h = r(76214),
                    w = r(52149),
                    B = "https://www.typeform.com/explore/",
                    D = "THANK_YOU_SCREEN_REDIRECT",
                    O = "AFTER_SUBMIT_REDIRECT",
                    y = "_parent",
                    m = {
                        allowUnknownSchemes: !0
                    },
                    u = (K, E) => {
                        te(K, O, E)
                    },
                    S = (K, E) => {
                        te(K, D, E)
                    },
                    N = K => f()(K, m),
                    C = () => {
                        if (window && window.location) {
                            var K = window.location.search.match(/typeform-embed-redirect-target=(_self|_top|_blank|_parent)/i);
                            if (K && K[1]) return K[1]
                        }
                        return y
                    },
                    W = () => {
                        if (window && window.location) {
                            var K = window.location.search.match(/typeform-embed-handles-redirect/i);
                            return !!K
                        }
                        return !1
                    },
                    L = (K, E) => {
                        var ee = new URL(K),
                            ue = new URLSearchParams(new URL(E).search);
                        return ue.forEach((G, se) => {
                            ee.searchParams.get(se) || ee.searchParams.set(se, G)
                        }), ee.toString()
                    },
                    te = (K, E, ee) => {
                        if (N(K)) {
                            var ue = K,
                                G = ue.startsWith(B),
                                se = !G && (ue.includes(".typeform.com/") || ue.includes(".typeform.eu/"));
                            se && (0, h.A)() && (0, w.N)() && C() === "_self" && (ue = L(K, window.location.href));
                            var b = "";
                            if ((0, h.A)() ? b = C() : G && (b = "_blank"), (0, h.A)()) switch (E) {
                                case D:
                                    {
                                        p.eJ(ee, ue, b);
                                        break
                                    }
                                case O:
                                    {
                                        p.tI(ee, ue, b);
                                        break
                                    }
                                default:
                                    break
                            }
                            if (!W()) try {
                                var Ee = document.createElement("a");
                                Ee.href = ue, Ee.target = b, document.body.appendChild(Ee), Ee.click(), document.body.removeChild(Ee);
                                var A = window.location.origin + window.location.pathname;
                                ue.includes(A) && setTimeout(() => window.location.reload(), 500)
                            } catch (Me) {
                                console.error(Me)
                            }
                        }
                    }
            },
            89368: (ve, R, r) => {
                r.d(R, {
                    Ey: () => ue,
                    Y7: () => K,
                    hy: () => ee,
                    FH: () => E
                });
                var l = r(57036),
                    f = r(3502),
                    p = r(99501),
                    h = r(11214);

                function w(G, se, b, Ee, A, Me, M) {
                    try {
                        var I = G[Me](M),
                            P = I.value
                    } catch (g) {
                        return void b(g)
                    }
                    I.done ? se(P) : Promise.resolve(P).then(Ee, A)
                }

                function B(G) {
                    return function() {
                        var se = this,
                            b = arguments;
                        return new Promise(function(Ee, A) {
                            var Me = G.apply(se, b);

                            function M(P) {
                                w(Me, Ee, A, M, I, "next", P)
                            }

                            function I(P) {
                                w(Me, Ee, A, M, I, "throw", P)
                            }
                            M(void 0)
                        })
                    }
                }
                var D = G => G ? {
                        respondent_validation: {
                            recaptcha_v2: G
                        }
                    } : null,
                    O = "recaptcha-container",
                    y = G => {
                        if (!(!G || document.getElementById(O))) {
                            window.grecaptchaOnload = () => {
                                var Ee, A = document.createElement("div");
                                A.id = O, document.body.append(A), (Ee = window.grecaptcha) === null || Ee === void 0 || Ee.render(O, {
                                    size: "invisible",
                                    sitekey: G
                                })
                            };
                            var se = document.createElement("style");
                            se.innerHTML = ".grecaptcha-badge {display: none !important;} .rc-anchor-normal-footer {display: none !important;}", document.body.append(se);
                            var b = document.createElement("script");
                            b.src = "https://www.recaptcha.net/recaptcha/api.js?onload=grecaptchaOnload&render=explicit", b.async = !0, b.defer = !0, document.body.append(b)
                        }
                    },
                    m, u = () => new Promise(G => {
                        window.grecaptcha && (window.grecaptcha.execute(), m && window.clearInterval(m), m = window.setInterval(B(function*() {
                            var se = window.grecaptcha.getResponse();
                            se && (window.clearInterval(m), G(se))
                        }), 500))
                    }),
                    S = G => G ? {
                        respondent_validation: {
                            recaptcha_v3: G
                        }
                    } : null,
                    N = G => {
                        if (G) {
                            var se = document.createElement("style");
                            se.innerHTML = ".grecaptcha-badge {display: none !important;} .rc-anchor-normal-footer {display: none !important;}", document.body.append(se);
                            var b = document.createElement("script");
                            b.src = "https://www.recaptcha.net/recaptcha/api.js?render=".concat(G), b.async = !0, b.defer = !0, document.body.append(b)
                        }
                    },
                    C = G => new Promise(se => {
                        window.grecaptcha && window.grecaptcha.ready(() => {
                            window.grecaptcha.execute(G).then(b => {
                                se(b)
                            })
                        })
                    }),
                    W = (G, se) => G === 3 ? S(se) : D(se),
                    L = (G, se) => G === 3 ? N(se) : y(se),
                    te = (G, se) => G === 3 ? C(se) : u();

                function* K() {
                    var G = yield(0, l.Lt)(h.Ev);
                    if (G) {
                        var se = yield(0, l.Lt)(h.$8), b = yield(0, l.Lt)(h.L$), Ee = yield(0, l.T1)(te, b, se);
                        return yield(0, l.T1)(W, b, Ee)
                    }
                }

                function* E() {
                    var G = yield(0, l.Lt)(h.Ev), se = yield(0, l.Lt)(h.L$);
                    G && se === 2 && (yield(0, l.yJ)((0, f.TN)()))
                }

                function* ee() {
                    var G = yield(0, l.Lt)(h.Ev);
                    if (G) {
                        var se = yield(0, l.Lt)(h.$8), b = yield(0, l.Lt)(h.L$);
                        yield(0, l.T1)(L, b, se)
                    }
                }

                function ue(G) {
                    var {
                        payload: se
                    } = G;
                    return function*() {
                        var b = yield(0, l.Lt)(h.$8), Ee = yield(0, l.Lt)(h.L$);
                        yield(0, l.T1)(te, Ee, b), yield(0, l.yJ)((0, p.cB)(se))
                    }()
                }
            },
            91664: (ve, R, r) => {
                r.d(R, {
                    A: () => D
                });
                var l = r(7897),
                    f = r(17771),
                    p = r(46651);

                function h(O, y) {
                    var m = Object.keys(O);
                    if (Object.getOwnPropertySymbols) {
                        var u = Object.getOwnPropertySymbols(O);
                        y && (u = u.filter(function(S) {
                            return Object.getOwnPropertyDescriptor(O, S).enumerable
                        })), m.push.apply(m, u)
                    }
                    return m
                }

                function w(O) {
                    for (var y = 1; y < arguments.length; y++) {
                        var m = arguments[y] != null ? arguments[y] : {};
                        y % 2 ? h(Object(m), !0).forEach(function(u) {
                            (0, l.A)(O, u, m[u])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(m)) : h(Object(m)).forEach(function(u) {
                            Object.defineProperty(O, u, Object.getOwnPropertyDescriptor(m, u))
                        })
                    }
                    return O
                }
                var B = O => (0, p.jsx)("svg", w(w({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, O), {}, {
                    children: (0, p.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.293 8.293a1 1 0 0 1 1.414 0L12 15.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 17a2 2 0 0 1-2.828 0L3.293 9.707a1 1 0 0 1 0-1.414Z"
                    })
                }));
                const D = B
            },
            92625: (ve, R, r) => {
                r.d(R, {
                    e: () => B
                });
                var l = r(78607);

                function f(D, O, y, m, u, S, N) {
                    try {
                        var C = D[S](N),
                            W = C.value
                    } catch (L) {
                        return void y(L)
                    }
                    C.done ? O(W) : Promise.resolve(W).then(m, u)
                }

                function p(D) {
                    return function() {
                        var O = this,
                            y = arguments;
                        return new Promise(function(m, u) {
                            var S = D.apply(O, y);

                            function N(W) {
                                f(S, m, u, N, C, "next", W)
                            }

                            function C(W) {
                                f(S, m, u, N, C, "throw", W)
                            }
                            N(void 0)
                        })
                    }
                }
                var h = "https://",
                    w = new RegExp(/(https?|ftp|app):\/\//),
                    B = function() {
                        var D = p(function*(O, y, m, u) {
                            var S = Array.isArray(u) ? u[0] : u;
                            if (S) {
                                var N = S.trim(),
                                    C = w.test(N) ? N : "".concat(h).concat(N);
                                return y((0, l.fW)(m, C, O))
                            }
                        });
                        return function(y, m, u, S) {
                            return D.apply(this, arguments)
                        }
                    }()
            },
            93320: (ve, R, r) => {
                r.d(R, {
                    A: () => I
                });
                var l = r(17771),
                    f = r(82744),
                    p = r(94567),
                    h = r(52121),
                    w = r(70315),
                    B = r(8564),
                    D = r(57773),
                    O = r(32336),
                    y = r(34717),
                    m = r(91949),
                    u = r(46651),
                    S = 16,
                    N = 16,
                    C = (0, p.i7)(["from{opacity:1;}to{opacity:0;display:none;}"]),
                    W = 200,
                    L = p.Ay.div.withConfig({
                        displayName: "Wrapper",
                        componentId: "sc-__sc-1x0xizo-0"
                    })(["background:linear-gradient( 180deg,rgba(0,0,0,0.3) 40%,rgba(0,0,0,0.15) 75%,rgba(0,0,0,0) 100% );position:absolute;top:0;width:100%;z-index:", ";", " ", ""], O.mh.level2, P => {
                        var {
                            $paddingTop: g
                        } = P;
                        return (0, p.AH)(["padding:", "px ", "px 32px ", "px;"], g, N, N)
                    }, P => {
                        var {
                            $isHidden: g,
                            $fadeOutAnimationDuration: ae
                        } = P;
                        return g && (0, p.AH)(["animation:", " ", "ms ease-out forwards;"], C, ae)
                    }),
                    te = (0, p.Ay)(y.Ay).withConfig({
                        displayName: "CustomContent",
                        componentId: "sc-__sc-1x0xizo-1"
                    })(["display:block;max-width:calc(100% - ", "px);"], N * 2),
                    K = P => {
                        var {
                            children: g,
                            disableAnimations: ae,
                            isLogoVisible: H = !1,
                            isTitleHidden: Y,
                            logoSize: re = m.gp
                        } = P, oe = (0, D.dv)(), fe = ae ? 0 : W, Ae = H ? (0, m.$b)(re, oe).maxHeight + S : S;
                        return (0, u.jsx)(L, {
                            "aria-hidden": Y,
                            "data-qa": "media-title",
                            $fadeOutAnimationDuration: fe,
                            $isHidden: Y,
                            $paddingTop: Ae,
                            children: (0, u.jsx)(te, {
                                htmlTag: "span",
                                forceFontSizeVariant: O.NB.medium,
                                color: "#fff",
                                children: g
                            })
                        })
                    };
                const E = K;
                var ee = r(4477),
                    ue = r(43388),
                    G = r(57396),
                    se = "#fffffff0",
                    b = p.Ay.div.withConfig({
                        displayName: "Wrapper",
                        componentId: "sc-__sc-nmrefb-0"
                    })(["height:100%;background-color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;width:100%;"], se),
                    Ee = () => {
                        var {
                            t: P
                        } = (0, G.fN)();
                        return (0, u.jsxs)(b, {
                            children: [(0, u.jsx)(ee.A, {
                                svg: (0, u.jsx)(ue.A, {
                                    width: 48,
                                    height: 48
                                }),
                                color: O.Tj.error_red
                            }), (0, u.jsx)(y.UC, {
                                htmlTag: "span",
                                type: O.go.blockDescription,
                                children: P("video.error-status.title")
                            }), (0, u.jsx)(y.UC, {
                                htmlTag: "span",
                                type: O.go.blockDescription,
                                children: P("video.error-status.description")
                            })]
                        })
                    };
                const A = Ee;
                var Me = p.Ay.div.withConfig({
                        displayName: "PlaceholderWrapper",
                        componentId: "sc-__sc-1lcsybf-0"
                    })(["height:100%;width:100%;display:flex;pointer-events:auto;"]),
                    M = P => {
                        var {
                            infoMessageOverlay: g,
                            disableAnimations: ae,
                            href: H,
                            shouldMuteAutoplay: Y,
                            isCollapsed: re = !1,
                            isLogoVisible: oe = !1,
                            isVisible: fe = !1,
                            logoSize: Ae,
                            mediaPlaceholder: Ne,
                            metadata: We,
                            onPlay: qe,
                            onEnded: Ie,
                            onTimeUpdate: Mt,
                            onAutoplayFailed: $,
                            properties: tt,
                            title: bt,
                            forceShowTitle: et = !1
                        } = P, vt, [Ht, kt] = (0, l.useState)(!1), [nt, _t] = (0, l.useState)(!1), [wr, Nr] = (0, l.useState)(!1), Zt = (0, D.dv)(), Z = Zt === O.LO.SMALL;
                        (0, l.useEffect)(() => {
                            !fe && _t(!1)
                        }, [fe]);
                        var {
                            fit: ir,
                            isCaptionsControlHidden: ze,
                            thumbnailTime: Zr,
                            isAutoplay: Fr
                        } = tt != null ? tt : {}, Et = () => {
                            if (!(!Fr || !fe)) return Y ? h.MuxPlayerAutoplay.MUTED : h.MuxPlayerAutoplay.UNMUTED
                        }, Hn = Et();
                        if (Ne) return (0, u.jsx)(Me, {
                            children: Ne
                        });
                        if (!H) return (0, u.jsx)(A, {});
                        var un = (0, f.getVideoProvider)(H),
                            En = (vt = (0, f.getVideoId)(H)) !== null && vt !== void 0 ? vt : "";
                        if (!un || !En) return (0, u.jsx)(A, {});
                        var $r = () => {
                            kt(!0)
                        };
                        if (Ht) return (0, u.jsx)(A, {});
                        var dn = () => {
                                _t(!1), $ == null || $()
                            },
                            Bn = function() {
                                var qr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                                    Lt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                fe && _t(qr && !Lt), Nr(!qr || Lt), qe == null || qe(qr, Lt)
                            };
                        return (0, u.jsxs)(u.Fragment, {
                            children: [bt && Z && (0, u.jsx)(E, {
                                disableAnimations: ae,
                                isLogoVisible: oe,
                                isTitleHidden: !et && (re || wr),
                                logoSize: Ae,
                                children: bt
                            }), (0, u.jsx)(w.A, {
                                autoplay: Hn,
                                addPlayButton: nt,
                                service: un,
                                id: En,
                                cover: !ir,
                                hideCaptionsControl: ze,
                                infoMessageOverlay: g,
                                thumbnailTime: Zr,
                                isVisible: fe,
                                isVideoCentered: !0,
                                onHideAction: "stop",
                                height: B.gh,
                                onError: $r,
                                onPlay: Bn,
                                onAutoplayFailed: dn,
                                onEnded: Ie,
                                onTimeUpdate: Mt,
                                playerMetadata: We
                            })]
                        })
                    };
                const I = M
            },
            97149: (ve, R, r) => {
                r.d(R, {
                    A: () => B,
                    J: () => w
                });
                var l = r(17771);

                function f() {
                    return f = Object.assign ? Object.assign.bind() : function(D) {
                        for (var O = 1; O < arguments.length; O++) {
                            var y = arguments[O];
                            for (var m in y)({}).hasOwnProperty.call(y, m) && (D[m] = y[m])
                        }
                        return D
                    }, f.apply(null, arguments)
                }
                var p = l.createContext(!1),
                    h = p.Consumer,
                    w = D => O => l.createElement(h, null, y => l.createElement(D, f({}, O, {
                        isBlockChanging: y
                    })));
                const B = p
            }
        }
    ]);
})();