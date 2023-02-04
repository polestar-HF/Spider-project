# -*- coding: utf-8 -*-
# @Time    : 2022/6/11 15:20
# @Author  : Ram.zhang
# @File    : top_22.py
# @Software: PyCharm
import requests.packages.urllib3.util.ssl_
from loguru import logger

# 修改tls指纹, 通过wireshark抓包查看tls所使用的加密套件(Client Hello包下的Cipher Suites(加密套件, 第一个不是))
# 参考黑脸怪大佬的文章：http://www.hl98.cn/index.php/python/16.html
requests.packages.urllib3.util.ssl_.DEFAULT_CIPHERS = "TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA:AES256-SHA"


def get_page(page):
    number = 0
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/22",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654929707",
        "no-alert": "true",
        "sessionid": "s6ls8l6l7dhrnbrcs6hmjmlhdn6hdccs",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1654930557",
        "__yr_token__": "b301cDB94JzIsHmRaKmc7QQhXKEI5Tm5VchYTG3ZTPFNPGGxmT1cSOnQCKH0lE1YeRHt1GXw4PDlwB04iaVYPJFZzaB8bG0MyBilRFFA8HAUHJ18SHjwCAgN7WAZYF3ZrXAZPABUMG3kJWQNBYRY="
    }
    url = "https://www.python-spider.com/api/challenge22"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    if response.status_code == 200:
        data_list = response.json()
        for data in data_list.get('data'):
            number += int(data.get('value').replace('\r', ''))
        logger.debug(f'第{page}页：{number}')
        return number
    else:
        logger.error('出错啦')


if __name__ == '__main__':
    sums = 0
    for page in range(1, 101):
        sums += get_page(page)
    logger.success(f'数据总和: {sums}')
