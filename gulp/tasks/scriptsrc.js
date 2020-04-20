const gulp     = require('gulp');

module.exports = function scriptsrc() {
    return gulp.src([
        'app/scripts/*.js', '!app/scripts/main.min.js'
    ])
        .pipe(gulp.dest('dist/js/source'))
}