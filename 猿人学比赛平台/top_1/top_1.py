# -*- coding: utf-8 -*-
# @Time    : 2022/7/2 15:49
# @Author  : Ram.zhang
# @File    : top_1.py
# @Software: PyCharm
import time
from loguru import logger

import execjs
import requests

count = 0
def get_top_1(page):
    global count
    headers = {
        "authority": "match.yuanrenxue.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://match.yuanrenxue.com/match/1",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "yuanrenxue.project",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "qpfccr": "true",
        "no-alert3": "true",
        "tk": "-4498062398881890249",
        "sessionid": "urom9znqvdxh9zwuuc8e49rthqw9wyq1",
        "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1656746339",
        "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1656747601"
    }
    url = "https://match.yuanrenxue.com/api/match/1"
    m = execjs.compile(open('test.js', 'r', encoding='utf-8').read()).call('get_m')
    print(m)
    params = {
        "page": f"{page}",
        "m": m
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()

    num = 0
    count += len(response.get('data'))
    for data in response.get('data'):
        num += data.get('value')
    logger.info(f'第{page}页 ==> {num}')
    return num


if __name__ == '__main__':
    sums = 0
    count = 0
    for pg in range(1, 6):
        sums += get_top_1(pg)
    logger.success(sums / count)
