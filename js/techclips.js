$(function() {
  chrome.tabs.getSelected(null, function(tab) {
    $('#url').val(tab.url);
    $('#title').val(tab.title);
  });
});
