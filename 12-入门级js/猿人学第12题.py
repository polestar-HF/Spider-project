import requests
import base64


def btoa(page):
    """
    m参数就是base64加密
    :param page: 页数
    """
    m = 'yuanrenxue' + str(page)
    return base64.b64encode(m.encode())


def get_data(page):
    headers = {
        'authority': 'match.yuanrenxue.com',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'yuanrenxue.project',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://match.yuanrenxue.com/match/12',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1628943427; qpfccr=true; no-alert3=true; tk=-7543162501148301049; sessionid=67oc1fyxze4pl5q5z7jd11h1tmjly0vf; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1628943483; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1628943483; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1628943700',
    }

    params = (
        ('page', page),
        ('m', btoa(page).decode()),
    )

    response = requests.get(
        'https://match.yuanrenxue.com/api/match/12', headers=headers, params=params).json()
    print(response)
    return [y['value'] for y in response['data']]


if __name__ == '__main__':
    sum_list = []
    for page in range(1, 6):
        sum_list += get_data(page)
    print(f'5页数据总和：{sum(sum_list)}')
