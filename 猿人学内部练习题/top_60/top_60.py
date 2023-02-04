# -*- coding: utf-8 -*-
# @Time    : 2022/7/31 14:52
# @Author  : Ram.zhang
# @File    : top_60.py
# @Software: PyCharm
import execjs


def top_60(page):
    import requests

    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/60",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654229510,1654316189,1654316648,1655014076",
        "no-alert": "true",
        "sessionid": "tj3knply3ewpk37ua4ofz9d8ea9nrtq2"
    }
    api = execjs.compile(open('sdk_cryptojs.js', 'r', encoding='utf-8').read()).call('encode', page)
    url = f"https://www.python-spider.com/api/challenge60/{api}"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    number = 0
    for data in response.get('data'):
        number += int(data.get('value').replace('\r', ''))
    print(f'第{page}页：{number}, url: {api}')
    return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += top_60(str(pg))
    print(f'总和: {sums}')
