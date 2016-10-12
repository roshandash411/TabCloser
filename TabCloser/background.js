chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.remove(tab.id);
});

chrome.contextMenus.create({"title": "TabCloser"});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.remove(tab.id);
});