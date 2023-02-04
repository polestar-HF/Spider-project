# -*- coding: utf-8 -*-
# @Time    : 2022/6/17 23:18
# @Author  : Ram.zhang
# @File    : query_api.py
# @Software: PyCharm
import time

import execjs
import requests


headers = {
    "authority": "www.yijianjiexi.com",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://www.yijianjiexi.com",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
}
cookies = {
    "PHPSESSID": "13pqj2aefivnu575lsp30ko404",
    "__51cke__": "",
    "token": "b12699769a86eb9b4ad3f6764d94e323",
    "__tins__21011011": "%7B%22sid%22%3A%201655477955749%2C%20%22vd%22%3A%204%2C%20%22expires%22%3A%201655481263017%7D",
    "__51laig__": "4"
}
url = "https://www.yijianjiexi.com/ajax/analysis.php"
link = 'https://mp.weixin.qq.com/s/6CIjUuzBHImP7GxTrwcbVg'
time_str = str(int(time.time()))
sign = execjs.compile(open('sdk_sign.js', 'r', encoding='utf-8').read()).call('get_sign', link + time_str)
print(f'sign：{sign}')
data = {
    "link": link,
    "vtype": "1",
    "time": time_str,
    "sign": sign
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.json())