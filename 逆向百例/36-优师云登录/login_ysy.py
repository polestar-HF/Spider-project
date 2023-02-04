# -*- coding: utf-8 -*-
# @Time    : 2022/6/23 23:59
# @Author  : Ram.zhang
# @File    : login_ysy.py
# @Software: PyCharm
import execjs
import requests


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Authorization": "Basic cGlnOnBpZw==",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Origin": "https://www.youshiyun.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://www.youshiyun.com.cn/login/index",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "isToken": "false",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "OEL_TP_SID": "FH666071-WMB1F2YN89DJ26I1HHJG2-NC0Q5R4L-VDMI4",
    "PHPSESSID": "8b321489d9e3687e737aed0ff4679b37",
    "s_d0": "eNrz4A12DQ729PeL9%2FV3cfUxiKvOTLFScvMwMzMzMDfUDfd1MnQzivSzsHTxMjLzNPTw8HI30vVzNgg0DTLx0Q1z8fU0UdJJLrEyNDM1tbQ0Mzc3Njcw1klMRhKwMDLUya2wMjcyMKiNAgB33RyP"
}
url = "https://www.youshiyun.com.cn/api/auth/user/login"
password = execjs.compile(open('sdk_passwd.js', 'r', encoding='utf-8').read()).call('get_passwd', "12231312312")
print(password)
# "5wFTjB8Oye7ruqCYODI/JQ=="
params = {
    "username": "12231312312",
    "password": password,
    "grant_type": "password",
    "scope": "server"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params)

print(response.text)