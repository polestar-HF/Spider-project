# -*- coding: utf-8 -*-
# @Time    : 2022/7/26 20:41
# @Author  : Ram.zhang

# @File    : top_55.py
# @Software: PyCharm
import base64
import json
import requests

from Crypto.Cipher import AES


def aes_cbc_decrypt_js_text(encrypt_text: str) -> str:
    """
    解密AES_CBC的密文
    :param encrypt_text: 密文
    :param key: 密钥
    :param iv: 密钥偏移量
    :return:解密后的数据
    example_url_learn_js_base64: aHR0cDovL2NyZWRpdC5jdXN0b21zLmdvdi5jbi8=
    """
    key = "aiding6666666666"
    # 去除多余的字符
    unpad = lambda s: s[0:-ord(s[-1])]
    decode_encrypt_text = base64.b64decode(encrypt_text)
    # 初始化AES对象时传入与加密时的相同的密钥、加密模式和iv
    aes2 = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    decrypt_text = unpad(aes2.decrypt(decode_encrypt_text).decode('utf8'))
    decrypt_text = decrypt_text.replace(b'\x01'.decode(), "").replace(b'\x02'.decode(), "")
    return decrypt_text


# AES_CBC解密模式
encrypt_str = '2A4w0jqbUivhDV042Ka+VbfXmH65wRwPgKTNHCnEW2hkVTAx4LzvekaBzGEikZHeRf/m7tju+nk8JSds7UfoqIAWcYc3kxY9Phv/ZPcVOQ8lE3bYgT8P10ImYGVNtjiwii3X1MJRNE0sxG96brLkqeDJhghoqcLhQnL7EuudPDUfSVjbC9sah+2d2lRboX5O7B4oUP5SQ8AhZe8gmN0V8Zcma8105vFYIR9UgufxqlC1d2IqSRTERUwUQuRp9WOr1gsxmVxYy5V/NIrF9AHKdbQxDZ1vk9wo1t0nnB0OMd7Lwfvzip9EvGCzN+JDSTJNE0EoG4Y8cGcXpO4P6dfG3g=='


def top_55(page):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "referer": "https://www.python-spider.com/challenge/55",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654229510,1654316189,1654316648,1655014076",
        "no-alert": "true",
        "sessionid": "dsp4iecgxnhpew3mg45oep71ats1ar1h"
    }
    url = "https://www.python-spider.com/api/challenge55"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    result = aes_cbc_decrypt_js_text(encrypt_text=response.get('result'))
    number = 0
    for data in json.loads(result)['data']:
        number += int(data.get('value').replace('\r', ''))
    print(f'第{page}页: {number}')
    return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += top_55(page=pg)
    print(f'总和: {sums}')
