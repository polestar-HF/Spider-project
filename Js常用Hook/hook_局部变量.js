// hook 局部变量
function Ram() {
    function zz(d) {
        return d
    }

    // 保存原属性（原方法）
    zz_bk = zz;
    // 重写原方法
    zz = function (val) {
        if (val === 'Ram') {
            debugger;
            val = 'hook 成功'
            return zz_bk(val)
        }
        return zz_bk(val)
    }

    zz(1);
    zz(2);
    eval('zz(' + "'Ram'" + ')')

}

Ram()