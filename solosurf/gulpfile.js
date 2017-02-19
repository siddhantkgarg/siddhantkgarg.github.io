var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets'),
  clean  = require('gulp-dest-clean');
gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(clean("./static/dist",'*'))
    .pipe(gulp.dest('./static/dist/'));
});
