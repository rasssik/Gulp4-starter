const gulp      = require('gulp'),
      images    = require('./images'),
      sprite    = require('./sprite'),
      styles    = require('./styles'),
      stylesmin = require('./stylesmin'),
      html      = require('./pug'),
      script    = require('./script'),
      server    = require('browser-sync').create()

module.exports  = function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    })


    gulp.watch('app/pages/**/*.pug', gulp.series(html))
    gulp.watch('app/images/**/*', gulp.series(images, sprite)).on('change', server.reload)
    gulp.watch('app/styles/**/*.scss', gulp.series(styles, stylesmin, cb => gulp.src('dist/css').pipe(server.stream()).on('end', cb)))
    gulp.watch(['app/js/**/*.js', '!app/js/main.min.js'], gulp.series(script)).on('change', server.reload)
    gulp.watch('app/*.html').on('change', server.reload)


    return cb()
}
