# -*- coding: utf-8 -*-
# @Time    : 2022/3/8 22:28
# @Author  : Ram.zhang
# @File    : top_24.py
# @Software: PyCharm
import httpx
import loguru


# 本题难点：http2 请求网站
def get_top_24(page):
    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/24',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1646749411; no-alert=true; sessionid=r9ywfyduvnx4sjme57cz5l8umi3csn3o; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1646749590',
    }

    data = {
        'page': page
    }
    num = 0
    with httpx.Client(http2=True, headers=headers) as client:
        response = client.post('https://www.python-spider.com/api/challenge24', data=data).json()
        for data in response.get('data'):
            num += int(data.get('value').replace('\r', ''))
        loguru.logger.debug(num)
        return num


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += get_top_24(pg)
    loguru.logger.success(f'总和：{sums}')
