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
      var price = data.quote.latestPrice;
      var company = data.quote.companyName;
      $('#div-5').append(`<div class="quote-search-result" id="result-name">${company}</div>`);
      $('#div-5').append(`<div class="quote-search-result" id="result-price">Latest Price: $${price}</div>`);
      $('#section-five').append(`<div class="tradingview-widget-container">
    <div id="tv-medium-widget"></div>
    <div class="tradingview-widget-copyright"><span class="blue-text"><a href="https://www.tradingview.com/symbols/${quoteVal}/" rel="noopener" target="_blank"><span class="blue-text">${company}</span></a></span> <span class="blue-text">Quotes</span> by TradingView</div>
    <script type="text/javascript">
    new TradingView.MediumWidget(
    {
    "container_id": "tv-medium-widget",
    "symbols": [
      [
        "${company}",
        "${quoteVal}"
      ]
    ],
    "greyText": "Quotes by",
    "gridLineColor": "#e9e9ea",
    "fontColor": "rgba(0, 0, 0, 1)",
    "underLineColor": "#dbeffb",
    "trendLineColor": "#4bafe9",
    "width": "1000px",
    "height": "400px",
    "locale": "en"
    }
    );
    </script>
  </div>`);
    })
    .catch(err => {console.error(err)});
});