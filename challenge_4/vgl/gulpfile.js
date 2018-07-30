// include the required packages.
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

// Get one .styl file and render
gulp.task('style', function () {
  return gulp.src('src/stylus/screen.styl')
    .pipe(stylus())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', ['style'], function () {
  return gulp.src('src/views/index.html')
      .pipe(gulp.dest('./dist/'))
      .pipe(browserSync.stream());
});

gulp.task('serve', ['copy'], function() {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch('src/stylus/screen.styl', ['style']);
    gulp.watch("src/stylus/screen.styl").on('change', browserSync.reload);
});

// Default gulp task to run
gulp.task('default', ['serve']);