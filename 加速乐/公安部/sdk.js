var CryptoJS = require('crypto-js')

var _0x518c = ['VcK5FnY=', 'w77CnMOVUg==', 'wrRZCB4=', 'WUQKSA==', 'Q38OVQ==', 'w4fDsVcU', 'TsOHwpvCsg==', 'Z8KxwqYA', 'wpYFSEk=', 'XMKfw5PDlw==', 'wrQHbwo=', 'w6vCuzcZ', 'ZsKYw5HDlg==', 'w7LCuBgy', 'w7/CsQcI', 'TRdMRA==', 'w5Jbw5XCmw==', 'w6Vaw5PCpA==', 'XsOsRcOS', 'RB/DksKm', 'wpFew7I7', 'w4F3MDg=', 'w7zChGYO', 'w7VHw4LDqg==', 'wrIRc0I=', 'dU/CpMO1', 'XHjDr8Ks', 'X8OLIMOc', 'w6LCnsOoUA==', 'w4nCtxAT', 'wrdlESs=', 'w7fCgC0B', 'WMOXwpHCpg==', 'w7/DsRtB', 'DRFlYg==', 'BGwYwr4=', 'd8OfwoXCqA==', 'S8OlwoXCpA==', 'LFonwqA=', 'wp9Sw7Z4', 'UXnDmMK1', 'w7PCpcOCUg==', 'w6QEw75e', 'csK9wqEl', 'wqEMRyA=', 'TMKvIFk=', 'wrLChG0H', 'wpDCgmQF', 'w6nDnGAJ', 'KThXRQ==', 'ckrDucK2', 'cgHDnsKi', 'wrsMWxg=', 'wqTDv8KbDg==', 'cMO1d8OB', 'wppiw51Q', 'wqkwUls=', 'GX0dwpk=', 'wp1Pw796', 'TsOHwrPCow==', 'w5zDrsOvKg==', 'w6F6IzM=', 'wq9iw4o+', 'Q8KMwpY1', 'AsO1fFg=', 'w7bCosOAWw==', 'bMKBw5DDrA==', 'w6gCw6gd', 'R8OBwobCkw==', 'w4HCj8OVTA==', 'w5Y5wqLCqg==', 'wpMpwpIQ', 'wpUURVg=', 'w7LDpzIS', 'csKCFlk=', 'bsOLKQ==', 'w6TCrsORVA==', 'D8OKekM=', 'fsO0wo3CjQ==', 'VMKXwqMU', 'w6LCo8ObXA==', 'w5zCtSID', 'w4Q7w7kZ', 'wohUw7Fu', 'WsOTRsO4', 'd8KOwptZ', 'woRsw6LDsA==', 'Ox0dwqQ=', 'ccK1wrM=', 'EHgOwqI=', 'XmsaTw==', 'wo5Ow74v', 'wo3CvgQv', 'DhIkwro=', 'wqvDqsOdWA==', 'wpDDqCMZ', 'w5UowrjCsw==', 'f8KSZcOJ', 'djFMWg==', 'C38Jwrc=', 'a8K9Dn4=', 'w77CpCYH', 'w6HDv8OLAw==', 'wovChMO2IQ==', 'w7ETw6ta', 'YMKQRsOW', 'aMKBwpYj', 'dcOsLsOs', 'wrvDmBgR', 'wolhw64o', 'b8Kfw5PDiw==', 'w6nCq8OCWw==', 'IsOyfXE=', 'wp/CqMOfAw==', 'w6dYB0w=', 'wqTDjRof', 'w7FaFQ==', 'wogbJsOu', 'MWnDu8O4', 'wrvDpRAQ', 'w4Vww47Dhw==', 'Fn4JwqM=', 'w6LCvMOCcw==', 'UMOowpLCpg==', 'wrMEfMOF', 'WsKFwrpC', 'w6LCuzUf', 'DT1sJw==', 'wqTCvDUG', 'wrgzNMOU', 'acK/wrBX', 'wq0ZRDc=', 'bsOzwpLCow==', 'w4E8wqTCpg==', 'eztBwqk=', 'TMKJMUs=', 'RMOdJcOI', 'w6c9ZMOz', 'woTCmcO2Jw==', 'w7PCiRse', 'w5A3w7ou', 'wr/CshM9', 'wrDCncKNwqU=', 'w6TCmcOfVg==', 'RWjDhMKY', 'w4LCjxQf', 'GhZp', '6K2y5rKY6auN6K6x', 'w5Row6/Clw==', 'fsKwecO2', 'VcOrK8O7', 'w6o7RcO0', 'woUuMyQ=', 'wrHClsOjOQ==', 'w5Yxw6xf', 'Sn8MUw==', 'ZsOHRMOA', 'STTDtcKb', 'csKewpZg', 'wpA8ZDg=', 'w6J6w7bDqw==', 'wrQNUBk=', 'LcOHw5gO', 'csKAwrxo', 'YRnDmsKr', 'w6RadwI=', 'Y8KywrNS', 'w6d9FDU=', 'w5vCisOfSA==', 'wqnCoykU', 'BsO3w6MG', 'fyjDnMKV', 'w6nCp8OGTw==', 'wofCoMO1Fg==', 'w6bDuGgw', 'eyFXWQ==', 'w6BbBCk=', 'w5tkw7LDtw==', 'BjYSwp8=', 'w73DkCYd', 'Q8OSwojCng=='];
(function (_0x353424, _0x518c0e) {
    var _0x473b2e = function (_0x5201e0) {
        while (--_0x5201e0) {
            _0x353424['push'](_0x353424['shift']());
        }
    };
    _0x473b2e(++_0x518c0e);
}(_0x518c, 0x143));
var _0x473b = function (_0x353424, _0x518c0e) {
    _0x353424 = _0x353424 - 0x0;
    var _0x473b2e = _0x518c[_0x353424];
    if (_0x473b['pSUJmD'] === undefined) {
        (function () {
            var _0x1bb192 = function () {
                var _0x3989ef;
                try {
                    _0x3989ef = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x45e267) {
                    _0x3989ef = window;
                }
                return _0x3989ef;
            };
            var _0x328d2e = _0x1bb192();
            var _0x328264 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x328d2e['atob'] || (_0x328d2e['atob'] = function (_0x5c6e39) {
                var _0x59cf5b = String(_0x5c6e39)['replace'](/=+$/, '');
                var _0x3c9d8d = '';
                for (var _0x6401f2 = 0x0, _0x34e290, _0x540a1f, _0x46eb4e = 0x0; _0x540a1f = _0x59cf5b['charAt'](_0x46eb4e++); ~_0x540a1f && (_0x34e290 = _0x6401f2 % 0x4 ? _0x34e290 * 0x40 + _0x540a1f : _0x540a1f, _0x6401f2++ % 0x4) ? _0x3c9d8d += String['fromCharCode'](0xff & _0x34e290 >> (-0x2 * _0x6401f2 & 0x6)) : 0x0) {
                    _0x540a1f = _0x328264['indexOf'](_0x540a1f);
                }
                return _0x3c9d8d;
            });
        }());
        var _0x3e6dcd = function (_0x1df927, _0x4110bc) {
            var _0x421906 = [], _0x2e1fad = 0x0, _0x49b843, _0x170974 = '', _0x55b6a9 = '';
            _0x1df927 = atob(_0x1df927);
            for (var _0x3dcdaa = 0x0, _0x1d3c8e = _0x1df927['length']; _0x3dcdaa < _0x1d3c8e; _0x3dcdaa++) {
                _0x55b6a9 += '%' + ('00' + _0x1df927['charCodeAt'](_0x3dcdaa)['toString'](0x10))['slice'](-0x2);
            }
            _0x1df927 = decodeURIComponent(_0x55b6a9);
            var _0x579544;
            for (_0x579544 = 0x0; _0x579544 < 0x100; _0x579544++) {
                _0x421906[_0x579544] = _0x579544;
            }
            for (_0x579544 = 0x0; _0x579544 < 0x100; _0x579544++) {
                _0x2e1fad = (_0x2e1fad + _0x421906[_0x579544] + _0x4110bc['charCodeAt'](_0x579544 % _0x4110bc['length'])) % 0x100;
                _0x49b843 = _0x421906[_0x579544];
                _0x421906[_0x579544] = _0x421906[_0x2e1fad];
                _0x421906[_0x2e1fad] = _0x49b843;
            }
            _0x579544 = 0x0;
            _0x2e1fad = 0x0;
            for (var _0x4f2245 = 0x0; _0x4f2245 < _0x1df927['length']; _0x4f2245++) {
                _0x579544 = (_0x579544 + 0x1) % 0x100;
                _0x2e1fad = (_0x2e1fad + _0x421906[_0x579544]) % 0x100;
                _0x49b843 = _0x421906[_0x579544];
                _0x421906[_0x579544] = _0x421906[_0x2e1fad];
                _0x421906[_0x2e1fad] = _0x49b843;
                _0x170974 += String['fromCharCode'](_0x1df927['charCodeAt'](_0x4f2245) ^ _0x421906[(_0x421906[_0x579544] + _0x421906[_0x2e1fad]) % 0x100]);
            }
            return _0x170974;
        };
        _0x473b['AJZHUQ'] = _0x3e6dcd;
        _0x473b['zWvcCv'] = {};
        _0x473b['pSUJmD'] = !![];
    }
    var _0x5201e0 = _0x473b['zWvcCv'][_0x353424];
    if (_0x5201e0 === undefined) {
        if (_0x473b['BkACCf'] === undefined) {
            _0x473b['BkACCf'] = !![];
        }
        _0x473b2e = _0x473b['AJZHUQ'](_0x473b2e, _0x518c0e);
        _0x473b['zWvcCv'][_0x353424] = _0x473b2e;
    } else {
        _0x473b2e = _0x5201e0;
    }
    return _0x473b2e;
};

