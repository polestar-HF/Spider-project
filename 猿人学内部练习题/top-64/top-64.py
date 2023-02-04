# -*- coding: utf-8 -*-
# @Time    : 2022/11/20 17:09
# @Author  : Ram.zhang
# @File    : top-64.py
# @Software: PyCharm
import zlib

import execjs
import websocket
import _thread
import time

websocket


def on_message(ws, message):
    print('message')
    print(message)


def on_error(ws, error):
    print('error')
    print(error)


def on_close(ws, close_status_code, close_msg):
    print("### closed ###")


def on_open(ws):
    print("Opened connection")


# header = {
#     "Accept-Encoding": "gzip, deflate, br",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Cache-Control": "no-cache",
#     "Connection": "Upgrade",
#     "Host": "www.python-spider.com",
#     "Origin": "https://www.python-spider.com",
#     "Pragma": "no-cache",
#     "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
#     "Sec-WebSocket-Key": "3/BhN4Xt+qFQGJx7u8puKQ==",
#     "Sec-WebSocket-Version": '13',
#     "Upgrade": "websocket",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
# }
# cookie = {
#     "sessionid": "zkta57t6w2kv7ryqrhxfe01zwic5j8vx"
# }
cookie = 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1666429562,1668873942,1668934796; no-alert=true; sessionid=4amkjy83cn8egtdr8a69umxfunaobr1f'

header = [
    "Accept-Encoding: gzip, deflate, br",
    "Accept-Language: zh-CN,zh;q=0.9",
    "Cache-Control: no-cache",
    "Connection: Upgrade",
    "Host: www.python-spider.com",
    "Origin: https://www.python-spider.com",
    "Pragma: no-cache",
    "Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits",
    # "Sec-WebSocket-Key: RCUIUFHURShDfQ8HjbEQ6A==",
    "Sec-WebSocket-Version: 13",
    "Upgrade: websocket",
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
]
if __name__ == "__main__":
    websocket.enableTrace(True)
    # ws = websocket.WebSocketApp("wss://www.python-spider.com/api/challenge64/1", header=header, cookie=cookie,
    #                             on_open=on_open,
    #                             on_message=on_message,
    #                             on_error=on_error,
    #                             on_close=on_close)
    # ws.run_forever()
    # ws = websocket.create_connection(url="wss://www.python-spider.com/api/challenge64", header=header, cookie=cookie)
    #
    # nn = ws.send('1')
    # content_compress = ws.recv()
    # content = zlib.decompress(content_compress, -zlib.MAX_WBITS)
    # print(content)
    js_code = open('decode_result.js', 'r', encoding='utf-8').read()
    ws = websocket.WebSocket()
    ws.connect('wss://www.python-spider.com/api/challenge64', origin='https://www.python-spider.com',
               host='www.python-spider.com', cookie=cookie)
    print(ws.headers)

    ws.send("4")
    msg = ws.recv()
    print(list(msg))
    result = execjs.compile(js_code).call('decode', list(msg))
    print(result)
