const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  gcmq = require('gulp-group-css-media-queries');

module.exports = function styles() {
  return gulp
    .src('app/css/*.{sass,scss}')
    .pipe(
      plumber({
        errorHandler(err) {
          console.log(err);
          this.emit('end');
        },
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        noCache: true,
        outputStyle: 'compressed',
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: false,
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest('app/css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'));
};
