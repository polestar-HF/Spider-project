import time
import execjs
import requests


def get_page(page):
    headers = {
        'user-agent': 'yuanrenxue.project',
    }
    cookies = {
        "vaptchaNetway": "cn",
        "Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f": "1633155016,1633612295",
        "no-alert3": "true",
        "tk": "-4498062398881890249",
        "Hm_lvt_9bcbda9cbf86757998a2339a0437208e": "1654230295,1654316331,1655012140",
        "Hm_lvt_c99546cf032aaa5a679230de9a95c7db": "1654230283,1654316328,1654316648,1655012140",
        "sessionid": "s80nblb9ekgvv0v9hwdbexkwan0odzq4",
        "Hm_lpvt_9bcbda9cbf86757998a2339a0437208e": "1655052694",
        "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db": "1655052699"
    }
    url = "https://match.yuanrenxue.com/api/match/16"
    timestamp = str(int(time.time()) * 1000)
    m = execjs.compile(open('sdk_m.js', 'r', encoding='utf-8').read()).call('get_m', timestamp)
    print(m)
    print(timestamp)
    params = {
        "page": str(page),
        "m": m,
        "t": timestamp
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).json()
    sums = 0
    for i in response.get('data'):
        sums += int(i.get('value'))
    print(f'第{page}页：{sums}')
    return sums


if __name__ == '__main__':
    data = 0
    for pg in range(1, 6):
        data += get_page(pg)
    print(f'总和：{data}')
