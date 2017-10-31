/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var typescript = require('typescript');
var ts = require('gulp-typescript');

var project = ts.createProject('tsconfig.json', { typescript: typescript });

gulp.task('compile', function () {
    var result = gulp
        .src('Front/**/*{tsx}') //{ts,tsx}
        .pipe(ts(project));
    return result.js.pipe(gulp.dest('.'));
});