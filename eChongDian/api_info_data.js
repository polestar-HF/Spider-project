const CryptoJS = require('crypto-js')
function encryptByOriginalWay(message, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
var key = 'F29E0E39-98E4-F4CC318443'
var message = '7AiCfwEpIF19fRKidVUFLbjNo49b1IopvncLb8DwIBX4qJNVjIL6xfwRcwBi2paY'
console.log(encryptByOriginalWay(message, key))