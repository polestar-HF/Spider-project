# -*- coding: utf-8 -*-
# @Time    : 2022/5/22 15:27
# @Author  : Ram.zhang
# @File    : beike_login.py
# @Software: PyCharm
import json

import requests
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs

js_code = open('b64.js', 'r', encoding='utf-8').read()


def get_sign():
    url = "https://miao.baidu.com/abdr"

    payload = "eyJkYXRhIjoiMzAwMTg4NmI2NzYxYWZlZDUzM2JkMWU4Mjg1MzI4MzVmMmY3MzdhN2Q4MjE3ZWJhNTExZjNjMGQ3ZWUwOTIyNzRjMmU4ZDE4MTVkZGE1NTk3ZDdhNTQzZDc5MTRmNmU4ZDUwMzkzNzIxMGZiNzA0OTdlYmMwZjk2ZTIyZTlmMzlkYjBlNjIzM2YxZGIxZWViODMzYWViMjlhODZhYWI5ZmJjNzRiNDA3ODFlYWRkNDBmNzRiN2IxOTA1YWQ4NzZiZDMxNWI0N2I5NmEyMmFhMmIxOWY2OTllOWI2MGM1YjFlZTk5ODhiYzdiMGFmZTUxZDVhMjgyNmVjMTFmYmI5NTdhMjAxMWQ5MGI1OGMxOTc0MjM4YzM1Y2E5OTczZDgzNGVmNmJjNWJmY2IxYTkxN2ZhNWViMjc2OTZiODIwOWY3NTcyMGI3OGU0OWM0MGRhYWQ4NDdlMzY1Nzc5OGMzMzAyZmMyMzFiYzMyZTQ5NGY4NWNmYTBhYWRlMzczM2ZiNjZiNjQzYzY1YjhkMGM1MTJmMTFhMzcyNWY3YzdjZjU2MjI4OTNhN2IyMjU1N2RlMmU1YmEwOWEzMDliYjJjYmI0M2M3ZjEzMjA5NjBjOWIxZTRhMmU4YzAxMGUyOTVjOTZkMDk0ZDI5Mjg1ZDFmY2Y2NzUxNjJjYjg1NWJhZjFmNTAxN2IyMmIxMjE3ODViYTZkOTMxMGZhODEyOTZmMzNmZGE0MDJiMDZmNmQ3YjFlY2YzMWJhNTIyZWEyMTYxM2I5YWMwMTZhMTJjMmE4NTkyMGRmNTViNWE3NmNkOTU5MjEyN2EyNGFiMTQyMjY4NjRlM2NmMDgzNTViMGZiOTlhMzhhODY3OGU3Y2FkMGY2YzNiMDgyYmUwOWZmMmFkZjFiN2Q3MGQ5YWVhYmIzM2Y3MmFiNzc1MjUzMzA3YThhNmVkNzQ0MzU3ZjgzYjllZTE3ZjgzYzZiZjcwYzE0YzQwYTA4Mjg5YmMwMWJmMTlmNDE4Njg3ZjdlMmRmZTA5ODAwYzYxZjg3MGM2MmM1YjZkZTY2ZDA4YTNjNGM5YmRmYzdhOGNkNTMwYjNmNzhkZWI2MDI5MjQyN2M2M2U1YWVhOGJhYjQ4NzQwYWIxNDYyNDZhZmJjYmIyM2JkY2ZmNzk0OGU3NDQ3MjI0MTNjYzdlZWYyODJkOWQzYzRjNWY1ZTY5ODM3ZTdmZTA3ZTBkZmE5MDliYzMyNjYyNmYxOWMyODYxMjgwNzYyZjQ3ZGFjN2VmNmQzZTdjN2U4OTM1YTRmYTZmZGYyZTkyMDgzNzA1NWE4N2ZjMGIyMWM3MGYxODcwZDIzYmY2ZWM4ZDQ2YzgxZGI2Mjg4ZDFmNGJiMTNlZGFkODA0YjM1MjUyZTk0ZDE4ZTQyNjBiOWUyODBmZjNkM2I0NTQwNTJhYjhkZTBjYmFlZWZmY2RmOTc3NTkwZGVhYjdmN2FlMWUxYmZhNTBhMjI5MmI2M2M0ZjNkMDM2MzY1ZGZhM2Q0YTkxZGVmM2ZkNTlmN2ZmYjVkMzBmNmZkM2U4ZTY1YmRkMTYyYWU5NWU5NTk4ZjU3YmNjZjQwZTU2YmVhYzVhN2YyZGJmMTIyODRhYTZiOTRkODdkZjI1ZmQzYjQ4ZWUwMGM5ZjhlMTM1NWE4NjYyMzExYjdjOGJkNTBjMDA0YjE5NmRkMDBhZThlYWE1MmM3ZWI1NzAwMTM1ODEyOWU0NTFhY2UwNzEwYWU3ZjUwZjk0MGY3ZDMwYzE2ZDk0MDc1MjA4YjVhNjcwODZkNjY5YTI2OWVkYjQwZTQ5ZDIwYThjYzI0YWNjNThkNTQwZGYzYjIxZWQ0OWI2MzU4Y2RmOTg5YTk3NGNiODRkZDQwMTJiOTI4M2JlYjg4MmJlNGY4NmRkMGFkYjhkZjNlNjQwZTU3NjRjMDRjOTJhMGE4YjkwNDFmYzEyMWZkNTA1MGZiMzIxZDIyOTRhZjFiY2Y3ZWU0ZWNkNzBlYzhhZWMyMTkzMzMyNGQ1MGQ2YWFkNjE4OGZjN2ZiOWJlODQ3ZDJkY2Y2ZjMwZTE0MzVhZjkzZjkwOTlkMzc5NTBkZjczYTI1ZjUyNGQ0MTE2MmUyNDY0NjEyODNhYzAzNGIxNGMxYzg1OTIxNjI2NDc2OTdjZTE0Zjg5MTUyNmRhOWFkN2RjYmFiNDYzYjJjMTY5NGQ3OTg2ZmRmYWJjYWQ3MjRiM2RhOTIxMTQzMmQ0YjUxOGFlZWE4NTJlYWY2YTNmYzQyODk1OTVhOGY0YjRhOWFiMjQxZGRjYTY3YjY2NDlhM2IwOWFjOTQ5ODk4ZGVmODNkNGYzYmY1NjgwZTBhMGU3NWIzMGRmYTNjNTFkYjQwZWYwMjRlODBiOTg3M2IzMTQ1NzM2YjkxYmNlZDk5NDAyZjk3NGFlZTlkYjljOTdkOTU1MTdjYjA1OWNlZmJiNzA0YTViMWM3MmQ1NDFkZmExMmU4MTZlMDIwM2FlYjRhMjk3ODEwNjkyZDhlMWZlYjQ2OTk3MmY2OGM4ZjQwNDA3YmY0MjdjNmJlZTk2NDhkMzllNmI5ODBkMDNiMzRhMDM2ZTQ0NGU5ZDFhNjhjZThkNWNjYTUyMWQyOTg1ODkwNDU1OGVlOTMxMDJhYTJjNjgxODdhOTZiYTYzM2JjNTcxMzkyMTYyMzBmMjdiNjU1OThjNzlhMmI3MTM5YjdjNzlkNDU5NjdjYWE3MTQ4MWFjYjA0NGMxMTU1NzJhMjZkNDA2ZDU1YTE0ODAxZmJkNjgyNTc5ZTBmOWQyZTE2MjY5YzMyNzIwODVhZWU1YzVlN2VmNDQ2OTU1NWZjZTJmZmI0ZjQxNTIxYTIxY2VkZTE5NjI0ZmQ5ODdkZjI0Y2UwOWVmZTg0YTEyYzUyN2QwMmJhZDNlNTY0YjE1NWE3MjU2ZGUyMDU4ZDAxOWMyOTY1MDE5NjlhYWY0ZWQ3ZDYxZWUyMGZkZDg5ZDZmM2I5ZmM1OWRiMzhmNzBlNmJmMjk1ZjdiYzUwNDk2ZDliYWEyOWNhOTk5ODJhZTVhM2ZlMTJmYWY0ZmRjY2I1MDcwNzA2ZDczZGY3OGRlYmU2MDY2YmRmMTJhMWEwMjZmZDFiMmQzYTkyYWUxOWVhY2EyNzA4ODRjZjI5MzY4MjRmZTU2ZWNhZGJhY2NmMTA3NDhiMDU1ZTYxMTU0NTEyMTgzY2Q2NzJjZTQwNDg2ZmUzZTE5MzkxNjNhMTliOGFlYzdmM2Q2NjZjNjI4OTQ5YTMwZGU4NWM4MzYxOTBjNjdjOWM3NDQ1MWVjYzJlYmFiZDk2OWQyZDg2NWIzN2ZhYWFkODhhNzMwZmIwZjE2ODdkODIyODRmNjY1YTE0YTUxMmFlZjFkYTY2ODY1Yzc3OTFiMWFlOWY4ODExYzFjODdjZmNlM2QzNTg2OGYxNWJlMzBlM2JhY2U4OGU2NjUzMmIxMTc5OGQ4NzMwZjQ5NTdhMzRhMDg3MmEyZDkzN2Y3ZWE5ODBjMTIwNDc1Y2IxNTliNzQzMDRlYjM0NzZkN2FlOGFkZmFhYzUxYTJmZTY3Y2U5MjFlYjc0ZmY0MjM0YWYyM2RmNjIyNTM0NzAwN2MyZTEwM2I2YTNlY2E4NGY0MjM3YWMzYzhiMWQ4Yjg1OGZlNjliYjUxNzBjNDczZjBiZDExMThhY2QzNTc5NDUxNzRkNDc2ZDJmMGRkZmI1ZmU1NmY4YWZjMzYyYjA0MDYxZDlhYmIwODA3Yzc1Njk4NWRmNGJjYzc5OTk4MTYyMGI0MmVmNDAyM2QyZjk2MGY5ZTE3YzZlZjhlNzE2OGJjYzMxYmUwZjFjZjM2NTJhZTg1YWM1YTU4ZTZjMmIzMmU0ODc1ZjNhMmM2NWYxNGQ3NTM4ZGJhODZiZDdmZjQ1OGJkZjUzN2Y3MTJmYzgxNThhZjQ4YjU4N2Q1ZjFkZTFlYjkxZTlmZWFlNjE0ZDRiN2VlNDVmYWJkNTE4NGNiYjFhYWVlZjY4ZDBlZjhlOGFlYTc2YjJiMzA0MTc1ZmQ5M2VkNDAzZDgwMjAyODk2ZDk0NzZjZWNjMGY5OWU5YiIsImtleV9pZCI6IjJkOTYzYTQ2ZTNlZDQ2NDkifQ=="
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'text/plain;charset=UTF-8',
        'Origin': 'https://clogin.ke.com',
        'Pragma': 'no-cache',
        'Referer': 'https://clogin.ke.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Cookie': 'ab_sr=1.0.1_OTEzYTAwNWVmZTFlNTdhNDRlMjEyM2Y1ODk2M2E2YTRhZTdmMjBhODdhZjUzMjFmMDdmY2ZjMTM2MWJmNmZlMzkwYzQ4MGFhZDdhOGExNjZlMTMxODIwNGUyNTk2ZjE2MTkxZmI1ZDE2ZDc0MGM2YWIzN2Q0ZDBkNzUyNmY1MzcxODg2YmE3MDU1ZWI1ZDM0NTMzMDNlYTBkOGFlYmQwYg==; ab_bid=8bde1cf8c699e646fc2aacf2759943c6a461; ab_jid=4cad62911358dbffaa2d0ac88bde1cf8c699; ab_jid_BFESS=4cad62911358dbffaa2d0ac88bde1cf8c699'
    }

    response = requests.post(url, headers=headers, data=payload).json()
    return response


