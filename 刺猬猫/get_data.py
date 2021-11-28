# -*- coding: utf-8 -*-
# @Time    : 2021/11/23 22:20
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import json

import requests
import execjs

session = requests.session()


def decrypt(response):
    result = execjs.compile(open('decrypt.js', 'r', encoding='utf-8').read()).call('decryptData', response)
    return result


def nodeserve_parse_text(content):
    # 开启本地node服务, 访问接口运行js代码
    # 传入响应的content，获取解析后的小说
    data = {
        "content": json.dumps(content)
    }
    resp = requests.post('http://127.0.0.1:8919/decode_text', data=data).json()
    return resp


def get_access_key():
    cookies = {
        'Hm_lvt_1dbadbc80ffab52435c688db7b756e3a': '1637673036',
        'ci_session': '1d64ffebc56271030e6b7c6ea05cd6522b73685c',
        'Hm_lpvt_1dbadbc80ffab52435c688db7b756e3a': '1637677369',
        'readPage_visits': '14',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://www.ciweimao.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.ciweimao.com/chapter/107175213',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'chapter_id': '107184502'
    }
    url = 'https://www.ciweimao.com/chapter/ajax_get_session_code'
    response = session.post(url, headers=headers, cookies=cookies, data=data)
    return response.json().get("chapter_access_key")


def get_result():
    cookies = {
        'Hm_lvt_1dbadbc80ffab52435c688db7b756e3a': '1637673036',
        'ci_session': '5cb676760b2d7b56ab2fb11911d7f457f2b97f8d',
        'Hm_lpvt_1dbadbc80ffab52435c688db7b756e3a': '1637677248',
        'readPage_visits': '13',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://www.ciweimao.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.ciweimao.com/chapter/107175213',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'chapter_id': '107184502',
        'chapter_access_key': chapter_access_key
    }
    url = 'https://www.ciweimao.com/chapter/get_book_chapter_detail_info'
    response = session.post(url, headers=headers, cookies=cookies, data=data).json()
    resp = {
        "content": response.get('chapter_content'),
        "keys": response.get('encryt_keys'),
        "accessKey": chapter_access_key
    }
    text = nodeserve_parse_text(resp)
    print(type(text), text)


if __name__ == '__main__':
    chapter_access_key = get_access_key()
    get_result()
