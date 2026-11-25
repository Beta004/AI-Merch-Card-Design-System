#!/usr/bin/env node
/* Atom copy guard.
 *
 * assets/atoms-data.js is the platform view of the Figma atom library
 * (node 28919:271381). Every variant's `copy` must exist in the frozen Figma export
 * (data/joybuy-card-specs.json → _atoms.sets), and the number of variants must match.
 * Run after re-reading Figma: node scripts/check-atom-copy.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const spec = JSON.parse(fs.readFileSync(path.join(root, '../data/joybuy-card-specs.json'), 'utf8'));
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/atoms-data.js'), 'utf8'), sandbox);
const atoms = sandbox.window.ATOMS_DATA.atoms;

// Platform display names → Figma component-set names (only where the site renamed them).
const ALIAS = {
  'Individual Promotion / Type': 'Individual Promotion',
  'Price (first line) / Sale': 'Price (first line)/Sale',
  'Price second line': 'Price (second line)',
  'Country of origin (small)': 'Country of origin 原产地',
  'icon/brand_sold_by_Joybuy': 'Sold by Joybuy'
};
const figma = new Map();
spec._atoms.sets.forEach(s => {
  const list = figma.get(s.name) || [];
  list.push(s);
  figma.set(s.name, list);
});

const issues = [];
const norm = s => String(s).replace(/\s+/g, ' ').trim();
const figmaStrings = new Set();
spec._atoms.sets.forEach(s => s.copy.forEach(c => c.forEach(t => figmaStrings.add(norm(t)))));

atoms.forEach(a => {
  const sets = figma.get(ALIAS[a.name_en] || a.name_en);
  if (!sets) { issues.push('atom "' + a.name_en + '" has no Figma component set'); return; }
  if (a.name_en === 'icon/brand_sold_by_Joybuy') return; // icon-only child of Sold by Joybuy
  const variants = sets.reduce((n, s) => n + s.variant_count, 0);
  if (variants !== a.variants.length) issues.push(a.name_en + ': ' + a.variants.length + ' variants, Figma has ' + variants);
  a.variants.forEach(v => {
    (v.copy || []).forEach(t => {
      if (!figmaStrings.has(norm(t))) issues.push(a.name_en + ' / ' + v.label + ': "' + t + '" is not a Figma atom string');
    });
  });
});

if (issues.length) {
  console.error('Atom copy check failed (' + issues.length + '):');
  issues.forEach(i => console.error('  - ' + i));
  process.exit(1);
}
console.log('Atom copy check passed: ' + atoms.length + ' atoms, ' + atoms.reduce((n, a) => n + a.variants.length, 0) + ' variants.');
