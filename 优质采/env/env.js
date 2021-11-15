var Document = function Document(){}
Object.defineProperties(Document.prototype,{
    [Symbol.toStringTag]: {
        value:"Document"
    },
    // [Symbol.hasInstance]: {
    //     get:function (){
    //         console.log("hook")
    //         return true
    //     }
    // }

})
var HTMLDocument = function HTMLDocument(){}
Object.defineProperties(HTMLDocument.prototype,{
    [Symbol.toStringTag]: {
        value:"HTMLDocument"
    }
})
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype)
document = {
    "head": {},
    "documentElement": {
        "getAttribute": function () {
        }
    },
    "readyState": "complete",
    "addEventListener": function () {
    },
    "createElement": function () {
        return {}
    },
    "getElementsByTagName": function (str) {
        console.log(str)
        if (str === "meta") {
            let metaRes = []
            metaRes["meta-pro"] = {
                "content": {
                    "length": 6
                }
            }
            return metaRes
        }
    }
}
Object.setPrototypeOf(document,HTMLDocument.prototype)
navigator = Object.create({
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
    platform: "Linux x86_64",
    appCodeName: "Mozilla",
    languages: ["en-US", "en"],
    cookieEnabled: true,
    webdriver: false,
});
Object.defineProperties(navigator,{
    [Symbol.toStringTag]: {
        value:"Navigator"
    }
})
srceen = Object.create({
    height: 852,
    width: 1918,
    colorDepth: 24,
});
location = {
    "protocol": "https:",
    "href": "https://www.youzhicai.com/sn1/15022E858978-A7C0-4D99-A602-967A31FB4828.html",
    "pathname": "/flightlist",
    "host": "www.dtasecurity.cn",
    "hostname": "www.dtasecurity.cn",
    "reload": function (){},
}
window = {
    XMLHttpRequest: function () {
    },
    sessionStorage: {},
    localStorage: {},
    navigator: navigator,
    scrollTo: function () {
    },
    addEventListener: function () {
    },
    attachEvent: function () {
    },
    screen: srceen,
    location: location,
    chrome: {},
    document: document,
};
Object.defineProperties(global,{
    [Symbol.toStringTag]: {
        value:"Window"
    }
})
let Image = function () {
};
var CryptoJS = require("crypto-js");