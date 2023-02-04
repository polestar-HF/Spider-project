# -*- coding: utf-8 -*-
# @Time    : 2022/4/5 0:38
# @Author  : Ram.zhang
# @File    : search.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

headers = {
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Accept": "application/json, text/plain, */*",
    "csrf": "BKBYNL4IUMC",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "Referer": "http://www.kuwo.cn/search/list?key=%E7%9C%9F%E7%9A%84%E7%88%B1%E4%BD%A0",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
cookies = {
    "Hm_lvt_cdb524f42f0ce19b169a8071123a4797": "1649089476",
    "_ga": "GA1.2.1406481972.1649089476",
    "_gid": "GA1.2.629208823.1649089476",
    "Hm_lpvt_cdb524f42f0ce19b169a8071123a4797": "1649089876",
    "kw_token": "BKBYNL4IUMC"
}
url = "http://www.kuwo.cn/api/www/search/searchMusicBykeyWord"
reqId = execjs.compile(open('reqId.js', 'r', encoding='utf-8').read()).call('reqld')
params = {
    "key": "孤勇者",
    "pn": "1",
    "rn": "30",
    "httpsStatus": "1",
    "reqId": reqId
}
response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)

print(response.json())
