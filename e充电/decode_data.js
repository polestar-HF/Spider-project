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

function decryptCode(data) {
    var encrypt = new encryptAes();
    return encrypt.decode(data);
}

var str = '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'
// 刚开始我采用全局搜索 data 关键字, 发现匹配处理的结果太多,
// 网站响应数据 data 加密返回, 采用全局搜索 public（公钥） 找到了加密点
console.log(JSON.parse(decryptCode(str)))