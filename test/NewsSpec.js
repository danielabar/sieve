define([
  '../app/scripts/news',
  '../app/bower_components/chai/chai',
  '../app/bower_components/sinon/lib/sinon',
  'jquery'
], function(fixture, chai, sinon, $) {

  var expect = chai.expect;

  describe('NewsSpec.js: ', function() {

    it('Module is defined', function() {
      expect(fixture).not.to.be.null;
      expect(fixture).not.to.be.undefined;
    });

    describe('loadPartial: ', function() {

      var sandbox = sinon.sandbox.create();

      beforeEach(function() {
        document.body.innerHTML = window.__html__['test/html/NewsSpec.html'];
      });

      afterEach(function() {
        sandbox.restore();
      });

      it('HTML snippet is available for testing DOM manipulation', function() {
        var tplEl = $('#newsTpl');
        expect(tplEl.text()).to.match(/News Template for Unit Testing/);
      });

      it('Calls jQuery load on config.loadInto and loads config.partial', function() {
        // Not modifying DOM in this test, but need a reference to an element to stub jQuery load function
        var newsContainer = $('#newsContainer');
        var loadStub = sandbox.stub(newsContainer, 'load');
        var config = {
          loadInto: newsContainer,
          partial: 'whatever.html'
        };

        var result = fixture.loadPartial(config);
        expect(result.state()).to.equal('pending');
        sinon.assert.calledWith(loadStub, 'whatever.html', sinon.match.func);
      });

    });

    describe('searchNews: ', function() {

      var expectedNewsUrl = 'http://content.guardianapis.com/search?show-fields=all';
      var expectedDataType = 'jsonp';

      var sandbox = sinon.sandbox.create();

      afterEach(function() {
        sandbox.restore();
      });

      // Use mocha's 'done' callback for testing asynchronous code
      it('Gets the news successfully', function(done) {
        var ajaxResponse = function() {
          var d = $.Deferred();
          d.resolve({news: 'this is an article of some sort'});
          return d.promise();
        };
        var ajaxStub = sandbox.stub($, 'ajax');
        ajaxStub.returns(ajaxResponse());

        var result = fixture.searchNews();
        expect(result.state()).to.equal('resolved');
        sinon.assert.called(ajaxStub);
        sinon.assert.calledWith(ajaxStub, sinon.match({
          url: expectedNewsUrl,
          dataType: expectedDataType
        }));

        var successCB = function(data) {
          expect(data.news).to.equal('this is an article of some sort');
          done();
        };

        // should never get here
        var errorCB = function() {
          expect(false).to.be(true);
        };

        result.then(successCB, errorCB);
      });

      it('Rejects when news api call fails', function(done) {
        var ajaxResponse = function() {
          var d = $.Deferred();
          d.reject({status: 'FAILED'});
          return d.promise();
        };
        var ajaxStub = sandbox.stub($, 'ajax');
        ajaxStub.returns(ajaxResponse());

        var result = fixture.searchNews();
        expect(result.state()).to.equal('rejected');
        sinon.assert.called(ajaxStub);

        // should never get here
        var successCB = function(data) {
          expect(false).to.be(true);
        };

        var errorCB = function(error) {
          expect(error.status).to.equal('FAILED');
          done();
        };

        result.then(successCB, errorCB);
      });

    });
  });

});