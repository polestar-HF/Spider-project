# -*- coding: utf-8 -*-
# @Time    : 2022/5/7 0:41
# @Author  : Ram.zhang
# @File    : info.py
# @Software: PyCharm
import hashlib
import json
import time
from AES_DES import aes_cbc_decrypt_js_text
import requests

cookies = {
    '__root_domain_v': '.fj.gov.cn',
    '_qddaz': 'QD.294851854742717',
    '_qdda': '4-1.1',
    '_qddab': '4-ohd3o2.l2unnwtw',
}
portalsign = f'3637CB36B2E54A72A7002978D0506CDFBeginTime2021-11-07 00:00:00EndTime2022-05-07 23:59:59KINDGCJSts{int(time.time() * 1000)}'
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://ggzyfw.fj.gov.cn',
    'Pragma': 'no-cache',
    'Referer': 'https://ggzyfw.fj.gov.cn/web/index.html?',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    'portal-sign': hashlib.md5(portalsign.encode()).hexdigest(),
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'KIND': 'GCJS',
    'PROTYPE': '',
    'BeginTime': '2021-11-07 00:00:00',
    'EndTime': '2022-05-07 23:59:59',
    'ts': int(time.time() * 1000),
}

response = requests.post('https://ggzyfw.fj.gov.cn/Trade/TradeInfo', cookies=cookies, headers=headers, json=json_data).json()
encrypt_str = response.get('Data')
key_str = "BE45D593014E4A4EB4449737660876CE"
iv_str = "A8909931867B0425"
decrypt_str = aes_cbc_decrypt_js_text(encrypt_str, key_str, iv_str)
print(json.loads(decrypt_str))
