# -*- coding: utf-8 -*-
# @Time    : 2022/10/22 20:40
# @Author  : Ram.zhang
# @File    : yrx_29.py
# @Software: PyCharm
import json
import pycurl

result = 0


def parse_data(response):
    global result
    data = json.loads(response)
    for n in data['data']:
        result += int(n['value'])
    print(f'result => {result}')


headers = [
    "authority: www.python-spider.com",
    "accept: application/json, text/javascript, */*; q=0.01",
    "accept-language: zh-CN,zh;q=0.9",
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded; charset=UTF-8",
    "cookie: sessionid=xeir2hb1c0x6q3robpw8pql06tmcli24",
    "origin: https://www.python-spider.com",
    "pragma: no-cache",
    "referer: https://www.python-spider.com/challenge/29",
    "sec-ch-ua: \"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
    "sec-ch-ua-mobile: ?0",
    "sec-ch-ua-platform: \"Windows\"",
    "sec-fetch-dest: empty",
    "sec-fetch-mode: cors",
    "sec-fetch-site: same-origin",
    "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "x-requested-with: XMLHttpRequest"
]
url = "https://www.python-spider.com/api/challenge29"
# 　初始化实例对象
curl = pycurl.Curl()
# 设置Ja3指纹密码套件, 可通过https://www.python-spider.com/challenge/8888查看自己的Ja3加密套件
curl.setopt(
    curl.SSL_CIPHER_LIST,
    'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA:AES256-SHA:TLS_EMPTY_RENEGOTIATION_INFO_SCSV'
)
# 设置请求头
curl.setopt(pycurl.HTTPHEADER, headers)
# 设置回调事件
curl.setopt(pycurl.WRITEFUNCTION, parse_data)
for page in range(1, 101):
    # 设置请求url
    curl.setopt(pycurl.URL, url)
    # 传入请求参数
    data = f"page={page}"
    curl.setopt(pycurl.POSTFIELDS, data)
    # 设置代理
    # curl.setopt(curl.PROXY, 'https://127.0.0.1:xxxx')
    # 发送请求
    curl.perform()
