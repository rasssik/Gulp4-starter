const   gulp        = require('gulp'),
        prettyHtml  = require('gulp-pretty-html'),
        webpHtml    = require('gulp-webp-html');

module.exports      = function htmlResult() {
    return gulp.src('app/*.html')
        .pipe(webpHtml())
        .pipe(prettyHtml({
            indent_size: 4,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
        }))
        .pipe(gulp.dest('app'))
}