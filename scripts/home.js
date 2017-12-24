'use strict';

$(document).ready(function() {
  $('#enter-button').fadeIn(2500);
  $('audio').hide();
  $('#enter-button').on('mouseenter', function() {
    $('audio').toggle();
  });
});
