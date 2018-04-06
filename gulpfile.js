var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var strip = require('gulp-strip-comments');

gulp.task('css', function(){
  return gulp.src('src/dist/*.css')
    // .pipe(minifyCSS())
    // .pipe(strip())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('src/lib'))
});

gulp.task('js', function(){
  return gulp.src('src/dist/*.js')
  	// .pipe(strip())
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/lib'))
});

gulp.task('default', [ 'css', 'js' ]);
