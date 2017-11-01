/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var typescript = require('typescript');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var concat = require("gulp-concat");

var project = ts.createProject('tsconfig.json', { typescript: typescript });

gulp.task('compile', function () {
    var result = gulp
        .src('Front/**/*{tsx}') //{ts,tsx}
        .pipe(ts(project));
        //.pipe(concat("wwwroot/Scripts/app.js"));
    return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('bundle', ['compile'], function () {
    var b = browserify('.tmp/bootstrap.js');
    return b.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist'));
});