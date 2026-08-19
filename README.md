# Adam Cui｜企业经营提升

Adam Cui 的个人专业网站：面向中国企业的运营提升知识库与个人主页。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
npm run build
npm run test
```

## 内容更新

长期内容放在 `content/insights/*.md`，每篇文章需包含完整 front matter：

```yaml
---
title: 文章标题
description: 一句话摘要
category: Operating System
date: 2026-08-19
lang: zh
series: 经营进化
tags: [标签一, 标签二, 标签三]
draft: false
---
```

`category` 固定为：`Revenue`、`Margin`、`Cash`、`Organization`、`Operating System`、`AI Enablement`、`M&A Integration`。`lang` 固定为 `zh`、`en` 或 `both`。文件名统一使用简短拼音或英文 slug。

## 内容纪律

1. 网站不放 Twitter Digest，也不同步全部自媒体内容；只有经过 Adam 确认、具有长期价值的内容进入网站。
2. 案例一律脱敏，不出现真实公司名、客户名、财务数字或人名。
3. 每篇文章的 front matter 必须完整，由 Hermes 按契约生成。

## 发布

代码仓库：`https://github.com/skyever76/website.git`

项目采用 Astro 纯静态构建，不包含服务端渲染、数据库或运行时应用代码。Cloudflare 连接 GitHub 的 `main` 分支后，每次推送自动构建与发布；生产域名为 `www.adamcui.cn`，根域名 `adamcui.cn` 建议重定向至 `www.adamcui.cn`。

构建命令：`npm run build`

部署命令：`npm run deploy`

静态输出目录：`dist`

`wrangler.jsonc` 只上传 `dist` 中的静态资源；网站本身不依赖 Worker 运行时逻辑。连接 GitHub 时在 Cloudflare Workers & Pages 中选择 **Workers Builds**，填入以上构建与部署命令即可。
