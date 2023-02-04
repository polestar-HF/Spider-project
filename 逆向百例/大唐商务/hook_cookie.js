window = global;
null_function = function () {
    console.log(arguments)
}
undefined_function = function () {
    return undefined
}
window.webkitRTCPeerConnection = null_function
window.mozPaintCount = undefined_function
window.mozInnerScreenX = undefined_function
window.Debug = undefined_function
window.WebKitPlaybackTargetAvailabilityEvent = undefined_function
window.origin = 'https://www.cdt-ec.com'
window.self = window
screen = {
  width: 1920
}
window.screen = screen

document = {
    getElementById: function (val) {
        if(val === '_f77e999cbabd4102_'){
            return null
        }
    console.log('getElementById')
    console.log(arguments)
},
    hidden: false,
    webkitHidden: false,
    wasDiscarded: false,
    cookie:""
}
document.mozHidden = undefined_function
document.msHidden = undefined_function
document.addEventListener = function () {
    // console.log(arguments)
}
style = {}
cc = {
    style:style
}
webgl = {
    getExtension: function (val) {
        if (val === 'WEBGL_debug_renderer_info'){
            return {}
        }
    },
    getParameter: function () {
        return null
    }
}
canvas_style = {}
getContext_2d = {
    fillRect: undefined_function,
    fillText: undefined_function
}

canvas = {
    getAttributeNames: null_function,
    getContext: function (val) {
        if (val === 'webgl'){
            return webgl
        }
        if (val === '2d'){
            return getContext_2d
        }
        console.log('getContext')
        console.log(arguments)
    },
    style: canvas_style,
    toDataURL: function () {
        return 'data:image/png;base64,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'
    }
}
document.createElement = function (val) {
    if (val === 'cc'){
        return cc
    }
    if (val === 'canvas'){
      return canvas
  }
    console.log('createElement');
    console.log(arguments);

}

location = {
    host:'www.cdt-ec.com'

}
navigator = {}
navigator.language = 'zh-CN'
// canvas = new Proxy(canvas, {
//     get: function (target, property) {
//         // 判断参数是存在
//         debugger;
//         console.log('获取' + property + '参数: ' + target[property])
//         return Reflect.get(...arguments)
//         // return target[property]
//         // if (property in target) {
//         //     console.log('获取' + property + '参数: ' + target[property])
//         // } else {
//         //     console.log('获取' + property + '参数: ' + target[property])
//         // }
//     },
//     set(target, key, value, receiver) {
//         debugger;
//         // console.log('target --> ',target)
//         // console.log('key --> ',key)
//         // console.log('value --> ',value)
//         // console.log('receiver --> ',receiver)
//         // target[key] = value
//         return Reflect.set(...arguments)
//     }
//
// })

