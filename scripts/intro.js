'use strict';

$(document).ready(function() {
  $('#begin-button').hover(function() {
    $('#begin-button button').delay().toggleClass('buttonChange');
  });

  $('li.nav-li').hover(function() {
    $(this).toggleClass('dollar');
    $(this).removeAttr('textDecoration');
  });
});