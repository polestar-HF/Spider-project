# -*- coding: utf-8 -*-
# @Time    : 2022/6/3 18:50
# @Author  : Ram.zhang
# @File    : top_7.py
# @Software: PyCharm
import base64
from xml.dom.minidom import parse
import requests
from fontTools.ttLib import TTFont

"""
数字映射表
此映射表是取每位数字的坐标（TTGlyph.contour.pt）的 前十位 on数值做为映射
参考文章：https://syjun.vip/archives/283.html
"""

map_table = {
    '1010010010': 0,
    '1001101111': 1,
    '1001101010': 2,
    '1010110010': 3,
    '1111111111': 4,
    '1110101001': 5,
    '1010101010': 6,
    '1111111': 7,
    '1010101011': 8,
    '1001010100': 9
}

shuju = []


def get_page(num):
    headers = {
        "authority": "match.yuanrenxue.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://match.yuanrenxue.com/match/7",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "yuanrenxue.project",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1654240600",
        "no-alert3": "true",
        "tk": "-4369254598819441807",
        "sessionid": "rkyw0ibpivmsgxmpj9b9blm375c5usew",
        "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1654253142"
    }
    url = "https://match.yuanrenxue.com/api/match/7"
    params = {
        "page": str(num)
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()
    woff = response.get('woff')
    data = response.get('data')
    # print(data)
    with open('woff/yuanrenxue_7.woff', 'wb') as wf:
        # 写入二进制数据, 响应数据为base64, 先解码, 再写入
        wf.write(base64.b64decode(woff))
    wf.close()
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
    number_dist = {}
    font = TTFont('woff/yuanrenxue_7.woff')
    font.saveXML('woff/yuanrenxue_7.xml')
    # 获取已排序的编码列表 --> 注意事项: 已排列顺序为：[1,2,3,4,5,6,7,8,9,0]
    xml_file = parse('woff/yuanrenxue_7.xml')
    # 获取dom结构树
    xml_data = xml_file.documentElement
    # 获取数字1-9的坐标
    ttglyph_list = xml_data.getElementsByTagName('TTGlyph')[1:]
    # 遍历每个坐标, 获取数字编码和on值
    for TTGlyph in ttglyph_list:
        # 获取节点的属性值(数字编码)
        name = TTGlyph.getAttribute('name')[3:]
        pt = TTGlyph.getElementsByTagName('pt')
        num = ''
        # 只取前10个on值, 不足10个就取全部
        if len(pt) > 10:
            for v in range(10):
                num += pt[v].getAttribute('on')
            print(name, num)
            # 生成映射表
            number_dist[name] = map_table[num]
        else:
            for v in range(len(pt)):
                num += pt[v].getAttribute('on')
            print(name, num)
            number_dist[name] = map_table[num]
    print(f'映射表：{number_dist}')
    return number_dist


if __name__ == '__main__':
    for page in range(1, 6):
        get_page(page)
    print(f'最大战力：{max(shuju)}')
