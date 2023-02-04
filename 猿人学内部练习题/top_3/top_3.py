# -*- coding: utf-8 -*-
# @Time    : 2022/3/5 0:03
# @Author  : Ram.zhang
# @File    : top_3.py
# @Software: PyCharm
import requests
import execjs
from loguru import logger


# 本题难点：cookie是动态变化的, cookie过期之后会再次请求首页(https://www.python-spider.com/challenge/3), 并且会返回混淆的js代码
def get_top_3(page):
    number = 0
    # 运行前清楚js代码的中文注释, 否则会报错
    cookie = execjs.compile(open('cookie.js', 'r').read()).call('cookie')
    cookies = {
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1646407507',
        'no-alert': 'true',
        'sessionid': '85p478k6t4bikgnyuzieykps7en10mag',
        'm': cookie,
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1646408116',
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
        'Referer': 'https://www.python-spider.com/challenge/3',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'page': page
    }

    response = requests.post('https://www.python-spider.com/api/challenge3', headers=headers, cookies=cookies,
                             data=data)
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
        sums += get_top_3(pg)
    logger.success(f'总和：{sums}')
