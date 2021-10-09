# -*- coding: utf-8 -*-
# @Time    : 2021/10/8 16:55
# @Author  : Ram.zhang
# @File    : ssr1.py
# @Software: PyCharm
import requests
from lxml import etree


def get_ssr1(page_count=10):
    cookies = {
        'UM_distinctid': '17c5f1ae744c72-037b0aa7fe837c-b7a1b38-13c680-17c5f1ae745f90',
    }

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://ssr1.scrape.center/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    for page in range(1, page_count + 1):
        response = requests.get(f'https://ssr1.scrape.center/page/{page}', headers=headers, cookies=cookies)
        resp = etree.HTML(response.text)
        data_list = resp.xpath('//div[@class="el-col el-col-18 el-col-offset-3"]/div')
        for data in data_list:
            name = data.xpath('.//h2[@class="m-b-sm"]/text()')[0]
            score = data.xpath('.//p[@class="score m-t-md m-b-n-sm"]/text()')[0].strip('\n').replace(' ', '')
            tag = data.xpath('.//button/span/text()')
            site = data.xpath('.//div[@class="m-v-sm info"]/span[1]/text()')[0]
            duration = data.xpath('.//div[@class="m-v-sm info"]/span[3]/text()')[0]
            if data.xpath('.//div[@class="m-v-sm info"][2]/span/text()'):
                release_date = data.xpath('.//div[@class="m-v-sm info"][2]/span/text()')[0].replace(' 上映', '')
            else:
                release_date = ''
            yield {
                "name": name,
                "score": score,
                "tag": tag,
                "site": site,
                "duration": duration,
                "release_date": release_date
            }


if __name__ == '__main__':
    for data in get_ssr1():
        print(data)
