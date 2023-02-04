import re
import requests


def get_data(page):
    session = requests.session()
    response = session.get('https://match.yuanrenxue.com/match/13')
    cookie = re.findall("cookie=(.*?);path=/", response.text, re.S)[0].replace("('", "").replace("')", "").replace("+", "")[:-1]
    key, value = cookie.split('=')
    session.cookies.set(key, value)
    headers = {
        'user-agent': 'yuanrenxue.project',
    }
    response = session.get(f'https://match.yuanrenxue.com/api/match/13?page={page}', headers=headers).json()
    print(response)
    return [x['value'] for x in response['data']]


if __name__ == '__main__':
    sum_list = []
    for page in range(1, 6):
        sum_list += get_data(page)
    print(f'5页数据总和：{sum(sum_list)}')
