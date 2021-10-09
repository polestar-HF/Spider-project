import hashlib
import base64
import time
import requests


def token(page):
    arguments = "/api/movie"  # api接口

    offset = str(page)  # 页码 * 10

    t = str(int(time.time()))  # 当前时间戳

    o = [arguments, offset, t]

    n = hashlib.sha1(','.join(o).encode()).hexdigest()

    c = base64.b64encode(','.join([n, t]).encode()).decode()
    return c


def get_spa2(page_count=10):

    cookies = {
        'UM_distinctid': '17c6553aa74386-0708f0cc1f9109-4343363-144000-17c6553aa7512b',
    }

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://spa2.scrape.center/page/2',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    url = 'https://spa2.scrape.center/api/movie/'
    for page in range(page_count):
        params = (
            ('limit', '10'),
            ('offset', page * 10),
            ('token', token(page * 10)),
        )

        response = requests.get(url, headers=headers, params=params, cookies=cookies).json()
        data_lsit = response.get('results')
        for data in data_lsit:
            yield {
                "id": data.get('id'),
                "name": data.get('name'),
                "alias": data.get('alias'),
                "categories": data.get('categories'),
                "published_at": data.get('published_at'),
                "minute": data.get('minute'),
                "score": data.get('score'),
                "regions": data.get('regions')
            }


if __name__ == "__main__":
    for y in get_spa2():
        print(y)
