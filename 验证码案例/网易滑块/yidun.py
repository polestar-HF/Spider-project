# -*- coding: utf-8 -*-
# @Time    : 2022/4/26 22:08
# @Author  : Ram.zhang
# @File    : yidun.py
# @Software: PyCharm
import json
import os
import random
import re
import time

import cv2
import numpy as np
import requests
from loguru import logger
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

js_code = open('sdk.js', 'r', encoding='utf-8').read()


def save_image(image_url, file_name):
    """
    下载图片并保存
    """
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(f'img/{file_name}.jpg', 'wb') as img:
            img.write(response.content)
        img.close()
        return True
    else:
        return False


def verify_ocr():
    # 读取背景图片和缺口图片
    bg_img = cv2.imread('img/background.jpg')  # 背景图片
    tp_img = cv2.imread('img/slider.jpg')  # 缺口图片
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
    cv2.imwrite('./img/all.jpg', bg_img)  # 保存在本地
    # 返回缺口的X坐标
    return tl[0]


def __ease_out_expo(sep):
    if sep == 1:
        return 1
    else:
        return 1 - pow(2, -10 * sep)


def __ease_out_quart(sep):
    return 1 - pow(1 - sep, 4)


def __ease_out_quad(sep):
    return 1 - (1 - sep) * (1 - sep)


def __ease_out_cubic(sep):
    return 1 - pow(1 - sep, 3)


def __ease_out_quint(sep):
    return 1 - pow(1 - sep, 5)


