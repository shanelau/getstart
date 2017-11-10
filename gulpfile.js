var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function () {
  gulp.src('./www')
    .pipe(webserver({
      host: '192.168.3.39',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
