# -*- coding: utf-8 -*-
# @Time    : 2022/3/20 21:56
# @Author  : Ram.zhang
# @File    : top_2.py
# @Software: PyCharm
import execjs
import requests
from loguru import logger


def get_top_2(page):
    num = 0
    m = execjs.compile(open('cookie.js', 'r').read()).call('sdk_cookie')
    cookies = {
        'qpfccr': 'true',
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1647781830,1647782984',
        'no-alert3': 'true',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1647781833,1647782995',
        'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1647782995',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1647782995',
        'm': m,
    }

    headers = {
        'authority': 'match.yuanrenxue.com',
        'x-kl-ajax-request': 'Ajax_Request',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'yuanrenxue.project',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://match.yuanrenxue.com/match/2',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'qpfccr=true; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1647781830,1647782984; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1647781833,1647782995; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1647782995; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1647782995; m=81fd888e71a3cb3a3743519de2240a4e|1647784544000',
    }

    response = requests.get(f'https://match.yuanrenxue.com/api/match/2?page={page}', headers=headers,
                            cookies=cookies).json()
    for data in response.get('data'):
        num += data.get('value')
    logger.info(f'第{page}页 ==> {num}')
    return num


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 6):
        sums += get_top_2(pg)
    logger.success(f'sum: {sums}')
