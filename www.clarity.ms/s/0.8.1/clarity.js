/* clarity-js v0.8.1: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get add() {
                return Xa
            },
            get get() {
                return Fa
            },
            get getId() {
                return Pa
            },
            get getNode() {
                return qa
            },
            get getValue() {
                return Ua
            },
            get has() {
                return Ba
            },
            get hashText() {
                return Ha
            },
            get iframe() {
                return Aa
            },
            get iframeContent() {
                return Ra
            },
            get lookup() {
                return Va
            },
            get parse() {
                return Da
            },
            get removeIFrame() {
                return La
            },
            get sameorigin() {
                return ja
            },
            get start() {
                return _a
            },
            get stop() {
                return Ia
            },
            get update() {
                return Ya
            },
            get updates() {
                return Ja
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get queue() {
                return xr
            },
            get start() {
                return Nr
            },
            get stop() {
                return _r
            },
            get track() {
                return Sr
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get clone() {
                return Kr
            },
            get compute() {
                return Zr
            },
            get data() {
                return Hr
            },
            get keys() {
                return qr
            },
            get reset() {
                return Qr
            },
            get start() {
                return Jr
            },
            get stop() {
                return ti
            },
            get trigger() {
                return Gr
            },
            get update() {
                return $r
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get check() {
                return oi
            },
            get compute() {
                return ci
            },
            get data() {
                return zr
            },
            get start() {
                return ii
            },
            get stop() {
                return si
            },
            get trigger() {
                return ui
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get compute() {
                return gi
            },
            get data() {
                return li
            },
            get log() {
                return vi
            },
            get reset() {
                return mi
            },
            get start() {
                return pi
            },
            get stop() {
                return hi
            },
            get updates() {
                return di
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get callback() {
                return _i
            },
            get callbacks() {
                return wi
            },
            get clear() {
                return xi
            },
            get consent() {
                return Ni
            },
            get data() {
                return bi
            },
            get electron() {
                return ki
            },
            get id() {
                return Mi
            },
            get metadata() {
                return Oi
            },
            get save() {
                return Ii
            },
            get shortid() {
                return Pi
            },
            get start() {
                return Ti
            },
            get stop() {
                return Ei
            }
        }),
        o = Object.freeze({
            __proto__: null,
            get data() {
                return Wi
            },
            get envelope() {
                return qi
            },
            get start() {
                return zi
            },
            get stop() {
                return Hi
            }
        }),
        u = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null,
            delayDom: !1,
            throttleDom: !0,
            conversions: !1,
            includeSubdomains: !0,
            throttleMutations: !1,
            dropMutations: !1,
            criticalMs: 200,
            discard: []
        };

    function c(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var s = 0;

    function l(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now(),
            n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
        return Math.max(Math.round(e + n - s), 0)
    }
    var d = "0.8.1";

    function f(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var p = /\S/gi,
        h = 255,
        v = !0,
        g = null,
        m = null,
        y = null;

    function b(t, e, n, a, r) {
        if (void 0 === a && (a = !1), t) {
            if ("input" == e && ("checkbox" === r || "radio" === r)) return t;
            switch (n) {
                case 0:
                    return t;
                case 1:
                    switch (e) {
                        case "*T":
                        case "value":
                        case "placeholder":
                        case "click":
                            return function(t) {
                                var e = -1,
                                    n = 0,
                                    a = !1,
                                    r = !1,
                                    i = !1,
                                    o = null;
                                O();
                                for (var u = 0; u < t.length; u++) {
                                    var c = t.charCodeAt(u);
                                    if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                        if (a || r) {
                                            null === o && (o = t.split(""));
                                            var s = t.substring(e + 1, i ? u : u + 1);
                                            s = v && null !== y ? s.match(y) ? s : T(s, "▪", "▫") : S(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                        }
                                        i && (a = !1, r = !1, e = u)
                                    }
                                }
                                return o ? o.join("") : t
                            }(t);
                        case "input":
                        case "change":
                            return E(t)
                    }
                    return t;
                case 2:
                case 3:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return a ? k(t) : S(t);
                        case "src":
                        case "srcset":
                        case "title":
                        case "alt":
                            return 3 === n ? "" : t;
                        case "value":
                        case "click":
                        case "input":
                        case "change":
                            return E(t);
                        case "placeholder":
                            return S(t)
                    }
                    break;
                case 4:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return a ? k(t) : S(t);
                        case "value":
                        case "input":
                        case "click":
                        case "change":
                            return Array(5).join("•");
                        case "checksum":
                            return ""
                    }
                    break;
                case 5:
                    switch (e) {
                        case "*T":
                        case "data-":
                            return T(t, "▪", "▫");
                        case "value":
                        case "input":
                        case "click":
                        case "change":
                            return Array(5).join("•");
                        case "checksum":
                        case "src":
                        case "srcset":
                        case "alt":
                        case "title":
                            return ""
                    }
            }
        }
        return t
    }

    function w(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var a = t;
        if (e) a = "".concat("https://").concat("Electron");
        else {
            var r = u.drop;
            if (r && r.length > 0 && t && t.indexOf("?") > 0) {
                var i = t.split("?"),
                    o = i[0],
                    c = i[1];
                a = o + "?" + c.split("&").map((function(t) {
                    return r.some((function(e) {
                        return 0 === t.indexOf("".concat(e, "="))
                    })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
                })).join("&")
            }
        }
        return n && (a = a.substring(0, h)), a
    }

    function k(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function S(t) {
        return t.replace(p, "•")
    }

    function T(t, e, n) {
        return O(), t ? t.replace(m, e).replace(g, n) : t
    }

    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function O() {
        if (v && null === g) try {
            g = new RegExp("\\p{N}", "gu"), m = new RegExp("\\p{L}", "gu"), y = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            v = !1
        }
    }
    var M = null,
        N = null,
        x = !1;

    function _() {
        x && (M = {
            time: l(),
            event: 4,
            data: {
                visible: N.visible,
                docWidth: N.docWidth,
                docHeight: N.docHeight,
                screenWidth: N.screenWidth,
                screenHeight: N.screenHeight,
                scrollX: N.scrollX,
                scrollY: N.scrollY,
                pointerX: N.pointerX,
                pointerY: N.pointerY,
                activityTime: N.activityTime,
                scrollTime: N.scrollTime,
                pointerTime: N.pointerTime,
                moveX: N.moveX,
                moveY: N.moveY,
                moveTime: N.moveTime,
                downX: N.downX,
                downY: N.downY,
                downTime: N.downTime,
                upX: N.upX,
                upY: N.upY,
                upTime: N.upTime,
                pointerPrevX: N.pointerPrevX,
                pointerPrevY: N.pointerPrevY,
                pointerPrevTime: N.pointerPrevTime
            }
        }), N = N || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0,
            pointerTime: void 0,
            moveX: void 0,
            moveY: void 0,
            moveTime: void 0,
            downX: void 0,
            downY: void 0,
            downTime: void 0,
            upX: void 0,
            upY: void 0,
            upTime: void 0,
            pointerPrevX: void 0,
            pointerPrevY: void 0,
            pointerPrevTime: void 0
        }
    }

    function I(t, e, n, a) {
        switch (t) {
            case 8:
                N.docWidth = e, N.docHeight = n;
                break;
            case 11:
                N.screenWidth = e, N.screenHeight = n;
                break;
            case 10:
                N.scrollX = e, N.scrollY = n, N.scrollTime = a;
                break;
            case 12:
                N.moveX = e, N.moveY = n, N.moveTime = a, N.pointerPrevX = N.pointerX, N.pointerPrevY = N.pointerY, N.pointerPrevTime = N.pointerTime, N.pointerX = e, N.pointerY = n, N.pointerTime = a;
                break;
            case 13:
                N.downX = e, N.downY = n, N.downTime = a, N.pointerPrevX = N.pointerX, N.pointerPrevY = N.pointerY, N.pointerPrevTime = N.pointerTime, N.pointerX = e, N.pointerY = n, N.pointerTime = a;
                break;
            case 14:
                N.upX = e, N.upY = n, N.upTime = a, N.pointerPrevX = N.pointerX, N.pointerPrevY = N.pointerY, N.pointerPrevTime = N.pointerTime, N.pointerX = e, N.pointerY = n, N.pointerTime = a;
                break;
            default:
                N.pointerPrevX = N.pointerX, N.pointerPrevY = N.pointerY, N.pointerPrevTime = N.pointerTime, N.pointerX = e, N.pointerY = n, N.pointerTime = a
        }
        x = !0
    }

    function C(t) {
        N.activityTime = t
    }

    function D(t, e) {
        N.visible = "visible" === e ? 1 : 0, N.visible || C(t), x = !0
    }

    function P() {
        x && ri(4)
    }
    var X = Object.freeze({
            __proto__: null,
            activity: C,
            compute: P,
            reset: _,
            start: function() {
                x = !1, _()
            },
            get state() {
                return M
            },
            stop: function() {
                _()
            },
            track: I,
            visibility: D
        }),
        Y = null;

    function j(t, e) {
        lo() && t && "string" == typeof t && t.length < 255 && (Y = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        }, ri(24))
    }
    var A, R = null,
        L = null;

    function W(t) {
        t in R || (R[t] = 0), t in L || (L[t] = 0), R[t]++, L[t]++
    }

    function z(t, e) {
        null !== e && (t in R || (R[t] = 0), t in L || (L[t] = 0), R[t] += e, L[t] += e)
    }

    function H(t, e) {
        null !== e && !1 === isNaN(e) && (t in R || (R[t] = 0), (e > R[t] || 0 === R[t]) && (L[t] = e, R[t] = e))
    }

    function q(t, e, n) {
        return window.setTimeout(Vi(t), e, n)
    }

    function U(t) {
        return window.clearTimeout(t)
    }
    var F = 0,
        V = 0,
        B = null;

    function J() {
        B && U(B), B = q(G, V), F = l()
    }

    function G() {
        var t = l();
        A = {
            gap: t - F
        }, ri(25), A.gap < 3e5 ? B = q(G, V) : uo && (j("clarity", "suspend"), Ao(), ["mousemove", "touchstart"].forEach((function(t) {
            return Ji(document, t, fo)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Ji(window, t, fo)
        })))
    }
    var K = Object.freeze({
            __proto__: null,
            get data() {
                return A
            },
            reset: J,
            start: function() {
                V = 6e4, F = 0
            },
            stop: function() {
                U(B), F = 0, V = 0
            }
        }),
        Z = null;

    function Q(t, e) {
        if (t in Z) {
            var n = Z[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? Z[t].push([e, 0]) : a[1] = e - a[0]
        } else Z[t] = [
            [e, 0]
        ]
    }

    function $() {
        ri(36)
    }

    function tt() {
        Z = {}
    }
    var et = Object.freeze({
            __proto__: null,
            compute: $,
            get data() {
                return Z
            },
            reset: tt,
            start: function() {
                Z = {}
            },
            stop: function() {
                Z = {}
            },
            track: Q
        }),
        nt = null;

    function at(t) {
        lo() && u.lean && (u.lean = !1, nt = {
            key: t
        }, _i(), Ii(), u.upgrade && u.upgrade(t), ri(3))
    }
    var rt = Object.freeze({
        __proto__: null,
        get data() {
            return nt
        },
        start: function() {
            !u.lean && u.upgrade && u.upgrade("Config"), nt = null
        },
        stop: function() {
            nt = null
        },
        upgrade: at
    });

    function it(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function ot(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var ut = null;

    function ct(t, e) {
        lt(t, "string" == typeof e ? [e] : e)
    }

    function st(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), it(this, void 0, void 0, (function() {
            var r, i;
            return ot(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, pt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(T(u.substring(2), "*", "*")) : T(u, "*", "*")), lt("userId", [(r = i).userId]), lt("userHint", [r.userHint]), lt("userType", [ht(t)]), e && (lt("sessionId", [e]), r.sessionId = e), n && (lt("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function lt(t, e) {
        if (lo() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in ut ? ut[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            ut[t] = n
        }
    }

    function dt() {
        ri(34)
    }

    function ft() {
        ut = {}
    }

    function pt(t) {
        return it(this, void 0, void 0, (function() {
            var e;
            return ot(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ht(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var vt = "CompressionStream" in window;

    function gt(t) {
        return it(this, void 0, void 0, (function() {
            var e, n;
            return ot(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), vt ? (e = new ReadableStream({
                            start: function(e) {
                                return it(this, void 0, void 0, (function() {
                                    return ot(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, mt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function mt(t) {
        return it(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return ot(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var yt = null;

    function bt(t) {
        try {
            if (!yt) return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                yt(t)
            }))
        } catch (t) {}
    }
    var wt = [X, r, Object.freeze({
        __proto__: null,
        compute: dt,
        get data() {
            return ut
        },
        identify: st,
        reset: ft,
        set: ct,
        start: function() {
            ft()
        },
        stop: function() {
            ft()
        }
    }), a, et, i, o, e, K, rt, n];

    function kt() {
        R = {}, L = {}, W(5), wt.forEach((function(t) {
            return Vi(t.start)()
        }))
    }

    function St() {
        wt.slice().reverse().forEach((function(t) {
            return Vi(t.stop)()
        })), R = {}, L = {}
    }

    function Tt() {
        dt(), P(), gi(), ri(0), $(), ci(), Zr()
    }
    var Et, Ot = [];

    function Mt(t, e, n) {
        u.fraud && null !== t && n && n.length >= 5 && (Et = {
            id: t,
            target: e,
            checksum: f(n, 28)
        }, Ot.indexOf(Et.checksum) < 0 && (Ot.push(Et.checksum), Ar(41)))
    }
    var Nt = 5e3,
        xt = {},
        _t = [],
        It = null,
        Ct = null,
        Dt = null;

    function Pt() {
        xt = {}, _t = [], It = null, Ct = null
    }

    function Xt(t, e) {
        return void 0 === e && (e = 0), it(this, void 0, void 0, (function() {
            var n, a, r;
            return ot(this, (function(i) {
                for (n = 0, a = _t; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    _t[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: Mi()
                    })
                })), null === It && null === Ct && Yt(), [2, r]
            }))
        }))
    }

    function Yt() {
        var t = _t.shift();
        t && (It = t, t.task().then((function() {
            t.id === Mi() && (t.resolve(), It = null, Yt())
        })).catch((function(e) {
            t.id === Mi() && (e && Wr(0, 1, e.name, e.message, e.stack), It = null, Yt())
        })))
    }

    function jt(t) {
        var e = Wt(t);
        return e in xt ? performance.now() - xt[e].start > xt[e].yield ? 0 : 1 : 2
    }

    function At(t) {
        xt[Wt(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function Rt(t) {
        var e = performance.now(),
            n = Wt(t),
            a = e - xt[n].start;
        z(t.cost, a), W(5), xt[n].calls > 0 && z(4, a)
    }

    function Lt(t) {
        return it(this, void 0, void 0, (function() {
            var e, n;
            return ot(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Wt(t)) in xt ? (Rt(t), n = xt[e], [4, zt()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Wt(t);
                                if (xt && xt[e]) {
                                    var n = xt[e].calls,
                                        a = xt[e].yield;
                                    At(t), xt[e].calls = n + 1, xt[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in xt ? 1 : 2]
                }
            }))
        }))
    }

    function Wt(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function zt() {
        return it(this, void 0, void 0, (function() {
            return ot(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return Ct ? [4, Ct] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Ht(t, {
                                timeout: Nt
                            })
                        }))]
                }
            }))
        }))
    }
    var Ht = window.requestIdleCallback || function(t, e) {
            var n = performance.now(),
                a = new MessageChannel,
                r = a.port1,
                i = a.port2;
            r.onmessage = function(a) {
                var r = performance.now(),
                    o = r - n,
                    u = r - a.data;
                if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                    i.postMessage(r)
                }));
                else {
                    var c = o > e.timeout;
                    t({
                        didTimeout: c,
                        timeRemaining: function() {
                            return c ? 30 : Math.max(0, 30 - u)
                        }
                    })
                }
            }, requestAnimationFrame((function() {
                i.postMessage(performance.now())
            }))
        },
        qt = [];

    function Ut(t) {
        Ut.dn = 5;
        var e = dr(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && u.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? f(n, 28) : "";
            qt.push({
                time: l(t),
                event: 42,
                data: {
                    target: dr(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), Xt(pr.bind(this, 42))
        }
    }

    function Ft() {
        qt = []
    }

    function Vt(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Aa(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var Bt = ["input", "textarea", "radio", "button", "canvas"],
        Jt = [];

    function Gt(t) {
        Ji(t, "click", Kt.bind(this, 9, t), !0)
    }

    function Kt(t, e, n) {
        Kt.dn = 6;
        var a = Aa(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Vt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = dr(n),
            s = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            p = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        if (null !== i && null !== o) {
            var h = function(t) {
                var e = null,
                    n = !1;
                if (t) {
                    var a = t.textContent || String(t.value || "") || t.alt;
                    if (a) {
                        var r = a.replace(/\s+/g, " ").trim();
                        n = (e = r.substring(0, 25)).length === r.length
                    }
                }
                return {
                    text: e,
                    isFullText: n ? 1 : 0
                }
            }(c);
            Jt.push({
                time: l(n),
                event: t,
                data: {
                    target: c,
                    x: i,
                    y: o,
                    eX: f,
                    eY: p,
                    button: n.button,
                    reaction: Zt(c),
                    context: Qt(s),
                    text: h.text,
                    link: s ? s.href : null,
                    hash: null,
                    trust: n.isTrusted ? 1 : 0,
                    isFullText: h.isFullText
                }
            }), Xt(pr.bind(this, t))
        }
    }

    function Zt(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Bt.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Qt(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function $t() {
        Jt = []
    }
    var te = [];

    function ee(t, e) {
        ee.dn = 7, te.push({
            time: l(e),
            event: 38,
            data: {
                target: dr(e),
                action: t
            }
        }), Xt(pr.bind(this, 38))
    }

    function ne() {
        te = []
    }
    var ae = null,
        re = [];

    function ie(t) {
        ie.dn = 9;
        var e = dr(t),
            n = Fa(e);
        if (e && e.type && n) {
            var a = e.value,
                r = e.type;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var i = {
                target: e,
                value: a,
                type: r
            };
            re.length > 0 && re[re.length - 1].data.target === i.target && re.pop(), re.push({
                time: l(t),
                event: 27,
                data: i
            }), U(ae), ae = q(oe, 1e3, 27)
        }
    }

    function oe(t) {
        Xt(pr.bind(this, t))
    }

    function ue() {
        re = []
    }
    var ce, se = [],
        le = null,
        de = !1,
        fe = 0,
        pe = new Set;

    function he(t, e, n) {
        he.dn = 10;
        var a = Aa(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Vt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && ge({
            time: l(n),
            event: t,
            data: {
                target: dr(n),
                x: i,
                y: o
            }
        })
    }

    function ve(t, e, n) {
        ve.dn = 11;
        var a = Aa(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = l(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    s = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                s = s && a ? s + Math.round(a.offsetLeft) : s, d = d && a ? d + Math.round(a.offsetTop) : d;
                var f = "identifier" in c ? c.identifier : void 0;
                switch (t) {
                    case 17:
                        0 === pe.size && (de = !0, fe = f), pe.add(f);
                        break;
                    case 18:
                    case 20:
                        pe.delete(f)
                }
                var p = de && fe === f;
                null !== s && null !== d && ge({
                    time: o,
                    event: t,
                    data: {
                        target: dr(n),
                        x: s,
                        y: d,
                        id: f,
                        isPrimary: p
                    }
                }), 20 !== t && 18 !== t || fe === f && (de = !1)
            }
    }

    function ge(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = se.length,
                    n = e > 1 ? se[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && se.pop(), se.push(t), U(le), le = q(me, 500, t.event);
                break;
            default:
                se.push(t), me(t.event)
        }
    }

    function me(t) {
        Xt(pr.bind(this, t))
    }

    function ye() {
        se = []
    }
    var be = null,
        we = !1;

    function ke() {
        ke.dn = 12;
        var t = document.documentElement;
        ce = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, we ? (U(be), be = q(Se, 500, 11)) : (pr(11), we = !0)
    }

    function Se(t) {
        Xt(pr.bind(this, t))
    }

    function Te() {
        ce = null, U(be)
    }
    var Ee = [],
        Oe = null,
        Me = null,
        Ne = null;

    function xe(t) {
        void 0 === t && (t = null), xe.dn = 13;
        var e = window,
            n = document.documentElement,
            a = t ? dr(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Aa(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = window.innerWidth,
            c = window.innerHeight,
            s = u / 3,
            d = u > c ? .15 * c : .2 * c,
            f = c - d,
            p = _e(s, d),
            h = _e(s, f),
            v = {
                time: l(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o,
                    top: p,
                    bottom: h
                }
            };
        if (null === t && 0 === i && 0 === o || null === i || null === o) return Oe = p, void(Me = h);
        var g = Ee.length,
            m = g > 1 ? Ee[g - 2] : null;
        m && function(t, e) {
            var n = t.data.x - e.data.x,
                a = t.data.y - e.data.y;
            return n * n + a * a < 400 && e.time - t.time < 25
        }(m, v) && Ee.pop(), Ee.push(v), U(Ne), Ne = q(Ie, 500, 10)
    }

    function _e(t, e) {
        var n, a, r;
        return "caretPositionFromPoint" in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint" in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer), r || (r = document.elementFromPoint(t, e)), r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode), r
    }

    function Ie(t) {
        Xt(pr.bind(this, t))
    }

    function Ce() {
        var t, e;
        if (Ce.dn = 14, Oe) {
            var n = fr(Oe, null);
            vi(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
        }
        if (Me) {
            var a = fr(Me, null);
            vi(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
        }
    }
    var De = null,
        Pe = null,
        Xe = null;

    function Ye(t) {
        Ye.dn = 15;
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = De.start ? De.start : null;
            null !== Pe && null !== De.start && n !== e.anchorNode && (U(Xe), je(21)), De = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, Pe = e, U(Xe), Xe = q(je, 500, 21)
        }
    }

    function je(t) {
        Xt(pr.bind(this, t))
    }

    function Ae() {
        Pe = null, De = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Re, Le, We = [];

    function ze(t) {
        ze.dn = 16, We.push({
            time: l(t),
            event: 39,
            data: {
                target: dr(t)
            }
        }), Xt(pr.bind(this, 39))
    }

    function He() {
        We = []
    }

    function qe(t) {
        qe.dn = 17, Re = {
            name: t.type,
            persisted: t.persisted ? 1 : 0
        }, pr(26, l(t)), Ao()
    }

    function Ue() {
        Re = null
    }

    function Fe(t) {
        void 0 === t && (t = null), Fe.dn = 18, Le = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, pr(28, l(t))
    }

    function Ve() {
        Le = null
    }

    function Be(t) {
        ! function(t) {
            var e = Aa(t);
            Ji(e ? e.contentWindow : t === document ? window : t, "scroll", xe, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Gt(t), function(t) {
            Ji(t, "cut", ee.bind(this, 0), !0), Ji(t, "copy", ee.bind(this, 1), !0), Ji(t, "paste", ee.bind(this, 2), !0)
        }(t), function(t) {
            Ji(t, "mousedown", he.bind(this, 13, t), !0), Ji(t, "mouseup", he.bind(this, 14, t), !0), Ji(t, "mousemove", he.bind(this, 12, t), !0), Ji(t, "wheel", he.bind(this, 15, t), !0), Ji(t, "dblclick", he.bind(this, 16, t), !0), Ji(t, "touchstart", ve.bind(this, 17, t), !0), Ji(t, "touchend", ve.bind(this, 18, t), !0), Ji(t, "touchmove", ve.bind(this, 19, t), !0), Ji(t, "touchcancel", ve.bind(this, 20, t), !0)
        }(t), function(t) {
            Ji(t, "input", ie, !0)
        }(t), function(t) {
            Ji(t, "selectstart", Ye.bind(this, t), !0), Ji(t, "selectionchange", Ye.bind(this, t), !0)
        }(t), function(t) {
            Ji(t, "change", Ut, !0)
        }(t), function(t) {
            Ji(t, "submit", ze, !0)
        }(t))
    }
    var Je = Object.freeze({
        __proto__: null,
        observe: Be,
        start: function t() {
            t.dn = 8, hr = [], gr(), $t(), ne(), ye(), ue(), we = !1, Ji(window, "resize", ke), ke(), Ji(document, "visibilitychange", Fe), Fe(), Ee = [], xe(), Ae(), Ft(), He(), Ji(window, "pagehide", qe)
        },
        stop: function() {
            hr = [], gr(), $t(), ne(), U(le), se.length > 0 && me(se[se.length - 1].event), U(ae), ue(), Te(), Ve(), U(Ne), Ee = [], Oe = null, Me = null, Ae(), U(Xe), Ft(), He(), Ue()
        }
    });
    var Ge = [],
        Ke = [],
        Ze = null,
        Qe = null,
        $e = "claritySheetId",
        tn = {},
        en = {},
        nn = [],
        an = [];

    function rn(t, e) {
        if (-1 === nn.indexOf(t) && nn.push(t), e = e || l(), null == t ? void 0 : t.adoptedStyleSheets) {
            H(36, 1);
            for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
                var i = r[a];
                i[$e] && -1 !== an.indexOf(i[$e]) || (i[$e] = Pi(), an.push(i[$e]), un(e, i[$e], 0), un(e, i[$e], 2, ca(i))), n.push(i[$e])
            }
            var o = Pa(t, !0);
            tn[o] || (tn[o] = []),
                function(t, e) {
                    if (t.length !== e.length) return !1;
                    return t.every((function(t, n) {
                        return t === e[n]
                    }))
                }(n, tn[o]) || (! function(t, e, n, a) {
                    Ke.push({
                        time: t,
                        event: 45,
                        data: {
                            id: e,
                            operation: n,
                            newIds: a
                        }
                    }), Tn(45)
                }(e, t == document ? -1 : Pa(t), 3, n), tn[o] = n, en[o] = e)
        }
    }

    function on() {
        Ke = [], Ge = []
    }

    function un(t, e, n, a) {
        Ge.push({
            time: t,
            event: 46,
            data: {
                id: e,
                operation: n,
                cssRules: a
            }
        }), Tn(46)
    }
    var cn, sn = [],
        ln = null,
        dn = null,
        fn = null,
        pn = null,
        hn = null,
        vn = null,
        gn = "clarityAnimationId",
        mn = "clarityOperationCount",
        yn = 20;

    function bn() {
        sn = []
    }

    function wn(t, e, n, a, r, i, o) {
        sn.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }), Tn(44)
    }

    function kn(t, e) {
        null === t && (t = Animation.prototype[e], Animation.prototype[e] = function() {
            return Sn(this, e), t.apply(this, arguments)
        })
    }

    function Sn(t, e) {
        if (lo()) {
            var n = t.effect,
                a = Pa(n.target);
            if (null !== a && n.getKeyframes && n.getTiming) {
                if (!t[gn]) {
                    t[gn] = Pi(), t[mn] = 0;
                    var r = n.getKeyframes(),
                        i = n.getTiming();
                    wn(l(), t[gn], 0, JSON.stringify(r), JSON.stringify(i), a)
                }
                if (t[mn]++ < yn) {
                    var o = null;
                    switch (e) {
                        case "play":
                            o = 1;
                            break;
                        case "pause":
                            o = 2;
                            break;
                        case "cancel":
                            o = 3;
                            break;
                        case "finish":
                            o = 4;
                            break;
                        case "commitStyles":
                            o = 5
                    }
                    o && wn(l(), t[gn], o)
                }
            }
        }
    }

    function Tn(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), it(this, void 0, void 0, (function() {
            var a, r, i, o, c, s, d, f, p, h, v, g, m, y, w, k, S, T, E, O, M, N, x, _, D, P, X, Y, j;
            return ot(this, (function(A) {
                switch (A.label) {
                    case 0:
                        switch (a = n || l(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 45:
                            case 46:
                                return [3, 3];
                            case 44:
                                return [3, 4];
                            case 5:
                            case 6:
                                return [3, 5]
                        }
                        return [3, 12];
                    case 1:
                        return i = cn, r.push(i.width), r.push(i.height), I(t, i.width, i.height), xr(r), [3, 12];
                    case 2:
                        for (o = 0, c = Qa; o < c.length; o++) s = c[o], (r = [s.time, 7]).push(s.data.id), r.push(s.data.interaction), r.push(s.data.visibility), r.push(s.data.name), xr(r);
                        return lr(), [3, 12];
                    case 3:
                        for (d = 0, f = Ke; d < f.length; d++) m = f[d], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.newIds), xr(r);
                        for (p = 0, h = Ge; p < h.length; p++) m = h[p], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.cssRules), xr(r);
                        return on(), [3, 12];
                    case 4:
                        for (v = 0, g = sn; v < g.length; v++) m = g[v], (r = [m.time, m.event]).push(m.data.id), r.push(m.data.operation), r.push(m.data.keyFrames), r.push(m.data.timing), r.push(m.data.timeline), r.push(m.data.targetId), xr(r);
                        return bn(), [3, 12];
                    case 5:
                        if (2 === jt(e)) return [3, 12];
                        if (!((y = Ja()).length > 0)) return [3, 11];
                        w = 0, k = y, A.label = 6;
                    case 6:
                        return w < k.length ? (S = k[w], 0 !== (T = jt(e)) ? [3, 8] : [4, Lt(e)]) : [3, 10];
                    case 7:
                        T = A.sent(), A.label = 8;
                    case 8:
                        if (2 === T) return [3, 10];
                        for (E = S.data, O = S.metadata.active, M = S.metadata.suspend, N = S.metadata.privacy, x = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(S), _ = 0, D = O ? ["tag", "attributes", "value"] : ["tag"]; _ < D.length; _++)
                            if (E[P = D[_]] || "" === E[P]) switch (P) {
                                case "tag":
                                    X = En(S), Y = x ? -1 : 1, r.push(S.id * Y), S.parent && O && (r.push(S.parent), S.previous && r.push(S.previous)), r.push(M ? "*M" : E[P]), X && 2 === X.length && r.push("".concat("#").concat(On(X[0]), ".").concat(On(X[1])));
                                    break;
                                case "attributes":
                                    for (j in E[P]) void 0 !== E[P][j] && r.push(Mn(j, E[P][j], N));
                                    break;
                                case "value":
                                    Mt(S.metadata.fraud, S.id, E[P]), r.push(b(E[P], E.tag, N, x))
                            }
                        A.label = 9;
                    case 9:
                        return w++, [3, 6];
                    case 10:
                        6 === t && C(a), xr(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !u.lean), A.label = 11;
                    case 11:
                        return [3, 12];
                    case 12:
                        return [2]
                }
            }))
        }))
    }

    function En(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = qa(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function On(t) {
        return t.toString(36)
    }

    function Mn(t, e, n) {
        return "".concat(t, "=").concat(b(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }

    function Nn() {
        cn = null
    }

    function xn() {
        xn.dn = 19;
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            p = e ? e.scrollHeight : null,
            h = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, p, h);
        null !== cn && c === cn.width && v === cn.height || null === c || null === v || (cn = {
            width: c,
            height: v
        }, Tn(8))
    }

    function _n(t, e, n, a) {
        return it(this, void 0, void 0, (function() {
            var r, i, o, u, c;
            return ot(this, (function(s) {
                switch (s.label) {
                    case 0:
                        r = [t], s.label = 1;
                    case 1:
                        if (!(r.length > 0)) return [3, 4];
                        for (i = r.shift(), o = i.firstChild; o;) r.push(o), o = o.nextSibling;
                        return 0 !== (u = jt(e)) ? [3, 3] : [4, Lt(e)];
                    case 2:
                        u = s.sent(), s.label = 3;
                    case 3:
                        return 2 === u ? [3, 4] : ((c = ra(i, n, a)) && r.push(c), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var In = new Set,
        Cn = [],
        Dn = {},
        Pn = null,
        Xn = null,
        Yn = null,
        jn = null,
        An = null,
        Rn = [],
        Ln = null,
        Wn = null,
        zn = null,
        Hn = {},
        qn = new WeakMap,
        Un = ["data-google-query-id", "data-load-complete", "data-google-container-id"];

    function Fn() {
        if (Fn.dn = 21, In = new Set, Rn = [], Ln = null, zn = 0, Hn = {}, qn = new WeakMap, null === Pn && (Pn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                return lo() && Zn(this.ownerNode), Pn.apply(this, arguments)
            }), "CSSMediaRule" in window && null === jn && (jn = CSSMediaRule.prototype.insertRule, CSSMediaRule.prototype.insertRule = function() {
                return lo() && Zn(this.parentStyleSheet.ownerNode), jn.apply(this, arguments)
            }), null === Xn && (Xn = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                return lo() && Zn(this.ownerNode), Xn.apply(this, arguments)
            }), "CSSMediaRule" in window && null === An && (An = CSSMediaRule.prototype.deleteRule, CSSMediaRule.prototype.deleteRule = function() {
                return lo() && Zn(this.parentStyleSheet.ownerNode), An.apply(this, arguments)
            }), null === Yn) {
            Yn = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return lo() ? Zn(Yn.apply(this, arguments)) : Yn.apply(this, arguments)
                }
            } catch (t) {
                Yn = null
            }
        }
    }

    function Vn(t) {
        Vn.dn = 22;
        var e = l();
        Q(6, e), Cn.push({
            time: e,
            mutations: t
        }), Xt(Jn, 1).then((function() {
            q(xn), Vi(or)()
        }))
    }

    function Bn(t, e, n, a) {
        return it(this, void 0, void 0, (function() {
            var r, i, o;
            return ot(this, (function(c) {
                switch (c.label) {
                    case 0:
                        return 0 !== (r = jt(t)) ? [3, 2] : [4, Lt(t)];
                    case 1:
                        r = c.sent(), c.label = 2;
                    case 2:
                        if (2 === r) return [2];
                        switch (i = e.target, o = u.throttleDom ? function(t, e, n, a) {
                            var r = t.target ? Fa(t.target.parentNode) : null;
                            if (r && "HTML" !== r.data.tag) {
                                var i = a > zn,
                                    o = Fa(t.target),
                                    c = o && o.selector ? o.selector.join() : t.target.nodeName,
                                    s = [r.selector ? r.selector.join() : "", c, t.attributeName, Gn(t.addedNodes), Gn(t.removedNodes)].join();
                                Hn[s] = s in Hn ? Hn[s] : [0, n];
                                var l = Hn[s];
                                if (!1 === i && l[0] >= 10 && Kn(l[2], 2, e, a), l[0] = i ? l[1] === n ? l[0] : l[0] + 1 : 1, l[1] = n, l[0] >= 10) return l[2] = t.removedNodes, n > a + 3e3 ? t.type : (u.dropMutations || (Dn[s] = {
                                    mutation: t,
                                    timestamp: a
                                }), "throttle")
                            }
                            return t.type
                        }(e, t, n, a) : e.type, o && i && i.ownerDocument && Da(i.ownerDocument), o && i && i.nodeType == Node.DOCUMENT_FRAGMENT_NODE && i.host && Da(i), o) {
                            case "attributes":
                                Un.indexOf(e.attributeName) < 0 && ra(i, 3, a);
                                break;
                            case "characterData":
                                ra(i, 4, a);
                                break;
                            case "childList":
                                Kn(e.addedNodes, 1, t, a), Kn(e.removedNodes, 2, t, a)
                        }
                        return [2]
                }
            }))
        }))
    }

    function Jn() {
        return it(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, s, d;
            return ot(this, (function(f) {
                switch (f.label) {
                    case 0:
                        At(t = {
                            id: Mi(),
                            cost: 3
                        }), f.label = 1;
                    case 1:
                        if (!(Cn.length > 0)) return [3, 7];
                        e = Cn.shift(), n = l(), a = 0, r = e.mutations, f.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], [4, Bn(t, i, n, e.time)]) : [3, 5];
                    case 3:
                        f.sent(), f.label = 4;
                    case 4:
                        return a++, [3, 2];
                    case 5:
                        return [4, Tn(6, t, e.time)];
                    case 6:
                        return f.sent(), [3, 1];
                    case 7:
                        o = !1, u = 0, c = Object.keys(Dn), f.label = 8;
                    case 8:
                        return u < c.length ? (s = c[u], d = Dn[s], delete Dn[s], [4, Bn(t, d.mutation, l(), d.timestamp)]) : [3, 11];
                    case 9:
                        f.sent(), o = !0, f.label = 10;
                    case 10:
                        return u++, [3, 8];
                    case 11:
                        return Object.keys(Dn).length > 0 && function() {
                            Wn && U(Wn);
                            Wn = q((function() {
                                Xt(Jn, 1)
                            }), 33)
                        }(), 0 === Object.keys(Dn).length && o ? [4, Tn(6, t, l())] : [3, 13];
                    case 12:
                        f.sent(), f.label = 13;
                    case 13:
                        return function() {
                            var t = l();
                            Object.keys(Hn).length > 1e4 && (Hn = {}, W(38));
                            for (var e = 0, n = Object.keys(Hn); e < n.length; e++) {
                                var a = n[e];
                                t > Hn[a][1] + 3e4 && delete Hn[a]
                            }
                        }(), Rt(t), [2]
                }
            }))
        }))
    }

    function Gn(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function Kn(t, e, n, a) {
        return it(this, void 0, void 0, (function() {
            var r, i, o, u;
            return ot(this, (function(c) {
                switch (c.label) {
                    case 0:
                        r = t ? t.length : 0, i = 0, c.label = 1;
                    case 1:
                        return i < r ? (o = t[i], 1 !== e ? [3, 2] : (_n(o, n, e, a), [3, 5])) : [3, 6];
                    case 2:
                        return 0 !== (u = jt(n)) ? [3, 4] : [4, Lt(n)];
                    case 3:
                        u = c.sent(), c.label = 4;
                    case 4:
                        if (2 === u) return [3, 6];
                        ra(o, e, a), c.label = 5;
                    case 5:
                        return i++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function Zn(t) {
        return Rn.indexOf(t) < 0 && Rn.push(t), Ln && U(Ln), Ln = q((function() {
            ! function() {
                for (var t = 0, e = Rn; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && Ba(n)) continue;
                        Qn(n, a ? "childList" : "characterData")
                    }
                }
                Rn = []
            }()
        }), 33), t
    }

    function Qn(t, e) {
        Qn.dn = 23, Vi(Vn)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    var $n = /[^0-9\.]/g;

    function ta(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    vi(5, t[a]), vi(8, t.creator), vi(18, t.headline);
                    break;
                case "product":
                    vi(5, t[a]), vi(10, t.name), vi(12, t.sku), t.brand && vi(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (H(11, ea(t.ratingValue, 100)), H(18, ea(t.bestRating)), H(19, ea(t.worstRating))), H(12, ea(t.ratingCount)), H(17, ea(t.reviewCount));
                    break;
                case "offer":
                    vi(7, t.availability), vi(14, t.itemCondition), vi(13, t.priceCurrency), vi(12, t.sku), H(13, ea(t.price));
                    break;
                case "brand":
                    vi(6, t.name)
            }
            null !== r && "object" == typeof r && ta(r)
        }
    }

    function ea(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace($n, "")) * e)
        }
        return null
    }
    var na = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label"],
        aa = /[\r\n]+/g;

    function ra(e, n, a) {
        var r, i = null;
        if (2 === n && !1 === Ba(e)) return i;
        0 !== n && e.nodeType === Node.TEXT_NODE && e.parentElement && "STYLE" === e.parentElement.tagName && (e = e.parentNode);
        var o = !1 === Ba(e) ? "add" : "update",
            u = e.parentElement ? e.parentElement : null,
            c = e.ownerDocument !== document;
        switch (e.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                u = c && e.parentNode ? Aa(e.parentNode) : u;
                var s = e,
                    l = {
                        tag: (c ? "iframe:" : "") + "*D",
                        attributes: {
                            name: s.name ? s.name : "HTML",
                            publicId: s.publicId,
                            systemId: s.systemId
                        }
                    };
                t[o](e, u, l, n);
                break;
            case Node.DOCUMENT_NODE:
                e === document && Da(document), rn(e, a), ia(e);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var d = e;
                if (d.host) {
                    if (Da(d), "function" === typeof d.constructor && d.constructor.toString().indexOf("[native code]") >= 0) {
                        ia(d);
                        var f = {
                            tag: "*S",
                            attributes: {
                                style: ""
                            }
                        };
                        t[o](e, d.host, f, n)
                    } else t[o](e, d.host, {
                        tag: "*P",
                        attributes: {}
                    }, n);
                    rn(e, a)
                }
                break;
            case Node.TEXT_NODE:
                if (u = u || e.parentNode, "update" === o || u && Ba(u) && "STYLE" !== u.tagName && "NOSCRIPT" !== u.tagName) {
                    var p = {
                        tag: "*T",
                        value: e.nodeValue
                    };
                    t[o](e, u, p, n)
                }
                break;
            case Node.ELEMENT_NODE:
                var h = e,
                    v = h.tagName,
                    g = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                na.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(h);
                switch (u = e.parentElement ? e.parentElement : e.parentNode ? e.parentNode : null, "http://www.w3.org/2000/svg" === h.namespaceURI && (v = "svg:" + v), v) {
                    case "HTML":
                        u = c && u ? Aa(u) : u;
                        var m = {
                            tag: (c ? "iframe:" : "") + v,
                            attributes: g
                        };
                        t[o](e, u, m, n);
                        break;
                    case "SCRIPT":
                        if ("type" in g && "application/ld+json" === g.type) try {
                            ta(JSON.parse(h.text.replace(aa, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        var y = {
                            tag: v,
                            attributes: {},
                            value: ""
                        };
                        t[o](e, u, y, n);
                        break;
                    case "META":
                        var b = "property" in g ? "property" : "name" in g ? "name" : null;
                        if (b && "content" in g) {
                            var w = g.content;
                            switch (g[b]) {
                                case "og:title":
                                    vi(20, w);
                                    break;
                                case "og:type":
                                    vi(19, w);
                                    break;
                                case "generator":
                                    vi(21, w)
                            }
                        }
                        break;
                    case "HEAD":
                        var k = {
                                tag: v,
                                attributes: g
                            },
                            S = c && (null === (r = e.ownerDocument) || void 0 === r ? void 0 : r.location) ? e.ownerDocument.location : location;
                        k.attributes["*B"] = S.protocol + "//" + S.host + S.pathname, t[o](e, u, k, n);
                        break;
                    case "BASE":
                        var T = Fa(e.parentElement);
                        if (T) {
                            var E = document.createElement("a");
                            E.href = g.href, T.data.attributes["*B"] = E.protocol + "//" + E.host + E.pathname
                        }
                        break;
                    case "STYLE":
                        var O = {
                            tag: v,
                            attributes: g,
                            value: ua(h)
                        };
                        t[o](e, u, O, n);
                        break;
                    case "IFRAME":
                        var M = e,
                            N = {
                                tag: v,
                                attributes: g
                            };
                        ja(M) && (! function(t) {
                            !1 === Ba(t) && Ji(t, "load", Qn.bind(this, t, "childList"), !0)
                        }(M), N.attributes["*O"] = "true", M.contentDocument && M.contentWindow && "loading" !== M.contentDocument.readyState && (i = M.contentDocument)), 2 === n && oa(M), t[o](e, u, N, n);
                        break;
                    case "LINK":
                        if (ki && "stylesheet" === g.rel) {
                            for (var x in Object.keys(document.styleSheets)) {
                                var _ = document.styleSheets[x];
                                if (_.ownerNode == h) {
                                    var I = {
                                        tag: "STYLE",
                                        attributes: g,
                                        value: ca(_)
                                    };
                                    t[o](e, u, I, n);
                                    break
                                }
                            }
                            break
                        }
                        var C = {
                            tag: v,
                            attributes: g
                        };
                        t[o](e, u, C, n);
                        break;
                    case "VIDEO":
                    case "AUDIO":
                    case "SOURCE":
                        "src" in g && g.src.startsWith("data:") && (g.src = "");
                        var D = {
                            tag: v,
                            attributes: g
                        };
                        t[o](e, u, D, n);
                        break;
                    default:
                        var P = {
                            tag: v,
                            attributes: g
                        };
                        h.shadowRoot && (i = h.shadowRoot), t[o](e, u, P, n)
                }
        }
        return i
    }

    function ia(t) {
        Ba(t) || Zi(t) || (! function(t) {
            try {
                var e = c("MutationObserver"),
                    n = e in window ? new window[e](Vi(Vn)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), qn.set(t, n), In.add(n))
            } catch (t) {
                Wr(2, 0, t ? t.name : null)
            }
        }(t), Be(t))
    }

    function oa(t) {
        Ki(t);
        var e, n, a = Ra(t) || {},
            r = a.doc,
            i = void 0 === r ? null : r,
            o = a.win,
            u = void 0 === o ? null : o;
        u && Ki(u), i && (Ki(i), e = i, (n = qn.get(e)) && (n.disconnect(), In.delete(n), qn.delete(e)), La(t, i))
    }

    function ua(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0 || t.id.length > 0) && (e = ca(t.sheet)), e
    }

    function ca(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Wr(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }
    var sa = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        la = {};

    function da(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return fa(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in la || (la[c] = []), la[c].indexOf(t.id) < 0 && la[c].push(t.id), i = "".concat(c).concat("~").concat(la[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && fa(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function fa(t) {
        if (!t) return !1;
        if (sa.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var pa = 1,
        ha = null,
        va = [],
        ga = [],
        ma = {},
        ya = [],
        ba = [],
        wa = [],
        ka = [],
        Sa = [],
        Ta = [],
        Ea = null,
        Oa = null,
        Ma = null,
        Na = null,
        xa = null;

    function _a() {
        Ca(), Da(document, !0)
    }

    function Ia() {
        Ca()
    }

    function Ca() {
        pa = 1, va = [], ga = [], ma = {}, ya = [], ba = [], wa = "address,password,contact".split(","), ka = "password,secret,pass,social,ssn,code,hidden".split(","), Sa = "radio,checkbox,range,button,reset,submit".split(","), Ta = "INPUT,SELECT,TEXTAREA".split(","), ha = new Map, Ea = new WeakMap, Oa = new WeakMap, Ma = new WeakMap, Na = new WeakMap, xa = new WeakMap, la = {}
    }

    function Da(t, e) {
        void 0 === e && (e = !1);
        try {
            e && u.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? ba.push(t) : ya.push(t.substr(1))
            })), "querySelectorAll" in t && (u.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return rr(t, "".concat(e[0]))
                }))
            })), u.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Na.set(t, 3)
                }))
            })), u.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return xa.set(t, e[0])
                }))
            })), ba.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Na.set(t, 0)
                }))
            })))
        } catch (t) {
            Wr(5, 1, t ? t.name : null)
        }
    }

    function Pa(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Ea.get(t);
        return !n && e && (n = pa++, Ea.set(t, n)), n || null
    }

    function Xa(t, e, n, a) {
        var r = e ? Pa(e) : null;
        if (e && r || null != t.host || t.nodeType === Node.DOCUMENT_TYPE_NODE) {
            var i = Pa(t, !0),
                o = Ka(t),
                c = null,
                s = ir(t) ? i : null,
                l = xa.has(t) ? xa.get(t) : null,
                d = u.content ? 1 : 3;
            r >= 0 && va[r] && ((c = va[r]).children.push(i), s = null === s ? c.region : s, l = null === l ? c.metadata.fraud : l, d = c.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (rr(t, n.attributes["data-clarity-region"]), s = i), ha.set(i, t), va[i] = {
                    id: i,
                    parent: r,
                    previous: o,
                    children: [],
                    data: n,
                    selector: null,
                    hash: null,
                    region: s,
                    metadata: {
                        active: !0,
                        suspend: !1,
                        privacy: d,
                        position: null,
                        fraud: l,
                        size: null
                    }
                },
                function(t, e, n) {
                    var a, r = e.data,
                        i = e.metadata,
                        o = i.privacy,
                        u = r.attributes || {},
                        c = r.tag.toUpperCase();
                    switch (!0) {
                        case Ta.indexOf(c) >= 0:
                            var s = u.type,
                                l = "",
                                d = ["class", "style"];
                            Object.keys(u).filter((function(t) {
                                return !d.includes(t)
                            })).forEach((function(t) {
                                return l += u[t].toLowerCase()
                            }));
                            var f = ka.some((function(t) {
                                return l.indexOf(t) >= 0
                            }));
                            i.privacy = "INPUT" === c && Sa.indexOf(s) >= 0 ? o : f ? 4 : 2;
                            break;
                        case "data-clarity-mask" in u:
                            i.privacy = 3;
                            break;
                        case "data-clarity-unmask" in u:
                            i.privacy = 0;
                            break;
                        case Na.has(t):
                            i.privacy = Na.get(t);
                            break;
                        case xa.has(t):
                            i.privacy = 2;
                            break;
                        case "*T" === c:
                            var p = n && n.data ? n.data.tag : "",
                                h = n && n.selector ? n.selector[1] : "",
                                v = ["STYLE", "TITLE", "svg:style"];
                            i.privacy = v.includes(p) || ya.some((function(t) {
                                return h.indexOf(t) >= 0
                            })) ? 0 : o;
                            break;
                        case 1 === o:
                            i.privacy = function(t, e, n) {
                                if (t && e.some((function(e) {
                                        return t.indexOf(e) >= 0
                                    }))) return 2;
                                return n.privacy
                            }(u.class, wa, i);
                            break;
                        case "IMG" === c:
                            (null === (a = u.src) || void 0 === a ? void 0 : a.startsWith("blob:")) && (i.privacy = 3)
                    }
                }(t, va[i], c), za(va[i]),
                function(t) {
                    if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
                        var e = qa(t.id);
                        !e || e.complete && 0 !== e.naturalWidth || Ji(e, "load", (function() {
                            e.setAttribute("data-clarity-loaded", "".concat(Pi()))
                        })), t.metadata.size = []
                    }
                }(va[i]), Za(i, a)
        }
    }

    function Ya(t, e, n, a) {
        var r = Pa(t),
            i = e ? Pa(e) : null,
            o = Ka(t),
            u = !1,
            c = !1;
        if (r in va) {
            var s = va[r];
            if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                u = !0;
                var l = s.parent;
                if (s.parent = i, null !== i && i >= 0) {
                    var d = null === o ? 0 : va[i].children.indexOf(o) + 1;
                    va[i].children.splice(d, 0, r), s.region = ir(t) ? r : va[i].region
                } else ! function(t, e) {
                    if (t in va) {
                        var n = va[t];
                        n.metadata.active = !1, n.parent = null, Za(t, e), Ga(t)
                    }
                }(r, a);
                if (null !== l && l >= 0) {
                    var f = va[l].children.indexOf(r);
                    f >= 0 && va[l].children.splice(f, 1)
                }
                c = !0
            }
            for (var p in n) Wa(s.data, n, p) && (u = !0, s.data[p] = n[p]);
            za(s), Za(r, a, u, c)
        }
    }

    function ja(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Oa.set(n.contentDocument, n), Ma.set(n, {
                    doc: n.contentDocument,
                    win: n.contentWindow
                }), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Aa(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Oa.has(e) ? Oa.get(e) : null
    }

    function Ra(t) {
        return Ma.has(t) ? Ma.get(t) : null
    }

    function La(t, e) {
        Ma.delete(t), Oa.delete(e)
    }

    function Wa(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function za(t) {
        var e = t.parent && t.parent in va ? va[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = va[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [da(i, 0), da(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? f(t) : null
        })), t.hash.forEach((function(e) {
            return ma[e] = t.id
        }))
    }

    function Ha(t) {
        var e = qa(Va(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function qa(t) {
        return ha.has(t) ? ha.get(t) : null
    }

    function Ua(t) {
        return t in va ? va[t] : null
    }

    function Fa(t) {
        var e = Pa(t);
        return e in va ? va[e] : null
    }

    function Va(t) {
        return t in ma ? ma[t] : null
    }

    function Ba(t) {
        return ha.has(Pa(t))
    }

    function Ja() {
        for (var t = [], e = 0, n = ga; e < n.length; e++) {
            var a = n[e];
            a in va && t.push(va[a])
        }
        return ga = [], t
    }

    function Ga(t) {
        var e = ha.get(t);
        if ((null == e ? void 0 : e.nodeType) !== Node.DOCUMENT_FRAGMENT_NODE) {
            if (e && (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE && "IFRAME" === e.tagName) oa(e);
            ha.delete(t);
            var n = t in va ? va[t] : null;
            if (n && n.children)
                for (var a = 0, r = n.children; a < r.length; a++) {
                    Ga(r[a])
                }
        }
    }

    function Ka(t) {
        for (var e = null; null === e && t.previousSibling;) e = Pa(t.previousSibling), t = t.previousSibling;
        return e
    }

    function Za(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = ga.indexOf(t);
        r >= 0 && 1 === e && a ? (ga.splice(r, 1), ga.push(t)) : -1 === r && n && ga.push(t)
    }
    var Qa = [],
        $a = null,
        tr = {},
        er = [],
        nr = !1,
        ar = null;

    function rr(t, e) {
        !1 === $a.has(t) && ($a.set(t, e), (ar = null === ar && nr ? new IntersectionObserver(ur, {
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : ar) && t && t.nodeType === Node.ELEMENT_NODE && ar.observe(t))
    }

    function ir(t) {
        return $a && $a.has(t)
    }

    function or() {
        or.dn = 24;
        for (var t = [], e = 0, n = er; e < n.length; e++) {
            var a = n[e],
                r = Pa(a.node);
            r ? (a.state.data.id = r, tr[r] = a.state.data, Qa.push(a.state)) : t.push(a)
        }
        er = t, Qa.length > 0 && Tn(7)
    }

    function ur(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if ($a.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Pa(r) : null,
                    s = c in tr ? tr[c] : {
                        id: c,
                        name: $a.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                cr(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && ar && ar.unobserve(r)
            }
        }
        Qa.length > 0 && Tn(7)
    }

    function cr(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in tr && r || !(e.id in tr)) && (tr[e.id] = e, Qa.push(sr(e))) : er.push({
            node: t,
            state: sr(e)
        })
    }

    function sr(t) {
        return {
            time: l(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function lr() {
        Qa = []
    }

    function dr(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return zn = l() + 3e3, n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function fr(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2
        };
        if (t) {
            var r = Fa(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = qa(t),
                        a = t in tr ? tr[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: $a.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    cr(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Mt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function pr(t, e) {
        return void 0 === e && (e = null), it(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, s, d, f, p, h, v, g, m, y, k, S, T, E, O, M, N, x, _, C, P, X, Y, j, A, R, L, W, z;
            return ot(this, (function(H) {
                switch (n = e || l(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = se; r < i.length; r++) W = i[r], (o = fr(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(o.id), a.push(W.data.x), a.push(W.data.y), void 0 !== W.data.id && (a.push(W.data.id), void 0 !== W.data.isPrimary && a.push(W.data.isPrimary.toString())), xr(a), I(W.event, W.data.x, W.data.y, W.time));
                        ye();
                        break;
                    case 9:
                        for (u = 0, c = Jt; u < c.length; u++) W = c[u], s = fr(W.data.target, W.event, W.data.text), a = [W.time, W.event], d = s.hash ? s.hash.join(".") : "", a.push(s.id), a.push(W.data.x), a.push(W.data.y), a.push(W.data.eX), a.push(W.data.eY), a.push(W.data.button), a.push(W.data.reaction), a.push(W.data.context), a.push(b(W.data.text, "click", s.privacy)), a.push(w(W.data.link)), a.push(d), a.push(W.data.trust), a.push(W.data.isFullText), xr(a), mr(W.time, W.event, d, W.data.x, W.data.y, W.data.reaction, W.data.context);
                        $t();
                        break;
                    case 38:
                        for (f = 0, p = te; f < p.length; f++) W = p[f], a = [W.time, W.event], (A = fr(W.data.target, W.event)).id > 0 && (a.push(A.id), a.push(W.data.action), xr(a));
                        ne();
                        break;
                    case 11:
                        h = ce, a.push(h.width), a.push(h.height), I(t, h.width, h.height), Te(), xr(a);
                        break;
                    case 26:
                        v = Re, a.push(v.name), a.push(v.persisted), Ue(), xr(a);
                        break;
                    case 27:
                        for (g = 0, m = re; g < m.length; g++) W = m[g], y = fr(W.data.target, W.event, W.data.value), (a = [W.time, W.event]).push(y.id), a.push(b(W.data.value, "input", y.privacy, !1, W.data.type)), xr(a);
                        ue();
                        break;
                    case 21:
                        (k = De) && (S = fr(k.start, t), T = fr(k.end, t), a.push(S.id), a.push(k.startOffset), a.push(T.id), a.push(k.endOffset), Ae(), xr(a));
                        break;
                    case 10:
                        for (E = 0, O = Ee; E < O.length; E++) W = O[E], M = fr(W.data.target, W.event), N = fr(W.data.top, W.event), x = fr(W.data.bottom, W.event), _ = (null == N ? void 0 : N.hash) ? N.hash.join(".") : "", C = (null == x ? void 0 : x.hash) ? x.hash.join(".") : "", M.id > 0 && ((a = [W.time, W.event]).push(M.id), a.push(W.data.x), a.push(W.data.y), a.push(_), a.push(C), xr(a), I(W.event, W.data.x, W.data.y, W.time));
                        Ee = [], Oe = null, Me = null;
                        break;
                    case 42:
                        for (P = 0, X = qt; P < X.length; P++) W = X[P], a = [W.time, W.event], (A = fr(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(A.id), a.push(W.data.type), a.push(b(W.data.value, "change", A.privacy)), a.push(b(W.data.checksum, "checksum", A.privacy)), xr(a));
                        Ft();
                        break;
                    case 39:
                        for (Y = 0, j = We; Y < j.length; Y++) W = j[Y], a = [W.time, W.event], (A = fr(W.data.target, W.event)).id > 0 && (a.push(A.id), xr(a));
                        He();
                        break;
                    case 22:
                        for (R = 0, L = vr; R < L.length; R++) W = L[R], (a = [W.time, W.event]).push(W.data.type), a.push(W.data.hash), a.push(W.data.x), a.push(W.data.y), a.push(W.data.reaction), a.push(W.data.context), xr(a, !1);
                        gr();
                        break;
                    case 28:
                        z = Le, a.push(z.visible), xr(a), D(n, z.visible), Ve()
                }
                return [2]
            }))
        }))
    }
    var hr = [],
        vr = [];

    function gr() {
        vr = []
    }

    function mr(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), hr.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), I(e, a, r, t)
    }
    var yr, br, wr, kr, Sr, Tr = 0,
        Er = 0,
        Or = null,
        Mr = 0;

    function Nr() {
        kr = !0, Tr = 0, Er = 0, Mr = 0, yr = [], br = [], wr = {}, Sr = null
    }

    function xr(t, e) {
        if (void 0 === e && (e = !0), kr) {
            var n = l(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    Tr += r.length;
                case 37:
                case 6:
                case 43:
                case 45:
                case 46:
                    Er += r.length, yr.push(r);
                    break;
                default:
                    br.push(r)
            }
            W(25);
            var i = function() {
                var t = !1 === u.lean && Tr > 0 ? 100 : Wi.sequence * u.delay;
                return "string" == typeof u.upload ? Math.max(Math.min(t, 3e4), 100) : u.delay
            }();
            n - Mr > 2 * i && (U(Or), Or = null), e && null === Or && (25 !== a && J(), Or = q(Ir, i), Mr = n, oi(Er))
        }
    }

    function _r() {
        U(Or), Ir(!0), Tr = 0, Er = 0, Mr = 0, yr = [], br = [], wr = {}, Sr = null, kr = !1
    }

    function Ir(t) {
        return void 0 === t && (t = !1), it(this, void 0, void 0, (function() {
            var e, n, a, r, i, o, c, s;
            return ot(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return Or = null, (e = !1 === u.lean && Er > 0 && (Er < 1048576 || Wi.sequence > 0)) && H(1, 1), or(),
                            function() {
                                var t = [];
                                vr = [];
                                for (var e = Wi.start + Wi.duration, n = Math.max(e - 2e3, 0), a = 0, r = hr; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && vr.push(i), t.push(i))
                                }
                                hr = t, pr(22)
                            }(), Tt(),
                            function() {
                                for (var t = 0, e = nn; t < e.length; t++) {
                                    var n = e[t],
                                        a = n == document ? -1 : Pa(n),
                                        r = a in en ? en[a] : null;
                                    rn(document, r)
                                }
                            }(), n = !0 === t, a = JSON.stringify(qi(n)), r = "[".concat(br.join(), "]"), i = e ? "[".concat(yr.join(), "]") : "", o = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, gt(o)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return z(2, (c = s) ? c.length : o.length), Cr(o, c, Wi.sequence, n), br = [], e && (yr = [], Er = 0, Tr = 0), [2]
                }
            }))
        }))
    }

    function Cr(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof u.upload) {
            var r = u.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Pr(n)
            } catch (t) {}
            if (!1 === i) {
                n in wr ? wr[n].attempts++ : wr[n] = {
                    data: t,
                    attempts: 1
                };
                var o = new XMLHttpRequest;
                o.open("POST", r, !0), o.timeout = 15e3, o.ontimeout = function() {
                    Fi(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (o.onreadystatechange = function() {
                    Vi(Dr)(o, n)
                }), o.withCredentials = !0, e ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"), o.send(e)) : o.send(t)
            }
        } else if (u.upload) {
            (0, u.upload)(t), Pr(n)
        }
    }

    function Dr(t, e) {
        var n = wr[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? ui(6) : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload), Cr(n.data, null, e)) : (Sr = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && ri(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        ui(6);
                        break;
                    case "UPGRADE":
                        at("Auto");
                        break;
                    case "ACTION":
                        u.action && i.length > 1 && u.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && Gr(i[1]);
                        break;
                    case "SIGNAL":
                        i.length > 1 && bt(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Cr(n.data, null, e, !0), ui(3)), t.status >= 200 && t.status <= 208 && Pr(e), delete wr[e]))
    }

    function Pr(t) {
        1 === t && (Ii(), _i())
    }
    var Xr, Yr = {};

    function jr(t) {
        jr.dn = 4;
        var e = t.error || t;
        return e.message in Yr || (Yr[e.message] = 0), Yr[e.message]++ >= 5 || e && e.message && (Xr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, Ar(31)), !0
    }

    function Ar(t) {
        return it(this, void 0, void 0, (function() {
            var e;
            return ot(this, (function(n) {
                switch (e = [l(), t], t) {
                    case 31:
                        e.push(Xr.message), e.push(Xr.line), e.push(Xr.column), e.push(Xr.stack), e.push(w(Xr.source)), xr(e);
                        break;
                    case 33:
                        Rr && (e.push(Rr.code), e.push(Rr.name), e.push(Rr.message), e.push(Rr.stack), e.push(Rr.severity), xr(e, !1));
                        break;
                    case 41:
                        Et && (e.push(Et.id), e.push(Et.target), e.push(Et.checksum), xr(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Rr, Lr = {};

    function Wr(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Lr && Lr[t].indexOf(i) >= 0 || (Rr = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Lr ? Lr[t].push(i) : Lr[t] = [i], Ar(33))
    }
    var zr, Hr = {},
        qr = new Set,
        Ur = {},
        Fr = {},
        Vr = {},
        Br = {};

    function Jr() {
        Qr()
    }

    function Gr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in Ur[a] = {}, Fr[a] = {}, Vr[a] = {}, Br[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.slice(1);
                        Ur[a][u] = ei(l);
                        break;
                    case 2:
                        Fr[a][u] = c;
                        break;
                    case 4:
                        var d = c.slice(1);
                        Vr[a][u] = d
                }
            }
        } catch (t) {
            Wr(8, 1, t ? t.name : null)
        }
    }

    function Kr(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Zr() {
        try {
            for (var t in Ur) {
                var e = parseInt(t);
                if ("" == Br[e] || document.querySelector(Br[e])) {
                    var n = Ur[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (m = ni(Kr(n[r]))) ? JSON.stringify(m).slice(0, 1e4) : m;
                        i && $r(e, r, i)
                    }
                    var o = Fr[e];
                    for (var u in o) {
                        var c = !1,
                            s = parseInt(u),
                            l = o[s];
                        l.startsWith("@") && (c = !0, l = l.slice(1));
                        var d = document.querySelectorAll(l);
                        if (d) {
                            var p = Array.from(d).map((function(t) {
                                return t.textContent
                            })).join("<SEP>");
                            $r(e, s, (c ? f(p).trim() : p).slice(0, 1e4))
                        }
                    }
                    var h = Vr[e];
                    for (var v in h) {
                        var g = parseInt(v);
                        $r(e, g, Ha(h[g]).trim().slice(0, 1e4))
                    }
                }
            }
            qr.size > 0 && ri(40)
        } catch (t) {
            Wr(5, 1, t ? t.name : null)
        }
        var m
    }

    function Qr() {
        qr.clear()
    }

    function $r(t, e, n) {
        var a, r = !1;
        t in Hr || (Hr[t] = {}, r = !0), a = Vr[t], 0 == Object.keys(a).length || e in Hr[t] && Hr[t][e] == n || (r = !0), Hr[t][e] = n, r && qr.add(t)
    }

    function ti() {
        Qr()
    }

    function ei(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.slice(0, r) : i > 0 ? a.slice(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.slice(i + 1, o) : null
            })
        }
        return e
    }

    function ni(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && ai(r, a.condition)) n = ni(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (ai(c, a.condition)) {
                        var s = ni(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function ai(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function ri(t) {
        var e = [l(), t];
        switch (t) {
            case 4:
                var n = M;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), e.push(n.data.scrollTime), e.push(n.data.pointerTime), e.push(n.data.moveX), e.push(n.data.moveY), e.push(n.data.moveTime), e.push(n.data.downX), e.push(n.data.downY), e.push(n.data.downTime), e.push(n.data.upX), e.push(n.data.upY), e.push(n.data.upTime), e.push(n.data.pointerPrevX), e.push(n.data.pointerPrevY), e.push(n.data.pointerPrevTime), xr(e, !1)), _();
                break;
            case 25:
                e.push(A.gap), xr(e);
                break;
            case 35:
                e.push(zr.check), xr(e, !1);
                break;
            case 3:
                e.push(nt.key), xr(e);
                break;
            case 2:
                e.push(Sr.sequence), e.push(Sr.attempts), e.push(Sr.status), xr(e, !1);
                break;
            case 24:
                Y.key && e.push(Y.key), e.push(Y.value), xr(e);
                break;
            case 34:
                var a = Object.keys(ut);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(ut[o])
                    }
                    ft(), xr(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(L);
                if (u.length > 0) {
                    for (var c = 0, s = u; c < s.length; c++) {
                        var d = s[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(L[d]))
                    }
                    L = {}, xr(e, !1)
                }
                break;
            case 1:
                var p = Object.keys(di);
                if (p.length > 0) {
                    for (var h = 0, v = p; h < v.length; h++) {
                        var g = v[h];
                        f = parseInt(g, 10);
                        e.push(f), e.push(di[g])
                    }
                    mi(), xr(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(Z);
                if (m.length > 0) {
                    for (var y = 0, b = m; y < b.length; y++) {
                        var w = b[y];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], Z[w]))
                    }
                    tt(), xr(e, !1)
                }
                break;
            case 40:
                qr.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in Hr[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(Hr[t][a])
                    }
                    e.push(n)
                })), Qr(), xr(e, !1)
        }
    }

    function ii() {
        zr = {
            check: 0
        }
    }

    function oi(t) {
        if (0 === zr.check) {
            var e = zr.check;
            e = Wi.sequence >= 128 ? 1 : e, e = Wi.pageNum >= 128 ? 7 : e, e = l() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== zr.check && ui(e)
        }
    }

    function ui(t) {
        zr.check = t, 5 !== t && (xi(), Ao())
    }

    function ci() {
        0 !== zr.check && ri(35)
    }

    function si() {
        zr = null
    }
    var li = null,
        di = null,
        fi = !1;

    function pi() {
        li = {}, di = {}, fi = !1
    }

    function hi() {
        li = {}, di = {}, fi = !1
    }

    function vi(t, e) {
        if (e && (e = "".concat(e), t in li || (li[t] = []), li[t].indexOf(e) < 0)) {
            if (li[t].length > 128) return void(fi || (fi = !0, ui(5)));
            li[t].push(e), t in di || (di[t] = []), di[t].push(e)
        }
    }

    function gi() {
        ri(1)
    }

    function mi() {
        di = {}, fi = !1
    }

    function yi(t) {
        vi(36, t.toString())
    }
    var bi = null,
        wi = [],
        ki = 0,
        Si = null;

    function Ti() {
        var t, e, n;
        Si = null;
        var a = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            r = null !== (n = null === (e = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === t ? void 0 : t.resolvedOptions()) || void 0 === e ? void 0 : e.timeZone) && void 0 !== n ? n : "",
            i = (new Date).getTimezoneOffset().toString(),
            o = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins).toString() : "",
            c = document && document.title ? document.title : "";
        ki = a.indexOf("Electron") > 0 ? 1 : 0;
        var s, l = function() {
                var t = {
                        session: Pi(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = ji("_clsk", !u.includeSubdomains);
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Xi(n[1]) < 18e5 && (t.session = n[0], t.count = Xi(n[2]) + 1, t.upgrade = Xi(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            d = Yi(),
            p = u.projectId || f(location.host);
        bi = {
            projectId: p,
            userId: d.id,
            sessionId: l.session,
            pageNum: l.count
        }, u.lean = u.track && null !== l.upgrade ? 0 === l.upgrade : u.lean, u.upload = u.track && "string" == typeof u.upload && l.upload && l.upload.length > "https://".length ? l.upload : u.upload, vi(0, a), vi(3, c), vi(1, w(location.href, !!ki)), vi(2, document.referrer), vi(15, function() {
            var t = Pi();
            if (u.track && Ci(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), vi(16, document.documentElement.lang), vi(17, document.dir), vi(26, "".concat(window.devicePixelRatio)), vi(28, d.dob.toString()), vi(29, d.version.toString()), vi(33, o), vi(34, r), vi(35, i), H(0, l.ts), H(1, 0), H(35, ki), navigator && (vi(9, navigator.language), H(33, navigator.hardwareConcurrency), H(32, navigator.maxTouchPoints), H(34, Math.round(navigator.deviceMemory)), (s = navigator.userAgentData) && s.getHighEntropyValues ? s.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            vi(22, t.platform), vi(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                vi(24, t.name + "~" + t.version)
            })), vi(25, t.model), H(27, t.mobile ? 1 : 0)
        })) : vi(22, navigator.platform)), screen && (H(14, Math.round(screen.width)), H(15, Math.round(screen.height)), H(16, Math.round(screen.colorDepth)));
        for (var h = 0, v = u.cookies; h < v.length; h++) {
            var g = v[h],
                m = ji(g);
            m && ct(g, m)
        }! function(t) {
            yi(t ? 1 : 0)
        }(u.track), Di(d)
    }

    function Ei() {
        Si = null, bi = null, wi.forEach((function(t) {
            t.called = !1
        }))
    }

    function Oi(t, e, n) {
        void 0 === e && (e = !0), void 0 === n && (n = !1);
        var a = u.lean ? 0 : 1,
            r = !1;
        bi && (a || !1 === e) && (t(bi, !u.lean), r = !0), !n && r || wi.push({
            callback: t,
            wait: e,
            recall: n,
            called: r
        })
    }

    function Mi() {
        return bi ? [bi.userId, bi.sessionId, bi.pageNum].join(".") : ""
    }

    function Ni(t) {
        if (void 0 === t && (t = !0), !t) return u.track = !1, Ri("_clsk", "", -Number.MAX_VALUE), Ri("_clck", "", -Number.MAX_VALUE), Ao(), void window.setTimeout(jo, 250);
        lo() && (u.track = !0, Di(Yi(), 1), Ii(), yi(2))
    }

    function xi() {
        Ri("_clsk", "", 0)
    }

    function _i() {
        ! function(t) {
            if (wi.length > 0)
                for (var e = 0; e < wi.length; e++) {
                    var n = wi[e];
                    !n.callback || n.called || n.wait && !t || (n.callback(bi, !u.lean), n.called = !0, n.recall || (wi.splice(e, 1), e--))
                }
        }(u.lean ? 0 : 1)
    }

    function Ii() {
        if (bi && u.track) {
            var t = Math.round(Date.now()),
                e = u.upload && "string" == typeof u.upload ? u.upload.replace("https://", "") : "",
                n = u.lean ? 0 : 1;
            Ri("_clsk", [bi.sessionId, t, bi.pageNum, n, e].join("|"), 1)
        }
    }

    function Ci(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Di(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === u.dob ? 0 : u.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && Ri("_clck", [bi.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function Pi() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Xi(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Yi() {
        var t = {
                id: Pi(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = ji("_clck", !u.includeSubdomains);
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var o = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(o), document.cookie = "".concat("_clsk", "=").concat(o)
            }
            n.length > 1 && (t.version = Xi(n[1])), n.length > 2 && (t.expiry = Xi(n[2], 36)), n.length > 3 && 1 === Xi(n[3]) && (t.consent = 1), n.length > 4 && Xi(n[1]) > 1 && (t.dob = Xi(n[4])), u.track = u.track || 1 === t.consent, t.id = u.track ? n[0] : t.id
        }
        return t
    }

    function ji(t, e) {
        var n;
        if (void 0 === e && (e = !1), Ci(document, "cookie")) {
            var a = document.cookie.split(";");
            if (a)
                for (var r = 0; r < a.length; r++) {
                    var i = a[r].split("=");
                    if (i.length > 1 && i[0] && i[0].trim() === t) {
                        for (var o = Ai(i[1]), u = o[0], c = o[1]; u;) u = (n = Ai(c))[0], c = n[1];
                        return e ? c.endsWith("".concat("~", "1")) ? c.substring(0, c.length - 2) : null : c
                    }
                }
        }
        return null
    }

    function Ai(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }

    function Ri(t, e, n) {
        if ((u.track || "" == e) && (navigator && navigator.cookieEnabled || Ci(document, "cookie"))) {
            var a = function(t) {
                    return encodeURIComponent(t)
                }(e),
                r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : "",
                o = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === Si) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (Si = ".".concat(c[s]).concat(Si || ""), s < c.length - 1 && (document.cookie = "".concat(o).concat(";").concat("domain=").concat(Si), ji(t) === e)) return;
                    Si = ""
                }
            } catch (t) {
                Si = ""
            }
            document.cookie = Si ? "".concat(o).concat(";").concat("domain=").concat(Si) : o
        }
    }
    var Li, Wi = null;

    function zi() {
        var t = bi;
        Wi = {
            version: d,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0,
            applicationPlatform: 0,
            url: ""
        }
    }

    function Hi() {
        Wi = null
    }

    function qi(t) {
        return Wi.start = Wi.start + Wi.duration, Wi.duration = l() - Wi.start, Wi.sequence++, Wi.upload = t && "sendBeacon" in navigator ? 1 : 0, Wi.end = t ? 1 : 0, Wi.applicationPlatform = 0, Wi.url = w(location.href, !1, !0), [Wi.version, Wi.sequence, Wi.start, Wi.duration, Wi.projectId, Wi.userId, Wi.sessionId, Wi.pageNum, Wi.upload, Wi.end, Wi.applicationPlatform, Wi.url]
    }

    function Ui() {
        Li = []
    }

    function Fi(t) {
        if (Li && -1 === Li.indexOf(t.message)) {
            var e = u.report;
            if (e && e.length > 0) {
                var n = {
                    v: Wi.version,
                    p: Wi.projectId,
                    u: Wi.userId,
                    s: Wi.sessionId,
                    n: Wi.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), Li.push(t.message)
            }
        }
        return t
    }

    function Vi(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Fi(t)
            }
            var n = performance.now() - e;
            z(4, n), n > 30 && (W(7), H(6, n), Wr(9, 0, "".concat(t.dn || t.name, "-").concat(n)))
        }
    }
    var Bi = new Map;

    function Ji(t, e, n, a, r) {
        void 0 === a && (a = !1), void 0 === r && (r = !0), n = Vi(n);
        try {
            t[c("addEventListener")](e, n, {
                capture: a,
                passive: r
            }), Zi(t) || Bi.set(t, []), Bi.get(t).push({
                event: e,
                listener: n,
                options: {
                    capture: a,
                    passive: r
                }
            })
        } catch (t) {}
    }

    function Gi() {
        Bi.forEach((function(t, e) {
            Qi(t, e)
        })), Bi = new Map
    }

    function Ki(t) {
        Zi(t) && Qi(Bi.get(t), t)
    }

    function Zi(t) {
        return Bi.has(t)
    }

    function Qi(t, e) {
        t.forEach((function(t) {
            try {
                e[c("removeEventListener")](t.event, t.listener, {
                    capture: t.options.capture,
                    passive: t.options.passive
                })
            } catch (t) {}
        })), Bi.delete(e)
    }
    var $i = null,
        to = null,
        eo = null,
        no = 0;

    function ao() {
        return !(no++ > 20) || (Wr(4, 0), !1)
    }

    function ro() {
        ro.dn = 1, no = 0, eo !== oo() && (Ao(), window.setTimeout(io, 250))
    }

    function io() {
        jo(), H(29, 1)
    }

    function oo() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var uo = !1;

    function co() {
        uo = !0, s = performance.now() + performance.timeOrigin, Pt(), Gi(), Ui(), eo = oo(), no = 0, Ji(window, "popstate", ro), null === $i && ($i = history.pushState, history.pushState = function() {
            $i.apply(this, arguments), lo() && ao() && ro()
        }), null === to && (to = history.replaceState, history.replaceState = function() {
            to.apply(this, arguments), lo() && ao() && ro()
        })
    }

    function so() {
        eo = null, no = 0, Ui(), Gi(), Pt(), s = 0, uo = !1
    }

    function lo() {
        return uo
    }

    function fo() {
        fo.dn = 2, jo(), j("clarity", "restart")
    }
    var po = Object.freeze({
        __proto__: null,
        start: function t() {
            t.dn = 3,
                function() {
                    Ot = [], H(26, navigator.webdriver ? 1 : 0);
                    try {
                        H(31, window.top == window.self || window.top == window ? 1 : 2)
                    } catch (t) {
                        H(31, 0)
                    }
                }(), Ji(window, "error", jr), Yr = {}, Lr = {}
        },
        stop: function() {
            Lr = {}
        }
    });

    function ho() {
        return it(this, void 0, void 0, (function() {
            var t, e;
            return ot(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = l(), At(e = {
                            id: Mi(),
                            cost: 3
                        }), [4, _n(document, e, 0, t)];
                    case 1:
                        return n.sent(), rn(document, t), [4, Tn(5, e, t)];
                    case 2:
                        return n.sent(), Rt(e), [2]
                }
            }))
        }))
    }
    var vo = Object.freeze({
        __proto__: null,
        hashText: Ha,
        start: function t() {
            t.dn = 20, Nn(), xn(), lr(), ar = null, $a = new WeakMap, tr = {}, er = [], nr = !!window.IntersectionObserver, _a(), u.delayDom ? Ji(window, "load", (function() {
                    Fn()
                })) : Fn(), Xt(ho, 1).then((function() {
                    Vi(xn)(), Vi(or)(), Vi(Ce)()
                })), window.CSSStyleSheet && CSSStyleSheet.prototype && (null === Ze && (Ze = CSSStyleSheet.prototype.replace, CSSStyleSheet.prototype.replace = function() {
                    return lo() && (H(36, 1), an.indexOf(this[$e]) > -1 && un(l(), this[$e], 1, arguments[0])), Ze.apply(this, arguments)
                }), null === Qe && (Qe = CSSStyleSheet.prototype.replaceSync, CSSStyleSheet.prototype.replaceSync = function() {
                    return lo() && (H(36, 1), an.indexOf(this[$e]) > -1 && un(l(), this[$e], 2, arguments[0])), Qe.apply(this, arguments)
                })),
                function() {
                    if (window.Animation && window.Animation.prototype && window.KeyframeEffect && window.KeyframeEffect.prototype && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (bn(), kn(dn, "play"), kn(fn, "pause"), kn(pn, "commitStyles"), kn(hn, "cancel"), kn(vn, "finish"), null === ln && (ln = Element.prototype.animate, Element.prototype.animate = function() {
                            var t = ln.apply(this, arguments);
                            return Sn(t, "play"), t
                        }), document.getAnimations))
                        for (var t = 0, e = document.getAnimations(); t < e.length; t++) {
                            var n = e[t];
                            "finished" === n.playState ? Sn(n, "finish") : "paused" === n.playState || "idle" === n.playState ? Sn(n, "pause") : "running" === n.playState && Sn(n, "play")
                        }
                }()
        },
        stop: function() {
            lr(), $a = null, tr = {}, er = [], ar && (ar.disconnect(), ar = null), nr = !1, Ia(),
                function() {
                    for (var t = 0, e = Array.from(In); t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    In = new Set, Hn = {}, Cn = [], Dn = {}, Rn = [], zn = 0, Ln = null, qn = new WeakMap
                }(), Nn(), tn = {}, en = {}, nn = [], an = [], on(), bn()
        }
    });
    var go = null;

    function mo() {
        go = null
    }

    function yo(t) {
        go = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                it(this, void 0, void 0, (function() {
                    var e, n;
                    return ot(this, (function(a) {
                        return e = l(), n = [e, t], 29 === t && (n.push(go.fetchStart), n.push(go.connectStart), n.push(go.connectEnd), n.push(go.requestStart), n.push(go.responseStart), n.push(go.responseEnd), n.push(go.domInteractive), n.push(go.domComplete), n.push(go.loadEventStart), n.push(go.loadEventEnd), n.push(go.redirectCount), n.push(go.size), n.push(go.type), n.push(go.protocol), n.push(go.encodedSize), n.push(go.decodedSize), mo(), xr(n)), [2]
                    }))
                }))
            }(29)
    }
    var bo, wo = 0,
        ko = 1 / 0,
        So = 0,
        To = 0,
        Eo = [],
        Oo = new Map,
        Mo = function() {
            return wo || 0
        },
        No = function() {
            if (!Eo.length) return -1;
            var t = Math.min(Eo.length - 1, Math.floor((Mo() - To) / 50));
            return Eo[t].latency
        },
        xo = function() {
            To = Mo(), Eo.length = 0, Oo.clear()
        },
        _o = function(t) {
            if (t.interactionId && !(t.duration < 40)) {
                ! function(t) {
                    "interactionCount" in performance ? wo = performance.interactionCount : t.interactionId && (ko = Math.min(ko, t.interactionId), So = Math.max(So, t.interactionId), wo = So ? (So - ko) / 7 + 1 : 0)
                }(t);
                var e = Eo[Eo.length - 1],
                    n = Oo.get(t.interactionId);
                if (n || Eo.length < 10 || t.duration > (null == e ? void 0 : e.latency)) {
                    if (n) t.duration > n.latency && (n.latency = t.duration);
                    else {
                        var a = {
                            id: t.interactionId,
                            latency: t.duration
                        };
                        Oo.set(a.id, a), Eo.push(a)
                    }
                    Eo.sort((function(t, e) {
                        return e.latency - t.latency
                    })), Eo.length > 10 && Eo.splice(10).forEach((function(t) {
                        return Oo.delete(t.id)
                    }))
                }
            }
        },
        Io = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint", "event"];

    function Co() {
        Co.dn = 26;
        try {
            bo && bo.disconnect(), bo = new PerformanceObserver(Vi(Do));
            for (var t = 0, e = Io; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && z(9, 0), bo.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Wr(3, 1)
        }
    }

    function Do(t) {
        Do.dn = 27,
            function(t) {
                for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                    var a = t[n];
                    switch (a.entryType) {
                        case "navigation":
                            yo(a);
                            break;
                        case "resource":
                            var r = a.name;
                            vi(4, Po(r)), r !== u.upload && r !== u.fallback || H(28, a.duration);
                            break;
                        case "longtask":
                            W(7);
                            break;
                        case "first-input":
                            e && H(10, a.processingStart - a.startTime);
                            break;
                        case "event":
                            e && "PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && (_o(a), vi(37, No().toString()));
                            break;
                        case "layout-shift":
                            e && !a.hadRecentInput && z(9, 1e3 * a.value);
                            break;
                        case "largest-contentful-paint":
                            e && H(8, a.startTime)
                    }
                }
            }(t.getEntries())
    }

    function Po(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var Xo = Object.freeze({
            __proto__: null,
            start: function t() {
                t.dn = 25, mo(),
                    function() {
                        navigator && "connection" in navigator && vi(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Ji(window, "load", q.bind(this, Co, 0)) : Co() : Wr(3, 0)
                    }()
            },
            stop: function() {
                bo && bo.disconnect(), bo = null, xo(), mo()
            }
        }),
        Yo = [po, vo, Je, Xo];

    function jo(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    var t = navigator && "globalPrivacyControl" in navigator && 1 == navigator.globalPrivacyControl;
                    return !1 === uo && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap && !t
                } catch (t) {
                    return !1
                }
            }() && (! function(t) {
                if (null === t || uo) return !1;
                for (var e in t) e in u && (u[e] = t[e])
            }(t), co(), kt(), Yo.forEach((function(t) {
                return Vi(t.start)()
            })), null === t && zo())
    }

    function Ao() {
        lo() && (Yo.slice().reverse().forEach((function(t) {
            return Vi(t.stop)()
        })), St(), so(), void 0 !== Lo && (Lo[Wo] = function() {
            (Lo[Wo].q = Lo[Wo].q || []).push(arguments), "start" === arguments[0] && Lo[Wo].q.unshift(Lo[Wo].q.pop()) && zo()
        }))
    }
    var Ro = Object.freeze({
            __proto__: null,
            consent: Ni,
            event: j,
            hashText: Ha,
            identify: st,
            metadata: Oi,
            pause: function() {
                lo() && (j("clarity", "pause"), null === Ct && (Ct = new Promise((function(t) {
                    Dt = t
                }))))
            },
            resume: function() {
                lo() && (Ct && (Dt(), Ct = null, null === It && Yt()), j("clarity", "resume"))
            },
            set: ct,
            signal: function(t) {
                yt = t
            },
            start: jo,
            stop: Ao,
            upgrade: at,
            version: d
        }),
        Lo = window,
        Wo = "clarity";

    function zo() {
        if (void 0 !== Lo) {
            if (Lo[Wo] && Lo[Wo].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Lo[Wo] && Lo[Wo].q || [];
            for (Lo[Wo] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return Ro[t].apply(Ro, e)
                }, Lo[Wo].v = d; t.length > 0;) Lo[Wo].apply(Lo, t.shift())
        }
    }
    zo()
}();