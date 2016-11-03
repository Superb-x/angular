var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
var reload = browserSync.reload;
/*实时监控*/
gulp.task("watch", function() {
    browserSync.init({
        files: [
            "./*.html",
            "./css/*.css"
        ],
        logLevel: "debug",
        logPrefix: "insgeek",
        server: {
            /*这里写的是html文件相对于根目录所在的文件夹*/
            baseDir: "./"
            //这里如果不写，默认启动的是index.html，如果是其他名字，需要这里写
            // index: "insurance_template_statement.html"
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        //port:81,
        browser: "chrome"
    });
});

gulp.task('default',['watch']);