!function () {
  if (document["getElementById"] && document["getElementById"]("_f77e999cbabd4102_") && document["getElementById"]("_f77e999cbabd4102_")["title"] && window["parseInt"]) {
    var _0x20b2d1 = window["parseInt"](document["getElementById"]("_f77e999cbabd4102_")["title"]);

    if ((Math["random"]() * 100 | 0) > _0x20b2d1) {
      return;
    }
  }

  var _0x26e95f = function () {
    var _0x190ec4 = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
    var _0x15c8a2 = {};

    function _0x1c24d1(_0x655dbd, _0x345b80) {
      if (!_0x15c8a2[_0x655dbd]) {
        _0x15c8a2[_0x655dbd] = {};

        for (var _0x257d77 = 0; _0x257d77 < _0x655dbd["length"]; _0x257d77++) {
          _0x15c8a2[_0x655dbd][_0x655dbd["charAt"](_0x257d77)] = _0x257d77;
        }
      }

      return _0x15c8a2[_0x655dbd][_0x345b80];
    }

    var _0x26e95f = {
      'compressToBase64': function (_0x2c4b59) {
        if (_0x2c4b59 == null) {
          return '';
        }

        var _0x4d0e29 = _0x26e95f["_compress"](_0x2c4b59, 6, function (_0x40d3c6) {
          return _0x190ec4["charAt"](_0x40d3c6);
        });

        switch (_0x4d0e29["length"] % 4) {
          default:
          case 0:
            return _0x4d0e29;

          case 1:
            return _0x4d0e29 + "===";

          case 2:
            return _0x4d0e29 + '==';

          case 3:
            return _0x4d0e29 + '=';
        }
      },
      '_compress': function (_0x1f467e, _0x5a1978, _0x338551) {
        if (_0x1f467e == null) {
          return '';
        }

        var _0x573af9,
            _0x1f31fd,
            _0xb16b80 = {},
            _0x4a8490 = {},
            _0x386b31 = '',
            _0x52df31 = '',
            _0x3b95b6 = '',
            _0xbb9f03 = 2,
            _0x394e07 = 3,
            _0x1745d7 = 2,
            _0x48494a = [],
            _0x58858f = 0,
            _0x52f5ec = 0,
            _0x1b0795;

        for (_0x1b0795 = 0; _0x1b0795 < _0x1f467e["length"]; _0x1b0795 += 1) {
          _0x386b31 = _0x1f467e["charAt"](_0x1b0795);

          if (!Object["prototype"]["hasOwnProperty"]["call"](_0xb16b80, _0x386b31)) {
            _0xb16b80[_0x386b31] = _0x394e07++;
            _0x4a8490[_0x386b31] = true;
          }

          _0x52df31 = _0x3b95b6 + _0x386b31;

          if (Object["prototype"]["hasOwnProperty"]["call"](_0xb16b80, _0x52df31)) {
            _0x3b95b6 = _0x52df31;
          } else {
            if (Object["prototype"]["hasOwnProperty"]["call"](_0x4a8490, _0x3b95b6)) {
              if (_0x3b95b6["charCodeAt"](0) < 256) {
                for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
                  _0x58858f = _0x58858f << 1;

                  if (_0x52f5ec == _0x5a1978 - 1) {
                    _0x52f5ec = 0;

                    _0x48494a["push"](_0x338551(_0x58858f));

                    _0x58858f = 0;
                  } else {
                    _0x52f5ec++;
                  }
                }

                _0x1f31fd = _0x3b95b6["charCodeAt"](0);

                for (_0x573af9 = 0; _0x573af9 < 8; _0x573af9++) {
                  _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

                  if (_0x52f5ec == _0x5a1978 - 1) {
                    _0x52f5ec = 0;

                    _0x48494a["push"](_0x338551(_0x58858f));

                    _0x58858f = 0;
                  } else {
                    _0x52f5ec++;
                  }

                  _0x1f31fd = _0x1f31fd >> 1;
                }
              } else {
                _0x1f31fd = 1;

                for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
                  _0x58858f = _0x58858f << 1 | _0x1f31fd;

                  if (_0x52f5ec == _0x5a1978 - 1) {
                    _0x52f5ec = 0;

                    _0x48494a["push"](_0x338551(_0x58858f));

                    _0x58858f = 0;
                  } else {
                    _0x52f5ec++;
                  }

                  _0x1f31fd = 0;
                }

                _0x1f31fd = _0x3b95b6["charCodeAt"](0);

                for (_0x573af9 = 0; _0x573af9 < 16; _0x573af9++) {
                  _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

                  if (_0x52f5ec == _0x5a1978 - 1) {
                    _0x52f5ec = 0;

                    _0x48494a["push"](_0x338551(_0x58858f));

                    _0x58858f = 0;
                  } else {
                    _0x52f5ec++;
                  }

                  _0x1f31fd = _0x1f31fd >> 1;
                }
              }

              _0xbb9f03--;

              if (_0xbb9f03 == 0) {
                _0xbb9f03 = Math["pow"](2, _0x1745d7);
                _0x1745d7++;
              }

              delete _0x4a8490[_0x3b95b6];
            } else {
              _0x1f31fd = _0xb16b80[_0x3b95b6];

              for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
                _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

                if (_0x52f5ec == _0x5a1978 - 1) {
                  _0x52f5ec = 0;

                  _0x48494a["push"](_0x338551(_0x58858f));

                  _0x58858f = 0;
                } else {
                  _0x52f5ec++;
                }

                _0x1f31fd = _0x1f31fd >> 1;
              }
            }

            _0xbb9f03--;

            if (_0xbb9f03 == 0) {
              _0xbb9f03 = Math["pow"](2, _0x1745d7);
              _0x1745d7++;
            }

            _0xb16b80[_0x52df31] = _0x394e07++;
            _0x3b95b6 = String(_0x386b31);
          }
        }

        if (_0x3b95b6 !== '') {
          if (Object["prototype"]["hasOwnProperty"]["call"](_0x4a8490, _0x3b95b6)) {
            if (_0x3b95b6["charCodeAt"](0) < 256) {
              for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
                _0x58858f = _0x58858f << 1;

                if (_0x52f5ec == _0x5a1978 - 1) {
                  _0x52f5ec = 0;

                  _0x48494a["push"](_0x338551(_0x58858f));

                  _0x58858f = 0;
                } else {
                  _0x52f5ec++;
                }
              }

              _0x1f31fd = _0x3b95b6["charCodeAt"](0);

              for (_0x573af9 = 0; _0x573af9 < 8; _0x573af9++) {
                _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

                if (_0x52f5ec == _0x5a1978 - 1) {
                  _0x52f5ec = 0;

                  _0x48494a["push"](_0x338551(_0x58858f));

                  _0x58858f = 0;
                } else {
                  _0x52f5ec++;
                }

                _0x1f31fd = _0x1f31fd >> 1;
              }
            } else {
              _0x1f31fd = 1;

              for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
                _0x58858f = _0x58858f << 1 | _0x1f31fd;

                if (_0x52f5ec == _0x5a1978 - 1) {
                  _0x52f5ec = 0;

                  _0x48494a["push"](_0x338551(_0x58858f));

                  _0x58858f = 0;
                } else {
                  _0x52f5ec++;
                }

                _0x1f31fd = 0;
              }

              _0x1f31fd = _0x3b95b6["charCodeAt"](0);

              for (_0x573af9 = 0; _0x573af9 < 16; _0x573af9++) {
                _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

                if (_0x52f5ec == _0x5a1978 - 1) {
                  _0x52f5ec = 0;

                  _0x48494a["push"](_0x338551(_0x58858f));

                  _0x58858f = 0;
                } else {
                  _0x52f5ec++;
                }

                _0x1f31fd = _0x1f31fd >> 1;
              }
            }

            _0xbb9f03--;

            if (_0xbb9f03 == 0) {
              _0xbb9f03 = Math["pow"](2, _0x1745d7);
              _0x1745d7++;
            }

            delete _0x4a8490[_0x3b95b6];
          } else {
            _0x1f31fd = _0xb16b80[_0x3b95b6];

            for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
              _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

              if (_0x52f5ec == _0x5a1978 - 1) {
                _0x52f5ec = 0;

                _0x48494a["push"](_0x338551(_0x58858f));

                _0x58858f = 0;
              } else {
                _0x52f5ec++;
              }

              _0x1f31fd = _0x1f31fd >> 1;
            }
          }

          _0xbb9f03--;

          if (_0xbb9f03 == 0) {
            _0xbb9f03 = Math["pow"](2, _0x1745d7);
            _0x1745d7++;
          }
        }

        _0x1f31fd = 2;

        for (_0x573af9 = 0; _0x573af9 < _0x1745d7; _0x573af9++) {
          _0x58858f = _0x58858f << 1 | _0x1f31fd & 1;

          if (_0x52f5ec == _0x5a1978 - 1) {
            _0x52f5ec = 0;

            _0x48494a["push"](_0x338551(_0x58858f));

            _0x58858f = 0;
          } else {
            _0x52f5ec++;
          }

          _0x1f31fd = _0x1f31fd >> 1;
        }

        while (true) {
          _0x58858f = _0x58858f << 1;

          if (_0x52f5ec == _0x5a1978 - 1) {
            _0x48494a["push"](_0x338551(_0x58858f));

            break;
          } else {
            _0x52f5ec++;
          }
        }

        return _0x48494a["join"]('');
      }
    };
    return _0x26e95f;
  }();

  var _0x67a304 = 41;
  var _0x1897e0 = 100;
  var _0x227762 = 10;
  var _0x55fd70 = 20;
  var _0x504809 = [];
  var _0x4027ae = [];
  var _0x31a908 = [];
  var _0x18ab0f = [];
  var _0x51f298 = [];
  var _0x5a4ca3 = false;
  var _0x40c107 = [0];
  var _0x25493e = location["host"];

  var _0x4c8132 = _0x25493e["split"]('.'),
      _0x3b8d6f = _0x4c8132["length"];

  if (!/^(\d+\.)*\d+$/["test"](_0x25493e) && _0x3b8d6f > 2) {
    _0x25493e = _0x4c8132[_0x3b8d6f - 2] + '.' + _0x4c8132[_0x3b8d6f - 1];

    if (_0x25493e == "com.cn" || _0x25493e == "gov.cn" || _0x25493e == "org.cn" || _0x25493e == "net.cn" || _0x25493e == "gov.mo") {
      _0x25493e = _0x4c8132[_0x3b8d6f - 3] + '.' + _0x25493e;
    }
  }

  var _0x115345 = new Date()["getTime"]();

  var _0x1554eb = 1;
  var _0x1edde9 = document;
  var _0x4dc3c2 = window;

  function _0x3a4abd(_0x168b3c, _0x167f42, _0x2c7d99) {
    var _0x245766 = 0;
    var _0x51c724 = _0x167f42;
    var _0xa73266 = _0x168b3c["length"];

    var _0x3cb4f5 = _0x2c7d99 || 1;

    while (_0x51c724 < _0xa73266) {
      _0x245766 = (_0x245766 << 5) - _0x245766;
      _0x245766 += _0x168b3c["charCodeAt"](_0x51c724);
      _0x245766 >>>= 0;
      _0x51c724 += _0x3cb4f5;
    }

    return _0x245766;
  }

  var _0x2f1849 = function (_0xac0bde) {
    if (_0xac0bde) {
      return _0x26e95f["compressToBase64"](_0x504809["join"]('^') + 'M' + _0x18ab0f["length"] + '^' + _0x51f298["length"] + '^' + _0x40c107["length"]);
    } else {
      return _0x26e95f["compressToBase64"](_0x504809["join"]('^') + 'P' + _0x4027ae["length"] + '^' + _0x31a908["length"] + '^' + _0x40c107["length"]);
    }
  };

  var _0x4a28d2 = function (_0xfa4625) {
    if (_0xfa4625) {
      return _0x26e95f["compressToBase64"](_0x504809["slice"](0, 4)["join"]('^') + 'tm' + _0x10ccc1 + '|' + _0x18ab0f["join"]('|') + 'tc' + _0x3672c8 + '|' + _0x51f298["join"]('|') + 'kb' + _0x40c107["join"]('|'));
    } else {
      return _0x26e95f["compressToBase64"](_0x504809["slice"](0, 4)["join"]('^') + 'mm' + _0x116d64 + '|' + _0x4027ae["join"]('|') + 'mc' + _0x1a55c4 + '|' + _0x31a908["join"]('|') + 'kb' + _0x40c107["join"]('|'));
    }
  };

  var _0x49707e = function () {
    var _0x1e16e7 = !!(_0x4dc3c2["webkitRTCPeerConnection"] || _0x4dc3c2["Element"] && _0x4dc3c2["Element"]["prototype"] && _0x4dc3c2["Element"]["prototype"]["webkitMatchesSelector"]) << 0;

    _0x1e16e7 |= (_0x4dc3c2["mozPaintCount"] !== undefined) << 1;
    _0x1e16e7 |= (_0x4dc3c2["mozInnerScreenX"] !== undefined) << 2;
    _0x1e16e7 |= !!_0x4dc3c2["Debug"] << 3;
    _0x1e16e7 |= !!_0x4dc3c2["WebKitPlaybackTargetAvailabilityEvent"] << 4;
    var _0xe3e269 = 0;
    var _0x362e1e = ["zoom", "resize", "text-rendering", "text-align-last", "-webkit-hyphens"];

    var _0x33892a = _0x1edde9["createElement"]('cc');

    for (var _0x569e88 = 0; _0x569e88 < _0x362e1e["length"]; _0x569e88++) {
      _0xe3e269 |= (_0x33892a["style"][_0x362e1e[_0x569e88]] !== undefined ? 1 : 0) << _0x569e88;
    }

    _0x504809["push"](_0x1e16e7 + '|' + _0xe3e269);

    var _0x5dcc3f = navigator["language"];

    _0x504809["push"](_0x5dcc3f);

    var _0x333ab3 = new Date()["getTimezoneOffset"]();

    _0x504809["push"](_0x333ab3);

    if (_0x4dc3c2["hasOwnProperty"]) {
      var _0x48c930 = !![]["copyWithin"] << 0;

      _0x48c930 |= !![]["includes"] << 1;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("Touch") << 2;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("Proxy") << 3;
      _0x48c930 |= (_0x4dc3c2["Symbol"] && _0x4dc3c2["Symbol"]["hasOwnProperty"] && _0x4dc3c2["Symbol"]["hasOwnProperty"]("match")) << 4;

      var _0x1ad2f7 = function () {};

      _0x48c930 |= !!_0x1ad2f7["name"] << 5;
      _0x48c930 |= (_0x4dc3c2["Object"]["hasOwnProperty"] && _0x4dc3c2["Object"]["hasOwnProperty"]("values")) << 6;
      _0x48c930 |= (_0x4dc3c2["OfflineAudioContext"] && _0x4dc3c2["OfflineAudioContext"]["prototype"]["hasOwnProperty"]("close")) << 7;

      var _0x50941c = _0x1edde9["createElement"]("canvas");

      _0x48c930 |= !!''["padStart"] << 9;
      _0x48c930 |= (_0x4dc3c2["PointerEvent"] && _0x4dc3c2["PointerEvent"]["prototype"]["hasOwnProperty"]("getCoalescedEvents")) << 10;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("BudgetService") << 12;
      _0x48c930 |= !!(_0x50941c && _0x50941c["getAttributeNames"]) << 13;
      _0x48c930 |= !!(_0x4dc3c2["performance"] && _0x4dc3c2["performance"]["timeOrigin"] !== undefined) << 14;
      _0x48c930 |= (_0x4dc3c2["Intl"] && _0x4dc3c2["Intl"]["hasOwnProperty"] && _0x4dc3c2["Intl"]["hasOwnProperty"]("PluralRules")) << 15;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("getMatchedCSSRules") << 16;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("PerformanceServerTiming") << 17;
      _0x48c930 |= !![]["values"] << 18;
      _0x48c930 |= _0x4dc3c2["hasOwnProperty"]("BigInt") << 19;
      _0x48c930 |= (_0x1edde9["wasDiscarded"] !== undefined) << 20;

      var _0x23ea70 = (_0x4dc3c2["Symbol"] && _0x4dc3c2["Symbol"]["hasOwnProperty"] && _0x4dc3c2["Symbol"]["hasOwnProperty"]("species")) << 0;

      _0x23ea70 |= _0x4dc3c2["hasOwnProperty"]("Reflect") << 1;
      _0x23ea70 |= (_0x4dc3c2["Symbol"] && _0x4dc3c2["Symbol"]["hasOwnProperty"] && _0x4dc3c2["Symbol"]["hasOwnProperty"]("toPrimitive")) << 2;
      _0x23ea70 |= (_0x4dc3c2["WeakMap"] && _0x4dc3c2["WeakMap"]["prototype"]["hasOwnProperty"]("clear")) << 3;
      _0x23ea70 |= (_0x4dc3c2["DOMTokenList"] && _0x4dc3c2["DOMTokenList"]["prototype"]["hasOwnProperty"]("replace")) << 4;
      _0x23ea70 |= (_0x4dc3c2["Symbol"] && _0x4dc3c2["Symbol"]["hasOwnProperty"] && _0x4dc3c2["Symbol"]["hasOwnProperty"]("hasInstance")) << 5;
      _0x23ea70 |= _0x4dc3c2["hasOwnProperty"]("isSecureContext") << 6;
      _0x23ea70 |= _0x4dc3c2["self"]["hasOwnProperty"]("origin") << 7;
      _0x23ea70 |= (_0x4dc3c2["PerformanceTiming"] && _0x4dc3c2["PerformanceTiming"]["prototype"]["hasOwnProperty"]("secureConnectionStart")) << 8;
      _0x23ea70 |= _0x4dc3c2["hasOwnProperty"]("showModalDialog") << 9;
      _0x23ea70 |= (_0x4dc3c2["HTMLDocument"] && _0x4dc3c2["HTMLDocument"]["prototype"]["hasOwnProperty"]("getSelection")) << 10;
      _0x23ea70 |= (_0x4dc3c2["HTMLMediaElement"] && _0x4dc3c2["HTMLMediaElement"]["prototype"]["hasOwnProperty"]("mozAutoplayEnabled")) << 11;

      var _0x587c87 = _0x48c930 + '|' + _0x23ea70;
    } else {
      var _0x587c87 = "0|0";
    }

    _0x504809["push"](_0x587c87);

    var _0x45bc75 = _0x4dc3c2["screen"];
    var _0x28e81c = _0x1edde9["documentElement"];

    var _0x146a64 = _0x45bc75["width"] || 0;

    var _0x433dbc = _0x45bc75["height"] || 0;

    var _0x4eca5a = _0x4dc3c2["innerWidth"] || _0x28e81c && _0x28e81c["clientWidth"] || _0x1edde9["body"] && _0x1edde9["body"]["clientWidth"] || 0;

    var _0x48bc2a = _0x4dc3c2["innerHeight"] || _0x28e81c && _0x28e81c["clientHeight"] || _0x1edde9["body"] && _0x1edde9["body"]["clientHeight"] || 0;

    var _0x1c44ac = _0x4dc3c2["screenTop"] || _0x4dc3c2["screenY"] || 0;

    var _0x53e0fd = _0x4dc3c2["screenLeft"] || _0x4dc3c2["screenX"] || 0;

    var _0xdf8911 = _0x146a64 + '|' + _0x433dbc + '|' + _0x4eca5a + '|' + _0x48bc2a + '|' + _0x1c44ac + '|' + _0x53e0fd;

    _0x504809["push"](_0xdf8911);

    var _0x3a2acb = _0x4dc3c2["hasOwnProperty"] && _0x4dc3c2["hasOwnProperty"]("history") ? _0x4dc3c2["history"]["length"] : -1;

    _0x504809["push"](_0x3a2acb);

    var _0x21e65b = navigator["platform"];

    _0x504809["push"](_0x21e65b);

    var _0xb29e11 = navigator["hardwareConcurrency"] || 0;

    _0x504809["push"](_0xb29e11);

    var _0x16debe = '';

    var _0x50941c = _0x4dc3c2["document"]["createElement"]("canvas");

    if (!_0x50941c["getContext"]) {
      _0x16debe = "ns|1";
    } else {
      var _0x52dd84 = _0x50941c["getContext"]("webgl") || _0x50941c["getContext"]("experimental-webgl");

      if (!_0x52dd84) {
        _0x16debe = "ns|2";
      } else {
        var _0x1f09d7 = _0x52dd84["getExtension"]("WEBGL_debug_renderer_info");

        if (!_0x1f09d7) {
          _0x16debe = "ns|3";
        } else {
          var _0x36fbd2 = _0x52dd84["getParameter"](_0x1f09d7["UNMASKED_VENDOR_WEBGL"]);

          var _0x56a1c8 = _0x52dd84["getParameter"](_0x1f09d7["UNMASKED_RENDERER_WEBGL"]);

          _0x16debe = _0x56a1c8 + '|' + _0x36fbd2;
        }
      }
    }

    _0x504809["push"](_0x16debe);

    var _0x52c558 = _0x45bc75["colorDepth"] + '|' + _0x45bc75["pixelDepth"];

    _0x504809["push"](_0x52c558);

    var _0x5c14bc = navigator["oscpu"] || 0;

    _0x504809["push"](_0x5c14bc);

    if (_0x4dc3c2["hasOwnProperty"]) {
      var _0x196cbc = _0x4dc3c2["hasOwnProperty"]("ApplePaySession") << 0;

      _0x196cbc |= _0x4dc3c2["hasOwnProperty"]("ApplePayError") << 1;
      _0x196cbc |= _0x4dc3c2["hasOwnProperty"]("Bluetooth") << 2;
      _0x196cbc |= _0x4dc3c2["hasOwnProperty"]("BluetoothDevice") << 3;
      _0x196cbc |= _0x4dc3c2["hasOwnProperty"]("BluetoothUUID") << 4;
    } else {
      var _0x196cbc = 0;
    }

    _0x504809["push"](_0x196cbc);

    var _0x5466fd = '';
    var _0x4a56a6 = _0x4dc3c2["navigator"]["plugins"];

    for (var _0x569e88 = 0; _0x4a56a6 && _0x569e88 < _0x4a56a6["length"]; _0x569e88++) {
      _0x5466fd += _0x4a56a6[_0x569e88]["name"] + _0x4a56a6[_0x569e88]["filename"];

      if (_0x4a56a6[_0x569e88]["version"]) {
        _0x5466fd += _0x4a56a6[_0x569e88]["version"] + "<br>";
      }

      for (var _0x28e56e = 0; _0x28e56e < _0x4a56a6[_0x569e88]["length"]; _0x28e56e++) {
        var _0x4d83bb = _0x4a56a6[_0x569e88][_0x28e56e];
        var _0x43f0d1 = 0;

        if (_0x4d83bb) {
          _0x43f0d1 = _0x4d83bb["type"];
        }

        if (_0x43f0d1) {
          _0x5466fd += _0x43f0d1["substring"](12);
        }
      }
    }

    var _0x401780 = _0x4a56a6 ? _0x4a56a6["length"] : 0;

    _0x5466fd = _0x401780 + '|' + _0x3a4abd(_0x5466fd, 0, 1);

    _0x504809["push"](_0x5466fd);

    var _0x50941c = _0x1edde9["createElement"]("canvas");

    if (_0x50941c["getContext"]) {
      var _0x596e03 = _0x50941c["getContext"]('2d');

      _0x50941c["height"] = 60;
      _0x50941c["width"] = 400;
      _0x50941c["style"]["display"] = "inline";
      _0x596e03["textBaseline"] = "alphabetic";
      _0x596e03["fillStyle"] = "#f60";

      _0x596e03["fillRect"](125, 1, 62, 20);

      _0x596e03["fillStyle"] = "#069";
      _0x596e03["font"] = "11pt no-real-font-123";

      _0x596e03["fillText"]("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);

      _0x596e03["fillStyle"] = "rgba(102, 204, 0, 0.7)";
      _0x596e03["font"] = "18pt Arial";

      _0x596e03["fillText"]("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);

      var _0xf63d39 = _0x50941c["toDataURL"]() || '';

      _0xf63d39 = _0x3a4abd(_0xf63d39, 0, 1);
    } else {
      var _0xf63d39 = '';
    }

    _0x504809["push"](_0xf63d39);

    var _0x19430e = navigator["userAgent"];

    var _0x853b0d = _0x19430e ? _0x3a4abd(_0x19430e, 0, 1) : 0;

    _0x504809["push"](_0x853b0d);

    var _0x1d860e = _0x1edde9["hidden"] || _0x1edde9["mozHidden"] || false ? 0 : 1;

    _0x504809["push"](_0x1d860e);

    _0x504809["push"](0);

    var _0x34dc39 = (_0x45bc75["availWidth"] - _0x4dc3c2["outerWidth"] < 10) << 0;

    _0x504809["push"](_0x34dc39);

    function _0x5b2a10(_0x3102e1) {
      if (_0x3102e1) {
        return 1;
      } else {
        return 0;
      }
    }

    var _0x406166 = '';

    try {
      _0x406166 = _0x1edde9["documentElement"]["getAttribute"] && _0x1edde9["documentElement"]["getAttribute"]("webdriver");
    } catch (_0x105653) {}

    var _0xe6ad16 = 0;

    if (_0x4dc3c2["hasOwnProperty"]) {
      Object["keys"](_0x1edde9)["forEach"](function (_0x5a7243) {
        var _0x4cd3ad = _0x4dc3c2["document"][_0x5a7243];

        if (_0x4cd3ad && _0x4cd3ad["hasOwnProperty"]("idPrefix_") && _0x4cd3ad["hasOwnProperty"]("cache_") && _0x4cd3ad["hasOwnProperty"]("nextId_")) {
          _0xe6ad16 = 1;
        }
      });
    }

    var _0x35625a = new Date();

    var _0x569e88 = 0;

    _0x35625a["toString"] = function () {
      _0x569e88++;

      if (_0x569e88 == 2) {
        return '';
      }
    };

    // console["log"](_0x35625a);

    var _0x331995 = _0x569e88 > 1 ? 1 : 0;

    var _0x5caec5 = 0;
    _0x5caec5 |= _0x5b2a10(_0x331995) << 0;
    _0x5caec5 |= _0x5b2a10(navigator["webdriver"]) << 1;
    _0x5caec5 |= _0x5b2a10(_0xe6ad16) << 2;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["_phantom"]) << 3;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["callPhantom"]) << 4;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["phantom"]) << 5;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["spawn"]) << 6;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["emit"]) << 7;
    _0x5caec5 |= _0x5b2a10(_0x406166) << 8;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["Buffer"]) << 9;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["domAutomation"]) << 10;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["webdriver"]) << 11;
    _0x5caec5 |= _0x5b2a10(_0x1edde9["__webdriver_script_fn"]) << 12;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["fxdriver_id"]) << 13;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["__fxdriver_unwrapped"]) << 14;
    _0x5caec5 |= _0x5b2a10(_0x4dc3c2["ClientUtils"]) << 15;

    _0x504809["push"](_0x5caec5);
  };

  var _0x470b3b = function () {
    var _0x13f193 = (screen["availWidth"] - _0x4dc3c2["outerWidth"] < 10) << 0;

    _0x504809[21] = _0x13f193;
  };

  var _0x5b0170, _0x5ad872;

  if (typeof _0x1edde9["hidden"] !== "undefined") {
    _0x5b0170 = "hidden";
    _0x5ad872 = "visibilitychange";
  } else {
    if (typeof _0x1edde9["mozHidden"] !== "undefined") {
      _0x5b0170 = "mozHidden";
      _0x5ad872 = "mozvisibilitychange";
    } else {
      if (typeof _0x1edde9["msHidden"] !== "undefined") {
        _0x5b0170 = "msHidden";
        _0x5ad872 = "msvisibilitychange";
      } else {
        if (typeof _0x1edde9["webkitHidden"] !== "undefined") {
          _0x5b0170 = "webkitHidden";
          _0x5ad872 = "webkitvisibilitychange";
        }
      }
    }
  }

  if (_0x1edde9["addEventListener"] && _0x5b0170) {
    _0x1edde9["addEventListener"](_0x5ad872, function () {
      var _0x7f788e = _0x1edde9[_0x5b0170];

      if (!_0x7f788e && _0x504809["length"] > 20) {
        _0x504809[20]++;
      }
    });
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]('on' + _0x5ad872, function () {
        var _0x434e7a = _0x1edde9[_0x5b0170];

        if (!_0x434e7a && _0x504809["length"] > 20) {
          _0x504809[20]++;
        }
      });
    }
  }

  var _0x2ec62e = 0;
  var _0x34d12b = 0;
  var _0x49702c = _0x115345;
  var _0xe42a8b = 0;
  var _0x116d64 = 0;

  if (_0x1edde9["addEventListener"]) {
    _0x1edde9["addEventListener"]("mousemove", function (_0x3723f7) {
      if (!_0x5a4ca3) {
        if (_0xe42a8b > _0x1897e0) {
          var _0x44dd8b = _0x4027ae[1]["split"]('+');

          var _0x5956f3 = _0x4027ae[0]["split"]('+');

          _0x4027ae[1] = parseInt(_0x44dd8b[0]) + parseInt(_0x5956f3[0]) + '+' + (parseInt(_0x44dd8b[1]) + parseInt(_0x5956f3[1])) + '+' + (parseInt(_0x44dd8b[2]) + parseInt(_0x5956f3[2]));

          _0x4027ae["shift"]();
        }

        _0xe42a8b++;
        var _0x368522 = _0x3723f7["pageX"];
        var _0x5cb441 = _0x3723f7["pageY"];

        if (_0x368522 === undefined) {
          var _0x56566d = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

          var _0x1c6c18 = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

          _0x368522 = _0x3723f7["clientX"] + _0x56566d;
          _0x5cb441 = _0x3723f7["clientY"] + _0x1c6c18;
        }

        var _0x456c9b = _0x368522 - _0x2ec62e;

        var _0xa18d83 = _0x5cb441 - _0x34d12b;

        var _0x50480a = new Date()["getTime"]() - _0x49702c;

        if (_0xe42a8b == 1) {
          _0x116d64 = _0x50480a;
        }

        _0x504809[3]++;

        _0x4027ae["push"](_0x456c9b + '+' + _0xa18d83 + '+' + _0x50480a);

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x2ec62e = _0x368522;
        _0x34d12b = _0x5cb441;
        _0x49702c = _0x49702c + _0x50480a;
      }
    }, true);
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]("onmousemove", function () {
        if (!_0x5a4ca3) {
          if (_0xe42a8b > _0x1897e0) {
            var _0x2a72e8 = _0x4027ae[1]["split"]('+');

            var _0x3a59c2 = _0x4027ae[0]["split"]('+');

            _0x4027ae[1] = parseInt(_0x2a72e8[0]) + parseInt(_0x3a59c2[0]) + '+' + (parseInt(_0x2a72e8[1]) + parseInt(_0x3a59c2[1])) + '+' + (parseInt(_0x2a72e8[2]) + parseInt(_0x3a59c2[2]));

            _0x4027ae["shift"]();
          }

          _0xe42a8b++;
          var _0x48a16d = event["pageX"];
          var _0x8c5de7 = event["pageY"];

          if (_0x48a16d === undefined) {
            var _0x88a4ec = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

            var _0x28d0dc = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

            _0x48a16d = event["clientX"] + _0x88a4ec;
            _0x8c5de7 = event["clientY"] + _0x28d0dc;
          }

          var _0x262ad4 = _0x48a16d - _0x2ec62e;

          var _0x396f67 = _0x8c5de7 - _0x34d12b;

          var _0x2d209a = new Date()["getTime"]() - _0x49702c;

          if (_0xe42a8b == 1) {
            _0x116d64 = _0x2d209a;
          }

          _0x504809[3]++;

          _0x4027ae["push"](_0x262ad4 + '+' + _0x396f67 + '+' + _0x2d209a);

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x2ec62e = _0x48a16d;
          _0x34d12b = _0x8c5de7;
          _0x49702c = _0x49702c + _0x2d209a;
        }
      });
    }
  }

  var _0x503a39 = _0x115345;
  var _0x1172ca = 0;
  var _0x1a55c4 = 0;

  if (_0x1edde9["addEventListener"]) {
    _0x1edde9["addEventListener"]("mousedown", function (_0xc46c7d) {
      _0x470b3b();

      if (!_0x5a4ca3) {
        if (_0x1172ca > _0x227762) {
          _0x31a908["shift"]();
        }

        _0x1172ca++;
        var _0x4c7357 = _0xc46c7d["pageX"];
        var _0x522057 = _0xc46c7d["pageY"];

        if (_0x4c7357 === undefined) {
          var _0x3a269e = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

          var _0x347cfb = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

          _0x4c7357 = _0xc46c7d["clientX"] + _0x3a269e;
          _0x522057 = _0xc46c7d["clientY"] + _0x347cfb;
        }

        var _0x3bbe40 = parseInt(_0x4c7357);

        var _0x4454fc = parseInt(_0x522057);

        var _0x13f4de = new Date()["getTime"]() - _0x503a39;

        var _0x795883 = _0xc46c7d["which"] ? _0xc46c7d["which"] : 9;

        if (_0x1172ca == 1) {
          _0x1a55c4 = _0x13f4de;
        }

        _0x504809[3]++;

        _0x31a908["push"](_0x795883 + '0' + '+' + _0x3bbe40 + '+' + _0x4454fc + '+' + _0x13f4de);

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x503a39 = _0x503a39 + _0x13f4de;
      }
    }, true);

    _0x1edde9["addEventListener"]("mouseup", function (_0x5a8902) {
      if (!_0x5a4ca3) {
        if (_0x1172ca > _0x227762) {
          _0x31a908["shift"]();
        }

        _0x1172ca++;
        var _0x30f4b0 = _0x5a8902["pageX"];
        var _0x3c2996 = _0x5a8902["pageY"];

        if (_0x30f4b0 === undefined) {
          var _0x2e30b3 = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

          var _0x2bcb04 = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

          _0x30f4b0 = _0x5a8902["clientX"] + _0x2e30b3;
          _0x3c2996 = _0x5a8902["clientY"] + _0x2bcb04;
        }

        var _0x3c38cd = parseInt(_0x30f4b0);

        var _0x2debd2 = parseInt(_0x3c2996);

        var _0x1e0098 = new Date()["getTime"]() - _0x503a39;

        var _0x233a43 = _0x5a8902["which"] ? _0x5a8902["which"] : 9;

        if (_0x1172ca == 1) {
          _0x1a55c4 = _0x1e0098;
        }

        _0x504809[3]++;

        _0x31a908["push"](_0x233a43 + '1' + '+' + _0x3c38cd + '+' + _0x2debd2 + '+' + _0x1e0098);

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x503a39 = _0x503a39 + _0x1e0098;
      }
    }, true);
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]("onmousedown", function () {
        _0x470b3b();

        if (!_0x5a4ca3) {
          if (_0x1172ca > _0x227762) {
            _0x31a908["shift"]();
          }

          _0x1172ca++;
          var _0x3180e6 = event["pageX"];
          var _0x51783c = event["pageY"];

          if (_0x3180e6 === undefined) {
            var _0x475f6d = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

            var _0x537638 = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

            _0x3180e6 = event["clientX"] + _0x475f6d;
            _0x51783c = event["clientY"] + _0x537638;
          }

          var _0x2fabd4 = parseInt(_0x3180e6);

          var _0x2cb549 = parseInt(_0x51783c);

          var _0x599a4b = new Date()["getTime"]() - _0x503a39;

          var _0x2708d1 = event["which"] ? event["which"] : 9;

          if (_0x1172ca == 1) {
            _0x1a55c4 = _0x599a4b;
          }

          _0x504809[3]++;

          _0x31a908["push"](_0x2708d1 + '0' + '+' + _0x2fabd4 + '+' + _0x2cb549 + '+' + _0x599a4b);

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x503a39 = _0x503a39 + _0x599a4b;
        }
      });

      _0x1edde9["attachEvent"]("onmouseup", function () {
        if (!_0x5a4ca3) {
          if (_0x1172ca > _0x227762) {
            _0x31a908["shift"]();
          }

          _0x1172ca++;
          var _0x14c27e = event["pageX"];
          var _0x2c3dfd = event["pageY"];

          if (_0x14c27e === undefined) {
            var _0x8a6515 = _0x1edde9["body"] ? _0x1edde9["body"]["scrollLeft"] : 0;

            var _0x36e85e = _0x1edde9["body"] ? _0x1edde9["body"]["scrollTop"] : 0;

            _0x14c27e = event["clientX"] + _0x8a6515;
            _0x2c3dfd = event["clientY"] + _0x36e85e;
          }

          var _0x3f366a = parseInt(_0x14c27e);

          var _0x156d2f = parseInt(_0x2c3dfd);

          var _0x56999b = new Date()["getTime"]() - _0x503a39;

          var _0x53b1b5 = event["which"] ? event["which"] : 9;

          if (_0x1172ca == 1) {
            _0x1a55c4 = _0x56999b;
          }

          _0x504809[3]++;

          _0x31a908["push"](_0x53b1b5 + '1' + '+' + _0x3f366a + '+' + _0x156d2f + '+' + _0x56999b);

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x503a39 = _0x503a39 + _0x56999b;
        }
      });
    }
  }

  var _0x2c1d9b = 0;
  var _0x1588f5 = 0;
  var _0xb41259 = _0x115345;
  var _0x52d681 = 0;
  var _0x10ccc1 = 0;

  if (_0x1edde9["addEventListener"]) {
    _0x1edde9["addEventListener"]("touchmove", function (_0x3e4f95) {
      _0x5a4ca3 = true;

      if (_0x5a4ca3) {
        if (_0x52d681 > _0x1897e0) {
          var _0x24c296 = _0x18ab0f[1]["split"]('+');

          var _0x394b30 = _0x18ab0f[0]["split"]('+');

          _0x18ab0f[1] = parseInt(_0x24c296[0]) + parseInt(_0x394b30[0]) + '+' + (parseInt(_0x24c296[1]) + parseInt(_0x394b30[1])) + '+' + (parseInt(_0x24c296[2]) + parseInt(_0x394b30[2]));

          _0x18ab0f["shift"]();
        }

        _0x52d681++;

        var _0x24dc26 = parseInt(_0x3e4f95["touches"][0]["pageX"]) - _0x2c1d9b;

        var _0x284a96 = parseInt(_0x3e4f95["touches"][0]["pageY"]) - _0x1588f5;

        var _0x50ae8a = new Date()["getTime"]() - _0xb41259;

        _0x504809[3]++;

        _0x18ab0f["push"](_0x24dc26 + '+' + _0x284a96 + '+' + _0x50ae8a);

        if (_0x52d681 == 1) {
          _0x10ccc1 = _0x50ae8a;
        }

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x2c1d9b = parseInt(_0x3e4f95["touches"][0]["pageX"]);
        _0x1588f5 = parseInt(_0x3e4f95["touches"][0]["pageY"]);
        _0xb41259 = _0xb41259 + _0x50ae8a;
      }
    }, true);
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]("ontouchmove", function () {
        _0x5a4ca3 = true;

        if (_0x5a4ca3) {
          if (_0x52d681 > _0x1897e0) {
            var _0x290fa3 = _0x18ab0f[1]["split"]('+');

            var _0x577a88 = _0x18ab0f[0]["split"]('+');

            _0x18ab0f[1] = parseInt(_0x290fa3[0]) + parseInt(_0x577a88[0]) + '+' + (parseInt(_0x290fa3[1]) + parseInt(_0x577a88[1])) + '+' + (parseInt(_0x290fa3[2]) + parseInt(_0x577a88[2]));

            _0x18ab0f["shift"]();
          }

          _0x52d681++;

          var _0x411e71 = parseInt(event["touches"][0]["pageX"]) - _0x2c1d9b;

          var _0x590bd3 = parseInt(event["touches"][0]["pageY"]) - _0x1588f5;

          var _0x2ec1b4 = new Date()["getTime"]() - _0xb41259;

          _0x504809[3]++;

          _0x18ab0f["push"](_0x411e71 + '+' + _0x590bd3 + '+' + _0x2ec1b4);

          if (_0x52d681 == 1) {
            _0x10ccc1 = _0x2ec1b4;
          }

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x2c1d9b = parseInt(event["touches"][0]["pageX"]);
          _0x1588f5 = parseInt(event["touches"][0]["pageY"]);
          _0xb41259 = _0xb41259 + _0x2ec1b4;
        }
      });
    }
  }

  var _0x115a99 = _0x115345;
  var _0x588d70 = 0;
  var _0x3672c8 = 0;

  if (_0x1edde9["addEventListener"]) {
    _0x1edde9["addEventListener"]("touchstart", function (_0x3be72d) {
      _0x470b3b();

      _0x5a4ca3 = true;

      if (_0x5a4ca3) {
        if (_0x588d70 > _0x227762) {
          _0x51f298["shift"]();
        }

        _0x588d70++;

        var _0x368119 = parseInt(_0x3be72d["touches"][0]["pageX"]);

        var _0x326577 = parseInt(_0x3be72d["touches"][0]["pageY"]);

        var _0x50c917 = new Date()["getTime"]() - _0x115a99;

        _0x504809[3]++;

        _0x51f298["push"]("0+" + _0x368119 + '+' + _0x326577 + '+' + _0x50c917);

        if (_0x588d70 == 1) {
          _0x3672c8 = _0x50c917;
        }

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x115a99 = _0x115a99 + _0x50c917;
      }
    }, true);

    _0x1edde9["addEventListener"]("touchend", function (_0x591513) {
      _0x5a4ca3 = true;

      if (_0x5a4ca3) {
        if (_0x588d70 > _0x227762) {
          _0x51f298["shift"]();
        }

        _0x588d70++;

        var _0x7a461d = parseInt(_0x591513["changedTouches"][0]["pageX"]);

        var _0x12a6a4 = parseInt(_0x591513["changedTouches"][0]["pageY"]);

        var _0x6a4cb8 = new Date()["getTime"]() - _0x115a99;

        _0x504809[3]++;

        _0x51f298["push"]("1+" + _0x7a461d + '+' + _0x12a6a4 + '+' + _0x6a4cb8);

        if (_0x588d70 == 1) {
          _0x3672c8 = _0x6a4cb8;
        }

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x115a99 = _0x115a99 + _0x6a4cb8;
      }
    }, true);
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]("ontouchstart", function () {
        _0x470b3b();

        _0x5a4ca3 = true;

        if (_0x5a4ca3) {
          if (_0x588d70 > _0x227762) {
            _0x51f298["shift"]();
          }

          _0x588d70++;

          var _0x2e5d5e = parseInt(event["touches"][0]["pageX"]);

          var _0x4c6a30 = parseInt(event["touches"][0]["pageY"]);

          var _0x14dfe0 = new Date()["getTime"]() - _0x115a99;

          _0x504809[3]++;

          _0x51f298["push"]("0+" + _0x2e5d5e + '+' + _0x4c6a30 + '+' + _0x14dfe0);

          if (_0x588d70 == 1) {
            _0x3672c8 = _0x14dfe0;
          }

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x115a99 = _0x115a99 + _0x14dfe0;
        }
      });

      _0x1edde9["attachEvent"]("ontouchend", function () {
        _0x5a4ca3 = true;

        if (_0x5a4ca3) {
          if (_0x588d70 > _0x227762) {
            _0x51f298["shift"]();
          }

          _0x588d70++;

          var _0x575b3 = parseInt(event["changedTouches"][0]["pageX"]);

          var _0x56f6b4 = parseInt(event["changedTouches"][0]["pageY"]);

          var _0x3d87b5 = new Date()["getTime"]() - _0x115a99;

          _0x504809[3]++;

          _0x51f298["push"]("1+" + _0x575b3 + '+' + _0x56f6b4 + '+' + _0x3d87b5);

          if (_0x588d70 == 1) {
            _0x3672c8 = _0x3d87b5;
          }

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x115a99 = _0x115a99 + _0x3d87b5;
        }
      });
    }
  }

  var _0x31ffc9 = _0x115345;
  var _0x3e0bf2 = 0;

  if (_0x1edde9["addEventListener"]) {
    _0x1edde9["addEventListener"]("keydown", function (_0x3ce15f) {
      if (_0x3e0bf2 <= _0x55fd70) {
        if (_0x3ce15f["isComposing"]) {
          _0x40c107[0] = 1;
        }

        _0x3e0bf2++;
        var _0x5943a6 = _0x3ce15f["code"];

        if (/(Key)[a-zA-Z]/["test"](_0x5943a6) || /(Digit)[0-9]/["test"](_0x5943a6)) {
          _0x5943a6 = '';
        }

        var _0x5347dd = new Date()["getTime"]() - _0x31ffc9;

        _0x504809[3]++;

        _0x40c107["push"]('0' + _0x5347dd);

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x31ffc9 = _0x31ffc9 + _0x5347dd;
      }
    }, true);

    _0x1edde9["addEventListener"]("keyup", function (_0xef0b7b) {
      if (_0x3e0bf2 <= _0x55fd70) {
        if (_0xef0b7b["isComposing"]) {
          _0x40c107[0] = 1;
        }

        _0x3e0bf2++;
        var _0x4b3d45 = _0xef0b7b["code"];

        if (/(Key)[a-zA-Z]/["test"](_0x4b3d45) || /(Digit)[0-9]/["test"](_0x4b3d45)) {
          _0x4b3d45 = '';
        }

        var _0x51287a = new Date()["getTime"]() - _0x31ffc9;

        _0x504809[3]++;

        _0x40c107["push"]('1' + _0x51287a);

        _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
        _0x31ffc9 = _0x31ffc9 + _0x51287a;
      }
    }, true);
  } else {
    if (_0x1edde9["attachEvent"]) {
      _0x1edde9["attachEvent"]("onkeydown", function () {
        if (_0x3e0bf2 <= _0x55fd70) {
          if (event["isComposing"]) {
            _0x40c107[0] = 1;
          }

          _0x3e0bf2++;
          var _0x2604e6 = event["code"];

          if (/(Key)[a-zA-Z]/["test"](_0x2604e6) || /(Digit)[0-9]/["test"](_0x2604e6)) {
            _0x2604e6 = '';
          }

          var _0x424ea4 = new Date()["getTime"]() - _0x31ffc9;

          _0x504809[3]++;

          _0x40c107["push"]('0' + _0x424ea4);

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x31ffc9 = _0x31ffc9 + _0x424ea4;
        }
      });

      _0x1edde9["attachEvent"]("onkeyup", function () {
        if (_0x3e0bf2 <= _0x55fd70) {
          if (event["isComposing"]) {
            _0x40c107[0] = 1;
          }

          _0x3e0bf2++;
          var _0x46a344 = event["code"];

          if (/(Key)[a-zA-Z]/["test"](_0x46a344) || /(Digit)[0-9]/["test"](_0x46a344)) {
            _0x46a344 = '';
          }

          var _0x272392 = new Date()["getTime"]() - _0x31ffc9;

          _0x504809[3]++;

          _0x40c107["push"]('1' + _0x272392);

          _0x1edde9["cookie"] = "ssxmod_itna=" + _0x2f1849(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x1edde9["cookie"] = "ssxmod_itna2=" + _0x4a28d2(_0x5a4ca3) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
          _0x31ffc9 = _0x31ffc9 + _0x272392;
        }
      });
    }
  }

  _0x504809["push"](_0x3a4abd((4294967295 * Math["random"]() >>> 0) + '|' + _0x115345, 0, 1));

  _0x504809["push"](_0x67a304);

  _0x504809["push"](_0x115345);

  _0x504809["push"](_0x1554eb);

  _0x49707e();

  var _0x46e7af = new Date(_0x115345 + 15552000000)["toUTCString"]();

  _0x1edde9["cookie"] = "ssxmod_itna=" + _0x26e95f["compressToBase64"](_0x504809["join"]('^')) + "; domain=" + _0x25493e + "; path=/; expires=" + _0x46e7af;
}();
function get_ck(){
    return document.cookie
}

console.log(get_ck())