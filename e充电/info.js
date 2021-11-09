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

var data = {
    "id": "da2024b7-1f99-41ba-a04a-afbd7f0d4ff3"
}
var jsonData = {}
var encrypt = new encryptAes();
if (Object.keys(data).length > 0) {
    signStr = JSON.stringify(data);
    jsonData.data = encrypt.encode(signStr);
}
console.log(jsonData)
// var str = 'jYJSp7kg0OlWoB7tVkFjWTl3LHLJOQ45ETrNakGASkuE2l2ADZ3QOttOYmvKpE41iaqGq54xVQEbeyX9JVcH1MT7GuvTwZyGsFiHWsVMV7cfCeSCtAPSI+4o0SUfDm9TdUJ0CCSTrvvJ23rS+htCpU6aZI2Tsj3HI6tTHr+GgujhAiD9tJkySovkM/Y11YcQfoeibWTlH3UmiOu69ZjZXYJ9Y2bRwKbPxhc9cgxrIiEiRM+ZHcMeCPl3h+r3cn4Tb5A1zHRnLimq36TU+e9J1HBUwReZFmn5ZuAa+rZQPlhw1McwC8JLvaEb47VKvKcNbMtIbtP6DuOwah8tDE9Ibn+6z19UuAyN5zJA89lZRXVQ3+3ZnedxxmFnMigsYb1UdJugUOHCvUhtMYNDq9YEO+/RoEhb7UcKWoIFn8rZMOcFgj3hK4b/+LmcEFz3J6VxXf7PeMtkYsDR0fXn9pZnUQF5cGWpbJqQbOqm5x6WQdP+omqMHy7muLfDoqeHWekPFxhTJemSxgjgZv8efDywHuPDSkS+YboDdp0Gd8Hrn3pN1NOTc8D7TYTPEYdIZCOs+P/gewXu3HWPFMC5uDgRFSlD2azZhgtBry5CydtSLBnSEIZnZV9UddoqY33ZZZaNHNOqp7CNjOyjPLNX7XtHsyi4i9cPbdRIShdHWhjj9rEIP0+rzhiUreyb9m+O/p4kdoNdJIkFMefHimFc24LyidPaEBhllkeOW88dVxiv8FHOGQHGWpmwN4XV90sPlm6kLlEYwpzCB4p/tV7xsOx/zDOdRaR4npOy57syAXij/W2KQe+FZCHesZIfj7cIpsrKer4/fMVZ0EUkro8Tj3wVSjhDC1AvhOiQ0pQ0VEcTKxssQO/i+VhXfWztPVwBdoFmi7TRHWi9tlOpqpGQM70Ch14W9dmIxDCmTMhWCnrfzt+QJew7YVoVk88xUQ4wQfRuumTzg5WqVv3Xnmy/lYSN5MGTNJME9Sj2HPD2LEHRsD6ncMmT7iDuNembQMar9LXXLb9UVxYRBJAXp2ChmpqZFts2ohrFQPrhv69/slBGwvNZ8jn+gSOfbEC+WRgROrl8/8Q6L12js/pmTCnyDMzsUOsNuRLlWhMLb4Bb2mI//nXz1wT063n3JwZOC9nsp8N2FS7Eh+Q0oXPYdkEadEaMETtSFtBDOMKk5KZa0jI6jS5nldUSLOb9ioTfxPH05W2cxy+Ugu1yFT40bfup1jqiXNP7F7OWN6c9Y7R/nsgpalFvGe5CGSDYCnCUy+R9NMO0hv7nqFMM6StAimjuFApeXtpWgXNQ9eCGawfR7619NLd1aTydwghCHcbtPo6Ei0TuRqm8Ae79w0YN1NKAIFUI0jZPLbsC8uH5bj/O5Itp3bt7evWI81fHHkZk/il6vivaSA9esN76FtcfD/gc78AaF2Ljb1Wni2F5IShWQGslDF3m64LIsetwHltvzUzktBU84H6H1WfpFmNk97aEq0G4XPsNgbsOwTBQV62Nbm6wwFsuzPx2DtVBPliFRReyj43sd03LvDT57BxSM4YvXxn3RUfseRbwXRZ2W+NXB1uF46eFjuUwZ05kJubkUH5lIrdy35FV8FwKBDqSQIpj0zdudDPTngQ5kwWVjB3MjrV2lgiysWlJqeiC2oN2rojg0AcvckMtwsASXvWdgrtPRBv3U8231KspMDVoyY49ftS38kslTC1KFMx/LpeI5orNWeyCipmlKz/kCAq/1jAgdjUwEJL1wMqcQ5G+XtBihMD9m0k+LI/gDLvRTD1NsyMZjnoULzQV09jwWsr5eigCk9c/xZ2DFZvq/8DFc5Ns/Nsu6B+SE2QX8d0S9UwbkQ44GQeMUbO1WMQFF8u7Yggy4yX9wOq2xMBACxXXnAw1ORFbkm42pGLAfOgVgQSr/K+UbDlL6lJvna0I8/DAyH5T3cwXew=='

// 刚开始我采用全局搜索 data 关键字, 发现匹配处理的结果太多,
// 网站响应数据 data 加密返回, 采用全局搜索 public（公钥） 找到了加密点
// console.log(JSON.parse(decryptCode(str)))