(function () {
  function labelFor(group) {
    const block = group.closest('.demo__controls-block');
    const title = block && block.querySelector('.demo__controls-title');
    return title ? title.textContent.trim() : 'Preview options';
  }

  function syncGroup(group) {
    group.setAttribute('role', 'group');
    if (!group.getAttribute('aria-label')) group.setAttribute('aria-label', labelFor(group));
    group.querySelectorAll('button').forEach(function (button) {
      button.type = 'button';
      button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');
    });
  }

  function syncControls(root) {
    (root || document).querySelectorAll('#s-overview :is(.lang-toggle, .chip-strip, .preset-strip)').forEach(syncGroup);
  }

  function init() {
    syncControls(document);
    const overview = document.getElementById('s-overview');
    if (!overview) return;
    new MutationObserver(function () { syncControls(overview); }).observe(overview, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    });
    overview.addEventListener('click', function () {
      window.requestAnimationFrame(function () { syncControls(overview); });
    });
    window.addEventListener('joybuy:languagechange', function () {
      if (typeof renderUsedIn === 'function') renderUsedIn();
      if (typeof uframe !== 'undefined' && uframe && uframe.classList.contains('is-open') && typeof fillFrame === 'function') {
        const page = typeof PD !== 'undefined' && PD && PD.pages ? PD.pages.find(function (item) { return item.id === uOpenId; }) : null;
        if (page) fillFrame(page);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
