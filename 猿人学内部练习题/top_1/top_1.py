import time
import requests
import hashlib
import base64
from loguru import logger

count = 0


def get_data(page):
    global count
    # 时间戳
    timestamp = int(time.time())
    # safe参数是由9622 + 时间戳; 进行base64编码再进行MD5加密
    safe = hashlib.md5(base64.b64encode(f'9622{timestamp}'.encode())).hexdigest()
    headers = {
        'authority': 'www.python-spider.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'timestamp': f'{timestamp}',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-platform': '"Windows"',
        'safe': safe,
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/1',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1646312099; no-alert=true; sessionid=3eixwuqovxcpotiahq2pa6o4amu5bxan; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1646312117',
    }

    params = (
        ('page', page),
        ('count', '14'),
    )
    response = requests.get('https://www.python-spider.com/challenge/api/json', headers=headers, params=params).json()

    for data in response.get('infos'):
        message = data.get('message')
        if '招' in message:
            count += 1
            logger.debug(data)


if __name__ == '__main__':
    for pg in range(1, 86):
        get_data(pg)
    logger.success(count)
