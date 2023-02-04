# -*- coding: utf-8 -*-
# @Time    : 2022/6/14 23:32
# @Author  : Ram.zhang
# @File    : tuitui_login.py
# @Software: PyCharm
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import execjs
import requests


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://beijing.tuitui99.com",
    "Pragma": "no-cache",
    "Referer": "https://beijing.tuitui99.com/denglu.html",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "tuitui993": "06895e2a10df09475b0b075b4d0b14ca",
    "Hm_lvt_aea69d852c6b47aac98f64ec0a372db9": "1655217666",
    "Hm_lvt_b7043253d8c75719ad7604171457f1ed": "1655218488",
    "jjr580": "n8re6d33n8ndr35sbl29og0ul3",
    "Hm_lpvt_b7043253d8c75719ad7604171457f1ed": "1655220190",
    "Hm_lpvt_aea69d852c6b47aac98f64ec0a372db9": "1655220368"
}
url = "https://beijing.tuitui99.com/denglu.html"
password = execjs.compile(open('sdk_passwd.js', 'r', encoding='utf-8').read()).call('get_passwd', 'fhjasadsad')
print(password)
data = {
    "username": "11111111111",
    "password": password,
    "status": "0",
    "qqyunvswf": "8137cbed5583eb0a81abf0309363d75b"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)