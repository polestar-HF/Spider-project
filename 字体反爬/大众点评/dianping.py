# -*- coding: utf-8 -*-
# @Time    : 2022/6/5 14:23
# @Author  : Ram.zhang
# @File    : dianping.py
# @Software: PyCharm
import os.path
import random
import re
import time
from lxml import etree
from fontTools.ttLib import TTFont
from loguru import logger
import requests
from pathlib import PurePath

# 映射文字
words = '1234567890店中美家馆小车大市公酒行国品发电金心业商司超生装园场食有新限天面工服海华水房饰城乐汽香部利子老艺花专东肉菜学福饭人百餐茶务通味所山区门药银农龙停尚安广鑫一容动南具源兴鲜记时机烤文康信果阳理锅宝达地儿衣特产西批坊州牛佳化五米修爱北养卖建材三会鸡室红站德王光名丽油院堂烧江社合星货型村自科快便日民营和活童明器烟育宾精屋经居庄石顺林尔县手厅销用好客火雅盛体旅之鞋辣作粉包楼校鱼平彩上吧保永万物教吃设医正造丰健点汤网庆技斯洗料配汇木缘加麻联卫川泰色世方寓风幼羊烫来高厂兰阿贝皮全女拉成云维贸道术运都口博河瑞宏京际路祥青镇厨培力惠连马鸿钢训影甲助窗布富牌头四多妆吉苑沙恒隆春干饼氏里二管诚制售嘉长轩杂副清计黄讯太鸭号街交与叉附近层旁对巷栋环省桥湖段乡厦府铺内侧元购前幢滨处向座下臬凤港开关景泉塘放昌线湾政步宁解白田町溪十八古双胜本单同九迎第台玉锦底后七斜期武岭松角纪朝峰六振珠局岗洲横边济井办汉代临弄团外塔杨铁浦字年岛陵原梅进荣友虹央桂沿事津凯莲丁秀柳集紫旗张谷的是不了很还个也这我就在以可到错没去过感次要比觉看得说常真们但最喜哈么别位能较境非为欢然他挺着价那意种想出员两推做排实分间甜度起满给热完格荐喝等其再几只现朋候样直而买于般豆量选奶打每评少算又因情找些份置适什蛋师气你姐棒试总定啊足级整带虾如态且尝主话强当更板知己无酸让入啦式笑赞片酱差像提队走嫩才刚午接重串回晚微周值费性桌拍跟块调糕'


