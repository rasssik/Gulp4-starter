const   gulp          = require('gulp'),
        serve         = require('./gulp/tasks/serve'),
        htmlConvert   = require('./gulp/tasks/pug'),
        styles        = require('./gulp/tasks/styles'),
        stylesmin     = require('./gulp/tasks/stylesmin'),
        script        = require('./gulp/tasks/script'),
        scriptsrc     = require('./gulp/tasks/scriptsrc'),
        libs          = require('./gulp/tasks/libs'),
        fonts         = require('./gulp/tasks/fonts'),
        favicon         = require('./gulp/tasks/favicon'),
        images        = require('./gulp/tasks/images'),
        sprite        = require('./gulp/tasks/sprite'),
        clean         = require('./gulp/tasks/clean'),
        dev           = gulp.parallel(htmlConvert, stylesmin, images, script, sprite, libs, fonts, favicon),
        build         = gulp.series(clean, gulp.parallel(dev, styles, scriptsrc))

module.exports.start  = gulp.series(dev, serve)
module.exports.build  = build
