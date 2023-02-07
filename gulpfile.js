const { on } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style(){
      return gulp.src('./lucid/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./lucid/css'))
            .pipe(browserSync.stream());
}
function watch(){
      browserSync.init({
            server:{
                  baseDir: './lucid'
            }
      })
      gulp.watch('./lucid/scss/**/*.scss', style);
      gulp.watch('./lucid/*.html').on('change', browserSync.reload);
      gulp.watch('./lucid/js/**/*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;