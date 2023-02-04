# -*- coding: utf-8 -*-
# @Time    : 2022/3/3 22:03
# @Author  : Ram.zhang
# @File    : top_7.py
# @Software: PyCharm
import requests
from loguru import logger

session = requests.session()


def get_top_7(page):
    number = 0
    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1646312099; no-alert=true; sessionid=3eixwuqovxcpotiahq2pa6o4amu5bxan; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1646316093',
    }

    data = {
        'page': page
    }
    session.post('https://www.python-spider.com/cityjson', headers=headers)
    response = session.post('https://www.python-spider.com/api/challenge7', headers=headers, data=data)
    if response.status_code == 200:
        data_list = response.json()
        for data in data_list.get('data'):
            number += int(data.get('value').replace('\r', ''))
        logger.debug(number)
        return number
    else:
        logger.error('出错啦')


if __name__ == '__main__':
    sums = 0
    for page in range(1, 101):
        sums += get_top_7(page)
    logger.success(f'数据总和: {sums}')
