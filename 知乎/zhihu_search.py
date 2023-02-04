# -*- coding: utf-8 -*-
# @Time    : 2022/9/4 13:35
# @Author  : Ram.zhang
# @File    : zhihu_search.py
# @Software: PyCharm
import requests
import execjs
import hashlib

# 版本号
zse93 = '101_3_3.0'
# cookie的d_c0字段值
dc0 = 'AOAXQtbXgRWPTnr2Ecvcryw_jhhiudCwCmk=|1662270876'
# headres的x-zst-81字段值(写死)
xZst81 = '3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPFHcfm8pf8uLmqh2B2gYC4bS10uOOJ9gBTGtf89SqQbeBECF_VvLqKX2moReTvM3VfJxmWUw03uOLs9VG2UpY5qSfbAr0qULK-hVYtuwOChHGb0CVfhH_uDwBWCSGriVsxJxMkUXM_GSVJXwpceXLEuCmFv9figwLwG3fmGNLcv3_HG39Cqfzu9VLQUVLVUVV19CKs8pGrLV9NugOrTF__qXMcgLKqwS16CVqpGSLwro1BwcKgUoGRGe9Qqufp9VpFU2q-BtqPcuCzDSBQreM3DN9Q0UqaCwpCwLL-wFC'
api = '/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=python&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal'


def encrypt(text):
    print(text)
    js_code = open(r'code.js', 'r', encoding='utf-8').read()
    md5_str = hashlib.md5(text.encode()).hexdigest()
    print(f'md5_str: {md5_str}')
    return execjs.compile(js_code).call('sign', md5_str)


def search_info():
    encrypt_text = "+".join([zse93, api, dc0, xZst81])
    x_zse_96 = encrypt(encrypt_text)
    print(f'x-zse-96: {x_zse_96}')
    headers = {
        "authority": "www.zhihu.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "referer": "https://www.zhihu.com/search?type=content&q=python",
        "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        "x-ab-param": "",
        "x-ab-pb": "CtIBGwA/AEcAtABpAWoBdAE7AswC1wLYAk8DUAOgA6EDogO3A/MD9AMzBIwEjQSmBNYEEQUyBVEFiwWMBZ4FMAYxBn4G6wYnB3cHeAfYB9wH3QcnCGcIdAh2CHkIxQjaCD8JQglUCVUJYAmNCcMJxAnFCcYJxwnICckJygnLCcwJ0QnlCfEJ9AkECkkKZQprCpgKpQqpCr4KxArUCt0K7Qr9Cv4KKQs7CzwLQwtGC3ELdguFC4cLjQu5C8AL1wvgC+UL5gssDDgMcQyPDKwMwwzJDLULEmkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM=",
        "x-api-version": "3.0.91",
        "x-app-za": "OS=Web",
        "x-kl-kes-ajax-request": "Ajax_Request",
        "x-requested-with": "fetch",
        "x-zse-93": "101_3_3.0",
        "x-zse-96": x_zse_96,
        "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPFHcfm8pf8uLmqh2B2gYC4bS10uOOJ9gBTGtf89SqQbeBECF_VvLqKX2moReTvM3VfJxmWUw03uOLs9VG2UpY5qSfbAr0qULK-hVYtuwOChHGb0CVfhH_uDwBWCSGriVsxJxMkUXM_GSVJXwpceXLEuCmFv9figwLwG3fmGNLcv3_HG39Cqfzu9VLQUVLVUVV19CKs8pGrLV9NugOrTF__qXMcgLKqwS16CVqpGSLwro1BwcKgUoGRGe9Qqufp9VpFU2q-BtqPcuCzDSBQreM3DN9Q0UqaCwpCwLL-wFC"
    }
    cookies = {
        "_zap": "8cf154d9-1023-4f3a-8430-a98f040c9fc3",
        "_xsrf": "7261a61e-6509-4ff5-88f0-7c3576afcd18",
        "Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49": "1662270877",
        "d_c0": "AOAXQtbXgRWPTnr2Ecvcryw_jhhiudCwCmk=|1662270876",
        "SESSIONID": "iMEkiV8AdFGcsvdhqJu97xXfsilXfKp8UucNsB1Dsf1",
        "JOID": "U1gWA0mQhql2ETclKJEkPTfH4aY_-MjvH3tgHmr3we0WYEJAQw-7vBQTNSUpoCXH2V1LdUn3sfp7S542XQ1vQN4=",
        "osd": "UlwdBUuRgqJwEzYhI5cmPDPM56Q-_MPpHXpkFWz1wOkdZkBBRwS9vhUXPiMroSHM319KcULxs_t_QJg0XAlkRtw=",
        "Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49": "1662270941",
        "KLBRSID": "af132c66e9ed2b57686ff5c489976b91|1662270941|1662270875"
    }
    url = "https://www.zhihu.com/api/v4/search_v3"
    params = {
        "gk_version": "gz-gaokao",
        "t": "general",
        "q": "python",
        "correction": "1",
        "offset": "0",
        "limit": "20",
        "filter_fields": "",
        "lc_idx": "0",
        "show_all_topics": "0",
        "search_source": "Normal"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
    print(response)


search_info()
