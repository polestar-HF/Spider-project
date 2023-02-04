# -*- coding: utf-8 -*-
# @Time    : 2022/7/26 21:06
# @Author  : Ram.zhang
# @File    : top_56.py
# @Software: PyCharm
import base64
import json
import requests
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as PKCS1_cipher


def decrypt_data(encrypt_msg):
    # 私钥
    setPrivateKey = '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAy5R1R2yM5jPPvkO2F47qVqMkYj7o92DF8y1yMkCSxY1WwqG0\ndCdUZTnaoBuAz99wGt55oGLcdalV71nPUiGWs/b6GzVN5v72baz/Q2OxHtkrFKqL\nVX16LW31cW9hAntN84RCbvTeB0MNV+SHmXjIf17OQLCtDKHBZWZ5NKyqFstO+KOd\nu32d2jsw+DT5lOBzDUBk/wUw2KyFJVx7eK6sSXEyWqBk2nxMRDNYixIEN1V1EBSq\nf+OwKK5Mxi04r38+Qog8z03/t/u6CfAOWVmi+MdrD1VHXv/P7bnFlgRcLzKwK1QL\nTSLBE1PrMmNNj0oRjByhMoI9tY5X6mRBqLyDhwIDAQABAoIBAGO++RmGO6D9CNAJ\n4Bm52eKaK5UBiubOIR8NiNLLZb5qinRxg3eX35d7Wb2xzBLNwOFBWSl21trFncfY\n4qY0s+C4ZYHYQ7Om/7nsFeQAYAOj1yJYj01TXf4NTsGGF2t+W8qxZlV0H6dCOLL0\nU2YkUmRp4Le8eQVj6dyTcVaYNPxWQBnb9ZOEIEvEjeoO/DD7CCmt7LDCey9KrTQl\nAvuc2nN6uRV1Wfm0P8conKPJtVdgzMvJujNdpz+bBDqwsqgeCICjs/hSCNO81VH3\nDD7J0mG2OHqowOVqagoDHpBprHOUKxAeTs9I0KEL+hEI4zXCDL69+Xs6azuts733\nzSOmwxkCgYEA25czfPVxxcK685LhaAvwbmzWHqNp07ytRNGf+Aww6OdgWkdgPy0n\n20Gkg0HAqsxGcgZJk6cAkOy5hBLNHpHlGbeWFi+62lVNYUv3hAxumtiPyBMu7avE\nZQCTXND1H1f/2enRDJRxQsR8y/SX1ivmC5U6fx7hbpKxnXyRHnvSlk8CgYEA7VWp\nhLNkn4AEaPPW0TknwKG40At/hjecX2zWAyZVt4ydDSeKgMEOUdmvGGlSCrefAl0n\nPTfM9SdIDcO5OTa2wUayKLIsrb6TDnG6KXXN6z3HR3Q4qKJbG83eaMYDqqziPPV+\nxzRVWShI3EGwkLczASmiYy+sEAT0OkxP59xTKUkCgYBgaGjFkukJfy4fJDxsNtmv\nUX9MYkhjGrIjxbjq6UdL6dGGsVGTSxr1i0NUETkqg5bmFtaUybxY5GWqk6qUok8o\nVE7DnN73Xn4jmnun8OFagHvXxnxTApeuFGueU2tbAIKmxJ3wXPfA7Y0w6kkDUbCl\nIzZUe1VT+3mZgAgijxBsxwKBgQDNytiJ62/V6hBo3P6pPtEcdF6nb0DtpazfBaVw\n572twaywqlermzsKeCIenbx49I1ZZGLQ72C2NpCA9vTWCn5fiyiSpyScp0ImZTDS\nIIckctYoPDug5d7wdgtjeEfXp78osopyuwtCmu7Kpd8vLNt6J5raPI0K+vC22FL1\nLpOhmQKBgQCFeU448fL87N1MjMyusi8wJ5MLcn+kHbLTtpskTpfQM2p3Cnp4oL+7\nBI4AlXlKItV37rJIjZxQgLWhGoTZPplZaW4ooJCFJbazce5ua5fnsFS0oXhDN7uw\njaq+v5t8G6gFS09hEa4kz9O53t/7UGuQqh0Bxb0cJ9iNeAlhagvBDQ==\n-----END RSA PRIVATE KEY-----'
    private_key = RSA.importKey(setPrivateKey)
    cipher = PKCS1_cipher.new(private_key)
    back_text = cipher.decrypt(base64.b64decode(encrypt_msg), 0)
    return back_text.decode('utf-8')


def top_56(page):
    headers = {
        "authority": "www.python-spider.com",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "origin": "https://www.python-spider.com",
        "referer": "https://www.python-spider.com/challenge/56",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1654229510,1654316189,1654316648,1655014076",
        "no-alert": "true",
        "sessionid": "dsp4iecgxnhpew3mg45oep71ats1ar1h"
    }
    url = "https://www.python-spider.com/api/challenge56"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data).json()
    result = json.loads(decrypt_data(response.get('result')))
    number = 0
    for data in result.get('data'):
        number += int(data.get('value'))
    print(f'第{page}页: {number}')
    return number


if __name__ == '__main__':
    sums = 0
    for pg in range(1, 101):
        sums += top_56(page=pg)
    print(f'总和: {sums}')
