const   gulp        = require('gulp'),
        webp        = require('gulp-webp');

module.exports      = function imagesWebp() {
    return gulp.src(['app/images/**/*', '!app/images/svg/*.svg'])
        .pipe(webp({
            quality: 70,
        }))
        .pipe(gulp.dest('dist/img'))
}