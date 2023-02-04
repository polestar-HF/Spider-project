# -*- coding: utf-8 -*-
# @Time    : 2022/6/6 23:04
# @Author  : Ram.zhang
# @File    : dangle_longin.py
# @Software: PyCharm
import requests
import execjs

password = execjs.compile(open('password.js', 'r').read()).call('rsa', 'Ram90876#')
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://oauth.d.cn/auth/goLogin.html",
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
    "JSESSIONID": "9620d0b1a60e78d93db43f6c8a6d",
    "ut": "1654525136138",
    "NSC_ofx_ttm.pbvui.e.do_bvui": "ffffffff75985cb945525d5f4f58455e445a4a42378b"
}
url = "https://oauth.d.cn/auth/login"
params = {
    "display": "web",
    "name": "111111111111",
    "pwd": password,
    "to": "https://www.d.cn/"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
