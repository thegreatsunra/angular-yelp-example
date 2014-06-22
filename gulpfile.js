/* ====================================
 *  gulpfile.js
 * ===================================== */

'use strict';

// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: '9000',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload())
    .pipe(notify({ message: 'Live reload complete!' }));
});

gulp.task('watch', function () {
  gulp.watch([
    './app/*.html',
    './app/styles/**/*.{css,less}',
    './app/scripts/**/*.{js,html}',
    './app/images/**/*.*'
  ], ['reload']);

  // Watch .js files
  gulp.watch([
    'app/scripts/**/*.js',
    'gulpfile.js',
    'Gruntfile.js'
    ], ['scripts']);

  // Create LiveReload server
  var server = livereload();
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src([
      'app/scripts/**/*.js',
      'gulpfile.js',
      'Gruntfile.js'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify({ message: 'Scripts task complete!' }));
});

// Default task
gulp.task('default', ['connect', 'watch'], function() {
    gulp.start('scripts');
});
