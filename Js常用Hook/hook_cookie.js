// hook cookie
// 保存原属性（原方法）
cookie_bk = document.cookie
Object.defineProperty(document, 'cookie', {
    // 调用属性（cookie）时触发get
    get: function () {
        console.log('获取cookie......')
        debugger;
        // 返回原属性（原方法）
        return cookie_bk
    },
    // 设置属性（cookie）的值时触发set
    set: function (val) {
        console.log('设置cookie：', val)
        debugger;
        // 返回赋值后的原属性（原方法）
        return cookie_bk = val
    }
})