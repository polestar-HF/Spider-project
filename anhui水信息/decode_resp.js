var WaterSecurity = function () {
    this.init()
};
WaterSecurity.prototype = {
    version: "2.1",
    init: function () {
        String.prototype.gblen = function () {
            for (var r = 0, t = 0; t < this.length; t++)
                this.charCodeAt(t) > 127 || 94 == this.charCodeAt(t) ? r += 2 : r++;
            return r
        }
    },
    encode: function (r) {
        if (this.print(r),
        "" == (r += ""))
            return "";
        (r = encodeURI(r).replace(/\+/g, "%2B")).gblen() % 2 != 0 && (r += "*"),
            this.print(r),
            r = this.parityTransposition(r),
            this.print(r);
        var t = this.version + this.utf16to8(this.base64encode(r));
        return this.print(t),
            t
    },
    print: function (r) {
    },
    parityTransposition: function (r) {
        for (var t = [], e = 0; e < r.length; e += 2)
            t.push(r[e + 1]),
                t.push(r[e]);
        return t = t.join("")
    },
    decode: function (r) {
        if ("string" != typeof r && (r += ""),
            this.print(r),
        r.length < 5 && ("" == r || "null" == r))
            return "[]";
        if (this.version) {
            if (r.substring(0, 3) !== this.version)
                return alert("加解密版本不一致！");
            r = r.substring(3, r.length)
        }
        let t, e, s, h = {};
        t = r.substring(r.length - 4),
            e = r.substring(r.indexOf(t)),
            s = new Array,
            e = e.substring(4, e.length - 4);
        for (let r = 0; 4 * r < e.length; r++) {
            let t = e.substr(4 * r, 4);
            s[r] = t,
                h[t] = null
        }
        const n = this.getTagsPosition(r, s);
        let i = 0;
        for (c = 0; c < n.length; c++) {
            var a = r.substring(i, n[c]);
            h[r.substr(n[c], 4)] = a,
                i = n[c] + 4
        }
        r = null;
        for (var o = [], c = 0; c < s.length; c++)
            o.push(h[s[c]]);
        return o = o.join(""),
            o = this.utf8to16(this.base64decode(o))
    },
    getTagsPosition: function (r, t) {
        var e = new Array;
        for (i = 0; i < t.length; i++)
            e[i] = r.indexOf(t[i]);
        return e.sort(function (r, t) {
            return r > t ? 1 : -1
        })
    },
    base64EncodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    base64DecodeChars: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
    base64encode: function (r) {
        var t, e, s, h, n, i;
        for (s = r.length,
                 e = 0,
                 t = []; e < s;) {
            if (h = 255 & r.charCodeAt(e++),
            e == s) {
                t.push(this.base64EncodeChars.charAt(h >> 2)),
                    t.push(this.base64EncodeChars.charAt((3 & h) << 4)),
                    t.push("==");
                break
            }
            if (n = r.charCodeAt(e++),
            e == s) {
                t.push(this.base64EncodeChars.charAt(h >> 2)),
                    t.push(this.base64EncodeChars.charAt((3 & h) << 4 | (240 & n) >> 4)),
                    t.push(this.base64EncodeChars.charAt((15 & n) << 2)),
                    t.push("=");
                break
            }
            i = r.charCodeAt(e++),
                t.push(this.base64EncodeChars.charAt(h >> 2)),
                t.push(this.base64EncodeChars.charAt((3 & h) << 4 | (240 & n) >> 4)),
                t.push(this.base64EncodeChars.charAt((15 & n) << 2 | (192 & i) >> 6)),
                t.push(this.base64EncodeChars.charAt(63 & i))
        }
        return t.join("")
    },
    base64decode: function (r) {
        var t, e, s, h, n, i, a;
        for (i = r.length,
                 n = 0,
                 a = []; n < i;) {
            do {
                t = this.base64DecodeChars[255 & r.charCodeAt(n++)]
            } while (n < i && -1 == t);
            if (-1 == t)
                break;
            do {
                e = this.base64DecodeChars[255 & r.charCodeAt(n++)]
            } while (n < i && -1 == e);
            if (-1 == e)
                break;
            a.push(String.fromCharCode(t << 2 | (48 & e) >> 4));
            do {
                if (61 == (s = 255 & r.charCodeAt(n++)))
                    return a.join("");
                s = this.base64DecodeChars[s]
            } while (n < i && -1 == s);
            if (-1 == s)
                break;
            a.push(String.fromCharCode((15 & e) << 4 | (60 & s) >> 2));
            do {
                if (61 == (h = 255 & r.charCodeAt(n++)))
                    return a.join("");
                h = this.base64DecodeChars[h]
            } while (n < i && -1 == h);
            if (-1 == h)
                break;
            a.push(String.fromCharCode((3 & s) << 6 | h))
        }
        return a.join("")
    },
    utf16to8: function (r) {
        var t, e, s, h;
        for (t = [],
                 s = r.length,
                 e = 0; e < s; e++)
            (h = r.charCodeAt(e)) >= 1 && h <= 127 ? t.push(r.charAt(e)) : h > 2047 ? (t.push(String.fromCharCode(224 | h >> 12 & 15)),
                t.push(String.fromCharCode(128 | h >> 6 & 63)),
                t.push(String.fromCharCode(128 | h >> 0 & 63))) : (t.push(String.fromCharCode(192 | h >> 6 & 31)),
                t.push(String.fromCharCode(128 | h >> 0 & 63)));
        return t.join("")
    },
    utf8to16: function (r) {
        var t, e, s, h, n, i;
        for (t = [],
                 s = r.length,
                 e = 0; e < s;)
            switch ((h = r.charCodeAt(e++)) >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    t.push(r.charAt(e - 1));
                    break;
                case 12:
                case 13:
                    n = r.charCodeAt(e++),
                        t.push(String.fromCharCode((31 & h) << 6 | 63 & n));
                    break;
                case 14:
                    n = r.charCodeAt(e++),
                        i = r.charCodeAt(e++),
                        t.push(String.fromCharCode((15 & h) << 12 | (63 & n) << 6 | (63 & i) << 0))
            }
        return t.join("")
    }
};
var waterSecurity = new WaterSecurity;

function decodeResult(r) {
    let result = waterSecurity.decode(r)
    return result
}

// console.log(decodeResult(r))
function encodeParams(m) {
    let e = JSON.parse(m)
    for (var t in e)
        e[t] || (e[t] = ""),
        "" == e[t] && 0 != e[t] || (e[t] = waterSecurity.encode(e[t]));
    e.waterEncode = waterSecurity.encode("true"), e.random = Math.random()
    return JSON.stringify(e)
}

// let m = {
//     "name": "SelectRainMapData",
//     "btime": "202111182200",
//     "etime": "202111212200",
//     "rainlevel": "A:10,25,50,100",
//     "isoline": "N",
//     "heatRange": 50,
//     "stcdtype": "1,0,0,0,0,0",
//     "fresh": 0,
//     "points": ""
// }
// console.log(encodeParams(m))
module.exports = {
    decodeResult
}