import execjs
import requests


def cookie():
    return execjs.compile(open('2-动态cookie\cookie.js', 'r', encoding='utf-8').read()).call('cookie')


def get_json(page):
    headers = {
        'User-Agent': 'yuanrenxue.project',
        'cookie': cookie()
    }
    params = (
        # (有坑) 元组内传入一个参数必须在后面加分隔符 逗号 报错信息：ValueError: too many values to unpack (expected 2)
        ('page', page),
    )
    response = requests.get(
        'https://match.yuanrenxue.com/api/match/2', headers=headers, params=params)
    print(response.json())
    return response.json()


if __name__ == '__main__':
    sums = 0
    for page in range(1, 6):
        response = get_json(page)
        for data in response['data']:
            sums += data['value']
    print(f'五页数据总和：{sums}')
