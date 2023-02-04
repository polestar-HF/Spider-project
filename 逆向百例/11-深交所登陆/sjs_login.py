# -*- coding: utf-8 -*-
# @Time    : 2022/5/29 15:05
# @Author  : Ram.zhang
# @File    : sjs_login.py
# @Software: PyCharm
import base64
import random
import time
from lxml import etree
import ddddocr
import requests

ocr = ddddocr.DdddOcr(show_ad=False, old=True)
session = requests.session()


def get_index():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "JSESSIONID": "76FBFA1B781698C42237D8400A30176B",
        "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE": "zh"
    }
    url = "https://owssso.szse.cn/sso/login"
    params = {
        "service": "https://www.szse.cn/application/userCenter/accountinfo/index.html",
        "locale": "zh"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    html = etree.HTML(response.text)
    execution = html.xpath('//input[@name="execution"]/@value')[0]
    print(execution)
    return execution


def get_key():
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://owssso.szse.cn/sso/login?service=https://www.szse.cn/application/userCenter/accountinfo/index.html&locale=zh",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "JSESSIONID": "BCC55CF84D9AE09531D19B7CAC365D02",
        "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE": "zh"
    }
    url = "https://owssso.szse.cn/sso/enuuid"
    params = {
        "service": "https://www.szse.cn/application/userCenter/accountinfo/index.html",
        "locale": "zh",
        "_": f"{int(time.time() * 1000)}"
    }
    response = session.get(url, headers=headers, cookies=cookies, params=params)
    result = response.json()
    print(result)
    print(response.cookies)
    uuid = result.get('uuid')
    enuuid = result.get('enuuid')
    return uuid, enuuid


def verify_ocr():
    with open("verify_img.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    return res


def get_verify_picture():
    headers = {
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://owssso.szse.cn/sso/login?service=https://www.szse.cn/application/userCenter/accountinfo/index.html&locale=zh",
        "Sec-Fetch-Dest": "image",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "JSESSIONID": "BCC55CF84D9AE09531D19B7CAC365D02",
        "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE": "zh"
    }
    url = "https://owssso.szse.cn/sso/picture"
    receiver, enuuid = get_key()
    params = {
        "receiver": receiver,
        "enuuid": enuuid,
        "rand": random.random()
    }
    response = session.get(url, headers=headers, cookies=cookies, params=params)

    with open('verify_img.jpg', 'wb') as img:
        img.write(response.content)
    img.close()
    return receiver


def get_login(execution):
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://owssso.szse.cn",
        "Pragma": "no-cache",
        "Referer": "https://owssso.szse.cn/sso/login?service=https://www.szse.cn/application/userCenter/accountinfo/index.html&locale=zh",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "JSESSIONID": "F315F13DF776A429B74ECD8A7D653F05",
        "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE": "zh"
    }
    url = "https://owssso.szse.cn/sso/login"
    params = {
        "service": "https://www.szse.cn/application/userCenter/accountinfo/index.html",
        "locale": "zh"
    }
    uuid = get_verify_picture()
    text = verify_ocr()
    password = base64.b64encode('12343565675'.encode()).decode()
    data = {
        "receiver": "1323124241",
        "iframe": "false",
        "password": password,
        "text": text,
        "uuid": uuid,
        "type": "PL",
        "execution": execution,
        "_eventId": "submit"
    }
    # print(data)
    response = session.post(url, headers=headers, cookies=cookies, params=params, data=data)
    html = etree.HTML(response.text)
    error_info = html.xpath('//div[@class="errors"]/text()')
    print(error_info)


if __name__ == '__main__':
    # get_verify_picture()
    # verify_ocr()
    execution = get_index()
    get_login(execution)
