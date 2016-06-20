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
        '@angular/router': 'node_modules/@angular/router'
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
        '@angular/router': {
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

    // bundled (~40 requests)
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'bundles/' + pkgName + '.umd.js',
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
