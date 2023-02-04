function timest() {
  var _0x532302 = Date["parse"](new Date())["toString"]();

  _0x532302 = _0x532302["substr"](0, 10);
  return _0x532302;
}

function parseSuffix(_0x34493b) {
  var _0x576aa8 = document["createElement"]('a');

  _0x576aa8["href"] = _0x34493b;
  return _0x576aa8["pathname"]["split"]('.')["pop"]();
}

function isMP4File(_0x156bb9) {
  var _0x341ba9 = parseSuffix(_0x156bb9);

  return _0x341ba9["toUpperCase"]() === "MP4";
}

function checkIsHaveUrl(_0x315c1a) {
  var _0x58d13a = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,
      _0x4239a1 = _0x315c1a["match"](_0x58d13a);

  return _0x4239a1 && _0x4239a1["length"] > 0 ? _0x4239a1[0] : '';
}

function detectIE() {
  var _0x414dd1 = window["navigator"]["userAgent"];
  (_0x414dd1["indexOf"]("MSIE ") > 0 || _0x414dd1["indexOf"]("Trident/") > 0) && $("#app .row .col-md-12")["prepend"]("<div style=\"text-align: center;\" class=\"alert alert-danger\" role=\"alert\">发现您正在使用IE内核浏览器，建议使用WebKit内核浏览器访问本站获得最佳上网体验。<a target=\"_blank\" href=\"http://www.jianshu.com/p/a70521aba2b3\">详情>></a></div>");
}

