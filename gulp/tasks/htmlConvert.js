const   gulp     = require('gulp'),
        plumber  = require('gulp-plumber'),
        pug      = require('gulp-pug'),
        prettyHtml  = require('gulp-pretty-html'),
        webpHtml    = require('gulp-webp-html'),
        notify   = require('gulp-notify');

module.exports   = function htmlConvert() {
    return gulp.src('app/pages/*.pug')
        .pipe(plumber(
            {errorHandler: notify.onError("Error: <%= error.message %>")}
        ))
        .pipe(pug({
            pretty: true
        }))
        .pipe(webpHtml())
        .pipe(prettyHtml({
            indent_size: 4,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
        }))
        .pipe(gulp.dest('app'))
}

