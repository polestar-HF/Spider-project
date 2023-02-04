# -*- coding: utf-8 -*-
# @Time    : 2022/3/5 16:21
# @Author  : Ram.zhang
# @File    : top_11.py
# @Software: PyCharm
import re
import execjs
import loguru
import requests
from lxml import etree


def get_top_11():
    sums = 0
    headers = {
        "authority": "www.python-spider.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "navigate",
        "sec-fetch-dest": "document",
        "referer": "https://www.python-spider.com/challenge/11",
        "accept-language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1646464967",
        "no-alert": "true",
        "sessionid": "msf2r01m9su1vh1u2bjt3hffig5rirp5",
        "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1646472746",
        "__jsl_clearance": "1646475956.392|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_96f4b7eba18f8eb57d2103f768cf221a3D"
    }
    url = "https://www.python-spider.com/challenge/11"
    response = requests.get(url, headers=headers, cookies=cookies)
    js_code = re.sub("<script>", '', response.text)
    js_code = re.sub("</script>", '', js_code)
    js_env = execjs.compile(open('env/jsl_env.js', 'r').read()).call('cookie', js_code)
    loguru.logger.debug(js_env)
    jsl_clearance = js_env.split(';')[0].replace('__jsl_clearance=', '')
    cookies['__jsl_clearance'] = jsl_clearance
    response = requests.get(url, headers=headers, cookies=cookies)
    data = etree.HTML(response.text)
    for value in data.xpath('//tr[@class="odd"]/td'):
        number = int(value.xpath('.//text()')[0].strip('\n\t'))
        sums += number
    print(sums)


if __name__ == '__main__':
    get_top_11()
