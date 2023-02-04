# -*- coding: utf-8 -*-
# @Time    : 2022/10/22 15:10
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import requests
import execjs


def data(page):
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://spider.wangluozhe.com",
        "Pragma": "no-cache",
        "Proxy-Connection": "keep-alive",
        "Referer": "http://spider.wangluozhe.com/challenge/11",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
    }
    cookies = {
        "session": "3ba57862-56c4-48f0-9e71-9b8e448373e4.9RVE1MCbAXByA7MDGSHqfkJBPsw"
    }
    url = "http://spider.wangluozhe.com/challenge/api/11"
    _signature = execjs.compile(open('code.js', 'r', encoding='utf-8').read()).call('get_sign')
    data = {
        "page": str(page),
        "count": "10",
        "_signature": _signature
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)

    print(response.text)
    print(response)
    count = 0
    for i in response.json()['data']:
        count += int(i['value'])
    # print(f'_signature => {_signature}')
    print(f'{page} => {count}')
    return count


if __name__ == "__main__":
    sums = 0
    for page in range(1, 101):
        sums += data(page)
    print(sums)
