var gulp = require('gulp');
var browserify = require('gulp-browserify');
var fs = require('fs');
var libxmljs = require("libxmljs");


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
var xml2js = require('xml2js');

gulp.task('splashes', function () {
    var parser = new xml2js.Parser();
    fs.readFile(__dirname + '/app/config.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            result.widget['gap:splash'].forEach(function(item){
                console.log(item.$['gap:platform']);
                console.log(item.$['width']);
                console.log(item.$['height']);
                console.log(item.$['src']);
            });
            console.log('Done');
        });
    });
    // console.log('hello');
    // var raw = fs.readFileSync(__dirname + '/app/config.xml');
    // console.log(raw);
});