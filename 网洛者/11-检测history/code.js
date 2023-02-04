CryptoJS = require('crypto-js');
// 保护函数toStrin
(() => {
    'use strict';
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)))
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            'configurable': true,
            'writable': true,
            'value': value
        })
    }

    delete Function.prototype['toString']
    set_native(Function.prototype, 'toString', myToString)
    set_native(Function.prototype.toString, myFunction_toString_symbol, 'function toString() { [native code] }')
    global.safefunction = (func, funcName) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, funcName || ''}() { [native code] }`)
    }
}).call(global);

// 代理器
function vmProxy(object, name) {
    return new Proxy(object, {
        get(target, property, receiver) {
            // 当对象的读取属性操作, 该方法就会被调用
            let result = Reflect.get(target, property, receiver);
            console.log(`${name} get [${property.toString()}] result => ${result}`);
            if (typeof result === 'object') {
                result = vmProxy(result, name + '.' + property)
            }
            return result
        },
        set(target, property, value, receiver) {
            // 当对象的设置属性值时, 该方法就会被调用
            let result = Reflect.set(target, property, value, receiver);
            console.log(`${name} set [${property.toString()}] value => ${value}`);
            return result
        },
        has(target, prop) {
            // 方法是针对in操作符的代理方法
            let result = Reflect.has(target, prop);
            console.log(`${name} has [${prop.toString()}] result => ${result}`);
            return result
        },
        apply(target, thisArg, argumentsList) {
            // 方法用于拦截函数的apply调用
            let result = Reflect.apply(target, thisArg, argumentsList);
            console.log(`${name} apply this => [${thisArg}] arguments => [${argumentsList}] result => ${result}`);
            return result
        },
        getOwnPropertyDescriptor(target, prop) {
            // 当获取代理对象的属性的描述符, 该方法就会被调用
            let result = Reflect.getOwnPropertyDescriptor(target, prop);
            if (prop === 'globalThis' || prop === 'global') {
                console.log(`${name} getOwnPropertyDescriptor [${prop.toString()}]`)
                return result
            }
            console.log(`${name} getOwnPropertyDescriptor [${prop.toString()}] result => ${result}`);
            return result
        },
        getPrototypeOf(target) {
            // 当读取代理对象的原型时, 该方法就会被调用
            let result = Reflect.getPrototypeOf(target);
            console.log(`${name} getPrototypeOf result => ${result}`);
            return result
        },
        isExtensible(target) {
            // 方法用于拦截对象的 Object.isExtensible
            let result = Reflect.isExtensible(target);
            console.log(`${name} isExtensible result => ${result}`);
            return result
        },
        ownKeys(target) {
            // 方法用于拦截 Reflect.ownKeys
            let result = Reflect.ownKeys(target);
            console.log(`${name} ownKeys result => ${result}`);
            return result
        },
        preventExtensions(target) {
            // 方法用于设置对Object.preventExtensions拦截
            let result = Reflect.preventExtensions(target);
            console.log(`${name} preventExtensions result => ${result}`);
            return result
        },
        setPrototypeOf(target, prototype) {
            // 方法主要用来拦截 Object.setPrototypeOf 设置原型对象
            let result = Reflect.setPrototypeOf(target, prototype);
            console.log(`${name} setPrototypeOf [${prototype}] result => ${result}`);
            return result
        },
        construct(target, args) {
            // 方法用于拦截new操作符
            let result = Reflect.construct(target, args);
            console.log(`${name} construct args =>[${args}] result => ${result}`);
            return result
        },
        defineProperty(target, property, descriptor) {
            // 方法用于拦截对对象的Object.defineProperty操作
            let result = Reflect.defineProperty(target, property, descriptor);
            console.log(`${name} defineProperty [${property}] result => ${descriptor}`);
            return result
        },
        deleteProperty(target, property) {
            // 方法用于拦截对对象属性的 delete 操作
            let result = Reflect.deleteProperty(target, property);
            console.log(`${name} deleteProperty [${property}] result => ${result}`);
            return result
        }
    })
}

// window = vmProxy(global, 'window');
window = global;
delete global;

// hook JSON
mystringify = JSON.stringify;
JSON.stringify = function stringify() {
    let result = mystringify.apply(this, arguments);
    console.log(`JSON.stringify => ${result}`)
    return result
}
safefunction(JSON.stringify, JSON.stringify.name)
// hook TypeError
TypeError = function TypeError(message){
    this.name = "TypeError";
    this.message = message;
    this.stack = 'TypeError: Illegal invocation\n    at JSON.stringify (<anonymous>)\n    at http://spider.wangluozhe.com/static/js/11.js:1:9574\n    at Number.K (http://spider.wangluozhe.com/static/js/11.js:1:9845)\n    at Number.K (http://spider.wangluozhe.com/static/js/11.js:1:7016)\n    at Number.K (http://spider.wangluozhe.com/static/js/11.js:1:7674)\n    at http://spider.wangluozhe.com/static/js/11.js:1:7423\n    at Array.map (<anonymous>)\n    at Number.K (http://spider.wangluozhe.com/static/js/11.js:1:7407)\n    at Number.K (http://spider.wangluozhe.com/static/js/11.js:1:7674)\n    at http://spider.wangluozhe.com/static/js/11.js:1:7423'
}
safefunction(TypeError, TypeError.name)

// ['length', 'name', 'arguments', 'caller', 'prototype']
History = function History() {
    throw new TypeError("Illegal constructor");
}
safefunction(History, History.name)
// 伪造对象属性
Object.defineProperties(History, {
    length: {
        configurable: true,
        enumerable: false,
        value: 0,
        writable: false
    },
    name: {
        configurable: true,
        enumerable: false,
        value: "History",
        writable: false
    },
    arguments: {
        configurable: false,
        enumerable: false,
        value: null,
        writable: false
    },
    caller: {
        configurable: false,
        enumerable: false,
        value: null,
        writable: false
    },
    // 暂定
    prototype: {
        configurable: false,
        enumerable: false,
        value: {},
        writable: false
    }
})

Object.defineProperties(History.prototype, {
    length: {
        configurable: true,
        enumerable: true,
        get: function length() {
            if (this != history){
                throw new TypeError("Illegal invocation");
            }
            return 0
        },
        set: undefined
    },
    scrollRestoration: {
        configurable: true,
        enumerable: true,
        get: function scrollRestoration() {
            if (this != history){
                throw new TypeError("Illegal invocation")
            }
            debugger
            return this.myscrollRestoration == undefined ? "auto" : this.myscrollRestoration
        },
        set: function scrollRestoration(val) {
             if (this != history){throw new TypeError("Illegal invocation")};
            switch (val){
                case 'manual0':
                   this.myscrollRestoration  = 'manual';
                   break
                case 'manual1':
                    this.myscrollRestoration  = 'manual';
                   break
                case 'manual':
                    this.myscrollRestoration  = val;
                   break
                case 'manual2':
                    this.myscrollRestoration  = 'manual';
                   break
                case 'manual3':
                    this.myscrollRestoration  = 'manual';
                   break
                default:
                    debugger;
            }
            return this.myscrollRestoration;
        }
    },
    state: {
        configurable: true,
        enumerable: true,
        get: function state() {
            if (this != history) {
                throw new TypeError("Illegal invocation")
            };
            return null;
            debugger;
        },
        set: undefined
    },
    back: {
        configurable: true,
        enumerable: true,
        value: function back() {
            debugger;
        },
        writable: true
    },
    forward: {
        configurable: true,
        enumerable: true,
        value: function forward() {
            debugger;
        },
        writable: true
    },
    go: {
        configurable: true,
        enumerable: true,
        value: function go() {
            debugger;
        },
        writable: true
    },
    pushState: {
        configurable: true,
        enumerable: true,
        value: function pushState() {
            debugger;
        },
        writable: true
    },
    replaceState: {
        configurable: true,
        enumerable: true,
        value: function replaceState() {
            debugger;
        },
        writable: true
    },
    constructor: {
        configurable: true,
        enumerable: false,
        value: History,
        writable: true
    },
    [Symbol.toStringTag]: {
        configurable: true,
        enumerable: false,
        value: "History",
        writable: false
    }
})
// 函数保护
Object.defineProperty(Object.getOwnPropertyDescriptor(History.prototype, 'length').get, "name", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'get length'
})
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'length').get, Object.getOwnPropertyDescriptor(History.prototype, 'length').get.name)

Object.defineProperty(Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').get, "name", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'get scrollRestoration'
})
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').get, Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').get.name)

Object.defineProperty(Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').set, "name", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'set scrollRestoration'
})
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').set, Object.getOwnPropertyDescriptor(History.prototype, 'scrollRestoration').set.name)

Object.defineProperty(Object.getOwnPropertyDescriptor(History.prototype, 'state').get, "name", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'get state'
})
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'state').get, Object.getOwnPropertyDescriptor(History.prototype, 'state').get.name)


safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'back').value, Object.getOwnPropertyDescriptor(History.prototype, 'back').value.name)
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'forward').value, Object.getOwnPropertyDescriptor(History.prototype, 'forward').value.name)
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'go').value, Object.getOwnPropertyDescriptor(History.prototype, 'go').value.name)
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'pushState').value, Object.getOwnPropertyDescriptor(History.prototype, 'pushState').value.name)
safefunction(Object.getOwnPropertyDescriptor(History.prototype, 'replaceState').value, Object.getOwnPropertyDescriptor(History.prototype, 'replaceState').value.name)


history = {};
Object.setPrototypeOf(history, History.prototype);

debugger;

!function (n, e, t, r, u, i, f, o, c, d, l, a, p, s, m, g, y, h, b, v, w, k, x, O, _, j, C, I, q, R, z, A, E, F, P, S, $, B, D, M, U, G, H, J, K, L, N, Q, T, V, W, X, Y, Z, nn, en, tn, rn, un, fn, on, cn, dn, ln, an, pn, sn, mn, gn, yn, hn, bn, vn, wn, kn, xn, On, _n, jn, Cn, In, qn, Rn, zn, An, En, Fn, Pn, Sn, $n, Bn, Dn, Mn, Un, Gn, Hn, Jn, Kn, Ln, Nn, Qn, Tn, Vn, Wn, Xn, Yn, Zn, ne, ee, te, re, ue, ie, fe, oe, ce, de, le, ae, pe, se, me, ge, ye, he, be, ve, we, ke, xe, Oe, _e, je, Ce, Ie, qe, Re, ze, Ae, Ee, Fe, Pe, Se) {
    function $e(n, e, t, r, i, f, d, s, h, v) {
        return e == oe ? (r ? t[Mn][nn[dn]]() || t[ge][nn[dn]]() : t[Mn][nn[cn]](en) || t[ge][nn[cn]](en)) && undefined : e == ae ? (t = {}) && (t[Mn] = []) && (t[ge] = []) && ((t[Rn] = en) || tn) && t : e == sn ? t ? r[R(r) - tn] : r[R(r) - tn] = i : e == ee ? A(r, Yn) ? E(r, Yn) : A(r, yn) ? E(r, yn) : i ? K(t, r) : E(r, Ln) : e == on ? ((i = {})[nn[Zn]] = t) && i : e == he ? t[nn[Dn]] : e == In ? !(i = b[t[r]]) || r != Yn && r != Ln ? i : t[nn[ae]] ? j[t[nn[ae]]] : ((t[nn[ae]] = t[nn[rn]] + nn[ae] + (t[nn[Pn]] ^ On)) || tn) && ((j[t[nn[ae]]] = F(rn, F(tn, i), t[nn[Pn]] & ze)) || tn) && j[t[nn[ae]]] : e == Un ? (f = P(r ? t[nn[qn]](r) : t)) && [i ? null : t[nn[qn]](r + f[tn], r + f[en] + f[tn]), r + f[en] + f[tn]] : e == zn ? (I += tn) && u : e == Ce ? i && r != nn[Cn] ? q[nn[hn]](t, r) : r in t : e == ne ? ((A(t, Ln) ? Z[en][E(t, Ln)] = Z[fn][r] : A(t, An) ? Z[en][E(E(t[An], Ln), Ln)] = l(Z[fn])[nn[Hn]](Q)[nn[qn]](r) : tn) || tn) && undefined : e == Vn ? Z[fn][t] : e == de ? t == tn ? F(tn, X(un, r))[en] ^ i & ze : t == rn ? F(rn, F(tn, X(un, r)), i & ze) : t == un ? c(r[nn[Xn]](O, nn[Un])) : undefined : e == be ? i == an ? X(tn, t, r) : i == Ln ? X(un, t) : i == dn ? null : i == Yn ? X(un, t) : i == yn ? a(X(rn, t, r)) : i == Dn ? !!p(o(X(tn, t, r))) : i == en ? g(X(rn, t, r)) : i == gn ? ((f = X(rn, t, r)) || tn) && m(f[nn[qn]](en, f[nn[on]](nn[ae])), f[nn[qn]](f[nn[on]](nn[ae]) + tn)) : en : e == _e ? y++ && I++ : e == pe ? (v = [][nn[vn]](t, [Z = [{}, f, i, d, s]])) && (r !== nn[Yn] ? Z[en][r] = h : tn) && Z[tn][nn[Hn]](N) && !(n - y) && K(v, Z[rn], U()) : function w() {
            return T(t, r, i, f, this, arguments, w)
        }
    }

    function Be(n, e, t, r, u, i, f, c, l, a) {
        for (e == qn ? i = R(t) - tn : e == Pn ? !(f = en) && (i = R(t) - tn) : e == je ? (u = nn[Jn]) || (i = t) : e == hn ? !(r = en) && !(c = en) && (u = t[nn[xn]](x)[en]) && ((i = u[nn[qn]](en, -tn)) || tn) && (f = u[nn[re]](R(u) - tn)) && ((r += w[nn[sn]](f)) || tn) && (l = R(i) - tn) : e == xn ? (i = []) && (f = en) : e == me ? (t = t[nn[xn]](m(x, nn[tn]))) && (r = t[nn[qn]](tn, -tn)) && (u = []) && r[nn[Hn]](function (n) {
            for (((i = P(n)[en][nn[ln]](bn)) || tn) && !(c = en) && (f = ln - R(i)); c < f; c++) i = nn[ue] + i;
            u[nn[cn]](i)
        }) && !(c = en) && (l = P(t[nn[qn]](-tn)[en])[en][nn[ln]](bn)) : e == Nn && (r = S(t, en)) && ((u = r[en]) || tn) && ((i = r[tn]) || tn) && ((u = V(u)) || tn) && (n[nn[pn]] = $e[nn[In]](tn, n, _e)) && (n[nn[ln]] = $e[nn[In]](tn, n, zn)); e == qn || e == Pn ? i >= en : e == je ? i < r : e == hn ? l >= en : e == xn ? f < R(r) : e == me ? c < P(t[nn[qn]](en, tn)[en])[en] - R(r) * ln - R(l) : e == Nn ? R(u) : en; e == qn ? i-- : e == Pn ? f++ && i-- : e == je ? i++ : e == hn ? l-- : e == xn ? f++ : e == me ? c++ : en) if (e == qn ? A(t[i][en], r, tn) && (l = !0) && ((c = t[i][en][r] = u) || tn) && l : e == Pn ? f == en && ((r == nn[Yn] ? (l = !0) && (c = null) : r == nn[yn] ? (l = !0) && (c = G(tn, t)[fn]) : r == nn[Gn] ? (l = !0) && (c = t[en][dn]) : en) || tn) && l || ((i == en && r == nn[mn] ? (l = !0) && (c = t[en][en]) : A(t[i][en], r, tn) ? (l = !0) && (c = t[i][en][r]) : en) || tn) && l || i == en && ((r == nn[wn] ? (l = !0) && (c = u && typeof exports == nn[Vn] ? undefined : exports) : r == nn[gn] ? (l = !0) && (c = u && typeof module == nn[Vn] ? undefined : module) : r == nn[le] ? (l = !0) && (c = u && typeof require == nn[Vn] ? undefined : require) : ((c = t[i][en][r]) || tn) && (c || r in t[i][en]) && (l = !0)) || tn) && l : e == je ? (u += o(i)) && en : e == hn ? ((r += k[nn[sn]](i[nn[re]](l)) * s(R(k), c) * R(w)) || tn) && c++ && en : e == xn ? (i[f] = t == tn ? r[nn[bn]](f) : o(r[f] ^ u)) && en : e == me ? (l = nn[ue] + l) && en : e == Nn ? (l = p(u[nn[qn]](en, tn), bn)) && ((a = p(u[nn[qn]](tn, tn + l), bn)) || tn) && (f = tn + l) && (c = f + a) && h[nn[cn]](u[nn[qn]](f, c)) && (u = u[nn[qn]](c)) && en : en) return c;
        if (e == Pn && !u) throw d(r + nn[Ln]);
        return e == qn ? t[en][en][r] = u : e == je ? u : e == hn ? [r, R(u)] : e == xn ? t == tn ? i : i[nn[Nn]](nn[Jn]) : e == me ? u[nn[cn]](l) && u[nn[Nn]](nn[Jn]) : e == Nn ? t[nn[qn]](i) : void 0
    }

    function K(n, e, t, u, o, c, d, l, a, p, m, g, h, b, v, w, k, x, O, _, j, C, I, q, z, F, P, S, L, N) {
        return (a = t[l = t[nn[rn]]]) && l == In ? function () {
            throw K(e, a[en])
        }() : l == Un ? function () {
            debugger
        }() : l == an || l == Yn || l == yn || l == Dn || l == dn || l == en || l == gn ? E(t, l) : l == Kn ? a[nn[Hn]](function (n) {
            K(e, n)
        }) : l == Vn ? A(a[en], Jn) ? ((q = K(e, a[tn])) || tn) && a[en][Jn][nn[Hn]](function (n, t) {
            G(tn, e)[en][E(n, Ln)] = q[t]
        }) : (I = E(a[en], Ln)) && ((q = K(e, a[tn])) || tn) && (A(a[tn], an) && E(a[tn], an) == Oe ? G(tn, e)[en][I] = G(tn, e)[en][I] : G(tn, e)[en][I] = q) : l == ne ? a[nn[Hn]](function (n) {
            K(e, n, u)
        }) : l == un ? u ? G(en, u[Mn], tn) : en : l == on ? u ? G(en, u[ge], tn) : en : l == zn || l == fn ? function (n, t, r, i, f) {
            for (((r = l == zn ? U() : u) || tn) && !(i = en) && (t = a[nn[Fn]](function (t) {
                return t[Zn] ? K(e, t) && null : !t[Kn] || t[Kn][nn[Hn]](function (t) {
                    !(n = E(t[Vn][en], Ln)) && !tn || A(G(tn, e)[en], n) || (G(tn, e)[en][n] = undefined)
                }) && !0
            })); i < R(t); i++) {
                if (G(tn, r[ge])) {
                    G(en, r[ge], en);
                    break
                }
                if (((f = K(e, t[i], r)) || tn) && G(tn, r[Mn])) break;
                if (r[Rn]) return f
            }
        }() : l == Nn || l == Pn ? function (n, t, r) {
            function i(n, e, t, r, u) {
                e[t][nn[Hn]](function (e, f) {
                    A(e, t) ? i(n, e, t, r[f], u) : A(e, Ln) && (u ? G(tn, n)[en][E(e, Ln)] = r[f] : B(n, E(e, Ln), r[f]))
                })
            }

            function f(n, e, t, r, u) {
                e[t][nn[Hn]](function (e) {
                    ((u = e[Vn][en]) || tn) && A(u, Ln) ? G(tn, n)[en][E(u, Ln)] = r : A(u, Jn) && i(n, u, Jn, r, tn)
                })
            }

            for (t in !D(u) && (n = K(e, a[tn]))) {
                if (l == Pn && (t = n[t]) && en || A(a[en], Ln) ? B(e, E(a[en], Ln), t) : A(a[en], Jn) ? i(e, a[en], Jn, t) : A(a[en], Kn) && f(e, a[en], Kn, t), ((r = K(e, a[rn], u)) || tn) && G(tn, u[Mn])) break;
                if (G(tn, u[ge])) G(en, u[ge], en); else if (u[Rn]) return r
            }
            D(u, tn)
        }() : l == Tn ? function () {
            for (D(u) || K(e, a[en]); K(e, a[tn]) && (!(C = K(e, a[un], u)) && !tn || !G(tn, u[Mn])); K(e, a[rn])) if (G(tn, u[ge])) G(en, u[ge], en); else if (u[Rn]) return C;
            D(u, tn)
        }() : l == sn || l == pn ? function (n) {
            for ((l == pn ? n = !0 : tn) && D(u); (!n || K(e, a[en], u, en, en, tn)) && (!(C = K(e, a[tn], u)) && !tn || !G(tn, u[Mn]));) if ((n = !0) && G(tn, u[ge])) G(en, u[ge], en); else if (u[Rn]) return C;
            D(u, tn)
        }() : l == Mn ? function (n, t, r) {
            try {
                t = K(e, a[en], u)
            } catch (i) {
                t = K(e, a[tn], u, i)
            } finally {
                return ((n = u[Rn]) || tn) && !(u[Rn] = en) && ((r = K(e, a[rn], u)) || tn) && u[Rn] ? r : (u[Rn] = n) && t
            }
        }() : l == On ? function (n, t, r, i, f, o, c, d) {
            for ((t = a[nn[qn]](tn)) && !(r = !1) && !(i = !1) && !(f = en) && ((n = K(e, a[en])) || tn) && D(u); f < R(t) && !G(tn, u[ge]); f++) if ((((c = K(e, t[f], n)) || tn) && n === c[en] ? r = !0 : tn) && r) {
                for (o = en; o < R(c[tn]); o++) {
                    if (((d = K(e, c[tn][o], u)) || tn) && G(tn, u[Mn])) {
                        i = !0;
                        break
                    }
                    if (u[Rn]) return d
                }
                if (i) break
            }
            D(u, tn)
        }() : l == Qn ? [A(a[en], Ln) && E(a[en], Ln) == nn[Yn] ? u : K(e, a[en]), a[nn[qn]](tn)] : l == Ln ? $(e, E(t, l)) : l == Rn ? (p = {}) && ((p[E(a[en], Ln)] = o) || tn) && e[nn[cn]]([p, null]) && ((C = K(e, a[tn], u)) || tn) && (e[nn[dn]]() || tn) && (u[Rn] ? C : undefined) : l == En ? a[nn[Hn]](function (n) {
            return K(e, n)[nn[ln]]()
        })[nn[Nn]](nn[Jn]) : l == qn ? K(e, a[en]) : l == ln ? ((b = E(a[en], an)) || tn) && (g = a[tn]) && (h = function (n, e, t, r, u, i, f, o) {
            return (((A(t, bn) ? (i = !0) && (o = t[bn]) && (f = K(n, o[en])) && (o = H(n, o[tn], K(n, o[rn]) == xe)) : t = E(t, Ln)) || u) && (r = K(n, r)) || tn) && (e == fe ? i ? f[o] = r : B(n, t, r) : e == Wn ? i ? f[o] += r : B(n, t, $(n, t) + r) : e == en ? i ? f[o] -= r : B(n, t, $(n, t) - r) : e == dn ? i ? f[o] *= r : B(n, t, $(n, t) * r) : e == gn ? i ? f[o] /= r : B(n, t, $(n, t) / r) : e == Dn ? i ? f[o] %= r : B(n, t, $(n, t) % r) : e == ye ? i ? f[o] <<= r : B(n, t, $(n, t) << r) : e == Hn ? i ? f[o] >>= r : B(n, t, $(n, t) >> r) : e == En ? i ? f[o] >>>= r : B(n, t, $(n, t) >>> r) : e == an ? i ? f[o] &= r : B(n, t, $(n, t) & r) : e == Xn ? i ? f[o] |= r : B(n, t, $(n, t) | r) : e == tn ? i ? f[o] ^= r : B(n, t, $(n, t) ^ r) : e == yn ? i ? f[o] = s(f[o], r) : B(n, t, s($(n, t), r)) : undefined)
        }) && (A(g, Jn) ? (m = K(e, a[rn]))[Jn][nn[Hn]](function (n, t) {
            return h(e, b, n, m[t])
        }) : h(e, b, g, a[rn], tn)) : l == jn ? K(e, a[en]) : l == Wn ? function (n, t, r, u, i) {
            for ((n = []) && !(t = en) && (u = en); t < R(a); t++) if (!A(a[t], tn)) if (A(a[t], jn)) {
                for (!(r = en) && (i = K(e, a[t])); r < R(i); r++) n[t + u + r] = i[r];
                u += r - tn
            } else n[t + u] = K(e, a[t]);
            return n
        }() : l == Fn ? ((b = E(a[en], an)) || tn) && ((v = K(e, a[tn])) || tn) && ((O = K(e, a[rn])) || tn) && (b == Ln ? v + O : b == ce ? v - O : b == cn ? v / O : b == ln ? v * O : b == fn ? s(v, O) : b == kn ? v % O : b == bn ? v < O : b == we ? v <= O : b == ie ? v > O : b == Qn ? v >= O : b == _n ? v in O : b == ue ? v & O : b == pn ? v != O : b == On ? v !== O : b == Fn ? v | O : b == vn ? v ^ O : b == Sn ? v == O : b == Jn ? v === O : b == rn ? v << O : b == ke ? v >> O : b == Tn ? v >>> O : b == te ? v instanceof O : undefined) : l == kn ? (u && (u[Rn] = tn), G(tn, a[nn[Hn]](function (n) {
            return K(e, n)
        }))) : l == mn ? ((C = {}) && a[nn[Hn]](function (n) {
            (w = K(e, n)) && ((I = w[en]) || tn) && ((q = w[tn]) || tn) && (w[rn] ? (k = {}) && (k[nn[Wn]] = !0) && (k[nn[Sn]] = !0) && w[rn] == tn ? ((k[nn[Qn]] = q) || tn) && i[nn[En]][nn[Rn]](C, I, k) : w[rn] == rn && ((k[nn[ne]] = q) || tn) && i[nn[En]][nn[Rn]](C, I, k) : C[I] = q)
        }), C) : l == Bn ? [H(e, a[en], K(e, G(tn, a)) == xe), K(e, a[tn])] : l == Cn ? (((x = K(e, G(tn, a))) == An ? O = tn : x == jn && (O = rn)) || tn) && (a = a[nn[qn]](en, -tn)) && ((_ = K(e, G(tn, a)) == xe) || tn) && (a = a[nn[qn]](en, -tn)) && ((I = H(e, G(tn, a), _)) || tn) && ((q = a[R(a) - rn]) || tn) && ((j = a[nn[qn]](en, R(a) - rn)) || tn) && ((F = J(M(e, I, q, j), I)[nn[Zn]]) || tn) && [I, F, O] : l == cn ? G(tn, a[nn[Hn]](function (n) {
            return K(e, n)
        })) : l == Xn ? ((C = K(e, a[en]) ? K(e, a[tn], u) : K(e, a[rn], u)) || tn) && u[Rn] ? C : undefined : l == vn ? function (n, e, t, r, u, i) {
            return e == le ? A(r, bn) ? ((i = r[bn]) || tn) && ((u = K(n, i[en])) || tn) && ((i = H(n, i[tn], K(n, i[rn]) == xe)) || tn) && (t == xe ? ++u[i] : u[i]++) : ((i = K(n, r)) || tn) && (A(r, Ln) && B(n, E(r, Ln), i + tn) || tn) && (t == xe ? i + tn : i) : e == Zn ? A(r, bn) ? ((i = r[bn]) || tn) && ((u = K(n, i[en])) || tn) && ((i = H(n, i[tn], K(n, i[rn]) == xe)) || tn) && (t == xe ? --u[i] : u[i]--) : ((i = K(n, r)) || tn) && (A(r, Ln) && B(n, E(r, Ln), i - tn) || tn) && (t == xe ? i - tn : i) : void 0
        }(e, K(e, a[en]), K(e, a[tn]), a[rn]) : l == Zn ? R(a) <= rn && A(a[en], yn) ? G(tn, e)[en][E(G(tn, a), Ln)] = r[K(e, a[en])] : (I = E(G(tn, a), Ln)) && (G(tn, e)[en][I] = J(M(e, I, a[R(a) - rn], a[nn[qn]](en, R(a) - rn)), I)[nn[Zn]]) : l == Sn ? K(e, a[en]) ? K(e, a[tn]) : K(e, a[rn]) : l == wn ? function (n, e, t, r, u, i) {
            return e == Ln ? +K(n, t) : e == ce ? -K(n, t) : e == Kn ? !K(n, t) : e == mn ? ~K(n, t) : e == Bn ? A(t, Ln) ? typeof $(n, E(t, Ln), tn) : typeof K(n, t) : e != se ? e == ve ? A(t, Ln) ? A(G(tn, n)[en], E(t, Ln)) ? delete G(tn, n)[en][E(t, Ln)] : (i = E(t, Ln)) != nn[gn] && i != nn[wn] && !nn[le] : A(t, bn) ? (u = t[bn], delete K(n, u[en])[u = H(n, u[tn], K(n, u[rn]) == xe)]) : (K(n, t), !0) : void 0 : void K(n, t)
        }(e, K(e, a[en]), a[tn]) : l == Gn ? function (n, e, t, r) {
            return e == wn ? t || K(n, r) : e == $n ? t && K(n, r) : void 0
        }(e, K(e, a[en]), K(e, a[tn]), a[rn]) : l == rn ? R(a) <= rn && A(a[en], yn) ? r[K(e, a[en])] : J(M(e, E(G(tn, a), Ln), a[R(a) - rn], a[nn[qn]](en, R(a) - rn)))[nn[Zn]] : l == Hn ? J(M(e, nn[Yn], G(tn, a), a[nn[qn]](en, R(a) - tn)))[nn[Zn]] : l == xn ? G(tn, e)[un] : l == bn ? ((q = H(e, a[tn], K(e, a[rn]) == xe)) || tn) && ((F = K(e, a[en], typeof u != nn[an] ? tn : u + tn, z = o || [], c)) || tn) && (!u || d ? z[nn[Hn]](function (n) {
            return F = F[en], n
        })[nn[Hn]](function (n) {
            F = F[n]
        }) && c && c[Gn] ? function () {
            return f[nn[Tn]][nn[Mn]][nn[hn]](F[q], F, arguments)
        } : F[q] : z[nn[cn]](q) && [F, F[q]]) : l == _n ? (P = typeof u == nn[te] ? u : {}) && (P[Gn] = tn) && (S = K(e, G(tn, a), en, en, P)) && (N = a[nn[qn]](en, -tn)[nn[Hn]](function (n) {
            return A(n, jn) ? L = K(e, n) : K(e, n)
        })) && (N = L ? N[nn[qn]](en, R(N) - tn)[nn[vn]](L) : N) && !(n > y) && f[nn[Tn]][nn[Mn]][nn[hn]](S, undefined, N) : l == $n ? new (f[nn[Tn]][nn[In]][nn[Mn]](K(e, G(tn, a)), [en][nn[vn]](a[nn[qn]](en, R(a) - tn)[nn[Hn]](function (n) {
            return K(e, n)
        })))) : void 0
    }

    (Rn = 27) && (on = 5) && (pn = 10) && (En = 30) && (vn = 17) && (Fn = 31) && (ln = 8) && (bn = 16) && (Dn = 36) && (xn = 20) && (ue = 56) && (Gn = 39) && (an = 9) && (kn = 19) && (Bn = 35) && (Un = 38) && (mn = 12) && (Hn = 40) && (Xn = 49) && (rn = 2) && (le = 62) && (Tn = 46) && (Cn = 24) && (Vn = 47) && (tn = 1) && !(en = 0) && (An = 29) && (zn = 28) && (un = 3) && (qn = 26) && (_n = 22) && (sn = 11) && (In = 25) && ($n = 34) && (Pn = 32) && (yn = 14) && (cn = 6) && (Mn = 37) && (Jn = 41) && (Ln = 43) && (Sn = 33) && (Re = 123) && (re = 55) && (fn = 4) && (ke = 73) && (me = 66) && (ae = 63) && (ne = 52) && (fe = 58) && (On = 21) && (Zn = 51) && (hn = 15) && (dn = 7) && (je = 78) && (be = 70) && (ee = 53) && (ye = 68) && (pe = 64) && (Nn = 44) && (_e = 77) && (he = 69) && (gn = 13) && (de = 61) && (se = 65) && (Yn = 50) && (ze = 127) && (Oe = 76) && (ve = 71) && (wn = 18) && (Ie = 91) && (Qn = 45) && (ge = 67) && (oe = 59) && (Ce = 79) && (te = 54) && (xe = 74) && (jn = 23) && (Kn = 42) && (ie = 57) && (Wn = 48) && (qe = 97) && (we = 72) && (ce = 60) && (nn = "ReferenceError(g(c(call([(lastIndexOf(push(pop(toString(number(valueOf(indexOf(window(module(arguments(cilame_call(charCodeAt(concat(exports(pow(match([0-9a-f]{2}(Date(Math(hasOwnProperty(bind(slice(defineProperty(BigInt(parseFloat(Object(filter(v(configurable(String(keys(length(apply(%$&(vmpzl_arguments(map((]( is not defined(join(get(prototype(undefined(enumerable(replace(null(_(set(decodeURIComponent(object(charAt(0(parseInt(RegExp(Function(fromCharCode(*(require($".split("(")) && (i = typeof global == nn[Vn] ? window : global) && (L = new i[nn[_n]]) && (R = $e[nn[In]](tn, L, he)) && (E = $e[nn[In]](tn, L, In)) && (S = $e[nn[In]](tn, L, Un)) && (A = $e[nn[In]](tn, L, Ce)) && (D = $e[nn[In]](tn, L, oe)) && (M = $e[nn[In]](tn, L, Yn)) && (U = $e[nn[In]](tn, L, ae)) && (G = $e[nn[In]](tn, L, sn)) && (H = $e[nn[In]](tn, L, ee)) && (J = $e[nn[In]](tn, L, on)) && (N = $e[nn[In]](tn, L, ne)) && (Q = $e[nn[In]](tn, L, Vn)) && (T = $e[nn[In]](tn, L, pe)) && (X = $e[nn[In]](tn, L, de)) && (Y = $e[nn[In]](tn, L, be)) && (f = i[nn[oe]]) && (o = i[nn[$n]][nn[ce]]) && (c = i[nn[ee]]) && (d = i[nn[en]]) && (l = i[nn[En]][nn[Bn]]) && (a = i[nn[An]]) && (p = i[nn[ie]]) && (s = i[nn[jn]][nn[kn]]) && (m = i[nn[fe]]) && (f[nn[Tn]][nn[hn]] = f[nn[Tn]][nn[un]]) && (q = i[nn[En]][nn[Tn]][nn[Cn]]) && (y = tn) && (I = tn) && (h = []) && (b = []) && ((g = i[nn[zn]]) || tn) && (z = Be[nn[In]](tn, L, je)) && (F = Be[nn[In]](tn, L, xn)) && (P = Be[nn[In]](tn, L, hn)) && ($ = Be[nn[In]](tn, L, Pn)) && (B = Be[nn[In]](tn, L, qn)) && (V = Be[nn[In]](tn, L, me)) && (W = Be[nn[In]](tn, L, Nn)) && (K = K[nn[In]](tn, L)) && (v = z(Re, ze) + z(Bn, Gn) + z(Hn, Ie) + z(qe, Re)) && (w = z(Hn, Ie)) && (k = z(Re, ze) + z(Bn, Gn) + z(qe, Re)) && (x = nn[fn] + k + nn[Kn] + nn[de] + nn[fn] + w + nn[Kn]) && (O = m(nn[On], nn[tn])) && (_ = [[i, null, null, e, t, en, en, arguments, {}, L]]) && (j = _[en][ln]) && K(_, function De(n, e, t) {
        return function (n, e, t, r, u, i, f, o, c, d) {
            if (t == an || t == Ln || t == dn || t == Yn || t == yn || t == Dn || t == en || t == gn) return (r = {}) && ((r[nn[rn]] = t) || tn) && (u = function (n, e, t) {
                return (t = P(e)) && [Y(h[t[en]], t[en], n), t[en], t[tn]]
            }(t, e[nn[qn]](y, pn))) && ((r[t] = u[en]) || tn) && [function (n, e, t, r) {
                return ((r = b[nn[sn]](n[e])) || tn) && ((r == -tn ? b[nn[cn]](n[e]) && (n[e] = R(b) - tn) : n[e] = r) || tn) && ((n[nn[Pn]] = t) || tn) && n
            }(r, t, u[tn]), u[rn]];
            for ((f = []) && (r = {}) && (i = S(e, y)[en]); R(i);) (o = v[nn[sn]](i[nn[qn]](en, y))) != an && o != Ln && o != dn && o != Yn && o != yn && o != Dn && o != en && o != gn ? (d = S(i, y, tn)) && f[nn[cn]](De(n, i)) && (i = i[nn[qn]](d[tn])) : (c = De(n, i)) && f[nn[cn]](c[en]) && (i = i[nn[qn]](y + c[tn]));
            return (r[t] = f) && ((r[nn[rn]] = t) || tn) && r
        }(n, e, v[nn[sn]](e[nn[qn]](en, y)))
    }(L, W(u)))
}("jsvmpzl:ver.1.5.1", this, typeof arguments != "undefined" ? arguments : void 0, [], "|~:|gP#hh|qI%{gc},t~ftxLs#}{eQrq$j}Huwxx$X$jxylXa#gw%?jk}~wJ|}xj|cAaitgdE|os{{#3|gshuj/jomdb*voj#~Msgvxa?a%hrc6jfcsxF|~cbieYaucbi<%{o~tKv$mix(q&y#zQuu%gvXwfbsfV#kkp~Vhupb#:pr}iv2a%ju#N|v{~d4jm$k&M#k{~uKqa%yz<r&icd)|l~#s=rgyfoY|&#{#tU|d}at&Kw#n&g-uvqto6sy$ysVsxzdnZ$|#q|PbsyjhZjgfmlA|~a#yi>|~$jfe9|ori$rNbk|~xC|~|q$x<nfv&h3|oppqbBza%|pL|bsybt7|gx%owPpz$#iQiaxyf0nr%quBshc{%3kbo&mHm{mhh-hujglXhu#aoGkzb|iQphwwtGid#~zXoa&ttKa#gmn=uqcooNqqpjp-b}sp$Xzhgts)e$ftzC|rik#zZ|sk}~n;kbtzyMhu#jk(i~~zk<oa#bj/jkqel)wkjjpXa%k|%>$se}a(|$ek%3|%esqx7uwgvsEacjkqYb%vgqG|kuxpt>|gb$&iLkc%cjDmrn$$9l&lft;ib{#cRlsbbpI&i}ogOksgqkTacqhk/|r#zoL|cjk#q-yuiyx=fc$si.aonzv>dgmsuZdn}w|Ug}o~uXeus}$9eduei?a&fymJ|rv{&h,ibl{&*ef|hg7cve}o=d#~}d<bo%rnIbnvep=ch{cnWg#bns<aoq&rGbpnf{3bfd&g*hkezu@qii{{Zqd~s#F|bx~~$,cetlo=cnbq$8a$sojHbo%jj?bvji|Xdv$ieEdv&odAspje#?qnzu|.dv&pe?qoaqk2a$|~a3ajvosE$ivb%Wu&hwr.u}ayeF|%a{&j-|fx|srY&xj$m/ee|{jAr#t$i8r$hhlPednz&(r$qlmObw}h}?duwt~:c#bfcKr$o|u@jwbr*ikgcz3ahutcMbfhsu=bnoztLd#mvy5cnt&v?aw$pa5gthx}Ugtb$j9pqp$vRrn}roYgtbawWrnvgwBd~djy;ajxdlT|ktyie?|bx|}oG|c{&asHqkh|o.lylk;|}fs|wJ#hjek9decwuLao}|sKax%$m?kwvqMy|s{jKaf$prS&x$|~Ncvczw:&z|r~X|$wkmjKykweK|$wkht(|ntfc~Kbnt%#0~z%oq(gkvlk*~zzh$;gkvla(hkov$Vuf&%kTepp}hF#iu{jXm&enbMbfneaZh|r$qYg}sybGhcw&h+r#cruH#hcz~O$gswqH$hhbyB$xu%y)gt$ulNhcym&?h|fuaTfu{yiIiqqsxBinlm}1|}{$g$;cfa|gYedvsh-deqea+gtk}{Kftuex=|fvinrJ#aft~R|riwf}?|c}cmlAubl~wN%xu%s-cni|a>tvpcbAtu~xa;rhsqb;d#}wgD}~iqL||olpvTa~q%pXa%cnr8edzx{LdekwdM$%f$l4|iie|Ulhwlp3$%f$l4|jg{iItrpkn1|bjwq~0a#&siH|jki~l-ur&bx,#bhkpK|fds{#,|jylz|;|bjegh1jc|zU~heqw-~yuce-|z&i|O$x~jrQ~i$e|*#xyef5jfesFa$c~yW|bd%reN||vxao2%oew$:|zbrbM&#zmhC&fczh)&ntzeL&fbvj(&fgcbK%wf%}T%$orf9fdzO}yif#LrmfaU~pn%yQan|e#A|j%ytoGr$tfLlrrfhZ|jjyf},i|mon=ed{f~L|&&H%wku#O||y~osW|j%xggG|$ueowKluy%q<hc&}#6o$jad)&$llc)#h~#l;%pasx=&$llcQar&uo3|bom{~@|$ti{zMtz{koR##%xmO|bdoa&S#|nmhPaxibc<rwiiZ&obn$7|idzjM%$cluX#rwpnHb~rfk?$xh{~E%%hgr9&oaicQ<}a8T}a46}a0}}a,#}&YJ#6O#3KZ}#.K|/K|0KY#~TJFODK|.6?K|/0:040.KIKT)(KS)(KU)(JFODK|16?K|00:040.KIKT)(KS)(KU)(J}0O}-K|,6|ZK|.K|1,|AC=K|2060/KIK|2)(K|L)()(C=K|O060/KIK|M)(K|P)()(CDKY6>KY0:040.KIKT)(KS)(KU)()(060/KIK|-)(K|3)(3:680600K|,K|Q)(K/)(KZT/2-)|JK3T>(<)70.K3K5)(,0C.KKP()(E|N#BT@6>K3R5,0C.K8D6)(0.K9KV)(;|-K:#|(TY6W,AC?R|R,8C.K<RP)(C.K,K:)()(0:040.K3K5)(RK))K-)(K*E|V#JTH6F0/KIK|-)(R|3,0C.K8D6)(0.K9KV)(;|-K:#|(TY6W,AC?R|S,8C.K<RP)(C.K,K:)()(0:040.K3K5)(RK))K-)(K*E|Z#NTL6J040.KIKT)(KS)(RU,0C.K8D6)(0.K9KV)(;|-K:#|(TY6W,AC?R|T,8C.K<RP)(C.K,K:)()(0:040.K3K5)(RK))K-)(K*E|N#BT@6>K;R4,0C.K8D6)(0.K9KV)(;|-K:#|(TY6W,AC?R|4,8C.K<RP)(C.K,K:)()(0:040.K3K5)(RK))K-)(K*E|U#ITG6E0.KQK>)(R/,0C.K8D6)(0/K9K|U)(;|-K:#|(TY6W,AC?R|5,8C.K<RP)(C.K,K:)()(0:040.K3K5)(RK))K-)(K*TK(I)7050.K3K5)(R|4))66040.K;K4)(K/)(TQ(O)7050.K3K5)(R|V))6<0:040.K;K4)(K/)(K/)(TQ(O)7050.K3K5)(R|5))6<0:040.KQK>)(K/)(K/)(TW(U)7050.K3K5)(R|W))6B0@0:040.KQK>)(K/)(K/)(K/)(Sq0#q*J.O,K.P(EpD#p+J#5O#2KW,#-COKM,IC/K,.|+)(C.K?D6)(C.K=D6)(C.K8D0)()(CNKF,HC.K,RG)(C.K?D6)(C.K=D6)(C.K8D0)()(COK|X,HC.K,&*)(C.K?D6)(C.K=D6)(C.K8D6)()(COK|Y,HC.K,&*)(C.K?D6)(C.K=D6)(C.K8D6)()(CTK>,NC4K,0.KGK>)()(C.K?D6)(C.K=D6)(C.K8D6)()(J8O6KL62KG0.K9KC)(LjOJ.O,K+)XKL#jBJ4O2KJ0.KWK+))J4O2KB0.KLK+))LiVJ.O,K@)XKB#iIJ4O2KR0.KJK@))J4O2K20.KBK@))5e7K@M|:R>T|16|.,WCUK+,OCMK>GG)E?.)1KRK2?;)1050.K2K,)(K|6)(KG)())0.K.K-)(~*K*M%?RH5%6K+M|YRMT|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|7?E)10>0862K20.K9KC)(KF)(K,)(R|8)())0.K.K-)(~*K*M|YRAT|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|9?E)10>0862K20.K9KC)(KF)(K,)(R|:)())0.K.K-)(~*K*M|ZR|(T|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|;?E)10>0862K20.K9KC)(KF)(K,)(R|<)())0.K.K-)(~*K*M.K*~*K*~*K*M}<RO5}3K+M|YRAT|P6|M,|BC|?K+,|8C.K<RO)(C|-K,GZ)E?7)1600.K2K/)(R|=?E)10>0862K20.K9KC)(KF)(K,)(R|>)())0.K.K-)(~*K*M.K*~*K*~*K*M|RK*E|I#MTK6I,?C=K+,7C5K@?/)|*KRK2))))0.K.K-)(;QK:#MTK6I,?C=K+,7C5K@0/K:K|?)())))0.K.K-)(K*~*K*T|D6|A,|6C|3K+,|,C|)KN?V)16<62KJ0.K9KN)(0.K;K4)(6<62KB0.K9KN)(0.K;K4)()())0.K.K-)(E},#|/T|,6|),RCPK+,JCHK4?B)162KJ0.K;K4)(62KB0.K;K4)()())0.K.K-)(;QK:#MTK6I,?C=K+,7C5K40/K:K|?)()())0.K.K-)(K*TC6A,7C5KG?/)|IKDKG)(0.K.K-)(;:K:#63462K:0.K;K4)(K*3462K.0.K;K4)(K|@St*#sWJ.O,K.P(Es>#rXJ$@O$=KW,$8C>KM,8C.K=D0)(C.K8D0)()(C>KA,8C.K=D0)(C.K8D0)()(C?K|(,8C.K=D0)(C.K8D0)()(CGK|Z,@C.K?D0)(C.K=D0)(C.K8D0)()(CGK}(,@C.K?D0)(C.K=D0)(C.K8D0)()(CGK}),@C.K?D0)(C.K=D0)(C.K8D0)()(CGK}*,@C.K?D0)(C.K=D0)(C.K8D0)()(CGK}+,@C.K?D0)(C.K=D0)(C.K8D0)()(CGK|6,@C.K?D0)(C.K=D6)(C.K8D0)()(J>O<KL680.KGK>)(0.K9KC)(Ll+J.O,K+)XKL#kQJ4O2KJ0.KWK+))J4O2KB0.KLK+))LfGJ.O,K@)XKB#f:J4O2KR0.KJK@))J4O2K20.KBK@))5eNK@M%PRH5%GK+M}7RMT|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|7?E)10>0862K20.K9KC)(KF)(K,)(R|8)())0.K.K-)(T7(5)70.KDKM)(.|H~*K*M|YRAT|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|9?E)10>0862K20.K9KC)(KF)(K,)(R|:)())0.K.K-)(~*K*M|ZR|(T|P6|M,|BC|?K+,|8C.K<RH)(C|-K,GZ)E?7)1600.K2K/)(R|;?E)10>0862K20.K9KC)(KF)(K,)(R|<)())0.K.K-)(~*K*M.K*~*K*~*K*M#WRO5#NK+M#ARAT|P6|M,|BC|?K+,|8C.K<RO)(C|-K,GZ)E?7)1600.K2K/)(R|=?E)10>0862K20.K9KC)(KF)(K,)(R|>)())0.K.K-)(T7(5)70.KDKA)(R},T7(5)70.KDKA)(R}-T7(5)70.KDKA)(R}.T7(5)70.KDKA)(R}/T7(5)70.KDKA)(R}0TR6P,FCDK+,>C.K<RO)(C4K,0.KDKA)()())0.K.K-)(~*K*M.K*~*K*~*K*MSK*TK6I,?C=K+,7C5K@?/)|*KRK2))))0.K.K-)(~*K*T|D6|A,|6C|3K+,|,C|)KN?V)16<62KJ0.K9KN)(0.K;K4)(6<62KB0.K9KN)(0.K;K4)()())0.K.K-)(T|,6|),RCPK+,JCHK4?B)162KJ0.K;K4)(62KB0.K;K4)()())0.K.K-)(Q|P?.)1K+RM#STQ6O,ECC?0)|)R|AK+050.K3K5)(R|B))))0.K.K-)(#LTJ6H,>C<?0)|)R|AK+0.KDK+))))0.K.K-)(TP6N,DCBR|C?;)10/KDK}1)(0.KGK>)()(0.K.K-)(;:K:#63462K:0.K;K4)(K*3462K.0.K;K4)(K|DT%K(%H)70/K3K|E)(}%:#%4T|3(|0)7050.K3K5)(R|B))6P6K.|+.|K0C?<)|)R|G6402B+K|NK}2)(K}3)(K}4T?(=)7040.K3K5)(RG))6+K|@T@(>)7050.K3K5)(R|C))6+K|DTK(I)7050.K3K5)(R}5))66040.K;K4)(K/)(TQ(O)7050.K3K5)(R}6))6<0:040.K;K4)(K/)(K/)(TQ(O)7050.K3K5)(R}7))6<0:040.KQK>)(K/)(K/)(TW(U)7050.K3K5)(R}8))6B0@0:040.KQK>)(K/)(K/)(K/)(3D6B680.K3K5)(0.K;K4)(R|FR|FKZK|EK*")

function get_sign() {
    return window.get_signature()
}

console.log(get_sign())