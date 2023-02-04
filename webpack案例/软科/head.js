const CryptoJS = require('crypto-js')
window = global
var use;
!function (e) {
    function o(data) {
        for (var o, n, d = data[0], l = data[1], m = data[2], i = 0, y = []; i < d.length; i++)
            n = d[i],
            Object.prototype.hasOwnProperty.call(r, n) && r[n] && y.push(r[n][0]),
                r[n] = 0;
        for (o in l)
            Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (f && f(data); y.length;)
            y.shift()();
        return c.push.apply(c, m || []),
            t()
    }

    function t() {
        for (var e, i = 0; i < c.length; i++) {
            for (var o = c[i], t = !0, n = 1; n < o.length; n++) {
                var l = o[n];
                0 !== r[l] && (t = !1)
            }
            t && (c.splice(i--, 1),
                e = d(d.s = o[0]))
        }
        return e
    }

    var n = {}
        , r = {
        110: 0
    }
        , c = [];

    function d(o) {
        if (n[o])
            return n[o].exports;
        var t = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(t.exports, t, t.exports, d),
            t.l = !0,
            t.exports
    }

    d.e = function (e) {
        var o = []
            , t = r[e];
        if (0 !== t)
            if (t)
                o.push(t[2]);
            else {
                var n = new Promise((function (o, n) {
                        t = r[e] = [o, n]
                    }
                ));
                o.push(t[2] = n);
                var c, script = document.createElement("script");
                script.charset = "utf-8",
                    script.timeout = 120,
                d.nc && script.setAttribute("nonce", d.nc),
                    script.src = function (e) {
                        return d.p + "" + ({
                            1: "node_modules/4dc38066",
                            2: "node_modules/7b85abd6",
                            3: "commons/37866d0e",
                            4: "commons/2be49998",
                            5: "node_modules/d4165d3a",
                            6: "pages/about/components/rank_history",
                            7: "pages/influence/components/influence_list",
                            9: "pages/404",
                            10: "pages/about/components/auto_scroll",
                            11: "pages/about/components/banner",
                            12: "pages/about/components/company_beliefs",
                            13: "pages/about/components/contact_us",
                            14: "pages/about/components/global_impact",
                            15: "pages/about/components/history_detail",
                            16: "pages/about/components/institution",
                            17: "pages/about/components/join_us",
                            18: "pages/about/components/product_services",
                            19: "pages/about/components/section_title",
                            20: "pages/about/index",
                            21: "pages/account/comment",
                            22: "pages/account/components/CommentTab",
                            23: "pages/account/components/RecommendTab",
                            24: "pages/account/favorites",
                            25: "pages/account/person",
                            26: "pages/account/recommend",
                            27: "pages/account/settings",
                            28: "pages/auth/back/_id",
                            29: "pages/components/bg-section",
                            30: "pages/components/card-item",
                            31: "pages/components/card-section",
                            32: "pages/components/ranking-item",
                            33: "pages/contact",
                            34: "pages/index",
                            35: "pages/influence/components/CarouselTab",
                            36: "pages/influence/components/ProcessTab",
                            37: "pages/influence/components/banner",
                            38: "pages/influence/components/influence_item",
                            39: "pages/influence/index",
                            40: "pages/institution/_id",
                            41: "pages/institution/changepage/_id",
                            42: "pages/institution/index",
                            43: "pages/methodology/arwu/2003",
                            44: "pages/methodology/arwu/2004",
                            45: "pages/methodology/arwu/2005",
                            46: "pages/methodology/arwu/2006",
                            47: "pages/methodology/arwu/2007",
                            48: "pages/methodology/arwu/2008",
                            49: "pages/methodology/arwu/2009",
                            50: "pages/methodology/arwu/2010",
                            51: "pages/methodology/arwu/2011",
                            52: "pages/methodology/arwu/2012",
                            53: "pages/methodology/arwu/2013",
                            54: "pages/methodology/arwu/2014",
                            55: "pages/methodology/arwu/2015",
                            56: "pages/methodology/arwu/2016",
                            57: "pages/methodology/arwu/2017",
                            58: "pages/methodology/arwu/2018",
                            59: "pages/methodology/arwu/2019",
                            60: "pages/methodology/arwu/2020",
                            61: "pages/methodology/arwu/2021",
                            62: "pages/methodology/bcmr/2021",
                            63: "pages/methodology/bcsr/2017",
                            64: "pages/methodology/bcsr/2018",
                            65: "pages/methodology/bcsr/2019",
                            66: "pages/methodology/bcsr/2020",
                            67: "pages/methodology/bcsr/2021",
                            68: "pages/methodology/bcur/2015",
                            69: "pages/methodology/bcur/2016",
                            70: "pages/methodology/bcur/2017",
                            71: "pages/methodology/bcur/2018",
                            72: "pages/methodology/bcur/2019",
                            73: "pages/methodology/bcur/2020",
                            74: "pages/methodology/bcur/2021",
                            75: "pages/methodology/gras/2017",
                            76: "pages/methodology/gras/2018",
                            77: "pages/methodology/gras/2019",
                            78: "pages/methodology/gras/2020",
                            79: "pages/methodology/gras/2021",
                            80: "pages/methodology/grsssd/2016",
                            81: "pages/methodology/grsssd/2017",
                            82: "pages/methodology/grsssd/2018",
                            83: "pages/methodology/grsssd/2020",
                            84: "pages/methodology/grsssd/2021",
                            85: "pages/methodology/rtugc/2011",
                            86: "pages/methodology/rtugc/2012",
                            87: "pages/methodology/rtugc/2013",
                            88: "pages/methodology/rtugc/2014",
                            89: "pages/methodology/rtugc/2015",
                            90: "pages/methodology/rtugc/2016",
                            91: "pages/methodology/rtugc/2017",
                            92: "pages/methodology/rtugc/2018",
                            93: "pages/methodology/rtugc/2019",
                            94: "pages/methodology/rtugc/2020",
                            95: "pages/news/arwu/arwu-2021",
                            96: "pages/news/bcsr-2020",
                            97: "pages/news/bcsr-2021",
                            98: "pages/rankings/arwu/_year",
                            99: "pages/rankings/bcmr/_year/_code",
                            100: "pages/rankings/bcmr/_year/index",
                            101: "pages/rankings/bcsr/_year/_code",
                            102: "pages/rankings/bcsr/_year/index",
                            103: "pages/rankings/bcur/_year",
                            104: "pages/rankings/gras/_year/_code",
                            105: "pages/rankings/gras/_year/index",
                            106: "pages/rankings/grsssd/_year",
                            107: "pages/rankings/index",
                            108: "pages/rankings/rtugc/_year",
                            109: "pages/statement"
                        }[e] || e) + "." + {
                            1: "9a5c61a",
                            2: "4528df8",
                            3: "4e41fe2",
                            4: "8718dff",
                            5: "fb455a0",
                            6: "d9a6206",
                            7: "98ada0f",
                            9: "97ae393",
                            10: "c04b53d",
                            11: "3f90371",
                            12: "1d6c626",
                            13: "f8dae32",
                            14: "9769a31",
                            15: "b39c5d9",
                            16: "2d0af11",
                            17: "3ddd963",
                            18: "7bb2800",
                            19: "6ec5a79",
                            20: "77a00c2",
                            21: "e78c57a",
                            22: "92a5a04",
                            23: "6ea7710",
                            24: "3dcf860",
                            25: "156d70c",
                            26: "b3fd01c",
                            27: "609aea5",
                            28: "bd1baca",
                            29: "bb84111",
                            30: "f6e98c3",
                            31: "601abc4",
                            32: "9535ab2",
                            33: "e408831",
                            34: "a5d8b4c",
                            35: "055a196",
                            36: "8b01d8e",
                            37: "dcfda82",
                            38: "40f03b9",
                            39: "7143f41",
                            40: "45965be",
                            41: "bd09ebf",
                            42: "9510c13",
                            43: "c984c76",
                            44: "9abfba4",
                            45: "daae68d",
                            46: "c034736",
                            47: "7b58015",
                            48: "01b9319",
                            49: "0e154dd",
                            50: "709de4f",
                            51: "7a9df77",
                            52: "f1580ab",
                            53: "b105330",
                            54: "150fe0a",
                            55: "999578c",
                            56: "73c6067",
                            57: "d0f7c9f",
                            58: "54a28fa",
                            59: "3e1a3f4",
                            60: "c2e83c0",
                            61: "2f1af52",
                            62: "86773bc",
                            63: "44d7fe3",
                            64: "43456b7",
                            65: "4068ac6",
                            66: "b9fcd19",
                            67: "c5a7c5b",
                            68: "ce94853",
                            69: "0de35c8",
                            70: "67f39d1",
                            71: "b583860",
                            72: "bf16d0c",
                            73: "787e94e",
                            74: "eb02a6d",
                            75: "c4cf8b7",
                            76: "809d923",
                            77: "989ae2f",
                            78: "5fa12f5",
                            79: "eb2c244",
                            80: "283c76b",
                            81: "58ad8f7",
                            82: "e26fcca",
                            83: "c45b286",
                            84: "48cb052",
                            85: "2e0116f",
                            86: "5f8f12a",
                            87: "5a8bee4",
                            88: "885ba1b",
                            89: "e1ed670",
                            90: "1b1b460",
                            91: "68d903f",
                            92: "714905e",
                            93: "f20305d",
                            94: "35e6927",
                            95: "cf6e1ca",
                            96: "ae0b17c",
                            97: "5cf01c9",
                            98: "e76c5e3",
                            99: "d135317",
                            100: "369541f",
                            101: "b1cac2c",
                            102: "0026523",
                            103: "d14534d",
                            104: "d527b29",
                            105: "455906d",
                            106: "a372f27",
                            107: "3c3d728",
                            108: "df4486e",
                            109: "ce93734"
                        }[e] + ".js"
                    }(e);
                var l = new Error;
                c = function (o) {
                    script.onerror = script.onload = null,
                        clearTimeout(m);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var n = o && ("load" === o.type ? "missing" : o.type)
                                , c = o && o.target && o.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")",
                                l.name = "ChunkLoadError",
                                l.type = n,
                                l.request = c,
                                t[1](l)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var m = setTimeout((function () {
                        c({
                            type: "timeout",
                            target: script
                        })
                    }
                ), 12e4);
                script.onerror = script.onload = c,
                    document.head.appendChild(script)
            }
        return Promise.all(o)
    }
        ,
        d.m = e,
        d.c = n,
        d.d = function (e, o, t) {
            d.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: t
            })
        }
        ,
        d.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        d.t = function (e, o) {
            if (1 & o && (e = d(e)),
            8 & o)
                return e;
            if (4 & o && "object" == typeof e && e && e.__esModule)
                return e;
            var t = Object.create(null);
            if (d.r(t),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & o && "string" != typeof e)
                for (var n in e)
                    d.d(t, n, function (o) {
                        return e[o]
                    }
                        .bind(null, n));
            return t
        }
        ,
        d.n = function (e) {
            var o = e && e.__esModule ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    }
            ;
            return d.d(o, "a", o),
                o
        }
        ,
        d.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e)
        }
        ,
        d.p = "/_nuxt/",
        d.oe = function (e) {
            throw console.error(e),
                e
        }
    ;
    var l = window.webpackJsonp = window.webpackJsonp || []
        , m = l.push.bind(l);
    l.push = o,
        l = l.slice();
    for (var i = 0; i < l.length; i++)
        o(l[i]);
    var f = m;
    t()
    use = d
}(
    {
        // 408: function (t, e, n) {
        //     var r = n(29)
        //         , o = n(291)
        //         , c = String.fromCharCode
        //         , f = String.fromCodePoint;
        //     r(r.S + r.F * (!!f && 1 != f.length), "String", {
        //         fromCodePoint: function (t) {
        //             for (var code, e = [], n = arguments.length, i = 0; n > i;) {
        //                 if (code = +arguments[i++],
        //                 o(code, 1114111) !== code)
        //                     throw RangeError(code + " is not a valid code point");
        //                 e.push(code < 65536 ? c(code) : c(55296 + ((code -= 65536) >> 10), code % 1024 + 56320))
        //             }
        //             return e.join("")
        //         }
        //     })
        // },
        // 29: function (t, e, n) {
        //     var r = n(33)
        //         , o = n(95)
        //         , c = n(97)
        //         , f = n(62)
        //         , l = n(119)
        //         , d = function (t, e, source) {
        //         var n, h, v, y, m = t & d.F, _ = t & d.G, w = t & d.S, x = t & d.P, S = t & d.B,
        //             O = _ ? r : w ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, A = _ ? o : o[e] || (o[e] = {}),
        //             E = A.prototype || (A.prototype = {});
        //         for (n in _ && (source = e),
        //             source)
        //             v = ((h = !m && O && void 0 !== O[n]) ? O : source)[n],
        //                 y = S && h ? l(v, r) : x && "function" == typeof v ? l(Function.call, v) : v,
        //             O && f(O, n, v, t & d.U),
        //             A[n] != v && c(A, n, y),
        //             x && E[n] != v && (E[n] = v)
        //     };
        //     r.core = o,
        //         d.F = 1,
        //         d.G = 2,
        //         d.S = 4,
        //         d.P = 8,
        //         d.B = 16,
        //         d.W = 32,
        //         d.U = 64,
        //         d.R = 128,
        //         t.exports = d
        // },
        // 95: function (t, e) {
        //     var n = t.exports = {
        //         version: "2.6.11"
        //     };
        //     "number" == typeof __e && (__e = n)
        // },
        // 33: function (t, e) {
        //     var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        //     "number" == typeof __g && (__g = n)
        // },
        // 291: function (t, e, n) {
        //     var r = n(172)
        //         , o = Math.max
        //         , c = Math.min;
        //     t.exports = function (t, e) {
        //         return (t = r(t)) < 0 ? o(t + e, 0) : c(t, e)
        //     }
        // },
        91: function (t, e, n) {
            var r;
            t.exports = (r = n(18),
                n(228),
                n(905),
                n(906),
                n(144),
                n(145),
                n(321),
                n(459),
                n(907),
                n(460),
                n(908),
                n(909),
                n(910),
                n(322),
                n(911),
                n(124),
                n(39),
                n(912),
                n(913),
                n(914),
                n(915),
                n(916),
                n(917),
                n(918),
                n(919),
                n(920),
                n(921),
                n(922),
                n(923),
                n(924),
                n(925),
                n(926),
                n(927),
                r)
        },
        18: function (t, e, n) {
            (function (e) {
                    var r;
                    t.exports = (r = r || function (t, r) {
                        var o;
                        if ("undefined" != typeof window && window.crypto && (o = window.crypto),
                        !o && "undefined" != typeof window && window.msCrypto && (o = window.msCrypto),
                        !o && void 0 !== e && e.crypto && (o = e.crypto),
                            !o)
                            try {
                                o = n(814)
                            } catch (t) {
                            }
                        var c = function () {
                            if (o) {
                                if ("function" == typeof o.getRandomValues)
                                    try {
                                        return o.getRandomValues(new Uint32Array(1))[0]
                                    } catch (t) {
                                    }
                                if ("function" == typeof o.randomBytes)
                                    try {
                                        return o.randomBytes(4).readInt32LE()
                                    } catch (t) {
                                    }
                            }
                            throw new Error("Native crypto module could not be used to get secure random number.")
                        }
                            , l = Object.create || function () {
                            function t() {
                            }

                            return function (e) {
                                var n;
                                return t.prototype = e,
                                    n = new t,
                                    t.prototype = null,
                                    n
                            }
                        }()
                            , h = {}
                            , d = h.lib = {}
                            , f = d.Base = {
                            extend: function (t) {
                                var e = l(this);
                                return t && e.mixIn(t),
                                e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                                        e.$super.init.apply(this, arguments)
                                    }
                                ),
                                    e.init.prototype = e,
                                    e.$super = this,
                                    e
                            },
                            create: function () {
                                var t = this.extend();
                                return t.init.apply(t, arguments),
                                    t
                            },
                            init: function () {
                            },
                            mixIn: function (t) {
                                for (var e in t)
                                    t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                            , m = d.WordArray = f.extend({
                            init: function (t, e) {
                                t = this.words = t || [],
                                    this.sigBytes = null != e ? e : 4 * t.length
                            },
                            toString: function (t) {
                                return (t || y).stringify(this)
                            },
                            concat: function (t) {
                                var e = this.words
                                    , n = t.words
                                    , r = this.sigBytes
                                    , o = t.sigBytes;
                                if (this.clamp(),
                                r % 4)
                                    for (var i = 0; i < o; i++) {
                                        var c = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                        e[r + i >>> 2] |= c << 24 - (r + i) % 4 * 8
                                    }
                                else
                                    for (i = 0; i < o; i += 4)
                                        e[r + i >>> 2] = n[i >>> 2];
                                return this.sigBytes += o,
                                    this
                            },
                            clamp: function () {
                                var e = this.words
                                    , n = this.sigBytes;
                                e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                                    e.length = t.ceil(n / 4)
                            },
                            clone: function () {
                                var t = f.clone.call(this);
                                return t.words = this.words.slice(0),
                                    t
                            },
                            random: function (t) {
                                for (var e = [], i = 0; i < t; i += 4)
                                    e.push(c());
                                return new m.init(e, t)
                            }
                        })
                            , v = h.enc = {}
                            , y = v.Hex = {
                            stringify: function (t) {
                                for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                    var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    r.push((o >>> 4).toString(16)),
                                        r.push((15 & o).toString(16))
                                }
                                return r.join("")
                            },
                            parse: function (t) {
                                for (var e = t.length, n = [], i = 0; i < e; i += 2)
                                    n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new m.init(n, e / 2)
                            }
                        }
                            , _ = v.Latin1 = {
                            stringify: function (t) {
                                for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                    var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    r.push(String.fromCharCode(o))
                                }
                                return r.join("")
                            },
                            parse: function (t) {
                                for (var e = t.length, n = [], i = 0; i < e; i++)
                                    n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new m.init(n, e)
                            }
                        }
                            , M = v.Utf8 = {
                            stringify: function (t) {
                                try {
                                    return decodeURIComponent(escape(_.stringify(t)))
                                } catch (t) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function (t) {
                                return _.parse(unescape(encodeURIComponent(t)))
                            }
                        }
                            , w = d.BufferedBlockAlgorithm = f.extend({
                            reset: function () {
                                this._data = new m.init,
                                    this._nDataBytes = 0
                            },
                            _append: function (data) {
                                "string" == typeof data && (data = M.parse(data)),
                                    this._data.concat(data),
                                    this._nDataBytes += data.sigBytes
                            },
                            _process: function (e) {
                                var n, data = this._data, r = data.words, o = data.sigBytes, c = this.blockSize,
                                    l = o / (4 * c),
                                    h = (l = e ? t.ceil(l) : t.max((0 | l) - this._minBufferSize, 0)) * c,
                                    d = t.min(4 * h, o);
                                if (h) {
                                    for (var f = 0; f < h; f += c)
                                        this._doProcessBlock(r, f);
                                    n = r.splice(0, h),
                                        data.sigBytes -= d
                                }
                                return new m.init(n, d)
                            },
                            clone: function () {
                                var t = f.clone.call(this);
                                return t._data = this._data.clone(),
                                    t
                            },
                            _minBufferSize: 0
                        })
                            , x = (d.Hasher = w.extend({
                            cfg: f.extend(),
                            init: function (t) {
                                this.cfg = this.cfg.extend(t),
                                    this.reset()
                            },
                            reset: function () {
                                w.reset.call(this),
                                    this._doReset()
                            },
                            update: function (t) {
                                return this._append(t),
                                    this._process(),
                                    this
                            },
                            finalize: function (t) {
                                return t && this._append(t),
                                    this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function (t) {
                                return function (e, n) {
                                    return new t.init(n).finalize(e)
                                }
                            },
                            _createHmacHelper: function (t) {
                                return function (e, n) {
                                    return new x.HMAC.init(t, n).finalize(e)
                                }
                            }
                        }),
                            h.algo = {});
                        return h
                    }(Math),
                        r)
                }
            ).call(this, n(30))
        },
    }
);
// $t = (use(408),
//     use(91))
var qt = {
    arr0: [161, 65, 7, 6, 94, 210, 25, 42, 44, 89, 27, 57, 139, 56, 189, 28, 73, 107, 165, 33, 137, 63, 177, 185, 161, 91, 82, 130, 147, 159, 62, 45, 62, 141, 0, 60]
}
Gt = function (t) {
    var e = qt.arr0.length
        , n = new Array(e);
    return qt.arr0.forEach((function (r, i) {
            n[i] = r ^ t[e - 1 - i]
        }
    )),
        String.fromCodePoint.apply(String, n)
}

