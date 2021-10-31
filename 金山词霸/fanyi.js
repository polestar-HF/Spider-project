let CryptoJS = require('crypto-js');

function signature(timestamp, word) {
    let t = `61000006${timestamp}${word}`
    return CryptoJS.MD5("".concat('/dictionary/word/query/web').concat(t, "7ece94d9f9c202b0d2ec557dg4r9bc")).toString()
}

console.log(signature())