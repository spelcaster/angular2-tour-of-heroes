/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'dist': 'dist',
        // 'dist',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        // @ngrx/router
        '@ngrx': 'node_modules/@ngrx',
        // @ngrx/router dependencies
        'path-to-regexp': 'node_modules/path-to-regexp',
        'isarray': 'node_modules/isarray',
        'query-string': 'node_modules/query-string',
        'strict-uri-encode': 'node_modules/strict-uri-encode'
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
            defaultExtension: 'js'
        },
        // @ngrx/router package
        '@ngrx/router': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        // @ngrx/router dependencies
        '@ngrx/core': {
            main: 'index.js',
            defaultExtension: 'js'
        },
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

    autoload(packages, "@angular", ngPackageNames);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);

function autoload(packages, developer, packageList) {
    // Add package entries for angular packages
    packageList.forEach(function (pkgName) {
        packages[ developer + '/' + pkgName] = {
            main: pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });
}
