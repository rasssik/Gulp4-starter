const gulp     = require('gulp')

module.exports = function favicon() {
    return gulp.src('app/favicon/*')
        .pipe(gulp.dest('dist/favicon'))
}
