(function(){
    'use strict';
let gulp = require('gulp');
let clean = require('gulp-clean');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let jshint = require('gulp-jshint');
let htmlmin = require('gulp-htmlmin');
let cleancss = require('gulp-clean-css');
let rename = require('gulp-rename');
let ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('uglify', ['clean'], function() {
    return gulp.src([
            'node_modules/angular/angular.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'app/*.module.js',
            'app/*.routes.js',
            'app/utils/*.js',
            'app/services/*.service.js',
            'app/interceptors/*.interceptor.js',
            'app/controllers/*.controller.js'
        ])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist/app/js'))
});

gulp.task('htmlmin', ['clean'], function() {
    return gulp.src('app/views/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/app/views'));
});

gulp.task('cssmin', ['clean'], function() {
    return gulp.src([
            'app/assets/css/**/*.css'
        ])
        .pipe(cleancss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/app/css'));
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('index.prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['jshint', 'uglify', 'htmlmin', 'cssmin', 'copy']);

})();