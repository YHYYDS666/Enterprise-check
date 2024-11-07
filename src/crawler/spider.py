import scrapy
import sys
import json
from scrapy.crawler import CrawlerProcess

class CompanySpider(scrapy.Spider):
    name = 'company_spider'
    
    def __init__(self, query=None, *args, **kwargs):
        super(CompanySpider, self).__init__(*args, **kwargs)
        self.query = query
        self.results = []
        
    def start_requests(self):
        # 这里添加要爬取的网站
        urls = [
            f'https://news.baidu.com/ns?word={self.query}',
            f'https://www.tianyancha.com/search?key={self.query}'
        ]
        
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)
            
    def parse(self, response):
        # 根据不同网站解析数据
        # 这里需要根据实际网站结构编写解析逻辑
        pass

if __name__ == "__main__":
    query = sys.argv[1]
    process = CrawlerProcess()
    process.crawl(CompanySpider, query=query)
    process.start() 