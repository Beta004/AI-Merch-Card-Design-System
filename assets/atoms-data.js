/* Joybuy Product Card Design System · atomic components data
 *
 * Generated from Figma “App Business Components / 基础组件 Product Card Atomic Components”.
 * File key: eInnhKDnBhPIyPprZADdnO
 * Source node: 28919:271381
 *
 * Rules:
 *   - atom family and variant names come from Figma, not hand-written marketing copy;
 *   - `copy` records the exact text strings found inside the Figma variant;
 *   - SVG files are exported from the corresponding Figma nodes.
 */

(function () {
  window.ATOMS_DATA = {
    fileKey: 'eInnhKDnBhPIyPprZADdnO',
    sourceNode: '28919:271381',

    groups: [
      { key: 'tag',      name: '标签角标', hint: 'Figma 标签与图片角标原子，包括折扣、排行、收藏、饮食和商品亮点。' },
      { key: 'image',    name: '图片容器', hint: 'Figma 商品图、SPU 色板与色板选择原子；图片尺寸和缺货态均按源组件穷举。' },
      { key: 'text',     name: '文本信息', hint: '品牌、标题、评分销量、规格、前置图标和自营标签等文本型原子。' },
      { key: 'price',    name: '价格促销', hint: 'Figma 价格体系、单促、总促、会员价、积分与押金原子。' },
      { key: 'status',   name: '状态物流', hint: '库存、履约、AI 推荐、服务、能效和原产地等状态型原子。' },
      { key: 'interact', name: '交互',     hint: '加购、按钮组和到货通知等动作型原子。' }
    ],

    atoms: [
      {
        slug: 'tag-discount', name_cn: '折扣标签', name_en: 'Tag-discount',
        figma_node: '5532:14409', group: 'tag',
        variants: [
          { key:'tag-discount', label:"Tag-discount", copy:["20% off"], svg:'../assets/figma-atoms/tag-discount/tag-discount.svg' }
        ]
      },
      {
        slug: 'tag-number', name_cn: '排行榜角标', name_en: 'Tag-number',
        figma_node: '5910:50570', group: 'tag',
        variants: [
          { key:'tag-number', label:"Tag-number", copy:["1"], svg:'../assets/figma-atoms/tag-number/tag-number.svg' }
        ]
      },
      {
        slug: 'tag-like', name_cn: '收藏图标', name_en: 'Tag_like',
        figma_node: '5532:16028', group: 'tag',
        variants: [
          { key:'property-1-tag-like', label:"Property 1=tag-like", copy:[], svg:'../assets/figma-atoms/tag-like/property-1-tag-like.svg' },
          { key:'property-1-tag-liked', label:"Property 1=tag-liked", copy:[], svg:'../assets/figma-atoms/tag-like/property-1-tag-liked.svg' },
          { key:'property-1-loading', label:"Property 1=loading", copy:[], svg:'../assets/figma-atoms/tag-like/property-1-loading.svg' }
        ]
      },
      {
        slug: 'dietary-badges', name_cn: '饮食标签', name_en: 'Dietary badges',
        figma_node: '34327:193360', group: 'tag',
        variants: [
          { key:'name-frozen', label:"Name=Frozen", copy:[], svg:'../assets/figma-atoms/dietary-badges/frozen.svg' },
          { key:'name-vegetarian', label:"Name=Vegetarian", copy:[], svg:'../assets/figma-atoms/dietary-badges/vegetarian.svg' },
          { key:'name-vegan', label:"Name=Vegan", copy:[], svg:'../assets/figma-atoms/dietary-badges/vegan.svg' },
          { key:'name-glutenfree', label:"Name=GlutenFree", copy:[], svg:'../assets/figma-atoms/dietary-badges/gluten-free.svg' },
          { key:'name-dairyfree', label:"Name=Dairyfree", copy:[], svg:'../assets/figma-atoms/dietary-badges/dairy-free.svg' },
          { key:'name-organic', label:"Name=Organic", copy:[], svg:'../assets/figma-atoms/dietary-badges/organic.svg' },
          { key:'name-halal', label:"Name=Halal", copy:[], svg:'../assets/figma-atoms/dietary-badges/halal.svg' },
          { key:'name-number', label:"Name=Number", copy:["+6"], svg:'../assets/figma-atoms/dietary-badges/number.svg' }
        ]
      },
      {
        slug: 'main-image', name_cn: '商品图片', name_en: 'Main image',
        figma_node: '32030:267650 · 31493:141171 · 32030:267626', group: 'image',
        note: '合并 Figma 中 176px / 146px / 130px 三个 Main image 组件集；每个尺寸保留 Out of stock=no / yes 两个真实变体。',
        variants: [
          { key:'176-in-stock', label:"176 · In stock", copy:["1","20% off"], svg:'../assets/figma-atoms/main-image-176/out-of-stock-no.svg' },
          { key:'176-out-of-stock', label:"176 · Out of stock", copy:["1"], svg:'../assets/figma-atoms/main-image-176/out-of-stock-yes.svg' },
          { key:'146-in-stock', label:"146 · In stock", copy:["1","20% off"], svg:'../assets/figma-atoms/main-image-146/out-of-stock-no.svg' },
          { key:'146-out-of-stock', label:"146 · Out of stock", copy:[], svg:'../assets/figma-atoms/main-image-146/out-of-stock-yes.svg' },
          { key:'130-in-stock', label:"130 · In stock", copy:["20% Off","20% off","20% off","20% off","1"], svg:'../assets/figma-atoms/main-image-130/out-of-stock-no.svg' },
          { key:'130-out-of-stock', label:"130 · Out of stock", copy:["20% Off","20% off","20% off","20% off","1"], svg:'../assets/figma-atoms/main-image-130/out-of-stock-yes.svg' }
        ]
      },
      {
        slug: 'spu-color', name_cn: 'SPU 色板组合', name_en: 'SPU_color',
        figma_node: '30872:148689', group: 'image',
        variants: [
          { key:'spu-color', label:"SPU_color", copy:["+8"], svg:'../assets/figma-atoms/spu-color/spu-color.svg' }
        ]
      },
      {
        slug: 'color', name_cn: 'SPU 色板', name_en: 'Color',
        figma_node: '32199:238046', group: 'image',
        note: 'Figma 色单元 24×24，内含 20px 圆点，描边 1px var(--Stroke-Outline200, #E0E1E5)；more 变体的 SVG 导出漏掉了描边，已按源节点补回。',
        variants: [
          { key:'type-default', label:"Type=Default", copy:[], svg:'../assets/figma-atoms/color/default.svg' },
          { key:'type-out-of-stock', label:"Type=Out of stock", copy:[], svg:'../assets/figma-atoms/color/out-of-stock.svg' },
          { key:'type-more-1', label:"Type=more +1", copy:["+8"], svg:'../assets/figma-atoms/color/more-1.svg' },
          { key:'type-more-99', label:"Type=more +99", copy:["+99"], svg:'../assets/figma-atoms/color/more-99.svg' }
        ]
      },
      {
        slug: 'product-highlights', name_cn: '商品亮点', name_en: 'Product Highlights',
        figma_node: '26894:262734', group: 'tag',
        note: 'Figma 当前共 7 个真实变体；Best Before 与 Too Good To Waste 的展示文案分别为 Life 3d+、Too Good To Waste / BBD: 27-12-2025。',
        variants: [
          { key:'name-sponsored', label:"Name=Sponsored", copy:["Sponsored"], svg:'../assets/figma-atoms/product-highlights/sponsored.svg', text:true },
          { key:'name-best-before', label:"Name=Best Before", copy:["Life 3d+"], svg:'../assets/figma-atoms/product-highlights/best-before.svg' },
          { key:'name-new-hot', label:"Name=New&Hot", copy:["New&Hot"], svg:'../assets/figma-atoms/product-highlights/new-hot.svg' },
          { key:'name-top-deal', label:"Name=Top Deal", copy:["Top Deal"], svg:'../assets/figma-atoms/product-highlights/top-deal.svg' },
          { key:'name-private-label', label:"Name=Private Label", copy:["Private Label"], svg:'../assets/figma-atoms/product-highlights/private-label.svg' },
          { key:'name-new', label:"Name=New", copy:["New"], svg:'../assets/figma-atoms/product-highlights/new.svg' },
          { key:'name-too-good-to-waste', label:"Name=Too Good To Waste", copy:["Too Good To Waste","BBD: 27-12-2025"], svg:'../assets/figma-atoms/product-highlights/too-good-to-waste.svg' }
        ]
      },
      {
        slug: 'brand-default', name_cn: '品牌', name_en: 'Brand-Default',
        figma_node: '5532:14250', group: 'text',
        variants: [
          { key:'brand-default', label:"Brand-Default", copy:["Apple"], svg:'../assets/figma-atoms/brand-default/brand-default.svg' }
        ]
      },
      {
        slug: 'title', name_cn: '商品标题', name_en: 'title',
        figma_node: '5757:49063', group: 'text',
        variants: [
          { key:'property-1-1', label:"Property 1=1", copy:["Seeded Sourdough Bread\nSystem"], svg:'../assets/figma-atoms/title/1.svg' },
          { key:'property-1-2', label:"Property 1=2", copy:["French Door Refrigerator Freeze Ice & Water"], svg:'../assets/figma-atoms/title/2.svg' },
          { key:'property-1-3', label:"Property 1=3", copy:["iPhone 16 Pro Max 256GB Black Titanium"], svg:'../assets/figma-atoms/title/3.svg' }
        ]
      },
      {
        slug: 'rating-sold', name_cn: '评分与销量', name_en: 'Rating&Sold',
        figma_node: '6311:16045', group: 'text',
        variants: [
          { key:'property-1-rate-sold', label:"Property 1=rate&sold", copy:["4.5","100k+ sold"], svg:'../assets/figma-atoms/rating-sold/rate-sold.svg' },
          { key:'property-1-variant5', label:"Property 1=Variant5", copy:["4.5","189 Reviews","100k+ sold"], svg:'../assets/figma-atoms/rating-sold/variant5.svg' },
          { key:'property-1-sold', label:"Property 1=sold", copy:["4.5","100k+ sold"], svg:'../assets/figma-atoms/rating-sold/sold.svg' },
          { key:'property-1-viewed', label:"Property 1=Viewed", copy:["4.5","200 viewed in 48 hours"], svg:'../assets/figma-atoms/rating-sold/viewed.svg' },
          { key:'property-1', label:"Property 1=月黑", copy:["4.5","Only 50 items available"], svg:'../assets/figma-atoms/rating-sold/variant.svg' }
        ]
      },
      {
        slug: 'leading-icon', name_cn: '前置图标', name_en: 'Leading icon',
        figma_node: '29004:171936', group: 'text',
        variants: [
          { key:'delivery-by-joybuy', label:"Delivery by=Joybuy", copy:[], svg:'../assets/figma-atoms/leading-icon/delivery-by-joybuy.svg' },
          { key:'delivery-by-pop', label:"Delivery by=POP", copy:[], svg:'../assets/figma-atoms/leading-icon/delivery-by-pop.svg' }
        ]
      },
      {
        slug: 'attributes', name_cn: '规格属性', name_en: 'Component 71',
        figma_node: '23659:239135', group: 'text',
        note: 'Figma 原名 Component 71；本站规范化命名为 Attributes（规格属性）。',
        variants: [
          { key:'property-1-component-11', label:"Property 1=Component 11", copy:["125g "], svg:'../assets/figma-atoms/attributes/property-1-component-11.svg' },
          { key:'property-1-component-12', label:"Property 1=Component 12", copy:["125g ","Red"], svg:'../assets/figma-atoms/attributes/property-1-component-12.svg' }
        ]
      },
      {
        slug: 'sold-by-joybuy', name_cn: '自营标签', name_en: 'Sold by Joybuy',
        figma_node: '23572:350846', group: 'text',
        note: '仅自营商品显示；非自营商品整个槽位收起，不显示第三方商家名。',
        variants: [
          { key:'sold-by-joybuy', label:"Sold by Joybuy", copy:["Sold by Joybuy"], svg:'../assets/figma-atoms/sold-by-joybuy/sold-by-joybuy.svg' }
        ]
      },
      {
        slug: 'sold-by-joybuy-mark', name_cn: '自营标签图标', name_en: 'icon/brand_sold_by_Joybuy',
        figma_node: '23572:350839', group: 'text',
        note: '自营标签里的 16×16 品牌标；与 Sold by Joybuy 文本组件配套，不单独展示。',
        variants: [
          { key:'icon-brand-sold-by-joybuy', label:"icon/brand_sold_by_Joybuy", copy:[], svg:'../assets/figma-atoms/sold-by-joybuy/joybuy-mark.svg' }
        ]
      },
      {
        slug: 'individual-promotion', name_cn: '单促/业务类型', name_en: 'Individual Promotion / Type',
        figma_node: '5551:17019', group: 'price',
        variants: [
          { key:'type-campaign-price-match', label:"Type=Campaign-Price match", copy:["Price match Amazon"], svg:'../assets/figma-atoms/individual-promotion/type-campaign-price-match.svg' },
          { key:'type-campaign-lightning-offers', label:"Type=Campaign-Lightning offers", copy:["Lightning offers"], svg:'../assets/figma-atoms/individual-promotion/type-campaign-lightning-offers.svg' },
          { key:'type-compaign-everyday-low-price', label:"Type=Compaign-Everyday low price", copy:["Everyday low price"], svg:'../assets/figma-atoms/individual-promotion/type-compaign-everyday-low-price.svg' },
          { key:'type-campaign-happy-hour', label:"Type=Campaign-happy hour", copy:["Happy hour"], svg:'../assets/figma-atoms/individual-promotion/type-campaign-happy-hour.svg' },
          { key:'type-campaign-welcome-offer', label:"Type=Campaign-welcome offer", copy:["Welcome offer"], svg:'../assets/figma-atoms/individual-promotion/type-campaign-welcome-offer.svg' },
          { key:'type-clearance-sale', label:"Type=Clearance Sale", copy:["Outlet"], svg:'../assets/figma-atoms/individual-promotion/type-clearance-sale.svg' },
          { key:'type-type-pre-sale', label:"Type=type-Pre sale", copy:["Pre-sale"], svg:'../assets/figma-atoms/individual-promotion/type-type-pre-sale.svg' },
          { key:'type-pre-sale-with-time', label:"Type=Pre-sale with time", copy:["Pre-sale","Ends in 23:10:20"], svg:'../assets/figma-atoms/individual-promotion/type-pre-sale-with-time.svg' },
          { key:'type-early-access', label:"Type=Early access", copy:["Early access"], svg:'../assets/figma-atoms/individual-promotion/type-early-access.svg' },
          { key:'type-new-launch', label:"Type=new launch", copy:["Coming soon"], svg:'../assets/figma-atoms/individual-promotion/type-new-launch.svg' },
          { key:'type-new-launch-limit-time', label:"Type=new launch-limit time", copy:["Coming soon","Starts at Aug 26, 00:00"], svg:'../assets/figma-atoms/individual-promotion/type-new-launch-limit-time.svg' },
          { key:'type-launch-contract', label:"Type=launch&contract", copy:["Coming soon","Contract"], svg:'../assets/figma-atoms/individual-promotion/type-launch-contract.svg' },
          { key:'type-launch-contract-limit-time', label:"Type=launch&contract-limit time", copy:["Coming soon","Contract","Starts at Aug 26, 00:00"], svg:'../assets/figma-atoms/individual-promotion/type-launch-contract-limit-time.svg' },
          { key:'type-contract', label:"Type=contract", copy:["Contract"], svg:'../assets/figma-atoms/individual-promotion/type-contract.svg' }
        ]
      },
      {
        slug: 'price', name_cn: '价格', name_en: 'Price',
        figma_node: '5551:23962', group: 'price',
        variants: [
          { key:'type-range-pricetype', label:"Type=Range, PriceType=-", copy:["Up front from","£350.00","From £39.99 / month"], svg:'../assets/figma-atoms/price/type-range-pricetype.svg' },
          { key:'type-starting-price-pricetype', label:"Type=荷兰拍_Starting price, PriceType=-", copy:["£350.00","Starting price"], svg:'../assets/figma-atoms/price/type-starting-price-pricetype.svg' },
          { key:'type-sale-save-pricetype-rrp', label:"Type=Sale-Save, PriceType=RRP", copy:["£350.00","RRP:","£500.00","RRP:","£500.00","Save £20.00 on RRP"], svg:'../assets/figma-atoms/price/type-sale-save-pricetype-rrp.svg' },
          { key:'type-sale-save-pricetype-was', label:"Type=Sale-Save, PriceType=WAS", copy:["£350.00","RRP:","£500.00","WAS:","£500.00","Save £20","Points extra save £11"], svg:'../assets/figma-atoms/price/type-sale-save-pricetype-was.svg' },
          { key:'type-sale-percent-pricetype-rrp', label:"Type=Sale-percent, PriceType=RRP", copy:["£350.00","RRP:","£500.00","RRP:","£500.00","Save 18% on RRP"], svg:'../assets/figma-atoms/price/type-sale-percent-pricetype-rrp.svg' },
          { key:'type-bought-separately-pricetype', label:"Type=Bought separately, PriceType=-", copy:["£350.00","RRP:","£500.00","£500.00","Bought separately","RRP:","£500.00","WAS:","£500.00","Save £20"], svg:'../assets/figma-atoms/price/type-bought-separately-pricetype.svg' },
          { key:'type-sale-percent-pricetype-was', label:"Type=Sale-percent, PriceType=WAS", copy:["£350.00","RRP:","£500.00","WAS:","£500.00","18% off","Points extra save £11"], svg:'../assets/figma-atoms/price/type-sale-percent-pricetype-was.svg' },
          { key:'type-pricetype-rrp', label:"Type=荷兰拍, PriceType=RRP", copy:["£350.00","RRP:","£500.00","RRP:","£500.00"], svg:'../assets/figma-atoms/price/type-pricetype-rrp.svg' },
          { key:'type-pricetype-was', label:"Type=荷兰拍, PriceType=WAS", copy:["£350.00","RRP:","£500.00","WAS:","£500.00"], svg:'../assets/figma-atoms/price/type-pricetype-was.svg' },
          { key:'type-default-pricetype', label:"Type=Default, PriceType=-", copy:["£350.00"], svg:'../assets/figma-atoms/price/type-default-pricetype.svg' }
        ]
      },
      {
        slug: 'price-first-line', name_cn: '首行价格', name_en: 'Price (first line) / Sale',
        figma_node: '28919:271111', group: 'price',
        variants: [
          { key:'price-first-line-sale', label:"Price (first line)/Sale", copy:["£350.00","RRP:","£500.00"], svg:'../assets/figma-atoms/price-first-line/price-first-line-sale.svg' }
        ]
      },
      {
        slug: 'price-second-line', name_cn: '原价 / 折扣行', name_en: 'Price second line',
        figma_node: '28919:271383', group: 'price',
        variants: [
          { key:'type-rrp-direction-horizontal', label:"Type=RRP, Direction=Horizontal", copy:["RRP:","£500.00"], svg:'../assets/figma-atoms/price-second-line/type-rrp-direction-horizontal.svg' },
          { key:'type-was-direction-horizontal', label:"Type=Was, Direction=Horizontal", copy:["WAS:","£500.00"], svg:'../assets/figma-atoms/price-second-line/type-was-direction-horizontal.svg' },
          { key:'type-ppr-discount1-direction-horizontal', label:"Type=PPR+Discount1, Direction=Horizontal", copy:["RRP:","£500.00","Save 18% on RRP"], svg:'../assets/figma-atoms/price-second-line/type-ppr-discount1-direction-horizontal.svg' },
          { key:'type-was-discount1-direction-horizontal', label:"Type=Was+Discount1, Direction=Horizontal", copy:["WAS:","£500.00","18% off"], svg:'../assets/figma-atoms/price-second-line/type-was-discount1-direction-horizontal.svg' },
          { key:'type-ppr-discount2-direction-horizontal', label:"Type=PPR+Discount2, Direction=Horizontal", copy:["RRP:","£500.00","Save £20.00 on RRP"], svg:'../assets/figma-atoms/price-second-line/type-ppr-discount2-direction-horizontal.svg' },
          { key:'type-was-discount2-direction-horizontal', label:"Type=Was+Discount2, Direction=Horizontal", copy:["WAS:","£500.00","Save £20"], svg:'../assets/figma-atoms/price-second-line/type-was-discount2-direction-horizontal.svg' },
          { key:'type-ppr-discount1-direction-vertical', label:"Type=PPR+Discount1, Direction=Vertical", copy:["RRP:","£500.00","Save 18% on RRP"], svg:'../assets/figma-atoms/price-second-line/type-ppr-discount1-direction-vertical.svg' },
          { key:'type-was-discount1-direction-vertical', label:"Type=Was+Discount1, Direction=Vertical", copy:["WAS:","£500.00","18% off"], svg:'../assets/figma-atoms/price-second-line/type-was-discount1-direction-vertical.svg' },
          { key:'type-ppr-discount2-direction-vertical', label:"Type=PPR+Discount2, Direction=Vertical", copy:["RRP:","£500.00","Save £20.00 on RRP"], svg:'../assets/figma-atoms/price-second-line/type-ppr-discount2-direction-vertical.svg' },
          { key:'type-was-discount2-direction-vertical', label:"Type=Was+Discount2, Direction=Vertical", copy:["WAS:","£500.00","Save £20"], svg:'../assets/figma-atoms/price-second-line/type-was-discount2-direction-vertical.svg' },
          { key:'type-bought-separately-rrp-direction-vertical', label:"Type=Bought separately+RRP, Direction=Vertical", copy:["£500.00","Bought separately","RRP:","£500.00"], svg:'../assets/figma-atoms/price-second-line/type-bought-separately-rrp-direction-vertical.svg' }
        ]
      },
      {
        slug: 'plus-price', name_cn: 'Plus 会员价', name_en: 'Plus price',
        figma_node: '32340:248093', group: 'price',
        variants: [
          { key:'type-no-total-promotion-direction-vertical', label:"Type=No Total Promotion, Direction=Vertical", copy:["Plus price","£330.00"], svg:'../assets/figma-atoms/plus-price/type-no-total-promotion-direction-vertical.svg' },
          { key:'type-with-total-promotion-direction-default', label:"Type=With Total Promotion, Direction=Default", copy:["Plus price","Pay £339.99 after promotion"], svg:'../assets/figma-atoms/plus-price/type-with-total-promotion-direction-default.svg' },
          { key:'type-no-total-promotion-direction-horizontal', label:"Type=No Total Promotion, Direction=Horizontal", copy:["Plus price","£330.00"], svg:'../assets/figma-atoms/plus-price/type-no-total-promotion-direction-horizontal.svg' }
        ]
      },
      {
        slug: 'points-extra-save', name_cn: '积分额外优惠', name_en: 'Points extra save',
        figma_node: '35263:114074', group: 'price',
        variants: [
          { key:'points-extra-save', label:"Points extra save", copy:["Points extra save £11"], svg:'../assets/figma-atoms/points-extra-save/points-extra-save.svg' }
        ]
      },
      {
        slug: 'bottle-deposit', name_cn: '瓶押金', name_en: 'Bottle Deposit',
        figma_node: '38170:288698', group: 'price',
        variants: [
          { key:'bottle-deposit', label:"Bottle Deposit", copy:["Excl. deposit £0.15"], svg:'../assets/figma-atoms/bottle-deposit/bottle-deposit.svg' }
        ]
      },
      {
        slug: 'total-promotion', name_cn: '总促', name_en: 'Total Promotion',
        figma_node: '28444:79591', group: 'price',
        variants: [
          { key:'type-pay-after-promotion', label:"Type=Pay after promotion", copy:["Pay £339.99 after promotion"], svg:'../assets/figma-atoms/total-promotion/type-pay-after-promotion.svg' },
          { key:'type-buy-2-get-30-off', label:"Type=Buy 2 Get 30% Off", copy:["Buy 2 Get 30% Off"], svg:'../assets/figma-atoms/total-promotion/type-buy-2-get-30-off.svg' },
          { key:'type-15-00-off-over-100-00', label:"Type=£15.00 Off over £100.00", copy:["£15.00 Off over £100.00   "], svg:'../assets/figma-atoms/total-promotion/type-15-00-off-over-100-00.svg' },
          { key:'type-buy-1-get-1-free', label:"Type=Buy 1 get 1 free", copy:["Buy 1 get 1 free"], svg:'../assets/figma-atoms/total-promotion/type-buy-1-get-1-free.svg' },
          { key:'type-3-for-2', label:"Type=3 for 2", copy:["3 for 2"], svg:'../assets/figma-atoms/total-promotion/type-3-for-2.svg' },
          { key:'type-virtual-gift-3-00-in-gifts', label:"Type=Virtual gift-£3.00 in gifts", copy:["£3.00 in gifts"], svg:'../assets/figma-atoms/total-promotion/type-virtual-gift-3-00-in-gifts.svg' },
          { key:'type-virtual-gift-gift-up-to-3-00', label:"Type=Virtual gift-Gift up to £3.00", copy:["Gift up to £3.00"], svg:'../assets/figma-atoms/total-promotion/type-virtual-gift-gift-up-to-3-00.svg' },
          { key:'type-virtual-gift-pick-3-gifts', label:"Type=Virtual gift-Pick 3 gifts", copy:["Pick 3 gifts"], svg:'../assets/figma-atoms/total-promotion/type-virtual-gift-pick-3-gifts.svg' },
          { key:'type-virtual-gift-3-gifts', label:"Type=Virtual gift-3 gifts", copy:["3 gifts"], svg:'../assets/figma-atoms/total-promotion/type-virtual-gift-3-gifts.svg' },
          { key:'type-points', label:"Type=points", copy:["+500 pts = £5 off"], svg:'../assets/figma-atoms/total-promotion/type-points.svg' },
          { key:'type-repeat-save-up-to-7', label:"Type=Repeat & Save up to 7%", copy:["Repeat & Save up to 7%"], svg:'../assets/figma-atoms/total-promotion/type-repeat-save-up-to-7.svg' },
          { key:'type-limited-time-discount', label:"Type=Limited-time discount", copy:["Limited-time discount £5"], svg:'../assets/figma-atoms/total-promotion/type-limited-time-discount.svg' },
          { key:'type-virtual-gift-free-gift', label:"Type=Virtual gift-Free gift", copy:["Free gift"], svg:'../assets/figma-atoms/total-promotion/type-virtual-gift-free-gift.svg' },
          { key:'type-spend-get-gift-1', label:"Type=Spend & Get Gift 1", copy:["Buy £100, £50 gift"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-1.svg' },
          { key:'type-spend-get-gift-2', label:"Type=Spend & Get Gift 2", copy:["Buy £100, £50 gifts"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-2.svg' },
          { key:'type-spend-get-gift-3', label:"Type=Spend & Get Gift 3", copy:["Buy £100, pick £50 gift"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-3.svg' },
          { key:'type-spend-get-gift-4', label:"Type=Spend & Get Gift 4", copy:["Buy £100, pick 3 gifts"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-4.svg' },
          { key:'type-spend-get-gift-5', label:"Type=Spend & Get Gift 5", copy:["Buy £100, 3 gifts"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-5.svg' },
          { key:'type-spend-get-gift-6', label:"Type=Spend & Get Gift 6", copy:["Buy £100, free gift"], svg:'../assets/figma-atoms/total-promotion/type-spend-get-gift-6.svg' }
        ]
      },
      {
        slug: 'ai-recommendation', name_cn: 'AI 推荐理由', name_en: 'AI Recommendation Reasons',
        figma_node: '32898:283434', group: 'status',
        variants: [
          { key:'type-more-buying-choices', label:"Type=More buying choices", copy:["More buying choices"], svg:'../assets/figma-atoms/ai-recommendation/type-more-buying-choices.svg' },
          { key:'type-spu-spu', label:"Type=SPU(除颜色外的SPU)", copy:["More options inside"], svg:'../assets/figma-atoms/ai-recommendation/type-spu-spu.svg' },
          { key:'type-ai-review-summary-ai', label:"Type=AI Review Summary （AI短评）", copy:["‘Beautifully packaged’"], svg:'../assets/figma-atoms/ai-recommendation/type-ai-review-summary-ai.svg' },
          { key:'type-ai-selling-points-ai', label:"Type=AI selling points（AI卖点）", copy:["‘Ultimate Silence’"], svg:'../assets/figma-atoms/ai-recommendation/type-ai-selling-points-ai.svg' },
          { key:'type-bestseller', label:"Type=Bestseller (榜单)", copy:["Bestseller#1 in Refrigeration"], svg:'../assets/figma-atoms/ai-recommendation/type-bestseller.svg' },
          { key:'type-last-30d-price-30', label:"Type=Last 30D Price(近30天价格)", copy:["Lowest price in last 30 days"], svg:'../assets/figma-atoms/ai-recommendation/type-last-30d-price-30.svg' },
          { key:'type-previously-purchased', label:"Type=Previously purchased", copy:["Previously purchased"], svg:'../assets/figma-atoms/ai-recommendation/type-previously-purchased.svg' },
          { key:'type-previously-added-to-cart', label:"Type=Previously added to cart", copy:["Previously added to cart"], svg:'../assets/figma-atoms/ai-recommendation/type-previously-added-to-cart.svg' },
          { key:'type-bought-from-this-store-before', label:"Type=Bought from this store before", copy:["Bought from this store before"], svg:'../assets/figma-atoms/ai-recommendation/type-bought-from-this-store-before.svg' },
          { key:'type-added-from-this-store-before', label:"Type=Added from this store before", copy:["Added from this store before"], svg:'../assets/figma-atoms/ai-recommendation/type-added-from-this-store-before.svg' }
        ]
      },
      {
        slug: 'stock', name_cn: '库存状态', name_en: 'Stock',
        figma_node: '32123:126688', group: 'status',
        variants: [
          { key:'low-stock-no-out-of-stock-yes', label:"Low-stock=no, Out of stock=yes", copy:["Out of stock"], svg:'../assets/figma-atoms/stock/low-stock-no-out-of-stock-yes.svg' },
          { key:'low-stock-yes-out-of-stock-no', label:"Low-stock=yes, Out of stock=no", copy:["Only 10 left"], svg:'../assets/figma-atoms/stock/low-stock-yes-out-of-stock-no.svg' }
        ]
      },
      {
        slug: 'fulfillment-time', name_cn: '履约时效', name_en: 'Fulfillment Time',
        figma_node: '30176:215168', group: 'status',
        note: 'Figma 当前 Joybuy / POP 两个变体都使用文案 Get it by today；不允许自行改写冷链、隔日达等履约文案。',
        variants: [
          { key:'fulfillment-type-joybuy', label:"Fulfillment Type=Joybuy", copy:["Get it by today"], svg:'../assets/figma-atoms/fulfillment-time/fulfillment-type-joybuy.svg' },
          { key:'fulfillment-type-pop', label:"Fulfillment Type=POP", copy:["Get it by today"], svg:'../assets/figma-atoms/fulfillment-time/fulfillment-type-pop.svg' }
        ]
      },
      {
        slug: 'service', name_cn: '服务', name_en: 'Service',
        figma_node: '35028:414966', group: 'status',
        variants: [
          { key:'type-install-recyle', label:"Type=Install & Recyle", copy:["Install & Recyle"], svg:'../assets/figma-atoms/service/type-install-recyle.svg' },
          { key:'type-gift-wrapping', label:"Type=Gift wrapping", copy:["Gift wrapping"], svg:'../assets/figma-atoms/service/type-gift-wrapping.svg' }
        ]
      },
      {
        slug: 'energy', name_cn: '能效等级', name_en: 'Energy',
        figma_node: '19506:81975', group: 'status',
        variants: [
          { key:'property-1-default', label:"Property 1=Default", copy:["• Set of monitors for producer","• Active speakers","A","4.5","Product sheet","4.5","Product sheet"], svg:'../assets/figma-atoms/energy/property-1-default.svg' },
          { key:'property-1-longtext', label:"Property 1=Longtext", copy:["• Set of monitors for producer","• Active speakers","A","4.5","Product sheet","4.5","Productinformatieblad"], svg:'../assets/figma-atoms/energy/property-1-longtext.svg' },
          { key:'property-1-variant2', label:"Property 1=Variant2", copy:["• Set of monitors for producer","• Active speakers","A","4.5","Product sheet","4.5","Product fiche"], svg:'../assets/figma-atoms/energy/property-1-variant2.svg' },
          { key:'property-1-variant4', label:"Property 1=Variant4", copy:["• Set of monitors for producer","• Active speakers","A","4.5","Life 5d+","4.5","Product fiche"], svg:'../assets/figma-atoms/energy/property-1-variant4.svg' }
        ]
      },
      {
        slug: 'country-of-origin-small', name_cn: '原产地小标', name_en: 'Country of origin (small)',
        figma_node: '34329:210312', group: 'status',
        note: '小尺寸原产地图标组件；完整文案版见 Country of origin。',
        variants: [
          { key:'country-wales-size-small', label:"Country=Wales, Size=small", copy:[], svg:'../assets/figma-atoms/country-of-origin-small/country-wales-size-small.svg' },
          { key:'country-united-kingdom-size-small', label:"Country=United Kingdom, Size=small", copy:[], svg:'../assets/figma-atoms/country-of-origin-small/country-united-kingdom-size-small.svg' },
          { key:'country-scotland-size-small', label:"Country=Scotland, Size=small", copy:[], svg:'../assets/figma-atoms/country-of-origin-small/country-scotland-size-small.svg' },
          { key:'country-england-size-small', label:"Country=England, Size=small", copy:[], svg:'../assets/figma-atoms/country-of-origin-small/country-england-size-small.svg' },
          { key:'country-ireland-size-small', label:"Country=Ireland, Size=small", copy:[], svg:'../assets/figma-atoms/country-of-origin-small/country-ireland-size-small.svg' }
        ]
      },
      {
        slug: 'country-of-origin', name_cn: '原产地', name_en: 'Country of origin',
        figma_node: '34329:219992', group: 'status',
        variants: [
          { key:'country-of-origin-wales', label:"Country of origin=Wales", copy:["From Wales"], svg:'../assets/figma-atoms/country-of-origin/country-of-origin-wales.svg' },
          { key:'country-of-origin-united-kingdom', label:"Country of origin=United Kingdom", copy:["From United Kingdom"], svg:'../assets/figma-atoms/country-of-origin/country-of-origin-united-kingdom.svg' },
          { key:'country-of-origin-scotland', label:"Country of origin=Scotland", copy:["From Scotland"], svg:'../assets/figma-atoms/country-of-origin/country-of-origin-scotland.svg' },
          { key:'country-of-origin-england', label:"Country of origin=England", copy:["From England"], svg:'../assets/figma-atoms/country-of-origin/country-of-origin-england.svg' },
          { key:'country-of-origin-ireland', label:"Country of origin=Ireland", copy:["From Ireland"], svg:'../assets/figma-atoms/country-of-origin/country-of-origin-ireland.svg' }
        ]
      },
      {
        slug: 'btn-cart', name_cn: '加购按钮', name_en: 'Btn_Cart',
        figma_node: '5551:16896', group: 'interact',
        variants: [
          { key:'property-1-btn-add-to-cart', label:"Property 1=Btn - add to cart", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-add-to-cart.svg' },
          { key:'property-1-add-success-1', label:"Property 1=Add-Success 1", copy:["1"], svg:'../assets/figma-atoms/btn-cart/add-success-1.svg' },
          { key:'property-1-add-success-n', label:"Property 1=Add-Success N", copy:["2"], svg:'../assets/figma-atoms/btn-cart/add-success-n.svg' },
          { key:'property-1-add-success-loading', label:"Property 1=Add-success-loading", copy:[], svg:'../assets/figma-atoms/btn-cart/add-success-loading.svg' },
          { key:'property-1-btn-add-result1', label:"Property 1=Btn-add-result1", copy:["1"], svg:'../assets/figma-atoms/btn-cart/btn-add-result1.svg' },
          { key:'property-1-btn-add-result-mul', label:"Property 1=Btn-add-result mul", copy:["99+"], svg:'../assets/figma-atoms/btn-cart/btn-add-result-mul.svg' },
          { key:'property-1-btn-add-to-cart-added', label:"Property 1=Btn - add to cart-added", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-add-to-cart-added.svg' },
          { key:'property-1-btn-add-to-cart-loading', label:"Property 1=Btn - add to cart -loading", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-add-to-cart-loading.svg' },
          { key:'property-1-btn-add-to-cart-hover', label:"Property 1=Btn-add to cart-hover", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-add-to-cart-hover.svg' },
          { key:'property-1-btn-add-press', label:"Property 1=Btn-add-press", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-add-press.svg' },
          { key:'property-1-btn-view-detail', label:"Property 1=Btn - view detail", copy:[], svg:'../assets/figma-atoms/btn-cart/btn-view-detail.svg' }
        ]
      },
      {
        slug: 'button-group', name_cn: '按钮组', name_en: 'Button Group',
        figma_node: '20130:84513', group: 'interact',
        variants: [
          { key:'button-group', label:"Button Group", copy:["Subscribed"], svg:'../assets/figma-atoms/button-group/button-group.svg' }
        ]
      },
      {
        slug: 'notify-button', name_cn: '到货通知按钮', name_en: 'Notify Button',
        figma_node: '5551:26008', group: 'interact',
        variants: [
          { key:'notify-button', label:"Notify Button", copy:["Notify"], svg:'../assets/figma-atoms/notify-button/notify-button.svg' }
        ]
      },
    ]
  };
})();
