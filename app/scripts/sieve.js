// http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

define(['jquery'], function($) {

  var init = function(config) {
    registerHandlers(config);
  };

  var registerHandlers = function(config) {
    config.action.on('click', function(e) {
      var result = calculatePrimes(config.input.val());
      displayOutput(result, config.output);
      e.preventDefault();
    });
  };

  // TODO Consider delegating to a new module SieveCalculator
  // just hard code a response for testing
  var calculatePrimes = function(upTo) {
    console.log('calculatePrimes for: ' + upTo);
    return [2, 3, 5, 7];
  };

  var displayOutput = function(result, outputElement) {
    var formattedResult = result.join(', ');
    outputElement.append(formattedResult);
  };

  return {
    init: init,
    calculatePrimes: calculatePrimes,
    displayOutput: displayOutput
  };

});