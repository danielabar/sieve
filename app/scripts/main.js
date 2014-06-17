require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery'
  }
});

require(['app'], function(app) {
  console.log('main is kicking things off');
  app.init();
});