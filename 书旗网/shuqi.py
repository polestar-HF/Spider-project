# -*- coding: utf-8 -*-
# @Time    : 2021/10/31 16:03
# @Author  : Ram.zhang
# @File    : shuqi.py
# @Software: PyCharm
import re
import execjs
import requests

'''
踩坑：刚开始我以为下面的 sign 参数是js生成的, 一直找不到 sign 生成的地方
     结果在源代码里发现了, 是我想复杂了, 还是要多看源码
bookId: 6813923    书籍id
chapterId: 674177  不同章节id
ut: 1472714703     固定不变
num: 1             固定不变
ver: 1             固定不变
aut: 1621581878    固定不变
sign: 3bc6839ed6d0899bf043029daf19c5a7   自写加密
'''


def get_chapter_url(url):
    # 书旗网小说, 只能采集前20章小说, 后续章节需要付费
    headers = {
        'authority': 'www.shuqi.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'EGG_SESS=40mjvpBzsUcr2XYv9016DaDMD4qbYvpJbtjChjiH-Brr9_7OGmH5p0w2Q1_WbFkosRp0vSUwtwH0LRLb4-FNHFDD-DKWL1DsH2WVxDM6khQ=; cna=YZoAF3AyUjcCAWptCM7/32JL; xlly_s=1; isg=BJSUQaN5iTnPMx31l8ahrAzVZdIG7bjXFySoLi51_J_wGTdjVv6MZ-bbHRGB5vAv'
    }

    response = requests.get(url, headers=headers).text
    rl = 'contUrlSuffix&quot;:&quot;\?bookId=(\d+)&amp;chapterId=(\d+)&amp;ut=(\d+)&amp;num=(\d+)&amp;ver=(\d+)&amp;aut=(\d+)&amp;sign=(.*?)&quot;,&quot;shelf'
    rel = re.compile(rl, re.S)
    return re.findall(rel, response)


def parse_fiction(params_tuple: tuple):
    headers = {
        'authority': 'c13.shuqireader.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'accept': '*/*',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.shuqi.com',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.shuqi.com/',
        'accept-language': 'zh-CN,zh;q=0.9',
    }

    params = (
        ('bookId', params_tuple[0]),
        ('chapterId', params_tuple[1]),
        ('ut', params_tuple[2]),
        ('num', params_tuple[3]),
        ('ver', params_tuple[4]),
        ('aut', params_tuple[5]),
        ('sign', params_tuple[6]),
    )
    url = 'https://c13.shuqireader.com/pcapi/chapter/contentfree/'
    response = requests.get(url, headers=headers, params=params).json()
    chapter_content = response.get('ChapterContent')
    # print(decode_text(chapter_content)) # Bug
    nodeserve_parse_text(chapter_content)


def nodeserve_parse_text(content):
    # 开启本地node服务, 访问接口运行js代码
    # 传入响应的content，获取解析后的小说
    data = {
        "content": content
    }
    resp = requests.post('http://127.0.0.1:8919/decode_text', data=data).json()
    print(resp)


def decode_text(content):
    # 使用 execjs 运行js代码一直会报错, 还未找到原因, 所以采用node服务运行js：
    # UnicodeDecodeError: 'gbk' codec can't decode byte 0x80 in position 2: illegal multibyte sequence  不是编码问题
    return execjs.compile(open('decode_text.js', 'r', encoding='utf-8').read()).call('parseText', content)


if __name__ == '__main__':
    # url = "https://www.shuqi.com/reader?bid=6813923&cid=674175"
    book_url = 'https://www.shuqi.com/reader?bid=7697279&cid=1016412'
    for param in get_chapter_url(book_url):
        parse_fiction(param)
