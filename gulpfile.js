const   gulp          = require('gulp'),
        serve         = require('./gulp/tasks/serve'),
        htmlConvert   = require('./gulp/tasks/pug'),
        htmlFinal     = require('./gulp/tasks/htmlFinal'),
        styles        = require('./gulp/tasks/styles'),
        script        = require('./gulp/tasks/script'),
        libs          = require('./gulp/tasks/libs'),
        fonts         = require('./gulp/tasks/fonts'),
        favicon       = require('./gulp/tasks/favicon'),
        imagesWebp    = require('./gulp/tasks/imagesWebp'),
        images        = require('./gulp/tasks/images'),
        sprite        = require('./gulp/tasks/sprite'),
        clean         = require('./gulp/tasks/clean'),
        dev           = gulp.parallel(htmlConvert, htmlFinal, styles, imagesWebp, images, script, sprite, libs, fonts, favicon),
        build         = gulp.series(clean, gulp.parallel(dev));

module.exports.start  = gulp.series(dev, serve)
module.exports.build  = build
