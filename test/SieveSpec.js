define(['../app/scripts/sieve', '../app/bower_components/chai/chai'], function(fixture, chai) {

  var expect = chai.expect;

  describe('SieveSpec.js: ', function() {

    it('Module is defined', function() {
      expect(fixture).not.to.be.null;
      expect(fixture).not.to.be.undefined;
    });

    it('Calculates prime numbers', function() {
      var upTo = 10;
      var result = fixture.calculatePrimes(upTo);
      expect(result).to.be.undefined;
    });

  });

});