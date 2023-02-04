# -*- coding: utf-8 -*-
# @Time    : 2022/12/3 15:32
# @Author  : Ram.zhang
# @File    : top_4.py
# @Software: PyCharm
import time

import requests

proxy_list = open('proxyinfo.json', 'r', encoding='utf-8').readlines()

def get_proxy():
    while proxy_list:
        proxy_info = eval(proxy_list.pop())
        proxy = f'{proxy_info["host"]}:{proxy_info["port"]}'
        proxies = {
            'http': proxy,
            'https': proxy,
        }
        # 测试代理
        try:
            print(f'测试代理<{proxy}>')
            response = requests.get('https://www.baidu.com', proxies=proxies, timeout=5, verify=False)
        except:
            continue
        else:
            if response.status_code == 200:
                # result = response.json()
                print(f'测试代理<{proxy}>有效')
                return proxy
            else:
                print(f'测试代理<{proxy}>无效')



def getData(page):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/4",
        "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "no-alert": "true",
        "sessionid": "1p73alc3yjyvn2p05t4ymcjb5ykibxxk"
    }
    url = "https://www.python-spider.com/api/challenge4"
    data = {
        "page": str(page)
    }
    ## 隧道域名:端口号
    tunnel = "t917.kdltps.com:15818"

    # 用户名密码方式
    username = "t17005427942471"
    password = "z6apv1tk"
    proxies = {
        "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": tunnel},
        "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": tunnel}
    }
    try:
        response = requests.post(url, headers=headers, cookies=cookies, data=data, proxies=proxies)
        number = 0
        if response.status_code == 200:
            data_list = response.json()
            for data in data_list.get('data'):
                number += int(data.get('value').replace('\r', ''))
            print(f'第{page}页：{number}')
            return number
        else:
            print(f'访问失败 => {page}')
            return getData(page)
    except:
        print(f'请求重试 => {page}')
        return getData(page)




if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += getData(pg)
    print(f'总和：{sums}')
