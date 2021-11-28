# -*- coding: utf-8 -*-
# @Time    : 2021/10/27 21:51
# @Author  : Ram.zhang
# @File    : spa7.py
# @Software: PyCharm
import requests
import re


def get_spa7():
    url = "https://spa7.scrape.center/js/main.js"

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Dest': 'script',
        'Referer': 'https://spa7.scrape.center/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': 'UM_distinctid=17c3fb7f30c45-0fa515fb751b75-4343363-144000-17c3fb7f30d354'
    }

    response = requests.request("GET", url, headers=headers).text

    rel = re.compile("name: '(.*?)'.*?image: '(.*?)'.*?birthday: '(.*?)'.*?height: '(.*?)'.*?weight: '(.*?)'", re.S)

    nba_info_list = re.findall(rel, response)

    for name, image, birthday, height, weight in nba_info_list:
        yield {
            "name": name,
            "image": f'https://spa7.scrape.center/img/{image}',
            "birthday": birthday,
            "height": height,
            "weight": weight
        }


if __name__ == '__main__':
    for i in get_spa7():
        print(i)
