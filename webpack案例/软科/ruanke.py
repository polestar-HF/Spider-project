# -*- coding: utf-8 -*-
# @Time    : 2022/3/28 22:19
# @Author  : Ram.zhang
# @File    : ruanke.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def get_data():
    cookies = {
        'Hm_lvt_af1fda4748dacbd3ee2e3a69c3496570': '1648962790',
        'Hm_lpvt_af1fda4748dacbd3ee2e3a69c3496570': '1648968450',
    }

    headers = {
        'authority': 'www.shanghairanking.cn',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': 'application/json, text/plain, */*',
        'authorization': 'MzoyN2QwYjU0YjIzOGZhODg0YmE3ZWYxZDJiNjA4NDU5ZGRiYzY2Mzk0NTE5ZmZmMDkwMzEyMTkzMzc3MTM4MDg0OjE2NDg5NzE3NDg2NTc=',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.shanghairanking.cn/institution/tsinghua-university',
        'accept-language': 'zh-CN,zh;q=0.9'
    }

    response = requests.get('https://www.shanghairanking.cn/api/pub/v1/ms', headers=headers, cookies=cookies)
    t = 'get'
    e = '/api/v2010/inst/zhejiang-university'
    r = response.json().get('data')
    authorization = execjs.compile(open('head.js', 'r', encoding='utf-8').read()).call('head', t, e, r)
    headers['authorization'] = authorization
    response = requests.get('https://www.shanghairanking.cn/api/v2010/inst/zhejiang-university', headers=headers,
                            cookies=cookies)
    print(response.text)


if __name__ == '__main__':
    get_data()
