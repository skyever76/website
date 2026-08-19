# Adam Cui｜企业经营提升

Adam Cui 的个人专业网站：面向中国企业的运营提升知识库与个人主页。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
npm run build
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

Cloudflare Pages 连接 GitHub 的 `main` 分支，生产域名为 `www.adamcui.cn`。每次推送后自动构建与发布；根域名 `adamcui.cn` 建议重定向至 `www.adamcui.cn`。

构建命令：`npm run build`

该项目使用 Cloudflare 兼容的 vinext 构建，并保留 `.openai/hosting.json` 供 Sites 预览与发布使用。
