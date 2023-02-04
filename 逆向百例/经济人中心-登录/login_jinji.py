# -*- coding: utf-8 -*-
# @Time    : 2022/6/16 21:26
# @Author  : Ram.zhang
# @File    : login_jinji.py
# @Software: PyCharm
import execjs
import requests


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://agent.leju.com",
    "Pragma": "no-cache",
    "Referer": "https://agent.leju.com/ucenter/passportlogin/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "PHPSESSID": "64f3d97597838359974c9e8b6187e907",
    "esf_bi_touch_login_referrer": "https%3A%2F%2Fagent.leju.com%2F",
    "LEJUGLOBAL": "eac3a45ba289def85e5728ead931b8f8",
    "BI_STEP": "1",
    "BI_INSIDE": "{}",
    "BI_INSIDE_VP": "",
    "BI_OUTSIDE": "{}",
    "BI_OUTSIDE_VP": ""
}
url = "https://agent.leju.com/ucenter/login/"
password = execjs.compile(open('sdk_passwd.js', 'r', encoding='utf-8').read()).call('get_passwd', 'ram123456')
print(password)
data = {
    "username": "111111111",
    "password": password,
    "ckey": "0"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.json())
print(response)