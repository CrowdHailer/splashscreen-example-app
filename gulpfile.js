var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function () {
    gulp.src(['app/config.xml', 'app/index.html'], {base: 'app/'})
        .pipe(gulp.dest('www'))
});

gulp.task('js', function () {
    gulp.src('app/js/index.js')
        .pipe(browserify())
        .pipe(gulp.dest('www'));
});

gulp.task('default', function () {
    gulp.watch('app/js/*', ['js']);
    gulp.watch('app/index.html', ['build'])
});