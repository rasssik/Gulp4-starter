const gulp     = require('gulp'),
      svgstore = require('gulp-svgstore'),
      svgmin   = require('gulp-svgmin'),
      rename   = require('gulp-rename')

module.exports = function sprite() {
    return gulp.src('app/images/svg/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename({ basename: 'sprite' }))
        .pipe(gulp.dest('./dist/images/'))
}

