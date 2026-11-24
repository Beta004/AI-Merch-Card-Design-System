/* Global documentation i18n. Product previews and technical identifiers are excluded. */
(function () {
  var PAIRS = [
    ['商卡设计系统', 'Product Card Design System'],
    ['商卡概览 · 商卡设计系统', 'Product Card Overview · Product Card Design System'],
    ['商卡设计系统 · 概览 · Joybuy', 'Product Card Design System · Overview · Joybuy'],
    ['Design Tokens · Foundations · 商卡设计系统', 'Design Tokens · Foundations · Product Card Design System'],
    ['字体与文案 · Typography · Foundations · 商卡设计系统', 'Typography · Foundations · Product Card Design System'],
    ['图标 · Iconography · Foundations · 商卡设计系统', 'Iconography · Foundations · Product Card Design System'],
    ['原子组件 · 商卡设计系统', 'Atomic Components · Product Card Design System'],
    ['Vertical Card · Product Cards · 商卡设计系统', 'Vertical Card · Product Cards · Product Card Design System'],
    ['Horizontal Card · Product Cards · 商卡设计系统', 'Horizontal Card · Product Cards · Product Card Design System'],
    ['Horizontal Mini · Product Cards · 商卡设计系统', 'Horizontal Mini · Product Cards · Product Card Design System'],
    ['Horizontal Scroll · Product Cards · 商卡设计系统', 'Horizontal Scroll · Product Cards · Product Card Design System'],
    ['Campaign · Product Cards · 商卡设计系统', 'Campaign · Product Cards · Product Card Design System'],
    ['Booking · Product Cards · 商卡设计系统', 'Booking · Product Cards · Product Card Design System'],
    ['Small Dynamic · Product Cards · 商卡设计系统', 'Small Dynamic · Product Cards · Product Card Design System'],
    ['页面总览 · Pages · 商卡设计系统', 'Pages Overview · Pages · Product Card Design System'],
    ['页面总览', 'Pages Overview'],
    ['这里是商卡在真实业务页面里的落位。7 个页面按「全局商卡汇总」看板顺序排列，每个页面内嵌对应 Figma frame，并链接到它用到的商卡类型详情页。', 'Where product cards land in real app pages. Seven pages follow the order of the “global card summary” board; each embeds its Figma frame and links to the card types it uses.'],
    ['在 Figma 打开总览板', 'Open the overview board in Figma'],
    ['7 个真实页面 · 与 Figma「全局商卡汇总」看板同序', '7 real pages · in sync with the Figma overview board'],
    ['商卡 · Universal 2-Column', 'Product Cards · Universal 2-Column'],
    ['商卡 · Universal Horizontal', 'Product Cards · Universal Horizontal'],
    ['商卡 · Horizontal Mini', 'Product Cards · Horizontal Mini'],
    ['商卡 · Horizontal Scroll', 'Product Cards · Horizontal Scroll'],
    ['商卡 · Campaign', 'Product Cards · Campaign'],
    ['商卡 · Booking & Auction', 'Product Cards · Booking & Auction'],
    ['商卡 · Small Image Dynamic', 'Product Cards · Small Image Dynamic'],
    ['商品卡片设计系统', 'Product Card Design System'],
    ['设计令牌', 'Design Tokens'],
    ['字体与文案', 'Typography & Content'],
    ['图标目录', 'Iconography'],
    ['原子组件', 'Atomic Components'],
    ['商卡概览', 'Product Card Overview'],
    ['通用双列-商品卡片组件', 'Universal 2-Column Product Card'],
    ['通用横向-商品卡片组件', 'Universal Horizontal Product Card'],
    ['通用横向-小图商卡', 'Universal Horizontal Mini Product Card'],
    ['横滑商卡楼层', 'Horizontal Scroll Product Cards'],
    ['活动商卡', 'Campaign Product Card'],
    ['预约 / 荷兰拍商卡', 'Booking / Dutch Auction Product Card'],
    ['小图动态商卡', 'Small Image Dynamic Product Card'],
    ['商卡', 'Product Cards'],
    ['7 变体位置', '7 variant slots'],
    ['首页 / 搜索 / 类目页', 'Home / Search / Category'],
    ['概览', 'Overview'], ['骨架', 'Structure'], ['类型', 'Types'],
    ['数据契约', 'Data Contract'], ['出现在', 'Used In'], ['何时使用', 'When to Use'],
    ['Figma 标注', 'Figma Map'], ['使用页面', 'Where It Lives'],
    ['组件结构', 'Anatomy'], ['常见样式', 'Common Variants'],
    ['字段说明', 'Field Guide'], ['使用建议', 'Usage Guidance'],
    ['获取组件', 'Get Component'],
    ['字段', 'Field'], ['必填', 'Required'], ['规则', 'Rules'], ['来源', 'Source'],
    ['空值处理', 'Empty-state handling'], ['缺失兜底', 'Fallback'], ['是', 'Yes'], ['否', 'No'],
    ['推荐使用', 'Recommended'], ['避免使用', 'Avoid'], ['文档语言', 'Document language'],
    ['商卡语言', 'Card language'], ['语言', 'Language'], ['品类', 'Category'], ['分类', 'Category'],
    ['预设', 'Preset'], ['状态', 'State'], ['变体', 'Variants'], ['加载中…', 'Loading…'],
    ['当前', 'Now'], ['即将上线', 'Soon'], ['查看变更记录 →', 'View changelog →'],
    ['基础规范', 'Foundations'], ['楼层', 'Sections'], ['页面', 'Pages'], ['工具', 'Utilities'],
    ['通用商卡', 'Universal Product Cards'], ['场景商卡', 'Scenario Product Cards'],
    ['通用双列', 'Universal 2-Column'], ['通用横向', 'Universal Horizontal'],
    ['通用横向-小图', 'Universal Horizontal Mini'], ['横滑商卡', 'Horizontal Scroll'],
    ['预约商卡', 'Booking'], ['小图动态', 'Small Image Dynamic'],
    ['设计 tokens、字体、图标——所有上层规范的底座。', 'Design tokens, typography, and icons form the foundation for every higher-level pattern.'],
    ['跟 Figma App Business Components 目录 1:1 对齐——标签角标、图片容器、文本信息、价格促销、状态物流、交互六大类。', 'Aligned 1:1 with the Figma App Business Components library across badges, imagery, text, pricing, status, and interaction.'],
    ['7 张完整商卡：Vertical、Horizontal、Mini、Campaign、Booking、Scroll、Small Dynamic。走 Structure/Types 六段式详情页。', 'Seven complete product-card patterns: Vertical, Horizontal, Mini, Campaign, Booking, Scroll, and Small Dynamic, each documented with the same six-section template.'],
    ['首页信息流楼层、搜索结果楼层、荷兰拍池——多张商卡的编排规则。', 'Composition rules for home feeds, search results, and Dutch-auction sections.'],
    ['首页、搜索页、PDP、店铺页、荷兰拍卖场——商卡在真实页面里的落位。', 'How product cards are placed on Home, Search, PDP, Store, and Dutch-auction pages.'],
    ['选型指南——业务场景 × 页面/楼层 决策矩阵；变更记录——按版本追踪迭代。', 'A scenario-to-page decision guide plus a versioned changelog.'],
    ['这里收纳 Joybuy 站内所有商品卡片：从最小原子（价格、图片、按钮）一路往上，到楼层与页面里被组装的商卡实例。 目标是让设计师、产品、工程师在同一份规范上对齐，减少沟通与走查成本。', 'This system contains every Joybuy product-card pattern, from foundational atoms such as price, image, and button through complete cards assembled in sections and pages. It gives design, product, and engineering one shared source of truth.'],
    ['The single source of truth for how a product looks anywhere it appears.', 'The single source of truth for how a product looks anywhere it appears.'],
    ['浏览 32 个原子组件 →', 'Browse 32 atomic components →'],
    ['看 Vertical Card 详情', 'View Vertical Card'],
    ['信息架构', 'Information Architecture'],
    ['每张商卡的详情结构', 'Product Card Documentation Template'],
    ['三轮迭代累计交付：', 'Delivered across three iterations:'],
    ['导航骨架、概览、Foundations 全 3 页、原子组件浏览器、商卡 7/7 全上线', 'navigation, overview, all three Foundations pages, the atomic-component browser, and all seven product cards'],
    ['原子组件（', 'Atomic components ('], ['33 原子 · 149 变体', '33 atoms · 149 variants'],
    ['）+ 商卡（', ') + Product cards ('], ['7 张详情页', '7 detail pages'],
    ['，Vertical / Horizontal / Mini / Scroll / Campaign / Booking / Small Dynamic）+ Foundations（Tokens · Typography · Iconography）全部按 Figma 源图落地。', ', Vertical / Horizontal / Mini / Scroll / Campaign / Booking / Small Dynamic) + Foundations (Tokens · Typography · Iconography), all aligned with Figma.'],
    ['视觉：亮色为主 · 曜石暗色可切换 · 克制彩色点缀', 'Visual language: light-first · optional obsidian dark mode · restrained color accents'],
    ['3 页全上线', '3 pages live'], ['浏览 →', 'Browse →'], ['7 / 7 全上线', '7 / 7 live'],
    ['3 个楼层', '3 sections'], ['5 个页面', '5 pages'], ['2 张', '2 utilities'],
    ['一句适用场景 + 可交互预览', 'Usage summary and interactive preview'],
    ['骨架图 + 槽位表（字段/必填/长度/兜底）', 'Anatomy and slot rules: fields, requirements, length, and fallback'],
    ['结构下的所有变体（截图或高保真重建）', 'All variants built from the same structure'],
    ['字段来源、异常兜底、多语言约定', 'Field sources, fallbacks, and localization rules'],
    ['出现在哪些楼层与页面', 'Where the component appears across sections and pages'],
    ["DO / DON'T 两栏对比", 'Clear recommended and avoid guidance'],
    ['Design Tokens · Joybuy 商卡设计系统的原子变量', 'Atomic variables for the Joybuy Product Card Design System'],
    ['Joybuy 商卡设计系统的原子变量', 'Atomic variables for the Joybuy Product Card Design System'],
    ['176 px 宽 · 高度自适应 · 竖向', '176 px wide · auto height · vertical'],
    ['全宽 · 130 px 图像', 'Full width · 130 px image'],
    ['Booking · Auction · 8 槽位 · 时间锁定商品', 'Booking · Auction · 8 slots · time-bound products'],
    ['Campaign Card · 主题背景 + 倒计时 + 2-4 张 mini 商品', 'Campaign Card · themed background + countdown + 2–4 mini products'],
    ['Horizontal Mini · 64 px 缩略图 · 6 槽位精简版', 'Horizontal Mini · 64 px thumbnail · compact 6-slot layout'],
    ['Horizontal Scroll · 横向滚动楼层 · 一行 3-6 张 mini 商卡', 'Horizontal Scroll · 3–6 mini cards in one row'],
    ['Small Image Dynamic · 60~96 px tile · 入口曝光，非决策卡', 'Small Image Dynamic · 60–96 px entry tile, not a decision card'],
    ['Tokens 是设计系统的基础层：颜色、字号、圆角、阴影、间距等都以 CSS 变量的形式落在 tokens.css 。 原子组件和商卡都只消费 tokens，不再定义原始色值。点击任意色块可以复制变量名到剪贴板。', 'Tokens are the foundation of the design system. Color, type size, radius, shadow, and spacing live as CSS variables in tokens.css. Atomic components and product cards consume these tokens instead of redefining raw values. Select any swatch to copy its variable name.'],
    ['网站外壳默认使用白色与浅灰构成亮色基调，黑色承担主按钮、高层级文字与关键结构；同时保留可切换的曜石黑暗色模式。 --accent 柔紫只用于关键交互，冷蓝只用于低透明环境光；Joybuy 红 #E1251B 保留给 logo、品牌锚点与真实商卡业务内容。 以下色值以默认亮色模式为准；网站 chrome 与商卡设计系统彼此隔离，任何网站配色调整都不会改变商卡预览。', 'The site shell defaults to a white and soft-gray light theme, with black reserved for primary actions, high-level type, and key structure; an optional obsidian dark mode remains available. Soft violet is reserved for key interactions and cool blue for faint ambient light; Joybuy Red #E1251B remains exclusive to the logo, brand anchors, and real product-card content. The values below show the default light mode; website chrome and product-card visuals remain independent.'],
    ['中文优先 PingFang SC，英文 Helvetica Neue 兜底。数字使用 tabular-nums 以对齐价格列。 字号使用 4/8/12/13/14/16/18/20/22/32 px 阶梯，与 TDesign 保持一致。', 'Chinese text prefers PingFang SC with Helvetica Neue as the Latin fallback. Prices use tabular figures for alignment. The 4/8/12/13/14/16/18/20/22/32 px scale follows TDesign density.'],
    ['5 档圆角覆盖 90% 场景。原子标签用 xs、卡片图片用 sm、大卡片和列表容器用 md、面板/模态用 lg、胶囊按钮用 pill。', 'Five radius levels cover most scenarios: xs for atomic labels, sm for card imagery, md for cards and lists, lg for panels and modals, and pill for segmented controls.'],
    ['3 层阴影： shadow-1 hover 抬起、 shadow-2 弹层浮起、 shadow-focus 键盘焦点环。 阴影颜色使用低透明度黑而非深灰，与 TDesign React 保持一致。', 'Three shadow levels cover hover elevation, floating layers, and keyboard focus. Shadows use low-opacity black rather than solid gray, following TDesign conventions.'],
    ['页面级布局变量。左导航 240 px · 右侧 TOC 200 px · 中央内容最大 1120 px · 页面内边距 32 px。 组件级 padding / gap 直接使用 4 / 8 / 12 / 16 / 20 / 24 / 32 px 数值，不再抽出变量以保持自由度。', 'Page layout uses a 240 px left navigation, 200 px right TOC, 1120 px maximum content width, and 32 px page padding. Components use the 4/8/12/16/20/24/32 px spacing scale directly.'],
    ['Typography · font family · scale · weight · line-height · usage in cards', 'Font family, scale, weight, line height, and product-card usage'],
    ['Joybuy 字体系统由两个 token 家族撑起： --f-sans 承担全站正文与展示型文本， --f-mono 只用在价格、代码、SKU 编号这类需要等宽/数字对齐的场合。 禁用衬线体和斜体—任何斜体只会出现在被划掉的 RRP 中，是删除线的视觉附属，而不是"强调"手法。', 'Joybuy typography uses two token families: --f-sans for interface and display text, and --f-mono for prices, code, and aligned identifiers. Serif and italic styles are avoided; any slant seen in a crossed-out RRP is incidental rather than emphasis.'],
    ['两个家族通过 CSS 变量分发，无需 @font-face ，加载零成本。默认走中文系统字体，苹方、汉仪都会命中。', 'Both families are distributed through CSS variables with no webfont loading cost. Chinese system fonts such as PingFang are preferred by default.'],
    ['10 档字号，按视觉层次而非等比数列排布。商卡通常只用 10-20px 区间；页面标题、章节标题在文档层用到 20+。 letter-spacing 遵循苹方规则：字号越大越紧（负字距），字号越小越松（正字距）。', 'Ten font sizes are organized by hierarchy rather than a geometric scale. Product cards mainly use 10–20 px, while documentation headings use larger sizes. Tracking tightens as type gets larger.'],
    ['只用 4 档字重—— 400 正文、500 半强调、700 强调标题、900 只留给价格数字。 刻意跳过 300 与 600，避免字重梯度密到肉眼分辨困难。字重上下差 ≥ 200，用户扫视就能捕获层次。', 'Use four weights only: 400 for body text, 500 for moderate emphasis, 700 for headings, and 900 exclusively for prices. Skipping 300 and 600 keeps hierarchy easy to scan.'],
    ['行距系统按"文本密度"分 4 档。价格与标题走紧凑 1.15；商卡里的多行标题 1.35~1.4；正文 1.55~1.7。', 'Line height follows four density levels: 1.15 for prices and display titles, 1.35–1.4 for multiline card titles, and 1.55–1.7 for body copy.'],
    ['在商卡里，字号 × 字重 × 颜色 × 行距的组合被高度收敛。以下 6 种是"看到就一眼认出"的用途型样式。', 'Product cards use a tightly constrained combination of size, weight, color, and line height. The six styles below should be recognizable at a glance.'],
    ['Iconography · 105 Figma-exported SVGs · click to copy path', '105 SVGs exported from Figma · select an icon to copy its path'],
    ['全部图标由 Figma REST API 从 Joybuy 商卡组件库导出为 SVG，落在 site/assets/figma-atoms/ category / name .svg 。 点任意图标即可复制 var() -可用的相对路径。禁止手绘 icon 二次修改，改动请在 Figma 源文件里更新后重新导出。', 'All icons are exported as SVG from the Joybuy product-card library through the Figma REST API. Select an icon to copy its relative asset path. Do not redraw icons locally; update the Figma source and export again.'],
    ['用户扫视商卡时最先捕获的视觉锚点。Product Highlights 走枚举驱动（7 枚 SVG 对应 7 个 Figma 变体）， AI Recommendation 与 Dietary Badges 是补充分组。', 'The first visual anchors users notice while scanning a card. Product Highlights are enum-driven, with seven SVGs mapped to seven Figma variants; AI Recommendation and Dietary Badges provide supporting groups.'],
    ['直接与用户手指发生交互的按钮 · 加购按钮全 11 状态、收藏/点赞按钮的 3 状态。', 'Controls users interact with directly, including all 11 add-to-cart states and three favorite states.'],
    ['物流承诺、卖家类型、库存状态相关的图形。灰阶为主，用来在信息层次上把"次级信息"和主内容拉开距离。', 'Graphics for fulfillment promises, seller types, and stock states. A grayscale treatment keeps this supporting information below primary content.'],
    ['价格主行、促销副行、大促标签等富含数字的组合。这些 SVG 内含 tabular-nums 版式，直接嵌入卡片无需二次排版。', 'Number-heavy combinations for primary price, secondary promotion lines, and campaign labels. These SVGs already use tabular figures and need no extra layout work.'],
    ['颜色/能效/等级等属性型图形，用于辅助信息展示。使用频率较低但每张商卡都可能出现一到两个。', 'Supporting graphics for color, energy rating, and other attributes. They appear less often, but one or two may be present on any card.'],
    ['32 个业务原子组件、148 个 Figma 变体，跟 App Business Components · Product Card Atomic Components 对齐。每个变体同时展示 Figma 命名与源文案，图片直接导出自 Figma 源文件。', 'Thirty-two business atoms and 148 Figma variants aligned with App Business Components · Product Card Atomic Components. Each variant shows its Figma name and source copy; artwork is exported directly from Figma.'],
    ['标签角标', 'Tags & Badges'], ['图片容器', 'Image Containers'], ['文本信息', 'Product Information'],
    ['价格促销', 'Pricing & Promotions'], ['状态物流', 'Status & Fulfillment'], ['交互', 'Interaction'],
    ['附着在商品图或商品卡角落的图标 / 徽标类原子，用于快速传达商品状态、荣誉标识或个性化属性。', 'Icons and badges attached to product imagery or card corners to communicate status, recognition, or personalized attributes at a glance.'],
    ['承载商品主视觉的容器类原子。Product Image 按使用场景定义三档尺寸，容器内仅保留商品图、收藏按钮及按需出现的排行榜徽章和饮食习惯标签；Color 展示 SPU 色板选择。', 'Atoms that hold primary product imagery. Product Image defines three sizes by usage context and contains only the product picture, favorite button, and optional ranking and dietary badges; Color presents SPU swatches.'],
    ['商品的语义信息原子。标题、评分销量、规格属性等，主要负责传达商品是什么以及买过的人怎么评价。', 'Semantic product information such as title, rating, sales, and specifications.'],
    ['价格体系原子。当前售价、原价 / 折扣行、会员价、单品 / 跨店促销标签——覆盖所有价签展示形态。', 'Pricing atoms covering current price, original price, discounts, member pricing, and item or cross-store promotions.'],
    ['强化购买决策的辅助原子——库存紧张感、履约速度、能效等级、AI 推荐理由，形成"该不该现在买"的心智推动。', 'Supporting atoms that reinforce purchase decisions through stock urgency, fulfillment speed, energy rating, and AI recommendations.'],
    ['唯一的动作型原子——加入购物车按钮。承载了商品卡上的核心转化行为。', 'The primary action atom: Add to Cart, which carries the core conversion behavior on product cards.'],
    ['7 张商卡，每种对应特定的浏览场景与信息密度诉求。从最常用的双列信息流商卡，到活动落地页的强化倒计时形态。将根据业务实践持续更新商卡类型，敬请留意变更记录。', 'Seven product-card patterns for different browsing contexts and information-density needs, from the common two-column feed card to campaign and countdown experiences.'],
    ['图文并重的默认商卡形态。覆盖首页、搜索、类目、购物车、店铺等基础浏览场景。', 'Default product-card patterns that balance imagery and information across home, search, category, cart, and store experiences.'],
    ['强化特定售卖形态的场景化商卡。活动氛围、倒计时售卖、入口曝光。', 'Scenario-specific cards for campaign atmosphere, countdown selling, and high-density entry points.'],
    ['最常用的商品卡片，在首页信息流、分类页、搜索结果双列视图里以 200px 卡片框架出现，其中商品图片容器固定为 176×176。 图片下方由两个内容容器组成：Container 01（亮点 → 品牌 → 标题 → 评分/销量 → AI 推荐理由，间距 4px）与 Container 02（左右 padding 6px；上组：Individual Promotion / Type 单促/业务类型 → 价格 → 总促，下组：库存 → 履约时效 → 自营标签 → 服务 → 原产地 → 性能，组内间距 4px，组间 8px；加购按钮在右侧，与左列间距 4px），两容器间距 8px。', 'The most common product card, used at 200 px in two-column home, category, and search feeds, with a fixed 176×176 product image. Below the image, two content containers stack 8 px apart: Container 01 (highlight → brand → title → rating/sales → AI reason, 4 px gaps) and Container 02 (6 px horizontal padding; top group: Individual Promotion / Type → price → master promotion; bottom group: stock → fulfillment → self-operated tag → service → country of origin → performance, 4 px gaps within each group and 8 px between groups; cart button on the right, 4 px from the left column).'],
    ['同一骨架下已投放的变体。差异在于「显示哪些槽位」和「加购按钮的形态」，价格与图片主体保持一致。', 'Released variants share one structure and differ only in visible slots and cart-button state; price and imagery remain consistent.'],
    ['每个字段的来源、类型、异常兜底与多语言约定。前后端联调、埋点、A/B 都以本表为准。', 'This contract defines source, type, fallback, and localization behavior for implementation, analytics, and experiments.'],
    ['这张卡片被 3 个楼层和 4 个页面复用。改动骨架或字段规则时，需要同步 review 下列位置。', 'This card is reused across three sections and four pages. Review every location below when changing its structure or field rules.'],
    ['选卡先看展示位与信息密度需求，再看是否需要「操作」（加购 / 收藏）。', 'Choose a card by placement and information density first, then by required actions such as cart or favorite.'],
    ['结构主图直接嵌入 App Business Components 文件的 Vertical card 节点。变体截图在上方 Types 段单独提供。', 'The structure is embedded directly from the Vertical Card node in App Business Components. Variant previews are documented in the Types section.'],
    ['图像置左、内容右侧堆叠的商品卡片。适合列表流场景，1 行显示 1 张卡， 最常出现在购物车、收藏夹、订单列表、搜索建议下拉。相比双列版信息层次更紧凑，商品图片使用 130×130 规格。', 'A one-per-row product card with a 130×130 product image on the left and stacked content on the right. It is designed for carts, favorites, order lists, and search suggestions.'],
    ['8 个槽位 · 图像左对齐固定 130×130，内容区在右侧垂直堆叠。 非必填字段值为空时整行不渲染，也不留 gap 空隙；本卡片默认没有押金行。', 'Eight slots with a fixed 130×130 image and a vertical content stack. Empty optional rows collapse, and deposit rows are omitted by default.'],
    ['横向卡有 4 种常用形态，全部来自同一份数据模型，靠开关字段和状态类切换。', 'Four common horizontal-card variants share one data model and switch through field visibility and state classes.'],
    ['与双列卡共享 Product 类型，本卡片默认省略 colors / perUnit / deposit ， 其余字段与 Vertical Card 完全一致。', 'Shares the Product type with Vertical Card while omitting colors, perUnit, and deposit by default.'],
    ['横向卡出现在需要用户"逐条浏览、逐条操作"的列表场景。', 'Use the horizontal card in lists where users review and act on items one by one.'],
    ['横向和双列在信息量上几乎一致，区别是场景。选卡片先想：这个列表让用户滚动多快、每个 SKU 需要点几次操作。', 'Horizontal and Vertical carry similar information; their difference is context. Consider scrolling speed and how many actions each SKU requires.'],
    ['64 px 缩略图 + 精简 6 槽位的迷你横向卡。定位介于横向卡和纯文本联想之间—— 只保留决策关键字段（标题 · 售价 · 加购），其他辅助信息按需开关。用在补充推荐、下单确认、直播侧边推荐这些"注意力已经在别处"的场景。', 'A compact six-slot horizontal card with a 64 px thumbnail. It keeps only decision-critical fields—title, price, and cart—and serves supporting contexts such as recommendations, order confirmation, and live sidebars.'],
    ['6 个槽位 · 图像 64×64 固定 · 加购按钮 24×24 浮在右上。相比横向卡少了 brand 和 seller 行， rating 也吃了分隔线，价格从两行栈变成同行 baseline 对齐。', 'Six slots with a fixed 64×64 image and a 24×24 cart button. Brand and seller rows are removed, rating is compressed, and price values align on one baseline.'],
    ['Mini 卡有 4 种常见形态：默认、带亮点、脱销、横滑推荐条。全部共享数据模型。', 'Mini has four common variants: default, highlighted, sold out, and horizontal recommendation strip. All share one data model.'],
    ['共享 Product 类型。Mini 默认省略 brand / promotion / seller / colors / perUnit / deposit ； brand 融入 title 首词，无需单独字段。', 'Mini shares the Product type but omits brand, promotion, seller, colors, perUnit, and deposit. Brand is folded into the first part of the title.'],
    ['Mini 出现在"用户注意力已经在别处"的补充位——它不是主内容，是"再看一眼、顺手买"的入口。', 'Mini belongs in supporting placements where attention is elsewhere—a quick glance and add-on purchase rather than the primary content.'],
    ['Mini 与 Horizontal 的区分是"信息深度"—— Horizontal 是列表主内容，Mini 是补充位。 在设计上不要相互替代。', 'The distinction between Mini and Horizontal is information depth: Horizontal is primary list content, while Mini is supporting content. Do not use them interchangeably.'],
    ['横滑楼层是一个"容器组织"而不是单张商卡——把 3-6 张 mini 竖版商卡横排在受限的行高内， 用手指左右滑动浏览。用在首页信息流的品牌日、类目聚合入口、PDP 底部相关推荐这些"想曝光更多但只有一行"的场景。 单卡决策深度低，靠"往右还有"的横滑手势拉高浏览量。', 'Horizontal Scroll is a container rather than a single card. It places three to six mini vertical cards in one constrained row for swipe exploration on home feeds, category entries, and PDP recommendations.'],
    ['6 个槽位 · 只有 header 与 scroll-container 是必需，其余 4 个可选按需开关。 Item-tile 是"mini vcard 精简版"——图 + 高亮 + 标题 + 价格，砍掉品牌行、评分与加购按钮以省行高。', 'Six slots: only header and scroll-container are required. Each item tile is a reduced mini vertical card with image, highlight, title, and price.'],
    ['4 种主题共享同一容器骨架，通过开关不同槽位组合而成—— Default 是最纯净的横滑，Brand 前置 200px 品牌 hero，Category 顶部加类目 chip strip，Themed 加渐变 band + 活动 label。', 'Four themes share one container structure. Default is minimal, Brand adds a 200 px hero, Category adds a chip strip, and Themed adds a gradient band and campaign label.'],
    ['横滑楼层是"容器 + N 张商卡"的组合，自身字段极少，主内容全在 items[] —— 直接复用 SKU Product 目录（与 Vertical / Horizontal / Mini 共享）。 容器只关心楼层维度：标题 / 更多入口 / 主题 / 类目筛选。', 'The pattern is a container plus N product cards. Most content comes from items[] using the shared SKU catalog; the container owns only title, more link, theme, and category filter.'],
    ['横滑是"更多商品但只有一行"的解法——在纵向空间受限的地方保留横向探索深度。', 'Use Horizontal Scroll when more products must fit into one row while preserving exploration depth.'],
    ['横滑 vs 竖版列表的核心分界——横滑追曝光量，竖版列表追决策深度。行高受限 + 商品关联度中等时选横滑，否则回退竖版。', 'Horizontal Scroll optimizes exposure; vertical lists optimize decision depth. Use scrolling when row height is constrained and item relevance is moderate.'],
    ['活动商卡是介于 banner 和 product card 之间的组合位——banner 只做曝光，campaign card 同时曝光活动主题 + 3 个热销选品， 用倒计时驱动紧迫感，把用户从"看看"推到"点进落地页"。用在 618/双十一楼层、频道页 top、品牌日头部、荷兰拍入口。', 'Campaign Card bridges banners and product cards: it presents a campaign theme with three featured products and uses a countdown to move users from awareness to the landing page.'],
    ['7 个槽位分三层：banner-bg 承载主题色 + 主标 + 副标 + 倒计时 + CTA；product-strip 用 2-4 列等宽方阵放 mini 商品； 底部 footer-link 收敛"全部 → 落地页"。除 title、products 外全部允许空值折叠。', 'Seven slots form three layers: banner background with title, subtitle, countdown, and CTA; a two-to-four-column product strip; and a footer link to the landing page. Only title and products are required.'],
    ['4 种主题变体，全部共享 7 槽位骨架，只切换 banner-bg 和文字色。业务方从 CMS 选主题、填内容， 落地页跳转由 ctaHref 承接。', 'Four themes share the same seven-slot structure and vary only background and text color. Content and theme come from CMS, with ctaHref linking to the landing page.'],
    ['Campaign 卡不共享 Product 主体——它是"活动壳"，通过 products 数组 引用 SKU 目录里的商品（复用 img / salePrice 字段）。主题内容全部由运营 CMS 输入。', 'Campaign is an event shell rather than a Product instance. Its products array references SKU data for image and price, while campaign content comes from CMS.'],
    ['Campaign 卡出现在"用户从曝光被推向点击"的关键位——它同时做主题曝光和选品导流，替代过去纯 banner + 商品列表的组合。', 'Campaign Card appears at key conversion points, combining theme exposure and product discovery in place of a separate banner and product list.'],
    ['Campaign 卡是"主题曝光 + 选品导流"的合体位——只在有明确活动主题、有时限的场景用； 没有主题的常规商品陈列继续用普通楼层。', 'Use Campaign Card only for a clear, time-bound campaign theme. Standard merchandising without a campaign should use regular product sections.'],
    ['时限锁定型商品：新品预售、限时秒杀、荷兰拍卖。特征是"时间是决定性变量"——状态（未开始 / 进行中 / 结束）、倒计时、 当前价（拍卖会跳）、预约或出价 CTA、定金 vs 尾款结构，一律通过 state 枚举驱动同一份骨架切换外观。', 'For time-bound products such as pre-sales, flash sales, and Dutch auctions. State, countdown, current price, CTA, and deposit balance are all derived from one state enum.'],
    ['8 个槽位 · 图 120×120 + 6 段信息栈 · 图上左上角 ribbon 显示状态高层信号 · body 内 state-chip 语义化重复。 倒计时用等分格 HH:MM:SS · 荷兰拍在价格行插入 "下一档 £YYY"。', 'Eight slots with a 120×120 image and six-part information stack. A ribbon and state chip repeat the status signal, while the countdown uses HH:MM:SS cells and auctions add the next price tier.'],
    ['4 个状态变体共享 8 槽位骨架 · 不允许 为某个状态增删槽位 · 只允许改颜色、label、显隐可选字段。 切换状态 = 切换 state 枚举 + 由前端映射派生其他字段。', 'Four states share the same eight-slot structure. States may change color, labels, and optional visibility, but never add or remove slots.'],
    ['Booking 卡在 Product 基础上增加 state / startsAt / endsAt / bidCurrent / bidStep / reservedCount 六字段。 ribbon 与 state-chip 均由 state 派生，不接受人工写死。', 'Booking extends Product with state, startsAt, endsAt, bidCurrent, bidStep, and reservedCount. Ribbon and state chip must be derived from state.'],
    ['Booking 出现在"用户主动等待或竞争"的场景——它不是普通推荐位，是"必须蹲点"的信号位。 必要时该整片楼层用红黑色调收拢紧迫感。', 'Booking is for moments where users actively wait or compete. It signals a must-watch event rather than a standard recommendation.'],
    ['Booking 与普通商卡的区分是"时间紧迫感"——常态在售的商品不该穿 ribbon 装成秒杀， 反过来真正限时的商品也不能只用普通商卡承载。', 'Urgency separates Booking from regular cards. Always-on products should not imitate flash sales, and genuinely time-bound products need more than a standard card.'],
    ['极小尺寸的商品/品牌入口 tile（60~96 px 方块）。只保留最核心的图 + 价格 + 徽标——不承担用户决策， 只承担"一屏放下 6-12 个点击入口"的高密度曝光任务。用在首页品牌馆入口、频道页顶部快捷入口、直播间商品清单、店铺装修 icon 组。', 'A compact 60–96 px product or brand entry tile with only image, price, and badge. It supports high-density exposure for brand halls, channel shortcuts, live product lists, and store icon grids.'],
    ['4-5 槽位 · image 方形 60~96px · 价格居中红色 · 标签一行截断 · 徽标浮层可选。相比 Mini 少了 title / rating / fulfillment / cart， 因为它只是入口不是决策卡。多 tile 由 .sdyn-strip grid 控制列数。', 'Four to five slots with a square image, centered red price, single-line label, and optional badge. It omits title, rating, fulfillment, and cart because it is an entry point rather than a decision card.'],
    ['Small Dynamic 有 4 种常见形态：3 列大 tile · 6 列密排 · 覆盖状态（LIVE / SOLD OUT）· 无价品牌入口。全部共享数据模型和 .sdyn class。', 'Small Dynamic has four common forms: three-column tiles, six-column dense tiles, LIVE or SOLD OUT overlays, and brand entries without price.'],
    ['共享 Product 类型，但只消费其中的 img / salePrice / brand 三个字段（brand 直接用作 label）。 badge / ribbon / soldOut 是 sdyn 独有的运营字段。', 'It shares Product but consumes only img, salePrice, and brand. Badge, ribbon, and soldOut are Small Dynamic-specific campaign fields.'],
    ['Small Dynamic 出现在"一屏要放很多入口，用户只需要点一下"的位置——它不承担决策，只承担曝光和引流。', 'Use Small Dynamic when one screen needs many one-tap entries. It supports exposure and traffic rather than product decisions.'],
    ['Small Dynamic 与 Mini / Horizontal 的分界是"是否承担决策"—— Small Dynamic 只承担"点击入口"， 用户点了之后跳去详情页做决策；Mini / Horizontal 是承载决策本身的卡。', 'Small Dynamic is an entry point; Mini and Horizontal carry the decision itself. Users tap Small Dynamic first and decide on the destination page.'],
    ['直接嵌入 App Business Components 中「Horizontal card」结构说明 frame。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Horizontal Card structure frame in App Business Components. The design source is the single source of truth for slot naming.'],
    ['直接嵌入 App Business Components 中「Horizontal mini」结构说明 frame。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Horizontal Mini structure frame in App Business Components. The design source is the single source of truth for slot naming.'],
    ['直接嵌入 App Business Components 中「Horizontal scroll」结构说明 frame。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Horizontal Scroll structure frame in App Business Components. The design source is the single source of truth for slot naming.'],
    ['直接嵌入 App Business Components 中「Campaign card」结构说明 frame。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Campaign Card structure frame in App Business Components. The design source is the single source of truth for slot naming.'],
    ['直接嵌入 App Business Components 中「Booking / Auction card」结构说明 frame。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Booking / Auction Card structure frame in App Business Components. The design source is the single source of truth for slot naming.'],
    ['直接嵌入 App Business Components 中「Mini card 结构」frame（映射小图动态 / Small Dynamic）。以设计源文件为唯一事实来源，本页所有槽位命名与之对齐。', 'Embedded directly from the Mini Card structure frame in App Business Components and mapped to Small Dynamic. The design source is the single source of truth for slot naming.'],
    ['如果显示空白，请在 Figma 分享面板开启「Anyone with link」访问权限。', 'If the embed is blank, enable “Anyone with the link” access in Figma.'],
    ['仅 3C 数码 与 大家电 显示配色控件；其余品类隐藏。', 'Color controls appear only for Digital and Appliances; all other categories hide them.'],
    ['点击缩略图切换商品，或直接点击卡片主图循环预设。', 'Select a thumbnail to switch products, or select the card image to cycle through presets.'],
    ['只切换商卡内容语言，不影响全站文档语言。', 'Changes product-card content only; the documentation language is controlled globally.'],
    ['这张卡的 17 个槽位分别由哪些原子组件填充。所有原子图像直接来自 Figma 源文件，与商卡视觉严格一致。点击原子名可跳到原子浏览器查看全部变体。', 'These seventeen slots map directly to Figma atoms. Every atomic visual comes from the source file; select an atom name to inspect all of its variants.'],
    ['商品图', 'Product image'], ['色板', 'Color swatches'], ['亮点', 'Highlight'], ['品牌', 'Brand'],
    ['标题', 'Title'], ['单促/业务类型', 'Individual Promotion / Type'], ['价格行', 'Price row'], ['押金', 'Deposit'],
    ['履约时效', 'Fulfillment time'], ['自营标签', 'Self-operated tag'], ['服务', 'Service'], ['原产地', 'Country of origin'],
    ['性能', 'Performance'], ['少库存', 'Low stock'], ['总促', 'Master promotion'], ['AI 推荐理由', 'AI reason'],
    ['1 行变体', '1-line variant'], ['2 行变体', '2-line variant'],
    ['3 变体', '3 variants'], ['4 变体', '4 variants'], ['6 变体', '6 variants'],
    ['7 变体', '7 variants'], ['14 变体', '14 variants'], ['19 变体', '19 variants'], ['11 变体', '11 variants'], ['最常用', 'Most used'],
    ['下架 · 断货', 'Delisted · sold out'], ['榜单 · 关联推荐', 'Ranking · related recommendations'],
    ['商品主档', 'Product catalog'], ['CDN 首图', 'Primary CDN image'], ['价格服务实时', 'Real-time pricing service'],
    ['Card Content Container 01（容器 01）· 纵向 gap 4 · 左右 padding 6', 'Card Content Container 01 · vertical gap 4 · horizontal padding 6'],
    ['Card Content Container 02（容器 02）· 左右 padding 6 · 左列纵向 gap 4 / 8 · 按钮右列 gap 4', 'Card Content Container 02 · horizontal padding 6 · left column vertical gap 4 / 8 · button column gap 4'],
    ['Media（媒体）· 商品图 / 色板', 'Media · product image / color swatches'],
    ['价格服务', 'Pricing service'], ['价格服务计算', 'Calculated by pricing service'], ['运营 CMS', 'Operations CMS'],
    ['评价服务', 'Review service'], ['订单服务', 'Order service'], ['营销服务', 'Promotion service'],
    ['履约服务', 'Fulfillment service'], ['商户档', 'Merchant profile'], ['SKU 主档', 'SKU catalog'], ['SKU 计数', 'SKU count'],
    ['必填，缺失禁投', 'Required; block publishing when missing'], ['不翻译', 'Not localized'],
    ['en / zh 双语，缺失回退英文', 'Localized in EN/ZH; fall back to English'],
    ['不渲染', 'Do not render'], ['无折扣时不渲染', 'Hide when there is no discount'],
    ['非计价商品不渲染', 'Hide for non-unit-priced products'], ['非押金商品不渲染', 'Hide for products without deposits'],
    ['回退平台自营文案', 'Fall back to platform-owned seller copy'],
    ['非 3C / 大家电不渲染', 'Hide outside Digital and Appliances'], ['0 时不渲染', 'Hide when zero'],
    ['符号跟随站点区域', 'Currency symbol follows locale'], ['数字通用', 'Numbers are shared'],
    ['首页信息流双列', 'Two-column home feed'], ['类目列表楼层', 'Category listing section'], ['榜单楼层', 'Ranking section'],
    ['首页', 'Home'], ['搜索结果双列', 'Two-column search results'], ['类目详情', 'Category page'], ['店铺首页', 'Store home'],
    ['首页信息流、搜索结果、类目页的双列瀑布', 'Two-column feeds on Home, Search, and Category pages'],
    ['需要展示价格 + 折扣 + 促销 + 加购一体化的场景', 'Flows that need price, discount, promotion, and cart action together'],
    ['图片是决策主因（服饰、美妆、家电）', 'Image-led decisions such as fashion, beauty, and appliances'],
    ['需要展示 SKU 配色（仅 3C / 大家电）', 'Products that need SKU color choices in Digital or Appliances'],
    ['榜单场景可以退化为 Minimal 变体', 'Ranking contexts can use the Minimal variant'],
    ['购物车、订单确认——用', 'For cart and order confirmation, use'],
    ['PDP 相关推荐横滑——用', 'For PDP related-product carousels, use'],
    ['活动 / 大促专场——用', 'For campaign and promotion events, use'],
    ['承载氛围', 'to carry the campaign atmosphere'],
    ['直播 / 拍卖 / 预约——用对应', 'For live, auction, and booking contexts, use the matching'],
    ['信息极简的浮层 / 弹窗——用', 'For minimal overlays and dialogs, use'],
    ['Figma 源文件', 'Figma Source'], ['Figma 源组件', 'Figma Source Component'],
    ['下一张 ·', 'Next ·'],
    ['全字段展示，红加购按钮。用于首页信息流、搜索结果、类目页。', 'Shows all fields with the red cart button for home feeds, search results, and category pages.'],
    ['图片下方增加色板行，多色时以 +N 收起。', 'Adds a color row below the image and collapses additional colors into +N.'],
    ['加购按钮换成"SOLD OUT"占位或"To notify"通知按钮，其余保持。', 'Replaces the cart action with SOLD OUT or To notify while preserving the remaining layout.'],
    ['仅保留图片 + 标题 + 价格；用在榜单、关联推荐、Live 直播浮层等信息密度低的场景。', 'Keeps only image, title, and price for rankings, related recommendations, and low-density live overlays.']
    , ['完整信息 · 用在购物车、订单列表这类需要看清品牌/价格/履约的场景。', 'Full information for carts and order lists where brand, price, and fulfillment must stay visible.']
    , ['激活 promotion 槽 · 用在活动期购物车、促销收藏夹。', 'Enables the promotion slot for campaign carts and promotional wishlists.']
    , ['.hcard--dim + 图上加 out-of-stock.svg 遮罩 · 加购按钮换成灰态。', 'Uses .hcard--dim with an out-of-stock.svg overlay and a disabled cart action.']
    , ['只保留标题 + 售价 · 用在搜索联想下拉、快速跳转组件。', 'Keeps only title and sale price for search suggestions and quick navigation.']
    , ['最典型场景。每张卡代表 1 个 SKU，右侧加购按钮变成数量选择器。可能叠加"删除 / 移入收藏"操作条。', 'The primary use case. Each card represents one SKU, with the cart action replaced by a quantity stepper and optional remove or save actions.']
    , ['保留右侧加购按钮，取消数量选择。左上有"移出收藏"按钮，脱销状态用 dim 变体。', 'Keeps the cart button without quantity controls, adds a remove-from-wishlist action, and uses the dim variant when sold out.']
    , ['加购按钮换成"再次购买"，promotion 换成"预计送达"，fulfillment 展示订单状态标签。', 'Replaces Add to Cart with Buy Again, uses promotion for estimated delivery, and shows order status in fulfillment.']
    , ['使用 Compact 变体，只保留标题 + 售价 + 加购。图像换成 56×56，整卡高度压到 72px 以内。', 'Uses the Compact variant with title, sale price, and cart action only; the image becomes 56×56 and total height stays under 72 px.']
    , ['选 Horizontal 当', 'Choose Horizontal when'], ['选 Vertical 当', 'Choose Vertical when']
    , ['6 槽位全开 · 用在最近浏览、下单确认页的关联推荐。', 'All six slots enabled for recently viewed items and order-confirmation recommendations.']
    , ['激活 highlight 槽 · 用在推荐位、直播侧边突出爆款/新品。', 'Enables the highlight slot to emphasize best sellers or new items in recommendations and live sidebars.']
    , ['.hmini--dim + 图上加 out-of-stock.svg 遮罩 · 加购按钮换成灰态。', 'Uses .hmini--dim with an out-of-stock.svg overlay and a disabled cart action.']
    , ['3-5 张 Mini 横向排列 · overflow-x auto · 用在 PDP 底部"喜欢的人也买了"。', 'Places three to five Mini cards in a horizontal overflow row for PDP recommendations.']
    , ['个人中心、首页头部横滑条。3-5 张 Mini 排成一行，靠 flex + overflow-x auto 支撑滚动。图像换成用户浏览过的 SKU。', 'A three-to-five-card strip for account and home surfaces, populated with recently viewed SKUs.']
    , ['下单结果页"你可能还需要"推荐 · 每张 Mini 独立可加购不跳页。fulfillment 换成"预计与本单同时送达"。', 'A “You may also need” row after checkout; each Mini can be added without leaving the page, with fulfillment showing combined delivery.']
    , ['直播页竖屏右侧固定 260px 侧边栏 · 主播推荐商品列表，2-3 张 Mini 纵向堆叠。加购动画替换为主播卡的高亮闪烁。', 'A fixed 260 px live-stream sidebar with two or three stacked Mini cards and a presenter-highlighted cart action.']
    , ['高级搜索联想下拉，从纯文本升级到"文字建议 + 3 张 Mini"。区别于横向卡的 Compact 变体—Mini 保留完整数据。', 'A rich search-suggestion dropdown combining text suggestions with three Mini cards; unlike Compact Horizontal, Mini keeps its complete data set.']
    , ['选 Mini 当', 'Choose Mini when']
    , ['混合竖版 mini 商卡横排 · 用在首页"猜你喜欢"、PDP 底部相关推荐。', 'A mixed row of mini vertical cards for home recommendations and related products on PDP.']
    , ['左侧 200px 品牌大卡（logo + slogan + CTA） + 3-4 张品牌自家 SKU · 用在品牌日会场入口。', 'A 200 px brand hero with logo, slogan, and CTA followed by three or four brand SKUs.']
    , ['顶部类目 chip strip · 点 chip 切换下方商品 · 用在类目聚合、店铺主页热销榜。', 'A category chip strip that switches the products below for category hubs and store best-seller lists.']
    , ['渐变 theme-band + 活动 label chip · 用在活动楼层、大促专场入口。', 'A gradient theme band and campaign chip for promotional sections and campaign entries.']
    , ['信息流楼层之一 · Default 主题 · 5-6 张 mini 混合类目 · dots 打开。 是首页"逛"到"买"的第一跳板——决策深度低，靠横滑手势拉高曝光。', 'A default home-feed section with five or six mixed-category mini cards and pagination dots, optimized for exploration and exposure.']
    , ['首页轮播下方的品牌日楼层 · Brand Hero 主题 · 200px 品牌卡 + 3 张品牌 SKU · more 链接进入品牌馆。 hero 承载品牌情感，右边 mini 卡承载"点进去看"的转化。', 'A Brand Hero section below the home carousel, pairing a 200 px brand card with three SKUs and a link to the brand hall.']
    , ['商详页底部关联推荐 · Default 主题 · 4 张同品类 mini · 无 dots。 用户已经在决策路径上，这是"横向探索"的最后一根救命稻草。', 'Four same-category mini cards at the bottom of PDP without pagination dots, providing one final horizontal discovery path.']
    , ['类目页顶部的类目细分横滑 · Category Row 主题 · chip strip 切换二级类目 · 下方 mini 换成对应品类爆款。 用于类目页的"逛"入口，chip 与 mini 联动。', 'A Category Row at the top of category pages, where chips switch subcategories and update the best-selling mini cards below.']
    , ['选 Horizontal Scroll 当', 'Choose Horizontal Scroll when'], ['选 Vertical 单卡列表当', 'Choose a Vertical list when']
    , ['红色渐变 + 倒计时 + 强 CTA + 4 张商品 · 用在 618/双十一那种时限大促。', 'Red gradient, countdown, strong CTA, and four products for time-bound major promotions.']
    , ['品牌色（Diptyque 米色 / Apple 黑）主导 · slogan 弱化 · 3 张品牌选品。', 'Brand-led color, a quieter slogan, and three curated brand products.']
    , ['秋橙 / 圣诞红绿 / 春粉主题渐变 · 场景化选品 · 主题字体点缀。', 'Seasonal gradients with contextual products and themed typography accents.']
    , ['深红 / 黑背景 + 大字倒计时 + "仅剩 X 小时" + 强红色 CTA · 冲动型下单场景。', 'Dark red or black background, oversized countdown, urgency copy, and a strong red CTA for impulse conversion.']
    , ['618、双十一、黑五顶部大促楼层 · 单张 Campaign 卡横占全宽或双列并排 · Sale 主题 · 倒计时驱动首屏点击。', 'Top campaign sections for 618, Singles’ Day, and Black Friday, using a full-width or two-column Sale theme with countdown-led conversion.']
    , ['美妆、家电、时尚频道页 top 位 · Seasonal 主题 · 换季场景化选品 · 承接从首页 tab 跳来的用户。', 'A Seasonal theme at the top of beauty, appliance, and fashion channels, curated for seasonal traffic arriving from Home.']
    , ['Diptyque 品牌日 8/28、Apple 秋季发布 · Brand Day 主题 · 品牌色为主 · 3 张品牌旗舰选品。', 'A Brand Day theme for events such as Diptyque Day or an Apple launch, using brand colors and three flagship products.']
    , ['荷兰拍、闪购活动列表入口 · Urgency 主题 · 深黑 + 强倒计时 + "仅剩 2 小时"文案 · 强冲动型转化位。', 'An Urgency theme for Dutch auctions and flash-sale entries, using a dark surface, strong countdown, and impulse-led copy.']
    , ['选活动商卡当', 'Choose Campaign Card when'], ['选普通商品楼层当', 'Choose a standard product section when']
    , ['灰底 ribbon + 距开抢倒计时 + 定金 chip + reserved count。CTA " Reserve for £X " 收定金。', 'Gray ribbon, countdown to launch, deposit chip, reservation count, and a Reserve for £X CTA.']
    , ['红边 + 距结束倒计时 + 主 CTA "Notify" + 当前销量 chip。Live 圆点脉动 · 倒计时也变红。', 'Red accent, countdown to end, Notify CTA, sales chip, and a pulsing Live indicator.']
    , ['紫边 + 紫倒计时 + 当前价（每分钟 −£1） + 下一档 £YYY + "Place bid" CTA + 当前竞拍人数。', 'Purple accent and countdown, current price with the next price tier, Place bid CTA, and active bidder count.']
    , ['.booking--dim 55% 透明度 + "This drop has ended" 说明 + "See similar →" ghost 按钮。倒计时行完全隐藏。', 'Uses .booking--dim at 55% opacity with an ended message and See similar ghost action; the countdown is hidden.']
    , ['Apple 新品、Diptyque 限量首发。 state=soon · ribbon 灰 · CTA 收定金。 用户预约成功后同一张卡切到 state=live 状态。', 'For Apple launches and Diptyque limited releases. state=soon uses a gray ribbon and deposit CTA, then switches to state=live after launch.']
    , ['大促主会场"整点抢"栏目。 state=live · ribbon 红 · 倒计时红调脉动。 CTA 使用 Figma Notify Button。', 'For hourly drops in major campaigns. state=live uses a red ribbon and pulsing countdown, using the Figma Notify Button atom.']
    , ['每分钟 -£1 的荷兰拍。 state=auction · ribbon 紫 · 当前价随时间下滑 · 用户可锁定当前档位出价。', 'For Dutch auctions that drop by £1 per minute. state=auction uses purple, lowers the price over time, and lets users lock the current tier.']
    , ['已结束的场次归档。 state=ended · dim 55% · "See similar →" 引流到常规商卡。 保留在池内供 SEO 与用户回访使用。', 'Archived events use state=ended at 55% opacity with See similar linking to standard cards, while remaining available for SEO and revisits.']
    , ['选 Booking / Auction 当', 'Choose Booking / Auction when'], ['选 Vertical / Horizontal 当', 'Choose Vertical / Horizontal when']
    , ['首页头部品牌馆入口 · 每张 tile ≈ 96 px 宽，图 + 价 + 品牌名三段齐。', 'A brand-hall entry at the top of Home, with each 96 px tile showing image, price, and brand.']
    , ['频道页顶部快捷入口 · 6 列极密排布，label 靠 text-overflow: ellipsis 截断。', 'A dense six-column shortcut row at the top of a channel, with single-line truncated labels.']
    , ['直播商品清单 · 左上 LIVE 红角标带脉冲圆点 · 售罄 tile 加半透黑遮罩。', 'A live product list with a pulsing LIVE badge and a translucent sold-out overlay.']
    , ['品牌馆入口 · 无价格行 · 图像 padding 加大 · label 加粗成品牌名。', 'A brand-hall entry without price, using more image padding and a bold brand label.']
    , ['3 列大 tile（96 px 宽）· Apple / Nike / Diptyque 等重点品牌 · 图 + 品牌名，无价格。点击进品牌页。', 'Three-column 96 px tiles for key brands such as Apple, Nike, and Diptyque, showing image and brand name without price.']
    , ['6 列 60 px 密排快捷入口 · "限时特惠 / 秒杀 / 新品首发" 频道跳转 · label 一行截断。', 'Six-column 60 px shortcuts for deals, flash sales, and launches, with single-line labels.']
    , ['直播页竖屏右侧 2 列纵向堆叠 · 每张 tile 显 LIVE ribbon + 售价 · 售罄自动切 --sold-out 。', 'A two-column stack in a live sidebar, with LIVE ribbon and price; sold-out items switch automatically to --sold-out.']
    , ['店铺首页装修位 · 商家自选 3-4 行 tile 组网格 · badge 支持自定义活动文本（"满 200 减 30"）。', 'A merchant-configured three-to-four-row tile grid on store home, with custom campaign copy in the badge.']
    , ['选 Small Dynamic 当', 'Choose Small Dynamic when'], ['选 Mini 或 Vertical 当', 'Choose Mini or Vertical when']

    /* Foundation pages and dynamic catalog copy. */
    , ['按容器尺寸管理，不按 variants 管理。176px、146px、130px 是三档固定规格；商品图片与右上角收藏按钮为固定结构，左上角排行榜徽章和左下角饮食习惯标签按业务场景选用。', 'Managed by container size rather than variants. The fixed sizes are 176 px, 146 px, and 130 px. The product picture and top-right favorite button are required; the top-left ranking badge and bottom-left dietary badge are optional by context.']
    , ['暂无可展示类型', 'No display types yet'], ['· 请在数据源中补充规格或 Types', '· Add specifications or Types to the data source']
    , ['用于首页信息流、分类页和搜索结果的双列商品卡。', 'For two-column product cards in home feeds, category pages, and search results.']
    , ['用于一行多卡的横向滚动楼层，卡宽与图片宽保持一致。', 'For one-row product carousels, with card width kept equal to image width.']
    , ['用于购物车、收藏夹、订单和搜索单列等横向商卡。', 'For horizontal product cards in carts, wishlists, orders, and single-column search results.']
    , ['查看对应商卡 →', 'View matching card →']
    , ['图片与多容器栅格', 'Image and Multi-Container Grid']
    , ['图片容器只定义自身 1:1 尺寸；当页面出现多张卡片、图片、视频或轮播时，由页面栅格决定单元宽度与间距。不要为了填满一行临时拉伸图片容器。', 'The image container defines only its own 1:1 size. When a page contains multiple cards, images, videos, or a carousel, the page grid controls unit width and spacing. Never stretch an image container just to fill a row.']
    , ['纵向列表', 'Vertical list'], ['1–4 列等分可用宽度，卡片跟随单元伸缩。', 'Distribute available width evenly across one to four columns; cards follow their grid cells.']
    , ['横向轮播', 'Carousel'], ['使用固定栅格跨度或固定宽度，保留下一张卡的露出提示。', 'Use a fixed grid span or fixed width and leave the next card partially visible as a scroll cue.']
    , ['间距归属', 'Spacing ownership'], ['统一继承页面的 margin 与 gutter，图片组件内部不重复增加外间距。', 'Inherit page margins and gutters consistently; do not add duplicate outer spacing inside the image component.']
    , ['Figma 里原名 Component 71，本站规范化命名为 Attributes（规格属性）。', 'Originally named Component 71 in Figma; standardized here as Attributes.']
    , ['个变体已从 Figma 拉取 (100%)', 'variants imported from Figma (100%)']
    , ['6 分组', '6 groups'], ['18 家族', '18 families'], ['105 图标', '105 icons']
    , ['亮点标签', 'Highlight Badges'], ['履约库存', 'Fulfillment & Stock'], ['价格营销', 'Pricing & Promotion'], ['属性辅助', 'Attributes & Utilities']
    , ['匹配的图标。试试', 'matching icons. Try']
    , ['-可用的相对路径。禁止手绘 icon 二次修改，改动请在 Figma 源文件里更新后重新导出。', '-ready relative path. Do not redraw or edit icons manually; update the Figma source and export again.']
    , ['拼三角）作为图标使用。', 'borders to draw triangles) as icons.']
    , ['视觉一致', 'Visual consistency']
    , ['产品亮点、AI 推荐、饮食标识、心愿标签 — 4 家族 · 22 图标。', 'Product highlights, AI recommendations, dietary labels, and wishlist badges — 4 families · 22 icons.']
    , ['加购按钮全状态 · 直接与用户手指对话。1 家族 · 11 图标。', 'Every add-to-cart button state for direct touch interaction. 1 family · 11 icons.']
    , ['物流承诺、卖家类型、库存状态。3 家族 · 6 图标。', 'Delivery promises, seller types, and stock states. 3 families · 6 icons.']
    , ['价格主行、副行、总促、单个促销活动、Plus 会员价 · 5 家族 · 48 图标。', 'Primary and secondary prices, order-level and item promotions, and Plus pricing · 5 families · 48 icons.']
    , ['颜色球、能效标、评分、标题、原始属性、图片容器 · 6 家族 · 21 图标。', 'Color swatches, energy labels, ratings, titles, raw attributes, and image containers · 6 families · 21 icons.']
    , ['7 枚 Figma 商品亮点 · Sponsored / Best Before / New&Hot / Top Deal / Private Label / New / Too Good To Waste。', 'Seven Figma product highlights: Sponsored, Best Before, New&Hot, Top Deal, Private Label, New, and Too Good To Waste.']
    , ['2 变体', '2 variants'], ['8 变体', '8 variants'], ['10 变体', '10 variants'], ['13 变体', '13 variants']
    , ['AI 推荐理由标签 · 与产品亮点二选一，同一张商卡不并存。', 'AI recommendation reason badge; mutually exclusive with product highlights on the same card.']
    , ['食品类目的饮食属性标识 · 素食/清真/无麸质 · 冷冻/有机等。', 'Dietary labels for food, including vegetarian, halal, gluten-free, frozen, and organic.']
    , ['收藏/心愿标签 · 3 态 · 未收藏 / 已收藏 / 加载中。', 'Wishlist badge with three states: not saved, saved, and loading.']
    , ['履约时间提示 · 分自营与 POP 两种卡车图标。', 'Fulfillment timing with separate truck icons for first-party and marketplace sellers.']
    , ['卖家标识前置图标 · Joybuy 自营 vs POP 第三方。', 'Leading seller icon distinguishing Joybuy first-party from third-party marketplace sellers.']
    , ['库存状态标签 · 低库存红色警示 / 脱销灰底遮罩。', 'Stock-state labels: red warning for low stock and a gray overlay for sold out.']
    , ['Figma Price 全 10 个变体 · Range / Starting price / Sale-Save / Sale-percent / Bought separately / Default。', 'All 10 Figma Price variants: Range, Starting price, Sale-Save, Sale-percent, Bought separately, and Default.']
    , ['价格辅助副行 · RRP / Was / PPR 折扣 · 分横向与竖向两套。', 'Secondary price rows for RRP, Was, and PPR discount in horizontal and vertical layouts.']
    , ['Plus 会员专享价 · 与总促搭配的 3 种版式。', 'Three Plus member-price layouts paired with order-level promotions.']
    , ['整卡叠加的总促标签 · 满减 / N 件 M 折 / 买赠 / 积分 / 虚拟礼包 5 类。', 'Card-level promotion labels for threshold discounts, multibuy, gifts, points, and virtual bundles.']
    , ['单个营销活动标 · 快闪 / 限时 / 新品 / 首发 / 早鸟 / 清仓 / 价格保护 13 变体。', 'Thirteen item-promotion variants including flash, limited-time, new, launch, early-bird, clearance, and price protection.']
    , ['商品可选颜色球组合 · 默认 / +99 更多 / +1 更多 / 脱销 4 变体。', 'Product color swatches with default, +99 more, +1 more, and sold-out variants.']
    , ['能效等级标 · 默认 / 长文字 / 2 型 / 4 型 4 变体。', 'Energy-efficiency labels in default, long-text, type-2, and type-4 variants.']
    , ['评分、销量、浏览量 · 拆星单元 star 独立使用。', 'Ratings, sales, and views; use the standalone star unit.']
    , ['标题占位骨架图 · 1/2/3 行 · 用在骨架屏和 anatomy schematic。', 'One-, two-, and three-line title placeholders for skeletons and anatomy schematics.']
    , ['通用属性组件 · 复合列表变体两种。', 'General attribute component with two compound-list variants.']
    , ['已复制', 'Copied']
    , ['颜色', 'Color'], ['字体', 'Typography'], ['圆角', 'Radius'], ['阴影', 'Shadow'], ['布局', 'Layout']
    , ['。 原子组件和商卡都只消费 tokens，不再定义原始色值。点击任意色块可以复制变量名到剪贴板。', '. Atomic components and product cards consume tokens only and never redefine raw values. Click any swatch to copy its variable name.']
    , ['主按钮 · 活跃 chip · 价格强调', 'Primary buttons · Active chips · Price emphasis']
    , ['红色 tint 背景 · badge 底', 'Red tint surfaces · Badge backgrounds']
    , ['红色 tint 描边', 'Red tint outlines']
    , ['品牌名 · 价格 · 强调正文', 'Brand names · Prices · Emphasized copy']
    , ['标题正文 · 常规正文', 'Titles · Body copy']
    , ['次要文字 · icon 灰', 'Secondary text · Muted icons']
    , ['卡片边框 · 表格分隔', 'Card borders · Table dividers']
    , ['hover 边框 · 分隔线加重', 'Hover borders · Strong dividers']
    , ['虚线骨架 · 极淡分隔', 'Dashed skeletons · Subtle dividers']
    , ['页面底色', 'Page background'], ['卡片/表格/输入面', 'Cards / Tables / Inputs']
    , ['交替行 · 灰底 chip', 'Alternating rows · Gray chips'], ['骨架屏 · 图片占位', 'Skeletons · Image placeholders']
    , ['成功状态 · DO 卡片强调', 'Success states · DO-card emphasis'], ['警告 · 库存告急', 'Warnings · Low stock']
    , ['信息提示 · 链接 hover', 'Information · Link hover'], ['数据契约 · 元信息', 'Data contracts · Metadata']
    , ['键盘焦点环。 阴影颜色使用低透明度黑而非深灰，与 TDesign React 保持一致。', 'keyboard focus ring. Shadows use low-opacity black rather than dark gray, consistent with TDesign React.']
    , ['卡片 hover · 双列表格 hover', 'Card hover · Two-column table hover']
    , ['下拉菜单 · 弹层 · 模态', 'Dropdowns · Popovers · Modals']
    , ['键盘 focus ring · 红色 15% 光晕', 'Keyboard focus ring · 15% red glow']
    , ['组件级 gap · 常见数值', 'Component gaps · Common values']
    , ['卡内槽位 · 徽章内边距', 'Card slots · Badge padding'], ['chip 之间 · 图标+文字', 'Between chips · Icon + text']
    , ['卡片内 padding · 水平卡图文间距', 'Card padding · Horizontal image/content gap']
    , ['卡片之间 · anatomy 网格 gap', 'Between cards · Anatomy grid gap']
    , ['面板 padding · section 内头间距', 'Panel padding · Section header spacing']
    , ['Anatomy grid vs schematic 主间距', 'Primary gap between anatomy grid and schematic']
    , ['Section 之间 · 页面内左右 padding', 'Between sections · Page horizontal padding']
    , ['Section 上下留白', 'Section vertical spacing']
    , ['2 家族', '2 families'], ['10 阶梯', '10 steps'], ['4 字重', '4 weights']
    , ['字体族', 'Font Families'], ['字号阶梯', 'Type Scale'], ['字重', 'Font Weight'], ['行距', 'Line Height'], ['应用', 'Application']
    , ['只用在价格、代码、SKU 编号这类需要等宽/数字对齐的场合。 禁用衬线体和斜体—任何斜体只会出现在被划掉的 RRP 中，是删除线的视觉附属，而不是"强调"手法。', 'is reserved for prices, code, and SKU numbers that need monospaced alignment. Serif and italic styles are prohibited; any slant in a struck-through RRP is incidental, not emphasis.']
    , ['10 阶', '10 steps'], ['4 档', '4 levels'], ['禁用斜体', 'No italics']
    , ['32 / 22 / 20 / 18 / 15 / 14 / 13 / 12 / 11 / 10 px — 商卡里只用 10~20px。', '32 / 22 / 20 / 18 / 15 / 14 / 13 / 12 / 11 / 10 px — product cards use only 10–20 px.']
    , ['400 / 500 / 700 / 900，跳过 600 保持层次拉开。', '400 / 500 / 700 / 900; skip 600 to maintain clear hierarchy.']
    , ['保留划线体（RRP）之外，不做任何强调型的 italic。', 'Do not use italic emphasis; only struck-through RRP may appear slanted.']
    , ['，加载零成本。默认走中文系统字体，苹方、汉仪都会命中。', ', with no font-loading cost. Chinese defaults to the system font stack, including PingFang and Hanyi.']
    , ['京东全球售 Joybuy', 'Joybuy Global Shopping'], ['图像置左、内容右侧堆叠的商品卡片。The quick brown fox.', 'A product card with imagery on the left and stacked content on the right. The quick brown fox.']
    , ['用户在快速浏览、比价（首页 / 类目页 / 搜索结果）', 'Users scan and compare quickly on Home, category, and search-result pages.']
    , ['Joybuy 商卡设计系统', 'Joybuy Product Card Design System'], ['Mini 商卡里的标题使用 12/500，2 line clamp。', 'Mini-card titles use 12/500 with a two-line clamp.']
    , ['Aa 甲', 'Aa'], ['正文长段落。商卡里几乎不用，页面级说明才出现。', 'Long-form body copy, used for page-level guidance rather than product cards.']
    , ['商卡里默认的标题、副文本、促销文案的字重。', 'Default weight for product-card titles, supporting text, and promotion copy.']
    , ['品牌名 · 页面标题 · rating 数字 · 章节标题。', 'Brand names · Page titles · Rating values · Section headings.']
    , ['只给价格数字。绝不用在其他任何 UI 文本上。', 'Reserved for price numerals; never use it for other UI text.']
    , ['价格 · 展示标题', 'Prices · Display headings'], ['卡片标题 · 章节小标', 'Card titles · Section labels']
    , ['规则说明 · 表格单元', 'Rule guidance · Table cells'], ['保证等宽对齐。', 'to guarantee tabular alignment.']
    , ['文档段落 · 页面正文', 'Documentation paragraphs · Page body copy']
    , ['这里收纳 Joybuy 站内所有商品卡片：从最小原子（价格、图片、按钮）一路往上， 到楼层与页面里被组装的商卡实例。目标是让设计师、产品、工程师在同一份规范上对齐，减少沟通与走查成本。', 'This system covers every Joybuy product card, from atomic prices, images, and buttons to assembled section and page patterns. It gives design, product, and engineering one shared specification.']
    , ['商卡顶部品牌行 · 强化认知，字重最亮眼。', 'Top brand row that strengthens recognition with the strongest text weight.']
    , ['2 line clamp，超出省略。中英文混排时依赖 line-height 18px 稳态。', 'Two-line clamp with ellipsis; an 18 px line height keeps mixed Chinese and English stable.']
    , ['Mono 家族 + 900 字重 + tabular-nums · 与旁边的 RRP 划线灰字并排。', 'Mono family + 900 weight + tabular figures, aligned with a gray struck-through RRP.']
    , ['仅红色文本，禁止用背景色块——避免和 highlight SVG 抢戏。', 'Use red text only, never a filled background, so it does not compete with highlight SVGs.']
    , ['灰字 · 数字仍走 tabular-nums · 与图标组合展示。', 'Gray text with tabular figures, displayed alongside an icon.']
    , ['文档页顶部小标签 · Mono 家族 · 大字距 · 全大写。', 'Small documentation eyebrow using Mono, wide letter spacing, and uppercase.']
    , ['Component ⇄ Style 索引', 'Component ⇄ Style Index']
    , ['下表对应「[[reference_card_structure_type]]」结构里各个商卡槽位使用的排版规格，方便按图索骥。', 'The table maps each slot in [[reference_card_structure_type]] to its typography specification for quick reference.']
    , ['商卡槽位', 'Product-card slot'], ['字号 / 字重 / 行距', 'Size / Weight / Line height']
    , ['+ 黑', '+ Black']

    /* Shared specification tables, anatomy labels, and mixed code fragments. */
    , ['类型 · 示例', 'Type · Example'], ['槽位', 'Slot'], ['必需', 'Required']
    , ['SKU 图库', 'SKU image library'], ['骨架图', 'Skeleton placeholder'], ['必填 · 骨架图占位', 'Required · Use a skeleton placeholder']
    , ['用户评价', 'User reviews'], ['定价服务', 'Pricing service'], ['物流服务', 'Fulfillment service'], ['库存服务', 'Inventory service']
    , ['前端路由', 'Frontend routing'], ['后端', 'Backend'], ['后端状态', 'Backend state'], ['后端订单/活动服务', 'Backend order / campaign service']
    , ['楼层配置', 'Section configuration'], ['品牌 CMS', 'Brand CMS'], ['类目服务', 'Category service'], ['活动配置', 'Campaign configuration']
    , ['货币符号 i18n', 'Localized currency symbol'], ['数字复用，unit i18n', 'Reuse the value; localize the unit']
    , ['enum key，标签图跟 Figma SVG', 'Enum key mapped to its Figma SVG badge'], ['enum key 或文本 i18n', 'Enum key or localized text']
    , ['枚举 key', 'Enum key'], ['必填 · 点击目标', 'Required · Click destination']
    , ['空则整行不渲染', 'Hide the entire row when empty'], ['空则不渲染徽标', 'Hide the badge when empty']
    , ['默认 sale', 'Default: sale'], ['不渲染整卡', 'Do not render the card'], ['副标行折叠', 'Collapse the subtitle row']
    , ['倒计时不渲染', 'Hide the countdown'], ['CTA 按钮不渲染', 'Hide the CTA button'], ['按钮不可点', 'Disable the button']
    , ['底部链接折叠', 'Collapse the footer link'], ['不渲染 dots', 'Hide the dots'], ['不渲染 end-sentinel', 'Hide the end sentinel']
    , ['header 整块折叠', 'Collapse the entire header'], ['more 链接与 end-sentinel 都不显示', 'Hide both the more link and end sentinel']
    , ['非 brand 主题下忽略', 'Ignore outside the brand theme'], ['非 category 主题下忽略', 'Ignore outside the category theme']
    , ['· category 主题必填', '· Required for the category theme'], ['themed 主题下推荐配', 'Recommended for the themed variant']
    , ['< 3 项建议改用单张 Vertical Card', 'Use individual Vertical Cards for fewer than three items']
    , ['Product 内含 en / zh', 'Product contains en / zh'], ['SKU 目录（复用', 'SKU catalog (shared with']
    , ['Label 空则按钮不渲染 · Href 空则按钮不可点', 'Hide the button when Label is empty; disable it when Href is empty']
    , ['2-4 张 Product · 少于 2 张时整个 strip 退化，只留 banner', '2–4 Products; with fewer than two, collapse the strip and keep only the banner']
    , ['11/400 灰字 · 空则底部行折叠', '11/400 gray text; collapse the footer row when empty']
    , ['< 2 张时 strip 退化为 banner', 'With fewer than two items, reduce the strip to a banner']
    , ['enum → Figma SVG 标签，缺失整行不渲染', 'Enum → Figma SVG badge; hide the row when missing']
    , ['Rating & Sold 原子 · 星形 SVG + tabular-nums', 'Rating & Sold atom · Star SVG + tabular figures']
    , ['Rating & Sold 原子 · 星形 10px · 空格分隔无 vertical rule', 'Rating & Sold atom · 10 px star · Spaced without a vertical rule']
    , ['红字营销标 · 空则整行折叠', 'Red promotion text; collapse the row when empty']
    , ['salePrice 必填', 'salePrice is required']
    , ['18/900 售价 · 下一行 RRP 划线灰字', '18/900 sale price · Struck-through gray RRP on the next line']
    , ['15/900 售价 · RRP 划线灰字同行 baseline · 缺 RRP 只显售价', '15/900 sale price · Struck-through gray RRP on the same baseline; show only the sale price when absent']
    , ['10/500 灰字 · 前置 12px 卡车图标 · 空则整行折叠', '10/500 gray text · Leading 12 px truck icon · Collapse the row when empty']
    , ['灰字履约信息 · 前置 Figma 卡车图标 · 高度对齐', 'Gray fulfillment text · Leading Figma truck icon · Vertically aligned']
    , ['灰字 · 尾部椭圆截断 · 右侧固定 28×28 加购按钮', 'Gray text · End ellipsis · Fixed 28×28 add-to-cart button on the right']
    , ['24×24 绝对定位 body 右上 · 与图像顶部对齐', '24×24, absolutely positioned at the body top-right and aligned with the image']
    , ['salePrice 必填 · originalPrice 空则不渲染 RRP 行', 'salePrice is required; hide the RRP row when originalPrice is empty']
    , ['salePrice 必填 · originalPrice 空则不渲染划线', 'salePrice is required; hide the struck-through price when originalPrice is empty']
    , ['Soon/Live/Auction 必显 · Ended 隐藏 · 等分格黑底白字 · JS 每秒滚动', 'Required for Soon/Live/Auction; hidden for Ended · Equal black cells with white text · Updated every second in JS']
    , ['红底 tint 小 chip · 仅预售场景显示 · 空整行隐藏', 'Small red-tint chip · Presale only · Hide the row when empty']
    , ['数字加粗 · 千分位 · <100 时隐藏（社交证明太弱）', 'Bold tabular count · Hide below 100 because the social proof is too weak']
    , ['必填 · 派生 ribbon + chip + CTA + 颜色', 'Required · Derives ribbon, chip, CTA, and color']
    , ['soon 状态用（距开抢）', 'Used in soon state (time until launch)']
    , ['live / auction 状态用（距结束）· ended 状态隐藏', 'Used in live / auction states (time remaining); hidden when ended']
    , ['定价 / 拍卖服务', 'Pricing / auction service'], ['必填 · Auction 每 30s 拉取一次', 'Required · Refresh every 30 seconds for Auction']
    , ['空则不显示 deposit 行', 'Hide the deposit row when empty'], ['拍卖服务', 'Auction service'], ['仅 auction 状态用', 'Auction state only']
    , ['< 100 或空则隐藏（社交证明太弱）', 'Hide when empty or below 100 because the social proof is too weak']
    , ['前端 state 映射', 'Frontend state mapping'], ['必填 · 结束态换 ghost 按钮', 'Required · Use a ghost button for the ended state']
    , ['倒计时 label', 'Countdown label'], ['CTA 默认', 'Default CTA'], ['颜色主调', 'Primary color']
    , ['距开抢', 'Starts in'], ['灰 ·', 'Gray ·'], ['距结束', 'Ends in'], ['红 ·', 'Red ·'], ['下一档降价', 'Next price drop'], ['紫 ·', 'Purple ·']
    , ['· 隐藏水平滚动条', '· Hide the horizontal scrollbar']
    , ['146px 宽 · aspect 1:1 图 · 4 字段栈：hi / title / price · 至少 3 张', '146 px wide · 1:1 image · Four-field stack: hi / title / price · At least 3 cards']
    , ['移动端可开 · 短横条 20px active · 桌面通常关', 'Optional on mobile · 20 px active bar · Usually disabled on desktop']
    , ['activity 场景开 ·', 'Enable for activity scenarios ·']
    , ['底', 'background'], ['11/900 红色居中 · 品牌入口场景空则不渲染整行', '11/900 centered red text · Hide the row for brand-entry scenarios when empty']
    , ['10/400 灰字一行截断 · 品牌名或活动名 · 空则不渲染', '10/400 gray single-line truncation · Brand or campaign name · Hide when empty']
    , ['时不渲染', 'when absent'], ['· dim + SOLD OUT 遮罩', '· Dim + SOLD OUT overlay']
    , ['空则整行不渲染（品牌入口模式）', 'Hide the row when empty in brand-entry mode'], ['brand 或运营 CMS', 'Brand or operations CMS']
    , ['时不渲染 ribbon', 'when absent, hide the ribbon'], ['true 时加 dim + SOLD OUT 遮罩', 'When true, apply dim + SOLD OUT overlay']
    , ['1:1 比例，缺失时显示灰底占位', '1:1 ratio; show a gray placeholder when missing']
    , ['仅 3C / 大家电展示；>5 个色时收', 'Show for electronics / major appliances only; collapse after 5 colors']
    , ['粗体黑字，>12 字省略', 'Bold black text; truncate after 12 characters'], ['2 行截断，第 3 行', 'Clamp to two lines; the third line']
    , ['销量 <100 时隐藏', 'Hide sales below 100'], ['），置于价格上方；空值整行折叠', '), placed above price; collapse the row when empty']
    , ['是 / 否 / 否', 'Yes / No / No'], ['否 / 否', 'No / No'], ['否 / 是', 'No / Yes']
    , ['前缀，折扣标独立行', 'prefix; place the discount badge on its own row'], ['）；空则整行折叠', '); collapse the row when empty']
    , ['灰字履约信息，前置 Figma 卡车图标', 'Gray fulfillment text with a leading Figma truck icon'], ['，售罄时置灰', '; mute when sold out']
    , ['用', 'Use'], ['<10 条评价时不渲染', 'Hide below 10 reviews'], ['<100 时不渲染', 'Hide below 100']

    /* Product-card headings, anatomy descriptions, and placement titles. */
    , ['8 槽位', '8 slots'], ['7 槽位', '7 slots'], ['6 槽位', '6 slots'], ['4-5 槽位', '4–5 slots'], ['4 状态变体', '4 state variants']
    , ['预售 / 秒杀 / 荷兰拍 / 结束', 'Presale / Flash sale / Dutch auction / Ended']
    , ['购物车 / 收藏 / 订单 / 搜索建议', 'Cart / Wishlist / Orders / Search suggestions']
    , ['最近浏览 / 下单确认 / 直播侧边', 'Recently viewed / Order confirmation / Live sidebar']
    , ['首页横滑 / PDP 推荐 / 品牌日', 'Home carousel / PDP recommendations / Brand day']
    , ['首页大促 / 频道页头部 / 品牌日', 'Home campaign / Channel header / Brand day']
    , ['品牌入口 / 频道快捷 / 直播清单 / 店铺装修', 'Brand entry / Channel shortcut / Live list / Store decoration']
    , ['Sale 大促', 'Sale'], ['Brand 品牌日', 'Brand Day'], ['Seasonal 季节', 'Seasonal'], ['Urgency 闪购', 'Urgency']
    , ['· 7 变体', '· 7 variants'], ['· 6 变体', '· 6 variants'], ['· 4 变体', '· 4 variants'], ['· 3 变体', '· 3 variants']
    , ['· 2 行 clamp 13/500', '· Two-line clamp at 13/500'], ['· 单行 14/700', '· Single line at 14/700'], ['· ★ + 已售', '· ★ + sold count'], ['· 卡车 + 灰字', '· Truck + gray text']
    , ['· 12px 高', '· 12 px high'], ['· 无分隔线 · 一行', '· No divider · One line'], ['浮在 body 右上', 'Floats at the body top-right']
    , ['主题背景', 'Theme background'], ['高 60~90px · 4 种主题渐变 · 承载所有 slogan 文字', '60–90 px high · Four theme gradients · Contains all slogan copy']
    , ['活动名 · 白色（或深棕，见主题） · 必填，缺失整卡不渲染', 'Campaign name · White (or dark brown by theme) · Required; do not render the card when missing']
    , ['· endsAt 空则整块不渲染', '· Hide the block when endsAt is empty'], ['白色 pill · 反色文字 · ctaLabel 空则按钮不渲染', 'White pill · Contrasting text · Hide the button when ctaLabel is empty']
    , ['grid 等宽 · 每 tile = 1:1 图 + 售价 · < 2 张时整个 strip 退化为纯 banner', 'Equal-width grid · Each tile has a 1:1 image + price · With fewer than two, reduce the strip to a banner']
    , ['11/400 灰字 · 可跳落地页 · 空则底部行折叠', '11/400 gray text · Links to the landing page · Collapse the footer row when empty']
    , ['首页大促楼层', 'Home campaign section'], ['频道页头部', 'Channel-page header'], ['品牌日头部', 'Brand-day header'], ['荷兰拍活动入口', 'Dutch-auction campaign entry']
    , ['首页顶部品牌馆入口', 'Brand-hall entry at the top of Home'], ['频道页顶部 6 icon 组', 'Six-icon group at the top of a channel']
    , ['直播间商品清单侧边', 'Live product-list sidebar'], ['店铺装修 icon 网格', 'Store-decoration icon grid']
    , ['首页"猜你喜欢"横滑', 'Home “You may also like” carousel'], ['品牌日聚合入口', 'Brand-day collection entry']
    , ['PDP "买过的人还看了"', 'PDP “Customers also viewed”'], ['类目页 top hot list', 'Top hot list on category pages']
    , ['搜索联想（带图）· Rich Search', 'Visual search suggestions · Rich Search']
    , ['新品发布日预约', 'New-product launch reservation'], ['限时秒杀楼层', 'Limited-time flash-sale section']
    , ['荷兰拍卖场', 'Dutch auction'], ['抢购 / 秒杀池归档', 'Drop / flash-sale archive']
    , ['已结束的场次归档。', 'Archive of ended events.']
    , ['7 张商卡 · MVP3 全量上线 ·', '7 product cards · Fully launched in MVP3 ·']

    /* When-to-use guidance. */
    , ['商品有明确开售 / 结束时间点', 'The product has a defined launch or end time']
    , ['用户需要提前"注册"或参与竞价', 'Users need to register in advance or join bidding']
    , ['倒计时是核心决策信号', 'The countdown is a primary decision signal']
    , ['需要展示预约 / 参与人数作为社交证明', 'Reservation or participant counts provide meaningful social proof']
    , ['状态在 4 个之间切换（', 'State switches among four values (']
    , ['商品常态在售', 'The product is continuously available'], ['无倒计时紧迫感', 'No countdown urgency']
    , ['用户可以随时下单', 'Users can order at any time'], ['更看重品牌 · 卖家 · 履约状态', 'Brand, seller, and fulfillment details matter more']
    , ['促销靠 highlight / promotion 表达（不锁时间）', 'Promotions use highlight / promotion without time locking']
    , ['值', 'value'], ['预售场景才显示 deposit 行 · 秒杀 / 拍卖 / 结束隐藏', 'Show the deposit row only for presale; hide it for flash sale, auction, and ended states']
    , ['reservedCount < 100 直接隐藏 · 别显示"已有 3 人预约"这类反社交证明', 'Hide reservedCount below 100; weak counts such as “3 reserved” create negative social proof']
    , ['倒计时精度到秒 · JS 层做客户端滚动 · 不要 fetch 更新', 'Update countdowns to the second on the client; do not fetch every tick']
    , ['荷兰拍必配"下一档 £YYY"提示 · 让用户知道降价节奏', 'Dutch auctions must show the next £YYY tier so users understand the price-drop cadence']
    , ['别在普通推荐位塞 Booking · 会造成"处处都是秒杀"的通胀', 'Do not use Booking in ordinary recommendations; constant urgency dilutes the pattern']
    , ['派生', 'derive'], ['别为 Ended 状态保留 CTA 主色 · 一律 ghost + dim', 'Never keep the primary CTA color for Ended; always use ghost + dim']
    , ['别让倒计时到 0 后卡片还挂在楼层 · 应立刻切', 'Do not leave a card in the section after its countdown reaches zero; switch it immediately']
    , ['别在 Auction 卡里显示 originalPrice 划线价 · 拍卖没有 RRP 概念', 'Do not show a struck-through originalPrice on Auction cards; auctions have no RRP concept']
    , ['有明确活动主题（618、Diptyque 品牌日、黑五闪购）', 'There is a clear campaign theme, such as 618, Diptyque Brand Day, or Black Friday']
    , ['需要曝光 2-4 个精选 SKU 同时激发点击', 'Two to four curated SKUs need exposure and click-through']
    , ['有明显时限，倒计时能驱动紧迫感', 'A clear time limit lets the countdown create urgency']
    , ['主题色和选品有强关联（品牌色、季节色）', 'Theme color strongly relates to the products, brand, or season']
    , ['用户从首页 / 频道页向落地页跳转的漏斗入口', 'The card is a funnel entry from Home or a channel page to a landing page']
    , ['或横滑陈列，无活动主题', 'or horizontal product display without a campaign theme']
    , ['无倒计时、无时间限制', 'No countdown or time limit'], ['主题色与商品无关，纯商品导购', 'Theme color is unrelated to the products in a standard shopping flow']
    , ['商品数量 > 4 张，campaign strip 装不下', 'More than four products will not fit in the campaign strip']
    , ['需要展示品牌 / 卖家 / 履约详情', 'Brand, seller, or fulfillment details need to be shown']
    , ['主题色要能一眼识别活动性质（红=大促 / 品牌色=品牌日 / 深黑=限时）', 'Theme color must identify the campaign at a glance: red for major sale, brand color for Brand Day, dark for urgency']
    , ['，别写"永远倒计时"耍流氓', '; never use a fake perpetual countdown']
    , ['Product strip 至少 2 张，最多 4 张 · 少于 2 张退化为纯 banner', 'Use 2–4 cards in the product strip; below two, reduce it to a banner']
    , ['Brand Day 用品牌色时，CTA 反色确保可读性', 'When Brand Day uses a brand color, use a contrasting CTA for readability']
    , ['别把 Campaign 卡当普通商品陈列用 · 主题空的活动卡是视觉噪音', 'Do not use Campaign Card as a standard product display; a themeless campaign card is visual noise']
    , ['别在 product strip 里塞 5+ 张 · 图变得比手指还小', 'Do not place five or more cards in the product strip; the images become smaller than a finger target']
    , ['别让 subtitle 变成第二个 title · 副标只承载价值主张', 'Do not turn the subtitle into a second title; use it only for the value proposition']
    , ['别把倒计时结束的卡还留在首屏 · 归零后应该被下线或换新活动', 'Do not keep an expired card above the fold; remove or replace it when the countdown ends']
    , ['列表长度可预期（购物车 20+ 件 / 订单页 8 条内）', 'List length is predictable: 20+ cart items or up to 8 order items']
    , ['用户会逐条操作（改数量、删除、再购、评价）', 'Users act on items one by one: change quantity, delete, reorder, or review']
    , ['需要看清品牌 · 卖家 · 履约这类完整信息', 'Users need complete brand, seller, and fulfillment details']
    , ['屏幕宽度不够 2 列并排（< 360px 视口）', 'The viewport is too narrow for two columns (< 360 px)']
    , ['信息主导 > 视觉冲击', 'Information density matters more than visual impact']
    , ['图像本身是决策依据（美妆、时尚、家居）', 'Imagery is a key decision factor, such as in beauty, fashion, or home']
    , ['需要单屏容纳更多 SKU（> 4 张/屏）', 'More SKUs must fit on one screen (> 4 cards)']
    , ['列表可以横向流动 · 横滑楼层', 'The list can flow horizontally in a carousel section']
    , ['视觉冲击 > 一次信息全', 'Visual impact matters more than showing every detail at once']
    , ['购物车、收藏夹、订单列表统一用横向卡', 'Use horizontal cards consistently for cart, wishlist, and order lists']
    , ['横向卡在同一页面保持宽度一致，商品图片统一使用 130×130 规格', 'Keep horizontal cards the same width on a page and use the 130×130 product-image specification consistently']
    , ['Compact 变体只在搜索联想 / 快速跳转里出现', 'Use the Compact variant only for search suggestions or quick navigation']
    , ['别在首页信息流里穿插横向卡 · 打乱双列节奏', 'Do not mix horizontal cards into the Home feed; it breaks the two-column rhythm']
    , ['）· 图像已经很小，看不清', '); the image is already too small to read']
    , ['别把 8 个槽位全塞满 · 至少留 1 个空行给视觉呼吸', 'Do not fill all eight slots; leave at least one row empty for breathing room']
    , ['推荐/补充位，用户主任务在别处', 'A recommendation or supporting surface where the main task is elsewhere']
    , ['行高受限 < 96px（首页头部条、直播侧边栏）', 'Row height is constrained below 96 px, such as a Home header strip or live sidebar']
    , ['横向滚动条里排布 3-5 张', 'Arrange 3–5 cards in a horizontal scroller']
    , ['只需要"看图 + 名字 + 价格 + 加购"', 'Only image, name, price, and add-to-cart are needed']
    , ['视觉不能盖过主内容', 'The card must not overpower the main content']
    , ['列表本身就是主内容（购物车 / 订单 / 收藏）', 'The list itself is the primary content, such as cart, orders, or wishlist']
    , ['用户需要看清品牌 · 卖家 · 履约状态', 'Users need clear brand, seller, and fulfillment status']
    , ['每张卡都要能进行改数量、删除等操作', 'Every card needs quantity, delete, or similar actions']
    , ['宽度充足 > 320px 且行高允许 > 100px', 'Width exceeds 320 px and row height can exceed 100 px']
    , ['Mini 用在补充推荐位、下单/直播这类"次任务" surface', 'Use Mini for supporting recommendation surfaces and secondary tasks such as checkout or live shopping']
    , ['把 brand 融入 title 前缀（"Diptyque Baies Candle 190g"）', 'Fold the brand into the title prefix, for example “Diptyque Baies Candle 190g”']
    , ['Scroller 变体给出足够对比 · 至少 3 张，最多 6 张', 'Give the Scroller variant enough contrast; use 3–6 cards']
    , ['别在购物车主列表用 Mini · 用户看不清品牌卖家', 'Do not use Mini in the main cart list; brand and seller are not clear enough']
    , ['别把 highlight + promotion 都塞进 Mini · body 空间不够', 'Do not place both highlight and promotion in Mini; the body lacks space']
    , ['别把 Mini 图像放大到 130px · 达到这一规格就该用横向卡了', 'Do not enlarge Mini imagery to 130 px; switch to a horizontal card at that size']
    , ['一屏想曝光 6+ 商品但只有 1 行空间', 'Six or more products need exposure in a single-row space']
    , ['需要引导用户"往右还有"的探索欲', 'The design should invite users to discover more to the right']
    , ['商品之间关联度中等（同类目、同品牌、同活动）', 'Products have a moderate relationship through category, brand, or campaign']
    , ['楼层是"逛"入口，不是主购物流', 'The section is for discovery rather than the primary shopping flow']
    , ['移动端优先（触控左右滑最舒服）', 'Mobile-first, where horizontal touch scrolling feels natural']
    , ['商品数量少（< 3 张就没必要横滑）', 'There are too few products; fewer than three do not justify a carousel']
    , ['用户会仔细比较每张（首页信息流双列、搜索结果）', 'Users will compare each item carefully in a two-column feed or search results']
    , ['手指主要在纵向滚（列表是主任务）', 'The primary gesture is vertical scrolling because the list is the main task']
    , ['需要每张显示品牌 / 评分 / 加购完整信息', 'Every card needs complete brand, rating, and add-to-cart information']
    , ['桌面端为主（横滑手势体验差）', 'Desktop is primary, where horizontal gestures are less natural']
    , ['tile 与商品图片统一锁定 146px · 全局一致以便用户形成滑动节奏预期', 'Lock both the tile and product image to 146 px site-wide to create a predictable scrolling rhythm']
    , ['至少 3 张 tile · 少于 3 张改用单张 Vertical Card', 'Use at least three tiles; switch to individual Vertical Cards below three']
    , ['title 与 items 关联度要清晰："猜你喜欢"要真的相关，别放随机商品', 'Keep title and items clearly related; “You may also like” must not contain random products']
    , ['brand hero 主题的 hero 卡永远第一位 · 视觉重心从左到右', 'Keep the hero card first in a brand-hero theme so visual emphasis flows left to right']
    , ['别在横滑里放超过 8 张 · 用户不会滑那么远，改用"进入类目"', 'Do not exceed eight carousel cards; use a category entry instead']
    , ['别把 tile 放大到 > 160px · 那就该改用双列 Vertical Card 网格', 'Do not enlarge tiles beyond 160 px; use a two-column Vertical Card grid instead']
    , ['别在同一屏堆多个横滑楼层 · 竖向滚会与横滑手势冲突', 'Do not stack multiple carousels in one viewport; horizontal and vertical gestures will conflict']
    , ['别在决策深页（购物车、订单确认）用横滑 · 用户要看清每一张', 'Do not use carousels on deep decision pages such as cart or order confirmation']
    , ['一屏想曝光 6+ 商品或品牌入口', 'Six or more products or brand entries need exposure in one viewport']
    , ['每张 tile 只引导点击，不需用户决策', 'Each tile only needs to drive a click, not a decision']
    , ['空间极受限（顶部条 < 100 px、侧边栏 < 260 px）', 'Space is extremely constrained: top strip < 100 px or sidebar < 260 px']
    , ['商品之间关联度弱（不同品牌 / 类目）', 'Products are loosely related across brands or categories']
    , ['视觉侧重"密度 · 一览" > 单卡信息量', 'At-a-glance density matters more than per-card detail']
    , ['用户要在卡内做决策（比较价格、评价、履约）', 'Users need to decide within the card by comparing price, rating, and fulfillment']
    , ['加购 / 收藏 / 改数量等操作在卡内完成', 'Add-to-cart, wishlist, and quantity actions happen within the card']
    , ['一屏 < 6 个商品，每张卡都是主内容', 'Fewer than six products fit on screen and every card is primary content']
    , ['需要展示标题 / 评价 / 履约 / 卖家等辅助字段', 'Supporting fields such as title, rating, fulfillment, and seller are required']
    , ['视觉侧重"决策 · 信息量" > 曝光密度', 'Decision support and information matter more than exposure density']
    , ['Small Dynamic 只用在"入口位"—— 品牌馆、快捷入口、直播清单', 'Use Small Dynamic only for entry points: brand halls, shortcuts, and live lists']
    , ['控制字段数量 · label + price 择一，或都要但 badge/ribbon 至多一个', 'Limit fields: choose label or price, or use both with at most one badge or ribbon']
    , ['脉冲动画拉住注意力，售罄立即切', 'pulse draws attention; switch immediately when sold out']
    , ['品牌入口场景直接省 price 字段，图像 padding 加大更透气', 'Omit price for brand entries and increase image padding for more breathing room']
    , ['别在购物车 / 订单主列表用 Small Dynamic · 信息不够用户改数量', 'Do not use Small Dynamic in cart or order lists; it lacks enough information for quantity changes']
    , ['别同时塞 badge + ribbon · tile 只有一个视觉焦点', 'Do not use both badge and ribbon; each tile gets one visual focus']
    , ['别把 tile 尺寸做到 100+ px · 那就该升 Mini 或 Vertical 了', 'Do not grow tiles beyond 100 px; switch to Mini or Vertical']
    , ['别用 title 完整名称塞进 label · 只放品牌名或活动名，一行必截', 'Do not put a full title in label; use only the brand or campaign name and always truncate to one line']

    /* Inline fragments split by preserved code, links, or component names. */
    , ['32 个原子 ·', '32 atoms ·']
    , ['没有找到与', 'No icons match'], ['。 点任意图标即可复制', '. Select any icon to copy its']
    , ['是"视觉一模一样"的底线—— 商卡里的每一个图标都必须来自这份目录， 不允许用 Unicode 字符（如 ★）或 CSS 手绘（如', 'is the baseline for pixel-perfect consistency. Every product-card icon must come from this catalog; never use Unicode characters such as ★ or hand-drawn CSS such as']
    , ['Tokens 是设计系统的基础层：颜色、字号、圆角、阴影、间距等都以 CSS 变量的形式落在', 'Tokens are the foundation of the design system. Colors, type sizes, radii, shadows, and spacing are defined as CSS variables in']
    , ['弹层浮起、', 'for elevated overlays, and']
    , ['承担全站正文与展示型文本，', 'handles body and display text across the site, while']
    , ['两个家族通过 CSS 变量分发，无需', 'Both families are distributed through CSS variables without']
    , ['）与已售件数（30k+）， 无衬线数字使用', ') and sold count (30k+); sans-serif numerals use']
    , ['驱动。 倒计时每秒钟真实滚动。', 'drives the card. The countdown updates every second.']
    , ['· 灰调 · 距开抢倒计时', '· Gray · Countdown to launch'], ['· 红调 · 距结束倒计时', '· Red · Countdown to end']
    , ['· 紫调 · 每分钟降价', '· Purple · Price drops every minute'], ['值，不允许人工分设。', 'value; never configure them separately.']
    , ['双重信号', 'Dual signal'], ['社交证明 · 灰字 11/400 · 数字加粗', 'Social proof · Gray 11/400 text · Bold count']
    , ['主 CTA · label 随 state 切换 · 结束态灰化', 'Primary CTA · Label follows state · Muted when ended']
    , ['枚举 + 由前端映射派生其他字段。', 'enum; derive all other fields from a frontend mapping.'], ['不允许', 'Not allowed']
    , ['状态。', 'state.'], ['· ribbon 红 · 倒计时红调脉动。 CTA 使用 Figma Notify Button。', '· Red ribbon and pulsing countdown. using the Figma Notify Button atom.']
    , ['· ribbon 紫 · 当前价随时间下滑 · 用户可锁定当前档位出价。', '· Purple ribbon; the current price drops over time and users can bid at the current tier.']
    , ['ribbon 与 state-chip 必须来自同一个', 'ribbon and state-chip must come from the same']
    , ['别把 ribbon 颜色写死 · 一定要', 'Do not hard-code ribbon colors; always']
    , ['。倒计时归零后 chip 变灰、显示"已结束"。', '. When the countdown reaches zero, the chip turns gray and shows “Ended”.']
    , ['banner-bg 是唯一的主题载体 · title/subtitle/countdown/cta 都吃 banner 的文字色。product-strip 白底常驻，不受主题影响——保证选品图不被主题色污染。', 'banner-bg is the sole theme surface. title, subtitle, countdown, and CTA inherit its text color. product-strip stays white so theme colors never contaminate product imagery.']
    , ['常规双列', 'Standard two-column cards'], ['倒计时必须真实指向', 'The countdown must use the real']
    , ['数据源，同一批商品可无缝在双列信息流 / 购物车列表 / 收藏夹之间流转。', 'data source, allowing the same products to move seamlessly between two-column feeds, cart lists, and wishlists.']
    , ['图像固定尺寸 · 内容区跟随可用宽度伸缩 · 至少留 12px padding。', 'Use a fixed image size and a flexible content area, with at least 12 px padding.']
    , ['图像使用', 'Image uses'], ['规格；内容区跟随可用宽度伸缩，卡片内至少留 12px padding。', 'specification; the content area follows available width, with at least 12 px inner padding.']
    , ['单张 mini ·', 'Single mini card ·'], ['· snap-align: start · 至少 3 张。', '· snap-align: start · At least three cards.']
    , ['完全一致。', 'exactly.'], ['别在横向卡里塞颜色球（', 'Do not place color swatches in a horizontal card (']
    , ['；相同 SKU 可在 mini 推荐 → 详情横向卡 → 首页双列间流转。', '; the same SKU can flow from a Mini recommendation to a detailed horizontal card and then a two-column Home feed.']
    , ['，与图像同一顶部对齐 · 内容区右侧留 32 px padding 给按钮。', ', aligned with the image top; reserve 32 px padding on the content right for the button.']
    , ['； brand 融入 title 首词，无需单独字段。', '; fold brand into the first words of title instead of using a separate field.']
    , ['的 SKU 目录。', 'SKU catalog.'], ['是它的子元素，共享 scroll-snap-align: start。', 'is its child and shares scroll-snap-align: start.']
    , ['；title 空则整块头部折叠。', '; collapse the entire header when title is empty.'], ['· webkit scrollbar 隐藏。', '· Hide the WebKit scrollbar.']
    , ['单张 mini ·', 'Individual mini card ·'], ['结尾"more →"占位卡，可选 · 与 moreHref 同一目的地。', 'Optional trailing “more →” card that shares the moreHref destination.']
    , ['进度圆点或短横条，可选 · 移动端更有用，桌面端一般关。', 'Optional progress dots or bars, useful on mobile and usually disabled on desktop.']
    , ['顶部渐变或活动色带 · 仅活动场景开 · 不占布局，绝对定位覆盖。', 'Top gradient or campaign band · Campaign scenarios only · Absolutely positioned without affecting layout.']
    , ['目录（与 Vertical / Horizontal / Mini 共享）。 容器只关心楼层维度：标题 / 更多入口 / 主题 / 类目筛选。', 'catalog shared with Vertical, Horizontal, and Mini. The container owns only section-level fields: title, more link, theme, and category filter.']
    , ['；同一 SKU 可从 tile 入口点击进入横向卡详情或双列列表。', '; the same SKU can open from a tile into a horizontal detail card or two-column list.']
    , ['· price / label 只在需要时渲染 · 无价（品牌入口）或无标签（纯图 tile）都合法。', '· Render price / label only when needed. No price for a brand entry or no label for an image-only tile are both valid.']
    , ['badge 浮在右上，ribbon 浮在左上', 'badge floats top-right; ribbon floats top-left']
    , ['· 底', '· background'], ['/ gold 三色', '/ gold color options'], ['三态', 'three states']
    , ['· 图上盖半透黑遮罩 · 价格灰字划线', '· Add a translucent black image overlay and strike through the muted price']
    , ['方形 1:1 ·', 'Square 1:1 ·'], ['左上角标 enum ·', 'Top-left ribbon enum ·'], ['true 时加', 'When true, add']
    , ['直播页竖屏右侧 2 列纵向堆叠 · 每张 tile 显 LIVE ribbon + 售价 · 售罄自动切', 'Two-column vertical stack in a live-page sidebar; every tile shows LIVE ribbon + price and automatically switches when sold out']
    , ['直播 tile 用', 'For live tiles, use']
    , ['红字营销标（如', 'Red promotion text (for example'], ['原价另起一行加', 'Put the original price on a separate line with an']
    , ['）与押金（如', ') and deposit (for example'], ['加购按钮直接使用 Figma', 'Use the Figma']
    , ['· 商品图', '· Product image'], ['Product Image 商品图片', 'Product Image'], ['· 色板', '· Color swatches']
    , ['· 亮点', '· Highlights'], ['· 品牌', '· Brand'], ['· 1 行变体', '· One-line variant'], ['· 标题', '· Title']
    , ['· 2 行变体', '· Two-line variant'], ['· 营销标', '· Promotion'], ['· 价格行', '· Price row']
    , ['· 押金', '· Deposit'], ['· 履约', '· Fulfillment'], ['· 11 变体', '· 11 variants']
    , ['全部图标由 Figma REST API 从 Joybuy 商卡组件库导出为 SVG，落在', 'All icons are exported as SVG from the Joybuy product-card library through the Figma REST API and stored in']
    , ['hover 抬起、', 'for hover elevation,'], ['Joybuy 字体系统由两个 token 家族撑起：', 'The Joybuy type system uses two token families:']
    , ['商卡里 rating · sold 组合展示评分（', 'In product cards, rating · sold displays the rating (']
    , ['观察骨架保持一致 · 但 ribbon / chip / 倒计时颜色 / 价格 label / CTA 全部由', 'The structure stays consistent, while ribbon, chip, countdown color, price label, and CTA are all driven by']
    , ['：ribbon 在图上传远景可读，chip 在信息栈近景确认。 两个必须来自同一个', ': the ribbon communicates at a distance on the image, while the chip confirms the state in the content stack. Both must come from the same']
    , ['为某个状态增删槽位 · 只允许改颜色、label、显隐可选字段。 切换状态 = 切换', 'to add or remove slots for a state. Only color, labels, and optional-field visibility may change. Switching state means switching the']
    , ['· ribbon 灰 · CTA 收定金。 用户预约成功后同一张卡切到', '· Gray ribbon · Deposit CTA. After reservation, the same card switches to']
    , ['大促主会场"整点抢"栏目。', 'Hourly drop section in a major campaign.'], ['每分钟 -£1 的荷兰拍。', 'A Dutch auction dropping £1 per minute.']
    , ['4 个主题变体：Sale（红色大促）· Brand Day（品牌色）· Seasonal（季节渐变）· Urgency（深黑限时）。 倒计时每秒自动更新，从当前时间算到', 'Four themes: Sale (red), Brand Day (brand color), Seasonal (seasonal gradient), and Urgency (dark). The countdown updates every second from now until']
    , ['横向卡与双列卡共享', 'Horizontal and two-column cards share the'], ['， 其余字段与', '; all remaining fields match']
    , ['Mini 与 Horizontal / Vertical 共享', 'Mini shares the'], ['加购按钮', 'Add-to-cart button'], ['类型。Mini 默认省略', 'type with Horizontal / Vertical. Mini omits']
    , ['4 种主题共用同一容器骨架，只切换 header 装饰、hero 卡是否出现、chip strip 是否出现、theme-band 是否绘。 Item 全部复用', 'Four themes share one container structure and only vary header decoration, hero-card visibility, chip-strip visibility, and theme-band rendering. Every item reuses the']
    , ['与', 'and'], ['楼层标题 +', 'Section title +'], ['—— 直接复用 SKU', '— directly reuse the SKU']
    , ['Small Dynamic 与 Mini / Horizontal 共享', 'Small Dynamic shares the'], ['image 铺满 ·', 'Full-bleed image ·']
    , ['1:1 方形 ·', '1:1 square ·'], ['/ 数量 ·', '/ quantity ·'], ['带脉冲圆点 ·', 'with a pulsing dot ·']
    , ['"Sold by …" 文本标签 +', '“Sold by …” text label +']
    , ['3 层阴影：', 'Three shadow levels:']
    , ['切换', 'Switch'], ['Ribbon 与 state-chip', 'Ribbon and state-chip']
    , ['4 个状态变体共享 8 槽位骨架 ·', 'Four state variants share the same eight-slot structure ·']
    , ['Apple 新品、Figma 标题变体首发。', 'Apple launches and Figma title variants.']
    , ['SKU 目录', 'SKU catalog'], ['类型，本卡片默认省略', 'type; this card omits']
    , ['共享', 'shares'], ['的 flex 容器， 槽', 'flex container, with the'], ['横滑楼层是"容器 + N 张商卡"的组合，自身字段极少，主内容全在', 'A horizontal section combines a container with N product cards. It owns very few fields; primary content lives in']
    , ['左上角标 · clip-path 斜切 ·', 'Top-left ribbon · Angled with clip-path ·']
    , ['与双列卡共享', 'Shares the'], ['是外层', 'is the outer'], ['槽', 'slot']
    , ['三个选项对应 Figma 母组件的 Default、AiBot_SKUProperty 与 Variant3；分类和预设只替换 SKU 数据。', 'The three options map to the Figma master variants Default, AiBot_SKUProperty, and Variant3; category and preset controls only replace SKU data.']
    , ['搜索联想 / 快速跳转需要更小结构时，改用 Horizontal Mini，而不是压缩本组件', 'Use Horizontal Mini for search suggestions or quick links that need a smaller structure; do not compress this component.']
    , ['别同时打开全部可选槽位 · 按场景保留必要信息，避免信息拥挤', 'Do not enable every optional slot at once; keep only the information required by the scenario.']
    , ['Figma 母组件仅提供数量选择器开 / 关两个变体；分类与预设只替换商品数据。', 'The Figma master only provides quantity-selector on and off variants; categories and presets only replace product data.']
    , ['收藏位于图片右上；加购按钮或数量选择器位于内容区右下，切换后不改变整体卡片尺寸。', 'Favorite sits at the image top-right; add-to-cart or the quantity selector sits at the content bottom-right without changing card size.']
    , ['横滑商卡在一行中连续展示商品，每张卡固定包含顺序标签、商品图、标题、价格、可选会员/总促信息与操作按钮。', 'Horizontal Scroll presents products in one row. Each card contains a sequence label, image, title, price, optional membership or master-promotion information, and an action.']
    , ['Figma 未定义横滑卡主题变体；这里仅演示总促与缺货字段如何按数据显隐，不改变母组件结构。', 'Figma defines no theme variants for Horizontal Scroll. These controls only demonstrate data-driven master-promotion and out-of-stock fields without changing the master structure.']
    , ['横滑只是页面容器行为；每个 tile 都复用同一套 7 槽位商卡，不增加主题条、页头、圆点或结尾占位卡。', 'Horizontal scrolling is a page-container behavior. Every tile reuses the same seven-slot card without theme bands, headers, pagination dots, or end sentinels.']
    , ['Figma 未定义横滑卡主题变体；以下是同一母组件在可选字段开启或缺货时的内容示例，不计作组件变体。', 'Figma defines no theme variants for this card. The samples below show optional fields and out-of-stock content on the same master component, not additional variants.']
    , ['容器只负责横向排布和滑动，不向单卡注入主题皮肤', 'The container only controls horizontal layout and scrolling; it does not inject a theme skin into each card.']
    , ['活动商卡是在标准商品信息上强化排行、折扣和促销信息的单商品卡。预览严格对应 Figma 的 Default、Bestseller 与 Out of stock 三个变体。', 'Campaign Card is a single-product card that emphasizes rank, discount, and promotion information. The preview maps directly to the Figma Default, Bestseller, and Out of stock variants.']
    , ['变体来自 Figma 母组件；它们改变排行标签、商品亮点和库存操作，不改变卡片主题皮肤。', 'Variants come from the Figma master. They change ranking, product highlights, and inventory actions rather than applying theme skins.']
    , ['活动商卡用于在活动流中强化单个 SKU 的排行、折扣、促销和库存状态。 它仍是商品卡，不是活动 banner，也不承载多商品列表或倒计时。', 'Use Campaign Card to emphasize rank, discount, promotion, and inventory for one SKU in a campaign flow. It remains a product card, not a campaign banner, multi-product list, or countdown.']
    , ['不要添加 Figma 母组件中不存在的主题皮肤', 'Do not add theme skins that do not exist in the Figma master.']
    , ['不要把多商品 strip、活动 banner 或倒计时塞进这张卡', 'Do not place a multi-product strip, campaign banner, or countdown inside this card.']
    , ['不要在缺货态保留可点击的加购按钮', 'Do not keep an enabled add-to-cart button in the out-of-stock state.']
    , ['不要用网站主题色覆盖商卡内部的业务颜色', 'Do not let the website theme override product-card business colors.']
    , ['预约商卡由两个维度共同决定：业务类型（常规预约 / 荷兰拍 / 荷兰拍预约态 / Happy Hour）与售卖状态（未预约 / 抢购中 / 已结束）。 两个维度共同驱动价格、时间、预约信息和 CTA。', 'Booking Card is driven by two dimensions: business type (Regular, Dutch Auction, Dutch Reserved, or Happy Hour) and sale state (Unreserved, Purchasing, or Ended). Together they control price, time, reservation information, and CTA.']
    , ['Figma 将业务类型与售卖状态分成两个维度；任意组合都会同步更新价格、倒计时、预约信息和 CTA。', 'Figma models business type and sale state as separate dimensions; every combination updates price, countdown, reservation information, and CTA together.']
    , ['10 个 Figma 槽位：折扣、商品图、品牌、商品名、评分/销量、预约信息、限时信息、价格、预约/库存信息与按钮。 业务类型决定信息结构，售卖状态只驱动时间、价格与 CTA，不额外发明重复状态标签。', 'Ten Figma slots cover discount, product image, brand, title, rating or sales, reservation information, launch timing, price, reservation or stock metadata, and button. Business type defines the information structure, while sale state only drives time, price, and CTA without inventing duplicate state labels.']
    , ['业务标签由 type 派生，时间、价格与 CTA 由 state 驱动，两者不能混用。', 'Business labels derive from type; time, price, and CTA derive from state. The two must not be conflated.']
    , ['业务标签只由 type 决定，不能被售卖状态覆盖', 'Business labels are determined only by type and must not be overwritten by sale state.']
    , ['未预约显示开始时间，抢购中显示倒计时，结束态隐藏时间', 'Show the start time when unreserved, a countdown while purchasing, and hide time after the event ends.']
    , ['变体只改变价格第二行是否出现；商品图片、卡片数量与间距保持不变。', 'The variant only changes whether the reference-price line appears; product images, card count, and spacing remain unchanged.']
  ];

  var lookup = new Map();
  var nodeState = new WeakMap();
  var elementState = new WeakMap();
  var currentLanguage = 'zh';
  var debug = new URLSearchParams(window.location.search).get('i18n-debug') === '1';
  var excludedSelector = [
    'script', 'style', 'code', 'pre', 'kbd', 'samp', 'svg',
    '[data-global-i18n="off"]', '.global-header', '.site-nav', '.lang-toggle',
    '[data-card-lang]', '[data-docs-lang]', '[data-lang]', '[data-sp-lang]',
    '.demo__stage', '.types-stack', '.side-preview', '.feed-hero', '.chip-btn', '.anatomy-cell__stage', '[data-field]', '.field-sim',
    '.head__title-en', '.atom-block__name', '.atom-block__name-en', '.atom-variant__name',
    '.image-spec__title', '.image-spec__title-en', '.image-spec__size',
    '.grid-rule__title', '.grid-rule__cell', '.grid-rule__rail-cell', '.grid-guidance__meta',
    '.anatomy-cell__slot', '.cat-head__path', '.icon-cell__name'
  ].join(',');
  var elementSelector = [
    '.section__lede', '.section__lead', '.ov-head__subtitle', '.ov-group__hint',
    '.hero__lede', '.arch-card__desc', '.type-block__hint', '.type-cell__desc',
    '.usedin-card__desc', '.usedin-card__title', '.anatomy__lede', '.figma-hint',
    '.demo__controls-hint', '.compare__col-title', '.state-legend__desc'
  ].join(',');

  function normalize(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  PAIRS.forEach(function (pair) {
    lookup.set(normalize(pair[0]), { zh: pair[0], en: pair[1] });
    lookup.set(normalize(pair[1]), { zh: pair[0], en: pair[1] });
  });

  function inferBilingual(value) {
    var text = normalize(value);
    if (text.indexOf(' · ') === -1) return null;
    var parts = text.split(' · ').map(function (part) { return part.trim(); }).filter(Boolean);
    var zh = parts.filter(function (part) { return /[\u3400-\u9fff]/.test(part); });
    var en = parts.filter(function (part) { return !/[\u3400-\u9fff]/.test(part); });
    if (!zh.length || !en.length) return null;
    return { zh: zh.join(' · '), en: en.join(' · ') };
  }

  function isExcluded(node) {
    var parent = node.nodeType === 1 ? node : node.parentElement;
    return !parent || !!parent.closest(excludedSelector);
  }

  function translateElement(element) {
    if (isExcluded(element)) return false;
    var state = elementState.get(element);
    if (!state) {
      var pair = lookup.get(normalize(element.textContent));
      if (!pair) return false;
      state = { zh: element.innerHTML, en: pair.en };
      elementState.set(element, state);
      element.setAttribute('data-site-translated', 'true');
    }
    if (currentLanguage === 'zh') element.innerHTML = state.zh;
    else element.textContent = state.en;
    return true;
  }

  function translateTextNode(node) {
    if (isExcluded(node) || !normalize(node.nodeValue)) return;
    if (node.parentElement && node.parentElement.closest('[data-site-translated="true"]')) return;
    var state = nodeState.get(node);
    if (!state) {
      var raw = node.nodeValue;
      var normalized = normalize(raw);
      var pair = lookup.get(normalized) || inferBilingual(normalized);
      if (!pair) {
        if (debug && currentLanguage === 'en' && /[\u3400-\u9fff]/.test(normalized)) {
          node.parentElement.setAttribute('data-i18n-missing', normalized.slice(0, 120));
        }
        return;
      }
      var leading = raw.match(/^\s*/)[0];
      var trailing = raw.match(/\s*$/)[0];
      state = { zh: pair.zh, en: pair.en, leading: leading, trailing: trailing };
      nodeState.set(node, state);
    }
    node.nodeValue = state.leading + state[currentLanguage] + state.trailing;
  }

  function translateRoot(root) {
    if (!root || (root.nodeType === 1 && isExcluded(root))) return;
    if (root.nodeType === 1) {
      if (root.matches(elementSelector)) translateElement(root);
      root.querySelectorAll(elementSelector).forEach(translateElement);
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
  }

  function translateTitle() {
    var pair = lookup.get(normalize(document.title)) || inferBilingual(document.title);
    if (pair) document.title = pair[currentLanguage];
  }

  function apply(language) {
    currentLanguage = language === 'en' ? 'en' : 'zh';
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    translateTitle();
    translateRoot(document.body);
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1 || node.nodeType === 3) translateRoot(node);
      });
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('joybuy:languagechange', function (event) { apply(event.detail.language); });

  window.JoybuyI18n = { apply: apply };
})();
