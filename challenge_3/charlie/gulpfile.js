const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus', function () {
	del(['./dist/css/*.+(css|map)']);
  
  return gulp
  	.src('./src/stylus/screen.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['stylus']);

gulp.task('watch', () => {
	gulp.watch('./src/stylus/**/*.styl', ['stylus']);
});