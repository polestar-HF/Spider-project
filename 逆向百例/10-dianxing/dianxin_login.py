# -*- coding: utf-8 -*-
# @Time    : 2022/5/25 23:27
# @Author  : Ram.zhang
# @File    : dianxin_login.py
# @Software: PyCharm
import base64

import cv2
import execjs
import requests

session = requests.session()


def verify_ocr():
    # 读取背景图片和缺口图片
    bg_img = cv2.imread('img/background.jpg')  # 背景图片
    tp_img = cv2.imread('img/slide.jpg')  # 缺口图片
    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    tp_edge = cv2.Canny(tp_img, 100, 200)
    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)
    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配

    # 绘制方框
    th, tw = tp_pic.shape[:2]
    tl = max_loc  # 左上角点的坐标
    br = (tl[0] + tw, tl[1] + th)  # 右下角点的坐标
    cv2.rectangle(bg_img, tl, br, (0, 0, 255), 2)  # 绘制矩形
    cv2.imwrite('img/all.jpg', bg_img)  # 保存在本地
    # 返回缺口的X坐标
    return tl[0]


def get_pic():
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "Origin": "https://login.189.cn",
        "Pragma": "no-cache",
        "Referer": "https://login.189.cn/web/login",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "code_v": "20170913",
        "pBlLEdekNHvBO": "5N.jfU1fIXOkCQUFIaZpPJmzOn0LHG47j2Rxwjpbo5jU7DH.Tofp8iD6u0M32BgpLqnG6T6uHH4Pvi8p8ZrqbeA",
        "svid": "9851F90BE3DC4D3968B131992A70358D",
        "s_fid": "389575DE89657EAB-380FAEF7CCC866F1",
        "loginStatus": "non-logined",
        "lvid": "725ae36d2358625fab4d5f7c1dcf63ff",
        "nvid": "1",
        "trkId": "48EB8110-E9EB-45D7-982F-5D0F67DCF0F5",
        "s_cc": "true",
        "sajssdk_2015_cross_new_user": "1",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22MTgwZmI1ZGNlZDIxOTItMDhmOWQxYzk1YmNiNzctMWEzNDMzNzAtMjA3MzYwMC0xODBmYjVkY2VkM2ExMA%3D%3D%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22180fb5dced2192-08f9d1c95bcb77-1a343370-2073600-180fb5dced3a10%22%7D",
        "JSESSIONIDWEB-PROD": "4a1fead9-b467-4fb1-b5de-7eb41f270159",
        "EcsCaptchaKey": "UUeEs1i13JpNfcOwylfDibRxIl%2BzZmv%2FsofJMd7w3lF%2B7UjDM9w3cw%3D%3D",
        "ECS_ReqInfo_login1": "U2FsdGVkX19EoFpR5%2B0Q%2BaDTutGh%2FCYxga%2F1nNXxKaSQMb2JIxGeti9ze0MhbEH8LDDrneclHmPWlJmW9IYg6Q%3D%3D",
        "pBlLEdekNHvBP": "53LytRKti1NGqqqDq5eho1qPsOB5bisKQdYmNf5NnHVEOeScEME4HvCkRHJC3j4KR7NusYlCgBubMQney9EqTlXr2urX6ojYHbOhDx0ZT8VxGTC4XJ8L40d5c0Ejkz4TO9IkJ.puuJwg3_cdid5aCGJUuKRo366GbBcq2zu1BUlq1UTjK_XHybCrIW3DkmM.qn27u7cqGh2g5jqVnDjeuR78Axn8PGD6L94lsbRD1xQBzl7u4ZVnfZy..QsH15mquJmtf8GKxLahFsn.7lkLcX9cYktMqLe5nJVF19I0c2YlzqCM4glRm3xmUo_r33tJeVLLY.PFCsDDkve.By3MY63",
        "s_sq": "eshipeship-189-all%3D%2526pid%253D%25252Fweb%25252Flogin%2526pidt%253D1%2526oid%253Djavascript%25253Avoid%2525280%252529%25253B%2526ot%253DA",
        "trkHmClickCoords": "866-515-743"
    }
    url = "https://login.189.cn/web/getPic"
    params = {
        "oYid6CPr": "5RFuspNY5C.IhP7yT9r4rvQbzB7rtq1zkTmgxyCLNQ72qdirT7blEqJY.yjp5aw3x5g8OrquncoqREiGBwW9mOybPRi1G1tQX5SQH0_Jm_mHef2bMrIuauaUQo1weR.KFaHq1r9pFKlSGWv8.H9Ws9OmObElOnMwlpzrfejbryLP5XLf3D_hF_.qnxUrP1zN8yrFMBsbqHCYHxF1RqevYaVs_ZK0iQ3Tcl3EGoBWIZCxtue5XTL0P5fOND8RA09fke5qK.0P5koMyPuWlVGcgs1.24o2csZ7Wl86CjjoQ27WWzYXDTURxlsCYaN69F7uNB0FiuysJIbU_2WW8rYtyAAPb87NcwkXliK_1edCAoJ0wPi2PE.rUPUfl4CI8VnX9"
    }
    response = session.post(url, headers=headers, cookies=cookies, params=params)
    result = response.json()
    capcode = result.get('capcode')
    slidingImage = result.get('slidingImage')
    with open('img/slide.jpg', 'wb') as slide:
        slide.write(base64.b64decode(slidingImage))
    slide.close()
    backImage = result.get('backImage')
    with open('img/background.jpg', 'wb') as background:
        background.write(base64.b64decode(backImage))
    background.close()
    jsessionidweb = response.cookies.get('JSESSIONIDWEB-PROD')
    return capcode, jsessionidweb


