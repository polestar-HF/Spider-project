import base64
import requests
from lxml import etree


def user_authentication():
    user = 'admin'
    password = 'admin'
    return base64.b64encode(f'{user}:{password}'.encode()).decode()


# HTTP Basic authentication
def get_ssr3(page_count=10):
    url = "https://ssr3.scrape.center/page/{}"

    headers = {
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Authorization': f'Basic {user_authentication()}',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': 'UM_distinctid=17c6553aa74386-0708f0cc1f9109-4343363-144000-17c6553aa7512b'
    }
    for page in range(1, page_count+1):
        response = requests.request("GET", url.format(page), headers=headers)
        resp = etree.HTML(response.text)
        data_list = resp.xpath(
            '//div[@class="el-col el-col-18 el-col-offset-3"]/div')
        for data in data_list:
            name = data.xpath('.//h2[@class="m-b-sm"]/text()')[0]
            score = data.xpath(
                './/p[@class="score m-t-md m-b-n-sm"]/text()')[0].strip('\n').replace(' ', '')
            tag = data.xpath('.//button/span/text()')
            site = data.xpath('.//div[@class="m-v-sm info"]/span[1]/text()')[0]
            duration = data.xpath(
                './/div[@class="m-v-sm info"]/span[3]/text()')[0]
            if data.xpath('.//div[@class="m-v-sm info"][2]/span/text()'):
                release_date = data.xpath(
                    './/div[@class="m-v-sm info"][2]/span/text()')[0].replace(' 上映', '')
            else:
                release_date = ''
            yield {
                "name": name,
                "score": score,
                "tag": tag,
                "site": site,
                "duration": duration,
                "release_date": release_date
            }


if __name__ == "__main__":
    for i in get_ssr3():
        print(i)
