import math
import random
import ddddocr
import requests
from loguru import logger
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

ocr = ddddocr.DdddOcr(show_ad=False, old=True)

session = requests.session()
headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://cn.fawmx.com",
        "Pragma": "no-cache",
        "Referer": "https://cn.fawmx.com/home/register",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
cookies = {
        "PHPSESSID": "rmp2d8nke3ntppfsq7u91ce60l",
        "comm100_guid2_100017501": "fFcRtB48M0SmmQO19hnwKQ",
        "Hm_lvt_86b8712c72cab4f521c0b5cd56dfa69f": "1652622684",
        "_ga": "GA1.2.7220407.1652622684",
        "_gid": "GA1.2.146925989.1652622684",
        "Hm_lpvt_86b8712c72cab4f521c0b5cd56dfa69f": "1652624285",
        "_vcid": "F23FDA9D31E6F687915DC46A8CF91D92",
        "JSESSIONID": "CE90A2C85A94E93DA46B2ACA891C3715"
    }
session.headers = headers
session.cookies.update(cookies)


def get_captcha():
    url = "https://cn.fawmx.com/service/verifycode"
    params = {
        "x": str(random.random())
    }
    response = session.get(url, params=params)
    if response.status_code == 200:
        with open('verifycode.jpg', 'wb') as verify:
            verify.write(response.content)
        verify.close()
    res = verify_ocr()
    return res


def verify_ocr():
    with open("verifycode.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    return res


def get_fkey():
    url = "https://cn.fawmx.com/ee/loginverification"
    data = {
        "eeblackbox": "0002MDAwN0xTVE9LRU4wMDI0MmJmZGNmNWQtNmY4YS00MGQ1LTgxOWYtNzY5MzQzNDExMmU1MDAwNklOVExPQzAwMjJodHRwczovL2NuLmZhd214LmNvbS9ob21lL3JlZ2lzdGVyMDAwN1BSSVZBVEUwMDA0dHJ1ZTAwMDVKRU5CTDAwMDExMDAwNUpTU1JDMDAyMGh0dHBzOi8vd3d3LmY0Ynp5cno5MnVzMy5jb20vRTIvMDAwNFVBR1QwMDczTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMC4wLjQ4OTYuNzUgU2FmYXJpLzUzNy4zNjAwMDdKU1RPS0VOMDAyNGFjZDkyNDgxLWVhNmEtNDI3ZS05OTM0LTM2NTc2ODAxNmNjMTAwMDdIQUNDTE5HMDAwZXpoLUNOLHpoO3E9MC45MDAwN0hBQ0NDSFIwMDBmVW5pY29kZSAoVVRGLTgpMDAwNUpTVkVSMDAwMzIuMDAwMDRUWk9OMDAwNC00ODAwMDA2SlNUSU1FMDAxNzIwMjIvMDUvMTUgMTQ6MTg6MDIuMjcwMDAwN1NWUlRJTUUwMDE0NS8xNS8yMDIyIDI6MTg6MDEgUE0wMDA1SkJSTk0wMDA2Q2hyb21lMDAwNUpCUlZSMDAwZDEwMC4wLjQ4OTYuNzUwMDA1SkJST1MwMDBmV2luZG93cyBOVCAxMC4wMDAwNUpCUkNNMDAxZFdpbjY0OyB4NjQ7IEtIVE1MLCBsaWtlIEdlY2tvMDAwNUpMQU5HMDAwNXpoLUNOMDAwNEpSRVMwMDA5MTA4MHgxOTIwMDAwNkpQTEdOUzAwNjRpbnRlcm5hbC1wZGYtdmlld2VyO2ludGVybmFsLXBkZi12aWV3ZXI7aW50ZXJuYWwtcGRmLXZpZXdlcjtpbnRlcm5hbC1wZGYtdmlld2VyO2ludGVybmFsLXBkZi12aWV3ZXI7MDAwNElHR1kwMDJjc1BQenRYV2QrUUY4QkxTckZreGJ3Wm5aTXIvMFhKb3hiQ2JVak9icFFVcz0wMDA1QVBWRVIwMDZiNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDAuMC40ODk2Ljc1IFNhZmFyaS81MzcuMzYwMDA1QVBOQU0wMDA4TmV0c2NhcGUwMDA1TlBMQVQwMDA1V2luMzIwMDAyTVYwMDIwNkI5RjcyMjIwQjM0OThGQTIyNTcwRDEzNDNCRUEwMTYwMDAzRVRUMDA1OFlLZ3BqSVVxWVdZYTFnR2FBMGg2dEVTRXV0REM0YkVOdktmQlM1ZEZ0NUtJV1oyNi9Dc0VxUjF4TjdKaGVzbE9DS1ZrWUlVQVFNaWUwbFdyTnE5TTBRPT0wMDA0RVRQVDAwNThtc05aQlVUYUwyaEEwSXg5YWV1VnJtaE5XNGVjY00vbmpCTkZqZEpRc0c3aEI5Q1pQdGN4M2RyNDhpd1dZN1JCOEdzOGJGZHMvU25PZlpHZWhaY2pCUT09MDAwOFdEQlRPS0VOMDAyNDJiZmRjZjVkLTZmOGEtNDBkNS04MTlmLTc2OTM0MzQxMTJlNTAwMDZDVE9LRU4wMDI0OGFmYTI5YjAtODBmMi00Zjg2LTg4MDItMjE2Y2Y0ZDFiZTE2",
        "info": "16789078890",
        "p": "",
        "fkey": "0"
    }
    response = session.post(url, data=data).json()
    return response.get('response')


def login():
    url = "https://cn.fawmx.com/kz/member/loginAdvance"
    verifycode = get_captcha().strip()
    logger.info(f'验证码：{verifycode}')
    fkey = get_fkey()
    logger.info(f'fkey：{fkey}')
    js_code = open('passwd.js', 'r', encoding='utf-8').read()
    pwd = '123456789'
    loginpwd = execjs.compile(js_code).call('get_password', pwd)
    logger.info(f'密码：{pwd}')
    logger.success(f'加密密码：{loginpwd}')
    data = {
        "loginpwd": loginpwd,
        "loginame": "16789078890",
        "verifycode": verifycode,
        "fkey": fkey,
        "captchaMethod": "0",
        "captchaToken": "",
        "loginMethod": "0"
    }
    logger.warning(data)
    r = execjs.compile(js_code).call('get_random')
    params = {
        "r": str(r)
    }
    logger.warning(params)
    response = session.post(url, headers=headers, params=params, data=data)
    print(response.request.url)
    print(response.text)


if __name__ == '__main__':
    login()