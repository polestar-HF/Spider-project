# -*- coding: utf-8 -*-
# @Time    : 2022/12/24 14:11
# @Author  : Ram.zhang
# @File    : searchData.py
# @Software: PyCharm
import execjs
import requests
import json

js_code = open('sdk.js', 'r', encoding='utf-8').read()


def index():
    headers = {
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://bz.zzzmh.cn/index"
    response = requests.get(url, headers=headers)
    response.encoding = response.apparent_encoding
    print(response.text)
    print(response)


def search():
    headers = {
        "authority": "api.zzzmh.cn",
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "origin": "https://bz.zzzmh.cn",
        "pragma": "no-cache",
        "referer": "https://bz.zzzmh.cn/",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
    url = "https://api.zzzmh.cn/bz/v3/searchData"
    data = {
        "size": 24,
        "current": 1,
        "sort": 0,
        "category": 0,
        "resolution": 0,
        "color": "0",
        "categoryId": 0,
        "ratio": 0,
        "keyword": "美女"
    }
    data = json.dumps(data)
    response = requests.post(url, headers=headers, data=data)

    result = execjs.compile(js_code).call('decrypt', response.json()['result'])
    print(json.loads(result))
    print(response)


if __name__ == '__main__':
    # search()
    index()