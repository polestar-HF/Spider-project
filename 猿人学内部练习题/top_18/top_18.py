# -*- coding: utf-8 -*-
# @Time    : 2022/3/27 0:29
# @Author  : Ram.zhang
# @File    : top_18.py
# @Software: PyCharm
import ddddocr
import requests

ocr = ddddocr.DdddOcr(beta=True, show_ad=False)


def verify_ocr():
    with open("verify.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    print(res)


def get_top_18():
    cookies = {
        'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d': '1648311379',
        'no-alert': 'true',
        'sessionid': 'r8c7xb1p0qh6lb90b454z88aowi9uggd',
        'Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d': '1648312137',
    }

    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/18',
        'accept-language': 'zh-CN,zh;q=0.9',
        # Requests sorts cookies= alphabetically
        # 'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1648311379; no-alert=true; sessionid=r8c7xb1p0qh6lb90b454z88aowi9uggd; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1648312137',
    }

    data = {
        'page': '1',
        'code': '',
    }
    url = 'https://www.python-spider.com/api/challenge18'
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    print(response.json())
    verify = requests.get('https://www.python-spider.com/api/challenge18/verify?0.22547713041834738', headers=headers,
                          cookies=cookies)
    with open('verify.jpg', 'wb') as img:
        img.write(verify.content)
    img.close()


if __name__ == '__main__':
    get_top_18()
    verify_ocr()
