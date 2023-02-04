# -*- coding: utf-8 -*-
# @Time    : 2022/3/25 23:17
# @Author  : Ram.zhang
# @File    : top_16.py.py
# @Software: PyCharm

import requests
from loguru import logger
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def get_top_16(page):
    number = 0
    safe = execjs.compile(open('safe.js', 'r', encoding='UTF-8').read()).call('token')
    headers = {
        "authority": "www.python-spider.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
        "sec-ch-ua-mobile": "?0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "x-requested-with": "XMLHttpRequest",
        "safe": safe,
        "sec-ch-ua-platform": "\"Windows\"",
        "origin": "https://www.python-spider.com",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://www.python-spider.com/challenge/16",
        "accept-language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1648217135",
        "no-alert": "true",
        "sessionid": "f94ff73dme2oggmdn5lgqlixy1o9gu05",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1648221362"
    }
    url = "https://www.python-spider.com/api/challenge16"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    if response.status_code == 200:
        data_list = response.json()
        for data in data_list.get('data'):
            number += int(data.get('value').replace('\r', ''))
        logger.debug(f'第{page}页：{number}')
        return number
    else:
        logger.error('访问失败')


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += get_top_16(pg)
    logger.success(f'总和：{sums}')
