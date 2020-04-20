const gulp     = require('gulp')

module.exports = function favicon() {
    return gulp.src('app/icon/*')
        .pipe(gulp.dest('dist/favicon'))
}
