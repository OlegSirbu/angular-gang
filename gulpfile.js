var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    minifyCSS = require('gulp-minify-css'),
    del = require('del'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    watch = require('gulp-watch'),
    fs = require('fs'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    less = require('gulp-less-sourcemap');

var src = {
        js: {
            custom: [
                './src/app/**/*.module.js',
                './src/app/**/*.js'
            ]
            ,
            libs:[
                "./bower_components/angular/angular.js",
                "./bower_components/jquery/dist/jquery.js",
                "./bower_components/angular-route/angular-route.js",
                './bower_components/angular-mocks/angular-mocks.js',
                "./bower_components/angular-bootstrap/ui-bootstrap.js",
                "./bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "./bower_components/jquery-ui/jquery-ui.min.js",
                "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
                "./bower_components/bootstrap/dist/js/bootstrap.min.js",

                './bower_components/auth0-lock/build/lock.js',
                './bower_components/angular-lock/dist/angular-lock.js',
                './bower_components/underscore/underscore.js',
                './bower_components/angular-underscore-module/angular-underscore-module.js',

                "./bower_components/auth0.js/build/auth0.js",
                "./bower_components/angular-auth0/dist/angular-auth0.js",
                "./bower_components/auth0-lock/build/lock.min.js",
                './bower_components/angular-jwt/dist/angular-jwt.js'
            ]
        },
        css: {
            custom: [
                './src/css/*.css'
            ],
            libs: [
                "./bower_components/bootstrap/dist/css/bootstrap.min.css"
            ]
        },
        img: {
            custom: [
                './src/img/*.png'
            ]
        },
        html: {
            main: './src/index.html',
            templates: './src/app/**/*.html'

        }
    },
    dist = './dist';

gulp.task('html', function () {
    function baseFn(file) {
        var path = file.relative.match(/\w+(.html)|\w+-\w+(.html)/g);
        return './' + path;
    }

    return gulp.src(src.html.templates)
        .pipe(templateCache('templates.js', {
            module: 'app',
            standalone: false,
            base: baseFn
        }))
        .pipe(gulp.dest(dist + '/js'));
});

gulp.task('css', function () {
    return gulp.src(src.css.libs.concat(src.css.custom))
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(dist+'/css')));
});

gulp.task('img', function () {
    return gulp.src(src.img.custom)
        .pipe(gulp.dest(dist + '/img'));
});

gulp.task('vendor-js',function(){
    return gulp.src(src.js.libs)
        // .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(path.join(dist,'/js')));
});

gulp.task('js', function () {
    return gulp.src(src.js.custom)
        .pipe(ngAnnotate())
        .pipe(concat('/js/all.js'))
        .pipe(gulp.dest(dist));
});



gulp.task('watch', ['default'], function () {
    return gulp.watch(
        [
            './src/app/**/*.js',
            './src/app/**/*.html',
            './src/css/**/*.css',
            'src/index.html'
        ],
        ['default']);
});

gulp.task('clean', function (cb) {
    return del(['dist/*/*.js', '!dist/js/vendor.js', 'dist/css/*'],cb);
});

gulp.task('default', ['clean'], function () {
    var tasks = ['html', 'js', 'css', 'img'];
    try {
        fs.accessSync('dist/js/vendor.js');
    } catch (e) {
        tasks.push('vendor-js');
    }

    runSequence(tasks);

    return gulp.src(src.html.main)
    // .pipe(inject(source))
        .pipe(gulp.dest(dist));
});
var loadResource = require('./loadResource');

gulp.task('load', function () {
    loadResource(function () {
        console.log('FINISH');
    });
})




