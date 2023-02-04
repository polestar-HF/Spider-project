// hook charAt
// 保存原方法
String.prototype.charAt_bk = String.prototype.charAt
String.prototype.charAt = function (val) {
    // 获取字符串
    str = this.toString()
    console.log('hook String.prototype.charAt')
    debugger;
    // 返回原方法
    return str.charAt_bk(val)
}
// 原型链，伪装hook痕迹
String.prototype.charAt.toString = function () {
    return 'function charAt() { [native code] }'
}


// hook split
// 保存原方法
String.prototype.split_bk = String.prototype.split
String.prototype.split = function (val) {
    // 获取字符串
    str = this.toString()
    console.log('hook String.prototype.split')
    debugger;
    // 返回原方法
    return str.split_bk(val)
}
// 原型链，伪装hook痕迹
String.prototype.split.toString = function () {
    return 'function split() { [native code] }'
}