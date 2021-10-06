import execjs
import requests


def data_m():
    js = open('hex_md5.js', 'r', encoding='utf-8').read()
    m_value = execjs.compile(js).call('get')
    return m_value


def get_json(page):
    headers = {
        'user-agent': 'yuanrenxue.project',
        'cookie': 'Hm_lvt_0362c7a08a9a04ccf3a8463c590e1e2f=1626591397,1626591461,1626591565,1626591621; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1626592202,1628302218; vaptchaNetway=cn; tk=-4410509807686223713; sessionid=ow7zh925j8ho9xeho3rmpxyvev75ihas; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1628327590; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1628302208,1628308282,1628320540,1628329346; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1628329764',
    }
    params = (
        ('page', str(page)),
        ('m', data_m()),
    )
    response = requests.get(
        'https://match.yuanrenxue.com/api/match/1', headers=headers, params=params)
    print(response.json())
    return response.json()


if __name__ == '__main__':
    mysum = 0
    count = 0
    for page in range(1, 6):
        response = get_json(page)
        data = [y['value'] for y in response['data']]
        count += len(data)
        for value in data:
            mysum += value
    print(f'机票平均价格: {mysum / count}')