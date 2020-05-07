const gulp     = require('gulp'),
      plumber  = require('gulp-plumber'),
      concat   = require('gulp-concat'),
      notify   = require('gulp-notify'),
      babel    = require('gulp-babel'),
      uglify   = require('gulp-uglify');

module.exports = function script() {
    return gulp.src([
      'app/scripts/*.js', '!app/scripts/main.min.js'
      ])
      .pipe(
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
        }))
      .pipe(gulp.dest('dist/js'))
      .pipe(
        babel({
          presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/js'))
}

