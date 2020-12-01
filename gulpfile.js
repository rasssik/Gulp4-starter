const gulp = require('gulp'),
  serve = require('./gulp/tasks/serve'),
  htmlConvert = require('./gulp/tasks/htmlConvert'),
  styles = require('./gulp/tasks/styles'),
  script = require('./gulp/tasks/script'),
  images = require('./gulp/tasks/images'),
  sprite = require('./gulp/tasks/sprite'),
  clean = require('./gulp/tasks/clean'),
  dev = gulp.parallel(htmlConvert, styles, script, sprite),
  build = gulp.series(clean, dev, images, done => {
    gulp
      .src(['src/assets/css/*.css', 'src/assets/css/*.min.css'])
      .pipe(gulp.dest('dist/assets/css/'));
    gulp.src('src/assets/fonts/**/*').pipe(gulp.dest('dist/assets/fonts/'));
    gulp.src('src/static/favicon/**/*').pipe(gulp.dest('dist/static/favicon/'));
    gulp.src('src/assets/js/**/*.js').pipe(gulp.dest('dist/assets/js/'));
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
    gulp.src('src/assets/libs/**').pipe(gulp.dest('dist/assets/libs/'));
    done();
  });
module.exports.start = gulp.series(dev, serve);
module.exports.build = build;
