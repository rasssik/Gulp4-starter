const gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer')

module.exports     = function styles() {
    return gulp.src('app/styles/*.scss')
        .pipe(sourcemaps.init())
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
        .pipe(sourcemaps.write('app.css'))
        .pipe(gulp.dest('dist/css'))
}

