const GulpTask = require('./gulp-task').GulpTask;

const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sort = require('gulp-sort');
const insert = require('gulp-insert');

class GulpFileMerge extends GulpTask {
    task() {
        return gulp.src(this.opts.src)
            .pipe(sort())
            .pipe(debug())
            .pipe(insert.prepend(this.opts.header))
            .pipe(insert.append(`\n`))
            .pipe(concat(this.opts.target))
            .pipe(gulp.dest(this.opts.dest));
    };
};

exports.GulpFileMerge = module.exports.GulpFileMerge = GulpFileMerge;