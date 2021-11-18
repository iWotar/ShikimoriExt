searchShiki = function(word){
  var anime = word.selectionText;
  chrome.tabs.create({url: "https://shikimori.one/animes?search=" + anime});
};

chrome.contextMenus.create({
  title: "Search in Shikimori",
  contexts:["selection"],
  onclick: searchShiki
});