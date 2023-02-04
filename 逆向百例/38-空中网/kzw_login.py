# -*- coding: utf-8 -*-
# @Time    : 2022/6/27 23:44
# @Author  : Ram.zhang
# @File    : kzw_login.py
# @Software: PyCharm
import json
import random
import time

import execjs
import requests
import ddddocr

ocr = ddddocr.DdddOcr(show_ad=False)


def passwd_key():
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://passport.kongzhong.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "KZLBS": "d08e6bcdc9f0cbe5",
        "SSO-KGZQRT": "257B5A4E28837AAC3DD911FBEFAD9784"
    }
    url = "https://sso.kongzhong.com/ajaxLogin"
    params = {
        "j": "j",
        "jsonp": "j",
        "service": "https://passport.kongzhong.com/",
        "_": str(int(time.time() * 1000))
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).text
    result = json.loads(response.replace('KZLoginHandler.jsonpCallbackKongZ(', '').replace(')', ''))
    return result.get('dc')


def get_verify_code():
    # 获取验证码

    headers = {
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://passport.kongzhong.com/",
        "Sec-Fetch-Dest": "image",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "KZLBS": "d08e6bcdc9f0cbe5",
        "SSO-KGZQRT": "7FF6E9E72DCCCD265A8A934255DCD0BA",
        "SSO-KGZLT": "fa3d1231-d06e-4480-adc0-fd42c2f4ee2d"
    }
    url = "https://sso.kongzhong.com/createVCode"
    params = {
        "w": "80",
        "h": "30",
        f"{random.random()}": ""
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    with open('verify_img.jpg', 'wb') as img:
        img.write(response.content)
    img.close()
    # 识别验证码
    res = ocr.classification(response.content)
    print(f'验证码识别结果: {res}')
    return res


def login():
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://passport.kongzhong.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "KZLBS": "d08e6bcdc9f0cbe5",
        "SSO-KGZQRT": "7FF6E9E72DCCCD265A8A934255DCD0BA",
        "SSO-KGZLT": "fa3d1231-d06e-4480-adc0-fd42c2f4ee2d",
        "SSO-KGZIT": "d1dfc952-a004-4aac-8dec-3a368a013c24"
    }
    url = "https://sso.kongzhong.com/ajaxLogin"
    # 密码加密秘钥
    pwd = passwd_key()
    password = execjs.compile(open('passwd_sdk.js', 'r', encoding='utf-8').read()).call('encrypt', '123456', pwd)
    # 验证码
    vcode = get_verify_code()
    params = {
        "j": "j",
        "": "",
        "type": "1",
        "service": "https://passport.kongzhong.com/",
        "username": "sdasd",
        "password": password,
        "vcode": vcode,
        "toSave": "0",
        "_": str(int(time.time() * 1000))
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
    print(response)


if __name__ == '__main__':
    login()
