# -*- coding: utf-8 -*-
# @Time    : 2022/3/14 23:30
# @Author  : Ram.zhang
# @File    : top_12.py
# @Software: PyCharm
import requests
from loguru import logger
refer = {
    "&#xf712": "0",
    "&#xe458": "1",
    "&#xf375": "2",
    "&#xf80c": "3",
    "&#xf12f": "4",
    "&#xee4a": "5",
    "&#xf295": "6",
    "&#xe449": "7",
    "&#xf0d6": "8",
    "&#xe44d": "9"
}
sums = 0


def get_top_12(page):
    global sums
    number = 0
    cookies = {
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1647269959',
        'no-alert': 'true',
        'sessionid': 'fs3hav299zlnrq19pudbn49j9ijdb2cy',
        'm': '155',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1647271446',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://www.python-spider.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.python-spider.com/challenge/12',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'page': page
    }

    response = requests.post('https://www.python-spider.com/api/challenge12', headers=headers, cookies=cookies,
                             data=data).json()
    for data in response.get('data'):
        value = [refer[n] for n in data.get('value').split()]
        number += int(''.join(value))
    sums += number
    logger.info(f'第{page}页 --> {number}')


if __name__ == '__main__':
    for pg in range(1, 101):
        get_top_12(pg)
    logger.success(f'100页总和：{sums}')