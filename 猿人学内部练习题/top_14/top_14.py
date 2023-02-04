# -*- coding: utf-8 -*-
# @Time    : 2022/3/24 23:48
# @Author  : Ram.zhang
# @File    : top_14.py
# @Software: PyCharm
import execjs
import requests
from loguru import logger


def get_top_14(page):
    number = 0
    cookies = {
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1648129831',
        'no-alert': 'true',
        'sessionid': 'msf2r01m9su1vh1u2bjt3hffig5rirp5',
        '__jsl_clearance': '1648135674.330|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_ab9501c6a7d3ab1155dd2fd635cb49b23D',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1648136394',
    }

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
        'referer': 'https://www.python-spider.com/challenge/14',
        'accept-language': 'zh-CN,zh;q=0.9',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1648129831; no-alert=true; sessionid=msf2r01m9su1vh1u2bjt3hffig5rirp5; __jsl_clearance=1648135674.330|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_ab9501c6a7d3ab1155dd2fd635cb49b23D; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1648136394',
    }
    uc = execjs.compile(open('uc.js', 'r').read()).call('uc', page)
    data = {
        'page': page,
        'uc': uc,
    }

    response = requests.post('https://www.python-spider.com/api/challenge14', headers=headers, cookies=cookies,
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
        sums += get_top_14(pg)
    logger.success(f'总和：{sums}')

