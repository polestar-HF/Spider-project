# -*- coding: utf-8 -*-
import scrapy
import re
from Scrapy_51job.items import Scrapy51JobItem


class Spider51jobSpider(scrapy.Spider):
    name = 'spider_51job'
    allowed_domains = ['51job.com']
    start_urls = [
        'https://search.51job.com/list/000000,000000,0000,00,9,99,python,2,1.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare=']

    def parse(self, response):
        '''获取招聘详情页URL'''
        urls = response.selector.re('"job_href":"(.*?)"')
        for url in urls:
            link = url.replace('\\', '')
            yield scrapy.Request(url=link, callback=self.parse_data)
        # 爬取下一页信息
        for page in range(2, 6):  # 设置页数，建议不要设置太多页
            next = f'https://search.51job.com/list/000000,000000,0000,00,9,99,python,2,{page}.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare='
            yield scrapy.Request(url=next, callback=self.parse)

    def parse_data(self, response):
        '''解析招聘详情数据'''
        item = Scrapy51JobItem()
        information = response.xpath('//div[@class="cn"]')
        for data in information:
            # 职位
            name = data.xpath('.//h1/@title').extract_first()
            item['name'] = name
            # 公司
            company = data.xpath('.//p[1]/a/@title').extract_first()
            item['company'] = company
            # 地址
            site = data.xpath(
                './/p[2]/text()[1]').extract_first().strip('\xa0\xa0')
            item['site'] = site
            # 薪资
            pay = data.xpath('.//strong/text()').extract()
            item['pay'] = pay
            # 工作年限
            experience = data.xpath(
                './/p[2]/text()[2]').extract_first().strip('\xa0\xa0')
            item['experience'] = experience
            # 学历
            education = data.xpath(
                './/p[2]/text()[3]').extract_first().strip('\xa0\xa0')
            item['education'] = education
            # 五险一金
            welfare = data.xpath('.//div/div/span[1]/text()').extract_first()
            item['welfare'] = welfare
            yield item
