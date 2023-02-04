# -*- coding: utf-8 -*-
# @Time    : 2022/12/18 15:36
# @Author  : Ram.zhang
# @File    : login.py
# @Software: PyCharm
import re

import execjs
import requests
import ddddocr


def index():
    headers = {
        "Proxy-Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "CGISESSID": "f97d8109fca6457932b778257fa33c4e",
        "_ga": "GA1.2.1008397912.1671349214",
        "_gid": "GA1.2.525231480.1671349214",
        "failure": "NaN",
        "FGTServer": "AA20D50ED5C90AE8583B5A58974B397D6156F6C62B2A2A0F5BE77D3C6B4232"
    }
    url = "http://yhz566.com/"
    response = requests.get(url, headers=headers, cookies=cookies, verify=False)
    vvccookie = re.search('<input type="hidden" id="vvccookie" name="vvccookie" value="(.*?)">', response.text).group(1)
    print(f'vvccookie: {vvccookie}')
    img_url = 'http://yhz566.com' + re.search('<img.*?name="validate" src="(.*?)">', response.text).group(1).replace(
        '.', '')
    print(f'img_url: {img_url}')
    image = requests.get(img_url, headers=headers, cookies=cookies, verify=False)
    with open('captcha_code.jpg', 'wb') as f:
        f.write(image.content)
    image.close()
    return vvccookie


def login(username, password):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "http://yhz566.com",
        "Pragma": "no-cache",
        "Proxy-Connection": "keep-alive",
        "Referer": "http://yhz566.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest"
    }
    cookies = {
        "CGISESSID": "2957071fb422cd81f799dee04001fc7b",
        "Hm_lvt_ed750730e9d20094e129d81fde9a5171": "1671346055",
        "Hm_lpvt_ed750730e9d20094e129d81fde9a5171": "1671346055",
        "_ga": "GA1.2.492606388.1671346055",
        "_gid": "GA1.2.35717292.1671346055",
        "failure": "NaN",
        "FGTServer": "AA20D50ED5C90AE8583B5A58974B397D6156F6C62B2A2A0F5BE77D3C6A4232"
    }
    url = "http://yhz566.com/"
    params = {
        "controller": "default",
        "action": "login"
    }

    vvccookie = index()
    code = captcha_recognition()
    print(f'code: {code}')
    jsondata_rsa = execjs.compile(open(f'login.js', 'r', encoding='utf-8').read()).call('encrypt', username, password, str(code), vvccookie)
    data = {
        "flag": "login",
        "jsondata_rsa": jsondata_rsa,
        "Submit": "json",
        "v": "n"
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data, verify=False)

    print(response.json())
    print(response)


def captcha_recognition():
    ocr = ddddocr.DdddOcr(old=True, show_ad=False)

    with open("captcha_code.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    return res


if __name__ == '__main__':
    username = '1111111111'
    password = '123456'
    login(username, password)
