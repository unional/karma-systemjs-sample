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

        // list of files / patterns to load in the browser
        files: [
            //{pattern: "test/*", included: false}
        ],
        systemjs: {
            //baseURL: "./src/",
            configFile: "config.js",
            config: {
                transpiler: null
            },
            files: [
                "src/*",
                "test/*"
            ],
            testFileSuffix: ".unit.js"
        },
        //
        //jspm: {
        //    loadFiles: ['test/*'],
        //    serveFiles: ['src/*']
        //},
        //proxies: {
        //    '/src/test/': '/test/',
        //    //'/test/': '/base/test/',
        //    '/jspm_packages/': '/base/jspm_packages/'
        //},

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
