// NOTE:  Use './sieve' rather than 'sieve' so that Karma RequireJS adapter can parse base path
define(
  [
    './sieve',
    'jquery'
  ],
  function(sieve, $) {

    var init = function() {
      sieve.init({
        input: $('#number'),
        action: $('#calculatePrimes'),
        output: $('#primeResults')
      });
    };

    return {
      init: init
    };

  });