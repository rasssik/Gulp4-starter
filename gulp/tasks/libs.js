const gulp     = require('gulp')

module.exports = function libs() {
    return gulp.src('app/libs/*')
        .pipe(gulp.dest('dist/libs'))
}
