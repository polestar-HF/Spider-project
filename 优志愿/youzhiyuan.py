# coding=utf-8
# Author: Ram.zhang
# Date: 2021/10/7 10:42
import hashlib
import requests
import execjs
import json


def md5_u_sign(data: str):
    e = '/youzy.dms.basiclib.api.college.query'
    sign = execjs.compile(open(r'优志愿\u_sign.js', 'r', encoding='utf-8').read()).call('sign', e, data)
    return hashlib.md5(sign.encode()).hexdigest()


def get_data(page_count=5):
    for page in range(1, page_count + 1):
        data = '{"keyword":"","provinceNames":[],"natureTypes":[],"eduLevel":"","categories":[],"features":[],"pageIndex":%s,"pageSize":20,"sort":7}' % page
        u_sign = md5_u_sign(json.loads(data))
        headers = {
            'Connection': 'keep-alive',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'u-sign': u_sign,
            'u-token': '',
            'sec-ch-ua-mobile': '?0',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Accept': '*/*',
            'Origin': 'https://pv4y-pc-tob.youzy.cn',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://pv4y-pc-tob.youzy.cn/',
            'Accept-Language': 'zh-CN,zh;q=0.9',
        }
        url = 'https://uwf7de983aad7a717eb.youzy.cn/youzy.dms.basiclib.api.college.query'
        response = requests.post(url, headers=headers, data=data)
        if response.status_code == 200:
            items_list = response.json().get('result').get('items')
            for resp in items_list:
                school_info = {
                    "name": resp.get('cnName'),
                    "url": resp.get('logoUrl'),
                    "ranking": resp.get('ranking'),
                    "tag": resp.get('features'),
                    "province": resp.get('provinceName'),
                    "belong": resp.get('belong')
                }
                yield school_info


if __name__ == '__main__':
    for info in get_data():
        print(info)
