# -*- coding: utf-8 -*-
# @Time    : 2022/6/4 13:44
# @Author  : Ram.zhang
# @File    : movie_ranking.py
# @Software: PyCharm
import hashlib
import random
import re
import time
from xml.dom.minidom import parse
from lxml import etree
import requests
from fontTools.ttLib import TTFont

# 该映射表取数字坐标（TTGlyph.contour.pt）的前12位坐标做为数字映射, 不足12为就取全部
# 部分数字有多种情况, 按实际情况做适配
map_table = {
    '101001010101': 0,
    '111001101001': 1,
    '111010000100': 2,
    '100100001011': 3,
    '111111111111': 4,
    '100100001001': 5,
    '101010101001': 6,
    '111100001011': 7,
    '101000010100': 8,
    '100100010011': 9,
    '100100010101': 3,
    '100100101010': 3,
    '100101000100': 5
}


def get_movie_top():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.maoyan.com/board?timeStamp=1654324942249&channelId=40011&index=9&signKey=cf311281cd9e218bd95f3201cfcc4f9c&sVersion=1&webdriver=false",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "__mta": "19240455.1654324948561.1654324948561.1654324948561.1",
        "uuid_n_v": "v1",
        "uuid": "7AAAB2C0E3D111ECAD698F35F4537E4C2100BC43230D47A08324331A8A3CF022",
        "_csrf": "b76bf34a0737d4864197186a3240d1fadc44f084761f4cc57d0fb5f9acfac0f8",
        "_lxsdk_cuid": "1812d736dcec8-03b017df10d983-26021b51-1fa400-1812d736dcec8",
        "_lxsdk": "7AAAB2C0E3D111ECAD698F35F4537E4C2100BC43230D47A08324331A8A3CF022",
        "_lxsdk_s": "1812d736dcf-135-37b-fa0%7C%7C3"
    }
    url = "https://www.maoyan.com/board/1"
    index = random.randint(1, 10)
    timeStamp = int(time.time() * 1000)
    signKey = f'method=GET&timeStamp={timeStamp}&User-Agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36&index={index}&channelId=40011&sVersion=1&key=A013F70DB97834C0A5492378BD76C53A'
    params = {
        "timeStamp": f"{timeStamp}",
        "channelId": "40011",
        "index": index,
        "signKey": hashlib.md5(signKey.encode()).hexdigest(),
        "sVersion": "1",
        "webdriver": "false"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    response.encoding = "utf-8"
    # print(response.text)
    # print(re.findall('<span class="stonefont">(.*?)</span>', response.text))
    # 获取字体文件链接
    woff_url = re.search('format\("embedded-opentype"\),url(.*?);}', response.text).group(1)
    woff_url = 'https:' + eval(woff_url)
    # 下载保存字体文件链接
    woff_content = requests.get(woff_url).content
    with open('woff/maoyan_online.woff', 'wb') as wf:
        wf.write(woff_content)
    wf.close()
    # 获取数字映射表
    number_dist = parse_woff()
    print(f'映射表：{number_dist}')
    pattern = '<i class="board-index board-index-.*?>(.*?)</i>.*?<a href.*?title="(.*?)" class="image-link".*?<img data-src="(.*?)" alt.*?</a>.*?<p class="star">.*?(主演：.*?)</p>.*?<p class="releasetime">(上映时间：.*?)</p>.*?<span class="stonefont">(.*?)</span>.*?<p class="total-boxoffice">.*?<span class="stonefont">(.*?)</span>.*?</p>.*?</div>'  # 定义了提取信息的模式，结合re库，就能提取到片名，头图链接，主演信息，上映时间（评分这里忽略了没写，但是逻辑是一样的）
    infos = re.findall(pattern, response.text, re.S)
    '''findall返回的是一个列表，re.S的功能是忽略换行符，
    因为在pattern中没有具体到每一个换行信息，也没必要涉及'''
    result = []
    for info in infos:  # 当前页面的每部电影遍历
        top = info[0].strip()
        title = info[1].strip()
        pic_link = info[2].strip()
        star = info[3].strip()
        release_time = info[4].strip()
        live_box_office = info[5].strip()
        overall_box_office = info[6].strip()
        live_num = ''
        overall_num = ''
        for n in live_box_office.replace('.', '').split(';')[:-1]:
            live_num += str(number_dist.get(n.replace('&#x', '')))
        live_num = int(live_num) / 10
        for v in overall_box_office.replace('.', '').split(';')[:-1]:
            overall_num += str(number_dist.get(v.replace('&#x', '')))
        overall_num = int(overall_num) / 10
        movie_info = {
            '排名': top,
            '电影名称': title,
            '电影海报': pic_link,
            '主演': star,
            '上映时间': release_time,
            '实时票房': live_num,
            '总票房': overall_num,
        }
        print(movie_info)
        # 每部电影的信息生成一个元组new
        result.append(movie_info)
    # html = etree.HTML(response.text)
    # movie_data = html.xpath('//dl[@class="board-wrapper"]/dd')
    # for movie in movie_data:
    #     movie_info = {}
    #     movie_info['top'] = movie.xpath('.//i/text()')[0]
    #     movie_info['title'] = movie.xpath('.//a/@title')[0]
    #     movie_info['releasetime'] = movie.xpath('.//div//div[@class="movie-item-info"]/p[@class="releasetime"]/text()')[
    #         0]
    #     movie_info['star'] = movie.xpath('.//div//div[@class="movie-item-info"]/p[@class="star"]/text()')[0]
    #     movie_info['star'] = movie.xpath('.//div//div[@class="movie-item-info"]/p[@class="star"]/text()')[0]
    #     movie_info['live_box_office'] = movie.xpath(
    #         './/div//div[@class="movie-item-number boxoffice"]/p[@class="realtime"]/span/span[@class="stonefont"]//text()')[
    #         0]
    #     # for i in movie_info['live_box_office'].split(';'):
    #     #     print(i)
    #     print(movie_info)


def parse_woff():
    number_dist = {}
    # 加载字体文件
    font = TTFont('woff/maoyan_online.woff')
    # 另存为xml文件, 方便解析
    font.saveXML('woff/maoyan_online.xml')
    # 获取已排序的编码列表 --> 注意事项: 已排列顺序为：[1,2,3,4,5,6,7,8,9,0]
    xml_file = parse('woff/maoyan_online.xml')
    # 获取dom结构树
    xml_data = xml_file.documentElement
    # 获取数字1-9的坐标
    ttglyph_list = xml_data.getElementsByTagName('TTGlyph')[1:-1]
    # 遍历每个坐标, 获取数字编码和on值
    for TTGlyph in ttglyph_list:
        # 获取节点的属性值(数字编码)
        name = TTGlyph.getAttribute('name')[3:].lower()
        pt = TTGlyph.getElementsByTagName('pt')
        num = ''
        # 只取前12个on值, 不足12个就取全部
        if len(pt) > 12:
            for v in range(12):
                num += pt[v].getAttribute('on')
            print(name, num)
            # 生成映射表
            number_dist[name] = map_table[num]
        else:
            for v in range(len(pt)):
                num += pt[v].getAttribute('on')
            print(name, num)
            number_dist[name] = map_table[num]
    return number_dist


if __name__ == '__main__':
    get_movie_top()