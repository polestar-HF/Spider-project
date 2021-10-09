var e = '/youzy.dms.basiclib.api.college.query'
var t = { "keyword": "", "provinceNames": [], "natureTypes": [], "eduLevel": "", "categories": [], "features": [], "pageIndex": 7, "pageSize": 20, "sort": 7 }

function sign(e, t) {
    var r, o = "9SASji5OWnG41iRKiSvTJHlXHmRySRp1", a = "", s = t || {}, u = (e = e || "").split("?");
    if (u.length > 0 && (r = u[1]),
        r) {
        var c = r.split("&")
            , f = "";
        c.forEach((function (e) {
            var t = e.split("=");
            f += "".concat(t[0], "=").concat(encodeURI(t[1]), "&")
        }
        )),
            a = "".concat(i.trimEnd(f, "&"), "&").concat(o)
    } else
        a = Object.keys(s).length > 0 ? "".concat(JSON.stringify(s), "&").concat(o) : "&".concat(o);
    return a.toLowerCase()
    // n(a) n方法就是md5 hash算法, 使用python 模拟即可, 注意python传入参数是type is dict
}
console.log(sign(e, t))