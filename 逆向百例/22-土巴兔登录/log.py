# -*- coding: utf-8 -*-
# @Time    : 2022/6/13 23:31
# @Author  : Ram.zhang
# @File    : log.py
# @Software: PyCharm
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests


headers = {
    "authority": "www.to8to.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://www.to8to.com",
    "pragma": "no-cache",
    "referer": "https://www.to8to.com/new_login.php",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
}
cookies = {
    "to8to_tcode": "sz",
    # "to8to_tname": "æ·±åœ³",
    "to8to_townid": "1130",
    "uid": "CgoLHWKnSY4rAJsCBAshAg==",
    "to8to_landpage": "https%3A//www.to8to.com/",
    "to8to_sourcepage": "",
    "to8to_landtime": "1655130514",
    "to8to_nowpage": "https%253A%252F%252Fwww.to8to.com%252F",
    "tracker2019jssdkcross": "%7B%22distinct_id%22%3A%221815d7763fe412-012c4491f87534-26021b51-2073600-1815d7763ff5ce%22%7D",
    "to8tocookieid": "1815d7763fe412-012c4491f87534-26021b51-2073600-1815d7763ff5ce",
    "tracker2019session": "%7B%22session%22%3A%221815d7764074c6-0c09cdd802c355-26021b51-2073600-1815d776408859%22%7D",
    "to8to_cook": "OkOcClPzRWV8ZFJlCIF4Ag==",
    "PHPSESSID": "201ikljv9al82p55p46rra48j3",
    "agreementRead": "true",
    "to8tosessionid": "s_769184064937141f4eecfb98ac0f1a04",
    "act": "freshen"
}
url = "https://www.to8to.com/new_login.php"
password = execjs.compile(open('sdk_passwd.js', 'r', encoding='utf-8').read()).call('rsaString', 'a123456789')
print(password)
data = {
    "referer": "https://www.to8to.com/new_login.php",
    "val": "kVdXdBffOo6u0bc8QDENnzgBOG6A9xTrhu102v9fTZCL%2Bf9%2BpOtPJ9UmucohBOC8PhK7KubLvKgBvPGspB7gkypebEbsgEA%2F%2B%2Bxmr8qwOFEaw0aT8SsPqJYRWdV%2F9eqLTItq%2FgRkSdBe0M7dMyYDvncUoZhSFAgIJtko6J6urSs%3D",
    "password": password
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)