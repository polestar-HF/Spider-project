eval_bk = eval
eval = function (val) {
    console.log(val);
    debugger;
    return eval_bk(val)
}
eval.toString = function () {
    return 'function eval() { [native code] }'
}