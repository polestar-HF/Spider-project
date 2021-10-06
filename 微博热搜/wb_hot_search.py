import re
import csv
import time
import requests
import jieba
import pymysql
from lxml import etree
from fake_useragent import UserAgent

DATA = []
NUMS = []
MID = []
NR_TEXT = []


def get_weibo():
    """
    获取微博热搜列表
    :return: 热搜
    """
    url = "https://m.weibo.cn/api/container/getIndex"
    params = {
        "containerid": "106003type=25&t=3&disable_hot=1&filter_type=realtimehot",
        "title": "微博热搜",
        "extparam": "seat=1&pos=0_0&dgr=0&mi_cid=100103&cate=10103&filter_type=realtimehot&c_type=30&display_time=1618491261",
        "luicode": 10000011,
        "lfid": 231583
    }
    headers = {
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'X-XSRF-TOKEN': '2ef960',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': UserAgent().random,
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://m.weibo.cn/p/index?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot&title=%E5%BE%AE%E5%8D%9A%E7%83%AD%E6%90%9C&extparam=seat%3D1%26pos%3D0_0%26dgr%3D0%26mi_cid%3D100103%26cate%3D10103%26filter_type%3Drealtimehot%26c_type%3D30%26display_time%3D1618491261&luicode=10000011&lfid=231583',
        'MWeibo-Pwa': '1',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': '_T_WM=23448644708; XSRF-TOKEN=804a70; WEIBOCN_FROM=1110106030; MLOGIN=0; M_WEIBOCN_PARAMS=luicode%3D10000011%26lfid%3D231583%26fid%3D106003type%253D25%2526t%253D3%2526disable_hot%253D1%2526filter_type%253Drealtimehot%26uicode%3D10000011'
    }

    r = requests.get(url=url, params=params, headers=headers)
    return r.json()


def parse_data(data: dict):
    """
    提起微博热搜
    :param data: json
    :return: 热搜结果
    """
    num = 1  # 排名
    for i in range(2):
        real_top = data['data']['cards'][i]
        for value in real_top['card_group']:
            try:
                # 热搜
                title = value['desc']
                # 指数
                exponent = value["desc_extr"]
                sj = [num, title, exponent]
                print(sj)
                DATA.append(sj)
                num += 1
            except:
                pass


def get_comment(text):
    """
    获取热搜下的转发数和评论数
    :param text: list
    :return: 转发数和评论数
    """
    for tx in text:
        headers = {
            'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            'X-XSRF-TOKEN': '6b1e76',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': UserAgent().random,
            'Accept': 'application/json, text/plain, */*',
            'Referer': 'https://m.weibo.cn/search?containerid=100103type%3D1%26t%3D10%26q%3D%23%E5%81%B7%E9%B8%A1%E8%9B%8B%E8%A2%AB%E6%8B%A6%E7%8C%9D%E6%AD%BB%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9438%E4%B8%87%E8%A2%AB%E9%A9%B3%23&isnewpage=1&extparam=seat%3D1%26filter_type%3Drealtimehot%26dgr%3D0%26cate%3D0%26pos%3D46%26realpos%3D46%26flag%3D0%26c_type%3D31%26display_time%3D1618755333&luicode=10000011&lfid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot',
            'MWeibo-Pwa': '1',
            'X-Requested-With': 'XMLHttpRequest',
        }
        try:
            params = (
                ('containerid', '100103type=1&t=10&q=#%s#' % tx[1]),
                ('isnewpage', '1'),
                ('extparam',
                 'seat=1&filter_type=realtimehot&dgr=0&cate=0&pos=0&realpos=1&flag=1&c_type=31&display_time=1618748889'),
                ('luicode', '10000011'),
                ('lfid', '106003type=25&t=3&disable_hot=1&filter_type=realtimehot'),
                ('page_type', 'searchall'),
            )
            proxies = {
                "https": "121.233.226.178:9999"
            }
            response = requests.get(
                'https://m.weibo.cn/api/container/getIndex', headers=headers, params=params).text
            # print(response)
            # 转发数量
            reposts_count = re.findall(
                '"reposts_count":(.*?)"', response, re.S)[0].strip(',')
            # 评论人数
            comments_count = re.findall(
                '"comments_count":(.*?)"', response, re.S)[0].strip(',')
            # 点赞数
            attitudes_count = re.findall(
                '"attitudes_count":(.*?)"', response, re.S)[0].strip(',')
            # 热搜内容id
            mid = re.findall('"mid":"(.*?)"', response, re.S)[0].strip(',')
            data = [tx[0], tx[1], tx[2], reposts_count,
                    reposts_count, attitudes_count]
            mids = [tx[0], tx[1], mid]
            MID.append(mids)
            print(
                f"热搜：{tx[1]} 转发量：{reposts_count} 评论数：{reposts_count} 点赞数：{attitudes_count}")
            print(mid)
            NUMS.append(data)
            time.sleep(3)
        except:
            print('跳过')
            time.sleep(1)


