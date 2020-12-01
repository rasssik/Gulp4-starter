const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');
module.exports = function script() {
  return (
    gulp
      .src('src/js/**/*.js')
      .pipe(
        plumber({
          errorHandler: notify.onError('Error: <%= error.message %>'),
        })
      )
      .pipe(plumber.stop())
      .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest('src/assets/js/source/'))

      .pipe(uglify())
      // .pipe(concat('main.js')) // uncomment this string to make several scripts instead of the concatenated one
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('.'))
      .pipe(
        rename({
          dirname: '',
        })
      )
      .pipe(gulp.dest('src/assets/js/'))
  );
};