def get_data(page):
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Proxy-Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    }
    cookies = {
        "fspop": "test",
        "cy": "7",
        "cye": "shenzhen",
        "_lxsdk_cuid": "1813256d28dc8-0c93ccc4ccfdef-26021b51-1fa400-1813256d28dc8",
        "_lxsdk": "1813256d28dc8-0c93ccc4ccfdef-26021b51-1fa400-1813256d28dc8",
        "_hc.v": "52fbbe43-4117-a557-5117-64e50f8d9f06.1654406961",
        "s_ViewType": "10",
        "_lx_utm": "utm_source%3Dgoogle%26utm_medium%3Dorganic",
        "WEBDFPID": "26435v26693w5v1z0729uxw3995ww3zw818605w386197958y4yy7902-1654610182261-1654523780793UGMMSOOfd79fef3d01d5e9aadc18ccd4d0c95071321",
        "dplet": "ac13426bd0c24043e68510df2b62061f",
        "dper": "0f285a347458d084bb9bac7d31134ebb18d057d0cd5a8768738e75eda807c0a381400dd13df1154e646e6a8a0205fee68f4bd58ac3d595c5d5fe2964f1a99aa56460121bba5f2639d7819a5b8b2364dd573768e9d4c9b255d6ed98932fe4ed02",
        "ll": "7fd06e815b796be3df069dec7836c3df",
        "ua": "%E6%98%9F%E8%BE%B0%E5%A4%A7%E6%B5%B7",
        "ctu": "4fd49dfc5b358f03bee5392d1a96a2de30f9ad134949e61eada260c87ebbc912",
        "_lxsdk_s": "181394ce799-20b-02a-53f%7C%7C91"
    }
    url = f"http://www.dianping.com/shenzhen/ch10/p{page}"
    response = requests.get(url, headers=headers, cookies=cookies)
    html = etree.HTML(response.text)
    # 获取css文件链接 --> 包含字体文件的url
    css_file_url = 'http:' + html.xpath('/html/head/link[9]/@href')[0]
    if css_file_url:
        css_response = requests.get(css_file_url, headers=headers, cookies=cookies)
        # 价格与评论人数字体文件链接
        woff_url_1 = re.search(
            '@font-face{font-family: "PingFangSC-Regular-shopNum";.*?format\("embedded-opentype"\),url\("(.*?\.woff)"\)',
            css_response.text).group(1)
        # 判断字体文件是否存在（不存在则网站更新了字体文件, 重新下载字体文件解析）
        if woff_url_1 and not os.path.exists(f'woff/{PurePath(woff_url_1).name}'):
            with open(f'woff/{PurePath(woff_url_1).name}', 'wb') as woff:
                content = requests.get('http:' + woff_url_1).content
                woff.write(content)
            woff.close()
            logger.success(f'成功下载字体1')
        # 地址字体文件链接
        woff_url_2 = re.search(
            '@font-face{font-family: "PingFangSC-Regular-tagName";.*?format\("embedded-opentype"\),url\("(.*?\.woff)"\)',
            css_response.text).group(1)
        # 判断字体文件是否存在（不存在则网站更新了字体文件, 重新下载字体文件解析）
        if woff_url_2 and not os.path.exists(f'woff/{PurePath(woff_url_2).name}'):
            with open(f'woff/{PurePath(woff_url_2).name}', 'wb') as woff:
                content = requests.get('http:' + woff_url_2).content
                woff.write(content)
            woff.close()
            logger.success(f'成功下载字体2')
        # 解析字体文件生成映射表
        woff_name_1 = PurePath(woff_url_1).name.split('.')[0]
        woff_name_2 = PurePath(woff_url_2).name.split('.')[0]
        map_dist_1, map_dist_2 = parse_woff(woff_name_1, woff_name_2)
    else:
        return None
    rel = '<a.*?data-click-name="shop_title_click".*?title="(.*?)".*?>.*?</a>.*?<div class="star_icon">.*?<span class="(.*?)">.*?</span>.*?</div>.*?<a.*?data-click-name="shop_iwant_review_click".*?>.*?<b>(.*?)</b>.*?</a>.*?<a.*?data-click-name="shop_avgprice_click".*?>.*?<b>(.*?)</b>.*?</a>.*?<a.*?data-click-name="shop_tag_region_click".*?>.*?<span class="tag">(.*?)</span>.*?</a>'
    shop_info = re.findall(rel, response.text, re.S)
    for shop in shop_info:
        name = shop[0]
        star = int(shop[1].split(' ')[1].replace('star_', '')) / 10
        # 处理评论人数（字体反爬）
        comment_num = shop[2].replace('<svgmtsi class="shopNum">', '').replace('</svgmtsi>', '')
        num = ''
        # filter 删除列表空值, 返回迭代器
        for n in filter(None, comment_num.split(';')):
            if n.startswith('&#x'):
                num += str(map_dist_1.get(n.replace('&#x', '')))
            # 判断&#x是否在字符串中
            elif '&#x' in n:
                code = n.split('&#x')
                # 字符中可能包含一些数字和文字, 也添加进去
                num += code[0]
                num += str(map_dist_1.get(code[1]))
            else:
                num += n
        # 处理人均价格（字体反爬）
        price = shop[3].replace('<svgmtsi class="shopNum">', '').replace('</svgmtsi>', '').replace('￥', '')
        price_num = ''
        # filter 删除列表空值, 返回迭代器
        for v in filter(None, price.split(';')):
            if v and v.startswith('&#x'):
                price_num += str(map_dist_1.get(v.replace('&#x', '')))
            # 判断&#x是否在字符串中
            elif '&#x' in v:
                code = v.split('&#x')
                # 字符中可能包含一些数字和文字，也添加进去
                price_num += code[0]
                price_num += str(map_dist_1.get(code[1]))
            else:
                price_num += v
        # 处理地址（字体反爬）
        site = shop[4].replace('<svgmtsi class="tagName">', '').replace('</svgmtsi>', '')
        site_str = ''
        # filter 删除列表空值, 返回迭代器
        for k in filter(None, site.split(';')):
            # 判断编码是不是以&#x开头
            if k and k.startswith('&#x'):
                site_str += map_dist_2.get(k.replace('&#x', ''))
                # 如果在映射表2中没有查到对应文字和数字, 尝试在映射表1中寻找
                if not site_str:
                    site_str += map_dist_1.get(k.replace('&#x', ''))
            # 判断&#x是否存在字符串中
            elif '&#x' in k:
                code = k.split('&#x')
                # 字符中可能包含一些数字和文字，也添加进去
                site_str += code[0]
                site_str += str(map_dist_2.get(code[1]))
                # 如果在映射表2中没有查到对应文字和数字, 尝试在映射表1中寻找
                if not site_str:
                    site_str += map_dist_1.get(k.replace('&#x', ''))
            else:
                site_str += k
        store_info = {
            '商店名称': name,
            '评分': star,
            '评价人数': num,
            '人均消费': price_num,
            '地址': site_str
        }
        print(store_info)


def parse_woff(woff_name_1, woff_name_2):
    """
    大众点评的字体是动态的（字体文件的链接在css文件里）, 但是每套字体的排列顺序是一样的, 可以用一套逻辑处理
    :return: 字体映射表
    """
    map_dist_1 = {}
    # 加载字体文件
    font_1 = TTFont(f'woff/{woff_name_1}.woff')
    # 另存为xml文件, 方便解析
    font_1.saveXML(f'woff/{woff_name_1}.xml')
    # 获取已排序的文字与数字编码
    font_encoding_1 = font_1.get('post').__dict__['extraNames'][2:]
    # 解析生成映射表
    if len(font_encoding_1) == len(list(words)):
        for code, word in zip(font_encoding_1, list(words)):
            map_dist_1[code.replace('uni', '')] = word
    logger.success('价格字体映射表生成完毕')
    map_dist_2 = {}
    # 加载字体文件
    font_2 = TTFont(f'woff/{woff_name_2}.woff')
    # 另存为xml文件, 方便解析
    font_2.saveXML(f'woff/{woff_name_2}.xml')
    # 获取已排序的文字与数字编码
    font_encoding_2 = font_2.get('post').__dict__['extraNames'][2:]
    # 解析生成映射表
    if len(font_encoding_2) == len(list(words)):
        for code, word in zip(font_encoding_2, list(words)):
            map_dist_2[code.replace('uni', '')] = word
    logger.success('地址字体映射表生成完毕')
    return map_dist_1, map_dist_2


if __name__ == '__main__':
    for page in range(1, 11):
        logger.info(f'开始抓取第{page}页')
        get_data(page)
        time.sleep(random.randint(3, 5))
    # parse_woff()
