# -*- coding: utf-8 -*-
# @Time    : 2022/4/3 1:14
# @Author  : Ram.zhang
# @File    : cailianshe.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def get_data():
    cookies = {
        'HWWAFSESID': '6c6867990a501924d3',
        'HWWAFSESTIME': '1648915958584',
        'Hm_lvt_fa5455bb5e9f0f260c32a1d45603ba3e': '1648915968',
        'hasTelegraphRemind': 'on',
        'hasTelegraphSound': 'on',
        'vipNotificationState': 'on',
        'hasTelegraphNotification': 'off',
        'Hm_lpvt_fa5455bb5e9f0f260c32a1d45603ba3e': '1648917917',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.cls.cn/telegraph',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    }

    params = {
        'app': 'CailianpressWeb',
        'category': '',
        'lastTime': '1649078068',  # 时间戳
        'last_time': '1649078068',
        'os': 'web',
        'refresh_type': '1',
        'rn': '20',
        'sv': '7.7.5',
    }
    sign = execjs.compile(open('sign.js', 'r', encoding='utf-8').read()).call('sign', params)
    params['sign'] = sign
    response = requests.get('https://www.cls.cn/nodeapi/telegraphList', headers=headers, params=params, cookies=cookies)
    print(response.text)


if __name__ == '__main__':
    get_data()
