
# 数据猎手 - 企业信息搜索系统

![GitHub stars](https://img.shields.io/github/stars/YHYYDS666/Enterprise-check?style=social)
![GitHub forks](https://img.shields.io/github/forks/YHYYDS666/Enterprise-check?style=social)
![GitHub license](https://img.shields.io/github/license/YHYYDS666/Enterprise-check)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 项目简介

一个具有赛博朋克风格的企业信息搜索平台，使用 Matrix 风格设计，集成了多源数据爬虫系统。系统可以实时搜索和展示企业的风险信息、违规记录和数据泄露事件。

### 数据统计
```typescript:src/App.tsx
startLine: 94
endLine: 98
```

## 核心功能

### 1. Matrix 风格界面
- 数字雨背景动画（使用 Canvas 实现）
- 半透明磨砂玻璃设计
- 绿色主题的黑客风格

### 2. 实时搜索系统
- 企业名称和关键词搜索
- 搜索状态实时反馈
- 多维度结果过滤
```typescript:src/App.tsx
startLine: 13
endLine: 22
```

### 3. 风险评估展示
- 三级风险等级（高/中/低）
- 时间轴展示
- 详细信息卡片
```typescript:src/components/ResultCard.tsx
startLine: 10
endLine: 13
```

### 4. 数据采集系统
- 多源数据爬虫
- 实时数据解析
- 自动风险评级
```python:src/crawler/spider.py
startLine: 14
endLine: 22
```

## 技术实现

### 前端技术栈
- React 18 + TypeScript
- Tailwind CSS
- Canvas 动画
- Lucide React 图标

### 后端技术栈
- Express.js
- Python Scrapy
- Node.js 进程通信

## 快速开始

1. **克隆项目**
```bash
git clone https://github.com/YHYYDS666/Enterprise-check.git
cd Enterprise-check
```

2. **安装依赖**
```bash
# 前端依赖
npm install

# 爬虫依赖
pip install scrapy
```

3. **启动服务**
```bash
# 开发服务器
npm run dev

# API 服务器（新终端）
npm run server
```

## 项目结构
```
enterprise-check/
├── src/
│   ├── components/
│   │   ├── MatrixRain.tsx   # Matrix 背景效果
│   │   ├── SearchBar.tsx    # 搜索组件
│   │   └── ResultCard.tsx   # 结果卡片
│   ├── data/
│   │   └── searchData.ts    # 数据接口定义
│   ├── crawler/
│   │   └── spider.py        # 爬虫系统
│   ├── server/
│   │   └── api.ts           # Express 服务
│   └── App.tsx              # 主应用
└── ...
```

## 网站运行截图

![image](https://github.com/user-attachments/assets/5f936f08-69d4-4e89-8abf-02b209171519)
- 后端不能用,求大佬给我改改[感激涕零]!!!

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for 文件路径...\wz\src\server\api.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
    at defaultLoad (node:internal/modules/esm/load:143:22)
    at async nextLoad (node:internal/modules/esm/hooks:866:22)
    at async nextLoad (node:internal/modules/esm/hooks:866:22)
    at async Hooks.load (node:internal/modules/esm/hooks:449:20)
    at async MessagePort.handleMessage (node:internal/modules/esm/worker:196:18) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
```  

  
## API 文档

### 搜索接口
```typescript
GET /api/search?query=关键词

// 响应格式
interface SearchResult {
  id: number;
  company: string;
  title: string;
  summary: string;
  severity: "high" | "medium" | "low";
  date: string;
}
```

## 环境要求
- Node.js >= 16
- Python >= 3.8
- npm >= 7

## 开发规范
- ESLint + Prettier
- TypeScript 严格模式
- React Hooks 规范

## 部署说明
1. 构建前端：`npm run build`
2. 启动服务：`npm run start`
3. 配置反向代理（推荐 Nginx）

## 免责声明
本项目仅供学习研究使用，请勿用于商业用途。使用本项目产生的任何法律责任由使用者自行承担。

## 许可证
MIT License

## 联系方式
- Email：1768582979@qq.com
- GitHub：YHYYDS666

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=YHYYDS666/Enterprise-check&type=Date)](https://star-history.com/#YHYYDS666/Enterprise-check&Date)
```