// function head(t, e, time) {
//     n = {}
//     base = '/api'
//     r = time - (new Date).getTime()
//     var o = Gt([10, 52, 187, 12, 28, 14, 168, 164, 183, 51, 56, 145, 148, 134, 12, 190, 64, 136, 88, 112, 36, 137, 21, 191, 13, 42, 96, 1, 78, 46, 183, 111, 55, 49, 118, 151])
//         , c = function (t) {
//         if (!(t && t instanceof Object))
//             return "";
//         var e = Object.keys(t);
//         return e.sort(),
//             e.map((function (e) {
//                     return e + "=" + t[e]
//                 }
//             )).join("&")
//     }(n)
//         , l = e.replace(base, "");
//     l = l.replace("/api", "");
//     var h = t.toUpperCase() + " " + l + " " + c
//         , d = r + (new Date).getTime()
//         , f = "3#" + o + "#" + h + "#" + d
//         , m = "3:" + Bt.a.SHA256(f) + ":" + d;
//     return m = Bt.a.enc.Utf8.parse(m),
//         Bt.a.enc.Base64.stringify(m)
// }

function head(t, e, time) {
    n = {}
    base = '/api'
    r = time - (new Date).getTime()
    var o = Gt([10, 52, 187, 12, 28, 14, 168, 164, 183, 51, 56, 145, 148, 134, 12, 190, 64, 136, 88, 112, 36, 137, 21, 191, 13, 42, 96, 1, 78, 46, 183, 111, 55, 49, 118, 151])
        , c = function (t) {
        if (!(t && t instanceof Object))
            return "";
        var e = Object.keys(t);
        return e.sort(),
            e.map((function (e) {
                    return e + "=" + t[e]
                }
            )).join("&")
    }(n)
        , l = e.replace(base, "");
    l = l.replace("/api", "");
    var h = t.toUpperCase() + " " + l + " " + c
        , d = r + (new Date).getTime()
        , f = "3#" + o + "#" + h + "#" + d
        , m = "3:" + CryptoJS.SHA256(f) + ":" + d;
    return m = CryptoJS.enc.Utf8.parse(m),
        CryptoJS.enc.Base64.stringify(m)
}

t = 'get'
e = '/api/v2010/inst/tsinghua-university'
r = 1648967393926

// 请求返回的
// Kt =
console.log(head(t, e, r))