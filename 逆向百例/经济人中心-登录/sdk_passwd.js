window = global;
var module;
!function (t) {
    var e = {};

    function i(n) {
        if (e[n])
            return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i),
            s.l = !0,
            s.exports
    }

    // i.m = t,
    // i.c = e,
    // i.d = function(t, e, n) {
    //     i.o(t, e) || Object.defineProperty(t, e, {
    //         enumerable: !0,
    //         get: n
    //     })
    // }
    // ,
    // i.r = function(t) {
    //     "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
    //         value: "Module"
    //     }),
    //     Object.defineProperty(t, "__esModule", {
    //         value: !0
    //     })
    // }
    // ,
    // i.t = function(t, e) {
    //     if (1 & e && (t = i(t)),
    //     8 & e)
    //         return t;
    //     if (4 & e && "object" == typeof t && t && t.__esModule)
    //         return t;
    //     var n = Object.create(null);
    //     if (i.r(n),
    //     Object.defineProperty(n, "default", {
    //         enumerable: !0,
    //         value: t
    //     }),
    //     2 & e && "string" != typeof t)
    //         for (var s in t)
    //             i.d(n, s, function(e) {
    //                 return t[e]
    //             }
    //             .bind(null, s));
    //     return n
    // }
    // ,
    // i.n = function(t) {
    //     var e = t && t.__esModule ? function() {
    //         return t.default
    //     }
    //     : function() {
    //         return t
    //     }
    //     ;
    //     return i.d(e, "a", e),
    //     e
    // }
    // ,
    // i.o = function(t, e) {
    //     return Object.prototype.hasOwnProperty.call(t, e)
    // }
    // ,
    // i.p = "//esfres.leju.com/agent_www_new/dist/",
    // i(i.s = 301)
    module = i
}({
    305: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.encryptedString = e.RSAKeyPair = void 0;
        var n = i(228)
            , s = i(306)
            , o = {};
        o.NoPadding = "NoPadding",
            o.PKCS1Padding = "PKCS1Padding",
            o.RawEncoding = "RawEncoding",
            o.NumericEncoding = "NumericEncoding",
            e.RSAKeyPair = function (t, e, i, o) {
                this.e = (0,
                    n.biFromHex)(t),
                    this.d = (0,
                        n.biFromHex)(e),
                    this.m = (0,
                        n.biFromHex)(i),
                    this.chunkSize = "number" != typeof o ? 2 * (0,
                        n.biHighIndex)(this.m) : o / 8,
                    this.radix = 16,
                    this.barrett = new s.BarrettMu(this.m)
            }
            ,
            e.encryptedString = function (t, e, i, s) {
                var a, r, l, c, u, d, p, h, f, g = new Array, m = e.length, y = "";
                for (c = "string" == typeof i ? i == o.NoPadding ? 1 : i == o.PKCS1Padding ? 2 : 0 : 0,
                         u = "string" == typeof s && s == o.RawEncoding ? 1 : 0,
                         1 == c ? m > t.chunkSize && (m = t.chunkSize) : 2 == c && m > t.chunkSize - 11 && (m = t.chunkSize - 11),
                         a = 0,
                         r = 2 == c ? m - 1 : t.chunkSize - 1; a < m;)
                    c ? g[r] = e.charCodeAt(a) : g[a] = e.charCodeAt(a),
                        a++,
                        r--;
                for (1 == c && (a = 0),
                         r = t.chunkSize - m % t.chunkSize; r > 0;) {
                    if (2 == c) {
                        for (d = Math.floor(256 * Math.random()); !d;)
                            d = Math.floor(256 * Math.random());
                        g[a] = d
                    } else
                        g[a] = 0;
                    a++,
                        r--
                }
                for (2 == c && (g[m] = 0,
                    g[t.chunkSize - 2] = 2,
                    g[t.chunkSize - 1] = 0),
                         p = g.length,
                         a = 0; a < p; a += t.chunkSize) {
                    for (h = new n.BigInt,
                             r = 0,
                             l = a; l < a + t.chunkSize; ++r)
                        h.digits[r] = g[l++],
                            h.digits[r] += g[l++] << 8;
                    f = t.barrett.powMod(h, t.e),
                        y += 1 == u ? biToBytes(f) : 16 == t.radix ? (0,
                            n.biToHex)(f) : biToString(f, t.radix)
                }
                return y
            }
    },
    228: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, s;

        function o(t) {
            n = new Array(t);
            for (var e = 0; e < n.length; e++)
                n[e] = 0;
            new a,
                (s = new a).digits[0] = 1
        }

        // 踩坑：源代码o(20)生成一个长度为20的数组, 元素全是0, 实际运算中需要的是长度为129位的数组
        o(129);
        l(1e15);

        function a(t) {
            this.digits = "boolean" == typeof t && 1 == t ? null : n.slice(0),
                this.isNeg = !1
        }

        function r(t) {
            var e = new a(!0);
            return e.digits = t.digits.slice(0),
                e.isNeg = t.isNeg,
                e
        }

        function l(t) {
            var e = new a;
            e.isNeg = t < 0,
                t = Math.abs(t);
            for (var i = 0; t > 0;)
                e.digits[i++] = 65535 & t,
                    t >>= 16;
            return e
        }

        function c(t) {
            for (var e = "", i = t.length - 1; i > -1; --i)
                e += t.charAt(i);
            return e
        }

        new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
        var u = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

        function d(t) {
            for (var e = "", i = 0; i < 4; ++i)
                e += u[15 & t],
                    t >>>= 4;
            return c(e)
        }

        function p(t) {
            return t >= 48 && t <= 57 ? t - 48 : t >= 65 && t <= 90 ? 10 + t - 65 : t >= 97 && t <= 122 ? 10 + t - 97 : 0
        }

        function h(t) {
            for (var e = 0, i = Math.min(t.length, 4), n = 0; n < i; ++n)
                e <<= 4,
                    e |= p(t.charCodeAt(n));
            return e
        }

        function f(t, e) {
            var i;
            if (t.isNeg != e.isNeg)
                e.isNeg = !e.isNeg,
                    i = g(t, e),
                    e.isNeg = !e.isNeg;
            else {
                i = new a;
                for (var n, s = 0, o = 0; o < t.digits.length; ++o)
                    n = t.digits[o] + e.digits[o] + s,
                        i.digits[o] = 65535 & n,
                        s = Number(n >= 65536);
                i.isNeg = t.isNeg
            }
            return i
        }

        function g(t, e) {
            var i;
            if (t.isNeg != e.isNeg)
                e.isNeg = !e.isNeg,
                    i = f(t, e),
                    e.isNeg = !e.isNeg;
            else {
                var n, s;
                i = new a,
                    s = 0;
                for (var o = 0; o < t.digits.length; ++o)
                    n = t.digits[o] - e.digits[o] + s,
                        i.digits[o] = 65535 & n,
                    i.digits[o] < 0 && (i.digits[o] += 65536),
                        s = 0 - Number(n < 0);
                if (-1 == s) {
                    s = 0;
                    for (o = 0; o < t.digits.length; ++o)
                        n = 0 - i.digits[o] + s,
                            i.digits[o] = 65535 & n,
                        i.digits[o] < 0 && (i.digits[o] += 65536),
                            s = 0 - Number(n < 0);
                    i.isNeg = !t.isNeg
                } else
                    i.isNeg = t.isNeg
            }
            return i
        }

        function m(t) {
            for (var e = t.digits.length - 1; e > 0 && 0 == t.digits[e];)
                --e;
            return e
        }

        function y(t) {
            var e, i = m(t), n = t.digits[i], s = 16 * (i + 1);
            for (e = s; e > s - 16 && 0 == (32768 & n); --e)
                n <<= 1;
            return e
        }

        function v(t, e) {
            for (var i, n, s, o = new a, r = m(t), l = m(e), c = 0; c <= l; ++c) {
                i = 0,
                    s = c;
                for (var u = 0; u <= r; ++u,
                    ++s)
                    n = o.digits[s] + t.digits[u] * e.digits[c] + i,
                        o.digits[s] = 65535 & n,
                        i = n >>> 16;
                o.digits[c + r + 1] = i
            }
            return o.isNeg = t.isNeg != e.isNeg,
                o
        }

        function b(t, e) {
            var i, n, s, o = new a;
            i = m(t),
                n = 0;
            for (var r = 0; r <= i; ++r)
                s = o.digits[r] + t.digits[r] * e + n,
                    o.digits[r] = 65535 & s,
                    n = s >>> 16;
            return o.digits[1 + i] = n,
                o
        }

        function w(t, e, i, n, s) {
            for (var o = Math.min(e + s, t.length), a = e, r = n; a < o; ++a,
                ++r)
                i[r] = t[a]
        }

        var k = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535);

        function C(t, e) {
            var i = Math.floor(e / 16)
                , n = new a;
            w(t.digits, 0, n.digits, i, n.digits.length - i);
            for (var s = e % 16, o = 16 - s, r = n.digits.length - 1, l = r - 1; r > 0; --r,
                --l)
                n.digits[r] = n.digits[r] << s & 65535 | (n.digits[l] & k[s]) >>> o;
            return n.digits[0] = n.digits[r] << s & 65535,
                n.isNeg = t.isNeg,
                n
        }

        var x = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);

        function _(t, e) {
            var i = Math.floor(e / 16)
                , n = new a;
            w(t.digits, i, n.digits, 0, t.digits.length - i);
            for (var s = e % 16, o = 16 - s, r = 0, l = r + 1; r < n.digits.length - 1; ++r,
                ++l)
                n.digits[r] = n.digits[r] >>> s | (n.digits[l] & x[s]) << o;
            return n.digits[n.digits.length - 1] >>>= s,
                n.isNeg = t.isNeg,
                n
        }

        function $(t, e) {
            var i = new a;
            return w(t.digits, 0, i.digits, e, i.digits.length - e),
                i
        }

        function S(t, e) {
            if (t.isNeg != e.isNeg)
                return 1 - 2 * Number(t.isNeg);
            for (var i = t.digits.length - 1; i >= 0; --i)
                if (t.digits[i] != e.digits[i])
                    return t.isNeg ? 1 - 2 * Number(t.digits[i] > e.digits[i]) : 1 - 2 * Number(t.digits[i] < e.digits[i]);
            return 0
        }

        function j(t, e) {
            var i, n, o = y(t), l = y(e), c = e.isNeg;
            if (o < l)
                return t.isNeg ? ((i = r(s)).isNeg = !e.isNeg,
                    t.isNeg = !1,
                    e.isNeg = !1,
                    n = g(e, t),
                    t.isNeg = !0,
                    e.isNeg = c) : (i = new a,
                    n = r(t)),
                    new Array(i, n);
            i = new a,
                n = t;
            for (var u = Math.ceil(l / 16) - 1, d = 0; e.digits[u] < 32768;)
                e = C(e, 1),
                    ++d,
                    ++l,
                    u = Math.ceil(l / 16) - 1;
            n = C(n, d),
                o += d;
            for (var p = Math.ceil(o / 16) - 1, h = $(e, p - u); -1 != S(n, h);)
                ++i.digits[p - u],
                    n = g(n, h);
            for (var v = p; v > u; --v) {
                var w = v >= n.digits.length ? 0 : n.digits[v]
                    , k = v - 1 >= n.digits.length ? 0 : n.digits[v - 1]
                    , x = v - 2 >= n.digits.length ? 0 : n.digits[v - 2]
                    , j = u >= e.digits.length ? 0 : e.digits[u]
                    , A = u - 1 >= e.digits.length ? 0 : e.digits[u - 1];
                i.digits[v - u - 1] = w == j ? 65535 : Math.floor((65536 * w + k) / j);
                for (var T = i.digits[v - u - 1] * (65536 * j + A), q = 4294967296 * w + (65536 * k + x); T > q;)
                    --i.digits[v - u - 1],
                        T = i.digits[v - u - 1] * (65536 * j | A),
                        q = 65536 * w * 65536 + (65536 * k + x);
                (n = g(n, b(h = $(e, v - u - 1), i.digits[v - u - 1]))).isNeg && (n = f(n, h),
                    --i.digits[v - u - 1])
            }
            return n = _(n, d),
                i.isNeg = t.isNeg != c,
            t.isNeg && (i = c ? f(i, s) : g(i, s),
                n = g(e = _(e, d), n)),
            0 == n.digits[0] && 0 == m(n) && (n.isNeg = !1),
                new Array(i, n)
        }

        e.setMaxDigits = o,
            e.biFromHex = function (t) {
                for (var e = new a, i = t.length, n = 0; i > 0; i -= 4,
                    ++n)
                    e.digits[n] = h(t.substr(Math.max(i - 4, 0), Math.min(i, 4)));
                return e
            }
            ,
            e.biHighIndex = m,
            e.biCopy = r,
            e.BigInt = a,
            e.biDivide = function (t, e) {
                return j(t, e)[0]
            }
            ,
            e.biMultiply = v,
            e.biDivideByRadixPower = function (t, e) {
                var i = new a;
                return w(t.digits, e, i.digits, 0, i.digits.length - e),
                    i
            }
            ,
            e.biModuloByRadixPower = function (t, e) {
                var i = new a;
                return w(t.digits, 0, i.digits, 0, e),
                    i
            }
            ,
            e.biSubtract = g,
            e.biCompare = S,
            e.biShiftRight = _,
            e.biToHex = function (t) {
                for (var e = "", i = (m(t),
                    m(t)); i > -1; --i)
                    e += d(t.digits[i]);
                return e
            }
    },
    306: function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.BarrettMu_powMod = e.BarrettMu_multiplyMod = e.BarrettMu_modulo = e.BarrettMu = void 0;
        var n = i(228);

        function s(t) {
            var e = (0,
                n.biDivideByRadixPower)(t, this.k - 1)
                , i = (0,
                n.biMultiply)(e, this.mu)
                , s = (0,
                n.biDivideByRadixPower)(i, this.k + 1)
                , o = (0,
                n.biModuloByRadixPower)(t, this.k + 1)
                , a = (0,
                n.biMultiply)(s, this.modulus)
                , r = (0,
                n.biModuloByRadixPower)(a, this.k + 1)
                , l = (0,
                n.biSubtract)(o, r);
            l.isNeg && (l = biAdd(l, this.bkplus1));
            for (var c = (0,
                n.biCompare)(l, this.modulus) >= 0; c;)
                l = (0,
                    n.biSubtract)(l, this.modulus),
                    c = (0,
                        n.biCompare)(l, this.modulus) >= 0;
            return l
        }

        function o(t, e) {
            var i = (0,
                n.biMultiply)(t, e);
            return this.modulo(i)
        }

        function a(t, e) {
            var i = new n.BigInt;
            i.digits[0] = 1;
            for (var s = t, o = e; 0 != (1 & o.digits[0]) && (i = this.multiplyMod(i, s)),
            0 != (o = (0,
                n.biShiftRight)(o, 1)).digits[0] || 0 != (0,
                n.biHighIndex)(o);)
                s = this.multiplyMod(s, s);
            return i
        }

        e.BarrettMu = function (t) {
            this.modulus = (0,
                n.biCopy)(t),
                this.k = (0,
                    n.biHighIndex)(this.modulus) + 1;
            var e = new n.BigInt;
            // e = 上面的o(129)生成的数组, 元素全是0, 2 * this.k = 128, e.digits[2 * this.k]是取数组中的第128位元素
            e.digits[2 * this.k] = 1,
                this.mu = (0,
                    n.biDivide)(e, this.modulus),
                this.bkplus1 = new n.BigInt,
                this.bkplus1.digits[this.k + 1] = 1,
                this.modulo = s,
                this.multiplyMod = o,
                this.powMod = a
        }
            ,
            e.BarrettMu_modulo = s,
            e.BarrettMu_multiplyMod = o,
            e.BarrettMu_powMod = a
    },
})

function get_passwd(wd) {
    r = module(305)
    var pubkey = 'BC087C7C00848CE8A349C9072C3229E0D595F817EDDE9ABF6FC72B41942A759E97956CE9CB7D1F2E99399EADBACC0531F16EAE8EFCB68553DE0E125B2231ED955ADBF5208E65DC804237C93EB23C83E7ECDA0B586ECF31839038EE6B640E0EEC5FF17D219FDEA33E730F287F0D384C74A53DFE1F91ACC63C7C92039A43AC6E97'
    var n = new r.RSAKeyPair("10001", "", pubkey)
    var s = (0, r.encryptedString)(n, wd);
    return s
}

console.log(get_passwd('123456'))