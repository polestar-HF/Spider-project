// hook eval
// 保存原属性（原方法）
eval_bk = eval
eval = function (val) {
    console.log('eval: ', val)
    debugger;
    // 返回原属性（原方法）
    return eval_bk(val)
}
// 隐藏hook痕迹，防止检测
eval.toString = function () {
    return 'function eval() { [native code] }'
}