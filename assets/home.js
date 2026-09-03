(function () {
  var copy = {
    'hero.kicker':['Joybuy · 商品卡片设计系统','Joybuy · Product Card Design System'],'hero.title1':['让每一种商品场景，','The right product card'],'hero.title2':['都有合适的商卡表达。','for every commerce moment.'],'hero.title2Cinematic':['都有合适的<em>商卡表达</em>。','for every <em>commerce moment</em>.'],'hero.lede':['从原子组件、信息规则到场景化商卡，让设计、产品和研发使用同一套商品表达语言。','From atomic components and content rules to scenario-based cards, one shared language keeps design, product, and engineering aligned.'],'hero.cards':['浏览全部商卡','Explore all cards'],'hero.atoms':['查看原子组件','View atomic components'],'hero.factCards':['类商卡','card types'],'hero.factAtoms':['组原子组件','atom families'],'hero.factPages':['个真实页面场景','real page contexts'],'hero.visual':['结构相同，表达随场景变化','Shared structure, adapted by context'],'hero.patterns':['查看 7 类商卡结构','Explore 7 card structures'],'hero.visualAria':['双列、横向与横滑商品卡结构叠层预览','Layered structural previews of two-column, horizontal, and carousel product cards'],'hero.verticalAria':['查看通用双列商品卡','View universal two-column product card'],'hero.horizontalAria':['查看通用横向商品卡','View universal horizontal product card'],'hero.scrollAria':['查看横滑商品卡','View horizontal scroll product card'],
    'card.vertical':['通用双列','Universal 2-Column'],'card.horizontal':['通用横向','Universal Horizontal'],'card.mini':['横向小图','Horizontal Mini'],'card.scroll':['横滑商卡','Horizontal Scroll'],'card.campaign':['活动商卡','Campaign Card'],'card.booking':['预约商卡','Booking Card'],'card.dynamic':['小图动态','Small Dynamic'],
    statement:['从基础规范到业务页面，<strong>不是一组孤立模板，</strong><br>而是一套可复用、可追溯的商品表达系统。','From foundations to real product pages, <strong>this is not a collection of isolated templates,</strong><br>but a reusable and traceable product-expression system.'],
    'cap.kicker':['01 · 系统组件','01 · Organisms'],'cap.title':['7 类商卡，覆盖不同浏览与决策场景。','Seven product cards, one for every context.'],'cap.desc':['每一种商卡都来自明确的业务场景，而不是为了制造更多变体。','Each card exists for a defined business context, not to create more variants.'],'cap.viewAll':['查看全部商卡','View all cards'],
    'scene.kicker':['场景适配','Context Adaptation'],'scene.title':['同一套商品信息，在不同任务里选择不同表达。','One product model, expressed differently for each task.'],'scene.desc':['商卡不是越完整越好。浏览密度、决策深度和业务状态共同决定图片比例、信息层级与交互方式。','More information does not always make a better card. Browsing density, decision depth, and business state determine imagery, hierarchy, and interaction.'],'scene.home':['首页双列浏览','Two-column home browsing'],'scene.homeDesc':['图片主导 · 高密度发现商品','Image-led · High-density discovery'],'scene.search':['搜索单列决策','Single-column search decisions'],'scene.searchDesc':['信息并行 · 快速比较与加购','Parallel information · Fast compare and add'],'scene.scroll':['一行多卡推荐','One-row recommendations'],'scene.scrollDesc':['横向探索 · 提升商品曝光量','Horizontal exploration · More product exposure'],'scene.booking':['预约与限时状态','Booking and time-sensitive states'],'scene.bookingDesc':['强化时间、状态与转化动作','Emphasize time, state, and conversion'],
    'flow.kicker':['系统关系','System Relationships'],'flow.title':['每张商卡，都能追溯到基础规则和业务场景。','Every card traces back to foundations and business context.'],'flow.desc':['平台把设计规范、组件资产和业务落位连接起来，减少设计与开发之间的信息损耗。','The platform connects design rules, component assets, and product placement to reduce handoff loss.'],'flow.foundation':['基础规范','Foundations'],'flow.foundationDesc':['颜色、字体、间距、圆角与图标规则','Color, type, spacing, radius, and icon rules'],'flow.atoms':['原子组件','Atomic Components'],'flow.atomsDesc':['图片、标题、价格、促销、状态与交互','Images, titles, pricing, promotions, states, and actions'],'flow.cards':['商卡结构','Product Card Structures'],'flow.cardsDesc':['双列、横向、横滑、活动与预约等类型','Two-column, horizontal, carousel, campaign, booking, and more'],'flow.pages':['业务页面','Product Pages'],'flow.pagesDesc':['首页、搜索、类目、购物车与活动会场','Home, search, category, cart, and campaign pages'],
    'pages.kicker':['真实页面','Real Product Pages'],'pages.title':['不只看组件，也看它在业务页面中如何落位。','See not only the component, but how it lands in a real page.'],'pages.intro':['从真实页面理解商卡如何参与发现、比较与转化，再进入对应场景查看完整规则。','See how cards support discovery, comparison, and conversion in context, then open each scenario for its complete rules.'],'pages.all':['浏览全部页面','Explore all pages'],'pages.home':['首页信息流','Home Feed'],'pages.homeDesc':['双列商卡与横滑楼层共同组织发现路径。','Two-column cards and carousels shape the discovery journey.'],'pages.search':['搜索与店铺','Search and Store'],'pages.searchDesc':['依据浏览模式切换双列或横向信息结构。','Switch between two-column and horizontal structures by browsing mode.'],'pages.campaign':['活动会场','Campaign Hub'],'pages.campaignDesc':['用主题、倒计时和促销状态强化转化。','Use themes, countdowns, and promotion states to drive conversion.'],
    'task.kicker':['从你的任务开始','Start with Your Task'],'task.title':['你现在想解决什么问题？','What do you need to solve right now?'],'task.choose':['我要选商卡','Choose a card'],'task.chooseDesc':['根据业务场景、信息密度和用户任务快速选择。','Choose by business context, information density, and user task.'],'task.spec':['我要查规范','Read the specifications'],'task.specDesc':['查看原子、结构、字段、状态和异常兜底规则。','Review atoms, structures, fields, states, and fallback rules.'],'task.component':['我要找组件','Find a component'],'task.componentDesc':['定位对应商卡详情与 Figma 主组件，开始设计交付。','Locate the matching card detail and Figma main component for handoff.'],'task.start':['开始使用 →','Get started →'],footer:['设计、产品与研发共享的商品表达语言','One product-expression language for design, product, and engineering']
  };
  function apply(language) {
    var index = language === 'en' ? 1 : 0;
    document.querySelectorAll('[data-home]').forEach(function (element) { var value=copy[element.dataset.home]; if(value) element.textContent=value[index]; });
    document.querySelectorAll('[data-home-html]').forEach(function (element) { var value=copy[element.dataset.homeHtml]; if(value) element.innerHTML=value[index]; });
    document.querySelectorAll('[data-home-aria]').forEach(function (element) { var value=copy[element.dataset.homeAria]; if(value) element.setAttribute('aria-label',value[index]); });
    document.title=index?'Product Card Design System · Overview · Joybuy':'商卡设计系统 · 概览 · Joybuy';
  }
  function initMotion() {
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealTargets = document.querySelectorAll('.home-hero__copy,.hero-card-stack,.home-statement,.home-section');
    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (element) { element.classList.add('is-visible'); });
      initCinematicNav(reducedMotion);
      initCinematicParallax(reducedMotion);
      return;
    }
    document.body.classList.add('home-motion-ready');
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
    revealTargets.forEach(function (element) {
      element.classList.add('home-reveal');
      revealObserver.observe(element);
    });
    var revealHashTarget = function () {
      if (!window.location.hash) return;
      var target = document.querySelector(window.location.hash);
      if (target) target.classList.add('is-visible');
    };
    revealHashTarget();
    window.addEventListener('hashchange', revealHashTarget);

    var links = Array.prototype.slice.call(document.querySelectorAll('.home-global-nav a[href^="#"]'));
    var sections = links.map(function (link) { return document.querySelector(link.getAttribute('href')); }).filter(Boolean);
    if (!sections.length) return;
    var navigationObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (section) { navigationObserver.observe(section); });
    initCinematicNav(false);
    initCinematicParallax(false);
  }
  function initCinematicNav(reduced) {
    var hero = document.querySelector('.home-hero-cinematic');
    if (!hero) return;
    // start with the dark-nav class on so the pill matches the hero as soon as it paints
    document.body.classList.add('home-in-cinematic');
    if (!('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // consider the hero "active" while any part of it still covers the top ~120px zone (where the pill sits)
        var stillOver = entry.intersectionRatio > 0.02 && entry.boundingClientRect.bottom > 120;
        document.body.classList.toggle('home-in-cinematic', stillOver);
      });
    }, { threshold: [0, 0.02, 0.1, 0.5, 1] });
    observer.observe(hero);
  }
  function initCinematicParallax(reduced) {
    if (reduced) return;
    var stage = document.querySelector('.home-hero-cinematic__stage');
    if (!stage) return;
    var raf = 0, targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    function loop() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      stage.style.transform = 'rotateY(' + currentX.toFixed(3) + 'deg) rotateX(' + currentY.toFixed(3) + 'deg)';
      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        raf = requestAnimationFrame(loop);
      } else { raf = 0; }
    }
    var hero = document.querySelector('.home-hero-cinematic');
    hero.addEventListener('pointermove', function (event) {
      var rect = hero.getBoundingClientRect();
      var nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;   // -1..1
      var ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = nx * 3.2;    // max ±3.2° yaw
      targetY = -ny * 1.6;   // max ±1.6° pitch, inverted
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    hero.addEventListener('pointerleave', function () {
      targetX = 0; targetY = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }
  window.addEventListener('joybuy:languagechange',function(event){apply(event.detail.language)});
  apply(window.JoybuySite?window.JoybuySite.getLanguage():'zh');
  initMotion();
})();
