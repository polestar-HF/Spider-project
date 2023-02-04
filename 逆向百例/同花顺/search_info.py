# -*- coding: utf-8 -*-
# @Time    : 2022/7/3 0:43
# @Author  : Ram.zhang
# @File    : search_info.py
# @Software: PyCharm
import execjs
import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Proxy-Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
}
cookie_v = execjs.compile(open('sdk_cookie.js', 'r', encoding='utf-8').read()).call('get_cookie_v')
print(cookie_v)
cookies = {
    "ta_random_userid": "neg9jnu300",
    "v": cookie_v,
    "WafStatus": "0",
    "PHPSESSID": "e2d35004feac24b33dd62365c61c058b",
    "cid": "e2d35004feac24b33dd62365c61c058b1656780039",
    "ComputerID": "e2d35004feac24b33dd62365c61c058b1656780039"
}
url = "http://x.10jqka.com.cn/stockpick/search"
params = {
    "typed": "1",
    "preParams": "",
    "ts": "1",
    "f": "1",
    "qs": "result_rewrite",
    "selfsectsn": "",
    "querytype": "stock",
    "searchfilter": "",
    "tid": "stockpick",
    "w": "芯片",
    "queryarea": ""
}
response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)
print(response.request.url)

print(response.text)