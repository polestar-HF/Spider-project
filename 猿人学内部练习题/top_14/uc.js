const CryptoJS = require('crypto-js')
num = 1;
k = 'wdf2ff*TG@*(F4)*YH)g430HWR(*)' + 'wse';
t = Date.parse(new Date()) / 1000;
m = CryptoJS.enc.Utf8.parse(k);
function uc(num) {
    word = t + '|' + num
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, m, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
};

console.log(uc(1))