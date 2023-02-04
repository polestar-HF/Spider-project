# -*- coding: utf-8 -*-
# @Time    : 2022/4/2 23:58
# @Author  : Ram.zhang
# @File    : shanbei.py
# @Software: PyCharm
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


# https://web.shanbay.com/wordsweb/#/words-table

def get_data():
    def decode(data):
        return execjs.compile(open('decode.js', 'r', encoding='utf-8').read()).call('decode', data)

    cookies = {
        'sajssdk_2015_cross_new_user': '1',
        '_ga': 'GA1.2.21606681.1648907224',
        'auth_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQzNjA5MTgwLCJleHAiOjE2NDk3NzMxMTgsImV4cF92MiI6MTY0OTc3MzExOCwiZGV2aWNlIjoiIiwidXNlcm5hbWUiOiJXZWNoYXRfYTY5NWRkNjE3MWNkNDIwYiIsImlzX3N0YWZmIjowLCJzZXNzaW9uX2lkIjoiMTczY2I3MmViMjhmMTFlYzkzY2U1ZWJkYTlmNWI2MzkifQ.Ri6VhqsW3dnyv1t3LN1Jr3XvS43PrvGbwBMcCjwaLUk',
        'csrftoken': 'ba8f475bea5b7ca1afa04693fcb5699a',
        'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22eqkztw%22%2C%22first_id%22%3A%2217fea877d081ad-0e268dc07d7d67-a3e3164-2073600-17fea877d09759%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217fea877d081ad-0e268dc07d7d67-a3e3164-2073600-17fea877d09759%22%7D',
    }

    headers = {
        'authority': 'apiv3.shanbay.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': 'application/json, text/plain, */*',
        'x-csrftoken': 'ba8f475bea5b7ca1afa04693fcb5699a',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://web.shanbay.com',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://web.shanbay.com/',
        'accept-language': 'zh-CN,zh;q=0.9'
    }

    params = {
        'ipp': '10',
        'page': '1',
    }

    response = requests.get(
        'https://apiv3.shanbay.com/wordsapp/user_material_books/odcxi/learning/words/unlearned_items',
        headers=headers, params=params, cookies=cookies)
    data = response.json().get('data')
    result = decode(data)
    print(result)


if __name__ == '__main__':
    get_data()
