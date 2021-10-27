# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class Scrapy51JobItem(scrapy.Item):
    # 职位
    name = scrapy.Field()
    # 公司
    company = scrapy.Field()
    # 地址
    site = scrapy.Field()
    # 薪资
    pay = scrapy.Field()
    # 工作年限
    experience = scrapy.Field()
    # 学历
    education = scrapy.Field()
    # 五险一金
    welfare = scrapy.Field()
    # 最低薪资
    min_pay = scrapy.Field()
    # 最高薪资
    max_pay = scrapy.Field()
