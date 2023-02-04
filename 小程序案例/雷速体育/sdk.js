
function e(t, n) {
    var r = (65535 & t) + (65535 & n);
    return (t >> 16) + (n >> 16) + (r >> 16) << 16 | 65535 & r;
}

function o(t, n) {
    return t << n | t >>> 32 - n;
}

function u(t, n, r, u, f, c) {
    return e(o(e(e(n, t), e(u, c)), f), r);
}

function f(t, n, r, e, o, f, c) {
    return u(n & r | ~n & e, t, n, o, f, c);
}

function c(t, n, r, e, o, f, c) {
    return u(n & e | r & ~e, t, n, o, f, c);
}

function i(t, n, r, e, o, f, c) {
    return u(n ^ r ^ e, t, n, o, f, c);
}

function p(t, n, r, e, o, f, c) {
    return u(r ^ (n | ~e), t, n, o, f, c);
}

function s(t, n) {
    t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
    var r, o, u, s, a, d = 1732584193, l = -271733879, m = -1732584194, h = 271733878;
    for (r = 0; r < t.length; r += 16) o = d, u = l, s = m, a = h, l = p(l = p(l = p(l = p(l = i(l = i(l = i(l = i(l = c(l = c(l = c(l = c(l = f(l = f(l = f(l = f(l, m = f(m, h = f(h, d = f(d, l, m, h, t[r], 7, -680876936), l, m, t[r + 1], 12, -389564586), d, l, t[r + 2], 17, 606105819), h, d, t[r + 3], 22, -1044525330), m = f(m, h = f(h, d = f(d, l, m, h, t[r + 4], 7, -176418897), l, m, t[r + 5], 12, 1200080426), d, l, t[r + 6], 17, -1473231341), h, d, t[r + 7], 22, -45705983), m = f(m, h = f(h, d = f(d, l, m, h, t[r + 8], 7, 1770035416), l, m, t[r + 9], 12, -1958414417), d, l, t[r + 10], 17, -42063), h, d, t[r + 11], 22, -1990404162), m = f(m, h = f(h, d = f(d, l, m, h, t[r + 12], 7, 1804603682), l, m, t[r + 13], 12, -40341101), d, l, t[r + 14], 17, -1502002290), h, d, t[r + 15], 22, 1236535329), m = c(m, h = c(h, d = c(d, l, m, h, t[r + 1], 5, -165796510), l, m, t[r + 6], 9, -1069501632), d, l, t[r + 11], 14, 643717713), h, d, t[r], 20, -373897302), m = c(m, h = c(h, d = c(d, l, m, h, t[r + 5], 5, -701558691), l, m, t[r + 10], 9, 38016083), d, l, t[r + 15], 14, -660478335), h, d, t[r + 4], 20, -405537848), m = c(m, h = c(h, d = c(d, l, m, h, t[r + 9], 5, 568446438), l, m, t[r + 14], 9, -1019803690), d, l, t[r + 3], 14, -187363961), h, d, t[r + 8], 20, 1163531501), m = c(m, h = c(h, d = c(d, l, m, h, t[r + 13], 5, -1444681467), l, m, t[r + 2], 9, -51403784), d, l, t[r + 7], 14, 1735328473), h, d, t[r + 12], 20, -1926607734), m = i(m, h = i(h, d = i(d, l, m, h, t[r + 5], 4, -378558), l, m, t[r + 8], 11, -2022574463), d, l, t[r + 11], 16, 1839030562), h, d, t[r + 14], 23, -35309556), m = i(m, h = i(h, d = i(d, l, m, h, t[r + 1], 4, -1530992060), l, m, t[r + 4], 11, 1272893353), d, l, t[r + 7], 16, -155497632), h, d, t[r + 10], 23, -1094730640), m = i(m, h = i(h, d = i(d, l, m, h, t[r + 13], 4, 681279174), l, m, t[r], 11, -358537222), d, l, t[r + 3], 16, -722521979), h, d, t[r + 6], 23, 76029189), m = i(m, h = i(h, d = i(d, l, m, h, t[r + 9], 4, -640364487), l, m, t[r + 12], 11, -421815835), d, l, t[r + 15], 16, 530742520), h, d, t[r + 2], 23, -995338651), m = p(m, h = p(h, d = p(d, l, m, h, t[r], 6, -198630844), l, m, t[r + 7], 10, 1126891415), d, l, t[r + 14], 15, -1416354905), h, d, t[r + 5], 21, -57434055), m = p(m, h = p(h, d = p(d, l, m, h, t[r + 12], 6, 1700485571), l, m, t[r + 3], 10, -1894986606), d, l, t[r + 10], 15, -1051523), h, d, t[r + 1], 21, -2054922799), m = p(m, h = p(h, d = p(d, l, m, h, t[r + 8], 6, 1873313359), l, m, t[r + 15], 10, -30611744), d, l, t[r + 6], 15, -1560198380), h, d, t[r + 13], 21, 1309151649), m = p(m, h = p(h, d = p(d, l, m, h, t[r + 4], 6, -145523070), l, m, t[r + 11], 10, -1120210379), d, l, t[r + 2], 15, 718787259), h, d, t[r + 9], 21, -343485551),
        d = e(d, o), l = e(l, u), m = e(m, s), h = e(h, a);
    return [d, l, m, h];
}

function a(t) {
    var n, r = "", e = 32 * t.length;
    for (n = 0; n < e; n += 8) r += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
    return r;
}

function d(t) {
    var n, r = [];
    for (r[(t.length >> 2) - 1] = void 0, n = 0; n < r.length; n += 1) r[n] = 0;
    var e = 8 * t.length;
    for (n = 0; n < e; n += 8) r[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
    return r;
}

function l(t) {
    return a(s(d(t), 8 * t.length));
}

function m(t, n) {
    var r, e, o = d(t), u = [], f = [];
    for (u[15] = f[15] = void 0, o.length > 16 && (o = s(o, 8 * t.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r],
        f[r] = 1549556828 ^ o[r];
    return e = s(u.concat(d(n)), 512 + 8 * n.length), a(s(f.concat(e), 640));
}

function h(t) {
    var n, r, e = "";
    for (r = 0; r < t.length; r += 1) n = t.charCodeAt(r), e += "0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n);
    return e;
}

function y(t) {
    return unescape(encodeURIComponent(t));
}

function v(t) {
    return l(y(t));
}

function x(t) {
    return h(v(t));
}

function encode(e) {
    var r = parseInt(new Date() / 1e3 + 10), t = "aa76552d-6804-4aa1-8b69-152cfdc62b6e".split("-").join("");
    return r + "-" + t + "-0-" + x(e + "-" + r + "-" + t + "-0-35ZYEj99JdCcfaXFcBftPKnr5fUhRwgP");
}
console.log(encode("/v1/mobile/common/wechat_openid"))
// console.log(encode("/v1/mobile/match/basketball"))

// console.log(x("/v1/mobile/common/wechat_openid-1672133041-aa76552d68044aa18b69152cfdc62b6e-0-35ZYEj99JdCcfaXFcBftPKnr5fUhRwgP"))


