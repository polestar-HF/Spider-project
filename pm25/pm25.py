# -*- coding: utf-8 -*-
# @Time    : 2021/12/1 17:28
# @Author  : Ram.zhang
# @File    : pm25.py
# @Software: PyCharm
import base64
import hashlib
import json
import re
import time
import requests
import execjs

session = requests.session()


def des_js(js_str):
    keys = re.findall(f'DES\.encrypt\((\w+)\s?,\s?(\w+)\s?,\s?(\w+)\)', js_str)
    text_name, key_name, iv_name = keys[0]
    key = re.findall(f'const\s+?{key_name}\s+?=.*?"(.*?)"', js_str)[0]
    iv = re.findall(f'const\s+?{iv_name}\s+?=.*?"(.*?)"', js_str)[0]
    appid_name = re.findall("appId:.*?(\w+),", js_str)[0]
    appId = re.findall(f"var\s?{appid_name}\s?=.*?'(.*?)'", js_str)[0]
    param_name = re.findall("data:\s?\{\s?(\w+):.*?}", js_str)[0]

    des_keys = re.findall(f'DES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    des_dec_key_name, des_dec_iv_name = des_keys[0]

    des_dec_key = re.findall(f'const\s+?{des_dec_key_name}\s+?=.*?"(.*?)"', js_str)[0]
    des_dec_iv = re.findall(f'const\s+?{des_dec_iv_name}\s+?=.*?"(.*?)"', js_str)[0]

    aes_keys = re.findall(f'AES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    aes_dec_key_name, aes_dec_iv_name = aes_keys[0]
    aes_dec_key = re.findall(f'const\s+?{aes_dec_key_name}\s+?=.*?"(.*?)"', js_str)[0]
    aes_dec_iv = re.findall(f'const\s+?{aes_dec_iv_name}\s+?=.*?"(.*?)"', js_str)[0]

    method = "GETDAYDATA"
    obj = {"city": "深圳", "month": '202110'}
    timestamp = int(time.time() * 1000)
    clienttype = 'WEB'
    form_data = {
        "appId": appId,
        "method": method,
        "timestamp": timestamp,
        "clienttype": clienttype,
        "object": obj,
        "secret": hashlib.md5(
            f'{appId}{method}{timestamp}{clienttype}{str(obj)}'.replace("'", '"').replace(' ', '').encode(
                'utf-8')).hexdigest()
    }

    base64_d = base64.b64encode(str(form_data).replace("'", '"').replace(' ', '').encode('utf-8')).decode('utf-8')

    result = js.call("des_encrypt", base64_d, key, iv)
    data = {param_name: result}

    url = "https://www.aqistudy.cn/historydata/api/historyapi.php"

    resp = requests.post(url=url, headers=headers, data=data)

    dec_data = js.call('dec_func', resp.text, des_dec_key, des_dec_iv, aes_dec_key, aes_dec_iv)
    print(json.loads(dec_data))


def aes_js(js_str):
    keys = re.findall(f'AES\.encrypt\((\w+)\s?,\s?(\w+)\s?,\s?(\w+)\)', js_str)
    text_name, key_name, iv_name = keys[1]
    key = re.findall(f'const\s+?{key_name}\s+?=.*?"(.*?)"', js_str)[0]
    iv = re.findall(f'const\s+?{iv_name}\s+?=.*?"(.*?)"', js_str)[0]
    appid_name = re.findall("appId:.*?(\w+),", js_str)[0]
    appId = re.findall(f"var\s?{appid_name}\s?=.*?'(.*?)'", js_str)[0]
    param_name = re.findall("data:\s?\{\s?(\w+):.*?}", js_str)[0]

    des_keys = re.findall(f'DES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    des_dec_key_name, des_dec_iv_name = des_keys[0]

    des_dec_key = re.findall(f'const\s+?{des_dec_key_name}\s+?=.*?"(.*?)"', js_str)[0]
    des_dec_iv = re.findall(f'const\s+?{des_dec_iv_name}\s+?=.*?"(.*?)"', js_str)[0]

    aes_keys = re.findall(f'AES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    aes_dec_key_name, aes_dec_iv_name = aes_keys[0]
    aes_dec_key = re.findall(f'const\s+?{aes_dec_key_name}\s+?=.*?"(.*?)"', js_str)[0]
    aes_dec_iv = re.findall(f'const\s+?{aes_dec_iv_name}\s+?=.*?"(.*?)"', js_str)[0]

    method = "GETDAYDATA"
    obj = {"city": "深圳", "month": '202110'}
    timestamp = int(time.time() * 1000)
    clienttype = 'WEB'
    form_data = {
        "appId": appId,
        "method": method,
        "timestamp": timestamp,
        "clienttype": clienttype,
        "object": obj,
        "secret": hashlib.md5(
            f'{appId}{method}{timestamp}{clienttype}{str(obj)}'.replace("'", '"').replace(' ', '').encode(
                'utf-8')).hexdigest()
    }

    base64_d = base64.b64encode(str(form_data).replace("'", '"').replace(' ', '').encode('utf-8')).decode('utf-8')

    result = js.call("aes_encrypt", base64_d, key, iv)
    data = {param_name: result}

    url = "https://www.aqistudy.cn/historydata/api/historyapi.php"

    resp = requests.post(url=url, headers=headers, data=data)

    dec_data = js.call('dec_func', resp.text, des_dec_key, des_dec_iv, aes_dec_key, aes_dec_iv)
    print(json.loads(dec_data))


def bs64_js(js_str):
    appid_name = re.findall("appId:.*?(\w+),", js_str)[0]
    appId = re.findall(f"var\s?{appid_name}\s?=.*?'(.*?)'", js_str)[0]
    param_name = re.findall("data:\s?\{\s?(\w+):.*?}", js_str)[0]

    method = "GETDAYDATA"
    obj = {"city": "深圳", "month": '202110'}
    timestamp = int(time.time() * 1000)
    clienttype = 'WEB'
    form_data = {
        "appId": appId,
        "method": method,
        "timestamp": timestamp,
        "clienttype": clienttype,
        "object": obj,
        "secret": hashlib.md5(
            f'{appId}{method}{timestamp}{clienttype}{str(obj)}'.replace("'", '"').replace(' ', '').encode(
                'utf-8')).hexdigest()
    }

    base64_d = base64.b64encode(str(form_data).replace("'", '"').replace(' ', '').encode('utf-8')).decode('utf-8')

    data = {param_name: base64_d}

    url = "https://www.aqistudy.cn/historydata/api/historyapi.php"

    resp = requests.post(url=url, headers=headers, data=data)

    des_keys = re.findall(f'DES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    des_dec_key_name, des_dec_iv_name = des_keys[0]

    des_dec_key = re.findall(f'const\s+?{des_dec_key_name}\s?=.*?"(.*?)"', js_str)[0]
    des_dec_iv = re.findall(f'const\s+?{des_dec_iv_name}\s?=.*?"(.*?)"', js_str)[0]

    aes_keys = re.findall(f'AES\.decrypt\(data,\s?(\w+),\s?(\w+)\);', js_str)
    aes_dec_key_name, aes_dec_iv_name = aes_keys[0]
    aes_dec_key = re.findall(f'const\s+?{aes_dec_key_name}\s?=.*?"(.*?)"', js_str)[0]
    aes_dec_iv = re.findall(f'const\s+?{aes_dec_iv_name}\s?=.*?"(.*?)"', js_str)[0]

    dec_data = js.call('dec_func', resp.text, des_dec_key, des_dec_iv, aes_dec_key, aes_dec_iv)
    print(json.loads(dec_data))


if __name__ == '__main__':
    cookies = {
        'UM_distinctid': '17d74a2915f9f6-06a91b14957c36-978183a-13c680-17d74a2916010f1',
        'CNZZDATA5808503': 'cnzz_eid%3D1398768077-1638330651-%26ntime%3D1638341455',
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    params = (
        ('city', '深圳'),
    )
    url = 'https://www.aqistudy.cn/historydata/monthdata.php'
    response = session.get(url, headers=headers, params=params, cookies=cookies)
    if response.status_code == 200:
        env_code = open('decrypt_code.js', 'r').read()
        link = 'https://www.aqistudy.cn/historydata/'
        resource_url = link + re.findall(r'src="(resource/js/.*?.min.js\?t=\d+)">', response.text)[0]
        code = session.get(resource_url, headers=headers).text[5:-2]
        js_code = env_code.replace('jscode_pattern', code)
        js = execjs.compile(js_code)
        res = js.call("get_full_js", code)
        type_len = len(re.findall("dweklxde", res))
        base64_str = re.findall("'(.*?)'", res)[0]
        if type_len == 2:
            target_js = base64.b64decode(base64.b64decode(base64_str)).decode('utf-8')
            des_js(js_str=target_js)
        elif type_len == 1:
            target_js = base64.b64decode(base64_str).decode('utf-8')
            aes_js(js_str=target_js)
        elif type_len == 0:
            bs64_js(js_str=res)
