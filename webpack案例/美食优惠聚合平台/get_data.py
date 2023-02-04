# -*- coding: utf-8 -*-
# @Time    : 2022/4/3 23:23
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

headers = {
    'authority': 'api.waitwaitpay.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'x-device-system': 'Android_qq_web',
    'sec-ch-ua-mobile': '?0',
    'x-location': '%u63ED%u9633%u5E02',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'x-channel': 'qq_web',
    'x-connection': 'wifi',
    'x-position': '23.540164235,116.3848686',
    'x-device-id': 'OeprSlAKi5DCDsFPHotIk1jvDtaRPpNR',
    'sec-ch-ua-platform': '"Windows"',
    'accept': '*/*',
    'origin': 'https://static.waitwaitpay.com',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://static.waitwaitpay.com/',
    'accept-language': 'zh-CN,zh;q=0.9',
}

params = {
    "keyword": "串串",
    "latitude": "22.324838",
    "longitude": "114.166989",
    "page": "2",
    "request_id": "7ee20d7b-3be4-45f0-a2dd-95d39c600f7c",
    "type": "search",
    "with_vouchers": "false"
}

response = requests.get('https://api.waitwaitpay.com/api/vendors/nearby', headers=headers, params=params)
print(response.text)
result = execjs.compile(open('code.js', 'r', encoding='utf-8').read()).call('decode', response.text)
print(result)
