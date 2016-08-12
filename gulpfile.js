var gulp = require('gulp'),
    less = require('gulp-less');

// Transpile LESS into CSS
gulp.task('less', function() {
  gulp.src('./app/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/public/css'));
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch(['./app/public/less/**/*.less'], ['less']);
});

// Default task - watch files for changes and run a local server
gulp.task('default', ['watch']);
