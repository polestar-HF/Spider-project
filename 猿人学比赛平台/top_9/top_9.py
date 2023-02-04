# -*- coding: utf-8 -*-
# @Time    : 2022/3/20 2:02
# @Author  : Ram.zhang
# @File    : top_9.py
# @Software: PyCharm
import execjs
import requests

m = execjs.compile(open('cookie.js', 'r').read()).call('cookie')
cookies = {
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1647708383',
    'qpfccr': 'true',
    'no-alert3': 'true',
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1647708387',
    'tk': '4784637874186650150',
    'sessionid': '5srq7x9a44zswv86clk7fye34cq6k4d1',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1647712852',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1647712853',
    'm': m,
}

headers = {
    'authority': 'match.yuanrenxue.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://match.yuanrenxue.com/match/9',
    'accept-language': 'zh-CN,zh;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1647708383; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1647708387; tk=4784637874186650150; sessionid=5srq7x9a44zswv86clk7fye34cq6k4d1; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1647712852; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1647712853; m=4qk6A8v1beC%2Flc2KTzMxsO%2FUsvMPPouJ07WEV3nXBK7TNKnhfkfxeK8ikwUsjV9cfp1UeVkAIJMjPIThSKMaqq98NLQgORawUlz%2F1SWRbQp%2BQv3fvHgkGA87Ur3PNWjoatohq8ph6%2Fxkv5yvIm3Lr%2BSq03y3orPSnKuOW7u0r8eYnKp%2FLBovieq99jDmcxjqKRs1CPgsZ%2BQ8O5gqo3FhRXgc2%2BKLe4yZQC7m0X3nepWSH0GEiWrzVWzrKauhqj9zHAsPmwGP1x9azra5Jp9WzdS%2BjVsym%2FU4s0HD09Htfnh%2Bm9UR3MfXGBERbJQ45I5v10PCvNKY0DT2SqDL5PGkxug%3D%3Dr',
}

response = requests.get('https://match.yuanrenxue.com/api/match/9', headers=headers, cookies=cookies)
print(response.text)