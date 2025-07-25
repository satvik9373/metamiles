! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LoconativeScroll = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function i(t, i, o) {
        return i && e(t.prototype, i), o && e(t, o), t
    }

    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function n(t, e) {
        return (n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function r(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, n = o(t);
            if (e) {
                var r = o(this).constructor;
                i = Reflect.construct(n, arguments, r)
            } else i = n.apply(this, arguments);
            return s(this, i)
        }
    }

    function l(t, e, i) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t)););
                return t
            }(t, e);
            if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(i) : s.value
            }
        })(t, e, i || t)
    }

    function a(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var i = [],
                o = !0,
                n = !1,
                s = void 0;
            try {
                for (var r, l = t[Symbol.iterator](); !(o = (r = l.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
            } catch (t) {
                n = !0, s = t
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (n) throw s
                }
            }
            return i
        }(t, e) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return c(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
        return o
    }
    var h = {
            el: document.querySelector("body"),
            wrapper: window,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !0,
            initPosition: {
                x: 0,
                y: 0
            },
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !0,
            class: "is-inview",
            scrollingClass: "has-scroll-scrolling",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            duration: 1.2,
            easing: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            scrollToEasing: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            scrollFromAnywhere: !1,
            touchMultiplier: 3,
            resetNativeScroll: !0,
            tablet: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "horizontal",
                breakpoint: 1024
            },
            smartphone: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical"
            }
        },
        u = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), Object.assign(this, h, i), this.smartphone = h.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = h.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && window.innerWidth >= this.tablet.breakpoint, this.isMobile && (this.smooth = this.smartphone.smooth), this.isTablet && (this.smooth = this.tablet.smooth), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.onScroll = this.onScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                    scroll: {
                        x: 0,
                        y: 0
                    },
                    delta: {
                        x: 0,
                        y: 0
                    },
                    limit: {
                        x: this.html.offsetWidth,
                        y: this.html.offsetHeight
                    },
                    currentElements: this.currentElements
                }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), this.isMobile && (this.gestureDirection = this[this.context].gestureDirection), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.instance.direction = null, this.instance.speed = 0, this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
            }
            return i(e, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "onScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function() {
                        t.resize(), t.resizeTick = !1
                    })))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function(e) {
                        e.addEventListener("click", t.setScrollTo, !1)
                    }))
                }
            }, {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(t) {
                    var e = this,
                        i = this.instance.scroll.y,
                        o = i + this.windowHeight,
                        n = this.instance.scroll.x,
                        s = n + this.windowWidth;
                    Object.entries(this.els).forEach((function(r) {
                        var l = a(r, 2),
                            c = l[0],
                            h = l[1];
                        if (!h || h.inView && !t || ("horizontal" === e.direction ? s >= h.left && n < h.right && e.setInView(h, c) : o >= h.top && i < h.bottom && e.setInView(h, c)), h && h.inView)
                            if ("horizontal" === e.direction) {
                                var u = h.right - h.left;
                                h.progress = (e.instance.scroll.x - (h.left - e.windowWidth)) / (u + e.windowWidth), (s < h.left || n > h.right) && e.setOutOfView(h, c)
                            } else {
                                var d = h.bottom - h.top;
                                h.progress = (e.instance.scroll.y - (h.top - e.windowHeight)) / (d + e.windowHeight), (o < h.top || i > h.bottom) && e.setOutOfView(h, c)
                            }
                    })), this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(t, e) {
                    var i = this;
                    this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function(t) {
                        t === e && delete i.currentElements[t]
                    })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function(t, e) {
                    this.callWay = e, this.callValue = t.call.split(",").map((function(t) {
                        return t.trim()
                    })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, e) {
                    if (this.listeners[t]) {
                        var i = this.listeners[t],
                            o = i.indexOf(e);
                        o < 0 || (i.splice(o, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var e = this,
                        i = t.type.replace(this.namespace, ""),
                        o = this.listeners[i];
                    o && 0 !== o.length && o.forEach((function(t) {
                        switch (i) {
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t()
                        }
                    }))
                }
            }, {
                key: "startScroll",
                value: function() {
                    this.stop = !1
                }
            }, {
                key: "stopScroll",
                value: function() {
                    this.stop = !0
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function(e) {
                        t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                    })), this.listeners = {}, this.scrollToEls.forEach((function(e) {
                        e.removeEventListener("click", t.setScrollTo, !1)
                    })), this.html.classList.remove(this.initClass)
                }
            }]), e
        }();
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function d(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var f = d((function(t, e) {
        t.exports = {
            polyfill: function() {
                var t = window,
                    e = document;
                if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                    var i, o = t.HTMLElement || t.Element,
                        n = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: o.prototype.scroll || l,
                            scrollIntoView: o.prototype.scrollIntoView
                        },
                        s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                        r = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                    t.scroll = t.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }, t.scrollBy = function() {
                        void 0 !== arguments[0] && (a(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }, o.prototype.scroll = o.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== a(arguments[0])) {
                                var t = arguments[0].left,
                                    e = arguments[0].top;
                                p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }, o.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, o.prototype.scrollIntoView = function() {
                        if (!0 !== a(arguments[0])) {
                            var i = d(this),
                                o = i.getBoundingClientRect(),
                                s = this.getBoundingClientRect();
                            i !== e.body ? (p.call(this, i, i.scrollLeft + s.left - o.left, i.scrollTop + s.top - o.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                left: o.left,
                                top: o.top,
                                behavior: "smooth"
                            })) : t.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })
                        } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function l(t, e) {
                    this.scrollLeft = t, this.scrollTop = e
                }

                function a(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                    if ("object" == typeof t && "smooth" === t.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function c(t, e) {
                    return "Y" === e ? t.clientHeight + r < t.scrollHeight : "X" === e ? t.clientWidth + r < t.scrollWidth : void 0
                }

                function h(e, i) {
                    var o = t.getComputedStyle(e, null)["overflow" + i];
                    return "auto" === o || "scroll" === o
                }

                function u(t) {
                    var e = c(t, "Y") && h(t, "Y"),
                        i = c(t, "X") && h(t, "X");
                    return e || i
                }

                function d(t) {
                    for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                    return t
                }

                function f(e) {
                    var i, o, n, r, l = (s() - e.startTime) / 468;
                    r = l = l > 1 ? 1 : l, i = .5 * (1 - Math.cos(Math.PI * r)), o = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, o, n), o === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                }

                function p(i, o, r) {
                    var a, c, h, u, d = s();
                    i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, u = n.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, u = l), f({
                        scrollable: a,
                        method: u,
                        startTime: d,
                        startX: c,
                        startY: h,
                        x: o,
                        y: r
                    })
                }
            }
        }
    }));
    f.polyfill;

    function p(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t),
                o = i.transform || i.webkitTransform || i.mozTransform,
                n = o.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = o.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
        }
    }

    function v(t, e, i) {
        return (1 - i) * t + i * e
    }

    function m() {}
    m.prototype = {
        on: function(t, e, i) {
            var o = this.e || (this.e = {});
            return (o[t] || (o[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var o = this;

            function n() {
                o.off(t, n), e.apply(i, arguments)
            }
            return n._ = e, this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, n = i.length; o < n; o++) i[o].fn.apply(i[o].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                o = i[t],
                n = [];
            if (o && e)
                for (var s = 0, r = o.length; s < r; s++) o[s].fn !== e && o[s].fn._ !== e && n.push(o[s]);
            return n.length ? i[t] = n : delete i[t], this
        }
    };
    var y = m,
        w = m;
    y.TinyEmitter = w;
    var g = d((function(t, e) {
        t.exports = function() {
            var t = 0;

            function e(e) {
                return "__private_" + t++ + "_" + e
            }

            function i(t, e) {
                if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
                return t
            }

            function o() {}
            o.prototype = {
                on: function(t, e, i) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: i
                    }), this
                },
                once: function(t, e, i) {
                    var o = this;

                    function n() {
                        o.off(t, n), e.apply(i, arguments)
                    }
                    return n._ = e, this.on(t, n, i)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, n = i.length; o < n; o++) i[o].fn.apply(i[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var i = this.e || (this.e = {}),
                        o = i[t],
                        n = [];
                    if (o && e)
                        for (var s = 0, r = o.length; s < r; s++) o[s].fn !== e && o[s].fn._ !== e && n.push(o[s]);
                    return n.length ? i[t] = n : delete i[t], this
                }
            };
            var n = o;
            n.TinyEmitter = o;
            var s, r = "virtualscroll",
                l = e("options"),
                a = e("el"),
                c = e("emitter"),
                h = e("event"),
                u = e("touchStart"),
                d = e("bodyTouchAction");
            return function() {
                function t(t) {
                    var e = this;
                    Object.defineProperty(this, l, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, a, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, c, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, h, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, u, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, d, {
                        writable: !0,
                        value: void 0
                    }), this._onWheel = function(t) {
                        var o = i(e, l)[l],
                            n = i(e, h)[h];
                        n.deltaX = t.wheelDeltaX || -1 * t.deltaX, n.deltaY = t.wheelDeltaY || -1 * t.deltaY, s.isFirefox && 1 === t.deltaMode && (n.deltaX *= o.firefoxMultiplier, n.deltaY *= o.firefoxMultiplier), n.deltaX *= o.mouseMultiplier, n.deltaY *= o.mouseMultiplier, e._notify(t)
                    }, this._onMouseWheel = function(t) {
                        var o = i(e, h)[h];
                        o.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, o.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, e._notify(t)
                    }, this._onTouchStart = function(t) {
                        var o = t.targetTouches ? t.targetTouches[0] : t;
                        i(e, u)[u].x = o.pageX, i(e, u)[u].y = o.pageY
                    }, this._onTouchMove = function(t) {
                        var o = i(e, l)[l];
                        o.preventTouch && !t.target.classList.contains(o.unpreventTouchClass) && t.preventDefault();
                        var n = i(e, h)[h],
                            s = t.targetTouches ? t.targetTouches[0] : t;
                        n.deltaX = (s.pageX - i(e, u)[u].x) * o.touchMultiplier, n.deltaY = (s.pageY - i(e, u)[u].y) * o.touchMultiplier, i(e, u)[u].x = s.pageX, i(e, u)[u].y = s.pageY, e._notify(t)
                    }, this._onKeyDown = function(t) {
                        var o = i(e, h)[h];
                        o.deltaX = o.deltaY = 0;
                        var n = window.innerHeight - 40;
                        switch (t.keyCode) {
                            case 37:
                            case 38:
                                o.deltaY = i(e, l)[l].keyStep;
                                break;
                            case 39:
                            case 40:
                                o.deltaY = -i(e, l)[l].keyStep;
                                break;
                            case 32:
                                o.deltaY = n * (t.shiftKey ? 1 : -1);
                                break;
                            default:
                                return
                        }
                        e._notify(t)
                    }, i(this, a)[a] = window, t && t.el && (i(this, a)[a] = t.el, delete t.el), s || (s = {
                        hasWheelEvent: "onwheel" in document,
                        hasMouseWheelEvent: "onmousewheel" in document,
                        hasTouch: "ontouchstart" in document,
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown" in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                    }), i(this, l)[l] = Object.assign({
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0
                    }, t), i(this, c)[c] = new n, i(this, h)[h] = {
                        y: 0,
                        x: 0,
                        deltaX: 0,
                        deltaY: 0
                    }, i(this, u)[u] = {
                        x: null,
                        y: null
                    }, i(this, d)[d] = null, void 0 !== i(this, l)[l].passive && (this.listenerOptions = {
                        passive: i(this, l)[l].passive
                    })
                }
                var e = t.prototype;
                return e._notify = function(t) {
                    var e = i(this, h)[h];
                    e.x += e.deltaX, e.y += e.deltaY, i(this, c)[c].emit(r, {
                        x: e.x,
                        y: e.y,
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        originalEvent: t
                    })
                }, e._bind = function() {
                    s.hasWheelEvent && i(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && i(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && i(this, l)[l].useTouch && (i(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (i(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, l)[l].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                }, e._unbind = function() {
                    s.hasWheelEvent && i(this, a)[a].removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && i(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (i(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = i(this, d)[d], i(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, l)[l].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                }, e.on = function(t, e) {
                    i(this, c)[c].on(r, t, e);
                    var o = i(this, c)[c].e;
                    o && o[r] && 1 === o[r].length && this._bind()
                }, e.off = function(t, e) {
                    i(this, c)[c].off(r, t, e);
                    var o = i(this, c)[c].e;
                    (!o[r] || o[r].length <= 0) && this._unbind()
                }, e.destroy = function() {
                    i(this, c)[c].off(), this._unbind()
                }, t
            }()
        }()
    }));

    function b(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function T(t, e, i) {
        return e && b(t.prototype, e), i && b(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function k() {
        return (k = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
        }).apply(this, arguments)
    }

    function E(t, e) {
        return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var S = ["duration", "easing"],
        x = function() {
            function t() {}
            var e = t.prototype;
            return e.to = function(t, e) {
                var i = this,
                    o = void 0 === e ? {} : e,
                    n = o.duration,
                    s = void 0 === n ? 1 : n,
                    r = o.easing,
                    l = void 0 === r ? function(t) {
                        return t
                    } : r,
                    a = function(t, e) {
                        if (null == t) return {};
                        var i, o, n = {},
                            s = Object.keys(t);
                        for (o = 0; o < s.length; o++) e.indexOf(i = s[o]) >= 0 || (n[i] = t[i]);
                        return n
                    }(o, S);
                this.target = t, this.fromKeys = k({}, a), this.toKeys = k({}, a), this.keys = Object.keys(k({}, a)), this.keys.forEach((function(e) {
                    i.fromKeys[e] = t[e]
                })), this.duration = s, this.easing = l, this.currentTime = 0, this.isRunning = !0
            }, e.stop = function() {
                this.isRunning = !1
            }, e.raf = function(t) {
                var e = this;
                if (this.isRunning) {
                    this.currentTime = Math.min(this.currentTime + .001 * t, this.duration);
                    var i = this.easing(this.progress);
                    this.keys.forEach((function(t) {
                        var o = e.fromKeys[t];
                        e.target[t] = o + (e.toKeys[t] - o) * i
                    })), 1 === i && (this.isRunning = !1)
                }
            }, T(t, [{
                key: "progress",
                get: function() {
                    return this.currentTime / this.duration
                }
            }]), t
        }(),
        O = function(t) {
            var e, i;

            function o(e) {
                var i, o, n, s, r = void 0 === e ? {} : e,
                    l = r.duration,
                    a = void 0 === l ? 1.2 : l,
                    c = r.easing,
                    h = void 0 === c ? function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    } : c,
                    u = r.smooth,
                    d = void 0 === u || u,
                    f = r.smoothTouch,
                    p = void 0 !== f && f,
                    v = r.touchMultiplier,
                    m = void 0 === v ? 2 : v,
                    y = r.direction,
                    w = void 0 === y ? "vertical" : y,
                    b = r.gestureDirection,
                    T = void 0 === b ? "vertical" : b,
                    k = r.wrapper,
                    E = void 0 === k ? window : k,
                    S = r.content,
                    O = void 0 === S ? document.body : S;
                (s = t.call(this) || this).onWindowResize = function() {
                    s.wrapperWidth = window.innerWidth, s.wrapperHeight = window.innerHeight
                }, s.onWrapperResize = function(t) {
                    var e = t[0];
                    if (e) {
                        var i = e.contentRect;
                        s.wrapperWidth = i.width, s.wrapperHeight = i.height
                    }
                }, s.onContentResize = function(t) {
                    var e = t[0];
                    if (e) {
                        var i = e.contentRect;
                        s.contentWidth = i.width, s.contentHeight = i.height
                    }
                }, s.onVirtualScroll = function(t) {
                    var e = t.deltaY,
                        i = t.deltaX,
                        o = t.originalEvent;
                    o.ctrlKey || (s.smooth = o.changedTouches ? s.smoothTouch : s.options.smooth, s.stopped ? o.preventDefault() : s.smooth && 4 !== o.buttons && (s.smooth && o.preventDefault(), s.targetScroll -= "both" === s.gestureDirection ? i + e : "horizontal" === s.gestureDirection ? i : e, s.targetScroll = Math.max(0, Math.min(s.targetScroll, s.limit)), s.scrollTo(s.targetScroll)))
                }, s.onScroll = function(t) {
                    s.isScrolling && s.smooth || (s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.notify())
                }, window.lenisVersion = "0.2.9", s.options = {
                    duration: a,
                    easing: h,
                    smooth: d,
                    smoothTouch: p,
                    touchMultiplier: m,
                    direction: w,
                    gestureDirection: T,
                    wrapper: E,
                    content: O
                }, s.duration = a, s.easing = h, s.smooth = d, s.smoothTouch = p, s.touchMultiplier = m, s.direction = w, s.gestureDirection = T, s.wrapperNode = E, s.contentNode = O, s.wrapperNode.addEventListener("scroll", s.onScroll), s.wrapperNode === window ? (s.wrapperNode.addEventListener("resize", s.onWindowResize), s.onWindowResize()) : (s.wrapperHeight = s.wrapperNode.offsetHeight, s.wrapperWidth = s.wrapperNode.offsetWidth, s.wrapperObserver = new ResizeObserver(s.onWrapperResize), s.wrapperObserver.observe(s.wrapperNode)), s.contentHeight = s.contentNode.offsetHeight, s.contentWidth = s.contentNode.offsetWidth, s.contentObserver = new ResizeObserver(s.onContentResize), s.contentObserver.observe(s.contentNode), s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.animate = new x;
                var M = (null == (i = navigator) || null == (o = i.userAgentData) ? void 0 : o.platform) || (null == (n = navigator) ? void 0 : n.platform) || "unknown";
                return s.virtualScroll = new g({
                    el: s.wrapperNode,
                    firefoxMultiplier: 50,
                    mouseMultiplier: M.includes("Win") ? 1 : .4,
                    useKeyboard: !1,
                    touchMultiplier: s.touchMultiplier,
                    useTouch: !0,
                    passive: !1
                }), s.virtualScroll.on(s.onVirtualScroll), s
            }
            i = t, (e = o).prototype = Object.create(i.prototype), e.prototype.constructor = e, E(e, i);
            var n = o.prototype;
            return n.start = function() {
                this.stopped = !1
            }, n.stop = function() {
                this.stopped = !0, this.animate.stop()
            }, n.destroy = function() {
                var t;
                this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t = this.wrapperObserver) || t.disconnect(), this.contentObserver.disconnect()
            }, n.raf = function(t) {
                var e = t - (this.now || 0);
                this.now = t, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(e), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll)
            }, n.setScroll = function(t) {
                "horizontal" === this.direction ? this.wrapperNode.scrollTo(t, 0) : this.wrapperNode.scrollTo(0, t)
            }, n.notify = function() {
                this.emit("scroll", {
                    scroll: this.scroll,
                    limit: this.limit,
                    velocity: this.velocity,
                    direction: this.direction,
                    progress: this.scroll / this.limit
                })
            }, n.scrollTo = function(t, e) {
                var i = void 0 === e ? {} : e,
                    o = i.offset,
                    n = void 0 === o ? 0 : o,
                    s = i.immediate,
                    r = void 0 !== s && s,
                    l = i.duration,
                    a = void 0 === l ? this.duration : l,
                    c = i.easing,
                    h = void 0 === c ? this.easing : c;
                if (null != t) {
                    var u;
                    if ("number" == typeof t) u = t;
                    else if ("top" === t || "#top" === t) u = 0;
                    else if ("bottom" === t) u = this.limit;
                    else {
                        var d;
                        if ("string" == typeof t) d = document.querySelector(t);
                        else {
                            if (null == t || !t.nodeType) return;
                            d = t
                        }
                        if (!d) return;
                        var f = 0;
                        if (this.wrapperNode !== window) {
                            var p = this.wrapperNode.getBoundingClientRect();
                            f = "horizontal" === this.direction ? p.left : p.top
                        }
                        var v = d.getBoundingClientRect();
                        u = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - f
                    }
                    this.targetScroll = u += n, !this.smooth || r ? this.setScroll(this.targetScroll) : this.animate.to(this, {
                        duration: a,
                        easing: h,
                        scroll: this.targetScroll
                    })
                }
            }, T(o, [{
                key: "scrollProperty",
                get: function() {
                    return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop"
                }
            }, {
                key: "limit",
                get: function() {
                    return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight
                }
            }, {
                key: "velocity",
                get: function() {
                    return this.scroll - this.lastScroll
                }
            }]), o
        }(y),
        M = function(e) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && n(t, e)
            }(c, e);
            var s = r(c);

            function c() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t(this, c), (e = s.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = f, window.smoothscrollPolyfill.polyfill()), e
            }
            return i(c, [{
                key: "init",
                value: function() {
                    this.smooth && (this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction)), this.addElements(), this.detectElements(), this.transformElements(!0, !0), this.initContainerSize(), this.lenis = new O({
                        wrapper: this.wrapper,
                        content: this.el,
                        duration: this.duration,
                        easing: this.easing,
                        direction: this.direction,
                        gestureDirection: this.gestureDirection,
                        smooth: this.smooth,
                        smoothTouch: this.smooth,
                        touchMultiplier: this.touchMultiplier
                    }), this.bindOnScroll = this.onScroll.bind(this), this.lenis.on("scroll", this.bindOnScroll), this.lenis.on("scroll", (function(t) {
                        t.scroll, t.limit, t.velocity, t.direction, t.progress
                    })), this.raf(0), l(o(c.prototype), "init", this).call(this)
                }
            }, {
                key: "raf",
                value: function(t) {
                    var e = this;
                    this.lenis.raf(t), this.rafInstance = requestAnimationFrame((function() {
                        return e.raf(Date.now())
                    }))
                }
            }, {
                key: "onScroll",
                value: function(t) {
                    var e = this,
                        i = t.scroll,
                        n = t.velocity;
                    i > this.instance.scroll[this.directionAxis] ? "down" !== this.instance.direction && (this.instance.direction = "down") : i < this.instance.scroll[this.directionAxis] && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.scroll[this.directionAxis] = i, this.instance.speed = n, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                        e.detectElements()
                    })), this.hasScrollTicking = !0)), l(o(c.prototype), "onScroll", this).call(this), this.transformElements()
                }
            }, {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    }, this.checkContext(), this.initContainerSize(), Object.entries(this.els).length && this.update()
                }
            }, {
                key: "initContainerSize",
                value: function() {
                    if ("horizontal" === this.direction) {
                        for (var t = 0, e = 0; e < this.el.children.length; e++) {
                            t += this.el.children[e].getBoundingClientRect().width
                        }
                        this.el.style.setProperty("--scrollContainerWidth", t + "px")
                    }
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                        e.getBoundingClientRect();
                        var o, n, s = e.dataset[t.name + "Class"] || t.class,
                            r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                            l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                            a = e.dataset[t.name + "Repeat"],
                            c = e.dataset[t.name + "Call"],
                            h = e.dataset[t.name + "Position"],
                            u = e.dataset[t.name + "Delay"],
                            d = e.dataset[t.name + "Direction"],
                            f = "string" == typeof e.dataset[t.name + "Sticky"];
                        f && console.warn("You use data-scroll-sticky, it's not recommended for performances. Please adapt your code and play with position:sticky.");
                        var v, m = e.dataset[t.name + "Target"],
                            y = (v = void 0 !== m ? document.querySelector("".concat(m)) : e).getBoundingClientRect();
                        o = y.top + t.instance.scroll.y - p(v).y, n = y.left + t.instance.scroll.x - p(v).x;
                        var w = o + v.offsetHeight,
                            g = n + v.offsetWidth,
                            b = {
                                x: (g - n) / 2 + n,
                                y: (w - o) / 2 + o
                            };
                        if (f) {
                            var T = e.getBoundingClientRect(),
                                k = T.top,
                                E = T.left,
                                S = {
                                    x: E - n,
                                    y: k - o
                                };
                            o += window.innerHeight, n += window.innerWidth, w = k + v.offsetHeight - e.offsetHeight - S[t.directionAxis], b = {
                                x: ((g = E + v.offsetWidth - e.offsetWidth - S[t.directionAxis]) - n) / 2 + n,
                                y: (w - o) / 2 + o
                            }
                        }
                        a = "false" != a && (null != a || t.repeat);
                        var x = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10;
                        x && (l = 0);
                        var O = [0, 0];
                        if (l)
                            if ("horizontal" === t.direction) {
                                for (var M = 0; M < l.length; M++) "string" == typeof l[M] ? l[M].includes("%") ? O[M] = parseInt(l[M].replace("%", "") * t.windowWidth / 100) : O[M] = parseInt(l[M]) : O[M] = l[M];
                                n += O[0], g -= O[1]
                            } else {
                                for (M = 0; M < l.length; M++) "string" == typeof l[M] ? l[M].includes("%") ? O[M] = parseInt(l[M].replace("%", "") * t.windowHeight / 100) : O[M] = parseInt(l[M]) : O[M] = l[M];
                                o += O[0], w -= O[1]
                            }
                        var W = {
                            el: e,
                            targetEl: v,
                            id: r,
                            class: s,
                            top: o,
                            bottom: w,
                            middle: b,
                            left: n,
                            right: g,
                            position: h,
                            delay: u,
                            direction: d,
                            offset: l,
                            progress: 0,
                            repeat: a,
                            inView: !1,
                            call: c,
                            speed: x,
                            sticky: f
                        };
                        t.els[r] = W, e.classList.contains(s) && t.setInView(t.els[r], r), (!1 !== x || f) && (t.parallaxElements[r] = W)
                    }))
                }
            }, {
                key: "updateElements",
                value: function() {
                    var t = this;
                    Object.entries(this.els).forEach((function(e) {
                        var i = a(e, 2),
                            o = i[0],
                            n = i[1],
                            s = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                            r = s + n.targetEl.offsetHeight,
                            l = t.getRelativeOffset(n.offset);
                        t.els[o].top = s + l[0], t.els[o].bottom = r - l[1]
                    })), this.hasScrollTicking = !1
                }
            }, {
                key: "transform",
                value: function(t, e, i, o) {
                    var n;
                    if (o) {
                        var s = p(t),
                            r = v(s.x, e, o),
                            l = v(s.y, i, o);
                        n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r, ",").concat(l, ",0,1)")
                    } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                    t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.smooth) {
                        var o = this.instance.scroll.x + this.windowWidth,
                            n = this.instance.scroll.y + this.windowHeight,
                            s = {
                                x: this.instance.scroll.x + this.windowMiddle.x,
                                y: this.instance.scroll.y + this.windowMiddle.y
                            };
                        Object.entries(this.parallaxElements).forEach((function(r) {
                            var l = a(r, 2),
                                c = (l[0], l[1]),
                                h = !1;
                            if (t && (h = 0), c.inView || i) switch (c.position) {
                                case "top":
                                    h = e.instance.scroll[e.directionAxis] * -c.speed;
                                    break;
                                case "elementTop":
                                    h = (n - c.top) * -c.speed;
                                    break;
                                case "bottom":
                                    h = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * c.speed;
                                    break;
                                case "left":
                                    h = e.instance.scroll[e.directionAxis] * -c.speed;
                                    break;
                                case "elementLeft":
                                    h = (o - c.left) * -c.speed;
                                    break;
                                case "right":
                                    h = (e.instance.limit[e.directionAxis] - o + e.windowHeight) * c.speed;
                                    break;
                                default:
                                    h = (s[e.directionAxis] - c.middle[e.directionAxis]) * -c.speed
                            }
                            c.sticky && (h = c.inView ? "horizontal" === e.direction ? e.instance.scroll.x - c.left + e.windowWidth : e.instance.scroll.y - c.top + e.windowHeight : "horizontal" === e.direction ? e.instance.scroll.x < c.left - e.windowWidth && e.instance.scroll.x < c.left - e.windowWidth / 2 ? 0 : e.instance.scroll.x > c.right && e.instance.scroll.x > c.right + 100 && c.right - c.left + e.windowWidth : e.instance.scroll.y < c.top - e.windowHeight && e.instance.scroll.y < c.top - e.windowHeight / 2 ? 0 : e.instance.scroll.y > c.bottom && e.instance.scroll.y > c.bottom + 100 && c.bottom - c.top + e.windowHeight), !1 !== h && ("horizontal" === c.direction || "horizontal" === e.direction && "vertical" !== c.direction ? e.transform(c.el, h, 0, !t && c.delay) : e.transform(c.el, 0, h, !t && c.delay))
                        }))
                    }
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [0, 0];
                    if (t)
                        for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                    return e
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = parseInt(e.offset) || 0,
                        o = e.duration || 1,
                        n = this.scrollToEasing;
                    this.lenis.scrollTo(t, {
                        offset: i,
                        immediate: e.immediate,
                        duration: o,
                        easing: n
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(), this.detectElements(), this.transformElements(!0)
                }
            }, {
                key: "startScroll",
                value: function() {
                    null != this.lenis && this.lenis.start()
                }
            }, {
                key: "stopScroll",
                value: function() {
                    null != this.lenis && this.lenis.stop()
                }
            }, {
                key: "destroy",
                value: function() {
                    l(o(c.prototype), "destroy", this).call(this), cancelAnimationFrame(this.rafInstance)
                }
            }]), c
        }(u);
    return function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.options = i, Object.assign(this, h, i), this.smartphone = h.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = h.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.smooth || "horizontal" != this.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
        }
        return i(e, [{
            key: "init",
            value: function() {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.smooth = !0 : this.smooth = !1, this.scroll = new M(this.options), this.scroll.init(), window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length),
                        e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]), e
    }()
}));