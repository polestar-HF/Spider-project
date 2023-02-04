window = global
// 定义全局变量（接收导出器）
var ram;
!function (e) {
    function n(data) {
        for (var n, t, c = data[0], l = data[1], f = data[2], i = 0, m = []; i < c.length; i++)
            t = c[i],
            Object.prototype.hasOwnProperty.call(o, t) && o[t] && m.push(o[t][0]),
                o[t] = 0;
        for (n in l)
            Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (h && h(data); m.length;)
            m.shift()();
        return d.push.apply(d, f || []),
            r()
    }

    function r() {
        for (var e, i = 0; i < d.length; i++) {
            for (var n = d[i], r = !0, t = 1; t < n.length; t++) {
                var l = n[t];
                0 !== o[l] && (r = !1)
            }
            r && (d.splice(i--, 1),
                e = c(c.s = n[0]))
        }
        return e
    }

    var t = {}
        , o = {
        31: 0
    }
        , d = [];

    // webpack导出器
    function c(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, c),
            r.l = !0,
            r.exports
    }

    c.e = function (e) {
        var n = []
            , r = o[e];
        if (0 !== r)
            if (r)
                n.push(r[2]);
            else {
                var t = new Promise((function (n, t) {
                        r = o[e] = [n, t]
                    }
                ));
                n.push(r[2] = t);
                var d, script = document.createElement("script");
                script.charset = "utf-8",
                    script.timeout = 120,
                c.nc && script.setAttribute("nonce", c.nc),
                    script.src = function (e) {
                        return c.p + "" + ({
                            0: "commons/5b7f9e1d",
                            1: "vendors/f2d66b02",
                            2: "vendors/0f68e262",
                            5: "pages/album_detail/_index",
                            6: "pages/callback",
                            7: "pages/down/index",
                            8: "pages/downtingshu/index",
                            9: "pages/index",
                            10: "pages/logout/index",
                            11: "pages/musician/index",
                            12: "pages/musician/page",
                            13: "pages/mvplay/_index",
                            14: "pages/mvs/index",
                            15: "pages/play_detail/_index",
                            16: "pages/playlist_detail/_index",
                            17: "pages/playlists/index",
                            18: "pages/rankList/index",
                            19: "pages/search",
                            20: "pages/search/album",
                            21: "pages/search/list",
                            22: "pages/search/mv",
                            23: "pages/search/playlist",
                            24: "pages/search/singers",
                            25: "pages/singer_detail/_index",
                            26: "pages/singer_detail/index/album",
                            27: "pages/singer_detail/index/index",
                            28: "pages/singer_detail/index/info",
                            29: "pages/singer_detail/index/mv",
                            30: "pages/singers/index"
                        }[e] || e) + "." + {
                            0: "af0df56",
                            1: "283438d",
                            2: "e7ca393",
                            5: "80b7054",
                            6: "8e352bd",
                            7: "d7c29ce",
                            8: "f8e4748",
                            9: "939ddb6",
                            10: "607a227",
                            11: "a4c83a2",
                            12: "12a8948",
                            13: "1b9cd27",
                            14: "3243591",
                            15: "ad5acd9",
                            16: "e127022",
                            17: "701c5e3",
                            18: "8e1ccbc",
                            19: "b4fff28",
                            20: "8c38de9",
                            21: "be3668d",
                            22: "1b117b4",
                            23: "0d98ebe",
                            24: "3eb0826",
                            25: "8a6ccd9",
                            26: "9d7bc95",
                            27: "74a7a0c",
                            28: "dc1a820",
                            29: "9d26a42",
                            30: "c47850d"
                        }[e] + ".js"
                    }(e);
                var l = new Error;
                d = function (n) {
                    script.onerror = script.onload = null,
                        clearTimeout(f);
                    var r = o[e];
                    if (0 !== r) {
                        if (r) {
                            var t = n && ("load" === n.type ? "missing" : n.type)
                                , d = n && n.target && n.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + t + ": " + d + ")",
                                l.name = "ChunkLoadError",
                                l.type = t,
                                l.request = d,
                                r[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var f = setTimeout((function () {
                        d({
                            type: "timeout",
                            target: script
                        })
                    }
                ), 12e4);
                script.onerror = script.onload = d,
                    document.head.appendChild(script)
            }
        return Promise.all(n)
    }
        ,
        c.m = e,
        c.c = t,
        c.d = function (e, n, r) {
            c.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: r
            })
        }
        ,
        c.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        c.t = function (e, n) {
            if (1 & n && (e = c(e)),
            8 & n)
                return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (c.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & n && "string" != typeof e)
                for (var t in e)
                    c.d(r, t, function (n) {
                        return e[n]
                    }
                        .bind(null, t));
            return r
        }
        ,
        c.n = function (e) {
            var n = e && e.__esModule ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    }
            ;
            return c.d(n, "a", n),
                n
        }
        ,
        c.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e)
        }
        ,
        c.p = "https://h5static.kuwo.cn/www/kw-www/",
        c.oe = function (e) {
            throw console.error(e),
                e
        }
    ;
    var l = window.webpackJsonp = window.webpackJsonp || []
        , f = l.push.bind(l);
    l.push = n,
        l = l.slice();
    for (var i = 0; i < l.length; i++)
        n(l[i]);
    var h = f;
    r()
    // 将导出器赋值给全局变量
    ram = c
}({
    109: function (t, e, n) {
        var r, o, l = n(202), c = n(203), h = 0, d = 0;
        t.exports = function (t, e, n) {
            var i = e && n || 0
                , b = e || []
                , f = (t = t || {}).node || r
                , v = void 0 !== t.clockseq ? t.clockseq : o;
            if (null == f || null == v) {
                var m = l();
                null == f && (f = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
                null == v && (v = o = 16383 & (m[6] << 8 | m[7]))
            }
            var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime()
                , w = void 0 !== t.nsecs ? t.nsecs : d + 1
                , dt = y - h + (w - d) / 1e4;
            if (dt < 0 && void 0 === t.clockseq && (v = v + 1 & 16383),
            (dt < 0 || y > h) && void 0 === t.nsecs && (w = 0),
            w >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            h = y,
                d = w,
                o = v;
            var x = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
            b[i++] = x >>> 24 & 255,
                b[i++] = x >>> 16 & 255,
                b[i++] = x >>> 8 & 255,
                b[i++] = 255 & x;
            var _ = y / 4294967296 * 1e4 & 268435455;
            b[i++] = _ >>> 8 & 255,
                b[i++] = 255 & _,
                b[i++] = _ >>> 24 & 15 | 16,
                b[i++] = _ >>> 16 & 255,
                b[i++] = v >>> 8 | 128,
                b[i++] = 255 & v;
            for (var A = 0; A < 6; ++A)
                b[i + A] = f[A];
            return e || c(b)
        }
    },
    202: function (t, e) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            t.exports = function () {
                return n(r),
                    r
            }
        } else {
            var o = new Array(16);
            t.exports = function () {
                for (var t, i = 0; i < 16; i++)
                    0 == (3 & i) && (t = 4294967296 * Math.random()),
                        o[i] = t >>> ((3 & i) << 3) & 255;
                return o
            }
        }
    },
    203: function (t, e) {
        for (var n = [], i = 0; i < 256; ++i)
            n[i] = (i + 256).toString(16).substr(1);
        t.exports = function (t, e) {
            var i = e || 0
                , r = n;
            return [r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], "-", r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]], r[t[i++]]].join("")
        }
    }
});


function reqld() {
    l = ram(109)
    c = ram.n(l)
    var r = c()();
    return r
}

console.log(reqld())