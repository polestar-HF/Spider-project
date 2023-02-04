# -*- coding: utf-8 -*-
# @Time    : 2022/4/4 23:50
# @Author  : Ram.zhang
# @File    : login_wb.py
# @Software: PyCharm
import time

import ddddocr
import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def verify():
    cookies = {
        'HMF_CI': 'd13ee5631393f0cc6536e71a20a8f365389b717f2a05fc76f6ce44b74e69599b99',
        'CSH_DF': 'fXsETZ3yXe6LD9RGWQw9HNFBa9kIL1sVYJ0cfEfuU9kHoBYxzpqID0O/HMdgXdUtd4',
        'cookiePolicy': 'Accepted',
        'cookiePreference': 'Accepted',
        'Hm_lvt_d16e4336470e6b4d88aa16ff927d7daf': '1649085122',
        'django_language': 'zh-cn',
        'sessionid': 'dtwxj8w90hcqvw6xewkkkkul6vq1sdyu',
        'Hm_lpvt_d16e4336470e6b4d88aa16ff927d7daf': '1649087478',
        'ECTIMGCAPTCHA': '68df7626-b32a-4d53-9efb-80d9d6d3df24',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Dest': 'image',
        'Referer': 'https://synconhub.coscoshipping.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    params = {
        'd': f'{time.time() * 1000}',
    }

    response = requests.get('https://synconhub.coscoshipping.com/api/common/captcha/image', headers=headers,
                            params=params, cookies=cookies)
    with open('verify.jpg', 'wb') as jpg:
        jpg.write(response.content)
    jpg.close()
    ocr = ddddocr.DdddOcr(old=True, show_ad=False)
    res = ocr.classification(response.content)
    print(res)
    return res


def login(phone, password):
    headers = {
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
        "X-Client-Timestamp": "1649087532914",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json, text/plain, */*",
        "ECTIMGCAPTCHA": "68df7626-b32a-4d53-9efb-80d9d6d3df24",
        "sec-ch-ua-platform": "\"Windows\"",
        "Origin": "https://synconhub.coscoshipping.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://synconhub.coscoshipping.com/",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "HMF_CI": "d13ee5631393f0cc6536e71a20a8f365389b717f2a05fc76f6ce44b74e69599b99",
        "CSH_DF": "fXsETZ3yXe6LD9RGWQw9HNFBa9kIL1sVYJ0cfEfuU9kHoBYxzpqID0O/HMdgXdUtd4",
        "cookiePolicy": "Accepted",
        "cookiePreference": "Accepted",
        "Hm_lvt_d16e4336470e6b4d88aa16ff927d7daf": "1649085122",
        "django_language": "zh-cn",
        "sessionid": "dtwxj8w90hcqvw6xewkkkkul6vq1sdyu",
        "Hm_lpvt_d16e4336470e6b4d88aa16ff927d7daf": "1649087478",
        "ECTIMGCAPTCHA": "68df7626-b32a-4d53-9efb-80d9d6d3df24"
    }
    url = "https://synconhub.coscoshipping.com/api/admin/user/login"
    captcha = verify()
    password = execjs.compile(open('password.js', 'r', encoding='utf-8').read()).call('password', password)
    data = {
        "username": phone,
        "password": password,
        "captcha": captcha,
        "": ""
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    print(response.json())


if __name__ == '__main__':
    login('17785232224', '1234567')
