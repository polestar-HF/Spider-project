# -*- coding: utf-8 -*-
# @Time    : 2021/11/10 17:56
# @Author  : Ram.zhang
# @File    : ecd_simple.py
# @Software: PyCharm
import json
import time
import requests
import execjs
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["ECD"]
coll = db["ecd_simple"]
count = 0


def save_mongo(document):
    """
    tips：数据量 9065 条, 经测试逐条插入耗时 15.65s, 整批插入耗时 6.06s
    :param document: 数据
    :return: 存储结果
    """
    global count
    if isinstance(document, dict):
        coll.insert_one(document)
        count += 1
        print('success add one data')
    elif isinstance(document, list):
        coll.insert_many(document)
        count += len(document)
        print('success add list data')
    else:
        print('数据结构错误')


def decode_date(data):
    return execjs.compile(open('decode_resp.js', 'r', encoding='utf-8').read()).call('decodeData', data)


def get_result():
    cookies = {
        'Hm_lvt_859c35431799473d787913f6309cf1e6': '1635930530',
        'Hm_lvt_c124a5b84284958ac93267d0a70bda14': '1635930530',
        'Hm_lpvt_859c35431799473d787913f6309cf1e6': '1635941152',
        'Hm_lpvt_c124a5b84284958ac93267d0a70bda14': '1635941152',
        'JSESSIONID': '231941DFE4BC674036D87A2F7B06A19B',
    }

    headers = {
        'Proxy-Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'authnonce': '804754',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'token': '2142315q2312ewqeq',
        'sign': '11312685eba8f43f06b8fc0c1787f695',
        'Referer': 'http://www.echargenet.com/views/mapService/map/getLocation.html?isfromCollection=0',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    response = requests.get('http://www.echargenet.com/station/simple', headers=headers, cookies=cookies, verify=False)
    info_list = []
    if response.status_code == 200:
        data = response.json().get('data')
        result = json.loads(decode_date(data))
        for docu in result.get('data'):
            info = {
                "lng": docu.get('lng'),
                "id": docu.get('id'),
                "lat": docu.get('lat')
            }
            info_list.append(info)
            print(info)
        # save_mongo(info_list)


if __name__ == '__main__':
    start_time = time.time()
    get_result()
    print(f'成功添加{count}条数据')
    end_time = time.time()
    print(f'耗时：{end_time - start_time:.2f}s')
