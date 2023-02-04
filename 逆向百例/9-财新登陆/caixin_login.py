# -*- coding: utf-8 -*-
# @Time    : 2022/5/24 22:16
# @Author  : Ram.zhang
# @File    : caixin_login.py
# @Software: PyCharm
import time
import requests
import subprocess
from functools import partial
from Crypto.Cipher import AES
import base64
from Crypto.Util.Padding import pad
from urllib import parse

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs

js_code = open('password.js', 'r', encoding='utf-8').read()


def aes_ecb_encrypt_text(decrypt_text: str, key: str) -> str:
    """
    加密AES_CBC的明文
    :param decrypt_text: 明文
    :param key: 密钥
    :return: 密文
    """
    # aes2 = AES.new(key.encode('utf-8'), AES.MODE_CBC, iv.encode('utf-8'))
    aes2 = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    encrypt_text = aes2.encrypt(pad(decrypt_text.encode('utf-8'), AES.block_size, style='pkcs7'))
    encrypt_text = str(base64.encodebytes(encrypt_text), encoding='utf-8').replace("\n", "")
    return encrypt_text


def login(user, password):
    headers = {
        "authority": "gateway.caixin.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://u.caixin.com/",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36"
    }
    cookies = {
        "sidebarStatus": "1",
        "ENTITY_ID": "",
        "CX_FROM": "null",
        "GUID": "625773673",
        "T_GUID": "1653399502943",
        "GID30": "625773673",
        "point": "1653407999000",
        "FROM_CHINA": "true",
        "gr_user_id": "47050af9-5f6e-46ef-8873-c4945bcdaa55",
        "872f3eaac31f373e_gr_session_id": "544948e2-85dc-438e-984a-f8fb2e190789",
        "872f3eaac31f373e_gr_session_id_544948e2-85dc-438e-984a-f8fb2e190789": "true",
        "lastTime": "1653401553390",
        "firstTime": "1653401553390",
        "ENTITY_COUNT": "8",
        "LOGIN_QR_CODE": "dx8d8CuoDe3IORAWzuD3Gs8OtxSLDUrl"
    }
    url = "https://gateway.caixin.com/api/ucenter/user/v1/loginJsonp"
    # password = execjs.compile(js_code).call('get_password', '123456789')
    password = aes_ecb_encrypt_text(password, key='G3JH98Y8MY9GWKWG')
    params = {
        "account": user,
        "password": parse.quote(password),
        "deviceType": "5",
        "unit": "1",
        "areaCode": "+86",
        "callback": f"__caixincallback{int(time.time() * 1000)}"
    }
    print(params)
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)


if __name__ == '__main__':
    user = '1111111111111'
    password = 'QY6EBlh7lE5rIjqH'
    login(user, password)
