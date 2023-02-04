# -*- coding: utf-8 -*-
# @Time    : 2022/4/13 23:28
# @Author  : Ram.zhang
# @File    : geetest3_demo.py
# @Software: PyCharm
import io
import random
import re
import time
import random
import cv2
import requests
from loguru import logger
from PIL import Image
import subprocess
from functools import partial

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs

cookies = {
    'hy_data_2020_id': '17ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0',
    'hy_data_2020_js_sdk': '%7B%22distinct_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22device_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%7D',
    'Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4': '1649426077,1649495065,1649570662,1649862772',
    '461cca3146ff093d059dee9439aa6b26': '997b77d8-c150-4401-b27b-9c86a77109eb',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2F%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2FSensebot%22%2C%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22%24device_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%7D',
    'Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4': '1649862820',
}

headers = {
    'authority': 'www.geetest.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'hy_data_2020_id=17ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0; hy_data_2020_js_sdk=%7B%22distinct_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22device_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%7D; Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4=1649426077,1649495065,1649570662,1649862772; 461cca3146ff093d059dee9439aa6b26=997b77d8-c150-4401-b27b-9c86a77109eb; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2F%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2FSensebot%22%2C%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22%24device_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%7D; Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4=1649862820',
    'referer': 'https://www.geetest.com/demo/slide-popup.html',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}


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


def image_restoration(img_bytes: bytes):
    """
    验证码图片还原
    :param img_bytes: 图片二进制数据
    :return: 还原后的图片
    """
    """
    for (var a = r / 2, _ = 0; _ < 52; _ += 1) {
                                var c = Ut[_] % 26 * 12 + 1;

                                if (25 < Ut[_]) {
                                    var u = a;
                                } else {
                                    var u = 0;
                                }

                                var l = o[$_CJET(69)](c, u, 10, a);
                                s[$_CJET(66)](l, _ % 26 * 10, 25 < _ ? a : 0);
                            }
    """
    img = Image.open(io.BytesIO(img_bytes))
    # 图片还原的顺序-是定值，长度52
    Ut = [
        39,
        38,
        48,
        49,
        41,
        40,
        46,
        47,
        35,
        34,
        50,
        51,
        33,
        32,
        28,
        29,
        27,
        26,
        36,
        37,
        31,
        30,
        44,
        45,
        43,
        42,
        12,
        13,
        23,
        22,
        14,
        15,
        21,
        20,
        8,
        9,
        25,
        24,
        6,
        7,
        3,
        2,
        0,
        1,
        11,
        10,
        4,
        5,
        19,
        18,
        16,
        17
    ]
    # 每次裁剪图片宽度
    width = 10
    # 每次裁剪图片高度(160 --> 原图高度)
    height = int(160 / 2)
    # 存放裁剪的图片信息
    # image_data = {}
    # 创建还原后的背景图（画布）
    new_img = Image.new(mode='RGB', size=(260, 160))
    for idx in range(len(Ut)):
        # 需要裁剪的图片左上角坐标(x轴)
        sx = Ut[idx] % 26 * 12 + 1
        # 需要裁剪的图片左下角坐标(y轴)
        sy = height if Ut[idx] > 25 else 0
        # 被裁剪部分图片的宽度
        swidth = width
        # 被剪切图像的高度
        sheight = height
        image_data = img.crop((sx, sy, sx + swidth, sy + sheight))
        # 将裁剪的小图粘贴到画布里
        # 放置图像的 x 坐标
        x = idx % 26 * 10
        # 放置图像的 y 坐标
        y = height if idx > 25 else 0
        new_img.paste(image_data, (x, y))
    new_img.save('img/new_bg.jpg')
    logger.success(f'成功还原乱序背景图片: new_bg.jpg')


def __ease_out_expo(sep):
    if sep == 1:
        return 1
    else:
        return 1 - pow(2, -10 * sep)


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
        [random.randint(-50, -10), random.randint(-50, -10), 0],
        [0, 0, 0],
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
        t += random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append([x, _y, t])
        _x = x
    slide_track.append(slide_track[-1])
    return slide_track


def verify_ocr():
    # 读取背景图片和缺口图片
    bg_img = cv2.imread('img/new_bg.jpg')  # 背景图片
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


