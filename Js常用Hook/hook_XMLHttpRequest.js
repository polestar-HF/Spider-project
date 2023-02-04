// hook XMLHttpRequest
// 保存原方法
XMLHttpRequest.prototype.setRequestHeader_bk = XMLHttpRequest.prototype.setRequestHeader
// 重写setRequestHeader方法, 接受两个参数
XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
    debugger;
    // 缩小范围, 其实可以不用做判断
    // if (header === 'safe' || header === 'timestamp') {
    //     console.log(header, value)
    //     debugger;
    // }
    // 返回原方法并执行
    this.setRequestHeader_bk(header, value)
}
// 伪装原型链, 防止被检测
XMLHttpRequest.prototype.setRequestHeader.toString = function () {
    return 'function setRequestHeader() { [native code] }'
}

XMLHttpRequest.prototype.send_bk = XMLHttpRequest.prototype.send
XMLHttpRequest.prototype.send = function (body) {
    debugger
    this.send_bk(body)
}