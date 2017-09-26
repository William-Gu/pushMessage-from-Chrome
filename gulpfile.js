var gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('scss/*.scss', ['sass']);
  // gulp.watch('public/js/module/*.js',['script']);
  gulp.watch('*.html', browserSync.reload);
})