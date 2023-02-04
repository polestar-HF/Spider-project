# -*- coding: utf-8 -*-
# @Time    : 2022/7/27 17:23
# @Author  : Ram.zhang
# @File    : top_57.py
# @Software: PyCharm
import base64
import json

import execjs
import requests

from Crypto.Cipher import AES

js_code = open('aes_decode.js', 'r', encoding='utf-8').read()


def aes_cbc_decrypt_js_text(encrypt_text: str, key) -> str:
    """
    解密AES_CBC的密文
    :param encrypt_text: 密文
    :param key: 密钥
    :param iv: 密钥偏移量
    :return:解密后的数据
    example_url_learn_js_base64: aHR0cDovL2NyZWRpdC5jdXN0b21zLmdvdi5jbi8=
    """
    # 去除多余的字符
    unpad = lambda s: s[0:-ord(s[-1])]
    decode_encrypt_text = base64.b64decode(encrypt_text)
    # 初始化AES对象时传入与加密时的相同的密钥、加密模式和iv
    key += ('\0' * 8)
    aes2 = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    decrypt_text = unpad(aes2.decrypt(decode_encrypt_text).decode('utf8'))
    decrypt_text = decrypt_text.replace(b'\x01'.decode(), "").replace(b'\x02'.decode(), "")
    return decrypt_text


def decode(key, encrypt_text):
    result = execjs.compile(js_code).call('decode', key, encrypt_text)
    return json.loads(result)


def top_57(page):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/57",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-kl-kes-ajax-request": "Ajax_Request",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1657094208,1658913453",
        "no-alert": "true",
        "sessionid": "14zgyot8uvia08gjz7r1op9zauc9ufvl",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1658913503"
    }
    url = "https://www.python-spider.com/api/challenge57"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()

    key = response.get('result')[0:8]
    encrypt_text = response.get('result')[8:]
    result = decode(key, encrypt_text)
    number = 0
    for data in result.get('data'):
        number += int(data.get('value'))
    print(f'第{page}页: {number}')
    return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += top_57(page=pg)
    print(f'总和: {sums}')