def particular_text(MID: list):
    """
    获取微博热搜详细内容
    :return: list
    """
    headers = {
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        'X-XSRF-TOKEN': 'e44358',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': UserAgent().random,
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://m.weibo.cn/status/4627830300476866',
        'MWeibo-Pwa': '1',
        'X-Requested-With': 'XMLHttpRequest',
    }
    for mid in MID:
        params = (
            ('id', mid[2]),
        )
        response = requests.get(
            'https://m.weibo.cn/statuses/extend', headers=headers, params=params).json()
        response = '<body>' + response['data']['longTextContent'] + '</body>'
        data = etree.HTML(response)
        tx = data.xpath('//body/text()')
        text = "".join(tx)
        sj = [mid[0], mid[1], text.replace(' ', '')]
        NR_TEXT.append(sj)
        print(sj)
        time.sleep(3)


def save_text(nr):
    """
    保存热搜的详细内容
    :return: csv
    """
    fire = open('微博热搜内容.csv', 'w', encoding="gb18030", newline='')
    csv_fire = csv.writer(fire)
    csv_fire.writerow(['排名', "热搜", "内容"])
    for i in nr:
        csv_fire.writerow(i)


def save_csv(shuju: list):
    """
    保存数据到Excel
    :param shuju: list
    :return: 微博热搜.csv
    """
    fire = open('微博热搜.csv', 'w', encoding="gb18030", newline='')
    csv_fire = csv.writer(fire)
    csv_fire.writerow(['排名', "热搜", "热度"])
    for i in shuju:
        csv_fire.writerow(i)


def save_mysql_nums(shuju: list):
    """
    将热搜转发、评论、点赞的数量数据保存到MySQL
    :param shuju: 数据
    :return: 保存结果
    """
    # 连接数据库
    DB = pymysql.connect(host='localhost', user='root',
                         password='123456', db='weibo', charset="utf8")
    # 建立游标
    cursor = DB.cursor()
    sql = """
            CREATE TABLE IF NOT EXISTS amounts2(
                id INT NOT NULL,
                热搜 VARCHAR(255) NULL,
                热度 VARCHAR(255) NULL,
                转发量 VARCHAR(255) NULL,
                评论量 VARCHAR(255) NULL,
                点赞量 VARCHAR(255) NULL
                )
        """
    cursor.execute(sql)
    print('表创建成功')
    for value in shuju:
        cursor.execute(
            "INSERT INTO amounts2 VALUES(%s,%s,%s,%s,%s,%s)", [
                value[0], value[1], value[2], value[3], value[4], value[5]]
        )
    print(f"成功向MySQL:amounts写入{len(shuju)}条数据")
    DB.commit()


def save_mysql_DATA(shuju: list):
    """
    将数据保存到MySQL
    :param shuju: list
    :return:
    """
    # 连接数据库
    DB = pymysql.connect(host='localhost', user='root',
                         password='123456', db='weibo', charset="utf8")
    # 建立游标
    cursor = DB.cursor()
    sql = """
        CREATE TABLE IF NOT EXISTS shujus2(
	        id VARCHAR(255) NOT NULL,
	        title VARCHAR(255) NULL,
	        top VARCHAR(255) NULL
                )
        """
    cursor.execute(sql)
    print('表创建成功')
    for value in shuju:
        cursor.execute(
            "INSERT INTO shujus2 VALUES(%s,%s,%s)", [
                value[0], value[1], value[2]]
        )
    print(f"成功向MySQL:shujus写入{len(shuju)}条数据")
    DB.commit()


def participle(data: list):
    """
    采用jieba的搜索引擎模式进行分词
    :param data: list
    :return:
    """
    fire = open('微博热搜分词2.csv', 'w', encoding="gb18030", newline='')
    csv_fire = csv.writer(fire)
    for k in data:
        seg_list = jieba.cut_for_search(k[1])
        value = ", ".join(seg_list)
        csv_fire.writerow([value])


def main():
    data = get_weibo()
    parse_data(data)
    get_comment(DATA)
    particular_text(MID)
    save_text(NR_TEXT)
    save_csv(DATA)
    save_mysql_nums(NUMS)
    save_mysql_DATA(DATA)
    participle(DATA)


if __name__ == '__main__':
    main()