var _0x26e3e9 = {};
_0x26e3e9[_0x473b('0x4d', '%RfL') + 'v'] = _0x473b('0x12', 'X(m5') + _0x473b('0x7f', '97iH');
_0x26e3e9[_0x473b('0x8d', 'r*7Q') + 't'] = function (_0x3dee0f, _0x429fd6) {
    return _0x3dee0f != _0x429fd6;
};
_0x26e3e9[_0x473b('0x5e', 'yRoo') + 'C'] = function (_0x562eee, _0xfe84c2) {
    return _0x562eee < _0xfe84c2;
};
_0x26e3e9[_0x473b('0x0', 'j(fm') + 'K'] = function (_0x189d4f, _0x62aa6) {
    return _0x189d4f < _0x62aa6;
};
_0x26e3e9[_0x473b('0x4b', '%Ehg') + 'b'] = function (_0x3e4b9c, _0x55844f) {
    return _0x3e4b9c + _0x55844f;
};
_0x26e3e9[_0x473b('0x7', 'evVB') + 'I'] = function (_0x1889b5, _0x3dd217) {
    return _0x1889b5 >= _0x3dd217;
};
_0x26e3e9[_0x473b('0x63', 'r*7Q') + 'I'] = function (_0x54ae54, _0x2d5e52) {
    return _0x54ae54 >> _0x2d5e52;
};
_0x26e3e9[_0x473b('0x5f', 'NP9^') + 'r'] = function (_0x59198a, _0x5716db) {
    return _0x59198a + _0x5716db;
};
_0x26e3e9[_0x473b('0x58', 'z(%R') + 'Z'] = _0x473b('0x8c', '%#[@') + _0x473b('0x3d', '@n*k') + '=';
_0x26e3e9[_0x473b('0x16', 'iRq2') + 'D'] = function (_0x338f18) {
    return _0x338f18();
};
_0x26e3e9[_0x473b('0x42', 'oS#P') + 'h'] = _0x473b('0x37', ']swu') + 'L';
_0x26e3e9[_0x473b('0x24', '%rKM') + 'C'] = function (_0x637c9b, _0x20a3f2) {
    return _0x637c9b - _0x20a3f2;
};
_0x26e3e9[_0x473b('0x1d', 'iRq2') + 'e'] = _0x473b('0x35', 'dxDY') + 'Q';
var _0x4a3b6d = _0x26e3e9;

