# -*- coding: utf-8 -*-
# @Time    : 2022/3/3 22:14
# @Author  : Ram.zhang
# @File    : top_10.py
# @Software: PyCharm
import requests
from loguru import logger

session = requests.session()
headers = {
    'Host': 'www.python-spider.com',
    'Connection': 'keep-alive',
    'Content-Length': '6',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '"Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
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
    'Referer': 'https://www.python-spider.com/challenge/10',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1646312099; no-alert=true; sessionid=3eixwuqovxcpotiahq2pa6o4amu5bxan; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1646316891'
}
session.headers = headers


def get_top_10(page):
    number = 0
    url = "https://www.python-spider.com/api/challenge10"

    data = {
        'page': page
    }

    response = session.post(url, data=data)
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
    for pg in range(1, 101):
        sums += get_top_10(pg)
    logger.success(f'数据总和: {sums}')
