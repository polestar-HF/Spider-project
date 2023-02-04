// hook JSON.parse
// 保存原属性（原方法）
parse = JSON.parse
Object.defineProperty(JSON, 'parse', {
    // 调用JSON.parse方法十触发get
    get: function () {
        console.log('hook JSON.parse成功')
        debugger;
        // 返回原方法
        return parse
    }
})


// hook JSON.stringify
// 保存原属性（原方法）
stringify = JSON.stringify
Object.defineProperty(JSON, 'stringify', {
    // 调用方法时触发get
    get: function () {
        console.log('hook JSON.stringify成功')
        debugger;
        // 返回原方法
        return stringify;
    }
})