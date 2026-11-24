# AI 商卡设计系统平台

京东购物 · Joybuy 商品卡片设计系统的静态站点，托管在 GitHub Pages。

**在线地址** · https://beta004.github.io/AI-Merch-Card-Design-System/

## 内容

- **首页** [`index.html`](./index.html) — 五层信息架构总览
- **基础规范** [`foundations/`](./foundations/) — 品牌红/字体密度/间距等 3 项
- **原子组件** [`atoms/`](./atoms/) — 扁平变体浏览器
- **商卡** [`organisms/`](./organisms/) — 7 张卡片（vertical / horizontal / horizontal-mini / horizontal-scroll / campaign / booking / small-dynamic），每张卡走六段式（Overview / Structure / Types / Data Contract / Used In / When to Use / Handoff）
- **页面** [`pages/`](./pages/) — 7 个页面 frame + home-feed
- **工具** [`utilities/`](./utilities/) — [选型指南](./utilities/decision-guide.html) + [变更记录](./utilities/changelog.html)

## 原子与文案规则

- **唯一事实来源**：Figma `App Business Components` 的 `基础组件 Product Card Atomic Components`（node `28919:271381`）。
- **原子数据**：[`assets/atoms-data.js`](./assets/atoms-data.js) 当前收敛为 33 个平台原子、149 个变体（对应 Figma 34 个顶层原子 / 148 个变体）；每个变体保留 Figma 命名、导出 SVG 与 `copy` 源文案。
- **商卡预览文案**：所有可见字段文案必须能在 `atoms-data.js` 的 `copy` 数组中找到；中文/英文切换不生成原子库外翻译。
- **自营标签**：数据契约使用 `selfOperated` 布尔值；`true` 固定渲染 `Sold by Joybuy`，`false` 或缺失时整个槽位收起，不允许显示第三方商家名。
- **履约时效**：使用 `fulfillmentType: Joybuy | POP`，可见文案固定为 `Get it by today`。
- **已移除字段**：`Unit price`、预约量等不在当前原子组件库中的字段不得重新加入商卡预览或数据契约。

## 本地预览

站点是纯静态 HTML + CSS + JS，任何静态服务器都能跑：

```bash
# 用 Python 内置 http.server
cd site && python3 -m http.server 8000
# 打开 http://localhost:8000
```

或者直接双击 `index.html` 在浏览器里打开（`file://` 协议下 i18n 和字体图标正常，Figma iframe 因跨域限制可能只在 http 下加载）。

## 更新流程

站点是这个仓库的**根目录**，所以更新即改文件、提交、推送：

```bash
cd site
# 改文件……
git add .
git commit -m "描述改动"
git push
```

推上去后 GitHub Pages 会在 1–2 分钟内自动重新发布。

## 变更历史

见 [`utilities/changelog.html`](./utilities/changelog.html)。

## 技术要点

- **无构建**：所有资源直接引用，没有 bundler / transpiler
- **主题双 token**：`--joybuy-red` 品牌红固定用于商卡/logo/danger；`--accent` 用于站点 chrome，可切换
- **i18n**：`assets/i18n.js` 是运行时文本翻译器，`.feed-hero` 等交互预览区通过 `data-global-i18n="off"` 排除
- **数据契约**：`assets/card-data.js` 和 `assets/pages-data.js` 是所有数据源

---

设计系统由 chenyongtian.7 维护 · 讨论走 Slack `#joybuy-design-system`
