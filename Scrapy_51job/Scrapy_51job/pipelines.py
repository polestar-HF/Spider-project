# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class Scrapy51JobPipeline:
    def process_item(self, item, spider):
        pay = item['pay']
        if len(pay[0]) == 0:
            pay = ['3-8千/月']
        elif '元' in pay[0]:
            pay = ['3-8千/月']
        elif '以下' in pay[0]:
            pay = ['3-8千/月']
        arr = pay[0].split('-')
        mins = arr[0]
        if '万' in arr[1]:
            maxs = arr[1].split('万')
            item['max_pay'] = float(maxs[0]) * 10000
            item['min_pay'] = float(mins) * 10000
        elif '千' in arr[1]:
            maxs = arr[1].split('千')
            item['max_pay'] = float(maxs[0]) * 1000
            item['min_pay'] = float(mins) * 1000
        return item
