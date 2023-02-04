// 1. 先 hook setRequestHeader 即可以找到加密入口
// 保存原方法
XMLHttpRequest.prototype.setRequestHeader_bk = XMLHttpRequest.prototype.setRequestHeader
// 重写原方法
XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
    if (header === 'safe') {
        debugger
    }
    // 返回原方法
    return this.setRequestHeader_bk(header, value)
}

// 2. 找到加密入口函数是AAEncode（表情包加密- 特征一堆表情包）加密, 去掉最后的('_')符号到控制台执行即可得到源码、
// 3. 进入源码内部就可以发现使用window.localStorage.setItem (Storage.setItem() 接受一个键名和值作为参数，将会把键名添加到存储中，如果键名已存在，则更新其对应的值)
// 来存储数据, 所以可以 hook Storage.prototype.setItem 方法找到内部逻辑
Storage.prototype.setItem_bk = Storage.prototype.setItem
Storage.prototype.setItem = function (keyName, keyValue) {
    if (keyName === 'token') {
        debugger;
        return this.setItem_bk(keyName, keyValue)
    }
    return this.setItem_bk(keyName, keyValue)
}
Storage.prototype.setItem.toString = function () {
    return 'function setItem() { [native code] }'
}