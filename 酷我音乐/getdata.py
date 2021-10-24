import requests
import execjs


def reqId():
    return execjs.compile(open(r'酷我音乐\reqId.js', 'r', encoding='utf-8').read()).call('getReqld')


def get_KWmusic():
    url = 'http://www.kuwo.cn/api/www/search/searchMusicBykeyWord'
    cookies = {
        'Hm_lvt_cdb524f42f0ce19b169a8071123a4797': '1633268271',
        '_ga': 'GA1.2.581877899.1633268271',
        '_gid': 'GA1.2.165322963.1633268271',
        '_gat': '1',
        'Hm_lpvt_cdb524f42f0ce19b169a8071123a4797': '1633269915',
        'kw_token': '24LYYRVPPL5',
    }
    headers = {
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'csrf': '24LYYRVPPL5',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Referer': 'http://www.kuwo.cn/search/list?key=%E4%B8%8B%E5%B1%B1',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    params = (
        ('key', '真的爱你'),
        ('pn', '1'),
        ('rn', '30'),
        ('httpsStatus', '1'),
        ('reqId', reqId()),
    )

    response = requests.get(url, headers=headers, params=params, cookies=cookies, verify=False)

    print(response.json())


if __name__ == "__main__":
    get_KWmusic()
