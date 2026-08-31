# GPT-Load 官网

[GPT-Load](https://github.com/tbphp/gpt-load) 的官方网站与 2.0 文档站，基于 Next.js 15 App Router。

## 站点内容

- 2.0 产品首页、赞助、贡献者与 GitHub Releases 更新日志
- 按任务组织的 2.0 文档，包括部署、配置、客户端接入、运维、安全与内部机制
- 中文、英文、日文界面与可索引的语言链接
- 1.4.x 官网与文档归档，保留历史公开链接的兼容重定向
- 文档搜索、代码复制、高清截图查看器、站点地图、OpenGraph 与结构化数据

## 技术栈

- Next.js 15、React 19、TypeScript
- pnpm 11
- App Router、Server Components、Middleware
- 原生 CSS 设计系统；旧版归档页面继续使用已有 Tailwind 样式

## 本地开发

需要 Node.js 22 和 Corepack。

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

默认地址为 <http://localhost:3000>。

## 验证

```bash
pnpm lint
pnpm build
pnpm audit --prod
```

## 生产运行

构建结果使用 Next.js standalone 服务端模式。该模式保留语言检测、Cookie、重定向、图片优化与站内 API 等运行时能力。

```bash
pnpm build
HOSTNAME=0.0.0.0 PORT=3000 node .next/standalone/server.js
```

standalone 目录不会自动包含静态资源；手动发布时还需要一起提供：

- `public/`
- `.next/static/`

## Docker

```bash
docker build -t gpt-load-docs .
docker run --rm -p 3000:3000 gpt-load-docs
```

镜像使用 Node.js 22、pnpm frozen lockfile 与非 root 运行用户，不采用 nginx 静态导出。

## 目录

```text
src/app/(v2)/          2.0 官网与文档路由
src/app/v1/            1.4.x 归档站
src/components/v2/     2.0 公共组件
src/i18n/v2/           2.0 中英日词典与语言检测
src/lib/v2/            2.0 导航、SEO 与 GitHub 数据
src/styles/v2/         2.0 设计系统样式
public/v2/             2.0 品牌资源与三语高清截图
```

## 相关链接

- [GPT-Load 主项目](https://github.com/tbphp/gpt-load)
- [线上官网](https://www.gpt-load.com)
- [2.0 文档](https://www.gpt-load.com/docs)
- [问题反馈](https://github.com/tbphp/gpt-load/issues)
