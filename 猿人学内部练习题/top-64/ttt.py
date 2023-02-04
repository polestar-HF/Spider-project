# -*- coding: utf-8 -*-
# @Time    : 2022/12/3 12:26
# @Author  : Ram.zhang
# @File    : ttt.py
# @Software: PyCharm
# !/usr/bin/env python

# WS client example

import asyncio

import execjs
import websockets

js_code = open('decode_result.js', 'r', encoding='utf-8').read()
header = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "Upgrade",
    "Host": "www.python-spider.com",
    "Origin": "https://www.python-spider.com",
    "Pragma": "no-cache",
    "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
    "Sec-WebSocket-Key": "3/BhN4Xt+qFQGJx7u8puKQ==",
    "Sec-WebSocket-Version": '13',
    "Upgrade": "websocket",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
}

count = 0

"""
此题需要修改websockets源码, 固定请求头headers顺序
修改源码位置client.py文件里 119行, 搜索# Since the path and headers only contain ASCII characters可快速到达


为什么需要固定请求头(headers)顺序才能请求成功？
通过fd抓包对比python发送的请求与浏览器的请求对比可以看出headers的顺序不一样，再加上本题没有加密参数，所以推断检测了请求头顺序
"""

# request = f"""GET wss://www.python-spider.com/api/challenge64 HTTP/1.1
# Host: www.python-spider.com
# Connection: Upgrade
# Pragma: no-cache
# Cache-Control: no-cache
# User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36
# Upgrade: websocket
# Origin: https://www.python-spider.com
# Sec-WebSocket-Version: 13
# Accept-Encoding: gzip, deflate, br
# Accept-Language: zh-CN,zh;q=0.9
# Cookie: no-alert=true; sessionid=1p73alc3yjyvn2p05t4ymcjb5ykibxxk
# Sec-WebSocket-Key: {headers['Sec-WebSocket-Key']}
# Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits""".replace('\n', '\r\n') + '\r\n\r\n'


async def getData():
    global count
    uri = 'wss://www.python-spider.com/api/challenge64'
    async with websockets.connect(uri) as websocket:
        # print(websocket.header)
        # name = input("What's your name? ")
        # page = '100'
        for page in range(1, 101):
            await websocket.send(str(page))
            greeting = await websocket.recv()
            print(f"< {greeting}")
            result = execjs.compile(js_code).call('decode', list(greeting))
            for data in result:
                count += int(data['value'])
            print(f"> {page} > {count}")


# async def main():
#     background_tasks = set()
#     for i in range(1, 101):
#         task = asyncio.create_task(hello(page=i))
#         background_tasks.add(task)
#     await asyncio.wait(background_tasks)
# asyncio.get_event_loop().run_until_complete(hello(1))
# asyncio.run(main())
asyncio.get_event_loop().run_until_complete(getData())
