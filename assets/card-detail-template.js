/* Shared information architecture for product-card detail pages. */
(function () {
  var site = document.querySelector('.site--card-detail');
  if (!site || document.getElementById('s-figma-map')) return;

  var pageConfig = {
    'horizontal-card': {
      name: { zh: '通用横向商品卡', en: 'Universal Horizontal Product Card' },
      node: '22236-148505'
    },
    'horizontal-mini': {
      name: { zh: '通用横向小图商品卡', en: 'Universal Horizontal Mini Product Card' },
      node: '32320-129668'
    },
    'horizontal-scroll': {
      name: { zh: '横滑商品卡', en: 'Horizontal Scroll Product Card' },
      node: '22236-148731'
    },
    'campaign-card': {
      name: { zh: '活动商品卡', en: 'Campaign Product Card' },
      node: '5591-17366'
    },
    'booking-card': {
      name: { zh: '预约商品卡', en: 'Booking Product Card' },
      node: '22303-189590'
    },
    'small-dynamic': {
      name: { zh: '小图动态商品卡', en: 'Small Image Dynamic Product Card' },
      node: '21655-154555'
    }
  };

  var host = document.querySelector('.usedin[data-card-key]');
  var key = host ? host.getAttribute('data-card-key') : '';
  var config = pageConfig[key];
  if (!config) return;

  var COPY = {
    tabs: {
      zh: ['概览', 'Figma 标注', '使用页面', '组件结构', '常见样式', '字段说明', '使用建议', '获取组件'],
      en: ['Overview', 'Figma Map', 'Where It Lives', 'Anatomy', 'Common Variants', 'Field Guide', 'Usage Guidance', 'Get Component']
    },
    headings: {
      overview: { zh: '概览', en: 'Overview' },
      figmaMap: { zh: 'Figma 字段全景', en: 'Figma Field Map' },
      used: { zh: '商卡使用页面', en: 'Where This Card Lives' },
      structure: { zh: '组件结构', en: 'Anatomy' },
      types: { zh: '常见样式', en: 'Common Variants' },
      data: { zh: '字段说明', en: 'Field Guide' },
      when: { zh: '使用建议', en: 'Usage Guidance' },
      figma: { zh: '获取组件', en: 'Get the Component' }
    },
    ledes: {
      figmaMap: {
        zh: '先从真实设计了解完整字段、位置和可选关系，再进入后面的结构与字段规则。',
        en: 'Start with the real design to understand every field, its position, and whether it is optional before reading the detailed rules.'
      },
      used: {
        zh: '查看这张商卡在真实业务页面中的使用位置；点击页面卡片可打开对应的 Figma 画板。',
        en: 'See where this card lives in real product pages, then open a page card to inspect its Figma frame.'
      },
      structure: {
        zh: '先看卡片由哪些区域组成，以及必填内容和可选内容如何依次排列。',
        en: 'See how the card is assembled and how required and optional content are ordered.'
      },
      types: {
        zh: '根据业务需要选择合适的样式；不同样式共用同一套核心内容规则。',
        en: 'Choose a variant for the business context; every variant follows the same core content rules.'
      },
      data: {
        zh: '这里列出每个字段从哪里来、是否必需，以及没有数据时如何处理，方便设计与开发快速核对。',
        en: 'Use this table to check where each field comes from, whether it is required, and what happens when data is missing.'
      },
      when: {
        zh: '先判断页面任务、信息密度和操作需求，再决定是否使用这类商卡。',
        en: 'Choose this card after checking the page task, information density, and required actions.'
      },
      figma: { zh: '从规范进入真实设计。', en: 'From spec to real design.' }
    },
    actions: {
      openLibrary: { zh: '在 Design Library 打开', en: 'Open in Design Library' },
      ready: { zh: '准备使用', en: 'Ready to Build' },
      useComponent: { zh: '决定用这个了', en: 'Use This Component' },
      live: { zh: '可用', en: 'Live' },
      openDesc: { zh: '打开主组件，在 Figma 中查看变体、图层与标注。', en: 'Open the main component to inspect variants, layers, and specifications in Figma.' },
      open: { zh: '在 Figma 打开', en: 'Open in Figma' },
      copyKey: { zh: '复制组件 Key', en: 'Copy Component Key' },
      copyDesc: { zh: '复制组件标识，在配套工具中快速定位同一主组件。', en: 'Copy the component identifier to locate the same main component in supported tools.' },
      download: { zh: '下载 .fig 组件包', en: 'Download .fig Kit' },
      downloadDesc: { zh: '下载包含完整变体与图层结构的离线组件包。', en: 'Download an offline component kit with complete variants and layer structure.' },
      plugin: { zh: '通过插件插入', en: 'Insert via Plugin' },
      pluginDesc: { zh: '通过配套插件将当前商卡及字段配置一键插入画布。', en: 'Insert the current card and field configuration into the canvas with the companion plugin.' },
      soon: { zh: '即将开放', en: 'Coming Soon' },
      unavailable: { zh: '暂未开放', en: 'Not Available Yet' },
      view: { zh: '查看页面', en: 'View Page' },
      onPage: { zh: '同页商卡', en: 'Cards on This Page' },
      thisCard: { zh: '本卡', en: 'This Card' },
      close: { zh: '关闭', en: 'Close' },
      blank: { zh: '如果显示空白，请在 Figma 分享面板开启“知道链接的人可查看”权限。', en: 'If blank, enable “Anyone with the link” access in the Figma share panel.' }
    }
  };

  var sections = {
    overview: document.getElementById('s-overview'),
    used: document.getElementById('s-used'),
    structure: document.getElementById('s-structure'),
    types: document.getElementById('s-types'),
    data: document.getElementById('s-data'),
    when: document.getElementById('s-when'),
    figma: document.getElementById('s-figma')
  };
  if (Object.keys(sections).some(function (sectionKey) { return !sections[sectionKey]; })) return;

  document.querySelectorAll('.head__eyebrow, .head__title-en, .head__metas').forEach(function (element) {
    element.remove();
  });

  function language() {
    if (window.JoybuySite && typeof window.JoybuySite.getLanguage === 'function') {
      return window.JoybuySite.getLanguage();
    }
    return document.documentElement.lang === 'en' ? 'en' : 'zh';
  }

  function directChild(section, selector) {
    return Array.prototype.filter.call(section.children, function (child) { return child.matches(selector); })[0] || null;
  }

  function setHeading(section, index, copyKey) {
    var oldHead = directChild(section, '.section__head');
    var oldEyebrow = directChild(section, '.section__eyebrow');
    var oldTitle = directChild(section, '.section__title');
    if (oldHead) oldHead.remove();
    if (oldEyebrow) oldEyebrow.remove();
    if (oldTitle) oldTitle.remove();

    var heading = document.createElement('div');
    heading.className = 'section__head';
    heading.innerHTML = '<span class="section__index">' + index + '</span><h2 class="section__title" data-detail-heading="' + copyKey + '"></h2>';
    section.insertBefore(heading, section.firstChild);
  }

  function setLede(section, copyKey) {
    var lede = directChild(section, '.section__lede, .section__lead');
    if (!lede) {
      lede = document.createElement('p');
      section.insertBefore(lede, section.children[1] || null);
    }
    lede.className = 'section__lede section__lead';
    lede.setAttribute('data-detail-lede', copyKey);
  }

  var oldFigmaWrap = sections.figma.querySelector('.figma-wrap');
  var figmaMap = document.createElement('section');
  figmaMap.className = 'section';
  figmaMap.id = 's-figma-map';
  figmaMap.innerHTML = '<div class="section__head"><span class="section__index">02</span><h2 class="section__title" data-detail-heading="figmaMap"></h2></div>' +
    '<p class="section__lede section__lead" data-detail-lede="figmaMap"></p>';
  if (oldFigmaWrap) {
    oldFigmaWrap.style.marginTop = '20px';
    var hint = oldFigmaWrap.querySelector('.figma-hint');
    if (hint) hint.setAttribute('data-detail-action', 'blank');
    figmaMap.appendChild(oldFigmaWrap);
  }

  setHeading(sections.overview, '01', 'overview');
  setHeading(sections.used, '03', 'used');
  setLede(sections.used, 'used');
  setHeading(sections.structure, '04', 'structure');
  setLede(sections.structure, 'structure');
  setHeading(sections.types, '05', 'types');
  setLede(sections.types, 'types');
  setHeading(sections.data, '06', 'data');
  setLede(sections.data, 'data');
  setHeading(sections.when, '07', 'when');
  setLede(sections.when, 'when');

  var figmaUrl = 'https://www.figma.com/design/eInnhKDnBhPIyPprZADdnO/App-Business-Components?node-id=' + config.node;
  if (!sections.overview.querySelector('.use-cta')) {
    var overviewCta = document.createElement('div');
    overviewCta.className = 'use-cta';
    overviewCta.innerHTML =
      '<div class="use-cta__left">' +
        '<span class="use-cta__eyebrow" data-detail-action="ready"></span>' +
        '<span class="use-cta__title" data-detail-action="useComponent"></span>' +
      '</div>' +
      '<div class="use-cta__actions">' +
        '<a class="use-cta__btn use-cta__btn--primary" href="' + figmaUrl + '" target="_blank" rel="noopener" data-detail-action="open"></a>' +
      '</div>';
    sections.overview.appendChild(overviewCta);
  }

  sections.figma.innerHTML =
    '<div class="section__head"><span class="section__index">08</span><h2 class="section__title" data-detail-heading="figma"></h2></div>' +
    '<p class="section__lede section__lead" data-detail-lede="figma"></p>' +
    '<div class="handoff-grid">' +
      '<div class="handoff-card handoff-card--live">' +
        '<div class="handoff-card__top"><span class="handoff-card__name" data-detail-action="openLibrary"></span><span class="handoff-card__tag handoff-card__tag--live" data-detail-action="live"></span></div>' +
        '<p class="handoff-card__desc" data-detail-action="openDesc"></p>' +
        '<a class="handoff-card__btn handoff-card__btn--primary" href="' + figmaUrl + '" target="_blank" rel="noopener" data-detail-action="open"></a>' +
      '</div>' +
      '<div class="handoff-card handoff-card--disabled" aria-disabled="true">' +
        '<div class="handoff-card__top"><span class="handoff-card__name" data-detail-action="copyKey"></span><span class="handoff-card__tag handoff-card__tag--soon" data-detail-action="soon"></span></div>' +
        '<p class="handoff-card__desc" data-detail-action="copyDesc"></p>' +
        '<button class="handoff-card__btn handoff-card__btn--disabled" type="button" disabled data-detail-action="unavailable"></button>' +
      '</div>' +
      '<div class="handoff-card handoff-card--disabled" aria-disabled="true">' +
        '<div class="handoff-card__top"><span class="handoff-card__name" data-detail-action="download"></span><span class="handoff-card__tag handoff-card__tag--soon" data-detail-action="soon"></span></div>' +
        '<p class="handoff-card__desc" data-detail-action="downloadDesc"></p>' +
        '<button class="handoff-card__btn handoff-card__btn--disabled" type="button" disabled data-detail-action="unavailable"></button>' +
      '</div>' +
      '<div class="handoff-card handoff-card--disabled" aria-disabled="true">' +
        '<div class="handoff-card__top"><span class="handoff-card__name" data-detail-action="plugin"></span><span class="handoff-card__tag handoff-card__tag--soon" data-detail-action="soon"></span></div>' +
        '<p class="handoff-card__desc" data-detail-action="pluginDesc"></p>' +
        '<button class="handoff-card__btn handoff-card__btn--disabled" type="button" disabled data-detail-action="unavailable"></button>' +
      '</div>' +
    '</div>';

  sections.overview.after(figmaMap, sections.used, sections.structure, sections.types, sections.data, sections.when, sections.figma);

  var tabIds = ['s-overview', 's-figma-map', 's-used', 's-structure', 's-types', 's-data', 's-when', 's-figma'];
  var tabsInner = document.querySelector('.doc-tabs__inner');

  function renderTabs(lang) {
    if (!tabsInner) return;
    tabsInner.innerHTML = tabIds.map(function (id, index) {
      return '<a class="doc-tabs__link' + (index === 0 ? ' is-active' : '') + '" href="#' + id + '" data-tab="' + id + '">' +
        '<span class="doc-tabs__link-idx">' + String(index + 1).padStart(2, '0') + '</span><span>' + COPY.tabs[lang][index] + '</span></a>';
    }).join('');
  }

  function syncStaticCopy() {
    var lang = language();
    document.querySelectorAll('[data-detail-heading]').forEach(function (element) {
      element.textContent = COPY.headings[element.getAttribute('data-detail-heading')][lang];
    });
    document.querySelectorAll('[data-detail-lede]').forEach(function (element) {
      element.textContent = COPY.ledes[element.getAttribute('data-detail-lede')][lang];
    });
    document.querySelectorAll('[data-detail-action]').forEach(function (element) {
      var action = COPY.actions[element.getAttribute('data-detail-action')];
      if (action) element.textContent = action[lang];
    });
    renderTabs(lang);
    syncUsedIn();
    syncOpenFrame();
    updateTabs();
  }

  var syncingUsed = false;
  function syncUsedIn() {
    if (!host || !window.PAGES_DATA || syncingUsed) return;
    syncingUsed = true;
    var lang = language();
    var summary = host.querySelector('.uin-summary');
    if (summary && host.querySelector('.uin-grid')) summary.remove();
    host.querySelectorAll('[data-open-page]').forEach(function (card) {
      var page = window.PAGES_DATA.pages.filter(function (item) { return item.id === card.getAttribute('data-open-page'); })[0];
      if (!page) return;
      var name = card.querySelector('.uin-card__name');
      var image = card.querySelector('.uin-card__thumb img');
      var action = card.querySelector('.uin-card__open span');
      if (name && name.textContent !== page.short[lang]) name.textContent = page.short[lang];
      if (image) {
        image.src = '../' + page.shot;
        image.alt = page.short[lang];
      }
      if (action && action.textContent !== COPY.actions.view[lang]) action.textContent = COPY.actions.view[lang];
    });
    syncingUsed = false;
  }

  var openPageId = '';
  function syncOpenFrame() {
    if (!openPageId || !window.PAGES_DATA) return;
    var frame = document.querySelector('.uframe.is-open');
    var page = window.PAGES_DATA.pages.filter(function (item) { return item.id === openPageId; })[0];
    if (!frame || !page) return;
    var lang = language();
    var title = frame.querySelector('.uframe__title');
    var sub = frame.querySelector('.uframe__sub');
    var open = frame.querySelector('.uframe__open span');
    var close = frame.querySelector('.uframe__close');
    if (title) title.textContent = page.short[lang];
    if (sub) sub.textContent = page[lang];
    if (open) open.textContent = COPY.actions.open[lang];
    if (close) close.setAttribute('aria-label', COPY.actions.close[lang]);
    var footLabel = frame.querySelector('.uframe__foot-label');
    if (footLabel) footLabel.textContent = COPY.actions.onPage[lang];
    frame.querySelectorAll('.uframe__chip').forEach(function (chip) {
      if (chip.classList.contains('uframe__chip--self')) {
        chip.textContent = config.name[lang] + ' · ' + COPY.actions.thisCard[lang];
        return;
      }
      var href = chip.getAttribute('href') || '';
      Object.keys(window.PAGES_DATA.cards).forEach(function (cardKey) {
        var cardData = window.PAGES_DATA.cards[cardKey];
        if (href.indexOf(cardData.file) !== -1) chip.textContent = cardData[lang];
      });
    });
  }

  if (host) {
    host.addEventListener('click', function (event) {
      var card = event.target.closest('[data-open-page]');
      if (!card) return;
      openPageId = card.getAttribute('data-open-page');
      requestAnimationFrame(syncOpenFrame);
    });
    new MutationObserver(syncUsedIn).observe(host, { childList: true, subtree: true });
  }

  var tabLinks = [];
  var tabSections = tabIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  function updateTabs() {
    tabLinks = Array.prototype.slice.call(document.querySelectorAll('.doc-tabs__link[data-tab]'));
    var current = tabSections[0] ? tabSections[0].id : '';
    var y = window.scrollY + 160;
    tabSections.forEach(function (section) {
      if (section.offsetTop <= y) current = section.id;
    });
    tabLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-tab') === current);
    });
  }

  window.addEventListener('scroll', updateTabs, { passive: true });
  window.addEventListener('joybuy:languagechange', syncStaticCopy);
  syncStaticCopy();
})();
