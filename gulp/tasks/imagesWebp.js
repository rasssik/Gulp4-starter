const   gulp        = require('gulp'),
        webp        = require('gulp-webp');

module.exports      = function imagesWebp() {
    return gulp.src('app/images/**/*.{png,jpg,jpeg,gif}')
        .pipe(webp({
            quality: 70,
        }))
        .pipe(gulp.dest('app/images'))
}