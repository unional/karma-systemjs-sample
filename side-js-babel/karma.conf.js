// Karma configuration
// Generated on Thu Jul 09 2015 17:04:52 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'systemjs', 'sinon-chai'],


        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-systemjs',
            'karma-sinon-chai'
        ],

        systemjs: {
            configFile: "src/config.js",
            config: {
                baseURL: "src/js",
                transpiler: null,
                "paths": {
                    "systemjs": "jspm_packages/system.js",
                    "system-polyfills": "jspm_packages/system-polyfills.js",
                    "babel": "jspm_packages/npm/babel-core@5.6.19/browser.js",
                    "es6-module-loader": "../../node_modules/es6-module-loader/dist/es6-module-loader.js"
                }
            },
            files: [
                "src/**/*",
                "test/*"
            ],
            testFileSuffix: ".unit.js"
        },

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}
