const jsdom = require("jsdom");
const {JSDOM} = jsdom; //在jsdom中导出JSDOM对象
const {window} = new JSDOM('<!doctype html><html><body></body></html>'); //导出JSDOM中的window对象
const md5 = require('md5-node')
document = {}
navigator = global
// 这题会请求两次 https://www.python-spider.com/challenge/2, 第一次请求返回ob混淆过后js代码,
// 通过在线工具解混淆之后即可看清逻辑
function cookie() {
    var b = function () {
        var e = true;
        return function (f, g) {
            var h = e ? function () {
                if (g) {
                    var i = g["apply"](f, arguments);
                    g = null;
                    return i;
                }
            } : function () {
            };
            e = false;
            return h;
        };
    }();

    (function () {
        b(this, function () {
            var d = new RegExp("function *\\( *\\)");
            var e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");

            var f = _$oc("init");

            if (!d["test"](f + "chain") || !e["test"](f + "input")) {
                f("0");
            } else {
                _$oc();
            }
        })();
    })();

    console["log"]("\u6B64\u7F51\u9875\u53D7\u3010\u7231\u952D\u4E91\u76FE V1.0 \u52A8\u6001\u7248\u3011\u4FDD\u62A4");
    // 时间戳
    var c = 1587102734000;
    // base64编码
    token = window["btoa"]("aiding_win" + String(c));
    // md5加密
    md = md5(window["btoa"]("aiding_win" + String(Math["round"](c / 1000))));
    document["cookie"] = "sign=" + Math["round"](c / 1000) + "~" + token + "|" + md + "; path=/";
    console.log(document["cookie"])
}

// 运行程序
cookie()

function _$oc(a) {
    function c(d) {
        if (typeof d === "string") {
            return function (f) {
            }["constructor"]("while (true) {}")["apply"]("counter");
        } else {
            if (("" + d / d)["length"] !== 1 || d % 20 === 0) {
                (function () {
                    return true;
                });
            } else {
                (function () {
                    return false;
                });
            }
        }

        c(++d);
    }

    try {
        if (a) {
            return c;
        } else {
            c(0);
        }
    } catch (d) {
    }
}