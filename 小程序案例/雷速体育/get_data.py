# -*- coding: utf-8 -*-
# @Time    : 2022/12/27 17:12
# @Author  : Ram.zhang
# @File    : get_data.py
# @Software: PyCharm
import execjs
import requests

auth_key = execjs.compile(open('sdk.js', 'r', encoding='utf-8').read()).call('encode', '/v1/mobile/match/basketball/match_live')
# auth_key = execjs.compile(open('sdk.js', 'r', encoding='utf-8').read()).call('encode', '/v1/mobile/match/database/basketball/comp_info')
print(f'auth_key: {auth_key}')

url = f'https://mobile-gateway.leisu.com/v1/mobile/match/basketball/match_live?auth_key={auth_key}'
# url = f'https://mobile-gateway.leisu.com/v1/mobile/match/database/basketball/comp_info?auth_key={auth_key}&comp_id=3&season_id=1468'
headers = {
    'Host': 'mobile-gateway.leisu.com',
    'Connection': 'keep-alive',
    'Accept': 'application/json, text/plain, */*',
    'source': 'm_wechat',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF',
    'token': 'null',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://m.leisu.com/live/lanqiu',
    'Accept-Language': 'en-us,en',
    'Cookie': 'cna=223b3ed832a041be9aba329024fdb11b',
    'Accept-Encoding': 'gzip, deflate'
}

response = requests.get(url, headers=headers)
print(f'响应数据: {response.json()["data"]}')

result = execjs.compile(open('decode.js', 'r', encoding='utf-8').read()).call('decode', response.json()['data'], response.json()['code'] - 100)
print(f'解密数据: {result}')

