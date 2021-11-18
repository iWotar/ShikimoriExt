searchShiki = function(word){
  var anime = word.selectionText;
  chrome.tabs.create({url: "https://shikimori.one/animes?search=" + anime});
};

goToAnime = function(word){
    var anime = word.selectionText
    var doc = document.body;
    fetch("https://shikimori.one/animes?search=" + anime).then(function(response) { 
        response.text().then(function(text) {

            let dom = document.createElement('div');
            dom.innerHTML = text;
            let animeCover = dom.getElementsByClassName("cover")[0];
            if (animeCover) {
                chrome.tabs.create({url: animeCover.href});
            } else {
                alert("Anime is not found");
            }
        });
    });
    
}

chrome.contextMenus.create({
  title: "Search in Shikimori",
  contexts:["selection"],
  onclick: searchShiki
});

chrome.contextMenus.create({
  title: "Direct to anime",
  contexts:["selection"],
  onclick: goToAnime
});