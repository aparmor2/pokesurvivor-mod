// Mod-only localization. Translate literal UI text before interpolating values,
// so player names and interpolated game data or HTML are never rewritten.
(() => {
  'use strict';

  const EN = {
    "El navegador había cerrado la pestaña para ahorrar memoria": "The browser discarded the tab to save memory",
    "Por eso se ha recargado. Alt + L para ver el registro": "That caused the reload. Alt + L opens the connection log",
    "Mejoras tuyas y del equipo (Alt + J)": "Your stats and team stats (Alt + J)",
    "Avisos con sonido (Alt + B)": "Sound alerts (Alt + B)",
    "Menos visión (Alt + -)": "Zoom in (Alt + -)",
    "Visión normal (Alt + 0)": "Default view (Alt + 0)",
    "Más visión (Alt + +)": "Zoom out (Alt + +)",
    "HUD del juego más pequeño": "Smaller game HUD",
    "HUD del juego a tamaño original": "Default game HUD size",
    "HUD del juego más grande": "Larger game HUD",
    "Versión del mod": "Mod version",
    "Cambiar teclas y rueda del ratón (Alt + K)": "Change keyboard and mouse bindings (Alt + K)",
    "Caído - ve a revivirlo": "Down - revive them",
    "Caído": "Down",
    "Pulsa para ver el daño por ataque": "Click to see damage by move",
    "Sin datos todavía": "No data yet",
    "sin mod": "no mod",
    "Primera grieta posible en": "First possible rift in",
    "Grietas en pausa: hay un jefe vivo": "Rifts paused: a boss is alive",
    " - segura en": " - guaranteed within",
    "Grieta: tirada en": "Rift: next roll in",
    "Quemaduras": "Burn",
    "Veneno": "Poison",
    "Otros": "Other",
    "Aún no has hecho daño": "No damage dealt yet",
    "subes en": "next level in",
    "Legendarios en": "Legendaries in",
    "Grieta abierta:": "Rift closes in:",
    "Sonido: sí": "Sound: on",
    "Sonido: no": "Sound: off",
    "¡Shiny!": "Shiny!",
    "Jefe:": "Boss:",
    "Pokémon dorado:": "Golden Pokémon:",
    "¡Ladrón!": "Thief!",
    "¡Legendario!": "Legendary!",
    "Se ha abierto una grieta": "A rift has opened",
    "ha caído: ve a revivirlo": "is down: revive them",
    "tiene poca vida": "has low HP",
    "¿Te está gustando el mod?": "Enjoying the mod?",
    "Dale una estrella en GitHub: es gratis, son dos clics y ayuda a que lo conozca más gente.": "Star it on GitHub to help others discover it.",
    "Dar una estrella": "Star on GitHub",
    "No, gracias": "No, thanks",
    "Tu mejor daño por segundo": "Your highest damage per second",
    "Resumen de la partida": "Run summary",
    "Tus últimas partidas": "Recent runs",
    "Borrar historial": "Clear history",
    "Todavía no hay partidas guardadas. Se guardan al acabar cada partida.": "No saved runs yet. Runs are saved when they end.",
    "Empezar con un solo movimiento aunque tenga Repertorio": "Start with one move even with Repertoire unlocked",
    "el anfitrión": "the host",
    "No se pudo recuperar la conexión con": "Could not reconnect to",
    "Conexión con": "Connection to",
    " recuperada": " restored",
    " cortada": " lost",
    "Esperando a que vuelva.": "Waiting to reconnect.",
    "Se ha cortado la conexión con": "Lost connection to",
    "Reconectando… (hasta": "Reconnecting… (up to",
    "El navegador había cerrado esta pestaña para ahorrar memoria y la ha recargado.": "The browser discarded this tab to save memory and reloaded it.",
    "El navegador ha congelado la pestaña (estaba en segundo plano).": "The browser froze the background tab.",
    "La pestaña ha vuelto después de estar congelada.": "The tab resumed after being frozen.",
    "Se ha perdido la conexión a internet.": "Internet connection lost.",
    "Sin conexión a internet": "No internet connection",
    "Ha vuelto la conexión a internet.": "Internet connection restored.",
    "Registro de conexión": "Connection log",
    "No ha pasado nada raro todavía.": "No connection events yet.",
    "Si os echa de una partida, abrid esto (Alt + L) y mirad la última línea: dice si fue la conexión entre vosotros, internet o el navegador.": "If you disconnect, open this log (Alt + L). The latest entry identifies peer, internet, or browser issues.",
    "TUS MEJORAS": "YOUR STATS",
    "Reducción de daño": "Damage reduction",
    "Regeneración": "Regeneration",
    "Críticos (×1,5)": "Critical chance (×1.5)",
    "vida/s": "HP/s",
    "Mejora de": "Buff:",
    "Objeto": "Item",
    "EQUIPO": "TEAM",
    "Aprendizaje medio del equipo": "Average team Learning",
    "Experiencia que recibís": "XP received",
    "Vida de los enemigos": "Enemy HP",
    "Enemigos que salen": "Enemy spawn rate",
    "Ver más lejos (rueda del ratón)": "Zoom out (mouse wheel)",
    "Ver más cerca (rueda del ratón)": "Zoom in (mouse wheel)",
    "Saltar siempre la animación de la tragaperras": "Always skip the gacha animation",
    "Tirar todo": "Pull all",
    "Lo que te falta por región": "Missing Pokémon by region",
    "El banner donde más te falta": "Banner with the most missing Pokémon",
    "Legendaria en": "5-star pity in",
    " tiradas": " pulls",
    "Saltar animación": "Skip animation",
    "Puzles diarios de Pokémon, del autor de este mod": "Daily Pokémon puzzles by the mod author",
    "Quitar de favoritos": "Remove from favorites",
    "Añadir a favoritos": "Add to favorites",
    "Ninguno de tus favoritos pasa los filtros.": "None of your favorites match the filters.",
    "Aún no tienes favoritos. Pasa el ratón por un Pokémon y pulsa la ★ de su esquina.": "No favorites yet. Hover over a Pokémon and click its corner star.",
    "Rueda arriba": "Wheel up",
    "Rueda abajo": "Wheel down",
    "Botón central": "Middle mouse",
    "Lateral atrás": "Mouse back",
    "Lateral adelante": "Mouse forward",
    "Espacio": "Space",
    "Intro": "Enter",
    "Bloq Mayús": "Caps Lock",
    "Mayús der.": "Right Shift",
    "Mayús": "Shift",
    "Ctrl der.": "Right Ctrl",
    "Ataque anterior": "Previous move",
    "Ataque siguiente": "Next move",
    "Ataque 1 / mejora 1": "Move 1 / upgrade 1",
    "Ataque 2 / mejora 2": "Move 2 / upgrade 2",
    "Ataque 3 / mejora 3": "Move 3 / upgrade 3",
    "Ataque 4": "Move 4",
    "Cambiar mejoras": "Reroll upgrades",
    "Pulsa un botón y luego la tecla, la rueda del ratón (arriba o abajo) o un botón central o lateral del ratón. Esc cancela, Retroceso deja el hueco vacío. La rueda solo cuenta encima del juego, no de los paneles.": "Click a binding, then press a key or use the mouse wheel, middle button, or side buttons. Esc cancels; Backspace clears the binding. The wheel works over the game, not over panels.",
    "Las flechas, Tab, el teclado numérico y Esc siguen funcionando como en el juego. Alt + K abre esto.": "Arrow keys, Tab, the numpad, and Esc retain their game behavior. Open this menu with Alt + K.",
    "Avisos con sonido": "Sound alerts on",
    "Avisos sin sonido": "Sound alerts off",
    "DAÑO": "DAMAGE",
    "Daño": "Damage",
    "Visión": "View",
    "Controles": "Controls",
    "Mejoras": "Stats",
    "Cambiar": "Change",
    "Cerrar": "Close",
    "Tiempo": "Time",
    "Nivel": "Level",
    "Derrotados": "Defeated",
    "Jugador": "Player",
    "Tus ataques": "Your moves",
    "Historial": "History",
    "Fecha": "Date",
    "Nv.": "Lv.",
    "Recarga": "Cooldown",
    "Velocidad": "Movement speed",
    "Imán": "Magnet",
    "imán": "magnet",
    "Experiencia": "Experience",
    "MAPA": "MAP",
    "Región": "Region",
    "Tienes": "Owned",
    "Faltan": "Missing",
    "Ocultar": "Hide",
    "Completa": "Complete",
    "Favoritos": "Favorites",
    "Nacional": "National",
    "Arriba": "Up",
    "Abajo": "Down",
    "Izquierda": "Left",
    "Derecha": "Right",
    "Pausa": "Pause",
    "Restablecer": "Reset",
    "Pulsa…": "Press…",
    "Acción": "Action",
    "Tecla": "Key",
    "Otra": "Alternate",
    "Tú": "You",
    "ataque": "attack",
    "velocidad": "speed",
    "defensa": "defense",
    "regeneración": "regeneration",
    "Ver": "Show",
    "casillas": "tiles",
    "legendarios!": "legendaries!",
    " disponible": " available",
    "Tienes la ": "You have ",
    ". Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.": ". Download the new ZIP, extract it over the mod folder, and reload the extension.",
    "En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas ": "Your highest-DPS run is highlighted in yellow. Your last ",
    " en este navegador. Alt + H abre esto cuando quieras.": " runs are saved in this browser. Open with Alt + H.",
    "Reparto entre ": "Sharing across ",
    " jugadores": " players"
  };
  const TEMPLATES = {
    "{x} a {x} casillas": "{x} {x} tiles away",
    "¡{x} legendarios!": "{x} legendaries!",
    "En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas {x} en este navegador. Alt + H abre esto cuando quieras.": "Your highest-DPS run is highlighted in yellow. Your last {x} runs are saved in this browser. Open with Alt + H.",
    "Reparto entre {x} jugadores": "Sharing across {x} players",
    "Tienes la {x}. Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.": "You have {x}. Download the new ZIP, extract it over the mod folder, and reload the extension.",
    "Mod {x} disponible": "Mod {x} available"
  };
  let game = null;
  const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const phrases = new RegExp(Object.keys(EN).sort((a, b) => b.length - a.length)
    .map(s => `(?<![\\p{L}\\p{N}_])${escape(s)}(?![\\p{L}\\p{N}_])`).join('|'), 'gu');

  function language() {
    if (game && game.I18n && ['es', 'en'].includes(game.I18n.lang)) return game.I18n.lang;
    let saved;
    try { saved = localStorage.getItem('ps.lang'); } catch {}
    if (saved === 'es' || saved === 'en') return saved;
    if (/\/en(\/|$)/.test(location.pathname)) return 'en';
    const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'es').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  function text(s) {
    return language() === 'en' ? s.replace(phrases, match => EN[match]) : s;
  }

  // Supports both t('label') and t`label ${value}`; values stay untouched.
  function t(strings, ...values) {
    if (typeof strings === 'string') return text(strings);
    const translated = language() === 'en' && TEMPLATES[strings.join('{x}')];
    if (translated) {
      const parts = translated.split('{x}');
      return parts.reduce((out, part, i) => out + part + (i < values.length ? values[i] : ''), '');
    }
    return strings.reduce((out, part, i) => out + text(part) + (i < values.length ? values[i] : ''), '');
  }

  window.__psmodI18n = {
    t,
    language,
    setGame(ns) { game = ns; },
    locale() { return language() === 'en' ? 'en-US' : 'es-ES'; },
    gameText(s) { return game && game.I18n && game.I18n.t ? game.I18n.t(s) : s; },
  };
})();

