window = {}
window.btoa = require('btoa')
// md5 导包
// var hex_md5 = require('md5');
// md5 原生方法
var hexcase = 0;
var chrsz = 8;

function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}

function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
    }
    return str;
}

function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    return bin;
}

function core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);

}

function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}

function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}

function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

var _$oa = ['T094QUw=', 'dmFsdWVPZg==', 'b2t0U0k=', 'cmVsb2Fk', 'WkRuaUk=', 'Z0tKYmM=', 'c2lnbj0=', 'RmNYdm4=', 'aW5wdXQ=', 'XCtcKyAqKD86W2EtekEtWl8kXVswLTlhLXpBLVpfJF0qKQ==', 'YWlkaW5nX3dpbg==', 'R0lxdEE=', 'aGpIUGI=', 'dUVMRGw=', 'S0pXdkg=', 'YWN0aW9u', 'ZGVidQ==', 'WWdKd2U=', 'TXV6bEQ=', 'b0pXdHo=', 'WVpNbFg=', 'U0pKT0w=', 'c3BzVmg=', 'TkxzZU4=', 'Y05ndGo=', 'Tm5IbGQ=', 'c3RyaW5n', 'WFdKUEo=', 'R09XUEs=', 'd0tubUQ=', 'S0JTblA=', 'QmFSYWs=', 'TklCd1Y=', 'UGdUS08=', 'bHdrV2Y=', 'R0hwRlo=', 'bGF3S1A=', 'Q0pEc1E=', 'eWpwY3o=', 'SnVWc0Q=', 'cXNsdHM=', 'ZHJwWU0=', 'REFaVGo=', 'UGhlWXk=', 'TnZJQ3c=', 'bmVqc2I=', 'bGVuZ3Ro', 'ZHNGaVI=', 'TFNMa0Q=', 'QXJmeEQ=', 'b3FQa0s=', 'aFdTZVA=', 'Z1B2SnU=', 'd2hpbGUgKHRydWUpIHt9', 'cWZGam4=', 'bG9n', 'aWVjQkg=', 'aXJac3Y=', 'WU1sRno=', 'RFdISWQ=', 'Z2dlcg==', 'VGxCd1Y=', 'YXBwbHk=', 'T1NwTFk=', 'WHdISHQ=', 'VkVZTkM=', 'Y29va2ll', 'V0tTS3g=', 'cFhVWHU=', 'WVRJZ28=', 'cm91bmQ=', 'dmdmalk=', 'WGdsU3o=', 'YnRvYQ==', 'Y2hhaW4=', 'c3RhdGVPYmplY3Q=', 'Wm9iQmM=', 'cFZCR0I=', 'QW9XU3g=', 'Y29uc3RydWN0b3I=', 'dGVzdA==', 'Y2RUWnY=', 'aFh1aXQ=', 'Z3VwSkU=', 'eGRlemg=', 'R0hES2k=', 'dlNkWWU=', 'eHloa3Q=', 'RmdPVEE=', 'bm5QcVQ=', 'R25Pb2M=', 'Z21oWHc=', 'UkR3VFA=', 'dWNya0s=', 'WElIc0k=', '5q2k572R6aG15Y+X44CQ54ix6ZSt5LqR55u+IFYxLjAg5Yqo5oCB54mI44CR5L+d5oqk', 'ZEhQR2w=', 'OyBwYXRoPS8=', 'S0JLSWc=', 'ektPUHo=', 'RFVvZEw=', 'Q0dzZFI=', 'eXhrbUg=', 'ZUJZVlU='];
(function (a, b) {
    var c = function (f) {
        while (--f) {
            a['push'](a['shift']());
        }
    };
    c(++b);
}(_$oa, 0xb9));
var _$ob = function (a, b) {
    a = a - 0x0;
    var c = _$oa[a];
    if (_$ob['EBKKMN'] === undefined) {
        (function () {
            var f;
            try {
                var h = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                f = h();
            } catch (i) {
                f = window;
            }
            var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            f['atob'] || (f['atob'] = function (j) {
                    var k = String(j)['replace'](/=+$/, '');
                    var l = '';
                    for (var m = 0x0, n, o, p = 0x0; o = k['charAt'](p++); ~o && (n = m % 0x4 ? n * 0x40 + o : o,
                    m++ % 0x4) ? l += String['fromCharCode'](0xff & n >> (-0x2 * m & 0x6)) : 0x0) {
                        o = g['indexOf'](o);
                    }
                    return l;
                }
            );
        }());
        _$ob['ZKRXSm'] = function (e) {
            var f = atob(e);
            var g = [];
            for (var h = 0x0, j = f['length']; h < j; h++) {
                g += '%' + ('00' + f['charCodeAt'](h)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(g);
        }
        ;
        _$ob['yXHsxn'] = {};
        _$ob['EBKKMN'] = !![];
    }
    var d = _$ob['yXHsxn'][a];
    if (d === undefined) {
        c = _$ob['ZKRXSm'](c);
        _$ob['yXHsxn'][a] = c;
    } else {
        c = d;
    }
    return c;
};
var a = {
    'DWHId': function (d, e) {
        return d !== e;
    },
    'YZMlX': _$ob('0x19'),
    'KJWvH': 'Hxvmz',
    'cNgtj': function (d, e) {
        return d !== e;
    },
    'DUodL': _$ob('0x43'),
    'spsVh': 'wfYQT',
    'ArfxD': function (d) {
        return d();
    },
    'drpYM': function (d, e) {
        return d === e;
    },
    'ohpjI': _$ob('0x15'),
    'xdezh': _$ob('0x64'),
    'gupJE': 'function\x20*\x5c(\x20*\x5c)',
    'GHDKi': _$ob('0x20'),
    'OOxAL': function (d, e) {
        return d(e);
    },
    'CJDsQ': 'init',
    'GnOoc': function (d, e) {
        return d + e;
    },
    'YMlFz': _$ob('0x61'),
    'OSpLY': _$ob('0x1f'),
    'NnHld': function (d, e) {
        return d(e);
    },
    'ZobBc': function (d, e) {
        return d(e);
    },
    'JuVsD': function (d, e) {
        return d + e;
    },
    'dsFiR': function (d, e) {
        return d + e;
    },
    'nejsb': function (d, e, f) {
        return d(e, f);
    },
    'WPIAh': function (d, e) {
        return d === e;
    },
    'PheYy': _$ob('0x41'),
    'XglSz': _$ob('0xe'),
    'hWSeP': function (d, e) {
        return d + e;
    },
    'gPvJu': _$ob('0x21'),
    'pXUXu': function (d, e) {
        return d(e);
    },
    'ofmPW': function (d, e) {
        return d + e;
    },
    'CGsdR': function (d, e) {
        return d / e;
    },
    'irZsv': function (d, e) {
        return d + e;
    },
    'KBSnP': function (d, e) {
        return d + e;
    },
    'qslts': function (d, e) {
        return d + e;
    },
    'yjpcz': function (d, e) {
        return d + e;
    },
    'gmhXw': _$ob('0x1d'),
    'iecBH': _$ob('0x10')
};

function cookie(timestamp) {
    // var c = new Date()[_$ob('0x18')]();
    var c = timestamp
    token = window[_$ob('0x60')](a[_$ob('0x4a')](a[_$ob('0x4b')], a[_$ob('0x63')](String, c)));
    md = a[_$ob('0x5b')](hex_md5, window[_$ob('0x60')](a['ofmPW'](a[_$ob('0x4b')], a['pXUXu'](String, Math[_$ob('0x5d')](a[_$ob('0x14')](c, 0x3e8))))));
    var cookie = a['ofmPW'](a[_$ob('0x50')](a[_$ob('0x35')](a[_$ob('0x35')](a[_$ob('0x3f')](a[_$ob('0x3d')](a[_$ob('0xa')], Math['round'](a['CGsdR'](c, 0x3e8))), '~'), token), '|'), md), a[_$ob('0x4f')]);
    return cookie.split(';')[0].split('sign=')[1]
}

console.log(cookie(1587102734000))