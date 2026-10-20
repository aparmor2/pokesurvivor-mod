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
      credit, autoChoose, autoHtml, movesets, movesetHtml,
      setAuto(v) { auto = Object.assign(AUTO_DEF(), v); },
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

test('auto-pick takes the first rule that matches a card', () => {
  const { api } = mod('es');
  const ns = game('es');
  ns.Moves = { BY_ID: { ember: { cat: 'special', name: 'Ascuas', type: 'fire' }, tackle: { cat: 'physical', name: 'Placaje', type: 'normal' } }, ALL: [{ id: 'ember' }, { id: 'tackle' }], poolFor: () => ['ember'] };
  ns.Stats = { fit: (mon, cat) => (cat === 'special' ? 1 : 0.8) };
  ns.LevelUp = { STATS: [{ id: 'atk', title: 'Potencia', desc: '+10%' }, { id: 'heal', title: 'Baya Zidra', desc: 'Cura' }] };
  api.setNS(ns);
  const p = { hp: 80, maxHp: 100, mon: {} };
  const cards = [
    { type: 'new', key: 'new:tackle' },
    { type: 'stat', key: 'stat:heal', color: '#8fa3c4' },
    { type: 'new', key: 'new:ember' },
  ];
  api.setAuto({ rules: ['heal-low', 'new-fit', 'new'] });
  assert.equal(api.autoChoose(cards, p).key, 'new:ember');
  assert.equal(api.autoChoose(cards, { ...p, hp: 30 }).key, 'stat:heal');
  api.setAuto({ rules: ['move:tackle', 'new-fit'] });
  assert.equal(api.autoChoose(cards, p).key, 'new:tackle');
  api.setAuto({ rules: ['stat:atk', 'evo'] });
  assert.equal(api.autoChoose(cards, p), null);
});

test('auto-pick editor renders in English', () => {
  const { api } = mod('en');
  const ns = game('en');
  ns.Moves = { BY_ID: { ember: { name: 'Ascuas', type: 'fire' } }, ALL: [{ id: 'ember' }] };
  ns.LevelUp = { STATS: [{ id: 'atk', title: 'Potencia', desc: '+10%' }] };
  ns.U = { TYPE_NAME: { fire: 'Fuego' } };
  api.setNS(ns);
  const html = api.autoHtml();
  for (const label of ['Evolve a move', 'If nothing from the list comes up:', 'All moves', 'Reset the list']) assert.ok(html.includes(label), label);
});

test('a moveset goes first in its order and limits new moves', () => {
  const { api } = mod('en');
  const ns = game('en');
  ns.Moves = {
    BY_ID: { ember: { cat: 'special', name: 'Ascuas', type: 'fire' }, tackle: { cat: 'physical', name: 'Placaje', type: 'normal' }, bite: { cat: 'physical', name: 'Mordisco', type: 'dark' } },
    poolFor: () => ['ember', 'bite'],
  };
  ns.startMoveOf = () => 'tackle';
  api.setNS(ns);
  const p = { hp: 100, maxHp: 100, mon: { dex: 25, name: 'Pikachu', types: ['electric'] } };
  api.movesets[25] = ['tackle', 'ember'];
  const cards = [{ type: 'new', key: 'new:bite' }, { type: 'new', key: 'new:ember' }, { type: 'up', key: 'up:tackle' }];
  api.setAuto({ rules: ['set', 'new'] });
  assert.equal(api.autoChoose(cards, p).key, 'up:tackle');
  api.setAuto({ rules: ['new'] });
  assert.equal(api.autoChoose(cards, p).key, 'new:ember');
  api.setAuto({ rules: ['new'] });
  assert.equal(api.autoChoose(cards, { ...p, mon: { dex: 1 } }).key, 'new:bite');
  const html = api.movesetHtml(p.mon);
  assert.ok(html.includes('Placaje') && html.includes('Add'));
  delete api.movesets[25];
  assert.ok(api.movesetHtml(p.mon).includes('No moveset'));
});

test('tied rules take turns, by how often each was taken', () => {
  const { api } = mod('es');
  const ns = game('es');
  ns.Moves = { BY_ID: {} };
  api.setNS(ns);
  const cards = [{ type: 'stat', key: 'stat:atk' }, { type: 'stat', key: 'stat:spd' }, { type: 'stat', key: 'stat:cd' }];
  api.setAuto({ rules: ['stat:cd', 'stat:atk', 'stat:spd'], tied: { 'stat:atk': true, 'stat:spd': true } });
  const p = { hp: 1, maxHp: 1, mon: {}, statsTaken: { cd: 0, atk: 2, spd: 1 } };
  assert.equal(api.autoChoose(cards, p).key, 'stat:cd');
  api.setAuto({ rules: ['stat:atk', 'stat:spd', 'stat:cd'], tied: { 'stat:spd': true } });
  assert.equal(api.autoChoose(cards, p).key, 'stat:spd');
  assert.equal(api.autoChoose(cards, { ...p, statsTaken: { atk: 1, spd: 1 } }).key, 'stat:atk');
  assert.equal(api.autoChoose(cards.slice(0, 1), p).key, 'stat:atk');
});
