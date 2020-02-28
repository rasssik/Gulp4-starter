const gulp     = require('gulp'),
      plumber  = require('gulp-plumber'),
      pug      = require('gulp-pug')

module.exports = function html() {
    return gulp.src('app/pages/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('dist'))
}

