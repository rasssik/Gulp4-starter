const gulp = require('gulp'),
  sprite = require('./sprite'),
  styles = require('./styles'),
  htmlConvert = require('./htmlConvert'),
  script = require('./script'),
  server = require('browser-sync').create();

module.exports = function serve(done) {
  server.init({
    server: 'src',
    notify: false,
    open: true,
    cors: true,
  });
  gulp
    .watch('src/pages/**/*.pug', gulp.series(htmlConvert))
    .on('change', server.reload);
  gulp.watch('src/*.html').on('change', server.reload);
  gulp
    .watch('src/assets/images/svg/*.svg', gulp.series(sprite))
    .on('change', server.reload);
  gulp.watch(
    'src/assets/sass/**/*.scss',
    gulp.series(styles, done =>
      gulp.src('src/assets/css').pipe(server.stream()).on('end', done)
    )
  );
  gulp
    .watch(['src/js/**/*.js', '!src/js/*.min.js'], gulp.series(script))
    .on('change', server.reload);
  return done();
};
