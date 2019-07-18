var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('minjs', function () {
  gulp.src('logger.js')
    .pipe(uglify())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
  gulp.run('minjs');
});