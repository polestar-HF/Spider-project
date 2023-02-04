function e(e) {
    return decodeURIComponent(exports.weAtob(e).replace(/(.)/g, function(e) {
        var t = e.charCodeAt(0).toString(16).toUpperCase();
        return t.length < 2 && (t = "0" + t), "%" + t;
    }));
}

function t(t) {
    var r = t.replace(/-/g, "+").replace(/_/g, "/");
    switch (r.length % 4) {
      case 0:
        break;

      case 2:
        r += "==";
        break;

      case 3:
        r += "=";
        break;

      default:
        throw "Illegal base64url string!";
    }
    try {
        return e(r);
    } catch (e) {
        return exports.weAtob(r);
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

exports.weBtoa = function(e) {
    for (var t, o, n, a, c = "", i = 0, d = (e = String(e)).length % 3; i < e.length; ) {
        if ((o = e.charCodeAt(i++)) > 255 || (n = e.charCodeAt(i++)) > 255 || (a = e.charCodeAt(i++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        t = o << 16 | n << 8 | a, c += r.charAt(t >> 18 & 63) + r.charAt(t >> 12 & 63) + r.charAt(t >> 6 & 63) + r.charAt(63 & t);
    }
    return d ? c.slice(0, d - 3) + "===".substring(d) : c;
}, exports.weAtob = function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !o.test(e)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    e += "==".slice(2 - (3 & e.length));
    for (var t, n, a, c = "", i = 0; i < e.length; ) t = r.indexOf(e.charAt(i++)) << 18 | r.indexOf(e.charAt(i++)) << 12 | (n = r.indexOf(e.charAt(i++))) << 6 | (a = r.indexOf(e.charAt(i++))),
    c += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === a ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
    return c;
}, exports.default = function(e, r) {
    if ("string" != typeof e) throw "Invalid token specified";
    var o = !0 === (r = r || {}).header ? 0 : 1;
    try {
        return JSON.parse(t(e.split(".")[o]));
    } catch (e) {
        throw "Invalid token specified: " + e.message;
    }
};