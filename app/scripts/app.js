// NOTE:  Use './sieve' rather than 'sieve' so that Karma RequireJS adapter can parse base path
define(
  [
    './sieve',
    'jquery'
  ],
  function(sieve, $) {

    var init = function() {
      console.log('App is initializing, reference to jquery is: ');
      console.dir($);
      sieve.init({
        number: $('#number').val(),
        action: $('#calculatePrimes')
      });

      var primes = sieve.calculatePrimes(9);
      console.log('Primes: ' + primes);
    };

    return {
      init: init
    };

  });