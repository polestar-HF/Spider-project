# -*- coding: utf-8 -*-
# @Time    : 2022/3/8 23:16
# @Author  : Ram.zhang
# @File    : top_34.py
# @Software: PyCharm
import re
import execjs
import requests
from loguru import logger

session = requests.session()


def get_top_34():
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654229510,1654316189,1654316648,1655014076",
        "no-alert": "true",
        "sessionid": "qdd03q6gvoq49964dp3abl4tiku323hk",
        "yuanrenxue34": "cDH3lkmgNf",
        "iloveu": "c02bfd0ebb8836d132be1f8270d6104d379c8e00"
    }
    headers = {
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Dest": "document",
        "Referer": "https://www.python-spider.com/challenge/34",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    proxies = {
        'http': '127.0.0.1:8888',
        'https': '127.0.0.1:8888',
    }
    response = requests.get('https://www.python-spider.com/challenge/34', headers=headers, cookies=cookies)
    js_code = re.search("var(.*?)</script>", response.text, re.S).group().replace('</script>', '')
    env = open('env.js', 'r').read()
    with open('cookie.js', 'w', encoding='utf-8') as file:
        code = js_code + env
        file.write(code)
    file.close()
    # 加密参数: yuanrenxue34这个参数是第一次请求的返会的set-cookie
    yuanrenxue34 = response.cookies.get('yuanrenxue34')
    iloveu = execjs.compile(open('cookie.js', 'r', encoding='utf-8').read()).call('sEnc', yuanrenxue34)
    cookies['yuanrenxue34'] = yuanrenxue34
    logger.info(f'yuanrenxue34: {yuanrenxue34}')
    cookies['iloveu'] = iloveu
    logger.info(f'iloveu: {iloveu}')
    response = requests.get('https://www.python-spider.com/challenge/34', cookies=cookies)
    value_list = re.findall(' <td class="info">(.*?)</td>', response.text, re.S)
    sums = sum([int(v.replace('\n', '').strip()) for v in value_list])
    logger.success(f'和：{sums}')


if __name__ == '__main__':
    get_top_34()
