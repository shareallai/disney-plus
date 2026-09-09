---
locale: zh
translationKey: chatgpt-images-2-5-guide
title: ChatGPT Images 2.5：新功能、使用方法与价格详解
headline: ChatGPT Images 2.5 完整指南：新能力、用法与费用
description: 了解 ChatGPT Images 2.5 的画质、精确编辑、模板与 Sketch 等新能力，掌握文字生成、局部改图和 API 调用方法，并看懂 ChatGPT 套餐与 Flare、Sunburst 的收费方式。
summary: ChatGPT Images 2.5 把更快生成、精确编辑、模板和手绘草图带进同一套工作流。本文从实际使用出发，讲清普通用户怎么上手、开发者如何选择 Flare 或 Sunburst，以及费用如何计算。
category: AI 工具观察
pubDate: 2026-09-09
updatedDate: 2026-09-09
author: Mark
service: General
tags:
  - ChatGPT Images 2.5
  - GPT-Image-2.5
  - AI 图像生成
  - 图片编辑
  - OpenAI API
relatedTranslationKeys:
  - chatgpt-go-plus-pro-codex-api-guide
  - codex-claude-cursor-instructions-guide
topOffer:
  title: FamilyPro GPT：ChatGPT 会员方案低至 5.5 USD
  subtitle: 可选第三方购买渠道 · 开通流程透明 · 提供售后支持
  buttonText: 查看 ChatGPT 方案选项
  buttonLink: https://familypro.io/en/products/chatgpt?invite=7Dfd94eb
draft: false
---

OpenAI 于 2026 年 9 月 8 日发布了 **ChatGPT Images 2.5**。新版本生成图片更快，画面细节和多轮编辑的一致性也有所提升；同时，ChatGPT 还增加了图片模板、Sketch 草图和评论式编辑等创作方式。

对普通用户来说，这些变化意味着制作海报、商品图或修改照片时，可以更直观地表达构图和局部修改要求。开发者则可以通过 API 使用 `gpt-image-2.5-flare` 和 `gpt-image-2.5-sunburst`，分别应对快速生成与精细编辑等不同需求。

下面将从新能力、实际用法和价格三个方面展开。本文涉及的功能与 API 价格核对日期为 **2026-09-09**；价格和账户额度可能调整，相关信息仅供参考，请以 ChatGPT 套餐页及 OpenAI API 控制台的实时显示为准。

<figure>
  <img
    src="../../../blog/chatgpt-images-2-5-guide/chatgpt-images-2-5-features-api-pricing.png"
    alt="ChatGPT Images 2.5 新能力与 API 价格信息图，包括更快生成、清晰细节、多轮一致编辑、评论式修改、模板与 Sketch，以及 Flare 和 Sunburst 的 Token 单价"
    style="display:block; width:100%; height:auto; margin:0 auto;"
  />
  <figcaption>ChatGPT Images 2.5 新特点与 API 价格概览。价格核对日期为 2026-09-09，仅供参考，以 OpenAI 官方实时价格为准。</figcaption>
</figure>

## 1. ChatGPT Images 2.5 新在哪里

这次更新的价值不只是“图片更漂亮”，而是让创建和修改图片的过程更接近一套可反复使用的工作流。

### 1.1 更快生成，也更重视细节

Images 2.5 改善了生成速度、画面清晰度和视觉保真度。人物、物品及较复杂场景中的细节更容易辨认，快速尝试不同构图时也不必等太久。

这类提升对社交媒体配图、商品场景图和创意草稿尤其直接：第一张图未必就是终稿，但更短的等待时间让连续试稿不再那么打断思路。

### 1.2 连续编辑时更容易保留原图

编辑图片最怕“改了背景，人物也换了一个”。Images 2.5 更强调在多轮修改中保留主体、面部特征和关键视觉元素。你可以要求它替换背景、调整衣服颜色或增加道具，同时明确哪些部分不能动。

它仍不能替代人工校稿。涉及商标、精确商品结构、人物身份或密集文字时，终稿仍应逐项检查。

### 1.3 在图片上评论，指出要改哪里

移动端支持打开图片后直接添加评论，用自然语言说明某个位置需要怎样修改。相比重新描述整张图片，这种方式更适合修正文案、颜色和局部物体，也能降低无关区域被重做的概率。

