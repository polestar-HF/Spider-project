# -*- coding: utf-8 -*-
# @Time    : 2021/10/16 21:28
# @Author  : Ram.zhang
# @File    : Yty_fanyi.py
# @Software: PyCharm
"""
有道云翻译的接口加密参数
salt, sign, lts
"""
import random
import hashlib
import time
import execjs
import requests


def js_param(title):
    # nodejs 生成参数
    return execjs.compile(open('fanyi.js', 'r', encoding='utf-8').read()).call("param", title)


def salt_lts():
    # return execjs.compile(open('fanyi.js', 'r', encoding='utf-8').read()).call('param')
    lts = str(int(time.time()))
    salt = lts + str(int(10 * random.random()))
    return salt, lts


def sign(e, i):
    # 踩坑 --> 用f-string表达式忘记将 + 号去掉, 所以加密的结果不对
    # f"fanyideskweb + {e} + {i} + Y2FYu%TNSbMCxc3t2u^XT" == 'fanyideskweb + km + 16343881320998 + Y2FYu%TNSbMCxc3t2u^XT'
    return hashlib.md5(f"fanyideskweb{e}{i}Y2FYu%TNSbMCxc3t2u^XT".encode()).hexdigest()


def fanyi_result(titie):
    cookies = {
        'OUTFOX_SEARCH_USER_ID': '1091710047@220.172.169.39',
        'OUTFOX_SEARCH_USER_ID_NCOO': '1408672578.170638',
        'wap_abtest': '5',
        'mp_MA-BF02-71D44E7C0390_hubble': '%7B%22sessionReferrer%22%3A%20%22https%3A%2F%2Fc.youdao.com%2Fxue%2Factivity%2Fyljywfst.html%3FoutVendor%3Dzw_sdk_dlad_yljyw0_waibu_dic_pc_chaciye_pink_0806_56b11afd-357e-4392-8228-c8dd659a9e42_284210%22%2C%22updatedTime%22%3A%201596941129614%2C%22sessionStartTime%22%3A%201596941129604%2C%22sendNumClass%22%3A%20%7B%22allNum%22%3A%200%2C%22errSendNum%22%3A%200%7D%2C%22deviceUdid%22%3A%20%226798f383-da96-4108-8c56-a9c69673f359%22%2C%22persistedTime%22%3A%201596941129597%2C%22LASTEVENT%22%3A%20%7B%22eventId%22%3A%20%22da_screen%22%2C%22time%22%3A%201596941129615%7D%2C%22sessionUuid%22%3A%20%225d35499d-bff3-4be6-b13e-6c91dc538a85%22%7D',
        'JSESSIONID': 'aaaPiUtRDmhY842c0JiYx',
        '___rl__test__cookies': '1634381241222',
    }

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://fanyi.youdao.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://fanyi.youdao.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    salt, lts = salt_lts()
    data = {
        'i': titie,
        'from': 'AUTO',
        'to': 'AUTO',
        'smartresult': 'dict',
        'client': 'fanyideskweb',
        'salt': salt,
        'sign': sign(titie, salt),
        'lts': lts,
        'bv': 'eda468fc64295ecf2810ab8a672c2db1',
        'doctype': 'json',
        'version': '2.1',
        'keyfrom': 'fanyi.web',
        'action': 'FY_BY_REALTlME'
    }
    url = 'https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    print(response.json())


if __name__ == '__main__':
    fanyi_result(titie='result')
