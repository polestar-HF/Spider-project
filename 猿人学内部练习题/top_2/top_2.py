# -*- coding: utf-8 -*-
# @Time    : 2022/3/20 0:10
# @Author  : Ram.zhang
# @File    : top_2.py
# @Software: PyCharm
import execjs
import requests


def get_top_2():
    cookies = {
        'no-alert': 'true',
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1647704752',
        'sessionid': 'rey6t60v9t1fmqgvplvb8ym726n0xqly',
        'sign': '1647705983~YWlkaW5nX3dpbjE2NDc3MDU5ODI5NzE=|e192c748c9d3fd4576328d3355627fe2',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1647705984',
    }

    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/2',
        'accept-language': 'zh-CN,zh;q=0.9',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'no-alert=true; Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1647704752; sessionid=rey6t60v9t1fmqgvplvb8ym726n0xqly; sign=1647705983~YWlkaW5nX3dpbjE2NDc3MDU5ODI5NzE=|e192c748c9d3fd4576328d3355627fe2; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1647705984',
    }
    anw = execjs.compile(open('cookie.js', 'r').read()).call('cookie', 1587102734000)
    data = {
        'anw': anw,
        'id': '2',
    }

    response = requests.post('https://www.python-spider.com/challenge/api/check', headers=headers, cookies=cookies,
                             data=data)
    print(response.json())


if __name__ == '__main__':
    get_top_2()
