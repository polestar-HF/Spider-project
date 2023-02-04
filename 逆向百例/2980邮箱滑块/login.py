# -*- coding: utf-8 -*-
# @Time    : 2022/6/19 22:53
# @Author  : Ram.zhang
# @File    : login.py
# @Software: PyCharm
import io
import json
import time

import ddddocr
import execjs
import requests
import cv2
from PIL import Image
from loguru import logger

js_code = open('sdk.js', 'r', encoding='utf-8').read()


def image_restoration(img_order, img_bytes: bytes):
    """
    验证码图片还原
    :param img_order: 乱序验证码还原顺序列表
    :param img_bytes: 图片二进制数据
    :return: 还原后的图片
    """
    img = Image.open(io.BytesIO(img_bytes))
    # 每次裁剪图片宽度(原图宽度 / len(img_order))
    width = 32
    # 每次裁剪图片高度(原图高度)
    height = 200
    # 创建还原后的背景图（画布） size = 图片大小
    new_img = Image.new(mode='RGB', size=(320, 200))
    logger.info(f'验证还原顺序: {img_order}')
    for idx in range(len(img_order)):
        # 需要裁剪的图片左上角坐标(x轴)
        sx = idx * width
        # 需要裁剪的图片左下角坐标(y轴)
        sy = 0 * height
        # 被裁剪部分图片的宽度
        swidth = sx + width
        # 被剪切图像的高度
        sheight = sy + height
        image_data = img.crop((sx, sy, swidth, sheight))
        # 将裁剪的小图粘贴到画布里
        # 放置图像的 x 坐标
        x = img_order[idx] * width * 1
        # 放置图像的 y 坐标
        y = 0 * height * 1
        new_img.paste(image_data, (x, y))
    # 保存还原后的验证码图片
    new_img.save('image/new_bg.jpg')
    logger.success(f'成功还原乱序背景图片: new_bg.jpg')


def verify_ocr():
    # 读取背景图片和缺口图片
    bg_img = cv2.imread('image/new_bg.jpg')  # 背景图片
    tp_img = cv2.imread('image/slider.jpg')  # 缺口图片
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
    cv2.imwrite('./image/all.jpg', bg_img)  # 保存在本地
    # 返回缺口的X坐标
    return tl[0]


def identifying_code():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    with open('image/slider.jpg', 'rb') as f:
        target_bytes = f.read()

    with open('image/new_bg.jpg', 'rb') as f:
        background_bytes = f.read()

    res = det.slide_match(target_bytes, background_bytes)

    return res


def get_verify():
    # 获取验证码
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.2980.com/login/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "returnURL": "%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DB9257F7F9B1EF15CD%26redirect_uri%3Dhttps%253A%252F%252Fwww.2980.com%252Fauth%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%25202980_client%40web%2520offline_access%26response_mode%3Dform_post%26nonce%3D637913319753490124.NmM5N2U4YzYtYTZlNy00OTg3LTk5ZGItMDYzMmRlNGMwNTYzMWY1MTZmMjMtM2I4Ni00ZDI4LTliMzEtODM5YjgwNDhkOWQy%26state%3DCfDJ8G6NjtEUgfFGhkZlvA9-f6UnOK8nVJEoyjicsWWzVyK7mxEnnGZYVdNx5Xdy-TjQpoBkGLgEL5qeKeaFD-uTDCXCqDoRN32PFEzNTwIfXnoqGz4qtE31lVQsXo5DlWRQsmPUQ3gBlHr1P996uztYLxikqGnP-QOiB2Lr76rKoxUBFUZHtADEroHMEntsYe-jamncV0XL_lr_fBBQwNYkjs_f4J-ZvbGyGCtuyjYsNx134ZZbb8s75pVifkyNmsqVWVSLh97fRa22_1HErb2q67DWG_4Hp3ShJS3-TYARsMyRo-HW7AsN44HtEj1wQ0t1WH2K1ploSdNT7vGb_nP3c1fT3VXbs8Ri3ecvJPiRbNCvZ9QUUfk8UvFFpiZZQURrNf6uupFbkp9VMay4N-x0k0c%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D5.5.0.0"
    }
    url = "https://www.2980.com/mailv2/UserLogin/slidercode"
    response = requests.get(url, headers=headers, cookies=cookies).json()
    token = response.get('result').get('token')
    print(f'token: {token}')
    appid = response.get('result').get('appid')
    print(f'appid: {appid}')
    url = "https://captcha.duoyi.com/captcha"
    time_str = int(time.time() * 1000)
    sdk_k = execjs.compile(js_code).call('get_k', time_str)
    print(f'sdk_k: {sdk_k}')
    params = {
        "token": token,
        "appid": appid,
        "type": "1",
        "t": str(time_str),
        "k": sdk_k
    }
    verify_resp = requests.get(url, headers=headers, params=params).json()
    mes = verify_resp.get('message').get('mes')
    result = execjs.compile(js_code).call('decode_resp', mes, time_str)
    return json.loads(result), token, appid


def save_image(image_url, file_name):
    """
    下载图片并保存
    """
    response = requests.get(image_url)
    if response.status_code == 200:
        with open(f'image/{file_name}.jpg', 'wb') as img:
            img.write(response.content)
        img.close()
        return True
    else:
        return False


def check_verify(param_dict):
    headers = {
        "authority": "captcha.duoyi.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "text/plain",
        "origin": "https://www.2980.com",
        "pragma": "no-cache",
        "referer": "https://www.2980.com/",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    url = "https://captcha.duoyi.com/check"
    params = {
        "token": param_dict['token'],
        "appid": param_dict['appid'],
        "portion": param_dict['portion'],
        "user_id": "",
        "cn": param_dict['cn'],
        "timestamp": f"{int(time.time() * 1000)}",
        "signature": param_dict['signature'],
        "sn": param_dict['sn'],
        "seed": "0"
    }
    print(params)
    data = param_dict['data']

    response = requests.post(url, headers=headers, params=params, data=data)

    print(response.text)


def login_email():
    # 获取验证码信息
    captcha_info, token, appid = get_verify()
    print(captcha_info)
    # 验证码背景图片
    background_url = captcha_info.get('background')
    background = save_image(background_url, 'background')
    if background:
        print('验证码背景图片下载成功')
    else:
        return None
    # 滑块图片
    slider_url = captcha_info.get('jigsaw')
    slider = save_image(slider_url, 'slider')
    if slider:
        print('滑块图片下载成功')
    else:
        return None
    # 乱序验证码还原顺序
    image_order = captcha_info.get('list')
    image_bytes = open('image/background.jpg', 'rb').read()
    image_restoration(image_order, image_bytes)
    # 识别滑动验证码距离
    offset = verify_ocr()
    print(f'验证码滑动距离: {offset}')
    # 验证请求参数 sn
    sn = captcha_info.get('sn')
    print(f'获取参数sn: {sn}')
    result = execjs.compile(js_code).call('get_sdk', token, sn)
    result['appid'] = appid
    result['token'] = token
    check_verify(result)


if __name__ == '__main__':
    # 实际滑动距离 = 缺口识别距离 - 滑块初始距离(startPosition) - 80
    login_email()
