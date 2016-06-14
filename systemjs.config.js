/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'dist': 'dist',

        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',

        // angular2
        '@angular': 'node_modules/@angular',

        // @ngrx/core
        '@ngrx/core': 'node_modules/@ngrx/core',

        // @ngrx/router
        '@ngrx/router': 'node_modules/@ngrx/router',

        // @ngrx/router dependencies
        'path-to-regexp': 'node_modules/path-to-regexp',
        'isarray': 'node_modules/isarray',
        'query-string': 'node_modules/query-string',
        'strict-uri-encode': 'node_modules/strict-uri-encode',
        'object-assign': 'node_modules/object-assign'
    };

    // packages tells the System loader how to load when no filename and/or
    // no extension
    var packages = {
        'dist': {
            main: 'main.js',
            defaultExtension: 'js'
        },

        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        // @ngrx/core package
        '@ngrx/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        // @ngrx/router package
        '@ngrx/router': {
            main: 'index.js',
            defaultExtension: 'js'
        },

        // @ngrx/router dependencies
        'path-to-regexp': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'isarray': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'query-string': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'strict-uri-encode': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'object-assign': {
            main: 'index.js',
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'upgrade',
    ];

    // individual files (~300 requests)
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    // individual files (~300 requests)
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    // most environment should use UMS; some (Karma) need the individual index
    // files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
