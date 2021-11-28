# -*- coding: utf-8 -*-
# @Time    : 2021/11/21 17:23
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import json

import requests
import execjs


def encode_param(param):
    return execjs.compile(open('decode_resp.js', 'r', encoding='UTF-8').read()).call('encodeParams', param)


def decode_resp(content):
    return execjs.compile(open('decode_resp.js', 'r', encoding='UTF-8').read()).call('decodeResult', content)


def nodeserve_parse_data(content):
    # 开启本地node服务, 访问接口运行js代码
    # 传入响应的content，获取解析后的小说
    param = {
        "content": content
    }
    resp = requests.post('http://127.0.0.1:8919/decode_data', data=param).json()
    return resp


def get_result():
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'http://yc.wswj.net',
        'Referer': 'http://yc.wswj.net/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    m = {
        "name": "SelectRainMapData",
        "btime": "202111182200",
        "etime": "202111212200",
        "rainlevel": "A:10,25,50,100",
        "isoline": "N",
        "heatRange": 50,
        "stcdtype": "1,0,0,0,0,0",
        "fresh": 0,
        "points": ""
    }
    param = encode_param(json.dumps(m, ensure_ascii=False, separators=(",", ":")))
    url = 'http://61.191.22.196:5566/AHSXX/service/PublicBusinessHandler.ashx'
    response = requests.post(url, headers=headers, data=json.loads(param), verify=False)
    if response.status_code == 200:
        return response.json().get('data')


if __name__ == '__main__':
    data = get_result()
    result = nodeserve_parse_data(data)
    print(result)
