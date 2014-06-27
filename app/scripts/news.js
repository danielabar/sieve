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
        displayNews(config);
        e.preventDefault();
      });
    };

    var displayNews = function(config) {
      $.when(loadPartial(config), searchNews()).done(function(results1, response) {
        console.log('Now ready to display the news');
        console.log(response);
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
      return $.ajax({
        url: 'http://content.guardianapis.com/search?show-fields=all',
        data: {
          q: 'mathematician'
        },
        dataType: 'jsonp'
      }).promise();
    };

    return {
      init: init,
      loadPartial: loadPartial
    };

  });