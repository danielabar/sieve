# Sieve

A project to demonstrate client-side JavaScript testing.

## Setup
* git clone this repo
* cd into the project directory
* ```npm install```
* ```bower install```

## Run Project

```grunt serve```

This starts a static connect server in watch mode, with live reload enabled.
Any changes in app source will be automatically reloaded in browser.

It also starts the karma server, and runs all the tests in watch mode.
Any changes to app source or tests will trigger re-running of tests.

## Run Tests Only

```grunt test```

## Build Project and Run Optimized version

  ```
  grunt build
  grunt connect:dist:keepalive
  ```