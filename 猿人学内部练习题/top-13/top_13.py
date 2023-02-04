# -*- coding: utf-8 -*-
# @Time    : 2022/6/3 16:10
# @Author  : Ram.zhang
# @File    : top_13.py
# @Software: PyCharm
import base64
import time

from fontTools.ttLib import TTFont

import requests

shuju = []


def get_page(num):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "pragma": "no-cache",
        "referer": "https://www.python-spider.com/challenge/13",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654240663",
        "sessionid": "is9ndj8x45p47tj9i2urkybfno6cjy62",
        "no-alert": "true",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1654240684"
    }
    url = "https://www.python-spider.com/api/challenge13"
    data = {
        "page": str(num)
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    woff = response.get('woff')
    data = response.get('data')
    # print(woff)
    with open('woff/yuanrenxue_13.woff', 'wb') as wf:
        wf.write(base64.b64decode(woff))
    wf.close()
    # 获取数字映射表
    number_table = parse_woff()
    # 还原数据
    for n in data:
        number_code = n.get('value').split(' ')
        value = ''
        for i in number_code[:-1]:
            value += str(number_table[i.replace('&#x', '')])
        shuju.append(int(value))
    print(f'第{num}页采集完成。。。')


def parse_woff():
    map_table = {}
    # 加载字体文件
    font = TTFont('woff/yuanrenxue_13.woff')
    # 将字体文件保存为xml文件
    font.saveXML('woff/yuanrenxue_13.xml')
    # 获取已排序的编码列表 --> 注意事项: 已排列顺序为：[1,2,3,4,5,6,7,8,9,0]
    number_list = font.get('post').__dict__['extraNames']
    print(f'数字编码：{number_list}')
    map_table[number_list[-1].replace('uni', '')] = 0
    for index, value in enumerate(number_list[:-1], start=1):
        map_table[value.replace('uni', '')] = index
    print(f'映射表：{map_table}')
    return map_table


if __name__ == '__main__':
    for page in range(1, 101):
        get_page(page)
    print(f'100页数据总和：{sum(shuju)}')
