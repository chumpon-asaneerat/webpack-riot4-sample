const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');

//const watch = require('gulp-watch');

//const debug = require('gulp-debug');
//const sort = require('gulp-sort');
//const insert = require('gulp-insert');

const jsdoc = require('gulp-jsdoc3');

let src = {
    js: 'src/js/**/*.js',
    sass: 'src/sass/**/*.scss',
    //riotTags: 'src/riot/tags/**/*.tag',
    html: './*.html'
};

let dest = {
    js: 'dist/js/',
    bundlejs: 'app.min.js',
    //riotTagjs: 'tags.min.js',
    css: 'dist/css/',
    maps: 'maps/'
};

gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write(dest.maps))
        .pipe(gulp.dest(dest.css))
        .pipe(connect.reload())
});

gulp.task('js', function() {
    return gulp.src(src.js)
        .pipe(concat(dest.bundlejs))
        .pipe(uglify())
        .pipe(gulp.dest(dest.js))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src(src.html)
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.js, ['js']);
    gulp.watch(src.html, ['html']);
    //gulp.watch(src.riotTags, ['riot-tags']);
});

gulp.task('livereload', function() {
    gulp.src(['dist/css/*.css', 'dist/js/*.js'])
        .pipe(connect.reload());
});

gulp.task('build-jsdoc', function (cb) {
    let config = require('./jsdoc.json');
    gulp.src(src.js, {read: false})
        .pipe(jsdoc(config, cb));
});

//gulp.task('default', ['sass', 'server', 'watch', 'livereload', 'js', 'riot-tags']);