# -*- coding: utf-8 -*-
# @Time    : 2021/10/17 10:51
# @Author  : Ram.zhang
# @File    : spa5.py
# @Software: PyCharm
"""
目标：异步抓取spa5网站数据
"""
import asyncio
import time

import aiohttp

semaphore = asyncio.Semaphore(20)  # 信号量


async def get_spa5(url):
    async with semaphore:
        headers = {
            'Cookie': 'UM_distinctid=17c3fb7f30c45-0fa515fb751b75-4343363-144000-17c3fb7f30d354',
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
        timeout = aiohttp.ClientTimeout(total=100)
        session = aiohttp.ClientSession(connector=aiohttp.TCPConnector(
            verify_ssl=False, limit=60), trust_env=False)
        # trust_env=True  才能设置代理
        # proxy = 'http://127.0.0.1:7890'
        async with session.get(url, headers=headers, timeout=timeout) as response:
            print(url)
            return await response.json()


def parse_resp(response):
    resp = response.get('results')
    for data in resp:
        authors = [_.strip().replace('\n', '').replace(' ', '')
                   for _ in data.get('authors')]
        yield {
            "id": data.get('id'),
            "name": data.get('name'),
            "authors": authors,
            "cover": data.get('cover'),
            "score": data.get('score')
        }


async def run():
    url = 'https://spa5.scrape.center/api/book/?limit=18&offset={}'
    task_list = [asyncio.ensure_future(get_spa5(url.format(page * 18))) for page in range(500)]
    await asyncio.gather(*task_list)
    for task in task_list:
        for i in parse_resp(task.result()):
            print(i)


if __name__ == '__main__':
    start_time = time.time()
    asyncio.get_event_loop().run_until_complete(run())
    end_time = time.time()
    print(f'耗时：{end_time - start_time:.2f}')
