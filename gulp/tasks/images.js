const gulp = require('gulp'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');

module.exports = function images() {
  return gulp
    .src(['src/assets/images/**/*', '!src/assets/images/svg/*.svg'])
    .pipe(
      cache(
        imagemin([
          pngquant({
            speed: 1,
            quality: [0.75, 0.85],
          }),
        ])
      )
    )
    .pipe(gulp.dest('dist/assets/images'));
};
