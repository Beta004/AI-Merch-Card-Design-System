/* Joybuy Product Card DS · shared page catalog
   ------------------------------------------------------------------
   Single source of truth for BOTH the Pages Overview (pages/index.html)
   and each card's "出现在 / Used in" section.

   All paths are RELATIVE TO THE SITE ROOT. Every consumer page lives
   exactly one level deep (pages/…, organisms/…), so each prepends '../'.

   ⚠️ EDITABLE DRAFT: the card↔page placement, channel and DAU values below
   are a first-pass draft for layout. Replace with real 埋点 / DAU when ready
   — nothing else needs to change. Figma links are public / tokenless. */
(function () {
  var FILE = 'https://www.figma.com/design/eInnhKDnBhPIyPprZADdnO/App-Business-Components';
  var BOARD = '29323-190885'; /* 全局商卡汇总 overview board */

  function deepLink(node) { return FILE + '?node-id=' + node; }
  function embedLink(node) {
    return 'https://www.figma.com/embed?embed_host=share&url=' + encodeURIComponent(deepLink(node));
  }

  /* Card-type metadata — labels + file (root-relative). */
  var CARDS = {
    'vertical-card':     { zh: '通用双列',      en: 'Universal 2-Col',      file: 'organisms/vertical-card.html',     preview: 'assets/card-previews/universal-2-column.png',         shape: 'portrait' },
    'horizontal-card':   { zh: '通用横向',      en: 'Universal Horizontal', file: 'organisms/horizontal-card.html',   preview: 'assets/card-previews/universal-horizontal.png',       shape: 'wide' },
    'horizontal-mini':   { zh: '通用横向·小图', en: 'Horizontal Mini',      file: 'organisms/horizontal-mini.html',   preview: 'assets/card-previews/universal-horizontal-mini.png',  shape: 'strip' },
    'horizontal-scroll': { zh: '横滑商卡',      en: 'Horizontal Scroll',    file: 'organisms/horizontal-scroll.html', preview: 'assets/card-previews/horizontal-scroll.png',          shape: 'wide' },
    'campaign-card':     { zh: '活动商卡',      en: 'Campaign',             file: 'organisms/campaign-card.html',     preview: 'assets/card-previews/campaign.png',                   shape: 'wide' },
    'booking-card':      { zh: '预约商卡',      en: 'Booking',              file: 'organisms/booking-card.html',      preview: 'assets/card-previews/booking.png',                    shape: 'strip' },
    'small-dynamic':     { zh: '小图动态',      en: 'Small Image Dynamic',  file: 'organisms/small-dynamic.html',     preview: 'assets/card-previews/small-image-dynamic.png',        shape: 'strip' }
  };

  /* The 7 real app pages, in the order of the 全局商卡汇总 board (frames 1–7). */
  var PAGES = [
    { id: 'campaign-home', node: '29188-222209', owner: '范季轩',
      short: { zh: '活动页', en: 'Campaign' },
      zh: '活动页 · 首页 · 小首页 · 通天塔', en: 'Campaign · Home · Mini-home · Tongtianta',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/campaign-home.jpg',
      cards: ['campaign-card', 'vertical-card', 'horizontal-scroll', 'booking-card'] },

    { id: 'home-feeds', node: '29188-222043', owner: '霍营',
      short: { zh: '首猜 feeds', en: 'Home Feeds' },
      zh: '首猜(首页 feeds) · AI theme · 品牌 · Shop the Look', en: 'Home Feeds · AI Theme · Brand · Shop the Look',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/home-feeds.jpg',
      cards: ['vertical-card', 'horizontal-scroll', 'small-dynamic', 'campaign-card'],
      /* home-feed 楼层黄金模板并入此段：作为站内实现示例内嵌 */
      inhouse: { file: 'sections/home-feed.html', zh: '站内实现 · 首页推荐楼层', en: 'In-house build · Home Feed' } },

    { id: 'albot', node: '29188-221813', owner: '张冬妮 · 白雨东',
      short: { zh: 'Albot', en: 'Albot' },
      zh: 'Albot 智能导购', en: 'Albot',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/albot.jpg',
      cards: ['horizontal-mini', 'horizontal-scroll', 'small-dynamic'] },

    { id: 'content', node: '29188-221508', owner: '',
      short: { zh: '内容', en: 'Content' },
      zh: '内容', en: 'Content',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/content.jpg',
      cards: ['vertical-card', 'horizontal-card', 'booking-card'] },

    { id: 'wishlist', node: '29188-221478', owner: '',
      short: { zh: '心愿单', en: 'Wishlist' },
      zh: '心愿单', en: 'Wishlist',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/wishlist.jpg',
      cards: ['horizontal-card', 'horizontal-mini'] },

    { id: 'search-store', node: '29188-221545', owner: '',
      short: { zh: '搜索 · 店铺', en: 'Search · Store' },
      zh: '搜索结果页 · 店铺', en: 'Search Results · Store',
      channel: 'Native', dau: '—', shot: 'assets/page-shots/figma/search-store.jpg',
      cards: ['vertical-card', 'horizontal-card', 'horizontal-mini'] },

    { id: 'external-pdp', node: '29188-223858', owner: '汪博文',
      short: { zh: '外投商详', en: 'External PDP' },
      zh: '外投商详', en: 'External PDP',
      channel: 'CMS', dau: '—', shot: 'assets/page-shots/figma/external-pdp.jpg',
      cards: ['horizontal-card', 'horizontal-scroll'] }
  ];

  function pagesForCard(cardKey) {
    return PAGES.filter(function (p) { return p.cards.indexOf(cardKey) !== -1; });
  }

  window.PAGES_DATA = {
    file: FILE,
    board: BOARD,
    deepLink: deepLink,
    embedLink: embedLink,
    cards: CARDS,
    pages: PAGES,
    pagesForCard: pagesForCard
  };
})();
