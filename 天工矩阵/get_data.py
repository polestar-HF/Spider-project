# -*- coding: utf-8 -*-
# @Time    : 2021/12/1 22:44
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import datetime
import json
import requests
import execjs
import hashlib


def sign(date):
    # js版本
    data = 'appid=201010&client={"system":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36","version":"1.0.0"}&param={"serviceId":"a4966e02741c4cc091fe1834d00f149c","sid":7017,"pkey":"","withParam":true,"noWaterMark":true}&rank=5360981370142424&timestamp=%s&token=&key=72933362EAA649B893699E6191BC898F' % date
    return execjs.compile(open('sign.js', 'r').read()).call('sign', data)


def _sign(date):
    # python版本
    data = 'appid=201010&client={"system":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36","version":"1.0.0"}&param={"serviceId":"a4966e02741c4cc091fe1834d00f149c","sid":7017,"pkey":"","withParam":true,"noWaterMark":true}&rank=5360981370142424&timestamp=%s&token=&key=72933362EAA649B893699E6191BC898F' % date
    return hashlib.md5(data.encode()).hexdigest()


def get_result():
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'Accept': 'application/json, text/plain, */*',
        'apiVersion': '1.0',
        'Content-Type': 'application/json;charset=UTF-8',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://titanmatrix.com',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://titanmatrix.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    now = datetime.datetime.now()
    # 转换为指定的格式:
    date_time = now.strftime("%Y/%m/%d %H:%M:%S")
    data = {"appid": "201010", "client": {
        "system": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        "version": "1.0.0"},
            "param": {"serviceId": "a4966e02741c4cc091fe1834d00f149c", "sid": 7017, "pkey": "", "withParam": True,
                      "noWaterMark": True}, "timestamp": date_time, "rank": "5360981370142424",
            "sign": _sign(date_time)}

    response = requests.post('https://macafe.titanmatrix.com/macafe/getState', headers=headers, data=json.dumps(data))
    print(response.json())


if __name__ == '__main__':
    get_result()
