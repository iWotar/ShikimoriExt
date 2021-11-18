var input = document.getElementById("searchInput");
var nickname = document.getElementById("nickInput");
nickname.value = localStorage["nickname"];

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchBtn").click();
  }
});

function animeSearch() {
    chrome.tabs.create({url: "https://shikimori.one/animes?search=" + input.value});
}

function goToList() {
    chrome.tabs.create({url: "https://shikimori.one/" + nickname.value + "/list/anime/order-by/rate_score"});
    localStorage["nickname"] = nickname.value;
}

document.getElementById('searchBtn').addEventListener('click', animeSearch);
document.getElementById('listBtn').addEventListener('click', goToList);
