# GPT-Load 官网

这是 [GPT-Load](https://github.com/tbphp/gpt-load) 项目的官方网站，使用 Next.js 14 构建。

## 项目简介

GPT-Load 官网为开源项目提供了专业的展示平台，包含：

- 🏠 **现代化首页** - 展示项目特性和优势
- 📚 **完整文档** - 详细的使用指南和 API 参考
- 🎨 **响应式设计** - 适配各种设备和屏幕尺寸
- ⚡ **高性能** - 基于 Next.js 14 和 App Router
- 🎯 **SEO 优化** - 搜索引擎友好

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **文档**: MDX
- **图标**: Lucide React

## 功能特性

### 首页

- Hero 区域：动态背景动画，突出项目核心价值
- 功能展示：10+ 核心功能的详细介绍
- 架构图：交互式系统架构演示
- 性能指标：实时性能数据展示
- CTA 区域：引导用户快速开始

### 文档系统

- 侧边导航：清晰的文档结构
- 快速搜索：便于查找相关内容
- 代码高亮：语法高亮显示
- 响应式布局：移动端友好

### 设计特色

- **品牌色彩**：蓝色渐变主题，体现科技感
- **动画效果**：Framer Motion 提供流畅的交互体验
- **可访问性**：遵循 WCAG 无障碍设计标准
- **国际化**：支持中英文内容

## 开发指南

### 环境要求

- Node.js 18+
- npm/yarn/pnpm

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

### 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── docs/              # 文档页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Navigation.tsx     # 导航组件
│   ├── Hero.tsx          # 首页 Hero 区域
│   ├── Features.tsx      # 功能特性展示
│   ├── Architecture.tsx  # 架构图组件
│   ├── Performance.tsx   # 性能展示
│   ├── CTA.tsx          # 行动召唤
│   ├── Footer.tsx       # 页脚
│   └── DocsNavigation.tsx # 文档导航
└── lib/
    └── utils.ts          # 工具函数
```

## 部署

### Vercel 部署（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tbphp/gpt-load-docs)

#### 自动部署

1. Fork 本仓库到你的 GitHub 账户
2. 在 [Vercel](https://vercel.com) 上导入项目
3. Vercel 会自动检测并部署

### 其他部署方式

本项目支持多种部署方式：

- **Netlify**: 支持自动部署
- **GitHub Pages**: 静态文件部署
- **Docker**: 容器化部署
- **静态文件服务器**: Nginx, Apache 等

### 构建配置

项目已配置为静态导出：

```bash
# 构建静态文件
npm run build

# 输出目录: ./out
```

## 相关链接

- [GPT-Load 主项目](https://github.com/tbphp/gpt-load)
- [在线演示](https://gpt-load.com)
- [文档](https://gpt-load.com/docs)
- [问题反馈](https://github.com/tbphp/gpt-load/issues)
