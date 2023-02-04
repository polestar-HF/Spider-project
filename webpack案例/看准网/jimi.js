const CryptoJS = require('crypto-js')
var i, a = (i = null,
        function () {
            var e, t, n, a, o;
            return i || ((o = null) || (t = new RegExp("\\u200c", "g"),
                n = new RegExp("\\u200d", "g"),
                a = new RegExp(".{8}", "g"),
                e = "‍‌‍‍‍‌‌‌‍‍‌‍‍‌‍‍‍‍‌‍‍‌‍‍‍‌‍‌‍‍‍‌‍‌‌‍‍‍‍‌‍‌‌‌‍‌‌‌‍‌‌‍‍‍‌‌‍‌‌‍‌‍‌‌‍‌‍‍‍‌‌‌‍‌‌‍‍‌‌‍‍‌‌‍‍‍‍‌‍‌‍‍‌‌‍‍‍‌‍‍‍‍‌‍‍‍‌‌‌‍‍‌‍‍‌‌‍‌‌‌‍‌‌‌‍‍‌‍".replace(a, (function (e) {
                        return String.fromCharCode(parseInt(e.replace(t, 1).replace(n, 0), 2))
                    }
                )),
                o = {
                    key: CryptoJS.enc.Utf8.parse(e),
                    mode: CryptoJS.mode.CBC,
                    pad: CryptoJS.pad.Pkcs7

                }),
                i = o),
                i
        }
)
function key(e) {
            void 0 === e && (e = 16);
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = "", r = 0; r < e; r++) {
                n += t[Math.ceil(61 * Math.random())]
            }
            return n
        }
function encrypt(e) {
            var t = key()
            void 0 === e && (e = ""),
            void 0 === t && (t = "");
            var n = a()
              , i = CryptoJS.AES.encrypt(e.toString(), n.key, {
                iv: CryptoJS.enc.Utf8.parse(t),
                mode: n.mode,
                padding: n.pad
            });
            return [i.toString().replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "~"), t]
        }


function decrypt(e, t) {
    void 0 === e && (e = ""),
    void 0 === t && (t = "");
    var n = a()
        , i = CryptoJS.AES.decrypt(e.toString(), n.key, {
        iv: CryptoJS.enc.Utf8.parse(t),
        mode: n.mode,
        padding: n.pad
    });
    return i = i.toString(CryptoJS.enc.Utf8)
};

