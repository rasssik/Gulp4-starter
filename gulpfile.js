// === Connecting Gulp === //
const gulp         = require('gulp'),
// === Connecting Plug-ins === //
      sass         = require('gulp-sass'),
      cssnano      = require('gulp-cssnano'),
      sourcemaps   = require('gulp-sourcemaps'),
      rename       = require('gulp-rename'),
      plumber      = require('gulp-plumber'),
      del          = require('del'),
      cache        = require('gulp-cache'),
      concat       = require('gulp-concat'),
      imagemin     = require('gulp-imagemin'),
      pngquant     = require('imagemin-pngquant'),
      notify 	     = require('gulp-notify'),
      browserSync  = require('browser-sync'),
      pug          = require('gulp-pug'),
      autoprefixer = require('gulp-autoprefixer');

// === Creating tasks === //

// === Browser Sync === //
gulp.task('browser-sync', () => {
    browserSync({
      server: {
        baseDir: 'app'
      },
      notify: false
    });
});
gulp.task('html', () => {
    return gulp.src('app/**/*.html')
      .pipe(browserSync.reload({ stream: true }))
});

// === Pug === //
gulp.task('pug', () => gulp.src(['app/pug/*.pug', '!app/pug/*.ajax.pug'])
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream()));

// === Sass === //
gulp.task('scss', () => gulp.src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('app.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream()));

gulp.task('scss-minify', () => gulp.src('app/scss/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream()));

// === Clean === //
gulp.task('clean', (done) => {
    del.sync('dist');
    done();
});

// === Scripts === //
gulp.task('scripts', () => {
    return gulp.src([
      'app/js/common.js',
      ])
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({ stream: true }))
});

// === Images === //
gulp.task('img', () => gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
    })))
    .pipe(gulp.dest('dist/img')));

// === Watch === //
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.series('scss', 'scss-minify'));
    gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch(['app/js/**/*.js', '!app/js/main.min.js'], gulp.parallel('scripts'));
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

// === Defaul === //
gulp.task('default', gulp.parallel('watch', 'pug', 'scripts', 'browser-sync', 'scss', 'scss-minify'));

// === Build === //
gulp.task('build',
  gulp.series('clean', gulp.parallel('img', 'scss', 'scss-minify', 'scripts'),
    (done) => {
      gulp.src([
        'app/css/styles.css',
        'app/css/styles_tablet.css',
        'app/css/styles_desktop.css',
        'app/css/styles.min.css',
        'app/css/styles_tablet.min.css',
        'app/css/styles_desktop.min.css',
      ])
        .pipe(gulp.dest('dist/css'));
      gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));
      gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
      gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
      gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
      gulp.src('app/libs/**')
        .pipe(gulp.dest('dist/libs/'));
      done();
    }));