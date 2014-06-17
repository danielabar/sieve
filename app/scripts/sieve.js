// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

define([], function() {

  var init = function(options) {
    console.log('sieve.init called with options:');
    console.dir(options);
  };

  // just hard code a response for testing
  var calculatePrimes = function(upTo) {
    return [2, 3, 5, 7];
  };

  return {
    init: init,
    calculatePrimes: calculatePrimes
  };

});