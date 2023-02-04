# -*- coding: utf-8 -*-
# @Time    : 2022/6/11 0:26
# @Author  : Ram.zhang
# @File    : jinjiang_login.py
# @Software: PyCharm
import hashlib
import json
import random

import ddddocr
import execjs
import requests

ocr = ddddocr.DdddOcr(show_ad=False, old=True)


def verify_ocr():
    with open("verify.jpg", 'rb') as f:
        image = f.read()

    res = ocr.classification(image)
    return res


def get_tokeId():
    url = "https://fp.tongdun.net/web3_8/profile.json?partner=jinjiang&app_name=jinjianglx_web&token_id=jinjiang-1654874626294-431ad0d613f1f&i=sEuTCmCVaHKoAQWQ~7q8NCeFu2xgPHmQ5yAxTrvyz8b~HPoodSy9Uaeu1ORLcYDcdFRynKjfE9bPdEhyg9MVNTy4jVMMDDfWNVGZZ%2Fb0PDhWyAeVwpuZxkXHEXBg4rsaSVoZ24NNUj%2FiLNzKLj%2F5wnwwVSVUatkv9cCYL6p948~vqjKqIRR0k2S13o1JpUnyZt4piqbIlkiPcdaHj%2FkSeiFXTdDQKABtMij%2FSXiiVDQlcOwwoLBwas~06yWa6psNBqNmi0HeONlp2e1THehnyiUIk6VjTceJAHqEGytWzafrE4BCFQGECWIPyfNFn1woOBbILZL6GpX3bOu7DiaS3gw4VuJiMCmINqbirBsCcqLlkkzauVmUgi5rRzYobYLiVPnUCZ473hx76lNvjfFoOb5u0a8Zb8592eRr6FnXayoXH0aUnlQzH6PQhwhBU7z29MwhWo5AArryDqrGe8Mgqox7NvUbcXZTFFd1kyEGXPIyDjvLb0ysyzqq0YlJnC%2Fu5H3R6wgA6KAtK1NjAXT8hRl~6%2FL3VA1UR4BYGxDF6AMSgJyKgLbigbhvATU9DRJK&j=5uUBJoMSdLEqVcVRlCKSu2~EQiR5QPo2OcCLTla~zyQru73Hh0X8e44blIAPdds0CueX9q9eCzmxLV%2FeAr5gxp61q5YVyAa5C47eLMSX%2FaKGp8Terf6shfaFILcgkBrwRd1Fst6pb9Id8nlQD61f67QtB0PTN4AdmzwG9diUFgF7WyYUsr~N1SsXmZnDNC0M6ibss%2FAF%2F9WFHxNKDG%2FU~Fj3rjR~g8qwAQ4VFUvgOEdGhkJNoz40vFi3TEfrGWwb8d8rk~gOIPoaAQjZ0OyMhPJnDMBBBOWHERs4e2QRjOMUAudRrP7yo7bQ0jGXiO84N6duUpJRaDBr%2FPOonNTg7ao~glL%2F4XtqPiu53z%2FWGF6C6FlwofKjP9yI0wGYJSXfwsXZkOBhtM627dL7PKbUyG%3D%3D&k=0vjAqSJYpoVaYLFPPQvLOqbfQsQpDmv4YQ0dRvYjc3ZPvOfbvwhQkLaYAnhblyvJXMn6lRFHfM~qwuVG~kF97AL51CFPT1nvWqNmgRL1uyyduZmKp4UrF~sbe6D3U37%2Fxqc3t4BGkVGniNd1u6nTx5OAtB32gPIFioHbknxracikT8vPY1IQUs6yzKPccSK7MqkLQ1ejiyyJzjVcniSxKVrDBzC5vsVgCBY%2FpFIahBT2WvXOV1opR7wf0DWQHCvtG0yVFllZHzyuFt6p5nVwYrfC1Ndl0oljqypMp~05Uk~ZbwuAzdsBiKnNRv6~CmfkHkkvElszhUV8DvmbZ9Ku0W%3D%3D&l=XXtKjFpFif0eSbF9k4kZ%2F%2FdjtMjKEmV16dMoSqY~M7no4Teia9Jjw9NTa9rLWkybtqtFdxkraZhhOER0ntNv6Vf8GzMFbl3BE5JCyBlOdaAmQZDcn3AX7qdXoCJzFOBkSyDBYO8QSqR5054sgNyzd~lSljBdQiMkHQT4ZzFglNR0aqMAG6iUnwudaXsIXrUMz8MVXMxnvLzrnzHWgjM3hVpIEk8~pCCAMgtLDCGeglp9DwB3sW7Z%2FFhQAV2kwVbRUvlR4Zb3ioZeBQo6NZ~Efp%3D%3D&o=zSYDU4jpSwrZMzrrhMmn7zU7LYG31PHsGg0yKB3LCV~25kPvi9~UKp5W7RDCg7usg~4eZS2PalP0Oj00QnrxdZxRQaykxBONPlSpWALczN8G%2FK41Alo7xshgstKOCZnU~9PYZEjZm9smUyp6DZ4yN~gkK8q9hIBOJ7CNKZexcd1PmYyD6OtsK~IL%2FzX2WmsXwK%2FVPHwXdLtFDWf3VoiMwmQI6a0la2A3~~MErOYMv5GIop0OAlRySwvplm5decYERWN3FpAUSxwJap9qsGHbucTjEuTAQmC63IC2DRncr~4l9C9wYNiLGYTRjZIUb81FyT4eco6t88HzAcI%2FOI9tGqBwiwIXlUf3jfD8UCxnz2A4yJpVeoaxVVn5E~N7Gx6QDe8ju2ZXASmR3Wf3W9z8XVwB9ay4BKAjZw3rSiS9j9xJdpTlcF9FLgHRcnxP07k5C%2FTPjdtvKWjCXV95VnhpqiwEJEaspFqZ3i5fL92JHBi%3D&f=R4V1yt4qBtg7iVaEI%2FRt7bzFDWKiTJQNVU9NHUE7zHm%3D&e=3OquL8H5CUu5uQHm0FvVC7T4iuvBjBAxgaoimEOl8BlCQFYCHWqqwWeoJQ192vqNfRnE6EBWXWAh2uP1CY04GgVrjzLx8yU%2BnhnocVKZAWE%3D&v=uPIUmhYqqvg%2FMgrofLc64EGlx1BH3oNhIS8BDwVk5MifJDYXs7zY%2BAdJFqdgyPb9&idf=iOUc5%2FKUqaDwsnCua7hHj6ONNoj7GSWT091BRfJaPGYGogzVsGHQFfJ6XDnNR3ooixcAZhYSJmVlRbtNjW8jVWwTv9glAgmfP9DTBuYXmK1xDk6Bqr57FeMs5fDOv74kg24VqZwrw7FgjvbTNn01CgHPhIr0Jyx66N6b2aTb9sw%3D&w=A0M9HuZpgkIO~316z%2FUlWnAfidxq9sa%2FSSv5YO5eVDMvUaaXSiZtTHrU3EX1LhhFdCXKiuYiY7RPH4OecddeY3LDKf7elbLxxXSoK0pZvt0%3D&ct=99fWE2kpynX9Oh2dsd3y~W%3D%3D&_callback=_1654874627283_7219&h=e0eaeaae58067eb19b8c6aad3138fd61"

    payload = {}
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://hotel.bestwehotel.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Cookie': '_fmdata=3OquL8H5CUu5uQHm0FvVC7T4iuvBjBAxgaoimEOl8BlCQFYCHWqqwWeoJQ192vqNfRnE6EBWXWAh2uP1CY04GgVrjzLx8yU+nhnocVKZAWE=; _xid=U4liMjKC64hdx1SU5jr226UYIdw15p6mX0JfyTSX3OjKM+pww70/Nq9wNwIWorl5eOUbXdTy/DlKYg/ttUc7VA==; c=Vbq5tj7z-1654871280054-9e5bb2f01f2bb-282376515'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    result = json.loads(response.text.replace('_1654874627283_7219(', '').replace(')', ''))
    return result.get('result').get('tokenId')


