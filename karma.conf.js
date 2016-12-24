//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-sanitize/angular-sanitize.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'app/app.module.js',
      'app/app.app.routes.js',
      'app/controllers/**/*.js',
      'app/interceptors/**/*.js',
      'app/services/**/*.js',
      'app/utils/**/*.js'    
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app/*/!(*.test).js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    }

  });
};