### 1.4 用 Sketch 把难描述的构图画出来

有些空间关系很难用一段话说清楚。例如，你想让产品位于右下角，人物从左侧探出，顶部保留标题区。此时可以在移动端输入框键入 `@`，选择 Sketch，先画出简单布局，再补充风格和内容要求。

草图不需要画得精致，它的作用是告诉 ChatGPT 元素在哪里、大小关系如何，而不是充当最终素材。

### 1.5 从模板开始，不必面对空白提示框

Images 页面新增模板入口，可以从海报、周边商品等常见格式开始。选好模板后再替换主题、文字、颜色和视觉元素，适合没有成熟提示词但已经知道交付物类型的用户。

新版本还支持分享图片提示词。团队成员或读者可以基于同一提示词创建自己的版本，比截图复制一段不完整的描述更方便。

## 2. 在 ChatGPT 中怎么使用

最简单的入口仍然是对话框。你可以直接说“生成一张图片”，也可以打开 Images 页面，从空白创作或模板开始。ChatGPT Images 2.5 面向各档 ChatGPT 用户提供，但不同计划的速度、额度及高级能力可能不同。

### 2.1 从文字生成新图

一个好用的提示词不需要堆满风格名词，但应交代用途、内容、构图、文字和不能出错的约束。例如：

```text
制作一张竖版咖啡新品海报，用于手机端社交媒体。
画面中央是一杯透明玻璃杯装的冰拿铁，背景为暖灰色摄影棚，
顶部保留约四分之一留白。

主标题必须准确显示：秋日榛果拿铁
副标题：本周五上市

整体是克制的商业摄影风格，不使用卡通插画，不增加品牌 Logo，
确保中文清晰可读。
```

如果第一张图方向正确，不必把提示词推倒重来。继续说“保留杯子与光线，只把背景改成深绿色”“标题向上移动并缩小”，通常更容易逐步收敛。

### 2.2 上传原图进行编辑

上传图片后，先区分“必须保留”和“允许修改”的内容：

```text
把背景替换为傍晚的城市露台，仅修改背景和环境光。
完整保留人物的面孔、发型、姿势、衣服图案和画面裁切。
让新增背景的光线方向与人物一致，不添加其他人物或文字。
```

如果只需改变一个局部，可以在支持的移动端界面中对该位置添加评论。修改范围越明确，模型越容易理解哪些细节不应变化。

### 2.3 使用模板与 Sketch

已经知道要做“海报”或“商品周边”时，先选模板，再填内容，通常比从零描述版式更省力。只有构图很特殊、元素之间的位置关系难以表述时，才需要 Sketch。两者也可以组合：先用草图确定布局，再在后续对话中补充材质、灯光和文案。

## 3. 提示词怎样写得更稳

提示词的重点不是越长越好，而是让模型知道什么决定成败。可以按下面的顺序写：

1. **用途**：社交海报、商品主图、头像还是信息图。
2. **主体与关系**：画面里有哪些人或物，它们分别在哪里。
3. **视觉方向**：摄影或插画风格、光线、颜色和材质。
4. **准确文字**：逐字列出必须出现的文案，并说明语言。
5. **保留与禁止项**：哪些地方不能改，哪些元素不能出现。
6. **输出要求**：横版或竖版、目标尺寸、格式和透明背景。

不要一次要求模型同时重做十个互相关联的细节。先锁定构图和主体，再调整文字、颜色和局部元素，通常比每轮重新生成整张图更可控。

## 4. 开发者怎么选择 Flare 与 Sunburst

API 提供两个 GPT-Image-2.5 模型。它们并不是简单的“便宜版”和“贵版”，因为官方公布的 Token 单价相同；差别主要在速度、能力侧重和一次任务实际消耗的 Token 数量。

| 模型 | 官方定位 | 更适合的场景 |
| --- | --- | --- |
| `gpt-image-2.5-flare` | 快速、高质量的日常图片生成 | 社交内容、视觉搜索、快速原型、批量生成 |
| `gpt-image-2.5-sunburst` | 能力更强，重视精确生成与编辑 | 商业成品、商品图、品牌素材、复杂连续编辑 |

如果没有明确的高精度编辑需求，可以先用 Flare 做默认模型；当主体一致性、细节控制和最终成品质量比速度更重要时，再测试 Sunburst。最终选择应以自己的任务成功率、耗时和实际 usage 为准。

