'use strict';

$(document).ready(function() {
  $('#begin-button').hover(function() {
    $('#begin-button button').delay().toggleClass('buttonChange');
  });
});