def get_slide_track(distance):
    """
    根据滑动距离生成滑动轨迹
    :param distance: 需要滑动的距离
    :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
        x: 已滑动的横向距离
        y: 已滑动的纵向距离, 除起点外, 均为0
        t: 滑动过程消耗的时间, 单位: 毫秒
    """
    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    slide_track = [
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(300, 500)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        if i == 0:
            x = random.randint(2, 6)
        else:
            x = round(__ease_out_cubic(i / count) * (distance + 11))
        # 滑动过程消耗的时间
        t += random.randint(10, 30)
        y = random.randint(1, 4)
        if x == _x:
            continue
        slide_track.append([x, y, t])
        _x = x
    # 对x坐标加入一些抖动（高斯函数）, 让其显得更真实
    trail_length = len(slide_track)
    delta_pt = abs(np.random.normal(scale=1.2, size=trail_length))
    for index in range(len(delta_pt)):
        change_x = int(slide_track[index][1] + delta_pt[index])
        if index + 1 < trail_length and slide_track[index + 1][0] > change_x:
            slide_track[index][0] += change_x

    return slide_track


def detection_verify(token, acToken, data, cb):
    cookies = {
        '_gid': 'GA.8116111289.00013916254903',
        '_ga': 'GA.1.2a7fdaf4af767.06126ce3d6f3ac5a107b',
        'Hm_lvt_4671c5d502135636b837050ec6d716ce': '1651383159',
        'mp_versions_hubble_jsSDK': 'DATracker.globals.1.6.13',
        'hb_MA-93D5-9AD06EA4329A_source': 'www.baidu.com',
        '__root_domain_v': '.163.com',
        '_qddaz': 'QD.951151383159860',
        'Hm_lpvt_4671c5d502135636b837050ec6d716ce': '1651419021',
    }

    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        # Requests sorts cookies= alphabetically
        # 'Cookie': '_gid=GA.8116111289.00013916254903; _ga=GA.1.2a7fdaf4af767.06126ce3d6f3ac5a107b; Hm_lvt_4671c5d502135636b837050ec6d716ce=1651383159; mp_versions_hubble_jsSDK=DATracker.globals.1.6.13; hb_MA-93D5-9AD06EA4329A_source=www.baidu.com; __root_domain_v=.163.com; _qddaz=QD.951151383159860; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1651419021',
        'Pragma': 'no-cache',
        'Referer': 'https://dun.163.com/',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    params = {
        'referer': 'https://dun.163.com/trial/jigsaw',
        'zoneId': 'CN31',
        'id': '07e2387ab53a4d6f930b8d9a9be71bdf',
        'token': token,
        'acToken': acToken,
        'data': data,
        'width': '320',
        'type': '2',
        'version': '2.17.4',
        'cb': cb,
        'extraData': '',
        'bf': '0',
        'runEnv': '10',
        'callback': '__JSONP_mirnnj5_1',
    }
    # print(params)
    response = requests.get('https://c.dun.163.com/api/v2/check', params=params, cookies=cookies, headers=headers)
    print(response.text)


def yidun_verify():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    # 1. 请求易盾官网滑块demo主页
    url = "https://dun.163.com/trial/jigsaw"
    response_1 = requests.get(url, headers=headers)
    # 2. 获取pt_experience_captcha_drag.js的链接
    js_url = 'https://dun.163.com/public/assets/pt_experience_captcha_drag.js'
    captcha_drag_js = js_url + re.search('pt_experience_captcha_drag.js(.*)">', response_1.text).group(1)
    # 3. 提取获取验证码图片参数：captchaId
    response_2 = requests.get(captcha_drag_js, headers=headers)
    captchaId = re.search('captchaId:"(.*?)"', response_2.text).group(1)
    logger.info(f'获取captchaId参数：{captchaId}')
    # 3. 获取验证码图片和参数
    result = execjs.compile(js_code).call('sdk')
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "_gid": "GA.1896015498.80865183959618",
        "Hm_lvt_4671c5d502135636b837050ec6d716ce": "1650981893",
        "Hm_lpvt_4671c5d502135636b837050ec6d716ce": "1650981893"
    }
    url = "https://c.dun.163.com/api/v2/get"
    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "id": captchaId,
        "fp": result['fp'],
        "https": "true",
        "type": "2",
        "version": "2.17.4",
        "dpr": "1",
        "dev": "1",
        "cb": result['cb'],
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "lang": "zh-CN",
        "width": "320",
        "audio": "false",
        "token": "",
        "callback": "__JSONP_ewbw3dz_0"
    }
    response3 = requests.get(url, headers=headers, cookies=cookies, params=params)
    # 格式化响应
    json_data = json.loads(response3.text.replace('__JSONP_ewbw3dz_0(', '').replace(');', ''))
    token = json_data['data']['token']
    logger.info(f'获取token参数：{token}')
    # 验证码背景图片url
    bg_image_url = json_data['data']['bg'][0]
    bg_info = save_image(bg_image_url, 'background')
    logger.info(f'成功保存验证码背景图片：{bg_info}')
    # 滑块图片url
    slice_img_url = json_data['data']['front'][0]
    slider_info = save_image(slice_img_url, 'slider')
    logger.info(f'成功保存滑块图片：{slider_info}')
    # 4. 获取did(用于生成acToken)
    d_code = open('d.js', 'r', encoding='utf-8').read()
    d = execjs.compile(d_code).call('get_d')
    data = {
        'd': d,
        'v': 'e2891084',
        'cb': '__wmjsonp_e67a152',
    }
    response4 = requests.post('https://ac.dun.163.com/v3/d', headers=headers, data=data).text
    params_list = eval(response4.replace('__wmjsonp_e67a152(', '').replace(')', '').replace('null,', ''))
    did = params_list[3]
    logger.info(f'获取did参数：{did}')
    # ------计算滑动距离------
    offset = verify_ocr()
    logger.success(f'滑动距离: {offset}')
    track = get_slide_track(offset)
    logger.info('成功生成轨迹')
    actoken = execjs.compile(js_code).call('get_actoken', did)
    data = execjs.compile(js_code).call('get_data', token, track, offset)
    cb = execjs.compile(js_code).call('get_cb')
    detection_verify(token=token, acToken=actoken, data=data, cb=cb)


"""
易盾滑块难点主要在于验证时的acToken字段, 生成改字段时所需参数：
{r: 1, d: 'FH9H8A7T5FdEBEAEQBaEBNMkpyjkQ8Cg', b: 'bpF4cczgiS8VVQFVUVeVQYN1u4hu7ifJ'}
其中r是定值, b是随机生成的, 关键是d字段的值, d请求中的响应值, 这个值失效后会导致actoken无效, 则请求验证时会失败, validate为空
"""
if __name__ == '__main__':
    for i in range(1):
        yidun_verify()
    # detection_verify()
# 入口，token
#  function dc(a) {
#                     var f = a.C
#                       , e = a.la
#                       , q = ea().k(ta)
#                       , l = C[b[163]][b[316]].za;
#                     a = {
#                         r: l,
#                         d: q || c[0],
#                         b: f
#                     };
#                     e && (f = hb(ac($b(cc(Z(l + q + f + b[291]))))),
#                     a.t = Ub(f));
#                     try {
#                         return Na(JSON[b[139]](a))
#                     } catch (g) {
#                         return Na(b[161])
#                     }
#                 }
