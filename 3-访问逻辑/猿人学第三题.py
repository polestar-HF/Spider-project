import requests

# 主要难点在是headers顺序
# 必须先获取headers数据然后用session.headers固定顺序
# 再去请求数据


def get_data(page):
    session = requests.session()
    headers = {
        "Host": "match.yuanrenxue.com",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "sec-ch-ua": 'Not A;Brand;v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
        "User-Agent": 'yuanrenxue.project',
        "Accept": "*/*",
        "Origin": "https://match.yuanrenxue.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://match.yuanrenxue.com/match/3",
        "Accept-Encoding": 'gzip, deflate,br',
        "Accept-Language": 'zh-CN,zh;q = 0.9',
        'cookie': 'vaptchaNetway=cn; Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f=1626591565,1626591621,1628514969,1628907029; Hm_lpvt_0362c7a08a9a04ccf3a8463c590e1e2f=1628907029; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1628394854,1628514975,1628600292,1628907032; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1628394865,1628514980,1628600309,1628907090; tk=-7543162501148301049; sessionid=x4yquwrn01t6kmoou41m9z5ipmi8fan6; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1628907102; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1628907692',
    }
    url = 'https://match.yuanrenxue.com/jssm'
    session.headers = headers
    session.post(url=url)
    url_api = f'http://match.yuanrenxue.com/api/match/3?page={page}'
    res = session.get(url=url_api).json()
    print(res)
    data = [i['value'] for i in res['data']]
    return data


if __name__ == '__main__':
    data = []
    for page in range(1, 6):
        data += get_data(page=page)

    print(data)
    max = 0
    for y in data:
        if data.count(y) > data.count(max):
            max = y
    print(f'出现次数最多的数是：{max}')
