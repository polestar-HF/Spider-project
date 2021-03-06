# -*- coding: utf-8 -*-
# @Time    : 2021/11/24 21:47
# @Author  : Ram.zhang
# @File    : yuanrenxue_17.py
# @Software: PyCharm
import json

import httpx


def get_http2(page):
    url = f"https://match.yuanrenxue.com/api/match/17?page={page}"
    headers = {
        'User-Agent': 'yuanrenxue.project',
        'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1638068899; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1638068904; sessionid=5ofpt1k6c2h2h47kz1bgrgry5j5omv5b; tk=-271117457490168880; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1638069648; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1638069649'
    }
    value_list = []
    with httpx.Client(headers=headers, http2=True) as client:
        client.get("https://match.yuanrenxue.com/api/loginInfo")
        response = client.get(url)
        if response.status_code == 200:
            print(response.text)
            data_list = json.loads(response.text).get('data')
            for value in data_list:
                value_list.append(value.get('value'))
            return value_list


if __name__ == '__main__':
    sums = []
    for page in range(1, 6):
        sums += get_http2(page)
    print(sum(sums))
