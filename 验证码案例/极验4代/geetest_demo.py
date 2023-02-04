# -*- coding: utf-8 -*-
# @Time    : 2022/4/5 21:54
# @Author  : Ram.zhang
# @File    : geetest_demo.py
# @Software: PyCharm
import re
import time
import cv2
import requests
from loguru import logger
import subprocess
from functools import partial
import random

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

cookies = {
    'sajssdk_2015_cross_new_user': '1',
    'Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4': '1649166004',
    'hy_data_2020_id': '17ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef',
    'sajssdk_2020_cross_new_user': '1',
    'hy_data_2020_js_sdk': '%7B%22distinct_id%22%3A%2217ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%E6%BB%91%E5%9D%97%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%2B%E9%AA%8C%E8%AF%81%E7%A0%81%22%7D%2C%22device_id%22%3A%2217ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef%22%7D',
    '461cca3146ff093d059dee9439aa6b26': '5a6d1a14-7217-4f1b-aea1-d9d1bae04f0a',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2217ff9f42ebc485-0231dd95f2a7db8-a3e3164-2073600-17ff9f42ebd286%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%2C%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%E6%BB%91%E5%9D%97%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%2B%E9%AA%8C%E8%AF%81%E7%A0%81%22%7D%2C%22%24device_id%22%3A%2217ff9f42ebc485-0231dd95f2a7db8-a3e3164-2073600-17ff9f42ebd286%22%7D',
    'Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4': '1649166481',
}

headers = {
    'authority': 'www.geetest.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'zh-CN,zh;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'sajssdk_2015_cross_new_user=1; Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4=1649166004; hy_data_2020_id=17ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef; sajssdk_2020_cross_new_user=1; hy_data_2020_js_sdk=%7B%22distinct_id%22%3A%2217ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%E6%BB%91%E5%9D%97%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%2B%E9%AA%8C%E8%AF%81%E7%A0%81%22%7D%2C%22device_id%22%3A%2217ff9f42f383d7-026aece0c70699-a3e3164-2073600-17ff9f42f398ef%22%7D; 461cca3146ff093d059dee9439aa6b26=5a6d1a14-7217-4f1b-aea1-d9d1bae04f0a; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217ff9f42ebc485-0231dd95f2a7db8-a3e3164-2073600-17ff9f42ebd286%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%2C%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%E6%BB%91%E5%9D%97%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%2B%E9%AA%8C%E8%AF%81%E7%A0%81%22%7D%2C%22%24device_id%22%3A%2217ff9f42ebc485-0231dd95f2a7db8-a3e3164-2073600-17ff9f42ebd286%22%7D; Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4=1649166481',
}


def uuid():
    """
    生成获取验证码图片参数 challenge
    :return:
    """
    js_code = """
        function uuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
            });
        };
    """
    return execjs.compile(js_code).call('uuid')


def __ease_out_expo(x):
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)


def __ease_out_quart(x):
    return 1 - pow(1 - x, 4)


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
        [random.randint(20, 60), random.randint(10, 40), 0]
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t = random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append([x - _x, _y, t])
        _x = x
    slide_track.append([0, 0, random.randint(200, 300)])
    return slide_track


def save_image(image_url, file_name):
    """
    下载图片并保存
    """
    url = f'https://static.geetest.com/{image_url}'

    response = requests.get(url, headers=headers, cookies=cookies)
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


def detection_verify(captcha_id, challenge, lot_number, track, offset):
    headers = {
        "authority": "gcaptcha4.geetest.com",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
        "sec-ch-ua-mobile": "?0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "accept": "*/*",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "script",
        "referer": "https://www.geetest.com/",
        "accept-language": "zh-CN,zh;q=0.9"
    }
    cookies = {
        "hy_data_2020_id": "17ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0",
        "hy_data_2020_js_sdk": "%7B%22distinct_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%7D%2C%22device_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%7D",
        "Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1649249616,1649426077",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2Fadaptive-captcha-demo%22%7D%2C%22%24device_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%7D",
        "Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1649440157"
    }
    url = "https://gcaptcha4.geetest.com/verify"
    w = execjs.compile(open('w.js', 'r', encoding='utf-8').read()).call('get_w', offset, track, lot_number)
    params = {
        "captcha_id": captcha_id,
        "challenge": challenge,
        "client_type": "web",
        "lot_number": lot_number,
        "risk_type": "slide",
        "pt": "1",
        "w": w,
        "callback": f"geetest_{int(time.time() * 1000)}"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)


def get_verify_img():
    """
    获取验证码背景图片和滑块图片
    """
    # 1. 请求极验官网滑块demo主页
    response = requests.get('https://www.geetest.com/adaptive-captcha-demo', headers=headers, cookies=cookies)
    # 2. 获取adaptive-captcha-demo.js的链接
    adaptiv_ecaptcha_demo_url = 'https://www.geetest.com' + re.search(
        'id="__NEXT_PAGE__/adaptive-captcha-demo" src="(.*?)"', response.text).group(1)
    logger.info(f'获取adaptiv_ecaptcha_demo_url：{adaptiv_ecaptcha_demo_url}')
    # 3. 提取获取验证码图片参数：captchaId
    adaptiv_ecaptcha = requests.get(adaptiv_ecaptcha_demo_url)
    captchaId = re.search('captchaId:"(.*?)"', adaptiv_ecaptcha.text).group(1)
    logger.info(f'获取captchaId参数：{captchaId}')
    # 4. 生成获取验证码图片参数：challenge
    challenge = uuid()
    logger.info(f'获取challenge参数：{challenge}')
    # 5. 请求获取验证码背景和滑块图片
    params = {
        'captcha_id': captchaId,
        'challenge': challenge,
        'client_type': 'web',
        'risk_type': 'slide',
        'pt': '1',
        'lang': 'zho',
        'callback': f'geetest_{int(time.time() * 1000)}',
    }
    verify_img_info = requests.get('https://gcaptcha4.geetest.com/load', headers=headers, params=params,
                                   cookies=cookies)
    # logger.debug(verify_img_info.text)
    # 6. 获取图片url并请求保存本地和 lot_number(后面提交验证时的参数)
    lot_number = re.search('"lot_number":"(.*?)"', verify_img_info.text).group(1)
    # 验证码背景图片
    bg_img_url = re.search('"bg":"(.*?)"', verify_img_info.text).group(1)
    bg_info = save_image(bg_img_url, 'background')
    logger.info(f'成功保存验证码背景图片：{bg_info}')
    # 滑块图片
    slider_img_url = re.search('"slice":"(.*?)"', verify_img_info.text).group(1)
    slider_info = save_image(slider_img_url, 'slider')
    logger.info(f'成功保存滑块图片：{slider_info}')
    # 7. 计算滑动距离
    offset = verify_ocr()
    logger.success(f'滑动距离: {offset}')
    track = str(get_slide_track(offset))
    print(track)
    logger.info('成功生成轨迹')
    # 8. 向服务端发送验证
    detection_verify(captchaId, challenge, lot_number, track, offset)


if __name__ == '__main__':
    get_verify_img()
