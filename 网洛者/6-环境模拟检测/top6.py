# -*- coding: utf-8 -*-
# @Time    : 2022/7/2 22:47
# @Author  : Ram.zhang
# @File    : top6.py
# @Software: PyCharm
import execjs
import requests


def main(page):
    hexin_v = execjs.compile(open('sdk_v.js', 'r', encoding='utf-8').read()).call("get_hexin_v")
    print(hexin_v)
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://spider.wangluozhe.com",
        "Pragma": "no-cache",
        "Proxy-Connection": "keep-alive",
        "Referer": "http://spider.wangluozhe.com/challenge/6",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "hexin-v": hexin_v
    }
    cookies = {
        "session": "88849132-9fd4-4663-ae4b-e9b10fd03043.JuMgPMSbQQ8o4A5gyW6WEl9Acsc",
        "v": "A-wD5OEcoLXtUbZDoeP3o5RJvcEbpZJvkkukEEYt-xM6YoL_brVg3-JZdKaV"
    }
    url = "http://spider.wangluozhe.com/challenge/api/6"
    data = {
        "page": str(page),
        "count": "10"
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False).json()
    count = 0
    for i in response.get('data'):
        count += int(i.get('value'))
    print(f'第{page}页: {count}')
    return count


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += main(pg)
    print(f'100页数据总和：{sums}')
