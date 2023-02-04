# -*- coding: utf-8 -*-
# @Time    : 2022/12/29 22:13
# @Author  : Ram.zhang
# @File    : gey.py
# @Software: PyCharm
import requests
import execjs

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.3 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 wechatdevtools/1.06.2210310 MicroMessenger/8.0.5 Language/zh_CN webview/',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://servicewechat.com/touristappid/devtools/page-frame.html',
}
P = "https://api.kaoyan.cn/wxxcx/school/queryByScore?feature=&limit=20&page=1&province_id=&score=390&spe_id=12&type=&uri="

signsafe = execjs.compile(open('sdk.js', 'r', encoding='utf-8').read()).call('signsafe', P)
print(f'signsafe: {signsafe}')
json_data = {
    'province_id': '',
    'spe_id': '12',
    'feature': '',
    'type': '',
    'score': '390',
    'limit': '20',
    'page': 1,
    'signsafe': signsafe,
}
response = requests.post('https://api.kaoyan.cn/wxxcx/school/queryByScore', headers=headers, json=json_data)
print(response.json())