function hash(type, value) {
    // 根据不同的params里ha字段的值进行加密
    if (type === 'md5') {
        return CryptoJS.MD5(value).toString();
    }
    if (type === 'sha1') {
        return CryptoJS.SHA1(value).toString();
    }
    if (type === 'sha256') {
        return CryptoJS.SHA256(value).toString();
    }
}

function get_cookie(_0x37a020) {
    var _0x3329f3 = new Date();

    function _0x43705b(_0x131eac, _0x183e40) {
        var _0xea7a78 = _0x37a020.chars.length; // 22
        for (var _0x1ba790 = 0x0; _0x4a3b6d[_0x473b('0xf', 'iRq2') + 'C'](_0x1ba790, _0xea7a78); _0x1ba790++) {
            for (var _0x1e46d5 = 0x0; _0x4a3b6d[_0x473b('0x9e', 'L4dx') + 'K'](_0x1e46d5, _0xea7a78); _0x1e46d5++) {
                var _0x46d7af = _0x183e40[0x0] + _0x37a020[_0x473b('0x6b', '%Ehg') + 's'][_0x473b('0x80', '%RfL') + 'tr'](_0x1ba790, 0x1) + _0x37a020[_0x473b('0x49', 'z(%R') + 's'][_0x473b('0x22', 'kgZ0') + 'tr'](_0x1e46d5, 0x1) + _0x183e40[0x1];
                if (hash(_0x37a020['ha'], _0x46d7af) == _0x131eac) {
                    return [_0x46d7af, new Date() - _0x3329f3][0];
                }
            }
        }
    };
    return _0x43705b(_0x37a020['ct'], _0x37a020['bts']);
}

// 1661868102.17|0|klPvvnyGUaEe8owF19oL09sPV2c%3D

params = {
    "bts": ["1661868102.17|0|klPv", "yGUaEe8owF19oL09sPV2c%3D"],
    "chars": "oLnOtiUSiigrqUFbvRthuY",
    "ct": "5064728f43037a7984467de6bf1367e6f3aabaca",
    "ha": "sha1",  // 根据这个值进行不同的加密
    "tn": "__jsl_clearance_s",
    "vt": "3600",
    "wt": "1500"
}
console.log(get_cookie(params))