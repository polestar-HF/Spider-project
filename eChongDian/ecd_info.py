# -*- coding: utf-8 -*-
# @Time    : 2021/11/10 17:39
# @Author  : Ram.zhang
# @File    : ecd_info.py
# @Software: PyCharm
import json
import math
import random
import hashlib
import requests
import execjs


def encode_data(ids):
    """
    加密 post 请求参数 data
    :param ids: 站点id信息
    :return: data参数
    """
    key = 'F29E0E39-98E4-F4CC318443'
    data = execjs.compile(open('decode_resp.js', 'r', encoding='utf-8').read()).call('encryptByOriginalWay', ids, key)
    return data


def decode_response(response):
    """
    解密响应数据
    :param response: 响应
    :return: 解密结果
    """
    result = execjs.compile(open('decode_resp.js', 'r', encoding='utf-8').read()).call('decodeData', response)
    return result


def get_info(ids):
    def sign():
        secret_key = "a89b491d62090a65319864aa68ae2151"
        authnonce = str(math.floor(random.random() * 900000 + 100000))
        sign_str = f'{secret_key}{authnonce}'
        return hashlib.md5(sign_str.encode()).hexdigest()

    url = "http://www.echargenet.com/station/info"

    payload = encode_data(ids)
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'X-KL-Ajax-Request': 'Ajax_Request',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'authnonce': '732716',
        'token': '2142315q2312ewqeq',
        'sign': sign(),
        'Origin': 'http://www.echargenet.com',
        'Referer': 'http://www.echargenet.com/views/mapService/map/getLocation.html?isfromCollection=0',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': 'Hm_lvt_859c35431799473d787913f6309cf1e6=1636518951; Hm_lpvt_859c35431799473d787913f6309cf1e6=1636518951; Hm_lvt_c124a5b84284958ac93267d0a70bda14=1636518951; Hm_lpvt_c124a5b84284958ac93267d0a70bda14=1636518951; JSESSIONID=137E12C94E20955BCECF9954B8F7408A; JSESSIONID=8A513976E547120BC6AEBC5FA09C7678'
    }

    response = requests.request("POST", url, headers=headers, data=payload).json()
    resp = response.get('data')
    result = json.loads(decode_response(resp))
    print(result)


if __name__ == '__main__':
    test = '{"id":"9dbf4c6e-9d6d-418c-8556-c301ec38cdc4"}'
    get_info(test)
