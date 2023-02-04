var CryptoJS = require('crypto-js')
const jsdom = require("jsdom");
const {JSDOM} = jsdom; //在jsdom中导出JSDOM对象
const {window} = new JSDOM('<!doctype html><html><body></body></html>');
var md5 = require('md5');
_0x2029fd = '6ea95560073349d'

// ------响应解密------
function _0x5dd36c(_0x5a7ade, _0x5245e0) {
    _0x5a7ade = _0x5a7ade["replace"](/[\n]/g, '');

    var _0x5245e0 = CryptoJS["enc"]["Utf8"]["parse"](_0x5245e0),
        _0xeccded = CryptoJS["AES"]["decrypt"](_0x5a7ade, _0x5245e0, {
            'mode': CryptoJS["mode"]["ECB"], 'padding': CryptoJS["pad"]["Pkcs7"]
        });

    return _0xeccded['toString'](CryptoJS["enc"]["Utf8"]);
}

function _0x4e4468(_0x4ba065, _0xc92b3c, _0x13f273) {
    return _0x4ba065(_0xc92b3c, _0x13f273);
}

function decode_resp(_0x1d41ae, _0x254e66) {
    var _0x5b8b02 = (_0x2029fd + _0x254e66)["substring"](8, 24), _0x573c52 = _0x4e4468(_0x5dd36c, _0x1d41ae, _0x5b8b02);

    return _0x573c52;
}

var mes = "O3I0RUO3isOHQ95z+KKUMFFzMWtJI2EMmLpjNwkQLriJbdhAqqs9Rxf52PLaq4e/uQCViuUnzNdrYL/c3dhjEZI/VhgurEV2BFU+iF8PihvP4+d8AvOEAR71fXMdIzhdhPEnPFNVOCL3dejBHPnFYUCSZ6k4o78IfGV8Qh22N3z5Jzb/NgX/3x5OIrbT5mOaMh0O/B3qXax6LcOC51hmDX9SKiKgGSDpmYbFpuWWfZAYEl447ptq6ywLwdAvh/p8rZwuzy/+0gMYmughR3+VPCW9IDdq4KLUqjtpcQ9RzSCXAs4CD/Q0MVPPO+vCwKHP"

var time = 1656218408568
result = decode_resp(mes, time)
console.log(result)

// ------验证码请求k参数------
function _0x17464f(_0x48bdcc, _0x1a1f1b, _0x58a7f9) {
    return _0x48bdcc(_0x1a1f1b, _0x58a7f9);
}

function _0x5bcded(_0x3bd663, _0x522efe) {
    var _0xb035db = CryptoJS['enc']['Utf8']["parse"](_0x3bd663),
        _0x522efe = CryptoJS["enc"]["Utf8"]['parse'](_0x522efe),
        _0x3c3b9f = CryptoJS["AES"]["encrypt"](_0xb035db, _0x522efe, {
            'mode': CryptoJS["mode"]["ECB"], 'padding': CryptoJS["pad"]["Pkcs7"]
        });

    return _0x3c3b9f['toString']();
}

navigator = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Google Inc.",
    "maxTouchPoints": 0,
    "doNotTrack": null,
    "pdfViewerEnabled": true,
    "hardwareConcurrency": 8,
    "cookieEnabled": true,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "platform": "Win32",
    "product": "Gecko",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "language": "zh-CN",
    "languages": ["zh-CN", "zh"],
    "onLine": true,
    "webdriver": false,
    "getBattery": function () {
    },
    "getGamepads": function () {
    },
    "javaEnabled": function () {
    },
    "sendBeacon": function () {
    },
    "vibrate": function () {
    },
    "deviceMemory": 8,
    "canShare": function () {
    },
    "share": function () {
    },
    "clearAppBadge": function () {
    },
    "setAppBadge": function () {
    },
    "getInstalledRelatedApps": function () {
    },
    "getUserMedia": function () {
    },
    "requestMIDIAccess": function () {
    },
    "requestMediaKeySystemAccess": function () {
    },
    "webkitGetUserMedia": function () {
    },
    "registerProtocolHandler": function () {
    },
    "unregisterProtocolHandler": function () {
    }
}
localStorage = {
    "canvas_storage": "01a0e60d624bb106837c941ced9fe06a",
    "fontList_storage": "edf03e5cc00565e752da940397d7e035",
    "webgl_storage": "f1ffc11db746ecbea965b4a72ad193c6",
    "browser_uuid": "511c9fdf86284d1fb89468bfb26fe37e",
    "fontsList": "Verdana,Helvetica Neue LT Pro 35 Thin,tahoma,verdana,times new roman,Courier New,Microsoft Himalaya,helvetica,LG-FZKaTong-M19-V2.2,Georgia,georgia,courier new,Arial,arial,cursive,times,fantasy,courier,serif,monospace,Times New Roman"
}

