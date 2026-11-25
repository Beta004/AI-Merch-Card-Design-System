/* Shared atomic mapping preview for product-card detail pages. */
(function () {
  /* ================ Atomic mapping variant previews ================ */
  function initAnatomyVariantPreviews() {
    if (!window.ATOMS_DATA) return;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const controllers = [];
    let active = null;
    let instanceCount = 0;

    // Existing detail pages historically linked atom names directly to the atom
    // browser. Upgrade those links into the same disclosure trigger automatically.
    document.querySelectorAll('.anatomy-cell__atom a[href*="#atom-"]').forEach(link => {
      const match = (link.getAttribute('href') || '').match(/#atom-([a-z0-9-]+)$/i);
      if (!match) return;
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'atom-map-trigger';
      trigger.dataset.atomPreview = match[1];
      while (link.firstChild) trigger.appendChild(link.firstChild);
      link.replaceWith(trigger);
    });

    function closePreview(controller) {
      if (!controller) return;
      window.clearTimeout(controller.openTimer);
      window.clearTimeout(controller.closeTimer);
      controller.panel.hidden = true;
      controller.host.classList.remove('is-open');
      controller.trigger.setAttribute('aria-expanded', 'false');
      if (active === controller) active = null;
    }

    function openPreview(controller) {
      if (active && active !== controller) closePreview(active);
      active = controller;
      window.clearTimeout(controller.closeTimer);
      controller.renderItems();
      controller.panel.hidden = false;
      controller.host.classList.add('is-open');
      controller.trigger.setAttribute('aria-expanded', 'true');
      controller.positionPanel();
    }

    document.querySelectorAll('.anatomy-cell__atom [data-atom-preview]').forEach(trigger => {
      const slug = trigger.dataset.atomPreview;
      const atom = window.ATOMS_DATA.atoms.find(item => item.slug === slug);
      if (!atom || !atom.variants.length) return;

      const host = document.createElement('span');
      host.className = 'atom-map-preview';
      trigger.parentNode.insertBefore(host, trigger);
      host.appendChild(trigger);

      const panel = document.createElement('span');
      panel.className = 'atom-map-popover' + (atom.variants.length > 4 ? ' atom-map-popover--many' : '');
      panel.id = 'atom-map-popover-' + slug + '-' + (++instanceCount);
      panel.hidden = true;

      const head = document.createElement('span');
      head.className = 'atom-map-popover__head';
      const title = document.createElement('span');
      title.textContent = atom.name_cn;
      const count = document.createElement('span');
      count.className = 'atom-map-popover__count';
      count.textContent = atom.variants.length + ' 类型';
      head.append(title, count);

      const grid = document.createElement('span');
      grid.className = 'atom-map-popover__grid';
      if (atom.variants.length < 4) {
        grid.style.gridTemplateColumns = 'repeat(' + atom.variants.length + ', minmax(0, 1fr))';
      }
      panel.append(head, grid);
      host.appendChild(panel);
      trigger.setAttribute('aria-controls', panel.id);
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-label', '查看 ' + atom.name_cn + ' 的 ' + atom.variants.length + ' 种类型');

      let rendered = false;
      const controller = {
        host, trigger, panel, openTimer: 0, closeTimer: 0,
        renderItems() {
          if (rendered) return;
          rendered = true;
          atom.variants.forEach(variant => {
            const link = document.createElement('a');
            link.className = 'atom-map-option';
            link.href = '../atoms/index.html#atom-' + slug + '-' + variant.key;
            link.title = variant.label;
            link.setAttribute('aria-label', '查看 ' + atom.name_cn + ' ' + variant.label + ' 详情');

            const preview = document.createElement('span');
            preview.className = 'atom-map-option__preview';
            if (variant.text) {
              const text = document.createElement('span');
              text.className = 'ph-sponsored';
              text.textContent = variant.copy && variant.copy[0] ? variant.copy[0] : variant.label;
              preview.appendChild(text);
            } else {
              const image = document.createElement('img');
              image.src = variant.svg;
              image.alt = '';
              image.loading = 'lazy';
              preview.appendChild(image);
            }

            const name = document.createElement('span');
            name.textContent = variant.label
              .replace(/^(?:Type|Property 1|Name|Fulfillment Type|Country of origin)=/, '')
              .replace(/^more/i, 'More');
            link.append(preview, name);
            grid.appendChild(link);
          });
        },
        positionPanel() {
          const grid = panel.querySelector('.atom-map-popover__grid');
          panel.style.left = '0';
          panel.style.top = 'calc(100% + 10px)';
          panel.style.bottom = 'auto';
          panel.style.maxHeight = '';
          panel.style.overflowY = '';
          grid.style.maxHeight = '';
          grid.style.overflowY = '';
          const triggerRect = trigger.getBoundingClientRect();
          let rect = panel.getBoundingClientRect();
          const below = window.innerHeight - triggerRect.bottom - 26;
          const above = triggerRect.top - 26;
          const useAbove = rect.height > below && above > below;

          // Constrain to the room on the chosen side. On short screens the outer
          // panel alone scrolls, avoiding nested scroll areas and clipped variants.
          const available = Math.max(120, useAbove ? above : below);
          if (rect.height > available) {
            panel.style.maxHeight = available + 'px';
            panel.style.overflowY = 'auto';
            grid.style.maxHeight = 'none';
            grid.style.overflowY = 'visible';
          }
          if (useAbove) {
            panel.style.top = 'auto';
            panel.style.bottom = 'calc(100% + 10px)';
          }

          rect = panel.getBoundingClientRect();
          let delta = 0;
          if (rect.right > window.innerWidth - 16) delta = window.innerWidth - 16 - rect.right;
          if (rect.left + delta < 16) delta = 16 - rect.left;
          panel.style.left = delta + 'px';
        }
      };
      controllers.push(controller);

      if (canHover) {
        host.addEventListener('mouseenter', () => {
          window.clearTimeout(controller.closeTimer);
          controller.openTimer = window.setTimeout(() => openPreview(controller), 100);
        });
        host.addEventListener('mouseleave', () => {
          window.clearTimeout(controller.openTimer);
          controller.closeTimer = window.setTimeout(() => closePreview(controller), 180);
        });
      }
      trigger.addEventListener('click', event => {
        if (canHover && event.detail !== 0) { openPreview(controller); return; }
        if (active === controller && !panel.hidden) closePreview(controller);
        else openPreview(controller);
      });
      trigger.addEventListener('keydown', event => {
        if (event.key !== 'ArrowDown') return;
        event.preventDefault();
        openPreview(controller);
        const first = panel.querySelector('a');
        if (first) first.focus();
      });
      host.addEventListener('focusout', () => {
        controller.closeTimer = window.setTimeout(() => {
          if (!host.contains(document.activeElement)) closePreview(controller);
        }, 0);
      });
    });

    document.addEventListener('pointerdown', event => {
      if (active && !active.host.contains(event.target)) closePreview(active);
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !active) return;
      const closing = active;
      closePreview(closing);
      closing.trigger.focus();
    });
    window.addEventListener('resize', () => {
      if (active) active.positionPanel();
    }, { passive: true });
  }


  initAnatomyVariantPreviews();
})();
