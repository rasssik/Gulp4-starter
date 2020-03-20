const   gulp     = require('gulp'),
        plumber  = require('gulp-plumber'),
        pug      = require('gulp-pug'),
        notify   = require('gulp-notify')

module.exports   = function htmlConvert() {
    return gulp.src('app/pages/*.pug')
        .pipe(plumber(
            {errorHandler: notify.onError("Error: <%= error.message %>")}
        ))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
}

