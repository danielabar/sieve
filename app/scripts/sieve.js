// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

define(['jquery'], function($) {

  var init = function(options) {
    registerHandlers(options);
  };

  var registerHandlers = function(options) {
    options.trigger.on('click', function(e) {
      calculatePrimes(options.input.val());
      e.preventDefault();
    });
  };

  // TODO Consider delegating to a new module SieveCalculator
  // just hard code a response for testing
  var calculatePrimes = function(upTo) {
    console.log('calculatePrimes for: ' + upTo);
    return [2, 3, 5, 7];
  };

  return {
    init: init,
    calculatePrimes: calculatePrimes
  };

});