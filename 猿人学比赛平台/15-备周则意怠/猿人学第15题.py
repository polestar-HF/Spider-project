import math
import time
import pywasm
import random
import requests


def m():
    vm = pywasm.load('main.wasm')
    sj = int(time.time())
    t1 = int(sj / 2)
    t2 = int(sj / 2 - math.floor(random.random() * 50 + 1))
    return str(vm.exec('encode', [t1, t2])) + '|' + str(t1) + '|' + str(t2)


def get_json(page):
    cookies = {
        'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1628394615,1628394961,1628946197,1629379450',
        'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1628394631,1628394971',
        'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1629379450',
    }

    headers = {
        'User-Agent': 'yuanrenxue.project',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
        'X-Requested-With': 'XMLHttpRequest',
        'Connection': 'keep-alive',
        'Referer': 'https://match.yuanrenxue.com/match/15',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'TE': 'trailers',
    }

    params = (
        ('m', m()),
        ('page', page),
    )

    response = requests.get(f'https://match.yuanrenxue.com/api/match/15', headers=headers, params=params,cookies=cookies).json()
    print(response)
    return [k['value'] for k in response['data']]


if __name__ == '__main__':
    sums = []
    for page in range(1, 6):
        sums += get_json(page)
    print(f'5页数据总和：{sum(sums)}')