def get_checkcapcode():
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://login.189.cn",
        "Pragma": "no-cache",
        "Referer": "https://login.189.cn/web/login",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    capcode, jsessionidweb = get_pic()
    cookies = {
        "code_v": "20170913",
        "pBlLEdekNHvBO": "5N.jfU1fIXOkCQUFIaZpPJmzOn0LHG47j2Rxwjpbo5jU7DH.Tofp8iD6u0M32BgpLqnG6T6uHH4Pvi8p8ZrqbeA",
        "svid": "9851F90BE3DC4D3968B131992A70358D",
        "s_fid": "389575DE89657EAB-380FAEF7CCC866F1",
        "loginStatus": "non-logined",
        "lvid": "725ae36d2358625fab4d5f7c1dcf63ff",
        "nvid": "1",
        "trkId": "48EB8110-E9EB-45D7-982F-5D0F67DCF0F5",
        "s_cc": "true",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22MTgwZmI1ZGNlZDIxOTItMDhmOWQxYzk1YmNiNzctMWEzNDMzNzAtMjA3MzYwMC0xODBmYjVkY2VkM2ExMA%3D%3D%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22180fb5dced2192-08f9d1c95bcb77-1a343370-2073600-180fb5dced3a10%22%7D",
        # 请求验证码返回的set-cookie --> JSESSIONIDWEB-PROD
        "JSESSIONIDWEB-PROD": jsessionidweb,
        "EcsCaptchaKey": "UUeEs1i13JpNfcOwylfDibRxIl%2BzZmv%2FsofJMd7w3lF%2B7UjDM9w3cw%3D%3D",
        "ECS_ReqInfo_login1": "U2FsdGVkX18IoRWDYwT6zVgs%2Fn3%2FVec3PmzrPRuYD0o%2FdNBb8S3XQ63zG7cDjOXuTlU5O8cJqgQUcRscKEgW5g%3D%3D",
        "pBlLEdekNHvBP": "53LyAQCtiVt3qqqDq5dhhjqCE46VF1VIXuyZPlt26Z49_YHr7jrnPYIFjjFgoDaWBoqSzcFxt6IRgFFFJzb1tlb6pUJojggpiP49HJzCP2a1xP2nDQ7PH3yvMrnr2iuzAaYLZqco005PctOT0iaZnY0RgL1o.maAkhvZSJ.R4PGZ8y8VmspdIqxfcz8J5qvjg3mVIv2fzTcZKkWRprM0R6nXfOj_OlKSma0KRbgM95v3ag1CD0cRDoMeemcKqmjl6SR9cTyPPYssRfgg_ms.r9MfQOPBqUL6DwDAaaVZwInZvU1fRKhwTb50KOE_IEkGpCSz_m_GTfmEvW.sbTFnaTs",
        "s_sq": "eshipeship-189-all%3D%2526pid%253D%25252Fweb%25252Flogin%2526pidt%253D1%2526oid%253Djavascript%25253Avoid%2525280%252529%25253B%2526ot%253DA",
        "trkHmClickCoords": "804-522-743"
    }
    url = "https://login.189.cn/web/checkcapcode"
    params = {
        "oYid6CPr": "5fVtSbNZaWQlIYg3tEO1NpkayrWQKVUD_jF4f6dt24LZgdDgIIfqP.iIyXnPAQzhJgaoF6Tg34JlwkBpSc8eMjjY6Zq.Rbs_fAplyhuaACSfPs5JWR._1X8F0Rc1gfEmNbcmGUggQ5NaIJvRNF61aDzg.HVm62o1XwiuNQyUYUVCi4pj02gWBjFFSR80vgss_R5LiLm5BSQ28oDB650EmA32jp3UVx5hIAEywWfxn1055uf7wBmh0lyXAquWBtQZyAbN0IWVUNSPPz5yv1ahXp82Rv3mxYe1zQ.kX5RJxAEkaDy2YgyLeTg0cXVeMpTTsW2wJ1iDromaNQO2hf68rSU6v18_qIaJ0FeZLnHCyrnyPFuWczmHYsyl5B3sc2k7Y"
    }
    xpos = verify_ocr()
    data = {
        "xpos": xpos,
        "capcode": capcode,
        "phonekey": "17785232224",
        "slidingType": "login_sliding"
    }
    print(data)
    response = session.post(url, headers=headers, cookies=cookies, params=params, data=data)

    print(response.json())


