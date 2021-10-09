import requests

# Ajax 动态加载
def get_spa1(page_count=10):
    headers = {
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://spa1.scrape.center/',
        'Sec-Fetch-Dest': 'empty',
        'Cookie': 'UM_distinctid=17c6553aa74386-0708f0cc1f9109-4343363-144000-17c6553aa7512b',
        'Connection': 'keep-alive'
    }
    for page in range(page_count):
        url = f"https://spa1.scrape.center/api/movie/?limit=10&offset={page * 10}"
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
    for y in get_spa1():
        print(y)
