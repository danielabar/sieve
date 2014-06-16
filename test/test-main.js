var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    jquery: '../bower_components/jquery/jquery',
    bootstrapAffix: '../bower_components/bootstrap/js/affix',
    bootstrapAlert: '../bower_components/bootstrap/js/alert',
    bootstrapButton: '../bower_components/bootstrap/js/button',
    bootstrapCarousel: '../bower_components/bootstrap/js/carousel',
    bootstrapCollapse: '../bower_components/bootstrap/js/collapse',
    bootstrapDropdown: '../bower_components/bootstrap/js/dropdown',
    bootstrapModal: '../bower_components/bootstrap/js/modal',
    bootstrapPopover: '../bower_components/bootstrap/js/popover',
    bootstrapScrollspy: '../bower_components/bootstrap/js/scrollspy',
    bootstrapTab: '../bower_components/bootstrap/js/tab',
    bootstrapTooltip: '../bower_components/bootstrap/js/tooltip',
    bootstrapTransition: '../bower_components/bootstrap/js/transition'
  },
  shim: {
    bootstrapAffix: {
      deps: ['jquery']
    },
    bootstrapAlert: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapButton: {
      deps: ['jquery']
    },
    bootstrapCarousel: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapCollapse: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapDropdown: {
      deps: ['jquery']
    },
    bootstrapModal: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapPopover: {
      deps: ['jquery', 'bootstrapTooltip']
    },
    bootstrapScrollspy: {
      deps: ['jquery']
    },
    bootstrapTab: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapTooltip: {
      deps: ['jquery', 'bootstrapTransition']
    },
    bootstrapTransition: {
      deps: ['jquery']
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
