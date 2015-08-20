// Finds which interface script to use

$(function() {
  var urls = {
    gmusic: "play.google.com/music",
    pandora: "pandora.com",
    songza: "songza.com",
    soundcloud: "soundcloud.com",
    spotify: "play.spotify.com"
  };

  var background_port = chrome.runtime.connect({name: "loader"});
  for (var protocol in urls) {
    if (urls.hasOwnProperty(protocol) && document.URL.search(urls[protocol]) > 0) {
      background_port.postMessage({"protocol": protocol});
    }
  }
});
