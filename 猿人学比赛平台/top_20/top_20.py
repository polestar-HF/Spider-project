# -*- coding: utf-8 -*-
# @Time    : 2022/3/21 23:36
# @Author  : Ram.zhang
# @File    : top_20.py
# @Software: PyCharm
import requests

cookies = {
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1647876698',
    'qpfccr': 'true',
    'no-alert3': 'true',
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1647876704',
    'tk': '4784637874186650150',
    'sessionid': 'djuqp4zbucsu3lze9x5t7kcdcot6u0xs',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1647876715',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1647876755',
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://match.yuanrenxue.com/match/20',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1647876698; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1647876704; tk=4784637874186650150; sessionid=djuqp4zbucsu3lze9x5t7kcdcot6u0xs; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1647876715; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1647876755',
}

params = {
    'page': '1',
    'sign': '31f5eac1251f6feb4b76fb24a7768778',
    't': '1647877002000',
}

response = requests.get('https://match.yuanrenxue.com/api/match/20', headers=headers, params=params, cookies=cookies)
print(response.text)