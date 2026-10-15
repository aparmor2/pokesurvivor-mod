// Runs in the extension's isolated world (the page world can't reach
// chrome.runtime) and asks the background worker to protect this tab.
try { chrome.runtime.sendMessage({ psmod: 'nodiscard' }).catch(() => {}); } catch {}
