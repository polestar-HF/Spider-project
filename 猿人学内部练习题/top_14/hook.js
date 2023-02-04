// 保存原方法
window.a_bk = window.a
// 重写原方法
Object.defineProperty(window, 'a', {
    set: function (val) {
        debugger
        // 返回赋值后的方法
        return window.a_bk = val
    },
    get: function () {
        debugger
        // 返回原方法
        return window.a_bk
    }
})