// include gulp
var gulp = require('gulp');

// include plugins
var tslint = require('gulp-tslint');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpcp = require('gulp-copy');

// ts-lint task
gulp.task('ts-lint', function() {
    return gulp.src('src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// compile sass
gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// uglify
gulp.task('uglify', function() {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-template', function() {
    return gulp.src('src/**/*.{html,css}', {base: './src/app'})
        .pipe(gulp.dest('dist'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['ts-lint', 'copy-template']);
    gulp.watch('src/**/*.scss', ['sass']);
});

// default task
gulp.task('default', [
    'ts-lint',
    'sass',
    'uglify',
    'copy-template',
]);
