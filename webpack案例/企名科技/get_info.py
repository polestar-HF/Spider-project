# -*- coding: utf-8 -*-
# @Time    : 2022/4/22 22:05
# @Author  : Ram.zhang
# @File    : get_info.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://www.qimingpian.cn",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://vipapi.qimingpian.cn/DataList/productListVip"
data = {
    "time_interval": "",
    "tag": "",
    "tag_type": "",
    "province": "",
    "lunci": "",
    "page": "1",
    "num": "20",
    "unionid": ""
}
response = requests.post(url, headers=headers, data=data).json()

encrypt_data = response.get('encrypt_data')
result = execjs.compile(open('decode.js', 'r', encoding='utf-8').read()).call('decode_data', encrypt_data)
print(result)
