# 企业数据查询系统

![GitHub stars](https://img.shields.io/github/stars/YHYYDS666/Enterprise-check?style=social)
![GitHub forks](https://img.shields.io/github/forks/YHYYDS666/Enterprise-check?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/YHYYDS666/Enterprise-check?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/YHYYDS666/Enterprise-check)
![GitHub issues](https://img.shields.io/github/issues/YHYYDS666/Enterprise-check)
![GitHub pull requests](https://img.shields.io/github/issues-pr/YHYYDS666/Enterprise-check)
![GitHub license](https://img.shields.io/github/license/YHYYDS666/Enterprise-check)
![GitHub repo size](https://img.shields.io/github/repo-size/YHYYDS666/Enterprise-check)

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)

## 项目简介
这是一个基于 Vue.js + TypeScript 开发的企业数据查询平台，集成了 [Metaso API](https://github.com/LLM-Red-Team/metaso-free-api) 和 [Enterprise-Information-Scraper](https://github.com/LostXine/enterprise-information-scraper) 爬虫系统，实现企业信息的实时查询、数据分析和自动化数据采集。系统采用黑客风格的 Matrix UI 设计。

## 核心数据
- 📊 250万+ 数据点
- 🏢 5万+ 追踪企业
- 🔄 1000+ 每日更新数据

## 数据来源
1. **API 集成**
   - Metaso 免费 API
   - 企查查
   - 天眼查
   - 国家企业信用信息公示系统

2. **爬虫系统**
   - 基于 Scrapy 的分布式爬虫
   - 自动化数据采集
   - 智能反爬处理
   - 数据清洗和存储

## 主要功能
- 🔍 企业信息实时搜索
- 💡 智能关键词联想
- 🤖 自动化数据采集
- 📱 响应式设计
- 🌐 实时信息收集系统
- 🔐 数据安全保护

## 技术栈
### 前端
- Vue.js + TypeScript
- Tailwind CSS
- Pinia
- Vite

### 后端爬虫
- Python Scrapy
- Redis 分布式支持
- MongoDB 数据存储
- 代理池管理

## 快速开始
```bash
# 前端部署
npm install
npm run dev
#网站运行tu
![image](https://github.com/user-attachments/assets/cb2a13ff-6e41-496a-b13e-7c2e19282ef0)
# 爬虫部署
pip install -r requirements.txt
python main.py
```

## 项目结构
```
project/
├── frontend/          # 前端项目
│   ├── src/
│   │   ├── api/      # API 接口
│   │   ├── components/
│   │   └── views/
│   └── ...
├── crawler/           # 爬虫项目
│   ├── spiders/      # 爬虫脚本
│   ├── middlewares/  # 中间件
│   └── pipelines/    # 数据处理
└── ...
```

## 环境要求
- Node.js >= 16
- Python >= 3.8
- Redis
- MongoDB

## 配置说明
1. **前端配置**
```bash
# .env
VITE_API_BASE_URL=your_api_base_url
```

2. **爬虫配置**
```python
# settings.py
MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
```

## API 调用示例
```typescript
// 企业搜索示例
const response = await fetch('/api/enterprise/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    keyword: '公司名称'
  })
});
```

## 开发团队
- 全栈开发
- 爬虫工程师
- UI设计师
- 数据分析师

## 更新日志
- v1.0.0 (2024-11-08)
  - 初始版本发布
  - 集成 Metaso API
  - 整合企业信息爬虫
  - Matrix 风格 UI 实现

## 免责声明
本项目仅供学习研究使用，请勿用于商业用途。使用本项目产生的任何法律责任由使用者自行承担。

## 许可证
MIT License

## 联系方式
- Email：1768582979@qq.com
- GitHub：YHYYDS666

## 贡献指南
欢迎提交 Issue 和 Pull Request。在提交 PR 之前，请确保：
1. 更新了相关文档
2. 添加了必要的测试
3. 通过了所有的测试用例

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=YHYYDS666/Enterprise-check&type=Date)](https://star-history.com/#YHYYDS666/Enterprise-check&Date)
```

