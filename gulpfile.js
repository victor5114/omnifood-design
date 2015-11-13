var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('resources/css/style.scss')
    .pipe(gulp.dest('resources/css'))
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('serve', ['sass'],function() {
  browserSync({
    server: {
      baseDir: ['resources/views', 'resources', 'resources/views/templates'],
      routes: {
          "/templates": "resources/views",
      }
    }
  });

  gulp.watch(['views/**/*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'resources'}, reload);
});