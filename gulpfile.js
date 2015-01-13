var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
gulp.task('minify-css', function() {
  gulp.src('./test.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'));
});
