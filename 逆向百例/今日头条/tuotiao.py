# -*- coding: utf-8 -*-
# @Time    : 2022/7/4 0:35
# @Author  : Ram.zhang
# @File    : tuotiao.py
# @Software: PyCharm
import time

import execjs
import requests


headers = {
    "authority": "www.toutiao.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.toutiao.com/?wid=1656861971529",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
}
cookies = {
    "msToken": "98OuKGsubqCh5Jy-F9Jx7Cpj8AQGE6c-D7ZkFqNNalV2H03fq1ItWeL45szQv9WDHbtTgN1NBYl1qzkq93UANp4Rv64toRnqi9HgPImQbLoI",
    "__ac_signature": "_02B4Z6wo00f01xKCKqgAAIDCmcmxSn7v1IcSoi4AAKZr43",
    "tt_webid": "7116167920606643719",
    "ttcid": "683adefa7cc44c1a876bb6c0dcc4d93f14",
    "local_city_cache": "%E6%B7%B1%E5%9C%B3",
    "_tea_utm_cache_24": "undefined",
    "csrftoken": "8f4b8b6870b3ed4b1384be103b6a03ed",
    "s_v_web_id": "verify_l55guby8_t9jQwKMQ_iZqn_4oKp_8EKe_Hx69v710qWZd",
    "ttwid": "1%7CmTgRnn791UFsZOS9adQBR7jSqBmYsrz_CGL9gB2-31k%7C1656862869%7C6df19a8e940154b492cf1c5aebd7e4ac51e0d779c44187fd8956e378a9b82c90",
    "tt_scid": "RXPZHUMSP0TpE8xJKu.dGyxdQF4e15D-xH.qb3ty3iFxDZi5.WM8kSO8yVaKbiVG307f",
    "MONITOR_WEB_ID": "7116167920606643719"
}
url = "https://www.toutiao.com/api/pc/list/feed"

timestamp = int(time.time())
key = f'https://www.toutiao.com/api/pc/list/feed?channel_id=0&max_behot_time={timestamp}&category=pc_profile_recommend&aid=24&app_name=toutiao_web'

signature = execjs.compile(open('signature.js', 'r', encoding='utf-8').read()).call('get_signature')
print(f'signature: {signature}')
params = {
    "channel_id": "0",
    "max_behot_time": str(timestamp),
    "category": "pc_profile_recommend",
    "aid": "24",
    "app_name": "toutiao_web",
    "_signature": signature
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.json())
# print(response)