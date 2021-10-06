import requests
from fake_useragent import UserAgent
import random
import time

DATA_LIST = []


def get_xmFM(page):
    """
    喜马拉雅
    模拟发起请求
    """
    url = 'https://mobile.ximalaya.com/mobile/v1/album/track/ts-1616939755368'
    headers = {
        "cookie": "_xmLog=xm_kc2ov0yodoqw33; Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070=1599029600",
        "referer": "https://mobile.ximalaya.com/mobile/v1/album/track/ts-1616939755368?albumId=12627033&device=android&isAsc=true&isQueryInvitationBrand=true&pageId=36&pageSize=20&pre_page=35",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
    }
    params = {
        "albumId": 12627033,
        "device": "android",
        "isAsc": "true",
        "isQueryInvitationBrand": "true",
        "pageId": page,
        "pageSize": 20,
        "pre_page": page - 1
    }
    html = requests.get(url=url, params=params, headers=headers, timeout=5)
    data_list = html.json()
    data = data_list['data']['list']
    for value in data:
        # 名称
        title = value['title']
        # 链接地址
        content_url = value['playPathAacv224']
        contents = {
            'title': title,
            'url': content_url
        }
        DATA_LIST.append(contents)


def download_FM(data):
    """
    下载歌曲
    """
    for url in data:
        headers = {
            "User-Agent": UserAgent().random
        }
        resp = requests.get(url=url['url'], headers=headers)
        with open(r"喜马拉雅\{}.m4a".format(url['title']), "wb") as file:
            print(f"正在下载一禅小和尚歌曲：{url['title']}")
            file.write(resp.content)
    file.close()


if __name__ == '__main__':
    for page in range(36, 30, -1):
        time.sleep(random.randint(1, 3))
        get_xmFM(page)
    download_FM(DATA_LIST)
