$(function() {
  chrome.tabs.getSelected(null, function(tab) {
    $('#url').val(tab.url);
    $('#title').val(tab.title);
  });

  $('#form').submit(function(event) {
    event.preventDefault();
    $('.spinner').show();
    $('.text').hide();
    var $form = $(this);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
      timeout: 3000,
      success: function(result, textStatus, xhr) {
        window.close();
      },
      error: function(xhr, textStatus, error) {
        window.close();
      }
    });
  });
});
