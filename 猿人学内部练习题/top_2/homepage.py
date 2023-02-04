# -*- coding: utf-8 -*-
# @Time    : 2022/3/20 14:11
# @Author  : Ram.zhang
# @File    : homepage.py
# @Software: PyCharm
import time

import execjs
import requests

timestamp = int(time.time() * 1000)
sign = execjs.compile(open('cookie.js', 'r').read()).call('cookie', timestamp)
cookies = {
    'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1647756726',
    'no-alert': 'true',
    'sessionid': 'kp9e6q5qbgvnfdt1a64jyz68rge9n4wv',
    'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1647756802',
    'sign': sign,
}

headers = {
    'authority': 'www.python-spider.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-dest': 'document',
    'referer': 'https://www.python-spider.com/challenge/2',
    'accept-language': 'zh-CN,zh;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1647756726; no-alert=true; sessionid=kp9e6q5qbgvnfdt1a64jyz68rge9n4wv; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1647756802; sign=1647756828~YWlkaW5nX3dpbjE2NDc3NTY4Mjg0NDg=|442fedb93ec6905d369a22f3b78bd7b6',
}

response = requests.get('https://www.python-spider.com/challenge/2', headers=headers, cookies=cookies)
print(response.text)