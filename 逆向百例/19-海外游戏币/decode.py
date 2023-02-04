# -*- coding: utf-8 -*-
# @Time    : 2022/6/1 22:13
# @Author  : Ram.zhang
# @File    : decode.py
# @Software: PyCharm
import subprocess
import time
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests
import re
url = f"http://r.bijiaqi.com/jq/s-33952-0-RlBwQgA?_v=10.11194&_={time.time() * 1000}"

payload = {}
headers = {
  'Accept': '*/*',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Cookie': 'C_GAMEID=456; C_S_GAMEID=10; __root_domain_v=.bijiaqi.com; _qddaz=QD.360554090729573; CRID=peO6QGDXzzriqFn8',
  'Pragma': 'no-cache',
  'Referer': 'http://www.bijiaqi.com/',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36'
}

response = requests.request("GET", url, headers=headers, data=payload)
decode = """
function decode(p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }
        ];
        e = function () {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}
"""

js_code = response.text.replace(";$('#layer_showhost').html(d);", '')
data = eval(re.search('return p}(.*?)\)$', js_code).group(1))
result = execjs.compile(decode).call('decode', data[0], data[1], data[2], data[3], data[4], data[5])
print(result)

