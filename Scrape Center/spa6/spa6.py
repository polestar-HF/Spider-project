# -*- coding: utf-8 -*-
# @Time    : 2021/10/20 21:23
# @Author  : Ram.zhang
# @File    : spa6.py
# @Software: PyCharm
import hashlib
import base64
import time
import requests

"""
难点：加密参数token, 有时效性, js代码混淆
结论：token是api 和当前时间戳经过sha1加密, 再由base64加密而成
"""


def token():
    times = str(int(time.time()))
    bt = f'/api/movie,{times}'
    mk = hashlib.sha1(bt.encode("utf8")).hexdigest()
    return base64.b64encode(f'{mk},{times}'.encode()).decode()


def get_spa6(page_count=10):
    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://spa6.scrape.center/page/1',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    for page in range(page_count):
        params = (
            ('limit', '10'),
            ('offset', page * 10),
            ('token', token()),
        )

        response = requests.get('https://spa6.scrape.center/api/movie/', headers=headers, params=params).json()
        results = response.get('results')
        for data in results:
            yield {
                "id": data.get('id'),
                "name": data.get('name'),
                "alias": data.get('alias'),
                "categories": data.get('categories'),
                "cover": data.get('cover'),
                "minute": data.get('minute'),
                "published_at": data.get('published_at'),
                "regions": data.get('regions'),
                "score": data.get('score')
            }


if __name__ == '__main__':
    for y in get_spa6():
        print(y)
