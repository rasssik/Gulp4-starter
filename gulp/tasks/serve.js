const   gulp             = require('gulp'),
        images           = require('./images'),
        sprite           = require('./sprite'),
        styles           = require('./styles'),
        stylesmin        = require('./stylesmin'),
        htmlConvert      = require('./pug'),
        fonts            = require('./fonts'),
        libs             = require('./libs'),
        favicon          = require('./favicon'),
        script           = require('./script'),
        server           = require('browser-sync').create()

module.exports           = function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    })


    gulp.watch('app/pages/**/*.pug', gulp.series(htmlConvert))
    gulp.watch('app/pages/images/**/*', gulp.series(images, sprite)).on('change', server.reload)
    gulp.watch('app/favicon/*', gulp.series(favicon)).on('change', server.reload)
    gulp.watch('app/fonts/*', gulp.series(fonts)).on('change', server.reload)
    gulp.watch('app/libs/*', gulp.series(libs)).on('change', server.reload)
    gulp.watch('app/styles/**/*.sass', gulp.series(stylesmin, cb => gulp.src('dist/css').pipe(server.stream()).on('end', cb)))
    gulp.watch(['app/scripts/**/*.js', '!app/scripts/main.min.js'], gulp.series(script)).on('change', server.reload)
    gulp.watch('dist/*.html').on('change', server.reload)


    return cb()
}
