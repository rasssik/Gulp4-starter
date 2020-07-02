const images = require('./images')

const   gulp             = require('gulp'),
        imagesWebp       = require('./imagesWebp'),
        sprite           = require('./sprite'),
        styles           = require('./styles'),
        htmlConvert      = require('./htmlConvert'),
        script           = require('./script'),
        server           = require('browser-sync').create()

module.exports           = function serve(done) {
    server.init({
        server: 'app',
        notify: false,
        open: true,
        cors: true
    })
    gulp.watch('app/pages/**/*.pug', gulp.series(htmlConvert)).on('change', server.reload)
    gulp.watch('app/images/svg/*.svg', gulp.series(sprite)).on('change', server.reload)
    gulp.watch(['app/images/**/*', '!app/images/**/*.webp'], gulp.series(imagesWebp)).on('change', server.reload)
    gulp.watch('app/css/**/*.{sass,scss}', gulp.series(styles, done => gulp.src('app/css').pipe(server.stream()).on('end', done)))
    gulp.watch(['app/js/**/*.js', '!app/js/main.min.js'], gulp.series(script)).on('change', server.reload)
    return done()
}
