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

    // TODO: add fail callbacks for when any of the promises are rejected http://api.jquery.com/jquery.when/
    var displayNews = function(config) {
      $.when(loadPartial(config), searchNews()).done(function(loadResponse, newsResponse) {
        console.log('Now ready to display the news');
        console.log(loadResponse);
        console.log(newsResponse);
      });
    };

    var loadPartial = function(config) {
      var deferred = new $.Deferred();
      config.loadInto.load(config.partial, function(response, status, xhr) {
        if (status === 'error') {
          deferred.reject(xhr.status + ' ' + xhr.statusText);
        } else {
          deferred.resolve(response);
        }
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
      loadPartial: loadPartial,
      searchNews: searchNews
    };

  });