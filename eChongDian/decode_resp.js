const CryptoJS = require('crypto-js')

function encryptAes() {
    var publicKey = 'abcdefgabcdefg13', publicIv = 'abcdefgabcdefg11';
    var key = CryptoJS.enc.Utf8.parse(publicKey), iv = CryptoJS.enc.Utf8.parse(publicIv);
    // public method for encoding
    this.encode = function (input) {
        var data = CryptoJS.enc.Utf8.parse(input);
        var encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    };

    // public method for decoding
    this.decode = function (input) {
        var data = input;
        var decrypted = CryptoJS.AES.decrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    this.getStamp = function () {
        return (new Date()).valueOf().toString() + Math.floor(Math.random() * 90000 + 10000).toString();
    }
}

// 解密响应函数

function decodeData(input) {
    let encrypt = new encryptAes();
    return encrypt.decode(input)

}

// console.log(JSON.parse(decodeData(str)))

// info 请求参数（data）加密函数

function encodeParam(input) {
    let encrypt = new encryptAes();
    return encrypt.encode(input)
}

function urlEncode(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};

function encryptByOriginalWay(message, key) {
    let data = {}
    let keyHex = CryptoJS.enc.Utf8.parse(key);
    let messages = encodeParam(message)
    let encrypted = CryptoJS.TripleDES.encrypt(messages, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    data.data = encrypted.toString()
    var params = urlEncode(data)
    return params.substr(1)
}

let key = 'F29E0E39-98E4-F4CC318443'
let str = '{"id":"station-1140290000006570"}'
console.log(encryptByOriginalWay(str, key))