def login():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://login.189.cn",
        "Pragma": "no-cache",
        "Referer": "https://login.189.cn/web/login",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-session": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "code_v": "20170913",
        "pBlLEdekNHvBO": "5LxSqFJDIAmO0JGZ7UqKYBeTYvO2uv7SX8kqZYv3WaNu0ruJRxk1TAQRN9xhk4LNmzlqOroNNlAQX0x1ecELDWq",
        "svid": "174871C38E2FFADB1A42F351AC44C3C0",
        "s_fid": "41130991E5BCA5E4-33391A130834995E",
        "lvid": "315e3119bb7fb24cc64d45599d686bdf",
        "nvid": "1",
        "trkId": "61A3A249-19B0-445E-9750-2DB04E1FB207",
        "s_cc": "true",
        "sajssdk_2015_cross_new_user": "1",
        "JSESSIONIDWEB-PROD": "f7a723f2-1fc4-46ee-bb21-b299d38c0c94",
        "EcsCaptchaKey": "fBA%2FF1M1XZk9MGaIL6yOmozCwmZwN3guaKUBUTMWKr9I12qbxJ6GFw%3D%3D",
        "cityCode": "gz",
        "SHOPID_COOKIEID": "10024",
        "EcsToLoginPara": "zBPyOxHfMwekoO0uXkKvufmTbQimV4E7zcHzmXJ1Eps4MeovAdQKsS%2BFrHWZch3c6JvyzaZVqUMbV7lpDyvd%2BHqUyWF9SZuFgKRAQ5ZQGzzz%2BVhwlQjrFrmRpGjLyFRYZpYpZ%2FoFJbfj2rcrYQwagqpk6ZjXhCgUnpXKV1MBKqBVgJAP8LyCskzIukEGLh%2BXXgLJPUYdGHL2nF3maRU9Rc9LP4SWtb4%2FR7UdgsRzgT0l0vYMZ8QmpIO4WX0%2FYpUJGhCTCOc3ZgmUiL5Ph4mBo79vY%2BAPXd3UJz41UoHYEVnHz45ye1ddoTRyVp5g%2FNR9u3kE9dWFU30%3D",
        "aactgsh111220": "17785232224",
        "userId": "201%7C20150000000031194932",
        "isLogin": "logined",
        ".ybtj.189.cn": "0A07CFA70F53CDBE41BF7E471FCC56B1",
        "loginStatus": "logined",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2220150000000031194932%22%2C%22first_id%22%3A%221810e5c37e3558-090e65d68ffa618-15373079-2073600-1810e5c37e45df%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221810e5c37e3558-090e65d68ffa618-15373079-2073600-1810e5c37e45df%22%7D",
        "EcsLoginToken": "D3VzchclThpwktjCwrT58aiMCsK1XbXmp%2FyaTRktaYuGqciJRGy%2FSmM91FLl6h8ocp4cj0chIuw5c0%2FKSWd33oSUIHEWY4Qpj1s2lUKyHPxJO%2Bfyg2vk2mBKHPleJmsNv2C5TDP%2FyA4%3D",
        "JSESSIONID-PROD": "ef9fb50a-af4b-4109-b355-2d430aa0a450",
        "s_sq": "eshipeship-189-all%3D%2526pid%253D%25252Fweb%25252Flogin%2526pidt%253D1%2526oid%253Djavascript%25253Avoid%2525280%252529%25253B%2526ot%253DA",
        "trkHmClickCoords": "592-472-691",
        "ECS_ReqInfo_login1": "U2FsdGVkX1%2Bz2djKuKe6YSmQkiUJawy6DKUXnqK2uxhFKFwashUff63oIGfsWFA73ARsSMVBa%2FG1AJQrEr%2FPuQKfa9jtUe58tM0drZuYE3g%3D",
        "pBlLEdekNHvBP": "53NWJFCtskFlqqqDrkb0aeGqpjiQnR1nGL3vrxd76URD9bOR3ibdxE6FAeYExFP_fnTafMYm1A6xCTOQgm_vmfbw7qyYuCB7roZRSpXEDRfFdd6A89bN07CkvpWLnNWXPdVD8dKelYINIUO2lkLtcUR9TB3h7qj47oqsz3YY.gjfG2tw26BefTCuR.wJFrutZV8dhXzuCnNslCzguUKBt1q_SjtxvdHWoz2yqZLK2Ras8AHDtsGdV8Ft4g_FY6SD4ThN0ojcV3B0ufqDBJ0v1AGDvSBsG2Z_42e52Ay4kutgrAui3w_LdIJTFUJUlAVK9NElhkzxRqgru8sz5jjJbjO"
    }
    url = "https://login.189.cn/web/login"
    Password = execjs.compile(open('password.js', 'r', encoding='utf-8').read()).call('uPwd', '571466')
    data = {
        "Account": "11111111111",
        "UType": "201",
        "ProvinceID": "24",
        "AreaCode": "",
        "CityNo": "",
        "RandomFlag": "0",
        "Password": "yPBjDi5NtsZyVJk7lU7yeg=="
    }
    print(data)
    response = session.post(url, headers=headers, cookies=cookies, data=data)

    print(response.text)
    print(response)


if __name__ == '__main__':
    # 验证码
    get_checkcapcode()
    # 登录
    login()