def get_ticketid():
    url = "https://clogin.ke.com/authentication/initialize"

    payload = json.dumps({
        "service": "http://m.ke.com/my/checklogin?redirect=https%3A%2F%2Fm.ke.com%2Fmy%2Findex",
        "context": {
            "deviceId": "default",
            "sign": "default"
        },
        "version": "2.0"
    })
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Cookie': 'lianjia_ssid=46e8b021-0a7b-402e-ac01-5fdd43369e9e; lianjia_uuid=c54d1c17-247a-4d33-a94e-4d0e4e7e6df3; crosSdkDT2019DeviceId=-6b6mvc--tijso1-y0pd8oph7qql7jh-l072kvy38; lianjia_ssid=46e8b021-0a7b-402e-ac01-5fdd43369e9e',
        'Origin': 'https://clogin.ke.com',
        'Pragma': 'no-cache',
        'Referer': 'https://clogin.ke.com/authentication/sdk/init?version=2.0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }

    response = requests.post(url, headers=headers, data=payload)
    if response.status_code == 200:
        result = response.json()
        loginTicketId = result.get('loginTicketId')
        key = result.get('publicKey', {}).get('key')
        return loginTicketId, key
    else:
        return None


def login():
    url = "https://clogin.ke.com/authentication/authenticate"
    e = get_sign()
    # print(e)
    loginTicketId, key = get_ticketid()
    print(loginTicketId)
    print(key)
    srcId = execjs.compile(js_code).call('get_srcId', e)
    # 密码
    my_password = '123456'
    password = execjs.compile(js_code).call('get_passwd', my_password)
    payload = json.dumps({
        "mainAuthMethodName": "username-password",
        "credential": {
            "username": "17704011364",
            "password": password,
            "ioaRunState": False,
            "ioaMid": "{}",
            "alertSt": "",
            "ioaStateVersion": 2,
            "encodeVersion": "2"
        },
        "srcId": srcId,
        "context": {
            "msg": "{}",
            "deviceId": "default",
            "sign": "default"
        },
        "version": "2.0",
        "accountSystem": "customer",
        "service": "http://m.ke.com/my/checklogin?redirect=https%3A%2F%2Fm.ke.com%2Fmy%2Findex",
        "loginTicketId": loginTicketId
    })
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Cookie': 'lianjia_ssid=6219055f-2dae-4159-b5d3-5ac0a446629d; lianjia_uuid=8160f5cc-e02e-4429-94ef-b35dc2630550; crosSdkDT2019DeviceId=7ia2r6--tijso1-kkblcom2uki0pj4-mgpqqbl5t; lianjia_ssid=6219055f-2dae-4159-b5d3-5ac0a446629d',
        'Origin': 'https://clogin.ke.com',
        'Pragma': 'no-cache',
        'Referer': 'https://clogin.ke.com/authentication/sdk/init?version=2.0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


if __name__ == '__main__':
    login()
