const gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      webpcss      = require('gulp-webpcss'),
      gcmq         = require('gulp-group-css-media-queries');

module.exports     = function styles() {
    return gulp.src('app/css/*.{sass,scss}')
        .pipe(plumber({
          errorHandler: function (err) {
            console.log(err);
            this.emit('end');
          }
        }))
        .pipe(sass(
          {
            noCache: true,
            outputStyle: 'compressed'
          }
        ))
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 5 versions'],
          cascade: false
        }))
        .pipe(gcmq())
        .pipe(webpcss())
        .pipe(gulp.dest('app/css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
}