def getImageVerify(mobile):
    headers = {
        "authority": "hotel.bestwehotel.com",
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://hotel.bestwehotel.com/NewLogin/?go=https%3A%2F%2Fhotel.bestwehotel.com",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "image",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    cookies = {
        "tongji_key": "7058ef8d-a5dc-4e05-77ac-2ffe42640bf8",
        "gdp_user_id": "5479b2e4-93e6-4652-9ada-57cded41c1fc",
        "c": "Vbq5tj7z-1654871280054-9e5bb2f01f2bb-282376515",
        "_fmdata": "3OquL8H5CUu5uQHm0FvVC7T4iuvBjBAxgaoimEOl8BlCQFYCHWqqwWeoJQ192vqNfRnE6EBWXWAh2uP1CY04GgVrjzLx8yU%2BnhnocVKZAWE%3D",
        "989d198a589474f0_gdp_session_id": "728eba70-1a3b-438c-94c8-f28801fe0757",
        "_xid": "U4liMjKC64hdx1SU5jr226UYIdw15p6mX0JfyTSX3Ogo9GxcJhJS8EpQZ1sGeZehmmcFGL73%2BDL7rwDysaGJAw%3D%3D",
        "989d198a589474f0_gdp_sequence_ids": "%7B%22globalKey%22%3A86%2C%22VISIT%22%3A2%2C%22PAGE%22%3A9%2C%22VIEW_CHANGE%22%3A49%2C%22VIEW_CLICK%22%3A29%7D",
        "989d198a589474f0_gdp_session_id_728eba70-1a3b-438c-94c8-f28801fe0757": "true"
    }
    url = "https://hotel.bestwehotel.com/api/safeverify/getImageVerify"
    params = {
        "mobile": mobile,
        "verifyImageKey": str(random.random())
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    with open('verify.jpg', 'wb') as verify:
        verify.write(response.content)
    verify.close()


def login(mobile, password, verifyCode, tokeId: str):
    headers = {
        "authority": "hotel.bestwehotel.com",
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "origin": "https://hotel.bestwehotel.com",
        "pragma": "no-cache",
        "referer": "https://hotel.bestwehotel.com/NewLogin/?go=https%3A%2F%2Fhotel.bestwehotel.com",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "x-we-sdk": "1.5.5"
    }
    cookies = {
        "tongji_key": "7058ef8d-a5dc-4e05-77ac-2ffe42640bf8",
        "gdp_user_id": "5479b2e4-93e6-4652-9ada-57cded41c1fc",
        "c": "Vbq5tj7z-1654871280054-9e5bb2f01f2bb-282376515",
        "_fmdata": "3OquL8H5CUu5uQHm0FvVC7T4iuvBjBAxgaoimEOl8BlCQFYCHWqqwWeoJQ192vqNfRnE6EBWXWAh2uP1CY04GgVrjzLx8yU%2BnhnocVKZAWE%3D",
        "989d198a589474f0_gdp_session_id": "728eba70-1a3b-438c-94c8-f28801fe0757",
        "_xid": "U4liMjKC64hdx1SU5jr226UYIdw15p6mX0JfyTSX3Ogo9GxcJhJS8EpQZ1sGeZehmmcFGL73%2BDL7rwDysaGJAw%3D%3D",
        "989d198a589474f0_gdp_sequence_ids": "%7B%22globalKey%22%3A87%2C%22VISIT%22%3A2%2C%22PAGE%22%3A9%2C%22VIEW_CHANGE%22%3A49%2C%22VIEW_CLICK%22%3A30%7D",
        "989d198a589474f0_gdp_session_id_728eba70-1a3b-438c-94c8-f28801fe0757": "true"
    }
    url = "https://hotel.bestwehotel.com/api/member/login"
    password = execjs.compile(open('sdk.js', 'r', encoding='UTF-8').read()).call('encryptAES', password)
    data = {
        "groupTypeId": 2,
        "type": 1,
        # 手机号
        "mobile": mobile,
        # 密码（AES加密）
        "password": password,
        "rememberMe": False,
        # 验证码
        "verifyCode": verifyCode,
        # token
        "TDFingerprint": tokeId,
        # md5(token)
        "blackBoxMd5": hashlib.md5(tokeId.encode()).hexdigest(),
        "did": "f9398ad537f2bac5bcc0342ba7bbf6df",
        "deviceInfo": {
            "fingerPrintJs": "da1776cd20031b73d2e5c8d513d5b519",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            "platform": "Win32"
        }
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=json.dumps(data))

    print(response.json())


if __name__ == '__main__':
    phone = '1111111111'
    passwd = '12345'
    tokeId = get_tokeId()
    print(f'获取token-id：{tokeId}')
    getImageVerify(phone)
    verify_key = verify_ocr()
    print(f'获取验码：{verify_key}')
    login(mobile=phone, password=passwd, verifyCode=verify_key, tokeId=tokeId)
