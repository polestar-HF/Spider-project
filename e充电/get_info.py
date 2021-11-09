# -*- coding: utf-8 -*-
# @Time    : 2021/11/3 23:08
# @Author  : Ram.zhang
# @File    : get_info.py
# @Software: PyCharm
import json

import execjs
import requests


def decode_date(data):
    return execjs.compile(open('decode_data.js', 'r', encoding='utf-8').read()).call('decryptCode', data)


def get_info():
    cookies = {
        'Hm_lvt_859c35431799473d787913f6309cf1e6': '1635930530',
        'Hm_lvt_c124a5b84284958ac93267d0a70bda14': '1635930530',
        'Hm_lpvt_859c35431799473d787913f6309cf1e6': '1635948220',
        'Hm_lpvt_c124a5b84284958ac93267d0a70bda14': '1635948220',
        'JSESSIONID': '5DF6522250E06CEBFCB8B77AFDED88E8',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'authnonce': '210050',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'token': '2142315q2312ewqeq',
        'sign': '33cdab915fd22d92c85fcf0446af037f',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'http://www.echargenet.com',
        'Referer': 'http://www.echargenet.com/views/mapService/map/getLocation.html?isfromCollection=0',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'data': 'A9Z/HizZ5Qihj9u5ixVoAoKalSToOM13MXCFtdv6PbWSlQcRVLnB9jZbhh0vZ3gz1rgjd9Fc+RNZ6MUcv7x8521Zeu132/Y4'
    }
    url = 'http://www.echargenet.com/station/info'
    response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)
    if response.status_code == 200:
        data = response.json().get('data')
        print(json.loads(decode_date(data)))


if __name__ == '__main__':
    get_info()