var Base64 = {
  '_keyStr': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  'encode': function (_0x654bb2) {
    var _0x5ad6b9 = '';

    var _0x14a18f, _0x1bda40, _0x43ba91, _0x2bd997, _0x1cee19, _0x75c592, _0x3180c9;

    var _0x1f5dee = 0;
    _0x654bb2 = Base64["_utf8_encode"](_0x654bb2);

    while (_0x1f5dee < _0x654bb2["length"]) {
      _0x14a18f = _0x654bb2["charCodeAt"](_0x1f5dee++);
      _0x1bda40 = _0x654bb2["charCodeAt"](_0x1f5dee++);
      _0x43ba91 = _0x654bb2["charCodeAt"](_0x1f5dee++);
      _0x2bd997 = _0x14a18f >> 2;
      _0x1cee19 = (_0x14a18f & 3) << 4 | _0x1bda40 >> 4;
      _0x75c592 = (_0x1bda40 & 15) << 2 | _0x43ba91 >> 6;
      _0x3180c9 = _0x43ba91 & 63;

      if (isNaN(_0x1bda40)) {
        _0x75c592 = _0x3180c9 = 64;
      } else {
        if (isNaN(_0x43ba91)) {
          _0x3180c9 = 64;
        }
      }

      _0x5ad6b9 = _0x5ad6b9 + this["_keyStr"]["charAt"](_0x2bd997) + this["_keyStr"]["charAt"](_0x1cee19) + this["_keyStr"]["charAt"](_0x75c592) + this["_keyStr"]["charAt"](_0x3180c9);
    }

    return _0x5ad6b9;
  },
  'decode': function (_0x5cd877) {
    var _0x12440a = '';

    var _0x4d3d13, _0x5e04c1, _0x477c50;

    var _0x9c9750, _0x10d0af, _0x348017, _0xb53b00;

    var _0x3a41dd = 0;
    _0x5cd877 = _0x5cd877["replace"](/[^A-Za-z0-9+/=]/g, '');

    while (_0x3a41dd < _0x5cd877["length"]) {
      _0x9c9750 = this["_keyStr"]["indexOf"](_0x5cd877["charAt"](_0x3a41dd++));
      _0x10d0af = this["_keyStr"]["indexOf"](_0x5cd877["charAt"](_0x3a41dd++));
      _0x348017 = this["_keyStr"]["indexOf"](_0x5cd877["charAt"](_0x3a41dd++));
      _0xb53b00 = this["_keyStr"]["indexOf"](_0x5cd877["charAt"](_0x3a41dd++));
      _0x4d3d13 = _0x9c9750 << 2 | _0x10d0af >> 4;
      _0x5e04c1 = (_0x10d0af & 15) << 4 | _0x348017 >> 2;
      _0x477c50 = (_0x348017 & 3) << 6 | _0xb53b00;
      _0x12440a = _0x12440a + String["fromCharCode"](_0x4d3d13);
      _0x348017 != 64 && (_0x12440a = _0x12440a + String["fromCharCode"](_0x5e04c1));

      if (_0xb53b00 != 64) {
        _0x12440a = _0x12440a + String["fromCharCode"](_0x477c50);
      }
    }

    _0x12440a = Base64["_utf8_decode"](_0x12440a);
    return _0x12440a;
  },
  '_utf8_encode': function (_0x2e8a12) {
    _0x2e8a12 = _0x2e8a12["replace"](/rn/g, 'n');
    var _0x55389a = '';

    for (var _0x4fd1d6 = 0; _0x4fd1d6 < _0x2e8a12["length"]; _0x4fd1d6++) {
      var _0xe0392e = _0x2e8a12["charCodeAt"](_0x4fd1d6);

      if (_0xe0392e < 128) {
        _0x55389a += String["fromCharCode"](_0xe0392e);
      } else {
        if (_0xe0392e > 127 && _0xe0392e < 2048) {
          _0x55389a += String["fromCharCode"](_0xe0392e >> 6 | 192);
          _0x55389a += String["fromCharCode"](_0xe0392e & 63 | 128);
        } else {
          _0x55389a += String["fromCharCode"](_0xe0392e >> 12 | 224);
          _0x55389a += String["fromCharCode"](_0xe0392e >> 6 & 63 | 128);
          _0x55389a += String["fromCharCode"](_0xe0392e & 63 | 128);
        }
      }
    }

    return _0x55389a;
  },
  '_utf8_decode': function (_0x21e0f5) {
    var _0x3cbd2a = '';
    var _0x227999 = 0;

    var _0x36fe19 = c1 = c2 = 0;

    while (_0x227999 < _0x21e0f5["length"]) {
      _0x36fe19 = _0x21e0f5["charCodeAt"](_0x227999);

      if (_0x36fe19 < 128) {
        _0x3cbd2a += String["fromCharCode"](_0x36fe19);
        _0x227999++;
      } else {
        if (_0x36fe19 > 191 && _0x36fe19 < 224) {
          c2 = _0x21e0f5["charCodeAt"](_0x227999 + 1), _0x3cbd2a += String["fromCharCode"]((_0x36fe19 & 31) << 6 | c2 & 63), _0x227999 += 2;
        } else {
          c2 = _0x21e0f5["charCodeAt"](_0x227999 + 1);
          c3 = _0x21e0f5["charCodeAt"](_0x227999 + 2);
          _0x3cbd2a += String["fromCharCode"]((_0x36fe19 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          _0x227999 += 3;
        }
      }
    }

    return _0x3cbd2a;
  }
},
    _0x31ba46 = {
  "disabled": false
};
var _0x50c75b = {
  "video_url": '',
  "images": [],
  "desc": '',
  "cover_url": '',
  "type": ''
};
var _0x1f6cfb = {
  "link": '',
  "linkFromInit": false,
  "submitBtnClass": _0x31ba46,
  "errorTip": '',
  "isMP4File": false,
  "requestSuccess": false,
  "showAllSupportLink": false,
  "showClearBtn": false,
  "requestResult": _0x50c75b
};
var app = new Vue({
  'extends': baseVue,
  'data': _0x1f6cfb,
  'watch': {
    'link': function (_0x458779, _0x174027) {
      if (_0x458779["length"] > 0) {
        this["showClearBtn"] = true, $(".input-group-lg .link-input")["css"]("padding-right", "32px");
      } else {
        this["showClearBtn"] = false;
        $(".input-group-lg .link-input")["css"]("padding-right", "16px");
      }
    }
  },
  'methods': {
    'toggleAllSupportLink': function () {
      this["showAllSupportLink"] = !this["showAllSupportLink"];
    },
    'submit': function (_0x5b9321) {
      if (this["submitBtnClass"]["disabled"]) {
        return;
      }

      if (this["link"] == '') {
        this["errorTip"] = "请先将视频链接粘贴到上面的输入框";
        return;
      }

      var _0x1fe49c = this["link"]["lastIndexOf"]("http://");

      _0x1fe49c = _0x1fe49c === -1 ? this["link"]["lastIndexOf"]("https://") : _0x1fe49c;

      if (_0x1fe49c === -1) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["link"] = checkIsHaveUrl(this["link"]["substr"](_0x1fe49c));

      var _0x81b8df = this["link"]["indexOf"](" ");

      if (_0x81b8df !== -1) {
        this["link"] = this["link"]["substring"](0, _0x81b8df);
      }

      var _0x20293c = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,5}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

      if (this["link"]["length"] < 16 || !_0x20293c["test"](this["link"])) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["errorTip"] = '';

      if (isMP4File(this["link"])) {
        this["isMP4File"] = true;
        return;
      }

      this["parseVideo"]();
    },
    'parseVideo': function () {
      this["submitBtnClass"]["disabled"] = true;
      this["requestSuccess"] = false;

      var _0x7e4e05 = this;

      var _0x5c791c = timest(),
          _0x1e5e60 = g(_0x7e4e05["link"] + _0x5c791c),
          _0x424692 = {
        "withCredentials": true
      };

      var _0x1f4230 = {
        "link": _0x7e4e05["link"],
        "vtype": 1,
        "time": _0x5c791c,
        "sign": _0x1e5e60
      };
      $["ajax"]({
        'type': "POST",
        'url': "/ajax/analysis.php",
        'xhrFields': _0x424692,
        'crossDomain': true,
        'data': _0x1f4230,
        'dataType': "json",
        'success': function (_0x5d6208) {
          _0x7e4e05["submitBtnClass"]["disabled"] = false;

          if (_0x5d6208["code"] == 0) {
            _0x7e4e05["requestResult"] = _0x5d6208["data"], _0x7e4e05["requestSuccess"] = true, _0x7e4e05["type"] = _0x5d6208["data"]["type"];
          } else {
            _0x7e4e05["errorTip"] = _0x5d6208["message"];
          }
        },
        'error': function () {
          _0x7e4e05["submitBtnClass"]["disabled"] = false;
          _0x7e4e05["errorTip"] = "处理失败,请重试!";
        }
      });
    },
    'sourceSubmit': function (_0x588c08) {
      if (this["submitBtnClass"]["disabled"]) {
        return;
      }

      if (this["link"] == '') {
        this["errorTip"] = "请先将视频链接粘贴到上面的输入框";
        return;
      }

      var _0x33ef2a = this["link"]["lastIndexOf"]("http://");

      _0x33ef2a = _0x33ef2a === -1 ? this["link"]["lastIndexOf"]("https://") : _0x33ef2a;

      if (_0x33ef2a === -1) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["link"] = checkIsHaveUrl(this["link"]["substr"](_0x33ef2a));

      var _0x18a9b7 = this["link"]["indexOf"](" ");

      if (_0x18a9b7 !== -1) {
        this["link"] = this["link"]["substring"](0, _0x18a9b7);
      }

      var _0x34672a = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,5}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

      if (this["link"]["length"] < 16 || !_0x34672a["test"](this["link"])) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["errorTip"] = '';

      if (isMP4File(this["link"])) {
        this["isMP4File"] = true;
        return;
      }

      this["sourceVideo"]();
    },
    'sourceVideo': function () {
      this["submitBtnClass"]["disabled"] = true;
      this["requestSuccess"] = false;

      var _0x5eaf81 = this,
          _0x3ec61c = timest(),
          _0x2ad7b6 = g(_0x5eaf81["link"] + _0x3ec61c),
          _0x3865b5 = {
        "withCredentials": true
      };

      var _0x626c41 = {
        "link": _0x5eaf81["link"],
        "vtype": 3,
        "time": _0x3ec61c,
        "sign": _0x2ad7b6
      };
      $["ajax"]({
        'type': "POST",
        'url': "/ajax/analysis.php",
        'xhrFields': _0x3865b5,
        'crossDomain': true,
        'data': _0x626c41,
        'dataType': "json",
        'success': function (_0x29adf6) {
          _0x5eaf81["submitBtnClass"]["disabled"] = false;

          if (_0x29adf6["code"] == 0) {
            _0x5eaf81["requestResult"] = _0x29adf6["data"];
            _0x5eaf81["requestSuccess"] = true;
            _0x5eaf81["type"] = _0x29adf6["data"]["type"];
          } else {
            _0x5eaf81["errorTip"] = _0x29adf6["message"];
          }
        },
        'error': function () {
          _0x5eaf81["submitBtnClass"]["disabled"] = false;
          _0x5eaf81["errorTip"] = "处理失败,请重试!";
        }
      });
    },
    'zhiboSubmit': function (_0x2f3545) {
      if (this["submitBtnClass"]["disabled"]) {
        return;
      }

      if (this["link"] == '') {
        this["errorTip"] = "请先将视频链接粘贴到上面的输入框";
        return;
      }

      var _0x2aae46 = this["link"]["lastIndexOf"]("http://");

      _0x2aae46 = _0x2aae46 === -1 ? this["link"]["lastIndexOf"]("https://") : _0x2aae46;

      if (_0x2aae46 === -1) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["link"] = this["link"]["substr"](_0x2aae46);

      var _0xcb1e02 = this["link"]["indexOf"](" ");

      if (_0xcb1e02 !== -1) {
        this["link"] = this["link"]["substring"](0, _0xcb1e02);
      }

      var _0xe0638d = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,5}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

      if (this["link"]["length"] < 16 || !_0xe0638d["test"](this["link"])) {
        this["errorTip"] = "请输入正确的视频链接";
        return;
      }

      this["errorTip"] = '';

      if (isMP4File(this["link"])) {
        this["isMP4File"] = true;
        return;
      }

      this["zhiboVideo"]();
    },
    'zhiboVideo': function () {
      this["submitBtnClass"]["disabled"] = true;
      this["requestSuccess"] = false;

      var _0x1cc3ff = this,
          _0x46cb66 = timest(),
          _0x3f4120 = g(_0x1cc3ff["link"] + _0x46cb66),
          _0x5c0b6b = {
        "withCredentials": true
      };

      var _0x576624 = {
        "link": _0x1cc3ff["link"],
        "vtype": 4,
        "time": _0x46cb66,
        "sign": _0x3f4120
      };
      $["ajax"]({
        'type': "POST",
        'url': "/ajax/analysis.php",
        'xhrFields': _0x5c0b6b,
        'crossDomain': true,
        'data': _0x576624,
        'dataType': "json",
        'success': function (_0x3ec0ee) {
          _0x1cc3ff["submitBtnClass"]["disabled"] = false, _0x3ec0ee["code"] == 0 ? (_0x1cc3ff["requestResult"] = _0x3ec0ee["data"], _0x1cc3ff["requestSuccess"] = true) : _0x1cc3ff["errorTip"] = _0x3ec0ee["message"];
        },
        'error': function () {
          _0x1cc3ff["submitBtnClass"]["disabled"] = false, _0x1cc3ff["errorTip"] = "处理失败,请重试!";
        }
      });
    },
    'shipinhaoSubmit': function (_0x23402d) {
      if (this["submitBtnClass"]["disabled"]) {
        return;
      }

      if (this["link"] == '') {
        this["errorTip"] = "请先将视频链接粘贴到上面的输入框";
        return;
      }

      this["errorTip"] = '';

      if (isMP4File(this["link"])) {
        this["isMP4File"] = true;
        return;
      }

      this["shipinhaoVideo"]();
    },
    'shipinhaoVideo': function () {
      this["submitBtnClass"]["disabled"] = true;
      this["requestSuccess"] = false;

      var _0x21e09b = this;

      var _0xaad18d = timest(),
          _0x20f47c = g(_0x21e09b["link"] + _0xaad18d),
          _0x7f1a0f = {
        "withCredentials": true
      };

      $["ajax"]({
        'type': "POST",
        'url': "/ajax/shipinhao.php",
        'xhrFields': _0x7f1a0f,
        'crossDomain': true,
        'data': {
          'link': Base64["encode"](_0x21e09b["link"]),
          'vtype': 5,
          'time': _0xaad18d,
          'sign': _0x20f47c
        },
        'dataType': "json",
        'success': function (_0x2fd07b) {
          _0x21e09b["submitBtnClass"]["disabled"] = false;

          if (_0x2fd07b["code"] == 0) {
            _0x21e09b["requestResult"] = _0x2fd07b["data"], _0x21e09b["requestSuccess"] = true;
          } else {
            _0x21e09b["errorTip"] = _0x2fd07b["message"];
          }
        },
        'error': function () {
          _0x21e09b["submitBtnClass"]["disabled"] = false, _0x21e09b["errorTip"] = "处理失败,请重试!";
        }
      });
    },
    'init': function () {
      detectIE();
    },
    'clear': function () {
      this["requestSuccess"] = false;
      this["link"] = '';
    }
  }
});
app["init"]();
setInterval(function () {
  _0x3501dc();
}, 4000);