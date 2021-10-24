const CryptoJS = require('crypto-js')

function privaKey(l) {
    l = l || 32;
    for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = n.length, e = "", a = 0; a < l; a++)
        e += n.charAt(Math.floor(Math.random() * t));
    return e
}

function jsonKey(l) {
    var n = CryptoJS.enc.Utf8.parse(privaKey(16))
        , t = CryptoJS.enc.Utf8.parse(privaKey(16))
        , e = CryptoJS.enc.Utf8.parse(l)
        , a = CryptoJS.AES.encrypt(e, n, {
            iv: t,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return CryptoJS.enc.Base64.stringify(a.ciphertext)
}

var user_phone = '123456789'
var password = '123456'
var transTime = +new Date()
// var l = '{"body":{"loginMethod":"1","name":"17785232224","password":"Ram123456"},"head":{"userCode":null,"channelCode":"101","transTime":1634985127231,"transToken":"","customerId":null,"transSerialNumber":""}}'

var m = `{"body":{"loginMethod":"1","name":"${user_phone}","password":"${password}"},"head":{"userCode":null,"channelCode":"101","transTime":${transTime},"transToken":"","customerId":null,"transSerialNumber":""}}`
console.log(jsonKey(m))