'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
  return gulp.src("src/js/app.js")
    .pipe(babel())
    .pipe(gulp.dest("assets/js"));
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['babel']);
});
