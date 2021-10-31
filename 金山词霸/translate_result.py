# -*- coding: utf-8 -*-
# @Time    : 2021/10/29 15:41
# @Author  : Ram.zhang
# @File    : translate_result.py
# @Software: PyCharm
import hashlib
import requests
import time
import execjs

'''
金山词霸翻译接口
网址：aHR0cDovL3d3dy5pY2liYS5jb20v

参数：
  client = 6            固定不变
  key = 1000006         固定不变
  timestamp = 时间戳     固定不变
  word = 需要翻译的字段    固定不变
  signature = md5(/dictionary/word/query/web + client + key + timestamp + word + 7ece94d9f9c202b0d2ec557dg4r9bc)
'''


def js_signature(timestamp, word):
    # js 生成 signature 参数
    # 踩坑：如果js使用 crypto 进行MD5加密, execjs 调用运行时会报错, 使用 crypto-js 进行MD5加密，则是正常
    return execjs.compile(open('fanyi.js', 'r', encoding='utf-8').read()).call('signature', timestamp, word)


def signature(timestamp, word):
    # python 生成 signature 参数
    params = f'/dictionary/word/query/web61000006{timestamp}{word}7ece94d9f9c202b0d2ec557dg4r9bc'
    return hashlib.md5(params.encode()).hexdigest()


def get_data(word: str):
    headers = {
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'Origin': 'http://www.iciba.com',
        'Referer': 'http://www.iciba.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    timestamp = str(int(time.time() * 1000))
    params = (
        ('client', '6'),
        ('key', '1000006'),
        ('timestamp', timestamp),
        ('word', word),
        ('signature', signature(timestamp, word)),
    )
    url = 'http://dict.iciba.com/dictionary/word/query/web'

    response = requests.get(url, headers=headers, params=params)
    print(response.json())


if __name__ == '__main__':
    get_data('pass')
