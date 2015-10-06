/**
 * Created by Karel on 5.10.2015.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var print = require('gulp-print');
var angularFilesort = require('gulp-angular-filesort');

gulp.task('css-task', function () {
    var target = gulp.src('./views/home/index.html');

    var customCssStream = gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css',
        './styles/site.css']);

    return target
        .pipe(inject(
            customCssStream.pipe(print())
                .pipe(concat('appStyles.css'))
                .pipe(gulp.dest('.build/css')), { name: 'styles' }))
        .pipe(gulp.dest('./app/views/home/'));
});

gulp.task('vendors-task', function () {
    var target = gulp.src('./views/home/index.html');

    var vendorStream = gulp.src(['./bower_components/angular-route/angular-route.js',
        './bower_components/angular/angular.js',
        './bower_components/bootstrap/dist/js/bootstrap.js',
        './bower_components/jquery/dist/jquery.js']);

    return target
        .pipe(inject(
            vendorStream.pipe(print())
                .pipe(angularFilesort())
                .pipe(concat('vendors.js'))
                .pipe(gulp.dest('.build/vendors')), { name: 'vendors' }))
        .pipe(gulp.dest('./app/views/home/'));
});

gulp.task('javascript', function () {
    var target = gulp.src('./views/home/index.html');
    var appStream = gulp.src(['./app/*.js']);

    return target
        .pipe(inject(appStream
            .pipe(print())
            .pipe(concat('app.js'))
            .pipe(gulp.dest('.build/javascript')), { name: 'app' }))
        .pipe(gulp.dest('./app/views/home/'))
});

gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('app/*.js', ['javascript']);
    // Watch .ts files
    gulp.watch('app/*.ts', ['typescript']);
    // Watch .css files
    gulp.watch('src/*.css', ['css']);
});

gulp.task('default', ['css-task', 'javascript', 'watch']);