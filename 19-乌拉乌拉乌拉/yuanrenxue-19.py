import requests
import httpx


def get_data():
    url = f"https://match.yuanrenxue.com/api/match/19?page={page}"

    session = requests.session()
    headers = {
        'user-agent': 'yuanrenxue.project',
        'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1638068899; qpfccr=true; no-alert3=true; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1638068904; sessionid=5ofpt1k6c2h2h47kz1bgrgry5j5omv5b; tk=-271117457490168880; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1638072579; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1638072756'
    }
    proxies = {
        # 设置fiddler代理
        "http": "127.0.0.1:8888",
        "https": "127.0.0.1:8888",
    }
    response = session.get(url, headers=headers, proxies=proxies, verify=False)
    if response.status_code == 200:
        value_list = []
        data_list = response.json().get('data')
        for value in data_list:
            value_list.append(value.get('value'))
        print(value_list)
        return value_list


if __name__ == '__main__':
    sums = []
    for page in range(1, 6):
        sums += get_data()
    print(sum(sums))
