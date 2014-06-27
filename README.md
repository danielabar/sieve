# Sieve

A project to demonstrate client-side JavaScript testing for an app built with RequireJS.

## Development Stack
* App scaffolded with [yeoman](http://yeoman.io/) using [generator-webapp-rjs](https://www.npmjs.org/package/generator-webapp-rjs)
* [RequireJS](http://requirejs.org/) for module loading
* [jQuery](http://jquery.com/) for DOM manipulation and ajax

## Testing Stack
* [Karma](http://karma-runner.github.io/0.12/intro/how-it-works.html) test runner
* [Mocha](http://visionmedia.github.io/mocha/) JavaScript test framework
* [Chai](http://chaijs.com/) BDD assertion library
* [Sinon.JS](http://sinonjs.org/docs/) Standalone test spies, stubs and mocks for JavaScript
* [karma-html2js-preprocessor](https://github.com/karma-runner/karma-html2js-preprocessor) Karma plugin to support unit testing code that performs DOM manipulation

### Testing Notes
* For stubbing jQuery ajax with jsonp, see this sinon issue [here](https://github.com/cjohansen/Sinon.JS/issues/41)
* For stubbing jQuery promises with sinon, see this SO thread [here](http://stackoverflow.com/questions/13148356/how-to-properly-unit-test-jquerys-ajax-promises-using-jasmine-and-or-sinon)

## Setup
* git clone this repo
* cd into the project directory
* ```npm install```
* ```bower install```
* ```mkdir test/coverage```

The ```coverage``` directory is not committed to git, that's why you must create it manually.
This is where the test coverage reports will be generated.

## Run Project

```grunt serve```

This starts a static connect server in watch mode, with live reload enabled.
Any changes in app source will be automatically reloaded in browser.
The watch task also lints all the JavaScript code using [jshint](http://www.jshint.com/).

It also starts the karma server, and runs all the tests in watch mode.
Any changes to app source or tests will trigger re-running of tests.

Test runs also generate a code coverage report. See the results at ```test/coverage```

## Run Tests Only

```grunt test```

## Build Project and Run Optimized version

  ```
  grunt build
  grunt connect:dist:keepalive
  ```

## TODO
* Handlebars templating, see this [presentation](http://www.slideshare.net/iivanoo/requirejs-handlebars) for integrating Handlebars and RequireJS