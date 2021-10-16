import requests


def get_spa3(page_count=10):
    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://spa3.scrape.center/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': 'UM_distinctid=17c3fb7f30c45-0fa515fb751b75-4343363-144000-17c3fb7f30d354'
    }
    for page in range(page_count):
        url = f"https://spa3.scrape.center/api/movie/?limit=10&offset={page * 10}"
        response = requests.request("GET", url, headers=headers).json()
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
    for n in get_spa3():
        print(n)
