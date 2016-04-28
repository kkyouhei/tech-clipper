$(function(){
  chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.getSelected(null, function(tab) {
      $.ajax({
        url: 'https://tech-clips.com/clip/callback',
        type: 'post',
        timeout: 10000,
        data: {"url": tab.url, "title": tab.title},
          success: function (d) {
          },
          error: function () {
          }
      });
    });
  });
});
