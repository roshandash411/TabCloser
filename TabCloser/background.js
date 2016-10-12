//The Browser Action present on the Toobar.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.remove(tab.id);
});
//Creates the Right Click Context Menu and adds option to Close it!
chrome.contextMenus.create({"title": "TabCloser"});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.remove(tab.id);
});
