// Runs in the extension's isolated world (the page world can't reach
// chrome.runtime) and asks the background worker to protect this tab.
try { chrome.runtime.sendMessage({ psmod: 'nodiscard' }).catch(() => {}); } catch {}
// Both worlds share the DOM: hand the mod's version to inject.js.
try { document.documentElement.dataset.psmodVersion = chrome.runtime.getManifest().version; } catch {}
// The shiny sound lives in the extension: inject.js plays it from this URL.
try { document.documentElement.dataset.psmodShiny = chrome.runtime.getURL('sounds/shiny.ogg'); } catch {}
