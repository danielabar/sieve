define(
  [
    '../app/scripts/app',
    '../app/scripts/sieve',
    '../app/bower_components/chai/chai',
    '../app/bower_components/sinon/lib/sinon'
  ],
  function(fixture, sieve, chai, sinon) {

    var expect = chai.expect;
    var sandbox = sinon.sandbox.create();

    afterEach(function() {
      sandbox.restore();
    });

    describe('AppSpec.js: ', function() {

      it('Module is defined', function() {
        expect(fixture).not.to.be.null;
        expect(fixture).not.to.be.undefined;
      });

      it('Init calls sieve to calculate primes', function() {
        var primeResults = [2, 3];
        var sieveStub = sandbox.stub(sieve, 'calculatePrimes');
        sieveStub.returns(primeResults);
        fixture.init();
        sinon.assert.called(sieveStub);
      });

    });

  });