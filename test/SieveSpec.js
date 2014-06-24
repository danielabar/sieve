define([
  '../app/scripts/sieve',
  '../app/bower_components/chai/chai',
  'jquery'
], function(fixture, chai, $) {

  var expect = chai.expect;

  beforeEach(function() {
    document.body.innerHTML = window.__html__['test/html/SieveSpec.html'];
  });

  describe('SieveSpec.js: ', function() {

    it('Module is defined', function() {
      expect(fixture).not.to.be.null;
      expect(fixture).not.to.be.undefined;
    });

    it('HTML snippet is available for testing DOM manipulation', function() {
      var tplEl = $('#sieveTpl');
      expect(tplEl.text()).to.match(/Sieve Template for Unit Testing/);
    });

    it('Calculates prime numbers', function() {
      var upTo = 10;
      var result = fixture.calculatePrimes(upTo);
      expect(result).to.have.length(4);
    });

    // This is an example of unit testing DOM manipulation
    it('Displays results', function() {
      var result = [2, 3];
      var outputElement = $('.primeResults');
      expect(outputElement.text()).to.equal('');
      fixture.displayOutput(result, outputElement);
      expect(outputElement.text()).to.equal('2, 3');
    });

  });

});