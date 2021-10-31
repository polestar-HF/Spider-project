# -*- coding: utf-8 -*-
# @Time    : 2021/10/29 14:58
# @Author  : Ram.zhang
# @File    : fanyi.py
# @Software: PyCharm
import time
import requests
import hashlib

"""
金山词霸-释义接口
参数：
  word = 需要翻译的字段
  其他参数可以固定不变
"""


def signature(filed: str):
    timestamp = str(int(time.time() * 1000))
    params = f'/dictionary/word/query/web61000006{timestamp}{filed}7ece94d9f9c202b0d2ec557dg4r9bc'
    return hashlib.md5(params.encode()).hexdigest()


def get_result(word: str):
    headers = {
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'Origin': 'http://www.iciba.com',
        'Referer': 'http://www.iciba.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    params = (
        ('word', word),
        ('nums', '5'),
        ('ck', '709a0db45332167b0e2ce1868b84773e'),
        ('timestamp', '1635490033344'),
        ('client', '6'),
        ('uid', '123123'),
        ('key', '1000006'),
        ('is_need_mean', '1'),
        ('signature', 'e785b851ba728f3f26714adff9e8654e'),
    )
    url = 'http://dict.iciba.com/dictionary/word/suggestion'
    response = requests.get(url, headers=headers, params=params).json()

    result = response.get('message')[0].get('paraphrase')
    print(result)


if __name__ == '__main__':
    get_result('Ram')
