const gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer')

module.exports     = function stylesmin() {
    return gulp.src('app/styles/*.scss')
        .pipe(plumber({
          errorHandler: function (err) {
            console.log(err);
            this.emit('end');
          }
        }))
        .pipe(sass())
        .pipe(autoprefixer({
          cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
}

