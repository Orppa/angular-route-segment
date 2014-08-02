module.exports = function(config) {
    config.set({

        basePath: './',

        frameworks: ["jasmine"],

        files: [
            'test/lib/jquery.min.js',
            'test/lib/helpers.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular-route.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular-animate.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.17/angular-mocks.js',
            'src/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        browsers: ['PhantomJS']

    });
};