### 4.1 使用 Image API 生成图片

下面是最小化的 JavaScript 示例：

```js
import OpenAI from "openai";
import fs from "node:fs";

const openai = new OpenAI();

const result = await openai.images.generate({
  model: "gpt-image-2.5-flare",
  prompt: "一张极简风格的中文科技活动海报，深蓝背景，标题为：未来工作流",
  quality: "medium",
  size: "1024x1536",
});

const image = Buffer.from(result.data[0].b64_json, "base64");
fs.writeFileSync("poster.png", image);
```

Image API 适合直接生成或编辑图片。若应用需要让主模型先理解用户意图、调用其他工具，再决定何时绘图，可以改用 Responses API，并在 `image_generation` 工具的 `model` 字段中指定 Flare 或 Sunburst。

两个模型都支持调整质量、尺寸、格式与压缩。质量档位包括 `low`、`medium`、`high`、`xhigh`、`max` 和 `auto`。规格越高，通常会消耗更多输出 Token，也可能增加等待时间。

## 5. ChatGPT Images 2.5 价格怎么算

这里需要先把两种使用方式分开：在 ChatGPT 里画图按套餐权益使用；通过 API 集成到自己的产品中，则按 Token 用量另外计费。购买 ChatGPT Plus 或 Pro 不会自动附送等额 API 余额。

### 5.1 ChatGPT 用户：包含在套餐权益中

普通用户不需要按每张图片单独结算。Images 2.5 已向各档 ChatGPT 用户推出，生成次数、速度和高峰期可用性会随计划与系统负载变化。若账户还没有显示新入口，也可能是分批上线尚未覆盖。

OpenAI 没有为所有计划承诺长期固定的“每天可生成多少张”。因此，网上流传的固定张数只能当作特定时间和账户下的观察，不能据此购买套餐。选择时可以按使用强度判断：偶尔配图先用 Free；稳定创作再比较 Go 或 Plus；大量、高频生成才需要考虑 Pro 或团队计划。

`Images with thinking` 等高级能力可能只对部分付费计划开放。实际套餐价格、区域税费、额度和功能，应以登录后显示的 ChatGPT 定价页为准。

### 5.2 API 用户：按输入与输出 Token 计费

截至 2026-09-09，Flare 和 Sunburst 的官方 Token 单价一致：

| 计费项目 | 每 100 万 Token |
| --- | ---: |
| 文本输入 | 5 美元 |
| 缓存文本输入 | 1.25 美元 |
| 图片输入 | 8 美元 |
| 缓存图片输入 | 2 美元 |
| 图片输出 | 30 美元 |

一次请求的总价由提示词文本、上传的参考图片和生成图片的输出 Token 共同组成。编辑已有图片时会产生图片输入费用；通过 Responses API 调用图片工具，还要加上主模型自身的 Token 费用。

官方计算器给出的最低档示例中，图片输出成本可低至约 **0.00588 美元/张**，但这个数字不包含文本输入、参考图输入或流式中间图。实际单张费用取决于模型、尺寸和质量设置。Flare 与 Sunburst 即使单价相同，也可能因 Token 消耗不同而产生不同的单张成本，最可靠的做法是读取响应中的 `usage` 并用自己的真实提示词测算。

## 6. 谁最值得尝试 Images 2.5

如果工作经常涉及中文海报、商品场景替换、人物连续编辑或从草图快速做视觉方案，这一版值得直接试用。它的优势并不只是偶尔生成一张惊艳图片，而是让“生成—指出问题—局部修改—继续交付”的链路更顺畅。

对普通用户，先在现有 ChatGPT 计划中完成三类真实任务，再决定是否需要更高套餐。对开发者，先用 Flare 验证速度与成本；只有在编辑精度或成品稳定性不够时，再把相同测试集交给 Sunburst。评价时记录成功率、返工次数、总耗时和 usage，往往比只比较单张样图更接近真实生产成本。

## 官方参考

- [GPT-Image-2.5 Flare 模型文档](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare)
- [GPT-Image-2.5 Sunburst 模型文档](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst)
- [OpenAI 图片生成指南](https://developers.openai.com/api/docs/guides/image-generation)
- [OpenAI API 定价](https://developers.openai.com/api/docs/pricing)
