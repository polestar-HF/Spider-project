// hook push
// 保存原方法
Array.prototype.push_bk = Array.prototype.push
// 改写push方法
Array.prototype.push = function (val) {
    // 获取当前数组
    list = this
    debugger;
    // 返回原方法
    return list.push_bk(val)
}
// 伪装原型链，伪装hook痕迹
Array.prototype.push.toString = function () {
    return 'function push() { [native code] }'
}