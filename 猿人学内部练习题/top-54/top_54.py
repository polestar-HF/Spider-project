# -*- coding: utf-8 -*-
# @Time    : 2022/7/24 20:01
# @Author  : Ram.zhang
# @File    : top_54.py
# @Software: PyCharm
import base64

import requests
from loguru import logger


# 过无限debugger, 首先滞空b函数, 右击debugger行数位置，点击add conditional breakpoint设置false或者Never pause here
def top_54(page: str):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "referer": "https://www.python-spider.com/challenge/54",
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
        "sessionid": "pwwtlls1ozyfb8a7ady1g2sg1ks43cn4",
        "no-alert": "true"
    }
    url = "https://www.python-spider.com/api/challenge54"
    data = {
        "page": page,
        "token": base64.b64encode(page.encode()).decode()
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    number = 0
    for data in response.get('data'):
        number += int(data.get('value').replace('\r', ''))
    logger.debug(f'第{page}页：{number}')
    return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += top_54(str(pg))
    logger.success(f'总和: {sums}')
