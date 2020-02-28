const gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      notify       = require('gulp-notify')

module.exports     = function styles() {
    return gulp.src('app/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
          }))
        .pipe(sass())
        .pipe(autoprefixer({
          cascade: false
        }))
        .pipe(sourcemaps.write('app.css'))
        .pipe(gulp.dest('dist/css'))
}

