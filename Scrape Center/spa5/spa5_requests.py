# -*- coding: utf-8 -*-
# @Time    : 2021/10/17 12:04
# @Author  : Ram.zhang
# @File    : spa5_reuests.py
# @Software: PyCharm
import time
import requests


def get_spa5(page_count=500):
    cookies = {
        'UM_distinctid': '17c3fb7f30c45-0fa515fb751b75-4343363-144000-17c3fb7f30d354',
    }

    headers = {
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Fetch-Dest': 'empty',
        'Connection': 'keep-alive',
    }
    proxies = {
        'http': '127.0.0.1:7890',
        'https': '127.0.0.1:7890'
    }

    for page in range(page_count):
        url = f'https://spa5.scrape.center/api/book/?limit=18&offset={page * 18}'
        print(url)
        response = requests.get(
            url, headers=headers, cookies=cookies, timeout=100, verify=False).json()
        for data in response.get('results'):
            authors = [_.strip().replace('\n', '').replace(' ', '')
                       for _ in data.get('authors')]
            yield {
                "id": data.get('id'),
                "name": data.get('name'),
                "authors": authors,
                "cover": data.get('cover'),
                "score": data.get('score')
            }


if __name__ == '__main__':
    start_time = time.time()
    for i in get_spa5():
        print(i)
    end_time = time.time()
    print(f'耗时：{end_time - start_time:.2f}')
