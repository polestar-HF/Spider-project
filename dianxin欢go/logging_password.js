const CryptoJS = require('crypto-js')

function uPwd(e) {
    var a = CryptoJS.MD5("login.189.cn");
    var c = CryptoJS.enc.Utf8.parse(a);
    var b = CryptoJS.enc.Utf8.parse("1234567812345678");
    var d = CryptoJS.AES.encrypt(e, c, {
        iv: b
    });
    return d + ""
}

// 网址：aHR0cDovL2xvZ2luLjE4OS5jbi93ZWIvbG9naW4=

console.log(uPwd('90909090'))