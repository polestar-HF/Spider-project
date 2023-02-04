window = global;
navigator = {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    cookieEnabled: true,
    geolocation: {},
    javaEnabled: function () {},
    language: 'zh-CN',
    msMaxTouchPoints: undefined,
    onLine:true,
    platform: 'Win32',
    plugins: {
    "0": {
        "0": {},
        "1": {}
    },
    "1": {
        "0": {},
        "1": {}
    },
    "2": {
        "0": {},
        "1": {}
    },
    "3": {
        "0": {},
        "1": {}
    },
    "4": {
        "0": {},
        "1": {}
    }
},
    preference: undefined,
    product: 'Gecko',
    systemLanguage:undefined,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    userLanguage: undefined,
    msLaunchUri: undefined,
    taintEnabled: undefined,
    hasOwnProperty(v) {
    }
}
window.navigator = navigator
document = {
    hasOwnProperty(v) {
        return false
    }
}
function md5(I, F) {
    function O(C, U) {
        var Z = window['navigator']['appCodeName']['toLowerCase']()
          , T = navigator['appName']['toLowerCase']()
          , j = navigator['appVersion']['toLowerCase']()
          , k0 = navigator['cookieEnabled']
          , k1 = navigator['geolocation']
          , k2 = navigator['javaEnabled']()
          , k3 = navigator['language']['toLowerCase']()
          , k4 = navigator['msMaxTouchPoints']
          , k5 = navigator['onLine']
          , k6 = navigator['platform']
          , k7 = navigator['plugins']
          , k8 = navigator['preference']
          , k9 = navigator['product']
          , kk = navigator['systemLanguage']
          , kI = navigator['userAgent']
          , kx = navigator['userLanguage']
          , kF = navigator['msLaunchUri']
          , ka = navigator['taintEnabled']
          , kO = navigator['hasOwnProperty']
          , kc = document['hasOwnProperty']('ontouchstart');
        return C << U | C >>> 0x20 - U;
    }
    function S(C, U) {
        var Z, T, j, k0, k1;
        j = C & 0x80000000,
        k0 = U & 0x80000000,
        Z = C & 0x40000000,
        T = U & 0x40000000,
        k1 = (C & 0x3fffffff) + (U & 0x3fffffff);
        if (Z & T)
            return k1 ^ 0x80000000 ^ j ^ k0;
        return Z | T ? k1 & 0x40000000 ? k1 ^ 0xc0000000 ^ j ^ k0 : k1 ^ 0x40000000 ^ j ^ k0 : k1 ^ j ^ k0;
    }
    function Q(C, U, Z) {
        return C & U | ~C & Z;
    }
    function i(C, U, Z) {
        return C & Z | U & ~Z;
    }
    function r(C, U, Z) {
        return C ^ U ^ Z;
    }
    function w(C, U, Z) {
        return U ^ (C | ~Z);
    }
    function m(C, U, Z, T, j, k0, k1) {
        return C = S(C, S(S(Q(U, Z, T), j), k1)),
        S(O(C, k0), U);
    }
    ;function l(C, U, Z, T, j, k0, k1) {
        return C = S(C, S(S(i(U, Z, T), j), k1)),
        S(O(C, k0), U);
    }
    ;function P(C, U, Z, T, j, k0, k1) {
        return C = S(C, S(S(r(U, Z, T), j), k1)),
        S(O(C, k0), U);
    }
    ;function W(C, U, Z, T, j, k0, k1) {
        return C = S(C, S(S(w(U, Z, T), j), k1)),
        S(O(C, k0), U);
    }
    ;function u(C) {
        var U, Z = C['length'], T = Z + 0x8, j = (T - T % 0x40) / 0x40, k0 = (j + 0x1) * 0x10, k1 = Array(k0 - 0x1), k2 = 0x0, k3 = 0x0;
        while (k3 < Z) {
            U = (k3 - k3 % 0x4) / 0x4,
            k2 = k3 % 0x4 * 0x8,
            k1[U] = k1[U] | C['charCodeAt'](k3) << k2,
            k3++;
        }
        return U = (k3 - k3 % 0x4) / 0x4,
        k2 = k3 % 0x4 * 0x8,
        k1[U] = k1[U] | 0x80 << k2,
        k1[k0 - 0x2] = Z << 0x3,
        k1[k0 - 0x1] = Z >>> 0x1d,
        k1;
    }
    ;function s(C) {
        var U = '', Z = '', T, j;
        for (j = 0x0; j <= 0x3; j++) {
            T = C >>> j * 0x8 & 0xff,
            Z = '0' + T['toString'](0x10),
            U = U + Z['substr'](Z['length'] - 0x2, 0x2);
        }
        return U;
    }
    ;function p(C) {
        C = C['replace'](/\r\n/g, '\x0a');
        var U = '';
        for (var Z = 0x0; Z < C['length']; Z++) {
            var T = C['charCodeAt'](Z);
            if (T < 0x80)
                U += String['fromCharCode'](T);
            else
                T > 0x7f && T < 0x800 ? (U += String['fromCharCode'](T >> 0x6 | 0xc0),
                U += String['fromCharCode'](T & 0x3f | 0x80)) : (U += String['fromCharCode'](T >> 0xc | 0xe0),
                U += String['fromCharCode'](T >> 0x6 & 0x3f | 0x80),
                U += String['fromCharCode'](T & 0x3f | 0x80));
        }
        return U;
    }
    ;var J = Array(), H, h, n, t, N, D, v, M, g, y = 0x7, E = 0xc, L = 0x11, K = 0x16, B = 0x5, X = 0x9, A = 0xe, q = 0x14, V = 0x4, o = 0xb, R = 0x10, G = 0x17, Y = 0x6, e = 0xa, z = 0xf, f = 0x15;
    I = p(I),
    J = u(I),
    D = 0x67452301,
    v = 0xefcdab89,
    M = 0x98badcfe,
    g = 0x10325476;
    for (H = 0x0; H < J['length']; H += 0x10) {
        h = D,
        n = v,
        t = M,
        N = g,
        D = m(D, v, M, g, J[H + 0x0], y, 0xd76aa478),
        g = m(g, D, v, M, J[H + 0x1], E, 0xe8c7b756),
        M = m(M, g, D, v, J[H + 0x2], L, 0x242070db),
        v = m(v, M, g, D, J[H + 0x3], K, 0xc1bdceee),
        D = m(D, v, M, g, J[H + 0x4], y, 0xf57c0faf),
        g = m(g, D, v, M, J[H + 0x5], E, 0x4787c62a),
        M = m(M, g, D, v, J[H + 0x6], L, 0xa8304613),
        v = m(v, M, g, D, J[H + 0x7], K, 0xfd469501),
        D = m(D, v, M, g, J[H + 0x8], y, 0x698098d8),
        g = m(g, D, v, M, J[H + 0x9], E, 0x8b44f7af),
        M = m(M, g, D, v, J[H + 0xa], L, 0xffff5bb1),
        v = m(v, M, g, D, J[H + 0xb], K, 0x895cd7be),
        D = m(D, v, M, g, J[H + 0xc], y, 0x6b901122),
        g = m(g, D, v, M, J[H + 0xd], E, 0xfd987193),
        M = m(M, g, D, v, J[H + 0xe], L, 0xa679438e),
        v = m(v, M, g, D, J[H + 0xf], K, 0x49b40821),
        D = l(D, v, M, g, J[H + 0x1], B, 0xf61e2562),
        g = l(g, D, v, M, J[H + 0x6], X, 0xc040b340),
        M = l(M, g, D, v, J[H + 0xb], A, 0x265e5a51),
        v = l(v, M, g, D, J[H + 0x0], q, 0xe9b6c7aa),
        D = l(D, v, M, g, J[H + 0x5], B, 0xd62f105d),
        g = l(g, D, v, M, J[H + 0xa], X, 0x2441453),
        M = l(M, g, D, v, J[H + 0xf], A, 0xd8a1e681),
        v = l(v, M, g, D, J[H + 0x4], q, 0xe7d3fbc8),
        D = l(D, v, M, g, J[H + 0x9], B, 0x21e1cde6),
        g = l(g, D, v, M, J[H + 0xe], X, 0xc33707d6),
        M = l(M, g, D, v, J[H + 0x3], A, 0xf4d50d87),
        v = l(v, M, g, D, J[H + 0x8], q, 0x455a14ed),
        D = l(D, v, M, g, J[H + 0xd], B, 0xa9e3e905),
        g = l(g, D, v, M, J[H + 0x2], X, 0xfcefa3f8),
        M = l(M, g, D, v, J[H + 0x7], A, 0x676f02d9),
        v = l(v, M, g, D, J[H + 0xc], q, 0x8d2a4c8a),
        D = P(D, v, M, g, J[H + 0x5], V, 0xfffa3942),
        g = P(g, D, v, M, J[H + 0x8], o, 0x8771f681),
        M = P(M, g, D, v, J[H + 0xb], R, 0x6d9d6122),
        v = P(v, M, g, D, J[H + 0xe], G, 0xfde5380c),
        D = P(D, v, M, g, J[H + 0x1], V, 0xa4beea44),
        g = P(g, D, v, M, J[H + 0x4], o, 0x4bdecfa9),
        M = P(M, g, D, v, J[H + 0x7], R, 0xf6bb4b60),
        v = P(v, M, g, D, J[H + 0xa], G, 0xbebfbc70),
        D = P(D, v, M, g, J[H + 0xd], V, 0x289b7ec6),
        g = P(g, D, v, M, J[H + 0x0], o, 0xeaa127fa),
        M = P(M, g, D, v, J[H + 0x3], R, 0xd4ef3085),
        v = P(v, M, g, D, J[H + 0x6], G, 0x4881d05),
        D = P(D, v, M, g, J[H + 0x9], V, 0xd9d4d039),
        g = P(g, D, v, M, J[H + 0xc], o, 0xe6db99e5),
        M = P(M, g, D, v, J[H + 0xf], R, 0x1fa27cf8),
        v = P(v, M, g, D, J[H + 0x2], G, 0xc4ac5665),
        D = W(D, v, M, g, J[H + 0x0], Y, 0xf4292244),
        g = W(g, D, v, M, J[H + 0x7], e, 0x432aff97),
        M = W(M, g, D, v, J[H + 0xe], z, 0xab9423a7),
        v = W(v, M, g, D, J[H + 0x5], f, 0xfc93a039),
        D = W(D, v, M, g, J[H + 0xc], Y, 0x655b59c3),
        g = W(g, D, v, M, J[H + 0x3], e, 0x8f0ccc92),
        M = W(M, g, D, v, J[H + 0xa], z, 0xffeff47d),
        v = W(v, M, g, D, J[H + 0x1], f, 0x85845dd1),
        D = W(D, v, M, g, J[H + 0x8], Y, 0x6fa87e4f),
        g = W(g, D, v, M, J[H + 0xf], e, 0xfe2ce6e0),
        M = W(M, g, D, v, J[H + 0x6], z, 0xa3014314),
        v = W(v, M, g, D, J[H + 0xd], f, 0x4e0811a1),
        D = W(D, v, M, g, J[H + 0x4], Y, 0xf7537e82),
        g = W(g, D, v, M, J[H + 0xb], e, 0xbd3af235),
        M = W(M, g, D, v, J[H + 0x2], z, 0x2ad7d2bb),
        v = W(v, M, g, D, J[H + 0x9], f, 0xeb86d391),
        D = S(D, h),
        v = S(v, n),
        M = S(M, t),
        g = S(g, N);
    }
    if (F == 0x20)
        return (s(D) + s(v) + s(M) + s(g))['toLowerCase']();
    return (s(v) + s(M))['toLowerCase']();
}

console.log(md5('1'))