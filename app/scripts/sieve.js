// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

define([], function() {

  // just hard code a response for testing
  var calculatePrimes = function(upTo) {
    return [2, 3, 5, 7];
  };

  return {
    calculatePrimes: calculatePrimes
  };

});