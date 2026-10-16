const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.join(__dirname, '..');
const injection = readFileSync(path.join(root, 'inject.js'), 'utf8');
const localization = injection.slice(0, injection.indexOf('// PokéSurvivor Mod:'));

function runtime({ saved = null, nav = 'en-US', pathname = '/', storageError = false } = {}) {
  const context = vm.createContext({
    window: {}, navigator: { language: nav, languages: [nav] }, location: { pathname },
    localStorage: { getItem() { if (storageError) throw Error('Storage blocked'); return saved; }, setItem() {} },
    document: { readyState: 'loading', documentElement: { dataset: {} }, addEventListener() {} },
    addEventListener() {}, setTimeout() {}, setInterval() {}, clearTimeout() {}, clearInterval() {}, console,
  });
  vm.runInContext(localization, context);
  return context;
}

function mod(lang) {
  const context = runtime({ saved: lang });
  // Expose private renderers only inside this test VM; production has no test hooks.
  const marker = injection.lastIndexOf('})();');
  vm.runInContext(injection.slice(0, marker) + `
    window.test = { fmt, dec, where, buffsHtml, showSummary, renderKeys, moveList,
      setNS(ns) { NS = ns; setGame(ns); },
      summary() { sumEl = { dataset: {}, hidden: true }; return sumEl; },
      credit,
    };
  ` + injection.slice(marker), context);
  return { context, api: context.window.test };
}

function game(lang) {
  return {
    I18n: { lang, t(s) { return lang === 'en' ? ({ 'Bola Sombra': 'Shadow Ball', 'Restos': 'Leftovers' }[s] || s) : s; } },
    Coop: { active: false },
    Game: { player: { statsTaken: {}, buffs: {}, moves: [{ id: 'shadow-ball', name: 'Bola Sombra' }], item: 'leftovers' } },
    Items: { BY: { leftovers: { name: 'Restos' } } },
  };
}

test('language selection follows the game, saved preference, path, and browser', () => {
  for (const [options, expected] of [
    [{ saved: 'es', pathname: '/en/', nav: 'en' }, 'es'],
    [{ saved: 'en', nav: 'es' }, 'en'],
    [{ pathname: '/en/', nav: 'es' }, 'en'],
    [{ nav: 'es-MX' }, 'es'],
    [{ nav: 'fr-FR' }, 'en'],
    [{ saved: 'invalid', nav: 'es' }, 'es'],
    [{ storageError: true, nav: 'en' }, 'en'],
  ]) assert.equal(runtime(options).window.__psmodI18n.language(), expected);
  const i18n = runtime({ saved: 'en' }).window.__psmodI18n;
  i18n.setGame(game('es'));
  assert.equal(i18n.language(), 'es');
});

test('English templates preserve names, interpolated HTML, and literal boundaries', () => {
  const { t } = runtime().window.__psmodI18n;
  assert.equal(t('DAÑO'), 'DAMAGE');
  assert.equal(t('MiDAÑOtest'), 'MiDAÑOtest');
  assert.equal(t`${'Daño'} tiene poca vida`, 'Daño has low HP');
  assert.equal(t`${'→'} a ${12} casillas`, '→ 12 tiles away');
  assert.equal(t`¡${3} legendarios!`, '3 legendaries!');
  assert.equal(t`Reparto entre ${4} jugadores`, 'Sharing across 4 players');
  assert.equal(t`<b>Tiempo</b>${'<span>Daño</span>'}`, '<b>Time</b><span>Daño</span>');
});

test('Spanish labels and templates remain unchanged', () => {
  const { t } = runtime({ saved: 'es' }).window.__psmodI18n;
  assert.equal(t('DAÑO'), 'DAÑO');
  assert.equal(t`¡${3} legendarios!`, '¡3 legendarios!');
  assert.equal(t`${'→'} a ${12} casillas`, '→ a 12 casillas');
  assert.equal(t('<b>Tiempo</b>'), '<b>Tiempo</b>');
});

test('real stats and move renderers follow both languages, including game names', () => {
  for (const lang of ['en', 'es']) {
    const { api } = mod(lang);
    api.setNS(game(lang));
    const html = api.buffsHtml();
    assert.ok(html.includes(lang === 'en' ? 'YOUR STATS' : 'TUS MEJORAS'));
    assert.ok(html.includes(lang === 'en' ? 'Leftovers' : 'Restos'));
    assert.equal(api.dec(1.25), lang === 'en' ? '1.25' : '1,25');
    assert.equal(api.fmt(12345), lang === 'en' ? '12,345' : '12.345');
    api.credit('shadow-ball', 100);
    assert.equal(api.moveList()[0].name, lang === 'en' ? 'Shadow Ball' : 'Bola Sombra');
    assert.equal(api.where({ x: 0, y: 0 }, 320, 0), lang === 'en' ? '→ 10 tiles away' : '→ a 10 casillas');
  }
});

test('run summary and control menus render English without translating player names', () => {
  const { api } = mod('en');
  api.setNS(game('en'));
  const summary = api.summary();
  api.showSummary({ time: 120, level: 20, kills: 100, dmg: 2000, dps: 16, mon: 'Gengar', players: [
    { name: 'Daño <test>', color: '#fff', dmg: 2000, exact: true }, { name: 'Other', color: '#fff', dmg: 1, exact: true },
  ], moves: [{ name: 'Shadow Ball', dmg: 2000, pct: 1 }] });
  assert.ok(summary.innerHTML.includes('Run summary'));
  assert.ok(summary.innerHTML.includes('Your moves'));
  assert.ok(summary.innerHTML.includes('Daño &#60;test&#62;'));
  summary.dataset.view = 'keys';
  api.renderKeys();
  for (const label of ['Controls', 'Previous move', 'Reroll upgrades', 'Wheel up', 'Reset']) assert.ok(summary.innerHTML.includes(label), label);
});

test('co-op stats translate labels without touching teammate names', () => {
  const { api } = mod('en');
  const ns = game('en');
  ns.Coop = {
    active: true,
    local: ns.Game.player,
    mates: [{ connected: true, name: 'Velocidad', pl: { net: { xpMul: 1.2, mag: 78 } } }],
  };
  api.setNS(ns);
  const html = api.buffsHtml();
  assert.ok(html.includes('Velocidad'));
  assert.ok(html.includes('Sharing across 2 players'));
  assert.ok(html.includes('Average team Learning'));
  assert.ok(html.includes('Enemy spawn rate'));
});

test('localization is bundled in the existing extension entry point', () => {
  const manifest = JSON.parse(readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  assert.deepEqual(manifest.content_scripts[0].js, ['inject.js']);
  assert.ok(localization.includes('window.__psmodI18n ='));
  assert.ok(injection.indexOf('window.__psmodI18n =') < injection.indexOf('const { t: tr'));
  for (const entry of manifest.content_scripts) for (const file of entry.js) assert.ok(existsSync(path.join(root, file)));
  assert.match(readFileSync(path.join(root, '.github/workflows/release.yml'), 'utf8'), /zip .*inject\.js/);
});
