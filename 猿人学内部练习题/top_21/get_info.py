# -*- coding: utf-8 -*-
# @Time    : 2022/4/23 1:02
# @Author  : Ram.zhang
# @File    : get_info.py
# @Software: PyCharm
import time

import httpx
import requests
import os

from loguru import logger

client = httpx.AsyncClient(http2=True)


def response(page):
    number = 0

    def get_s():
        command = os.popen(f"node param")
        result = command.read().replace('\n', '')
        command.close()  # 关闭Node.js
        return result  # 获取结果

    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/21",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1648274004,1650171173,1650459198,1650698058",
        "no-alert": "true",
        "sessionid": "ym7j2domvr2mpsfg88i7qwlpyf8gzqzf",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1650698087"
    }
    url = "https://www.python-spider.com/api/challenge21"
    s, t = eval(get_s())
    # 踩坑：参数s是通过传入时间戳加密生成的, 传入的时间戳同时赋给了参数t, 如果这里重新获取时间戳赋值个参数t,就会拿不到数据，报403错误
    data = {
        "page": str(page),
        "s": s,
        "t": str(t)
    }
    print(data)
    proxy = {
        'http': "127.0.0.1:10809",
        'https': "127.0.0.1:10809"
    }
    proxies = {
        "http://": "http://127.0.0.1:10809",
        "https://": "http://127.0.0.1:10809",
    }
    with httpx.Client(headers=headers, cookies=cookies, http2=True, proxies=proxies, verify=False) as client:
        response = client.post(url, data=data).json()
        for data in response.get('data'):
            number += int(data.get('value').replace('\r', ''))
        logger.debug(f'第{page}页：{number}')
        return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += response(pg)
    logger.success(sums)
