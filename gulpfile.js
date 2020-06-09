const   gulp          = require('gulp'),
        serve         = require('./gulp/tasks/serve'),
        htmlConvert   = require('./gulp/tasks/htmlConvert'),
        htmlFinal     = require('./gulp/tasks/htmlFinal'),
        styles        = require('./gulp/tasks/styles'),
        script        = require('./gulp/tasks/script'),
        imagesWebp    = require('./gulp/tasks/imagesWebp'),
        images        = require('./gulp/tasks/images'),
        sprite        = require('./gulp/tasks/sprite'),
        clean         = require('./gulp/tasks/clean'),
        dev           = gulp.parallel(htmlConvert, htmlFinal, styles, imagesWebp, script, sprite),
        build         = gulp.series(clean, dev, images,
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
                gulp.src('app/fonts/**/*')
                    .pipe(gulp.dest('dist/fonts'));

                gulp.src('app/favicon/**/*')
                    .pipe(gulp.dest('dist/favicon'));

                gulp.src('app/scripts/**/*.js')
                    .pipe(gulp.dest('dist/scripts'));

                gulp.src('app/*.html')
                    .pipe(gulp.dest('dist'));

                gulp.src('app/libs/**')
                    .pipe(gulp.dest('dist/libs/'));

                done();
            });

module.exports.start  = gulp.series(dev, serve)
module.exports.build  = build
