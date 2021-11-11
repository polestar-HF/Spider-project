# -*- coding: utf-8 -*-
# @Time    : 2021/11/6 14:31
# @Author  : Ram.zhang
# @File    : download_music.py
# @Software: PyCharm
import re
import pymongo
import requests

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["migu_music"]
music_count = 0


def save_mongo(document, coll_name):
    """
    tips：数据量 9065 条, 经测试逐条插入耗时 15.65s, 整批插入耗时 6.06s
    :param document: 数据
    :param coll_name: 集合名
    :return: 存储结果
    """
    coll = db[coll_name]
    global music_count
    if isinstance(document, dict):
        coll.insert_one(document)
        music_count += 1
        print('success add 1 songs info')
    elif isinstance(document, list):
        coll.insert_many(document)
        music_count += len(document)
        print(f'success add {len(document)} songs info')
    else:
        print('数据结构错误')


def get_music_id(page):
    """
    获取歌曲下载所需 id
    :param page:
    :return: list[id]
    """
    print(f'抓取第{page}页歌曲信息 -->')
    headers = {
        'authority': 'music.migu.cn',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://music.migu.cn/v3/music/artist/112/song?page=2',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'mg_uem_user_id_9fbe6599400e43a4a58700a822fd57f8=59a5924b-12f7-4935-a364-e84b4511070b; cookieId=ApzjSr37vKg-mY8MKL6Zj4SajC9iPgE1635251552231; migu_cookie_id=acf7916c-54f4-4375-8346-4d5c53727d28-n41636179070691; migu_music_status=true; migu_music_uid=91287459963; migu_music_avatar=%252F%252Fcdnmusic.migu.cn%252Fv3%252Fstatic%252Fimg%252Fcommon%252Fheader%252Fdefault-avatar.png; migu_music_nickname=%E5%92%AA%E5%92%95%E9%9F%B3%E4%B9%90%E7%94%A8%E6%88%B7; migu_music_level=0; migu_music_credit_level=3; migu_music_platinum=0; migu_music_msisdn=zcsdIqpM5JFNOL%2FN85pEtQ%3D%3D; migu_music_email=; migu_music_passid=462159774412458030; migu_music_sid=s%3A--vTpxbRQFySDwMrPz3xTPX8_phgtcu5.wN8sJJAq99g%2FJN1J8sAyXmQTQ0kOfdCEx4GMyY27MgY; player_stop_open=0; playlist_adding=1; addplaylist_has=1; audioplayer_new=1; audioplayer_open=1; add_play_now=1; playlist_change=0; audioplayer_exist=1; WT_FPC=id=2adafa863d18aa164121635168117109:lv=1636179928670:ss=1636179071447; WT_FPC=id=2adafa863d18aa164121635168117109:lv=1636180009550:ss=1636179071447',
    }
    url = f'https://music.migu.cn/v3/music/artist/112/song?page={page}'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        rel = re.compile('<a class="song-name-txt" href="/v3/music/song/(.*?)" title="(.*?)" target="_blank">', re.S)
        music_list = re.findall(rel, response.text)
        id_list = [{"id": ids, "name": name} for ids, name in music_list]
        save_mongo(id_list, 'jay')
        return id_list


def get_down_url(info: dict):
    """
    获取歌曲下载链接
    :param info: 歌曲信息
    """
    name = info.get('name')
    headers = {
        'authority': 'music.migu.cn',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://music.migu.cn',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://music.migu.cn/v3/music/order/download/60054701913',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'mg_uem_user_id_9fbe6599400e43a4a58700a822fd57f8=59a5924b-12f7-4935-a364-e84b4511070b; cookieId=ApzjSr37vKg-mY8MKL6Zj4SajC9iPgE1635251552231; migu_cookie_id=acf7916c-54f4-4375-8346-4d5c53727d28-n41636179070691; migu_music_status=true; migu_music_uid=91287459963; migu_music_avatar=%252F%252Fcdnmusic.migu.cn%252Fv3%252Fstatic%252Fimg%252Fcommon%252Fheader%252Fdefault-avatar.png; migu_music_nickname=%E5%92%AA%E5%92%95%E9%9F%B3%E4%B9%90%E7%94%A8%E6%88%B7; migu_music_level=0; migu_music_credit_level=3; migu_music_platinum=0; migu_music_msisdn=zcsdIqpM5JFNOL%2FN85pEtQ%3D%3D; migu_music_email=; migu_music_passid=462159774412458030; migu_music_sid=s%3A--vTpxbRQFySDwMrPz3xTPX8_phgtcu5.wN8sJJAq99g%2FJN1J8sAyXmQTQ0kOfdCEx4GMyY27MgY; player_stop_open=0; playlist_adding=1; addplaylist_has=1; audioplayer_new=1; audioplayer_open=1; add_play_now=1; playlist_change=0; audioplayer_exist=1; WT_FPC=id=2adafa863d18aa164121635168117109:lv=1636179928670:ss=1636179071447; WT_FPC=id=2adafa863d18aa164121635168117109:lv=1636179929605:ss=1636179071447',
    }

    data = {
        'copyrightId': f'{info.get("id")}2',
        'payType': '01',
        'type': '2',
        'songType': 'SDSONG'
    }

    response = requests.post('https://music.migu.cn/v3/api/order/download', headers=headers, data=data).json()
    down_url = response.get('downUrl')
    music_info = {
        "music_name": name,
        "down_url": down_url
    }
    save_mongo(music_info, 'jay_down_url')
    down_music(down_url, name)


def down_music(url, file_name):
    """
    下载保存歌曲
    :param url: 歌曲下载链接
    :param file_name: 歌名
    :return: 下载结果
    """
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print(f'正在下载歌曲：{file_name}-周杰伦.mp4')
            with open(f'E:\\周杰伦专辑\\{file_name}-周杰伦.mp4', 'wb') as file:
                file.write(response.content)
            print(f'歌曲：{file_name}-周杰伦.mp4 --> 下载成功')
            file.close()
    except:
        fail_url.append((url, file_name))
        print(f'歌曲：{file_name}-周杰伦.mp4 --> 下载失败')


if __name__ == '__main__':
    fail_url = []
    for num in range(10, 15):
        for info in get_music_id(num):
            get_down_url(info)
    print(f'共存入 {music_count} 首歌曲信息')
    print('下载失败：', fail_url)
