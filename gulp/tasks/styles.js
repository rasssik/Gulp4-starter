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
    .src([
      'src/assets/sass/**/*.scss',
      '!src/assets/sass/common/**/*',
      '!src/assets/sass/mixins/**/*',
    ])
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
    .pipe(
      rename({
        dirname: '',
      })
    )
    .pipe(gulp.dest('src/assets/css/source'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/assets/css'));
};
