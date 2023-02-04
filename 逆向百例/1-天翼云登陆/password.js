const CryptoJS = require('crypto-js')

function password(e, n) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        , a = t.enc
        , r = void 0 === a ? "Utf8" : a
        , c = t.mode
        , i = void 0 === c ? "ECB" : c
        , o = t.padding
        , u = void 0 === o ? "Pkcs7" : o
        , d = CryptoJS.enc[r].parse(n)
        , l = {
        mode: CryptoJS.mode[i],
        padding: CryptoJS.pad[u]
    }
        , s = CryptoJS.TripleDES.encrypt(e, d, l);
    return s.toString()
}

function user(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e && "string" === typeof e) {
        var t = n.text || "0"
            , a = n.length || 24;
        if (e.length < a)
            for (var r = e.length; r < a; r++)
                e += t;
        else
            e = e.substring(0, a);
        return e
    }
}
function seqCode() {
    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
        r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), c = [];
    if (a = a || r.length,
        t)
        for (e = 0; e < t; e++)
            c[e] = r[0 | Math.random() * a];
    else
        for (c[8] = c[13] = c[18] = c[23] = "-",
                 c[14] = "4",
                 e = 0; e < 36; e++)
            c[e] || (n = 0 | 16 * Math.random(),
                c[e] = r[19 === e ? 3 & n | 8 : n]);
    return c.join("")
}

function params(wd, email) {
    let user_num = user(email)
    let passwd = password(wd, user_num)
    let seqcode = seqCode()
    return [passwd, seqcode]
}

wd = 'Ram'
email = '1111111@qq.com'
console.log(params(wd, email))