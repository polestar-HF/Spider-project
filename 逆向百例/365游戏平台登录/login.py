# -*- coding: utf-8 -*-
# @Time    : 2022/7/24 15:15
# @Author  : Ram.zhang
# @File    : login.py
# @Software: PyCharm
import random
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests


def encode(str):
    return execjs.compile(open('sdk_cc.js', 'r', encoding='utf-8').read()).call('t', str)


def main(account, passwd):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Proxy-Connection": "keep-alive",
        "Referer": "http://static.365wan.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
    }
    url = "http://user.sgty.com/auth/login"
    password = encode(passwd)
    print(password)
    sign_str = f'{passwd}{password}static.365wan.com'
    sign = encode(sign_str)
    print(sign)

    params = {
        "account": account,
        "password": password,
        "sign": sign,
        "sh": "1080",
        "sw": "1920",
        "callback": f"__script{((int(random.random() * 9000001) + 1000009) - 9838133 % 9)}"
    }
    response = requests.get(url, headers=headers, params=params)
    response.encoding = response.apparent_encoding
    print(response.text)
    print(response)


if __name__ == '__main__':
    main('sdasdaws', '1111111111')