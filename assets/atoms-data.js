/* Joybuy Product Card Design System · atomic components data
 *
 * Each atom = one Structure (container) + N Types (variants).
 * Variant SVGs are exported from Figma via REST API and stored under
 * `site/assets/figma-atoms/<atom-slug>/<variant-slug>.svg`.
 *
 * NOTE on paths: this file is consumed by `site/atoms/index.html`. Since that
 * page lives one level below `site/`, svg paths here are written relative to
 * the *page* (i.e. start with `../assets/...`), not relative to `site/`.
 *
 * Status (2026-08-31):
 *   - 18 atom families use exported Figma variants.
 *   - Main image is documented as three size specifications with fixed and
 *     optional overlay slots, rather than forcing sizes into a variant model.
 *
 * File Key: eInnhKDnBhPIyPprZADdnO (App Business Components)
 */

(function () {
  // Normalize Figma variant name like "Type=Sale-Save, PriceType=RRP"
  // to display string "Sale-Save · RRP".
  function clean(raw) {
    if (!raw) return '';
    return raw.split(',').map(function (p) {
      return p.trim().replace(/^[^=]+=/, '');
    }).filter(Boolean).join(' · ');
  }

  // Build a single variant from a [raw, svgFile] pair, resolving svgFile
  // against the atom's slug directory.
  function makeVariants(slug, rows) {
    return rows.map(function (row) {
      var raw = row[0], svgFile = row[1];
      var label = clean(raw);
      return {
        key: label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        label: label,
        svg: svgFile ? ('../assets/figma-atoms/' + slug + '/' + svgFile) : null
      };
    });
  }

  window.ATOMS_DATA = {
    fileKey: 'eInnhKDnBhPIyPprZADdnO',

    groups: [
      { key: 'tag',      name: '标签角标', hint: '附着在商品图或商品卡角落的图标 / 徽标类原子，用于快速传达商品状态、荣誉标识或个性化属性。' },
      { key: 'image',    name: '图片容器', hint: '承载商品主视觉的容器类原子。Product Image 按使用场景定义三档尺寸，容器内仅保留商品图、收藏按钮及按需出现的排行榜徽章和饮食习惯标签；Color 展示 SPU 色板选择。' },
      { key: 'text',     name: '文本信息', hint: '商品的语义信息原子。标题、评分销量、规格属性等，主要负责传达商品是什么以及买过的人怎么评价。' },
      { key: 'price',    name: '价格促销', hint: '价格体系原子。当前售价、原价 / 折扣行、会员价、单品 / 跨店促销标签——覆盖所有价签展示形态。' },
      { key: 'status',   name: '状态物流', hint: '强化购买决策的辅助原子——库存紧张感、履约速度、能效等级、AI 推荐理由，形成"该不该现在买"的心智推动。' },
      { key: 'interact', name: '交互',     hint: '唯一的动作型原子——加入购物车按钮。承载了商品卡上的核心转化行为。' }
    ],

    atoms: [
      // ---------- 标签角标 ----------
      {
        slug: 'tag-like', name_cn: '收藏图标', name_en: 'Tag_like',
        figma_node: '5532:16028', group: 'tag',
        variants: makeVariants('tag-like', [
          ['Property 1=tag-like',  'tag-like.svg'],
          ['Property 1=tag-liked', 'tag-liked.svg'],
          ['Property 1=loading',   'loading.svg']
        ])
      },
      {
        slug: 'product-highlights', name_cn: '商品亮点', name_en: 'Product Highlights',
        figma_node: '26894:262734', group: 'tag',
        variants: makeVariants('product-highlights', [
          ['Name=Sponsored',   'sponsored.svg'],
          ['Name=Blockbuster', 'blockbuster.svg'],
          ['Name=Top Deal',    'top-deal.svg'],
          ['Name=Hot Deal',    'hot-deal.svg'],
          ['Name=Best seller', 'best-seller.svg'],
          ['Name=New',         'new.svg'],
          ['Name=Plus price',  'plus-price.svg'],
          ['Name=Clearance',   'clearance.svg'],
          ['Best Before',      'best-before.svg']
        ])
      },
      {
        slug: 'dietary-badges', name_cn: '饮食标签', name_en: 'Dietary badges',
        figma_node: '30124:121007', group: 'tag',
        variants: makeVariants('dietary-badges', [
          ['Name=frozen',     'frozen.svg'],
          ['Name=vegetarian', 'vegetarian.svg'],
          ['Name=Vegan',      'vegan.svg'],
          ['Name=GlutenFree', 'gluten-free.svg'],
          ['Name=Dairy free', 'dairy-free.svg'],
          ['Organic',         'organic.svg'],
          ['Halal',           'halal.svg'],
          ['Name=number',     'number.svg']
        ])
      },

      // ---------- 图片容器 ----------
      {
        slug: 'main-image', name_cn: '商品图片', name_en: 'Product Image',
        figma_node: '32030:267650', group: 'image',
        note: '按容器尺寸管理，不按 variants 管理。176px、146px、130px 是三档固定规格；商品图片与右上角收藏按钮为固定结构，左上角排行榜徽章和左下角饮食习惯标签按业务场景选用。',
        sizes: [
          {
            key: 'two-column', label: '通用双列图片', label_en: 'Two-Column Card image',
            size: 176, image: 'iphone', href: '../organisms/vertical-card.html',
            usage: '用于首页信息流、分类页和搜索结果的双列商品卡。',
            ranking: 1, dietary: 'frozen'
          },
          {
            key: 'horizontal-scroll', label: '横滑商卡图片', label_en: 'Horizontal Scroll Card image',
            size: 146, image: 'aesop', href: '../organisms/horizontal-scroll.html',
            usage: '用于一行多卡的横向滚动楼层，卡宽与图片宽保持一致。',
            dietary: 'frozen'
          },
          {
            key: 'horizontal', label: '通用横向图片', label_en: 'Horizontal Card image',
            size: 130, image: 'diptyque', href: '../organisms/horizontal-card.html',
            usage: '用于购物车、收藏夹、订单和搜索单列等横向商卡。'
          }
        ],
        variants: []
      },
      {
        slug: 'color', name_cn: 'SPU 色板', name_en: 'Color',
        figma_node: '32199:238046', group: 'image',
        variants: makeVariants('color', [
          ['Type=Default',      'default.svg'],
          ['Type=Out of stock', 'out-of-stock.svg'],
          ['Type=more +1',      'more-1.svg'],
          ['Type=more +99',     'more-99.svg']
        ])
      },

      // ---------- 文本信息 ----------
      {
        slug: 'title', name_cn: '商品标题', name_en: 'Title',
        figma_node: '5757:49063', group: 'text',
        variants: makeVariants('title', [
          ['Property 1=1', '1.svg'],
          ['Property 1=2', '2.svg'],
          ['Property 1=3', '3.svg']
        ])
      },
      {
        slug: 'rating-sold', name_cn: '评分与销量', name_en: 'Rating & Sold',
        figma_node: '6311:16045', group: 'text',
        variants: makeVariants('rating-sold', [
          ['Property 1=rate&sold', 'rate-sold.svg'],
          ['Property 1=Variant5',  'variant5.svg'],
          ['Property 1=sold',      'sold.svg'],
          ['Property 1=Viewed',    'viewed.svg'],
          ['Property 1=月黑',       'variant.svg']
        ])
      },
      {
        slug: 'attributes', name_cn: '规格属性', name_en: 'Attributes',
        figma_node: '23659:239135', group: 'text',
        note: 'Figma 里原名 Component 71，本站规范化命名为 Attributes（规格属性）。',
        variants: makeVariants('attributes', [
          ['Property 1=Component 11', 'component-11.svg'],
          ['Property 1=Component 12', 'component-12.svg']
        ])
      },
      {
        slug: 'leading-icon', name_cn: '前置图标', name_en: 'Leading icon',
        figma_node: '29004:171936', group: 'text',
        variants: makeVariants('leading-icon', [
          ['Delivery by=Joybuy', 'joybuy.svg'],
          ['Delivery by=POP',    'pop.svg']
        ])
      },

      // ---------- 价格促销 ----------
      {
        slug: 'price', name_cn: '价格', name_en: 'Price',
        figma_node: '5551:23962', group: 'price',
        variants: makeVariants('price', [
          ['Type=Price-sale plus- new, PriceType=RRP',  'price-sale-plus-new-rrp.svg'],
          ['Type=Price-sale plus- new, PriceType=WAS',  'price-sale-plus-new-was.svg'],
          ['Type=Range, PriceType=-',                   'range.svg'],
          ['Type=荷兰拍_Starting price, PriceType=-',    'starting-price.svg'],
          ['Type=Sale-Save, PriceType=RRP',             'sale-save-rrp.svg'],
          ['Type=Sale-Save, PriceType=WAS',             'sale-save-was.svg'],
          ['Type=Sale-percent, PriceType=RRP',          'sale-percent-rrp.svg'],
          ['Type=Sale-percent, PriceType=WAS',          'sale-percent-was.svg'],
          ['Type=荷兰拍, PriceType=RRP',                 'rrp.svg'],
          ['Type=荷兰拍, PriceType=WAS',                 'was.svg'],
          ['Type=Default, PriceType=-',                 'default.svg']
        ])
      },
      {
        slug: 'price-second-line', name_cn: '原价 / 折扣行', name_en: 'Price second line',
        figma_node: '28919:271383', group: 'price',
        variants: makeVariants('price-second-line', [
          ['Type=RRP, Direction=Horizontal',           'rrp-horizontal.svg'],
          ['Type=PPR+Discount1, Direction=Horizontal', 'ppr-discount1-horizontal.svg'],
          ['Type=PPR+Discount2, Direction=Horizontal', 'ppr-discount2-horizontal.svg'],
          ['Type=PPR+Discount1, Direction=Vertical',   'ppr-discount1-vertical.svg'],
          ['Type=PPR+Discount2, Direction=Vertical',   'ppr-discount2-vertical.svg'],
          ['Type=Was, Direction=Horizontal',           'was-horizontal.svg'],
          ['Type=Was+Discount1, Direction=Horizontal', 'was-discount1-horizontal.svg'],
          ['Type=Was+Discount2, Direction=Horizontal', 'was-discount2-horizontal.svg'],
          ['Type=Was+Discount1, Direction=Vertical',   'was-discount1-vertical.svg'],
          ['Type=Was+Discount2, Direction=Vertical',   'was-discount2-vertical.svg']
        ])
      },
      {
        slug: 'plus-price', name_cn: 'Plus 会员价', name_en: 'Plus price',
        figma_node: '32340:248093', group: 'price',
        variants: makeVariants('plus-price', [
          ['Type=No Total Promotion, Direction=Horizontal',   'no-total-promotion-horizontal.svg'],
          ['Type=No Total Promotion, Direction=Vertical',     'no-total-promotion-vertical.svg'],
          ['Type=With Total Promotion, Direction=Default',    'with-total-promotion-default.svg']
        ])
      },
      {
        slug: 'individual-promotion', name_cn: '单促', name_en: 'Individual Promotion',
        figma_node: '5551:17019', group: 'price',
        variants: makeVariants('individual-promotion', [
          ['Type=Campaign-Lightning offers',       'campaign-lightning-offers.svg'],
          ['Type=type-Pre sale',                   'type-pre-sale.svg'],
          ['Type=type-contract',                   'type-contract.svg'],
          ['Type=type-new launch',                 'type-new-launch.svg'],
          ['Type=type-launch&contract',            'type-launch-contract.svg'],
          ['Type=type-launch&contract-limit time', 'type-launch-contract-limit-time.svg'],
          ['Type=Campaign-happy hour',             'campaign-happy-hour.svg'],
          ['Type=Campaign-Price match',            'campaign-price-match.svg'],
          ['Type=Compaign-Everyday low price',     'compaign-everyday-low-price.svg'],
          ['Type=Campaign-welcome offer',          'campaign-welcome-offer.svg'],
          ['Type=Clearance Sale',                  'clearance-sale.svg'],
          ['Type=Early access',                    'early-access.svg'],
          ['Type=type-new launch-limit time',      'type-new-launch-limit-time.svg']
        ])
      },
      {
        slug: 'total-promotion', name_cn: '总促', name_en: 'Total Promotion',
        figma_node: '28444:79591', group: 'price',
        variants: makeVariants('total-promotion', [
          ['Type=Pay after promotion',           'pay-after-promotion.svg'],
          ['Type=Buy 1 get 1 free',              'buy-1-get-1-free.svg'],
          ['Type=Buy 2 Get 30% Off',             'buy-2-get-30-off.svg'],
          ['Type=Virtual gift-£3.00 in gifts',   'virtual-gift-3-00-in-gifts.svg'],
          ['Type=Virtual gift-Gift up to £3.00', 'virtual-gift-gift-up-to-3-00.svg'],
          ['Type=Virtual gift-Pick 3 gifts',     'virtual-gift-pick-3-gifts.svg'],
          ['Type=Virtual gift-3 gifts',          'virtual-gift-3-gifts.svg'],
          ['Type=Virtual gift-Free gift',        'virtual-gift-free-gift.svg'],
          ['Type=£15.00 Off over £100.00',       '15-00-off-over-100-00.svg'],
          ['Type=points',                        'points.svg'],
          ['Type=3 for 2',                       '3-for-2.svg']
        ])
      },

      // ---------- 状态物流 ----------
      {
        slug: 'stock', name_cn: '少库存', name_en: 'Stock',
        figma_node: '32123:126688', group: 'status',
        variants: makeVariants('stock', [
          ['Low-stock=no, Out of stock=yes', 'out-of-stock.svg'],
          ['Low-stock=yes, Out of stock=no', 'low-stock.svg']
        ])
      },
      {
        slug: 'fulfillment-time', name_cn: '履约时效', name_en: 'Fulfillment Time',
        figma_node: '30176:215168', group: 'status',
        variants: makeVariants('fulfillment-time', [
          ['Fulfillment Type=Joybuy', 'joybuy.svg'],
          ['Fulfillment Type=POP',    'pop.svg']
        ])
      },
      {
        slug: 'energy', name_cn: '能效等级', name_en: 'Energy',
        figma_node: '19506:81975', group: 'status',
        variants: makeVariants('energy', [
          ['Property 1=Default',  'default.svg'],
          ['Property 1=Longtext', 'longtext.svg'],
          ['Property 1=Variant2', 'variant2.svg'],
          ['Property 1=Variant4', 'variant4.svg']
        ])
      },
      {
        slug: 'ai-recommendation', name_cn: 'AI 推荐理由', name_en: 'AI Recommendation Reasons',
        figma_node: '32898:283434', group: 'status',
        variants: makeVariants('ai-recommendation', [
          ['Type=‘AI Recommendation Reasons’', 'ai-recommendation-reasons.svg'],
          ['Type=Best seller',                 'best-seller.svg']
        ])
      },

      // ---------- 交互 ----------
      {
        slug: 'btn-cart', name_cn: '加购按钮', name_en: 'Btn_Cart',
        figma_node: '5551:16896', group: 'interact',
        variants: makeVariants('btn-cart', [
          ['Property 1=Btn - add to cart',         'btn-add-to-cart.svg'],
          ['Property 1=Add-Success 1',             'add-success-1.svg'],
          ['Property 1=Add-Success N',             'add-success-n.svg'],
          ['Property 1=Add-success-loading',       'add-success-loading.svg'],
          ['Property 1=Btn-add-result1',           'btn-add-result1.svg'],
          ['Property 1=Btn-add-result mul',        'btn-add-result-mul.svg'],
          ['Property 1=Btn - add to cart-added',   'btn-add-to-cart-added.svg'],
          ['Property 1=Btn - add to cart -loading','btn-add-to-cart-loading.svg'],
          ['Property 1=Btn-add to cart-hover',     'btn-add-to-cart-hover.svg'],
          ['Property 1=Btn-add-press',             'btn-add-press.svg'],
          ['Property 1=Btn - view detail',         'btn-view-detail.svg']
        ])
      }
    ]
  };
})();
