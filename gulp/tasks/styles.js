const gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      webpcss      = require('gulp-webpcss'),
      gcmq         = require('gulp-group-css-media-queries');
module.exports     = function styles() {
    return gulp.src('app/styles/*.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber({
          errorHandler: function (err) {
            console.log(err);
            this.emit('end');
          }
        }))
        .pipe(sass(
          {
            outputStyle: 'expanded'
          }
        ))
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 5 versions'],
          cascade: false
        }))
        .pipe(gcmq())
        .pipe(webpcss())
        .pipe(gulp.dest('dist/css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
}

