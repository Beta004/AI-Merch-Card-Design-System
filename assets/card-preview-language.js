/* Card-preview language switch · shared across all product-card detail pages. */
(function () {
  var current = 'en';
  var observer = null;
  var scheduled = false;

  function setButtons() {
    document.querySelectorAll('[data-card-preview-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', button.getAttribute('data-card-preview-lang') === current ? 'true' : 'false');
    });
  }

  function apply(language) {
    current = language === 'zh' ? 'zh' : 'en';
    setButtons();
    window.dispatchEvent(new CustomEvent('joybuy:card-preview-language', {
      detail: { language: current }
    }));
  }

  function decorateHead(head) {
    if (!head || head.querySelector('.card-preview-lang')) return;
    var reset = head.querySelector('.field-sim__reset');
    var actions = document.createElement('div');
    actions.className = 'field-sim__actions';

    var group = document.createElement('div');
    group.className = 'card-preview-lang';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', language === 'zh' ? '商卡预览语言' : 'Card preview language');
    [
      { value: 'en', label: 'EN', aria: language === 'zh' ? '英文商卡预览' : 'English card preview' },
      { value: 'zh', label: '中', aria: language === 'zh' ? '中文商卡预览' : 'Chinese card preview' }
    ].forEach(function (option) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'card-preview-lang__btn';
      button.setAttribute('data-card-preview-lang', option.value);
      button.setAttribute('aria-label', option.aria);
      button.setAttribute('aria-pressed', option.value === current ? 'true' : 'false');
      button.textContent = option.label;
      group.appendChild(button);
    });

    actions.appendChild(group);
    if (reset) actions.appendChild(reset);
    head.appendChild(actions);
  }

  var TEXT_ZH = {
    'Top Deal': '爆款',
    'Sponsored': '广告',
    'New&Hot': '新品热卖',
    'Private Label': '自有品牌',
    'New': '新品',
    'Best Before': '最佳赏味期',
    'Life 3d+': '3天内有效',
    'Too Good To Waste': '临期不浪费',
    'BBD: 27-12-2025': '保质期至: 27-12-2025',
    'Lightning offers': '限时闪购',
    'Price match Amazon': '亚马逊同价',
    'Everyday low price': '天天低价',
    'Happy hour': '限时秒杀',
    'Welcome offer': '新人礼',
    'Outlet': '奥莱',
    'Pre-sale': '预售',
    'Early access': '提前购',
    'Coming soon': '即将开始',
    'Contract': '合约机',
    'Sold by Joybuy': 'Joybuy 自营',
    'Notify': '到货通知',
    'Remind me': '提醒我',
    'Bid now': '立即出价',
    'Recap': '查看结果',
    'Out of stock': '缺货',
    'Only 10 left': '仅剩 10 件',
    'Only 12 items left': '仅剩 12 件',
    'Only 50 items available': '仅剩 50 件',
    '999+ reservations': '999+ 人预约',
    'Get it by today': '今日送达',
    'More buying choices': '更多购买选择',
    'More options inside': '更多选项',
    '189 Reviews': '189 条评价',
    '200 viewed in 48 hours': '48 小时浏览 200 次',
    'Install & Recyle': '安装与回收',
    'Gift wrapping': '礼品包装'
  };

  var TEXT_EN = {};
  Object.keys(TEXT_ZH).forEach(function (key) { TEXT_EN[TEXT_ZH[key]] = key; });

  function translateCardText() {
    var dictionary = current === 'zh' ? TEXT_ZH : TEXT_EN;
    var roots = document.querySelectorAll('.vcard, .hcard, .hmini, .hscroll, .campaign, .campaign-product, .booking, .sdyn-strip, .sdyn');
    roots.forEach(function (root) {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode())) {
        var parent = node.parentElement;
        if (!parent || parent.closest('script, style, textarea, input, select')) continue;
        var raw = node.nodeValue || '';
        var normalized = raw.trim();
        if (!normalized) continue;
        if (Object.prototype.hasOwnProperty.call(dictionary, normalized)) {
          var leading = raw.match(/^\s*/)[0];
          var trailing = raw.match(/\s*$/)[0];
          node.nodeValue = leading + dictionary[normalized] + trailing;
        } else if (current === 'zh' && /^RRP:/.test(normalized)) {
          node.nodeValue = raw.replace(/RRP:/, '建议零售价:');
        } else if (current === 'en' && /^建议零售价:/.test(normalized)) {
          node.nodeValue = raw.replace(/建议零售价:/, 'RRP:');
        }
      }
    });
  }

  function scan() {
    scheduled = false;
    document.querySelectorAll('.field-sim__head').forEach(decorateHead);
    setButtons();
    translateCardText();
  }

  function scheduleScan() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(scan);
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-card-preview-lang]');
    if (!button) return;
    apply(button.getAttribute('data-card-preview-lang'));
  });

  window.addEventListener('joybuy:languagechange', function (event) {
    language = event.detail && event.detail.language === 'en' ? 'en' : 'zh';
    document.querySelectorAll('.card-preview-lang').forEach(function (group) {
      group.setAttribute('aria-label', language === 'zh' ? '商卡预览语言' : 'Card preview language');
      group.querySelector('[data-card-preview-lang="en"]').setAttribute('aria-label', language === 'zh' ? '英文商卡预览' : 'English card preview');
      group.querySelector('[data-card-preview-lang="zh"]').setAttribute('aria-label', language === 'zh' ? '中文商卡预览' : 'Chinese card preview');
    });
  });

  var language = window.JoybuySite && window.JoybuySite.getLanguage ? (window.JoybuySite.getLanguage() || 'zh') : 'zh';
  scan();
  observer = new MutationObserver(scheduleScan);
  observer.observe(document.body, { childList: true, subtree: true });
})();
