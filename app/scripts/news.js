define(
  [
    'jquery'
  ],
  function($) {

    var init = function(config) {
      registerHandlers(config);
    };

    var registerHandlers = function(config) {
      config.action.on('click', function(e) {
        var loadPromise = loadPartial(config);
        loadPromise.then(searchNews);
        e.preventDefault();
      });
    };

    // TODO: deferred.reject() if erorr loading partial ('Ajax request encounters an error' in http://api.jquery.com/load/)
    var loadPartial = function(config) {
      var deferred = new $.Deferred();
      config.loadInto.load(config.partial, function() {
        console.log('partial loaded');
        deferred.resolve();
      });
      return deferred.promise();
    };

    var searchNews = function() {
      console.log('searching for news...');
    };

    return {
      init: init,
      loadPartial: loadPartial
    };

  });