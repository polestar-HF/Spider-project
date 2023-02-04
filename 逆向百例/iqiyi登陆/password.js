window = global
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36'
}
location = {
    protocol: 'https:',
    hostname: 'www.iqiyi.com'
}
document = {
    getElementsByTagName: function () { }
}
var Ram;
!function(i) {
    var n = {};
    function o(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            "i": e,
            "l": !1,
            "exports": {}
        };
        return i[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    // o.m = i,
    // o.c = n,
    // o.d = function(e, t, i) {
    //     o.o(e, t) || Object.defineProperty(e, t, {
    //         "enumerable": !0,
    //         "get": i
    //     })
    // }
    // ,
    // o.r = function(e) {
    //     "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
    //         "value": "Module"
    //     }),
    //     Object.defineProperty(e, "__esModule", {
    //         "value": !0
    //     })
    // }
    // ,
    // o.t = function(t, e) {
    //     if (1 & e && (t = o(t)),
    //     8 & e)
    //         return t;
    //     if (4 & e && "object" == typeof t && t && t.__esModule)
    //         return t;
    //     var i = Object.create(null);
    //     if (o.r(i),
    //     Object.defineProperty(i, "default", {
    //         "enumerable": !0,
    //         "value": t
    //     }),
    //     2 & e && "string" != typeof t)
    //         for (var n in t)
    //             o.d(i, n, function(e) {
    //                 return t[e]
    //             }
    //             .bind(null, n));
    //     return i
    // }
    // ,
    // o.n = function(e) {
    //     var t = e && e.__esModule ? function() {
    //         return e["default"]
    //     }
    //     : function() {
    //         return e
    //     }
    //     ;
    //     return o.d(t, "a", t),
    //     t
    // }
    // ,
    // o.o = function(e, t) {
    //     return Object.prototype.hasOwnProperty.call(e, t)
    // }
    // ,
    // o.p = "",
    // o(o.s = 28)
    Ram = o
}([function(e, t, o) {
    t = function(e, t, i) {
        o(29);
        var n = {};
        n.Class = o(12),
        n.cookie = {},
        n.cookie.get = o(31),
        n.cookie.set = o(33),
        n.cookie.remove = o(34),
        n.browser = o(15),
        n.floater = o(35),
        n.floaterView = o(36),
        n.logServer = o(39),
        n.page = {},
        n.page.getViewWidth = o(22),
        n.page.getViewHeight = o(21),
        n.page.getScrollLeft = o(23),
        n.page.getScrollTop = o(24),
        n.page.getWidth = o(40),
        n.page.getHeight = o(41),
        n.md5 = o(42),
        n.extend = o(43),
        n.load = o(44),
        n.rsaUtils = o(45),
        i.exports = n
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var s = function s(e) {
            return String(e).replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g, function(e) {
                return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        }
          , n = function n(e) {
            return String(e).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"), "\\$1")
        }
          , a = function a(e, t) {
            var i, n;
            if ("function" == typeof t)
                for (i in e)
                    if (e.hasOwnProperty(i) && (n = e[i],
                    !1 === t.call(e, n, i)))
                        break;
            return e
        }
          , r = function r(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
          , c = function c(e, t) {
            var i, n = [], o = t || function(e) {
                return s(e)
            }
            ;
            return a(e, function(e, t) {
                if (r(e))
                    for (i = e.length; i--; )
                        n.push(t + "=" + o(e[i], t));
                else
                    n.push(t + "=" + o(e, t))
            }),
            n.join("&")
        }
          , o = {}
          , d = function d(e, t, i) {
            e && (o[t] = o[t] || [],
            o[t].push({
                "type": t,
                "elem": e,
                "eventHandle": i
            }),
            e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i))
        }
          , l = function l(e, i, n) {
            e && (e.removeEventListener ? e.removeEventListener(i, n, !1) : e.attachEvent && e.detachEvent("on" + i, n),
            o[i].forEach(function(e, t) {
                e.eventHandle == n && o[i].splice(t, 1)
            }))
        }
          , u = function u() {
            for (var e in o)
                o[e].forEach(function(e) {
                    l(e.elem, e.type, e.eventHandle)
                });
            o = {}
        };
        i.exports = {
            "getElementByAttr": function(e, t, i) {
                for (var n = ("undefined" == typeof arguments[3] ? document : arguments[3]).getElementsByTagName(e), o = [], s = 0; s < n.length; s++)
                    n[s].getAttribute(t) == i && o.push(n[s]);
                return o
            },
            "isEmptyObject": function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            "removeAllChild": function(e) {
                if (e && e.hasChildNodes())
                    for (var t = e.childNodes(), i = t.length - 1; 0 <= i; i--)
                        e.removeChild(t[i])
            },
            "on": function(e, t, i) {
                d(e, t, i)
            },
            "un": function(e, t, i) {
                l(e, t, i)
            },
            "unAll": function(e) {
                u(e)
            },
            "getQueryValue": function(e, t) {
                if (e) {
                    t = new RegExp("(^|&|\\?|#)" + n(t) + "=([^&#]*)(&|$|#)",""),
                    t = e.match(t);
                    return t ? t[2] : ""
                }
                return ""
            },
            "forEach": function(e, t) {
                return a(e, t)
            },
            "isArray": function(e) {
                return r(e)
            },
            "jsonToQuery": function(e, t) {
                return c(e, t)
            },
            "isCors": function() {
                var e = !1;
                return e = window.XMLHttpRequest && "withCredentials"in new window.XMLHttpRequest ? !0 : e
            }
        }
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, r) {
    (function(a) {
        var e = function(e, t, i) {
            var n = r(13).getDomain()
              , o = {
                "agenttype": "1",
                "ptid": "01010021010000000000",
                "protocolDom": "",
                "logoUrl": "",
                "msg": "请稍后重试",
                "fromSDK": "1",
                "sdk_version": "1.0.0",
                "domain": n = "iqiyi.com" != n && "pps.tv" != n && "beatshome.com" != n ? "iqiyi.com" : n,
                "globalEvent": "login,logout,pcloginsdkshow,pcloginsdkhide"
            }
              , s = {};
            i.exports = {
                "initConfig": function(e) {
                    s = a.extend(s, o),
                    s = a.extend(s, e)
                },
                "getConfig": function() {
                    return s
                }
            }
        }
        .call(i, r, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n(e, t) {
            var i;
            e && (t = String(t || "").trim(),
            i = e.className,
            t && !o(e, t) && (i = i + " " + t),
            e.className = i)
        }
          , o = function o(e, t) {
            var i = [];
            return e && e.className && (i = e.className.split(" ")),
            !!((t = String(t || "").trim()) && 0 <= i.indexOf(t))
        }
          , s = function s(e, t) {
            if (e) {
                var i = e.className && e.className.split(" ") || ""
                  , n = i && i.length || 0;
                if (n) {
                    t = String(t).trim();
                    for (var o = 0; o < n; o++)
                        if (t == i[o]) {
                            i.splice(o, 1);
                            break
                        }
                    e.className = i.join(" ")
                }
            }
        };
        i.exports = {
            "hasClass": o,
            "addClass": n,
            "removeClass": s
        }
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var o = window.PCLoginSDK && window.PCLoginSDK.eventList || {}
          , n = function n(e, t) {
            e = (e = e.replace(/^on/i, "")).toLowerCase(),
            o[e] = o[e] || [],
            o[e].push({
                "type": e,
                "listener": t
            }),
            window.PCLoginSDK.eventList = o
        }
          , s = function s(e, i) {
            e = e.replace(/^on/i, "").toLowerCase();
            var t, n = o[e];
            n && (n.length,
            t = !i,
            n && 0 < n.length && (1 == t ? o[e] = [] : n.forEach(function(e, t) {
                e.listener === i && n.splice(t, 1)
            })))
        }
          , a = function a(i) {
            for (var e in o)
                o[e].forEach(function(e) {
                    var t = new RegExp("(^|,)" + e.type + "(,|$)");
                    i.search(t) < 0 && (o[e.type] = [])
                })
        }
          , r = function r(e) {
            var i = e.type.replace(/^on/i, "").toLowerCase()
              , n = e.data
              , e = o[i];
            e && 0 < e.length && e.forEach(function(e) {
                try {
                    e.listener({
                        "type": i,
                        "data": n
                    })
                } catch (t) {}
            })
        };
        i.exports = {
            "on": function(e, t) {
                n(e, t)
            },
            "un": function(e, t) {
                s(e, t)
            },
            "unAll": function(e) {
                a(e)
            },
            "fire": function(e) {
                r(e)
            }
        }
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, o) {
    t = function(e, t, i) {
        var n = o(13).getDomain()
          , n = {
            "logout": "https://passport." + n + "/apis/user/logout.action",
            "thirdLogin": "https://passport." + n + "/apis/thirdparty/nlogin.action",
            "delcookiePPS": "https://passport.pps.tv/apis/user/delcookie.action",
            "delcookieIQIYI": "https://passport.iqiyi.com/apis/user/delcookie.action",
            "ssoTokenPPS": "https://passport.pps.tv/apis/user/sso/cd/token.action",
            "ssoCookieIQIYI": "https://passport.iqiyi.com/apis/user/sso/cd/cookie.action",
            "ssoTokenIQIYI": "https://passport.iqiyi.com/apis/user/sso/cd/token.action",
            "ssoCookiePPS": "https://passport.pps.tv/apis/user/sso/cd/cookie.action",
            "genLoginToken": "https://passport." + n + "/apis/qrcode/gen_login_token.action",
            "isTokenLogin": "https://passport." + n + "/apis/qrcode/is_token_login.action",
            "getAreacode": "https://passport." + n + "/apis/phone/get_support_areacode.action",
            "login": "https://passport." + n + "/apis/reglogin/login.action",
            "secureSendCode": "https://passport." + n + "/apis/phone/secure_send_cellphone_authcode.action",
            "authcodeLogin": "https://passport." + n + "/apis/reglogin/authcode_login.action",
            "upBizInfo": "https://passport." + n + "/apis/phone/up_biz_info.action",
            "upBizStatus": "https://passport." + n + "/apis/phone/up_biz_status.action",
            "validate": "https://passport." + n + "/apis/phone/verify_cellphone_authcode.action",
            "checkAccount": "https://passport." + n + "/apis/user/check_account.action",
            "userRegConfirm": "https://passport." + n + "/apis/reglogin/user_reg_confirm.action",
            "directBindPhone": "https://passport." + n + "/apis/phone/direct_bind_phone.action",
            "verifyAccount": "https://passport." + n + "/apis/phone/verify_account.action",
            "bindLogin": "https://passport." + n + "/apis/reglogin/bind_login.action"
        };
        i.exports = n
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, r) {
    (function(a) {
        var e = function(e, t, i) {
            var n = r(10)
              , o = r(3)
              , s = r(7);
            i.exports = a.Class("Adapter", {
                "construct": function(e) {
                    this._options = e || {}
                },
                "methods": {
                    "init": function() {},
                    "render": function() {},
                    "renderHtml": function(e, t) {
                        return n.compile(e)(t)
                    },
                    "bindEvent": function() {},
                    "show": function(e) {
                        o.removeClass(e, "dn"),
                        this.rpage && (e = {
                            "rpage": this.rpage
                        },
                        this.block ? (e.block = this.block,
                        s.block(e)) : s.show(e))
                    },
                    "hide": function(e) {
                        o.addClass(e, "dn")
                    },
                    "destroy": function() {}
                }
            })
        }
        .call(i, r, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(t, i, s) {
    (function(o) {
        var e = function(e, t, i) {
            var n = s(2);
            i.exports = {
                "show": function(e) {
                    e = this.getParam("22", e),
                    o.logServer(e)
                },
                "block": function(e) {
                    e = this.getParam("21", e),
                    o.logServer(e)
                },
                "click": function(e) {
                    e = this.getParam("20", e),
                    o.logServer(e)
                },
                "getParam": function(e, t) {
                    var i = n.getConfig()
                      , e = {
                        "p1": "1_10_101",
                        "pu": o.cookie.get("P00003"),
                        "stime": (new Date).getTime(),
                        "u": i.deviceid || o.cookie.get("QC005") || "",
                        "bstp": "56",
                        "t": e
                    };
                    return i.pingback && (e = o.extend(e, i.pingback)),
                    e = o.extend(e, t)
                }
            }
        }
        .call(i, s, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, i, o) {
    (function(p) {
        var e = function(e, t, i) {
            var a = o(50)
              , r = o(51)
              , c = o(1)
              , d = o(2)
              , l = o(14)
              , u = o(11)
              , n = p.Class("RemoteInterface", {
                "construct": function(e) {
                    this._remoteInterfaces = e
                },
                "statics": {
                    "protocol": c.isCors() ? "https:" : window.location.protocol
                },
                "methods": {
                    "send": function(n, o) {
                        var e = !1 !== n.withCredentials
                          , t = n.ifname
                          , s = this._getIfData(t);
                        c.isCors() ? r.request(s.url, {
                            "data": n.param,
                            "method": "POST",
                            "withCredentials": e,
                            "onsuccess": function(e) {
                                o && o(e)
                            },
                            "onerror": function(e) {
                                o && o({
                                    "code": "E00000",
                                    "msg": "系统异常，请稍后重试"
                                }),
                                window.MITO && window.MITO.log({
                                    "message": s.url + "接口调用失败(高版本浏览器)",
                                    "data": n.param
                                })
                            },
                            "onfailure": function(e) {
                                var t = d.getConfig()
                                  , i = t.appVersion;
                                "pca" == t.business && l.isUpgrade(i, "8.9.142.1") ? u.callPca() : o && o({
                                    "code": "A00101",
                                    "msg": "系统异常，请稍后重试"
                                }),
                                window.MITO && window.MITO.log({
                                    "message": s.url + "接口调用超时",
                                    "data": n.param
                                })
                            }
                        }) : (e = {
                            "__POST": 1,
                            "cb": 1
                        },
                        e = p.extend(e, n.param),
                        new a({
                            "form": {
                                "action": s.url
                            },
                            "data": e,
                            "callback": o,
                            "needDestroy": !0,
                            "needMd5": n.needMd5
                        }).submit())
                    },
                    "_getIfData": function(e) {
                        return this._remoteInterfaces[e] || this._remoteInterfaces
                    },
                    "_getUrl": function(e, t) {
                        var i, n = [];
                        for (i in t)
                            n.push(i + "=" + t[i]);
                        return e + "?" + n.join("&")
                    }
                }
            });
            i.exports = n
        }
        .call(i, o, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, o(0))
}
, function(t, i, h) {
    (function(p) {
        var e = function(e, t, i) {
            var n, o, s = h(2), a = [], r = null, c = !1, d = null, l = function l(t) {
                r ? r && r.tryGetFingerPrint ? t(r.tryGetFingerPrint() || "") : r.getFingerPrint ? r.getFingerPrint(function(e) {
                    t(e)
                }, function(e) {
                    t("")
                }) : t("") : t("")
            };
            function u() {
                if (r = window.dfp,
                0 < a.length)
                    for (; 0 < a.length; )
                        try {
                            var e = a.shift();
                            l(e.cb)
                        } catch (t) {}
                else
                    r && (r && r.tryGetFingerPrint ? r.tryGetFingerPrint() : r.getFingerPrint && r.getFingerPrint(function() {}))
            }
            window.dfp && (window.dfp.tryGetFingerPrint || window.dfp.getFingerPrint) ? u() : (o = document.getElementsByTagName("HEAD").item(0),
            (n = document.createElement("script")).type = "text/javascript",
            n.src = "//security.iqiyi.com/static/cook/v1/cooksdk.js",
            p.browser.iPad && (n.src = "//security.iqiyi.com/static/cook/v1/cooksdkpcwpad.js"),
            o.appendChild(n),
            o = navigator.userAgent.toLowerCase(),
            /msie/.test(o) ? n.onreadystatechange = function() {
                /loaded|complete/.test(n.readyState) && (c = !0,
                clearTimeout(d),
                u())
            }
            : n.onload = function() {
                c = !0,
                clearTimeout(d),
                u()
            }
            ),
            i.exports = {
                "getDFP": function(e) {
                    var t = s.getConfig();
                    t.dfp ? e(t.dfp) : r ? l(e) : (a.push({
                        "cb": e
                    }),
                    clearTimeout(d),
                    d = setTimeout(function() {
                        c || (clearTimeout(d),
                        u())
                    }, 2e3))
                }
            }
        }
        .call(i, h, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, h(0))
}
, function(e, t, i) {
    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (t = function(e, t, i) {
        var C, s;
        !function(n) {
            "use strict";
            (C = function(e, t) {
                return C["string" == typeof t ? "compile" : "render"].apply(C, arguments)
            }
            ).version = "2.0.2",
            C.openTag = "<%",
            C.closeTag = "%>",
            C.isEscape = !0,
            C.isCompress = !1,
            C.parser = null,
            C.render = function(e, t) {
                return (C.get(e) || d({
                    "id": e,
                    "name": "Render Error",
                    "message": "No Template"
                }))(t)
            }
            ,
            C.compile = function(t, i) {
                var n, e = arguments, o = e[2], s = "anonymous";
                "string" != typeof i && (o = e[1],
                i = e[0],
                t = s);
                try {
                    n = l(t, i, o)
                } catch (r) {
                    return r.id = t || i,
                    r.name = "Syntax Error",
                    d(r)
                }
                function a(e) {
                    try {
                        return new n(e,t) + ""
                    } catch (r) {
                        return o ? d(r)() : C.compile(t, i, !0)(e)
                    }
                }
                return a.prototype = n.prototype,
                a.toString = function() {
                    return n.toString()
                }
                ,
                t !== s && (c[t] = a),
                a
            }
            ;
            var c = C.cache = {}
              , w = C.helpers = {
                "$include": C.render,
                "$string": function(e, t) {
                    return "string" != typeof e && ("number" === (t = u(e)) ? e += "" : e = "function" === t ? w.$string(e()) : ""),
                    e
                },
                "$escape": function(e) {
                    var t = {
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "&": "&#38;"
                    };
                    return w.$string(e).replace(/&(?![\w#]+;)|[<>"']/g, function(e) {
                        return t[e]
                    })
                },
                "$each": function(e, t) {
                    if ((Array.isArray || function(e) {
                        return "[object Array]" === {}.toString.call(e)
                    }
                    )(e))
                        for (var i = 0, n = e.length; i < n; i++)
                            t.call(e, e[i], i, e);
                    else
                        for (var o in e)
                            t.call(e, e[o], o)
                }
            };
            C.helper = function(e, t) {
                w[e] = t
            }
            ,
            C.onerror = function(e) {
                var t, i = "Template Error\n\n";
                for (t in e)
                    i += "<" + t + ">\n" + e[t] + "\n\n";
                try {
                    window.MITO && window.MITO.log({
                        "message": "渲染出错了",
                        "data": {
                            "msg": i
                        }
                    })
                } catch (e) {}
            }
            ,
            C.get = function(e) {
                var t, i;
                return c.hasOwnProperty(e) ? i = c[e] : "document"in n && ((t = document.getElementById(e)) && (t = t.value || t.innerHTML,
                i = C.compile(e, t.replace(/^\s*|\s*$/g, "")))),
                i
            }
            ;
            var k, i, o, s, a, r, _, d = function d(e) {
                return C.onerror(e),
                function() {
                    return "{Template Error}"
                }
            }, l = (k = w.$each,
            i = new RegExp(["\\/\\*[\\w\\W]*?\\*\\/", "\\/\\/[^\\n]*\\n", "\\/\\/[^\\n]*$", '"(?:[^"\\\\]|\\\\[\\w\\W])*"', "'(?:[^'\\\\]|\\\\[\\w\\W])*'", "[\\s\\t\\n]*\\.[\\s\\t\\n]*[$\\w\\.]+"].join("|"),"g"),
            o = /[^\w$]+/g,
            s = new RegExp(["\\b" + "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined".replace(/,/g, "\\b|\\b") + "\\b"].join("|"),"g"),
            a = /^\d[^,]*|,\d[^,]*/g,
            r = /^,+|,+$/g,
            _ = function _(e) {
                var e = e.replace(i, "").replace(o, ",").replace(s, "").replace(a, "").replace(r, "").split(",")
                  , t = [];
                return k(e, function(e) {
                    "" != e && t.push(e)
                }),
                t
            }
            ,
            function(e, t, o) {
                var i = C.openTag
                  , s = C.closeTag
                  , a = C.parser
                  , n = t
                  , r = ""
                  , c = 1
                  , d = {
                    "$data": 1,
                    "$id": 1,
                    "$helpers": 1,
                    "$out": 1,
                    "$line": 1
                }
                  , l = {}
                  , u = "var $helpers=this," + (o ? "$line=0," : "")
                  , p = "".trim
                  , h = p ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"]
                  , p = p ? "if(content!==undefined){$out+=content;return content;}" : "$out.push(content);"
                  , g = "function(content){" + p + "}"
                  , f = "function(id,data){data=data||$data;var content=$helpers.$include(id,data,$id);" + p + "}";
                function m(e) {
                    return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
                }
                k(n.split(i), function(e, t) {
                    var i = (e = e.split(s))[0]
                      , n = e[1];
                    1 === e.length ? r += y(i) : (r += function(e) {
                        var t = c;
                        a ? e = a(e) : o && (e = e.replace(/\n/g, function() {
                            return "$line=" + ++c + ";"
                        }));
                        {
                            var i;
                            0 === e.indexOf("=") && (i = 0 !== e.indexOf("=="),
                            e = e.replace(/^=*|[\s;]*$/g, ""),
                            i && C.isEscape ? (i = e.replace(/\s*\([^\)]+\)/, ""),
                            w.hasOwnProperty(i) || /^(include|print)$/.test(i) || (e = "$escape(" + e + ")")) : e = "$string(" + e + ")",
                            e = h[1] + e + h[2])
                        }
                        o && (e = "$line=" + t + ";" + e);
                        return function(e) {
                            e = _(e),
                            k(e, function(e) {
                                var t, i;
                                d.hasOwnProperty(e) || ("print" === (t = e) ? i = g : "include" === t ? (l["$include"] = w["$include"],
                                i = f) : (i = "$data." + t,
                                w.hasOwnProperty(t) && (l[t] = w[t],
                                i = 0 === t.indexOf("$") ? "$helpers." + t : i + "===undefined?$helpers." + t + ":" + i)),
                                u += t + "=" + i + ",",
                                d[e] = !0)
                            })
                        }(e),
                        e + "\n"
                    }(i),
                    n && (r += y(n)))
                }),
                n = r,
                o && (n = "try{" + n + "}catch(e){throw {id:$id,name:'Render Error',message:e.message,line:$line,source:" + m(t) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')};}"),
                n = u + h[0] + n + "return new String(" + h[3] + ");";
                try {
                    var v = new Function("$data","$id",n);
                    return v.prototype = l,
                    v
                } catch (b) {
                    throw b.temp = "function anonymous($data,$id) {" + n + "}",
                    b
                }
                function y(e) {
                    return c += e.split(/\n/).length - 1,
                    e = (e = C.isCompress ? e.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "") : e) && h[1] + m(e) + h[2] + "\n"
                }
            }
            )
        }(window),
        (s = C).openTag = "{{",
        s.closeTag = "}}",
        s.parser = function(e) {
            var t = (e = e.replace(/^\s/, "")).split(" ")
              , i = t.shift()
              , n = t.join(" ");
            switch (i) {
            case "if":
                e = "if(" + n + "){";
                break;
            case "else":
                e = "}else" + (t = "if" === t.shift() ? " if(" + t.join(" ") + ")" : "") + "{";
                break;
            case "/if":
                e = "}";
                break;
            case "each":
                var o = t[0] || "$data";
                e = "$each(" + (o = "as" !== (t[1] || "as") ? "[]" : o) + ",function(" + ((t[2] || "$value") + "," + (t[3] || "$index")) + "){";
                break;
            case "/each":
                e = "});";
                break;
            case "echo":
                e = "print(" + n + ");";
                break;
            case "include":
                e = "include(" + t.join(",") + ");";
                break;
            default:
                e = s.helpers.hasOwnProperty(i) ? "==" + i + "(" + t.join(",") + ");" : "=" + (e = e.replace(/[\s;]*$/, ""))
            }
            return e
        }
        ,
        i.exports = C
    }
    .call(t, i, t, e)) === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, i) {
        var o = n(10)
          , s = n(3)
          , a = n(1)
          , r = n(52);
        i.exports = {
            "loginSuc": function(e, t) {
                t = o.compile(r)({
                    "type": "suc",
                    "icon": t.icon,
                    "nickname": t.nickname,
                    "tip": t.tip,
                    "title": t.title
                });
                e.innerHTML = t,
                s.removeClass(e, "dn")
            },
            "showTip": function(t, e) {
                e = o.compile(r)({
                    "type": "tip",
                    "tip": e.tip,
                    "btnTip": e.btnTip
                });
                t.innerHTML = e,
                s.removeClass(t, "dn");
                var i = t.querySelector('[data-toast="btn"]')
                  , n = function n(e) {
                    e.stopPropagation && e.stopPropagation(),
                    a.un(i, "click", n),
                    s.addClass(t, "dn")
                };
                a.on(i, "click", n)
            },
            "showMsg": function(e, t) {
                var i = o.compile(r)({
                    "type": "toast",
                    "tip": t.tip
                })
                  , t = t.time || 1800;
                e.innerHTML = i,
                s.removeClass(e, "dn"),
                setTimeout(function() {
                    s.addClass(e, "dn")
                }, t)
            },
            "callPca": function() {
                var t = document.querySelector('[data-login-sdk="panel"]').querySelector('[data-login-sdk="toast"]')
                  , e = o.compile(r)({
                    "type": "tip",
                    "tip": "非常抱歉，页面加载出错~",
                    "btnTip": "重试"
                });
                t.innerHTML = e,
                s.removeClass(t, "dn");
                var i = t.querySelector('[data-toast="btn"]')
                  , n = function n(e) {
                    e.stopPropagation && e.stopPropagation(),
                    a.un(i, "click", n);
                    window.external.js_app_service('{"call_type":"request", "cmd":"switch_pca_login", "cmd_context":"", "cmd_data":{}}'),
                    setTimeout(function() {
                        s.addClass(t, "dn")
                    }, 100)
                };
                a.on(i, "click", n)
            }
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, i) {
        var m = n(30)
          , v = function v(e, t, i) {
            var n, o = e.split("."), s = o.length - 1, a = 0;
            if (!i)
                try {
                    if (!new RegExp("^[a-zA-Z_$][a-zA-Z0-9_$]*$").test(o[0]))
                        throw "";
                    i = new Function("return " + o[0])(),
                    a = 1
                } catch (r) {
                    i = window
                }
            for (; a < s; a++)
                i[n = o[a]] || (i[n] = {}),
                i = i[n];
            i[o[s]] || (i[o[s]] = t)
        }
          , y = function y(e, t) {
            var i = t.ns && t.ns + "." + e;
            if (i)
                try {
                    var n = new Function("return " + i)();
                    if (n)
                        return n
                } catch (f) {}
            var o = t.extend || m
              , s = function s() {}
              , a = t.plugins || [];
            s.prototype = o.prototype;
            var r = t.construct || function() {}
              , c = t.properties || {}
              , d = t.methods || {}
              , l = t.statics || {}
              , u = new s;
            for (h in u)
                u.hasOwnProperty(h) && delete u[h];
            for (h in c)
                u[h] = c[h];
            for (h in d)
                u[h] = d[h];
            for (var p = 0; p < a.length; p++) {
                var h, g = a[p];
                for (h in g)
                    u[h] = g[h]
            }
            for (h in u.constructor = r,
            u.superclass = o,
            u.superinstance = new s,
            u.__NAME__ = e,
            r.prototype = u,
            l)
                r[h] = l[h];
            return i && v(i, r),
            r
        };
        i.exports = y
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        i.exports = {
            "SITE_DOMAIN": "iqiyi.com",
            "getDomain": function() {
                if ("file:" == location.protocol)
                    return this.SITE_DOMAIN;
                var e = window.location.hostname.split(".");
                return (e = e.slice(e.length - 2)).join(".")
            },
            "isValidateDomain": function(e) {
                e = (e = e || window.location.hostname || "").split(".");
                return "iqiyi.com" == (e = (e = e.slice(e.length - 2)).join(".")) || "pps.tv" == e
            }
        }
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = {
            "mail": function(e) {
                e = e.replace(/(^\s*)|(\s*$)/g, "");
                return /^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{1,}@([0-9a-zA-Z][0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/.test(e)
            },
            "mobile": function(e, t) {
                var i = "86" == t && /^(1\d{10})$/.test(e.trim())
                  , n = "886" == t && /^\d{10}$/gi.test(e.trim())
                  , e = "86" != t && "86" != t && 4 < e.trim().length && e.trim().length < 20;
                return i || n || e
            },
            "trimSE": function(e) {
                return e.replace(/(^\s*)|(\s*$)/g, "")
            },
            "number": function(e) {
                return /^\d+(\.\d+)?$/.test(e)
            },
            "trimAllBlank": function(e) {
                return e.replace(/\s/g, "")
            },
            "isUpgrade": function(e, t) {
                if (!e)
                    return !1;
                for (var i = t.split("."), n = e.split("."), o = !0, s = 0; s < i.length; s++) {
                    if (parseInt(i[s]) < parseInt(n[s])) {
                        o = !0;
                        break
                    }
                    if (parseInt(i[s]) !== parseInt(n[s])) {
                        o = !1;
                        break
                    }
                }
                return o
            }
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = {}
          , o = navigator.userAgent.toLowerCase()
          , s = (navigator.plugins,
        o.match(/trident/))
          , a = !s && o.match(/(ipad).*os\s([\d_]+)/)
          , r = !s && !a && o.match(/(iphone\sos)\s([\d_]+)/)
          , c = o.match(/(Android)\s+([\d.]+)/);
        n.IE11 = /rv\:11/.test(o),
        n.IE = /msie/.test(o) || n.IE11,
        n.OPERA = /opera/.test(o),
        n.MOZ = /gecko/.test(o),
        n.IE8 = /msie 8/.test(o),
        n.IE9 = /msie 9/.test(o),
        n.IE10 = /msie 10/.test(o),
        n.EDGE = /edge/.test(o),
        n.SAFARI = /safari/.test(o) && !/chrome/.test(o),
        n.mobileSafari = (/iPhone/i.test(navigator.platform) || /iPod/i.test(navigator.platform) || /iPad/i.test(navigator.userAgent)) && !!navigator.appVersion.match(/(?:Version\/)([\w\._]+)/),
        n.WEBKIT = /webkit/.test(o),
        n.CHROME = /chrome/.test(o),
        n.iPhone = /iphone os/.test(o) && !s,
        n.iPod = /iPod/i.test(o) && !s,
        n.android = /android/.test(o),
        n.iPhone4 = /iphone os [45]_/.test(o) && !s,
        n.iPad = /ipad/.test(o) && !s,
        n.WP = /windows phone/.test(o),
        n.baidu = /baidu/.test(o),
        n.mbaidu = /baidu/.test(o),
        n.m360 = /360/.test(o),
        n.muc = /uc/.test(o),
        n.mqq = /qq/.test(o),
        c && (n.version = c[2]),
        r && (n.ios = !0,
        n.version = r[2].replace(/_/g, ".")),
        a && (n.ios = !0,
        n.version = a[2].replace(/_/g, ".")),
        n.iPod && (n.ios = !0),
        n.lePad = /lepad_hls/.test(o),
        n.Mac = /macintosh/.test(o),
        n.TT = /tencenttraveler/.test(o),
        n.$360 = /360se/.test(o),
        n.ff = /firefox/.test(o),
        n.uc = /uc/.test(o),
        n.Maxthon = !1;
        try {
            n.html5Video = !!document.createElement("video").play
        } catch (l) {
            n.html5Video = !1
        }
        try {
            var d = window.external;
            n.Maxthon = !!d.max_version
        } catch (l) {}
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, o) {
    (function(n) {
        var e = function(e, t, i) {
            i.exports = {
                "rsaFun": function(e) {
                    var t = n.rsaUtils.getKeyPair("10001", "", "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd");
                    return n.rsaUtils.encryptedString(t, encodeURIComponent(e)).replace(/\s/g, "-")
                }
            }
        }
        .call(i, o, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, o(0))
}
, function(e, t, s) {
    t = function(e, t, i) {
        var n = s(3)
          , o = s(11);
        i.exports = {
            "isAgree": function(e) {
                var t = document.querySelector('[data-login-sdk="panel"]')
                  , i = t.querySelector('[data-login-sdk="toast"]')
                  , t = t.querySelector('[data-login-sdk="protocol"]').querySelector('[data-protocol-btn="agree"]');
                return !(t && !n.hasClass(t, "selected")) || (o.showMsg(i, {
                    "tip": e || "请阅读并勾选页面底部的协议"
                }),
                !1)
            }
        }
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, i) {
        var p = n(1)
          , h = n(26)
          , g = function g(e) {
            return RegExp("\\?").test(e) ? "&" : "?"
        }
          , f = function f(e, t) {
            var i = document.createElement("SCRIPT");
            return i.setAttribute("type", "text/javascript"),
            t && i.setAttribute("charset", t),
            i.setAttribute("src", e),
            document.getElementsByTagName("head")[0].appendChild(i),
            i
        }
          , m = function m(e) {
            e.clearAttributes && e.clearAttributes(),
            e && e.parentNode && e.parentNode.removeChild(e),
            e = null
        }
          , v = function v(e, t) {
            var i, n, o, s = t.data, a = t.timeout || 1e4, r = t.onsuccess, c = t.onfailure, d = "cb" + Math.floor(2147483648 * Math.random()).toString(36), l = "window.lib.__callbacks__." + d, u = window.lib.__callbacks__;
            r && (s["callback"] = l,
            t.sign && (s["qd_sc"] = h(s)),
            u[d] = function(e) {
                i && clearTimeout(i),
                r(e),
                delete u[d],
                m(n)
            }
            ,
            o = e + g(e) + p.jsonToQuery(s, window.encodeURIComponent)),
            n = f(o, t.charset),
            i = setTimeout(function() {
                m(n),
                c()
            }, a)
        };
        i.exports = v
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, i) {
        var o = n(19)
          , s = function s(e, t, i) {
            var n;
            o(e) && (n = (i = i || {}).expires,
            "number" == typeof i.expires && (n = new Date).setTime(n.getTime() + i.expires),
            document.cookie = e + "=" + t + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : ""))
        };
        i.exports = s
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n(e) {
            var t = document
              , t = "BackCompat" == t.compatMode ? t.body : t.documentElement;
            return window.innerHeight || t.clientHeight
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n(e) {
            var t = document
              , t = "BackCompat" == t.compatMode ? t.body : t.documentElement;
            return window.innerWidth || t.clientWidth
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n() {
            var e = window
              , t = e.document
              , i = t.documentElement;
            return e.pageXOffset || i && i.scrollLeft || t.body.scrollLeft
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n() {
            var e = window
              , t = e.document
              , i = t.documentElement;
            return e.pageYOffset || i && i.scrollTop || t.body.scrollTop
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, h) {
    (function(p) {
        var e = function(e, t, i) {
            var n = h(6)
              , o = h(10)
              , c = h(1)
              , d = h(3)
              , l = h(4)
              , a = new (h(49))
              , s = h(53)
              , r = [{
                "acode": "86",
                "name": "中国大陆",
                "selected": "selected"
            }, {
                "acode": "886",
                "name": "台湾",
                "selected": ""
            }]
              , u = [];
            i.exports = p.Class("areaListAction", {
                "extend": n,
                "construct": function(e) {
                    this.fireName = e.fireName,
                    this.panel = e.panel,
                    this.acode = r[0].acode,
                    this.name = r[0].name
                },
                "methods": {
                    "render": function() {
                        var t = this;
                        this.getAreaList(function(e) {
                            e = o.compile(s)({
                                "lists": e
                            });
                            t.panel.innerHTML = e,
                            t.bindEvent()
                        })
                    },
                    "getAreaList": function(o) {
                        var s = this;
                        0 < u.length ? o(u) : a.getAreacode(function(e) {
                            var t = ""
                              , i = "";
                            if ("A00000" == e.code && e.data)
                                for (var n in acode = e.data.acode,
                                e.data.local && (t = e.data.local.acode,
                                i = e.data.local.name),
                                acode)
                                    u.push({
                                        "acode": n,
                                        "name": acode[n],
                                        "selected": t == n ? "selected" : ""
                                    });
                            else
                                u = r,
                                window.MITO && window.MITO.log({
                                    "message": "区域列表接口get_support_areacode.action失败",
                                    "data": e
                                });
                            s.acode = t || s.acode,
                            s.name = i || s.name,
                            o(u)
                        })
                    },
                    "bindEvent": function() {
                        var i = this
                          , e = this.panel.querySelector('[data-area="panel"]')
                          , n = this.panel.querySelector('[data-area="listPanel"]')
                          , t = function t(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation(),
                            d.removeClass(n, "dn")
                        };
                        c.on(e, "click", t);
                        for (var o = this.panel.querySelectorAll("[data-area-acode]"), s = function s(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation();
                            var t = e.target || e.srcElement
                              , e = t.getAttribute("data-area-acode")
                              , t = t.getAttribute("data-area-name");
                            e != i.acode && (i.resetAcode(e, t),
                            l.fire({
                                "type": "globalAcodeChange",
                                "data": {
                                    "acode": e,
                                    "name": t
                                }
                            })),
                            d.addClass(n, "dn")
                        }, a = 0; a < o.length; a++)
                            c.on(o[a], "click", s);
                        var r = function r(e) {
                            (e = e || window.event).stopPropagation && e.stopPropagation(),
                            d.addClass(n, "dn")
                        };
                        c.on(n, "mouseover", t),
                        c.on(n, "mouseout", r),
                        p.browser.iPad && l.on("hideArea", function() {
                            d.addClass(n, "dn")
                        })
                    },
                    "getAcode": function() {
                        return {
                            "acode": this.acode,
                            "name": this.name
                        }
                    },
                    "resetAcode": function(e, t) {
                        var i, n;
                        e != this.acode && (i = this.panel.querySelector('[data-area="show"]'),
                        n = this.panel.querySelectorAll('[data-area-acode="' + e + '"]'),
                        d.removeClass(this.panel.querySelector('[data-area-acode="' + this.acode + '"]'), "selected"),
                        d.addClass(n, "selected"),
                        i.innerHTML = t + " +" + e,
                        this.acode = e,
                        this.name = t,
                        l.fire({
                            "type": this.fireName,
                            "data": e
                        }))
                    }
                }
            })
        }
        .call(i, h, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, h(0))
}
, function(t, i, s) {
    (function(o) {
        var e = function(e, t, i) {
            var n = s(1);
            i.exports = function(e, t) {
                return e = n.jsonToQuery(e),
                e = decodeURIComponent(e),
                o.md5(e + (t || "tS7BdPLU2w0JD89dh"))
            }
        }
        .call(i, s, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, i, p) {
    (function(u) {
        var e = function(e, t, i) {
            var n, a = p(3), o = p(14), r = p(4), c = p(1), s = "手机号格式错误，请重新输入", d = "邮箱格式错误，请重新输入", l = "系统异常，请重试";
            (n = function n(e) {
                this.name = e.name,
                this.nameErr = e.nameErr,
                this.mailPanel = e.mailPanel,
                this.acode = e.acode || "86",
                this.fireEnableName = e.fireEnableName,
                this.zoneChangeFireName = e.zoneChangeFireName
            }
            ).prototype = {
                "init": function() {
                    this._bindEvent()
                },
                "_bindEvent": function() {
                    var t = this;
                    t._nameEvent(),
                    r.on(t.zoneChangeFireName, function(e) {
                        t.acode = e.data;
                        e = t.name.value.trim();
                        e && o.number(e) && (e = t.checkNameValidate(!0),
                        r.fire({
                            "type": t.fireEnableName,
                            "data": {
                                "enable": e
                            }
                        }))
                    })
                },
                "_nameEvent": function() {
                    var t, i = this, n = function n(e) {
                        e.stopPropagation && e.stopPropagation(),
                        i.clearErrMsg()
                    };
                    c.on(i.name, "click", n),
                    u.browser.iPad && (t = function t(e) {
                        r.fire({
                            "type": "hideArea"
                        })
                    }
                    ,
                    c.on(i.name, "touchend", t));
                    var o = function o(e) {
                        i.mailPanel && a.addClass(this.mailPanel, "dn");
                        var t = i.checkNameValidate(!0);
                        r.fire({
                            "type": i.fireEnableName,
                            "data": {
                                "enable": t
                            }
                        })
                    };
                    c.on(i.name, "blur", o);
                    var s = function s(e) {
                        e.stopPropagation && e.stopPropagation(),
                        i.clearErrMsg();
                        e = i.checkNameValidate();
                        r.fire({
                            "type": i.fireEnableName,
                            "data": {
                                "enable": e
                            }
                        })
                    };
                    c.on(i.name, "keyup", s),
                    c.on(i.name, "input", s)
                },
                "checkNameValidate": function(e) {
                    var t = this.name.value.trim();
                    return t ? o.number(t) ? this.checkMobileValidate(t, e) : this.mailPanel ? this.checkEmaiValidate(t, e) : e ? (this.showErrMsg(s),
                    !1) : void 0 : (this.name.value = "",
                    this.hideErrMsg(),
                    !1)
                },
                "checkMobileValidate": function(e, t) {
                    return o.mobile(e, this.acode) ? (this.hideErrMsg(),
                    !0) : t ? (this.showErrMsg(s),
                    !1) : void 0
                },
                "checkEmaiValidate": function(e, t) {
                    return 1 < e.indexOf("@") && o.mail(e) ? (this.hideErrMsg(),
                    !0) : t ? (this.showErrMsg(d),
                    !1) : void 0
                },
                "showErrMsg": function(e) {
                    this.nameErr.innerHTML = e || l,
                    a.removeClass(this.nameErr, "dn"),
                    a.addClass(this.namePlaceholder, "dn")
                },
                "hideErrMsg": function() {
                    a.addClass(this.nameErr, "dn")
                },
                "showPhoneMsg": function(e) {
                    this.showErrMsg(e || l)
                },
                "clearErrMsg": function() {
                    this.hideErrMsg()
                }
            },
            i.exports = n
        }
        .call(i, p, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, p(0))
}
, function(t, i, h) {
    (function(p) {
        var e = function(e, t, i) {
            var n, o = h(46), s = h(4), a = {
                "green": "//static.iqiyi.com/20220105/login-green.css",
                "pca": "//stc.iqiyipic.com/gaze/uniqy/main/js/qiyiLogin/20220215/login-green.css",
                "purple": "//stc.iqiyipic.com/20210524/login-purple.css",
                "red": "//stc.iqiyipic.com/20210524/login-red.css",
                "orange": "//stc.iqiyipic.com/20210524/login-dark-orange.css"
            }, r = null, c = {}, d = !1, l = function l() {
                var e;
                "pca" == c.business || "39" == c.agenttype || p.browser && (p.browser.IE8 || p.browser.IE9) || (e = function e() {
                    MITO.init({
                        "platform": "b6c13e26323c537d",
                        "cid": 18,
                        "maxBreadcrumbs": 10,
                        "beforePushBreadcrumb": function(e, t) {
                            return "Console" !== t.type && t
                        },
                        "beforeDataReport": function(e) {
                            return (!e.message || !e.message.match(/(pan.iqiyi.com|datax.baidu.com|.jpg|.logo|qa.js|.png|sea1.2.js|msg.qy.net|pingBack|.gif)/)) && e
                        }
                    })
                }
                ,
                window.MITO ? e() : p.load("js", "https://stc.iqiyipic.com/js/common/mito.min.js", function() {
                    window.MITO && e()
                }))
            };
            function u(e, t, i) {
                c = e || {},
                r = r || new o,
                t && !d ? (t = a[e.skin] || a.green,
                p.load("css", t, function() {
                    d = !0,
                    i()
                }),
                (e = e.cssUrl) && p.load("css", e, function() {}),
                l()) : i()
            }
            (n = function n() {}
            ).openLoginRegWindow = function(e) {
                e && e.business && u(e, !0, function() {
                    r.openLoginRegWindow(c)
                })
            }
            ,
            n.logout = function(e) {
                u(e, !1, function() {
                    r.logout(c)
                })
            }
            ,
            n.isLogin = function() {
                return !!p.cookie.get("P00001")
            }
            ,
            n.on = function(e, t) {
                s.on(e, t)
            }
            ,
            n.un = function(e, t) {
                s.un(e, t)
            }
            ,
            window["PCLoginSDK"] = n
        }
        .call(i, h, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, h(0))
}
, function(e, t) {
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t, i = Array.prototype.slice.call(arguments, 1), n = this, o = function o() {
            return n.apply(this instanceof t && e ? this : e, i.concat(Array.prototype.slice.call(arguments)))
        };
        return (t = function t() {}
        ).prototype = this.prototype,
        o.prototype = new t,
        o
    }
    ),
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    }
    ,
    "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
        for (var t = 0; t < this.length; t++)
            e.apply(this, [this[t], t, this])
    }
    )
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n() {}
          , o = new Object;
        o.superclass = Object,
        o.__NAME__ = "Object",
        o.superinstance = new Object,
        o.callsuper = function(e) {
            var t;
            this._realsuper ? this._realsuper = this._realsuper.prototype.superclass : this._realsuper = this.superclass,
            "string" == typeof e ? (t = Array.prototype.slice.call(arguments, 1),
            this._realsuper.prototype[e].apply(this, t)) : (t = Array.prototype.slice.call(arguments, 0),
            this._realsuper.apply(this, t)),
            this._realsuper = null
        }
        ,
        n.prototype = o,
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, i) {
        var n = s(32)
          , o = function o(e) {
            e = n(e);
            return "string" == typeof e ? e = decodeURIComponent(e) : null
        };
        i.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, i) {
        var n = s(19)
          , o = function o(e) {
            if (n(e)) {
                e = new RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie);
                if (e)
                    return e[2] || null
            }
            return null
        };
        i.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, i) {
        var n = s(20)
          , o = function o(e, t, i) {
            n(e, encodeURIComponent(t), i)
        };
        i.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, s) {
    t = function(e, t, i) {
        var n = s(20)
          , o = function o(e, t) {
            (t = t || {}).expires = new Date(0),
            n(e, "", t)
        };
        i.exports = o
    }
    .call(t, s, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, o) {
    t = function(e, t, i) {
        var n = o(12);
        i.exports = n("Floater", {
            "construct": function(e) {
                e = e || {},
                this._view = e.view,
                this._valid = !0
            },
            "methods": {
                "show": function(e) {
                    e = e || {},
                    this._view.show(e)
                },
                "destroy": function() {
                    this._valid && (this._view.destroy && this._view.destroy(),
                    this._valid = !1)
                }
            }
        })
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, a) {
    t = function(e, t, i) {
        var n = a(37)
          , o = a(38)
          , s = a(12);
        i.exports = s("FloaterView", {
            "construct": function(e) {
                e = e || {},
                this._panel = e.panel || document.body,
                this._zIndex = e.zIndex || 100,
                this.domHeight = e.domHeight,
                this.resetSize = e.resetSize
            },
            "methods": {
                "create": function() {
                    this._elem || (this._elem = document.createElement("div"),
                    this._elem.style.position = "absolute",
                    this._elem.style.top = "0px",
                    this._elem.style.zIndex = this._zIndex,
                    this._elem.style.visibility = "hidden",
                    this._panel.appendChild(this._elem),
                    this.adjustBind = this.adjustBind || this.adjustPosition.bind(this))
                },
                "show": function(e) {
                    this.create(),
                    this.build(e),
                    this.adjustPosition(),
                    this.doOnresize(),
                    this._elem.style.visibility = "visible",
                    this.showCover(),
                    this.winObj && (this.winObj.addEventListener ? this.winObj.addEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.attachEvent("onresize", this.adjustBind))
                },
                "destroy": function() {
                    this.hide(),
                    this.hideCover(),
                    this._removeEvent(),
                    this._removeDom()
                },
                "hide": function() {
                    this._elem.style.visibility = "visible"
                },
                "hideCover": function() {
                    o.hide()
                },
                "build": function(e) {
                    var t;
                    e.id ? (t = document.getElementById(e.id)) && (this._elem.appendChild(t),
                    e.removeBlock ? t.style = "" : t.style.display = "block") : e.html ? this._elem.innerHTML = e.html : e.elem && (e.replace && (this._elem.innerHTML = ""),
                    this._elem.appendChild(e.elem),
                    e.iframeId && e.url && (document.getElementById(e.iframeId).src = e.url),
                    e.elem.style.display = "block")
                },
                "adjustPosition": function() {
                    n(this._elem, {
                        "domHeight": this.domHeight,
                        "resetSize": this.resetSize
                    }),
                    o.resize(),
                    this._elem.offsetTop < 0 && (this._elem.style.top = "30px")
                },
                "showCover": function(e) {
                    o.show(this._zIndex - 5, e)
                },
                "_removeDom": function() {
                    var e = this._elem;
                    e.parentNode && setTimeout(function() {
                        e.parentNode.removeChild(e)
                    }, 0)
                },
                "_removeEvent": function() {
                    this.winObj && (this.winObj.addEventListener ? this.winObj.removeEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.detachEvent("onresize", this.adjustBind),
                    this.winObj = null)
                },
                "doOnresize": function() {
                    this.f || (this.winObj = window,
                    this.adjustBind = this.adjustBind || this.adjustPosition.bind(this),
                    this.winObj.addEventListener ? this.winObj.addEventListener("resize", this.adjustBind) : this.winObj.attachEvent && this.winObj.attachEvent("onresize", this.adjustBind))
                }
            }
        })
    }
    .call(t, a, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, i) {
        var a = n(21)
          , r = n(22)
          , c = n(23)
          , d = n(24)
          , l = function l(e, t) {
            var i, n, o, s;
            t = t || {},
            e && (s = e.offsetWidth || 360,
            i = t.domHeight || e.offsetHeight,
            o = r(),
            n = a(),
            o = (o - s) / 2 + c(),
            s = (n - i) / 2 + d(),
            e.style.position = "fixed",
            t.resetSize && (s = (n - i) / 2,
            e.style.left = o + "px",
            e.style.top = s + "px"))
        };
        i.exports = l
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, a) {
    t = function(e, t, i) {
        var n = a(12)
          , o = a(15)
          , s = n("Overlay", {
            "_overlay": null,
            "statics": {
                "_count": 0,
                "_originZIndex": [],
                "show": function(e, t) {
                    var i;
                    t = t || {},
                    s._overlay || ((i = document.createElement("div")).style.position = o.IE6 ? "absolute" : "fixed",
                    i.style.left = "0",
                    i.style.top = "0",
                    i.style.width = "100%",
                    i.style.height = "100%",
                    i.style.background = t.bg || "#000",
                    i.style.opacity = t.opacity || "0.5",
                    i.style.filter = "alpha(opacity=" + (100 * t.opacity || 50) + ")",
                    i.style["-moz-opacity"] = t.opacity || "0.5",
                    i.setAttribute("data-loginIfr-layer", "loginIfrLayer"),
                    document.body.appendChild(i),
                    s._overlay = i),
                    e && (s._overlay.style.zIndex = e),
                    this.resize(),
                    s._overlay.style.display = ""
                },
                "hide": function() {
                    if (s._overlay) {
                        if (0 < s._count)
                            return s._count--,
                            void (s._overlay.style.zIndex = s._originZIndex[s._count]);
                        s._overlay.style.display = "none",
                        s._overlay.style.zIndex = 100
                    }
                },
                "resize": function() {}
            }
        });
        i.exports = s
    }
    .call(t, a, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var a = {}
          , r = function r(e) {
            if (e) {
                var t = new Image
                  , i = "slog_" + Math.floor(2147483648 * Math.random()).toString(36);
                (a[i] = t).onload = t.onerror = t.onabort = function() {
                    t.onload = t.onerror = t.onabort = null,
                    a[i] = null,
                    delete a[i],
                    t = null
                }
                ;
                var n, o = [];
                for (n in e)
                    o.push(n + "=" + encodeURIComponent(e[n]));
                try {
                    t.src = "//msg.qy.net/act?" + o.join("&")
                } catch (s) {}
            }
        };
        i.exports = r
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n() {
            var e = window.document
              , t = e.body
              , i = e.documentElement
              , e = "BackCompat" == e.compatMode ? t : e.documentElement;
            return Math.max(i.scrollWidth, t.scrollWidth, e.clientWidth)
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n() {
            var e = window.document
              , t = e.body
              , i = e.documentElement
              , e = "BackCompat" == e.compatMode ? t : e.documentElement;
            return Math.max(i.scrollHeight, t.scrollHeight, e.clientHeight)
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var r, u, c, d, l, p, h, g, f, m, v, y, b, n = (r = function r(e, t) {
            return e << t | e >>> 32 - t
        }
        ,
        u = function u(e, t) {
            var i = 2147483648 & e
              , n = 2147483648 & t
              , o = 1073741824 & e
              , s = 1073741824 & t
              , t = (1073741823 & e) + (1073741823 & t);
            return o & s ? 2147483648 ^ t ^ i ^ n : o | s ? 1073741824 & t ? 3221225472 ^ t ^ i ^ n : 1073741824 ^ t ^ i ^ n : t ^ i ^ n
        }
        ,
        c = function c(e, t, i) {
            return e & t | ~e & i
        }
        ,
        d = function d(e, t, i) {
            return e & i | t & ~i
        }
        ,
        l = function l(e, t, i) {
            return e ^ t ^ i
        }
        ,
        p = function p(e, t, i) {
            return t ^ (e | ~i)
        }
        ,
        h = function h(e, t, i, n, o, s, a) {
            return e = u(e, u(u(c(t, i, n), o), a)),
            u(r(e, s), t)
        }
        ,
        g = function g(e, t, i, n, o, s, a) {
            return e = u(e, u(u(d(t, i, n), o), a)),
            u(r(e, s), t)
        }
        ,
        f = function f(e, t, i, n, o, s, a) {
            return e = u(e, u(u(l(t, i, n), o), a)),
            u(r(e, s), t)
        }
        ,
        m = function m(e, t, i, n, o, s, a) {
            return e = u(e, u(u(p(t, i, n), o), a)),
            u(r(e, s), t)
        }
        ,
        v = function v(e) {
            for (var t, i = e.length, n = i + 8, n = 16 * (1 + (n - n % 64) / 64), o = Array(n - 1), s = 0, a = 0; a < i; )
                s = a % 4 * 8,
                o[t = (a - a % 4) / 4] = o[t] | e.charCodeAt(a) << s,
                a++;
            return s = a % 4 * 8,
            o[t = (a - a % 4) / 4] = o[t] | 128 << s,
            o[n - 2] = i << 3,
            o[n - 1] = i >>> 29,
            o
        }
        ,
        y = function y(e) {
            for (var t = "", i = "", n = 0; n <= 3; n++)
                t += (i = "0" + (e >>> 8 * n & 255).toString(16)).substr(i.length - 2, 2);
            return t
        }
        ,
        b = function b(e) {
            e = e.replace(/\x0d\x0a/g, "\n");
            for (var t = "", i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224),
                t += String.fromCharCode(n >> 6 & 63 | 128)),
                t += String.fromCharCode(63 & n | 128))
            }
            return t
        }
        ,
        function(e) {
            e += "";
            var t, i, n, o, s, a, r, c, d, l = Array();
            for (e = b(e),
            l = v(e),
            a = 1732584193,
            r = 4023233417,
            c = 2562383102,
            d = 271733878,
            t = 0; t < l.length; t += 16)
                a = h(i = a, n = r, o = c, s = d, l[t + 0], 7, 3614090360),
                d = h(d, a, r, c, l[t + 1], 12, 3905402710),
                c = h(c, d, a, r, l[t + 2], 17, 606105819),
                r = h(r, c, d, a, l[t + 3], 22, 3250441966),
                a = h(a, r, c, d, l[t + 4], 7, 4118548399),
                d = h(d, a, r, c, l[t + 5], 12, 1200080426),
                c = h(c, d, a, r, l[t + 6], 17, 2821735955),
                r = h(r, c, d, a, l[t + 7], 22, 4249261313),
                a = h(a, r, c, d, l[t + 8], 7, 1770035416),
                d = h(d, a, r, c, l[t + 9], 12, 2336552879),
                c = h(c, d, a, r, l[t + 10], 17, 4294925233),
                r = h(r, c, d, a, l[t + 11], 22, 2304563134),
                a = h(a, r, c, d, l[t + 12], 7, 1804603682),
                d = h(d, a, r, c, l[t + 13], 12, 4254626195),
                c = h(c, d, a, r, l[t + 14], 17, 2792965006),
                r = h(r, c, d, a, l[t + 15], 22, 1236535329),
                a = g(a, r, c, d, l[t + 1], 5, 4129170786),
                d = g(d, a, r, c, l[t + 6], 9, 3225465664),
                c = g(c, d, a, r, l[t + 11], 14, 643717713),
                r = g(r, c, d, a, l[t + 0], 20, 3921069994),
                a = g(a, r, c, d, l[t + 5], 5, 3593408605),
                d = g(d, a, r, c, l[t + 10], 9, 38016083),
                c = g(c, d, a, r, l[t + 15], 14, 3634488961),
                r = g(r, c, d, a, l[t + 4], 20, 3889429448),
                a = g(a, r, c, d, l[t + 9], 5, 568446438),
                d = g(d, a, r, c, l[t + 14], 9, 3275163606),
                c = g(c, d, a, r, l[t + 3], 14, 4107603335),
                r = g(r, c, d, a, l[t + 8], 20, 1163531501),
                a = g(a, r, c, d, l[t + 13], 5, 2850285829),
                d = g(d, a, r, c, l[t + 2], 9, 4243563512),
                c = g(c, d, a, r, l[t + 7], 14, 1735328473),
                r = g(r, c, d, a, l[t + 12], 20, 2368359562),
                a = f(a, r, c, d, l[t + 5], 4, 4294588738),
                d = f(d, a, r, c, l[t + 8], 11, 2272392833),
                c = f(c, d, a, r, l[t + 11], 16, 1839030562),
                r = f(r, c, d, a, l[t + 14], 23, 4259657740),
                a = f(a, r, c, d, l[t + 1], 4, 2763975236),
                d = f(d, a, r, c, l[t + 4], 11, 1272893353),
                c = f(c, d, a, r, l[t + 7], 16, 4139469664),
                r = f(r, c, d, a, l[t + 10], 23, 3200236656),
                a = f(a, r, c, d, l[t + 13], 4, 681279174),
                d = f(d, a, r, c, l[t + 0], 11, 3936430074),
                c = f(c, d, a, r, l[t + 3], 16, 3572445317),
                r = f(r, c, d, a, l[t + 6], 23, 76029189),
                a = f(a, r, c, d, l[t + 9], 4, 3654602809),
                d = f(d, a, r, c, l[t + 12], 11, 3873151461),
                c = f(c, d, a, r, l[t + 15], 16, 530742520),
                r = f(r, c, d, a, l[t + 2], 23, 3299628645),
                a = m(a, r, c, d, l[t + 0], 6, 4096336452),
                d = m(d, a, r, c, l[t + 7], 10, 1126891415),
                c = m(c, d, a, r, l[t + 14], 15, 2878612391),
                r = m(r, c, d, a, l[t + 5], 21, 4237533241),
                a = m(a, r, c, d, l[t + 12], 6, 1700485571),
                d = m(d, a, r, c, l[t + 3], 10, 2399980690),
                c = m(c, d, a, r, l[t + 10], 15, 4293915773),
                r = m(r, c, d, a, l[t + 1], 21, 2240044497),
                a = m(a, r, c, d, l[t + 8], 6, 1873313359),
                d = m(d, a, r, c, l[t + 15], 10, 4264355552),
                c = m(c, d, a, r, l[t + 6], 15, 2734768916),
                r = m(r, c, d, a, l[t + 13], 21, 1309151649),
                a = m(a, r, c, d, l[t + 4], 6, 4149444226),
                d = m(d, a, r, c, l[t + 11], 10, 3174756917),
                c = m(c, d, a, r, l[t + 2], 15, 718787259),
                r = m(r, c, d, a, l[t + 9], 21, 3951481745),
                a = u(a, i),
                r = u(r, n),
                c = u(c, o),
                d = u(d, s);
            return (y(a) + y(r) + y(c) + y(d)).toLowerCase()
        }
        );
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = function n(e, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t, n) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    (t = function(e, t, i) {
        var s = n(15)
          , a = function a(e, t, i) {
            var n = null
              , o = null;
            if (t) {
                switch (o = document.getElementsByTagName("head")[0],
                e) {
                case "css":
                    (n = document.createElement("link")).rel = "stylesheet",
                    n.href = t;
                    break;
                case "js":
                    (n = document.createElement("script")).type = "text/javascript",
                    n.src = t
                }
                null != n && "object" == r(n) && o.appendChild(n),
                s.IE && n.readyState ? n.onreadystatechange = function() {
                    /loaded|complete/.test(n.readyState) && i && i()
                }
                : n.onload = function() {
                    i && i()
                }
            }
        };
        i.exports = a
    }
    .call(t, n, t, e)) === undefined || (e.exports = t)
}
, function(e, t, n) {
    t = function(e, t, n) {
        var o, s, b, a = {}, w = {}, k = 65536, _ = k - 1, C = function C(e) {
            this.digits = "boolean" == typeof e && !0 === e ? null : o.slice(0),
            this.isNeg = !1
        };
        function r(e) {
            var t = w
              , i = t.biDivideByRadixPower(e, this.k - 1)
              , i = t.biMultiply(i, this.mu)
              , i = t.biDivideByRadixPower(i, this.k + 1)
              , e = t.biModuloByRadixPower(e, this.k + 1)
              , i = t.biMultiply(i, this.modulus)
              , i = t.biModuloByRadixPower(i, this.k + 1)
              , n = t.biSubtract(e, i);
            n.isNeg && (n = t.biAdd(n, this.bkplus1));
            for (var o = 0 <= t.biCompare(n, this.modulus); o; )
                n = t.biSubtract(n, this.modulus),
                o = 0 <= t.biCompare(n, this.modulus);
            return n
        }
        function c(e, t) {
            t = w.biMultiply(e, t);
            return this.modulo(t)
        }
        function d(e, t) {
            var i = new C;
            i.digits[0] = 1;
            for (var n = e, o = t; 0 != (1 & o.digits[0]) && (i = this.multiplyMod(i, n)),
            0 != (o = w.biShiftRight(o, 1)).digits[0] || 0 != w.biHighIndex(o); )
                n = this.multiplyMod(n, n);
            return i
        }
        a.BarrettMu = function(e) {
            this.modulus = w.biCopy(e),
            this.k = w.biHighIndex(this.modulus) + 1;
            e = new C;
            e.digits[2 * this.k] = 1,
            this.mu = w.biDivide(e, this.modulus),
            this.bkplus1 = new C,
            this.bkplus1.digits[this.k + 1] = 1,
            this.modulo = r,
            this.multiplyMod = c,
            this.powMod = d
        }
        ,
        w.biModuloByRadixPower = function(e, t) {
            var i = new C;
            return w.arrayCopy(e.digits, 0, i.digits, 0, t),
            i
        }
        ,
        w.biMultiply = function(e, t) {
            for (var i, n, o, s = new C, a = w.biHighIndex(e), r = w.biHighIndex(t), c = 0; c <= r; ++c) {
                for (o = c,
                j = i = 0; j <= a; ++j,
                ++o)
                    n = s.digits[o] + e.digits[j] * t.digits[c] + i,
                    s.digits[o] = n & _,
                    i = n >>> 16;
                s.digits[c + a + 1] = i
            }
            return s.isNeg = e.isNeg != t.isNeg,
            s
        }
        ,
        w.biDivideByRadixPower = function(e, t) {
            var i = new C;
            return w.arrayCopy(e.digits, t, i.digits, 0, i.digits.length - t),
            i
        }
        ,
        w.biDivide = function(e, t) {
            return w.biDivideModulo(e, t)[0]
        }
        ,
        w.setMaxDigits = function(e) {
            o = new Array(e);
            for (var t = 0; t < o.length; t++)
                o[t] = 0;
            s = new C,
            (b = new C).digits[0] = 1
        }
        ,
        w.setMaxDigits(20),
        w.biCopy = function(e) {
            var t = new C(!0);
            return t.digits = e.digits.slice(0),
            t.isNeg = e.isNeg,
            t
        }
        ,
        w.reverseStr = function(e) {
            for (var t = "", i = e.length - 1; -1 < i; --i)
                t += e.charAt(i);
            return t
        }
        ;
        var l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        w.biToString = function(e, t) {
            var i = new C;
            i.digits[0] = t;
            for (var n = w.biDivideModulo(e, i), o = l[n[1].digits[0]]; 1 == w.biCompare(n[0], s); )
                n = w.biDivideModulo(n[0], i),
                digit = n[1].digits[0],
                o += l[n[1].digits[0]];
            return (e.isNeg ? "-" : "") + w.reverseStr(o)
        }
        ;
        var u = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        w.digitToHex = function(e) {
            var t = "";
            for (i = 0; i < 4; ++i)
                t += u[15 & e],
                e >>>= 4;
            return w.reverseStr(t)
        }
        ,
        w.biToHex = function(e) {
            for (var t = "", i = (w.biHighIndex(e),
            w.biHighIndex(e)); -1 < i; --i)
                t += w.digitToHex(e.digits[i]);
            return t
        }
        ,
        w.charToHex = function(e) {
            e = 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0;
            return e
        }
        ,
        w.hexToDigit = function(e) {
            for (var t = 0, i = Math.min(e.length, 4), n = 0; n < i; ++n)
                t <<= 4,
                t |= w.charToHex(e.charCodeAt(n));
            return t
        }
        ,
        w.biFromHex = function(e) {
            for (var t = new C, i = e.length, n = 0; 0 < i; i -= 4,
            ++n)
                t.digits[n] = w.hexToDigit(e.substr(Math.max(i - 4, 0), Math.min(i, 4)));
            return t
        }
        ,
        w.biAdd = function(e, t) {
            var i;
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                i = w.biSubtract(e, t),
                t.isNeg = !t.isNeg;
            else {
                i = new C;
                for (var n, o = 0, s = 0; s < e.digits.length; ++s)
                    n = e.digits[s] + t.digits[s] + o,
                    i.digits[s] = n % k,
                    o = Number(k <= n);
                i.isNeg = e.isNeg
            }
            return i
        }
        ,
        w.biSubtract = function(e, t) {
            if (e.isNeg != t.isNeg)
                t.isNeg = !t.isNeg,
                n = w.biAdd(e, t),
                t.isNeg = !t.isNeg;
            else {
                for (var i, n = new C, o = 0, s = 0; s < e.digits.length; ++s)
                    i = e.digits[s] - t.digits[s] + o,
                    n.digits[s] = i % k,
                    n.digits[s] < 0 && (n.digits[s] += k),
                    o = 0 - Number(i < 0);
                if (-1 == o) {
                    for (s = o = 0; s < e.digits.length; ++s)
                        i = 0 - n.digits[s] + o,
                        n.digits[s] = i % k,
                        n.digits[s] < 0 && (n.digits[s] += k),
                        o = 0 - Number(i < 0);
                    n.isNeg = !e.isNeg
                } else
                    n.isNeg = e.isNeg
            }
            return n
        }
        ,
        w.biHighIndex = function(e) {
            for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t]; )
                --t;
            return t
        }
        ,
        w.biNumBits = function(e) {
            for (var t = w.biHighIndex(e), i = e.digits[t], n = 16 * (t + 1), o = n; n - 16 < o && 0 == (32768 & i); --o)
                i <<= 1;
            return o
        }
        ,
        w.biMultiplyDigit = function(e, t) {
            var i, n, o;
            result = new C,
            i = w.biHighIndex(e);
            for (var s = n = 0; s <= i; ++s)
                o = result.digits[s] + e.digits[s] * t + n,
                result.digits[s] = o & _,
                n = o >>> 16;
            return result.digits[1 + i] = n,
            result
        }
        ,
        w.arrayCopy = function(e, t, i, n, o) {
            for (var s = Math.min(t + o, e.length), a = t, r = n; a < s; ++a,
            ++r)
                i[r] = e[a]
        }
        ;
        var p = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
        w.biShiftLeft = function(e, t) {
            var i = Math.floor(t / 16)
              , n = new C;
            w.arrayCopy(e.digits, 0, n.digits, i, n.digits.length - i);
            for (var o = t % 16, s = 16 - o, a = n.digits.length - 1, r = a - 1; 0 < a; --a,
            --r)
                n.digits[a] = n.digits[a] << o & _ | (n.digits[r] & p[o]) >>> s;
            return n.digits[0] = n.digits[a] << o & _,
            n.isNeg = e.isNeg,
            n
        }
        ;
        var h = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
        w.biShiftRight = function(e, t) {
            var i = Math.floor(t / 16)
              , n = new C;
            w.arrayCopy(e.digits, i, n.digits, 0, e.digits.length - i);
            for (var o = t % 16, s = 16 - o, a = 0, r = a + 1; a < n.digits.length - 1; ++a,
            ++r)
                n.digits[a] = n.digits[a] >>> o | (n.digits[r] & h[o]) << s;
            return n.digits[n.digits.length - 1] >>>= o,
            n.isNeg = e.isNeg,
            n
        }
        ,
        w.biMultiplyByRadixPower = function(e, t) {
            var i = new C;
            return w.arrayCopy(e.digits, 0, i.digits, t, i.digits.length - t),
            i
        }
        ,
        w.biCompare = function(e, t) {
            if (e.isNeg != t.isNeg)
                return 1 - 2 * Number(e.isNeg);
            for (var i = e.digits.length - 1; 0 <= i; --i)
                if (e.digits[i] != t.digits[i])
                    return e.isNeg ? 1 - 2 * Number(e.digits[i] > t.digits[i]) : 1 - 2 * Number(e.digits[i] < t.digits[i]);
            return 0
        }
        ,
        w.biDivideModulo = function(e, t) {
            var i, n, o = w.biNumBits(e), s = w.biNumBits(t), a = t.isNeg;
            if (o < s)
                return e.isNeg ? ((i = w.biCopy(b)).isNeg = !t.isNeg,
                e.isNeg = !1,
                t.isNeg = !1,
                n = biSubtract(t, e),
                e.isNeg = !0,
                t.isNeg = a) : (i = new C,
                n = w.biCopy(e)),
                [i, n];
            i = new C,
            n = e;
            for (var r = Math.ceil(s / 16) - 1, c = 0; t.digits[r] < 32768; )
                t = w.biShiftLeft(t, 1),
                ++c,
                ++s,
                r = Math.ceil(s / 16) - 1;
            n = w.biShiftLeft(n, c),
            o += c;
            for (var d = Math.ceil(o / 16) - 1, l = w.biMultiplyByRadixPower(t, d - r); -1 != w.biCompare(n, l); )
                ++i.digits[d - r],
                n = w.biSubtract(n, l);
            for (var u = d; r < u; --u) {
                var p = u >= n.digits.length ? 0 : n.digits[u]
                  , h = u - 1 >= n.digits.length ? 0 : n.digits[u - 1]
                  , g = u - 2 >= n.digits.length ? 0 : n.digits[u - 2]
                  , f = r >= t.digits.length ? 0 : t.digits[r]
                  , m = r - 1 >= t.digits.length ? 0 : t.digits[r - 1];
                i.digits[u - r - 1] = p == f ? _ : Math.floor((p * k + h) / f);
                for (var v = i.digits[u - r - 1] * (f * k + m), y = 4294967296 * p + (h * k + g); y < v; )
                    --i.digits[u - r - 1],
                    v = i.digits[u - r - 1] * (f * k | m),
                    y = p * k * k + (h * k + g);
                l = w.biMultiplyByRadixPower(t, u - r - 1),
                (n = w.biSubtract(n, w.biMultiplyDigit(l, i.digits[u - r - 1]))).isNeg && (n = w.biAdd(n, l),
                --i.digits[u - r - 1])
            }
            return n = w.biShiftRight(n, c),
            i.isNeg = e.isNeg != a,
            e.isNeg && (i = a ? w.biAdd(i, b) : w.biSubtract(i, b),
            t = w.biShiftRight(t, c),
            n = w.biSubtract(t, n)),
            0 == n.digits[0] && 0 == w.biHighIndex(n) && (n.isNeg = !1),
            [i, n]
        }
        ;
        var g = function g(e, t, i) {
            var n = w;
            this.e = n.biFromHex(e),
            this.d = n.biFromHex(t),
            this.m = n.biFromHex(i),
            this.chunkSize = 2 * n.biHighIndex(this.m),
            this.radix = 16,
            this.barrett = new a.BarrettMu(this.m)
        };
        w.getKeyPair = function(e, t, i) {
            return new g(e,t,i)
        }
        ,
        w.encryptedString = function(e, t) {
            for (var i = [], n = t.length, o = 0; o < n; )
                i[o] = t.charCodeAt(o),
                o++;
            for (; i.length % e.chunkSize != 0; )
                i[o++] = 0;
            for (var s, a, r, c = i.length, d = "", o = 0; o < c; o += e.chunkSize) {
                for (r = new C,
                s = 0,
                a = o; a < o + e.chunkSize; ++s)
                    r.digits[s] = i[a++],
                    r.digits[s] += i[a++] << 8;
                var l = e.barrett.powMod(r, e.e);
                d += (16 == e.radix ? w.biToHex(l) : w.biToString(l, e.radix)) + " "
            }
            return d.substring(0, d.length - 1)
        }
        ,
        w.setMaxDigits(130),
        n.exports = w
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, S) {
    (function(P) {
        var e = function(e, t, i) {
            var n = S(47)
              , o = S(6)
              , s = S(48)
              , a = S(58)
              , r = S(61)
              , c = S(65)
              , d = S(74)
              , l = S(75)
              , u = S(4)
              , p = S(3)
              , h = S(80)
              , g = S(1)
              , f = S(2)
              , m = S(81)
              , v = S(7)
              , y = S(13).getDomain()
              , b = S(11)
              , w = ""
              , k = "icon-login__pwd"
              , _ = "icon-login__qrcode"
              , C = ["danmu", "vue-ssr", "qiyiV2", "personalCenter", "main-site", "header-v1", "personalSpace", "comment"];
            i.exports = P.Class("indexAction", {
                "extend": o,
                "construct": function() {},
                "methods": {
                    "openLoginRegWindow": function(e) {
                        e.types = e.types || (5 == e.firstShow ? "" : "1,2,3,4,5"),
                        f.initConfig(e),
                        w = f.getConfig();
                        var t = this;
                        this.config = P.extend({
                            "agenttype": w.agenttype,
                            "ptid": w.ptid,
                            "skinMode": w.skinMode,
                            "protocolDom": w.protocolDom,
                            "logoUrl": w.logoUrl
                        }, e),
                        this.createFloater();
                        var i = document.querySelector('[data-login-sdk="panel"]');
                        this.doms = {
                            "baseLoginPanel": i.querySelector('[data-login-sdk="baseLogin"]'),
                            "scanLoginPanel": i.querySelector('[data-login-sdk="scanLogin"]'),
                            "smsLoginRegPanel": i.querySelector('[data-login-sdk="smsLoginreg"]'),
                            "thridPartyPanel": i.querySelector('[data-login-sdk="thridPartyLogin"]'),
                            "regPanel": i.querySelector('[data-login-sdk="reg"]'),
                            "realNamePanel": i.querySelector('[data-login-sdk="realname"]'),
                            "upSmsCodePanel": i.querySelector('[data-login-sdk="upSmsCode"]'),
                            "closeBtn": i.querySelector('[data-login-sdk="close"]'),
                            "toastPanel": i.querySelector('[data-login-sdk="toast"]'),
                            "leftIconPanel": i.querySelector('[data-login-sdk="leftIcon"]'),
                            "leftIcon": i.querySelector('[data-login-sdk="leftIcon"]').children[0],
                            "protocolPanel": i.querySelector('[data-login-sdk="protocol"]'),
                            "slideCover": i.querySelector('[data-login-sdk="slideCover"]'),
                            "slidePanel": i.querySelector('[data-login-sdk="slidePanel"]'),
                            "verifyPhonePanel": i.querySelector('[data-login-sdk="verifyPhone"]'),
                            "logoImg": i.querySelector('[data-login-sdk="logoImg"]'),
                            "regProtocolPanel": i.querySelector('[data-login-sdk="regProtocol"]'),
                            "secondVerify": i.querySelector('[data-login-sdk="secondVerify"]'),
                            "businessPanel": document.querySelector('[data-login-sdk="business"]')
                        },
                        this.config.hideClose && p.addClass(this.doms.closeBtn, "dn"),
                        "pca" == this.config.business && (p.addClass(i, "qy-login-pca"),
                        this.resetSize(420)),
                        this.verifyCenter = new d({
                            "slideCover": this.doms.slideCover,
                            "slidePanel": this.doms.slidePanel
                        }),
                        this.verifyCenter.init(function() {
                            window.VerifyCenter && window.VerifyCenter.collect && window.VerifyCenter.collect.init({
                                "ignoreJsBridge": !0
                            })
                        }),
                        this.secondVerify = new l({
                            "panel": this.doms.secondVerify,
                            "businessPanel": this.doms.businessPanel,
                            "sdkPanel": i
                        }),
                        this.isShowVipBusiness = !1,
                        this.showPanel = null,
                        this.prePanel = null,
                        this.showType = -1,
                        this.localCookie = {};
                        var n = P.cookie.get("QC160")
                          , e = 1;
                        n && ("p1" == (e = JSON.parse(n).type || 1) ? e = 1 : "s1" == e && (e = 2),
                        this.localCookie = JSON.parse(n)),
                        this.initLoginTypes(),
                        this.defaultShowType = e,
                        this.config.logoUrl && (this.doms.logoImg.src = this.config.logoUrl),
                        this.config.logoHeight && (this.doms.logoImg.style.height = this.config.logoHeight + "px"),
                        this.bindEvent(),
                        setTimeout(function() {
                            t.toggelLoginPanel(),
                            p.removeClass(i, "dn")
                        }, 10)
                    },
                    "initLoginTypes": function() {
                        var e = this.config.types;
                        (e.indexOf(1) < 0 && e.indexOf(3) < 0 || e.indexOf(2) < 0) && p.addClass(this.doms.leftIcon, "dn"),
                        this.config.protocolDom && (this.doms.protocolPanel.innerHTML = this.config.protocolDom)
                    },
                    "toggelLoginPanel": function(e, t, i) {
                        e = e || this.config.firstShow || this.defaultShowType;
                        switch (e = parseInt(e)) {
                        case 1:
                            this.initBaseLogin();
                            break;
                        case 2:
                            this.initScanLogin();
                            break;
                        case 3:
                            this.initSmsLogin();
                            break;
                        case 4:
                            this.initRegist();
                            break;
                        case 5:
                            this.initRealName(t, i);
                            break;
                        default:
                            this.initBaseLogin()
                        }
                        4 != e && 0 <= this.config.types.indexOf(4) && this.initThirdLogin(e)
                    },
                    "initBaseLogin": function() {
                        this.baseLogin || (this.baseLogin = new s({
                            "panel": this.doms.baseLoginPanel,
                            "types": this.config.types,
                            "verifyCenter": this.verifyCenter,
                            "toastPanel": this.doms.toastPanel,
                            "business": this.config.business,
                            "errMsg": this.config.errMsg,
                            "secondVerify": this.secondVerify
                        }),
                        this.baseLogin.init()),
                        this.baseLogin.showPanel(),
                        this.resetAcode(this.baseLogin),
                        this.showPanel = this.doms.baseLoginPanel,
                        this.showType = 1
                    },
                    "initSmsLogin": function() {
                        this.smsLoginReg || (this.smsLoginReg = new c({
                            "panel": this.doms.smsLoginRegPanel,
                            "types": this.config.types,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "secondVerify": this.secondVerify
                        }),
                        this.smsLoginReg.init()),
                        this.smsLoginReg.showPanel(),
                        this.resetAcode(this.smsLoginReg),
                        this.showPanel = this.doms.smsLoginRegPanel,
                        this.showType = 3
                    },
                    "initThirdLogin": function(e) {
                        this.thridParty || (this.thridParty = new r({
                            "panel": this.doms.thridPartyPanel,
                            "verifyCenter": this.verifyCenter,
                            "types": this.config.thirds,
                            "toastPanel": this.doms.toastPanel,
                            "business": this.config.business,
                            "thirdLoginCB": this.config.thirdLoginCB,
                            "secondVerify": this.secondVerify
                        }),
                        this.thridParty.init(),
                        p.removeClass(this.doms.thridPartyPanel, "dn")),
                        this.sendThridPartyBlock(e)
                    },
                    "initScanLogin": function(e) {
                        var t = "normal"
                          , i = ""
                          , n = ""
                          , o = "";
                        e && (t = e.type || "normal",
                        i = e.msg || e.mobile || "",
                        e.loginData && (n = e.loginData.uid_enc,
                        o = 3)),
                        this.scanLogin || (this.scanLogin = new a({
                            "type": t,
                            "msg": i,
                            "business": this.config.business,
                            "appTitle": this.config.appTitle,
                            "panel": this.doms.scanLoginPanel,
                            "device_auth_uid": n,
                            "new_device_auth": o
                        }),
                        this.scanLogin.init()),
                        p.addClass(this.showPanel, "dn"),
                        this.scanLogin.showPanel({
                            "type": t,
                            "msg": i
                        }),
                        2 != this.showType && (-1 == this.showType ? !this.config.types || 0 <= this.config.types.indexOf("1") ? this.preShowType = 1 : this.preShowType = 3 : this.preShowType = this.showType),
                        this.showPanel = this.doms.scanLoginPanel,
                        "normal" == t ? (this.showType = 2,
                        this.toggleIcon(k, _),
                        this.toggleSpecialPanel(!0)) : p.hasClass(this.doms.leftIconPanel, "dn") || this.toggleSpecialPanel()
                    },
                    "toggleSpecialPanel": function(e, t, i) {
                        e ? ("3" != e && (p.removeClass(this.doms.thridPartyPanel, "dn"),
                        i && this.sendThridPartyBlock(this.showType),
                        p.removeClass(this.doms.leftIconPanel, "dn")),
                        p.removeClass(this.doms.protocolPanel, "dn")) : (p.addClass(this.doms.thridPartyPanel, "dn"),
                        p.addClass(this.doms.leftIconPanel, "dn"),
                        t || p.addClass(this.doms.protocolPanel, "dn"))
                    },
                    "initRegist": function() {
                        var e = this.doms.regPanel;
                        this.regIns || (this.regIns = new c({
                            "panel": e,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "type": "reg"
                        }),
                        this.regIns.init()),
                        this.toggleSpecialPanel("", !0),
                        this.regIns.showPanel(),
                        this.resetAcode(this.regIns),
                        this.showPanel = e
                    },
                    "initRealName": function(e, t) {
                        var i = this.doms.realNamePanel;
                        this.realNameIns = new c({
                            "panel": i,
                            "upSmsCodePanel": this.doms.upSmsCodePanel,
                            "verifyCenter": this.verifyCenter,
                            "type": "realname",
                            "hideBack": 5 == this.config.firstShow,
                            "token": e,
                            "verifyPhonePanel": this.doms.verifyPhonePanel,
                            "loginSucRpage": t
                        }),
                        this.realNameIns.init(),
                        this.resetAcode(this.realNameIns),
                        this.toggleSpecialPanel("", !0),
                        this.realNameIns.showPanel()
                    },
                    "initUpSms": function(e) {
                        var t = this.doms.upSmsCodePanel;
                        this.upSmsCodeIns || (this.upSmsCodeIns = new c({
                            "panel": t,
                            "upSmsCodePanel": t,
                            "verifyCenter": this.verifyCenter,
                            "type": e.type
                        }),
                        this.upSmsCodeIns.init()),
                        this.upSmsCodeIns.showSmsLoginUp(e),
                        this.showPanel = t
                    },
                    "bindEvent": function() {
                        var t = this
                          , o = this
                          , i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            o.closeFloater()
                        };
                        g.on(this.doms.closeBtn, "click", i),
                        window.addEventListener && window.addEventListener("message", function(e) {
                            "qiyiHeaderFloaterShow" === e.data.type && t.closeFloater()
                        });
                        var n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            p.addClass(o.showPanel, "dn"),
                            p.hasClass(o.doms.leftIcon, _) ? (o.toggleIcon(k, _),
                            o.initScanLogin(),
                            o.sendThridPartyBlock(2),
                            v.click({
                                "rpage": "passsdk",
                                "block": 1 == o.preShowType ? "psprt_acc" : "psprt_sms",
                                "rseat": 1 == o.preShowType ? "acc2QR" : "sms2QR"
                            })) : (v.click({
                                "rpage": "passsdk",
                                "block": "psprt_QRcode",
                                "rseat": "QR2acc"
                            }),
                            o.toggleIcon(_, k),
                            o.scanLogin && o.scanLogin.hidePanel(),
                            o.toggelLoginPanel(o.preShowType))
                        };
                        g.on(this.doms.leftIconPanel, "click", n);
                        var s, a = this.doms.protocolPanel.querySelector('[data-protocol-btn="agree"]');
                        a && ("2" == this.config.types && "2" == this.config.firstShow ? p.addClass(a, "dn") : (s = function s(e) {
                            e.stopPropagation && e.stopPropagation(),
                            p.hasClass(a, "selected") ? p.removeClass(a, "selected") : p.addClass(a, "selected")
                        }
                        ,
                        g.on(a, "click", s))),
                        u.on("showQrCodeLogin", function(e) {
                            o.initScanLogin(e.data)
                        }),
                        u.on("handleLoginSuc", function(e) {
                            o.showLoginToast(e);
                            var t = {
                                "type": o.showType
                            };
                            !o.secondVerify.isShow && (o.isLoginType(e, "login_scs_sms") || o.isLoginType(e, "login_scs_acc") || o.isLoginType(e, "login_scs_3")) && -1 !== C.indexOf(o.config.business) ? t.conformLoginType = 1 : t.conformLoginType = 0,
                            t = Object.assign(o.localCookie, t),
                            o.setCookie(t);
                            var i = null;
                            "pca" == o.config.business && "login_scs_acc" === e.data.rpage && (i = o.baseLogin.getAutoLoginStatus(),
                            e.auto_login = i),
                            o.updateInfo && 0 <= e.data.rpage.indexOf("login_scs_3") && (e.data.isNewUser = !0),
                            o.notify({
                                "type": "login",
                                "data": e
                            }),
                            e.data && e.data.rpage && e.data.rpage.indexOf("login_scs_3") < 0 && (null != i ? t.autoLogin = i : "pca" == o.config.business && o.localCookie.autoLogin != undefined && (t.autoLogin = o.localCookie.autoLogin),
                            t = Object.assign(o.localCookie, t),
                            P.cookie.set("QC160", JSON.stringify(t), {
                                "expires": 31536e6,
                                "path": "/",
                                "domain": y
                            }));
                            var n = o.secondVerify.isInitVipBusiness();
                            setTimeout(function() {
                                o.secondVerify && (n || o.closeFloater())
                            }, 2e3),
                            "pca" != o.config.business && m.request()
                        }),
                        u.on("backShow", function(e) {
                            e.data.resetShowPanel && 2 == o.showType ? (o.initScanLogin(),
                            o.sendThridPartyBlock(2)) : (o.toggelLoginPanel(o.showType),
                            o.toggleSpecialPanel(!0)),
                            e.data.resetSize && o.resetSize(420)
                        }),
                        u.on("toggleSpecialPanel", function(e) {
                            o.toggleSpecialPanel(e.data, "", !0)
                        }),
                        u.on("toggleLoginTypes", function(e) {
                            p.addClass(o.showPanel, "dn"),
                            4 != e.data.type && (o.toggleSpecialPanel(!0),
                            2 == o.showType && p.hasClass(o.doms.leftIcon, k) && o.toggleIcon(_, k)),
                            o.toggelLoginPanel(e.data.type, e.data.token, e.data.rpage),
                            4 != e.data.type && 5 != e.data.type || o.resetSize(370)
                        }),
                        u.on("globalAcodeChange", function(e) {
                            o.acode = e.data.acode,
                            o.aname = e.data.name
                        }),
                        u.on("setUpdateInfo", function(e) {
                            o.updateInfo = e.data.updateInfo
                        }),
                        u.on("resizeHeight", function(e) {
                            o.resetSize(e.data)
                        }),
                        u.on("callThirdLogin", function(e) {
                            var t = e.data.type
                              , e = e.data.prePanel;
                            o.thridParty.callThirdLogin(t, e)
                        }),
                        u.on("callScanLogin", function(e) {
                            o.initScanLogin(e.data)
                        }),
                        u.on("callUpSmsCode", function(e) {
                            o.initUpSms({
                                "loginData": e.data.loginData,
                                "type": e.data.type || "login",
                                "prePanel": e.data.prePanel
                            })
                        }),
                        u.on("showBusiness", function(e) {
                            o.hide(o.sdkPanel),
                            o.show(o.doms.businessPanel)
                        }),
                        u.on("closeFloater", function() {
                            o.closeFloater()
                        }),
                        u.on("isShowVipBusiness", function(e) {
                            o.isShowVipBusiness = !0
                        }),
                        u.on("updateLocalCookie", function(e) {
                            e = e.data;
                            o.localCookie = e
                        })
                    },
                    "resetAcode": function(e) {
                        this.acode && e.resetAcode(this.acode, this.aname)
                    },
                    "showLoginToast": function(e) {
                        var t = {
                            "title": "登录成功"
                        };
                        e.data && e.data.icon && (t = {
                            "title": e.data.isNewUser ? "恭喜，注册成功～" : "登录成功",
                            "tip": e.data.isNewUser ? "下面是您将在爱奇艺使用的头像和昵称" : e.data.isReg ? "发现您曾经注册过爱奇艺账号，登录中……" : "",
                            "nickname": e.data.nickname || "一名用户",
                            "icon": e.data.icon
                        }),
                        this.config.hideIcon && (t.icon = ""),
                        this.config.hideNickname && (t.nickname = ""),
                        b.loginSuc(this.doms.toastPanel, t),
                        v.show({
                            "rpage": e.data.rpage
                        })
                    },
                    "toggleIcon": function(e, t) {
                        var i = this.doms.leftIcon;
                        p.addClass(i, e),
                        p.removeClass(i, t)
                    },
                    "sendThridPartyBlock": function(e) {
                        var t = 1 == e || 2 == e || 3 == e;
                        this.thridParty && t && (t = 1 == e ? this.doms.baseLoginPanel : 2 == e ? this.doms.scanLoginPanel : this.doms.smsLoginRegPanel,
                        this.thridParty.sendBlock(e, t))
                    },
                    "createFloater": function() {
                        var e = 420;
                        4 == this.config.firstShow || 5 == this.config.firstShow ? e = 370 : this.config.types.indexOf("4") < 0 && (e = 360),
                        this.floater || (this.floater = new P.floater({
                            "view": new P.floaterView({
                                "isResize": !1,
                                "zIndex": 9999,
                                "domHeight": e,
                                "resetSize": "pca" != this.config.business
                            })
                        })),
                        this.floater.show({
                            "html": n
                        }),
                        this.notify("pcLoginSDKShow")
                    },
                    "closeFloater": function() {
                        var e = this;
                        this.floater.destroy(),
                        this.doms = {},
                        g.unAll(),
                        u.unAll(w.globalEvent),
                        this.thridParty && this.thridParty.destroy(),
                        this.scanLogin && this.scanLogin.destroy(),
                        this.floater = null,
                        this.thridParty = null,
                        this.scanLogin = null,
                        this.baseLogin = null,
                        this.smsLoginReg = null,
                        this.regIns = null,
                        this.realNameIns = null,
                        this.showPanel = null,
                        this.prePanel = null,
                        this.showType = -1,
                        this.isSmsThirdLogin = !1,
                        this.acode = "",
                        this.aname = "",
                        this.updateInfo = !1,
                        this.secondVerify = null,
                        "pca" !== this.config.business && "uwp-was" !== this.config.business || !P.cookie.get("P00001") ? this.notify("pcLoginSDKHide") : this.sendUserInfo().then(function() {
                            e.notify("pcLoginSDKHide")
                        })["catch"](function() {
                            e.notify("pcLoginSDKHide")
                        })
                    },
                    "sendUserInfo": function() {
                        return new Promise(function(t, i) {
                            window.external && window.external.hostInfo && "function" == typeof window.external.sendRequest ? fetch("//pcw-api.iqiyi.com/passport/user/userinfodetail", {
                                "credentials": "include"
                            }).then(function(e) {
                                setTimeout(function() {
                                    t()
                                }, 1e3)
                            }, function(e) {
                                i()
                            }) : t()
                        }
                        )
                    },
                    "logout": function(e) {
                        var t = this;
                        e = e || {},
                        h.request(e, function() {
                            t.notify("logout")
                        })
                    },
                    "notify": function(e) {
                        e = "string" == typeof e ? {
                            "type": e
                        } : e;
                        u.fire(e),
                        window.postMessage(e, window.location.href)
                    },
                    "resetSize": function(e) {
                        "pca" == this.config.business && (e = '{"call_type":"request", "cmd":"page_size_change", "cmd_context":"", "cmd_data":{"width":360,"height":' + e + "}}",
                        window.external.js_app_service(e))
                    },
                    "isLoginType": function(e, t) {
                        e = (e.data || {}).rpage,
                        e = void 0 === e ? "" : e;
                        return t === e || 0 <= e.indexOf(t)
                    },
                    "setCookie": function(e) {
                        P.cookie.set("QC160", JSON.stringify(e), {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": y
                        })
                    }
                }
            })
        }
        .call(i, S, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, S(0))
}
, function(e, t) {
    e.exports = '<div class="qy-login-wrapper dn" data-login-sdk="panel"> <div class="qy-login-container"> <div class="qy-login-header"> <div class="header-qrCode" data-login-sdk="leftIcon"> <i class="icon-login icon-login__qrcode"></i> </div> <div class="header-logo"> <div class="header-logo-inner"> <img src="//www.iqiyipic.com/common/fix/login-logo-iqiyi.png" alt="" data-login-sdk="logoImg"> </div> </div> <span class="iconfont icon-close" data-login-sdk="close"></span> </div> <div class="qy-login-form"> <div class="login-form-inner"> <div class="login-form"> <div class="dn" data-login-sdk="baseLogin"></div> <div class="dn" data-login-sdk="scanLogin"></div> <div class="dn" data-login-sdk="smsLoginreg"></div> <div class="dn" data-login-sdk="baseLogin"></div> <div class="dn" data-login-sdk="reg"></div> <div class="dn" data-login-sdk="realname"></div> <div class="dn" data-login-sdk="verifyPhone"></div> <div class="dn" data-login-sdk="upSmsCode"></div> <div class="dn" data-login-sdk="secondVerify"></div> <div class="qy-login-sns dn" data-login-sdk="regProtocol"></div> <div class="qy-login-agreement" data-login-sdk="protocol"> <div class="agreement-link"><a href="javascript:;" data-protocol-btn="agree"><span class="iconfont icon-select"></span></a>同意<a href="https://www.iqiyi.com/user/register/protocol.html" class="theme-color" target="_blank">《用户协议》</a>和<a href="https://privacy.iqiyi.com/policies" class="theme-color" target="_blank">《隐私政策》</a></div> </div> <div class="qy-login-sns dn" data-login-sdk="thridPartyLogin"></div> </div> <div class="qy-login-cover dn" data-login-sdk="slideCover"> <div class="qy-login-slideVerify"> <div class="slideVerify-title">为保证您的账号安全，请完成以下认证</div> <div class="slideVerify-box" data-login-sdk="slidePanel"> </div> </div> </div> <div class="qy-login-cover dn" data-login-sdk="toast"></div> </div> </div> </div> </div> <div class="dn" data-login-sdk="business"></div> '
}
, function(t, i, b) {
    (function(y) {
        var e = function(e, t, i) {
            var n = b(6)
              , o = b(25)
              , s = b(54)
              , a = new (b(55))
              , r = b(1)
              , c = b(4)
              , d = b(3)
              , l = b(27)
              , u = b(7)
              , p = b(17)
              , h = b(11)
              , g = b(56)
              , f = "baseLoginAcodeChange"
              , m = "resetBaseLoginBtnStatus"
              , v = "login_scs_acc";
            i.exports = y.Class("baseLoginAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types,
                    this.toastPanel = e.toastPanel,
                    this.verifyCenter = e.verifyCenter,
                    this.secondVerify = e.secondVerify,
                    this.isPca = "pca" == e.business,
                    this.errMsg = e.errMsg,
                    this.doms = {},
                    this.nameKit = null,
                    this.areaIns = null,
                    this.rpage = "passsdk",
                    this.block = "psprt_acc",
                    this.isFirstShow = !0
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        this.initArea(),
                        this.toggleEye(),
                        this.handlePwdInput(),
                        this.initNameInput(),
                        this.initMailSuggest(),
                        this.handleBtn(),
                        this.handleAutoLogin(),
                        this.errMsg && this.nameKit.showErrMsg(this.errMsg)
                    },
                    "render": function() {
                        var e = JSON.parse(y.cookie.get("QC160") || "{}")
                          , e = this.renderHtml(s, {
                            "noSmsLogin": this.types.indexOf(3) < 0,
                            "noReg": this.types.indexOf(5) < 0,
                            "isPca": this.isPca,
                            "autoLogin": 0 != e.autoLogin
                        });
                        this.panel.innerHTML = e,
                        this.doms = {
                            "loginBtn": this.panel.querySelector('[data-baseLogin="loginBtn"]'),
                            "areaPanel": this.panel.querySelector('[data-baseLogin="area"]'),
                            "nameErr": this.panel.querySelector('[data-baseLogin="nameErr"]'),
                            "nameInput": this.panel.querySelector('[data-baseLogin="nameInput"]'),
                            "pwdInput": this.panel.querySelector('[data-baseLogin="pwdInput"]'),
                            "pwdErr": this.panel.querySelector('[data-baseLogin="pwdErr"]'),
                            "pwdEye": this.panel.querySelector('[data-baseLogin="pwdEye"]'),
                            "smsLogin": this.panel.querySelector('[data-baseLogin="smsLogin"]'),
                            "reg": this.panel.querySelector('[data-baseLogin="reg"]'),
                            "mailSuggestPanel": this.panel.querySelector('[data-baseLogin="mailSuggest"]'),
                            "autologin": this.panel.querySelector('[data-baseLogin="autologin"]')
                        }
                    },
                    "showPanel": function(e) {
                        this.show(e || this.panel)
                    },
                    "initArea": function() {
                        this.areaIns = new o({
                            "panel": this.doms.areaPanel,
                            "fireName": f
                        }),
                        this.areaIns.render()
                    },
                    "toggleEye": function() {
                        var t = this.doms.pwdEye
                          , i = this.doms.pwdInput
                          , n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            d.hasClass(t, "icon-eyes-close") ? (d.addClass(t, "icon-eyes-open"),
                            d.removeClass(t, "icon-eyes-close"),
                            i.setAttribute("type", "text")) : (d.addClass(t, "icon-eyes-close"),
                            d.removeClass(t, "icon-eyes-open"),
                            i.setAttribute("type", "password"))
                        };
                        r.on(t, "click", n)
                    },
                    "handlePwdInput": function() {
                        var t = this
                          , i = this.doms.pwdInput
                          , n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePwdErr()
                        };
                        r.on(i, "click", n);
                        var o = function o(e) {
                            e.stopPropagation && e.stopPropagation(),
                            0 == i.value.trim().length && (i.value = "")
                        };
                        r.on(i, "blur", o);
                        var s = function s(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePwdErr(),
                            t.setBaseLoginBtnStatus()
                        };
                        r.on(i, "keyup", s),
                        r.on(i, "input", s)
                    },
                    "setBaseLoginBtnStatus": function() {
                        var e = this.nameKit.checkNameValidate()
                          , t = 0 < this.doms.pwdInput.value.trim().length
                          , i = this.doms.loginBtn;
                        e && t ? d.removeClass(i, "btn-gray") : d.addClass(i, "btn-gray")
                    },
                    "showPwdErr": function(e) {
                        this.doms.pwdErr.innerHTML = e,
                        d.removeClass(this.doms.pwdErr, "dn")
                    },
                    "hidePwdErr": function() {
                        d.addClass(this.doms.pwdErr, "dn")
                    },
                    "initNameInput": function() {
                        var e = this;
                        this.nameKit = new l({
                            "name": this.doms.nameInput,
                            "nameErr": this.doms.nameErr,
                            "mailPanel": this.doms.mailSuggestPanel,
                            "zoneKey": this.acode,
                            "fireEnableName": m,
                            "zoneChangeFireName": f
                        }),
                        this.nameKit.init(),
                        c.on(m, function() {
                            e.setBaseLoginBtnStatus()
                        })
                    },
                    "initMailSuggest": function() {
                        new g({
                            "panel": this.doms.mailSuggestPanel,
                            "input": this.doms.nameInput,
                            "prompt": !1
                        }).init()
                    },
                    "handleBtn": function() {
                        var t = this
                          , i = this.doms.loginBtn
                          , n = function n(e) {
                            e.stopPropagation && e.stopPropagation(),
                            !d.hasClass(i, "btn-gray") && p.isAgree() && (u.click({
                                "rpage": t.rpage,
                                "block": t.block,
                                "rseat": "acc_login"
                            }),
                            t.doLogin())
                        };
                        r.on(i, "click", n);
                        var o = function o(e) {
                            e.stopPropagation && e.stopPropagation(),
                            u.click({
                                "rpage": t.rpage,
                                "block": t.block,
                                "rseat": "acc2sms"
                            }),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 3
                                }
                            })
                        };
                        r.on(this.doms.smsLogin, "click", o);
                        var s = function s(e) {
                            e.stopPropagation && e.stopPropagation(),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 4
                                }
                            })
                        };
                        r.on(this.doms.reg, "click", s)
                    },
                    "handleAutoLogin": function() {
                        var t, i;
                        this.isPca && (t = this.doms.autologin,
                        i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            d.hasClass(t, "selected") ? d.removeClass(t, "selected") : d.addClass(t, "selected")
                        }
                        ,
                        r.on(t, "click", i))
                    },
                    "doLogin": function(e) {
                        var o = this
                          , s = {
                            "passwd": o.doms.pwdInput.value,
                            "acode": o.areaIns.getAcode().acode,
                            "phone": o.doms.nameInput.value,
                            "token": e
                        };
                        a.login(s, function(e) {
                            o.nameKit.clearErrMsg();
                            var t, i, n = e.msg;
                            "A00000" == e.code && e.data ? ((t = e.data).rpage = v,
                            c.fire({
                                "type": "handleLoginSuc",
                                "data": t
                            })) : "P00223" == e.code ? ((i = s).ErrCb = function() {
                                o.nameKit.showPhoneMsg("请稍后重试"),
                                window.MITO && window.MITO.log({
                                    "message": "账号密码登录：触发验证中心失败",
                                    "data": {
                                        "acode": s.acode,
                                        "phone": s.phone
                                    }
                                })
                            }
                            ,
                            o.verifyCenter.callSDK(e, i, function(e) {
                                e ? o.doLogin(e) : o.nameKit.showPhoneMsg("请稍后重试")
                            })) : "P00807" == e.code ? c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 5,
                                    "rpage": v
                                }
                            }) : "P00159" === e.code || "P00908" == e.code ? (i = "P00159" === e.code ? "hrisk" : "lock",
                            c.fire({
                                "type": "showQrCodeLogin",
                                "data": {
                                    "type": i,
                                    "mobile": n
                                }
                            }),
                            d.addClass(o.panel, "dn")) : "P00119" == e.code && 0 <= n.indexOf("再错") || "P00125" == e.code || "P00141" == e.code ? h.showTip(o.toastPanel, {
                                "tip": n,
                                "btnTip": "确定"
                            }) : "P00950" == e.code || "P00951" == e.code ? (o.secondVerify.init({
                                "prePanel": o.panel,
                                "data": e
                            }),
                            d.addClass(o.panel, "dn"),
                            o.secondVerify.showPanel()) : o.nameKit.showErrMsg(n)
                        })
                    },
                    "resetAcode": function(e, t) {
                        this.areaIns.resetAcode(e, t)
                    },
                    "getAutoLoginStatus": function() {
                        return d.hasClass(this.doms.autologin, "selected")
                    }
                }
            })
        }
        .call(i, b, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, b(0))
}
, function(t, i, r) {
    (function(a) {
        var e = function(e, t, i) {
            var n = r(8)
              , o = r(5)
              , s = r(2);
            i.exports = a.Class("areaListService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "getAreacodeIf": {
                            "url": o.getAreacode
                        }
                    })
                },
                "methods": {
                    "getAreacode": function(t) {
                        var e = s.getConfig();
                        this._remoteInterface.send({
                            "ifname": "getAreacodeIf",
                            "param": {
                                "agenttype": e.agenttype,
                                "app_version": e.appVersion || "",
                                "device_id": e.deviceid || "",
                                "fromSDK": e.fromSDK,
                                "local": 1,
                                "ptid": e.ptid,
                                "sdk_version": e.sdk_version
                            }
                        }, function(e) {
                            t && t(e)
                        })
                    }
                }
            })
        }
        .call(i, r, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, r(0))
}
, function(t, i, d) {
    "use strict";
    (function(a) {
        var e = function(e, t, i) {
            var r = d(1)
              , c = d(26)
              , n = "__IFRAME__"
              , o = function o() {}
              , s = a.Class("FormRequest", {
                "construct": function(e) {
                    e = e || {},
                    this.form = e.form || {},
                    this.data = e.data || [],
                    this.iframe = e.iframe || {},
                    this.callbackName = e.callbackName || "__CALLBACK__" + Math.floor(2147483648 * Math.random()).toString(36),
                    this.randomCb = !e.callbackName,
                    this.callback = e.callback || o,
                    this.needIframe = !1 !== e.needIframe && !0 !== e.needIframe || e.needIframe,
                    this.needDestroy = e.needDestroy || !1,
                    this.noTranslateKeys = e.noTranslateKeys || [],
                    this.needMd5 = e.needMd5 || !1,
                    this.init()
                },
                "methods": {
                    "init": function() {
                        n += Math.floor(2147483648 * Math.random()).toString(36),
                        this.form = this._dealForm(this.form),
                        this.formElem = this._createForm(this.form),
                        this._importData(this.formElem, this.data),
                        this.needIframe && (this.iframe = this._dealIframe(this.iframe),
                        this.iframeElem = this._createIframe(this.iframe))
                    },
                    "_translateStr": function(e, t) {
                        if ((e = e || "") && "string" == typeof e && e.length)
                            for (var i = [{
                                "origin": '"',
                                "dest": "&quot;"
                            }, {
                                "origin": "<",
                                "dest": "&lt;"
                            }, {
                                "origin": ">",
                                "dest": "&gt;"
                            }, {
                                "origin": "\\\\",
                                "dest": "&#92;"
                            }, {
                                "origin": "&",
                                "dest": "&amp;"
                            }], n = 0; n < i.length; n++) {
                                var o, s = i[n].origin;
                                "&" === s && t || (o = new RegExp(s,"g"),
                                s = i[n].dest,
                                e = e.replace(o, s))
                            }
                        return e
                    },
                    "_dealForm": function(e) {
                        return 1 != (e = e || {}).nodeType && (e["accept-charset"] = e["accept-charset"] || "utf-8",
                        e["action"] = e["action"] || "",
                        e["enctype"] = e["enctype"] || "application/x-www-form-urlencoded",
                        e["method"] = e["method"] || "post",
                        e["name"] = e["name"] || "__FORM__",
                        e["target"] = e["target"] || n,
                        e["style"] = e["style"] || "display:none;"),
                        e
                    },
                    "_createForm": function(e) {
                        if (1 == (e = e || {}).nodeType)
                            return e;
                        var t = null
                          , i = r.getElementByAttr("form", "name", e.name);
                        if (0 < i.length)
                            t = i[0],
                            r.removeAllChild(t);
                        else {
                            for (var n in t = document.createElement("form"),
                            e)
                                e[n] && t.setAttribute(n, e[n]);
                            document.body.appendChild(t)
                        }
                        return t
                    },
                    "_dealIframe": function(e) {
                        return 1 != (e = e || {}).nodeType && (e.style = e.style || "display:none;",
                        e.name = e.name || n),
                        e
                    },
                    "_createIframe": function(e) {
                        if (1 == (e = e || {}).nodeType)
                            return e;
                        var t = e.name || ""
                          , i = (e.style,
                        r.getElementByAttr("iframe", "name", t))
                          , t = null;
                        return 0 < i.length ? t = i[0] : ((i = document.createElement("div")).innerHTML = '<iframe style="display:none;" name="' + e.name + '"></iframe>',
                        i.setAttribute("style", "display:none"),
                        t = i,
                        document.body.appendChild(i)),
                        t
                    },
                    "_importData": function(e, t) {
                        if (this.formElem) {
                            r.isEmptyObject(t) || r.isArray(t) || (this.randomCb && (t.callback = "window.parent." + this.callbackName),
                            t = this.sortData(t));
                            for (var i = 0; i < t.length; i++) {
                                var n, o = this._translateStr(String(t[i].name)), s = String(t[i].value), s = 0 <= this.noTranslateKeys.indexOf(o) ? this._translateStr(s, !0) : this._translateStr(s), a = String(t[i].type || "text");
                                o && (0 < (n = r.getElementByAttr("input", "name", o, e)).length ? n[0].setAttribute("name", s) : ((n = document.createElement("input")).name = o,
                                n.value = s,
                                n.type = a,
                                e.appendChild(n)))
                            }
                            return !0
                        }
                    },
                    "submit": function() {
                        if (this.formElem)
                            try {
                                var t;
                                this.needIframe && (this.needDestroy && this.callback ? (t = this,
                                window[this.callbackName] = function(e) {
                                    t.callback(e),
                                    t.iframeElem && (t.iframeElem.parentNode.removeChild(t.iframeElem),
                                    t.iframeElem = null),
                                    t.randomCb && (window[t.callbackName] = null)
                                }
                                ) : window[this.callbackName] = this.callback),
                                this.formElem.submit(),
                                this.needDestroy && (this.formElem.parentNode.removeChild(this.formElem),
                                this.formElem = null)
                            } catch (e) {
                                this.callback && this.callback({
                                    "code": "E0000F",
                                    "msg": "表单出错！",
                                    "data": e
                                })
                            }
                    },
                    "reset": function() {
                        this.formElem && this.formElem.reset()
                    },
                    "sortData": function(e) {
                        var t, i = [];
                        for (t in e) {
                            var n = {
                                "name": t,
                                "value": e[t],
                                "type": "text"
                            };
                            i.push(n)
                        }
                        if (this.needMd5) {
                            i.sort(function(e, t) {
                                return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                            });
                            for (var o = {}, s = 0; s < i.length; s++)
                                o[i[s].name] = i[s].value;
                            var a = c(o);
                            i.push({
                                "name": "qd_sc",
                                "value": a,
                                "type": "text"
                            })
                        }
                        return i
                    }
                }
            });
            i.exports = s
        }
        .call(i, d, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t, o) {
    "use strict";
    t = function(e, t, i) {
        var v = o(1)
          , n = {
            "request": function(e, t) {
                var o, i, s, n = (t = t || {}).data || "", a = !1 !== t.async, r = t.username || "", c = t.password || "", d = (t.method || "GET").toUpperCase(), l = t.headers || {}, u = t.timeout || 2e3, p = {}, h = t.withCredentials || !1;
                function g() {
                    if (4 == s.readyState) {
                        var e;
                        try {
                            e = s.status
                        } catch (t) {
                            return void f("failure")
                        }
                        f(e),
                        f(200 <= e && e < 300 || 304 == e || 1223 == e || 0 === e ? "success" : "failure"),
                        window.setTimeout(function() {
                            s && (s.onreadystatechange = function() {}
                            ),
                            a && (s = null)
                        }, 0)
                    }
                }
                function f(e) {
                    var t, i = p[e = "on" + e];
                    if (i) {
                        o && window.clearTimeout(o);
                        try {
                            t = s.responseText || "{}",
                            i(JSON.parse(t))
                        } catch (n) {
                            return i("")
                        }
                        return 1
                    }
                }
                for (i in t)
                    p[i] = t[i];
                try {
                    for (i in s = function() {
                        if (window.XMLHttpRequest)
                            return new XMLHttpRequest;
                        if (window.ActiveXObject)
                            try {
                                return new window.ActiveXObject("Msxml2.XMLHTTP")
                            } catch (e) {
                                try {
                                    return new window.ActiveXObject("Microsoft.XMLHTTP")
                                } catch (t) {}
                            }
                    }(),
                    "[object Object]" == Object.prototype.toString.call(n) && (n = v.jsonToQuery(n)),
                    "GET" == d && (n && (e += (0 <= e.indexOf("?") ? "&" : "?") + n,
                    n = null),
                    t["noCache"] && (e += (0 <= e.indexOf("?") ? "&" : "?") + "b" + +new Date + "=1")),
                    r ? s.open(d, e, a, r, c) : s.open(d, e, a),
                    a && (s.onreadystatechange = g),
                    "POST" == d && s.setRequestHeader("Content-Type", l["Content-Type"] || "application/x-www-form-urlencoded"),
                    l)
                        l.hasOwnProperty(i) && s.setRequestHeader(i, l[i]);
                    "withCredentials"in s && (s.withCredentials = h),
                    f("beforerequest"),
                    u && (o = setTimeout(function() {
                        s.onreadystatechange = function() {}
                        ,
                        s.abort(),
                        f("timeout") || f("failure")
                    }, u)),
                    s.send(n),
                    a || g()
                } catch (m) {
                    f("failure")
                }
                return s
            }
        };
        i.exports = n
    }
    .call(t, o, t, e);
    t === undefined || (e.exports = t)
}
, function(e, t) {
    e.exports = '{{if type == \'suc\'}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-result-success"> <div class="success-title"> <i class="iconfont icon-success"></i> <span class="title-txt">{{title}}</span> </div> {{if tip}} <div class="success-tips">{{tip}}</div> {{/if}} <div class="qyl-success-info"> {{if icon}} <img class="user-avatar" src="{{icon}}"> {{/if}} {{if nickname}} <div class="login-user-name">{{nickname}}</div> {{/if}} </div> </div> </div> </div> {{else if type == \'toast\'}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title">{{tip}}</div> </div> </div> </div> {{else}} <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title">{{tip}}</div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-toast="btn">{{btnTip}}</div> </div> </div> </div> </div> </div> {{/if}}'
}
, function(e, t) {
    e.exports = '<div class="country-code" data-area="panel"> <span class="country-current" data-area="show">中国大陆 +86</span> <i class="iconfont icon-arr"></i> <span class="splite-line"></span> </div> <div class="country-code-list dn" data-area="listPanel"> <ul> {{each lists as item}} <li data-area-acode="{{item.acode}}" data-area-name="{{item.name}}" class="{{item.selected}}">{{item.name}} +{{item.acode}}</li> {{/each}} </ul> </div>'
}
, function(e, t) {
    e.exports = '<div class="qy-login-tab {{if noSmsLogin == true}}single-tab{{/if}}"> <a href="javascript:;" class="selected">密码登录<span class="tab-line"></span></a> <a href="javascript:;" data-baseLogin="smsLogin" class="{{if noSmsLogin == true}}dn{{/if}}">短信登录</a> </div> <div class="qy-login-field"> <div class="field-item"> <div class="field-error dn" data-baseLogin="nameErr">请输入手机号/邮箱</div> <div class="field-country-code" data-baseLogin="area"></div> <div class="field-account"> <input type="text" class="input-box" data-baseLogin="nameInput" maxlength="40" placeholder="请输入手机号/邮箱"/> <div class="account-dropList dn" data-baseLogin="mailSuggest"></div> </div> </div> <div class="field-item"> <div class="field-error dn" data-baseLogin="pwdErr">账号或密码错误</div> <div class="field-confirm-code"> <input type="password" class="input-box" data-baseLogin="pwdInput" maxlength="20" placeholder="请输入密码"/> <i class="iconfont icon-eyes-close" data-baseLogin="pwdEye"></i> </div> </div> <div class="field-other"> {{if isPca == true}} <div class="other-status"> <a href="javascript:;" class="status-item {{if autoLogin == true}}selected{{/if}}" data-baselogin="autologin"> <span class="iconfont icon-select"></span>自动登录 </a> </div> {{/if}} <div class="other-register"> <a href="javascript:;" class="register-account {{if noReg == true}}dn{{/if}}" data-baseLogin="reg">注册账号</a> </div> <div class="other-forget"> <a href="https://www.iqiyi.com/safety/findPassword.html" class="forget-pwd" target="_blank">忘记密码？</a> </div> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major btn-gray" data-baseLogin="loginBtn"> 登录 </div> </div> </div>'
}
, function(t, i, s) {
    (function(l) {
        var e = function(e, t, i) {
            var n = s(8)
              , a = s(16)
              , r = s(9)
              , o = s(5)
              , c = s(2)
              , d = s(1);
            i.exports = l.Class("baseLoginService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "login": {
                            "url": o.login
                        }
                    })
                },
                "methods": {
                    "login": function(e, t) {
                        var i = c.getConfig()
                          , n = this
                          , o = a.rsaFun(e.passwd)
                          , s = {
                            "__NEW": 1,
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode,
                            "checkExist": 1,
                            "device_id": i.deviceid || "",
                            "dfp": "",
                            "email": e.phone
                        };
                        e.token && (s.env_token = e.token),
                        s = l.extend(s, {
                            "fromSDK": i.fromSDK,
                            "lang": "",
                            "nr": 3,
                            "passwd": o,
                            "ptid": i.ptid,
                            "sdk_version": i.sdk_version,
                            "verifyPhone": 1
                        }),
                        r.getDFP(function(e) {
                            s.dfp = e,
                            d.isCors() && (s.qd_sc = l.md5(decodeURIComponent(d.jsonToQuery(s)) + "tS7BdPLU2w0JD89dh")),
                            n._remoteInterface.send({
                                "ifname": "login",
                                "param": s
                            }, function(e) {
                                t && t(e)
                            })
                        })
                    }
                }
            })
        }
        .call(i, s, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(t, i, d) {
    (function(c) {
        var e = function(e, t, i) {
            var n = d(6)
              , o = d(57)
              , a = d(1)
              , s = d(14)
              , r = d(3);
            i.exports = c.Class("mailSuggest", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this._input = e.input,
                    this._curStr = "",
                    this.pattern = e.pattern || /^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{1,}@([0-9a-zA-Z][0-9a-zA-Z-])*/,
                    this._mails = e.mails || ["qq.com", "163.com", "126.com", "sina.com", "sina.cn", "hotmail.com", "gmail.com", "yahoo.cn", "139.com"],
                    this._max = e.max || 3
                },
                "methods": {
                    "init": function() {
                        if (this.panel && this._input)
                            return this.bindEvent(),
                            this
                    },
                    "render": function(e) {
                        e = this.renderHtml(o, {
                            "data": e
                        });
                        this.panel.innerHTML = e,
                        this.handleItem()
                    },
                    "bindEvent": function() {
                        var i = this
                          , n = {
                            "13": "enter",
                            "27": "esc",
                            "37": "left",
                            "38": "up",
                            "39": "right",
                            "40": "down",
                            "9": "tab"
                        }
                          , o = function o(e) {
                            e.stopPropagation && e.stopPropagation();
                            var t = e.keyCode + "";
                            t in n ? "38" == t || "40" == t ? ("38" == t && e.preventDefault(),
                            i.changeSuggest(n[t])) : "13" == t && i.enterSuggest() : setTimeout(function() {
                                i.useCorrectSuggest()
                            }, 50)
                        };
                        a.on(i._input, "keydown", o);
                        var t = function t(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i._input.value && i.useCorrectSuggest()
                        };
                        a.on(i._input, "focus", t)
                    },
                    "handleItem": function() {
                        var s = this
                          , e = this.panel.querySelectorAll('[data-maisuggest="item"]');
                        this.itemClk = function(e) {
                            e.stopPropagation && e.stopPropagation();
                            var t = (e = e || window.event).target || e.srcElement
                              , e = t.getAttribute("data-index")
                              , e = parseInt(e, 10)
                              , t = t.innerHTML;
                            s._input.value = t,
                            s.hidePanel()
                        }
                        ,
                        this.itemMouseOver = function(e) {
                            e.stopPropagation && e.stopPropagation();
                            for (var t = (e = e || window.event).target || e.srcElement, i = t.getAttribute("data-index"), i = parseInt(i, 10), n = s.suggests, o = 0; o < n.length; o++)
                                o !== i ? r.removeClass(t, "selected") : (r.addClass(t, "selected"),
                                s._input.value = t.innerHTML)
                        }
                        ;
                        for (var t, i = 0; i < e.length; i++)
                            t = i,
                            a.on(e[t], "click", s.itemClk),
                            a.on(e[t], "mouseover", s.itemMouseOver)
                    },
                    "unBindEvent": function() {
                        for (var t = this.panel.querySelectorAll('[data-maisuggest="item"]'), e = 0; e < t.length; e++)
                            !function(e) {
                                a.un(t[e], "click", this.itemClk),
                                a.un(t[e], "click", this.itemMouseOver)
                            }(e);
                        this.itemClk = null,
                        this.itemMouseOver = null
                    },
                    "useCorrectSuggest": function() {
                        var e = this
                          , t = e._input.value || "";
                        e._curStr = s.trimAllBlank(t);
                        t = e.assemble(e.parseMail());
                        e._curStr && 0 < t.length && (!e.pattern || e.pattern && e.pattern.test(e._curStr)) ? (e.render(t),
                        e.suggests = e.panel.querySelectorAll('[data-maisuggest="item"]'),
                        e.show(e.panel)) : e.hidePanel()
                    },
                    "hidePanel": function() {
                        this.unBindEvent(),
                        this.hide(this.panel)
                    },
                    "changeSuggest": function(e) {
                        for (var t = this.suggests, i = t.length, n = 0, o = 1, n = "up" == e ? -1 : 1, s = 0; s < i; s++)
                            if (r.hasClass(t[s], "selected")) {
                                o = parseInt(t[s].getAttribute("data-index"), 10);
                                break
                            }
                        i - 1 <= (o = (o += n) <= 0 ? 0 : o) && (o = i - 1);
                        for (s = 0; s < i; s++)
                            parseInt(t[s].getAttribute("data-index"), 10) == o ? (r.addClass(t[s], "selected"),
                            this._input.value = t[s].innerHTML) : r.removeClass(t[s], "selected")
                    },
                    "enterSuggest": function() {
                        if (!r.hasClass(this.panel, "dn"))
                            for (var e = this.suggests, t = 0; t < e.length; t++)
                                r.hasClass(e[t], "selected") && (this._input.value = e[t].innerHTML,
                                this.hidePanel())
                    },
                    "parseMail": function() {
                        var e = this._mails.concat()
                          , t = this._curStr.match(/(@)(.*)/);
                        return t && t[2] && (e = e.filter(function(e) {
                            return -1 < e.indexOf(t[2])
                        })),
                        this._max && e.length > this._max && (e.length = this._max),
                        e
                    },
                    "assemble": function(e) {
                        var e = e
                          , i = this._curStr.replace(/@.*/, "");
                        return e.length && (e = e.map(function(e, t) {
                            return {
                                "mail": i + "@" + e
                            }
                        })).forEach(function(e, t) {
                            e.index = t
                        }),
                        e
                    }
                }
            })
        }
        .call(i, d, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t) {
    e.exports = '<ul> {{each data as item}} <li> <a href="javascript:;" class="dropList-item" data-maisuggest="item" data-index="{{item.index}}">{{item.mail}}</a> </li> {{/each}} </ul>'
}
, function(t, i, p) {
    (function(u) {
        var e = function(e, t, i) {
            var n = p(6)
              , o = p(59)
              , a = new (p(60))
              , s = p(1)
              , r = p(4)
              , c = p(7)
              , d = p(3)
              , l = p(11);
            i.exports = u.Class("scanLoginAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.type = e.type || "normal",
                    this.msg = e.msg || "",
                    this.appTitle = e.appTitle || "爱奇艺手机APP",
                    this.business = e.business,
                    this._pullInterval = 2e3,
                    this.doms = {},
                    this.hidden = !0,
                    this.reGenClick = null,
                    this.backClick = null,
                    this.smsLogincli = null,
                    this.rpage = "normal" == this.type ? "passsdk" : "lock" == this.type ? "device_locked" : "device_new",
                    this.block = "normal" == this.type ? "psprt_QRcode" : "",
                    this.device_auth_uid = e.device_auth_uid,
                    this.new_device_auth = e.new_device_auth
                },
                "methods": {
                    "init": function() {
                        this.reGenClick && this.unBindEvent(),
                        this.render(),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        var t = this;
                        this.reGenClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.refreshQrcode()
                        }
                        ,
                        s.on(this.doms.reGenBtn, "click", this.reGenClick),
                        "normal" != this.type && (this.backClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(),
                            r.fire({
                                "type": "backShow",
                                "data": {
                                    "resetShowPanel": !0
                                }
                            })
                        }
                        ,
                        s.on(this.doms.back, "click", this.backClick),
                        this.smsLogincli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(),
                            r.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 3
                                }
                            })
                        }
                        ,
                        s.on(this.doms.smsLogin, "click", this.smsLogincli))
                    },
                    "unBindEvent": function() {
                        s.un(this.doms.reGenBtn, "click", this.reGenClick),
                        this.reGenClick = null,
                        this.doms.back && (s.un(this.doms.back, "click", this.backClick),
                        this.backClick = null,
                        s.un(this.doms.smsLogin, "click", this.smsLogincli),
                        this.smsLogincli = null)
                    },
                    "render": function() {
                        var e = this.renderHtml(o, {
                            "type": this.type || "normal",
                            "msg": this.msg || "",
                            "appTitle": this.appTitle
                        });
                        this.panel.innerHTML = e,
                        this.doms = {
                            "code": this.panel.querySelector('[data-scanLogin="code"]'),
                            "codeFailPanel": this.panel.querySelector('[data-scanLogin="codeFailPanel"]'),
                            "codeSuc": this.panel.querySelector('[data-scanLogin="codeSucPanel"]'),
                            "codeImg": this.panel.querySelector('[data-scanLogin="codeImg"]'),
                            "reGenBtn": this.panel.querySelector('[data-scanLogin="reGen"]'),
                            "back": this.panel.querySelector('[data-scanLogin="back"]'),
                            "smsLogin": this.panel.querySelector('[data-scanLogin="smsLogin"]')
                        },
                        this.scsSend = !1
                    },
                    "showPanel": function(e) {
                        type = e.type || "normal",
                        e.type !== this.type && (this.type = e.type,
                        this.rpage = "normal" == this.type ? "passsdk" : "lock" == this.type ? "device_locked" : "device_new",
                        this.block = "normal" == this.type ? "psprt_QRcode" : "",
                        this.msg = e.msg,
                        this.init()),
                        this.hidden = !1,
                        this.show(this.panel),
                        this.refreshQrcode()
                    },
                    "hidePanel": function() {
                        this.hidden = !0,
                        clearTimeout(this._pollTokenLoginTimer),
                        clearTimeout(this._arcodeOnerrorTimer),
                        this.hide(this.panel)
                    },
                    "refreshQrcode": function() {
                        var n = this;
                        n.hiden || a.genLoginToken({
                            "device_auth_uid": n.device_auth_uid,
                            "new_device_auth": n.new_device_auth
                        }, function(e) {
                            var t, i;
                            "A00000" === e.code ? (n._loginToken = e.data.token,
                            n._loginTokenExpire = e.data.expire,
                            t = a.getQrCode(e.data.url) + "&_=" + Math.random(),
                            i = n.doms.codeImg,
                            n._arcodeOnerrorTimer = null,
                            i.onload = function() {
                                i.onload = i.onerror = function() {}
                                ,
                                clearTimeout(n._arcodeOnerrorTimer),
                                n.qrcodeImgSrcChanged()
                            }
                            ,
                            i.onerror = function() {
                                i.onload = i.onerror = function() {}
                                ,
                                clearTimeout(n._arcodeOnerrorTimer),
                                d.removeClass(n.doms.codeFailPanel, "dn"),
                                n.hide(n.doms.codeSuc),
                                "pca" == n.business && l.callPca()
                            }
                            ,
                            n._arcodeOnerrorTimer = setTimeout(function() {
                                i.onerror()
                            }, 5e3),
                            i.src = t) : (d.removeClass(n.doms.codeFailPanel, "dn"),
                            n.hide(n.doms.codeSuc),
                            window.MITO && window.MITO.log({
                                "message": "扫码登录：刷新二维码接口gen_login_token.action失败",
                                "data": e
                            }))
                        })
                    },
                    "qrcodeImgSrcChanged": function() {
                        var i = this
                          , n = 30;
                        i.hide(i.doms.codeFailPanel),
                        i.hide(i.doms.codeSuc),
                        d.removeClass(i.doms.code, "dn");
                        var o = !1;
                        i._pollTokenLoginTimer = setTimeout(function s() {
                            a.checkTokenLogin(i._loginToken, function(e) {
                                var t;
                                "A00000" === e.code ? (t = {},
                                (t = e.data && e.data.userinfo ? e.data.userinfo : t).rpage = "login_scs_QR",
                                r.fire({
                                    "type": "handleLoginSuc",
                                    "data": t
                                })) : (clearTimeout(i._pollTokenLoginTimer),
                                o || i.hidden || (0 < n ? (i._pollTokenLoginTimer = setTimeout(s, 1e3),
                                0 == --n ? (i.hide(i.doms.codeSuc),
                                d.removeClass(i.doms.code, "dn"),
                                d.removeClass(i.doms.codeFailPanel, "dn")) : "P01006" === e.code ? (i.hide(i.doms.code),
                                d.removeClass(i.doms.codeSuc, "dn"),
                                i.scsSend || (c.block({
                                    "rpage": i.rpage,
                                    "block": "QRscan_scs"
                                }),
                                i.scsSend = !0)) : "P01007" === e.code && (clearTimeout(i._pollTokenLoginTimer),
                                i.hide(i.doms.codeSuc),
                                d.removeClass(i.doms.code, "dn"),
                                i.refreshQrcode(),
                                i.scsSend = !1)) : (d.removeClass(i.doms.code, "dn"),
                                d.removeClass(i.doms.codeFailPanel, "dn"),
                                i.hide(i.doms.codeSuc))))
                            })
                        }, i._pullInterval),
                        clearTimeout(i._loginTokenExpireTimer),
                        i._loginTokenExpireTimer = null,
                        i._loginTokenExpireTimer = setTimeout(function() {
                            o = !0,
                            clearTimeout(i._pollTokenLoginTimer),
                            i._pollTokenLoginTimer = null,
                            clearTimeout(i._loginTokenExpireTimer),
                            i._loginTokenExpireTimer = null,
                            i.hidden || i.refreshQrcode()
                        }, 1e3 * i._loginTokenExpire)
                    },
                    "destroy": function() {
                        clearTimeout(this._pollTokenLoginTimer)
                    }
                }
            })
        }
        .call(i, p, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, p(0))
}
, function(e, t) {
    e.exports = '{{if type != \'secondVerify\'}} <div class="qy-login-title"> {{if type != \'normal\'}} <span class="back-link" data-scanLogin="back"> <i class="iconfont icon-back"></i>返回 </span> {{/if}} <div class="title-content"> {{if type == \'normal\'}} <div class="major-desc"> <p>打开<span class="theme-color">{{appTitle}}</span></p> <p>扫描二维码登录</p> </div> {{else if type == \'lock\'}} <div class="major-desc"> <p>已开启设备锁</p> </div> <div class="minor-desc"> <p>{{msg}}</p> </div> {{else if type == \'hrisk\'}} <div class="title-content"> <div class="major-desc"> <p>当前登录存在风险</p> </div> <div class="minor-desc"> <p>为了账号安全，请在手机上打开爱奇艺APP，<br/>扫描二维码登录</p> </div> </div> {{/if}} </div> </div> <div class="qy-login-qrcode" data-scanLogin="code"> <div class="qrcode-pic"> <img data-scanLogin="codeImg"> </div> <div class="qrcode-cover dn" data-scanLogin="codeFailPanel"> <div class="qrcode-cover-middle"> <div class="cover-desc">二维码已失效</div> <div class="cover-refresh" data-scanLogin="reGen"> <i class="iconfont icon-refresh"></i>点击刷新</div> </div> </div> </div> <div class="qy-login-saoma-success dn" data-scanLogin="codeSucPanel"> <div class="saoma-con"> <i class="iconfont icon-success"></i> <div class="saoma-title">扫码成功</div> <div class="saoma-tips">请在手机上确认 [ 授权登录 ]</div> </div> </div> {{if type != \'normal\'}} <div class="qy-login-problem"> <div class="problem-ask"> {{if type == \'lock\'}} <span class="ask-desc">主设备手机不在身边</span> {{else}} <span class="ask-desc">没有安装爱奇艺APP</span> {{/if}} <i class="iconfont icon-ask"> <span class="pop-arr"></span> <div class="problem-pop">建议安装爱奇艺APP，扫码登录更安全，有效防止盗号。不想安装？可以使用<a href="javascript:;" class="theme-color" data-scanLogin="smsLogin">短信登录</a> </div> </i> </div> </div> {{/if}} {{/if}} {{if type == \'secondVerify\'}} <div class="qy-login-secverify-qrcode"> <div class="info-text"> <p>使用主设备打开爱奇艺，</p> <p>点击页面右上角“+”，点击“扫一扫”，</p> <p>扫描下方二维码，授权登录</p> </div> <div class="qy-login-qrcode" data-scanLogin="code"> <div class="qrcode-pic"> <img data-scanLogin="codeImg"> </div> <div class="qrcode-cover dn" data-scanLogin="codeFailPanel"> <div class="qrcode-cover-middle"> <div class="cover-desc">二维码已失效</div> <div class="cover-refresh" data-scanLogin="reGen"> <i class="iconfont icon-refresh"></i>点击刷新</div> </div> </div> </div> <div class="qy-login-saoma-success dn" data-scanLogin="codeSucPanel"> <div class="saoma-con"> <i class="iconfont icon-success"></i> <div class="saoma-title">扫码成功</div> <div class="saoma-tips">请在手机上确认 [ 授权登录 ]</div> </div> </div> </div> {{/if}}'
}
, function(t, i, c) {
    (function(r) {
        var e = function(e, t, i) {
            var n = c(8)
              , o = c(5)
              , s = c(2)
              , a = c(9);
            i.exports = r.Class("scanLoginService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "genLoginTokenIf": {
                            "url": o.genLoginToken
                        },
                        "checkTokenLoginIf": {
                            "url": o.isTokenLogin
                        }
                    })
                },
                "methods": {
                    "genLoginToken": function(e, t) {
                        var i = s.getConfig();
                        this._remoteInterface.send({
                            "ifname": "genLoginTokenIf",
                            "param": {
                                "agenttype": i.agenttype,
                                "app_version": i.appVersion || "",
                                "device_id": i.deviceid || "",
                                "device_name": "网页端",
                                "fromSDK": i.fromSDK,
                                "ptid": i.ptid,
                                "sdk_version": i.sdk_version,
                                "surl": 1,
                                "device_auth_uid": e ? e.device_auth_uid : "",
                                "new_device_auth": e ? e.new_device_auth : ""
                            }
                        }, function(e) {
                            t && t(e)
                        })
                    },
                    "checkTokenLogin": function(t, i) {
                        var n = s.getConfig()
                          , o = this;
                        a.getDFP(function(e) {
                            o._remoteInterface.send({
                                "ifname": "checkTokenLoginIf",
                                "param": {
                                    "agenttype": n.agenttype,
                                    "app_version": n.appVersion || "",
                                    "device_id": n.deviceid || "",
                                    "fromSDK": n.fromSDK,
                                    "ptid": n.ptid,
                                    "sdk_version": n.sdk_version,
                                    "token": t,
                                    "dfp": e
                                }
                            }, function(e) {
                                i && i(e)
                            })
                        })
                    },
                    "getQrCode": function(e) {
                        for (var t = encodeURIComponent(e), i = [{
                            "key": "!",
                            "value": "%21"
                        }], n = 0, o = i.length; n < o; n++)
                            var s = new RegExp(i[n]["key"],"g")
                              , t = t.replace(s, i[n]["value"]);
                        var a = "35f4223bb8f6c8638dc91d94e9b16f5" + t
                          , e = r.md5(a)
                          , a = [];
                        return a.push("data=" + t),
                        a.push("property=0"),
                        a.push("salt=" + e),
                        a.push("width=162"),
                        "//qrcode.iqiyipic.com/login/?" + a.join("&")
                    }
                }
            })
        }
        .call(i, c, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, c(0))
}
, function(t, i, w) {
    (function(y) {
        var e;
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        (e = function(e, t, i) {
            var n = w(6)
              , o = w(2)
              , s = w(5)
              , a = w(1)
              , r = w(62)
              , c = w(4)
              , d = w(7)
              , l = w(17)
              , u = w(11)
              , p = new (w(63))
              , h = w(64);
            window.lib = window.lib || {},
            window.lib.__callbacks__ = window.lib.__callbacks__ || {};
            var g = "请稍后重试"
              , f = {
                "weixin": {
                    "w": 500,
                    "h": 470,
                    "type": 29,
                    "rseat": "wx"
                },
                "qq": {
                    "w": 600,
                    "h": 400,
                    "type": 4,
                    "rseat": "qq"
                },
                "weibo": {
                    "w": 600,
                    "h": 400,
                    "type": 2,
                    "rseat": "wb"
                },
                "zhifubao": {
                    "w": 650,
                    "h": 620,
                    "type": 5,
                    "rseat": "zfb"
                },
                "baidu": {
                    "w": 600,
                    "h": 400,
                    "type": 1,
                    "rseat": "bd"
                },
                "mi": {
                    "w": 900,
                    "h": 685,
                    "type": 30,
                    "rseat": "xm"
                }
            }
              , m = {
                "1": {
                    "type": "weixin"
                },
                "2": {
                    "type": "qq"
                },
                "3": {
                    "type": "weibo"
                },
                "4": {
                    "type": "zhifubao"
                },
                "5": {
                    "type": "baidu"
                },
                "6": {
                    "type": "mi"
                }
            }
              , v = null;
            i.exports = y.Class("thridPartyLoginAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types || "1,2,3,4,5,6",
                    this.toastPanel = e.toastPanel,
                    this.verifyCenter = e.verifyCenter,
                    this.secondVerify = e.secondVerify,
                    this.business = e.business,
                    this.thirdLoginCB = e.thirdLoginCB,
                    this.rpage = "passsdk"
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        this.bindEvent(),
                        this.cbData = ""
                    },
                    "bindEvent": function() {
                        var t = this;
                        window.lib.__callbacks__["_oAuthSuccess"] = function(e) {
                            t.handleAuthSuc(e)
                        }
                        ,
                        v = function v(e) {
                            e = e.data;
                            e && "__loginSdkAuthSuccess" === e.type && t.handleAuthSuc(e.data)
                        }
                        ,
                        window.addEventListener && window.addEventListener("message", v);
                        for (var e = this.panel.querySelectorAll("[data-thirdparty]"), i = function i(e) {
                            e.stopPropagation && e.stopPropagation(),
                            l.isAgree() && (e = (e = (e = e || window.event).target || e.srcElement) && e.getAttribute("data-thirdparty"),
                            "pca" == t.business ? t.callPCA(e) : t.thirdLoginCB ? t.specialCallPage(e) : t.callThirdLogin(e),
                            c.fire({
                                "type": "setUpdateInfo",
                                "data": {
                                    "updateInfo": !1
                                }
                            }))
                        }, n = 0; n < e.length; n++)
                            a.on(e[n], "click", i)
                    },
                    "render": function() {
                        var t = [];
                        this.types.split(",").forEach(function(e) {
                            t.push(m[e])
                        });
                        var e = this.renderHtml(h, {
                            "lists": t
                        });
                        this.panel.innerHTML = e
                    },
                    "callPCA": function(e) {
                        var e = f[e]
                          , t = this.getThirdLoginUrl(e.type);
                        try {
                            var i = '{"call_type":"request", "cmd":"third_login", "cmd_context":"", "cmd_data":' + JSON.stringify({
                                "thirdurl": t
                            }) + "}";
                            window.external.js_app_service(i)
                        } catch (n) {}
                    },
                    "specialCallPage": function(e) {
                        var t = f[e]
                          , i = this.getThirdLoginUrl(t.type)
                          , n = this.getWinConfig(e);
                        try {
                            window[this.thirdLoginCB]({
                                "type": "open",
                                "data": {
                                    "url": i,
                                    "config": n
                                }
                            })
                        } catch (o) {}
                    },
                    "getWinConfig": function(e) {
                        e = f[e];
                        return e.l = window.screenX + (window.screen.width - e.w) / 2,
                        e.t = window.screenY + (window.screen.height - e.h) / 2,
                        "height=" + e.h + ",width=" + e.w + ",top=" + e.t + ",left=" + e.l + ",toolbar=no,menubar=no,scrollbars=no, resizable=yes,location=yes, status=no"
                    },
                    "callThirdLogin": function(e, t) {
                        var i = f[e];
                        t && (this.prePanel = t),
                        "pca" == this.business ? this.callPCA(e) : (t = this.getWinConfig(e),
                        e = this.getThirdLoginUrl(i.type),
                        this.snsWindow = r.href("__window", {
                            "url": e,
                            "config": t
                        })),
                        d.click({
                            "rpage": "passsdk",
                            "block": this.block,
                            "rseat": this.block + "_" + i.rseat
                        }),
                        this.selectType = i.rseat
                    },
                    "getThirdLoginUrl": function(e) {
                        var t = o.getConfig()
                          , i = "https://www.iqiyi.com/thirdlogin/close.html";
                        "pca" == this.business ? (i = window.location.origin + "/thirdlogin/close.html",
                        i += "?business=pca") : this.thirdLoginCB && (i += "?thirdLoginCB=" + this.thirdLoginCB);
                        t = {
                            "type": e,
                            "isiframe": 1,
                            "_pos": 1,
                            "agenttype": t.agenttype,
                            "device_id": t.deviceid || "",
                            "verifyPhone": 1,
                            "ptid": t.ptid,
                            "fromSDK": 1,
                            "is_reg_confirm": 1,
                            "sdk_version": "1.0.0",
                            "exception_url": i,
                            "success_url": i
                        },
                        i = s.thirdLogin;
                        return i += "?" + a.jsonToQuery(t)
                    },
                    "handleAuthSuc": function(e) {
                        e = e || {};
                        var t = ""
                          , i = "";
                        this.snsWindow && this.snsWindow.close(),
                        i = "object" == b(e) ? (t = a.getQueryValue(e.url, "msg") || e.msg,
                        a.getQueryValue(e.url, "code") || e.code) : (t = a.getQueryValue(e, "msg") || "",
                        a.getQueryValue(e, "code") || "");
                        var n = y.cookie.get("P00038") || t
                          , n = decodeURIComponent(n)
                          , t = y.cookie.get("P00037") || i
                          , i = y.cookie.get("P00036") || e.data
                          , e = y.cookie.get("P00001") && y.cookie.get("P00002") && y.cookie.get("P00003");
                        if (this.cbData = i,
                        "A00000" == t || e)
                            c.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": "login_scs_3_" + this.selectType
                                }
                            });
                        else if ("P00807" == t) {
                            var o = "";
                            if (this.cbData)
                                try {
                                    o = JSON.parse(decodeURIComponent(this.cbData)).token
                                } catch (s) {}
                            o = decodeURIComponent(o),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 5,
                                    "token": o,
                                    "rpage": "login_scs_3_" + this.selectType
                                }
                            }),
                            this.prePanel && this.hide(this.prePanel)
                        } else
                            "P01118" == t ? (this.regConfirm(),
                            this.prePanel && this.hide(this.prePanel)) : "P00908" == t ? (c.fire({
                                "type": "showQrCodeLogin",
                                "data": {
                                    "type": "lock",
                                    "mobile": n
                                }
                            }),
                            this.prePanel && this.hide(this.prePanel)) : "P00950" == i.code || "P00951" == i.code ? (this.secondVerify.init({
                                "prePanel": this.panel,
                                "data": i
                            }),
                            dom.addClass(this.panel, "dn"),
                            this.secondVerify.showPanel()) : (this.showErr(n),
                            window.MITO && window.MITO.log({
                                "message": "handleAuthSuc三方登录回调失败",
                                "data": {
                                    "code": t,
                                    "msg": n,
                                    "data": i
                                }
                            }))
                    },
                    "regConfirm": function(e) {
                        var i = this
                          , t = ""
                          , n = y.cookie.get("P00036") || i.cbData;
                        if (n) {
                            n = decodeURIComponent(n);
                            try {
                                t = JSON.parse(n).token
                            } catch (s) {}
                        }
                        var o = {
                            "token": e,
                            "regToken": t
                        };
                        p.regConfirm(o, function(e) {
                            var t;
                            "A00000" == e.code ? c.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": "login_scs_3_" + i.selectType,
                                    "isNewUser": !0
                                }
                            }) : "P00223" == e.code ? ((t = o).ErrCb = function() {
                                i.showErr(g),
                                window.MITO && window.MITO.log({
                                    "message": "三方注册确认接口触发验证中心失败",
                                    "data": o
                                })
                            }
                            ,
                            i.verifyCenter.callSDK(e, t, function(e) {
                                e ? i.regConfirm(e) : i.showErr(g)
                            })) : "P00807" == e.code ? (c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 5,
                                    "rpage": "login_scs_3_" + i.selectType
                                }
                            }),
                            c.fire({
                                "type": "setUpdateInfo",
                                "data": {
                                    "updateInfo": !0
                                }
                            })) : (i.showErr(e.msg || g),
                            window.MITO && window.MITO.log({
                                "message": "regConfirm三方注册确认接口失败",
                                "data": e
                            }))
                        })
                    },
                    "showErr": function(e, t) {
                        u.showTip(this.toastPanel, {
                            "tip": e,
                            "btnTip": t || "使用其他账号登录"
                        })
                    },
                    "destroy": function() {
                        window.addEventListener && v && (window.removeEventListener("message", v),
                        v = null)
                    },
                    "sendBlock": function(e, t) {
                        this.block = 1 == e ? "acc_3" : 2 == e ? "QR_3" : "sms_3",
                        d.block({
                            "rpage": this.rpage,
                            "block": this.block
                        }),
                        this.parentPanel = t
                    }
                }
            })
        }
        .call(i, w, i, t)) === undefined || (t.exports = e)
    }
    ).call(this, w(0))
}
, function(e, t, i) {
    t = function(e, t, i) {
        var n = {
            "href": function(e, t) {
                var i = "string" == typeof t ? t : t.url;
                if ("__blank" == e)
                    window.open(i, "_blank");
                else {
                    if ("__window" == e) {
                        t = t.config || "",
                        t = window.open(i, "newwindow", t);
                        return t || alert("请允许弹窗验证窗体。"),
                        t
                    }
                    "__self" == e ? window.location.href = i : i === window.parent.location.href ? window.parent.location.reload() : window.parent.location.href = i
                }
            }
        };
        i.exports = n
    }
    .call(t, i, t, e);
    t === undefined || (e.exports = t)
}
, function(t, i, d) {
    (function(c) {
        var e = function(e, t, i) {
            var n = d(8)
              , s = d(1)
              , a = d(9)
              , o = d(5)
              , r = d(2);
            i.exports = c.Class("thridPartyLoginService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "regConfirm": {
                            "url": o.userRegConfirm
                        }
                    })
                },
                "methods": {
                    "regConfirm": function(e, t) {
                        var i = this
                          , n = r.getConfig()
                          , o = {
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "device_id": n.deviceid || c.cookie.get("QC005") || "",
                            "dfp": "",
                            "fromSDK": n.fromSDK,
                            "ptid": n.ptid,
                            "reg_confirm_token": e.regToken,
                            "sdk_version": n.sdk_version,
                            "serviceId": 2,
                            "token": e.token || ""
                        };
                        a.getDFP(function(e) {
                            o.dfp = e,
                            s.isCors() && (o.qd_sc = c.md5(decodeURIComponent(s.jsonToQuery(o)) + "tS7BdPLU2w0JD89dh")),
                            i._remoteInterface.send({
                                "ifname": "regConfirm",
                                "param": o,
                                "needMd5": !0
                            }, function(e) {
                                t && t(e)
                            })
                        })
                    }
                }
            })
        }
        .call(i, d, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t) {
    e.exports = '<div class="sns-title">其他方式登录</div> <div class="sns-list"> {{each lists as item}} <a href="javascript:;" class="icon-login icon-login__{{item.type}}" data-thirdparty="{{item.type}}"></a> {{/each}} </div>'
}
, function(t, i, b) {
    (function(y) {
        var e = function(e, t, i) {
            var n = b(6)
              , o = b(25)
              , s = b(66)
              , a = new (b(67))
              , r = b(1)
              , c = b(4)
              , d = b(3)
              , l = b(27)
              , u = b(7)
              , p = b(14)
              , h = b(17)
              , g = b(68)
              , f = b(71)
              , m = "smsLoginRegAcodeChange"
              , v = "resetSmsLoginRegBtnStatus";
            i.exports = y.Class("smsLoginRegAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.types = e.types || "",
                    this.verifyCenter = e.verifyCenter,
                    this.secondVerify = e.secondVerify,
                    this.upSmsCodePanel = e.upSmsCodePanel,
                    this.verifyPhonePanel = e.verifyPhonePanel,
                    this.doms = {},
                    this.nameKit = null,
                    this.areaIns = null,
                    this.sendTimer = null,
                    this.isNewUser = !1,
                    this.type = e.type || "login",
                    this.hideBack = e.hideBack || !1,
                    this.bindToken = e.token || "",
                    this.rpage = "login" == this.type ? "passsdk" : "reg" == this.type ? "signup" : "authentication_1",
                    this.block = "login" == this.type ? "psprt_sms" : "reg" == this.type ? "signup_click" : "authentication_1",
                    this.loginSucRpage = e.loginSucRpage
                },
                "methods": {
                    "init": function() {
                        this.render(),
                        this.bindEvent()
                    },
                    "bindEvent": function() {
                        this.initArea(),
                        this.initNameInput(),
                        this.handleCodeInput(),
                        this.handleBtn(),
                        this.handleSendCodeBtn()
                    },
                    "render": function() {
                        var e = this.renderHtml(s, {
                            "type": this.type,
                            "hideBack": this.hideBack,
                            "noBaseLogin": this.types.indexOf(1) < 0
                        });
                        this.panel.innerHTML = e,
                        this.doms = {
                            "loginBtn": this.panel.querySelector('[data-smsLoginReg="loginBtn"]'),
                            "areaPanel": this.panel.querySelector('[data-smsLoginReg="area"]'),
                            "nameErr": this.panel.querySelector('[data-smsLoginReg="nameErr"]'),
                            "nameInput": this.panel.querySelector('[data-smsLoginReg="nameInput"]'),
                            "codeInput": this.panel.querySelector('[data-smsLoginReg="codeInput"]'),
                            "codeErr": this.panel.querySelector('[data-smsLoginReg="codeErr"]'),
                            "sendCodeBtn": this.panel.querySelector('[data-smsLoginReg="sendCode"]'),
                            "baseLoginBtn": this.panel.querySelector('[data-smsLoginReg="baseLogin"]'),
                            "back": this.panel.querySelector('[data-smsLoginReg="back"]')
                        }
                    },
                    "showPanel": function(e) {
                        this.show(e || this.panel)
                    },
                    "initArea": function() {
                        this.areaIns = new o({
                            "panel": this.doms.areaPanel,
                            "fireName": m
                        }),
                        this.areaIns.render()
                    },
                    "handleCodeInput": function() {
                        var t = this
                          , i = this.doms.codeInput;
                        this.codeFocus = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hideCodeErr()
                        }
                        ,
                        r.on(i, "click", this.codeFocus),
                        this.codeBlur = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            0 == i.value.trim().length && (i.value = "")
                        }
                        ,
                        r.on(i, "blur", this.codeBlur),
                        this.checkValidate = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hideCodeErr(),
                            t.setLoginBtnStatus()
                        }
                        ,
                        r.on(i, "keyup", this.checkValidate),
                        r.on(i, "input", this.checkValidate)
                    },
                    "setLoginBtnStatus": function() {
                        var e = this.nameKit.checkNameValidate()
                          , t = 6 == this.doms.codeInput.value.trim().length
                          , i = this.doms.loginBtn;
                        e && t ? d.removeClass(i, "btn-gray") : d.addClass(i, "btn-gray")
                    },
                    "showCodeErr": function(e) {
                        this.doms.codeErr.innerHTML = e,
                        d.removeClass(this.doms.codeErr, "dn")
                    },
                    "hideCodeErr": function() {
                        d.addClass(this.doms.codeErr, "dn")
                    },
                    "initNameInput": function() {
                        var e = this;
                        this.nameKit = new l({
                            "name": this.doms.nameInput,
                            "nameErr": this.doms.nameErr,
                            "zoneKey": this.acode,
                            "fireEnableName": v,
                            "zoneChangeFireName": m
                        }),
                        this.nameKit.init(),
                        c.on(v, function() {
                            e.setLoginBtnStatus()
                        })
                    },
                    "handleBtn": function() {
                        var t, i = this;
                        this.btnCli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            h.isAgree() && ("realname" == i.type ? (u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "authentication_login"
                            }),
                            i.validatePhone()) : (i.authcodeLogin(),
                            u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "login" == i.type ? "sms_login" : "signup_click"
                            })))
                        }
                        ,
                        r.on(this.doms.loginBtn, "click", this.btnCli),
                        this.doms.baseLoginBtn ? (t = function t(e) {
                            e.stopPropagation && e.stopPropagation(),
                            u.click({
                                "rpage": i.rpage,
                                "block": i.block,
                                "rseat": "sms2acc"
                            }),
                            c.fire({
                                "type": "toggleLoginTypes",
                                "data": {
                                    "type": 1
                                }
                            })
                        }
                        ,
                        r.on(this.doms.baseLoginBtn, "click", t)) : this.doms.back && (this.backcli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            i.hide(i.panel),
                            c.fire({
                                "type": "backShow",
                                "data": {
                                    "resetShowPanel": "realname" != i.type,
                                    "resetSize": !0
                                }
                            }),
                            "realname" == i.type && i.unBindEvent()
                        }
                        ,
                        r.on(this.doms.back, "click", this.backcli)),
                        "realname" == this.type && (c.on("realnameErr", function(e) {
                            e.data.msg && i.nameKit.showErrMsg(e.data.msg)
                        }),
                        c.on("realnameClear", function() {
                            i.clearPanel()
                        }))
                    },
                    "authcodeLogin": function(e, t) {
                        var i = this
                          , n = this.doms.loginBtn;
                        !e && d.hasClass(n, "btn-gray") || (n = i.doms.nameInput.value.trim(),
                        e = e || i.doms.codeInput.value.trim(),
                        n = t ? {
                            "uid_enc": t,
                            "authCode": e
                        } : {
                            "phone": n,
                            "acode": i.areaIns.getAcode().acode,
                            "authCode": e
                        },
                        i.hideCodeErr(),
                        i.nameKit.clearErrMsg(),
                        p.number(e) ? a.authcodeLogin(n, function(e) {
                            "A00000" == e.code ? (e.data.isNewUser = i.isNewUser,
                            e.data.rpage = i.isNewUser ? "signup_scs" : "login_scs_sms",
                            e.data.isReg = "reg" == i.type,
                            c.fire({
                                "type": "handleLoginSuc",
                                "data": e.data
                            })) : "P00159" == e.code || "A00006" == e.code || "P00402" == e.code ? i.nameKit.showErrMsg(e.msg) : "P00950" == e.code || "P00951" == e.code ? (i.secondVerify.init({
                                "prePanel": i.panel,
                                "data": e
                            }),
                            d.addClass(i.panel, "dn"),
                            i.secondVerify.showPanel()) : i.showCodeErr(e.msg)
                        }) : i.showCodeErr("验证码不匹配"))
                    },
                    "validatePhone": function(e) {
                        var t, i, n = this, o = this.doms.loginBtn;
                        !e && d.hasClass(o, "btn-gray") || (t = n.doms.nameInput.value.trim(),
                        o = n.doms.codeInput.value.trim(),
                        i = {
                            "phone": t,
                            "acode": n.areaIns.getAcode().acode,
                            "authCode": e || o,
                            "token": n.bindToken
                        },
                        a.validate(i, function(e) {
                            var t;
                            n.hideCodeErr(),
                            n.nameKit.clearErrMsg(),
                            "A00000" == e.code ? (i.panel = n.verifyPhonePanel,
                            i.prePanel = n.panel,
                            i.preRpage = n.rpage,
                            i.preBlock = n.block,
                            i.loginSucRpage = n.loginSucRpage,
                            t = {
                                "verifyPhoneResult": e.data.verifyPhoneResult,
                                "validateData": i
                            },
                            f.identify(t)) : "P00159" == e.code || "A00006" == e.code ? n.nameKit.showErrMsg(e.msg) : n.showCodeErr(e.msg)
                        }))
                    },
                    "handleSendCodeBtn": function() {
                        var t = this
                          , i = this.doms.sendCodeBtn
                          , n = this.doms.nameInput;
                        this.sendCodeCli = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            d.hasClass(i, "send-again") || (0 != (e = n.value.trim()).length ? t.nameKit.checkNameValidate() && h.isAgree() && ("realname" == t.type ? t._sendSmsCode() : t._checkAccount({
                                "phone": e,
                                "acode": t.areaIns.getAcode().acode
                            })) : t.nameKit.showPhoneMsg())
                        }
                        ,
                        r.on(i, "click", this.sendCodeCli)
                    },
                    "_checkAccount": function(e) {
                        var t = this;
                        a.checkAccount(e, function(e) {
                            "A00000" == e.code ? (t.isNewUser = !e.data,
                            t._sendSmsCode()) : "P00404" == e.code || "P00105" == e.code ? t._sendSmsCode() : (t.nameKit.showPhoneMsg(e.msg),
                            d.hasClass(t.doms.codeErr, "dn") || t.hideCodeErr())
                        })
                    },
                    "_sendSmsCode": function(e) {
                        var i = this
                          , n = {
                            "phone": this.doms.nameInput.value.trim(),
                            "acode": i.areaIns.getAcode().acode,
                            "token": e,
                            "requestType": "realname" == i.type ? 26 : 22
                        };
                        a.secureSendCode(n, function(e) {
                            var t;
                            "A00000" == e.code ? i._ecountDown() : "P00223" == e.code ? (clearInterval(i.sendTimer),
                            (t = n).ErrCb = function() {
                                i.nameKit.showPhoneMsg("请稍后重试"),
                                window.MITO && window.MITO.log({
                                    "message": "短信登录注册：发短信接口触发验证中心失败",
                                    "data": n
                                })
                            }
                            ,
                            i.verifyCenter.callSDK(e, t, function(e) {
                                e ? i._sendSmsCode(e) : i.nameKit.showPhoneMsg("请稍后重试")
                            })) : "P00174" == e.code ? i.showSmsLoginUp() : (i.nameKit.showPhoneMsg(e.msg),
                            d.hasClass(i.doms.codeErr, "dn") || i.hideCodeErr())
                        })
                    },
                    "_ecountDown": function() {
                        var e = this
                          , t = 58
                          , i = this.doms.sendCodeBtn;
                        clearInterval(this.sendTimer),
                        d.addClass(i, "send-again"),
                        i.innerHTML = "重新获取验证码(59秒)",
                        this.sendTimer = setInterval(function() {
                            return i.innerHTML = "重新获取验证码(" + t + "秒)",
                            0 === t ? (clearInterval(e.sendTimer),
                            d.removeClass(i, "send-again"),
                            !(i.innerHTML = "获取验证码")) : void t--
                        }, 1e3)
                    },
                    "showSmsLoginUp": function(e) {
                        var t, i = this, n = "";
                        e && e.prePanel && (t = e.prePanel,
                        n = e.loginData.uid_enc),
                        this.upSmsCodeIns || (this.upSmsCodeIns = new g({
                            "panel": this.upSmsCodePanel,
                            "type": this.type
                        }));
                        var o = function o(e) {
                            "realname" == i.type ? i.validatePhone(e) : i.authcodeLogin(e, n)
                        };
                        this.upSmsCodeIns.init({
                            "uid_enc": n,
                            "prePanel": t || this.panel,
                            "phone": this.doms.nameInput.value.trim() || e.loginData.phone,
                            "acode": this.areaIns.getAcode().acode || e.loginData.area_code,
                            "aname": this.areaIns.getAcode().name,
                            "requestType": "realname" == this.type ? 26 : 22,
                            "cb": o
                        }),
                        this.hide(this.panel)
                    },
                    "unBindEvent": function() {
                        clearInterval(this.sendTimer),
                        r.un(this.doms.codeInput, "click", this.codeFocus),
                        r.un(this.doms.codeInput, "blur", this.codeBlur),
                        r.un(this.doms.codeInput, "keyup", this.checkValidate),
                        r.un(this.doms.codeInput, "input", this.checkValidate),
                        r.un(this.doms.loginBtn, "click", this.btnCli),
                        r.un(this.doms.back, "click", this.backcli),
                        r.un(this.doms.sendCodeBtn, "click", this.sendCodeCli),
                        this.codeFocus = null,
                        this.codeBlur = null,
                        this.checkValidate = null,
                        this.btnCli = null,
                        this.backcli = null,
                        this.sendCodeCli = null
                    },
                    "resetAcode": function(e, t) {
                        this.areaIns.resetAcode(e, t)
                    },
                    "clearPanel": function() {
                        clearInterval(this.sendTimer);
                        var e = this.doms.sendCodeBtn;
                        d.removeClass(e, "send-again"),
                        e.innerHTML = "获取验证码",
                        this.doms.codeInput.value = "",
                        d.addClass(this.doms.codeErr, "dn"),
                        this.doms.nameInput.value = "",
                        d.addClass(this.doms.nameErr, "dn"),
                        d.addClass(this.doms.loginBtn, "btn-gray")
                    }
                }
            })
        }
        .call(i, b, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, b(0))
}
, function(e, t) {
    e.exports = '{{if type == \'login\'}} <div class="qy-login-tab {{if noBaseLogin == true}}single-tab{{/if}}"> <a href="javascript:;" data-smsLoginReg="baseLogin" class="{{if noBaseLogin == true}}dn{{/if}}">密码登录</a> <a href="javascript:;" class="selected">短信登录<span class="tab-line"></span></a> </div> {{else}} <div class="qy-login-title"> <span class="back-link {{if hideBack==true}}dn{{/if}}" data-smsLoginReg="back"> <i class="iconfont icon-back"></i>返回 </span> <div class="title-content no-margin"> <div class="major-desc"> <p>{{if type == \'reg\'}}注册账号{{else}}安全验证{{/if}}</p> </div> <div class="minor-desc"> <p>{{if type == \'realname\'}}为了您的账号安全，请绑定一个手机号{{/if}}</p> </div> </div> </div> {{/if}} <div class="qy-login-field"> <div class="field-item"> <div class="field-error dn" data-smsLoginReg="nameErr"></div> <div class="field-country-code" data-smsLoginReg="area"></div> <div class="field-account"> <input type="text" class="input-box" data-smsLoginReg="nameInput" maxlength="20" placeholder="请输入手机号"> </div> </div> <div class="field-item"> <div class="field-error dn" data-smsLoginReg="codeErr">验证码错误</div> <div class="field-confirm-code"> <input type="text" class="input-box" data-smsLoginReg="codeInput" maxlength="6" placeholder="请输入验证码"> <span class="send-code" data-smsLoginReg="sendCode">获取验证码</span> </div> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major btn-gray" data-smsLoginReg="loginBtn">{{if type == \'reg\'}}注册{{else}}登录{{/if}} </div> </div> <div class="btn-common btn-minor dn">绑定其他手机号</div> </div>'
}
, function(t, i, l) {
    (function(d) {
        var e = function(e, t, i) {
            var n = l(8)
              , a = l(16)
              , r = l(9)
              , o = l(1)
              , s = l(5)
              , c = l(2);
            i.exports = d.Class("smsLoginService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "secureSendCode": {
                            "url": s.secureSendCode
                        },
                        "authcodeLogin": {
                            "url": s.authcodeLogin
                        },
                        "validate": {
                            "url": s.validate
                        },
                        "checkAccount": {
                            "url": s.checkAccount
                        }
                    })
                },
                "methods": {
                    "checkAccount": function(e, t) {
                        var i = c.getConfig()
                          , i = {
                            "__NEW": 1,
                            "account": e.phone,
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode,
                            "device_id": i.deviceid || "",
                            "dfp": "",
                            "fromSDK": i.fromSDK,
                            "lang": "",
                            "ptid": i.ptid,
                            "sdk_version": i.sdk_version
                        };
                        this.cmd5x(i, "checkAccount", t, !1)
                    },
                    "secureSendCode": function(e, t) {
                        var i = c.getConfig()
                          , n = {
                            "__NEW": 1,
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode,
                            "cellphoneNumber": e.phone,
                            "device_id": i.deviceid || "",
                            "dfp": ""
                        };
                        e.token && (n.env_token = e.token),
                        n.fromSDK = i.fromSDK,
                        n.lang = "",
                        n.nr = 1,
                        n.ptid = i.ptid,
                        n.requestType = e.requestType,
                        n.sdk_version = i.sdk_version,
                        n.serviceId = 2,
                        this.cmd5x(n, "secureSendCode", t, !0)
                    },
                    "authcodeLogin": function(e, t) {
                        var i = c.getConfig()
                          , n = {
                            "__NEW": 1,
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode || "",
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone || "",
                            "device_id": i.deviceid || "",
                            "dfp": ""
                        };
                        n.fromSDK = i.fromSDK,
                        n.lang = "",
                        n.ptid = i.ptid,
                        n.requestType = 22,
                        n.sdk_version = i.sdk_version,
                        n.serviceId = 2,
                        e.uid_enc && (n.uid_enc = e.uid_enc),
                        this.cmd5x(n, "authcodeLogin", t, !1)
                    },
                    "validate": function(e, t) {
                        var i = c.getConfig()
                          , e = {
                            "agenttype": i.agenttype,
                            "app_version": i.appVersion || "",
                            "area_code": e.acode || "",
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone || "",
                            "device_id": i.deviceid || "",
                            "fromSDK": i.fromSDK,
                            "lang": "",
                            "ptid": i.ptid,
                            "requestType": 26,
                            "sdk_version": i.sdk_version,
                            "serviceId": 2,
                            "token": e.token
                        };
                        this.interfaceSend(e, "validate", t)
                    },
                    "cmd5x": function(t, i, n, o) {
                        var s = this;
                        r.getDFP(function(e) {
                            t.dfp = e,
                            t && o && t.cellphoneNumber && (t.cellphoneNumber = a.rsaFun(t.cellphoneNumber)),
                            s.interfaceSend(t, i, n)
                        })
                    },
                    "interfaceSend": function(e, t, i) {
                        o.isCors() && (e.qd_sc = d.md5(decodeURIComponent(o.jsonToQuery(e)) + "tS7BdPLU2w0JD89dh")),
                        this._remoteInterface.send({
                            "ifname": t,
                            "param": e,
                            "needMd5": !0
                        }, function(e) {
                            i && i(e)
                        })
                    }
                }
            })
        }
        .call(i, l, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, l(0))
}
, function(t, i, d) {
    (function(c) {
        var e = function(e, t, i) {
            var n = d(6)
              , o = d(69)
              , s = new (d(70))
              , a = d(1)
              , r = d(4);
            i.exports = c.Class("upSmsCodeAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.type = e.type,
                    this.rpage = "upsms"
                },
                "methods": {
                    "init": function(e) {
                        this.config = e,
                        this.doms = {},
                        this.upToken = "",
                        this.getUpSmsCode(),
                        r.fire({
                            "type": "toggleSpecialPanel",
                            "data": !1
                        })
                    },
                    "bindEvent": function() {
                        var t = this;
                        this.btnClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.upStatusTimer()
                        }
                        ,
                        a.on(this.doms.btn, "click", this.btnClick),
                        this.backClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.hidePanel(!0)
                        }
                        ,
                        a.on(this.doms.back, "click", this.backClick),
                        a.on(this.doms.modify, "click", this.backClick),
                        this.refreshClick = function(e) {
                            e.stopPropagation && e.stopPropagation(),
                            t.getUpSmsCode(!0),
                            t.hide(t.doms.timeoutCover)
                        }
                        ,
                        a.on(this.doms.refresh, "click", this.refreshClick)
                    },
                    "hidePanel": function(e) {
                        this.clearResultTimer(),
                        this.unBindEvent(),
                        !e && "secondVerify" === this.type || (this.hide(this.panel),
                        e = "login" === this.type || "secondVerify" !== this.type && 3,
                        r.fire({
                            "type": "toggleSpecialPanel",
                            "data": e
                        }),
                        this.show(this.config.prePanel))
                    },
                    "unBindEvent": function() {
                        a.un(this.doms.btn, "click", this.btnClick),
                        a.un(this.doms.back, "click", this.backClick),
                        a.un(this.doms.modify, "click", this.backClick),
                        a.un(this.doms.refresh, "click", this.refreshClick),
                        this.btnClick = null,
                        this.backClick = null,
                        this.refreshClick = null
                    },
                    "getUpSmsCode": function(t) {
                        var i = this
                          , n = {
                            "acode": this.config.acode,
                            "phone": this.config.phone,
                            "requestType": this.config.requestType
                        };
                        this.config.uid_enc && (n.uid_enc = this.config.uid_enc),
                        s.upBizInfo(n, function(e) {
                            "A00000" == e.code && e.data ? (i.upToken = e.data.upToken,
                            t ? (i.doms.serviceNum.innerHTML = e.data.serviceNum,
                            i.doms.content.innerHTML = e.data.content,
                            i.doms.btn.innerHTML = "我已经发送了") : i.render(e.data),
                            i.timeOutControl()) : (i.showCover("系统异常", "重新发送"),
                            window.MITO && window.MITO.log({
                                "message": "up_biz_info.action接口调用失败",
                                "data": n
                            }))
                        })
                    },
                    "render": function(e) {
                        e = this.renderHtml(o, {
                            "aname": this.config.aname,
                            "phone": this.config.phone,
                            "content": e.content,
                            "serviceNum": e.serviceNum
                        });
                        this.panel.innerHTML = e,
                        this.show(this.panel),
                        this.doms = {
                            "modify": this.panel.querySelector('[data-upsmscode="modify"]'),
                            "btn": this.panel.querySelector('[data-upsmscode="btn"]'),
                            "back": this.panel.querySelector('[data-upsmscode="back"]'),
                            "timeoutCover": this.panel.querySelector('[data-upsmscode="timeout"]'),
                            "content": this.panel.querySelector('[data-upsmscode="content"]'),
                            "serviceNum": this.panel.querySelector('[data-upsmscode="serviceNum"]'),
                            "timeoutTitle": this.panel.querySelector('[data-upsmscode="timeoutTitle"]'),
                            "refresh": this.panel.querySelector('[data-upsmscode="refresh"]')
                        },
                        this.bindEvent()
                    },
                    "timeOutControl": function() {
                        var e = this;
                        e.statusTimeout && clearTimeout(e.statusTimeout),
                        e.statusTimeout = setTimeout(function() {
                            e.showCover("已超时，请刷新", "点击刷新")
                        }, 3e5)
                    },
                    "showCover": function(e, t) {
                        this.clearResultTimer(),
                        this.doms.timeoutTitle.innerHTML = e,
                        this.doms.refresh.innerHTML = t,
                        this.show(this.doms.timeoutCover)
                    },
                    "upStatusTimer": function() {
                        var e = this
                          , t = 60;
                        this.statusTimer && clearInterval(this.statusTimer),
                        this.doms.btn.innerHTML = "发送中...",
                        this.statusTimer = setInterval(function() {
                            0 === (t -= 3) ? e.showCover("我们没能收到您的短信", "重新发送") : e.autoCheckResult()
                        }, 3e3)
                    },
                    "clearResultTimer": function() {
                        this.statusTimer && (clearInterval(this.statusTimer),
                        this.statusTimer = null),
                        this.statusTimeout && (clearTimeout(this.statusTimeout),
                        this.statusTimeout = null),
                        this.upToken = ""
                    },
                    "autoCheckResult": function() {
                        var t = this
                          , e = {
                            "acode": this.config.acode,
                            "phone": this.config.phone,
                            "requestType": this.config.requestType,
                            "upToken": this.upToken
                        };
                        s.upBizStatus(e, function(e) {
                            "A00000" == e.code && (t.hidePanel(),
                            t.config.cb(e.data.authCode))
                        })
                    }
                }
            })
        }
        .call(i, d, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(e, t) {
    e.exports = '<div class="qy-login-title"> <span class="back-link" data-upsmscode="back"> <i class="iconfont icon-back"></i>返回 </span> <div class="title-content"> <div class="major-desc"> <p>编辑短信</p> </div> <div class="minor-desc"> <p>您接收短信验证码次数已达到上限，<br/>请发送短信进行验证</p> </div> </div> </div> <div class="qy-login-msg"> <div class="msg-item"> <span class="msg-name">{{aname}}</span> <span class="msg-info">{{phone}}</span> <a href="javascript:;" class="theme-color" data-upsmscode="modify">修改</a> </div> <div class="msg-item"> <span class="msg-name">请编辑短信</span> <span class="msg-info" data-upsmscode="content">{{content}}</span> </div> <div class="msg-item"> <span class="msg-name">发送到号码</span> <span class="msg-info" data-upsmscode="serviceNum">{{serviceNum}}</span> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-upsmscode="btn">我已经发送了</div> </div> </div> <div class="qy-login-cover dn" data-upsmscode="timeout"> <div class="qy-cover-align"> <div class="cover-content"> <div class="qy-login-warning"> <i class="iconfont icon-warning"></i> <div class="warning-title" data-upsmscode="timeoutTitle">已超时，请刷新</div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-upsmscode="refresh">点击刷新</div> </div> </div> </div> </div> </div> </div>'
}
, function(t, i, l) {
    (function(d) {
        var e = function(e, t, i) {
            var n = l(8)
              , o = l(16)
              , s = l(9)
              , a = l(1)
              , r = l(5)
              , c = l(2);
            i.exports = d.Class("upSmsCodeService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "upBizInfo": {
                            "url": r.upBizInfo
                        },
                        "upBizStatus": {
                            "url": r.upBizStatus
                        }
                    })
                },
                "methods": {
                    "baseData": function(e) {
                        var t = c.getConfig()
                          , t = {
                            "__NEW": 1,
                            "agenttype": t.agenttype,
                            "app_version": t.appVersion || "",
                            "area_code": e.acode,
                            "cellphoneNumber": o.rsaFun(e.phone),
                            "device_id": t.deviceid || d.cookie.get("QC005") || "",
                            "dfp": "",
                            "fromSDK": t.fromSDK,
                            "lang": "",
                            "ptid": t.ptid,
                            "requestType": e.requestType || 22,
                            "sdk_version": t.sdk_version,
                            "serviceId": 2
                        };
                        return e.upToken && (t.token = e.upToken),
                        e.uid_enc && (t.uid_enc = e.uid_enc),
                        t
                    },
                    "upBizInfo": function(e, t) {
                        e = this.baseData(e),
                        this.cmd5x(e, "upBizInfo", t)
                    },
                    "upBizStatus": function(e, t) {
                        e = this.baseData(e),
                        this.cmd5x(e, "upBizStatus", t)
                    },
                    "cmd5x": function(t, i, n) {
                        var o = this;
                        s.getDFP(function(e) {
                            t.dfp = e,
                            a.isCors() && (t.qd_sc = d.md5(decodeURIComponent(a.jsonToQuery(t)) + "tS7BdPLU2w0JD89dh")),
                            o._remoteInterface.send({
                                "ifname": i,
                                "param": t,
                                "needMd5": !0
                            }, function(e) {
                                n && n(e)
                            })
                        })
                    }
                }
            })
        }
        .call(i, l, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, l(0))
}
, function(t, i, n) {
    (function(f) {
        var e = function(e, t, i) {
            var c = n(10)
              , d = n(1)
              , l = n(4)
              , u = n(3)
              , p = n(7)
              , h = n(72)
              , g = new (n(73));
            i.exports = {
                "identify": function(e) {
                    var t = e.verifyPhoneResult
                      , i = e.validateData;
                    "1" == t.newUser ? (e = "1" == t.toBind,
                    this.bindLogin(i, e)) : "1" == t.toBind ? this.directBindPhone(i) : this.verifyAccount(t.name, i)
                },
                "directBindPhone": function(t) {
                    var i = this;
                    t.requestType = 26,
                    g.directBindPhone(t, function(e) {
                        "A00000" == e.code ? l.fire({
                            "type": "handleLoginSuc",
                            "data": {
                                "rpage": t.loginSucRpage
                            }
                        }) : i.showErrPanel(e.msg)
                    })
                },
                "verifyAccount": function(e, t) {
                    var i = this
                      , e = c.compile(h)({
                        "phone": t.phone,
                        "account": e
                    });
                    t.panel.innerHTML = e,
                    u.removeClass(t.panel, "dn"),
                    u.addClass(t.prePanel, "dn");
                    var n = {
                        "rpage": "authentication_2",
                        "block": "authentication_2"
                    };
                    p.block(n),
                    l.fire({
                        "type": "toggleSpecialPanel",
                        "data": !1
                    });
                    var o = t.panel.querySelector('[data-bindphone="login"]')
                      , s = function s(e) {
                        e.stopPropagation && e.stopPropagation();
                        e = f.extend({
                            "rseat": "authentication_continue"
                        }, n);
                        p.click(e),
                        g.verifyAccount(t, function(e) {
                            "A00000" == e.code ? l.fire({
                                "type": "handleLoginSuc",
                                "data": {
                                    "rpage": t.loginSucRpage
                                }
                            }) : (d.un(o, "click", s),
                            d.un(a, "click", r),
                            u.addClass(t.panel, "dn"),
                            u.removeClass(t.prePanel, "dn"),
                            i.showErrPanel(e.msg))
                        })
                    };
                    d.on(o, "click", s);
                    var a = t.panel.querySelector('[data-bindphone="back"]')
                      , r = function r(e) {
                        e.stopPropagation && e.stopPropagation(),
                        d.un(o, "click", s),
                        d.un(a, "click", r);
                        e = f.extend({
                            "rseat": "authentication_another"
                        }, n);
                        p.click(e),
                        l.fire({
                            "type": "toggleSpecialPanel",
                            "data": "3"
                        }),
                        l.fire({
                            "type": "realnameClear"
                        }),
                        u.addClass(t.panel, "dn"),
                        u.removeClass(t.prePanel, "dn"),
                        p.block({
                            "rpage": t.preRpage,
                            "block": t.preBlock
                        })
                    };
                    d.on(a, "click", r)
                },
                "bindLogin": function(t, i) {
                    var n = this;
                    g.bindLogin(t, function(e) {
                        "A00000" == e.code ? l.fire({
                            "type": "handleLoginSuc",
                            "data": {
                                "rpage": t.loginSucRpage,
                                "isNewUser": i
                            }
                        }) : n.showErrPanel(e.msg)
                    })
                },
                "showErrPanel": function(e) {
                    l.fire({
                        "type": "realnameErr",
                        "data": {
                            "msg": e
                        }
                    })
                }
            }
        }
        .call(i, n, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, n(0))
}
, function(e, t) {
    e.exports = '<div class="qy-login-title"> <div class="title-content align-left"> <div class="major-desc"> <p>安全验证</p> </div> <div class="minor-desc"> <p> 手机号（<span>{{phone}}</span>）已被{{account}}账号绑定，仅可作为本账号的登录身份验证，不能绑定本账号。 </p> </div> </div> </div> <div class="qy-login-btn"> <div class="btn-common"> <div class="btn-inner btn-major" data-bindphone="login">继续登录</div> </div> <div class="btn-common btn-minor" data-bindphone="back">绑定其他手机号</div> </div>'
}
, function(t, i, d) {
    (function(c) {
        var e = function(e, t, i) {
            var n = d(8)
              , s = d(1)
              , a = d(9)
              , o = d(5)
              , r = d(2);
            i.exports = c.Class("bindPhoneService", {
                "construct": function() {
                    this._remoteInterface = new n({
                        "directBindPhone": {
                            "url": o.directBindPhone
                        },
                        "verifyAccount": {
                            "url": o.verifyAccount
                        },
                        "bindLogin": {
                            "url": o.bindLogin
                        }
                    })
                },
                "methods": {
                    "baseData": function(e, t, i) {
                        var n = r.getConfig()
                          , o = {
                            "agenttype": n.agenttype,
                            "app_version": n.appVersion || "",
                            "area_code": e.acode,
                            "authCode": e.authCode,
                            "cellphoneNumber": e.phone,
                            "device_id": n.deviceid || "",
                            "dfp": ""
                        };
                        o.fromSDK = n.fromSDK,
                        o.lang = "",
                        o.ptid = n.ptid,
                        e.requestType && (o.requestType = e.requestType),
                        o.sdk_version = n.sdk_version,
                        o.serviceId = 2,
                        e.token && (o.token = e.token),
                        a.getDFP(function(e) {
                            o.dfp = e,
                            t && s.isCors() && (o.qd_sc = c.md5(decodeURIComponent(s.jsonToQuery(o)) + "tS7BdPLU2w0JD89dh")),
                            i(o)
                        })
                    },
                    "directBindPhone": function(e, t) {
                        var i = this;
                        this.baseData(e, !1, function(e) {
                            i._send("directBindPhone", e, t, !1)
                        })
                    },
                    "verifyAccount": function(e, t) {
                        var i = this;
                        this.baseData(e, !0, function(e) {
                            i._send("verifyAccount", e, t, !0)
                        })
                    },
                    "bindLogin": function(e, t) {
                        var i = this;
                        this.baseData(e, !0, function(e) {
                            i._send("bindLogin", e, t, !0)
                        })
                    },
                    "_send": function(e, t, i, n) {
                        this._remoteInterface.send({
                            "ifname": e,
                            "param": t,
                            "needMd5": n
                        }, function(e) {
                            i && i(e)
                        })
                    }
                }
            })
        }
        .call(i, d, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, d(0))
}
, function(t, i, o) {
    (function(r) {
        var e = function(e, t, i) {
            var n = o(2)
              , a = o(3);
            i.exports = r.Class("verifyCenterAction", {
                "construct": function(e) {
                    this._instance = null,
                    this.timer = null,
                    this.slideCover = e.slideCover,
                    this.slidePanel = e.slidePanel
                },
                "methods": {
                    "init": function(e) {
                        window.VerifyCenter ? e && "function" == typeof e && e() : (r.load("css", "//security.iqiyi.com/static/v2/verifycenter/css/verifycenter.css"),
                        this.isLoadSuc(e),
                        r.load("js", "//security.iqiyi.com/static/v2/verifycenter/js/verifycenter.js", function() {
                            window.VerifyCenter && e && "function" == typeof e && e()
                        }))
                    },
                    "callSDK": function(t, i, n) {
                        var o = this;
                        this.init(function() {
                            var e;
                            window.VerifyCenter && t.data && t.data.data ? (e = t.data.data,
                            i.token = e.token,
                            3 == e.auth_type && 2 == e.level && 1 == e.secure_page ? o.slideCode(i, n) : 11 == e.auth_type ? o.autoVerify(i, n) : i.ErrCb()) : i.ErrCb()
                        })
                    },
                    "isLoadSuc": function(e) {
                        var t = this;
                        clearTimeout(this.timer),
                        this.timer = setTimeout(function() {
                            clearTimeout(t.timer),
                            window.__newVC || e()
                        }, 5e3)
                    },
                    "slideCode": function(e, t) {
                        var i = this
                          , e = this._getCommonParams(e)
                          , e = r.extend({
                            "callback": function(e) {
                                "A00000" === e.code && (i._instance && (i._instance.remove(),
                                i._instance = null),
                                t(e.token),
                                a.addClass(i.slideCover, "dn"))
                            },
                            "captchaType": "slidecode"
                        }, e);
                        this._instance = new VerifyCenter(e)
                    },
                    "autoVerify": function(e, n) {
                        var o = this
                          , t = this._getCommonParams(e)
                          , s = this.slidePanel
                          , t = r.extend({
                            "callback": function(e) {
                                if ("A00000" === e.code) {
                                    o._instance && (o._instance.remove(),
                                    o._instance = null);
                                    try {
                                        var t = s.children && s.children[0];
                                        s.removeChild(t)
                                    } catch (i) {}
                                    e = e.token || e.data.initData.token;
                                    n(e),
                                    a.addClass(o.slideCover, "dn")
                                }
                            },
                            "triggerElement": e.triggerElement,
                            "bindEvent": "click",
                            "captchaType": "auto",
                            "isShowModalCloseBtn": !0,
                            "ignoreJsBridge": !0,
                            "reportImmediate": !0
                        }, t);
                        this._instance = new VerifyCenter(t)
                    },
                    "_getCommonParams": function(e) {
                        var t = n.getConfig()
                          , i = this
                          , t = {
                            "wrapper": this.slidePanel,
                            "type": !1,
                            "initErrorCallback": function() {
                                e.errCb && e.errCb()
                            },
                            "DomLoadCallback": function() {
                                a.removeClass(i.slideCover, "dn"),
                                i.slidePanel.style.display = "block",
                                e.loadCb && e.loadCb()
                            },
                            "ptid": t.ptid,
                            "agentType": t.agenttype,
                            "deviceId": t.deviceid || r.cookie.get("QC005") || "",
                            "clientVersion": 1,
                            "phoneNumber": e.phone,
                            "areaCode": "" + e.acode || "86",
                            "requestType": e.requestType,
                            "isShowModalCloseBtn": !0,
                            "dfp": t.dfp || window.dfp && dfp.tryGetFingerPrint && dfp.tryGetFingerPrint() || "",
                            "token": e.token,
                            "width": 290,
                            "height": 170
                        };
                        return this._instance && this._instance.remove(),
                        t
                    }
                }
            })
        }
        .call(i, o, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, o(0))
}
, function(t, i, f) {
    (function(g) {
        var e = function(e, t, i) {
            var n = f(6)
              , o = (f(10),
            f(1))
              , s = (f(3),
            f(4))
              , a = f(7)
              , r = f(76)
              , s = f(4)
              , c = f(77)
              , d = f(13).getDomain()
              , l = {
                "P00950": "safeVerify",
                "P00951": "togglePanel"
            }
              , u = "viplgctrl_upsmssuc"
              , p = "viplgctrl_qqsuc"
              , h = "viplgctrl_wxsuc";
            i.exports = g.Class("secondVerifyAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.businessPanel = e.businessPanel,
                    this.sdkPanel = e.sdkPanel,
                    this.verifyPingbackType = 0,
                    this.isShow = !1
                },
                "methods": {
                    "init": function(e) {
                        this.prePanel = e.prePanel,
                        this.loginInfo = e.data,
                        s.fire({
                            "type": "toggleSpecialPanel",
                            "data": !1
                        }),
                        this.setTimestamp(),
                        this.render(),
                        this.bindEvent()
                    },
                    "render": function() {
                        this.isShow = !0,
                        "safeVerify" == l[this.loginInfo.code] ? a.block({
                            "t": 22,
                            "rpage": "viplgctrl"
                        }) : a.block({
                            "t": 22,
                            "rpage": "viplgctrl_fbd"
                        });
                        var e = this.renderHtml(r, {
                            "showPanel": l[this.loginInfo.code],
                            "msg": this.loginInfo.msg
                        });
                        this.panel.innerHTML = e,
                        this.doms = {
                            "togglePanel": this.panel.querySelector('[data-secondVerify="togglePanel"]'),
                            "toggleAccountBtn": this.panel.querySelector('[data-secondVerify="toggleAccountBtn"]'),
                            "toggleAccount": this.panel.querySelector('[data-secondVerify="toggleAccount"]'),
                            "safeVerify": this.panel.querySelector('[data-secondVerify="safeVerify"]'),
                            "back": this.panel.querySelector('[data-secondVerify="back"]'),
                            "mainDevice": this.panel.querySelector('[data-secondVerify="mainDevice"]'),
                            "smsVerify": this.panel.querySelector('[data-secondVerify="smsVerify"]'),
                            "qrcode": this.panel.querySelector('[data-secondVerify="qrcode"]'),
                            "thirdList": this.panel.querySelector('[data-secondVerify="thirdList"]')
                        }
                    },
                    "showPanel": function() {
                        this.show(this.panel)
                    },
                    "bindEvent": function() {
                        var e = this;
                        o.on(e.doms.toggleAccountBtn, "click", e.toggleAccount.bind(this)),
                        o.on(e.doms.toggleAccount, "click", e.toggleAccount.bind(this)),
                        o.on(e.doms.back, "click", e.toggleAccount.bind(this)),
                        o.on(e.doms.mainDevice, "click", e.mainDeviceCallBack.bind(this)),
                        o.on(e.doms.smsVerify, "click", e.upSmsCode.bind(this)),
                        o.on(e.doms.thirdList, "click", e.thirdLogin.bind(this))
                    },
                    "back": function() {
                        this.show(this.prePanel),
                        this.hide(this.panel)
                    },
                    "mainDeviceCallBack": function() {
                        s.fire({
                            "type": "callScanLogin",
                            "data": {
                                "loginData": this.loginInfo.data,
                                "type": "secondVerify"
                            }
                        }),
                        this.hide(this.panel)
                    },
                    "upSmsCode": function() {
                        this.verifyPingbackType = u,
                        s.fire({
                            "type": "callUpSmsCode",
                            "data": {
                                "loginData": this.loginInfo.data,
                                "type": "secondVerify",
                                "prePanel": this.panel
                            }
                        }),
                        a.click({
                            "block": "viplgctrl_upsmsclick"
                        }),
                        this.hide(this.panel)
                    },
                    "thirdLogin": function(e) {
                        e.stopPropagation && e.stopPropagation();
                        e = e.target || e.srcElement,
                        e = e && e.getAttribute("data-secondVerify");
                        "qq" === e ? (this.verifyPingbackType = p,
                        a.click({
                            "block": "viplgctrl_qqclick"
                        })) : (this.verifyPingbackType = h,
                        a.click({
                            "block": "viplgctrl_wxclick"
                        })),
                        s.fire({
                            "type": "callThirdLogin",
                            "data": {
                                "type": e,
                                "prePanel": this.panel
                            }
                        })
                    },
                    "toggleAccount": function(e) {
                        "toggleAccount" === e.target.dataset.secondverify && a.click({
                            "block": "viplgctrl_lg"
                        }),
                        s.fire({
                            "type": "backShow",
                            "data": {
                                "resetShowPanel": !0
                            }
                        }),
                        this.hide(this.panel)
                    },
                    "initVipBusiness": function() {
                        this.business = new c({
                            "panel": this.businessPanel,
                            "sdkPanel": this.sdkPanel
                        }),
                        this.business.renderVip()
                    },
                    "setTimestamp": function() {
                        var e = (e = g.cookie.get("QC160")) ? JSON.parse(e) : {}
                          , t = this.loginInfo.data.uid;
                        new Date;
                        "P00950" !== this.loginInfo.code && "P00951" !== this.loginInfo.code || (e.secondVerify = {
                            "uid": t,
                            "timestamp": +new Date
                        },
                        g.cookie.set("QC160", JSON.stringify(e), {
                            "expires": 31536e6,
                            "path": "/",
                            "domain": d
                        }),
                        s.fire({
                            "type": "updateLocalCookie",
                            "data": e
                        }))
                    },
                    "isInitVipBusiness": function() {
                        var e = (e = g.cookie.get("QC160")) ? JSON.parse(e) : {}
                          , t = g.cookie.get("P00003")
                          , i = +new Date;
                        0 !== this.verifyPingbackType && a.block({
                            "t": 22,
                            "rpage": this.verifyPingbackType
                        });
                        try {
                            return !!(this.isShow && e.secondVerify && e.secondVerify.uid != t && e.secondVerify.timestamp - i < 6048e5) && (this.initVipBusiness(),
                            !0)
                        } catch (n) {
                            console.log(n)
                        }
                    }
                }
            })
        }
        .call(i, f, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, f(0))
}
, function(e, t) {
    e.exports = '{{if showPanel == \'togglePanel\'}} <div class="qy-login-secverify" data-secondVerify="togglePanel"> <img class="verify-img" src="//www.iqiyipic.com/common/fix/second-verify.png" alt=""/> <div class="info-text">{{msg}}</div> <div class="qy-login-btn"> <div class="btn-common" data-secondVerify="toggleAccountBtn"> <div class="btn-inner btn-major">切换账号登录</div> </div> </div> </div> {{else if showPanel == \'safeVerify\'}} <div class="qy-login-safe-verify" data-secondVerify="safeVerify"> <div class="qy-login-title"> <span class="back-link" data-secondVerify="back"> <i class="iconfont icon-back"></i>返回 </span> <div class="title-content align-left"> <div class="major-desc"> <p>安全校验</p> </div> <div class="minor-desc minor-desc-common"> <p>{{msg}}</p> </div> </div> </div> <div class="qy-login-btn"> <div class="btn-common" data-secondVerify="mainDevice"> <div class="btn-inner btn-major">主设备扫码验证</div> </div> <div class="btn-common sns-verify" data-secondVerify="smsVerify"> <div class="btn-inner btn-major">发送短信进行验证</div> </div> </div> <div class="qy-login-sns"> <div class="sns-title">第三方授权验证</div> <div class="sns-list" data-secondVerify="thirdList"> <a href="javascript:;" data-secondVerify="weixin" class="icon-login icon-login__weixin"></a> <a href="javascript:;" data-secondVerify="qq" class="icon-login icon-login__qq"></a> </div> </div> <div class="toggle-account" data-secondVerify="toggleAccount"> 切换账号登录 </div> </div> {{/if}} '
}
, function(t, i, p) {
    (function(u) {
        var e = function(e, t, i) {
            var n = p(6)
              , o = (p(10),
            p(1))
              , s = (p(3),
            p(4))
              , a = new (p(78))
              , r = p(79)
              , s = p(4)
              , c = p(2)
              , d = p(7)
              , l = "9e30b3f3aed7e090";
            i.exports = u.Class("businessAction", {
                "extend": n,
                "construct": function(e) {
                    this.panel = e.panel,
                    this.sdkPanel = e.sdkPanel
                },
                "methods": {
                    "renderVip": function(e) {
                        var t = c.getConfig()
                          , i = this
                          , n = {
                            "interfaceCode": l,
                            "P00001": u.cookie.get("P00001"),
                            "platform": "pca" == t.business ? "967c46be75eaaa1e" : "uwp-was" === t.business ? "a71e8c85906aa6eb" : "b6c13e26323c537d",
                            "qyid": t.deviceid || u.cookie.get("QC005") || "",
                            "lang": "zh_cn",
                            "app_lm": "cn"
                        };
                        this.getVipRecommendInfo(n, function(e) {
                            0 < e.length && e[0].interfaceData && "A00000" === e[0].interfaceData.respCode ? (i.vipBusinessData = e[0].interfaceData.respData.covers[0],
                            i.strategyCode = e[0].interfaceData.strategyCode,
                            e = i.renderHtml(r, {
                                "business": "vip",
                                "data": i.vipBusinessData.detail
                            }),
                            i.panel.innerHTML = e,
                            i.doms = {
                                "close": i.panel.querySelector('[data-login-business="close"]'),
                                "btn": i.panel.querySelector('[data-login-business="btn"]')
                            },
                            i.bindEvent(),
                            "pca" == t.business && i.doms.close && (i.doms.close.style = i.doms.close.style || {},
                            i.doms.close.style.display = "none"),
                            i.showPanel(),
                            d.block({
                                "t": 21,
                                "bstp": 56,
                                "block": "9e30b3f3aed7e090",
                                "rpage": "viploginctrl_conv",
                                "inter_posi_code": l,
                                "strategy_code": i.strategyCode,
                                "cover_code": i.vipBusinessData.code
                            })) : setTimeout(function() {
                                s.fire({
                                    "type": "closeFloater"
                                })
                            }, 1500)
                        })
                    },
                    "showPanel": function() {
                        this.show(this.panel),
                        this.hide(this.sdkPanel)
                    },
                    "bindEvent": function() {
                        var i = this;
                        o.on(i.doms.close, "click", function() {
                            d.click({
                                "rseat": "vipctrl_popupclose",
                                "block": "vipctrl_click",
                                "rpage": "viploginctrl_conv"
                            }),
                            s.fire({
                                "type": "closeFloater"
                            })
                        }),
                        o.on(i.doms.btn, "click", function() {
                            d.click({
                                "rseat": "vipctrl_popuptobuy",
                                "block": "vipctrl_click",
                                "rpage": "viploginctrl_conv"
                            });
                            var e = i.vipBusinessData.detail.linkType.type
                              , t = i.vipBusinessData.detail.linkType;
                            "5" == e ? "pca" == c.getConfig().business ? i.openNativeCashier(t) : i.openVip(t) : "4" == e && (window.location.href = i.vipBusinessData.detail.linkType.url)
                        })
                    },
                    "getVipRecommendInfo": function(e, t) {
                        a.getVipRecommendInfo(e, function(e) {
                            t(e)
                        })
                    },
                    "openNativeCashier": function(e) {
                        var t = {
                            "fc": this.vipBusinessData.fc,
                            "fv": this.vipBusinessData.fv,
                            "product": "vip" === e.vipCashierType ? "gold" : e.vipCashierType,
                            "linkType": {
                                "vipProduct": e.vipProduct,
                                "autoRenew": e.autoRenew,
                                "type": "5",
                                "url": ""
                            }
                        };
                        try {
                            var i = '{"call_type":"request","cmd":"WJSShowNativeCashier","cmd_data":' + JSON.stringify(t) + "}";
                            console.log("openNativeCashier:" + i),
                            window.external.js_app_service(i),
                            d.block({
                                "t": 22,
                                "rpage": "viploginctrl_conv"
                            })
                        } catch (n) {}
                        setTimeout(function() {
                            window.close()
                        }, 500)
                    },
                    "openVip": function(e) {
                        var t = "vip" === e.vipCashierType ? "gold" : e.vipCashierType
                          , i = e.vipProduct
                          , n = "3" == e.autoRenew
                          , o = this;
                        window.sdkPackManager || u.load("js", "//stc.iqiyipic.com/js/sdkpack/sdkpackmanager.js", function() {
                            window.sdkPackManager.set({
                                "business": "1"
                            }),
                            window.sdkPackManager.require("vippay", function(e) {
                                e.init({
                                    "type": "vipPay",
                                    "isIgnoreArea": !1,
                                    "loadData": {
                                        "source": "pcw",
                                        "product": t,
                                        "packageAmount": i,
                                        "autoRenew": n,
                                        "fc": o.vipBusinessData.fc,
                                        "fv": o.vipBusinessData.fv,
                                        "s2": "interact_".concat(l, "_").concat(o.strategyCode, "_").concat(o.vipBusinessData.code),
                                        "s3": "interact_".concat(l, "_").concat(o.strategyCode, "_").concat(o.vipBusinessData.code, "_block"),
                                        "s4": "interact_".concat(l, "_").concat(o.strategyCode, "_").concat(o.vipBusinessData.code, "_rseat"),
                                        "QC005": u.cookie.get("QC005") || "",
                                        "external": {
                                            "hideAllVipBtn": "false",
                                            "hideJihuoBtn": "false"
                                        }
                                    },
                                    "register": {
                                        "showFloaterEve": function() {
                                            s.fire({
                                                "type": "closeFloater"
                                            })
                                        },
                                        "closeFloaterEve": function() {},
                                        "successPayEve": function() {}
                                    }
                                })
                            })
                        })
                    }
                }
            })
        }
        .call(i, p, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, p(0))
}
, function(t, i, s) {
    (function(o) {
        var e = function(e, t, i) {
            s(8),
            s(5),
            s(2);
            var n = s(18);
            i.exports = o.Class("businessSevice", {
                "construct": function() {
                    this._remoteInterface = {
                        "secondVipRecommend": "//act.vip.iqiyi.com/interact/api/v2/show"
                    }
                },
                "methods": {
                    "getVipRecommendInfo": function(e, t) {
                        n(this._remoteInterface.secondVipRecommend, {
                            "data": e,
                            "sign": !0,
                            "onsuccess": function(e) {
                                "A00000" === e.code ? t(e.data) : (console.log("会员接口请求失败"),
                                t(!1))
                            },
                            "onfailure": function() {
                                t(!1),
                                console.log("会员接口请求失败")
                            }
                        })
                    }
                }
            })
        }
        .call(i, s, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, s(0))
}
, function(e, t) {
    e.exports = '{{if business == \'vip\'}} <div class="qy-login-vip"> <div class="header"> <img class="banner" src="{{data.imgUrl1}}"/> <span class="iconfont icon-close" data-login-business="close"></span> </div> <div class="container"> <div class="title">{{data.text1}}</div> <div class="sub-title">{{data.text2}}</div> <div class="icon-list"> <div class="icon-item"> <img class="icon-img" src="{{data.icon1}}"/> <span class="text">{{data.iconText1}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon2}}"/> <span class="text">{{data.iconText2}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon3}}"/> <span class="text">{{data.iconText3}}</span> </div> <div class="icon-item"> <img class="icon-img" src="{{data.icon4}}"/> <span class="text">{{data.iconText4}}</span> </div> </div> <div class="button" data-login-business="btn">{{data.button}}</div> </div> </div> {{/if}} '
}
, function(t, i, c) {
    (function(r) {
        var e = function(e, t, i) {
            var n = c(5)
              , o = c(2)
              , s = c(18)
              , a = c(8);
            i.exports = {
                "_doSync": function(e) {
                    var t = o.getConfig()
                      , i = t.domain;
                    "iqiyi.com" != i && "pps.tv" != i || (i = {
                        "agenttype": e.agenttype || t.agenttype || "1",
                        "authcookie": r.cookie.get("P00001"),
                        "device_id": t.deviceid || "",
                        "fromSDK": t.fromSDK || "1",
                        "sdk_version": t.sdk_version || "1.0.0"
                    },
                    e = n.delcookiePPS,
                    /pps/.test(t.domain) && (e = n.delcookieIQIYI),
                    s(e, {
                        "data": i,
                        "sign": !1,
                        "onsuccess": function() {},
                        "onfailure": function() {}
                    }))
                },
                "request": function(e, t) {
                    var i = o.getConfig();
                    this._doSync(e);
                    i = {
                        "agenttype": e.agenttype || i.agenttype || "1",
                        "app_version": i.appVersion || "",
                        "device_id": i.deviceid || "",
                        "fromSDK": i.fromSDK || "1",
                        "noredirect": 1,
                        "ptid": e.ptid || i.ptid || "01010021010000000000",
                        "sdk_version": i.sdk_version || "1.0.0"
                    };
                    new a({
                        "url": n.logout
                    }).send({
                        "param": i
                    }, function(e) {
                        t && t(e)
                    })
                }
            }
        }
        .call(i, c, i, t);
        e === undefined || (t.exports = e)
    }
    ).call(this, c(0))
}
, function(e, t, n) {
    t = function(e, t, i) {
        var o = n(2)
          , s = n(18)
          , a = (n(9),
        n(5));
        i.exports = {
            "request": function() {
                var e, t, i = o.getConfig(), n = i.domain;
                "iqiyi.com" != n && "pps.tv" != n || (t = e = "",
                t = /pps/.test(n) ? (e = a.ssoTokenPPS,
                a.ssoCookieIQIYI) : (e = a.ssoTokenIQIYI,
                a.ssoCookiePPS),
                n = {
                    "agenttype": i.agenttype,
                    "callback": "callback",
                    "device_id": i.deviceid || "",
                    "fromSDK": i.fromSDK,
                    "ptid": i.ptid,
                    "sdk_version": i.sdk_version
                },
                s(e, {
                    "data": n,
                    "sign": !0,
                    "onsuccess": function(e) {
                        e && "A00000" == e.code && e.data && e.data.token && (e = {
                            "agenttype": i.agenttype,
                            "callback": "callback",
                            "fromSDK": i.fromSDK,
                            "sdk_version": i.sdk_version,
                            "token": e.data.token
                        },
                        s(t, {
                            "data": e,
                            "sign": !0,
                            "onsuccess": function() {},
                            "onfailure": function() {}
                        }))
                    },
                    "onfailure": function() {}
                }))
            }
        }
    }
    .call(t, n, t, e);
    t === undefined || (e.exports = t)
}
]);

a = Ram(16)
password = a.rsaFun('34242342342')
console.log(password)
// 极验4代
// 滑块加密点{w}全局搜索: encrypt(et.stringify(s), this);