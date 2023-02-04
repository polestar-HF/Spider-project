# -*- coding: utf-8 -*-
# @Time    : 2022/3/26 14:01
# @Author  : Ram.zhang
# @File    : top_25.py
# @Software: PyCharm
import cv2
import ddddocr
import requests
import base64
import numpy as np
from loguru import logger

headers = {
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "sec-ch-ua-platform": "\"Windows\"",
    "Origin": "https://www.python-spider.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.python-spider.com/challenge/25",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1646481642,1647868804,1648220137,1648274004",
    "no-alert": "true",
    "sessionid": "47lo33jt53ysvwv4j4cytp9i83y300iy",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1648274340"
}


def base64_to_img(bs64_str, file_path):
    img_data = base64.b64decode(bs64_str)
    file = open(file_path, 'wb')
    file.write(img_data)
    file.close()


def verify_ocr():
    slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    with open('img/slide.jpg', 'rb') as f:
        target_bytes = f.read()

    with open('img/background.jpg', 'rb') as f:
        background_bytes = f.read()

    res = slide.slide_match(target_bytes, background_bytes, simple_target=True)

    return res.get("target")[0]


def discern_img():
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
    cv2.imwrite('./img/all.jpg', bg_img)  # 保存在本地
    # 返回缺口的X坐标
    return tl[0]


def get_distance(show=False):
    with open('img/slide.jpg', 'rb') as f:
        slider_img = f.read()

    with open('img/background.jpg', 'rb') as f:
        bg_img = f.read()

    def edge_detection(rawimg):
        def tracebar(x):
            threshold1 = cv2.getTrackbarPos('threshold1', 'Test')
            threshold2 = cv2.getTrackbarPos('threshold2', 'Test')
            edged_img = cv2.Canny(img_Gaussian, threshold1, threshold2)
            cv2.imshow("edged_img", edged_img)

        image = np.asarray(bytearray(rawimg), dtype="uint8")
        img = cv2.imdecode(image, cv2.IMREAD_COLOR)
        grep_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # 高斯滤波 高斯滤波是通过对输入数组的每个点与输入的高斯滤波模板执行卷积计算然后将这些结果一块组成了滤波后的输出数组，
        # 通俗的讲就是高斯滤波是对整幅图像进行加权平均的过程，每一个像素点的值都由其本身和邻域内的其他像素值经过加权平均后得到。
        # 高斯滤波的具体操作是：用一个模板（或称卷积、掩模）扫描图像中的每一个像素，用模板确定的邻域内像素的加权平均灰度值去替代模板中心像素点的值。
        img_Gaussian = cv2.GaussianBlur(grep_img, (5, 5), 0)
        # 用于对图像的边缘检测
        edged_img = cv2.Canny(img_Gaussian, 25, 45)
        if show:
            cv2.namedWindow("Test")
            # cv.imshow('raw_img', img)
            # cv.imshow('grep_img', grep_img)
            cv2.imshow('img_Gaussian', img_Gaussian)
            cv2.createTrackbar("threshold1", "Test", 0, 255, tracebar)
            cv2.createTrackbar("threshold2", "Test", 0, 255, tracebar)
            # cv.imshow('edged_img', edged_img)
            cv2.waitKey()
            cv2.destroyAllWindows()
        return edged_img

    def similarity_calculation(background, slider):
        result = cv2.matchTemplate(background, slider, cv2.TM_CCOEFF_NORMED)
        # 获取一个/组int类型的索引值在一个多维数组中的位置。
        # x, y = np.unravel_index(result.argmax(), result.shape)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        return max_loc

    """计算滑动距离方法"""
    gap = edge_detection(bg_img)
    slider = edge_detection(slider_img)
    x, y = similarity_calculation(gap, slider)
    # print('需要滑动距离', x, y)
    return x


def get_verify_img():
    # 验证码图片url
    img_url = "https://www.python-spider.com/api/challenge25verify"
    response = requests.get(img_url, headers=headers, cookies=cookies).json()
    # 验证码背景图片
    verify_base64 = response.get('img1')
    base64_to_img(verify_base64, 'img/background.jpg')
    # 滑块图片
    slide_base64 = response.get('img2')
    base64_to_img(slide_base64, 'img/slide.jpg')


def check_verify(func=1):
    # 滑动距离
    if func == 1:
        offset = verify_ocr()
    else:
        offset = get_distance()

    logger.info(f'验证滑动距离：{offset}')
    # 检测验证码url
    check_url = "https://www.python-spider.com/api/challenge25CheckVerify"
    data = {
        "distant": offset
    }
    response = requests.post(check_url, headers=headers, cookies=cookies, data=data).json()
    passing_rate = response.get("rate")
    if response.get('success') == 1:
        logger.success(f'验证码通过：{passing_rate}')
        return float(passing_rate.replace('%', ''))
    else:
        logger.error(f'验证码未通过：{passing_rate}')
        return float(passing_rate.replace('%', ''))


def get_top_25(page):
    number = 0

    url = "https://www.python-spider.com/api/challenge25"
    data = {
        "page": page
    }
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    if response.status_code == 200:
        data_list = response.json()
        for data in data_list.get('data'):
            number += int(data.get('value').replace('\r', ''))
        logger.debug(f'第{page}页：{number}')
    else:
        logger.error('访问失败')
    # 获取验证码图片和滑块
    get_verify_img()
    # 提交验证
    if check_verify() >= 90:
        return number
    else:
        while True:
            logger.warning(f'重新请求验证码...')
            get_verify_img()
            if check_verify() >= 90:
                return number


# print(verify_ocr())
# print(discern_img())
# print(get_distance())
# #
if __name__ == '__main__':
    sums = 447149
    for pg in range(1, 101):
        sums += get_top_25(pg)
    logger.success(f'总和：{sums}')
