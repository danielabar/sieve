// NOTE:  Use './sieve' rather than 'sieve' so that Karma RequireJS adapter can parse base path
define(
  [
    './sieve',
    './news',
    'jquery'
  ],
  function(sieve, news, $) {

    var init = function() {
      initSieve();
      initNews();
    };

    var initSieve = function() {
      sieve.init({
        input: $('#number'),
        action: $('#calculatePrimes'),
        output: $('#primeResults')
      });
    };

    var initNews = function() {
      news.init({
        action: $('a#aboutSieve'),
        loadInto: $('.mainContent'),
        partial: 'partials/news.html'
      });
    };

    return {
      init: init,
      initSieve: initSieve,
      initNews: initNews
    };

  });