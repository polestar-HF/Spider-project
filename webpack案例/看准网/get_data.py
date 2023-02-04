# -*- coding: utf-8 -*-
# @Time    : 2022/3/30 0:03
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests

cookies = {
    '__c': '1648564948',
    'AB_T': 'abva',
    'W_CITY_S_V': '49',
    '__g': '-',
    'wd_guid': '31681f1c-3ae3-4b5a-920b-29c8a6fc0a8c',
    'historyState': 'state',
    'Hm_lvt_1f6f005d03f3c4d854faec87a0bee48e': '1648564952',
    'R_SCH_CY_V': '10402',
    '__l': 'r=&l=%2Fapi_to%2Fci.json%3Fb%3Di1yChO4X8cL1alSSyPihJGBZwCn44rGhQTWC03fzAfOnlWbuZ1iu_RjNh-SQpai9qqJRGRDEdvkczOnm-USZ9yHT7tMluJc8cKTlmG5KsPV3k8V3PnR4adxWX0LgBK4YvIiGOyNkKnJe5GbSHVjcmA~~%26kiv%3DZHL77eCHq8KyG2Op',
    'acw_tc': '0bdd346a16485695602313845e01a07593c7be636791f36af814dd3a7fc5ee',
    '__a': '39781124.1648564948..1648564948.22.1.22.22',
    'Hm_lpvt_1f6f005d03f3c4d854faec87a0bee48e': '1648569693',
}

headers = {
    'authority': 'www.kanzhun.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'href': 'https://www.kanzhun.com/firm/interview/1nR-298~.html',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    'accept': 'application/json, text/plain, */*',
    'reqsource': 'fe',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.kanzhun.com/firm/interview/1nR-298~.html',
    'accept-language': 'zh-CN,zh;q=0.9'
}

pas = '{"encCompanyId":"1nR-298~","positionId":"","cityCode":""}'
js_code = open('decode.js', 'r', encoding="utf-8").read()
data = execjs.compile(js_code).call('encrypt', pas)
print(data)
params = {
    'b': data[0],
    'kiv': data[1],
}

response = requests.get('https://www.kanzhun.com/api_to/ci/stat.json', headers=headers, params=params, cookies=cookies)

print(response.text)
decode = execjs.compile(js_code).call('decrypt', response.text, data[1])
print(decode)
