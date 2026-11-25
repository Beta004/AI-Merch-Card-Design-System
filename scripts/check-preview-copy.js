#!/usr/bin/env node
/* Preview copy guard.
 *
 * Every visible string in a card preview (organisms/*, sections/home-feed) must come
 * from the Figma atom library (node 28919:271381). This script:
 *   1. loads assets/card-data.js and checks every catalog field against CARD_DATA.atomCopy;
 *   2. scans the preview HTML for hand-written copy in the known field slots;
 *   3. scans for seller copy other than the fixed "Sold by Joybuy" atom.
 *
 * Usage: node scripts/check-preview-copy.js
 * Exit code 1 = atom-library copy leaked into a preview.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const D = require(path.join(root, 'assets/card-data.js'));
const vm = require('vm');
const atomSandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/atoms-data.js'), 'utf8'), atomSandbox);
const ATOMS = atomSandbox.window.ATOMS_DATA.atoms;

const issues = [];
const atomSet = new Set();
Object.keys(D.atomCopy).forEach(k => D.atomCopy[k].forEach(v => atomSet.add(v)));

D.copyAudit().forEach(i => issues.push('[catalog] ' + i));

// Product Highlights business rule: the expiry badges (Best Before / Too Good To Waste)
// only ship on fresh / grocery SKUs; every other category must use a generic badge.
const highlightPolicy = D.highlightPolicy || {};
Object.keys(D.catalog).forEach(cat => {
  const isGrocery = (highlightPolicy.groceryCategories || []).indexOf(cat) !== -1;
  D.catalog[cat].forEach((p, i) => {
    ['en', 'zh'].forEach(lang => {
      const hl = (p[lang] || {}).highlight;
      if (!hl) return;
      if ((highlightPolicy.keys || []).indexOf(hl) === -1) {
        issues.push('[catalog] ' + cat + '[' + i + '].' + lang + '.highlight -> unknown key "' + hl + '"');
      } else if (!isGrocery && (highlightPolicy.groceryOnly || []).indexOf(hl) !== -1) {
        issues.push('[catalog] ' + cat + '[' + i + '].' + lang + '.highlight -> "' + hl + '" is grocery-only');
      }
    });
  });
});

// The atom page is the exhaustive copy browser: its copy must equal the Figma export.
ATOMS.forEach(a => a.variants.forEach(v => (v.copy || []).forEach(t => {
  if (!atomSet.has(t)) issues.push('[atoms] ' + a.name_en + ' / ' + v.label + ' -> "' + t + '"');
})));

const PREVIEW_FILES = [
  'organisms/vertical-card.html',
  'organisms/horizontal-card.html',
  'organisms/horizontal-mini.html',
  'organisms/horizontal-scroll.html',
  'organisms/campaign-card.html',
  'organisms/booking-card.html',
  'organisms/small-dynamic.html',
  'organisms/_compare-vertical.html',
  'sections/home-feed.html'
];

// Field slots whose text is rendered straight into the card.
const TEXT_SLOTS = new Set([
  'title', 'sold', 'discount', 'deposit', 'promotion', 'fulfillment',
  'seller', 'serviceText', 'countryText', 'stock', 'brand', 'rating',
  'salePrice', 'originalPrice', 'highlight'
]);

PREVIEW_FILES.forEach(rel => {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  // Only static markup is scanned: inline scripts legitimately mention data-field
  // selectors, so they are stripped before the field-slot check.
  const markup = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const re = /data-field="([^"]+)"[^>]*>([^<]*)</g;
  let m;
  while ((m = re.exec(markup))) {
    const [, field, raw] = m;
    const text = raw.replace(/&amp;/g, '&').trim();
    if (!TEXT_SLOTS.has(field) || !text) continue;
    if (field === 'title' || field === 'fulfillment') continue; // handled below
    if (/^['"]?\s*\+/.test(text)) continue; // JS-built markup, covered by the catalog audit
    if (field === 'highlight') continue; // rendered from the shared highlight atom map
    if (!atomSet.has(text)) issues.push('[' + rel + '] data-field="' + field + '" -> "' + text + '"');
  }
  // Static markup may split a multi-line title into <br>; rebuild it before checking.
  const titleRe = /data-field="title"[^>]*>([\s\S]*?)<\/p>/g;
  while ((m = titleRe.exec(markup))) {
    const inner = m[1];
    if (/[+{]/.test(inner)) continue;
    const text = inner.replace(/<br\s*\/?>/gi, '\n').replace(/&amp;/g, '&').trim();
    if (text && !atomSet.has(text)) issues.push('[' + rel + '] data-field="title" -> "' + text.replace(/\n/g, '\\n') + '"');
  }
  // Fulfillment copy is always the Fulfillment Time atom; only the truck icon varies.
  // Only inspect markup lines (`<span ...>Get it by today</span>`), not JS selectors.
  markup.split('\n').forEach(line => {
    const fm = line.match(/<[a-z]+[^>]*data-field="fulfillment"[^>]*>([^<]*)</i);
    if (!fm) return;
    const text = fm[1].replace(/&amp;/g, '&').trim();
    if (text && !atomSet.has(text)) issues.push('[' + rel + '] data-field="fulfillment" -> "' + text + '"');
  });
  // Seller copy is a fixed 1P atom; any other "Sold by X" is invented.
  const seller = html.match(/Sold by (?!Joybuy\b)[A-Z][\w&' -]*/g);
  if (seller) seller.forEach(s => issues.push('[' + rel + '] invented seller copy -> "' + s.trim() + '"'));
});

// Delivery copy outside the Fulfillment Time atom is not allowed either.
const BANNED = [
  /Same-day chilled delivery/,
  /Delivered tomorrow/,
  /Ships in \d/,
  /Sold by Joybuy (Fresh|Grocery|Fine Jewellery)/,
  /Sold by Apple Store/
];
PREVIEW_FILES.forEach(rel => {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return;
  const html = fs.readFileSync(file, 'utf8');
  BANNED.forEach(re => {
    const hit = html.match(re);
    if (hit) issues.push('[' + rel + '] banned copy -> "' + hit[0] + '"');
  });
});

if (issues.length) {
  console.error('Preview copy check failed (' + issues.length + '):');
  issues.forEach(i => console.error('  - ' + i));
  process.exit(1);
}
console.log('Preview copy check passed: ' + Object.keys(D.atomCopy).length + ' atom families, ' + atomSet.size + ' allowed strings.');
console.log('  Product Highlights keys : ' + (highlightPolicy.keys || []).join(', '));
console.log('  Grocery-only badges    : ' + (highlightPolicy.groceryOnly || []).join(', ') + ' \u2192 ' + (highlightPolicy.groceryCategories || []).join(', '));
