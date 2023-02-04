# -*- coding: utf-8 -*-
# @Time    : 2022/4/25 21:59
# @Author  : Ram.zhang
# @File    : get_data_info.py
# @Software: PyCharm
import time

import pywasm


vm = pywasm.load('wasm.wasm')
print(vm)
    # sj = int(time.time())
    # t1 = int(sj / 2)
    # t2 = int(sj / 2 - math.floor(random.random() * 50 + 1))
    # return str(vm.exec('encode', [t1, t2])) + '|' + str(t1) + '|' + str(t2)