## 微博热搜
> 项目背景：抓取微博热搜内容、转发数和评论数, 分析热搜的情感倾向
>, 情感倾向分析是使用百度AI-情感倾向分析接口
---
- 代码介绍
  - wb_hot_search.py --> 热搜抓取
  - wb_feeling_analysis --> 情感分析
  - linkmysql --> MySQL脚本
  
- 注意事项
  - [百度AI-情感倾向分析](https://ai.baidu.com/tech/nlp_apply/sentiment_classify)接口需要自行注册 
  - 抓取速度不宜过快