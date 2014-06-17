define(['./sieve'], function(sieve) {

  var init = function() {
    console.log('App is initializing');
    var primes = sieve.calculatePrimes(9);
    console.log('Primes: ' + primes);
  };

  return {
    init: init
  };

});