var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    mocha = require('gulp-mocha'),
    header = require('gulp-header'),
    rimraf = require('gulp-rimraf'),
    pkg = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, './package.json'))
    ),
    banner = ['/**',
        ' * Copyright (c) <%= new Date().getFullYear() %>',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * Built on <%= (new Date).toISOString().slice(0,10) %>',
        ' * ',
        ' * @version <%= pkg.version %>',
        ' * @link <%= pkg.repository.url %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''].join('\n') + '\n';

gulp.task('jshint:dev', function() {
    gulp.src(['gulpfile.js', 'tests/**/*.js'])
        .pipe(jshint({
            maxlen: 80,
            quotmark: 'single'
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function () {
    gulp.src(['src/*.js'])
        .pipe(jshint({
            maxlen: 80,
            quotmark: 'single'
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
    gulp.src(['test/**/*.js'])
        .pipe(mocha());
});

gulp.task('copy', function() {
    gulp.src(['node_modules/mocha/mocha.js'])
        .pipe(gulp.dest('public/assets/js'));

    gulp.src(['node_modules/mocha/mocha.css'])
        .pipe(gulp.dest('public/assets/css'));

    gulp.src(['node_modules/chai/chai.js'])
        .pipe(gulp.dest('public/assets/js'));

    gulp.src(['node_modules/sinon/pkg/sinon.js'])
        .pipe(gulp.dest('public/assets/js'));

    gulp.src(['node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('concat', function () {
    gulp.src(['src/*.js'])
        .pipe(concat(pkg.name + '.js'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
    gulp.src(['src/*.js'])
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(concat(pkg.name + '.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    gulp.src('dist', { read: false }) // much faster
        .pipe(rimraf());
});

gulp.task('watch', function () {
    gulp.watch(
        ['gruntfile.js', 'src/*.js', 'tests/**/*.js'],
        ['jshint:dev', 'jshint:app', 'test']
    );
});

gulp.task('build', ['concat', 'uglify']);

gulp.task('default', ['jshint:dev', 'jshint:app', 'test', 'copy', 'concat',
        'uglify']);
