import requests
import execjs


def cookie_param():
    data = execjs.compile(open('RM4h.js', 'r', encoding='utf-8').read()).call('cookie')
    return data


def get_top5(page):
    m, f, cookie_m, cookie_rm4h = cookie_param()

    cookie = {
        "m": cookie_m,
        "RM4hZBv0dDon443M": cookie_rm4h
    }
    headers = {
        'authority': 'match.yuanrenxue.com',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'yuanrenxue.project',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://match.yuanrenxue.com/match/5',
        'accept-language': 'zh-CN,zh;q=0.9',
    }

    params = (
        ('m', m),
        ('f', f),
    )
    url = f'https://match.yuanrenxue.com/api/match/5?page={page}'
    response = requests.get(url, headers=headers, params=params, cookies=cookie).json()
    data = response.get('data')
    value_list = []
    for n in data:
        value_list.append(n.get('value'))
    print(f'第{page}页：{value_list}')
    return value_list


if __name__ == '__main__':
    data_sum = []
    for y in range(1, 6):
        data_sum += get_top5(y)
    data_sum.sort(reverse=True)
    print(sum(data_sum[:5]))