// PokéSurvivor Mod: damage meter (per player and per move), field of view,
// minimap, alerts, run summaries, gacha helpers.
//
// Runs in the page's own JS world at document_start, before the game's
// deferred bundle. The game keeps all its modules (Camera, Net, Coop, Game...)
// on a private object inside a closure, so we catch that object the moment the
// bundle assigns `ns.Camera = {...}` through a one-shot setter on
// Object.prototype.
(() => {
  'use strict';
  if (window.__psmod) return;
  window.__psmod = true;

  const { t: tr, locale, gameText, setGame } = window.__psmodI18n;

  const LS = 'psmod:';
  const load = (k, d) => { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch { return d; } };
  const save = (k, v) => { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch {} };

  let NS = null;

  Object.defineProperty(Object.prototype, 'Camera', {
    configurable: true,
    get() { return undefined; },
    set(v) {
      Object.defineProperty(this, 'Camera', { value: v, writable: true, configurable: true, enumerable: true });
      if (NS || !this || !('LIFT' in this) || !('U' in this)) return;
      delete Object.prototype.Camera;
      NS = this;
      setGame(NS);
      window.__psmodNS = NS; // handy for poking around from DevTools
      // Net is assigned later in this same script run, and Coop registers
      // its peer listener right after, so it has to be patched on arrival.
      trapModule('Net', patchNet);
      setupFov(v);
      waitFor(() => NS.Net && NS.Coop && NS.Game, setupMeter);
    },
  });

  function trapModule(name, fn) {
    Object.defineProperty(NS, name, {
      configurable: true,
      enumerable: true,
      get() { return undefined; },
      set(v) {
        Object.defineProperty(NS, name, { value: v, writable: true, configurable: true, enumerable: true });
        try { fn(v); } catch (err) { console.warn('[psmod]', name, err); }
      },
    });
  }

  function waitFor(cond, fn) {
    const id = setInterval(() => { if (cond()) { clearInterval(id); fn(); } }, 100);
  }

  // ---------------------------------------------------------------- FOV
  // Camera.resize() picks scale = min(w / VIEW_W, h / MIN_VIEW_H); scaling
  // both reference sizes up shows proportionally more of the world.
  const FOV_MIN = 1, FOV_MAX = 2.5, FOV_STEP = 0.1;
  let fov = clampFov(load('fov', 1.4));
  let cam = null, baseW = 0, baseH = 0, lastResize = null;

  function clampFov(f) { return Math.round(Math.min(FOV_MAX, Math.max(FOV_MIN, +f || 1)) * 10) / 10; }

  function setupFov(c) {
    cam = c;
    baseW = c.VIEW_W;
    baseH = c.MIN_VIEW_H;
    const orig = c.resize;
    c.resize = function (...args) { lastResize = args; return orig.apply(this, args); };
    applyFov();
  }

  function setFov(f) { fov = clampFov(f); applyFov(); }

  function applyFov() {
    cam.VIEW_W = baseW * fov;
    cam.MIN_VIEW_H = baseH * fov;
    if (lastResize) cam.resize(...lastResize);
    save('fov', fov);
    renderFov();
  }

  // ----------------------------------------------------------------- HUD
  // The game paints its HUD (name, HP, buffs, move slots, arrows) on the main
  // canvas with HUD.draw(ctx, width, height, player, team), in CSS pixels. We
  // scale the context and hand it a proportionally smaller width/height, so
  // everything grows and stays anchored to the same edges. The off-screen
  // arrows place themselves with Camera.scale, which we shrink by the same
  // factor for the duration of the call. The clickable areas (move slots...)
  // are registered from inside draw with Touch.addButton in HUD coordinates
  // and hit-tested against clientX/Y, so we scale those up by the same factor.
  // Touch screens keep the original size.
  const HUD_MIN = 1, HUD_MAX = 2;
  const clampHud = (v) => Math.round(Math.min(HUD_MAX, Math.max(HUD_MIN, +v || 1)) * 10) / 10;
  let hudScale = clampHud(load('hudScale', 1.4));

  function setHudScale(v) { hudScale = clampHud(v); save('hudScale', hudScale); renderHud(); }
  function renderHud() { if (hudLabel) hudLabel.textContent = `HUD ${hudScale.toFixed(1)}x`; }

  function setupHud() {
    const H = NS.HUD;
    const draw = H.draw;
    const T = NS.Touch;
    let btnK = 1;
    if (T && T.addButton) {
      const add = T.addButton;
      T.addButton = function (x, y, w, h, fn, pad = 6) {
        if (btnK === 1) return add.apply(this, arguments);
        return add.call(this, x * btnK, y * btnK, w * btnK, h * btnK, fn, pad * btnK);
      };
    }
    H.draw = function (ctx, w, h, pl) {
      const touch = !!(NS.Touch && NS.Touch.active);
      const k = touch ? 1 : hudScale;
      const C = NS.Camera, cs = C.scale;
      ctx.save();
      if (k !== 1) { ctx.scale(k, k); C.scale = cs / k; }
      btnK = k;
      try {
        const args = Array.prototype.slice.call(arguments);
        args[1] = w / k; args[2] = h / k;
        const out = draw.apply(this, args);
        if (!touch && pl && pl.slots) drawSlotLevels(ctx, w / k, h / k, pl);
        return out;
      } finally {
        btnK = 1;
        C.scale = cs;
        ctx.restore();
      }
    };
  }

  // Fused slots show up to four small icons and no levels. Same layout as
  // the game's slot bar (54 px slots, 9 px apart, 18 px from the bottom, the
  // active one raised 6 px): we add a level badge to every move, gold when it
  // is maxed and a star when it has evolved.
  function drawSlotLevels(ctx, w, h, pl) {
    const S = 54, GAP = 9, ICON = 22;
    const n = Math.max(1, pl.slots.length);
    const x0 = (w - (n * S + GAP * (n - 1))) / 2;
    const y0 = h - S - 18;
    ctx.save();
    ctx.font = '700 10px Pixelify, "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const badge = (m, cx, cy) => {
      const max = m.def ? m.def.maxLvl : 5;
      const text = m.evolved ? '★' : String(m.lvl);
      const bw = Math.max(11, ctx.measureText(text).width + 5), bh = 11;
      ctx.fillStyle = 'rgba(8,14,30,.92)';
      ctx.fillRect(cx - bw / 2, cy - bh / 2, bw, bh);
      ctx.fillStyle = m.evolved || m.lvl >= max ? '#ffd23f' : '#ffffff';
      ctx.fillText(text, cx, cy + 0.5);
    };
    for (let i = 0; i < n; i++) {
      const g = pl.slots[i] || [];
      if (!g.length) continue;
      const x = x0 + (S + GAP) * i, y = i === pl.active ? y0 - 6 : y0;
      if (g.length > 1) {
        const pad = (S - 2 * ICON) / 3;
        g.forEach((m, j) => {
          const ix = x + pad + (j % 2) * (ICON + pad), iy = y + pad + Math.floor(j / 2) * (ICON + pad);
          badge(m, ix + ICON - 4, iy + ICON - 4);
        });
      } else {
        badge(g[0], x + S - 8, y + 8);
      }
    }
    ctx.restore();
  }

  // ------------------------------------------------------- damage meter
  // Each player's own client already counts `player.dmgDealt` (never shown).
  // Clients with the mod piggyback that number on the state message they send
  // the host ({k:'f'} + psm); the host relays the whole table back the same
  // way. Unknown keys are ignored by the game, so unmodded friends are fine.
  // For mates without the mod the host estimates from the hit events ('h')
  // they send it, which is why the host should be someone with the mod.
  const rows = new Map(); // uid -> { dmg, est, live }
  let runPlayer = null, runId = 0, runTime = 0, lastFrame = 0;

  const me = () => (NS.Coop.active ? NS.Coop.local : NS.Game.player) || null;
  const myDmg = () => { const p = me(); return (p && p.dmgDealt) || 0; };
  const inRun = () => !!me() && NS.Game.state !== 'ui';

  function row(uid) {
    let r = rows.get(uid);
    if (!r) rows.set(uid, (r = { dmg: 0, est: 0, live: false }));
    return r;
  }

  function wireTable() {
    const t = { [NS.Net.uid]: [Math.round(myDmg()), 1] };
    for (const [uid, r] of rows) {
      if (uid !== NS.Net.uid) t[uid] = [Math.round(r.live ? r.dmg : r.est), r.live ? 1 : 0];
    }
    return t;
  }

  function setupMeter() {
    const { Net, Coop } = NS;

    const toHost = Net.toHost;
    Net.toHost = function (m) {
      if (m && m.k === 'f') m.psm = Math.round(myDmg());
      return toHost.apply(this, arguments);
    };
    const send = Net.send;
    Net.send = function (uid, m) {
      if (m && m.k === 'f' && Coop.isHost) m.psm = wireTable();
      return send.apply(this, arguments);
    };

    Net.on((from, m) => {
      if (!m || m.k !== 'f' || !Coop.active) return;
      if (Coop.isHost) {
        const r = row(from);
        if (typeof m.psm === 'number') { r.dmg = m.psm; r.live = true; }
        if (Array.isArray(m.ev)) for (const e of m.ev) if (e && e[0] === 'h') r.est += +e[2] || 0;
      } else if (from === Net.hostUid && m.psm && typeof m.psm === 'object') {
        for (const uid in m.psm) {
          if (uid === Net.uid || !Array.isArray(m.psm[uid])) continue;
          const r = row(uid);
          r.dmg = +m.psm[uid][0] || 0;
          r.live = !!m.psm[uid][1];
        }
      }
    });

    buildPanel();
    buildMap();
    buildToasts();
    buildSummary();
    if (wasDiscarded) toast(tr('El navegador había cerrado la pestaña para ahorrar memoria'), '#ffcb3d', tr('Por eso se ha recargado. Alt + L para ver el registro'));
    waitFor(() => NS.Combat && NS.Projectiles && NS.Enemy && NS.Player && NS.EnemyMgr, setupMoveTracking);
    waitFor(() => NS.Rift && NS.Rift.update && NS.EnemyMgr, setupRiftTracking);
    waitFor(() => NS.HUD && NS.HUD.draw && NS.Camera, setupHud);
  }

  // Run clock for DPS: the game's own run time when it exposes it (stops on
  // pause and level-up screens), else our own clock while state is 'playing'.
  function tickClock() {
    const now = performance.now();
    const dt = lastFrame ? Math.min(0.25, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    const p = me();
    if (p !== runPlayer) { runPlayer = p; runId++; rows.clear(); runTime = 0; onNewRun(); }
    const t = NS.Game.st && NS.Game.st.time;
    if (typeof t === 'number') runTime = t;
    else if (p && NS.Game.state === 'playing') runTime += dt;
    if (p) { trackXp(p); checkAlerts(p); }
    checkRunEnd();
  }

  function entries() {
    const p = me();
    if (!p) return [];
    const list = [{
      name: (NS.Social && NS.Social.me && NS.Social.me.name) || tr('Tú'),
      color: p.tagColor || '#ffd23f',
      dmg: myDmg(),
      exact: true,
      me: true,
      hp: p.hp, maxHp: p.maxHp, dead: !!p.dead,
    }];
    if (NS.Coop.active) {
      for (const m of NS.Coop.mates) {
        if (!m.connected) continue;
        const r = rows.get(m.uid);
        const known = r && (r.live || NS.Coop.isHost);
        const n = (m.pl && m.pl.net) || {};
        list.push({ name: m.name, color: m.color, dmg: known ? (r.live ? r.dmg : r.est) : null, exact: !!(r && r.live), hp: n.hp, maxHp: n.maxHp, dead: !!n.dead });
      }
    }
    return list.sort((a, b) => (b.dmg ?? -1) - (a.dmg ?? -1));
  }

  // ----------------------------------------------------------------- UI
  const fmt = (n) => {
    if (n == null) return '?';
    if (n >= 1e6) return (n / 1e6).toLocaleString(locale(), { maximumFractionDigits: 2 }) + 'M';
    if (n >= 1e5) return (n / 1e3).toLocaleString(locale(), { maximumFractionDigits: 1 }) + 'k';
    return Math.round(n).toLocaleString(locale());
  };
  const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

  let hudLabel = null;
  let panel = null, body = null, fovLabel = null, timeLabel = null, infoEl = null, alertsBtn = null, buffsEl = null;
  let showBuffs = load('showBuffs', false);
  let showMoves = load('showMoves', false);
  let shown = load('shown', true);

  const CSS = `
#psmod{position:fixed;z-index:99999;width:236px;font:13px/1.25 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;
  background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;outline:2px solid #0b1838;border-radius:8px;
  box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;user-select:none;-webkit-user-select:none}
#psmod.psmod-hidden{display:none}
#psmod .ps-head{display:flex;align-items:center;gap:6px;padding:6px 8px 4px;cursor:move;font-weight:700;letter-spacing:.06em}
#psmod .ps-head b{flex:1;color:#ffd23f}
#psmod .ps-time{font-weight:600;color:#b9cbf0}
#psmod .ps-rows{padding:0 6px 4px}
#psmod .ps-row{position:relative;margin:3px 0;padding:3px 6px;border-radius:4px;background:#0b1838;overflow:hidden}
#psmod .ps-bar{position:absolute;inset:0 auto 0 0;opacity:.35}
#psmod .ps-line{position:relative;display:flex;gap:6px;align-items:baseline}
#psmod .ps-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}
#psmod .ps-dmg{font-weight:700}
#psmod .ps-sub{position:relative;display:flex;justify-content:space-between;font-size:11px;color:#b9cbf0}
#psmod .ps-empty{padding:6px;font-size:12px;color:#b9cbf0}
#psmod .ps-foot{display:flex;align-items:center;gap:6px;padding:4px 8px 7px;border-top:2px solid #0b1838}
#psmod .ps-foot span{flex:1;font-weight:700}
#psmod .ps-ver{font-size:11px;color:#b9cbf0}
#psmod button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;
  min-width:26px;height:24px;cursor:pointer;padding:0 6px}
#psmod button:hover{border-color:#ffd23f}
#psmod .ps-head button{height:20px;min-width:0;padding:0 5px;font-size:11px;letter-spacing:0}
#psmod .ps-info{padding:0 8px 4px;font-size:11.5px;color:#b9cbf0;display:grid;gap:1px}
#psmod .ps-info b{color:#fff}
#psmod .ps-row.me{cursor:pointer}
#psmod .ps-hp{position:relative;height:4px;margin-top:3px;border-radius:2px;background:#26304f;overflow:hidden}
#psmod .ps-hp i{position:absolute;inset:0 auto 0 0;background:#5fe08a}
#psmod .ps-hp.low i{background:#ffcb3d}
#psmod .ps-hp.crit i{background:#ff5f6d}
#psmod .ps-dead{color:#ff5f6d;font-weight:700}
#psmod .ps-moves{position:relative;margin-top:4px;display:grid;gap:2px;font-size:11.5px}
#psmod .ps-mv{display:flex;gap:6px}
#psmod .ps-mv span:first-child{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#psmod .ps-mv span:last-child{color:#b9cbf0;min-width:32px;text-align:right}
#psmod .ps-hint{position:relative;font-size:10.5px;color:#b9cbf0}
#psmod [hidden]{display:none!important}
#psmod .ps-buffs{padding:4px 8px 6px;border-top:2px solid #0b1838;font-size:11.5px;display:grid;gap:2px;max-height:45vh;overflow:auto}
#psmod .ps-buffs h4{margin:4px 0 1px;font-size:11px;letter-spacing:.06em;color:#ffd23f}
#psmod .ps-buffs .kv{display:flex;gap:6px}
#psmod .ps-buffs .kv span:first-child{flex:1;color:#b9cbf0}
#psmod .ps-buffs .kv b{white-space:nowrap}
`;

  function buildPanel() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    panel = document.createElement('div');
    panel.id = 'psmod';
    panel.innerHTML = tr`
      <div class="ps-head"><b>DAÑO</b><span class="ps-time">0:00</span><button class="ps-buffs-btn" title="Mejoras tuyas y del equipo (Alt + J)">Mejoras</button><button class="ps-alerts" title="Avisos con sonido (Alt + B)"></button></div>
      <div class="ps-info"></div>
      <div class="ps-rows"></div>
      <div class="ps-buffs" hidden></div>
      <div class="ps-foot">
        <span>Visión 1.0x</span>
        <button data-f="-1" title="Menos visión (Alt + -)">-</button>
        <button data-f="0" title="Visión normal (Alt + 0)">1x</button>
        <button data-f="1" title="Más visión (Alt + +)">+</button>
      </div>
      <div class="ps-foot ps-hudrow">
        <span>HUD 1.0x</span>
        <button data-h="-1" title="HUD del juego más pequeño">-</button>
        <button data-h="0" title="HUD del juego a tamaño original">1x</button>
        <button data-h="1" title="HUD del juego más grande">+</button>
      </div>
      <div class="ps-foot">
        <span>Controles</span><small class="ps-ver" title="Versión del mod"></small>
        <button data-k="1" title="Cambiar teclas y rueda del ratón (Alt + K)">Cambiar</button>
      </div>`;
    document.body.appendChild(panel);
    body = panel.querySelector('.ps-rows');
    fovLabel = panel.querySelector('.ps-foot span');
    timeLabel = panel.querySelector('.ps-time');
    infoEl = panel.querySelector('.ps-info');
    alertsBtn = panel.querySelector('.ps-alerts');
    alertsBtn.addEventListener('click', () => { setAlertSound(!alertSound); alertsBtn.blur(); });
    renderAlertsBtn();
    buffsEl = panel.querySelector('.ps-buffs');
    panel.querySelector('.ps-buffs-btn').addEventListener('click', (e) => { toggleBuffs(); e.currentTarget.blur(); });
    // Click your own row to see the damage of each of your moves.
    body.addEventListener('click', (e) => {
      if (!e.target.closest('.ps-row.me')) return;
      showMoves = !showMoves;
      save('showMoves', showMoves);
      render();
    });

    hudLabel = panel.querySelector('.ps-hudrow span');
    for (const foot of panel.querySelectorAll('.ps-foot')) {
      foot.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        if (b.dataset.f != null) { const d = +b.dataset.f; setFov(d === 0 ? 1 : fov + d * FOV_STEP); }
        if (b.dataset.h != null) { const d = +b.dataset.h; setHudScale(d === 0 ? 1 : hudScale + d * 0.1); }
        if (b.dataset.k != null) toggleKeys();
        b.blur(); // keep keyboard focus off the button so the game keeps its keys
      });
    }
    renderHud();
    panel.querySelector('.ps-ver').textContent = modVersion() ? 'v' + modVersion() : '';
    // Stop clicks reaching the game canvas underneath.
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) panel.addEventListener(ev, (e) => e.stopPropagation());

    // The game's HUD (name, HP, buffs and the co-op list) sits top-left and
    // grows with the HUD size, so the panel starts below it.
    const oldPos = load('pos', null);
    if (oldPos && oldPos.x === 12 && oldPos.y === 64) save('pos', null);
    makeDraggable(panel, panel.querySelector('.ps-head'), 'pos', () => ({ x: 12, y: Math.round(130 * hudScale) }));
    renderFov();
    const update = () => { tickClock(); render(); };
    setInterval(update, 250);
    update();
  }

  // Drag `el` by `handle`, keep it on screen and remember where it was left.
  // `def` may be a function so it can depend on the window size.
  function makeDraggable(el, handle, key, def) {
    const pos = load(key, null) || (typeof def === 'function' ? def() : def);
    const place = (x, y) => {
      el.style.left = Math.max(0, Math.min(innerWidth - el.offsetWidth, x)) + 'px';
      el.style.top = Math.max(0, Math.min(innerHeight - el.offsetHeight, y)) + 'px';
    };
    // Hidden elements have no size yet, so clamp again once they show up.
    place(pos.x, pos.y);
    const reclamp = () => { if (el.offsetWidth) place(parseFloat(el.style.left) || 0, parseFloat(el.style.top) || 0); };
    new ResizeObserver(reclamp).observe(el);
    addEventListener('resize', reclamp);

    const head = handle;
    head.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      const dx = e.clientX - el.offsetLeft, dy = e.clientY - el.offsetTop;
      head.setPointerCapture(e.pointerId);
      const move = (ev) => place(ev.clientX - dx, ev.clientY - dy);
      const up = () => {
        head.removeEventListener('pointermove', move);
        head.removeEventListener('pointerup', up);
        save(key, { x: el.offsetLeft, y: el.offsetTop });
      };
      head.addEventListener('pointermove', move);
      head.addEventListener('pointerup', up);
    });
  }

  function renderFov() {
    if (fovLabel) fovLabel.textContent = tr`Visión ${fov.toFixed(1)}x`;
  }

  function render() {
    panel.classList.toggle('psmod-hidden', !shown || !inRun());
    if (!shown || !inRun()) return;
    timeLabel.textContent = clock(runTime);
    const list = entries();
    const total = list.reduce((s, e) => s + (e.dmg || 0), 0);
    const top = Math.max(1, ...list.map((e) => e.dmg || 0));
    const secs = Math.max(1, runTime);
    infoEl.innerHTML = infoLines().map((l) => `<div>${l}</div>`).join('');
    infoEl.hidden = !infoEl.innerHTML;
    body.innerHTML = list.map((e) => {
      const pct = total > 0 && e.dmg != null ? Math.round((e.dmg / total) * 100) + '%' : '';
      const dps = e.dmg != null ? fmt(e.dmg / secs) + '/s' : tr('sin mod');
      const approx = e.dmg != null && !e.exact ? '~' : '';
      const ratio = e.maxHp > 0 ? Math.max(0, Math.min(1, e.hp / e.maxHp)) : null;
      const hp = e.dead
        ? `<div class="ps-sub"><span class="ps-dead">${e.me ? tr('Caído') : tr('Caído - ve a revivirlo')}</span></div>`
        : ratio == null ? '' : `<div class="ps-hp${ratio < 0.25 ? ' crit' : ratio < 0.5 ? ' low' : ''}" title="${Math.round(e.hp)} / ${Math.round(e.maxHp)}"><i style="width:${ratio * 100}%"></i></div>`;
      const moves = e.me ? (showMoves ? movesHtml() : tr('<div class="ps-hint">Pulsa para ver el daño por ataque</div>')) : '';
      return `<div class="ps-row${e.me ? ' me' : ''}">
        <div class="ps-bar" style="width:${((e.dmg || 0) / top) * 100}%;background:${esc(e.color)}"></div>
        <div class="ps-line"><span class="ps-name" style="color:${esc(e.color)}">${esc(e.name)}</span><span class="ps-dmg">${approx}${fmt(e.dmg)}</span></div>
        <div class="ps-sub"><span>${dps}</span><span>${pct}</span></div>
        ${hp}${moves}
      </div>`;
    }).join('') || tr('<div class="ps-empty">Sin datos todavía</div>');
    buffsEl.hidden = !showBuffs;
    if (showBuffs) buffsEl.innerHTML = buffsHtml();
  }

  function onNewRun() {
    moveDmg.clear();
    alerted.clear();
    sparkled.clear();
    mateState.clear();
    lastRift = null;
    xpHist = [];
    xpLast = null;
    runEnded = false;
  }

  // ---------------------------------------------------- next rift
  // The game keeps its rift dice private, but the rules are fixed (Rift.update):
  // from 1:15 to 28:00 of run time, with no rift open and no arena, a 30 s timer
  // runs; when it ends, if a boss is alive the roll is skipped, otherwise a rift
  // opens with 20 % x (1 + failed rolls) chance. We wrap Rift.update so our copy
  // of the timer advances with the very same dt in the very same frame, and
  // read each roll's result right after the game makes it. Only the host rolls
  // in co-op; other players run the same timer and reset it when the rift the
  // host opened arrives.
  const RIFT_EVERY = 30, RIFT_FROM = 75, RIFT_CUTOFF = 120;
  let rift = { timer: RIFT_EVERY, fails: 0, open: false };

  function riftWindowEnd() { return ((NS.Judgment && NS.Judgment.AT) || 1800) - RIFT_CUTOFF; }

  function setupRiftTracking() {
    const R = NS.Rift;
    const reset = R.reset;
    R.reset = function () { rift = { timer: RIFT_EVERY, fails: 0, open: false }; return reset.apply(this, arguments); };
    const update = R.update;
    R.update = function (dt, pl, time) {
      if (R.rift && !rift.open) { rift.fails = 0; rift.timer = RIFT_EVERY; } // a mate's host opened one
      let rolled = false;
      if (!R.rift && !R.arena && time > RIFT_FROM && time < riftWindowEnd()) {
        rift.timer -= +dt || 0;
        if (rift.timer <= 0) {
          rift.timer = RIFT_EVERY;
          rolled = !(NS.EnemyMgr.bossAlive && NS.EnemyMgr.bossAlive());
        }
      }
      const out = update.apply(this, arguments);
      if (R.rift && !rift.open) { rift.fails = 0; rift.timer = RIFT_EVERY; }
      else if (rolled && !R.rift) rift.fails = Math.min(4, rift.fails + 1);
      rift.open = !!R.rift;
      return out;
    };
  }

  function riftLine() {
    const R = NS.Rift;
    if (!R || R.rift || R.arena || R.inArena) return null;
    if (runTime >= riftWindowEnd()) return null;
    if (runTime <= RIFT_FROM) return tr`Primera grieta posible en <b>${clock(RIFT_FROM + RIFT_EVERY - runTime)}</b>`;
    if (NS.EnemyMgr.bossAlive && NS.EnemyMgr.bossAlive()) return tr('Grietas en pausa: hay un jefe vivo');
    const chance = Math.min(100, 20 * (1 + rift.fails));
    const sure = rift.timer + RIFT_EVERY * Math.max(0, 4 - rift.fails);
    const sureAt = runTime + sure < riftWindowEnd() ? tr` - segura en <b>${clock(sure)}</b>` : '';
    return tr`Grieta: tirada en <b>${clock(Math.max(0, rift.timer))}</b> (${chance} %)${chance < 100 ? sureAt : ''}`;
  }

  // ---------------------------------------------------- per-move damage
  // Enemy.hurt() doesn't say which move hit, so we track where in the frame we
  // are. The game loop runs Combat.tick (casts; melee, beams, chains and
  // auras hit right after Player.cast), Combat.resolve (projectiles and orbs)
  // and Combat.updateFields (mines, puddles, meteors, turrets). Projectiles get
  // tagged with the move that spawned them; field hits are matched by the
  // move's type colour. Burn and poison ticks are counted apart (solo only:
  // in co-op the host can't tell whose status it was).
  const moveDmg = new Map(); // move id | 'burn' | 'poison' | 'other' -> damage
  let scope = null, curMove = null, curProj = null;
  const BURN_COL = '#ff9a4d', POISON_COL = '#d47cf0';

  function credit(key, n) { moveDmg.set(key, (moveDmg.get(key) || 0) + n); }

  function byColor(color, kinds) {
    const p = me();
    const C = NS.U && NS.U.TYPE_COLOR;
    if (!p || !C) return 'other';
    const hits = p.moves.filter((m) => C[m.type] === color && (!kinds || kinds.includes(m.kind)));
    return hits.length ? hits[0].id : 'other';
  }
  const FIELD_KINDS = ['mine', 'trail', 'meteor', 'turret'];

  function setupMoveTracking() {
    const { Combat, Projectiles, Enemy, Player, EnemyMgr } = NS;
    const around = (obj, name, enter, leave) => {
      const f = obj[name];
      obj[name] = function () {
        enter.apply(this, arguments);
        try { return f.apply(this, arguments); } finally { leave(); }
      };
    };
    around(Combat, 'tick', (dt, pl) => { scope = pl && pl === me() ? 'tick' : null; curMove = null; }, () => { scope = null; curMove = null; });
    around(Combat, 'resolve', () => { scope = 'resolve'; curProj = null; }, () => { scope = null; curProj = null; });
    around(Combat, 'updateFields', () => { scope = 'fields'; }, () => { scope = null; });
    around(EnemyMgr, 'update', () => { scope = 'dot'; }, () => { scope = null; });

    const cast = Player.prototype.cast;
    Player.prototype.cast = function (m) {
      if (scope === 'tick' && this === me()) curMove = m;
      return cast.apply(this, arguments);
    };

    const spawn = Projectiles.spawn;
    Projectiles.spawn = function (o) {
      const mid = scope === 'tick' && curMove ? curMove.id : scope === 'fields' && o ? byColor(o.color, ['turret']) : null;
      if (mid && o) o.__mid = mid;
      const out = spawn.apply(this, arguments);
      if (mid && out && typeof out === 'object') out.__mid = mid;
      return out;
    };

    // While resolving, hand out a view of the projectile list that notes which
    // projectile the loop is looking at.
    const all = Projectiles.all;
    Projectiles.all = function () {
      const arr = all.apply(this, arguments);
      if (scope !== 'resolve' || !Array.isArray(arr)) return arr;
      return new Proxy(arr, {
        get(t, k) {
          if (typeof k === 'string' && /^\d+$/.test(k)) {
            const v = t[k];
            if (v && typeof v === 'object') curProj = v;
            return v;
          }
          const v = Reflect.get(t, k);
          return typeof v === 'function' ? v.bind(t) : v;
        },
      });
    };

    const hurt = Enemy.prototype.hurt;
    Enemy.prototype.hurt = function (dmg, color) {
      if (scope && !this.dead) {
        const n = Math.max(1, Math.round(+dmg || 0));
        if (scope === 'tick') credit(curMove ? curMove.id : byColor(color), n);
        else if (scope === 'resolve') {
          const pr = curProj;
          credit((pr && (pr.__mid || (pr.orb && pr.mid))) || byColor(color), n);
        } else if (scope === 'fields') credit(byColor(color, FIELD_KINDS), n);
        else if (scope === 'dot' && !NS.Coop.active) {
          if (color === BURN_COL) credit('burn', n);
          else if (color === POISON_COL) credit('poison', n);
        }
      }
      return hurt.apply(this, arguments);
    };
  }

  function moveList() {
    const p = me();
    const names = { burn: tr('Quemaduras'), poison: tr('Veneno'), other: tr('Otros') };
    if (p) for (const m of p.moves) names[m.id] = gameText(m.name);
    const total = [...moveDmg.values()].reduce((a, b) => a + b, 0);
    return [...moveDmg.entries()]
      .map(([k, v]) => ({ key: k, name: names[k] || k, dmg: v, pct: total ? v / total : 0 }))
      .sort((a, b) => b.dmg - a.dmg);
  }

  function movesHtml() {
    const list = moveList();
    if (!list.length) return tr('<div class="ps-moves"><div class="ps-hint">Aún no has hecho daño</div></div>');
    return `<div class="ps-moves">${list.map((m) => `<div class="ps-mv"><span>${esc(m.name)}</span><span>${fmt(m.dmg)}</span><span>${Math.round(m.pct * 100)}%</span></div>`).join('')}</div>`;
  }

  // ------------------------------------------------- xp pace and timers
  let xpHist = [], xpLast = null;

  function trackXp(p) {
    if (typeof p.xp !== 'number' || typeof p.level !== 'number') return;
    if (xpLast) {
      let gained = 0;
      if (p.level === xpLast.level) gained = Math.max(0, p.xp - xpLast.xp);
      else if (p.level > xpLast.level) gained = Math.max(0, xpLast.next - xpLast.xp) + p.xp;
      const tot = (xpHist.length ? xpHist[xpHist.length - 1][1] : 0) + gained;
      xpHist.push([runTime, tot]);
      while (xpHist.length > 2 && runTime - xpHist[0][0] > 30) xpHist.shift();
    }
    xpLast = { level: p.level, xp: p.xp, next: p.xpNext };
  }

  function infoLines() {
    const out = [];
    const p = me();
    if (p && typeof p.xpNext === 'number' && xpHist.length > 1) {
      const [t0, x0] = xpHist[0], [t1, x1] = xpHist[xpHist.length - 1];
      const rate = t1 > t0 ? (x1 - x0) / (t1 - t0) : 0;
      const left = Math.max(0, p.xpNext - p.xp);
      if (rate > 0) out.push(tr`Nv. <b>${p.level}</b> - subes en <b>${clock(left / rate)}</b>`);
    }
    const J = NS.Judgment;
    if (J && typeof J.AT === 'number' && !J.active && runTime < J.AT) out.push(tr`Legendarios en <b>${clock(J.AT - runTime)}</b>`);
    const r = NS.Rift && NS.Rift.rift;
    if (r && typeof r.ttl === 'number' && r.ttl > 0) out.push(tr`Grieta abierta: <b>${clock(r.ttl)}</b>`);
    const rl = riftLine();
    if (rl) out.push(rl);
    return out;
  }

  // ------------------------------------------------------------- alerts
  const alerted = new Set();
  const mateState = new Map();
  let lastRift = null;
  let alertSound = load('alertSound', true);
  let toastBox = null;

  function setAlertSound(v) { alertSound = v; save('alertSound', v); renderAlertsBtn(); }
  function renderAlertsBtn() { if (alertsBtn) alertsBtn.textContent = alertSound ? tr('Sonido: sí') : tr('Sonido: no'); }

  function buildToasts() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-toasts{position:fixed;z-index:100000;left:50%;top:72px;transform:translateX(-50%);display:grid;gap:6px;justify-items:center;pointer-events:none;
  font:14px/1.25 var(--font,'Pixelify',system-ui,sans-serif)}
