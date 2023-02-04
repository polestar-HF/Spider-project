# -*- coding: utf-8 -*-
# @Time    : 2022/6/9 23:03
# @Author  : Ram.zhang
# @File    : login_mofang.py
# @Software: PyCharm
import execjs
import requests
import json

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.23mofang.com",
    "Pragma": "no-cache",
    "Referer": "https://www.23mofang.com/auth/signin",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "mf-origin-uri": "/auth/signin",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "_traceid": "06ecc720-e7f4-11ec-9d7f-97681342a9c9",
    "mw_fp": "afhxK2wOV9vzVY0ptC8PHQi50np6VKlN",
    "_bl_uid": "y9lvs45q7bL1na1mIh4Ul77cwyU8",
    "__snaker__id": "PK0xpMzXqVLDIhTo",
    "_9755xjdesxxd_": "32",
    "YD00952581327092%3AWM_NI": "4D54vfqJs8GR%2BESfKu2aecdjBccibXF1eJ5vrBN%2FJLiKiwr0i72jw57ytpGaYNspOqzJhUJhekl%2FZcNYML%2FtfgVlckYNqal3RT2N7JOQ1sQB2OFOxheob%2FbUaxz328rRUzY%3D",
    "YD00952581327092%3AWM_NIKE": "9ca17ae2e6ffcda170e2e6eed0ec7daeaf9fb8e47aa1a88eb7d84f938f9fadc85faa8d9a98e15caf8781d4c82af0fea7c3b92af89cfbd5f56eb396bdd9c65ae99b9d87ca7ff2bfab84e76282bdad8ae15486efababb87eb29e82d0c948ab95a798f13cabe9fe8bf63ff5a7bc91c66b9b92bd91ce7bba96a8b6c964a7b5a4d0d9698e8783adae80a6b99a8de2619b92bf82ef39928cfeafb6428d8fff94d44af2918ab0fb64a7b1aed0e15fa3a8b6d4b134b28e9b9bdc37e2a3",
    "YD00952581327092%3AWM_TID": "mOuwOFLNxQZBRQEAURfAFzXBgfeiNf3A",
    "acw_tc": "2760829b16547853909912789eb915eff45b62dd82a19c7591bf7e0fc2993e",
    "gdxidpyhxdE": "bnJ0YXDse64uK4%2Fjl%5CWgukZITaiqm3QyAmVMRiPWlJgsWgJu3Kbkr4RvZsj%5CHryDSrAoEaBfJ%2FHGsHIOBPdIpovXrc01WdLb69mfl4%2BoLPr2X427GnzvuiPDVti7HA0YLCcoHWBy64YBZLWtJX4a%2FgMHfuh%2FBOI7J5Gdz6tAwpEHDjNp%3A1654787344293"
}
url = "https://www.23mofang.com/web/api/new/user/signin"
result = execjs.compile(open('sign.js', 'r', encoding='utf-8').read()).call('get_sign')
print(result)
params = {
    "sign_v": result[1],
    "sign_ts": result[2],
    "sign": result[0]
}
print(params)
data = {
    "username": "17704011364",
    "password": "11111",
    "nationCode": "86",
    "neCaptcha": "CN31_UrWPxqoIFx6_WuCmV-FAJvCibXpkwCeGRI_f2gRs68kaJbu67ksb8Wo6UjS.uXWLXxwp_XwHBkMMBrKvZ1vfiDSFyHjrmHKvF_leT8-5BodsOCmFOjNDUOJZMox2set2iW_rHIh2kuRUZIjkOfYBah8Av7B5qoEnLiMKIi9kqGSFv-40rt_ra04Tcojgn8JFWqOk2akQ9ZGgKHPHSPyqiW65anPcb7wQEyomI9P-RdxvjOtiGGEej0is81MV8Z4Rpfgp8K0BsN2EdZKbWEFhmAF_HF4TV1Tbqy6lQw1mK9M9W120OOU1lU8PijoNMeDgctiMjVx9rvu2HdYPVbWxVS0Odf_2GgPy_MKKyQarOCP9XTZxfEmY-lnSJAQtExdSG_O6A.v8XBupDxDj.ePaKsBKf-mx.uS5ePJAl0eyanlMx1reZQxo4bPtFBv9SbsiXMJwXkPDQtIeZNLgHlq2snTMUBlDlWJFUYJxQ60WI5gOoXJ7kWn1EZ5wOcj3",
    "isWechat": False
}
data = json.dumps(data)
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
