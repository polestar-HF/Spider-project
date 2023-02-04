var Ram;
var hex_chr = "0123456789abcdef"; function rhex(num) { str = ""; for (j = 0; j <= 3; j++) str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F); return str; } function str2blks_MD5(str) { nblk = ((str.length + 8) >> 6) + 1; blks = new Array(nblk * 16); for (i = 0; i < nblk * 16; i++) blks[i] = 0; for (i = 0; i < str.length; i++) blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8); blks[i >> 2] |= 0x80 << ((i % 4) * 8); blks[nblk * 16 - 2] = str.length * 8; return blks; } function add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF); } function rol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); } function cmn(q, a, b, x, s, t) { return add(rol(add(add(a, q), add(x, t)), s), b); } function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); } function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); } function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); } function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); } function MD5(str) { x = str2blks_MD5(str); var a = 1732584193; var b = -271733879; var c = -1732584194; var d = 271733878; for (i = 0; i < x.length; i += 16) { var olda = a; var oldb = b; var oldc = c; var oldd = d; a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330); a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983); a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162); a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329); a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302); a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848); a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501); a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734); a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556); a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640); a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189); a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651); a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055); a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799); a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649); a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551); a = add(a, olda); b = add(b, oldb); c = add(c, oldc); d = add(d, oldd); } return rhex(a) + rhex(b) + rhex(c) + rhex(d); }
!function(name, context, definition) {
    if (typeof window !== "undefined" && typeof define === "function" && define.amd) {
        define(definition)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = definition()
        } else {
            if (context.exports) {
                context.exports = definition()
            } else {
                context[name] = definition()
            }
        }
    }
}
("Fingerprint2", this, function() {
    if (typeof Array.isArray === "undefined") {
        Array.isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
    }
    var x64Add = function(m, n) {
        m = [m[0] >>> 16, m[0] & 65535, m[1] >>> 16, m[1] & 65535];
        n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
        var o = [0, 0, 0, 0];
        o[3] += m[3] + n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 65535;
        o[2] += m[2] + n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 65535;
        o[1] += m[1] + n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 65535;
        o[0] += m[0] + n[0];
        o[0] &= 65535;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    };
    var x64Multiply = function(m, n) {
        m = [m[0] >>> 16, m[0] & 65535, m[1] >>> 16, m[1] & 65535];
        n = [n[0] >>> 16, n[0] & 65535, n[1] >>> 16, n[1] & 65535];
        var o = [0, 0, 0, 0];
        o[3] += m[3] * n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 65535;
        o[2] += m[2] * n[3];
        o[1] += o[2] >>> 16;
        o[2] &= 65535;
        o[2] += m[3] * n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 65535;
        o[1] += m[1] * n[3];
        o[0] += o[1] >>> 16;
        o[1] &= 65535;
        o[1] += m[2] * n[2];
        o[0] += o[1] >>> 16;
        o[1] &= 65535;
        o[1] += m[3] * n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 65535;
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
        o[0] &= 65535;
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    };
    var x64Rotl = function(m, n) {
        n %= 64;
        if (n === 32) {
            return [m[1], m[0]]
        } else {
            if (n < 32) {
                return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
            } else {
                n -= 32;
                return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
            }
        }
    };
    var x64LeftShift = function(m, n) {
        n %= 64;
        if (n === 0) {
            return m
        } else {
            if (n < 32) {
                return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
            } else {
                return [m[1] << (n - 32), 0]
            }
        }
    };
    var x64Xor = function(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]]
    };
    var x64Fmix = function(h) {
        h = x64Xor(h, [0, h[0] >>> 1]);
        h = x64Multiply(h, [4283543511, 3981806797]);
        h = x64Xor(h, [0, h[0] >>> 1]);
        h = x64Multiply(h, [3301882366, 444984403]);
        h = x64Xor(h, [0, h[0] >>> 1]);
        return h
    };
    var x64hash128 = function(key, seed) {
        key = key || "";
        seed = seed || 0;
        var remainder = key.length % 16;
        var bytes = key.length - remainder;
        var h1 = [0, seed];
        var h2 = [0, seed];
        var k1 = [0, 0];
        var k2 = [0, 0];
        var c1 = [2277735313, 289559509];
        var c2 = [1291169091, 658871167];
        for (var i = 0; i < bytes; i = i + 16) {
            k1 = [((key.charCodeAt(i + 4) & 255)) | ((key.charCodeAt(i + 5) & 255) << 8) | ((key.charCodeAt(i + 6) & 255) << 16) | ((key.charCodeAt(i + 7) & 255) << 24), ((key.charCodeAt(i) & 255)) | ((key.charCodeAt(i + 1) & 255) << 8) | ((key.charCodeAt(i + 2) & 255) << 16) | ((key.charCodeAt(i + 3) & 255) << 24)];
            k2 = [((key.charCodeAt(i + 12) & 255)) | ((key.charCodeAt(i + 13) & 255) << 8) | ((key.charCodeAt(i + 14) & 255) << 16) | ((key.charCodeAt(i + 15) & 255) << 24), ((key.charCodeAt(i + 8) & 255)) | ((key.charCodeAt(i + 9) & 255) << 8) | ((key.charCodeAt(i + 10) & 255) << 16) | ((key.charCodeAt(i + 11) & 255) << 24)];
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1);
            h1 = x64Rotl(h1, 27);
            h1 = x64Add(h1, h2);
            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 1390208809]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
            h2 = x64Rotl(h2, 31);
            h2 = x64Add(h2, h1);
            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 944331445])
        }
        k1 = [0, 0];
        k2 = [0, 0];
        switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1)
        }
        h1 = x64Xor(h1, [0, key.length]);
        h2 = x64Xor(h2, [0, key.length]);
        h1 = x64Add(h1, h2);
        h2 = x64Add(h2, h1);
        h1 = x64Fmix(h1);
        h2 = x64Fmix(h2);
        h1 = x64Add(h1, h2);
        h2 = x64Add(h2, h1);
        return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8)
    };
    var defaultOptions = {
        preprocessor: null,
        audio: {
            timeout: 1000,
            excludeIOS11: true
        },
        fonts: {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            userDefinedFonts: [],
            extendedJsFonts: false
        },
        screen: {
            detectScreenOrientation: true
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: false
        },
        extraComponents: [],
        excludes: {
            "enumerateDevices": true,
            "pixelRatio": true,
            "doNotTrack": true,
            "fontsFlash": true
        },
        NOT_AVAILABLE: "not available",
        ERROR: "error",
        EXCLUDED: "excluded"
    };
    var each = function(obj, iterator) {
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
            obj.forEach(iterator)
        } else {
            if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    iterator(obj[i], i, obj)
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator(obj[key], key, obj)
                    }
                }
            }
        }
    };
    var map = function(obj, iterator) {
        var results = [];
        if (obj == null) {
            return results
        }
        if (Array.prototype.map && obj.map === Array.prototype.map) {
            return obj.map(iterator)
        }
        each(obj, function(value, index, list) {
            results.push(iterator(value, index, list))
        });
        return results
    };
    var extendSoft = function(target, source) {
        if (source == null) {
            return target
        }
        var value;
        var key;
        for (key in source) {
            value = source[key];
            if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
                target[key] = value
            }
        }
        return target
    };
    var enumerateDevicesKey = function(done, options) {
        if (!isEnumerateDevicesSupported()) {
            return done(options.NOT_AVAILABLE)
        }
        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            done(devices.map(function(device) {
                return "id=" + device.deviceId + ";gid=" + device.groupId + ";" + device.kind + ";" + device.label
            }))
        })["catch"](function(error) {
            done(error)
        })
    };
    var isEnumerateDevicesSupported = function() {
        return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    };
    var audioKey = function(done, options) {
        var audioOptions = options.audio;
        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
            return done(options.EXCLUDED)
        }
        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (AudioContext == null) {
            return done(options.NOT_AVAILABLE)
        }
        var context = new AudioContext(1,44100,44100);
        var oscillator = context.createOscillator();
        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(10000, context.currentTime);
        var compressor = context.createDynamicsCompressor();
        each([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", 0.25]], function(item) {
            if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === "function") {
                compressor[item[0]].setValueAtTime(item[1], context.currentTime)
            }
        });
        oscillator.connect(compressor);
        compressor.connect(context.destination);
        oscillator.start(0);
        context.startRendering();
        var audioTimeoutId = setTimeout(function() {
            console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".');
            context.oncomplete = function() {}
            ;
            context = null;
            return done("audioTimeout")
        }, audioOptions.timeout);
        context.oncomplete = function(event) {
            var fingerprint;
            try {
                clearTimeout(audioTimeoutId);
                fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function(acc, val) {
                    return acc + Math.abs(val)
                }, 0).toString();
                oscillator.disconnect();
                compressor.disconnect()
            } catch (error) {
                done(error);
                return
            }
            done(fingerprint)
        }
    };
    var UserAgent = function(done) {
        done(navigator.userAgent)
    };
    var webdriver = function(done, options) {
        done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
    };
    var languageKey = function(done, options) {
        done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
    };
    var colorDepthKey = function(done, options) {
        done(window.screen.colorDepth || options.NOT_AVAILABLE)
    };
    var deviceMemoryKey = function(done, options) {
        done(navigator.deviceMemory || options.NOT_AVAILABLE)
    };
    var pixelRatioKey = function(done, options) {
        done(window.devicePixelRatio || options.NOT_AVAILABLE)
    };
    var screenResolutionKey = function(done, options) {
        done(getScreenResolution(options))
    };
    var getScreenResolution = function(options) {
        var resolution = [window.screen.width, window.screen.height];
        if (options.screen.detectScreenOrientation) {
            resolution.sort().reverse()
        }
        return resolution
    };
    var availableScreenResolutionKey = function(done, options) {
        done(getAvailableScreenResolution(options))
    };
    var getAvailableScreenResolution = function(options) {
        if (window.screen.availWidth && window.screen.availHeight) {
            var available = [window.screen.availHeight, window.screen.availWidth];
            if (options.screen.detectScreenOrientation) {
                available.sort().reverse()
            }
            return available
        }
        return options.NOT_AVAILABLE
    };
    var timezoneOffset = function(done) {
        done(new Date().getTimezoneOffset())
    };
    var timezone = function(done, options) {
        if (window.Intl && window.Intl.DateTimeFormat) {
            done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone);
            return
        }
        done(options.NOT_AVAILABLE)
    };
    var sessionStorageKey = function(done, options) {
        done(hasSessionStorage(options))
    };
    var localStorageKey = function(done, options) {
        done(hasLocalStorage(options))
    };
    var indexedDbKey = function(done, options) {
        done(hasIndexedDB(options))
    };
    var addBehaviorKey = function(done) {
        done(!!(document.body && document.body.addBehavior))
    };
    var openDatabaseKey = function(done) {
        done(!!window.openDatabase)
    };
    var cpuClassKey = function(done, options) {
        done(getNavigatorCpuClass(options))
    };
    var platformKey = function(done, options) {
        done(getNavigatorPlatform(options))
    };
    var doNotTrackKey = function(done, options) {
        done(getDoNotTrack(options))
    };
    var canvasKey = function(done, options) {
        if (isCanvasSupported()) {
            done(getCanvasFp(options));
            return
        }
        done(options.NOT_AVAILABLE)
    };
    var webglKey = function(done, options) {
        if (isWebGlSupported()) {
            done(getWebglFp());
            return
        }
        done(options.NOT_AVAILABLE)
    };
    var webglVendorAndRendererKey = function(done) {
        if (isWebGlSupported()) {
            done(getWebglVendorAndRenderer());
            return
        }
        done()
    };
    var adBlockKey = function(done) {
        done(getAdBlock())
    };
    var hasLiedLanguagesKey = function(done) {
        done(getHasLiedLanguages())
    };
    var hasLiedResolutionKey = function(done) {
        done(getHasLiedResolution())
    };
    var hasLiedOsKey = function(done) {
        done(getHasLiedOs())
    };
    var hasLiedBrowserKey = function(done) {
        done(getHasLiedBrowser())
    };
    var flashFontsKey = function(done, options) {
        if (!hasSwfObjectLoaded()) {
            return done("swf object not loaded")
        }
        if (!hasMinFlashInstalled()) {
            return done("flash not installed")
        }
        if (!options.fonts.swfPath) {
            return done("missing options.fonts.swfPath")
        }
        loadSwfAndDetectFonts(function(fonts) {
            done(fonts)
        }, options)
    };
    var jsFontsKey = function(done, options) {
        var baseFonts = ["monospace", "sans-serif", "serif"];
        var fontList = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
        if (options.fonts.extendedJsFonts) {
            var extendedFontList = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
            fontList = fontList.concat(extendedFontList)
        }
        fontList = fontList.concat(options.fonts.userDefinedFonts);
        fontList = fontList.filter(function(font, position) {
            return fontList.indexOf(font) === position
        });
        var testString = "mmmmmmmmmmlli";
        var testSize = "72px";
        var h = document.getElementsByTagName("body")[0];
        var baseFontsDiv = document.createElement("div");
        var fontsDiv = document.createElement("div");
        var defaultWidth = {};
        var defaultHeight = {};
        var createSpan = function() {
            var s = document.createElement("span");
            s.style.position = "absolute";
            s.style.left = "-9999px";
            s.style.fontSize = testSize;
            s.style.fontStyle = "normal";
            s.style.fontWeight = "normal";
            s.style.letterSpacing = "normal";
            s.style.lineBreak = "auto";
            s.style.lineHeight = "normal";
            s.style.textTransform = "none";
            s.style.textAlign = "left";
            s.style.textDecoration = "none";
            s.style.textShadow = "none";
            s.style.whiteSpace = "normal";
            s.style.wordBreak = "normal";
            s.style.wordSpacing = "normal";
            s.innerHTML = testString;
            return s
        };
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan();
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
            return s
        };
        var initializeBaseFontsSpans = function() {
            var spans = [];
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan();
                s.style.fontFamily = baseFonts[index];
                baseFontsDiv.appendChild(s);
                spans.push(s)
            }
            return spans
        };
        var initializeFontsSpans = function() {
            var spans = {};
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = [];
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                    fontsDiv.appendChild(s);
                    fontSpans.push(s)
                }
                spans[fontList[i]] = fontSpans
            }
            return spans
        };
        var isFontAvailable = function(fontSpans) {
            var detected = false;
            for (var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]);
                if (detected) {
                    return detected
                }
            }
            return detected
        };
        var baseFontsSpans = initializeBaseFontsSpans();
        h.appendChild(baseFontsDiv);
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth;
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight
        }
        var fontsSpans = initializeFontsSpans();
        h.appendChild(fontsDiv);
        var available = [];
        for (var i = 0, l = fontList.length; i < l; i++) {
            if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i])
            }
        }
        h.removeChild(fontsDiv);
        h.removeChild(baseFontsDiv);
        done(available)
    };
    var pluginsComponent = function(done, options) {
        if (isIE()) {
            if (!options.plugins.excludeIE) {
                done(getIEPlugins(options))
            } else {
                done(options.EXCLUDED)
            }
        } else {
            done(getRegularPlugins(options))
        }
    };
    var getRegularPlugins = function(options) {
        if (navigator.plugins == null) {
            return options.NOT_AVAILABLE
        }
        var plugins = [];
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
            if (navigator.plugins[i]) {
                plugins.push(navigator.plugins[i])
            }
        }
        if (pluginsShouldBeSorted(options)) {
            plugins = plugins.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
        }
        return map(plugins, function(p) {
            var mimeTypes = map(p, function(mt) {
                return [mt.type, mt.suffixes]
            });
            return [p.name, p.description, mimeTypes]
        })
    };
    var getIEPlugins = function(options) {
        var result = [];
        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject")) || ("ActiveXObject"in window)) {
            var names = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
            result = map(names, function(name) {
                try {
                    new window.ActiveXObject(name);
                    return name
                } catch (e) {
                    return options.ERROR
                }
            })
        } else {
            result.push(options.NOT_AVAILABLE)
        }
        if (navigator.plugins) {
            result = result.concat(getRegularPlugins(options))
        }
        return result
    };
    var pluginsShouldBeSorted = function(options) {
        var should = false;
        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
            var re = options.plugins.sortPluginsFor[i];
            if (navigator.userAgent.match(re)) {
                should = true;
                break
            }
        }
        return should
    };
    var touchSupportKey = function(done) {
        done(getTouchSupport())
    };
    var hardwareConcurrencyKey = function(done, options) {
        done(getHardwareConcurrency(options))
    };
    var hasSessionStorage = function(options) {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return options.ERROR
        }
    };
    var hasLocalStorage = function(options) {
        try {
            return !!window.localStorage
        } catch (e) {
            return options.ERROR
        }
    };
    var hasIndexedDB = function(options) {
        try {
            return !!window.indexedDB
        } catch (e) {
            return options.ERROR
        }
    };
    var getHardwareConcurrency = function(options) {
        if (navigator.hardwareConcurrency) {
            return navigator.hardwareConcurrency
        }
        return options.NOT_AVAILABLE
    };
    var getNavigatorCpuClass = function(options) {
        return navigator.cpuClass || options.NOT_AVAILABLE
    };
    var getNavigatorPlatform = function(options) {
        if (navigator.platform) {
            return navigator.platform
        } else {
            return options.NOT_AVAILABLE
        }
    };
    var getDoNotTrack = function(options) {
        if (navigator.doNotTrack) {
            return navigator.doNotTrack
        } else {
            if (navigator.msDoNotTrack) {
                return navigator.msDoNotTrack
            } else {
                if (window.doNotTrack) {
                    return window.doNotTrack
                } else {
                    return options.NOT_AVAILABLE
                }
            }
        }
    };
    var getTouchSupport = function() {
        var maxTouchPoints = 0;
        var touchEvent;
        if (typeof navigator.maxTouchPoints !== "undefined") {
            maxTouchPoints = navigator.maxTouchPoints
        } else {
            if (typeof navigator.msMaxTouchPoints !== "undefined") {
                maxTouchPoints = navigator.msMaxTouchPoints
            }
        }
        try {
            document.createEvent("TouchEvent");
            touchEvent = true
        } catch (_) {
            touchEvent = false
        }
        var touchStart = "ontouchstart"in window;
        return [maxTouchPoints, touchEvent, touchStart]
    };
    var getCanvasFp = function(options) {
        var result = [];
        var canvas = document.createElement("canvas");
        canvas.width = 2000;
        canvas.height = 200;
        canvas.style.display = "inline";
        var ctx = canvas.getContext("2d");
        ctx.rect(0, 0, 10, 10);
        ctx.rect(2, 2, 6, 6);
        result.push("canvas winding:" + ((ctx.isPointInPath(5, 5, "evenodd") === false) ? "yes" : "no"));
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = "#069";
        if (options.dontUseFakeFontInCanvas) {
            ctx.font = "11pt Arial"
        } else {
            ctx.font = "11pt no-real-font-123"
        }
        ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
        ctx.font = "18pt Arial";
        ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(0,255,255)";
        ctx.beginPath();
        ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(255,255,0)";
        ctx.beginPath();
        ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgb(255,0,255)";
        ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
        ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
        ctx.fill("evenodd");
        if (canvas.toDataURL) {
            result.push("canvas fp:" + canvas.toDataURL())
        }
        return result
    };
    var getWebglFp = function() {
        var gl;
        var fa2s = function(fa) {
            gl.clearColor(0, 0, 0, 1);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            return "[" + fa[0] + ", " + fa[1] + "]"
        };
        var maxAnisotropy = function(gl) {
            var ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (ext) {
                var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                if (anisotropy === 0) {
                    anisotropy = 2
                }
                return anisotropy
            } else {
                return null
            }
        };
        gl = getWebglCanvas();
        if (!gl) {
            return null
        }
        var result = [];
        var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
        var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
        var vertexPosBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        vertexPosBuffer.itemSize = 3;
        vertexPosBuffer.numItems = 3;
        var program = gl.createProgram();
        var vshader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vshader, vShaderTemplate);
        gl.compileShader(vshader);
        var fshader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fshader, fShaderTemplate);
        gl.compileShader(fshader);
        gl.attachShader(program, vshader);
        gl.attachShader(program, fshader);
        gl.linkProgram(program);
        gl.useProgram(program);
        program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
        program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
        gl.enableVertexAttribArray(program.vertexPosArray);
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
        gl.uniform2f(program.offsetUniform, 1, 1);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
        try {
            result.push(gl.canvas.toDataURL())
        } catch (e) {}
        result.push("extensions:" + (gl.getSupportedExtensions() || []).join(";"));
        result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
        result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
        result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
        result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
        result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
        result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
        result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
        result.push("webgl max anisotropy:" + maxAnisotropy(gl));
        result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
        result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
        result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
        result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
        result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
        result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
        result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
        result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
        result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
        result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
        result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
        result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
        result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
        result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
        result.push("webgl version:" + gl.getParameter(gl.VERSION));
        try {
            var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (extensionDebugRendererInfo) {
                result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
                result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
            }
        } catch (e) {}
        if (!gl.getShaderPrecisionFormat) {
            loseWebglContext(gl);
            return result
        }
        each(["FLOAT", "INT"], function(numType) {
            each(["VERTEX", "FRAGMENT"], function(shader) {
                each(["HIGH", "MEDIUM", "LOW"], function(numSize) {
                    each(["precision", "rangeMin", "rangeMax"], function(key) {
                        var format = gl.getShaderPrecisionFormat(gl[shader + "_SHADER"], gl[numSize + "_" + numType])[key];
                        if (key !== "precision") {
                            key = "precision " + key
                        }
                        var line = ["webgl ", shader.toLowerCase(), " shader ", numSize.toLowerCase(), " ", numType.toLowerCase(), " ", key, ":", format].join("");
                        result.push(line)
                    })
                })
            })
        });
        loseWebglContext(gl);
        return result
    };
    var getWebglVendorAndRenderer = function() {
        try {
            var glContext = getWebglCanvas();
            var extensionDebugRendererInfo = glContext.getExtension("WEBGL_debug_renderer_info");
            var params = glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + "~" + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
            loseWebglContext(glContext);
            return params
        } catch (e) {
            return null
        }
    };
    var getAdBlock = function() {
        var ads = document.createElement("div");
        ads.innerHTML = "&nbsp;";
        ads.className = "adsbox";
        var result = false;
        try {
            document.body.appendChild(ads);
            result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
            document.body.removeChild(ads)
        } catch (e) {
            result = false
        }
        return result
    };
    var getHasLiedLanguages = function() {
        if (typeof navigator.languages !== "undefined") {
            try {
                var firstLanguages = navigator.languages[0].substr(0, 2);
                if (firstLanguages !== navigator.language.substr(0, 2)) {
                    return true
                }
            } catch (err) {
                return true
            }
        }
        return false
    };
    var getHasLiedResolution = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    };
    var getHasLiedOs = function() {
        var userAgent = navigator.userAgent.toLowerCase();
        var oscpu = navigator.oscpu;
        var platform = navigator.platform.toLowerCase();
        var os;
        if (userAgent.indexOf("windows phone") >= 0) {
            os = "Windows Phone"
        } else {
            if (userAgent.indexOf("windows") >= 0 || userAgent.indexOf("win16") >= 0 || userAgent.indexOf("win32") >= 0 || userAgent.indexOf("win64") >= 0 || userAgent.indexOf("win95") >= 0 || userAgent.indexOf("win98") >= 0 || userAgent.indexOf("winnt") >= 0 || userAgent.indexOf("wow64") >= 0) {
                os = "Windows"
            } else {
                if (userAgent.indexOf("android") >= 0) {
                    os = "Android"
                } else {
                    if (userAgent.indexOf("linux") >= 0 || userAgent.indexOf("cros") >= 0 || userAgent.indexOf("x11") >= 0) {
                        os = "Linux"
                    } else {
                        if (userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 || userAgent.indexOf("ipod") >= 0 || userAgent.indexOf("crios") >= 0 || userAgent.indexOf("fxios") >= 0) {
                            os = "iOS"
                        } else {
                            if (userAgent.indexOf("macintosh") >= 0 || userAgent.indexOf("mac_powerpc)") >= 0) {
                                os = "Mac"
                            } else {
                                os = "Other"
                            }
                        }
                    }
                }
            }
        }
        var mobileDevice = (("ontouchstart"in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        if (mobileDevice && os !== "Windows" && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other" && userAgent.indexOf("cros") === -1) {
            return true
        }
        if (typeof oscpu !== "undefined") {
            oscpu = oscpu.toLowerCase();
            if (oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone") {
                return true
            } else {
                if (oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android") {
                    return true
                } else {
                    if (oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS") {
                        return true
                    } else {
                        if ((oscpu.indexOf("win") === -1 && oscpu.indexOf("linux") === -1 && oscpu.indexOf("mac") === -1) !== (os === "Other")) {
                            return true
                        }
                    }
                }
            }
        }
        if (platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone") {
            return true
        } else {
            if ((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android") {
                return true
            } else {
                if ((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS") {
                    return true
                } else {
                    if (platform.indexOf("arm") >= 0 && os === "Windows Phone") {
                        return false
                    } else {
                        if (platform.indexOf("pike") >= 0 && userAgent.indexOf("opera mini") >= 0) {
                            return false
                        } else {
                            var platformIsOther = platform.indexOf("win") < 0 && platform.indexOf("linux") < 0 && platform.indexOf("mac") < 0 && platform.indexOf("iphone") < 0 && platform.indexOf("ipad") < 0 && platform.indexOf("ipod") < 0;
                            if (platformIsOther !== (os === "Other")) {
                                return true
                            }
                        }
                    }
                }
            }
        }
        return typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"
    };
    var getHasLiedBrowser = function() {
        var userAgent = navigator.userAgent.toLowerCase();
        var productSub = navigator.productSub;
        var browser;
        if (userAgent.indexOf("edge/") >= 0 || userAgent.indexOf("iemobile/") >= 0) {
            return false
        } else {
            if (userAgent.indexOf("opera mini") >= 0) {
                return false
            } else {
                if (userAgent.indexOf("firefox/") >= 0) {
                    browser = "Firefox"
                } else {
                    if (userAgent.indexOf("opera/") >= 0 || userAgent.indexOf(" opr/") >= 0) {
                        browser = "Opera"
                    } else {
                        if (userAgent.indexOf("chrome/") >= 0) {
                            browser = "Chrome"
                        } else {
                            if (userAgent.indexOf("safari/") >= 0) {
                                if (userAgent.indexOf("android 1.") >= 0 || userAgent.indexOf("android 2.") >= 0 || userAgent.indexOf("android 3.") >= 0 || userAgent.indexOf("android 4.") >= 0) {
                                    browser = "AOSP"
                                } else {
                                    browser = "Safari"
                                }
                            } else {
                                if (userAgent.indexOf("trident/") >= 0) {
                                    browser = "Internet Explorer"
                                } else {
                                    browser = "Other"
                                }
                            }
                        }
                    }
                }
            }
        }
        if ((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107") {
            return true
        }
        var tempRes = eval.toString().length;
        if (tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other") {
            return true
        } else {
            if (tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other") {
                return true
            } else {
                if (tempRes === 33 && browser !== "Chrome" && browser !== "AOSP" && browser !== "Opera" && browser !== "Other") {
                    return true
                }
            }
        }
        var errFirefox;
        try {
            throw "a"
        } catch (err) {
            try {
                err.toSource();
                errFirefox = true
            } catch (errOfErr) {
                errFirefox = false
            }
        }
        return errFirefox && browser !== "Firefox" && browser !== "Other"
    };
    var isCanvasSupported = function() {
        var elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"))
    };
    var isWebGlSupported = function() {
        if (!isCanvasSupported()) {
            return false
        }
        var glContext = getWebglCanvas();
        var isSupported = !!window.WebGLRenderingContext && !!glContext;
        loseWebglContext(glContext);
        return isSupported
    };
    var isIE = function() {
        if (navigator.appName === "Microsoft Internet Explorer") {
            return true
        } else {
            if (navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) {
                return true
            }
        }
        return false
    };
    var hasSwfObjectLoaded = function() {
        return typeof window.swfobject !== "undefined"
    };
    var hasMinFlashInstalled = function() {
        return window.swfobject.hasFlashPlayerVersion("9.0.0")
    };
    var addFlashDivNode = function(options) {
        var node = document.createElement("div");
        node.setAttribute("id", options.fonts.swfContainerId);
        document.body.appendChild(node)
    };
    var loadSwfAndDetectFonts = function(done, options) {
        var hiddenCallback = "___fp_swf_loaded";
        window[hiddenCallback] = function(fonts) {
            done(fonts)
        }
        ;
        var id = options.fonts.swfContainerId;
        addFlashDivNode();
        var flashvars = {
            onReady: hiddenCallback
        };
        var flashparams = {
            allowScriptAccess: "always",
            menu: "false"
        };
        window.swfobject.embedSWF(options.fonts.swfPath, id, "1", "1", "9.0.0", false, flashvars, flashparams, {})
    };
    var getWebglCanvas = function() {
        var canvas = document.createElement("canvas");
        var gl = null;
        try {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        } catch (e) {}
        if (!gl) {
            gl = null
        }
        return gl
    };
    var loseWebglContext = function(context) {
        var loseContextExtension = context.getExtension("WEBGL_lose_context");
        if (loseContextExtension != null) {
            loseContextExtension.loseContext()
        }
    };
    var components = [{
        key: "userAgent",
        getData: UserAgent
    }, {
        key: "webdriver",
        getData: webdriver
    }, {
        key: "language",
        getData: languageKey
    }, {
        key: "colorDepth",
        getData: colorDepthKey
    }, {
        key: "deviceMemory",
        getData: deviceMemoryKey
    }, {
        key: "pixelRatio",
        getData: pixelRatioKey
    }, {
        key: "hardwareConcurrency",
        getData: hardwareConcurrencyKey
    }, {
        key: "screenResolution",
        getData: screenResolutionKey
    }, {
        key: "availableScreenResolution",
        getData: availableScreenResolutionKey
    }, {
        key: "timezoneOffset",
        getData: timezoneOffset
    }, {
        key: "timezone",
        getData: timezone
    }, {
        key: "sessionStorage",
        getData: sessionStorageKey
    }, {
        key: "localStorage",
        getData: localStorageKey
    }, {
        key: "indexedDb",
        getData: indexedDbKey
    }, {
        key: "addBehavior",
        getData: addBehaviorKey
    }, {
        key: "openDatabase",
        getData: openDatabaseKey
    }, {
        key: "cpuClass",
        getData: cpuClassKey
    }, {
        key: "platform",
        getData: platformKey
    }, {
        key: "doNotTrack",
        getData: doNotTrackKey
    }, {
        key: "plugins",
        getData: pluginsComponent
    }, {
        key: "canvas",
        getData: canvasKey
    }, {
        key: "webgl",
        getData: webglKey
    }, {
        key: "webglVendorAndRenderer",
        getData: webglVendorAndRendererKey
    }, {
        key: "adBlock",
        getData: adBlockKey
    }, {
        key: "hasLiedLanguages",
        getData: hasLiedLanguagesKey
    }, {
        key: "hasLiedResolution",
        getData: hasLiedResolutionKey
    }, {
        key: "hasLiedOs",
        getData: hasLiedOsKey
    }, {
        key: "hasLiedBrowser",
        getData: hasLiedBrowserKey
    }, {
        key: "touchSupport",
        getData: touchSupportKey
    }, {
        key: "fonts",
        getData: jsFontsKey,
        pauseBefore: true
    }, {
        key: "fontsFlash",
        getData: flashFontsKey,
        pauseBefore: true
    }, {
        key: "audio",
        getData: audioKey
    }, {
        key: "enumerateDevices",
        getData: enumerateDevicesKey
    }];
    var Fingerprint2 = function(options) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    };
    Fingerprint2.get = function(options, callback) {
        if (!callback) {
            callback = options;
            options = {}
        } else {
            if (!options) {
                options = {}
            }
        }
        extendSoft(options, defaultOptions);
        options.components = options.extraComponents.concat(components);
        var keys = {
            data: [],
            addPreprocessedComponent: function(key, value) {
                if (typeof options.preprocessor === "function") {
                    value = options.preprocessor(key, value)
                }
                keys.data.push({
                    key: key,
                    value: value
                })
            }
        };
        var i = -1;
        var chainComponents = function(alreadyWaited) {
            i += 1;
            if (i >= options.components.length) {
                callback(keys.data);
                return
            }
            var component = options.components[i];
            if (options.excludes[component.key]) {
                chainComponents(false);
                return
            }
            if (!alreadyWaited && component.pauseBefore) {
                i -= 1;
                setTimeout(function() {
                    chainComponents(true)
                }, 1);
                return
            }
            try {
                component.getData(function(value) {
                    keys.addPreprocessedComponent(component.key, value);
                    chainComponents(false)
                }, options)
            } catch (error) {
                keys.addPreprocessedComponent(component.key, String(error));
                chainComponents(false)
            }
        };
        chainComponents(false)
    }
    ;
    Fingerprint2.getPromise = function(options) {
        return new Promise(function(resolve, reject) {
            Fingerprint2.get(options, resolve)
        }
        )
    }
    ;
    Fingerprint2.getV18 = function(options, callback) {
        if (callback == null) {
            callback = options;
            options = {}
        }
        return Fingerprint2.get(options, function(components) {
            var newComponents = [];
            for (var i = 0; i < components.length; i++) {
                var component = components[i];
                if (component.value === (options.NOT_AVAILABLE || "not available")) {
                    newComponents.push({
                        key: component.key,
                        value: "unknown"
                    })
                } else {
                    if (component.key === "plugins") {
                        newComponents.push({
                            key: "plugins",
                            value: map(component.value, function(p) {
                                var mimeTypes = map(p[2], function(mt) {
                                    if (mt.join) {
                                        return mt.join("~")
                                    }
                                    return mt
                                }).join(",");
                                return [p[0], p[1], mimeTypes].join("::")
                            })
                        })
                    } else {
                        if (["canvas", "webgl"].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
                            newComponents.push({
                                key: component.key,
                                value: component.value.join("~")
                            })
                        } else {
                            if (["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(component.key) !== -1) {
                                if (component.value) {
                                    newComponents.push({
                                        key: component.key,
                                        value: 1
                                    })
                                } else {
                                    continue
                                }
                            } else {
                                if (component.value) {
                                    newComponents.push(component.value.join ? {
                                        key: component.key,
                                        value: component.value.join(";")
                                    } : component)
                                } else {
                                    newComponents.push({
                                        key: component.key,
                                        value: component.value
                                    })
                                }
                            }
                        }
                    }
                }
            }
            var murmur = x64hash128(map(newComponents, function(component) {
                return component.value
            }).join("~~~"), 31);
            callback(murmur, newComponents)
        })
    }
    ;
    Fingerprint2.x64hash128 = x64hash128;
    Fingerprint2.VERSION = "2.1.2";
    Ram = Fingerprint2
})
function printComponents(components) {
    var values = components.map(function(component) {
        return component.value
    });
    var hash = Ram.x64hash128(values.join(''), 31);
    return hash
}

function obtainAwslHello() {
    let components = [
    {
        "key": "userAgent",
        "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    },
    {
        "key": "webdriver",
        "value": false
    },
    {
        "key": "language",
        "value": "zh-CN"
    },
    {
        "key": "colorDepth",
        "value": 24
    },
    {
        "key": "deviceMemory",
        "value": 8
    },
    {
        "key": "hardwareConcurrency",
        "value": 8
    },
    {
        "key": "screenResolution",
        "value": [
            1920,
            1080
        ]
    },
    {
        "key": "availableScreenResolution",
        "value": [
            1920,
            1040
        ]
    },
    {
        "key": "timezoneOffset",
        "value": -480
    },
    {
        "key": "timezone",
        "value": "Asia/Shanghai"
    },
    {
        "key": "sessionStorage",
        "value": true
    },
    {
        "key": "localStorage",
        "value": true
    },
    {
        "key": "indexedDb",
        "value": true
    },
    {
        "key": "addBehavior",
        "value": false
    },
    {
        "key": "openDatabase",
        "value": true
    },
    {
        "key": "cpuClass",
        "value": "not available"
    },
    {
        "key": "platform",
        "value": "Win32"
    },
    {
        "key": "plugins",
        "value": [
            [
                "PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Chrome PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Chromium PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "Microsoft Edge PDF Viewer",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ],
            [
                "WebKit built-in PDF",
                "Portable Document Format",
                [
                    [
                        "application/pdf",
                        "pdf"
                    ],
                    [
                        "text/pdf",
                        "pdf"
                    ]
                ]
            ]
        ]
    },
    {
        "key": "canvas",
        "value": [
            "canvas winding:yes",
            "canvas fp:data:image/png;base64,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Zep5rydzXsoH87vvMl/XpPlkTK5kCAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgUF5jQAb24rgcQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQDUCAno1p7IoAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQUENBL6ppNgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUICOjVnMqiBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFBSQEAvqWs2AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQjIKBXcyqLEiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEBJAQG9pK7ZBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFCNgIBezaksSoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIlBQT0krpmEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEA1AgJ6NaeyKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUFBDQS+qaTYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLVCAjo1ZzKogQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQUkBAL6lrNgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIyCgV3MqixIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBASQEBvaSu2QQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQjYCAXs2pLEqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECJQUE9JK6ZhMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBANQICejWnsigBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlBQQ0Evqmk2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC1QgI6NWcyqIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUFJAQC+pazYBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCMgoFdzKosSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQEkBAb2krtkECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUI2AgF7NqSxKgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiUFBPSSumYTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQDUCAno1p7IoAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQUENBL6ppNgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUICOjVnMqiBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFBSQEAvqWs2AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECFQjIKBXcyqLEiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEBJAQG9pK7ZBAgQIECAAAECBAgQIECAAAEC9jfuZgAAAv1JREFUBAgQIECAAAECBAgQIFCNgIBezaksSoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIlBQT0krpmEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEA1AgJ6NaeyKAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiUFBDQS+qaTYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLVCAjo1ZzKogQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQUkBAL6lrNgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhUIyCgV3MqixIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBASQEBvaSu2QQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQjYCAXs2pLEqAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECJQUE9JK6ZhMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBANQICejWnsigBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIlBQQ0Evqmk2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC1QgI6NWcyqIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUFJAQC+pazYBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVCMgoFdzKosSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQEkBAb2krtkECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUI2AgF7NqSxKgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAiUFBPSSumYTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQDUCAno1p7IoAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECJQU+C8TwCBtRIC10wAAAABJRU5ErkJggg=="
        ]
    },
    {
        "key": "webgl",
        "value": [
            "data:image/png;base64,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",
            "extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;WEBKIT_EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBKIT_WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBKIT_WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBKIT_WEBGL_lose_context;WEBGL_multi_draw",
            "webgl aliased line width range:[1, 1]",
            "webgl aliased point size range:[1, 1024]",
            "webgl alpha bits:8",
            "webgl antialiasing:yes",
            "webgl blue bits:8",
            "webgl depth bits:24",
            "webgl green bits:8",
            "webgl max anisotropy:16",
            "webgl max combined texture image units:32",
            "webgl max cube map texture size:16384",
            "webgl max fragment uniform vectors:1024",
            "webgl max render buffer size:16384",
            "webgl max texture image units:16",
            "webgl max texture size:16384",
            "webgl max varying vectors:30",
            "webgl max vertex attribs:16",
            "webgl max vertex texture image units:16",
            "webgl max vertex uniform vectors:4096",
            "webgl max viewport dims:[32767, 32767]",
            "webgl red bits:8",
            "webgl renderer:WebKit WebGL",
            "webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
            "webgl stencil bits:0",
            "webgl vendor:WebKit",
            "webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)",
            "webgl unmasked vendor:Google Inc. (AMD)",
            "webgl unmasked renderer:ANGLE (AMD, AMD Radeon(TM) Vega 8 Mobile Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "webgl vertex shader high float precision:23",
            "webgl vertex shader high float precision rangeMin:127",
            "webgl vertex shader high float precision rangeMax:127",
            "webgl vertex shader medium float precision:23",
            "webgl vertex shader medium float precision rangeMin:127",
            "webgl vertex shader medium float precision rangeMax:127",
            "webgl vertex shader low float precision:23",
            "webgl vertex shader low float precision rangeMin:127",
            "webgl vertex shader low float precision rangeMax:127",
            "webgl fragment shader high float precision:23",
            "webgl fragment shader high float precision rangeMin:127",
            "webgl fragment shader high float precision rangeMax:127",
            "webgl fragment shader medium float precision:23",
            "webgl fragment shader medium float precision rangeMin:127",
            "webgl fragment shader medium float precision rangeMax:127",
            "webgl fragment shader low float precision:23",
            "webgl fragment shader low float precision rangeMin:127",
            "webgl fragment shader low float precision rangeMax:127",
            "webgl vertex shader high int precision:0",
            "webgl vertex shader high int precision rangeMin:31",
            "webgl vertex shader high int precision rangeMax:30",
            "webgl vertex shader medium int precision:0",
            "webgl vertex shader medium int precision rangeMin:31",
            "webgl vertex shader medium int precision rangeMax:30",
            "webgl vertex shader low int precision:0",
            "webgl vertex shader low int precision rangeMin:31",
            "webgl vertex shader low int precision rangeMax:30",
            "webgl fragment shader high int precision:0",
            "webgl fragment shader high int precision rangeMin:31",
            "webgl fragment shader high int precision rangeMax:30",
            "webgl fragment shader medium int precision:0",
            "webgl fragment shader medium int precision rangeMin:31",
            "webgl fragment shader medium int precision rangeMax:30",
            "webgl fragment shader low int precision:0",
            "webgl fragment shader low int precision rangeMin:31",
            "webgl fragment shader low int precision rangeMax:30"
        ]
    },
    {
        "key": "webglVendorAndRenderer",
        "value": "Google Inc. (AMD)~ANGLE (AMD, AMD Radeon(TM) Vega 8 Mobile Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)"
    },
    {
        "key": "adBlock",
        "value": false
    },
    {
        "key": "hasLiedLanguages",
        "value": false
    },
    {
        "key": "hasLiedResolution",
        "value": false
    },
    {
        "key": "hasLiedOs",
        "value": false
    },
    {
        "key": "hasLiedBrowser",
        "value": false
    },
    {
        "key": "touchSupport",
        "value": [
            0,
            false,
            false
        ]
    },
    {
        "key": "fonts",
        "value": [
            "Arial",
            "Arial Black",
            "Arial Narrow",
            "Calibri",
            "Cambria",
            "Cambria Math",
            "Comic Sans MS",
            "Consolas",
            "Courier",
            "Courier New",
            "Georgia",
            "Helvetica",
            "Impact",
            "Lucida Console",
            "Lucida Sans Unicode",
            "Microsoft Sans Serif",
            "MS Gothic",
            "MS PGothic",
            "MS Sans Serif",
            "MS Serif",
            "Palatino Linotype",
            "Segoe Print",
            "Segoe Script",
            "Segoe UI",
            "Segoe UI Light",
            "Segoe UI Semibold",
            "Segoe UI Symbol",
            "Tahoma",
            "Times",
            "Times New Roman",
            "Trebuchet MS",
            "Verdana",
            "Wingdings"
        ]
    },
    {
        "key": "audio",
        "value": "124.04347527516074"
    }
]
    return printComponents(components)
}
console.log(obtainAwslHello())
function getMD5Value(data) {
    var a = data;
    var b = "\xa3\xac\xa1\xa3";
    var c = "fdjf,jkgfkl";
    var s = a + b + c;
    return MD5(s);
}
password = getMD5Value('1234565657')
console.log(password)