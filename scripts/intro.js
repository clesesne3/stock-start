'use strict';

$('#begin-button').hover(function() {
  $('#begin-button button').delay().toggleClass('buttonChange');
});

$('li.nav-li').hover(function() {
  $(this).toggleClass('dollar');
});

$('.nav-li').on('click', function() {
  $('.nav-li').removeClass('active');
  $(this).toggleClass('active');
});

// $('#quote-search-form').on('submit', function(event) {
//   event.preventDefault();
//   let quoteVal = $('#quote-search').val();
// });