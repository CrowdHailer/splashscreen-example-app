var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function () {
    gulp.src(['app/*', '!app/resources/'], {base: 'app/'})
        .pipe(gulp.dest('www'))
});