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

$('#quote-search-form').on('submit', function(event) {
  event.preventDefault();
  $('.quote-search-result').remove();
  let quoteVal = $('#quote-search').val();
  $.getJSON(`https://api.iextrading.com/1.0/stock/${quoteVal}/batch?types=quote`)
    .then(data => {
      console.log(data);
      let price = data.quote.latestPrice;
      let company = data.quote.companyName;
      $('#div-5').append(`<div class="quote-search-result" id="result-name">${company}</div>`);
      $('#div-5').append(`<div class="quote-search-result" id="result-price">Latest Price: $${price}</div>`);
    })
    .catch(err => {console.error(err)});
});