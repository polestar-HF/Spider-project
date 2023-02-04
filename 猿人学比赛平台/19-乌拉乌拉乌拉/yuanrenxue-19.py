import requests
import requests.packages.urllib3.util.ssl_

requests.packages.urllib3.util.ssl_.DEFAULT_CIPHERS = "TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA:AES256-SHA"


def get_data(page):
    url = f"https://match.yuanrenxue.com/api/match/19?page={page}"
    headers = {
        'user-agent': 'yuanrenxue.project',
        'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1654933561; qpfccr=true; no-alert3=true; tk=-4498062398881890249; sessionid=e7v0sq7ar8in906ova93yl9yktpgqhrg; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1654933571; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1654933571; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1654934428; sessionid=s80nblb9ekgvv0v9hwdbexkwan0odzq4'
    }
    response = requests.get(url, headers=headers)
    print(response.text)
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
        sums += get_data(page)
    print(sum(sums))
