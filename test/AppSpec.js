define(
  [
    '../app/scripts/app',
    '../app/scripts/sieve',
    '../app/bower_components/chai/chai',
    '../app/bower_components/sinon/lib/sinon',
    'jquery'
  ],
  function(fixture, sieve, chai, sinon, $) {

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

      it('AppSpec.js was able to load jquery', function() {
        expect($).not.to.be.null;
        expect($).not.to.be.undefined;
      });

      // TODO: Incorporate html2js so we can verify appropriate DOM elements passed to sieve init
      it('Initializes sieve', function() {
        var sieveStub = sandbox.stub(sieve, 'init');
        fixture.initSieve();
        sinon.assert.called(sieveStub);
      });

    });

  });