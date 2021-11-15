# -*- coding: utf-8 -*-
# @Time    : 2021/11/13 13:10
# @Author  : Ram.zhang
# @File    : get_response.py
# @Software: PyCharm
import requests
import execjs
import re
from lxml import etree

# cookie spvrscode字段加密，首先请求网页得到js代码, 补环境运行得到cookies字段
session = requests.session()


def get_result(url):
    def run_js_code(code, function):
        # 运行网页返回的代码, 获取cookie
        return execjs.compile(code).call(function)

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://www.youzhicai.com/sn2/15022E858978-A7C0-4D99-A602-967A31FB4828.html',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    response = session.get(url, headers=headers)
    if response.status_code == 203:
        print('获取cookie -->')
        js_code = re.compile('<script>(.*?)</script>', re.S)
        cookie_code = js_code.search(response.text).group(1)

        env = open('./env/env.js', 'r').read()
        run = open('./env/run.js', 'r').read()

        with open('./env/AllCode.js', 'w', ) as file:
            code = env + cookie_code + run
            file.write(code)
        file.close()

        cookie = run_js_code(code, 'getCookie')
        requests.utils.add_dict_to_cookiejar(session.cookies, {"spvrscode": cookie})

    resp = session.get(url)
    result = etree.HTML(resp.text)
    result_list = result.xpath('.//ul[@class="projects-list"]/li[@class="project-li clearfix"]')
    for info in result_list:
        title = info.xpath('./a[1]/@title')[0]
        details_url = 'https://www.youzhicai.com' + info.xpath('./a[1]/@href')[0]
        print(title, details_url)


if __name__ == '__main__':
    for page in range(1, 11):
        print(f'正在采集第{page}页')
        link = f'https://www.youzhicai.com/sn{page}/15022E858978-A7C0-4D99-A602-967A31FB4828.html'
        get_result(link)
