/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var kE = Object.create;
    var Cn = Object.defineProperty;
    var UE = Object.getOwnPropertyDescriptor;
    var BE = Object.getOwnPropertyNames;
    var HE = Object.getPrototypeOf
      , WE = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var f = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Pe = (e, t) => {
        for (var n in t)
            Cn(e, n, {
                get: t[n],
                enumerable: !0
            })
    }
      , la = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of BE(t))
                !WE.call(e, i) && i !== n && Cn(e, i, {
                    get: () => t[i],
                    enumerable: !(r = UE(t, i)) || r.enumerable
                });
        return e
    }
    ;
    var ce = (e, t, n) => (n = e != null ? kE(HE(e)) : {},
    la(t || !e || !e.__esModule ? Cn(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e))
      , je = e => la(Cn({}, "__esModule", {
        value: !0
    }), e);
    var fa = f( () => {
        "use strict";
        (function() {
            if (typeof window > "u")
                return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./)
              , t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit"in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                }
                ;
                return
            }
            let r = function(a) {
                let u = window.getComputedStyle(a, null)
                  , c = u.getPropertyValue("position")
                  , g = u.getPropertyValue("overflow")
                  , p = u.getPropertyValue("display");
                (!c || c === "static") && (a.style.position = "relative"),
                g !== "hidden" && (a.style.overflow = "hidden"),
                (!p || p === "inline") && (a.style.display = "block"),
                a.clientHeight === 0 && (a.style.height = "100%"),
                a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
            }
              , i = function(a) {
                let u = window.getComputedStyle(a, null)
                  , c = {
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": "0px",
                    "min-height": "0px",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "0px",
                    "margin-left": "0px"
                };
                for (let g in c)
                    u.getPropertyValue(g) !== c[g] && (a.style[g] = c[g])
            }
              , o = function(a) {
                let u = a.parentNode;
                r(u),
                i(a),
                a.style.position = "absolute",
                a.style.height = "100%",
                a.style.width = "auto",
                a.clientWidth > u.clientWidth ? (a.style.top = "0",
                a.style.marginTop = "0",
                a.style.left = "50%",
                a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%",
                a.style.height = "auto",
                a.style.left = "0",
                a.style.marginLeft = "0",
                a.style.top = "50%",
                a.style.marginTop = a.clientHeight / -2 + "px")
            }
              , s = function(a) {
                if (typeof a > "u" || a instanceof Event)
                    a = document.querySelectorAll("[data-object-fit]");
                else if (a && a.nodeName)
                    a = [a];
                else if (typeof a == "object" && a.length && a[0].nodeName)
                    a = a;
                else
                    return !1;
                for (let u = 0; u < a.length; u++) {
                    if (!a[u].nodeName)
                        continue;
                    let c = a[u].nodeName.toLowerCase();
                    if (c === "img") {
                        if (t)
                            continue;
                        a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                            o(this)
                        })
                    } else
                        c === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                }
                return !0
            };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(),
            window.addEventListener("resize", s),
            window.objectFitPolyfill = s
        }
        )()
    }
    );
    var da = f( () => {
        "use strict";
        (function() {
            if (typeof window > "u")
                return;
            function e(r) {
                Webflow.env("design") || ($("video").each(function() {
                    r && $(this).prop("autoplay") ? this.play() : this.pause()
                }),
                $(".w-background-video--control").each(function() {
                    r ? n($(this)) : t($(this))
                }))
            }
            function t(r) {
                r.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }
            function n(r) {
                r.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready( () => {
                let r = window.matchMedia("(prefers-reduced-motion: reduce)");
                r.addEventListener("change", i => {
                    e(!i.matches)
                }
                ),
                r.matches && e(!1),
                $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }),
                $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design"))
                        return;
                    let o = $(i.currentTarget)
                      , s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            n(o),
                            a && typeof a.catch == "function" && a.catch( () => {
                                t(o)
                            }
                            )
                        } else
                            s.pause(),
                            t(o)
                })
            }
            )
        }
        )()
    }
    );
    var Wr = f( () => {
        "use strict";
        window.tram = function(e) {
            function t(l, y) {
                var T = new F.Bare;
                return T.init(l, y)
            }
            function n(l) {
                return l.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function r(l) {
                var y = parseInt(l.slice(1), 16)
                  , T = y >> 16 & 255
                  , A = y >> 8 & 255
                  , _ = 255 & y;
                return [T, A, _]
            }
            function i(l, y, T) {
                return "#" + (1 << 24 | l << 16 | y << 8 | T).toString(16).slice(1)
            }
            function o() {}
            function s(l, y) {
                c("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y)
            }
            function a(l, y, T) {
                c("Units do not match [" + l + "]: " + y + ", " + T)
            }
            function u(l, y, T) {
                if (y !== void 0 && (T = y),
                l === void 0)
                    return T;
                var A = T;
                return ht.test(l) || !nt.test(l) ? A = parseInt(l, 10) : nt.test(l) && (A = 1e3 * parseFloat(l)),
                0 > A && (A = 0),
                A === A ? A : T
            }
            function c(l) {
                le.debug && window && window.console.warn(l)
            }
            function g(l) {
                for (var y = -1, T = l ? l.length : 0, A = []; ++y < T; ) {
                    var _ = l[y];
                    _ && A.push(_)
                }
                return A
            }
            var p = function(l, y, T) {
                function A(re) {
                    return typeof re == "object"
                }
                function _(re) {
                    return typeof re == "function"
                }
                function O() {}
                function K(re, ge) {
                    function G() {
                        var Se = new oe;
                        return _(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function oe() {}
                    ge === T && (ge = re,
                    re = Object),
                    G.Bare = oe;
                    var se, _e = O[l] = re[l], ze = oe[l] = G[l] = new O;
                    return ze.constructor = G,
                    G.mixin = function(Se) {
                        return oe[l] = G[l] = K(G, Se)[l],
                        G
                    }
                    ,
                    G.open = function(Se) {
                        if (se = {},
                        _(Se) ? se = Se.call(G, ze, _e, G, re) : A(Se) && (se = Se),
                        A(se))
                            for (var Jt in se)
                                y.call(se, Jt) && (ze[Jt] = se[Jt]);
                        return _(ze.init) || (ze.init = re),
                        G
                    }
                    ,
                    G.open(ge)
                }
                return K
            }("prototype", {}.hasOwnProperty)
              , d = {
                ease: ["ease", function(l, y, T, A) {
                    var _ = (l /= A) * l
                      , O = _ * l;
                    return y + T * (-2.75 * O * _ + 11 * _ * _ + -15.5 * O + 8 * _ + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, y, T, A) {
                    var _ = (l /= A) * l
                      , O = _ * l;
                    return y + T * (-1 * O * _ + 3 * _ * _ + -3 * O + 2 * _)
                }
                ],
                "ease-out": ["ease-out", function(l, y, T, A) {
                    var _ = (l /= A) * l
                      , O = _ * l;
                    return y + T * (.3 * O * _ + -1.6 * _ * _ + 2.2 * O + -1.8 * _ + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, y, T, A) {
                    var _ = (l /= A) * l
                      , O = _ * l;
                    return y + T * (2 * O * _ + -5 * _ * _ + 2 * O + 2 * _)
                }
                ],
                linear: ["linear", function(l, y, T, A) {
                    return T * l / A + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, y, T, A) {
                    return T * (l /= A) * l + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, y, T, A) {
                    return -T * (l /= A) * (l - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l + y : -T / 2 * (--l * (l - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, y, T, A) {
                    return T * (l /= A) * l * l + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, y, T, A) {
                    return T * ((l = l / A - 1) * l * l + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l + y : T / 2 * ((l -= 2) * l * l + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, y, T, A) {
                    return T * (l /= A) * l * l * l + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, y, T, A) {
                    return -T * ((l = l / A - 1) * l * l * l - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l * l + y : -T / 2 * ((l -= 2) * l * l * l - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, y, T, A) {
                    return T * (l /= A) * l * l * l * l + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, y, T, A) {
                    return T * ((l = l / A - 1) * l * l * l * l + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l * l * l + y : T / 2 * ((l -= 2) * l * l * l * l + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, y, T, A) {
                    return -T * Math.cos(l / A * (Math.PI / 2)) + T + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, y, T, A) {
                    return T * Math.sin(l / A * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, y, T, A) {
                    return -T / 2 * (Math.cos(Math.PI * l / A) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, y, T, A) {
                    return l === 0 ? y : T * Math.pow(2, 10 * (l / A - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, y, T, A) {
                    return l === A ? y + T : T * (-Math.pow(2, -10 * l / A) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, y, T, A) {
                    return l === 0 ? y : l === A ? y + T : (l /= A / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + y : T / 2 * (-Math.pow(2, -10 * --l) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, y, T, A) {
                    return -T * (Math.sqrt(1 - (l /= A) * l) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, y, T, A) {
                    return T * Math.sqrt(1 - (l = l / A - 1) * l) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + y : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, y, T, A, _) {
                    return _ === void 0 && (_ = 1.70158),
                    T * (l /= A) * l * ((_ + 1) * l - _) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, y, T, A, _) {
                    return _ === void 0 && (_ = 1.70158),
                    T * ((l = l / A - 1) * l * ((_ + 1) * l + _) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, y, T, A, _) {
                    return _ === void 0 && (_ = 1.70158),
                    (l /= A / 2) < 1 ? T / 2 * l * l * (((_ *= 1.525) + 1) * l - _) + y : T / 2 * ((l -= 2) * l * (((_ *= 1.525) + 1) * l + _) + 2) + y
                }
                ]
            }
              , h = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , v = document
              , I = window
              , w = "bkwld-tram"
              , m = /[\-\.0-9]/g
              , x = /[A-Z]/
              , S = "number"
              , C = /^(rgb|#)/
              , P = /(em|cm|mm|in|pt|pc|px)$/
              , R = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , B = "unitless"
              , W = /(all|none) 0s ease 0s/
              , Y = /^(width|height)$/
              , ne = " "
              , D = v.createElement("a")
              , b = ["Webkit", "Moz", "O", "ms"]
              , L = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , H = function(l) {
                if (l in D.style)
                    return {
                        dom: l,
                        css: l
                    };
                var y, T, A = "", _ = l.split("-");
                for (y = 0; y < _.length; y++)
                    A += _[y].charAt(0).toUpperCase() + _[y].slice(1);
                for (y = 0; y < b.length; y++)
                    if (T = b[y] + A,
                    T in D.style)
                        return {
                            dom: T,
                            css: L[y] + l
                        }
            }
              , X = t.support = {
                bind: Function.prototype.bind,
                transform: H("transform"),
                transition: H("transition"),
                backface: H("backface-visibility"),
                timing: H("transition-timing-function")
            };
            if (X.transition) {
                var ee = X.timing.dom;
                if (D.style[ee] = d["ease-in-back"][0],
                !D.style[ee])
                    for (var te in h)
                        d[te][0] = h[te]
            }
            var N = t.frame = function() {
                var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return l && X.bind ? l.bind(I) : function(y) {
                    I.setTimeout(y, 16)
                }
            }()
              , U = t.now = function() {
                var l = I.performance
                  , y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return y && X.bind ? y.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , z = p(function(l) {
                function y(Z, ue) {
                    var ve = g(("" + Z).split(ne))
                      , fe = ve[0];
                    ue = ue || {};
                    var Oe = k[fe];
                    if (!Oe)
                        return c("Unsupported property: " + fe);
                    if (!ue.weak || !this.props[fe]) {
                        var Ge = Oe[0]
                          , Ce = this.props[fe];
                        return Ce || (Ce = this.props[fe] = new Ge.Bare),
                        Ce.init(this.$el, ve, Oe, ue),
                        Ce
                    }
                }
                function T(Z, ue, ve) {
                    if (Z) {
                        var fe = typeof Z;
                        if (ue || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        fe == "number" && ue)
                            return this.timer = new pe({
                                duration: Z,
                                context: this,
                                complete: O
                            }),
                            void (this.active = !0);
                        if (fe == "string" && ue) {
                            switch (Z) {
                            case "hide":
                                G.call(this);
                                break;
                            case "stop":
                                K.call(this);
                                break;
                            case "redraw":
                                oe.call(this);
                                break;
                            default:
                                y.call(this, Z, ve && ve[1])
                            }
                            return O.call(this)
                        }
                        if (fe == "function")
                            return void Z.call(this, this);
                        if (fe == "object") {
                            var Oe = 0;
                            ze.call(this, Z, function(Ie, VE) {
                                Ie.span > Oe && (Oe = Ie.span),
                                Ie.stop(),
                                Ie.animate(VE)
                            }, function(Ie) {
                                "wait"in Ie && (Oe = u(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Oe > 0 && (this.timer = new pe({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            ue && (this.timer.complete = O));
                            var Ge = this
                              , Ce = !1
                              , Rn = {};
                            N(function() {
                                ze.call(Ge, Z, function(Ie) {
                                    Ie.active && (Ce = !0,
                                    Rn[Ie.name] = Ie.nextStyle)
                                }),
                                Ce && Ge.$el.css(Rn)
                            })
                        }
                    }
                }
                function A(Z) {
                    Z = u(Z, 0),
                    this.active ? this.queue.push({
                        options: Z
                    }) : (this.timer = new pe({
                        duration: Z,
                        context: this,
                        complete: O
                    }),
                    this.active = !0)
                }
                function _(Z) {
                    return this.active ? (this.queue.push({
                        options: Z,
                        args: arguments
                    }),
                    void (this.timer.complete = O)) : c("No active transition timer. Use start() or wait() before then().")
                }
                function O() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var Z = this.queue.shift();
                        T.call(this, Z.options, !0, Z.args)
                    }
                }
                function K(Z) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ue;
                    typeof Z == "string" ? (ue = {},
                    ue[Z] = 1) : ue = typeof Z == "object" && Z != null ? Z : this.props,
                    ze.call(this, ue, Se),
                    _e.call(this)
                }
                function re(Z) {
                    K.call(this, Z),
                    ze.call(this, Z, Jt, GE)
                }
                function ge(Z) {
                    typeof Z != "string" && (Z = "block"),
                    this.el.style.display = Z
                }
                function G() {
                    K.call(this),
                    this.el.style.display = "none"
                }
                function oe() {
                    this.el.offsetHeight
                }
                function se() {
                    K.call(this),
                    e.removeData(this.el, w),
                    this.$el = this.el = null
                }
                function _e() {
                    var Z, ue, ve = [];
                    this.upstream && ve.push(this.upstream);
                    for (Z in this.props)
                        ue = this.props[Z],
                        ue.active && ve.push(ue.string);
                    ve = ve.join(","),
                    this.style !== ve && (this.style = ve,
                    this.el.style[X.transition.dom] = ve)
                }
                function ze(Z, ue, ve) {
                    var fe, Oe, Ge, Ce, Rn = ue !== Se, Ie = {};
                    for (fe in Z)
                        Ge = Z[fe],
                        fe in he ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[fe] = Ge) : (x.test(fe) && (fe = n(fe)),
                        fe in k ? Ie[fe] = Ge : (Ce || (Ce = {}),
                        Ce[fe] = Ge));
                    for (fe in Ie) {
                        if (Ge = Ie[fe],
                        Oe = this.props[fe],
                        !Oe) {
                            if (!Rn)
                                continue;
                            Oe = y.call(this, fe)
                        }
                        ue.call(this, Oe, Ge)
                    }
                    ve && Ce && ve.call(this, Ce)
                }
                function Se(Z) {
                    Z.stop()
                }
                function Jt(Z, ue) {
                    Z.set(ue)
                }
                function GE(Z) {
                    this.$el.css(Z)
                }
                function qe(Z, ue) {
                    l[Z] = function() {
                        return this.children ? XE.call(this, ue, arguments) : (this.el && ue.apply(this, arguments),
                        this)
                    }
                }
                function XE(Z, ue) {
                    var ve, fe = this.children.length;
                    for (ve = 0; fe > ve; ve++)
                        Z.apply(this.children[ve], ue);
                    return this
                }
                l.init = function(Z) {
                    if (this.$el = e(Z),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    le.keepInherited && !le.fallback) {
                        var ue = q(this.el, "transition");
                        ue && !W.test(ue) && (this.upstream = ue)
                    }
                    X.backface && le.hideBackface && E(this.el, X.backface.css, "hidden")
                }
                ,
                qe("add", y),
                qe("start", T),
                qe("wait", A),
                qe("then", _),
                qe("next", O),
                qe("stop", K),
                qe("set", re),
                qe("show", ge),
                qe("hide", G),
                qe("redraw", oe),
                qe("destroy", se)
            })
              , F = p(z, function(l) {
                function y(T, A) {
                    var _ = e.data(T, w) || e.data(T, w, new z.Bare);
                    return _.el || _.init(T),
                    A ? _.start(A) : _
                }
                l.init = function(T, A) {
                    var _ = e(T);
                    if (!_.length)
                        return this;
                    if (_.length === 1)
                        return y(_[0], A);
                    var O = [];
                    return _.each(function(K, re) {
                        O.push(y(re, A))
                    }),
                    this.children = O,
                    this
                }
            })
              , M = p(function(l) {
                function y() {
                    var O = this.get();
                    this.update("auto");
                    var K = this.get();
                    return this.update(O),
                    K
                }
                function T(O, K, re) {
                    return K !== void 0 && (re = K),
                    O in d ? O : re
                }
                function A(O) {
                    var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
                    return (K ? i(K[1], K[2], K[3]) : O).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var _ = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(O, K, re, ge) {
                    this.$el = O,
                    this.el = O[0];
                    var G = K[0];
                    re[2] && (G = re[2]),
                    j[G] && (G = j[G]),
                    this.name = G,
                    this.type = re[1],
                    this.duration = u(K[1], this.duration, _.duration),
                    this.ease = T(K[2], this.ease, _.ease),
                    this.delay = u(K[3], this.delay, _.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Y.test(this.name),
                    this.unit = ge.unit || this.unit || le.defaultUnit,
                    this.angle = ge.angle || this.angle || le.defaultAngle,
                    le.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + ne + this.duration + "ms" + (this.ease != "ease" ? ne + d[this.ease][0] : "") + (this.delay ? ne + this.delay + "ms" : ""))
                }
                ,
                l.set = function(O) {
                    O = this.convert(O, this.type),
                    this.update(O),
                    this.redraw()
                }
                ,
                l.transition = function(O) {
                    this.active = !0,
                    O = this.convert(O, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    O == "auto" && (O = y.call(this))),
                    this.nextStyle = O
                }
                ,
                l.fallback = function(O) {
                    var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                    O = this.convert(O, this.type),
                    this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)),
                    O == "auto" && (O = y.call(this))),
                    this.tween = new J({
                        from: K,
                        to: O,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return q(this.el, this.name)
                }
                ,
                l.update = function(O) {
                    E(this.el, this.name, O)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    E(this.el, this.name, this.get()));
                    var O = this.tween;
                    O && O.context && O.destroy()
                }
                ,
                l.convert = function(O, K) {
                    if (O == "auto" && this.auto)
                        return O;
                    var re, ge = typeof O == "number", G = typeof O == "string";
                    switch (K) {
                    case S:
                        if (ge)
                            return O;
                        if (G && O.replace(m, "") === "")
                            return +O;
                        re = "number(unitless)";
                        break;
                    case C:
                        if (G) {
                            if (O === "" && this.original)
                                return this.original;
                            if (K.test(O))
                                return O.charAt(0) == "#" && O.length == 7 ? O : A(O)
                        }
                        re = "hex or rgb string";
                        break;
                    case P:
                        if (ge)
                            return O + this.unit;
                        if (G && K.test(O))
                            return O;
                        re = "number(px) or string(unit)";
                        break;
                    case R:
                        if (ge)
                            return O + this.unit;
                        if (G && K.test(O))
                            return O;
                        re = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (ge)
                            return O + this.angle;
                        if (G && K.test(O))
                            return O;
                        re = "number(deg) or string(angle)";
                        break;
                    case B:
                        if (ge || G && R.test(O))
                            return O;
                        re = "number(unitless) or string(unit or %)"
                    }
                    return s(re, O),
                    O
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , Q = p(M, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), C))
                }
            })
              , ae = p(M, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(T) {
                    this.$el[this.name](T)
                }
            })
              , ie = p(M, function(l, y) {
                function T(A, _) {
                    var O, K, re, ge, G;
                    for (O in A)
                        ge = he[O],
                        re = ge[0],
                        K = ge[1] || O,
                        G = this.convert(A[O], re),
                        _.call(this, K, G, re)
                }
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    he.perspective && le.perspective && (this.current.perspective = le.perspective,
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(A) {
                    T.call(this, A, function(_, O) {
                        this.current[_] = O
                    }),
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(A) {
                    var _ = this.values(A);
                    this.tween = new tt({
                        current: this.current,
                        values: _,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var O, K = {};
                    for (O in this.current)
                        K[O] = O in _ ? _[O] : this.current[O];
                    this.active = !0,
                    this.nextStyle = this.style(K)
                }
                ,
                l.fallback = function(A) {
                    var _ = this.values(A);
                    this.tween = new tt({
                        current: this.current,
                        values: _,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    E(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(A) {
                    var _, O = "";
                    for (_ in A)
                        O += _ + "(" + A[_] + ") ";
                    return O
                }
                ,
                l.values = function(A) {
                    var _, O = {};
                    return T.call(this, A, function(K, re, ge) {
                        O[K] = re,
                        this.current[K] === void 0 && (_ = 0,
                        ~K.indexOf("scale") && (_ = 1),
                        this.current[K] = this.convert(_, ge))
                    }),
                    O
                }
            })
              , J = p(function(l) {
                function y(G) {
                    re.push(G) === 1 && N(T)
                }
                function T() {
                    var G, oe, se, _e = re.length;
                    if (_e)
                        for (N(T),
                        oe = U(),
                        G = _e; G--; )
                            se = re[G],
                            se && se.render(oe)
                }
                function A(G) {
                    var oe, se = e.inArray(G, re);
                    se >= 0 && (oe = re.slice(se + 1),
                    re.length = se,
                    oe.length && (re = re.concat(oe)))
                }
                function _(G) {
                    return Math.round(G * ge) / ge
                }
                function O(G, oe, se) {
                    return i(G[0] + se * (oe[0] - G[0]), G[1] + se * (oe[1] - G[1]), G[2] + se * (oe[2] - G[2]))
                }
                var K = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(G) {
                    this.duration = G.duration || 0,
                    this.delay = G.delay || 0;
                    var oe = G.ease || K.ease;
                    d[oe] && (oe = d[oe][1]),
                    typeof oe != "function" && (oe = K.ease),
                    this.ease = oe,
                    this.update = G.update || o,
                    this.complete = G.complete || o,
                    this.context = G.context || this,
                    this.name = G.name;
                    var se = G.from
                      , _e = G.to;
                    se === void 0 && (se = K.from),
                    _e === void 0 && (_e = K.to),
                    this.unit = G.unit || "",
                    typeof se == "number" && typeof _e == "number" ? (this.begin = se,
                    this.change = _e - se) : this.format(_e, se),
                    this.value = this.begin + this.unit,
                    this.start = U(),
                    G.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = U()),
                    this.active = !0,
                    y(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    A(this))
                }
                ,
                l.render = function(G) {
                    var oe, se = G - this.start;
                    if (this.delay) {
                        if (se <= this.delay)
                            return;
                        se -= this.delay
                    }
                    if (se < this.duration) {
                        var _e = this.ease(se, 0, 1, this.duration);
                        return oe = this.startRGB ? O(this.startRGB, this.endRGB, _e) : _(this.begin + _e * this.change),
                        this.value = oe + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    oe = this.endHex || this.begin + this.change,
                    this.value = oe + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(G, oe) {
                    if (oe += "",
                    G += "",
                    G.charAt(0) == "#")
                        return this.startRGB = r(oe),
                        this.endRGB = r(G),
                        this.endHex = G,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var se = oe.replace(m, "")
                          , _e = G.replace(m, "");
                        se !== _e && a("tween", oe, G),
                        this.unit = se
                    }
                    oe = parseFloat(oe),
                    G = parseFloat(G),
                    this.begin = this.value = oe,
                    this.change = G - oe
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var re = []
                  , ge = 1e3
            })
              , pe = p(J, function(l) {
                l.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || o,
                    this.context = y.context,
                    this.play()
                }
                ,
                l.render = function(y) {
                    var T = y - this.start;
                    T < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , tt = p(J, function(l, y) {
                l.init = function(T) {
                    this.context = T.context,
                    this.update = T.update,
                    this.tweens = [],
                    this.current = T.current;
                    var A, _;
                    for (A in T.values)
                        _ = T.values[A],
                        this.current[A] !== _ && this.tweens.push(new J({
                            name: A,
                            from: this.current[A],
                            to: _,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(T) {
                    var A, _, O = this.tweens.length, K = !1;
                    for (A = O; A--; )
                        _ = this.tweens[A],
                        _.context && (_.render(T),
                        this.current[_.name] = _.value,
                        K = !0);
                    return K ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var T, A = this.tweens.length;
                        for (T = A; T--; )
                            this.tweens[T].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , le = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !X.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!X.transition)
                    return le.fallback = !0;
                le.agentTests.push("(" + l + ")");
                var y = new RegExp(le.agentTests.join("|"),"i");
                le.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new J(l)
            }
            ,
            t.delay = function(l, y, T) {
                return new pe({
                    complete: y,
                    duration: l,
                    context: T
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var E = e.style
              , q = e.css
              , j = {
                transform: X.transform && X.transform.css
            }
              , k = {
                color: [Q, C],
                background: [Q, C, "background-color"],
                "outline-color": [Q, C],
                "border-color": [Q, C],
                "border-top-color": [Q, C],
                "border-right-color": [Q, C],
                "border-bottom-color": [Q, C],
                "border-left-color": [Q, C],
                "border-width": [M, P],
                "border-top-width": [M, P],
                "border-right-width": [M, P],
                "border-bottom-width": [M, P],
                "border-left-width": [M, P],
                "border-spacing": [M, P],
                "letter-spacing": [M, P],
                margin: [M, P],
                "margin-top": [M, P],
                "margin-right": [M, P],
                "margin-bottom": [M, P],
                "margin-left": [M, P],
                padding: [M, P],
                "padding-top": [M, P],
                "padding-right": [M, P],
                "padding-bottom": [M, P],
                "padding-left": [M, P],
                "outline-width": [M, P],
                opacity: [M, S],
                top: [M, R],
                right: [M, R],
                bottom: [M, R],
                left: [M, R],
                "font-size": [M, R],
                "text-indent": [M, R],
                "word-spacing": [M, R],
                width: [M, R],
                "min-width": [M, R],
                "max-width": [M, R],
                height: [M, R],
                "min-height": [M, R],
                "max-height": [M, R],
                "line-height": [M, B],
                "scroll-top": [ae, S, "scrollTop"],
                "scroll-left": [ae, S, "scrollLeft"]
            }
              , he = {};
            X.transform && (k.transform = [ie],
            he = {
                x: [R, "translateX"],
                y: [R, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [S],
                scaleX: [S],
                scaleY: [S],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            X.transform && X.backface && (he.z = [R, "translateZ"],
            he.rotateZ = [V],
            he.scaleZ = [S],
            he.perspective = [P]);
            var ht = /ms/
              , nt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var ga = f( (xF, pa) => {
        "use strict";
        var zE = window.$
          , jE = Wr() && zE.tram;
        pa.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , n = Array.prototype
              , r = Object.prototype
              , i = Function.prototype
              , o = n.push
              , s = n.slice
              , a = n.concat
              , u = r.toString
              , c = r.hasOwnProperty
              , g = n.forEach
              , p = n.map
              , d = n.reduce
              , h = n.reduceRight
              , v = n.filter
              , I = n.every
              , w = n.some
              , m = n.indexOf
              , x = n.lastIndexOf
              , S = Array.isArray
              , C = Object.keys
              , P = i.bind
              , R = e.each = e.forEach = function(b, L, H) {
                if (b == null)
                    return b;
                if (g && b.forEach === g)
                    b.forEach(L, H);
                else if (b.length === +b.length) {
                    for (var X = 0, ee = b.length; X < ee; X++)
                        if (L.call(H, b[X], X, b) === t)
                            return
                } else
                    for (var te = e.keys(b), X = 0, ee = te.length; X < ee; X++)
                        if (L.call(H, b[te[X]], te[X], b) === t)
                            return;
                return b
            }
            ;
            e.map = e.collect = function(b, L, H) {
                var X = [];
                return b == null ? X : p && b.map === p ? b.map(L, H) : (R(b, function(ee, te, N) {
                    X.push(L.call(H, ee, te, N))
                }),
                X)
            }
            ,
            e.find = e.detect = function(b, L, H) {
                var X;
                return V(b, function(ee, te, N) {
                    if (L.call(H, ee, te, N))
                        return X = ee,
                        !0
                }),
                X
            }
            ,
            e.filter = e.select = function(b, L, H) {
                var X = [];
                return b == null ? X : v && b.filter === v ? b.filter(L, H) : (R(b, function(ee, te, N) {
                    L.call(H, ee, te, N) && X.push(ee)
                }),
                X)
            }
            ;
            var V = e.some = e.any = function(b, L, H) {
                L || (L = e.identity);
                var X = !1;
                return b == null ? X : w && b.some === w ? b.some(L, H) : (R(b, function(ee, te, N) {
                    if (X || (X = L.call(H, ee, te, N)))
                        return t
                }),
                !!X)
            }
            ;
            e.contains = e.include = function(b, L) {
                return b == null ? !1 : m && b.indexOf === m ? b.indexOf(L) != -1 : V(b, function(H) {
                    return H === L
                })
            }
            ,
            e.delay = function(b, L) {
                var H = s.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, H)
                }, L)
            }
            ,
            e.defer = function(b) {
                return e.delay.apply(e, [b, 1].concat(s.call(arguments, 1)))
            }
            ,
            e.throttle = function(b) {
                var L, H, X;
                return function() {
                    L || (L = !0,
                    H = arguments,
                    X = this,
                    jE.frame(function() {
                        L = !1,
                        b.apply(X, H)
                    }))
                }
            }
            ,
            e.debounce = function(b, L, H) {
                var X, ee, te, N, U, z = function() {
                    var F = e.now() - N;
                    F < L ? X = setTimeout(z, L - F) : (X = null,
                    H || (U = b.apply(te, ee),
                    te = ee = null))
                };
                return function() {
                    te = this,
                    ee = arguments,
                    N = e.now();
                    var F = H && !X;
                    return X || (X = setTimeout(z, L)),
                    F && (U = b.apply(te, ee),
                    te = ee = null),
                    U
                }
            }
            ,
            e.defaults = function(b) {
                if (!e.isObject(b))
                    return b;
                for (var L = 1, H = arguments.length; L < H; L++) {
                    var X = arguments[L];
                    for (var ee in X)
                        b[ee] === void 0 && (b[ee] = X[ee])
                }
                return b
            }
            ,
            e.keys = function(b) {
                if (!e.isObject(b))
                    return [];
                if (C)
                    return C(b);
                var L = [];
                for (var H in b)
                    e.has(b, H) && L.push(H);
                return L
            }
            ,
            e.has = function(b, L) {
                return c.call(b, L)
            }
            ,
            e.isObject = function(b) {
                return b === Object(b)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/
              , W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Y = /\\|'|\r|\n|\u2028|\u2029/g
              , ne = function(b) {
                return "\\" + W[b]
            }
              , D = /^\s*(\w|\$)+\s*$/;
            return e.template = function(b, L, H) {
                !L && H && (L = H),
                L = e.defaults({}, L, e.templateSettings);
                var X = RegExp([(L.escape || B).source, (L.interpolate || B).source, (L.evaluate || B).source].join("|") + "|$", "g")
                  , ee = 0
                  , te = "__p+='";
                b.replace(X, function(F, M, Q, ae, ie) {
                    return te += b.slice(ee, ie).replace(Y, ne),
                    ee = ie + F.length,
                    M ? te += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : Q ? te += `'+
((__t=(` + Q + `))==null?'':__t)+
'` : ae && (te += `';
` + ae + `
__p+='`),
                    F
                }),
                te += `';
`;
                var N = L.variable;
                if (N) {
                    if (!D.test(N))
                        throw new Error("variable is not a bare identifier: " + N)
                } else
                    te = `with(obj||{}){
` + te + `}
`,
                    N = "obj";
                te = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + te + `return __p;
`;
                var U;
                try {
                    U = new Function(L.variable || "obj","_",te)
                } catch (F) {
                    throw F.source = te,
                    F
                }
                var z = function(F) {
                    return U.call(this, F, e)
                };
                return z.source = "function(" + N + `){
` + te + "}",
                z
            }
            ,
            e
        }()
    }
    );
    var ke = f( (RF, Ta) => {
        "use strict";
        var de = {}
          , At = {}
          , wt = []
          , jr = window.Webflow || []
          , ut = window.jQuery
          , Ve = ut(window)
          , KE = ut(document)
          , Ke = ut.isFunction
          , Xe = de._ = ga()
          , Ea = de.tram = Wr() && ut.tram
          , Ln = !1
          , Kr = !1;
        Ea.config.hideBackface = !1;
        Ea.config.keepInherited = !0;
        de.define = function(e, t, n) {
            At[e] && va(At[e]);
            var r = At[e] = t(ut, Xe, n) || {};
            return ya(r),
            r
        }
        ;
        de.require = function(e) {
            return At[e]
        }
        ;
        function ya(e) {
            de.env() && (Ke(e.design) && Ve.on("__wf_design", e.design),
            Ke(e.preview) && Ve.on("__wf_preview", e.preview)),
            Ke(e.destroy) && Ve.on("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && YE(e)
        }
        function YE(e) {
            if (Ln) {
                e.ready();
                return
            }
            Xe.contains(wt, e.ready) || wt.push(e.ready)
        }
        function va(e) {
            Ke(e.design) && Ve.off("__wf_design", e.design),
            Ke(e.preview) && Ve.off("__wf_preview", e.preview),
            Ke(e.destroy) && Ve.off("__wf_destroy", e.destroy),
            e.ready && Ke(e.ready) && QE(e)
        }
        function QE(e) {
            wt = Xe.filter(wt, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (Ln) {
                Ke(e) && e();
                return
            }
            jr.push(e)
        }
        ;
        de.env = function(e) {
            var t = window.__wf_design
              , n = typeof t < "u";
            if (!e)
                return n;
            if (e === "design")
                return n && t;
            if (e === "preview")
                return n && !t;
            if (e === "slug")
                return n && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Pn = navigator.userAgent.toLowerCase()
          , ma = de.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , $E = de.env.chrome = /chrome/.test(Pn) && /Google/.test(navigator.vendor) && parseInt(Pn.match(/chrome\/(\d+)\./)[1], 10)
          , ZE = de.env.ios = /(ipod|iphone|ipad)/.test(Pn);
        de.env.safari = /safari/.test(Pn) && !$E && !ZE;
        var zr;
        ma && KE.on("touchstart mousedown", function(e) {
            zr = e.target
        });
        de.validClick = ma ? function(e) {
            return e === zr || ut.contains(e, zr)
        }
        : function() {
            return !0
        }
        ;
        var _a = "resize.webflow orientationchange.webflow load.webflow"
          , JE = "scroll.webflow " + _a;
        de.resize = Yr(Ve, _a);
        de.scroll = Yr(Ve, JE);
        de.redraw = Yr();
        function Yr(e, t) {
            var n = []
              , r = {};
            return r.up = Xe.throttle(function(i) {
                Xe.each(n, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, r.up),
            r.on = function(i) {
                typeof i == "function" && (Xe.contains(n, i) || n.push(i))
            }
            ,
            r.off = function(i) {
                if (!arguments.length) {
                    n = [];
                    return
                }
                n = Xe.filter(n, function(o) {
                    return o !== i
                })
            }
            ,
            r
        }
        de.location = function(e) {
            window.location = e
        }
        ;
        de.env() && (de.location = function() {}
        );
        de.ready = function() {
            Ln = !0,
            Kr ? ey() : Xe.each(wt, ha),
            Xe.each(jr, ha),
            de.resize.up()
        }
        ;
        function ha(e) {
            Ke(e) && e()
        }
        function ey() {
            Kr = !1,
            Xe.each(At, ya)
        }
        var Et;
        de.load = function(e) {
            Et.then(e)
        }
        ;
        function Ia() {
            Et && (Et.reject(),
            Ve.off("load", Et.resolve)),
            Et = new ut.Deferred,
            Ve.on("load", Et.resolve)
        }
        de.destroy = function(e) {
            e = e || {},
            Kr = !0,
            Ve.triggerHandler("__wf_destroy"),
            e.domready != null && (Ln = e.domready),
            Xe.each(At, va),
            de.resize.off(),
            de.scroll.off(),
            de.redraw.off(),
            wt = [],
            jr = [],
            Et.state() === "pending" && Ia()
        }
        ;
        ut(de.ready);
        Ia();
        Ta.exports = window.Webflow = de
    }
    );
    var wa = f( (CF, Aa) => {
        "use strict";
        var ba = ke();
        ba.define("brand", Aa.exports = function(e) {
            var t = {}, n = document, r = e("html"), i = e("body"), o = ".w-webflow-badge", s = window.location, a = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", c;
            t.ready = function() {
                var h = r.attr("data-wf-status")
                  , v = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(v) && s.hostname !== v && (h = !0),
                h && !a && (c = c || p(),
                d(),
                setTimeout(d, 500),
                e(n).off(u, g).on(u, g))
            }
            ;
            function g() {
                var h = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || !!n.webkitFullscreenElement;
                e(c).attr("style", h ? "display: none !important;" : "")
            }
            function p() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , v = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(v, I),
                h[0]
            }
            function d() {
                var h = i.children(o)
                  , v = h.length && h.get(0) === c
                  , I = ba.env("editor");
                if (v) {
                    I && h.remove();
                    return
                }
                h.length && h.remove(),
                I || i.append(c)
            }
            return t
        }
        )
    }
    );
    var Oa = f( (PF, Sa) => {
        "use strict";
        var Qr = ke();
        Qr.define("edit", Sa.exports = function(e, t, n) {
            if (n = n || {},
            (Qr.env("test") || Qr.env("frame")) && !n.fixture && !ty())
                return {
                    exit: 1
                };
            var r = {}, i = e(window), o = e(document.documentElement), s = document.location, a = "hashchange", u, c = n.load || d, g = !1;
            try {
                g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            g ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : i.on(a, p).triggerHandler(a);
            function p() {
                u || /\?edit/.test(s.hash) && c()
            }
            function d() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(a, p),
                x(function(C) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(C)
                    })
                })
            }
            function h(C) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = C,
                    v(w(P.scriptPath), function() {
                        window.WebflowEditor(P)
                    })
                }
            }
            function v(C, P) {
                e.ajax({
                    type: "GET",
                    url: C,
                    dataType: "script",
                    cache: !0
                }).then(P, I)
            }
            function I(C, P, R) {
                throw console.error("Could not load editor script: " + P),
                R
            }
            function w(C) {
                return C.indexOf("//") >= 0 ? C : m("https://editor-api.webflow.com" + C)
            }
            function m(C) {
                return C.replace(/([^:])\/\//g, "$1/")
            }
            function x(C) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html",
                P.style.display = "none",
                P.sandbox = "allow-scripts allow-same-origin";
                var R = function(V) {
                    V.data === "WF_third_party_cookies_unsupported" ? (S(P, R),
                    C(!1)) : V.data === "WF_third_party_cookies_supported" && (S(P, R),
                    C(!0))
                };
                P.onerror = function() {
                    S(P, R),
                    C(!1)
                }
                ,
                window.addEventListener("message", R, !1),
                window.document.body.appendChild(P)
            }
            function S(C, P) {
                window.removeEventListener("message", P, !1),
                C.remove()
            }
            return r
        }
        );
        function ty() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ra = f( (LF, xa) => {
        "use strict";
        var ny = ke();
        ny.define("focus-visible", xa.exports = function() {
            function e(n) {
                var r = !0
                  , i = !1
                  , o = null
                  , s = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function a(S) {
                    return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList"in S && "contains"in S.classList)
                }
                function u(S) {
                    var C = S.type
                      , P = S.tagName;
                    return !!(P === "INPUT" && s[C] && !S.readOnly || P === "TEXTAREA" && !S.readOnly || S.isContentEditable)
                }
                function c(S) {
                    S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
                }
                function g(S) {
                    S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
                }
                function p(S) {
                    S.metaKey || S.altKey || S.ctrlKey || (a(n.activeElement) && c(n.activeElement),
                    r = !0)
                }
                function d() {
                    r = !1
                }
                function h(S) {
                    a(S.target) && (r || u(S.target)) && c(S.target)
                }
                function v(S) {
                    a(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    g(S.target))
                }
                function I() {
                    document.visibilityState === "hidden" && (i && (r = !0),
                    w())
                }
                function w() {
                    document.addEventListener("mousemove", x),
                    document.addEventListener("mousedown", x),
                    document.addEventListener("mouseup", x),
                    document.addEventListener("pointermove", x),
                    document.addEventListener("pointerdown", x),
                    document.addEventListener("pointerup", x),
                    document.addEventListener("touchmove", x),
                    document.addEventListener("touchstart", x),
                    document.addEventListener("touchend", x)
                }
                function m() {
                    document.removeEventListener("mousemove", x),
                    document.removeEventListener("mousedown", x),
                    document.removeEventListener("mouseup", x),
                    document.removeEventListener("pointermove", x),
                    document.removeEventListener("pointerdown", x),
                    document.removeEventListener("pointerup", x),
                    document.removeEventListener("touchmove", x),
                    document.removeEventListener("touchstart", x),
                    document.removeEventListener("touchend", x)
                }
                function x(S) {
                    S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (r = !1,
                    m())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", d, !0),
                document.addEventListener("pointerdown", d, !0),
                document.addEventListener("touchstart", d, !0),
                document.addEventListener("visibilitychange", I, !0),
                w(),
                n.addEventListener("focus", h, !0),
                n.addEventListener("blur", v, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var La = f( (NF, Pa) => {
        "use strict";
        var Ca = ke();
        Ca.define("focus", Pa.exports = function() {
            var e = []
              , t = !1;
            function n(s) {
                t && (s.preventDefault(),
                s.stopPropagation(),
                s.stopImmediatePropagation(),
                e.unshift(s))
            }
            function r(s) {
                var a = s.target
                  , u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }
            function i(s) {
                r(s) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    s.target.focus(); e.length > 0; ) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type,a))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ca.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Ma = f( (DF, Da) => {
        "use strict";
        var $r = window.jQuery
          , Ye = {}
          , Nn = []
          , Na = ".w-ix"
          , Dn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                $r(t).triggerHandler(Ye.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                $r(t).triggerHandler(Ye.types.OUTRO))
            }
        };
        Ye.triggers = {};
        Ye.types = {
            INTRO: "w-ix-intro" + Na,
            OUTRO: "w-ix-outro" + Na
        };
        Ye.init = function() {
            for (var e = Nn.length, t = 0; t < e; t++) {
                var n = Nn[t];
                n[0](0, n[1])
            }
            Nn = [],
            $r.extend(Ye.triggers, Dn)
        }
        ;
        Ye.async = function() {
            for (var e in Dn) {
                var t = Dn[e];
                Dn.hasOwnProperty(e) && (Ye.triggers[e] = function(n, r) {
                    Nn.push([t, r])
                }
                )
            }
        }
        ;
        Ye.async();
        Da.exports = Ye
    }
    );
    var Jr = f( (MF, Ga) => {
        "use strict";
        var Zr = Ma();
        function Fa(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(n)
        }
        var ry = window.jQuery
          , Mn = {}
          , qa = ".w-ix"
          , iy = {
            reset: function(e, t) {
                Zr.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Zr.triggers.intro(e, t),
                Fa(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Zr.triggers.outro(e, t),
                Fa(t, "COMPONENT_INACTIVE")
            }
        };
        Mn.triggers = {};
        Mn.types = {
            INTRO: "w-ix-intro" + qa,
            OUTRO: "w-ix-outro" + qa
        };
        ry.extend(Mn.triggers, iy);
        Ga.exports = Mn
    }
    );
    var ei = f( (FF, Xa) => {
        var oy = typeof global == "object" && global && global.Object === Object && global;
        Xa.exports = oy
    }
    );
    var Ue = f( (qF, Va) => {
        var ay = ei()
          , sy = typeof self == "object" && self && self.Object === Object && self
          , uy = ay || sy || Function("return this")();
        Va.exports = uy
    }
    );
    var St = f( (GF, ka) => {
        var cy = Ue()
          , ly = cy.Symbol;
        ka.exports = ly
    }
    );
    var Wa = f( (XF, Ha) => {
        var Ua = St()
          , Ba = Object.prototype
          , fy = Ba.hasOwnProperty
          , dy = Ba.toString
          , en = Ua ? Ua.toStringTag : void 0;
        function py(e) {
            var t = fy.call(e, en)
              , n = e[en];
            try {
                e[en] = void 0;
                var r = !0
            } catch {}
            var i = dy.call(e);
            return r && (t ? e[en] = n : delete e[en]),
            i
        }
        Ha.exports = py
    }
    );
    var ja = f( (VF, za) => {
        var gy = Object.prototype
          , hy = gy.toString;
        function Ey(e) {
            return hy.call(e)
        }
        za.exports = Ey
    }
    );
    var ct = f( (kF, Qa) => {
        var Ka = St()
          , yy = Wa()
          , vy = ja()
          , my = "[object Null]"
          , _y = "[object Undefined]"
          , Ya = Ka ? Ka.toStringTag : void 0;
        function Iy(e) {
            return e == null ? e === void 0 ? _y : my : Ya && Ya in Object(e) ? yy(e) : vy(e)
        }
        Qa.exports = Iy
    }
    );
    var ti = f( (UF, $a) => {
        function Ty(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
        $a.exports = Ty
    }
    );
    var ni = f( (BF, Za) => {
        var by = ti()
          , Ay = by(Object.getPrototypeOf, Object);
        Za.exports = Ay
    }
    );
    var rt = f( (HF, Ja) => {
        function wy(e) {
            return e != null && typeof e == "object"
        }
        Ja.exports = wy
    }
    );
    var ri = f( (WF, ts) => {
        var Sy = ct()
          , Oy = ni()
          , xy = rt()
          , Ry = "[object Object]"
          , Cy = Function.prototype
          , Py = Object.prototype
          , es = Cy.toString
          , Ly = Py.hasOwnProperty
          , Ny = es.call(Object);
        function Dy(e) {
            if (!xy(e) || Sy(e) != Ry)
                return !1;
            var t = Oy(e);
            if (t === null)
                return !0;
            var n = Ly.call(t, "constructor") && t.constructor;
            return typeof n == "function" && n instanceof n && es.call(n) == Ny
        }
        ts.exports = Dy
    }
    );
    var ns = f(ii => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        ii.default = My;
        function My(e) {
            var t, n = e.Symbol;
            return typeof n == "function" ? n.observable ? t = n.observable : (t = n("observable"),
            n.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var rs = f( (ai, oi) => {
        "use strict";
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        var Fy = ns()
          , qy = Gy(Fy);
        function Gy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof oi < "u" ? Ot = oi : Ot = Function("return this")();
        var Xy = (0,
        qy.default)(Ot);
        ai.default = Xy
    }
    );
    var si = f(tn => {
        "use strict";
        tn.__esModule = !0;
        tn.ActionTypes = void 0;
        tn.default = ss;
        var Vy = ri()
          , ky = as(Vy)
          , Uy = rs()
          , is = as(Uy);
        function as(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var os = tn.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function ss(e, t, n) {
            var r;
            if (typeof t == "function" && typeof n > "u" && (n = t,
            t = void 0),
            typeof n < "u") {
                if (typeof n != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return n(ss)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , s = []
              , a = s
              , u = !1;
            function c() {
                a === s && (a = s.slice())
            }
            function g() {
                return o
            }
            function p(I) {
                if (typeof I != "function")
                    throw new Error("Expected listener to be a function.");
                var w = !0;
                return c(),
                a.push(I),
                function() {
                    if (w) {
                        w = !1,
                        c();
                        var x = a.indexOf(I);
                        a.splice(x, 1)
                    }
                }
            }
            function d(I) {
                if (!(0,
                ky.default)(I))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, I)
                } finally {
                    u = !1
                }
                for (var w = s = a, m = 0; m < w.length; m++)
                    w[m]();
                return I
            }
            function h(I) {
                if (typeof I != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = I,
                d({
                    type: os.INIT
                })
            }
            function v() {
                var I, w = p;
                return I = {
                    subscribe: function(x) {
                        if (typeof x != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function S() {
                            x.next && x.next(g())
                        }
                        S();
                        var C = w(S);
                        return {
                            unsubscribe: C
                        }
                    }
                },
                I[is.default] = function() {
                    return this
                }
                ,
                I
            }
            return d({
                type: os.INIT
            }),
            r = {
                dispatch: d,
                subscribe: p,
                getState: g,
                replaceReducer: h
            },
            r[is.default] = v,
            r
        }
    }
    );
    var ci = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = By;
        function By(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var ls = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = Ky;
        var us = si()
          , Hy = ri()
          , YF = cs(Hy)
          , Wy = ci()
          , QF = cs(Wy);
        function cs(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function zy(e, t) {
            var n = t && t.type
              , r = n && '"' + n.toString() + '"' || "an action";
            return "Given action " + r + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function jy(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t]
                  , r = n(void 0, {
                    type: us.ActionTypes.INIT
                });
                if (typeof r > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof n(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + us.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function Ky(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                typeof e[i] == "function" && (n[i] = e[i])
            }
            var o = Object.keys(n);
            if (!1)
                var s;
            var a;
            try {
                jy(n)
            } catch (u) {
                a = u
            }
            return function() {
                var c = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , g = arguments[1];
                if (a)
                    throw a;
                if (!1)
                    var p;
                for (var d = !1, h = {}, v = 0; v < o.length; v++) {
                    var I = o[v]
                      , w = n[I]
                      , m = c[I]
                      , x = w(m, g);
                    if (typeof x > "u") {
                        var S = zy(I, g);
                        throw new Error(S)
                    }
                    h[I] = x,
                    d = d || x !== m
                }
                return d ? h : c
            }
        }
    }
    );
    var ds = f(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = Yy;
        function fs(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Yy(e, t) {
            if (typeof e == "function")
                return fs(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                var o = n[i]
                  , s = e[o];
                typeof s == "function" && (r[o] = fs(s, t))
            }
            return r
        }
    }
    );
    var pi = f(di => {
        "use strict";
        di.__esModule = !0;
        di.default = Qy;
        function Qy() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var r = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, r.apply(void 0, arguments))
            }
        }
    }
    );
    var ps = f(gi => {
        "use strict";
        gi.__esModule = !0;
        var $y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        gi.default = tv;
        var Zy = pi()
          , Jy = ev(Zy);
        function ev(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function tv() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(r) {
                return function(i, o, s) {
                    var a = r(i, o, s)
                      , u = a.dispatch
                      , c = []
                      , g = {
                        getState: a.getState,
                        dispatch: function(d) {
                            return u(d)
                        }
                    };
                    return c = t.map(function(p) {
                        return p(g)
                    }),
                    u = Jy.default.apply(void 0, c)(a.dispatch),
                    $y({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var hi = f(Fe => {
        "use strict";
        Fe.__esModule = !0;
        Fe.compose = Fe.applyMiddleware = Fe.bindActionCreators = Fe.combineReducers = Fe.createStore = void 0;
        var nv = si()
          , rv = xt(nv)
          , iv = ls()
          , ov = xt(iv)
          , av = ds()
          , sv = xt(av)
          , uv = ps()
          , cv = xt(uv)
          , lv = pi()
          , fv = xt(lv)
          , dv = ci()
          , t2 = xt(dv);
        function xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Fe.createStore = rv.default;
        Fe.combineReducers = ov.default;
        Fe.bindActionCreators = sv.default;
        Fe.applyMiddleware = cv.default;
        Fe.compose = fv.default
    }
    );
    var Be, Ei, Qe, pv, gv, Fn, hv, yi = ye( () => {
        "use strict";
        Be = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Ei = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Qe = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        pv = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        gv = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        Fn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        hv = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Le, Ev, qn = ye( () => {
        "use strict";
        Le = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        Ev = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var yv, gs = ye( () => {
        "use strict";
        yv = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var vv, mv, _v, Iv, Tv, bv, Av, vi, hs = ye( () => {
        "use strict";
        qn();
        ({TRANSFORM_MOVE: vv, TRANSFORM_SCALE: mv, TRANSFORM_ROTATE: _v, TRANSFORM_SKEW: Iv, STYLE_SIZE: Tv, STYLE_FILTER: bv, STYLE_FONT_VARIATION: Av} = Le),
        vi = {
            [vv]: !0,
            [mv]: !0,
            [_v]: !0,
            [Iv]: !0,
            [Tv]: !0,
            [bv]: !0,
            [Av]: !0
        }
    }
    );
    var Te = {};
    Pe(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => kv,
        IX2_ANIMATION_FRAME_CHANGED: () => Mv,
        IX2_CLEAR_REQUESTED: () => Lv,
        IX2_ELEMENT_STATE_CHANGED: () => Vv,
        IX2_EVENT_LISTENER_ADDED: () => Nv,
        IX2_EVENT_STATE_CHANGED: () => Dv,
        IX2_INSTANCE_ADDED: () => qv,
        IX2_INSTANCE_REMOVED: () => Xv,
        IX2_INSTANCE_STARTED: () => Gv,
        IX2_MEDIA_QUERIES_DEFINED: () => Bv,
        IX2_PARAMETER_CHANGED: () => Fv,
        IX2_PLAYBACK_REQUESTED: () => Cv,
        IX2_PREVIEW_REQUESTED: () => Rv,
        IX2_RAW_DATA_IMPORTED: () => wv,
        IX2_SESSION_INITIALIZED: () => Sv,
        IX2_SESSION_STARTED: () => Ov,
        IX2_SESSION_STOPPED: () => xv,
        IX2_STOP_REQUESTED: () => Pv,
        IX2_TEST_FRAME_RENDERED: () => Hv,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Uv
    });
    var wv, Sv, Ov, xv, Rv, Cv, Pv, Lv, Nv, Dv, Mv, Fv, qv, Gv, Xv, Vv, kv, Uv, Bv, Hv, Es = ye( () => {
        "use strict";
        wv = "IX2_RAW_DATA_IMPORTED",
        Sv = "IX2_SESSION_INITIALIZED",
        Ov = "IX2_SESSION_STARTED",
        xv = "IX2_SESSION_STOPPED",
        Rv = "IX2_PREVIEW_REQUESTED",
        Cv = "IX2_PLAYBACK_REQUESTED",
        Pv = "IX2_STOP_REQUESTED",
        Lv = "IX2_CLEAR_REQUESTED",
        Nv = "IX2_EVENT_LISTENER_ADDED",
        Dv = "IX2_EVENT_STATE_CHANGED",
        Mv = "IX2_ANIMATION_FRAME_CHANGED",
        Fv = "IX2_PARAMETER_CHANGED",
        qv = "IX2_INSTANCE_ADDED",
        Gv = "IX2_INSTANCE_STARTED",
        Xv = "IX2_INSTANCE_REMOVED",
        Vv = "IX2_ELEMENT_STATE_CHANGED",
        kv = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Uv = "IX2_VIEWPORT_WIDTH_CHANGED",
        Bv = "IX2_MEDIA_QUERIES_DEFINED",
        Hv = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var we = {};
    Pe(we, {
        ABSTRACT_NODE: () => Um,
        AUTO: () => Pm,
        BACKGROUND: () => wm,
        BACKGROUND_COLOR: () => Am,
        BAR_DELIMITER: () => Dm,
        BORDER_COLOR: () => Sm,
        BOUNDARY_SELECTOR: () => Yv,
        CHILDREN: () => Mm,
        COLON_DELIMITER: () => Nm,
        COLOR: () => Om,
        COMMA_DELIMITER: () => Lm,
        CONFIG_UNIT: () => rm,
        CONFIG_VALUE: () => Jv,
        CONFIG_X_UNIT: () => em,
        CONFIG_X_VALUE: () => Qv,
        CONFIG_Y_UNIT: () => tm,
        CONFIG_Y_VALUE: () => $v,
        CONFIG_Z_UNIT: () => nm,
        CONFIG_Z_VALUE: () => Zv,
        DISPLAY: () => xm,
        FILTER: () => _m,
        FLEX: () => Rm,
        FONT_VARIATION_SETTINGS: () => Im,
        HEIGHT: () => bm,
        HTML_ELEMENT: () => Vm,
        IMMEDIATE_CHILDREN: () => Fm,
        IX2_ID_DELIMITER: () => Wv,
        OPACITY: () => mm,
        PARENT: () => Gm,
        PLAIN_OBJECT: () => km,
        PRESERVE_3D: () => Xm,
        RENDER_GENERAL: () => Hm,
        RENDER_PLUGIN: () => zm,
        RENDER_STYLE: () => Wm,
        RENDER_TRANSFORM: () => Bm,
        ROTATE_X: () => pm,
        ROTATE_Y: () => gm,
        ROTATE_Z: () => hm,
        SCALE_3D: () => dm,
        SCALE_X: () => cm,
        SCALE_Y: () => lm,
        SCALE_Z: () => fm,
        SIBLINGS: () => qm,
        SKEW: () => Em,
        SKEW_X: () => ym,
        SKEW_Y: () => vm,
        TRANSFORM: () => im,
        TRANSLATE_3D: () => um,
        TRANSLATE_X: () => om,
        TRANSLATE_Y: () => am,
        TRANSLATE_Z: () => sm,
        WF_PAGE: () => zv,
        WIDTH: () => Tm,
        WILL_CHANGE: () => Cm,
        W_MOD_IX: () => Kv,
        W_MOD_JS: () => jv
    });
    var Wv, zv, jv, Kv, Yv, Qv, $v, Zv, Jv, em, tm, nm, rm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, ym, vm, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Pm, Lm, Nm, Dm, Mm, Fm, qm, Gm, Xm, Vm, km, Um, Bm, Hm, Wm, zm, ys = ye( () => {
        "use strict";
        Wv = "|",
        zv = "data-wf-page",
        jv = "w-mod-js",
        Kv = "w-mod-ix",
        Yv = ".w-dyn-item",
        Qv = "xValue",
        $v = "yValue",
        Zv = "zValue",
        Jv = "value",
        em = "xUnit",
        tm = "yUnit",
        nm = "zUnit",
        rm = "unit",
        im = "transform",
        om = "translateX",
        am = "translateY",
        sm = "translateZ",
        um = "translate3d",
        cm = "scaleX",
        lm = "scaleY",
        fm = "scaleZ",
        dm = "scale3d",
        pm = "rotateX",
        gm = "rotateY",
        hm = "rotateZ",
        Em = "skew",
        ym = "skewX",
        vm = "skewY",
        mm = "opacity",
        _m = "filter",
        Im = "font-variation-settings",
        Tm = "width",
        bm = "height",
        Am = "backgroundColor",
        wm = "background",
        Sm = "borderColor",
        Om = "color",
        xm = "display",
        Rm = "flex",
        Cm = "willChange",
        Pm = "AUTO",
        Lm = ",",
        Nm = ":",
        Dm = "|",
        Mm = "CHILDREN",
        Fm = "IMMEDIATE_CHILDREN",
        qm = "SIBLINGS",
        Gm = "PARENT",
        Xm = "preserve-3d",
        Vm = "HTML_ELEMENT",
        km = "PLAIN_OBJECT",
        Um = "ABSTRACT_NODE",
        Bm = "RENDER_TRANSFORM",
        Hm = "RENDER_GENERAL",
        Wm = "RENDER_STYLE",
        zm = "RENDER_PLUGIN"
    }
    );
    var vs = {};
    Pe(vs, {
        ActionAppliesTo: () => Ev,
        ActionTypeConsts: () => Le,
        EventAppliesTo: () => Ei,
        EventBasedOn: () => Qe,
        EventContinuousMouseAxes: () => pv,
        EventLimitAffectedElements: () => gv,
        EventTypeConsts: () => Be,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => we,
        InteractionTypeConsts: () => yv,
        QuickEffectDirectionConsts: () => hv,
        QuickEffectIds: () => Fn,
        ReducedMotionTypes: () => vi
    });
    var Ne = ye( () => {
        "use strict";
        yi();
        qn();
        gs();
        hs();
        Es();
        ys();
        qn();
        yi()
    }
    );
    var jm, ms, _s = ye( () => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: jm} = Te),
        ms = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case jm:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Rt = f(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var Km = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        me.clone = Xn;
        me.addLast = bs;
        me.addFirst = As;
        me.removeLast = ws;
        me.removeFirst = Ss;
        me.insert = Os;
        me.removeAt = xs;
        me.replaceAt = Rs;
        me.getIn = Vn;
        me.set = kn;
        me.setIn = Un;
        me.update = Ps;
        me.updateIn = Ls;
        me.merge = Ns;
        me.mergeDeep = Ds;
        me.mergeIn = Ms;
        me.omit = Fs;
        me.addDefaults = qs;
        var Is = "INVALID_ARGS";
        function Ts(e) {
            throw new Error(e)
        }
        function mi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Ym = {}.hasOwnProperty;
        function Xn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = mi(e), n = {}, r = 0; r < t.length; r++) {
                var i = t[r];
                n[i] = e[i]
            }
            return n
        }
        function De(e, t, n) {
            var r = n;
            r == null && Ts(Is);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++)
                s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var c = s[u];
                if (c != null) {
                    var g = mi(c);
                    if (g.length)
                        for (var p = 0; p <= g.length; p++) {
                            var d = g[p];
                            if (!(e && r[d] !== void 0)) {
                                var h = c[d];
                                t && Gn(r[d]) && Gn(h) && (h = De(e, t, r[d], h)),
                                !(h === void 0 || h === r[d]) && (i || (i = !0,
                                r = Xn(r)),
                                r[d] = h)
                            }
                        }
                }
            }
            return r
        }
        function Gn(e) {
            var t = typeof e > "u" ? "undefined" : Km(e);
            return e != null && (t === "object" || t === "function")
        }
        function bs(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function As(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function ws(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Ss(e) {
            return e.length ? e.slice(1) : e
        }
        function Os(e, t, n) {
            return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
        }
        function xs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Rs(e, t, n) {
            if (e[t] === n)
                return e;
            for (var r = e.length, i = Array(r), o = 0; o < r; o++)
                i[o] = e[o];
            return i[t] = n,
            i
        }
        function Vn(e, t) {
            if (!Array.isArray(t) && Ts(Is),
            e != null) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (n = n?.[i],
                    n === void 0)
                        return n
                }
                return n
            }
        }
        function kn(e, t, n) {
            var r = typeof t == "number" ? [] : {}
              , i = e ?? r;
            if (i[t] === n)
                return i;
            var o = Xn(i);
            return o[t] = n,
            o
        }
        function Cs(e, t, n, r) {
            var i = void 0
              , o = t[r];
            if (r === t.length - 1)
                i = n;
            else {
                var s = Gn(e) && Gn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
                i = Cs(s, t, n, r + 1)
            }
            return kn(e, o, i)
        }
        function Un(e, t, n) {
            return t.length ? Cs(e, t, n, 0) : n
        }
        function Ps(e, t, n) {
            var r = e?.[t]
              , i = n(r);
            return kn(e, t, i)
        }
        function Ls(e, t, n) {
            var r = Vn(e, t)
              , i = n(r);
            return Un(e, t, i)
        }
        function Ns(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
                a[u - 6] = arguments[u];
            return a.length ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(a)) : De(!1, !1, e, t, n, r, i, o)
        }
        function Ds(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
                a[u - 6] = arguments[u];
            return a.length ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(a)) : De(!1, !0, e, t, n, r, i, o)
        }
        function Ms(e, t, n, r, i, o, s) {
            var a = Vn(e, t);
            a == null && (a = {});
            for (var u = void 0, c = arguments.length, g = Array(c > 7 ? c - 7 : 0), p = 7; p < c; p++)
                g[p - 7] = arguments[p];
            return g.length ? u = De.call.apply(De, [null, !1, !1, a, n, r, i, o, s].concat(g)) : u = De(!1, !1, a, n, r, i, o, s),
            Un(e, t, u)
        }
        function Fs(e, t) {
            for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
                if (Ym.call(e, n[i])) {
                    r = !0;
                    break
                }
            if (!r)
                return e;
            for (var o = {}, s = mi(e), a = 0; a < s.length; a++) {
                var u = s[a];
                n.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function qs(e, t, n, r, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++)
                a[u - 6] = arguments[u];
            return a.length ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(a)) : De(!0, !1, e, t, n, r, i, o)
        }
        var Qm = {
            clone: Xn,
            addLast: bs,
            addFirst: As,
            removeLast: ws,
            removeFirst: Ss,
            insert: Os,
            removeAt: xs,
            replaceAt: Rs,
            getIn: Vn,
            set: kn,
            setIn: Un,
            update: Ps,
            updateIn: Ls,
            merge: Ns,
            mergeDeep: Ds,
            mergeIn: Ms,
            omit: Fs,
            addDefaults: qs
        };
        me.default = Qm
    }
    );
    var Xs, $m, Zm, Jm, e_, t_, Gs, Vs, ks = ye( () => {
        "use strict";
        Ne();
        Xs = ce(Rt()),
        {IX2_PREVIEW_REQUESTED: $m, IX2_PLAYBACK_REQUESTED: Zm, IX2_STOP_REQUESTED: Jm, IX2_CLEAR_REQUESTED: e_} = Te,
        t_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Gs = Object.create(null, {
            [$m]: {
                value: "preview"
            },
            [Zm]: {
                value: "playback"
            },
            [Jm]: {
                value: "stop"
            },
            [e_]: {
                value: "clear"
            }
        }),
        Vs = (e=t_, t) => {
            if (t.type in Gs) {
                let n = [Gs[t.type]];
                return (0,
                Xs.setIn)(e, [n], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var xe, n_, r_, i_, o_, a_, s_, u_, c_, l_, f_, Us, d_, Bs, Hs = ye( () => {
        "use strict";
        Ne();
        xe = ce(Rt()),
        {IX2_SESSION_INITIALIZED: n_, IX2_SESSION_STARTED: r_, IX2_TEST_FRAME_RENDERED: i_, IX2_SESSION_STOPPED: o_, IX2_EVENT_LISTENER_ADDED: a_, IX2_EVENT_STATE_CHANGED: s_, IX2_ANIMATION_FRAME_CHANGED: u_, IX2_ACTION_LIST_PLAYBACK_CHANGED: c_, IX2_VIEWPORT_WIDTH_CHANGED: l_, IX2_MEDIA_QUERIES_DEFINED: f_} = Te,
        Us = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        d_ = 20,
        Bs = (e=Us, t) => {
            switch (t.type) {
            case n_:
                {
                    let {hasBoundaryNodes: n, reducedMotion: r} = t.payload;
                    return (0,
                    xe.merge)(e, {
                        hasBoundaryNodes: n,
                        reducedMotion: r
                    })
                }
            case r_:
                return (0,
                xe.set)(e, "active", !0);
            case i_:
                {
                    let {payload: {step: n=d_}} = t;
                    return (0,
                    xe.set)(e, "tick", e.tick + n)
                }
            case o_:
                return Us;
            case u_:
                {
                    let {payload: {now: n}} = t;
                    return (0,
                    xe.set)(e, "tick", n)
                }
            case a_:
                {
                    let n = (0,
                    xe.addLast)(e.eventListeners, t.payload);
                    return (0,
                    xe.set)(e, "eventListeners", n)
                }
            case s_:
                {
                    let {stateKey: n, newState: r} = t.payload;
                    return (0,
                    xe.setIn)(e, ["eventState", n], r)
                }
            case c_:
                {
                    let {actionListId: n, isPlaying: r} = t.payload;
                    return (0,
                    xe.setIn)(e, ["playbackState", n], r)
                }
            case l_:
                {
                    let {width: n, mediaQueries: r} = t.payload
                      , i = r.length
                      , o = null;
                    for (let s = 0; s < i; s++) {
                        let {key: a, min: u, max: c} = r[s];
                        if (n >= u && n <= c) {
                            o = a;
                            break
                        }
                    }
                    return (0,
                    xe.merge)(e, {
                        viewportWidth: n,
                        mediaQueryKey: o
                    })
                }
            case f_:
                return (0,
                xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var zs = f( (I2, Ws) => {
        function p_() {
            this.__data__ = [],
            this.size = 0
        }
        Ws.exports = p_
    }
    );
    var Bn = f( (T2, js) => {
        function g_(e, t) {
            return e === t || e !== e && t !== t
        }
        js.exports = g_
    }
    );
    var nn = f( (b2, Ks) => {
        var h_ = Bn();
        function E_(e, t) {
            for (var n = e.length; n--; )
                if (h_(e[n][0], t))
                    return n;
            return -1
        }
        Ks.exports = E_
    }
    );
    var Qs = f( (A2, Ys) => {
        var y_ = nn()
          , v_ = Array.prototype
          , m_ = v_.splice;
        function __(e) {
            var t = this.__data__
              , n = y_(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : m_.call(t, n, 1),
            --this.size,
            !0
        }
        Ys.exports = __
    }
    );
    var Zs = f( (w2, $s) => {
        var I_ = nn();
        function T_(e) {
            var t = this.__data__
              , n = I_(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        $s.exports = T_
    }
    );
    var eu = f( (S2, Js) => {
        var b_ = nn();
        function A_(e) {
            return b_(this.__data__, e) > -1
        }
        Js.exports = A_
    }
    );
    var nu = f( (O2, tu) => {
        var w_ = nn();
        function S_(e, t) {
            var n = this.__data__
              , r = w_(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        tu.exports = S_
    }
    );
    var rn = f( (x2, ru) => {
        var O_ = zs()
          , x_ = Qs()
          , R_ = Zs()
          , C_ = eu()
          , P_ = nu();
        function Ct(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Ct.prototype.clear = O_;
        Ct.prototype.delete = x_;
        Ct.prototype.get = R_;
        Ct.prototype.has = C_;
        Ct.prototype.set = P_;
        ru.exports = Ct
    }
    );
    var ou = f( (R2, iu) => {
        var L_ = rn();
        function N_() {
            this.__data__ = new L_,
            this.size = 0
        }
        iu.exports = N_
    }
    );
    var su = f( (C2, au) => {
        function D_(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        au.exports = D_
    }
    );
    var cu = f( (P2, uu) => {
        function M_(e) {
            return this.__data__.get(e)
        }
        uu.exports = M_
    }
    );
    var fu = f( (L2, lu) => {
        function F_(e) {
            return this.__data__.has(e)
        }
        lu.exports = F_
    }
    );
    var $e = f( (N2, du) => {
        function q_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        du.exports = q_
    }
    );
    var _i = f( (D2, pu) => {
        var G_ = ct()
          , X_ = $e()
          , V_ = "[object AsyncFunction]"
          , k_ = "[object Function]"
          , U_ = "[object GeneratorFunction]"
          , B_ = "[object Proxy]";
        function H_(e) {
            if (!X_(e))
                return !1;
            var t = G_(e);
            return t == k_ || t == U_ || t == V_ || t == B_
        }
        pu.exports = H_
    }
    );
    var hu = f( (M2, gu) => {
        var W_ = Ue()
          , z_ = W_["__core-js_shared__"];
        gu.exports = z_
    }
    );
    var vu = f( (F2, yu) => {
        var Ii = hu()
          , Eu = function() {
            var e = /[^.]+$/.exec(Ii && Ii.keys && Ii.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function j_(e) {
            return !!Eu && Eu in e
        }
        yu.exports = j_
    }
    );
    var Ti = f( (q2, mu) => {
        var K_ = Function.prototype
          , Y_ = K_.toString;
        function Q_(e) {
            if (e != null) {
                try {
                    return Y_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        mu.exports = Q_
    }
    );
    var Iu = f( (G2, _u) => {
        var $_ = _i()
          , Z_ = vu()
          , J_ = $e()
          , eI = Ti()
          , tI = /[\\^$.*+?()[\]{}|]/g
          , nI = /^\[object .+?Constructor\]$/
          , rI = Function.prototype
          , iI = Object.prototype
          , oI = rI.toString
          , aI = iI.hasOwnProperty
          , sI = RegExp("^" + oI.call(aI).replace(tI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function uI(e) {
            if (!J_(e) || Z_(e))
                return !1;
            var t = $_(e) ? sI : nI;
            return t.test(eI(e))
        }
        _u.exports = uI
    }
    );
    var bu = f( (X2, Tu) => {
        function cI(e, t) {
            return e?.[t]
        }
        Tu.exports = cI
    }
    );
    var lt = f( (V2, Au) => {
        var lI = Iu()
          , fI = bu();
        function dI(e, t) {
            var n = fI(e, t);
            return lI(n) ? n : void 0
        }
        Au.exports = dI
    }
    );
    var Hn = f( (k2, wu) => {
        var pI = lt()
          , gI = Ue()
          , hI = pI(gI, "Map");
        wu.exports = hI
    }
    );
    var on = f( (U2, Su) => {
        var EI = lt()
          , yI = EI(Object, "create");
        Su.exports = yI
    }
    );
    var Ru = f( (B2, xu) => {
        var Ou = on();
        function vI() {
            this.__data__ = Ou ? Ou(null) : {},
            this.size = 0
        }
        xu.exports = vI
    }
    );
    var Pu = f( (H2, Cu) => {
        function mI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Cu.exports = mI
    }
    );
    var Nu = f( (W2, Lu) => {
        var _I = on()
          , II = "__lodash_hash_undefined__"
          , TI = Object.prototype
          , bI = TI.hasOwnProperty;
        function AI(e) {
            var t = this.__data__;
            if (_I) {
                var n = t[e];
                return n === II ? void 0 : n
            }
            return bI.call(t, e) ? t[e] : void 0
        }
        Lu.exports = AI
    }
    );
    var Mu = f( (z2, Du) => {
        var wI = on()
          , SI = Object.prototype
          , OI = SI.hasOwnProperty;
        function xI(e) {
            var t = this.__data__;
            return wI ? t[e] !== void 0 : OI.call(t, e)
        }
        Du.exports = xI
    }
    );
    var qu = f( (j2, Fu) => {
        var RI = on()
          , CI = "__lodash_hash_undefined__";
        function PI(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = RI && t === void 0 ? CI : t,
            this
        }
        Fu.exports = PI
    }
    );
    var Xu = f( (K2, Gu) => {
        var LI = Ru()
          , NI = Pu()
          , DI = Nu()
          , MI = Mu()
          , FI = qu();
        function Pt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Pt.prototype.clear = LI;
        Pt.prototype.delete = NI;
        Pt.prototype.get = DI;
        Pt.prototype.has = MI;
        Pt.prototype.set = FI;
        Gu.exports = Pt
    }
    );
    var Uu = f( (Y2, ku) => {
        var Vu = Xu()
          , qI = rn()
          , GI = Hn();
        function XI() {
            this.size = 0,
            this.__data__ = {
                hash: new Vu,
                map: new (GI || qI),
                string: new Vu
            }
        }
        ku.exports = XI
    }
    );
    var Hu = f( (Q2, Bu) => {
        function VI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Bu.exports = VI
    }
    );
    var an = f( ($2, Wu) => {
        var kI = Hu();
        function UI(e, t) {
            var n = e.__data__;
            return kI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
        }
        Wu.exports = UI
    }
    );
    var ju = f( (Z2, zu) => {
        var BI = an();
        function HI(e) {
            var t = BI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        zu.exports = HI
    }
    );
    var Yu = f( (J2, Ku) => {
        var WI = an();
        function zI(e) {
            return WI(this, e).get(e)
        }
        Ku.exports = zI
    }
    );
    var $u = f( (e1, Qu) => {
        var jI = an();
        function KI(e) {
            return jI(this, e).has(e)
        }
        Qu.exports = KI
    }
    );
    var Ju = f( (t1, Zu) => {
        var YI = an();
        function QI(e, t) {
            var n = YI(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        Zu.exports = QI
    }
    );
    var Wn = f( (n1, ec) => {
        var $I = Uu()
          , ZI = ju()
          , JI = Yu()
          , eT = $u()
          , tT = Ju();
        function Lt(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        Lt.prototype.clear = $I;
        Lt.prototype.delete = ZI;
        Lt.prototype.get = JI;
        Lt.prototype.has = eT;
        Lt.prototype.set = tT;
        ec.exports = Lt
    }
    );
    var nc = f( (r1, tc) => {
        var nT = rn()
          , rT = Hn()
          , iT = Wn()
          , oT = 200;
        function aT(e, t) {
            var n = this.__data__;
            if (n instanceof nT) {
                var r = n.__data__;
                if (!rT || r.length < oT - 1)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new iT(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        tc.exports = aT
    }
    );
    var bi = f( (i1, rc) => {
        var sT = rn()
          , uT = ou()
          , cT = su()
          , lT = cu()
          , fT = fu()
          , dT = nc();
        function Nt(e) {
            var t = this.__data__ = new sT(e);
            this.size = t.size
        }
        Nt.prototype.clear = uT;
        Nt.prototype.delete = cT;
        Nt.prototype.get = lT;
        Nt.prototype.has = fT;
        Nt.prototype.set = dT;
        rc.exports = Nt
    }
    );
    var oc = f( (o1, ic) => {
        var pT = "__lodash_hash_undefined__";
        function gT(e) {
            return this.__data__.set(e, pT),
            this
        }
        ic.exports = gT
    }
    );
    var sc = f( (a1, ac) => {
        function hT(e) {
            return this.__data__.has(e)
        }
        ac.exports = hT
    }
    );
    var cc = f( (s1, uc) => {
        var ET = Wn()
          , yT = oc()
          , vT = sc();
        function zn(e) {
            var t = -1
              , n = e == null ? 0 : e.length;
            for (this.__data__ = new ET; ++t < n; )
                this.add(e[t])
        }
        zn.prototype.add = zn.prototype.push = yT;
        zn.prototype.has = vT;
        uc.exports = zn
    }
    );
    var fc = f( (u1, lc) => {
        function mT(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        lc.exports = mT
    }
    );
    var pc = f( (c1, dc) => {
        function _T(e, t) {
            return e.has(t)
        }
        dc.exports = _T
    }
    );
    var Ai = f( (l1, gc) => {
        var IT = cc()
          , TT = fc()
          , bT = pc()
          , AT = 1
          , wT = 2;
        function ST(e, t, n, r, i, o) {
            var s = n & AT
              , a = e.length
              , u = t.length;
            if (a != u && !(s && u > a))
                return !1;
            var c = o.get(e)
              , g = o.get(t);
            if (c && g)
                return c == t && g == e;
            var p = -1
              , d = !0
              , h = n & wT ? new IT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++p < a; ) {
                var v = e[p]
                  , I = t[p];
                if (r)
                    var w = s ? r(I, v, p, t, e, o) : r(v, I, p, e, t, o);
                if (w !== void 0) {
                    if (w)
                        continue;
                    d = !1;
                    break
                }
                if (h) {
                    if (!TT(t, function(m, x) {
                        if (!bT(h, x) && (v === m || i(v, m, n, r, o)))
                            return h.push(x)
                    })) {
                        d = !1;
                        break
                    }
                } else if (!(v === I || i(v, I, n, r, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            d
        }
        gc.exports = ST
    }
    );
    var Ec = f( (f1, hc) => {
        var OT = Ue()
          , xT = OT.Uint8Array;
        hc.exports = xT
    }
    );
    var vc = f( (d1, yc) => {
        function RT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r, i) {
                n[++t] = [i, r]
            }),
            n
        }
        yc.exports = RT
    }
    );
    var _c = f( (p1, mc) => {
        function CT(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach(function(r) {
                n[++t] = r
            }),
            n
        }
        mc.exports = CT
    }
    );
    var wc = f( (g1, Ac) => {
        var Ic = St()
          , Tc = Ec()
          , PT = Bn()
          , LT = Ai()
          , NT = vc()
          , DT = _c()
          , MT = 1
          , FT = 2
          , qT = "[object Boolean]"
          , GT = "[object Date]"
          , XT = "[object Error]"
          , VT = "[object Map]"
          , kT = "[object Number]"
          , UT = "[object RegExp]"
          , BT = "[object Set]"
          , HT = "[object String]"
          , WT = "[object Symbol]"
          , zT = "[object ArrayBuffer]"
          , jT = "[object DataView]"
          , bc = Ic ? Ic.prototype : void 0
          , wi = bc ? bc.valueOf : void 0;
        function KT(e, t, n, r, i, o, s) {
            switch (n) {
            case jT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case zT:
                return !(e.byteLength != t.byteLength || !o(new Tc(e), new Tc(t)));
            case qT:
            case GT:
            case kT:
                return PT(+e, +t);
            case XT:
                return e.name == t.name && e.message == t.message;
            case UT:
            case HT:
                return e == t + "";
            case VT:
                var a = NT;
            case BT:
                var u = r & MT;
                if (a || (a = DT),
                e.size != t.size && !u)
                    return !1;
                var c = s.get(e);
                if (c)
                    return c == t;
                r |= FT,
                s.set(e, t);
                var g = LT(a(e), a(t), r, i, o, s);
                return s.delete(e),
                g;
            case WT:
                if (wi)
                    return wi.call(e) == wi.call(t)
            }
            return !1
        }
        Ac.exports = KT
    }
    );
    var jn = f( (h1, Sc) => {
        function YT(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
            return e
        }
        Sc.exports = YT
    }
    );
    var be = f( (E1, Oc) => {
        var QT = Array.isArray;
        Oc.exports = QT
    }
    );
    var Si = f( (y1, xc) => {
        var $T = jn()
          , ZT = be();
        function JT(e, t, n) {
            var r = t(e);
            return ZT(e) ? r : $T(r, n(e))
        }
        xc.exports = JT
    }
    );
    var Cc = f( (v1, Rc) => {
        function eb(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                var s = e[n];
                t(s, n, e) && (o[i++] = s)
            }
            return o
        }
        Rc.exports = eb
    }
    );
    var Oi = f( (m1, Pc) => {
        function tb() {
            return []
        }
        Pc.exports = tb
    }
    );
    var xi = f( (_1, Nc) => {
        var nb = Cc()
          , rb = Oi()
          , ib = Object.prototype
          , ob = ib.propertyIsEnumerable
          , Lc = Object.getOwnPropertySymbols
          , ab = Lc ? function(e) {
            return e == null ? [] : (e = Object(e),
            nb(Lc(e), function(t) {
                return ob.call(e, t)
            }))
        }
        : rb;
        Nc.exports = ab
    }
    );
    var Mc = f( (I1, Dc) => {
        function sb(e, t) {
            for (var n = -1, r = Array(e); ++n < e; )
                r[n] = t(n);
            return r
        }
        Dc.exports = sb
    }
    );
    var qc = f( (T1, Fc) => {
        var ub = ct()
          , cb = rt()
          , lb = "[object Arguments]";
        function fb(e) {
            return cb(e) && ub(e) == lb
        }
        Fc.exports = fb
    }
    );
    var sn = f( (b1, Vc) => {
        var Gc = qc()
          , db = rt()
          , Xc = Object.prototype
          , pb = Xc.hasOwnProperty
          , gb = Xc.propertyIsEnumerable
          , hb = Gc(function() {
            return arguments
        }()) ? Gc : function(e) {
            return db(e) && pb.call(e, "callee") && !gb.call(e, "callee")
        }
        ;
        Vc.exports = hb
    }
    );
    var Uc = f( (A1, kc) => {
        function Eb() {
            return !1
        }
        kc.exports = Eb
    }
    );
    var Kn = f( (un, Dt) => {
        var yb = Ue()
          , vb = Uc()
          , Wc = typeof un == "object" && un && !un.nodeType && un
          , Bc = Wc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt
          , mb = Bc && Bc.exports === Wc
          , Hc = mb ? yb.Buffer : void 0
          , _b = Hc ? Hc.isBuffer : void 0
          , Ib = _b || vb;
        Dt.exports = Ib
    }
    );
    var Yn = f( (w1, zc) => {
        var Tb = 9007199254740991
          , bb = /^(?:0|[1-9]\d*)$/;
        function Ab(e, t) {
            var n = typeof e;
            return t = t ?? Tb,
            !!t && (n == "number" || n != "symbol" && bb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        zc.exports = Ab
    }
    );
    var Qn = f( (S1, jc) => {
        var wb = 9007199254740991;
        function Sb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wb
        }
        jc.exports = Sb
    }
    );
    var Yc = f( (O1, Kc) => {
        var Ob = ct()
          , xb = Qn()
          , Rb = rt()
          , Cb = "[object Arguments]"
          , Pb = "[object Array]"
          , Lb = "[object Boolean]"
          , Nb = "[object Date]"
          , Db = "[object Error]"
          , Mb = "[object Function]"
          , Fb = "[object Map]"
          , qb = "[object Number]"
          , Gb = "[object Object]"
          , Xb = "[object RegExp]"
          , Vb = "[object Set]"
          , kb = "[object String]"
          , Ub = "[object WeakMap]"
          , Bb = "[object ArrayBuffer]"
          , Hb = "[object DataView]"
          , Wb = "[object Float32Array]"
          , zb = "[object Float64Array]"
          , jb = "[object Int8Array]"
          , Kb = "[object Int16Array]"
          , Yb = "[object Int32Array]"
          , Qb = "[object Uint8Array]"
          , $b = "[object Uint8ClampedArray]"
          , Zb = "[object Uint16Array]"
          , Jb = "[object Uint32Array]"
          , Ee = {};
        Ee[Wb] = Ee[zb] = Ee[jb] = Ee[Kb] = Ee[Yb] = Ee[Qb] = Ee[$b] = Ee[Zb] = Ee[Jb] = !0;
        Ee[Cb] = Ee[Pb] = Ee[Bb] = Ee[Lb] = Ee[Hb] = Ee[Nb] = Ee[Db] = Ee[Mb] = Ee[Fb] = Ee[qb] = Ee[Gb] = Ee[Xb] = Ee[Vb] = Ee[kb] = Ee[Ub] = !1;
        function eA(e) {
            return Rb(e) && xb(e.length) && !!Ee[Ob(e)]
        }
        Kc.exports = eA
    }
    );
    var $c = f( (x1, Qc) => {
        function tA(e) {
            return function(t) {
                return e(t)
            }
        }
        Qc.exports = tA
    }
    );
    var Jc = f( (cn, Mt) => {
        var nA = ei()
          , Zc = typeof cn == "object" && cn && !cn.nodeType && cn
          , ln = Zc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt
          , rA = ln && ln.exports === Zc
          , Ri = rA && nA.process
          , iA = function() {
            try {
                var e = ln && ln.require && ln.require("util").types;
                return e || Ri && Ri.binding && Ri.binding("util")
            } catch {}
        }();
        Mt.exports = iA
    }
    );
    var $n = f( (R1, nl) => {
        var oA = Yc()
          , aA = $c()
          , el = Jc()
          , tl = el && el.isTypedArray
          , sA = tl ? aA(tl) : oA;
        nl.exports = sA
    }
    );
    var Ci = f( (C1, rl) => {
        var uA = Mc()
          , cA = sn()
          , lA = be()
          , fA = Kn()
          , dA = Yn()
          , pA = $n()
          , gA = Object.prototype
          , hA = gA.hasOwnProperty;
        function EA(e, t) {
            var n = lA(e)
              , r = !n && cA(e)
              , i = !n && !r && fA(e)
              , o = !n && !r && !i && pA(e)
              , s = n || r || i || o
              , a = s ? uA(e.length, String) : []
              , u = a.length;
            for (var c in e)
                (t || hA.call(e, c)) && !(s && (c == "length" || i && (c == "offset" || c == "parent") || o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || dA(c, u))) && a.push(c);
            return a
        }
        rl.exports = EA
    }
    );
    var Zn = f( (P1, il) => {
        var yA = Object.prototype;
        function vA(e) {
            var t = e && e.constructor
              , n = typeof t == "function" && t.prototype || yA;
            return e === n
        }
        il.exports = vA
    }
    );
    var al = f( (L1, ol) => {
        var mA = ti()
          , _A = mA(Object.keys, Object);
        ol.exports = _A
    }
    );
    var Jn = f( (N1, sl) => {
        var IA = Zn()
          , TA = al()
          , bA = Object.prototype
          , AA = bA.hasOwnProperty;
        function wA(e) {
            if (!IA(e))
                return TA(e);
            var t = [];
            for (var n in Object(e))
                AA.call(e, n) && n != "constructor" && t.push(n);
            return t
        }
        sl.exports = wA
    }
    );
    var yt = f( (D1, ul) => {
        var SA = _i()
          , OA = Qn();
        function xA(e) {
            return e != null && OA(e.length) && !SA(e)
        }
        ul.exports = xA
    }
    );
    var fn = f( (M1, cl) => {
        var RA = Ci()
          , CA = Jn()
          , PA = yt();
        function LA(e) {
            return PA(e) ? RA(e) : CA(e)
        }
        cl.exports = LA
    }
    );
    var fl = f( (F1, ll) => {
        var NA = Si()
          , DA = xi()
          , MA = fn();
        function FA(e) {
            return NA(e, MA, DA)
        }
        ll.exports = FA
    }
    );
    var gl = f( (q1, pl) => {
        var dl = fl()
          , qA = 1
          , GA = Object.prototype
          , XA = GA.hasOwnProperty;
        function VA(e, t, n, r, i, o) {
            var s = n & qA
              , a = dl(e)
              , u = a.length
              , c = dl(t)
              , g = c.length;
            if (u != g && !s)
                return !1;
            for (var p = u; p--; ) {
                var d = a[p];
                if (!(s ? d in t : XA.call(t, d)))
                    return !1
            }
            var h = o.get(e)
              , v = o.get(t);
            if (h && v)
                return h == t && v == e;
            var I = !0;
            o.set(e, t),
            o.set(t, e);
            for (var w = s; ++p < u; ) {
                d = a[p];
                var m = e[d]
                  , x = t[d];
                if (r)
                    var S = s ? r(x, m, d, t, e, o) : r(m, x, d, e, t, o);
                if (!(S === void 0 ? m === x || i(m, x, n, r, o) : S)) {
                    I = !1;
                    break
                }
                w || (w = d == "constructor")
            }
            if (I && !w) {
                var C = e.constructor
                  , P = t.constructor;
                C != P && "constructor"in e && "constructor"in t && !(typeof C == "function" && C instanceof C && typeof P == "function" && P instanceof P) && (I = !1)
            }
            return o.delete(e),
            o.delete(t),
            I
        }
        pl.exports = VA
    }
    );
    var El = f( (G1, hl) => {
        var kA = lt()
          , UA = Ue()
          , BA = kA(UA, "DataView");
        hl.exports = BA
    }
    );
    var vl = f( (X1, yl) => {
        var HA = lt()
          , WA = Ue()
          , zA = HA(WA, "Promise");
        yl.exports = zA
    }
    );
    var _l = f( (V1, ml) => {
        var jA = lt()
          , KA = Ue()
          , YA = jA(KA, "Set");
        ml.exports = YA
    }
    );
    var Pi = f( (k1, Il) => {
        var QA = lt()
          , $A = Ue()
          , ZA = QA($A, "WeakMap");
        Il.exports = ZA
    }
    );
    var er = f( (U1, xl) => {
        var Li = El()
          , Ni = Hn()
          , Di = vl()
          , Mi = _l()
          , Fi = Pi()
          , Ol = ct()
          , Ft = Ti()
          , Tl = "[object Map]"
          , JA = "[object Object]"
          , bl = "[object Promise]"
          , Al = "[object Set]"
          , wl = "[object WeakMap]"
          , Sl = "[object DataView]"
          , e0 = Ft(Li)
          , t0 = Ft(Ni)
          , n0 = Ft(Di)
          , r0 = Ft(Mi)
          , i0 = Ft(Fi)
          , vt = Ol;
        (Li && vt(new Li(new ArrayBuffer(1))) != Sl || Ni && vt(new Ni) != Tl || Di && vt(Di.resolve()) != bl || Mi && vt(new Mi) != Al || Fi && vt(new Fi) != wl) && (vt = function(e) {
            var t = Ol(e)
              , n = t == JA ? e.constructor : void 0
              , r = n ? Ft(n) : "";
            if (r)
                switch (r) {
                case e0:
                    return Sl;
                case t0:
                    return Tl;
                case n0:
                    return bl;
                case r0:
                    return Al;
                case i0:
                    return wl
                }
            return t
        }
        );
        xl.exports = vt
    }
    );
    var Fl = f( (B1, Ml) => {
        var qi = bi()
          , o0 = Ai()
          , a0 = wc()
          , s0 = gl()
          , Rl = er()
          , Cl = be()
          , Pl = Kn()
          , u0 = $n()
          , c0 = 1
          , Ll = "[object Arguments]"
          , Nl = "[object Array]"
          , tr = "[object Object]"
          , l0 = Object.prototype
          , Dl = l0.hasOwnProperty;
        function f0(e, t, n, r, i, o) {
            var s = Cl(e)
              , a = Cl(t)
              , u = s ? Nl : Rl(e)
              , c = a ? Nl : Rl(t);
            u = u == Ll ? tr : u,
            c = c == Ll ? tr : c;
            var g = u == tr
              , p = c == tr
              , d = u == c;
            if (d && Pl(e)) {
                if (!Pl(t))
                    return !1;
                s = !0,
                g = !1
            }
            if (d && !g)
                return o || (o = new qi),
                s || u0(e) ? o0(e, t, n, r, i, o) : a0(e, t, u, n, r, i, o);
            if (!(n & c0)) {
                var h = g && Dl.call(e, "__wrapped__")
                  , v = p && Dl.call(t, "__wrapped__");
                if (h || v) {
                    var I = h ? e.value() : e
                      , w = v ? t.value() : t;
                    return o || (o = new qi),
                    i(I, w, n, r, o)
                }
            }
            return d ? (o || (o = new qi),
            s0(e, t, n, r, i, o)) : !1
        }
        Ml.exports = f0
    }
    );
    var Gi = f( (H1, Xl) => {
        var d0 = Fl()
          , ql = rt();
        function Gl(e, t, n, r, i) {
            return e === t ? !0 : e == null || t == null || !ql(e) && !ql(t) ? e !== e && t !== t : d0(e, t, n, r, Gl, i)
        }
        Xl.exports = Gl
    }
    );
    var kl = f( (W1, Vl) => {
        var p0 = bi()
          , g0 = Gi()
          , h0 = 1
          , E0 = 2;
        function y0(e, t, n, r) {
            var i = n.length
              , o = i
              , s = !r;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var a = n[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                a = n[i];
                var u = a[0]
                  , c = e[u]
                  , g = a[1];
                if (s && a[2]) {
                    if (c === void 0 && !(u in e))
                        return !1
                } else {
                    var p = new p0;
                    if (r)
                        var d = r(c, g, u, e, t, p);
                    if (!(d === void 0 ? g0(g, c, h0 | E0, r, p) : d))
                        return !1
                }
            }
            return !0
        }
        Vl.exports = y0
    }
    );
    var Xi = f( (z1, Ul) => {
        var v0 = $e();
        function m0(e) {
            return e === e && !v0(e)
        }
        Ul.exports = m0
    }
    );
    var Hl = f( (j1, Bl) => {
        var _0 = Xi()
          , I0 = fn();
        function T0(e) {
            for (var t = I0(e), n = t.length; n--; ) {
                var r = t[n]
                  , i = e[r];
                t[n] = [r, i, _0(i)]
            }
            return t
        }
        Bl.exports = T0
    }
    );
    var Vi = f( (K1, Wl) => {
        function b0(e, t) {
            return function(n) {
                return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
            }
        }
        Wl.exports = b0
    }
    );
    var jl = f( (Y1, zl) => {
        var A0 = kl()
          , w0 = Hl()
          , S0 = Vi();
        function O0(e) {
            var t = w0(e);
            return t.length == 1 && t[0][2] ? S0(t[0][0], t[0][1]) : function(n) {
                return n === e || A0(n, e, t)
            }
        }
        zl.exports = O0
    }
    );
    var dn = f( (Q1, Kl) => {
        var x0 = ct()
          , R0 = rt()
          , C0 = "[object Symbol]";
        function P0(e) {
            return typeof e == "symbol" || R0(e) && x0(e) == C0
        }
        Kl.exports = P0
    }
    );
    var nr = f( ($1, Yl) => {
        var L0 = be()
          , N0 = dn()
          , D0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , M0 = /^\w*$/;
        function F0(e, t) {
            if (L0(e))
                return !1;
            var n = typeof e;
            return n == "number" || n == "symbol" || n == "boolean" || e == null || N0(e) ? !0 : M0.test(e) || !D0.test(e) || t != null && e in Object(t)
        }
        Yl.exports = F0
    }
    );
    var Zl = f( (Z1, $l) => {
        var Ql = Wn()
          , q0 = "Expected a function";
        function ki(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(q0);
            var n = function() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var s = e.apply(this, r);
                return n.cache = o.set(i, s) || o,
                s
            };
            return n.cache = new (ki.Cache || Ql),
            n
        }
        ki.Cache = Ql;
        $l.exports = ki
    }
    );
    var ef = f( (J1, Jl) => {
        var G0 = Zl()
          , X0 = 500;
        function V0(e) {
            var t = G0(e, function(r) {
                return n.size === X0 && n.clear(),
                r
            })
              , n = t.cache;
            return t
        }
        Jl.exports = V0
    }
    );
    var nf = f( (eq, tf) => {
        var k0 = ef()
          , U0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , B0 = /\\(\\)?/g
          , H0 = k0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(U0, function(n, r, i, o) {
                t.push(i ? o.replace(B0, "$1") : r || n)
            }),
            t
        });
        tf.exports = H0
    }
    );
    var Ui = f( (tq, rf) => {
        function W0(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
                i[n] = t(e[n], n, e);
            return i
        }
        rf.exports = W0
    }
    );
    var lf = f( (nq, cf) => {
        var of = St()
          , z0 = Ui()
          , j0 = be()
          , K0 = dn()
          , Y0 = 1 / 0
          , af = of ? of.prototype : void 0
          , sf = af ? af.toString : void 0;
        function uf(e) {
            if (typeof e == "string")
                return e;
            if (j0(e))
                return z0(e, uf) + "";
            if (K0(e))
                return sf ? sf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -Y0 ? "-0" : t
        }
        cf.exports = uf
    }
    );
    var df = f( (rq, ff) => {
        var Q0 = lf();
        function $0(e) {
            return e == null ? "" : Q0(e)
        }
        ff.exports = $0
    }
    );
    var pn = f( (iq, pf) => {
        var Z0 = be()
          , J0 = nr()
          , ew = nf()
          , tw = df();
        function nw(e, t) {
            return Z0(e) ? e : J0(e, t) ? [e] : ew(tw(e))
        }
        pf.exports = nw
    }
    );
    var qt = f( (oq, gf) => {
        var rw = dn()
          , iw = 1 / 0;
        function ow(e) {
            if (typeof e == "string" || rw(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -iw ? "-0" : t
        }
        gf.exports = ow
    }
    );
    var rr = f( (aq, hf) => {
        var aw = pn()
          , sw = qt();
        function uw(e, t) {
            t = aw(t, e);
            for (var n = 0, r = t.length; e != null && n < r; )
                e = e[sw(t[n++])];
            return n && n == r ? e : void 0
        }
        hf.exports = uw
    }
    );
    var ir = f( (sq, Ef) => {
        var cw = rr();
        function lw(e, t, n) {
            var r = e == null ? void 0 : cw(e, t);
            return r === void 0 ? n : r
        }
        Ef.exports = lw
    }
    );
    var vf = f( (uq, yf) => {
        function fw(e, t) {
            return e != null && t in Object(e)
        }
        yf.exports = fw
    }
    );
    var _f = f( (cq, mf) => {
        var dw = pn()
          , pw = sn()
          , gw = be()
          , hw = Yn()
          , Ew = Qn()
          , yw = qt();
        function vw(e, t, n) {
            t = dw(t, e);
            for (var r = -1, i = t.length, o = !1; ++r < i; ) {
                var s = yw(t[r]);
                if (!(o = e != null && n(e, s)))
                    break;
                e = e[s]
            }
            return o || ++r != i ? o : (i = e == null ? 0 : e.length,
            !!i && Ew(i) && hw(s, i) && (gw(e) || pw(e)))
        }
        mf.exports = vw
    }
    );
    var Tf = f( (lq, If) => {
        var mw = vf()
          , _w = _f();
        function Iw(e, t) {
            return e != null && _w(e, t, mw)
        }
        If.exports = Iw
    }
    );
    var Af = f( (fq, bf) => {
        var Tw = Gi()
          , bw = ir()
          , Aw = Tf()
          , ww = nr()
          , Sw = Xi()
          , Ow = Vi()
          , xw = qt()
          , Rw = 1
          , Cw = 2;
        function Pw(e, t) {
            return ww(e) && Sw(t) ? Ow(xw(e), t) : function(n) {
                var r = bw(n, e);
                return r === void 0 && r === t ? Aw(n, e) : Tw(t, r, Rw | Cw)
            }
        }
        bf.exports = Pw
    }
    );
    var or = f( (dq, wf) => {
        function Lw(e) {
            return e
        }
        wf.exports = Lw
    }
    );
    var Bi = f( (pq, Sf) => {
        function Nw(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Sf.exports = Nw
    }
    );
    var xf = f( (gq, Of) => {
        var Dw = rr();
        function Mw(e) {
            return function(t) {
                return Dw(t, e)
            }
        }
        Of.exports = Mw
    }
    );
    var Cf = f( (hq, Rf) => {
        var Fw = Bi()
          , qw = xf()
          , Gw = nr()
          , Xw = qt();
        function Vw(e) {
            return Gw(e) ? Fw(Xw(e)) : qw(e)
        }
        Rf.exports = Vw
    }
    );
    var ft = f( (Eq, Pf) => {
        var kw = jl()
          , Uw = Af()
          , Bw = or()
          , Hw = be()
          , Ww = Cf();
        function zw(e) {
            return typeof e == "function" ? e : e == null ? Bw : typeof e == "object" ? Hw(e) ? Uw(e[0], e[1]) : kw(e) : Ww(e)
        }
        Pf.exports = zw
    }
    );
    var Hi = f( (yq, Lf) => {
        var jw = ft()
          , Kw = yt()
          , Yw = fn();
        function Qw(e) {
            return function(t, n, r) {
                var i = Object(t);
                if (!Kw(t)) {
                    var o = jw(n, 3);
                    t = Yw(t),
                    n = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, n, r);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Lf.exports = Qw
    }
    );
    var Wi = f( (vq, Nf) => {
        function $w(e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Nf.exports = $w
    }
    );
    var Mf = f( (mq, Df) => {
        var Zw = /\s/;
        function Jw(e) {
            for (var t = e.length; t-- && Zw.test(e.charAt(t)); )
                ;
            return t
        }
        Df.exports = Jw
    }
    );
    var qf = f( (_q, Ff) => {
        var eS = Mf()
          , tS = /^\s+/;
        function nS(e) {
            return e && e.slice(0, eS(e) + 1).replace(tS, "")
        }
        Ff.exports = nS
    }
    );
    var ar = f( (Iq, Vf) => {
        var rS = qf()
          , Gf = $e()
          , iS = dn()
          , Xf = 0 / 0
          , oS = /^[-+]0x[0-9a-f]+$/i
          , aS = /^0b[01]+$/i
          , sS = /^0o[0-7]+$/i
          , uS = parseInt;
        function cS(e) {
            if (typeof e == "number")
                return e;
            if (iS(e))
                return Xf;
            if (Gf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Gf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = rS(e);
            var n = aS.test(e);
            return n || sS.test(e) ? uS(e.slice(2), n ? 2 : 8) : oS.test(e) ? Xf : +e
        }
        Vf.exports = cS
    }
    );
    var Bf = f( (Tq, Uf) => {
        var lS = ar()
          , kf = 1 / 0
          , fS = 17976931348623157e292;
        function dS(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = lS(e),
            e === kf || e === -kf) {
                var t = e < 0 ? -1 : 1;
                return t * fS
            }
            return e === e ? e : 0
        }
        Uf.exports = dS
    }
    );
    var zi = f( (bq, Hf) => {
        var pS = Bf();
        function gS(e) {
            var t = pS(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        Hf.exports = gS
    }
    );
    var zf = f( (Aq, Wf) => {
        var hS = Wi()
          , ES = ft()
          , yS = zi()
          , vS = Math.max;
        function mS(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = n == null ? 0 : yS(n);
            return i < 0 && (i = vS(r + i, 0)),
            hS(e, ES(t, 3), i)
        }
        Wf.exports = mS
    }
    );
    var ji = f( (wq, jf) => {
        var _S = Hi()
          , IS = zf()
          , TS = _S(IS);
        jf.exports = TS
    }
    );
    var Qf = {};
    Pe(Qf, {
        ELEMENT_MATCHES: () => bS,
        FLEX_PREFIXED: () => Ki,
        IS_BROWSER_ENV: () => He,
        TRANSFORM_PREFIXED: () => dt,
        TRANSFORM_STYLE_PREFIXED: () => ur,
        withBrowser: () => sr
    });
    var Yf, He, sr, bS, Ki, dt, Kf, ur, cr = ye( () => {
        "use strict";
        Yf = ce(ji()),
        He = typeof window < "u",
        sr = (e, t) => He ? e() : t,
        bS = sr( () => (0,
        Yf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Ki = sr( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , n = "";
            try {
                let {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return n
            } catch {
                return n
            }
        }
        , "flex"),
        dt = sr( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , n = "Transform"
                  , {length: r} = t;
                for (let i = 0; i < r; i++) {
                    let o = t[i] + n;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Kf = dt.split("transform")[0],
        ur = Kf ? Kf + "TransformStyle" : "transformStyle"
    }
    );
    var Yi = f( (Sq, td) => {
        var AS = 4
          , wS = .001
          , SS = 1e-7
          , OS = 10
          , gn = 11
          , lr = 1 / (gn - 1)
          , xS = typeof Float32Array == "function";
        function $f(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Zf(e, t) {
            return 3 * t - 6 * e
        }
        function Jf(e) {
            return 3 * e
        }
        function fr(e, t, n) {
            return (($f(t, n) * e + Zf(t, n)) * e + Jf(t)) * e
        }
        function ed(e, t, n) {
            return 3 * $f(t, n) * e * e + 2 * Zf(t, n) * e + Jf(t)
        }
        function RS(e, t, n, r, i) {
            var o, s, a = 0;
            do
                s = t + (n - t) / 2,
                o = fr(s, r, i) - e,
                o > 0 ? n = s : t = s;
            while (Math.abs(o) > SS && ++a < OS);
            return s
        }
        function CS(e, t, n, r) {
            for (var i = 0; i < AS; ++i) {
                var o = ed(t, n, r);
                if (o === 0)
                    return t;
                var s = fr(t, n, r) - e;
                t -= s / o
            }
            return t
        }
        td.exports = function(t, n, r, i) {
            if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = xS ? new Float32Array(gn) : new Array(gn);
            if (t !== n || r !== i)
                for (var s = 0; s < gn; ++s)
                    o[s] = fr(s * lr, t, r);
            function a(u) {
                for (var c = 0, g = 1, p = gn - 1; g !== p && o[g] <= u; ++g)
                    c += lr;
                --g;
                var d = (u - o[g]) / (o[g + 1] - o[g])
                  , h = c + d * lr
                  , v = ed(h, t, r);
                return v >= wS ? CS(u, h, t, r) : v === 0 ? h : RS(u, c, c + lr, t, r)
            }
            return function(c) {
                return t === n && r === i ? c : c === 0 ? 0 : c === 1 ? 1 : fr(a(c), n, i)
            }
        }
    }
    );
    var En = {};
    Pe(En, {
        bounce: () => dO,
        bouncePast: () => pO,
        ease: () => PS,
        easeIn: () => LS,
        easeInOut: () => DS,
        easeOut: () => NS,
        inBack: () => rO,
        inCirc: () => JS,
        inCubic: () => GS,
        inElastic: () => aO,
        inExpo: () => QS,
        inOutBack: () => oO,
        inOutCirc: () => tO,
        inOutCubic: () => VS,
        inOutElastic: () => uO,
        inOutExpo: () => ZS,
        inOutQuad: () => qS,
        inOutQuart: () => BS,
        inOutQuint: () => zS,
        inOutSine: () => YS,
        inQuad: () => MS,
        inQuart: () => kS,
        inQuint: () => HS,
        inSine: () => jS,
        outBack: () => iO,
        outBounce: () => nO,
        outCirc: () => eO,
        outCubic: () => XS,
        outElastic: () => sO,
        outExpo: () => $S,
        outQuad: () => FS,
        outQuart: () => US,
        outQuint: () => WS,
        outSine: () => KS,
        swingFrom: () => lO,
        swingFromTo: () => cO,
        swingTo: () => fO
    });
    function MS(e) {
        return Math.pow(e, 2)
    }
    function FS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function qS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function GS(e) {
        return Math.pow(e, 3)
    }
    function XS(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function VS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function kS(e) {
        return Math.pow(e, 4)
    }
    function US(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function BS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function HS(e) {
        return Math.pow(e, 5)
    }
    function WS(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function zS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function jS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function KS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function YS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function QS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function $S(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function ZS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function JS(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function eO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function tO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function nO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function rO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }
    function iO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function oO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function aO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
    }
    function sO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
    }
    function uO(e) {
        let t = it
          , n = 0
          , r = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1,
        t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
    }
    function cO(e) {
        let t = it;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function lO(e) {
        let t = it;
        return e * e * ((t + 1) * e - t)
    }
    function fO(e) {
        let t = it;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function dO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function pO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var hn, it, PS, LS, NS, DS, Qi = ye( () => {
        "use strict";
        hn = ce(Yi()),
        it = 1.70158,
        PS = (0,
        hn.default)(.25, .1, .25, 1),
        LS = (0,
        hn.default)(.42, 0, 1, 1),
        NS = (0,
        hn.default)(0, 0, .58, 1),
        DS = (0,
        hn.default)(.42, 0, .58, 1)
    }
    );
    var rd = {};
    Pe(rd, {
        applyEasing: () => hO,
        createBezierEasing: () => gO,
        optimizeFloat: () => yn
    });
    function yn(e, t=5, n=10) {
        let r = Math.pow(n, t)
          , i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function gO(e) {
        return (0,
        nd.default)(...e)
    }
    function hO(e, t, n) {
        return t === 0 ? 0 : t === 1 ? 1 : yn(n ? t > 0 ? n(t) : t : t > 0 && e && En[e] ? En[e](t) : t)
    }
    var nd, $i = ye( () => {
        "use strict";
        Qi();
        nd = ce(Yi())
    }
    );
    var ad = {};
    Pe(ad, {
        createElementState: () => od,
        ixElements: () => RO,
        mergeActionState: () => Zi
    });
    function od(e, t, n, r, i) {
        let o = n === EO ? (0,
        Gt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Gt.mergeIn)(e, [r], {
            id: r,
            ref: t,
            refId: o,
            refType: n
        })
    }
    function Zi(e, t, n, r, i) {
        let o = PO(i);
        return (0,
        Gt.mergeIn)(e, [t, xO, n], r, o)
    }
    function PO(e) {
        let {config: t} = e;
        return CO.reduce( (n, r) => {
            let i = r[0]
              , o = r[1]
              , s = t[i]
              , a = t[o];
            return s != null && a != null && (n[o] = a),
            n
        }
        , {})
    }
    var Gt, xq, EO, Rq, yO, vO, mO, _O, IO, TO, bO, AO, wO, SO, OO, id, xO, RO, CO, sd = ye( () => {
        "use strict";
        Gt = ce(Rt());
        Ne();
        ({HTML_ELEMENT: xq, PLAIN_OBJECT: EO, ABSTRACT_NODE: Rq, CONFIG_X_VALUE: yO, CONFIG_Y_VALUE: vO, CONFIG_Z_VALUE: mO, CONFIG_VALUE: _O, CONFIG_X_UNIT: IO, CONFIG_Y_UNIT: TO, CONFIG_Z_UNIT: bO, CONFIG_UNIT: AO} = we),
        {IX2_SESSION_STOPPED: wO, IX2_INSTANCE_ADDED: SO, IX2_ELEMENT_STATE_CHANGED: OO} = Te,
        id = {},
        xO = "refState",
        RO = (e=id, t={}) => {
            switch (t.type) {
            case wO:
                return id;
            case SO:
                {
                    let {elementId: n, element: r, origin: i, actionItem: o, refType: s} = t.payload
                      , {actionTypeId: a} = o
                      , u = e;
                    return (0,
                    Gt.getIn)(u, [n, r]) !== r && (u = od(u, r, s, n, o)),
                    Zi(u, n, a, i, o)
                }
            case OO:
                {
                    let {elementId: n, actionTypeId: r, current: i, actionItem: o} = t.payload;
                    return Zi(e, n, r, i, o)
                }
            default:
                return e
            }
        }
        ;
        CO = [[yO, IO], [vO, TO], [mO, bO], [_O, AO]]
    }
    );
    var ud = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });
        function LO(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        LO(Ji, {
            clearPlugin: function() {
                return XO
            },
            createPluginInstance: function() {
                return qO
            },
            getPluginConfig: function() {
                return NO
            },
            getPluginDestination: function() {
                return FO
            },
            getPluginDuration: function() {
                return DO
            },
            getPluginOrigin: function() {
                return MO
            },
            renderPlugin: function() {
                return GO
            }
        });
        var NO = e => e.value
          , DO = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , MO = e => e || {
            value: 0
        }
          , FO = e => ({
            value: e.value
        })
          , qO = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , GO = (e, t, n) => {
            if (!e)
                return;
            let r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
          , XO = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var ld = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });
        function VO(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        VO(eo, {
            clearPlugin: function() {
                return QO
            },
            createPluginInstance: function() {
                return KO
            },
            getPluginConfig: function() {
                return HO
            },
            getPluginDestination: function() {
                return jO
            },
            getPluginDuration: function() {
                return WO
            },
            getPluginOrigin: function() {
                return zO
            },
            renderPlugin: function() {
                return YO
            }
        });
        var kO = e => document.querySelector(`[data-w-id="${e}"]`)
          , UO = () => window.Webflow.require("spline")
          , BO = (e, t) => e.filter(n => !t.includes(n))
          , HO = (e, t) => e.value[t]
          , WO = () => null
          , cd = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , zO = (e, t) => {
            let n = t.config.value
              , r = Object.keys(n);
            if (e) {
                let o = Object.keys(e)
                  , s = BO(r, o);
                return s.length ? s.reduce( (u, c) => (u[c] = cd[c],
                u), e) : e
            }
            return r.reduce( (o, s) => (o[s] = cd[s],
            o), {})
        }
          , jO = e => e.value
          , KO = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? kO(n) : null
        }
          , YO = (e, t, n) => {
            let r = UO()
              , i = r.getInstance(e)
              , o = n.config.target.objectId
              , s = a => {
                if (!a)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && a.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: c} = t;
                c.positionX != null && (u.position.x = c.positionX),
                c.positionY != null && (u.position.y = c.positionY),
                c.positionZ != null && (u.position.z = c.positionZ),
                c.rotationX != null && (u.rotation.x = c.rotationX),
                c.rotationY != null && (u.rotation.y = c.rotationY),
                c.rotationZ != null && (u.rotation.z = c.rotationZ),
                c.scaleX != null && (u.scale.x = c.scaleX),
                c.scaleY != null && (u.scale.y = c.scaleY),
                c.scaleZ != null && (u.scale.z = c.scaleZ)
            }
            ;
            i ? s(i.spline) : r.setLoadHandler(e, s)
        }
          , QO = () => null
    }
    );
    var fd = f(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        function $O(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        $O(ro, {
            clearPlugin: function() {
                return ax
            },
            createPluginInstance: function() {
                return ix
            },
            getPluginConfig: function() {
                return ex
            },
            getPluginDestination: function() {
                return rx
            },
            getPluginDuration: function() {
                return tx
            },
            getPluginOrigin: function() {
                return nx
            },
            renderPlugin: function() {
                return ox
            }
        });
        var to = "--wf-rive-fit"
          , no = "--wf-rive-alignment"
          , ZO = e => document.querySelector(`[data-w-id="${e}"]`)
          , JO = () => window.Webflow.require("rive")
          , ex = (e, t) => e.value.inputs[t]
          , tx = () => null
          , nx = (e, t) => {
            if (e)
                return e;
            let n = {}
              , {inputs: r={}} = t.config.value;
            for (let i in r)
                r[i] == null && (n[i] = 0);
            return n
        }
          , rx = e => e.value.inputs ?? {}
          , ix = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? ZO(n) : null
        }
          , ox = (e, {PLUGIN_RIVE: t}, n) => {
            let r = JO()
              , i = r.getInstance(e)
              , o = r.rive.StateMachineInputType
              , {name: s, inputs: a={}} = n.config.value || {};
            function u(c) {
                if (c.loaded)
                    g();
                else {
                    let p = () => {
                        g(),
                        c?.off("load", p)
                    }
                    ;
                    c?.on("load", p)
                }
                function g() {
                    let p = c.stateMachineInputs(s);
                    if (p != null) {
                        if (c.isPlaying || c.play(s, !1),
                        to in a || no in a) {
                            let d = c.layout
                              , h = a[to] ?? d.fit
                              , v = a[no] ?? d.alignment;
                            (h !== d.fit || v !== d.alignment) && (c.layout = d.copyWith({
                                fit: h,
                                alignment: v
                            }))
                        }
                        for (let d in a) {
                            if (d === to || d === no)
                                continue;
                            let h = p.find(v => v.name === d);
                            if (h != null)
                                switch (h.type) {
                                case o.Boolean:
                                    {
                                        if (a[d] != null) {
                                            let v = !!a[d];
                                            h.value = v
                                        }
                                        break
                                    }
                                case o.Number:
                                    {
                                        let v = t[d];
                                        v != null && (h.value = v);
                                        break
                                    }
                                case o.Trigger:
                                    {
                                        a[d] && h.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            i?.rive ? u(i.rive) : r.setLoadHandler(e, u)
        }
          , ax = (e, t) => null
    }
    );
    var oo = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        Object.defineProperty(io, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return sx
            }
        });
        var dd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function sx(e) {
            let t, n, r, i = 1, o = e.replace(/\s/g, "").toLowerCase(), a = (typeof dd[o] == "string" ? dd[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
                n = parseInt(u[1] + u[1], 16),
                r = parseInt(u[2] + u[2], 16),
                u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
                n = parseInt(u.substring(2, 4), 16),
                r = parseInt(u.substring(4, 6), 16),
                u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                n = parseInt(u[1], 10),
                r = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , c = parseFloat(u[0])
                  , g = parseFloat(u[1].replace("%", "")) / 100
                  , p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * g, h = d * (1 - Math.abs(c / 60 % 2 - 1)), v = p - d / 2, I, w, m;
                c >= 0 && c < 60 ? (I = d,
                w = h,
                m = 0) : c >= 60 && c < 120 ? (I = h,
                w = d,
                m = 0) : c >= 120 && c < 180 ? (I = 0,
                w = d,
                m = h) : c >= 180 && c < 240 ? (I = 0,
                w = h,
                m = d) : c >= 240 && c < 300 ? (I = h,
                w = 0,
                m = d) : (I = d,
                w = 0,
                m = h),
                t = Math.round((I + v) * 255),
                n = Math.round((w + v) * 255),
                r = Math.round((m + v) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","), c = parseFloat(u[0]), g = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, d = (1 - Math.abs(2 * p - 1)) * g, h = d * (1 - Math.abs(c / 60 % 2 - 1)), v = p - d / 2, I, w, m;
                c >= 0 && c < 60 ? (I = d,
                w = h,
                m = 0) : c >= 60 && c < 120 ? (I = h,
                w = d,
                m = 0) : c >= 120 && c < 180 ? (I = 0,
                w = d,
                m = h) : c >= 180 && c < 240 ? (I = 0,
                w = h,
                m = d) : c >= 240 && c < 300 ? (I = h,
                w = 0,
                m = d) : (I = d,
                w = 0,
                m = h),
                t = Math.round((I + v) * 255),
                n = Math.round((w + v) * 255),
                r = Math.round((m + v) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: n,
                blue: r,
                alpha: i
            }
        }
    }
    );
    var pd = f(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        function ux(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ux(ao, {
            clearPlugin: function() {
                return Ex
            },
            createPluginInstance: function() {
                return gx
            },
            getPluginConfig: function() {
                return lx
            },
            getPluginDestination: function() {
                return px
            },
            getPluginDuration: function() {
                return fx
            },
            getPluginOrigin: function() {
                return dx
            },
            renderPlugin: function() {
                return hx
            }
        });
        var cx = oo()
          , lx = (e, t) => e.value[t]
          , fx = () => null
          , dx = (e, t) => {
            if (e)
                return e;
            let n = t.config.value
              , r = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(r);
            if (n.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (n.red != null && n.green != null && n.blue != null)
                return (0,
                cx.normalizeColor)(i)
        }
          , px = e => e.value
          , gx = () => null
          , hx = (e, t, n) => {
            let r = n.config.target.objectId, i = n.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: s, red: a, green: u, blue: c, alpha: g} = o, p;
            s != null && (p = s + i),
            a != null && c != null && u != null && g != null && (p = `rgba(${a}, ${u}, ${c}, ${g})`),
            p != null && document.documentElement.style.setProperty(r, p)
        }
          , Ex = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n)
        }
    }
    );
    var hd = f(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        Object.defineProperty(so, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return Ix
            }
        });
        var dr = (Ne(),
        je(vs))
          , yx = pr(ud())
          , vx = pr(ld())
          , mx = pr(fd())
          , _x = pr(pd());
        function gd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (gd = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function pr(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = gd(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var Ix = new Map([[dr.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...yx
        }], [dr.ActionTypeConsts.PLUGIN_SPLINE, {
            ...vx
        }], [dr.ActionTypeConsts.PLUGIN_RIVE, {
            ...mx
        }], [dr.ActionTypeConsts.PLUGIN_VARIABLE, {
            ..._x
        }]])
    }
    );
    var Ed = {};
    Pe(Ed, {
        clearPlugin: () => go,
        createPluginInstance: () => bx,
        getPluginConfig: () => co,
        getPluginDestination: () => fo,
        getPluginDuration: () => Tx,
        getPluginOrigin: () => lo,
        isPluginType: () => mt,
        renderPlugin: () => po
    });
    function mt(e) {
        return uo.pluginMethodMap.has(e)
    }
    var uo, _t, co, lo, Tx, fo, bx, po, go, ho = ye( () => {
        "use strict";
        cr();
        uo = ce(hd());
        _t = e => t => {
            if (!He)
                return () => null;
            let n = uo.pluginMethodMap.get(t);
            if (!n)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return r
        }
        ,
        co = _t("getPluginConfig"),
        lo = _t("getPluginOrigin"),
        Tx = _t("getPluginDuration"),
        fo = _t("getPluginDestination"),
        bx = _t("createPluginInstance"),
        po = _t("renderPlugin"),
        go = _t("clearPlugin")
    }
    );
    var vd = f( (qq, yd) => {
        function Ax(e, t) {
            return e == null || e !== e ? t : e
        }
        yd.exports = Ax
    }
    );
    var _d = f( (Gq, md) => {
        function wx(e, t, n, r) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (r && o && (n = e[++i]); ++i < o; )
                n = t(n, e[i], i, e);
            return n
        }
        md.exports = wx
    }
    );
    var Td = f( (Xq, Id) => {
        function Sx(e) {
            return function(t, n, r) {
                for (var i = -1, o = Object(t), s = r(t), a = s.length; a--; ) {
                    var u = s[e ? a : ++i];
                    if (n(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        Id.exports = Sx
    }
    );
    var Ad = f( (Vq, bd) => {
        var Ox = Td()
          , xx = Ox();
        bd.exports = xx
    }
    );
    var Eo = f( (kq, wd) => {
        var Rx = Ad()
          , Cx = fn();
        function Px(e, t) {
            return e && Rx(e, t, Cx)
        }
        wd.exports = Px
    }
    );
    var Od = f( (Uq, Sd) => {
        var Lx = yt();
        function Nx(e, t) {
            return function(n, r) {
                if (n == null)
                    return n;
                if (!Lx(n))
                    return e(n, r);
                for (var i = n.length, o = t ? i : -1, s = Object(n); (t ? o-- : ++o < i) && r(s[o], o, s) !== !1; )
                    ;
                return n
            }
        }
        Sd.exports = Nx
    }
    );
    var yo = f( (Bq, xd) => {
        var Dx = Eo()
          , Mx = Od()
          , Fx = Mx(Dx);
        xd.exports = Fx
    }
    );
    var Cd = f( (Hq, Rd) => {
        function qx(e, t, n, r, i) {
            return i(e, function(o, s, a) {
                n = r ? (r = !1,
                o) : t(n, o, s, a)
            }),
            n
        }
        Rd.exports = qx
    }
    );
    var Ld = f( (Wq, Pd) => {
        var Gx = _d()
          , Xx = yo()
          , Vx = ft()
          , kx = Cd()
          , Ux = be();
        function Bx(e, t, n) {
            var r = Ux(e) ? Gx : kx
              , i = arguments.length < 3;
            return r(e, Vx(t, 4), n, i, Xx)
        }
        Pd.exports = Bx
    }
    );
    var Dd = f( (zq, Nd) => {
        var Hx = Wi()
          , Wx = ft()
          , zx = zi()
          , jx = Math.max
          , Kx = Math.min;
        function Yx(e, t, n) {
            var r = e == null ? 0 : e.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== void 0 && (i = zx(n),
            i = n < 0 ? jx(r + i, 0) : Kx(i, r - 1)),
            Hx(e, Wx(t, 3), i, !0)
        }
        Nd.exports = Yx
    }
    );
    var Fd = f( (jq, Md) => {
        var Qx = Hi()
          , $x = Dd()
          , Zx = Qx($x);
        Md.exports = Zx
    }
    );
    function qd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function Jx(e, t) {
        if (qd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (let i = 0; i < n.length; i++)
            if (!Object.hasOwn(t, n[i]) || !qd(e[n[i]], t[n[i]]))
                return !1;
        return !0
    }
    var vo, Gd = ye( () => {
        "use strict";
        vo = Jx
    }
    );
    var np = {};
    Pe(np, {
        cleanupHTMLElement: () => QR,
        clearAllStyles: () => YR,
        clearObjectCache: () => ER,
        getActionListProgress: () => ZR,
        getAffectedElements: () => bo,
        getComputedStyle: () => AR,
        getDestinationValues: () => PR,
        getElementId: () => _R,
        getInstanceId: () => vR,
        getInstanceOrigin: () => OR,
        getItemConfigByKey: () => CR,
        getMaxDurationItemIndex: () => tp,
        getNamespacedParameterId: () => tC,
        getRenderType: () => Zd,
        getStyleProp: () => LR,
        mediaQueriesEqual: () => rC,
        observeStore: () => bR,
        reduceListToGroup: () => JR,
        reifyState: () => IR,
        renderHTMLElement: () => NR,
        shallowEqual: () => vo,
        shouldAllowMediaQuery: () => nC,
        shouldNamespaceEventParameter: () => eC,
        stringifyTarget: () => iC
    });
    function ER() {
        gr.clear()
    }
    function vR() {
        return "i" + yR++
    }
    function _R(e, t) {
        for (let n in e) {
            let r = e[n];
            if (r && r.ref === t)
                return r.id
        }
        return "e" + mR++
    }
    function IR({events: e, actionLists: t, site: n}={}) {
        let r = (0,
        vr.default)(e, (s, a) => {
            let {eventTypeId: u} = a;
            return s[u] || (s[u] = {}),
            s[u][a.id] = a,
            s
        }
        , {})
          , i = n && n.mediaQueries
          , o = [];
        return i ? o = i.map(s => s.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: r,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function bR({store: e, select: t, onChange: n, comparator: r=TR}) {
        let {getState: i, subscribe: o} = e
          , s = o(u)
          , a = t(i());
        function u() {
            let c = t(i());
            if (c == null) {
                s();
                return
            }
            r(c, a) || (a = c,
            n(a, e))
        }
        return s
    }
    function kd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: s, useEventTarget: a} = e;
            return {
                id: n,
                objectId: r,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }
    function bo({config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (D, b) => D.concat(bo({
                config: {
                    target: b
                },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: i
            })), []);
        let {getValidDocument: s, getQuerySelector: a, queryDocument: u, getChildElements: c, getSiblingElements: g, matchSelector: p, elementContains: d, isSiblingNode: h} = i
          , {target: v} = e;
        if (!v)
            return [];
        let {id: I, objectId: w, selector: m, selectorGuids: x, appliesTo: S, useEventTarget: C} = kd(v);
        if (w)
            return [gr.has(w) ? gr.get(w) : gr.set(w, {}).get(w)];
        if (S === Ei.PAGE) {
            let D = s(I);
            return D ? [D] : []
        }
        let R = (t?.action?.config?.affectedElements ?? {})[I || m] || {}, V = !!(R.id || R.selector), B, W, Y, ne = t && a(kd(t.target));
        if (V ? (B = R.limitAffectedElements,
        W = ne,
        Y = a(R)) : W = Y = a({
            id: I,
            selector: m,
            selectorGuids: x
        }),
        t && C) {
            let D = n && (Y || C === !0) ? [n] : u(ne);
            if (Y) {
                if (C === pR)
                    return u(Y).filter(b => D.some(L => d(b, L)));
                if (C === Xd)
                    return u(Y).filter(b => D.some(L => d(L, b)));
                if (C === Vd)
                    return u(Y).filter(b => D.some(L => h(L, b)))
            }
            return D
        }
        return W == null || Y == null ? [] : He && r ? u(Y).filter(D => r.contains(D)) : B === Xd ? u(W, Y) : B === dR ? c(u(W)).filter(p(Y)) : B === Vd ? g(u(W)).filter(p(Y)) : u(Y)
    }
    function AR({element: e, actionItem: t}) {
        if (!He)
            return {};
        let {actionTypeId: n} = t;
        switch (n) {
        case Bt:
        case Ht:
        case Wt:
        case zt:
        case _r:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function OR(e, t={}, n={}, r, i) {
        let {getStyle: o} = i
          , {actionTypeId: s} = r;
        if (mt(s))
            return lo(s)(t[s], r);
        switch (r.actionTypeId) {
        case Vt:
        case kt:
        case Ut:
        case In:
            return t[r.actionTypeId] || Ao[r.actionTypeId];
        case Tn:
            return wR(t[r.actionTypeId], r.config.filters);
        case bn:
            return SR(t[r.actionTypeId], r.config.fontVariations);
        case Yd:
            return {
                value: (0,
                ot.default)(parseFloat(o(e, Er)), 1)
            };
        case Bt:
            {
                let a = o(e, Ze), u = o(e, Je), c, g;
                return r.config.widthUnit === pt ? c = Ud.test(a) ? parseFloat(a) : parseFloat(n.width) : c = (0,
                ot.default)(parseFloat(a), parseFloat(n.width)),
                r.config.heightUnit === pt ? g = Ud.test(u) ? parseFloat(u) : parseFloat(n.height) : g = (0,
                ot.default)(parseFloat(u), parseFloat(n.height)),
                {
                    widthValue: c,
                    heightValue: g
                }
            }
        case Ht:
        case Wt:
        case zt:
            return zR({
                element: e,
                actionTypeId: r.actionTypeId,
                computedStyle: n,
                getStyle: o
            });
        case _r:
            return {
                value: (0,
                ot.default)(o(e, yr), n.display)
            };
        case hR:
            return t[r.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function PR({element: e, actionItem: t, elementApi: n}) {
        if (mt(t.actionTypeId))
            return fo(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Vt:
        case kt:
        case Ut:
        case In:
            {
                let {xValue: r, yValue: i, zValue: o} = t.config;
                return {
                    xValue: r,
                    yValue: i,
                    zValue: o
                }
            }
        case Bt:
            {
                let {getStyle: r, setStyle: i, getProperty: o} = n
                  , {widthUnit: s, heightUnit: a} = t.config
                  , {widthValue: u, heightValue: c} = t.config;
                if (!He)
                    return {
                        widthValue: u,
                        heightValue: c
                    };
                if (s === pt) {
                    let g = r(e, Ze);
                    i(e, Ze, ""),
                    u = o(e, "offsetWidth"),
                    i(e, Ze, g)
                }
                if (a === pt) {
                    let g = r(e, Je);
                    i(e, Je, ""),
                    c = o(e, "offsetHeight"),
                    i(e, Je, g)
                }
                return {
                    widthValue: u,
                    heightValue: c
                }
            }
        case Ht:
        case Wt:
        case zt:
            {
                let {rValue: r, gValue: i, bValue: o, aValue: s, globalSwatchId: a} = t.config;
                if (a && a.startsWith("--")) {
                    let {getStyle: u} = n
                      , c = u(e, a)
                      , g = (0,
                    Wd.normalizeColor)(c);
                    return {
                        rValue: g.red,
                        gValue: g.green,
                        bValue: g.blue,
                        aValue: g.alpha
                    }
                }
                return {
                    rValue: r,
                    gValue: i,
                    bValue: o,
                    aValue: s
                }
            }
        case Tn:
            return t.config.filters.reduce(xR, {});
        case bn:
            return t.config.fontVariations.reduce(RR, {});
        default:
            {
                let {value: r} = t.config;
                return {
                    value: r
                }
            }
        }
    }
    function Zd(e) {
        if (/^TRANSFORM_/.test(e))
            return jd;
        if (/^STYLE_/.test(e))
            return Io;
        if (/^GENERAL_/.test(e))
            return _o;
        if (/^PLUGIN_/.test(e))
            return Kd
    }
    function LR(e, t) {
        return e === Io ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function NR(e, t, n, r, i, o, s, a, u) {
        switch (a) {
        case jd:
            return GR(e, t, n, i, s);
        case Io:
            return jR(e, t, n, i, o, s);
        case _o:
            return KR(e, i, s);
        case Kd:
            {
                let {actionTypeId: c} = i;
                if (mt(c))
                    return po(c)(u, t, i)
            }
        }
    }
    function GR(e, t, n, r, i) {
        let o = qR.map(a => {
            let u = Ao[a]
              , {xValue: c=u.xValue, yValue: g=u.yValue, zValue: p=u.zValue, xUnit: d="", yUnit: h="", zUnit: v=""} = t[a] || {};
            switch (a) {
            case Vt:
                return `${nR}(${c}${d}, ${g}${h}, ${p}${v})`;
            case kt:
                return `${rR}(${c}${d}, ${g}${h}, ${p}${v})`;
            case Ut:
                return `${iR}(${c}${d}) ${oR}(${g}${h}) ${aR}(${p}${v})`;
            case In:
                return `${sR}(${c}${d}, ${g}${h})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: s} = i;
        It(e, dt, i),
        s(e, dt, o),
        kR(r, n) && s(e, ur, uR)
    }
    function XR(e, t, n, r) {
        let i = (0,
        vr.default)(t, (s, a, u) => `${s} ${u}(${a}${FR(u, n)})`, "")
          , {setStyle: o} = r;
        It(e, vn, r),
        o(e, vn, i)
    }
    function VR(e, t, n, r) {
        let i = (0,
        vr.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`),
        s), []).join(", ")
          , {setStyle: o} = r;
        It(e, mn, r),
        o(e, mn, i)
    }
    function kR({actionTypeId: e}, {xValue: t, yValue: n, zValue: r}) {
        return e === Vt && r !== void 0 || e === kt && r !== void 0 || e === Ut && (t !== void 0 || n !== void 0)
    }
    function WR(e, t) {
        let n = e.exec(t);
        return n ? n[1] : ""
    }
    function zR({element: e, actionTypeId: t, computedStyle: n, getStyle: r}) {
        let i = To[t]
          , o = r(e, i)
          , s = BR.test(o) ? o : n[i]
          , a = WR(HR, s).split(_n);
        return {
            rValue: (0,
            ot.default)(parseInt(a[0], 10), 255),
            gValue: (0,
            ot.default)(parseInt(a[1], 10), 255),
            bValue: (0,
            ot.default)(parseInt(a[2], 10), 255),
            aValue: (0,
            ot.default)(parseFloat(a[3]), 1)
        }
    }
    function jR(e, t, n, r, i, o) {
        let {setStyle: s} = o;
        switch (r.actionTypeId) {
        case Bt:
            {
                let {widthUnit: a="", heightUnit: u=""} = r.config
                  , {widthValue: c, heightValue: g} = n;
                c !== void 0 && (a === pt && (a = "px"),
                It(e, Ze, o),
                s(e, Ze, c + a)),
                g !== void 0 && (u === pt && (u = "px"),
                It(e, Je, o),
                s(e, Je, g + u));
                break
            }
        case Tn:
            {
                XR(e, n, r.config, o);
                break
            }
        case bn:
            {
                VR(e, n, r.config, o);
                break
            }
        case Ht:
        case Wt:
        case zt:
            {
                let a = To[r.actionTypeId]
                  , u = Math.round(n.rValue)
                  , c = Math.round(n.gValue)
                  , g = Math.round(n.bValue)
                  , p = n.aValue;
                It(e, a, o),
                s(e, a, p >= 1 ? `rgb(${u},${c},${g})` : `rgba(${u},${c},${g},${p})`);
                break
            }
        default:
            {
                let {unit: a=""} = r.config;
                It(e, i, o),
                s(e, i, n.value + a);
                break
            }
        }
    }
    function KR(e, t, n) {
        let {setStyle: r} = n;
        switch (t.actionTypeId) {
        case _r:
            {
                let {value: i} = t.config;
                i === cR && He ? r(e, yr, Ki) : r(e, yr, i);
                return
            }
        }
    }
    function It(e, t, n) {
        if (!He)
            return;
        let r = $d[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , s = i(e, Xt);
        if (!s) {
            o(e, Xt, r);
            return
        }
        let a = s.split(_n).map(Qd);
        a.indexOf(r) === -1 && o(e, Xt, a.concat(r).join(_n))
    }
    function Jd(e, t, n) {
        if (!He)
            return;
        let r = $d[t];
        if (!r)
            return;
        let {getStyle: i, setStyle: o} = n
          , s = i(e, Xt);
        !s || s.indexOf(r) === -1 || o(e, Xt, s.split(_n).map(Qd).filter(a => a !== r).join(_n))
    }
    function YR({store: e, elementApi: t}) {
        let {ixData: n} = e.getState()
          , {events: r={}, actionLists: i={}} = n;
        Object.keys(r).forEach(o => {
            let s = r[o]
              , {config: a} = s.action
              , {actionListId: u} = a
              , c = i[u];
            c && Bd({
                actionList: c,
                event: s,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Bd({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Bd({actionList: e={}, event: t, elementApi: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e;
        r && r.forEach(o => {
            Hd({
                actionGroup: o,
                event: t,
                elementApi: n
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: s} = o;
            s.forEach(a => {
                Hd({
                    actionGroup: a,
                    event: t,
                    elementApi: n
                })
            }
            )
        }
        )
    }
    function Hd({actionGroup: e, event: t, elementApi: n}) {
        let {actionItems: r} = e;
        r.forEach(i => {
            let {actionTypeId: o, config: s} = i, a;
            mt(o) ? a = u => go(o)(u, i) : a = ep({
                effect: $R,
                actionTypeId: o,
                elementApi: n
            }),
            bo({
                config: s,
                event: t,
                elementApi: n
            }).forEach(a)
        }
        )
    }
    function QR(e, t, n) {
        let {setStyle: r, getStyle: i} = n
          , {actionTypeId: o} = t;
        if (o === Bt) {
            let {config: s} = t;
            s.widthUnit === pt && r(e, Ze, ""),
            s.heightUnit === pt && r(e, Je, "")
        }
        i(e, Xt) && ep({
            effect: Jd,
            actionTypeId: o,
            elementApi: n
        })(e)
    }
    function $R(e, t, n) {
        let {setStyle: r} = n;
        Jd(e, t, n),
        r(e, t, ""),
        t === dt && r(e, ur, "")
    }
    function tp(e) {
        let t = 0
          , n = 0;
        return e.forEach( (r, i) => {
            let {config: o} = r
              , s = o.delay + o.duration;
            s >= t && (t = s,
            n = i)
        }
        ),
        n
    }
    function ZR(e, t) {
        let {actionItemGroups: n, useFirstGroupAsInitialState: r} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , s = 0
          , a = 0;
        return n.forEach( (u, c) => {
            if (r && c === 0)
                return;
            let {actionItems: g} = u
              , p = g[tp(g)]
              , {config: d, actionTypeId: h} = p;
            i.id === p.id && (a = s + o);
            let v = Zd(h) === _o ? 0 : d.duration;
            s += d.delay + v
        }
        ),
        s > 0 ? yn(a / s) : 0
    }
    function JR({actionList: e, actionItemId: t, rawData: n}) {
        let {actionItemGroups: r, continuousParameterGroups: i} = e
          , o = []
          , s = a => (o.push((0,
        mr.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })),
        a.id === t);
        return r && r.some( ({actionItems: a}) => a.some(s)),
        i && i.some(a => {
            let {continuousActionGroups: u} = a;
            return u.some( ({actionItems: c}) => c.some(s))
        }
        ),
        (0,
        mr.setIn)(n, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function eC(e, {basedOn: t}) {
        return e === Be.SCROLLING_IN_VIEW && (t === Qe.ELEMENT || t == null) || e === Be.MOUSE_MOVE && t === Qe.ELEMENT
    }
    function tC(e, t) {
        return e + gR + t
    }
    function nC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function rC(e, t) {
        return vo(e && e.sort(), t && t.sort())
    }
    function iC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + mo + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: n="", useEventTarget: r=""} = e;
        return t + mo + n + mo + r
    }
    var ot, vr, hr, mr, Wd, eR, tR, nR, rR, iR, oR, aR, sR, uR, cR, Er, vn, mn, Ze, Je, zd, lR, fR, Xd, dR, Vd, pR, yr, Xt, pt, _n, gR, mo, jd, _o, Io, Kd, Vt, kt, Ut, In, Yd, Tn, bn, Bt, Ht, Wt, zt, _r, hR, Qd, To, $d, gr, yR, mR, TR, Ud, wR, SR, xR, RR, CR, Ao, DR, MR, FR, qR, UR, BR, HR, ep, rp = ye( () => {
        "use strict";
        ot = ce(vd()),
        vr = ce(Ld()),
        hr = ce(Fd()),
        mr = ce(Rt());
        Ne();
        Gd();
        $i();
        Wd = ce(oo());
        ho();
        cr();
        ({BACKGROUND: eR, TRANSFORM: tR, TRANSLATE_3D: nR, SCALE_3D: rR, ROTATE_X: iR, ROTATE_Y: oR, ROTATE_Z: aR, SKEW: sR, PRESERVE_3D: uR, FLEX: cR, OPACITY: Er, FILTER: vn, FONT_VARIATION_SETTINGS: mn, WIDTH: Ze, HEIGHT: Je, BACKGROUND_COLOR: zd, BORDER_COLOR: lR, COLOR: fR, CHILDREN: Xd, IMMEDIATE_CHILDREN: dR, SIBLINGS: Vd, PARENT: pR, DISPLAY: yr, WILL_CHANGE: Xt, AUTO: pt, COMMA_DELIMITER: _n, COLON_DELIMITER: gR, BAR_DELIMITER: mo, RENDER_TRANSFORM: jd, RENDER_GENERAL: _o, RENDER_STYLE: Io, RENDER_PLUGIN: Kd} = we),
        {TRANSFORM_MOVE: Vt, TRANSFORM_SCALE: kt, TRANSFORM_ROTATE: Ut, TRANSFORM_SKEW: In, STYLE_OPACITY: Yd, STYLE_FILTER: Tn, STYLE_FONT_VARIATION: bn, STYLE_SIZE: Bt, STYLE_BACKGROUND_COLOR: Ht, STYLE_BORDER: Wt, STYLE_TEXT_COLOR: zt, GENERAL_DISPLAY: _r, OBJECT_VALUE: hR} = Le,
        Qd = e => e.trim(),
        To = Object.freeze({
            [Ht]: zd,
            [Wt]: lR,
            [zt]: fR
        }),
        $d = Object.freeze({
            [dt]: tR,
            [zd]: eR,
            [Er]: Er,
            [vn]: vn,
            [Ze]: Ze,
            [Je]: Je,
            [mn]: mn
        }),
        gr = new Map;
        yR = 1;
        mR = 1;
        TR = (e, t) => e === t;
        Ud = /px/,
        wR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = DR[r.type]),
        n), e || {}),
        SR = (e, t) => t.reduce( (n, r) => (n[r.type] == null && (n[r.type] = MR[r.type] || r.defaultValue || 0),
        n), e || {});
        xR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        RR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        CR = (e, t, n) => {
            if (mt(e))
                return co(e)(n, t);
            switch (e) {
            case Tn:
                {
                    let r = (0,
                    hr.default)(n.filters, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            case bn:
                {
                    let r = (0,
                    hr.default)(n.fontVariations, ({type: i}) => i === t);
                    return r ? r.value : 0
                }
            default:
                return n[t]
            }
        }
        ;
        Ao = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [kt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Ut]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [In]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        DR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        MR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        FR = (e, t) => {
            let n = (0,
            hr.default)(t.filters, ({type: r}) => r === e);
            if (n && n.unit)
                return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        qR = Object.keys(Ao);
        UR = "\\(([^)]+)\\)",
        BR = /^rgb/,
        HR = RegExp(`rgba?${UR}`);
        ep = ({effect: e, actionTypeId: t, elementApi: n}) => r => {
            switch (t) {
            case Vt:
            case kt:
            case Ut:
            case In:
                e(r, dt, n);
                break;
            case Tn:
                e(r, vn, n);
                break;
            case bn:
                e(r, mn, n);
                break;
            case Yd:
                e(r, Er, n);
                break;
            case Bt:
                e(r, Ze, n),
                e(r, Je, n);
                break;
            case Ht:
            case Wt:
            case zt:
                e(r, To[t], n);
                break;
            case _r:
                e(r, yr, n);
                break
            }
        }
    }
    );
    var Tt = f(wo => {
        "use strict";
        Object.defineProperty(wo, "__esModule", {
            value: !0
        });
        function oC(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        oC(wo, {
            IX2BrowserSupport: function() {
                return aC
            },
            IX2EasingUtils: function() {
                return uC
            },
            IX2Easings: function() {
                return sC
            },
            IX2ElementsReducer: function() {
                return cC
            },
            IX2VanillaPlugins: function() {
                return lC
            },
            IX2VanillaUtils: function() {
                return fC
            }
        });
        var aC = jt((cr(),
        je(Qf)))
          , sC = jt((Qi(),
        je(En)))
          , uC = jt(($i(),
        je(rd)))
          , cC = jt((sd(),
        je(ad)))
          , lC = jt((ho(),
        je(Ed)))
          , fC = jt((rp(),
        je(np)));
        function ip(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (ip = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function jt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = ip(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
    }
    );
    var Tr, at, dC, pC, gC, hC, EC, yC, Ir, op, vC, mC, So, _C, IC, TC, bC, ap, sp = ye( () => {
        "use strict";
        Ne();
        Tr = ce(Tt()),
        at = ce(Rt()),
        {IX2_RAW_DATA_IMPORTED: dC, IX2_SESSION_STOPPED: pC, IX2_INSTANCE_ADDED: gC, IX2_INSTANCE_STARTED: hC, IX2_INSTANCE_REMOVED: EC, IX2_ANIMATION_FRAME_CHANGED: yC} = Te,
        {optimizeFloat: Ir, applyEasing: op, createBezierEasing: vC} = Tr.IX2EasingUtils,
        {RENDER_GENERAL: mC} = we,
        {getItemConfigByKey: So, getRenderType: _C, getStyleProp: IC} = Tr.IX2VanillaUtils,
        TC = (e, t) => {
            let {position: n, parameterId: r, actionGroups: i, destinationKeys: o, smoothing: s, restingValue: a, actionTypeId: u, customEasingFn: c, skipMotion: g, skipToValue: p} = e
              , {parameters: d} = t.payload
              , h = Math.max(1 - s, .01)
              , v = d[r];
            v == null && (h = 1,
            v = a);
            let I = Math.max(v, 0) || 0
              , w = Ir(I - n)
              , m = g ? p : Ir(n + w * h)
              , x = m * 100;
            if (m === n && e.current)
                return e;
            let S, C, P, R;
            for (let B = 0, {length: W} = i; B < W; B++) {
                let {keyframe: Y, actionItems: ne} = i[B];
                if (B === 0 && (S = ne[0]),
                x >= Y) {
                    S = ne[0];
                    let D = i[B + 1]
                      , b = D && x !== Y;
                    C = b ? D.actionItems[0] : null,
                    b && (P = Y / 100,
                    R = (D.keyframe - Y) / 100)
                }
            }
            let V = {};
            if (S && !C)
                for (let B = 0, {length: W} = o; B < W; B++) {
                    let Y = o[B];
                    V[Y] = So(u, Y, S.config)
                }
            else if (S && C && P !== void 0 && R !== void 0) {
                let B = (m - P) / R
                  , W = S.config.easing
                  , Y = op(W, B, c);
                for (let ne = 0, {length: D} = o; ne < D; ne++) {
                    let b = o[ne]
                      , L = So(u, b, S.config)
                      , ee = (So(u, b, C.config) - L) * Y + L;
                    V[b] = ee
                }
            }
            return (0,
            at.merge)(e, {
                position: m,
                current: V
            })
        }
        ,
        bC = (e, t) => {
            let {active: n, origin: r, start: i, immediate: o, renderType: s, verbose: a, actionItem: u, destination: c, destinationKeys: g, pluginDuration: p, instanceDelay: d, customEasingFn: h, skipMotion: v} = e
              , I = u.config.easing
              , {duration: w, delay: m} = u.config;
            p != null && (w = p),
            m = d ?? m,
            s === mC ? w = 0 : (o || v) && (w = m = 0);
            let {now: x} = t.payload;
            if (n && r) {
                let S = x - (i + m);
                if (a) {
                    let B = x - i
                      , W = w + m
                      , Y = Ir(Math.min(Math.max(0, B / W), 1));
                    e = (0,
                    at.set)(e, "verboseTimeElapsed", W * Y)
                }
                if (S < 0)
                    return e;
                let C = Ir(Math.min(Math.max(0, S / w), 1))
                  , P = op(I, C, h)
                  , R = {}
                  , V = null;
                return g.length && (V = g.reduce( (B, W) => {
                    let Y = c[W]
                      , ne = parseFloat(r[W]) || 0
                      , b = (parseFloat(Y) - ne) * P + ne;
                    return B[W] = b,
                    B
                }
                , {})),
                R.current = V,
                R.position = C,
                C === 1 && (R.active = !1,
                R.complete = !0),
                (0,
                at.merge)(e, R)
            }
            return e
        }
        ,
        ap = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case dC:
                return t.payload.ixInstances || Object.freeze({});
            case pC:
                return Object.freeze({});
            case gC:
                {
                    let {instanceId: n, elementId: r, actionItem: i, eventId: o, eventTarget: s, eventStateKey: a, actionListId: u, groupIndex: c, isCarrier: g, origin: p, destination: d, immediate: h, verbose: v, continuous: I, parameterId: w, actionGroups: m, smoothing: x, restingValue: S, pluginInstance: C, pluginDuration: P, instanceDelay: R, skipMotion: V, skipToValue: B} = t.payload
                      , {actionTypeId: W} = i
                      , Y = _C(W)
                      , ne = IC(Y, W)
                      , D = Object.keys(d).filter(L => d[L] != null && typeof d[L] != "string")
                      , {easing: b} = i.config;
                    return (0,
                    at.set)(e, n, {
                        id: n,
                        elementId: r,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: d,
                        destinationKeys: D,
                        immediate: h,
                        verbose: v,
                        current: null,
                        actionItem: i,
                        actionTypeId: W,
                        eventId: o,
                        eventTarget: s,
                        eventStateKey: a,
                        actionListId: u,
                        groupIndex: c,
                        renderType: Y,
                        isCarrier: g,
                        styleProp: ne,
                        continuous: I,
                        parameterId: w,
                        actionGroups: m,
                        smoothing: x,
                        restingValue: S,
                        pluginInstance: C,
                        pluginDuration: P,
                        instanceDelay: R,
                        skipMotion: V,
                        skipToValue: B,
                        customEasingFn: Array.isArray(b) && b.length === 4 ? vC(b) : void 0
                    })
                }
            case hC:
                {
                    let {instanceId: n, time: r} = t.payload;
                    return (0,
                    at.mergeIn)(e, [n], {
                        active: !0,
                        complete: !1,
                        start: r
                    })
                }
            case EC:
                {
                    let {instanceId: n} = t.payload;
                    if (!e[n])
                        return e;
                    let r = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let s = 0; s < o; s++) {
                        let a = i[s];
                        a !== n && (r[a] = e[a])
                    }
                    return r
                }
            case yC:
                {
                    let n = e
                      , r = Object.keys(e)
                      , {length: i} = r;
                    for (let o = 0; o < i; o++) {
                        let s = r[o]
                          , a = e[s]
                          , u = a.continuous ? TC : bC;
                        n = (0,
                        at.set)(n, s, u(a, t))
                    }
                    return n
                }
            default:
                return e
            }
        }
    }
    );
    var AC, wC, SC, up, cp = ye( () => {
        "use strict";
        Ne();
        ({IX2_RAW_DATA_IMPORTED: AC, IX2_SESSION_STOPPED: wC, IX2_PARAMETER_CHANGED: SC} = Te),
        up = (e={}, t) => {
            switch (t.type) {
            case AC:
                return t.payload.ixParameters || {};
            case wC:
                return {};
            case SC:
                {
                    let {key: n, value: r} = t.payload;
                    return e[n] = r,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var dp = {};
    Pe(dp, {
        default: () => xC
    });
    var lp, fp, OC, xC, pp = ye( () => {
        "use strict";
        lp = ce(hi());
        _s();
        ks();
        Hs();
        fp = ce(Tt());
        sp();
        cp();
        ({ixElements: OC} = fp.IX2ElementsReducer),
        xC = (0,
        lp.combineReducers)({
            ixData: ms,
            ixRequest: Vs,
            ixSession: Bs,
            ixElements: OC,
            ixInstances: ap,
            ixParameters: up
        })
    }
    );
    var hp = f( (fG, gp) => {
        var RC = ct()
          , CC = be()
          , PC = rt()
          , LC = "[object String]";
        function NC(e) {
            return typeof e == "string" || !CC(e) && PC(e) && RC(e) == LC
        }
        gp.exports = NC
    }
    );
    var yp = f( (dG, Ep) => {
        var DC = Bi()
          , MC = DC("length");
        Ep.exports = MC
    }
    );
    var mp = f( (pG, vp) => {
        var FC = "\\ud800-\\udfff"
          , qC = "\\u0300-\\u036f"
          , GC = "\\ufe20-\\ufe2f"
          , XC = "\\u20d0-\\u20ff"
          , VC = qC + GC + XC
          , kC = "\\ufe0e\\ufe0f"
          , UC = "\\u200d"
          , BC = RegExp("[" + UC + FC + VC + kC + "]");
        function HC(e) {
            return BC.test(e)
        }
        vp.exports = HC
    }
    );
    var xp = f( (gG, Op) => {
        var Ip = "\\ud800-\\udfff"
          , WC = "\\u0300-\\u036f"
          , zC = "\\ufe20-\\ufe2f"
          , jC = "\\u20d0-\\u20ff"
          , KC = WC + zC + jC
          , YC = "\\ufe0e\\ufe0f"
          , QC = "[" + Ip + "]"
          , Oo = "[" + KC + "]"
          , xo = "\\ud83c[\\udffb-\\udfff]"
          , $C = "(?:" + Oo + "|" + xo + ")"
          , Tp = "[^" + Ip + "]"
          , bp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Ap = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , ZC = "\\u200d"
          , wp = $C + "?"
          , Sp = "[" + YC + "]?"
          , JC = "(?:" + ZC + "(?:" + [Tp, bp, Ap].join("|") + ")" + Sp + wp + ")*"
          , eP = Sp + wp + JC
          , tP = "(?:" + [Tp + Oo + "?", Oo, bp, Ap, QC].join("|") + ")"
          , _p = RegExp(xo + "(?=" + xo + ")|" + tP + eP, "g");
        function nP(e) {
            for (var t = _p.lastIndex = 0; _p.test(e); )
                ++t;
            return t
        }
        Op.exports = nP
    }
    );
    var Cp = f( (hG, Rp) => {
        var rP = yp()
          , iP = mp()
          , oP = xp();
        function aP(e) {
            return iP(e) ? oP(e) : rP(e)
        }
        Rp.exports = aP
    }
    );
    var Lp = f( (EG, Pp) => {
        var sP = Jn()
          , uP = er()
          , cP = yt()
          , lP = hp()
          , fP = Cp()
          , dP = "[object Map]"
          , pP = "[object Set]";
        function gP(e) {
            if (e == null)
                return 0;
            if (cP(e))
                return lP(e) ? fP(e) : e.length;
            var t = uP(e);
            return t == dP || t == pP ? e.size : sP(e).length
        }
        Pp.exports = gP
    }
    );
    var Dp = f( (yG, Np) => {
        var hP = "Expected a function";
        function EP(e) {
            if (typeof e != "function")
                throw new TypeError(hP);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Np.exports = EP
    }
    );
    var Ro = f( (vG, Mp) => {
        var yP = lt()
          , vP = function() {
            try {
                var e = yP(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Mp.exports = vP
    }
    );
    var Co = f( (mG, qp) => {
        var Fp = Ro();
        function mP(e, t, n) {
            t == "__proto__" && Fp ? Fp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }
        qp.exports = mP
    }
    );
    var Xp = f( (_G, Gp) => {
        var _P = Co()
          , IP = Bn()
          , TP = Object.prototype
          , bP = TP.hasOwnProperty;
        function AP(e, t, n) {
            var r = e[t];
            (!(bP.call(e, t) && IP(r, n)) || n === void 0 && !(t in e)) && _P(e, t, n)
        }
        Gp.exports = AP
    }
    );
    var Up = f( (IG, kp) => {
        var wP = Xp()
          , SP = pn()
          , OP = Yn()
          , Vp = $e()
          , xP = qt();
        function RP(e, t, n, r) {
            if (!Vp(e))
                return e;
            t = SP(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o; ) {
                var u = xP(t[i])
                  , c = n;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != s) {
                    var g = a[u];
                    c = r ? r(g, u, a) : void 0,
                    c === void 0 && (c = Vp(g) ? g : OP(t[i + 1]) ? [] : {})
                }
                wP(a, u, c),
                a = a[u]
            }
            return e
        }
        kp.exports = RP
    }
    );
    var Hp = f( (TG, Bp) => {
        var CP = rr()
          , PP = Up()
          , LP = pn();
        function NP(e, t, n) {
            for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                var s = t[r]
                  , a = CP(e, s);
                n(a, s) && PP(o, LP(s, e), a)
            }
            return o
        }
        Bp.exports = NP
    }
    );
    var zp = f( (bG, Wp) => {
        var DP = jn()
          , MP = ni()
          , FP = xi()
          , qP = Oi()
          , GP = Object.getOwnPropertySymbols
          , XP = GP ? function(e) {
            for (var t = []; e; )
                DP(t, FP(e)),
                e = MP(e);
            return t
        }
        : qP;
        Wp.exports = XP
    }
    );
    var Kp = f( (AG, jp) => {
        function VP(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e))
                    t.push(n);
            return t
        }
        jp.exports = VP
    }
    );
    var Qp = f( (wG, Yp) => {
        var kP = $e()
          , UP = Zn()
          , BP = Kp()
          , HP = Object.prototype
          , WP = HP.hasOwnProperty;
        function zP(e) {
            if (!kP(e))
                return BP(e);
            var t = UP(e)
              , n = [];
            for (var r in e)
                r == "constructor" && (t || !WP.call(e, r)) || n.push(r);
            return n
        }
        Yp.exports = zP
    }
    );
    var Zp = f( (SG, $p) => {
        var jP = Ci()
          , KP = Qp()
          , YP = yt();
        function QP(e) {
            return YP(e) ? jP(e, !0) : KP(e)
        }
        $p.exports = QP
    }
    );
    var eg = f( (OG, Jp) => {
        var $P = Si()
          , ZP = zp()
          , JP = Zp();
        function eL(e) {
            return $P(e, JP, ZP)
        }
        Jp.exports = eL
    }
    );
    var ng = f( (xG, tg) => {
        var tL = Ui()
          , nL = ft()
          , rL = Hp()
          , iL = eg();
        function oL(e, t) {
            if (e == null)
                return {};
            var n = tL(iL(e), function(r) {
                return [r]
            });
            return t = nL(t),
            rL(e, n, function(r, i) {
                return t(r, i[0])
            })
        }
        tg.exports = oL
    }
    );
    var ig = f( (RG, rg) => {
        var aL = ft()
          , sL = Dp()
          , uL = ng();
        function cL(e, t) {
            return uL(e, sL(aL(t)))
        }
        rg.exports = cL
    }
    );
    var ag = f( (CG, og) => {
        var lL = Jn()
          , fL = er()
          , dL = sn()
          , pL = be()
          , gL = yt()
          , hL = Kn()
          , EL = Zn()
          , yL = $n()
          , vL = "[object Map]"
          , mL = "[object Set]"
          , _L = Object.prototype
          , IL = _L.hasOwnProperty;
        function TL(e) {
            if (e == null)
                return !0;
            if (gL(e) && (pL(e) || typeof e == "string" || typeof e.splice == "function" || hL(e) || yL(e) || dL(e)))
                return !e.length;
            var t = fL(e);
            if (t == vL || t == mL)
                return !e.size;
            if (EL(e))
                return !lL(e).length;
            for (var n in e)
                if (IL.call(e, n))
                    return !1;
            return !0
        }
        og.exports = TL
    }
    );
    var ug = f( (PG, sg) => {
        var bL = Co()
          , AL = Eo()
          , wL = ft();
        function SL(e, t) {
            var n = {};
            return t = wL(t, 3),
            AL(e, function(r, i, o) {
                bL(n, i, t(r, i, o))
            }),
            n
        }
        sg.exports = SL
    }
    );
    var lg = f( (LG, cg) => {
        function OL(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        cg.exports = OL
    }
    );
    var dg = f( (NG, fg) => {
        var xL = or();
        function RL(e) {
            return typeof e == "function" ? e : xL
        }
        fg.exports = RL
    }
    );
    var gg = f( (DG, pg) => {
        var CL = lg()
          , PL = yo()
          , LL = dg()
          , NL = be();
        function DL(e, t) {
            var n = NL(e) ? CL : PL;
            return n(e, LL(t))
        }
        pg.exports = DL
    }
    );
    var Eg = f( (MG, hg) => {
        var ML = Ue()
          , FL = function() {
            return ML.Date.now()
        };
        hg.exports = FL
    }
    );
    var mg = f( (FG, vg) => {
        var qL = $e()
          , Po = Eg()
          , yg = ar()
          , GL = "Expected a function"
          , XL = Math.max
          , VL = Math.min;
        function kL(e, t, n) {
            var r, i, o, s, a, u, c = 0, g = !1, p = !1, d = !0;
            if (typeof e != "function")
                throw new TypeError(GL);
            t = yg(t) || 0,
            qL(n) && (g = !!n.leading,
            p = "maxWait"in n,
            o = p ? XL(yg(n.maxWait) || 0, t) : o,
            d = "trailing"in n ? !!n.trailing : d);
            function h(R) {
                var V = r
                  , B = i;
                return r = i = void 0,
                c = R,
                s = e.apply(B, V),
                s
            }
            function v(R) {
                return c = R,
                a = setTimeout(m, t),
                g ? h(R) : s
            }
            function I(R) {
                var V = R - u
                  , B = R - c
                  , W = t - V;
                return p ? VL(W, o - B) : W
            }
            function w(R) {
                var V = R - u
                  , B = R - c;
                return u === void 0 || V >= t || V < 0 || p && B >= o
            }
            function m() {
                var R = Po();
                if (w(R))
                    return x(R);
                a = setTimeout(m, I(R))
            }
            function x(R) {
                return a = void 0,
                d && r ? h(R) : (r = i = void 0,
                s)
            }
            function S() {
                a !== void 0 && clearTimeout(a),
                c = 0,
                r = u = i = a = void 0
            }
            function C() {
                return a === void 0 ? s : x(Po())
            }
            function P() {
                var R = Po()
                  , V = w(R);
                if (r = arguments,
                i = this,
                u = R,
                V) {
                    if (a === void 0)
                        return v(u);
                    if (p)
                        return clearTimeout(a),
                        a = setTimeout(m, t),
                        h(u)
                }
                return a === void 0 && (a = setTimeout(m, t)),
                s
            }
            return P.cancel = S,
            P.flush = C,
            P
        }
        vg.exports = kL
    }
    );
    var Ig = f( (qG, _g) => {
        var UL = mg()
          , BL = $e()
          , HL = "Expected a function";
        function WL(e, t, n) {
            var r = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(HL);
            return BL(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            UL(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }
        _g.exports = WL
    }
    );
    var bg = {};
    Pe(bg, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => Ar,
        clearRequested: () => EN,
        elementStateChanged: () => Xo,
        eventListenerAdded: () => br,
        eventStateChanged: () => Fo,
        instanceAdded: () => qo,
        instanceRemoved: () => Go,
        instanceStarted: () => wr,
        mediaQueriesDefined: () => ko,
        parameterChanged: () => Kt,
        playbackRequested: () => gN,
        previewRequested: () => pN,
        rawDataImported: () => Lo,
        sessionInitialized: () => No,
        sessionStarted: () => Do,
        sessionStopped: () => Mo,
        stopRequested: () => hN,
        testFrameRendered: () => yN,
        viewportWidthChanged: () => Vo
    });
    var Tg, zL, jL, KL, YL, QL, $L, ZL, JL, eN, tN, nN, rN, iN, oN, aN, sN, uN, cN, lN, fN, dN, Lo, No, Do, Mo, pN, gN, hN, EN, br, yN, Fo, Ar, Kt, qo, wr, Go, Xo, Yt, Vo, ko, Sr = ye( () => {
        "use strict";
        Ne();
        Tg = ce(Tt()),
        {IX2_RAW_DATA_IMPORTED: zL, IX2_SESSION_INITIALIZED: jL, IX2_SESSION_STARTED: KL, IX2_SESSION_STOPPED: YL, IX2_PREVIEW_REQUESTED: QL, IX2_PLAYBACK_REQUESTED: $L, IX2_STOP_REQUESTED: ZL, IX2_CLEAR_REQUESTED: JL, IX2_EVENT_LISTENER_ADDED: eN, IX2_TEST_FRAME_RENDERED: tN, IX2_EVENT_STATE_CHANGED: nN, IX2_ANIMATION_FRAME_CHANGED: rN, IX2_PARAMETER_CHANGED: iN, IX2_INSTANCE_ADDED: oN, IX2_INSTANCE_STARTED: aN, IX2_INSTANCE_REMOVED: sN, IX2_ELEMENT_STATE_CHANGED: uN, IX2_ACTION_LIST_PLAYBACK_CHANGED: cN, IX2_VIEWPORT_WIDTH_CHANGED: lN, IX2_MEDIA_QUERIES_DEFINED: fN} = Te,
        {reifyState: dN} = Tg.IX2VanillaUtils,
        Lo = e => ({
            type: zL,
            payload: {
                ...dN(e)
            }
        }),
        No = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: jL,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        Do = () => ({
            type: KL
        }),
        Mo = () => ({
            type: YL
        }),
        pN = ({rawData: e, defer: t}) => ({
            type: QL,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        gN = ({actionTypeId: e=Le.GENERAL_START_ACTION, actionListId: t, actionItemId: n, eventId: r, allowEvents: i, immediate: o, testManual: s, verbose: a, rawData: u}) => ({
            type: $L,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: n,
                testManual: s,
                eventId: r,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }),
        hN = e => ({
            type: ZL,
            payload: {
                actionListId: e
            }
        }),
        EN = () => ({
            type: JL
        }),
        br = (e, t) => ({
            type: eN,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        yN = (e=1) => ({
            type: tN,
            payload: {
                step: e
            }
        }),
        Fo = (e, t) => ({
            type: nN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        Ar = (e, t) => ({
            type: rN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        Kt = (e, t) => ({
            type: iN,
            payload: {
                key: e,
                value: t
            }
        }),
        qo = e => ({
            type: oN,
            payload: {
                ...e
            }
        }),
        wr = (e, t) => ({
            type: aN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Go = e => ({
            type: sN,
            payload: {
                instanceId: e
            }
        }),
        Xo = (e, t, n, r) => ({
            type: uN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: n,
                actionItem: r
            }
        }),
        Yt = ({actionListId: e, isPlaying: t}) => ({
            type: cN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Vo = ({width: e, mediaQueries: t}) => ({
            type: lN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        ko = () => ({
            type: fN
        })
    }
    );
    var Re = {};
    Pe(Re, {
        elementContains: () => Ho,
        getChildElements: () => ON,
        getClosestElement: () => An,
        getProperty: () => TN,
        getQuerySelector: () => Bo,
        getRefType: () => Wo,
        getSiblingElements: () => xN,
        getStyle: () => IN,
        getValidDocument: () => AN,
        isSiblingNode: () => SN,
        matchSelector: () => bN,
        queryDocument: () => wN,
        setStyle: () => _N
    });
    function _N(e, t, n) {
        e.style[t] = n
    }
    function IN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function TN(e, t) {
        return e[t]
    }
    function bN(e) {
        return t => t[Uo](e)
    }
    function Bo({id: e, selector: t}) {
        if (e) {
            let n = e;
            if (e.indexOf(Ag) !== -1) {
                let r = e.split(Ag)
                  , i = r[0];
                if (n = r[1],
                i !== document.documentElement.getAttribute(Sg))
                    return null
            }
            return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`
        }
        return t
    }
    function AN(e) {
        return e == null || e === document.documentElement.getAttribute(Sg) ? document : null
    }
    function wN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Ho(e, t) {
        return e.contains(t)
    }
    function SN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function ON(e) {
        let t = [];
        for (let n = 0, {length: r} = e || []; n < r; n++) {
            let {children: i} = e[n]
              , {length: o} = i;
            if (o)
                for (let s = 0; s < o; s++)
                    t.push(i[s])
        }
        return t
    }
    function xN(e=[]) {
        let t = []
          , n = [];
        for (let r = 0, {length: i} = e; r < i; r++) {
            let {parentNode: o} = e[r];
            if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
                continue;
            n.push(o);
            let s = o.firstElementChild;
            for (; s != null; )
                e.indexOf(s) === -1 && t.push(s),
                s = s.nextElementSibling
        }
        return t
    }
    function Wo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? vN : mN : null
    }
    var wg, Uo, Ag, vN, mN, Sg, An, Og = ye( () => {
        "use strict";
        wg = ce(Tt());
        Ne();
        ({ELEMENT_MATCHES: Uo} = wg.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Ag, HTML_ELEMENT: vN, PLAIN_OBJECT: mN, WF_PAGE: Sg} = we;
        An = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let n = e;
            do {
                if (n[Uo] && n[Uo](t))
                    return n;
                n = n.parentNode
            } while (n != null);
            return null
        }
    }
    );
    var zo = f( (VG, Rg) => {
        var RN = $e()
          , xg = Object.create
          , CN = function() {
            function e() {}
            return function(t) {
                if (!RN(t))
                    return {};
                if (xg)
                    return xg(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0,
                n
            }
        }();
        Rg.exports = CN
    }
    );
    var Or = f( (kG, Cg) => {
        function PN() {}
        Cg.exports = PN
    }
    );
    var Rr = f( (UG, Pg) => {
        var LN = zo()
          , NN = Or();
        function xr(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        xr.prototype = LN(NN.prototype);
        xr.prototype.constructor = xr;
        Pg.exports = xr
    }
    );
    var Mg = f( (BG, Dg) => {
        var Lg = St()
          , DN = sn()
          , MN = be()
          , Ng = Lg ? Lg.isConcatSpreadable : void 0;
        function FN(e) {
            return MN(e) || DN(e) || !!(Ng && e && e[Ng])
        }
        Dg.exports = FN
    }
    );
    var Gg = f( (HG, qg) => {
        var qN = jn()
          , GN = Mg();
        function Fg(e, t, n, r, i) {
            var o = -1
              , s = e.length;
            for (n || (n = GN),
            i || (i = []); ++o < s; ) {
                var a = e[o];
                t > 0 && n(a) ? t > 1 ? Fg(a, t - 1, n, r, i) : qN(i, a) : r || (i[i.length] = a)
            }
            return i
        }
        qg.exports = Fg
    }
    );
    var Vg = f( (WG, Xg) => {
        var XN = Gg();
        function VN(e) {
            var t = e == null ? 0 : e.length;
            return t ? XN(e, 1) : []
        }
        Xg.exports = VN
    }
    );
    var Ug = f( (zG, kg) => {
        function kN(e, t, n) {
            switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }
        kg.exports = kN
    }
    );
    var Wg = f( (jG, Hg) => {
        var UN = Ug()
          , Bg = Math.max;
        function BN(e, t, n) {
            return t = Bg(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, o = Bg(r.length - t, 0), s = Array(o); ++i < o; )
                    s[i] = r[t + i];
                i = -1;
                for (var a = Array(t + 1); ++i < t; )
                    a[i] = r[i];
                return a[t] = n(s),
                UN(e, this, a)
            }
        }
        Hg.exports = BN
    }
    );
    var jg = f( (KG, zg) => {
        function HN(e) {
            return function() {
                return e
            }
        }
        zg.exports = HN
    }
    );
    var Qg = f( (YG, Yg) => {
        var WN = jg()
          , Kg = Ro()
          , zN = or()
          , jN = Kg ? function(e, t) {
            return Kg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: WN(t),
                writable: !0
            })
        }
        : zN;
        Yg.exports = jN
    }
    );
    var Zg = f( (QG, $g) => {
        var KN = 800
          , YN = 16
          , QN = Date.now;
        function $N(e) {
            var t = 0
              , n = 0;
            return function() {
                var r = QN()
                  , i = YN - (r - n);
                if (n = r,
                i > 0) {
                    if (++t >= KN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        $g.exports = $N
    }
    );
    var eh = f( ($G, Jg) => {
        var ZN = Qg()
          , JN = Zg()
          , eD = JN(ZN);
        Jg.exports = eD
    }
    );
    var nh = f( (ZG, th) => {
        var tD = Vg()
          , nD = Wg()
          , rD = eh();
        function iD(e) {
            return rD(nD(e, void 0, tD), e + "")
        }
        th.exports = iD
    }
    );
    var oh = f( (JG, ih) => {
        var rh = Pi()
          , oD = rh && new rh;
        ih.exports = oD
    }
    );
    var sh = f( (eX, ah) => {
        function aD() {}
        ah.exports = aD
    }
    );
    var jo = f( (tX, ch) => {
        var uh = oh()
          , sD = sh()
          , uD = uh ? function(e) {
            return uh.get(e)
        }
        : sD;
        ch.exports = uD
    }
    );
    var fh = f( (nX, lh) => {
        var cD = {};
        lh.exports = cD
    }
    );
    var Ko = f( (rX, ph) => {
        var dh = fh()
          , lD = Object.prototype
          , fD = lD.hasOwnProperty;
        function dD(e) {
            for (var t = e.name + "", n = dh[t], r = fD.call(dh, t) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        ph.exports = dD
    }
    );
    var Pr = f( (iX, gh) => {
        var pD = zo()
          , gD = Or()
          , hD = 4294967295;
        function Cr(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = hD,
            this.__views__ = []
        }
        Cr.prototype = pD(gD.prototype);
        Cr.prototype.constructor = Cr;
        gh.exports = Cr
    }
    );
    var Eh = f( (oX, hh) => {
        function ED(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Array(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        hh.exports = ED
    }
    );
    var vh = f( (aX, yh) => {
        var yD = Pr()
          , vD = Rr()
          , mD = Eh();
        function _D(e) {
            if (e instanceof yD)
                return e.clone();
            var t = new vD(e.__wrapped__,e.__chain__);
            return t.__actions__ = mD(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        yh.exports = _D
    }
    );
    var Ih = f( (sX, _h) => {
        var ID = Pr()
          , mh = Rr()
          , TD = Or()
          , bD = be()
          , AD = rt()
          , wD = vh()
          , SD = Object.prototype
          , OD = SD.hasOwnProperty;
        function Lr(e) {
            if (AD(e) && !bD(e) && !(e instanceof ID)) {
                if (e instanceof mh)
                    return e;
                if (OD.call(e, "__wrapped__"))
                    return wD(e)
            }
            return new mh(e)
        }
        Lr.prototype = TD.prototype;
        Lr.prototype.constructor = Lr;
        _h.exports = Lr
    }
    );
    var bh = f( (uX, Th) => {
        var xD = Pr()
          , RD = jo()
          , CD = Ko()
          , PD = Ih();
        function LD(e) {
            var t = CD(e)
              , n = PD[t];
            if (typeof n != "function" || !(t in xD.prototype))
                return !1;
            if (e === n)
                return !0;
            var r = RD(n);
            return !!r && e === r[0]
        }
        Th.exports = LD
    }
    );
    var Oh = f( (cX, Sh) => {
        var Ah = Rr()
          , ND = nh()
          , DD = jo()
          , Yo = Ko()
          , MD = be()
          , wh = bh()
          , FD = "Expected a function"
          , qD = 8
          , GD = 32
          , XD = 128
          , VD = 256;
        function kD(e) {
            return ND(function(t) {
                var n = t.length
                  , r = n
                  , i = Ah.prototype.thru;
                for (e && t.reverse(); r--; ) {
                    var o = t[r];
                    if (typeof o != "function")
                        throw new TypeError(FD);
                    if (i && !s && Yo(o) == "wrapper")
                        var s = new Ah([],!0)
                }
                for (r = s ? r : n; ++r < n; ) {
                    o = t[r];
                    var a = Yo(o)
                      , u = a == "wrapper" ? DD(o) : void 0;
                    u && wh(u[0]) && u[1] == (XD | qD | GD | VD) && !u[4].length && u[9] == 1 ? s = s[Yo(u[0])].apply(s, u[3]) : s = o.length == 1 && wh(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var c = arguments
                      , g = c[0];
                    if (s && c.length == 1 && MD(g))
                        return s.plant(g).value();
                    for (var p = 0, d = n ? t[p].apply(this, c) : g; ++p < n; )
                        d = t[p].call(this, d);
                    return d
                }
            })
        }
        Sh.exports = kD
    }
    );
    var Rh = f( (lX, xh) => {
        var UD = Oh()
          , BD = UD();
        xh.exports = BD
    }
    );
    var Ph = f( (fX, Ch) => {
        function HD(e, t, n) {
            return e === e && (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Ch.exports = HD
    }
    );
    var Nh = f( (dX, Lh) => {
        var WD = Ph()
          , Qo = ar();
        function zD(e, t, n) {
            return n === void 0 && (n = t,
            t = void 0),
            n !== void 0 && (n = Qo(n),
            n = n === n ? n : 0),
            t !== void 0 && (t = Qo(t),
            t = t === t ? t : 0),
            WD(Qo(e), t, n)
        }
        Lh.exports = zD
    }
    );
    var Uh, Bh, Hh, Wh, jD, KD, YD, QD, $D, ZD, JD, eM, tM, nM, rM, iM, oM, aM, sM, zh, jh, uM, cM, lM, Kh, fM, dM, Yh, pM, $o, Qh, Dh, Mh, $h, Sn, gM, et, Zh, hM, Me, We, On, Jh, Zo, Fh, Jo, EM, wn, yM, vM, mM, eE, qh, _M, Gh, IM, TM, bM, Xh, Nr, Dr, Vh, kh, tE, nE = ye( () => {
        "use strict";
        Uh = ce(Rh()),
        Bh = ce(ir()),
        Hh = ce(Nh());
        Ne();
        ea();
        Sr();
        Wh = ce(Tt()),
        {MOUSE_CLICK: jD, MOUSE_SECOND_CLICK: KD, MOUSE_DOWN: YD, MOUSE_UP: QD, MOUSE_OVER: $D, MOUSE_OUT: ZD, DROPDOWN_CLOSE: JD, DROPDOWN_OPEN: eM, SLIDER_ACTIVE: tM, SLIDER_INACTIVE: nM, TAB_ACTIVE: rM, TAB_INACTIVE: iM, NAVBAR_CLOSE: oM, NAVBAR_OPEN: aM, MOUSE_MOVE: sM, PAGE_SCROLL_DOWN: zh, SCROLL_INTO_VIEW: jh, SCROLL_OUT_OF_VIEW: uM, PAGE_SCROLL_UP: cM, SCROLLING_IN_VIEW: lM, PAGE_FINISH: Kh, ECOMMERCE_CART_CLOSE: fM, ECOMMERCE_CART_OPEN: dM, PAGE_START: Yh, PAGE_SCROLL: pM} = Be,
        $o = "COMPONENT_ACTIVE",
        Qh = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Dh} = we,
        {getNamespacedParameterId: Mh} = Wh.IX2VanillaUtils,
        $h = e => t => typeof t == "object" && e(t) ? !0 : t,
        Sn = $h( ({element: e, nativeEvent: t}) => e === t.target),
        gM = $h( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        et = (0,
        Uh.default)([Sn, gM]),
        Zh = (e, t) => {
            if (t) {
                let {ixData: n} = e.getState()
                  , {events: r} = n
                  , i = r[t];
                if (i && !EM[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        hM = ({store: e, event: t}) => {
            let {action: n} = t
              , {autoStopEventId: r} = n.config;
            return !!Zh(e, r)
        }
        ,
        Me = ({store: e, event: t, element: n, eventStateKey: r}, i) => {
            let {action: o, id: s} = t
              , {actionListId: a, autoStopEventId: u} = o.config
              , c = Zh(e, u);
            return c && Qt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Dh + r.split(Dh)[1],
                actionListId: (0,
                Bh.default)(c, "action.config.actionListId")
            }),
            Qt({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: r,
                actionListId: a
            }),
            xn({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: r,
                actionListId: a
            }),
            i
        }
        ,
        We = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
        On = {
            handler: We(et, Me)
        },
        Jh = {
            ...On,
            types: [$o, Qh].join(" ")
        },
        Zo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Fh = "mouseover mouseout",
        Jo = {
            types: Zo
        },
        EM = {
            PAGE_START: Yh,
            PAGE_FINISH: Kh
        },
        wn = ( () => {
            let e = window.pageXOffset !== void 0
              , n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : n.scrollLeft,
                scrollTop: e ? window.pageYOffset : n.scrollTop,
                stiffScrollTop: (0,
                Hh.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
                scrollWidth: n.scrollWidth,
                scrollHeight: n.scrollHeight,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        yM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        vM = ({element: e, nativeEvent: t}) => {
            let {type: n, target: r, relatedTarget: i} = t
              , o = e.contains(r);
            if (n === "mouseover" && o)
                return !0;
            let s = e.contains(i);
            return !!(n === "mouseout" && o && s)
        }
        ,
        mM = e => {
            let {element: t, event: {config: n}} = e
              , {clientWidth: r, clientHeight: i} = wn()
              , o = n.scrollOffsetValue
              , u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return yM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: r,
                bottom: i - u
            })
        }
        ,
        eE = e => (t, n) => {
            let {type: r} = t.nativeEvent
              , i = [$o, Qh].indexOf(r) !== -1 ? r === $o : n.isActive
              , o = {
                ...n,
                isActive: i
            };
            return (!n || o.isActive !== n.isActive) && e(t, o) || o
        }
        ,
        qh = e => (t, n) => {
            let r = {
                elementHovered: vM(t)
            };
            return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
        }
        ,
        _M = e => (t, n) => {
            let r = {
                ...n,
                elementVisible: mM(t)
            };
            return (n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r) || r
        }
        ,
        Gh = e => (t, n={}) => {
            let {stiffScrollTop: r, scrollHeight: i, innerHeight: o} = wn()
              , {event: {config: s, eventTypeId: a}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: c} = s
              , g = c === "PX"
              , p = i - o
              , d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d)
                return n;
            let h = (g ? u : o * (u || 0) / 100) / p, v, I, w = 0;
            n && (v = d > n.percentTop,
            I = n.scrollingDown !== v,
            w = I ? d : n.anchorTop);
            let m = a === zh ? d >= w + h : d <= w - h
              , x = {
                ...n,
                percentTop: d,
                inBounds: m,
                anchorTop: w,
                scrollingDown: v
            };
            return n && m && (I || x.inBounds !== n.inBounds) && e(t, x) || x
        }
        ,
        IM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        TM = e => (t, n) => {
            let r = {
                finished: document.readyState === "complete"
            };
            return r.finished && !(n && n.finshed) && e(t),
            r
        }
        ,
        bM = e => (t, n) => {
            let r = {
                started: !0
            };
            return n || e(t),
            r
        }
        ,
        Xh = e => (t, n={
            clickCount: 0
        }) => {
            let r = {
                clickCount: n.clickCount % 2 + 1
            };
            return r.clickCount !== n.clickCount && e(t, r) || r
        }
        ,
        Nr = (e=!0) => ({
            ...Jh,
            handler: We(e ? et : Sn, eE( (t, n) => n.isActive ? On.handler(t, n) : n))
        }),
        Dr = (e=!0) => ({
            ...Jh,
            handler: We(e ? et : Sn, eE( (t, n) => n.isActive ? n : On.handler(t, n)))
        }),
        Vh = {
            ...Jo,
            handler: _M( (e, t) => {
                let {elementVisible: n} = t
                  , {event: r, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: s} = o;
                return !s[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === jh === n ? (Me(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        kh = .05,
        tE = {
            [tM]: Nr(),
            [nM]: Dr(),
            [eM]: Nr(),
            [JD]: Dr(),
            [aM]: Nr(!1),
            [oM]: Dr(!1),
            [rM]: Nr(),
            [iM]: Dr(),
            [dM]: {
                types: "ecommerce-cart-open",
                handler: We(et, Me)
            },
            [fM]: {
                types: "ecommerce-cart-close",
                handler: We(et, Me)
            },
            [jD]: {
                types: "click",
                handler: We(et, Xh( (e, {clickCount: t}) => {
                    hM(e) ? t === 1 && Me(e) : Me(e)
                }
                ))
            },
            [KD]: {
                types: "click",
                handler: We(et, Xh( (e, {clickCount: t}) => {
                    t === 2 && Me(e)
                }
                ))
            },
            [YD]: {
                ...On,
                types: "mousedown"
            },
            [QD]: {
                ...On,
                types: "mouseup"
            },
            [$D]: {
                types: Fh,
                handler: We(et, qh( (e, t) => {
                    t.elementHovered && Me(e)
                }
                ))
            },
            [ZD]: {
                types: Fh,
                handler: We(et, qh( (e, t) => {
                    t.elementHovered || Me(e)
                }
                ))
            },
            [sM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: s, selectedAxis: a, continuousParameterGroupId: u, reverse: c, restingState: g=0} = n
                      , {clientX: p=o.clientX, clientY: d=o.clientY, pageX: h=o.pageX, pageY: v=o.pageY} = r
                      , I = a === "X_AXIS"
                      , w = r.type === "mouseout"
                      , m = g / 100
                      , x = u
                      , S = !1;
                    switch (s) {
                    case Qe.VIEWPORT:
                        {
                            m = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Qe.PAGE:
                        {
                            let {scrollLeft: C, scrollTop: P, scrollWidth: R, scrollHeight: V} = wn();
                            m = I ? Math.min(C + h, R) / R : Math.min(P + v, V) / V;
                            break
                        }
                    case Qe.ELEMENT:
                    default:
                        {
                            x = Mh(i, u);
                            let C = r.type.indexOf("mouse") === 0;
                            if (C && et({
                                element: t,
                                nativeEvent: r
                            }) !== !0)
                                break;
                            let P = t.getBoundingClientRect()
                              , {left: R, top: V, width: B, height: W} = P;
                            if (!C && !IM({
                                left: p,
                                top: d
                            }, P))
                                break;
                            S = !0,
                            m = I ? (p - R) / B : (d - V) / W;
                            break
                        }
                    }
                    return w && (m > 1 - kh || m < kh) && (m = Math.round(m)),
                    (s !== Qe.ELEMENT || S || S !== o.elementHovered) && (m = c ? 1 - m : m,
                    e.dispatch(Kt(x, m))),
                    {
                        elementHovered: S,
                        clientX: p,
                        clientY: d,
                        pageX: h,
                        pageY: v
                    }
                }
            },
            [pM]: {
                types: Zo,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: n, reverse: r} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: s} = wn()
                      , a = i / (o - s);
                    a = r ? 1 - a : a,
                    e.dispatch(Kt(n, a))
                }
            },
            [lM]: {
                types: Zo,
                handler: ({element: e, store: t, eventConfig: n, eventStateKey: r}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: s, scrollWidth: a, scrollHeight: u, clientHeight: c} = wn()
                      , {basedOn: g, selectedAxis: p, continuousParameterGroupId: d, startsEntering: h, startsExiting: v, addEndOffset: I, addStartOffset: w, addOffsetValue: m=0, endOffsetValue: x=0} = n
                      , S = p === "X_AXIS";
                    if (g === Qe.VIEWPORT) {
                        let C = S ? o / a : s / u;
                        return C !== i.scrollPercent && t.dispatch(Kt(d, C)),
                        {
                            scrollPercent: C
                        }
                    } else {
                        let C = Mh(r, d)
                          , P = e.getBoundingClientRect()
                          , R = (w ? m : 0) / 100
                          , V = (I ? x : 0) / 100;
                        R = h ? R : 1 - R,
                        V = v ? V : 1 - V;
                        let B = P.top + Math.min(P.height * R, c)
                          , Y = P.top + P.height * V - B
                          , ne = Math.min(c + Y, u)
                          , b = Math.min(Math.max(0, c - B), ne) / ne;
                        return b !== i.scrollPercent && t.dispatch(Kt(C, b)),
                        {
                            scrollPercent: b
                        }
                    }
                }
            },
            [jh]: Vh,
            [uM]: Vh,
            [zh]: {
                ...Jo,
                handler: Gh( (e, t) => {
                    t.scrollingDown && Me(e)
                }
                )
            },
            [cM]: {
                ...Jo,
                handler: Gh( (e, t) => {
                    t.scrollingDown || Me(e)
                }
                )
            },
            [Kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(Sn, TM(Me))
            },
            [Yh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: We(Sn, bM(Me))
            }
        }
    }
    );
    var mE = {};
    Pe(mE, {
        observeRequests: () => BM,
        startActionGroup: () => xn,
        startEngine: () => Vr,
        stopActionGroup: () => Qt,
        stopAllActionGroups: () => EE,
        stopEngine: () => kr
    });
    function BM(e) {
        bt({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: zM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: jM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: KM
        }),
        bt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: YM
        })
    }
    function HM(e) {
        bt({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                kr(e),
                dE({
                    store: e,
                    elementApi: Re
                }),
                Vr({
                    store: e,
                    allowEvents: !0
                }),
                pE()
            }
        })
    }
    function WM(e, t) {
        let n = bt({
            store: e,
            select: ({ixSession: r}) => r.tick,
            onChange: r => {
                t(r),
                n()
            }
        })
    }
    function zM({rawData: e, defer: t}, n) {
        let r = () => {
            Vr({
                store: n,
                rawData: e,
                allowEvents: !0
            }),
            pE()
        }
        ;
        t ? setTimeout(r, 0) : r()
    }
    function pE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function jM(e, t) {
        let {actionTypeId: n, actionListId: r, actionItemId: i, eventId: o, allowEvents: s, immediate: a, testManual: u, verbose: c=!0} = e
          , {rawData: g} = e;
        if (r && i && g && a) {
            let p = g.actionLists[r];
            p && (g = LM({
                actionList: p,
                actionItemId: i,
                rawData: g
            }))
        }
        if (Vr({
            store: t,
            rawData: g,
            allowEvents: s,
            testManual: u
        }),
        r && n === Le.GENERAL_START_ACTION || ta(n)) {
            Qt({
                store: t,
                actionListId: r
            }),
            hE({
                store: t,
                actionListId: r,
                eventId: o
            });
            let p = xn({
                store: t,
                eventId: o,
                actionListId: r,
                immediate: a,
                verbose: c
            });
            c && p && t.dispatch(Yt({
                actionListId: r,
                isPlaying: !a
            }))
        }
    }
    function KM({actionListId: e}, t) {
        e ? Qt({
            store: t,
            actionListId: e
        }) : EE({
            store: t
        }),
        kr(t)
    }
    function YM(e, t) {
        kr(t),
        dE({
            store: t,
            elementApi: Re
        })
    }
    function Vr({store: e, rawData: t, allowEvents: n, testManual: r}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Lo(t)),
        i.active || (e.dispatch(No({
            hasBoundaryNodes: !!document.querySelector(Fr),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        n && (tF(e),
        QM(),
        e.getState().ixSession.hasDefinedMediaQueries && HM(e)),
        e.dispatch(Do()),
        $M(e, r))
    }
    function QM() {
        let {documentElement: e} = document;
        e.className.indexOf(rE) === -1 && (e.className += ` ${rE}`)
    }
    function $M(e, t) {
        let n = r => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(Ar(r, o)),
            t ? WM(e, n) : requestAnimationFrame(n))
        }
        ;
        n(window.performance.now())
    }
    function kr(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: n} = t;
            n.forEach(ZM),
            FM(),
            e.dispatch(Mo())
        }
    }
    function ZM({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function JM({store: e, eventStateKey: t, eventTarget: n, eventId: r, eventConfig: i, actionListId: o, parameterGroup: s, smoothing: a, restingValue: u}) {
        let {ixData: c, ixSession: g} = e.getState()
          , {events: p} = c
          , d = p[r]
          , {eventTypeId: h} = d
          , v = {}
          , I = {}
          , w = []
          , {continuousActionGroups: m} = s
          , {id: x} = s;
        NM(h, i) && (x = DM(t, x));
        let S = g.hasBoundaryNodes && n ? An(n, Fr) : null;
        m.forEach(C => {
            let {keyframe: P, actionItems: R} = C;
            R.forEach(V => {
                let {actionTypeId: B} = V
                  , {target: W} = V.config;
                if (!W)
                    return;
                let Y = W.boundaryMode ? S : null
                  , ne = qM(W) + na + B;
                if (I[ne] = eF(I[ne], P, V),
                !v[ne]) {
                    v[ne] = !0;
                    let {config: D} = V;
                    qr({
                        config: D,
                        event: d,
                        eventTarget: n,
                        elementRoot: Y,
                        elementApi: Re
                    }).forEach(b => {
                        w.push({
                            element: b,
                            key: ne
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        w.forEach( ({element: C, key: P}) => {
            let R = I[P]
              , V = (0,
            st.default)(R, "[0].actionItems[0]", {})
              , {actionTypeId: B} = V
              , W = Xr(B) ? ia(B)(C, V) : null
              , Y = ra({
                element: C,
                actionItem: V,
                elementApi: Re
            }, W);
            oa({
                store: e,
                element: C,
                eventId: r,
                actionListId: o,
                actionItem: V,
                destination: Y,
                continuous: !0,
                parameterId: x,
                actionGroups: R,
                smoothing: a,
                restingValue: u,
                pluginInstance: W
            })
        }
        )
    }
    function eF(e=[], t, n) {
        let r = [...e], i;
        return r.some( (o, s) => o.keyframe === t ? (i = s,
        !0) : !1),
        i == null && (i = r.length,
        r.push({
            keyframe: t,
            actionItems: []
        })),
        r[i].actionItems.push(n),
        r
    }
    function tF(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: n} = t;
        gE(e),
        (0,
        $t.default)(n, (i, o) => {
            let s = tE[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            sF({
                logic: s,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: r} = e.getState();
        r.eventListeners.length && rF(e)
    }
    function rF(e) {
        let t = () => {
            gE(e)
        }
        ;
        nF.forEach(n => {
            window.addEventListener(n, t),
            e.dispatch(br(window, [n, t]))
        }
        ),
        t()
    }
    function gE(e) {
        let {ixSession: t, ixData: n} = e.getState()
          , r = window.innerWidth;
        if (r !== t.viewportWidth) {
            let {mediaQueries: i} = n;
            e.dispatch(Vo({
                width: r,
                mediaQueries: i
            }))
        }
    }
    function sF({logic: e, store: t, events: n}) {
        uF(n);
        let {types: r, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: s} = o
          , a = iF(n, aF);
        if (!(0,
        aE.default)(a))
            return;
        (0,
        $t.default)(a, (p, d) => {
            let h = n[d]
              , {action: v, id: I, mediaQueries: w=o.mediaQueryKeys} = h
              , {actionListId: m} = v.config;
            GM(w, o.mediaQueryKeys) || t.dispatch(ko()),
            v.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(S => {
                let {continuousParameterGroupId: C} = S
                  , P = (0,
                st.default)(s, `${m}.continuousParameterGroups`, [])
                  , R = (0,
                oE.default)(P, ({id: W}) => W === C)
                  , V = (S.smoothing || 0) / 100
                  , B = (S.restingState || 0) / 100;
                R && p.forEach( (W, Y) => {
                    let ne = I + na + Y;
                    JM({
                        store: t,
                        eventStateKey: ne,
                        eventTarget: W,
                        eventId: I,
                        eventConfig: S,
                        actionListId: m,
                        parameterGroup: R,
                        smoothing: V,
                        restingValue: B
                    })
                }
                )
            }
            ),
            (v.actionTypeId === Le.GENERAL_START_ACTION || ta(v.actionTypeId)) && hE({
                store: t,
                actionListId: m,
                eventId: I
            })
        }
        );
        let u = p => {
            let {ixSession: d} = t.getState();
            oF(a, (h, v, I) => {
                let w = n[v]
                  , m = d.eventState[I]
                  , {action: x, mediaQueries: S=o.mediaQueryKeys} = w;
                if (!Gr(S, d.mediaQueryKey))
                    return;
                let C = (P={}) => {
                    let R = i({
                        store: t,
                        element: h,
                        event: w,
                        eventConfig: P,
                        nativeEvent: p,
                        eventStateKey: I
                    }, m);
                    XM(R, m) || t.dispatch(Fo(I, R))
                }
                ;
                x.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(C) : C()
            }
            )
        }
          , c = (0,
        lE.default)(u, UM)
          , g = ({target: p=document, types: d, throttle: h}) => {
            d.split(" ").filter(Boolean).forEach(v => {
                let I = h ? c : u;
                p.addEventListener(v, I),
                t.dispatch(br(p, [v, I]))
            }
            )
        }
        ;
        Array.isArray(r) ? r.forEach(g) : typeof r == "string" && g(e)
    }
    function uF(e) {
        if (!kM)
            return;
        let t = {}
          , n = "";
        for (let r in e) {
            let {eventTypeId: i, target: o} = e[r]
              , s = Bo(o);
            t[s] || (i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) && (t[s] = !0,
            n += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (n) {
            let r = document.createElement("style");
            r.textContent = n,
            document.body.appendChild(r)
        }
    }
    function hE({store: e, actionListId: t, eventId: n}) {
        let {ixData: r, ixSession: i} = e.getState()
          , {actionLists: o, events: s} = r
          , a = s[n]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let c = (0,
            st.default)(u, "actionItemGroups[0].actionItems", [])
              , g = (0,
            st.default)(a, "mediaQueries", r.mediaQueryKeys);
            if (!Gr(g, i.mediaQueryKey))
                return;
            c.forEach(p => {
                let {config: d, actionTypeId: h} = p
                  , v = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : d
                  , I = qr({
                    config: v,
                    event: a,
                    elementApi: Re
                })
                  , w = Xr(h);
                I.forEach(m => {
                    let x = w ? ia(h)(m, p) : null;
                    oa({
                        destination: ra({
                            element: m,
                            actionItem: p,
                            elementApi: Re
                        }, x),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: n,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: x
                    })
                }
                )
            }
            )
        }
    }
    function EE({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        $t.default)(t, n => {
            if (!n.continuous) {
                let {actionListId: r, verbose: i} = n;
                aa(n, e),
                i && e.dispatch(Yt({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function Qt({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i}) {
        let {ixInstances: o, ixSession: s} = e.getState()
          , a = s.hasBoundaryNodes && n ? An(n, Fr) : null;
        (0,
        $t.default)(o, u => {
            let c = (0,
            st.default)(u, "actionItem.config.target.boundaryMode")
              , g = r ? u.eventStateKey === r : !0;
            if (u.actionListId === i && u.eventId === t && g) {
                if (a && c && !Ho(a, u.element))
                    return;
                aa(u, e),
                u.verbose && e.dispatch(Yt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function xn({store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i, groupIndex: o=0, immediate: s, verbose: a}) {
        let {ixData: u, ixSession: c} = e.getState()
          , {events: g} = u
          , p = g[t] || {}
          , {mediaQueries: d=u.mediaQueryKeys} = p
          , h = (0,
        st.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: v, useFirstGroupAsInitialState: I} = h;
        if (!v || !v.length)
            return !1;
        o >= v.length && (0,
        st.default)(p, "config.loop") && (o = 0),
        o === 0 && I && o++;
        let m = (o === 0 || o === 1 && I) && ta(p.action?.actionTypeId) ? p.config.delay : void 0
          , x = (0,
        st.default)(v, [o, "actionItems"], []);
        if (!x.length || !Gr(d, c.mediaQueryKey))
            return !1;
        let S = c.hasBoundaryNodes && n ? An(n, Fr) : null
          , C = RM(x)
          , P = !1;
        return x.forEach( (R, V) => {
            let {config: B, actionTypeId: W} = R
              , Y = Xr(W)
              , {target: ne} = B;
            if (!ne)
                return;
            let D = ne.boundaryMode ? S : null;
            qr({
                config: B,
                event: p,
                eventTarget: n,
                elementRoot: D,
                elementApi: Re
            }).forEach( (L, H) => {
                let X = Y ? ia(W)(L, R) : null
                  , ee = Y ? VM(W)(L, R) : null;
                P = !0;
                let te = C === V && H === 0
                  , N = CM({
                    element: L,
                    actionItem: R
                })
                  , U = ra({
                    element: L,
                    actionItem: R,
                    elementApi: Re
                }, X);
                oa({
                    store: e,
                    element: L,
                    actionItem: R,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: r,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: te,
                    computedStyle: N,
                    destination: U,
                    immediate: s,
                    verbose: a,
                    pluginInstance: X,
                    pluginDuration: ee,
                    instanceDelay: m
                })
            }
            )
        }
        ),
        P
    }
    function oa(e) {
        let {store: t, computedStyle: n, ...r} = e, {element: i, actionItem: o, immediate: s, pluginInstance: a, continuous: u, restingValue: c, eventId: g} = r, p = !u, d = OM(), {ixElements: h, ixSession: v, ixData: I} = t.getState(), w = SM(h, i), {refState: m} = h[w] || {}, x = Wo(i), S = v.reducedMotion && vi[o.actionTypeId], C;
        if (S && u)
            switch (I.events[g]?.eventTypeId) {
            case Be.MOUSE_MOVE:
            case Be.MOUSE_MOVE_IN_VIEWPORT:
                C = c;
                break;
            default:
                C = .5;
                break
            }
        let P = PM(i, m, n, o, Re, a);
        if (t.dispatch(qo({
            instanceId: d,
            elementId: w,
            origin: P,
            refType: x,
            skipMotion: S,
            skipToValue: C,
            ...r
        })),
        yE(document.body, "ix2-animation-started", d),
        s) {
            cF(t, d);
            return
        }
        bt({
            store: t,
            select: ({ixInstances: R}) => R[d],
            onChange: vE
        }),
        p && t.dispatch(wr(d, v.tick))
    }
    function aa(e, t) {
        yE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: n, actionItem: r} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: s} = i[n] || {};
        s === fE && MM(o, r, Re),
        t.dispatch(Go(e.id))
    }
    function yE(e, t, n) {
        let r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n),
        e.dispatchEvent(r)
    }
    function cF(e, t) {
        let {ixParameters: n} = e.getState();
        e.dispatch(wr(t, 0)),
        e.dispatch(Ar(performance.now(), n));
        let {ixInstances: r} = e.getState();
        vE(r[t], e)
    }
    function vE(e, t) {
        let {active: n, continuous: r, complete: i, elementId: o, actionItem: s, actionTypeId: a, renderType: u, current: c, groupIndex: g, eventId: p, eventTarget: d, eventStateKey: h, actionListId: v, isCarrier: I, styleProp: w, verbose: m, pluginInstance: x} = e
          , {ixData: S, ixSession: C} = t.getState()
          , {events: P} = S
          , R = P && P[p] ? P[p] : {}
          , {mediaQueries: V=S.mediaQueryKeys} = R;
        if (Gr(V, C.mediaQueryKey) && (r || n || i)) {
            if (c || u === wM && i) {
                t.dispatch(Xo(o, a, c, s));
                let {ixElements: B} = t.getState()
                  , {ref: W, refType: Y, refState: ne} = B[o] || {}
                  , D = ne && ne[a];
                (Y === fE || Xr(a)) && xM(W, ne, D, p, s, w, Re, u, x)
            }
            if (i) {
                if (I) {
                    let B = xn({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: h,
                        actionListId: v,
                        groupIndex: g + 1,
                        verbose: m
                    });
                    m && !B && t.dispatch(Yt({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                aa(e, t)
            }
        }
    }
    var oE, st, aE, sE, uE, cE, $t, lE, Mr, AM, ta, na, Fr, fE, wM, rE, qr, SM, ra, bt, OM, xM, dE, RM, CM, PM, LM, NM, DM, Gr, MM, FM, qM, GM, XM, Xr, ia, VM, iE, kM, UM, nF, iF, oF, aF, ea = ye( () => {
        "use strict";
        oE = ce(ji()),
        st = ce(ir()),
        aE = ce(Lp()),
        sE = ce(ig()),
        uE = ce(ag()),
        cE = ce(ug()),
        $t = ce(gg()),
        lE = ce(Ig());
        Ne();
        Mr = ce(Tt());
        Sr();
        Og();
        nE();
        AM = Object.keys(Fn),
        ta = e => AM.includes(e),
        {COLON_DELIMITER: na, BOUNDARY_SELECTOR: Fr, HTML_ELEMENT: fE, RENDER_GENERAL: wM, W_MOD_IX: rE} = we,
        {getAffectedElements: qr, getElementId: SM, getDestinationValues: ra, observeStore: bt, getInstanceId: OM, renderHTMLElement: xM, clearAllStyles: dE, getMaxDurationItemIndex: RM, getComputedStyle: CM, getInstanceOrigin: PM, reduceListToGroup: LM, shouldNamespaceEventParameter: NM, getNamespacedParameterId: DM, shouldAllowMediaQuery: Gr, cleanupHTMLElement: MM, clearObjectCache: FM, stringifyTarget: qM, mediaQueriesEqual: GM, shallowEqual: XM} = Mr.IX2VanillaUtils,
        {isPluginType: Xr, createPluginInstance: ia, getPluginDuration: VM} = Mr.IX2VanillaPlugins,
        iE = navigator.userAgent,
        kM = iE.match(/iPad/i) || iE.match(/iPhone/),
        UM = 12;
        nF = ["resize", "orientationchange"];
        iF = (e, t) => (0,
        sE.default)((0,
        cE.default)(e, t), uE.default),
        oF = (e, t) => {
            (0,
            $t.default)(e, (n, r) => {
                n.forEach( (i, o) => {
                    let s = r + na + o;
                    t(i, r, s)
                }
                )
            }
            )
        }
        ,
        aF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return qr({
                config: t,
                elementApi: Re
            })
        }
    }
    );
    var TE = f(ua => {
        "use strict";
        Object.defineProperty(ua, "__esModule", {
            value: !0
        });
        function lF(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        lF(ua, {
            actions: function() {
                return pF
            },
            destroy: function() {
                return IE
            },
            init: function() {
                return yF
            },
            setEnv: function() {
                return EF
            },
            store: function() {
                return Ur
            }
        });
        var fF = hi()
          , dF = gF((pp(),
        je(dp)))
          , sa = (ea(),
        je(mE))
          , pF = hF((Sr(),
        je(bg)));
        function gF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function _E(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (_E = function(r) {
                return r ? n : t
            }
            )(e)
        }
        function hF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var n = _E(t);
            if (n && n.has(e))
                return n.get(e);
            var r = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = e[o]
                }
            return r.default = e,
            n && n.set(e, r),
            r
        }
        var Ur = (0,
        fF.createStore)(dF.default);
        function EF(e) {
            e() && (0,
            sa.observeRequests)(Ur)
        }
        function yF(e) {
            IE(),
            (0,
            sa.startEngine)({
                store: Ur,
                rawData: e,
                allowEvents: !0
            })
        }
        function IE() {
            (0,
            sa.stopEngine)(Ur)
        }
    }
    );
    var SE = f( (TX, wE) => {
        "use strict";
        var bE = ke()
          , AE = TE();
        AE.setEnv(bE.env);
        bE.define("ix2", wE.exports = function() {
            return AE
        }
        )
    }
    );
    var xE = f( (bX, OE) => {
        "use strict";
        var Zt = ke();
        Zt.define("links", OE.exports = function(e, t) {
            var n = {}, r = e(window), i, o = Zt.env(), s = window.location, a = document.createElement("a"), u = "w--current", c = /index\.(html|php)$/, g = /\/$/, p, d;
            n.ready = n.design = n.preview = h;
            function h() {
                i = o && Zt.env("design"),
                d = Zt.env("slug") || s.pathname || "",
                Zt.scroll.off(I),
                p = [];
                for (var m = document.links, x = 0; x < m.length; ++x)
                    v(m[x]);
                p.length && (Zt.scroll.on(I),
                I())
            }
            function v(m) {
                if (!m.getAttribute("hreflang")) {
                    var x = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (a.href = x,
                    !(x.indexOf(":") >= 0)) {
                        var S = e(m);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash))
                                return;
                            var C = e(a.hash);
                            C.length && p.push({
                                link: S,
                                sec: C,
                                active: !1
                            });
                            return
                        }
                        if (!(x === "#" || x === "")) {
                            var P = a.href === s.href || x === d || c.test(x) && g.test(d);
                            w(S, u, P)
                        }
                    }
                }
            }
            function I() {
                var m = r.scrollTop()
                  , x = r.height();
                t.each(p, function(S) {
                    if (!S.link.attr("hreflang")) {
                        var C = S.link
                          , P = S.sec
                          , R = P.offset().top
                          , V = P.outerHeight()
                          , B = x * .5
                          , W = P.is(":visible") && R + V - B >= m && R + B <= m + x;
                        S.active !== W && (S.active = W,
                        w(C, u, W))
                    }
                })
            }
            function w(m, x, S) {
                var C = m.hasClass(x);
                S && C || !S && !C || (S ? m.addClass(x) : m.removeClass(x))
            }
            return n
        }
        )
    }
    );
    var CE = f( (AX, RE) => {
        "use strict";
        var Br = ke();
        Br.define("scroll", RE.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , n = window.location
              , r = v() ? null : window.history
              , i = e(window)
              , o = e(document)
              , s = e(document.body)
              , a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(D) {
                window.setTimeout(D, 15)
            }
              , u = Br.env("editor") ? ".w-editor-body" : "body"
              , c = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , g = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")"
              , d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , h = document.createElement("style");
            h.appendChild(document.createTextNode(d));
            function v() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            function w(D) {
                return I.test(D.hash) && D.host + D.pathname === n.host + n.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }
            function S(D, b) {
                var L;
                switch (b) {
                case "add":
                    L = D.attr("tabindex"),
                    L ? D.attr("data-wf-tabindex-swap", L) : D.attr("tabindex", "-1");
                    break;
                case "remove":
                    L = D.attr("data-wf-tabindex-swap"),
                    L ? (D.attr("tabindex", L),
                    D.removeAttr("data-wf-tabindex-swap")) : D.removeAttr("tabindex");
                    break
                }
                D.toggleClass("wf-force-outline-none", b === "add")
            }
            function C(D) {
                var b = D.currentTarget;
                if (!(Br.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
                    var L = w(b) ? b.hash : "";
                    if (L !== "") {
                        var H = e(L);
                        H.length && (D && (D.preventDefault(),
                        D.stopPropagation()),
                        P(L, D),
                        window.setTimeout(function() {
                            R(H, function() {
                                S(H, "add"),
                                H.get(0).focus({
                                    preventScroll: !0
                                }),
                                S(H, "remove")
                            })
                        }, D ? 0 : 300))
                    }
                }
            }
            function P(D) {
                if (n.hash !== D && r && r.pushState && !(Br.env.chrome && n.protocol === "file:")) {
                    var b = r.state && r.state.hash;
                    b !== D && r.pushState({
                        hash: D
                    }, "", D)
                }
            }
            function R(D, b) {
                var L = i.scrollTop()
                  , H = V(D);
                if (L !== H) {
                    var X = B(D, L, H)
                      , ee = Date.now()
                      , te = function() {
                        var N = Date.now() - ee;
                        window.scroll(0, W(L, H, N, X)),
                        N <= X ? a(te) : typeof b == "function" && b()
                    };
                    a(te)
                }
            }
            function V(D) {
                var b = e(c)
                  , L = b.css("position") === "fixed" ? b.outerHeight() : 0
                  , H = D.offset().top - L;
                if (D.data("scroll") === "mid") {
                    var X = i.height() - L
                      , ee = D.outerHeight();
                    ee < X && (H -= Math.round((X - ee) / 2))
                }
                return H
            }
            function B(D, b, L) {
                if (x())
                    return 0;
                var H = 1;
                return s.add(D).each(function(X, ee) {
                    var te = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(te) && te >= 0 && (H = te)
                }),
                (472.143 * Math.log(Math.abs(b - L) + 125) - 2e3) * H
            }
            function W(D, b, L, H) {
                return L > H ? b : D + (b - D) * Y(L / H)
            }
            function Y(D) {
                return D < .5 ? 4 * D * D * D : (D - 1) * (2 * D - 2) * (2 * D - 2) + 1
            }
            function ne() {
                var {WF_CLICK_EMPTY: D, WF_CLICK_SCROLL: b} = t;
                o.on(b, p, C),
                o.on(D, g, function(L) {
                    L.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: ne
            }
        }
        )
    }
    );
    var LE = f( (wX, PE) => {
        "use strict";
        var vF = ke();
        vF.define("touch", PE.exports = function(e) {
            var t = {}
              , n = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new r(o) : null
            }
            ;
            function r(o) {
                var s = !1, a = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), c, g;
                o.addEventListener("touchstart", p, !1),
                o.addEventListener("touchmove", d, !1),
                o.addEventListener("touchend", h, !1),
                o.addEventListener("touchcancel", v, !1),
                o.addEventListener("mousedown", p, !1),
                o.addEventListener("mousemove", d, !1),
                o.addEventListener("mouseup", h, !1),
                o.addEventListener("mouseout", v, !1);
                function p(w) {
                    var m = w.touches;
                    m && m.length > 1 || (s = !0,
                    m ? (a = !0,
                    c = m[0].clientX) : c = w.clientX,
                    g = c)
                }
                function d(w) {
                    if (s) {
                        if (a && w.type === "mousemove") {
                            w.preventDefault(),
                            w.stopPropagation();
                            return
                        }
                        var m = w.touches
                          , x = m ? m[0].clientX : w.clientX
                          , S = x - g;
                        g = x,
                        Math.abs(S) > u && n && String(n()) === "" && (i("swipe", w, {
                            direction: S > 0 ? "right" : "left"
                        }),
                        v())
                    }
                }
                function h(w) {
                    if (s && (s = !1,
                    a && w.type === "mouseup")) {
                        w.preventDefault(),
                        w.stopPropagation(),
                        a = !1;
                        return
                    }
                }
                function v() {
                    s = !1
                }
                function I() {
                    o.removeEventListener("touchstart", p, !1),
                    o.removeEventListener("touchmove", d, !1),
                    o.removeEventListener("touchend", h, !1),
                    o.removeEventListener("touchcancel", v, !1),
                    o.removeEventListener("mousedown", p, !1),
                    o.removeEventListener("mousemove", d, !1),
                    o.removeEventListener("mouseup", h, !1),
                    o.removeEventListener("mouseout", v, !1),
                    o = null
                }
                this.destroy = I
            }
            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var NE = f(ca => {
        "use strict";
        Object.defineProperty(ca, "__esModule", {
            value: !0
        });
        Object.defineProperty(ca, "default", {
            enumerable: !0,
            get: function() {
                return mF
            }
        });
        function mF(e, t, n, r, i, o, s, a, u, c, g, p, d) {
            return function(h) {
                e(h);
                var v = h.form
                  , I = {
                    name: v.attr("data-name") || v.attr("name") || "Untitled Form",
                    pageId: v.attr("data-wf-page-id") || "",
                    elementId: v.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: n.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(v.html()),
                    trackingCookies: r()
                };
                let w = v.attr("data-wf-flow");
                w && (I.wfFlow = w),
                i(h);
                var m = o(v, I.fields);
                if (m)
                    return s(m);
                if (I.fileUploads = a(v),
                u(h),
                !c) {
                    g(h);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(x) {
                    x && x.code === 200 && (h.success = !0),
                    g(h)
                }).fail(function() {
                    g(h)
                })
            }
        }
    }
    );
    var ME = f( (OX, DE) => {
        "use strict";
        var Hr = ke();
        Hr.define("forms", DE.exports = function(e, t) {
            var n = {}, r = e(document), i, o = window.location, s = window.XDomainRequest && !window.atob, a = ".w-form", u, c = /e(-)?mail/i, g = /^\S+@\S+$/, p = window.alert, d = Hr.env(), h, v, I, w = /list-manage[1-9]?.com/i, m = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            n.ready = n.design = n.preview = function() {
                x(),
                !d && !h && C()
            }
            ;
            function x() {
                u = e("html").attr("data-wf-site"),
                v = "https://webflow.com/api/v1/form/" + u,
                s && v.indexOf("https://webflow.com") >= 0 && (v = v.replace("https://webflow.com", "https://formdata.webflow.com")),
                I = `${v}/signFile`,
                i = e(a + " form"),
                i.length && i.each(S)
            }
            function S(N, U) {
                var z = e(U)
                  , F = e.data(U, a);
                F || (F = e.data(U, a, {
                    form: z
                })),
                P(F);
                var M = z.closest("div.w-form");
                F.done = M.find("> .w-form-done"),
                F.fail = M.find("> .w-form-fail"),
                F.fileUploads = M.find(".w-file-upload"),
                F.fileUploads.each(function(ie) {
                    X(ie, F)
                });
                var Q = F.form.attr("aria-label") || F.form.attr("data-name") || "Form";
                F.done.attr("aria-label") || F.form.attr("aria-label", Q),
                F.done.attr("tabindex", "-1"),
                F.done.attr("role", "region"),
                F.done.attr("aria-label") || F.done.attr("aria-label", Q + " success"),
                F.fail.attr("tabindex", "-1"),
                F.fail.attr("role", "region"),
                F.fail.attr("aria-label") || F.fail.attr("aria-label", Q + " failure");
                var ae = F.action = z.attr("action");
                if (F.handler = null,
                F.redirect = z.attr("data-redirect"),
                w.test(ae)) {
                    F.handler = b;
                    return
                }
                if (!ae) {
                    if (u) {
                        F.handler = ( () => {
                            let ie = NE().default;
                            return ie(P, o, Hr, Y, H, V, p, B, R, u, L, e, v)
                        }
                        )();
                        return
                    }
                    m()
                }
            }
            function C() {
                h = !0,
                r.on("submit", a + " form", function(ie) {
                    var J = e.data(this, a);
                    J.handler && (J.evt = ie,
                    J.handler(J))
                });
                let N = ".w-checkbox-input"
                  , U = ".w-radio-input"
                  , z = "w--redirected-checked"
                  , F = "w--redirected-focus"
                  , M = "w--redirected-focus-visible"
                  , Q = ":focus-visible, [data-wf-focus-visible]"
                  , ae = [["checkbox", N], ["radio", U]];
                r.on("change", a + ' form input[type="checkbox"]:not(' + N + ")", ie => {
                    e(ie.target).siblings(N).toggleClass(z)
                }
                ),
                r.on("change", a + ' form input[type="radio"]', ie => {
                    e(`input[name="${ie.target.name}"]:not(${N})`).map( (pe, tt) => e(tt).siblings(U).removeClass(z));
                    let J = e(ie.target);
                    J.hasClass("w-radio-input") || J.siblings(U).addClass(z)
                }
                ),
                ae.forEach( ([ie,J]) => {
                    r.on("focus", a + ` form input[type="${ie}"]:not(` + J + ")", pe => {
                        e(pe.target).siblings(J).addClass(F),
                        e(pe.target).filter(Q).siblings(J).addClass(M)
                    }
                    ),
                    r.on("blur", a + ` form input[type="${ie}"]:not(` + J + ")", pe => {
                        e(pe.target).siblings(J).removeClass(`${F} ${M}`)
                    }
                    )
                }
                )
            }
            function P(N) {
                var U = N.btn = N.form.find(':input[type="submit"]');
                N.wait = N.btn.attr("data-wait") || null,
                N.success = !1,
                U.prop("disabled", !1),
                N.label && U.val(N.label)
            }
            function R(N) {
                var U = N.btn
                  , z = N.wait;
                U.prop("disabled", !0),
                z && (N.label = U.val(),
                U.val(z))
            }
            function V(N, U) {
                var z = null;
                return U = U || {},
                N.find(':input:not([type="submit"]):not([type="file"])').each(function(F, M) {
                    var Q = e(M)
                      , ae = Q.attr("type")
                      , ie = Q.attr("data-name") || Q.attr("name") || "Field " + (F + 1);
                    ie = encodeURIComponent(ie);
                    var J = Q.val();
                    if (ae === "checkbox")
                        J = Q.is(":checked");
                    else if (ae === "radio") {
                        if (U[ie] === null || typeof U[ie] == "string")
                            return;
                        J = N.find('input[name="' + Q.attr("name") + '"]:checked').val() || null
                    }
                    typeof J == "string" && (J = e.trim(J)),
                    U[ie] = J,
                    z = z || ne(Q, ae, ie, J)
                }),
                z
            }
            function B(N) {
                var U = {};
                return N.find(':input[type="file"]').each(function(z, F) {
                    var M = e(F)
                      , Q = M.attr("data-name") || M.attr("name") || "File " + (z + 1)
                      , ae = M.attr("data-value");
                    typeof ae == "string" && (ae = e.trim(ae)),
                    U[Q] = ae
                }),
                U
            }
            let W = {
                _mkto_trk: "marketo"
            };
            function Y() {
                return document.cookie.split("; ").reduce(function(U, z) {
                    let F = z.split("=")
                      , M = F[0];
                    if (M in W) {
                        let Q = W[M]
                          , ae = F.slice(1).join("=");
                        U[Q] = ae
                    }
                    return U
                }, {})
            }
            function ne(N, U, z, F) {
                var M = null;
                return U === "password" ? M = "Passwords cannot be submitted." : N.attr("required") ? F ? c.test(N.attr("type")) && (g.test(F) || (M = "Please enter a valid email address for: " + z)) : M = "Please fill out the required field: " + z : z === "g-recaptcha-response" && !F && (M = "Please confirm you\u2019re not a robot."),
                M
            }
            function D(N) {
                H(N),
                L(N)
            }
            function b(N) {
                P(N);
                var U = N.form
                  , z = {};
                if (/^https/.test(o.href) && !/^https/.test(N.action)) {
                    U.attr("method", "post");
                    return
                }
                H(N);
                var F = V(U, z);
                if (F)
                    return p(F);
                R(N);
                var M;
                t.each(z, function(J, pe) {
                    c.test(pe) && (z.EMAIL = J),
                    /^((full[ _-]?)?name)$/i.test(pe) && (M = J),
                    /^(first[ _-]?name)$/i.test(pe) && (z.FNAME = J),
                    /^(last[ _-]?name)$/i.test(pe) && (z.LNAME = J)
                }),
                M && !z.FNAME && (M = M.split(" "),
                z.FNAME = M[0],
                z.LNAME = z.LNAME || M[1]);
                var Q = N.action.replace("/post?", "/post-json?") + "&c=?"
                  , ae = Q.indexOf("u=") + 2;
                ae = Q.substring(ae, Q.indexOf("&", ae));
                var ie = Q.indexOf("id=") + 3;
                ie = Q.substring(ie, Q.indexOf("&", ie)),
                z["b_" + ae + "_" + ie] = "",
                e.ajax({
                    url: Q,
                    data: z,
                    dataType: "jsonp"
                }).done(function(J) {
                    N.success = J.result === "success" || /already/.test(J.msg),
                    N.success || console.info("MailChimp error: " + J.msg),
                    L(N)
                }).fail(function() {
                    L(N)
                })
            }
            function L(N) {
                var U = N.form
                  , z = N.redirect
                  , F = N.success;
                if (F && z) {
                    Hr.location(z);
                    return
                }
                N.done.toggle(F),
                N.fail.toggle(!F),
                F ? N.done.focus() : N.fail.focus(),
                U.toggle(!F),
                P(N)
            }
            function H(N) {
                N.evt && N.evt.preventDefault(),
                N.evt = null
            }
            function X(N, U) {
                if (!U.fileUploads || !U.fileUploads[N])
                    return;
                var z, F = e(U.fileUploads[N]), M = F.find("> .w-file-upload-default"), Q = F.find("> .w-file-upload-uploading"), ae = F.find("> .w-file-upload-success"), ie = F.find("> .w-file-upload-error"), J = M.find(".w-file-upload-input"), pe = M.find(".w-file-upload-label"), tt = pe.children(), le = ie.find(".w-file-upload-error-msg"), E = ae.find(".w-file-upload-file"), q = ae.find(".w-file-remove-link"), j = E.find(".w-file-upload-file-name"), k = le.attr("data-w-size-error"), he = le.attr("data-w-type-error"), ht = le.attr("data-w-generic-error");
                if (d || pe.on("click keydown", function(_) {
                    _.type === "keydown" && _.which !== 13 && _.which !== 32 || (_.preventDefault(),
                    J.click())
                }),
                pe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                q.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                d)
                    J.on("click", function(_) {
                        _.preventDefault()
                    }),
                    pe.on("click", function(_) {
                        _.preventDefault()
                    }),
                    tt.on("click", function(_) {
                        _.preventDefault()
                    });
                else {
                    q.on("click keydown", function(_) {
                        if (_.type === "keydown") {
                            if (_.which !== 13 && _.which !== 32)
                                return;
                            _.preventDefault()
                        }
                        J.removeAttr("data-value"),
                        J.val(""),
                        j.html(""),
                        M.toggle(!0),
                        ae.toggle(!1),
                        pe.focus()
                    }),
                    J.on("change", function(_) {
                        z = _.target && _.target.files && _.target.files[0],
                        z && (M.toggle(!1),
                        ie.toggle(!1),
                        Q.toggle(!0),
                        Q.focus(),
                        j.text(z.name),
                        A() || R(U),
                        U.fileUploads[N].uploading = !0,
                        ee(z, y))
                    });
                    var nt = pe.outerHeight();
                    J.height(nt),
                    J.width(1)
                }
                function l(_) {
                    var O = _.responseJSON && _.responseJSON.msg
                      , K = ht;
                    typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0 ? K = he : typeof O == "string" && O.indexOf("MaxFileSizeError") === 0 && (K = k),
                    le.text(K),
                    J.removeAttr("data-value"),
                    J.val(""),
                    Q.toggle(!1),
                    M.toggle(!0),
                    ie.toggle(!0),
                    ie.focus(),
                    U.fileUploads[N].uploading = !1,
                    A() || P(U)
                }
                function y(_, O) {
                    if (_)
                        return l(_);
                    var K = O.fileName
                      , re = O.postData
                      , ge = O.fileId
                      , G = O.s3Url;
                    J.attr("data-value", ge),
                    te(G, re, z, K, T)
                }
                function T(_) {
                    if (_)
                        return l(_);
                    Q.toggle(!1),
                    ae.css("display", "inline-block"),
                    ae.focus(),
                    U.fileUploads[N].uploading = !1,
                    A() || P(U)
                }
                function A() {
                    var _ = U.fileUploads && U.fileUploads.toArray() || [];
                    return _.some(function(O) {
                        return O.uploading
                    })
                }
            }
            function ee(N, U) {
                var z = new URLSearchParams({
                    name: N.name,
                    size: N.size
                });
                e.ajax({
                    type: "GET",
                    url: `${I}?${z}`,
                    crossDomain: !0
                }).done(function(F) {
                    U(null, F)
                }).fail(function(F) {
                    U(F)
                })
            }
            function te(N, U, z, F, M) {
                var Q = new FormData;
                for (var ae in U)
                    Q.append(ae, U[ae]);
                Q.append("file", z, F),
                e.ajax({
                    type: "POST",
                    url: N,
                    data: Q,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(ie) {
                    M(ie)
                })
            }
            return n
        }
        )
    }
    );
    var qE = f( (xX, FE) => {
        "use strict";
        var gt = ke()
          , _F = Jr()
          , Ae = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        gt.define("navbar", FE.exports = function(e, t) {
            var n = {}, r = e.tram, i = e(window), o = e(document), s = t.debounce, a, u, c, g, p = gt.env(), d = '<div class="w-nav-overlay" data-wf-ignore />', h = ".w-nav", v = "w--open", I = "w--nav-dropdown-open", w = "w--nav-dropdown-toggle-open", m = "w--nav-dropdown-list-open", x = "w--nav-link-open", S = _F.triggers, C = e();
            n.ready = n.design = n.preview = P,
            n.destroy = function() {
                C = e(),
                R(),
                u && u.length && u.each(Y)
            }
            ;
            function P() {
                c = p && gt.env("design"),
                g = gt.env("editor"),
                a = e(document.body),
                u = o.find(h),
                u.length && (u.each(W),
                R(),
                V())
            }
            function R() {
                gt.resize.off(B)
            }
            function V() {
                gt.resize.on(B)
            }
            function B() {
                u.each(M)
            }
            function W(E, q) {
                var j = e(q)
                  , k = e.data(q, h);
                k || (k = e.data(q, h, {
                    open: !1,
                    el: j,
                    config: {},
                    selectedIdx: -1
                })),
                k.menu = j.find(".w-nav-menu"),
                k.links = k.menu.find(".w-nav-link"),
                k.dropdowns = k.menu.find(".w-dropdown"),
                k.dropdownToggle = k.menu.find(".w-dropdown-toggle"),
                k.dropdownList = k.menu.find(".w-dropdown-list"),
                k.button = j.find(".w-nav-button"),
                k.container = j.find(".w-container"),
                k.overlayContainerId = "w-nav-overlay-" + E,
                k.outside = z(k);
                var he = j.find(".w-nav-brand");
                he && he.attr("href") === "/" && he.attr("aria-label") == null && he.attr("aria-label", "home"),
                k.button.attr("style", "-webkit-user-select: text;"),
                k.button.attr("aria-label") == null && k.button.attr("aria-label", "menu"),
                k.button.attr("role", "button"),
                k.button.attr("tabindex", "0"),
                k.button.attr("aria-controls", k.overlayContainerId),
                k.button.attr("aria-haspopup", "menu"),
                k.button.attr("aria-expanded", "false"),
                k.el.off(h),
                k.button.off(h),
                k.menu.off(h),
                b(k),
                c ? (ne(k),
                k.el.on("setting" + h, L(k))) : (D(k),
                k.button.on("click" + h, N(k)),
                k.menu.on("click" + h, "a", U(k)),
                k.button.on("keydown" + h, H(k)),
                k.el.on("keydown" + h, X(k))),
                M(E, q)
            }
            function Y(E, q) {
                var j = e.data(q, h);
                j && (ne(j),
                e.removeData(q, h))
            }
            function ne(E) {
                E.overlay && (le(E, !0),
                E.overlay.remove(),
                E.overlay = null)
            }
            function D(E) {
                E.overlay || (E.overlay = e(d).appendTo(E.el),
                E.overlay.attr("id", E.overlayContainerId),
                E.parent = E.menu.parent(),
                le(E, !0))
            }
            function b(E) {
                var q = {}
                  , j = E.config || {}
                  , k = q.animation = E.el.attr("data-animation") || "default";
                q.animOver = /^over/.test(k),
                q.animDirect = /left$/.test(k) ? -1 : 1,
                j.animation !== k && E.open && t.defer(te, E),
                q.easing = E.el.attr("data-easing") || "ease",
                q.easing2 = E.el.attr("data-easing2") || "ease";
                var he = E.el.attr("data-duration");
                q.duration = he != null ? Number(he) : 400,
                q.docHeight = E.el.attr("data-doc-height"),
                E.config = q
            }
            function L(E) {
                return function(q, j) {
                    j = j || {};
                    var k = i.width();
                    b(E),
                    j.open === !0 && pe(E, !0),
                    j.open === !1 && le(E, !0),
                    E.open && t.defer(function() {
                        k !== i.width() && te(E)
                    })
                }
            }
            function H(E) {
                return function(q) {
                    switch (q.keyCode) {
                    case Ae.SPACE:
                    case Ae.ENTER:
                        return N(E)(),
                        q.preventDefault(),
                        q.stopPropagation();
                    case Ae.ESCAPE:
                        return le(E),
                        q.preventDefault(),
                        q.stopPropagation();
                    case Ae.ARROW_RIGHT:
                    case Ae.ARROW_DOWN:
                    case Ae.HOME:
                    case Ae.END:
                        return E.open ? (q.keyCode === Ae.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                        ee(E),
                        q.preventDefault(),
                        q.stopPropagation()) : (q.preventDefault(),
                        q.stopPropagation())
                    }
                }
            }
            function X(E) {
                return function(q) {
                    if (E.open)
                        switch (E.selectedIdx = E.links.index(document.activeElement),
                        q.keyCode) {
                        case Ae.HOME:
                        case Ae.END:
                            return q.keyCode === Ae.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                            ee(E),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ESCAPE:
                            return le(E),
                            E.button.focus(),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ARROW_LEFT:
                        case Ae.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1),
                            ee(E),
                            q.preventDefault(),
                            q.stopPropagation();
                        case Ae.ARROW_RIGHT:
                        case Ae.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1),
                            ee(E),
                            q.preventDefault(),
                            q.stopPropagation()
                        }
                }
            }
            function ee(E) {
                if (E.links[E.selectedIdx]) {
                    var q = E.links[E.selectedIdx];
                    q.focus(),
                    U(q)
                }
            }
            function te(E) {
                E.open && (le(E, !0),
                pe(E, !0))
            }
            function N(E) {
                return s(function() {
                    E.open ? le(E) : pe(E)
                })
            }
            function U(E) {
                return function(q) {
                    var j = e(this)
                      , k = j.attr("href");
                    if (!gt.validClick(q.currentTarget)) {
                        q.preventDefault();
                        return
                    }
                    k && k.indexOf("#") === 0 && E.open && le(E)
                }
            }
            function z(E) {
                return E.outside && o.off("click" + h, E.outside),
                function(q) {
                    var j = e(q.target);
                    g && j.closest(".w-editor-bem-EditorOverlay").length || F(E, j)
                }
            }
            var F = s(function(E, q) {
                if (E.open) {
                    var j = q.closest(".w-nav-menu");
                    E.menu.is(j) || le(E)
                }
            });
            function M(E, q) {
                var j = e.data(q, h)
                  , k = j.collapsed = j.button.css("display") !== "none";
                if (j.open && !k && !c && le(j, !0),
                j.container.length) {
                    var he = ae(j);
                    j.links.each(he),
                    j.dropdowns.each(he)
                }
                j.open && tt(j)
            }
            var Q = "max-width";
            function ae(E) {
                var q = E.container.css(Q);
                return q === "none" && (q = ""),
                function(j, k) {
                    k = e(k),
                    k.css(Q, ""),
                    k.css(Q) === "none" && k.css(Q, q)
                }
            }
            function ie(E, q) {
                q.setAttribute("data-nav-menu-open", "")
            }
            function J(E, q) {
                q.removeAttribute("data-nav-menu-open")
            }
            function pe(E, q) {
                if (E.open)
                    return;
                E.open = !0,
                E.menu.each(ie),
                E.links.addClass(x),
                E.dropdowns.addClass(I),
                E.dropdownToggle.addClass(w),
                E.dropdownList.addClass(m),
                E.button.addClass(v);
                var j = E.config
                  , k = j.animation;
                (k === "none" || !r.support.transform || j.duration <= 0) && (q = !0);
                var he = tt(E)
                  , ht = E.menu.outerHeight(!0)
                  , nt = E.menu.outerWidth(!0)
                  , l = E.el.height()
                  , y = E.el[0];
                if (M(0, y),
                S.intro(0, y),
                gt.redraw.up(),
                c || o.on("click" + h, E.outside),
                q) {
                    _();
                    return
                }
                var T = "transform " + j.duration + "ms " + j.easing;
                if (E.overlay && (C = E.menu.prev(),
                E.overlay.show().append(E.menu)),
                j.animOver) {
                    r(E.menu).add(T).set({
                        x: j.animDirect * nt,
                        height: he
                    }).start({
                        x: 0
                    }).then(_),
                    E.overlay && E.overlay.width(nt);
                    return
                }
                var A = l + ht;
                r(E.menu).add(T).set({
                    y: -A
                }).start({
                    y: 0
                }).then(_);
                function _() {
                    E.button.attr("aria-expanded", "true")
                }
            }
            function tt(E) {
                var q = E.config
                  , j = q.docHeight ? o.height() : a.height();
                return q.animOver ? E.menu.height(j) : E.el.css("position") !== "fixed" && (j -= E.el.outerHeight(!0)),
                E.overlay && E.overlay.height(j),
                j
            }
            function le(E, q) {
                if (!E.open)
                    return;
                E.open = !1,
                E.button.removeClass(v);
                var j = E.config;
                if ((j.animation === "none" || !r.support.transform || j.duration <= 0) && (q = !0),
                S.outro(0, E.el[0]),
                o.off("click" + h, E.outside),
                q) {
                    r(E.menu).stop(),
                    y();
                    return
                }
                var k = "transform " + j.duration + "ms " + j.easing2
                  , he = E.menu.outerHeight(!0)
                  , ht = E.menu.outerWidth(!0)
                  , nt = E.el.height();
                if (j.animOver) {
                    r(E.menu).add(k).start({
                        x: ht * j.animDirect
                    }).then(y);
                    return
                }
                var l = nt + he;
                r(E.menu).add(k).start({
                    y: -l
                }).then(y);
                function y() {
                    E.menu.height(""),
                    r(E.menu).set({
                        x: 0,
                        y: 0
                    }),
                    E.menu.each(J),
                    E.links.removeClass(x),
                    E.dropdowns.removeClass(I),
                    E.dropdownToggle.removeClass(w),
                    E.dropdownList.removeClass(m),
                    E.overlay && E.overlay.children().length && (C.length ? E.menu.insertAfter(C) : E.menu.prependTo(E.parent),
                    E.overlay.attr("style", "").hide()),
                    E.el.triggerHandler("w-close"),
                    E.button.attr("aria-expanded", "false")
                }
            }
            return n
        }
        )
    }
    );
    fa();
    da();
    wa();
    Oa();
    Ra();
    La();
    Jr();
    SE();
    xE();
    CE();
    LE();
    ME();
    qE();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".rich-text",
                "originalId": "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".rich-text",
                "originalId": "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1701780860874
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9472",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722914422956
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa947c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa947c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722914433199
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9487",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722914443807
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9491",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722914453348
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features.first",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe36",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features.first",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe36",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722914139066
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features.second",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe3f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features.second",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe3f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725401531509
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features.third",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe48",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features.third",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe48",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725401543379
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features.fourth",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe51",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features.fourth",
                "originalId": "66f30c8d2ac082d2aee64be3|f1ebc3db-c32c-0977-63ac-12a3728dfe51",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725401552066
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|b063efcf-b404-c1ec-7d87-e726ec74cfb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|b063efcf-b404-c1ec-7d87-e726ec74cfb1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1721663259941
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".steps-item",
                "originalId": "669161a569f5226fbfde1b26|2b729306-4b8d-43c7-adfc-dc5da651f4b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".steps-item",
                "originalId": "669161a569f5226fbfde1b26|2b729306-4b8d-43c7-adfc-dc5da651f4b6",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 10,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1721240273000
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a6715f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a6715f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725146725747
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67132",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67132",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725146649616
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67168",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67168",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725146741603
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-features-card",
                "originalId": "66a271444304cbd65ce7d717|20006f02-d28f-07bd-7911-96daa3571ced",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-features-card",
                "originalId": "66a271444304cbd65ce7d717|20006f02-d28f-07bd-7911-96daa3571ced",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721582755479
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-features-content",
                "originalId": "66a271444304cbd65ce7d717|20006f02-d28f-07bd-7911-96daa3571cf0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-features-content",
                "originalId": "66a271444304cbd65ce7d717|20006f02-d28f-07bd-7911-96daa3571cf0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1721659296845
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".phase-cards",
                "originalId": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".phase-cards",
                "originalId": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725411850845
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".phase-cards",
                "originalId": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".phase-cards",
                "originalId": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725411850845
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-card",
                "originalId": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ed1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-card",
                "originalId": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ed1",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-5-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1723656972250
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ed1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ed1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723690949373
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723690961373
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ee5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|4839229c-ed5d-d4e7-2648-ca5018eb3ee5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723690970253
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features-vantages",
                "originalId": "66a271444304cbd65ce7d6c1|397e3dc5-d77d-95e2-d86c-ac65b5d813b5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features-vantages",
                "originalId": "66a271444304cbd65ce7d6c1|397e3dc5-d77d-95e2-d86c-ac65b5d813b5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722228159511
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features-image-wrapper",
                "originalId": "278ce825-2865-12f3-c6ac-556776057531",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features-image-wrapper",
                "originalId": "278ce825-2865-12f3-c6ac-556776057531",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1698688186186
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-card",
                "originalId": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-card",
                "originalId": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725475815250
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-card",
                "originalId": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-card",
                "originalId": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725475815251
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "58705a91-993b-412e-4318-0b653b98e396",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fea9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650736077087
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "58705a91-993b-412e-4318-0b653b98e396",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fea9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650736077088
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650670952721
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650670952765
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c30|649b6887-9a86-5f5b-3f37-3b28e12819bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c30|649b6887-9a86-5f5b-3f37-3b28e12819bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1717383692976
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c30|42145e56-9b92-02a8-ebd6-60c5940ebe30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c30|42145e56-9b92-02a8-ebd6-60c5940ebe30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1716518972175
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c30|42145e56-9b92-02a8-ebd6-60c5940ebe31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c30|42145e56-9b92-02a8-ebd6-60c5940ebe31",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1717383705192
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2e|7a261098-6246-4cf2-8810-66308b5aa9d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2e|7a261098-6246-4cf2-8810-66308b5aa9d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1722276640699
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2e|7a261098-6246-4cf2-8810-66308b5aa9d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2e|7a261098-6246-4cf2-8810-66308b5aa9d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722532780696
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".larst-card-nav",
                "originalId": "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".larst-card-nav",
                "originalId": "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717176536032
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "6175a228-e7d6-087b-bd31-dc1f943e530e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "6175a228-e7d6-087b-bd31-dc1f943e530e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722268378640
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "6175a228-e7d6-087b-bd31-dc1f943e530e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "6175a228-e7d6-087b-bd31-dc1f943e530e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722268378640
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "66a271444304cbd65ce7d736|6303f0c5-1d94-e759-bf3a-929404d42f41",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "66a271444304cbd65ce7d736|6303f0c5-1d94-e759-bf3a-929404d42f41",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722875715005
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "66f30c8d2ac082d2aee64c4b|f1af4e7c-1e7d-dd51-9ba7-d83ecdacb112",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "66f30c8d2ac082d2aee64c4b|f1af4e7c-1e7d-dd51-9ba7-d83ecdacb112",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717426098537
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "66f30c8d2ac082d2aee64c4b|f1af4e7c-1e7d-dd51-9ba7-d83ecdacb112",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "66f30c8d2ac082d2aee64c4b|f1af4e7c-1e7d-dd51-9ba7-d83ecdacb112",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717426098542
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navbar-link",
                "originalId": "66a271444304cbd65ce7d736|6303f0c5-1d94-e759-bf3a-929404d42f41",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".navbar-link",
                "originalId": "66a271444304cbd65ce7d736|6303f0c5-1d94-e759-bf3a-929404d42f41",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1722875715005
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6deb3682-e1f7-9f5f-adeb-87fc1448026f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6deb3682-e1f7-9f5f-adeb-87fc1448026f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1717425000132
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-26-p",
                "smoothing": 95,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 100
            }],
            "createdOn": 1724856676887
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1393",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1724859648957
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1395",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1395",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1724859657068
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1397",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1397",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1724859664934
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725495214623
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725495214623
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c4f|db289675-c74d-bc81-254e-a35a802fe12b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c4f|db289675-c74d-bc81-254e-a35a802fe12b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1724524544565
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".primary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a27",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".primary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a27",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725548365019
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".primary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a27",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".primary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a27",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725548365020
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".secondary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|2a108617-490b-2f28-78d4-8a1394cea8a7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".secondary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|2a108617-490b-2f28-78d4-8a1394cea8a7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725549191232
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".secondary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|2a108617-490b-2f28-78d4-8a1394cea8a7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".secondary-button",
                "originalId": "66f30c8d2ac082d2aee64be3|2a108617-490b-2f28-78d4-8a1394cea8a7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725549191232
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".banner-button",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7de",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".banner-button",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7de",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725550419294
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".banner-button",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7de",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".banner-button",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7de",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1725550419295
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".read-more-tag",
                "originalId": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a1a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725552956709
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725552976798
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725552984772
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|aa42755f-aac4-abbd-e604-8f2924a89a30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725552992926
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|16b69460-66f0-c83d-2c5f-5e56a35c1391",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725553007143
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header",
                "originalId": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9469",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header",
                "originalId": "66f30c8d2ac082d2aee64be3|87eb6bc4-11f4-c138-41ab-f278fcfa9469",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553023047
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|8987cab3-f15e-de6f-2dab-834f91d30665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|8987cab3-f15e-de6f-2dab-834f91d30665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553039307
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa63",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa63",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553067953
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553077272
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa73",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa73",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553085641
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfaa3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfaa3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553093071
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfa83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553101909
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfab3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64be3|525f333e-16b4-a716-1c03-a45f2fadfab3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553109772
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|7dbe3024-2534-9a7c-b857-a1cff92264f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|7dbe3024-2534-9a7c-b857-a1cff92264f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553137502
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|5cd15078-0917-1144-16e4-03b59e1432fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|5cd15078-0917-1144-16e4-03b59e1432fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553145354
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|1d54e20a-0da0-ac1a-f5ca-165ac2479408",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|1d54e20a-0da0-ac1a-f5ca-165ac2479408",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1725553156330
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aaf4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aaf4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553170415
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aaf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aaf8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553179252
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553189911
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553197891
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692aafe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553205613
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 650,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553214072
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553222768
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553230612
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab06",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553239018
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553247041
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|ae73a4fa-4647-403b-a6f8-ac6ec692ab0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 650,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553259755
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|a4a9a67c-c774-e652-722a-738ad99a6e0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|a4a9a67c-c774-e652-722a-738ad99a6e0a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553376519
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553394280
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103fc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f7103fc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553401950
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f710405",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2d|0a0b49af-23b0-5822-d319-3cf64f710405",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553409541
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".banner-wrapper",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7d3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".banner-wrapper",
                "originalId": "2c183471-2570-b39f-3df9-c97e4826d7d3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553429560
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2e|09973273-c8a4-e412-bd7e-c098a9c2faa7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2e|09973273-c8a4-e412-bd7e-c098a9c2faa7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553472042
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2e|5e081170-3c9e-d2a6-72c3-1aebacbdac95",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2e|5e081170-3c9e-d2a6-72c3-1aebacbdac95",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553479941
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".features-heading-wrapper",
                "originalId": "66f30c8d2ac082d2aee64c2e|b1408095-9bd7-7928-bca7-f73ced0d7971",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".features-heading-wrapper",
                "originalId": "66f30c8d2ac082d2aee64c2e|b1408095-9bd7-7928-bca7-f73ced0d7971",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553554082
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".check-list",
                "originalId": "66f30c8d2ac082d2aee64c2e|b1408095-9bd7-7928-bca7-f73ced0d7979",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".check-list",
                "originalId": "66f30c8d2ac082d2aee64c2e|b1408095-9bd7-7928-bca7-f73ced0d7979",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553564759
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2e|de8d51a1-a9f1-e8fc-1d9c-a4336e447a0b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2e|de8d51a1-a9f1-e8fc-1d9c-a4336e447a0b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553591862
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c49|980a8621-76b9-aff7-a87c-734266717f1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c49|980a8621-76b9-aff7-a87c-734266717f1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553614882
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c49|eedf3d47-80d0-df4e-60d4-07d023f7177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c49|eedf3d47-80d0-df4e-60d4-07d023f7177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 450,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553627928
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c4f|8b742f1a-d0e3-4767-e898-d3a96ddf6063",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c4f|8b742f1a-d0e3-4767-e898-d3a96ddf6063",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553646104
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2f|1d97acc7-3130-86f4-40ba-1a94d1786e29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2f|1d97acc7-3130-86f4-40ba-1a94d1786e29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553664552
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c2f|a3760dc8-52b5-a161-8c80-bc918d6bf894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553676492
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-item",
                "originalId": "66f30c8d2ac082d2aee64c31|4fd9f7ce-fff1-7f8b-e126-f781888eb82e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-item",
                "originalId": "66f30c8d2ac082d2aee64c31|4fd9f7ce-fff1-7f8b-e126-f781888eb82e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553698450
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c31|6dfe2e56-0d24-fd1f-8406-55186147e82b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c31|6dfe2e56-0d24-fd1f-8406-55186147e82b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553708693
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c48|0c5faa6b-a3f7-3d99-b40b-106013b84d28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c48|0c5faa6b-a3f7-3d99-b40b-106013b84d28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553728898
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c30|9e763bc9-30bb-9a88-ed16-b136e8f7b8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c30|9e763bc9-30bb-9a88-ed16-b136e8f7b8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553761706
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c30|649b6887-9a86-5f5b-3f37-3b28e12819bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c30|649b6887-9a86-5f5b-3f37-3b28e12819bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-13-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725553776862
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c4a|66d8afcd506f8debb61e152500000000000c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c4a|66d8afcd506f8debb61e152500000000000c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553842931
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66f30c8d2ac082d2aee64c4b|66d8afd782991ca9e4fcf24800000000000b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66f30c8d2ac082d2aee64c4b|66d8afd782991ca9e4fcf24800000000000b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725553862203
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67134",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "93f4457d-ec22-3c66-b213-0b7ef6a67134",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725918334741
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "⚡ Steps Scale",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 4,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".steps-item",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d86000"]
                            },
                            "xValue": 0.9,
                            "yValue": 0.9,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".steps-item",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d86000"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1712236771176
        },
        "a-2": {
            "id": "a-2",
            "title": "⚡ Mask Frame",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mask-frame",
                            "selectorGuids": ["2f935563-9e3d-be75-3c4c-77eca12c96f7"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mask-frame",
                            "selectorGuids": ["2f935563-9e3d-be75-3c4c-77eca12c96f7"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".mask-frame",
                            "selectorGuids": ["2f935563-9e3d-be75-3c4c-77eca12c96f7"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1721582770598
        },
        "a-3": {
            "id": "a-3",
            "title": "☝️ Phase Cards - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "value": 0.2,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "globalSwatchId": "@var_variable-54a43b48",
                        "rValue": 251,
                        "bValue": 251,
                        "gValue": 251,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-cards",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 21,
                        "bValue": 21,
                        "gValue": 21,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "globalSwatchId": "--color--orange",
                        "rValue": 237,
                        "bValue": 69,
                        "gValue": 81,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-cards",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e5"]
                        },
                        "globalSwatchId": "--color--dark-grey",
                        "rValue": 31,
                        "bValue": 31,
                        "gValue": 31,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725411855013
        },
        "a-4": {
            "id": "a-4",
            "title": "☝️ Phase Cards - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "value": 0.2,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-number",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e2"]
                        },
                        "globalSwatchId": "@var_variable-54a43b48",
                        "rValue": 251,
                        "bValue": 251,
                        "gValue": 251,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phase-cards",
                            "selectorGuids": ["6807e0ea-957f-4914-061a-b4b8fca670e5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 21,
                        "bValue": 21,
                        "gValue": 21,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725411855013
        },
        "a-5": {
            "id": "a-5",
            "title": "⚡ Rotate Mouse Hover",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-card",
                                "selectorGuids": ["63f23c37-a64d-052f-010e-ce298e1c353f"]
                            },
                            "yValue": -3,
                            "zValue": null,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-card",
                                "selectorGuids": ["63f23c37-a64d-052f-010e-ce298e1c353f"]
                            },
                            "yValue": 3,
                            "zValue": null,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }, {
                "id": "a-5-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-card",
                                "selectorGuids": ["63f23c37-a64d-052f-010e-ce298e1c353f"]
                            },
                            "xValue": 3,
                            "yValue": null,
                            "zValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".team-card",
                                "selectorGuids": ["63f23c37-a64d-052f-010e-ce298e1c353f"]
                            },
                            "xValue": -3,
                            "yValue": null,
                            "zValue": null,
                            "xUnit": "deg",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }],
            "createdOn": 1723656976791
        },
        "a-6": {
            "id": "a-6",
            "title": "⚡ Features - Scroll Into View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1.4,
                        "yValue": 1.4,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1500,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1500,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1705023535606
        },
        "a-7": {
            "id": "a-7",
            "title": "☝️ Blog Posts - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1.025,
                        "yValue": 1.025,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1709833731498
        },
        "a-8": {
            "id": "a-8",
            "title": "☝️ Blog Posts - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image",
                            "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1709833801738
        },
        "a-9": {
            "id": "a-9",
            "title": "☝️ Tab link icon open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {},
                        "xValue": 180,
                        "zValue": null,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650668188024
        },
        "a-10": {
            "id": "a-10",
            "title": "☝️ Tab link icon close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1650668188024
        },
        "a-11": {
            "id": "a-11",
            "title": "☝️ Tab open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "heightValue": 0,
                        "widthUnit": "AUTO",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "yValue": -2,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 550,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 550,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650668188024
        },
        "a-12": {
            "id": "a-12",
            "title": "☝️ Tab close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 550,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "heightValue": 0,
                        "widthUnit": "AUTO",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 550,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-bottom",
                            "selectorGuids": ["0c8f49ef-40aa-b4c7-333a-60c33f5046f5"]
                        },
                        "yValue": -2,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1650668188024
        },
        "a-13": {
            "id": "a-13",
            "title": "⚡ Image Scroll",
            "continuousParameterGroups": [{
                "id": "a-13-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-13-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                            },
                            "xValue": 1.3,
                            "yValue": 1.3,
                            "locked": true
                        }
                    }, {
                        "id": "a-13-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                            },
                            "yValue": -5,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-13-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-13-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image",
                                "selectorGuids": ["d7b4494e-3d05-0e0f-cfb4-489bd9d85ffb"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vw",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1722276648844
        },
        "a-15": {
            "id": "a-15",
            "title": "☝️ Navbar Card Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 800,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717176342322
        },
        "a-22": {
            "id": "a-22",
            "title": "☝️ Navlink Mobile - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "flex"
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1717426103834
        },
        "a-24": {
            "id": "a-24",
            "title": "☝️ Navlink Mobile- Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {},
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717426103834
        },
        "a-14": {
            "id": "a-14",
            "title": "☝️ Navlink - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "flex"
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-14-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1717426103834
        },
        "a-16": {
            "id": "a-16",
            "title": "☝️ Navlink - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {},
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717426103834
        },
        "a-17": {
            "id": "a-17",
            "title": "☝️ Navbar - Home Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "id": "66a271444304cbd65ce7d717|558ebe4a-c96a-9c49-afa2-42e9f56f7195"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "id": "30ddc5a2-f02e-0392-5a0d-3d7d6db48b5a"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1717425003490
        },
        "a-26": {
            "id": "a-26",
            "title": "⚡ Home Hero Scale",
            "continuousParameterGroups": [{
                "id": "a-26-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-26-n-9",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.middle",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f2"]
                            },
                            "widthValue": 30,
                            "heightValue": 50,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }, {
                        "id": "a-26-n-11",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.left",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f1"]
                            },
                            "widthValue": 30,
                            "heightValue": 50,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }, {
                        "id": "a-26-n-13",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.right",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f3"]
                            },
                            "widthValue": 30,
                            "heightValue": 50,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 2,
                    "actionItems": [{
                        "id": "a-26-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.right",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f3"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.left",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f1"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 10,
                    "actionItems": [{
                        "id": "a-26-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.middle",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f2"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-26-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.middle",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f2"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-10",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.middle",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f2"]
                            },
                            "widthValue": 90,
                            "heightValue": 90,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }, {
                        "id": "a-26-n-12",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.left",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f1"]
                            },
                            "widthValue": 30,
                            "heightValue": 90,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }, {
                        "id": "a-26-n-14",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.right",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f3"]
                            },
                            "widthValue": 30,
                            "heightValue": 90,
                            "widthUnit": "vw",
                            "heightUnit": "vh",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-26-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.right",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f3"]
                            },
                            "xValue": 40,
                            "yValue": -5,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-26-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-images.left",
                                "selectorGuids": ["e361c17b-cb41-1163-5d78-b4f62249f7f0", "e361c17b-cb41-1163-5d78-b4f62249f7f1"]
                            },
                            "xValue": -40,
                            "yValue": -5,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1724856683181
        },
        "a-27": {
            "id": "a-27",
            "title": "☝️ Tag - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".opacity-50",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bca"]
                        },
                        "value": 0.5,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".opacity-50",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bca"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725495218128
        },
        "a-28": {
            "id": "a-28",
            "title": "☝️ Tag - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".opacity-50",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bca"]
                        },
                        "value": 0.5,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725495218128
        },
        "a-31": {
            "id": "a-31",
            "title": "☝️ Button Primary - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-elipse",
                            "selectorGuids": ["c4c91aa5-42de-636f-e674-b85917534a2c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-elipse",
                            "selectorGuids": ["c4c91aa5-42de-636f-e674-b85917534a2c"]
                        },
                        "yValue": -40,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725548369547
        },
        "a-32": {
            "id": "a-32",
            "title": "☝️ Button Primary - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-elipse",
                            "selectorGuids": ["c4c91aa5-42de-636f-e674-b85917534a2c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725548369547
        },
        "a-33": {
            "id": "a-33",
            "title": "☝️ Button Secondary - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon",
                            "selectorGuids": ["4755b964-1cee-9f6a-86b3-7ede5257d311"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon",
                            "selectorGuids": ["4755b964-1cee-9f6a-86b3-7ede5257d311"]
                        },
                        "xValue": 150,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1720535116218
        },
        "a-34": {
            "id": "a-34",
            "title": "☝️ Button Secondary - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".icon",
                            "selectorGuids": ["4755b964-1cee-9f6a-86b3-7ede5257d311"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-icon.absolute",
                            "selectorGuids": ["6026eb3e-1b6f-43e2-b9a5-ba315142086a", "6026eb3e-1b6f-43e2-b9a5-ba315142086c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1720535116218
        },
        "a-35": {
            "id": "a-35",
            "title": "☝️ Banner - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-fill",
                            "selectorGuids": ["66658869-18ea-752f-3da5-d9c84cd5c587"]
                        },
                        "widthValue": 0,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bd0"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-fill",
                            "selectorGuids": ["66658869-18ea-752f-3da5-d9c84cd5c587"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bd0"]
                        },
                        "xValue": 170,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1725550423830
        },
        "a-36": {
            "id": "a-36",
            "title": "☝️ Banner - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outExpo",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-fill",
                            "selectorGuids": ["66658869-18ea-752f-3da5-d9c84cd5c587"]
                        },
                        "widthValue": 0,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow",
                            "selectorGuids": ["42060db2-37b7-874f-6e91-6dfc9c395bd0"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1725550423830
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
