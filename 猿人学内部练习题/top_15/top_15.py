# -*- coding: utf-8 -*-
# @Time    : 2022/3/26 0:20
# @Author  : Ram.zhang
# @File    : top_15.py
# @Software: PyCharm
import re

import requests


headers = {
    "authority": "www.python-spider.com",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
    "x-requested-with": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://www.python-spider.com/challenge/15",
    "accept-language": "zh-CN,zh;q=0.9"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1648217135",
    "no-alert": "true",
    "sessionid": "f94ff73dme2oggmdn5lgqlixy1o9gu05",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1648224767"
}
url = "https://www.python-spider.com/cityjson"
response_1 = requests.get(url, headers=headers, cookies=cookies)

print(response_1.text)
timestamp = re.search('"timestamp": "(.*?)"', response_1.text).group(1)
print(timestamp)
url = "https://www.python-spider.com/api/challenge15/js"
params = {
    "_t": timestamp,
    "_": "1648224761755"
}
response_2 = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response_2.text)