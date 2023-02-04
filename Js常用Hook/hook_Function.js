// hook Function.prototype.call
// hook 瑞数入口（商标局）

// 保存原方法
Function.prototype.call_bk = Function.prototype.call
// 重写call函数, 接收两个参数
Function.prototype.call = function (thisArg, arg1) {
    console.log(thisArg, arg1)
    debugger;
    // 返回原方法并执行
    return this.call_bk(thisArg, arg1)
}
// 伪装原型链
Function.prototype.call.toString = function () {
    return 'function call() { [native code] }'
}