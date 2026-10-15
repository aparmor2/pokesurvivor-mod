// Keeps game tabs from being discarded by Chrome's memory saver, which reloads
// the page and drops you out of a co-op run without any message.
chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg && msg.psmod === 'nodiscard' && sender.tab && sender.tab.id != null) {
    chrome.tabs.update(sender.tab.id, { autoDiscardable: false }).catch(() => {});
  }
});