var webglAndFontList = 'ad92bec84b1c420253dc30f6c601063f'
var fingerPrinterSon = '91908f121ab4e7c0dd1a00534779d835'
var _0x47c203 = new Date()["getTime"]()

function get_k(timestamp) {
    var k = _0x17464f(_0x5bcded, webglAndFontList + ',' + fingerPrinterSon, (_0x2029fd + timestamp)["substring"](8, 24))
    return k
}

// console.log(get_k(_0x47c203))

// ------请求验证参数 param------


// ------请求参数data------
_0xdb16f8 = {
    "platform": "Win32",
    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "cookieEnabled": 1,
    "hardwareConcurrency": 8,
    "language": "zh-CN",
    "deviceMemory": 8,
    "plugins": [
        {
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "PDF Viewer"
        },
        {
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Chrome PDF Viewer"
        },
        {
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Chromium PDF Viewer"
        },
        {
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "Microsoft Edge PDF Viewer"
        },
        {
            "description": "Portable Document Format",
            "filename": "internal-pdf-viewer",
            "name": "WebKit built-in PDF"
        }
    ],
    "screen": {
        "availWidth": 1920,
        "availHeight": 1040,
        "width": 1920,
        "height": 1080,
        "colorDepth": 24,
        "pixelDepth": 24,
        "availLeft": 0,
        "availTop": 0,
        "orientation": {},
        "onchange": null,
        "isExtended": false
    },
    "webdriver": 0,
    "selenium_$cdc": 0,
    "webglRender": "ANGLE (AMD, AMD Radeon(TM) Vega 8 Mobile Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "webglVendor": "Google Inc. (AMD)",
    "canvasMsg": "b77d876401c0fc3b8f40d3c8ee973fd2",
    "isSWbrowser": 0
}
_0x3573bc = 'df3f7255-d163-40c4-b44d-dc4f591d1d55.local'

function _0x29be47() {
    //localStorage参数
    var _0x2c507f = localStorage["browser_uuid"];

    return _0x2c507f ? _0x2c507f : (_0x2c507f = uuidv4()["replace"](/-/g, ''), localStorage["setItem"]("browser_uuid", _0x2c507f), _0x2c507f);
}