#psmod-toasts div{background:#0b1838;color:#fff;border:2px solid var(--c,#f4f8ff);border-radius:8px;padding:6px 12px;box-shadow:0 3px 0 #0a1430;
  font-weight:700;max-width:min(90vw,420px);text-align:center}
#psmod-toasts small{display:block;font-weight:600;color:#b9cbf0;font-size:12px}
@media (prefers-reduced-motion:no-preference){#psmod-toasts div{animation:psmod-in .18s ease-out}}
@keyframes psmod-in{from{transform:translateY(-8px);opacity:0}to{transform:none;opacity:1}}`;
    document.head.appendChild(style);
    toastBox = document.createElement('div');
    toastBox.id = 'psmod-toasts';
    toastBox.setAttribute('role', 'status');
    document.body.appendChild(toastBox);
  }

  function toast(text, color, sub) {
    if (!toastBox) return;
    const d = document.createElement('div');
    d.style.setProperty('--c', color || '#f4f8ff');
    d.innerHTML = esc(text) + (sub ? `<small>${esc(sub)}</small>` : '');
    toastBox.appendChild(d);
    while (toastBox.children.length > 4) toastBox.firstChild.remove();
    setTimeout(() => d.remove(), 4500);
  }

  function sound(name) {
    if (!alertSound) return;
    if (name === 'sparkle') { sparkle(); return; }
    try { NS.Audio.sfx(name); } catch {}
  }

  // Shiny sound: the one of Pokémon Legends: Arceus (sounds/shiny.ogg; its
  // URL comes from keepalive.js, which can reach chrome.runtime). It replaces
  // the game's 'shiny' sfx when a shiny spawns and for shiny cards in the
  // gacha; the other uses of that sfx (invites, tickets) keep the game's
  // sound. Volume follows the game's effects volume and mute ('ps.audio').
  let sparkleEl = null, sparkleAt = 0;
  const sparkled = new Set(); // shiny enemy ids already announced

  function sparkle() {
    const t0 = performance.now();
    if (t0 - sparkleAt < 1500) return; // spawn sound and our alert, once
    sparkleAt = t0;
    let vol = 0.7;
    try { const a = JSON.parse(localStorage.getItem('ps.audio') || '{}'); if (a.muted) return; if (typeof a.sfx === 'number') vol = a.sfx; } catch {}
    if (vol <= 0) return;
    const url = document.documentElement.dataset.psmodShiny;
    if (!url) return;
    try {
      if (!sparkleEl) sparkleEl = new Audio(url);
      sparkleEl.volume = Math.min(1, vol);
      sparkleEl.currentTime = 0;
      sparkleEl.play().catch(() => {});
    } catch {}
  }

  function setupShinySound() {
    const A = NS.Audio;
    const sfx = A.sfx;
    A.sfx = function (name) {
      if (name === 'shiny') {
        if (NS.UI && NS.UI.isOpen && NS.UI.isOpen('scr-gacha')) { sparkle(); return; }
        const fresh = NS.EnemyMgr && NS.EnemyMgr.all().filter((e) => e.shiny && !e.dead && !sparkled.has(e.id));
        if (fresh && fresh.length) { for (const e of fresh) sparkled.add(e.id); sparkle(); return; }
      }
      return sfx.apply(this, arguments);
    };
  }
  waitFor(() => NS && NS.Audio && NS.Audio.sfx, setupShinySound);

  const ARROWS = ['→', '↘', '↓', '↙', '←', '↖', '↑', '↗'];
  function where(p, x, y) {
    const dx = x - p.x, dy = y - p.y;
    const tiles = Math.round(Math.hypot(dx, dy) / 32);
    const a = ARROWS[(Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8];
    return tr`${a} a ${tiles} casillas`;
  }

  function checkAlerts(p) {
    if (!inRun()) return;
    // Legendaries of the minute-30 event arrive in a pack: one notice for all.
    let legends = 0;
    for (const e of NS.EnemyMgr.all()) {
      if (e.dead || alerted.has(e.id)) continue;
      let text = null, color = '#f4f8ff', sfx = null;
      if (e.judge || e.legend) { alerted.add(e.id); legends++; continue; }
      // In the golden hour every spawn is golden and the game already shows
      // its own banner: no notice per enemy.
      if (e.golden && !e.shiny && !e.boss && e.behavior !== 'thief' && NS.Events && NS.Events.golden) { alerted.add(e.id); continue; }
      if (e.shiny) { text = tr`¡Shiny! ${e.name}`; color = '#7fe0ff'; sfx = 'sparkle'; sparkled.add(e.id); }
      else if (e.boss) { text = tr`Jefe: ${e.name}`; color = '#ff3048'; sfx = 'legend'; }
      else if (e.golden) { text = tr`Pokémon dorado: ${e.name}`; color = '#ffd23f'; sfx = 'select'; }
      else if (e.behavior === 'thief') { text = tr`¡Ladrón! ${e.name}`; color = '#ffd23f'; sfx = 'select'; }
      if (!text) continue;
      alerted.add(e.id);
      toast(text, color, where(p, e.x, e.y));
      sound(sfx);
    }
    if (legends) { toast(legends > 1 ? tr`¡${legends} legendarios!` : tr('¡Legendario!'), '#c47bff'); sound('legend'); }

    const r = NS.Rift && NS.Rift.rift;
    if (r && r !== lastRift && typeof r.x === 'number') { toast(tr('Se ha abierto una grieta'), '#c47bff', where(p, r.x, r.y)); sound('select'); }
    lastRift = r || null;

    if (NS.Coop.active) {
      for (const m of NS.Coop.mates) {
        if (!m.connected || !m.pl) continue;
        const n = m.pl.net || {};
        const st = n.dead ? 'dead' : n.maxHp > 0 && n.hp / n.maxHp < 0.3 ? 'low' : 'ok';
        const prev = mateState.get(m.uid) || 'ok';
        if (st !== prev) {
          if (st === 'dead') { toast(tr`${m.name} ha caído: ve a revivirlo`, '#ff5f6d', where(p, m.pl.x, m.pl.y)); sound('error'); }
          else if (st === 'low' && prev === 'ok') toast(tr`${m.name} tiene poca vida`, '#ffcb3d', where(p, m.pl.x, m.pl.y));
          mateState.set(m.uid, st);
        }
      }
    }
  }

  // ------------------------------------------------ run summary, history
  // When a run ends (game over, or leaving a run that lasted over a minute) we
  // save a summary in this browser and show it next to the game's own screen.
  const HISTORY_MAX = 30;
  let runEnded = false, sumEl = null, lastState = null;

  function checkRunEnd() {
    const st = NS.Game.state;
    const was = lastState;
    lastState = st;
    if (runEnded || !runPlayer) return;
    if (st === 'over' || (st === 'ui' && was && was !== 'ui' && runTime > 60)) {
      runEnded = true;
      const s = buildRunSummary(runPlayer);
      const hist = load('history', []);
      hist.unshift(s);
      save('history', hist.slice(0, HISTORY_MAX));
      if (st === 'over') showSummary(s);
    }
  }

  function buildRunSummary(p) {
    const players = entries().map((e) => ({ name: e.name, dmg: Math.round(e.dmg || 0), me: !!e.me, exact: e.exact, color: e.color }));
    const moves = moveList().slice(0, 4).map((m) => ({ name: m.name, dmg: Math.round(m.dmg), pct: m.pct }));
    return {
      at: Date.now(),
      mon: (p.mon && p.mon.name) || '?',
      coop: NS.Coop.active ? players.length : 1,
      time: Math.round(runTime),
      level: p.level || 0,
      kills: p.kills || 0,
      dmg: Math.round(p.dmgDealt || 0),
      dps: Math.round((p.dmgDealt || 0) / Math.max(1, runTime)),
      players,
      moves,
    };
  }

  function buildSummary() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-sum{position:fixed;z-index:100001;right:16px;top:64px;width:min(360px,calc(100vw - 32px));max-height:calc(100vh - 96px);overflow:auto;
  font:13px/1.3 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;
  outline:2px solid #0b1838;border-radius:8px;box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;padding:10px 12px;display:grid;gap:10px}
#psmod-sum[hidden]{display:none}
#psmod-sum h3{margin:0;font-size:16px;color:#ffd23f;letter-spacing:.04em}
#psmod-sum .top{display:flex;align-items:center;gap:8px}
#psmod-sum .top h3{flex:1}
#psmod-sum button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;height:24px;cursor:pointer;padding:0 8px}
#psmod-sum button:hover{border-color:#ffd23f}
#psmod-sum .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
#psmod-sum .grid div{background:#0b1838;border-radius:4px;padding:5px 7px}
#psmod-sum .grid small{display:block;color:#b9cbf0;font-size:11px}
#psmod-sum .grid b{font-size:15px}
#psmod-sum table{width:100%;border-collapse:collapse;font-size:12px}
#psmod-sum th,#psmod-sum td{text-align:left;padding:3px 4px;border-bottom:1px solid #2c4a8f;white-space:nowrap}
#psmod-sum th{color:#b9cbf0;font-weight:600}
#psmod-sum td.n{text-align:right;font-variant-numeric:tabular-nums}
#psmod-sum .best{color:#ffd23f}
#psmod-sum .sub{color:#b9cbf0;font-size:12px;margin:0}
#psmod-sum .star{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center;background:linear-gradient(#3a2a00,#1f1600);
  border:2px solid #ffd23f;border-radius:6px;padding:10px 12px;animation:psmod-glow 1.6s ease-in-out 4}
#psmod-sum .star i{grid-row:span 2;font-style:normal;font-size:34px;line-height:1;animation:psmod-wiggle 1.6s ease-in-out 4}
#psmod-sum .star b{font-size:16px;color:#ffd23f}
#psmod-sum .star span{color:#fff3c4}
#psmod-sum .star .acts{grid-column:1/-1;display:flex;gap:8px;align-items:center;margin-top:6px}
#psmod-sum .star a{flex:1;text-align:center;font-weight:700;font-size:15px;color:#0b1838;background:#ffd23f;border-radius:4px;
  padding:6px 10px;text-decoration:none;box-shadow:0 3px 0 #a07800}
#psmod-sum .star a:hover{filter:brightness(1.1)}
#psmod-sum .star button{background:none;border:none;color:#b9a86a;font-weight:400;text-decoration:underline}
@keyframes psmod-glow{50%{box-shadow:0 0 14px 2px rgba(255,210,63,.65)}}
@keyframes psmod-wiggle{0%,60%,100%{transform:none}70%{transform:rotate(-14deg) scale(1.15)}85%{transform:rotate(14deg) scale(1.15)}}
@media (prefers-reduced-motion:reduce){#psmod-sum .star,#psmod-sum .star i{animation:none}}`;
    document.head.appendChild(style);
    sumEl = document.createElement('div');
    sumEl.id = 'psmod-sum';
    sumEl.hidden = true;
    document.body.appendChild(sumEl);
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) sumEl.addEventListener(ev, (e) => e.stopPropagation());
    sumEl.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.act === 'close') sumEl.hidden = true;
      if (b.dataset.act === 'clear') { save('history', []); showSummary(null); }
      if (b.dataset.act === 'nostar') { save('starAsk', STAR_ASKS); b.closest('.star').remove(); }
    });
    sumEl.addEventListener('click', (e) => {
      const a = e.target.closest('.star a');
      if (a) { save('starAsk', STAR_ASKS); a.closest('.star').remove(); }
    });
  }

  // After a finished run, a small note asking for a star on GitHub. It shows
  // on the next summaries until the player clicks either button, and at
  // most STAR_ASKS times.
  const STAR_ASKS = 3;
  function starNote() {
    const n = load('starAsk', 0);
    if (n >= STAR_ASKS) return '';
    save('starAsk', n + 1);
    return tr`<div class="star"><i>⭐</i><b>¿Te está gustando el mod?</b>
      <span>Dale una estrella en GitHub: es gratis, son dos clics y ayuda a que lo conozca más gente.</span>
      <div class="acts"><a href="https://github.com/${REPO}" target="_blank" rel="noopener">⭐ Dar una estrella</a><button data-act="nostar">No, gracias</button></div></div>`;
  }

  function showSummary(s) {
    if (!sumEl) return;
    const hist = load('history', []);
    const best = hist.reduce((a, h) => (h.dps > (a ? a.dps : -1) ? h : a), null);
    const head = s ? tr`
      <div class="grid">
        <div><small>Tiempo</small><b>${clock(s.time)}</b></div>
        <div><small>Nivel</small><b>${s.level}</b></div>
        <div><small>Derrotados</small><b>${fmt(s.kills)}</b></div>
        <div><small>Daño</small><b>${fmt(s.dmg)}</b></div>
        <div><small>Daño/s</small><b>${fmt(s.dps)}</b></div>
        <div><small>Pokémon</small><b>${esc(s.mon)}</b></div>
      </div>
      ${s.players.length > 1 ? tr`<table><thead><tr><th>Jugador</th><th class="n">Daño</th><th class="n">Daño/s</th></tr></thead><tbody>${
        s.players.map((p) => `<tr><td style="color:${esc(p.color)}">${esc(p.name)}</td><td class="n">${p.exact ? '' : '~'}${fmt(p.dmg)}</td><td class="n">${fmt(p.dmg / Math.max(1, s.time))}</td></tr>`).join('')
      }</tbody></table>` : ''}
      ${s.moves.length ? tr`<table><thead><tr><th>Tus ataques</th><th class="n">Daño</th><th class="n">%</th></tr></thead><tbody>${
        s.moves.map((m) => `<tr><td>${esc(m.name)}</td><td class="n">${fmt(m.dmg)}</td><td class="n">${Math.round(m.pct * 100)}%</td></tr>`).join('')
      }</tbody></table>` : ''}` : '';
    const rowsHtml = hist.slice(0, 12).map((h) => {
      const d = new Date(h.at);
      const date = `${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      return `<tr${h === best ? tr(' class="best" title="Tu mejor daño por segundo"') : ''}><td>${date}</td><td>${esc(h.mon)}${h.coop > 1 ? ` (${h.coop})` : ''}</td><td class="n">${clock(h.time)}</td><td class="n">${h.level}</td><td class="n">${fmt(h.dps)}</td></tr>`;
    }).join('');
    sumEl.innerHTML = tr`
      <div class="top"><h3>${s ? tr('Resumen de la partida') : tr('Historial')}</h3><button data-act="close">Cerrar</button></div>
      ${s ? starNote() : ''}
      ${head}
      <h3>${s ? tr('Tus últimas partidas') : tr('Tus últimas partidas')}</h3>
      ${rowsHtml ? tr`<table><thead><tr><th>Fecha</th><th>Pokémon</th><th class="n">Tiempo</th><th class="n">Nv.</th><th class="n">Daño/s</th></tr></thead><tbody>${rowsHtml}</tbody></table>
      <p class="sub">En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas ${HISTORY_MAX} en este navegador. Alt + H abre esto cuando quieras.</p>
      <div><button data-act="clear">Borrar historial</button></div>` : tr('<p class="sub">Todavía no hay partidas guardadas. Se guardan al acabar cada partida.</p>')}`;
    sumEl.dataset.view = 'sum';
    sumEl.hidden = false;
  }

  function toggleHistory() {
    if (!sumEl) return;
    if (!sumEl.hidden) { sumEl.hidden = true; return; }
    showSummary(null);
  }

  // ----------------------------------------------------- Repertorio off
  // The "Repertorio" upgrade makes runs start with 2 moves. Upgrades.perks()
  // turns the bought upgrades into run bonuses; with this option on we hand
  // back startMoves = 1, as if it weren't bought. Nothing is refunded and it
  // can be switched back at any time.
  let noRepertorio = load('noRepertorio', false);

  function setupRepertorio() {
    const U = NS.Upgrades;
    const perks = U.perks;
    U.perks = function () {
      const out = perks.apply(this, arguments);
      if (noRepertorio && out && out.startMoves > 1) out.startMoves = 1;
      return out;
    };
    const add = () => {
      const list = document.getElementById('upg-list');
      if (!list || document.getElementById('psmod-norep')) return;
      const label = document.createElement('label');
      label.className = 'note';
      label.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700;margin:8px 0';
      label.innerHTML = tr('<input type="checkbox" id="psmod-norep" style="width:18px;height:18px;margin:0;cursor:pointer"> Empezar con un solo movimiento aunque tenga Repertorio');
      const box = label.querySelector('input');
      box.checked = noRepertorio;
      box.addEventListener('change', () => { noRepertorio = box.checked; save('noRepertorio', noRepertorio); });
      list.before(label);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
    else add();
  }

  waitFor(() => NS && NS.Upgrades && NS.Upgrades.perks, setupRepertorio);

  // --------------------------------------------------------- connection
  // In co-op the game talks over a direct WebRTC link. When that link drops,
  // Net reports the peer as 'failed'/'closed' and Coop throws the player out
  // at once, even though the host's Net retries the link 15 s later. We hold
  // those reports for a grace period and let them through only if the link
  // didn't come back. Players who leave on purpose are already gone from
  // Coop by then, so for them nothing is held.
  // Side effect: enemies that appear while the link is down stay invisible
  // (and harmless) for whoever was disconnected.
  const GRACE_MS = 30000;
  const NETLOG_MAX = 60;

  function netLog(text) {
    const log = load('netlog', []);
    log.unshift({ at: Date.now(), text });
    save('netlog', log.slice(0, NETLOG_MAX));
  }

  function peerName(uid) {
    const C = NS.Coop;
    if (C && NS.Net && uid === NS.Net.hostUid) return tr('el anfitrión');
    const m = C && C.mate && C.mate(uid);
    return (m && m.name) || 'un jugador';
  }

  function stillInGame(uid) {
    const C = NS.Coop;
    if (!C || !C.active) return false;
    if (!C.isHost) return uid === (NS.Net && NS.Net.hostUid);
    const m = C.mate && C.mate(uid);
    return !!(m && m.connected);
  }

  function patchNet(Net) {
    const onPeer = Net.onPeer;
    Net.onPeer = function (cb) { return onPeer.call(this, graceWrap(cb)); };
  }

  // The deadline counts from the first drop and only a 'direct' link ends the
  // hold early. Each retry of the host goes 'connecting' -> 'failed' again,
  // and that used to restart the wait, so a link that never came back left
  // both players frozen for good (e.g. on the level-up screen, each one
  // "waiting" for the other). Past the deadline the game gets the drop and
  // handles it as it would without the mod; an attempt already under way
  // gets up to GRACE_EXTRA_MS more to finish.
  const GRACE_EXTRA_MS = 10000;

  function graceWrap(cb) {
    const held = new Map(); // uid -> { timer, name, until }
    const release = (uid, self) => {
      const h = held.get(uid);
      if (!h) return;
      const now = NS.Net.mode(uid);
      if (now === 'direct') { clearTimeout(h.timer); held.delete(uid); return; }
      if (now === 'connecting' && Date.now() < h.until) { h.timer = setTimeout(() => release(uid, self), 1000); return; }
      held.delete(uid);
      netLog(tr`No se pudo recuperar la conexión con ${h.name} (${now}).`);
      toast(tr`No se pudo recuperar la conexión con ${h.name}`, '#ff5f6d');
      cb.call(self, uid, now === 'connecting' ? 'failed' : now);
    };
    return function (uid, mode) {
      if (mode === 'direct' && held.has(uid)) {
        clearTimeout(held.get(uid).timer);
        held.delete(uid);
        netLog(tr`Conexión con ${peerName(uid)} recuperada.`);
        toast(tr`Conexión con ${peerName(uid)} recuperada`, '#5fe08a');
        return cb.apply(this, arguments);
      }
      if (held.has(uid)) return; // retries in between: still within the same wait
      if ((mode === 'failed' || mode === 'closed') && stillInGame(uid)) {
        const name = peerName(uid);
        netLog(tr`Conexión con ${name} cortada (${mode}). Esperando a que vuelva.`);
        toast(tr`Se ha cortado la conexión con ${name}`, '#ffcb3d', tr`Reconectando… (hasta ${GRACE_MS / 1000} s)`);
        const self = this;
        held.set(uid, { name, until: Date.now() + GRACE_MS + GRACE_EXTRA_MS, timer: setTimeout(() => release(uid, self), GRACE_MS) });
        return;
      }
      return cb.apply(this, arguments);
    };
  }

  // What the browser did to the tab: these are the usual silent kicks.
  const wasDiscarded = !!document.wasDiscarded;
  if (wasDiscarded) netLog(tr('El navegador había cerrado esta pestaña para ahorrar memoria y la ha recargado.'));
  document.addEventListener('freeze', () => netLog(tr('El navegador ha congelado la pestaña (estaba en segundo plano).')));
  document.addEventListener('resume', () => netLog(tr('La pestaña ha vuelto después de estar congelada.')));
  addEventListener('offline', () => { netLog(tr('Se ha perdido la conexión a internet.')); toast(tr('Sin conexión a internet'), '#ff5f6d'); });
  addEventListener('online', () => netLog(tr('Ha vuelto la conexión a internet.')));

  function toggleNetLog() {
    if (!sumEl) return;
    if (!sumEl.hidden && sumEl.dataset.view === 'log') { sumEl.hidden = true; return; }
    const log = load('netlog', []);
    sumEl.dataset.view = 'log';
    sumEl.innerHTML = tr`
      <div class="top"><h3>Registro de conexión</h3><button data-act="close">Cerrar</button></div>
      ${log.length ? `<table><tbody>${log.slice(0, 30).map((l) => {
        const d = new Date(l.at);
        return `<tr><td>${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</td><td style="white-space:normal">${esc(l.text)}</td></tr>`;
      }).join('')}</tbody></table>` : tr('<p class="sub">No ha pasado nada raro todavía.</p>')}
      <p class="sub">Si os echa de una partida, abrid esto (Alt + L) y mirad la última línea: dice si fue la conexión entre vosotros, internet o el navegador.</p>`;
    sumEl.hidden = false;
  }

  // ------------------------------------------------------------- buffs
  // Your current multipliers, and what's shared in co-op: team XP is the
  // average of everyone's Aprendizaje divided by (1 + 0.6 per extra player),
  // and enemies get +30 % HP and +75 % spawn rate per extra player.
  function toggleBuffs() {
    showBuffs = !showBuffs;
    save('showBuffs', showBuffs);
    render();
  }

  const pctOf = (m) => { const v = Math.round(Math.abs(m - 1) * 100); return v ? `${m >= 1 ? '+' : '-'}${v} %` : '0 %'; };
  const dec = (v, d = 2) => v.toFixed(d).replace('.', locale() === 'es-ES' ? ',' : '.');
  const kv = (k, v) => `<div class="kv"><span>${k}</span><b>${v}</b></div>`;

  function buffsHtml() {
    const p = me();
    if (!p) return '';
    const out = [];
    const taken = p.statsTaken || {};
    const n = (id) => (taken[id] ? ` (${taken[id]})` : '');
    out.push(tr('<h4>TUS MEJORAS</h4>'));
    out.push(kv(tr`Daño${n('atk')}`, `×${dec(p.atkMul || 1)}`));
    out.push(kv(tr`Recarga${n('cd')}`, pctOf(p.cdMul || 1)));
    out.push(kv(tr`Velocidad${n('spd')}`, pctOf(p.spdMul || 1)));
    out.push(kv(tr`Reducción de daño${n('def')}`, `${Math.round((p.reduction || 0) * 100)} %`));
    out.push(kv(tr`Regeneración${n('rgn')}`, tr`${dec(p.regen || 0, 1)} vida/s`));
    out.push(kv(tr('Críticos (×1,5)'), `${Math.round((p.critChance || 0) * 100)} %`));
    out.push(kv(tr`Imán${n('mag')}`, pctOf((p.magnet || 78) / 78)));
    out.push(kv(tr`Experiencia${n('xp')}`, pctOf(p.xpMul || 1)));
    const B = p.buffs || {};
    const BN = { atk: tr('ataque'), spd: tr('velocidad'), def: tr('defensa'), regen: tr('regeneración') };
    for (const k of Object.keys(BN)) {
      const b = B[k];
      if (!b || !b.n) continue;
      const val = k === 'regen' ? `+${dec(b.n * b.amount, 1)}/s` : `+${Math.round(b.n * b.amount * 100)} %`;
      out.push(kv(tr`Mejora de ${BN[k]} (${b.n}×)`, `${val}${b.t > 0 ? ` - ${Math.ceil(b.t)} s` : ''}`));
    }
    if (p.item && NS.Items && NS.Items.BY[p.item]) out.push(kv(tr('Objeto'), esc(gameText(NS.Items.BY[p.item].name))));

    const C = NS.Coop;
    if (C && C.active) {
      const mates = C.mates.filter((m) => m.connected);
      const team = [{ name: tr('Tú'), xp: p.xpMul || 1, mag: (p.magnet || 78) / 78 }]
        .concat(mates.map((m) => {
          const net = (m.pl && m.pl.net) || {};
          return { name: m.name, xp: net.xpMul || 1, mag: (net.mag || 78) / 78 };
        }));
      const count = team.length;
      const avg = team.reduce((a, t) => a + t.xp, 0) / count;
      const penalty = 1 + 0.6 * (count - 1);
      out.push(tr('<h4>EQUIPO</h4>'));
      for (const t of team) out.push(kv(esc(t.name), tr`XP ${pctOf(t.xp)} - imán ${pctOf(t.mag)}`));
      out.push(kv(tr('Aprendizaje medio del equipo'), pctOf(avg)));
      out.push(kv(tr`Reparto entre ${count} jugadores`, `÷${dec(penalty, 1)}`));
      out.push(kv(tr('Experiencia que recibís'), `×${dec(avg / penalty)}`));
      out.push(kv(tr('Vida de los enemigos'), pctOf(1 + 0.3 * (count - 1))));
      out.push(kv(tr('Enemigos que salen'), pctOf(1 + 0.75 * (count - 1))));
    }
    return out.join('');
  }

  // ------------------------------------------------------------ minimap
  // Everything is read straight from the game's modules each frame: World for
  // terrain, EnemyMgr / Pickups / Rift / Events for markers, Coop for mates.
  const MAP_PX = 184;
  // World units from centre to edge. The game keeps at most 400 map chunks
  // (512 units each) in memory and throws the oldest away; reading terrain and
  // props too far out made it drop and rebuild chunks nonstop (the old 5/5
  // zoom lagged and reset chests and rocks). 2400 stays near 100 chunks.
  const RANGES = [800, 1200, 1800, 2400];
  let mapRange = load('mapRange', 1200);
  if (!RANGES.includes(mapRange)) mapRange = 1200;
  let mapShown = load('mapShown', true);
  let mapEl = null, mapCtx = null, rangeLabel = null, lastMapDraw = 0;
  let props = [], lastPropScan = 0;

  // Terrain sampling (World.kindAt) costs ~10µs per call, so samples are cached
  // per cell size and filled in a bounded number per frame. The cache is
  // dropped whenever the world changes (new run, biome, arena).
  const terrain = new Map(); // cellSize -> Map(key -> colour | null)
  let terrainSig = '';
  const SAMPLE_BUDGET = 1200;
  const LIQUID = { water: '#3f86d8', lava: '#ff6a2b', ice: '#bfe8ff', poison: '#a35ad8', swamp: '#5e8a4a' };

  const cellFor = (range) => (range <= 1200 ? 32 : 64);

  function terrainColor(x, y) {
    const k = NS.World.kindAt(x, y);
    if (k === 'wall') return '#16241c';
    if (k === 'liquid') return LIQUID[NS.World.liquidKind(x, y)] || '#4fb4ff';
    return null;
  }

  function buildMap() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-map{position:fixed;z-index:99998;width:${MAP_PX + 12}px;font:12px/1.2 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;
  background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;outline:2px solid #0b1838;border-radius:8px;
  box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;user-select:none;-webkit-user-select:none}
#psmod-map.psmod-hidden{display:none}
#psmod-map .ps-head{display:flex;align-items:center;gap:4px;padding:5px 7px 4px;cursor:move;font-weight:700;letter-spacing:.06em}
#psmod-map .ps-head b{flex:1;color:#ffd23f}
#psmod-map .ps-range{font-weight:600;color:#b9cbf0;margin-right:2px}
#psmod-map button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;
  min-width:22px;height:20px;cursor:pointer;padding:0 4px;line-height:1}
#psmod-map button:hover{border-color:#ffd23f}
#psmod-map canvas{display:block;margin:0 6px 6px;width:${MAP_PX}px;height:${MAP_PX}px;border-radius:4px;background:#41604f}`;
    document.head.appendChild(style);

    mapEl = document.createElement('div');
    mapEl.id = 'psmod-map';
    mapEl.className = 'psmod-hidden';
    mapEl.innerHTML = tr`
      <div class="ps-head"><b>MAPA</b><span class="ps-range"></span>
        <button data-z="1" title="Ver más lejos (rueda del ratón)">-</button>
        <button data-z="-1" title="Ver más cerca (rueda del ratón)">+</button>
      </div>
      <canvas></canvas>`;
    document.body.appendChild(mapEl);
    rangeLabel = mapEl.querySelector('.ps-range');
    const cv = mapEl.querySelector('canvas');
    const dpr = Math.max(1, Math.min(3, devicePixelRatio || 1));
    cv.width = cv.height = Math.round(MAP_PX * dpr);
    mapCtx = cv.getContext('2d');
    mapCtx.scale(dpr, dpr);

    const zoom = (dir) => {
      const i = Math.max(0, Math.min(RANGES.length - 1, RANGES.indexOf(mapRange) + dir));
      mapRange = RANGES[i];
      save('mapRange', mapRange);
      renderRange();
    };
    mapEl.querySelector('.ps-head').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      zoom(+b.dataset.z);
      b.blur();
    });
    cv.addEventListener('wheel', (e) => { e.preventDefault(); e.stopPropagation(); zoom(e.deltaY > 0 ? 1 : -1); }, { passive: false });
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) mapEl.addEventListener(ev, (e) => e.stopPropagation());

    makeDraggable(mapEl, mapEl.querySelector('.ps-head'), 'mapPos', () => ({ x: innerWidth - MAP_PX - 28, y: 64 }));
    renderRange();
    requestAnimationFrame(mapLoop);
  }

  function renderRange() {
    if (rangeLabel) rangeLabel.textContent = `${RANGES.indexOf(mapRange) + 1}/${RANGES.length}`;
  }

  function mapLoop(now) {
    requestAnimationFrame(mapLoop);
    const visible = mapShown && inRun();
    mapEl.classList.toggle('psmod-hidden', !visible);
    if (!visible || now - lastMapDraw < 60) return;
    lastMapDraw = now;
    try { drawMap(); } catch (err) { console.warn('[psmod] minimap', err); }
  }

  function drawMap() {
    const p = me();
    const g = mapCtx;
    const H = MAP_PX / 2;
    const s = H / mapRange;
    const cx = p.x, cy = p.y;
    const toX = (x) => H + (x - cx) * s;
    const toY = (y) => H + (y - cy) * s;
    const inside = (x, y) => Math.abs(x - cx) <= mapRange && Math.abs(y - cy) <= mapRange;
    // Project onto the map border, for markers worth chasing when off-map.
    const edge = (x, y) => {
      const dx = x - cx, dy = y - cy, m = Math.max(Math.abs(dx), Math.abs(dy)) || 1;
      const k = Math.min(1, (mapRange - 6 / s) / m);
      return [H + dx * k * s, H + dy * k * s];
    };

    g.clearRect(0, 0, MAP_PX, MAP_PX);
    g.fillStyle = '#41604f';
    g.fillRect(0, 0, MAP_PX, MAP_PX);

    // Terrain.
    const W = NS.World;
    const sig = `${runId}|${String(W.biome)}|${W.arena ? 1 : 0}`;
    if (sig !== terrainSig) { terrain.clear(); terrainSig = sig; }
    const cell = cellFor(mapRange);
    let cache = terrain.get(cell);
    if (!cache) terrain.set(cell, (cache = new Map()));
    const c0x = Math.floor((cx - mapRange) / cell), c1x = Math.floor((cx + mapRange) / cell);
    const c0y = Math.floor((cy - mapRange) / cell), c1y = Math.floor((cy + mapRange) / cell);
    const px = Math.ceil(cell * s) + 0.5;
    let budget = SAMPLE_BUDGET;
    for (let j = c0y; j <= c1y; j++) {
      for (let i = c0x; i <= c1x; i++) {
        const key = i + ',' + j;
        let col = cache.get(key);
        if (col === undefined) {
          if (budget-- <= 0) continue;
          col = terrainColor(i * cell + cell / 2, j * cell + cell / 2);
          cache.set(key, col);
        }
        if (col) { g.fillStyle = col; g.fillRect(toX(i * cell), toY(j * cell), px, px); }
      }
    }

    // What the camera currently shows.
    const C = NS.Camera;
    g.strokeStyle = '#ffffff';
    g.lineWidth = 1;
    g.strokeRect(toX(C.left()) + 0.5, toY(C.top()) + 0.5, C.w * s, C.h * s);

    const dot = (x, y, r, fill, ring) => {
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fillStyle = fill;
      g.fill();
      if (ring) { g.lineWidth = 1.5; g.strokeStyle = ring; g.stroke(); }
    };

    // Pickups worth walking to (xp gems and coins would just be noise).
    const KIND = NS.Pickups.KIND || {};
    for (const q of NS.Pickups.all()) {
      if (q.kind === 'xp' || q.kind === 'xpBig' || q.kind === 'coin' || !inside(q.x, q.y)) continue;
      const col = (KIND[q.kind] && KIND[q.kind].color) || '#ffd23f';
      const x = toX(q.x), y = toY(q.y);
      g.fillStyle = '#0b1838';
      g.fillRect(x - 3, y - 3, 6, 6);
      g.fillStyle = col;
      g.fillRect(x - 2, y - 2, 4, 4);
    }

    // Chests, big chests and altars. Scanning props is slower than the rest,
    // so the list is refreshed twice a second.
    const now = performance.now();
    if (now - lastPropScan > 500) {
      lastPropScan = now;
      props = [];
      const r = mapRange;
      for (const q of W.propsInCircle(cx, cy, r) || []) if (q.type === 'chest') props.push(q);
      for (const q of (W.specialsNear && W.specialsNear(cx, cy, r)) || []) if (q.type === 'bigchest' || q.type === 'altar') props.push(q);
    }
    for (const q of props) {
      if (q.used || q.open || q.hp <= 0 || !inside(q.x, q.y)) continue;
      const x = toX(q.x), y = toY(q.y);
      if (q.type === 'altar') {
        g.save(); g.translate(x, y); g.rotate(Math.PI / 4);
        g.fillStyle = '#7fe0ff'; g.strokeStyle = '#0b1838'; g.lineWidth = 1.5;
        g.fillRect(-3, -3, 6, 6); g.strokeRect(-3, -3, 6, 6);
        g.restore();
        continue;
      }
      const h = q.type === 'bigchest' ? 4.5 : 3;
      g.fillStyle = '#0b1838';
      g.fillRect(x - h - 1, y - h - 1, 2 * h + 2, 2 * h + 2);
      g.fillStyle = q.type === 'bigchest' ? '#ffd23f' : '#c98a3c';
      g.fillRect(x - h, y - h, 2 * h, 2 * h);
    }

    // Enemies: plain ones as small red dots, special ones bigger and pinned to
    // the border when they are out of range.
    const special = [];
    for (const e of NS.EnemyMgr.all()) {
      if (e.dead) continue;
      if (e.boss || e.legend || e.judge || e.shiny || e.golden || e.behavior === 'thief') { special.push(e); continue; }
      if (!inside(e.x, e.y)) continue;
      g.fillStyle = '#ff5f6d';
      g.fillRect(toX(e.x) - 1, toY(e.y) - 1, 2.5, 2.5);
    }
    const pulse = 5 + 3 * Math.sin(performance.now() / 160);
    for (const e of special) {
      const [x, y] = edge(e.x, e.y);
      if (e.shiny || e.golden) {
        g.beginPath();
        g.arc(x, y, pulse + 3, 0, Math.PI * 2);
        g.lineWidth = 1.5;
        g.strokeStyle = e.shiny ? '#7fe0ff' : '#ffd23f';
        g.stroke();
      }
      if (e.boss || e.legend || e.judge) dot(x, y, 5, e.legend || e.judge ? '#c47bff' : '#ff3048', '#ffffff');
      else if (e.shiny) dot(x, y, 4, '#7fe0ff', '#ffffff');
      else dot(x, y, 3.5, '#ffd23f', '#0b1838');
    }

    // Rift portal and map events (golden thief and similar).
    const rift = NS.Rift.rift;
    if (rift && typeof rift.x === 'number') {
      const [x, y] = edge(rift.x, rift.y);
      g.lineWidth = 2.5;
      g.strokeStyle = '#c47bff';
      g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.stroke();
    }
    const ev = NS.Events.current;
    if (ev && typeof ev.x === 'number') {
      const [x, y] = edge(ev.x, ev.y);
      g.save(); g.translate(x, y); g.rotate(Math.PI / 4);
      g.fillStyle = '#ffd23f'; g.strokeStyle = '#0b1838'; g.lineWidth = 1.5;
      g.fillRect(-4, -4, 8, 8); g.strokeRect(-4, -4, 8, 8);
      g.restore();
    }

    // Mates, then me on top as an arrow pointing where I'm walking.
    if (NS.Coop.active) {
      for (const m of NS.Coop.players()) {
        if (m === p) continue;
        const [x, y] = edge(m.x, m.y);
        const down = m.dead || (m.net && m.net.dead);
        if (down) {
          g.beginPath();
          g.arc(x, y, pulse + 4, 0, Math.PI * 2);
          g.lineWidth = 2;
          g.strokeStyle = '#ff5f6d';
          g.stroke();
        }
        dot(x, y, 4.5, down ? '#5b6b88' : m.tagColor || '#5fc8ff', '#0b1838');
      }
    }
    const a = typeof p.moveAngle === 'number' ? p.moveAngle : -Math.PI / 2;
    g.save();
    g.translate(H, H);
    g.rotate(a);
    g.beginPath();
    g.moveTo(7, 0); g.lineTo(-5, -5); g.lineTo(-2, 0); g.lineTo(-5, 5); g.closePath();
    g.fillStyle = '#ffffff';
    g.fill();
    g.lineWidth = 1.5;
    g.strokeStyle = p.tagColor || '#ffd23f';
    g.stroke();
    g.restore();
  }

  // ------------------------------------------------------------ gacha
  // Skip: GachaUI awaits Slots.play(canvas, results) before showing the cards;
  // the pull itself is already rolled and saved by then, so resolving early
  // only cuts the slot-machine show. Slots.stop() halts its animation; the
  // abandoned play() then rejects on its own, which we swallow.
  //
  // Pull all: we trigger the game's own x1 pull (so it saves, checks
  // achievements and shows the cards as usual) and, for that one call, make
  // Gacha.pull spend every ticket instead: x10 tickets first, then normal
  // tickets in tens (keeping the "x10 guarantees an epic" rule), then singles.
  let skipGacha = load('skipGacha', false);
  let pullAllArmed = false, forceSkip = false, revealBudget = null;

  const pullsAvailable = () => {
    const t = (NS.DB && NS.DB.save && NS.DB.save.tickets) || {};
    return (t.t1 || 0) + 10 * (t.t10 || 0);
  };

  function setupGacha() {
    const { Slots, Gacha, Audio } = NS;

    const pull = Gacha.pull;
    Gacha.pull = function (save, n, gen, kind) {
      if (!pullAllArmed) return pull.apply(this, arguments);
      pullAllArmed = false;
      const t = save.tickets || {};
      const out = [];
      const take = (count, k) => { const r = pull.call(this, save, count, gen, k); if (r) out.push(...r); return !!r; };
      while ((t.t10 || 0) >= 1 && take(10, 't10'));
      while ((t.t1 || 0) >= 10 && take(10, 't1'));
      while ((t.t1 || 0) >= 1 && take(1, 't1'));
      return out.length ? out : null;
    };

    // The game plays a 'reveal' sound per card; with dozens of cards shown at
    // once that is a wall of noise, so only the first one plays.
    const sfx = Audio.sfx;
    Audio.sfx = function (name) {
      if (name === 'reveal' && revealBudget !== null && revealBudget-- <= 0) return;
      return sfx.apply(this, arguments);
    };

    const play = Slots.play;
    Slots.play = function (canvas, results) {
      if (skipGacha || forceSkip) { forceSkip = false; return Promise.resolve(); }
      return new Promise((resolve) => {
        let done = false;
        const btn = skipButton(canvas, () => { Slots.stop(); finish(); });
        function finish() {
          if (done) return;
          done = true;
          btn.remove();
          resolve();
        }
        let run;
        try { run = play.call(this, canvas, results); } catch { run = Promise.resolve(); }
        Promise.resolve(run).then(finish, finish);
      });
    };

    const addToggle = () => {
      const anchor = document.getElementById('gacha-pity');
      if (!anchor || document.getElementById('psmod-skip')) return;
      const label = document.createElement('label');
      label.className = 'note';
      label.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700';
      label.innerHTML = tr('<input type="checkbox" id="psmod-skip" style="width:18px;height:18px;margin:0;cursor:pointer"> Saltar siempre la animación de la tragaperras');
      const box = label.querySelector('input');
      box.checked = skipGacha;
      box.addEventListener('change', () => { skipGacha = box.checked; save('skipGacha', skipGacha); });
      anchor.after(label);

      const one = document.getElementById('pull-1');
      if (!one || !one.parentElement) return;
      const all = document.createElement('button');
      all.id = 'psmod-pull-all';
      all.className = 'btn grow';
      all.dataset.sfx = 'none';
      one.parentElement.appendChild(all);
      const refresh = () => {
        const n = pullsAvailable();
        all.textContent = tr`Tirar todo · ${n}`;
        all.disabled = n <= 0;
      };
      all.addEventListener('click', () => {
        if (pullsAvailable() <= 0 || typeof one.onclick !== 'function') return;
        pullAllArmed = true;
        forceSkip = true;
        revealBudget = 1;
        // Called directly so it works even when the x1 button is disabled
        // (only x10 tickets left).
        one.onclick();
        // The game pulls and starts Slots.play synchronously inside that call,
        // so anything still armed here means it bailed out early.
        pullAllArmed = false;
        forceSkip = false;
        setTimeout(() => { revealBudget = null; }, 4000);
        all.blur();
      });
      setInterval(() => { if (all.isConnected) refresh(); }, 500);
      refresh();
      addRegions(label);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addToggle);
    else addToggle();
  }

  // What's missing in each banner: owned / total per region, how many are
  // left, pulls until the guaranteed legendary, and the missing names.
  function addRegions(after) {
    const { Gacha, DEX, DB, SPRITE_META } = NS;
    if (!Gacha || !Gacha.BANNERS || !DEX) return;
    const style = document.createElement('style');
    style.textContent = `
#psmod-regions{margin-top:6px}
#psmod-regions summary{cursor:pointer;font-weight:700}
#psmod-regions table{width:100%;border-collapse:collapse;margin-top:6px;font-size:13px}
#psmod-regions th,#psmod-regions td{text-align:left;padding:4px 6px;border-bottom:1px solid rgba(255,255,255,.15)}
#psmod-regions td.n,#psmod-regions th.n{text-align:right;font-variant-numeric:tabular-nums}
#psmod-regions tr.most td{color:#ffd23f}
#psmod-regions button{font:inherit;font-size:12px;font-weight:700;color:inherit;background:none;border:1px solid currentColor;border-radius:4px;padding:1px 6px;cursor:pointer}
#psmod-regions .miss{font-size:12.5px;line-height:1.5;padding:4px 6px 8px}`;
    document.head.appendChild(style);
    const box = document.createElement('details');
    box.id = 'psmod-regions';
    box.className = 'note';
    box.open = load('regionsOpen', false);
    box.addEventListener('toggle', () => save('regionsOpen', box.open));
    after.after(box);
    let openGen = null, lastSig = '';
    box.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-gen]');
      if (!b) return;
      e.preventDefault();
      openGen = openGen === +b.dataset.gen ? null : +b.dataset.gen;
      lastSig = '';
      draw();
    });
    function draw() {
      const sv = DB && DB.save;
      if (!sv || !box.isConnected) return;
      const owned = sv.owned || {}, pity = sv.pity || {};
      const PITY = Gacha.PITY_5 || 70;
      const rows = Gacha.BANNERS.map((b) => {
        const pool = DEX.filter((p) => p.gen === b.gen && (!SPRITE_META || SPRITE_META[p.dex]));
        const missing = pool.filter((p) => !owned[p.dex]);
        return { gen: b.gen, name: gameText(b.name), total: pool.length, have: pool.length - missing.length, missing, left: PITY - (pity[b.gen] || 0) };
      });
      const sig = JSON.stringify(rows.map((r) => [r.have, r.left])) + openGen + box.open;
      if (sig === lastSig) return;
      lastSig = sig;
      const most = rows.reduce((a, r) => (r.missing.length > a.missing.length ? r : a), rows[0]);
      const totalMissing = rows.reduce((n, r) => n + r.missing.length, 0);
      box.innerHTML = tr`<summary>Lo que te falta por región (${totalMissing})</summary>
        <table><thead><tr><th>Región</th><th class="n">Tienes</th><th class="n">Faltan</th><th class="n">Legendaria en</th><th></th></tr></thead><tbody>${
          rows.map((r) => tr`<tr${r === most && r.missing.length ? tr(' class="most" title="El banner donde más te falta"') : ''}>
            <td>${esc(r.name)}</td><td class="n">${r.have}/${r.total}</td><td class="n">${r.missing.length}</td>
            <td class="n">${r.left} tiradas</td>
            <td>${r.missing.length ? `<button type="button" data-gen="${r.gen}">${openGen === r.gen ? tr('Ocultar') : tr('Ver')}</button>` : tr('Completa')}</td></tr>${
            openGen === r.gen ? `<tr><td colspan="5" class="miss">${r.missing.map((p) => `#${p.dex} ${esc(p.name)}`).join(' - ')}</td></tr>` : ''}`).join('')
        }</tbody></table>`;
    }
    setInterval(draw, 1000);
    draw();
  }

  function skipButton(canvas, onSkip) {
    const b = document.createElement('button');
    b.className = 'btn small';
    b.textContent = tr('Saltar animación');
    b.style.cssText = 'display:block;margin:10px auto 0';
    b.addEventListener('click', (e) => { e.stopPropagation(); onSkip(); });
    canvas.after(b);
    return b;
  }

  waitFor(() => NS && NS.Slots && NS.Gacha && NS.Audio && NS.DB, setupGacha);

  // ---------------------------------------------------- PokéPuzzles card
  // The game's pill shape (coins, tickets) at the start of the top bar, in
  // PokéPuzzles' own look: its pixel Poké Ball icon and its wordmark (Archivo
  // 700, "Poké" in ink and "Puzzles" in red, on the site's midnight colours).
  const PP_SITE = 'https://pokepuzzles.net';
  const PP_URL = PP_SITE + '/?utm_source=pokesurvivor-mod&utm_medium=topbar';

  function addPuzzlesCard() {
    const bar = document.getElementById('topbar');
    if (!bar || document.getElementById('psmod-pp')) return;
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Archivo:wght@700&display=swap';
    document.head.appendChild(font);
    const style = document.createElement('style');
    style.textContent = `
#psmod-pp{text-decoration:none;cursor:pointer;background:rgba(9,11,16,.92);text-shadow:none;
  font:700 15px/1 'Archivo',system-ui,sans-serif;letter-spacing:-.02em;color:#F2EBDA;white-space:nowrap}
#psmod-pp img{width:20px;height:20px;image-rendering:pixelated;flex:none}
#psmod-pp b{color:#ff4444;font-weight:700}
#psmod-pp:hover,#psmod-pp:focus-visible{border-color:#ff4444;background:#1C2130}
@media (max-width:760px){#psmod-pp{font-size:13px}#psmod-pp img{width:16px;height:16px}}`;
    document.head.appendChild(style);
    const a = document.createElement('a');
    a.id = 'psmod-pp';
    a.className = 'pill';
    a.href = PP_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = tr('Puzles diarios de Pokémon, del autor de este mod');
    a.innerHTML = `<img src="${PP_SITE}/icon-192.png" alt=""><span>Poké<b>Puzzles</b></span>`;
    bar.prepend(a);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addPuzzlesCard);
  else addPuzzlesCard();

  // ------------------------------------------------------- new version
  // keepalive.js (isolated world) writes the manifest version on <html>.
  // Every 6 h at most we ask GitHub for the latest release and, if it is
  // newer, put a pill in the top bar that links to it. If the request
  // fails nothing is shown: the mod never depends on it.
  const REPO = 'aparmor2/pokesurvivor-mod';
  const modVersion = () => document.documentElement.dataset.psmodVersion || '';
  const newer = (a, b) => {
    const x = a.split('.').map(Number), y = b.split('.').map(Number);
    for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0);
    return false;
  };

  async function checkUpdate() {
    const mine = modVersion();
    if (!mine) return;
    let info = load('update', null);
    if (!info || Date.now() - info.at > 6 * 3600e3) {
      try {
        const r = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
        if (!r.ok) return;
        const j = await r.json();
        info = { at: Date.now(), tag: String(j.tag_name || '').replace(/^v/, ''), url: j.html_url };
        save('update', info);
      } catch { return; }
    }
    if (!info.tag || !newer(info.tag, mine)) return;
    const bar = document.getElementById('topbar');
    if (!bar || document.getElementById('psmod-upd')) return;
    const style = document.createElement('style');
    style.textContent = `
#psmod-upd{text-decoration:none;cursor:pointer;color:#0b1838;background:#ffd23f;text-shadow:none;white-space:nowrap}
#psmod-upd:hover,#psmod-upd:focus-visible{filter:brightness(1.08)}`;
    document.head.appendChild(style);
    const a = document.createElement('a');
    a.id = 'psmod-upd';
    a.className = 'pill';
    a.href = info.url || `https://github.com/${REPO}/releases/latest`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = tr`Tienes la ${mine}. Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.`;
    a.textContent = tr`Mod ${info.tag} disponible`;
    bar.prepend(a);
  }

  setTimeout(checkUpdate, 3000);

  // --------------------------------------- Pokédex: Nacional, Favoritos
  // The Pokémon screen shows one region at a time: MenuUI rebuilds the region
  // tabs (#dex-gens) and the grid (#dex-grid) for the chosen one, with the
  // filters applied, and keeps the choice private. For "Nacional" we click
  // through every region tab ourselves, keep each grid's cells (with their
  // own click handlers, which only touch #dex-grid and the detail panel), go
  // back to the region that was chosen and show all the cells together.
  // "Favoritos" does the same and keeps only the starred ones. Whenever the
  // game redraws the screen (a filter, a new partner) we do it again; picking
  // a region tab goes back to the game's own view.
  let dexView = load('dexView', load('dexNational', false) ? 'nat' : ''); // '' | 'nat' | 'fav'
  const favs = new Set(load('favs', []));

  function setupDex() {
    const gens = document.getElementById('dex-gens'), grid = document.getElementById('dex-grid');
    if (!gens || !grid) return;
    let busy = false;
    const OURS = ['psmod-nat', 'psmod-fav'];
    const gameTabs = () => [...gens.querySelectorAll('.gen-tab:not(#psmod-nat):not(#psmod-fav)')];
    const setView = (v) => { dexView = v; save('dexView', v); };

    const style = document.createElement('style');
    style.textContent = `
#dex-grid .psmod-star{position:absolute;bottom:2px;right:4px;font-size:15px;line-height:1;padding:2px;
  color:rgba(244,248,255,.45);text-shadow:0 0 3px rgba(0,0,0,.8);cursor:pointer;transition:color .1s,transform .1s}
#dex-grid .cell:hover .psmod-star{color:rgba(244,248,255,.8)}
#dex-grid .psmod-star.on{color:#ffd23f}
#dex-grid .psmod-star:hover{transform:scale(1.25)}
#dex-grid .psmod-empty{grid-column:1/-1;color:var(--muted);font-size:14px;padding:16px 4px;text-align:center}`;
    document.head.appendChild(style);

    function makeTab(id, view) {
      let tab = document.getElementById(id);
      if (!tab) {
        tab = document.createElement('button');
        tab.id = id;
        tab.className = 'gen-tab';
        tab.addEventListener('click', () => { setView(view); redraw(); });
      }
      return tab;
    }

    function addTabs() {
      const nat = makeTab('psmod-nat', 'nat'), fav = makeTab('psmod-fav', 'fav');
      if (gens.children[0] !== nat || gens.children[1] !== fav) gens.prepend(nat, fav);
      const sv = (NS && NS.DB && NS.DB.save) || {};
      const owned = sv.owned || {};
      const all = (NS && NS.DEX) || [];
      nat.innerHTML = tr`<b>Nacional</b><small>${all.filter((p) => owned[p.dex]).length}/${all.length}</small>`;
      fav.innerHTML = tr`<b>★ Favoritos</b><small>${favs.size}</small>`;
      nat.classList.toggle('on', dexView === 'nat');
      fav.classList.toggle('on', dexView === 'fav');
    }

    const cellDex = (c) => parseInt((c.querySelector('.no') || {}).textContent, 10);

    // A star on every Pokémon you own; clicking it doesn't pick the cell.
    function addStars(cells) {
      for (const c of cells) {
        if (c.classList.contains('locked') || c.querySelector('.psmod-star')) continue;
        const dex = cellDex(c);
        if (!dex) continue;
        const s = document.createElement('span');
        s.className = 'psmod-star' + (favs.has(dex) ? ' on' : '');
        s.textContent = '★';
        s.title = favs.has(dex) ? tr('Quitar de favoritos') : tr('Añadir a favoritos');
        s.addEventListener('click', (e) => {
          e.stopPropagation();
          if (favs.has(dex)) favs.delete(dex); else favs.add(dex);
          save('favs', [...favs]);
          s.classList.toggle('on', favs.has(dex));
          s.title = favs.has(dex) ? tr('Quitar de favoritos') : tr('Añadir a favoritos');
          busy = true;
          try { addTabs(); } finally { obs.takeRecords(); busy = false; }
        });
        c.appendChild(s);
      }
    }

    function redraw() {
      if (busy) return;
      busy = true;
      try {
        addTabs();
        if (dexView) {
          const tabs = gameTabs();
          const orig = Math.max(0, tabs.findIndex((t) => t.classList.contains('on')));
          let cells = [];
          for (let i = 0; i < tabs.length; i++) {
            const t = gameTabs()[i]; // the game rebuilds the tabs on every click
            if (!t) break;
            t.click();
            cells.push(...grid.querySelectorAll('.cell'));
          }
          const back = gameTabs()[orig];
          if (back) back.click();
          if (dexView === 'fav') {
            cells = cells.filter((c) => favs.has(cellDex(c)) && !c.classList.contains('locked'));
            if (cells.length) grid.replaceChildren(...cells);
            else {
              const p = document.createElement('div');
              p.className = 'psmod-empty';
              p.textContent = favs.size
                ? tr('Ninguno de tus favoritos pasa los filtros.')
                : tr('Aún no tienes favoritos. Pasa el ratón por un Pokémon y pulsa la ★ de su esquina.');
              grid.replaceChildren(p);
            }
          } else if (cells.length) grid.replaceChildren(...cells);
          for (const t of gameTabs()) t.classList.remove('on');
          addTabs();
        }
        addStars(grid.querySelectorAll('.cell'));
      } finally {
        obs.takeRecords();
        busy = false;
      }
    }

    // Leave our views when a region tab is picked (before the game redraws).
    gens.addEventListener('click', (e) => {
      if (busy) return;
      const t = e.target.closest('.gen-tab');
      if (t && !OURS.includes(t.id) && dexView) setView('');
    }, true);
    const obs = new MutationObserver(() => { if (!busy) redraw(); });
    obs.observe(gens, { childList: true });
    // In case the game redraws only the grid, put the stars back.
    new MutationObserver(() => { if (!busy) addStars(grid.querySelectorAll('.cell')); }).observe(grid, { childList: true });
    if (gens.children.length) redraw();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupDex);
  else setupDex();

  // ----------------------------------------------------------- controls
  // The game reads keys by e.code ('keyw', 'digit1'...) from window keydown /
  // keyup listeners and checks Input.tap() once per frame. We sit in front of
  // them (capture phase): the key chosen for an action is turned into the key
  // the game expects, and the game's own key for an action that was moved
  // elsewhere is silenced. Arrows, Tab, the numpad and Esc keep working as in
  // the game. The wheel and the middle / side mouse buttons over the game can
  // be bound too: they press and release the game's key.
  const ACTIONS = [
    ['up', tr('Arriba'), 'KeyW'],
    ['down', tr('Abajo'), 'KeyS'],
    ['left', tr('Izquierda'), 'KeyA'],
    ['right', tr('Derecha'), 'KeyD'],
    ['prev', tr('Ataque anterior'), 'KeyQ', 'WheelUp'],
    ['next', tr('Ataque siguiente'), 'KeyE', 'WheelDown'],
    ['slot1', tr('Ataque 1 / mejora 1'), 'Digit1'],
    ['slot2', tr('Ataque 2 / mejora 2'), 'Digit2'],
    ['slot3', tr('Ataque 3 / mejora 3'), 'Digit3'],
    ['slot4', tr('Ataque 4'), 'Digit4'],
    ['reroll', tr('Cambiar mejoras'), 'KeyR'],
    ['pause', tr('Pausa'), 'KeyP'],
  ];
  const defBinds = () => Object.fromEntries(ACTIONS.map(([id, , a, b]) => [id, [a, b || null]]));
  let binds = defBinds();
  {
    const saved = load('keys', null);
    if (saved) for (const id in binds) if (Array.isArray(saved[id])) binds[id] = [saved[id][0] || null, saved[id][1] || null];
  }
  let codeMap = new Map(); // physical code -> game code
  let muted = new Set(); // game keys whose action now lives elsewhere

  function rebuildBinds() {
    codeMap = new Map();
    for (const [id, , game] of ACTIONS) for (const c of binds[id]) if (c) codeMap.set(c, game);
    muted = new Set(ACTIONS.map((a) => a[2]).filter((c) => !codeMap.has(c)));
  }
  rebuildBinds();

  function setBind(id, slot, code) {
    const old = binds[id][slot];
    // A key does one thing: whoever had it gets this slot's old key.
    for (const [other] of ACTIONS) {
      const b = binds[other];
      for (let i = 0; i < 2; i++) if (code && b[i] === code && !(other === id && i === slot)) b[i] = other === id ? null : old;
    }
    binds[id][slot] = code;
    save('keys', binds);
    rebuildBinds();
  }

  const KEY_NAMES = {
    WheelUp: tr('Rueda arriba'), WheelDown: tr('Rueda abajo'), Mouse1: tr('Botón central'), Mouse3: tr('Lateral atrás'), Mouse4: tr('Lateral adelante'),
    Space: tr('Espacio'), Enter: tr('Intro'), Backquote: 'º', Minus: "'", Equal: '¡', BracketLeft: '`', BracketRight: '+', Semicolon: 'Ñ',
    Quote: '´', Backslash: 'Ç', IntlBackslash: '<', Comma: ',', Period: '.', Slash: '-', CapsLock: tr('Bloq Mayús'),
    ShiftLeft: tr('Mayús'), ShiftRight: tr('Mayús der.'), ControlLeft: 'Ctrl', ControlRight: tr('Ctrl der.'), AltRight: 'Alt Gr',
    ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
  };
  function keyName(c) {
    if (!c) return '—';
    if (KEY_NAMES[c]) return KEY_NAMES[c];
    let m;
    if ((m = /^Key(.)$/.exec(c))) return m[1];
    if ((m = /^Digit(.)$/.exec(c))) return m[1];
    if ((m = /^Numpad(.+)$/.exec(c))) return 'Num ' + m[1];
    return c;
  }

  const typing = (t) => !!(t && t.closest && t.closest('input, textarea, select, [contenteditable]'));
  const onMod = (t) => !!(t && t.closest && t.closest('[id^="psmod"]'));
  const emit = (target, type, code) => (target || document).dispatchEvent(new KeyboardEvent(type, { code, bubbles: true, cancelable: true }));
  const tapKey = (code) => { emit(document, 'keydown', code); emit(document, 'keyup', code); };

  let listening = null; // [action, slot] waiting for a key
  const isListening = () => listening && sumEl && !sumEl.hidden && sumEl.dataset.view === 'keys';
  function captured(code) {
    const [id, slot] = listening;
    listening = null;
    if (code !== undefined) setBind(id, slot, code);
    renderKeys();
  }

  function onKey(e) {
    if (!e.isTrusted) return;
    if (isListening()) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (e.type !== 'keydown' || e.repeat) return;
      if (e.code === 'Escape') captured();
      else if (e.code === 'Backspace' || e.code === 'Delete') captured(null);
      else if (!e.altKey && !e.ctrlKey && !e.metaKey && e.code) captured(e.code);
      return;
    }
    if (e.altKey || e.ctrlKey || e.metaKey || typing(e.target)) return;
    const game = codeMap.get(e.code);
    if (game === e.code) return;
    if (game || muted.has(e.code)) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (game) emit(e.target, e.type, game);
    }
  }
  addEventListener('keydown', onKey, true);
  addEventListener('keyup', onKey, true);

  const MOUSE_BTNS = [1, 3, 4];
  function onMouse(e) {
    if (!e.isTrusted) return;
    if (isListening() && e.type === 'mousedown') {
      if (MOUSE_BTNS.includes(e.button)) { e.preventDefault(); e.stopImmediatePropagation(); captured('Mouse' + e.button); }
      else if (!e.target.closest('[data-bind]')) {
        // Clicked elsewhere: cancel. No re-render, or the button being
        // clicked (Cerrar, Restablecer) would vanish before its click.
        const b = sumEl.querySelector(`[data-bind="${listening[0]}:${listening[1]}"]`);
        if (b) { b.textContent = keyName(binds[listening[0]][listening[1]]); b.style.borderColor = b.style.color = ''; }
        listening = null;
      }
      return;
    }
    const game = MOUSE_BTNS.includes(e.button) && codeMap.get('Mouse' + e.button);
    if (!game) return;
    // Also keeps the side buttons from going back / forward in history.
    e.preventDefault();
    if (e.type === 'auxclick' || onMod(e.target) || typing(e.target)) return;
    e.stopImmediatePropagation(); // the game would take it as holding the mouse
    emit(document, e.type === 'mousedown' ? 'keydown' : 'keyup', game);
  }
  for (const ev of ['mousedown', 'mouseup', 'auxclick']) addEventListener(ev, onMouse, true);

  // One wheel notch is ~100 px; trackpads send many small deltas, so add
  // them up and step at most every 90 ms.
  let wheelAcc = 0, wheelAt = 0, wheelStep = 0;
  addEventListener('wheel', (e) => {
    if (!e.isTrusted || !e.deltaY) return;
    if (isListening()) { e.preventDefault(); e.stopImmediatePropagation(); captured(e.deltaY < 0 ? 'WheelUp' : 'WheelDown'); return; }
    if (!e.target || e.target.tagName !== 'CANVAS' || onMod(e.target)) return;
    if (!codeMap.has('WheelUp') && !codeMap.has('WheelDown')) return;
    e.preventDefault();
    const now = performance.now();
    if (now - wheelAt > 250) wheelAcc = 0;
    wheelAt = now;
    wheelAcc += e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
    if (Math.abs(wheelAcc) < 50 || now - wheelStep < 90) return;
    const game = codeMap.get(wheelAcc < 0 ? 'WheelUp' : 'WheelDown');
    wheelAcc = 0;
    wheelStep = now;
    if (game) tapKey(game);
  }, { capture: true, passive: false });

  let keysWired = false;
  function toggleKeys() {
    if (!sumEl) return;
    if (!sumEl.hidden && sumEl.dataset.view === 'keys') { sumEl.hidden = true; listening = null; return; }
    if (!keysWired) {
      keysWired = true;
      sumEl.addEventListener('click', (e) => {
        if (sumEl.dataset.view !== 'keys') return;
        const b = e.target.closest('button');
        if (!b) return;
        b.blur();
        if (b.dataset.bind) { const [id, slot] = b.dataset.bind.split(':'); listening = [id, +slot]; renderKeys(); }
        if (b.dataset.act === 'keys-reset') { binds = defBinds(); save('keys', binds); rebuildBinds(); listening = null; renderKeys(); }
      });
    }
    listening = null;
    sumEl.dataset.view = 'keys';
    renderKeys();
    sumEl.hidden = false;
  }

  function renderKeys() {
    if (!sumEl || sumEl.dataset.view !== 'keys') return;
    const btn = (id, i) => {
      const on = listening && listening[0] === id && listening[1] === i;
      return `<button data-bind="${id}:${i}" style="min-width:96px${on ? ';border-color:#ffd23f;color:#ffd23f' : ''}">${on ? tr('Pulsa…') : esc(keyName(binds[id][i]))}</button>`;
    };
    sumEl.innerHTML = tr`
      <div class="top"><h3>Controles</h3><button data-act="close">Cerrar</button></div>
      <table><thead><tr><th>Acción</th><th>Tecla</th><th>Otra</th></tr></thead><tbody>${
        ACTIONS.map(([id, label]) => `<tr><td>${esc(label)}</td><td>${btn(id, 0)}</td><td>${btn(id, 1)}</td></tr>`).join('')
      }</tbody></table>
      <p class="sub">Pulsa un botón y luego la tecla, la rueda del ratón (arriba o abajo) o un botón central o lateral del ratón. Esc cancela, Retroceso deja el hueco vacío. La rueda solo cuenta encima del juego, no de los paneles.</p>
      <p class="sub">Las flechas, Tab, el teclado numérico y Esc siguen funcionando como en el juego. Alt + K abre esto.</p>
      <div><button data-act="keys-reset">Restablecer</button></div>`;
  }

  // ------------------------------------------------------------ hotkeys
  addEventListener('keydown', (e) => {
    if (!e.altKey || e.ctrlKey || e.metaKey) return;
    let hit = true;
    switch (e.code) {
      case 'Equal': case 'NumpadAdd': case 'BracketRight': setFov(fov + FOV_STEP); break;
      case 'Minus': case 'NumpadSubtract': case 'Slash': setFov(fov - FOV_STEP); break;
      case 'Digit0': case 'Numpad0': setFov(1); break;
      case 'KeyM': shown = !shown; save('shown', shown); if (panel) render(); break;
      case 'KeyN': mapShown = !mapShown; save('mapShown', mapShown); break;
      case 'KeyH': toggleHistory(); break;
      case 'KeyJ': toggleBuffs(); break;
      case 'KeyL': toggleNetLog(); break;
      case 'KeyK': toggleKeys(); break;
      case 'KeyB': setAlertSound(!alertSound); toast(alertSound ? tr('Avisos con sonido') : tr('Avisos sin sonido')); break;
      default: hit = false;
    }
    if (hit) { e.preventDefault(); e.stopPropagation(); }
  }, true);
})();
