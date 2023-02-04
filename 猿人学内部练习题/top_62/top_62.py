import asyncio
from pyhttpx import WebSocketClient

number = 0


class WSS:
    def __init__(self, url=None, headers=None, loop=None):
        self.url = url
        self.headers = headers
        self.loop = loop
        self.ja3 = '771,19018-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,27242-29-23-24,0'

    async def connect(self):
        self.sock = await WebSocketClient(url=self.url, headers=self.headers, loop=self.loop, ja3=self.ja3).connect()

    async def send(self):
        page = 1
        while page:
            if self.sock.open:
                print('send', str(page))
                # 发送参数
                await self.sock.send(str(page), binary=True)
                await asyncio.sleep(0.5)
            if page == 100:
                break
            page += 1
        # 关闭连接
        await self.sock.close()
        print('关闭连接！！！')

    async def recv(self):
        global number
        while 1:
            # 接收响应（二进制数据）
            r = await self.sock.recv()
            print('recv', r)
            # 格式化数据并解析处理
            result = r.decode()
            if result != '666':
                data = eval(result)
                for n in data.get('data'):
                    number += int(n.get('value').replace('\r', ''))
                print(number)


def main():
    loop = asyncio.get_event_loop()
    url = 'wss://www.python-spider.com/api/challenge62'
    print(f'connect: {url}')
    headers = {
        'Connection': 'Upgrade',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'Upgrade': 'websocket',
        'Sec-WebSocket-Version': '13',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh,zh-CN;q=0.9,en;q=0.8',
        'Sec-WebSocket-Key': 'p1+bsFFmXixD+hk1CHG+3w==',
        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
        # 'Cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1668873942,1668934796,1670080955,1670136135; no-alert=true; sessionid=vd422hz98yz64yp8p1lykxnyf5dcu9s3'
    }

    wss = WSS(url, headers, loop)
    loop.run_until_complete(wss.connect())
    loop.create_task(wss.send())
    loop.create_task(wss.recv())
    loop.run_forever()


if __name__ == '__main__':
    main()
