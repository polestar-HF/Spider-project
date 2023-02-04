# -*- coding: utf-8 -*-
# @Time    : 2022/6/29 23:26
# @Author  : Ram.zhang
# @File    : register.py
# @Software: PyCharm
import random
import re
import time

import ddddocr
import execjs
import requests

ocr = ddddocr.DdddOcr(show_ad=False)

js_code = open('sdk.js', 'r', encoding='utf-8').read()


def login_check():
    headers = {
        "Accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://aq.99.com/V3/NDUser_Login.htm",
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
        "ASP.NET_SessionId": "tzn3g145pyp0bo55pann1nun",
        "h": "d6-0.00000s"
    }
    url = "https://aq.99.com/AjaxAction/AC_userlogin.ashx"
    txtPassword = execjs.compile(js_code).call('getMD5Value', '123456789')
    print(f'密码：{txtPassword}')
    aws = execjs.compile(js_code).call('obtainAwslHello')
    print(f'aws：{aws}')
    checkcode = verify_code()
    print(f'验证码：{checkcode}')
    params = {
        "CallBack": "jQuery112408081018255378576_1656515445076",
        "siteflag": "995",
        "nduseraction": "login",
        "txtUserName": "213123123",
        "txtPassword": txtPassword,
        "checkcode": checkcode,
        "Rnd": f"{random.random()}",
        "aws": aws,
        "_": f"{int(time.time() * 1000)}"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)


def verify_code():
    import requests

    headers = {
        "Accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://aq.99.com/V3/NDUser_Login.htm",
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
        "ASP.NET_SessionId": "tzn3g145pyp0bo55pann1nun",
        "UserCookie": "744cff3962bc712322dc11e3",
        "h": "d6-0.00044s"
    }
    url = "https://aq.99.com/AjaxAction/AC_verifycode.ashx"
    params = {
        "CallBack": "jQuery1124024581143240725778_1656516940748",
        "nduseraction": "getverifycodestate",
        "verifycodetype": "UserLogin",
        "bussiness": "aq_login",
        "SiteFlag": "995",
        "RND": f"{random.random()}",
        "_": f"{int(time.time() * 1000)}"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    verify_code_url = re.search('"VerifyCodeUrl":"(.*?)"', response.text).group(1)
    image = requests.get(verify_code_url).content
    with open("verify.jpg", 'wb') as f:
        f.write(image)
    f.close()
    res = ocr.classification(image)
    return res


if __name__ == '__main__':
    login_check()
