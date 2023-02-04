# -*- coding: utf-8 -*-
# @Time    : 2021/11/29 22:36
# @Author  : Ram.zhang
# @File    : top6.py
# @Software: PyCharm
import json
import requests
import time


session = requests.session()


def nodeserve_parse_text(content):
    # 开启本地node服务, 访问接口运行js代码
    # 传入响应的content，获取解析后的小说
    data = {
        "content": content
    }
    resp = requests.post('http://127.0.0.1:8919/param_m', data=data).json()
    return resp


def get_resp():
    headers = {
        'user-agent': 'yuanrenxue.project',
    }
    q = ''
    value_list = []
    for page in range(1, 6):
        pwd = int(time.time()) * 1000
        param = {
            "pwd": pwd,
            "times": page
        }
        q += f'{str(page)}-{str(pwd)}|'
        print(q)
        params = (
            ('page', page),
            ('m', nodeserve_parse_text(json.dumps(param))),
            ('q', q),
        )
        print(params)
        response = requests.get('https://match.yuanrenxue.com/api/match/6', headers=headers, params=params)
        if response.status_code == 200:
            print(response.json())
            data_list = response.json().get('data')
            for value in data_list:
                value_list.append(value.get('value'))
                #
                value_list.append(value.get('value') * 8)
                value_list.append(value.get('value') * 15)
            print(value_list)
    return sum(value_list)


if __name__ == '__main__':
    print(get_resp())
