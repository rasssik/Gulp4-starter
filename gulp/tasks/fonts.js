const   gulp      = require('gulp');

module.exports    = function fonts() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
}


