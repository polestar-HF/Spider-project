# -*- coding: utf-8 -*-
# @Time    : 2022/5/30 22:51
# @Author  : Ram.zhang
# @File    : qq_login.py
# @Software: PyCharm
import random

import requests


headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://xui.ptlogin2.qq.com/",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "pt_login_sig": "Viy4OQriN6Fp-a5E9k2UczkdotTrdLxPY593rqfZ7uEkTY0M5yelIFBS2t3B9fyc",
    "pt_clientip": "f8763d91f9ec3d8e",
    "pt_serverip": "89f9645e643798c0",
    "pt_local_token": "-148073925",
    "uikey": "ac510ba88e2ad8dcf6c5578239a4e08c6233303fdb7e8baa249554bcf7916582",
    "pt_guid_sig": "2e1ff06326815c690a7fc3456cc52c1e571d6c83b6aa12dcfcc66958b2660fc9",
    "confirmuin": "0",
    "ptui_loginuin": "1575174074@qq.com",
    "ptdrvs": "Pw2NredSMvp80xN9134owucamo8QcaGt7ZMU8GujKYm4Stqt*3JMPS5YmtOxZdLW",
    "ptvfsession": "2e1389acf82013eb5cf31e1f58d871b9d294fe6c25f95507efbd1e98999b51ad89e1786169f0c95abb2212a3a993920244611999a32dda60",
    "ETK": "fmP8nvmNpukCXx6H8f6RLD2MosqTzR9p5nb2*uQFnL0wc3xTW3tEzhGu8RH1epOHsX4MKhVeqCNmaVfMf7bJJw__"
}
url = "https://ssl.ptlogin2.qq.com/check"
params = {
    "regmaster": "",
    "pt_tea": "2",
    "pt_vcode": "1",
    "uin": "1575174074@qq.com",
    "appid": "522005705",
    "js_ver": "22052613",
    "js_type": "1",
    "login_sig": "Viy4OQriN6Fp-a5E9k2UczkdotTrdLxPY593rqfZ7uEkTY0M5yelIFBS2t3B9fyc",
    "u1": "https://wx.mail.qq.com/list/readtemplate?name=login_jump.html&target=",
    "r": f"{random.random()}",
    "pt_uistyle": "25",
    "daid": "4",
    "pt_3rd_aid": "0",
    "o1vId": "6b67af545480630184c974aedd14c6cc"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response.cookies)