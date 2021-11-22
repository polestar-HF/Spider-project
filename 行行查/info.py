# -*- coding: utf-8 -*-
# @Time    : 2021/11/18 22:51
# @Author  : Ram.zhang
# @File    : info.py
# @Software: PyCharm
import requests
import execjs

session = requests.session()


def decode(data):
    return execjs.compile(open('data_decode.js', 'r', encoding='utf-8').read()).call('decrypt', data)


def nodeserve_parse_data(content):
    # 开启本地node服务, 访问接口运行js代码
    # 传入响应的content，获取解析后的小说
    data = {
        "content": content
    }
    resp = session.post('http://127.0.0.1:8919/decode_data', data=data).json()
    return resp


def get_info():
    url = 'https://api.hanghangcha.com/hhc/invest/investAgencyEvent?filter=%7B%22where%22%3A%7B%7D%2C%22hhcRound%22%3Anull%2C%22limit%22%3A40%2C%22skip%22%3A0%2C%22userId%22%3A727171%7D'

    payload = {}
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'Auth-Plus': '',
        'clientInfo': 'web',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'clientVersion': '1.0.0',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://www.hanghangcha.com',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': 'UM_distinctid=17d4052d9d75c-0692256aca4c3f-57b193e-144000-17d4052d9d8303; Hm_lvt_1521e0fb49013136e79181f2888214a7=1637461712; Hm_lpvt_1521e0fb49013136e79181f2888214a7=1637461712; JSESSIONID=E44C5AFC755E47043F21A26A748AD825; WX_OPEN=RDnriLkx07n055YdkHHIx/dfRIuszzTOX8QfnPitisuHyXY3SW6DObqsoAbRQNHncnWVMF2GJ/fhUZpevnXYajds03GLWNlg8c482uVlg7Ltlg58kpIo/lrJLx0G6Ydv; _ACCOUNT_=ZmUxMDk0OGJlZmI5NDM1ZGExZDE2YTNiY2Q1MzY3NjYlNDAlNDBtb2JpbGU6MTYzODY3MTQ3NzIzMTo2OTg1NTk2M2MzNGFhM2QzN2VlOWRlNTY4OTExOTJmOQ'
    }
    proxies = {
        "http": "127.0.0.1:7890",
        "https": "127.0.0.1:7890"
    }
    response = session.get(url, headers=headers, proxies=proxies, data=payload).json()
    data = response.get('data')
    result = nodeserve_parse_data(data)
    print(result)


if __name__ == '__main__':
    get_info()
