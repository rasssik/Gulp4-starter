const   gulp        = require('gulp'),
        cache       = require('gulp-cache'),
        imagemin    = require('gulp-imagemin'),
        pngquant    = require('imagemin-pngquant');

module.exports      = function images() {
    return gulp.src(['app/images/**/*', '!app/images/svg/*.svg'])
        .pipe(cache(imagemin([
            pngquant({
                speed: 1,
                quality: [0.95, 1]
            }),
        ])))
        .pipe(gulp.dest('dist/img'))
}
