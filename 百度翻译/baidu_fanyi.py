# -*- coding: utf-8 -*-
# @Time    : 2021/10/24 21:33
# @Author  : Ram.zhang
# @File    : baidu_fanyi.py
# @Software: PyCharm
import requests
import execjs


def sign(field: str):
    return execjs.compile(open('sign.js', 'r', encoding='utf-8').read()).call('sign', field)


def baidu_fanyi(field: str):
    url = "https://fanyi.baidu.com/v2transapi?from=en&to=zh"

    payload = f"from=en&to=zh&query={field}&transtype=realtime&simple_means_flag=3&sign={sign(field)}&token=ae51517b5ffb334670f5accb24417ba0&domain=common"
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Microsoft Edge";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.30',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://fanyi.baidu.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://fanyi.baidu.com/?aldtype=16047',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cookie': 'BAIDUID=2F798773024F73C07CDF33A3D237950A:FG=1; BIDUPSID=8AF2E2A49788DE9465524F90F4B04359; PSTM=1550554521; MCITY=-%3A; BDUSS=XBKTFNkR3FTWktmRWN4ZWlpczF-V0lOMDZYdnNpWElrUVhTcHNjVklpbG9nVnRkRVFBQUFBJCQAAAAAAAAAAAEAAAAtqMh1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGj0M11o9DNdW; BDUSS_BFESS=XBKTFNkR3FTWktmRWN4ZWlpczF-V0lOMDZYdnNpWElrUVhTcHNjVklpbG9nVnRkRVFBQUFBJCQAAAAAAAAAAAEAAAAtqMh1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGj0M11o9DNdW; BA_HECTOR=01850425ahaga585g01gnamau0r; __yjs_duid=1_9fc457f41d1f6287ee49f5bff49ee8241635080656391; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1635080657; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1635080657; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; __yjs_st=2_NTJlNGUwNjQ0ZGJhM2Q1YmNjYzMxYmIyYjRiMDQwN2NjOWQwYTcxMjEzZDgyMzczZTYwZTJjMmFlOGQwNTA0ZTc2MjZjZjg3NTU0MjJhZGM0YzMwYjIyOGE3NzFlYWRhYTUzY2U3NzlmMjExN2UxZGYwMDg0OTYxZThhYzg1NzBmMjBjNzA0NzY1MjM3OGMyODM5MWE4MjA4NGFiNmRlMGRiMTI2MTUyZmNjNDY3NmQzNzUxM2E0NWVkNmFhZTIyZDQxZTIyY2JhNTI3MjEwNDRlZWNlNzAwMGM4ZWRlNTI1ZWRhNjFiMTBhM2ZiOWFmNmQ3NDQ3M2U4MTllNmEwNjhmYzdlNWRjZDVlODA3NTg4NmVmZjk4YjE0NzRkYjgxXzdfZTg5ZTVjMGI=; ab_sr=1.0.1_ZjM5ZTgxMjBjOThmYjY3OTZhMmJkMWFiZTFkOTM0ZWY3N2E3NzE1MGFlZWQ3ZGY2ZGU5M2MwNzZlYzQzNzZlZTA2NTBhZDM4NjUzODcxMzdkMDg5MWMwZTcxNzU0YWNjNjNiZDc2OWFlZDE5OGFlYjBmYTQwYjMzNGNiYWVhMTJlMWM3NmE0MzNlNGFmODU2MWViYTA1YTRmZjgyM2VhNg=='
    }

    response = requests.request("POST", url, headers=headers, data=payload).json()

    result = response.get('trans_result').get('data')[0].get('dst')
    print(result)


if __name__ == '__main__':
    baidu_fanyi('hello')
