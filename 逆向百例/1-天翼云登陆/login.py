import time

import requests
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://m.ctyun.cn/wap/main/auth/login",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Mobile Safari/537.36",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\""
}
cookies = {
    "Hm_lvt_4b4ce93f1c92033213556e55cb65769f": "1652620474",
    "sid1": "1652620474647-F270BDF07CD5810709655383DA1F3528",
    "sid2": "1652620474647-F270BDF07CD5810709655383DA1F3528",
    "mvid": "c8f8cad0-f1ac-4adb-823c-8a089c7901c8",
    "JSESSIONID": "23E5337EB477B4668DC007050F2E94A9",
    "Hm_lpvt_4b4ce93f1c92033213556e55cb65769f": "1652620983",
    "pvid": "11"
}
url = "https://m.ctyun.cn/account/login"

wd = 'Ram'
email = '111111111@qq.com'

js_code = open('password.js', 'r', encoding='utf-8').read()
result = execjs.compile(js_code).call('params', wd, email)
params = {
    "userName": email,
    "password": result[0],
    "referrer": "wap",
    "mainVersion": "300021100",
    "comParam_curTime": str(int(time.time() * 1000) - 828),
    "comParam_seqCode": result[1],
    "comParam_signature": "e412d432db0b7a792c4454d93b07082b",
    "isCheck": "true",
    "locale": "zh-cn"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)