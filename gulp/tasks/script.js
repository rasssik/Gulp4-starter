const gulp     = require('gulp'),
      plumber  = require('gulp-plumber'),
      concat   = require('gulp-concat'),
      notify   = require('gulp-notify')

module.exports = function script() {
    return gulp.src([
      'app/scripts/*.js', '!app/scripts/main.min.js'
      ])
      .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('dist/js'))
}

