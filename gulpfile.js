//npm install gulp-concat gulp-sass node-sass gulp-autoprefixer browser-sync gulp-plumber --save-dev 

const { src, dest, parallel, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function browser() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false,
    })
}

function watchFiles() {
    watch("app/sass/**/*.sass", css);
    watch("app/*.html").on('change', browserSync.reload);
}

function css() {
    return src("app/sass/**/*.sass")
        .pipe(sass())
        .pipe(dest("app/css"))
        .pipe(browserSync.stream());
}

exports.css = css;
exports.default = series(
    series(css), 
    parallel(browser, watchFiles)
);