// 轨迹
_0x4c6ae2 = [
    [
        0,
        0,
        -1003
    ],
    [
        3,
        -2,
        -944
    ],
    [
        6,
        -3,
        -936
    ],
    [
        12,
        -4,
        -928
    ],
    [
        17,
        -5,
        -920
    ],
    [
        24,
        -5,
        -912
    ],
    [
        31,
        -5,
        -904
    ],
    [
        37,
        -6,
        -896
    ],
    [
        44,
        -6,
        -889
    ],
    [
        50,
        -6,
        -880
    ],
    [
        55,
        -6,
        -872
    ],
    [
        61,
        -7,
        -864
    ],
    [
        66,
        -7,
        -859
    ],
    [
        70,
        -8,
        -849
    ],
    [
        75,
        -8,
        -842
    ],
    [
        79,
        -9,
        -835
    ],
    [
        82,
        -9,
        -826
    ],
    [
        84,
        -9,
        -819
    ],
    [
        86,
        -9,
        -809
    ],
    [
        88,
        -10,
        -802
    ],
    [
        91,
        -10,
        -795
    ],
    [
        93,
        -10,
        -786
    ],
    [
        94,
        -10,
        -779
    ],
    [
        95,
        -10,
        -772
    ],
    [
        97,
        -11,
        -764
    ],
    [
        98,
        -11,
        -748
    ],
    [
        99,
        -11,
        -741
    ],
    [
        100,
        -11,
        -729
    ],
    [
        99,
        -11,
        -470
    ],
    [
        97,
        -11,
        -462
    ],
    [
        96,
        -11,
        -454
    ],
    [
        94,
        -11,
        -447
    ],
    [
        92,
        -11,
        -438
    ],
    [
        91,
        -11,
        -430
    ],
    [
        89,
        -11,
        -422
    ],
    [
        88,
        -11,
        -414
    ],
    [
        87,
        -11,
        -407
    ],
    [
        86,
        -11,
        -398
    ],
    [
        85,
        -11,
        -392
    ]
]
// portion
_0x2ad07a = {
    "originalEvent": {
        "isTrusted": true
    },
    "type": "mouseup",
    "clientX": 831,
    "target": {},
    "currentTarget": {
        "location": {
            "ancestorOrigins": {},
            "href": "https://www.2980.com/login/",
            "origin": "https://www.2980.com",
            "protocol": "https:",
            "host": "www.2980.com",
            "hostname": "www.2980.com",
            "port": "",
            "pathname": "/login/",
            "search": "",
            "hash": ""
        },
        "jQuery3410099215613419341821": {
            "events": {
                "keyup": [
                    {
                        "type": "keyup",
                        "origType": "keyup",
                        "guid": 12,
                        "namespace": ""
                    }
                ],
                "mousedown": [
                    {
                        "type": "mousedown",
                        "origType": "mousedown",
                        "guid": 24,
                        "selector": ".dragContent .handler",
                        "needsContext": false,
                        "namespace": "drage"
                    }
                ],
                "touchstart": [
                    {
                        "type": "touchstart",
                        "origType": "touchstart",
                        "guid": 24,
                        "selector": ".dragContent .handler",
                        "needsContext": false,
                        "namespace": "drage"
                    }
                ],
                "mousemove": [
                    {
                        "type": "mousemove",
                        "origType": "mousemove",
                        "guid": 25,
                        "namespace": "drage"
                    }
                ],
                "touchmove": [
                    {
                        "type": "touchmove",
                        "origType": "touchmove",
                        "guid": 25,
                        "namespace": "drage"
                    }
                ],
                "mouseup": [
                    {
                        "type": "mouseup",
                        "origType": "mouseup",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ],
                "touchend": [
                    {
                        "type": "touchend",
                        "origType": "touchend",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ],
                "touchcancel": [
                    {
                        "type": "touchcancel",
                        "origType": "touchcancel",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ]
            }
        }
    },
    "relatedTarget": null,
    "timeStamp": 17168.899999976158,
    "jQuery341009921561341934182": true,
    "delegateTarget": {
        "location": {
            "ancestorOrigins": {},
            "href": "https://www.2980.com/login/",
            "origin": "https://www.2980.com",
            "protocol": "https:",
            "host": "www.2980.com",
            "hostname": "www.2980.com",
            "port": "",
            "pathname": "/login/",
            "search": "",
            "hash": ""
        },
        "jQuery3410099215613419341821": {
            "events": {
                "keyup": [
                    {
                        "type": "keyup",
                        "origType": "keyup",
                        "guid": 12,
                        "namespace": ""
                    }
                ],
                "mousedown": [
                    {
                        "type": "mousedown",
                        "origType": "mousedown",
                        "guid": 24,
                        "selector": ".dragContent .handler",
                        "needsContext": false,
                        "namespace": "drage"
                    }
                ],
                "touchstart": [
                    {
                        "type": "touchstart",
                        "origType": "touchstart",
                        "guid": 24,
                        "selector": ".dragContent .handler",
                        "needsContext": false,
                        "namespace": "drage"
                    }
                ],
                "mousemove": [
                    {
                        "type": "mousemove",
                        "origType": "mousemove",
                        "guid": 25,
                        "namespace": "drage"
                    }
                ],
                "touchmove": [
                    {
                        "type": "touchmove",
                        "origType": "touchmove",
                        "guid": 25,
                        "namespace": "drage"
                    }
                ],
                "mouseup": [
                    {
                        "type": "mouseup",
                        "origType": "mouseup",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ],
                "touchend": [
                    {
                        "type": "touchend",
                        "origType": "touchend",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ],
                "touchcancel": [
                    {
                        "type": "touchcancel",
                        "origType": "touchcancel",
                        "guid": 26,
                        "namespace": "drage"
                    }
                ]
            }
        }
    },
    "handleObj": {
        "type": "mouseup",
        "origType": "mouseup",
        "guid": 26,
        "namespace": "drage"
    }
}
_0x10d00b = {
    "type": "mousedown",
    "clientX": 816
}
_0x3e83c4 = _0x10d00b["type"] == "mousedown" ? _0x10d00b["clientX"] : _0x10d00b["changedTouches"][0]['clientX']
var _0x26c5a1 = _0x2ad07a["type"] == "mouseup" ? _0x2ad07a["clientX"] - _0x3e83c4 : _0x2ad07a['originalEvent']["changedTouches"][0]['clientX'] - _0x3e83c4;

var _0x342003 = +Math["floor"](Math["random"]() * 30) + 50
var _0x4af479 = (+(Math["floor"](Math["random"]() * 20) * 0.01) + 1.1)["toFixed"](2)
var _0x12ccfb = (+(Math["floor"](Math["random"]() * 30) * 0.01) + 0.6)["toFixed"](2)
var widthPx = 320
var _0x4b18aa = (Math["pow"](_0x342003 * _0x26c5a1, 0.4 * Math["abs"](Math["sin"](0.025 * _0x26c5a1))) + Math["pow"](_0x26c5a1, _0x4af479) * _0x12ccfb) / widthPx;

function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

_0x5e23a8 = new Date()["getTime"]()
// 加了延时
_0x5c7238 = new Date()["getTime"]() + Random(500, 1000)
console.log(_0x5c7238 - _0x5e23a8)
_0x5cf01c = ((_0x5c7238 - _0x5e23a8) / 1000)['toFixed'](1)
_0xc58236 = new Date()['getTime']()
// 加了延时
_0x35d44d = new Date()['getTime']() + Random(8000, 30000)
_0x6083cb = _0x35d44d - _0xc58236;
console.log(_0x6083cb)
fingerPrinterList = [25165824, 1, 'ad92bec84b1c420253dc30f6c601063f']
_0x2ebc07 = 0


function get_sdk(token, sn) {
    var cn = md5("num" + parseInt(10000000 + Math["random"]() * 1000000) + "time" + new Date()['getTime']())
    var timestamp = new Date()["getTime"]()
    console.log('cn -->', cn)
    var portion = Math['random']()['toFixed'](0x2)
    console.log('portion -->', portion)
    // 请求验证码图片返回的token
    // var token = 'd827ee2b37e69373d024a06ff08d60a3'
    _0x17cd58 = md5(portion + ':' + timestamp + ':' + token)
    // 请求验证码图片返回的sn
    // sn = 'f8187548bf8d4a758a3c4206ba72e98b'
    var signature = md5(_0x17cd58 + ':' + sn + ":1:" + cn + ":auth" + ":5b350044ac092f7bf3c2bc791638ca2f");
    console.log('signature -->', signature)
    data = _0x17464f(_0x5bcded, JSON['stringify']({
        'browserMsg': _0xdb16f8,
        'localIP': _0x3573bc,
        'browserUUID': _0x29be47(),
        'slide': _0x4c6ae2,
        'portion': _0x4b18aa,
        'cost_time': _0x5cf01c,
        'initToSlideTime': (_0x6083cb - _0x5cf01c)['toFixed'](0x1),
        'fingerPrinterList': fingerPrinterList,
        'fingerPrinterSon': fingerPrinterSon,
        'netDuration': _0x2ebc07,
        'locationHref': 'https://www.2980.com/login/',
        'checkTime': _0x6083cb,
        'param_random': Math["floor"](Math["random"]() * 9) + 1,
        'isPC': +true
    }), (_0x2029fd + signature)['substring'](8, 24))
    console.log(data)
    return {
        "cn": cn,
        "portion": portion,
        "signature": signature,
        "data": data,
        "sn": sn
    }
}
result = get_sdk()
console.log(result)