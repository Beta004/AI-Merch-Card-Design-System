/* Joybuy Product Card Design System · shared top navigation, mega-menu and global chrome */
(function () {
  var navScriptSrc = document.currentScript && document.currentScript.src;
  var brandAssetBase = navScriptSrc ? new URL('brand/', navScriptSrc).href : 'assets/brand/';

  /* ------------------------------------------------------------------
   * TOP_TABS · focused 4-tab data model driving the global top bar.
   *   kind: 'link'  → tab is a direct link
   *   kind: 'menu'  → tab opens a hover mega-menu; tab click routes to `target`
   *   showPreview   → mega-menu renders a left preview panel that
   *                   updates on sub-item hover (currently only 商卡)
   * ------------------------------------------------------------------ */
  var TOP_TABS = [
    { top: 'home', zh: '首页', en: 'Home', kind: 'link', target: 'home' },
    { top: 'organisms', zh: '商卡', en: 'Product Cards', kind: 'menu', target: 'organisms', showPreview: true, children: [
      { key: 'organisms',                  zh: '总览',         en: 'Overview', overview: true,
        desc: { zh: '7 类商卡卡片墙 · 从这里进入任一商卡详情', en: '7 cards grid · entry to every card detail' } },
      { key: 'organisms/vertical-card',    zh: '通用双列',     en: 'Universal 2-Column',
        desc: { zh: '176px 主图 · 双列主流 · 首页/搜索/类目',   en: '176px hero · main-flow · home/search/category' } },
      { key: 'organisms/horizontal-card',  zh: '通用横向',     en: 'Universal Horizontal',
        desc: { zh: '88×88 主图 · 单列决策 · 搜索/详情/愿望单', en: '88×88 hero · single-column · search/PDP/wishlist' } },
      { key: 'organisms/horizontal-mini',  zh: '通用横向-小图', en: 'Universal Horizontal Mini',
        desc: { zh: '64×64 主图 · 高密度 · 助手/愿望单入口',    en: '64×64 hero · high-density · bot/wishlist entry' } },
      { key: 'organisms/horizontal-scroll',zh: '横滑商卡',     en: 'Horizontal Scroll',
        desc: { zh: '横向滑动 · 一行多卡 · 推荐/主题楼层',      en: 'horizontal scroll · recommendation rail' } },
      { key: 'organisms/campaign-card',    zh: '活动商卡',     en: 'Campaign',
        desc: { zh: '倒计时 · 促销状态 · 大促/主题活动',        en: 'countdown · promo state · sale seasons' } },
      { key: 'organisms/booking-card',     zh: '预约商卡',     en: 'Booking',
        desc: { zh: '预售/直播/拍卖 · 状态驱动 ribbon+cta',     en: 'presale/live/auction · state-driven ribbon+cta' } },
      { key: 'organisms/small-dynamic',    zh: '小图动态',     en: 'Small Image Dynamic',
        desc: { zh: '入口曝光位 · 楼层小图流',                  en: 'entry-point exposure · small-tile stream' } }
    ]},
    { top: 'atoms', zh: '原子组件', en: 'Atomic Components', kind: 'link', target: 'atoms' },
    { top: 'utilities', zh: '工具', en: 'Utilities', kind: 'menu', target: 'decision-guide', wip: true, children: [
      { key: 'decision-guide', zh: '选型指南', en: 'Decision Guide',
        desc: { zh: '选卡助手 · 对比矩阵 · 选型口诀',           en: 'wizard · matrix · rules' } },
      { key: 'changelog',      zh: '变更记录', en: 'Changelog',
        desc: { zh: '版本时间线 v0.1 → v1.0 · 每版 highlights', en: 'version timeline v0.1 → v1.0' } }
    ]}
  ];

  /* Card skeleton mini-diagrams for the 商卡 mega-menu preview panel.
   * Simple inline SVG at 220×136. Palette locked to var(--joybuy-red) accents +
   * neutral fills — never inherits site accent to stay consistent with the
   * fixed brand-red rule for card previews. */
  var CARD_SKELETONS = {
    overview: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g fill="#f4f4f5" stroke="#e4e4e7">' +
      '<rect x="10" y="14" width="60" height="52" rx="4"/>' +
      '<rect x="80" y="14" width="60" height="52" rx="4"/>' +
      '<rect x="150" y="14" width="60" height="52" rx="4"/>' +
      '<rect x="10" y="76" width="60" height="52" rx="4"/>' +
      '<rect x="80" y="76" width="60" height="52" rx="4"/>' +
      '<rect x="150" y="76" width="60" height="52" rx="4"/>' +
      '</g></svg>',
    vertical: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="40" y="12" width="60" height="60" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="120" y="12" width="60" height="60" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="40" y="80" width="46" height="6" rx="2" fill="#a1a1aa"/>' +
      '<rect x="40" y="90" width="30" height="6" rx="2" fill="#c9cdd4"/>' +
      '<rect x="40" y="104" width="22" height="8" rx="2" fill="#E1251B"/>' +
      '<rect x="40" y="118" width="14" height="4" rx="1" fill="#c9cdd4"/>' +
      '<rect x="120" y="80" width="46" height="6" rx="2" fill="#a1a1aa"/>' +
      '<rect x="120" y="90" width="30" height="6" rx="2" fill="#c9cdd4"/>' +
      '<rect x="120" y="104" width="22" height="8" rx="2" fill="#E1251B"/>' +
      '<rect x="120" y="118" width="14" height="4" rx="1" fill="#c9cdd4"/>' +
      '</g></svg>',
    horizontal: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="22" y="24" width="60" height="60" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="92" y="26" width="86" height="6" rx="2" fill="#a1a1aa"/>' +
      '<rect x="92" y="38" width="64" height="6" rx="2" fill="#c9cdd4"/>' +
      '<rect x="92" y="54" width="30" height="10" rx="2" fill="#E1251B"/>' +
      '<rect x="92" y="72" width="40" height="4" rx="1" fill="#c9cdd4"/>' +
      '<circle cx="188" cy="60" r="10" fill="#f4f4f5" stroke="#d4d4d8"/>' +
      '<rect x="184" y="59" width="8" height="2" rx="1" fill="#a1a1aa"/>' +
      '<rect x="187" y="56" width="2" height="8" rx="1" fill="#a1a1aa"/>' +
      '<rect x="22" y="96" width="60" height="6" rx="2" fill="#a1a1aa"/>' +
      '<rect x="92" y="96" width="86" height="6" rx="2" fill="#c9cdd4"/>' +
      '</g></svg>',
    mini: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="28" y="30" width="44" height="44" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="82" y="32" width="90" height="5" rx="2" fill="#a1a1aa"/>' +
      '<rect x="82" y="42" width="66" height="5" rx="2" fill="#c9cdd4"/>' +
      '<rect x="82" y="56" width="28" height="8" rx="2" fill="#E1251B"/>' +
      '<circle cx="184" cy="52" r="8" fill="#f4f4f5" stroke="#d4d4d8"/>' +
      '<rect x="28" y="84" width="44" height="44" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="82" y="86" width="90" height="5" rx="2" fill="#a1a1aa"/>' +
      '<rect x="82" y="96" width="66" height="5" rx="2" fill="#c9cdd4"/>' +
      '<rect x="82" y="110" width="28" height="8" rx="2" fill="#E1251B"/>' +
      '<circle cx="184" cy="106" r="8" fill="#f4f4f5" stroke="#d4d4d8"/>' +
      '</g></svg>',
    scroll: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="14" y="20" width="52" height="94" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="74" y="20" width="52" height="94" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="134" y="20" width="52" height="94" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="194" y="20" width="26" height="94" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-dasharray="3 3"/>' +
      '<path d="M204 62 l6 5 l-6 5" fill="none" stroke="#71717a" stroke-width="1.4"/>' +
      '<rect x="18" y="80" width="30" height="6" rx="2" fill="#E1251B"/>' +
      '<rect x="18" y="90" width="40" height="4" rx="1" fill="#a1a1aa"/>' +
      '<rect x="78" y="80" width="30" height="6" rx="2" fill="#E1251B"/>' +
      '<rect x="78" y="90" width="40" height="4" rx="1" fill="#a1a1aa"/>' +
      '<rect x="138" y="80" width="30" height="6" rx="2" fill="#E1251B"/>' +
      '<rect x="138" y="90" width="40" height="4" rx="1" fill="#a1a1aa"/>' +
      '</g></svg>',
    campaign: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="14" y="12" width="192" height="26" rx="3" fill="#FDECEA" stroke="#FAD6D3"/>' +
      '<circle cx="30" cy="25" r="7" fill="#E1251B"/>' +
      '<rect x="44" y="20" width="80" height="4" rx="1" fill="#E1251B"/>' +
      '<rect x="44" y="28" width="60" height="4" rx="1" fill="#a1a1aa"/>' +
      '<g transform="translate(150,18)"><rect x="0" y="0" width="14" height="14" fill="#0a0a0a" rx="2"/><rect x="18" y="0" width="14" height="14" fill="#0a0a0a" rx="2"/><rect x="36" y="0" width="14" height="14" fill="#0a0a0a" rx="2"/></g>' +
      '<rect x="14" y="48" width="60" height="72" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="80" y="48" width="60" height="72" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="146" y="48" width="60" height="72" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '</g></svg>',
    booking: '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="30" y="14" width="160" height="88" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="30" y="14" width="60" height="14" fill="#E1251B"/>' +
      '<rect x="36" y="18" width="48" height="6" rx="1" fill="#fff"/>' +
      '<rect x="150" y="90" width="34" height="10" rx="2" fill="#0a0a0a"/>' +
      '<rect x="30" y="112" width="90" height="6" rx="2" fill="#a1a1aa"/>' +
      '<rect x="130" y="112" width="34" height="12" rx="2" fill="#E1251B"/>' +
      '</g></svg>',
    'small-dynamic': '<svg viewBox="0 0 220 136" role="img" aria-hidden="true">' +
      '<g>' +
      '<rect x="20" y="24" width="44" height="88" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="72" y="24" width="44" height="88" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="124" y="24" width="44" height="88" rx="3" fill="#ececee" stroke="#d4d4d8"/>' +
      '<rect x="176" y="24" width="24" height="88" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-dasharray="3 3"/>' +
      '<rect x="20" y="118" width="30" height="4" rx="1" fill="#a1a1aa"/>' +
      '<rect x="72" y="118" width="30" height="4" rx="1" fill="#a1a1aa"/>' +
      '<rect x="124" y="118" width="30" height="4" rx="1" fill="#a1a1aa"/>' +
      '</g></svg>'
  };

  /* skeleton lookup by sub-item key, mapping full LIVE key to short skeleton id */
  var SKELETON_FOR_KEY = {
    'organisms':                   'overview',
    'organisms/vertical-card':     'vertical',
    'organisms/horizontal-card':   'horizontal',
    'organisms/horizontal-mini':   'mini',
    'organisms/horizontal-scroll': 'scroll',
    'organisms/campaign-card':     'campaign',
    'organisms/booking-card':      'booking',
    'organisms/small-dynamic':     'small-dynamic'
  };

  /* LIVE map · unchanged from prior implementation, drives urlFor() */
  var LIVE = {
    home: 'index.html', atoms: 'atoms/index.html', organisms: 'organisms/index.html',
    pages: 'pages/index.html',
    'decision-guide': 'utilities/decision-guide.html',
    changelog: 'utilities/changelog.html',
    'organisms/vertical-card': 'organisms/vertical-card.html',
    'organisms/horizontal-card': 'organisms/horizontal-card.html',
    'organisms/horizontal-mini': 'organisms/horizontal-mini.html',
    'organisms/horizontal-scroll': 'organisms/horizontal-scroll.html',
    'organisms/campaign-card': 'organisms/campaign-card.html',
    'organisms/booking-card': 'organisms/booking-card.html',
    'organisms/small-dynamic': 'organisms/small-dynamic.html',
    'sections/home-feed': 'sections/home-feed.html',
    'foundations/tokens': 'foundations/tokens.html',
    'foundations/typography': 'foundations/typography.html',
    'foundations/iconography': 'foundations/iconography.html'
  };

  var queryLang = new URLSearchParams(window.location.search).get('lang');
  var queryTheme = new URLSearchParams(window.location.search).get('theme');
  var storedLang = null;
  var storedTheme = null;
  try { storedLang = window.localStorage.getItem('joybuy-site-language'); } catch (e) {}
  try { storedTheme = window.localStorage.getItem('joybuy-site-theme-v2'); } catch (e) {}
  var language = queryLang === 'en' || queryLang === 'zh' ? queryLang : (storedLang === 'en' ? 'en' : 'zh');
  var themeChoices = ['light', 'dark', 'system'];
  var themeChoice = themeChoices.indexOf(queryTheme) !== -1
    ? queryTheme
    : (themeChoices.indexOf(storedTheme) !== -1 ? storedTheme : 'light');
  var systemThemeQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function resolvedTheme() {
    if (themeChoice === 'system') return systemThemeQuery && systemThemeQuery.matches ? 'dark' : 'light';
    return themeChoice;
  }

  function applyTheme() {
    var resolved = resolvedTheme();
    document.documentElement.setAttribute('data-site-theme', resolved);
    document.documentElement.setAttribute('data-site-theme-choice', themeChoice);
    document.documentElement.style.colorScheme = resolved;
    updateThemeControl();
    window.dispatchEvent(new CustomEvent('joybuy:themechange', { detail: { choice: themeChoice, theme: resolved } }));
  }

  function setTheme(next) {
    if (themeChoices.indexOf(next) === -1) return;
    themeChoice = next;
    try { window.localStorage.setItem('joybuy-site-theme-v2', next); } catch (e) {}
    applyTheme();
    closeThemeMenu();
  }

  function currentLanguage() { return language; }
  function setLanguage(next) {
    if (next !== 'zh' && next !== 'en') return;
    language = next;
    try { window.localStorage.setItem('joybuy-site-language', next); } catch (e) {}
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    renderTopNav();
    updateHeaderLanguage();
    updateThemeControl();
    window.dispatchEvent(new CustomEvent('joybuy:languagechange', { detail: { language: next } }));
  }

  window.JoybuySite = {
    getLanguage: currentLanguage,
    setLanguage: setLanguage,
    getTheme: function () { return themeChoice; },
    setTheme: setTheme
  };

  /* ------------------------------------------------------------------
   * Active-tab detection.
   *   Reads the page's active key from (in order):
   *     1. `#site-nav[data-active]` — legacy pages still carrying the aside
   *     2. `<body data-page="…">`  — explicit opt-in
   *     3. URL path — auto-detect from filename (recommended, zero HTML config)
   *     4. `.home-page` body class or default → 'home'
   * ------------------------------------------------------------------ */
  function activeKeyForPage() {
    var host = document.getElementById('site-nav');
    if (host && host.getAttribute('data-active')) return host.getAttribute('data-active');
    var body = document.body.getAttribute('data-page');
    if (body) return body;
    // URL auto-detect: strip the folder path down to site-relative, drop .html,
    // normalize `<dir>/index` → `<dir>`.
    var pathname = (window.location && window.location.pathname) || '';
    var stripped = pathname.replace(/\\/g, '/');
    var siteIdx = stripped.lastIndexOf('/site/');
    if (siteIdx !== -1) stripped = stripped.slice(siteIdx + 6);
    stripped = stripped.replace(/^\//, '').replace(/\.html$/, '');
    if (!stripped || stripped === 'index') return 'home';
    if (stripped.slice(-6) === '/index') return stripped.slice(0, -6);
    // Utilities pages live at `utilities/<name>` in URL but their LIVE key is
    // the bare name (`decision-guide`, `changelog`). Fold to that.
    if (stripped.indexOf('utilities/') === 0) return stripped.slice(10);
    return stripped;
  }

  function activeTopFor(activeKey) {
    if (!activeKey || activeKey === 'home' || activeKey === 'index') return 'home';
    if (activeKey.indexOf('foundations/') === 0) return 'foundations';
    if (activeKey === 'atoms' || activeKey.indexOf('atoms/') === 0) return 'atoms';
    if (activeKey === 'organisms' || activeKey.indexOf('organisms/') === 0) return 'organisms';
    if (activeKey === 'pages' || activeKey.indexOf('pages/') === 0) return 'pages';
    if (activeKey === 'sections/home-feed' || activeKey.indexOf('sections/') === 0) return 'pages';
    if (activeKey === 'decision-guide' || activeKey === 'changelog' || activeKey.indexOf('utilities/') === 0) return 'utilities';
    return 'home';
  }

  function urlFor(activeKey, itemKey) {
    if (!LIVE[itemKey]) return null;
    var activePath = LIVE[activeKey] || 'index.html';
    var activeDir = activePath.indexOf('/') === -1 ? '' : activePath.slice(0, activePath.lastIndexOf('/'));
    var levels = activeDir ? activeDir.split('/').length : 0;
    return new Array(levels + 1).join('../') + LIVE[itemKey];
  }

  function el(tag, cls, attrs) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (attrs) Object.keys(attrs).forEach(function (key) { node.setAttribute(key, attrs[key]); });
    return node;
  }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' }[c]; }); }

  /* ------------------------------------------------------------------
   * Global chrome · brand, top tabs (with mega-menus), theme + lang.
   *   Rendered once on init; re-rendered on language change.
   * ------------------------------------------------------------------ */
  function renderHeader() {
    if (document.querySelector('.global-header')) return;
    var header = el('header', 'global-header');
    header.innerHTML =
      '<a class="global-header__brand" href="#" aria-label="Joybuy Product Card Design System home">' +
        '<img class="global-header__mark" src="' + brandAssetBase + 'joybuy-logo.svg" alt="">' +
        '<span class="global-header__brand-copy">' +
          '<img class="global-header__wordmark" src="' + brandAssetBase + 'joybuy-wordmark.svg" alt="Joybuy">' +
          '<small>Product Card DS</small>' +
        '</span>' +
      '</a>' +
      '<nav class="top-nav" aria-label="Primary"><ul class="top-nav__tabs" role="menubar"></ul></nav>' +
      '<div class="global-header__actions">' +
        '<div class="global-theme">' +
          '<button class="global-theme__trigger" type="button" data-site-theme-trigger aria-haspopup="menu" aria-expanded="false"></button>' +
          '<div class="global-theme__menu" role="menu" aria-hidden="true">' +
            '<button type="button" role="menuitemradio" data-theme-choice="light">' +
              '<span class="global-theme__option-icon" aria-hidden="true">' + themeIcon('light') + '</span>' +
              '<span class="global-theme__option-copy"><b data-theme-title></b><small data-theme-meta></small></span>' +
              '<span class="global-theme__check" aria-hidden="true">✓</span>' +
            '</button>' +
            '<button type="button" role="menuitemradio" data-theme-choice="dark">' +
              '<span class="global-theme__option-icon" aria-hidden="true">' + themeIcon('dark') + '</span>' +
              '<span class="global-theme__option-copy"><b data-theme-title></b><small data-theme-meta></small></span>' +
              '<span class="global-theme__check" aria-hidden="true">✓</span>' +
            '</button>' +
            '<button type="button" role="menuitemradio" data-theme-choice="system">' +
              '<span class="global-theme__option-icon" aria-hidden="true">' + themeIcon('system') + '</span>' +
              '<span class="global-theme__option-copy"><b data-theme-title></b><small data-theme-meta></small></span>' +
              '<span class="global-theme__check" aria-hidden="true">✓</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="global-language" role="group" aria-label="Document language">' +
          '<button type="button" data-site-lang="zh">中</button>' +
          '<button type="button" data-site-lang="en">EN</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(header, document.body.firstChild);

    header.addEventListener('click', function (event) {
      var languageButton = event.target.closest('[data-site-lang]');
      if (languageButton) {
        setLanguage(languageButton.getAttribute('data-site-lang'));
        return;
      }
      var themeButton = event.target.closest('[data-theme-choice]');
      if (themeButton) {
        setTheme(themeButton.getAttribute('data-theme-choice'));
        return;
      }
      if (event.target.closest('[data-site-theme-trigger]')) toggleThemeMenu();
    });
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.top-nav__tab')) closeAllMegas();
      if (!event.target.closest('.global-theme')) closeThemeMenu();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeAllMegas();
        closeThemeMenu(true);
      }
    });

    renderTopNav();
    updateHeaderLanguage();
    updateThemeControl();
    var brandLink = header.querySelector('.global-header__brand');
    brandLink.setAttribute('href', urlFor(activeKeyForPage(), 'home') || 'index.html');
  }

  function themeIcon(theme) {
    if (theme === 'dark') {
      return '<svg viewBox="0 0 20 20" width="18" height="18"><path d="M16.1 12.7A7 7 0 0 1 7.3 3.9 6.5 6.5 0 1 0 16.1 12.7Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    if (theme === 'system') {
      return '<svg viewBox="0 0 20 20" width="18" height="18"><rect x="2.5" y="3.5" width="15" height="10.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 17h6M10 14v3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    }
    return '<svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="10" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.35 4.35l1.05 1.05M14.6 14.6l1.05 1.05M15.65 4.35 14.6 5.4M5.4 14.6l-1.05 1.05" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  }

  function themeLabel(theme) {
    var labels = {
      light: { zh: '亮色模式', en: 'Light mode' },
      dark: { zh: '深色模式', en: 'Dark mode' },
      system: { zh: '跟随系统', en: 'System theme' }
    };
    return labels[theme][language];
  }

  function updateThemeControl() {
    var trigger = document.querySelector('[data-site-theme-trigger]');
    if (!trigger) return;
    var label = themeLabel(themeChoice);
    trigger.innerHTML = themeIcon(themeChoice) + '<span class="global-theme__trigger-label">' + esc(label) + '</span>';
    trigger.setAttribute('aria-label', (language === 'en' ? 'Appearance: ' : '外观：') + label);
    trigger.setAttribute('title', label);
    document.querySelectorAll('[data-theme-choice]').forEach(function (button) {
      var choice = button.getAttribute('data-theme-choice');
      var active = choice === themeChoice;
      var metas = {
        light: { zh: '白色基调', en: 'White base' },
        dark: { zh: '曜石黑', en: 'Obsidian' },
        system: { zh: '使用设备设置', en: 'Use device setting' }
      };
      button.querySelector('[data-theme-title]').textContent = themeLabel(choice);
      button.querySelector('[data-theme-meta]').textContent = metas[choice][language];
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-checked', String(active));
    });
  }

  function toggleThemeMenu() {
    var wrapper = document.querySelector('.global-theme');
    if (!wrapper) return;
    var open = !wrapper.classList.contains('is-open');
    wrapper.classList.toggle('is-open', open);
    wrapper.querySelector('[data-site-theme-trigger]').setAttribute('aria-expanded', String(open));
    wrapper.querySelector('.global-theme__menu').setAttribute('aria-hidden', String(!open));
  }

  function closeThemeMenu(returnFocus) {
    var wrapper = document.querySelector('.global-theme');
    if (!wrapper || !wrapper.classList.contains('is-open')) return;
    wrapper.classList.remove('is-open');
    var trigger = wrapper.querySelector('[data-site-theme-trigger]');
    trigger.setAttribute('aria-expanded', 'false');
    wrapper.querySelector('.global-theme__menu').setAttribute('aria-hidden', 'true');
    if (returnFocus) trigger.focus();
  }

  /* ---- Top nav (4 tabs + mega-menus) --------------------------------------- */
  function renderTopNav() {
    var host = document.querySelector('.top-nav__tabs');
    if (!host) return;
    var activeKey = activeKeyForPage();
    var activeTop = activeTopFor(activeKey);
    host.innerHTML = '';
    TOP_TABS.forEach(function (tab) {
      var li = el('li', 'top-nav__tab' + (tab.top === activeTop ? ' is-active' : '') + (tab.kind === 'menu' ? ' has-menu' : ''),
        { role: 'none', 'data-top': tab.top });
      var url = urlFor(activeKey, tab.target || tab.top);
      var trigger = el('a', 'top-nav__link', { role: 'menuitem', href: url || '#' });
      trigger.innerHTML = '<span>' + esc(tab[language]) + '</span>' +
        (tab.wip ? '<span class="top-nav__status" aria-label="Work in progress">WIP</span>' : '') +
        (tab.kind === 'menu' ? '<span class="top-nav__chev" aria-hidden="true"><svg viewBox="0 0 12 12" width="10" height="10"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' : '');
      li.appendChild(trigger);
      if (tab.kind === 'menu') renderMega(li, tab, activeKey);
      host.appendChild(li);
    });
    bindMegaHover();
  }

  function renderMega(li, tab, activeKey) {
    var mega = el('div', 'mega' + (tab.showPreview ? ' mega--with-preview' : ''), { role: 'menu', 'aria-hidden': 'true' });
    var previewHTML = tab.showPreview
      ? '<div class="mega__preview" aria-hidden="true">' +
          '<div class="mega__preview-frame" data-mega-preview-frame></div>' +
          '<div class="mega__preview-copy">' +
            '<div class="mega__preview-title" data-mega-preview-title></div>' +
            '<div class="mega__preview-desc" data-mega-preview-desc></div>' +
          '</div>' +
        '</div>'
      : '';
    var listHTML = '<ul class="mega__list" role="none">' + tab.children.map(function (child) {
      var href = urlFor(activeKey, child.key);
      var live = !!href;
      var isActive = child.key === activeKey;
      var skeletonId = SKELETON_FOR_KEY[child.key] || '';
      return '<li role="none">' +
        (live
          ? '<a class="mega__item' + (isActive ? ' is-active' : '') + (child.overview ? ' mega__item--overview' : '') + '" role="menuitem" href="' + esc(href) + '"' +
            ' data-mega-skel="' + esc(skeletonId) + '"' +
            ' data-mega-title="' + esc(child[language]) + '"' +
            ' data-mega-desc="' + esc(child.desc[language]) + '">' +
              '<span class="mega__item-title">' + esc(child[language]) + '</span>' +
              (tab.wip
                ? '<span class="mega__item-flag mega__item-flag--wip">WIP</span>'
                : (isActive ? '<span class="mega__item-flag">' + (language === 'zh' ? '当前' : 'Now') + '</span>' : '')) +
            '</a>'
          : '<span class="mega__item is-disabled" role="menuitem" aria-disabled="true">' +
              '<span class="mega__item-title">' + esc(child[language]) + '</span>' +
            '</span>') +
      '</li>';
    }).join('') + '</ul>';
    mega.innerHTML = previewHTML + listHTML;
    li.appendChild(mega);

    if (tab.showPreview) {
      // Prime preview panel with the first (or active) child.
      var initial = tab.children.filter(function (c) { return c.key === activeKey; })[0] || tab.children[0];
      writePreview(mega, initial);
      // Wire hover updates.
      mega.querySelectorAll('.mega__item[data-mega-skel]').forEach(function (node) {
        node.addEventListener('mouseenter', function () {
          writePreview(mega, {
            key: node.getAttribute('data-mega-title'),
            skel: node.getAttribute('data-mega-skel'),
            title: node.getAttribute('data-mega-title'),
            desc: node.getAttribute('data-mega-desc')
          });
        });
        node.addEventListener('focus', function () {
          writePreview(mega, {
            skel: node.getAttribute('data-mega-skel'),
            title: node.getAttribute('data-mega-title'),
            desc: node.getAttribute('data-mega-desc')
          });
        });
      });
    }
  }

  function writePreview(mega, item) {
    var frame = mega.querySelector('[data-mega-preview-frame]');
    var title = mega.querySelector('[data-mega-preview-title]');
    var desc = mega.querySelector('[data-mega-preview-desc]');
    if (!frame) return;
    var id = item.skel || SKELETON_FOR_KEY[item.key] || '';
    frame.innerHTML = CARD_SKELETONS[id] || '';
    if (title) title.textContent = item.title || item[language] || '';
    if (desc) desc.textContent = item.desc && typeof item.desc === 'object' ? item.desc[language] : (item.desc || '');
  }

  var megaOpenTimer = null;
  var megaCloseTimer = null;

  function bindMegaHover() {
    var host = document.querySelector('.top-nav__tabs');
    if (!host) return;
    host.querySelectorAll('.top-nav__tab').forEach(function (li) {
      li.addEventListener('mouseenter', function () {
        window.clearTimeout(megaCloseTimer);
        megaOpenTimer = window.setTimeout(function () { openMega(li); }, 80);
      });
      li.addEventListener('mouseleave', function () {
        window.clearTimeout(megaOpenTimer);
        megaCloseTimer = window.setTimeout(function () { closeMega(li); }, 180);
      });
      var trigger = li.querySelector('.top-nav__link');
      if (trigger && li.classList.contains('has-menu')) {
        trigger.addEventListener('focus', function () { openMega(li); });
        trigger.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowDown' || e.key === 'Enter') {
            var first = li.querySelector('.mega__item[href]');
            if (first) { e.preventDefault(); openMega(li); first.focus(); }
          }
        });
      }
    });
  }

  function openMega(li) {
    if (!li.classList.contains('has-menu')) return;
    closeAllMegas(li);
    li.classList.add('is-open');
    var mega = li.querySelector('.mega');
    if (mega) mega.setAttribute('aria-hidden', 'false');
    var link = li.querySelector('.top-nav__link');
    if (link) link.setAttribute('aria-expanded', 'true');
  }

  function closeMega(li) {
    li.classList.remove('is-open');
    var mega = li.querySelector('.mega');
    if (mega) mega.setAttribute('aria-hidden', 'true');
    var link = li.querySelector('.top-nav__link');
    if (link) link.setAttribute('aria-expanded', 'false');
  }

  function closeAllMegas(except) {
    document.querySelectorAll('.top-nav__tab.is-open').forEach(function (li) {
      if (li !== except) closeMega(li);
    });
  }

  function updateHeaderLanguage() {
    var header = document.querySelector('.global-header');
    if (!header) return;
    header.querySelectorAll('[data-site-lang]').forEach(function (button) {
      var active = button.getAttribute('data-site-lang') === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  /* renderNavigation is retained for backwards compatibility with pages that
   * still declare `<aside id="site-nav">` — it's now a no-op. The CSS hides
   * the aside; the batch removal from HTML happens in a follow-up pass. */
  function renderNavigation() { /* deprecated · sidebar removed in favor of top-nav */ }

  function loadI18n() {
    if (window.JoybuyI18n) return window.JoybuyI18n.apply(language);
    var src = navScriptSrc ? navScriptSrc.replace(/nav\.js(?:\?.*)?$/, 'i18n.js') : 'i18n.js';
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () { if (window.JoybuyI18n) window.JoybuyI18n.apply(language); };
    document.head.appendChild(script);
  }

  function init() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    applyTheme();
    renderHeader();
    loadI18n();
  }

  if (systemThemeQuery) {
    var handleSystemThemeChange = function () {
      if (themeChoice === 'system') applyTheme();
    };
    if (systemThemeQuery.addEventListener) systemThemeQuery.addEventListener('change', handleSystemThemeChange);
    else if (systemThemeQuery.addListener) systemThemeQuery.addListener(handleSystemThemeChange);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
