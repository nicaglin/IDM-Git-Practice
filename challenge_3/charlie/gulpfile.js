// include the required packages.
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('one', function () {
  return gulp.src('src/stylus/screen.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sourcemaps-external', function () {
  return gulp.src('./dist/css/**.css')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});


// Default gulp task to run
gulp.task('default', ['one','sourcemaps-external']);
