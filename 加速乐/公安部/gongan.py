# -*- coding: utf-8 -*-
# @Time    : 2022/8/30 22:04
# @Author  : Ram.zhang
# @File    : gongan.py
# @Software: PyCharm
import json
import re

import execjs
import requests

js_code = open('sdk.js', 'r', encoding='utf-8').read()


def get_info():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Referer": "https://www.mps.gov.cn/index.html",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }

    url = "https://www.mps.gov.cn/index.html"
    response = requests.get(url, headers=headers)
    # 获取cookie
    jsluid_s = response.cookies.get('__jsluid_s')
    ck_code = re.search('cookie=(.*?);location', response.text).group(1)
    jsl_clearance_s = execjs.eval(ck_code).split(';')[0].split('=')[1]
    cookies = {
        "__jsluid_s": jsluid_s,
        "__jsl_clearance_s": jsl_clearance_s
    }
    print(f'cookies ==> {cookies}')
    response = requests.get(url, headers=headers, cookies=cookies)
    js_params = json.loads(re.findall(';go\((.*?)\)</script>', response.text)[0])
    print(js_params)
    cookies['__jsl_clearance_s'] = execjs.compile(js_code).call('get_cookie', js_params)
    print(f'{js_params["ha"]} ==> {cookies["__jsl_clearance_s"]}')
    response = requests.get(url, headers=headers, cookies=cookies)
    response.encoding = response.apparent_encoding
    print(response.text)


if __name__ == '__main__':
    get_info()
