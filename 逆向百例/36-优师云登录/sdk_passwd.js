const CryptoJS = require('crypto-js')

function get_passwd(e) {
    r = CryptoJS.enc.Latin1.parse('password.yunjy.y');
    var n = r
        , a = CryptoJS.AES.encrypt(e, r, {
        iv: n,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return a.toString()
}

console.log(get_passwd('sdada'))