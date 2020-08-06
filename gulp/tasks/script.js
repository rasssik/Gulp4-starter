const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

module.exports = function script() {
  return gulp
    .src(['app/js/*.js', '!app/js/*.min.js'])
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(concat('main.min.js')) // comment this string to make several scripts instead of the concatenated one
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/js'));
};
