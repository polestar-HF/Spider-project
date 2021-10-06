import json
import time
import pymysql
import requests
from linkmysql import query_data

# 微博情感分析通过调用百度AI-情感分析倾向
API_Key = "Xgd3ch2b*********1m5MuWN"  # 官网获取的AK
Secret_Key = "8C4tGV*********pGOcpG"  # 官网获取的AK

RESULT = []  # 存放情感分析结果

# ----------------获取access_token------------------


def access_token():
    # client_id 为官网获取的AK， client_secret 为官网获取的SK
    host = f'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={API_Key}&client_secret={Secret_Key}'
    response = requests.get(host)
    if response:
        data = response.json()
        access_token = data['access_token']
        return access_token


def post_baiduAPI(access_token, text: str):
    """
    API是百度AI-情感倾向分析接口（通用版） 请求方式POST
    :param access_token: 鉴权认证
    :return: 情感分析结果
    """
    """ 
        log_id	    uint64	    请求唯一标识码
        sentiment	int	        表示情感极性分类结果，0:负向，1:中性，2:正向
        confidence	float	    表示分类的置信度，取值范围[0,1]
        positive_prob	float	表示属于积极类别的概率 ，取值范围[0,1]
        negative_prob	float	表示属于消极类别的概率，取值范围[0,1]
    """
    if text:
        url = f"https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify?charset=UTF-8&access_token={access_token}"
        data = json.dumps({
            "text": text[1]
        })
        headers = {
            "Content-Type": "application/json"
        }
        response = requests.post(url=url, data=data, headers=headers).json()
        if response:
            """data = {
                "id" : text [0], # 排名
                "exponent" : text[2], # 热度
                "text" : response['text'], # 文本
                "sentiment" : response['items'][0]['sentiment'], # 分析结果
                "confidence" : response['items'][0]['confidence'], # 分类的置信度
                "positive_prob" : response['items'][0]['positive_prob'], # 属于积极类别的概率
                "negative_prob" : response['items'][0]['negative_prob'] # 属于消极类别的概率
            }
            """
            texts = response['text']
            sentiment = response['items'][0]['sentiment']
            confidence = response['items'][0]['confidence']
            positive_prob = response['items'][0]['positive_prob']
            negative_prob = response['items'][0]['negative_prob']
            confidence = float('%.2f' % confidence)
            positive_prob = float('%.2f' % positive_prob)
            negative_prob = float('%.2f' % negative_prob)
            data = [text[0], text[2], texts, sentiment,
                    confidence, positive_prob, negative_prob]
            print(data)
            RESULT.append(data)
    else:
        print("文本为空！")


def read_mysql():
    sql = "SELECT * FROM weibo.shujus2"
    return query_data(sql)


def insert_mysql(shuju):
    """
    将情感倾向分析的结果写入MySQL
    :return: TABLE emotion
    """
    DB = pymysql.connect(host='localhost', user='root',
                         password='123456', db='weibo', charset="utf8")
    # 建立游标
    cursor = DB.cursor()
    SQL = """
        CREATE TABLE IF NOT EXISTS emotions2 (
            id INT NOT NULL,
            热度 VARCHAR(255) NULL,
            标题 VARCHAR(255) NULL,
            情感极性 INT NOT NULL,
            置信度 FLOAT NOT NULL,
            积极类别概率 FLOAT NOT NULL,
            消极类别概率 FLOAT NOT NULL
            )
    """
    cursor.execute(SQL)
    print('表创建成功')
    for value in shuju:
        cursor.execute(
            "INSERT INTO emotions2 VALUES(%s,%s,%s,%s,%s,%s,%s)", [
                value[0], value[1], value[2], value[3], value[4], value[5], value[6]]
        )
    print(f"成功向MySQL写入{len(shuju)}条数据")
    DB.commit()


if __name__ == '__main__':
    token = access_token()
    data = read_mysql()
    for text in data:
        post_baiduAPI(token, text=text)
        time.sleep(0.5)
    insert_mysql(RESULT)