def detection_verify(gt, challenge, w):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.geetest.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "hy_data_2020_id": "17ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0",
        "GeeTestAjaxUser": "b06baf0af07bbb2cb62ccfea2df97742",
        "GeeTestUser": "8553d9f7c06f72fb59ba8f5d1aec0e05",
        "hy_data_2020_js_sdk": "%7B%22distinct_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%2C%22site_id%22%3A2369%2C%22user_company%22%3A84%2C%22props%22%3A%7B%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22device_id%22%3A%2217ffeeffa97143-012f6ecc57dfd1-a3e3164-2073600-17ffeeffa986d0%22%7D",
        "Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1649426077,1649495065,1649570662,1649862772",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2F%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2FSensebot%22%2C%22%24latest_utm_source%22%3A%22bd%22%2C%22%24latest_utm_medium%22%3A%22%E6%9E%81%E9%AA%8C-%E5%93%81%E7%89%8C%E8%AF%8D%22%2C%22%24latest_utm_campaign%22%3A%22%E6%9C%AA%E7%9F%A5%E6%B4%BB%E5%8A%A8%22%2C%22%24latest_utm_content%22%3A%22%E6%9E%81%E9%AA%8C%22%2C%22%24latest_utm_term%22%3A%22%E5%93%81%E7%89%8C%22%7D%2C%22%24device_id%22%3A%2217ffeeff7d818c-0cb5c3758008fd8-a3e3164-2073600-17ffeeff7d97c7%22%7D"
    }
    url = "https://api.geetest.com/ajax.php"
    params = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "%24_BBF": "0",
        "client_type": "web",
        "w": w,
        "callback": f"geetest_{int(time.time() * 1000)}"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)


def geetest_verify():
    # ------请求滑块验证码主页------
    params1 = {
        't': f'{int(time.time() * 1000)}',
    }
    response = requests.get('https://www.geetest.com/demo/gt/register-slide', headers=headers, params=params1,
                            cookies=cookies).json()
    gt = response.get('gt')
    logger.info(f'gt: {gt}')
    challenge = response.get('challenge')
    logger.info(f'challenge: {challenge}')

    # ------请求无感验证 ------
    # 触发无感验证, 失败后才会出现滑块验证
    url = "https://apiv6.geetest.com/get.php"
    params2 = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": '',
        "callback": f"geetest_{int(time.time() * 1000)}"
    }
    requests.get(url, headers=headers, cookies=cookies, params=params2)
    url = "https://api.geetest.com/ajax.php"
    params3 = {
        "gt": gt,
        "challenge": challenge,
        "lang": "zh-cn",
        "pt": "0",
        "client_type": "web",
        "w": '',
        "callback": f"geetest_{int(time.time() * 1000)}"
    }
    requests.get(url, headers=headers, cookies=cookies, params=params3)

    # ------请求获取滑块验证码 ------
    params4 = {
        'is_next': 'true',
        'type': 'slide3',
        'gt': gt,
        'challenge': challenge,
        'lang': 'zh-cn',
        'https': 'true',
        'protocol': 'https://',
        'offline': 'false',
        'product': 'popup',
        'api_server': 'api.geetest.com',
        'isPC': 'true',
        'autoReset': 'true',
        'width': '100%',
        'callback': f'geetest_{int(time.time() * 1000)}',
    }
    response = requests.get('https://api.geetest.com/get.php', headers=headers, params=params4, cookies=cookies)
    response.encoding = response.apparent_encoding
    # gt 参数(定值)
    new_gt = re.search('"gt": "(.*?)"', response.text).group(1)
    logger.warning(f'gt: {new_gt}')
    # challenge 参数（动态变化）
    new_challenge = re.search('"challenge": "(.*?)"', response.text).group(1)
    logger.warning(f'challenge: {new_challenge}')
    # c 参数（定值）
    c = list(eval(re.search('"c": \[(.*?)\]', response.text).group(1)))
    # s 参数（动态变化）
    s = re.search('"s": "(.*?)"', response.text).group(1)

    # ------下载验证码和滑块图片------
    bg_img_url = re.search('"bg": "(.*?)"', response.text).group(1)
    bg_info = save_image(bg_img_url, 'background')
    logger.info(f'成功保存验证码背景图片：{bg_info}')
    slice_img_url = re.search('"slice": "(.*?)"', response.text).group(1)
    slider_info = save_image(slice_img_url, 'slider')
    logger.info(f'成功保存滑块图片：{bg_info}')

    # ------还原乱序背景图片------
    img_data = open('img/background.jpg', 'rb').read()
    image_restoration(img_data)
    logger.info(f'成功保存滑块图片：{slider_info}')

    # ------计算滑动距离------
    offset = verify_ocr()
    logger.success(f'滑动距离: {offset}')
    track = str(get_slide_track(offset))
    logger.info('成功生成轨迹')
    js_code = open('code.js', 'r', encoding='utf-8').read()
    w = execjs.compile(js_code).call('get_w', offset, new_challenge, track, c, s, new_gt)
    # ------请求验证------
    detection_verify(new_gt, new_challenge, w)


# 极验3代在轨迹校验比较严格, 需要尽量去模拟人为轨迹,
# 在逆向过程中可以多滑动几次去观察轨迹特征, 分析记录逻辑才能更好的模拟出通过率高的轨迹
# 还可以把通过验证的滑块轨迹和滑动距离保存下来, 下次遇到相同距离则直接调用
"""
距离识别错误返回{“success”: 0, “message”: “fail”}
距离正确但轨迹异常则返回{“success”: 0, “message”: “forbidden”}
校验通过则返回{success: 1, message: “success”, validate: “f98af504ec3208dc19911b0de0b083c7”, score: “3”}
"""

if __name__ == '__main__':
    geetest_verify()
