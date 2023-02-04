# -*- coding: utf-8 -*-
# @Time    : 2022/12/18 22:39
# @Author  : Ram.zhang
# @File    : login.py
# @Software: PyCharm
import base64
import json

import ddddocr
import execjs
import requests

js_code = open('sdk.js', 'r', encoding='utf-8').read()

def get_code():
    headers = {
        "Proxy-Connection": "keep-alive",
        "Content-Length": "0",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "http://passport.wsgjp.com.cn",
        "Referer": "http://passport.wsgjp.com.cn/erp/login?productid=0",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "Qs_lvt_68170": "1671369703",
        "_ati": "4672050580843",
        "_ga": "GA1.3.444935048.1671369706",
        "_gid": "GA1.3.1590795243.1671369706",
        "3AB9D23F7A4B3C9B": "QTC3AZOAJQZZ35D6YVLJAL7KRUKBYVAXZWRMUHLSMIZ3SIILFA53ISXWINUCS5XKATMCVY2UO7TZVYDI5R237E7AVE",
        "acw_tc": "b65cfd2516713739629278290e4a12c82afd7ae226d601422cf5becfed8fa9",
        "Qs_pv_68170": "40727955078290504%2C2229983953616044800%2C687233952174106800"
    }
    url = "http://passport.wsgjp.com.cn/code"
    response = requests.post(url, headers=headers, cookies=cookies, verify=False)
    image = response.json().get('data')
    with open('captcha_code.jpg', 'wb') as f:
        f.write(base64.b64decode(image))
    f.close()
    return response.cookies.get('Vnumber')

def login():
    headers = {
        "Proxy-Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "Content-Type": "application/json",
        "Origin": "http://passport.wsgjp.com.cn",
        "Referer": "http://passport.wsgjp.com.cn/erp/login?productid=0",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "Qs_lvt_68170": "1671369703",
        "_ati": "4672050580843",
        "_ga": "GA1.3.444935048.1671369706",
        "_gid": "GA1.3.1590795243.1671369706",
        "3AB9D23F7A4B3C9B": "QTC3AZOAJQZZ35D6YVLJAL7KRUKBYVAXZWRMUHLSMIZ3SIILFA53ISXWINUCS5XKATMCVY2UO7TZVYDI5R237E7AVE",
        "acw_tc": "b65cfd2516713739629278290e4a12c82afd7ae226d601422cf5becfed8fa9",
        "Qs_pv_68170": "40727955078290504%2C2229983953616044800%2C687233952174106800",
        "Vnumber": "954775885645351249"
    }
    url = "http://passport.wsgjp.com.cn/erp/login"
    validateId = get_code()
    print(f'validateId: {validateId}')
    validateCode = captcha_recognition()
    print(f'validateCode: {validateCode}')
    userName = execjs.compile(js_code).call('encrypt', 'aaaa')
    print(f'userName: {userName}')
    password = execjs.compile(js_code).call('encrypt', '123456')
    print(f'password: {password}')
    data = {
        "productId": "14",
        "companyName": "dddd",
        "userName": userName,
        "password": password,
        "rememberMe": False,
        "https": True,
        "showNotice": True,
        "validateId": validateId,  # set-cookie返回
        "validateCode": validateCode,  # 验证码
        "ref": "http://passport.wsgjp.com.cn/erp/login?productid=0",
        "clientinfo": "Zmxhc2g6YmVnaW5eXm5hdmlnYXRvcjpiZWdpbl5ec2NyZWVuRFBJOnVuZGVmaW5lZF5eY29va2llRW5hYmxlZDp0cnVlXl5wbGF0Zm9ybTpXaW4zMl5eYXBwQ29kZU5hbWU6TW96aWxsYV5eYXBwTWlub3JWZXJzaW9uOnVuZGVmaW5lZF5eYXBwTmFtZTpOZXRzY2FwZV5eYXBwVmVyc2lvbjo1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk1LjAuNDYzOC42OSBTYWZhcmkvNTM3LjM2Xl5icm93c2VyTGFuZ3VhZ2U6dW5kZWZpbmVkXl5jcHVDbGFzczp1bmRlZmluZWReXnN5c3RlbUxhbmd1YWdlOnVuZGVmaW5lZF5edXNlckFnZW50Ok1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85NS4wLjQ2MzguNjkgU2FmYXJpLzUzNy4zNl5edXNlckxhbmd1YWdlOnVuZGVmaW5lZF5ebGFuZ3VhZ2U6emgtQ05eXmxhbmd1YWdlOnpoLUNOXl5vc2NwdTp1bmRlZmluZWQ=",
        "ati": "4672050580843",
        "host": "wsgjp.com.cn"
    }
    data = json.dumps(data)
    response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)

    print(response.text)
    print(response)

def captcha_recognition():
    ocr = ddddocr.DdddOcr(old=True, show_ad=False)

    with open("captcha_code.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    return res


if __name__ == '__main__':
    login()
    # get_code()
    # print(captcha_recognition())
