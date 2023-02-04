// hook 全局变量
// 保存原变量
val_bk = test
Object.defineProperty(window, 'test', {
    // 获取变量(全局)时触发get
    get: function () {
        console.log('hook 全局变量成功')
        debugger;
        // 返回变量
        return val_bk
    },
    // 修改变量(全局)时触发set
    set: function (val) {
        console.log('hook 修改全局变量成功')
        debugger;
        // 返回修改后的变量
        return val_bk = val
    }
})