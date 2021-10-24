function r(t) {
    for (var e, n = "0123456789abcdef", r = "", o = 0; o < t.length; o += 1) e = t.charCodeAt(o), r += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
    return r
}

function c(t) {
    for (var e = "", n = 0; n < 32 * t.length; n += 8)
        e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
    return e
}

function p(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}

function a(t, e, n, r, o, i) {
    return p((i = p(p(e, t), p(r, i))) << o | i >>> 32 - o, n)
}

function l(t, e, n, r, o, i, s) { return a(e & n | ~e & r, t, e, o, i, s) }

function f(t, e, n, r, o, i, s) {
    return a(e & r | n & ~r, t, e, o, i, s)
}

function m(t, e, n, r, o, i, s) {
    return a(e ^ n ^ r, t, e, o, i, s)
}

function h(t, e, n, r, o, i, s) {
    return a(n ^ (e | ~r), t, e, o, i, s)
}

function s(t, e) {
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    for (var n, r, o, i, s = 1732584193, a = -271733879, c = -1732584194, u = 271733878, d = 0; d < t.length; d += 16)
        s = l(n = s, r = a, o = c, i = u, t[d], 7, -680876936),
            u = l(u, s, a, c, t[d + 1], 12, -389564586),
            c = l(c, u, s, a, t[d + 2], 17, 606105819),
            a = l(a, c, u, s, t[d + 3], 22, -1044525330),
            s = l(s, a, c, u, t[d + 4], 7, -176418897),
            u = l(u, s, a, c, t[d + 5], 12, 1200080426),
            c = l(c, u, s, a, t[d + 6], 17, -1473231341),
            a = l(a, c, u, s, t[d + 7], 22, -45705983),
            s = l(s, a, c, u, t[d + 8], 7, 1770035416),
            u = l(u, s, a, c, t[d + 9], 12, -1958414417),
            c = l(c, u, s, a, t[d + 10], 17, -42063),
            a = l(a, c, u, s, t[d + 11], 22, -1990404162),
            s = l(s, a, c, u, t[d + 12], 7, 1804603682),
            u = l(u, s, a, c, t[d + 13], 12, -40341101),
            c = l(c, u, s, a, t[d + 14], 17, -1502002290),
            s = f(s, a = l(a, c, u, s, t[d + 15], 22, 1236535329), c, u, t[d + 1], 5, -165796510),
            u = f(u, s, a, c, t[d + 6], 9, -1069501632),
            c = f(c, u, s, a, t[d + 11], 14, 643717713),
            a = f(a, c, u, s, t[d], 20, -373897302),
            s = f(s, a, c, u, t[d + 5], 5, -701558691),
            u = f(u, s, a, c, t[d + 10], 9, 38016083),
            c = f(c, u, s, a, t[d + 15], 14, -660478335),
            a = f(a, c, u, s, t[d + 4], 20, -405537848),
            s = f(s, a, c, u, t[d + 9], 5, 568446438),
            u = f(u, s, a, c, t[d + 14], 9, -1019803690),
            c = f(c, u, s, a, t[d + 3], 14, -187363961),
            a = f(a, c, u, s, t[d + 8], 20, 1163531501),
            s = f(s, a, c, u, t[d + 13], 5, -1444681467),
            u = f(u, s, a, c, t[d + 2], 9, -51403784),
            c = f(c, u, s, a, t[d + 7], 14, 1735328473),
            s = m(s, a = f(a, c, u, s, t[d + 12], 20, -1926607734), c, u, t[d + 5], 4, -378558),
            u = m(u, s, a, c, t[d + 8], 11, -2022574463),
            c = m(c, u, s, a, t[d + 11], 16, 1839030562),
            a = m(a, c, u, s, t[d + 14], 23, -35309556),
            s = m(s, a, c, u, t[d + 1], 4, -1530992060),
            u = m(u, s, a, c, t[d + 4], 11, 1272893353),
            c = m(c, u, s, a, t[d + 7], 16, -155497632),
            a = m(a, c, u, s, t[d + 10], 23, -1094730640),
            s = m(s, a, c, u, t[d + 13], 4, 681279174),
            u = m(u, s, a, c, t[d], 11, -358537222),
            c = m(c, u, s, a, t[d + 3], 16, -722521979),
            a = m(a, c, u, s, t[d + 6], 23, 76029189),
            s = m(s, a, c, u, t[d + 9], 4, -640364487),
            u = m(u, s, a, c, t[d + 12], 11, -421815835),
            c = m(c, u, s, a, t[d + 15], 16, 530742520),
            s = h(s, a = m(a, c, u, s, t[d + 2], 23, -995338651), c, u, t[d], 6, -198630844),
            u = h(u, s, a, c, t[d + 7], 10, 1126891415),
            c = h(c, u, s, a, t[d + 14], 15, -1416354905),
            a = h(a, c, u, s, t[d + 5], 21, -57434055),
            s = h(s, a, c, u, t[d + 12], 6, 1700485571),
            u = h(u, s, a, c, t[d + 3], 10, -1894986606),
            c = h(c, u, s, a, t[d + 10], 15, -1051523),
            a = h(a, c, u, s, t[d + 1], 21, -2054922799),
            s = h(s, a, c, u, t[d + 8], 6, 1873313359),
            u = h(u, s, a, c, t[d + 15], 10, -30611744),
            c = h(c, u, s, a, t[d + 6], 15, -1560198380),
            a = h(a, c, u, s, t[d + 13], 21, 1309151649),
            s = h(s, a, c, u, t[d + 4], 6, -145523070),
            u = h(u, s, a, c, t[d + 11], 10, -1120210379),
            c = h(c, u, s, a, t[d + 2], 15, 718787259),
            a = h(a, c, u, s, t[d + 9], 21, -343485551),
            s = p(s, n),
            a = p(a, r),
            c = p(c, o),
            u = p(u, i);
    return [s, a, c, u]
}

function o(t) {
    return unescape(encodeURIComponent(t))
}

function u(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0,
        e = 0; e < n.length; e += 1)
        n[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)
        n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return n
}

function i(t) {
    return c(s(u(t = o(t)), 8 * t.length))
}

// 参数pwd 其实就是一个常规的MD5加密, 参数就是登录密码

function pwd(t, e, n) {
    return r(i(t))
}


console.log(pwd("99439943"))