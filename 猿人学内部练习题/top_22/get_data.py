# -*- coding: utf-8 -*-
# @Time    : 2022/4/24 1:34
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import os
import asyncio, aiohttp
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
import httpx

import requests
from requests.adapters import HTTPAdapter
# from requests.packages.urllib3.util.ssl_ import create_urllib3_context

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

import requests.packages.urllib3.util.ssl_
requests.packages.urllib3.util.ssl_.DEFAULT_CIPHERS = "TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA:AES256-SHA"
# This is the 2.11 Requests cipher string, containing 3DES.
# CIPHERS = (
#     'ECDHE+AESGCM:!aNULL:!eNULL:!MD5'
# )

headers = {
    'authority': 'www.python-spider.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'iloveu=699184689a9307068fdd957025ac2d1dd9c0f9de; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1650894512,1650896048,1651294860,1652506832; no-alert=true; sessionid=obj51gotco1zny8uzrsbrbgkgi64holb; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1652506941; __yr_token__=b301cDBhSGFc6R29kQXtxahUQYU8iYAQnbEZgW2lMUk4cSGMAT1cSOgYDCn4kEiQeRRwHTDEwVz9kWlx2b0EWGyFzaB8bG0NUCXkCCT4jA0V0d0FgdBIZD0o8WAZYF3ZrXAZPABUMG3kJWQNBYRY=',
    'origin': 'https://www.python-spider.com',
    'pragma': 'no-cache',
    'referer': 'https://www.python-spider.com/challenge/22',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}
js_code = open('code.js', 'r', encoding='utf-8').read()
result = execjs.compile(js_code).call('get_ck')
print(result)
cookies = {
    'iloveu': '699184689a9307068fdd957025ac2d1dd9c0f9de',
    'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1650894512,1650896048,1651294860,1652506832',
    'no-alert': 'true',
    'sessionid': 'obj51gotco1zny8uzrsbrbgkgi64holb',
    'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1652506941',
    '__yr_token__': result,
}
url = "https://www.python-spider.com/api/challenge22"
proxies = {
    'http': '127.0.0.1:8080',
    'https': '127.0.0.1:8080',
}


class DESAdapter(HTTPAdapter):
    def init_poolmanager(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).init_poolmanager(*args, **kwargs)

    def proxy_manager_for(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).proxy_manager_for(*args, **kwargs)


def get_page(s, page):
    data = {
        "page": str(page)
    }
    print(data)
    r = s.post(url, headers=headers, cookies=cookies, data=data)
    print(r.json())
    # res = r.json()
    # data = res.get('data')
    # s = [int(d.get('value')) for d in data]
    # print(123123,s)
    # return s


def get_data(s):
    end = 0
    for i in range(1, 2):
        temp = get_page(s, i)
    #     print()
    #     end += sum(temp)
    # print('end', end)
    # return end


s = requests.Session()
s.mount('https://www.python-spider.com', DESAdapter())
get_data(s)

# response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)
#
# print(response.json())
# print(response)
# print(":".join(
#     [
#         "ECDHE+AESGCM",
#         "ECDHE+CHACHA20",
#         "DHE+AESGCM",
#         "DHE+CHACHA20",
#         "ECDH+AESGCM",
#         "DH+AESGCM",
#         "ECDH+AES",
#         "DH+AES",
#         "RSA+AESGCM",
#         "RSA+AES",
#         "!aNULL",
#         "!eNULL",
#         "!MD5",
#         "!DSS",
#     ]
# ))
