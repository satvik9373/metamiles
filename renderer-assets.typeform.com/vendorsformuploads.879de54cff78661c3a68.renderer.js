"use strict";
(() => {
    (self.webpackChunk_typeform_renderer = self.webpackChunk_typeform_renderer || []).push([
        [4824], {
            16393: (tn, M, q) => {
                q.d(M, {
                    $: () => Rn,
                    A: () => rn,
                    B: () => x,
                    C: () => V,
                    D: () => i,
                    E: () => d,
                    F: () => B,
                    G: () => dn,
                    H: () => U,
                    I: () => In,
                    J: () => un,
                    L: () => En,
                    M: () => Tn,
                    N: () => kn,
                    O: () => Sn,
                    P: () => en,
                    Q: () => xn,
                    R: () => an,
                    S: () => cn,
                    T: () => X,
                    W: () => Un,
                    Z: () => bn,
                    a: () => on,
                    a2: () => Mn,
                    a4: () => Pn,
                    a6: () => jn,
                    b: () => fn,
                    d: () => sn,
                    e: () => hn,
                    f: () => vn,
                    g: () => ln,
                    h: () => mn,
                    i: () => o,
                    j: () => P,
                    k: () => k,
                    l: () => g,
                    m: () => c,
                    n: () => An,
                    o: () => D,
                    p: () => H,
                    q: () => f,
                    r: () => Y,
                    s: () => v,
                    t: () => I,
                    u: () => Q,
                    v: () => T,
                    y: () => A,
                    z: () => y
                });
                var l = q(56590),
                    s = q(82795),
                    h = q(46062),
                    p = 2147483647;

                function N(t, n) {
                    n === void 0 && (n = !0);
                    var r, a = new Promise(function(m) {
                        r = setTimeout(m, Math.min(p, t), n)
                    });
                    return a[l.bO] = function() {
                        clearTimeout(r)
                    }, a
                }
                const C = N;
                var O = function(n) {
                        return function() {
                            return n
                        }
                    },
                    k = O(!0),
                    I = function() {},
                    U = function(n) {
                        return n
                    },
                    j = typeof Symbol == "function",
                    K = j && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";

                function F(t, n, r) {
                    if (!n(t)) throw new Error(r)
                }
                var H = function(n, r) {
                        (0, s.A)(n, r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(r).forEach(function(a) {
                            n[a] = r[a]
                        })
                    },
                    Q = function(n, r) {
                        var a;
                        return (a = []).concat.apply(a, r.map(n))
                    };

                function Y(t, n) {
                    var r = t.indexOf(n);
                    r >= 0 && t.splice(r, 1)
                }

                function D(t) {
                    var n = !1;
                    return function() {
                        n || (n = !0, t())
                    }
                }
                var $ = function(n) {
                        throw n
                    },
                    z = function(n) {
                        return {
                            value: n,
                            done: !0
                        }
                    };

                function f(t, n, r) {
                    n === void 0 && (n = $), r === void 0 && (r = "iterator");
                    var a = {
                        meta: {
                            name: r
                        },
                        next: t,
                        throw: n,
                        return: z,
                        isSagaIterator: !0
                    };
                    return typeof Symbol != "undefined" && (a[Symbol.iterator] = function() {
                        return a
                    }), a
                }

                function i(t, n) {
                    var r = n.sagaStack;
                    console.error(t), console.error(r)
                }
                var o = function(n) {
                        return new Error(`
  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug
  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.
  Error: ` + n + `
`)
                    },
                    e = function(n, r) {
                        return (n ? n + "." : "") + "setContext(props): argument " + r + " is not a plain object"
                    },
                    u = `You can't put (a.k.a. dispatch from saga) frozen actions.
We have to define a special non-enumerable property on those actions for scheduling purposes.
Otherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).
If you are using redux and you care about this behaviour (frozen actions),
then you might want to switch to freezing actions in a middleware rather than in action creator.
Example implementation:

const freezeActions = store => next => action => next(Object.freeze(action))
`,
                    c = function(n) {
                        return Array.apply(null, new Array(n))
                    },
                    d = function(n) {
                        return function(r) {
                            return n(Object.defineProperty(r, l.q8, {
                                value: !0
                            }))
                        }
                    },
                    y = function(n) {
                        return n === l.a6
                    },
                    A = function(n) {
                        return n === l.nm
                    },
                    v = function(n) {
                        return y(n) || A(n)
                    };

                function g(t, n) {
                    var r = Object.keys(t),
                        a = r.length,
                        m = 0,
                        w, G = (0, h.YO)(t) ? c(a) : {},
                        W = {};

                    function _() {
                        m === a && (w = !0, n(G))
                    }
                    return r.forEach(function(R) {
                        var L = function(pn, qn) {
                            w || (qn || v(pn) ? (n.cancel(), n(pn, qn)) : (G[R] = pn, m++, _()))
                        };
                        L.cancel = I, W[R] = L
                    }), n.cancel = function() {
                        w || (w = !0, r.forEach(function(R) {
                            return W[R].cancel()
                        }))
                    }, W
                }

                function P(t) {
                    return {
                        name: t.name || "anonymous",
                        location: T(t)
                    }
                }

                function T(t) {
                    return t[l.x2]
                }

                function x() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.length === 0 ? function(a) {
                        return a
                    } : n.length === 1 ? n[0] : n.reduce(function(a, m) {
                        return function() {
                            return a(m.apply(void 0, arguments))
                        }
                    })
                }
                var S = "Channel's Buffer overflow!",
                    b = 1,
                    Cn = 2,
                    gn = 3,
                    yn = 4,
                    Ln = {
                        isEmpty: k,
                        put: I,
                        take: I
                    };

                function J(t, n) {
                    t === void 0 && (t = 10);
                    var r = new Array(t),
                        a = 0,
                        m = 0,
                        w = 0,
                        G = function(L) {
                            r[m] = L, m = (m + 1) % t, a++
                        },
                        W = function() {
                            if (a != 0) {
                                var L = r[w];
                                return r[w] = null, a--, w = (w + 1) % t, L
                            }
                        },
                        _ = function() {
                            for (var L = []; a;) L.push(W());
                            return L
                        };
                    return {
                        isEmpty: function() {
                            return a == 0
                        },
                        put: function(L) {
                            if (a < t) G(L);
                            else {
                                var nn;
                                switch (n) {
                                    case b:
                                        throw new Error(S);
                                    case gn:
                                        r[m] = L, m = (m + 1) % t, w = m;
                                        break;
                                    case yn:
                                        nn = 2 * t, r = _(), a = r.length, m = r.length, w = 0, r.length = nn, t = nn, G(L);
                                        break;
                                    default:
                                }
                            }
                        },
                        take: W,
                        flush: _
                    }
                }
                var An = function() {
                        return Ln
                    },
                    wn = function(n) {
                        return J(n, b)
                    },
                    Nn = function(n) {
                        return J(n, Cn)
                    },
                    On = function(n) {
                        return J(n, gn)
                    },
                    hn = function(n) {
                        return J(n, yn)
                    },
                    In = Object.freeze({
                        __proto__: null,
                        none: An,
                        fixed: wn,
                        dropping: Nn,
                        sliding: On,
                        expanding: hn
                    }),
                    X = "TAKE",
                    en = "PUT",
                    rn = "ALL",
                    an = "RACE",
                    V = "CALL",
                    on = "CPS",
                    B = "FORK",
                    un = "JOIN",
                    fn = "CANCEL",
                    cn = "SELECT",
                    sn = "ACTION_CHANNEL",
                    vn = "CANCELLED",
                    ln = "FLUSH",
                    dn = "GET_CONTEXT",
                    mn = "SET_CONTEXT",
                    Hn = Object.freeze({
                        __proto__: null,
                        TAKE: X,
                        PUT: en,
                        ALL: rn,
                        RACE: an,
                        CALL: V,
                        CPS: on,
                        FORK: B,
                        JOIN: un,
                        CANCEL: fn,
                        SELECT: cn,
                        ACTION_CHANNEL: sn,
                        CANCELLED: vn,
                        FLUSH: ln,
                        GET_CONTEXT: dn,
                        SET_CONTEXT: mn
                    }),
                    Wn = `
(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)`,
                    E = function(n, r) {
                        var a;
                        return a = {}, a[l.IO] = !0, a.combinator = !1, a.type = n, a.payload = r, a
                    },
                    Kn = function(n) {
                        return effect(n) && n.type === B
                    },
                    Fn = function(n) {
                        return E(B, (0, s.A)({}, n.payload, {
                            detached: !0
                        }))
                    };

                function En(t, n) {
                    if (t === void 0 && (t = "*"), (0, h.T1)(t)) return (0, h.uQ)(n) && console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"), E(X, {
                        pattern: t
                    });
                    if ((0, h.fD)(t) && (0, h.uQ)(n) && (0, h.T1)(n)) return E(X, {
                        channel: t,
                        pattern: n
                    });
                    if ((0, h.Ix)(t)) return (0, h.uQ)(n) && console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."), E(X, {
                        channel: t
                    })
                }
                var Dn = function() {
                    var n = En.apply(void 0, arguments);
                    return n.payload.maybe = !0, n
                };

                function bn(t, n) {
                    return (0, h.vD)(n) && (n = t, t = void 0), E(en, {
                        channel: t,
                        action: n
                    })
                }
                var zn = function() {
                    var n = bn.apply(void 0, arguments);
                    return n.payload.resolve = !0, n
                };

                function Rn(t) {
                    var n = E(rn, t);
                    return n.combinator = !0, n
                }

                function Un(t) {
                    var n = E(an, t);
                    return n.combinator = !0, n
                }
                var Xn = function(n, r) {
                    if (F(r, notUndef, n + ": argument fn is undefined or null"), !func(r)) {
                        var a = null,
                            m;
                        if (array(r)) a = r[0], m = r[1], F(m, notUndef, n + ": argument of type [context, fn] has undefined or null `fn`");
                        else if (object(r)) a = r.context, m = r.fn, F(m, notUndef, n + ": argument of type {context, fn} has undefined or null `fn`");
                        else {
                            F(r, func, n + ": argument fn is not function");
                            return
                        }
                        if (a && string(m)) {
                            F(a[m], func, n + ': context arguments has no such method - "' + m + '"');
                            return
                        }
                        F(m, func, n + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function")
                    }
                };

                function Z(t, n) {
                    var r = null,
                        a;
                    return (0, h.Pc)(t) ? a = t : ((0, h.YO)(t) ? (r = t[0], a = t[1]) : (r = t.context, a = t.fn), r && (0, h.Yj)(a) && (0, h.Pc)(r[a]) && (a = r[a])), {
                        context: r,
                        fn: a,
                        args: n
                    }
                }
                var Bn = function(n) {
                    return n !== xn
                };

                function Sn(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    if (0) var m;
                    return E(V, Z(t, r))
                }

                function Gn(t, n, r) {
                    r === void 0 && (r = []);
                    var a = [t, n];
                    return E(V, Z([t, n], r))
                }

                function Qn(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return E(on, Z(t, r))
                }

                function Tn(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return E(B, Z(t, r))
                }

                function Mn(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return Fn(Tn.apply(void 0, [t].concat(r)))
                }

                function Yn(t) {
                    return E(un, t)
                }

                function kn(t) {
                    return t === void 0 && (t = l.Pe), E(fn, t)
                }

                function Pn(t) {
                    t === void 0 && (t = U);
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return E(cn, {
                        selector: t,
                        args: r
                    })
                }

                function $n(t, n) {
                    return E(sn, {
                        pattern: t,
                        buffer: n
                    })
                }

                function Jn() {
                    return E(vn, {})
                }

                function jn(t) {
                    return E(ln, t)
                }

                function Vn(t) {
                    return E(dn, t)
                }

                function Zn(t) {
                    return E(mn, t)
                }
                var xn = Sn.bind(null, C)
            },
            46062: (tn, M, q) => {
                q.d(M, {
                    HR: () => z,
                    Ix: () => D,
                    Pc: () => p,
                    T1: () => Y,
                    YO: () => O,
                    Yj: () => C,
                    fD: () => f,
                    iv: () => I,
                    lJ: () => U,
                    mr: () => $,
                    uQ: () => h,
                    vD: () => s
                });
                var l = q(56590),
                    s = function(e) {
                        return e == null
                    },
                    h = function(e) {
                        return e != null
                    },
                    p = function(e) {
                        return typeof e == "function"
                    },
                    N = function(e) {
                        return typeof e == "number"
                    },
                    C = function(e) {
                        return typeof e == "string"
                    },
                    O = Array.isArray,
                    k = function(e) {
                        return e && !O(e) && typeof e == "object"
                    },
                    I = function(e) {
                        return e && p(e.then)
                    },
                    U = function(e) {
                        return e && p(e.next) && p(e.throw)
                    },
                    j = function(e) {
                        return e && p(Symbol) ? p(e[Symbol.iterator]) : O(e)
                    },
                    K = function(e) {
                        return e && e[TASK]
                    },
                    F = function(e) {
                        return !!(e && e[SAGA_ACTION])
                    },
                    H = function(e) {
                        return e && p(e.subscribe)
                    },
                    Q = function(e) {
                        return e && p(e.isEmpty) && p(e.take) && p(e.put)
                    },
                    Y = function o(e) {
                        return e && (C(e) || z(e) || p(e) || O(e) && e.every(o))
                    },
                    D = function(e) {
                        return e && p(e.take) && p(e.close)
                    },
                    $ = function(e) {
                        return p(e) && e.hasOwnProperty("toString")
                    },
                    z = function(e) {
                        return !!e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
                    },
                    f = function(e) {
                        return D(e) && e[l.Xl]
                    },
                    i = function(e) {
                        return e && e[IO]
                    }
            },
            56590: (tn, M, q) => {
                q.d(M, {
                    E_: () => N,
                    IO: () => p,
                    Pe: () => k,
                    Xl: () => C,
                    a6: () => j,
                    bO: () => s,
                    nm: () => U,
                    q8: () => O,
                    wn: () => I,
                    x2: () => K,
                    x7: () => h
                });
                var l = function(H) {
                        return "@@redux-saga/" + H
                    },
                    s = l("CANCEL_PROMISE"),
                    h = l("CHANNEL_END"),
                    p = l("IO"),
                    N = l("MATCH"),
                    C = l("MULTICAST"),
                    O = l("SAGA_ACTION"),
                    k = l("SELF_CANCELLATION"),
                    I = l("TASK"),
                    U = l("TASK_CANCEL"),
                    j = l("TERMINATE"),
                    K = l("LOCATION")
            },
            57036: (tn, M, q) => {
                q.d(M, {
                    Q7: () => s.$,
                    T1: () => s.O,
                    ZT: () => s.N,
                    cb: () => s.Q,
                    bX: () => s.a6,
                    Zy: () => s.M,
                    yJ: () => s.Z,
                    O4: () => s.W,
                    Lt: () => s.a4,
                    cH: () => s.a2,
                    s: () => s.L,
                    jP: () => H,
                    p8: () => Q
                });
                var l = q(46062),
                    s = q(16393),
                    h = function(i) {
                        return {
                            done: !0,
                            value: i
                        }
                    },
                    p = {};

                function N(f) {
                    return (0, l.Ix)(f) ? "channel" : (0, l.mr)(f) ? String(f) : (0, l.Pc)(f) ? f.name : String(f)
                }

                function C(f, i, o) {
                    var e, u, c, d = i;

                    function y(A, v) {
                        if (d === p) return h(A);
                        if (v && !u) throw d = p, v;
                        e && e(A);
                        var g = v ? f[u](v) : f[d]();
                        return d = g.nextState, c = g.effect, e = g.stateUpdater, u = g.errorState, d === p ? h(A) : c
                    }
                    return (0, s.q)(y, function(A) {
                        return y(null, A)
                    }, o)
                }

                function O(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    var c = {
                            done: !1,
                            value: (0, s.L)(f)
                        },
                        d = function(g) {
                            return {
                                done: !1,
                                value: s.M.apply(void 0, [i].concat(e, [g]))
                            }
                        },
                        y, A = function(g) {
                            return y = g
                        };
                    return C({
                        q1: function() {
                            return {
                                nextState: "q2",
                                effect: c,
                                stateUpdater: A
                            }
                        },
                        q2: function() {
                            return {
                                nextState: "q1",
                                effect: d(y)
                            }
                        }
                    }, "q1", "takeEvery(" + N(f) + ", " + i.name + ")")
                }

                function k(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    var c = {
                            done: !1,
                            value: (0, s.L)(f)
                        },
                        d = function(x) {
                            return {
                                done: !1,
                                value: s.M.apply(void 0, [i].concat(e, [x]))
                            }
                        },
                        y = function(x) {
                            return {
                                done: !1,
                                value: (0, s.N)(x)
                            }
                        },
                        A, v, g = function(x) {
                            return A = x
                        },
                        P = function(x) {
                            return v = x
                        };
                    return C({
                        q1: function() {
                            return {
                                nextState: "q2",
                                effect: c,
                                stateUpdater: P
                            }
                        },
                        q2: function() {
                            return A ? {
                                nextState: "q3",
                                effect: y(A)
                            } : {
                                nextState: "q1",
                                effect: d(v),
                                stateUpdater: g
                            }
                        },
                        q3: function() {
                            return {
                                nextState: "q1",
                                effect: d(v),
                                stateUpdater: g
                            }
                        }
                    }, "q1", "takeLatest(" + N(f) + ", " + i.name + ")")
                }

                function I(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    var c = {
                            done: !1,
                            value: take(f)
                        },
                        d = function(g) {
                            return {
                                done: !1,
                                value: call.apply(void 0, [i].concat(e, [g]))
                            }
                        },
                        y, A = function(g) {
                            return y = g
                        };
                    return C({
                        q1: function() {
                            return {
                                nextState: "q2",
                                effect: c,
                                stateUpdater: A
                            }
                        },
                        q2: function() {
                            return {
                                nextState: "q1",
                                effect: d(y)
                            }
                        }
                    }, "q1", "takeLeading(" + N(f) + ", " + i.name + ")")
                }

                function U(f, i, o) {
                    for (var e = arguments.length, u = new Array(e > 3 ? e - 3 : 0), c = 3; c < e; c++) u[c - 3] = arguments[c];
                    var d, y, A = function() {
                            return {
                                done: !1,
                                value: take(y)
                            }
                        },
                        v = function(b) {
                            return {
                                done: !1,
                                value: fork.apply(void 0, [o].concat(u, [b]))
                            }
                        },
                        g = {
                            done: !1,
                            value: delay(f)
                        },
                        P = function(b) {
                            return d = b
                        },
                        T = function(b) {
                            return y = b
                        },
                        x = !channel(i);
                    return x || T(i), C({
                        q1: function() {
                            var b = {
                                done: !1,
                                value: actionChannel(i, sliding(1))
                            };
                            return {
                                nextState: "q2",
                                effect: b,
                                stateUpdater: T
                            }
                        },
                        q2: function() {
                            return {
                                nextState: "q3",
                                effect: A(),
                                stateUpdater: P
                            }
                        },
                        q3: function() {
                            return {
                                nextState: "q4",
                                effect: v(d)
                            }
                        },
                        q4: function() {
                            return {
                                nextState: "q2",
                                effect: g
                            }
                        }
                    }, x ? "q1" : "q2", "throttle(" + N(i) + ", " + o.name + ")")
                }

                function j(f, i, o) {
                    for (var e = f, u = arguments.length, c = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++) c[d - 3] = arguments[d];
                    var y = {
                            done: !1,
                            value: call.apply(void 0, [o].concat(c))
                        },
                        A = {
                            done: !1,
                            value: delay(i)
                        };
                    return C({
                        q1: function() {
                            return {
                                nextState: "q2",
                                effect: y,
                                errorState: "q10"
                            }
                        },
                        q2: function() {
                            return {
                                nextState: p
                            }
                        },
                        q10: function(g) {
                            if (e -= 1, e <= 0) throw g;
                            return {
                                nextState: "q1",
                                effect: A
                            }
                        }
                    }, "q1", "retry(" + o.name + ")")
                }

                function K(f, i, o) {
                    for (var e = arguments.length, u = new Array(e > 3 ? e - 3 : 0), c = 3; c < e; c++) u[c - 3] = arguments[c];
                    var d, y, A = {
                            done: !1,
                            value: take(i)
                        },
                        v = {
                            done: !1,
                            value: race({
                                action: take(i),
                                debounce: delay(f)
                            })
                        },
                        g = function(b) {
                            return {
                                done: !1,
                                value: fork.apply(void 0, [o].concat(u, [b]))
                            }
                        },
                        P = function(b) {
                            return {
                                done: !1,
                                value: b
                            }
                        },
                        T = function(b) {
                            return d = b
                        },
                        x = function(b) {
                            return y = b
                        };
                    return C({
                        q1: function() {
                            return {
                                nextState: "q2",
                                effect: A,
                                stateUpdater: T
                            }
                        },
                        q2: function() {
                            return {
                                nextState: "q3",
                                effect: v,
                                stateUpdater: x
                            }
                        },
                        q3: function() {
                            return y.debounce ? {
                                nextState: "q1",
                                effect: g(d)
                            } : {
                                nextState: "q2",
                                effect: P(y.action),
                                stateUpdater: T
                            }
                        }
                    }, "q1", "debounce(" + N(i) + ", " + o.name + ")")
                }
                var F = function(i, o, e) {
                    check(o, notUndef, i.name + " requires a pattern or channel"), check(e, notUndef, i.name + " requires a saga parameter")
                };

                function H(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    return s.M.apply(void 0, [O, f, i].concat(e))
                }

                function Q(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    return s.M.apply(void 0, [k, f, i].concat(e))
                }

                function Y(f, i) {
                    for (var o = arguments.length, e = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) e[u - 2] = arguments[u];
                    return fork.apply(void 0, [I, f, i].concat(e))
                }

                function D(f, i, o) {
                    for (var e = arguments.length, u = new Array(e > 3 ? e - 3 : 0), c = 3; c < e; c++) u[c - 3] = arguments[c];
                    return fork.apply(void 0, [U, f, i, o].concat(u))
                }

                function $(f, i, o) {
                    for (var e = arguments.length, u = new Array(e > 3 ? e - 3 : 0), c = 3; c < e; c++) u[c - 3] = arguments[c];
                    return call.apply(void 0, [j, f, i, o].concat(u))
                }

                function z(f, i, o) {
                    for (var e = arguments.length, u = new Array(e > 3 ? e - 3 : 0), c = 3; c < e; c++) u[c - 3] = arguments[c];
                    return fork.apply(void 0, [K, f, i, o].concat(u))
                }
            }
        }
    ]);
})();