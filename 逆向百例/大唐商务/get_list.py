import re

import requests
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


def get_list(page):
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://www.cdt-ec.com",
        "Pragma": "no-cache",
        "Referer": "https://www.cdt-ec.com/notice/moreController/toMore?globleType=4&u_atoken=53923438-6712-4165-b803-905184b76d0a&u_asession=01kkx1NxcL5rJWMPblrOx_QbKWXuM0n9zYnf-j4Irb2fBKj0pnddiJbIWltBm4yNl_X0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K-LEGGM13_bckRE0IizjZodxVHfHh0bOAPs63Hk1YYXRmBkFo3NEHBv0PZUm6pbxQU&u_asig=053rs23s8kYv45len_QlH5suZQpfPzd_PJK74uV-DqJWPRjyFXrPuOYTiqQVv4lB9Lanmy3w8c6nt1UE-Dbu5ZV3n8fUztV2zOz65pDdhyJnDV80DRMMwvE8Z1qhjQ7_7mvgU4eDXPckfu2pYMCSSjJ6EdAJ69bR0N8yW37GJ-cnT9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzYgGRO0zmKc5eCYPJsjJu9x_HFj-nk1BGSALH_t7grqWRB9z0FS8LvnysI5y9VrJhu3h9VXwMyh6PgyDIVSG1W-GOX3iOiTMatN1f8rdYOlA_xnDew72tJsKIyW6QPcnNrwbPh0_hDC-QcP9gVY-d9PsVBHs3B4_1i6tZDiKNT24mWspDxyAEEo4kbsryBKb9Q&u_aref=dExR6tbxWN1kEB%2Fmx5x7h4QeP90%3D",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }

    cookie_ssxmod_itna = execjs.compile(open('hook_cookie.js', 'r', encoding='utf-8').read()).call('get_ck')
    ssxmod_itna = cookie_ssxmod_itna.split(';')[0].replace('ssxmod_itna=', '')
    print(f'ssxmod_itna: {ssxmod_itna}')
    cookies = {
        "acw_sc__v2": "62c9329a4d34ddd64f14b5013ae447ef7817e788",
        "acw_tc": "2760778616573528588224989eb7a325cc161e9889d60301267455c5b90266",
        "ssxmod_itna2": "YqfxBD0D2QG=3GKGHipWcYGkDuiKDgiAGnQ2xnKf9x5DsQiDL0hYu8lfAloN03Tx5FqiG407YCx7=D+hiD==",
        "acw_sc__v3": "62c93393a310ed7ec750087ccddb969c70391825",
        "JSESSIONID": "04F4AF48FC2490E7EF541EF19E3AEE1E",
        "ssxmod_itna": ssxmod_itna
    }
    url = "https://www.cdt-ec.com/notice/moreController/getList"
    data = {
        "page": str(page),
        "limit": "10",
        "messagetype": "4",
        "startDate": "",
        "endDate": ""
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    print(response)
    ck_key = re.search("arg1='(.*?)'", response.text).group(1)
    print('获取key: ', ck_key)
    acw_sc__v2 = execjs.compile(open('ck.js', 'r', encoding='utf-8').read()).call('get_acw_v2', ck_key)
    cookies['acw_sc__v2'] = acw_sc__v2
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    print(response.text)


if __name__ == '__main__':
    for i in range(1, 11):
        get_list(i)
