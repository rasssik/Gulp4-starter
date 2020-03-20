const   gulp     = require('gulp'),
        cache    = require('gulp-cache'),
        imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant')

module.exports   = function images() {
    return gulp.src(['app/images/**/*', '!app/images/sprite.svg'])
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
        })))
        .pipe(gulp.dest('dist/images'))
}

