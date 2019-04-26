const path = require('path');
const gulp = require('gulp');

const GulpJSDoc = require("./build/gulp/jsdoc").GulpJSDoc;
const GulpSass = require("./build/gulp/sass").GulpSass;
const GulpJSBundle = require("./build/gulp/jsbundle").GulpJSBundle;
const GulpLiveReloaded = require("./build/gulp/livereloaded").GulpLiveReloaded;

//const connect = require('gulp-connect');
//const watch = require('gulp-watch');
//const debug = require('gulp-debug');
//const sort = require('gulp-sort');
//const insert = require('gulp-insert');

gulp.task('build-doc', (cb) => {
    let task = new GulpJSDoc();
    task.opts = {
        config: require('./jsdoc.json'),
        src: path.join(__dirname, 'src/client/js/**/*.js'),
        dest: path.join(__dirname, 'dist/client/js/doc/')
    };
    return task.task(cb);
});

gulp.task('compile-sass', () => {
    let task = new GulpSass();
    task.opts = {
        src: path.join(__dirname, 'src/client/sass/**/*.{sass,scss}'),
        dest: path.join(__dirname, 'dist/client/css/'),
        map: 'maps/'
    };
    return task.task();
});

gulp.task('bundle-js', () => {
    let task = new GulpJSBundle();
    task.opts = {
        src: path.join(__dirname, 'src/client/js/**/*.js'),
        dest: path.join(__dirname, 'dist/client/js/'),
        bundle: path.join(__dirname, 'dist/client/js/bundle.min.js')
    };
    return task.task();
});

gulp.task('livereload', () => {
    let task = new GulpLiveReloaded();
    task.opts = {
        src: ['dist/client/css/*.css', 'dist/client/js/*.js']
    };
    return task.task();
});

gulp.task('watch', function() {
    gulp.watch(src.sass, ['compile-sass']);
    gulp.watch(src.js, ['bundle-js']);
    //gulp.watch(src.html, ['html']);
    //gulp.watch(src.riotTags, ['riot-tags']);
});

//gulp.task('default', ['sass', 'server', 'watch', 'livereload', 'js', 'riot-tags']);