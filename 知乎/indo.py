# -*- coding: utf-8 -*-
# @Time    : 2022/8/31 22:59
# @Author  : Ram.zhang
# @File    : indo.py
# @Software: PyCharm
from hashlib import md5
from urllib import parse

import execjs

zse93 = '101_3_3.0'
dc0 = 'AKBWRc2QfhWPTtoY4iNa_vQkUW6pZ978DlE=|1662050928'
xZst81 = '3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPF7FBxGLMYqpmjqLsJwN0jgw0pcUmHBwmpCYydCe9Sc9f9qxp9hL9w9xMQCeTvMxMEupycggLkrxMhcexeMYL-93OSwSGW9FmpBF9pXXy2rwyJhFmYqe9ugCOTqo_AU2scqxGkqYLnUS9WgFOWwFK1uc1ri9BEbOYz9cYswc9ivO_8uF9VqfzFuVmaweVUhOxAhoYBBgq66r12hg8S7VGq9L9ouVBtB2B_cP1zDxCZvCC1qwYBwHGqu2MU9S0r7wLiUeM4DwmsUwMyC3OCqx1nwLYCGeYfvX8QTXBBrOC'
api = f'/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=Github&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal'

data = "+".join([zse93, api, dc0, xZst81])

print(md5(data.encode()).hexdigest())


def get_data():
    import requests
    sign = execjs.compile(open(f'D:\SpiderProject\yuanrenxue\知乎\zhihu\sdk.js', 'r', encoding='utf-8').read()).call('sign', md5(data.encode()).hexdigest())
    print(sign)
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
        "x-ab-pb": "CtIBGwA/AEcAtABpAWoBdAE7AswC1wLYAk8DUAOgA6EDogO3A/MD9AMzBIwEjQSmBNYEEQUyBVEFiwWMBZ4FMAYxBn4G6wYnB3cHeAfYB9wH3QcnCGcIdAh2CHkIxQjaCD8JQglUCVUJYAmNCcMJxAnFCcYJxwnICckJygnLCcwJ0QnlCfEJ9AkECkkKZQprCpgKpQqpCr4KxArUCt0K7Qr9Cv4KKQs7CzwLQwtGC3ELdguFC4cLjQu5C8AL1wvgC+UL5gssDDgMcQyPDKwMwwzJDLULEmkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM=",
        "x-api-version": "3.0.91",
        "x-app-za": "OS=Web",
        "x-kl-kes-ajax-request": "Ajax_Request",
        "x-requested-with": "fetch",
        "x-zse-93": "101_3_3.0",
        "x-zse-96": sign,
        "x-zst-81": "3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIeQuK7AFpS6O1vukyQ_R0rRnsyukMGvxBEqeCiRnxEL2ZZrxmDucmqhPXnXFMTAoTF6RhRuLPF7FBxGLMYqpmjqLsJwN0jgw0pcUmHBwmpCYydCe9Sc9f9qxp9hL9w9xMQCeTvMxMEupycggLkrxMhcexeMYL-93OSwSGW9FmpBF9pXXy2rwyJhFmYqe9ugCOTqo_AU2scqxGkqYLnUS9WgFOWwFK1uc1ri9BEbOYz9cYswc9ivO_8uF9VqfzFuVmaweVUhOxAhoYBBgq66r12hg8S7VGq9L9ouVBtB2B_cP1zDxCZvCC1qwYBwHGqu2MU9S0r7wLiUeM4DwmsUwMyC3OCqx1nwLYCGeYfvX8QTXBBrOC"
    }
    cookies = {
        "_zap": "14079a4c-e95c-44ba-9c1d-d9db225a7d8a",
        "_xsrf": "ab743e2d-a669-471f-9416-d6f169beb3fa",
        "Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49": "1662050929",
        "d_c0": "AKBWRc2QfhWPTtoY4iNa_vQkUW6pZ978DlE=|1662050928",
        "SESSIONID": "SS2NJXY5hFeJXCh4eRXlkbrIuRiz8fOdrHjbMtU4qnz",
        "JOID": "VlEWAkJKTuKRMAXrek9uMpD0kJVoFBfS13dQuE0vBY3ZYEuORDyk-PcwAuNwFDIlwqHVuEU56V8EpVjbb_Mon5I=",
        "osd": "Wl0XAEhGQuOTOgnne01kPpz1kp9kGBbQ3XtcuU8lCYHYYkGCSD2m8vs8A-F6GD4kwKvZtEQ741MIpFrRY_8pnZg=",
        "Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49": "1662050997",
        "KLBRSID": "c450def82e5863a200934bb67541d696|1662051007|1662050927"
    }
    url = "https://www.zhihu.com/api/v4/search_v3"
    params = {
        "gk_version": "gz-gaokao",
        "t": "general",
        "q": "Github",
        "correction": "1",
        "offset": "0",
        "limit": "20",
        "filter_fields": "",
        "lc_idx": "0",
        "show_all_topics": "0",
        "search_source": "Normal"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.json())


if __name__ == '__main__':
    get_data()
