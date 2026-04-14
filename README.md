# 订阅省钱研究所 (Astro + GitHub Pages)

一个以 Markdown 内容为主、SEO 优先、支持多语言（zh/en/ja 预留）的订阅内容站，主要介绍 AI 订阅与优惠订阅推荐。

## 本地运行

```bash
npm install
npm run dev
```

默认地址：`http://localhost:4321/`

## 构建

```bash
npm run build
npm run preview
```

## 当前已完成

- `Astro Content Collections` 内容模型（含 Zod schema + `locale` + `translationKey`）
- 多语言路由：`/{lang}/`、`/{lang}/blog/`、`/{lang}/blog/{slug}/`
- 已提供中英文同文文章，日语路由已预留
- SEO 组件：`title`/`description`/`canonical`/`Open Graph`/`JSON-LD`
- 多语言 SEO：`hreflang` + `x-default`
- `@astrojs/sitemap` 集成
- 静态 `robots.txt`
- GitHub Pages 自动部署工作流（`withastro/action@v5`）

## 内容目录

- 中文：`src/content/blog/zh/`
- 英文：`src/content/blog/en/`
- 日语：`src/content/blog/ja/`（按需新增）
- 数据类文章表头：直接写在文章 frontmatter `tableLabels`
- 语言注册总表：`src/lib/i18n/registry.ts`
- 各语言文案：`src/lib/i18n/locales/`

## 环境变量

```bash
cp .env.example .env
```

- `GITHUB_REPOSITORY=shareallai/familypro`
- `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`（可选，用于 GA 验证）
- `PUBLIC_GISCUS_REPO_ID=...`（必填，来自 giscus 配置页）
- `PUBLIC_GISCUS_CATEGORY=Announcements`（必填，建议公告分类）
- `PUBLIC_GISCUS_CATEGORY_ID=...`（必填，来自 giscus 配置页）

## 部署前需要修改

1. 一处配置就够：`owner/repo`（即 `GITHUB_REPOSITORY`）。
2. `site/base` 由 `astro.config.mjs` 自动推导，`robots.txt` 使用静态文件（`public/robots.txt`）。

## IndexNow（GitHub Pages 子路径站点）

这个仓库已经把 IndexNow key 文件放在：

- `public/8f2ac072a8574a3898dd1c19b001b894.txt`

部署到 GitHub Pages 后，它会出现在：

- `https://shareallai.github.io/familypro/8f2ac072a8574a3898dd1c19b001b894.txt`

因为站点不是根域名根目录，而是在 `/familypro/` 子路径下，所以提交 IndexNow 时要显式带上 `keyLocation`。

提交全站 sitemap：

```bash
python3 scripts/indexnow_submit.py --key 8f2ac072a8574a3898dd1c19b001b894
```

只提交变更页面：

```bash
python3 scripts/indexnow_submit.py \
  --key 8f2ac072a8574a3898dd1c19b001b894 \
  --url https://shareallai.github.io/familypro/zh/blog/grok-plan-guide/ \
  --url https://shareallai.github.io/familypro/en/blog/grok-plan-guide/
```

预览将要发送的 JSON：

```bash
python3 scripts/indexnow_submit.py \
  --key 8f2ac072a8574a3898dd1c19b001b894 \
  --dry-run
```

脚本默认行为：

- 未传 `--site-root` 时，会按 `GITHUB_REPOSITORY` 推导 GitHub Pages URL。
- 未传 `--url` 或 `--url-file` 时，会自动读取 `<site-root>/sitemap.xml`。
- 默认使用全局 IndexNow 端点：`https://api.indexnow.org/indexnow`。
- 会校验提交 URL 必须属于 `keyLocation` 的路径作用域。对当前仓库来说，只允许提交 `https://shareallai.github.io/familypro/` 下的 URL。
