var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var utils = require('utils/utils');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');


gulp.task("css", function() {
    return gulp.src('public/css/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'));

})



//script paths
var jsFiles = ["public/js/jquery-min.js",
    "public/js/popper.min.js",
    "public/js/bootstrap.min.js",
    "public/js/jquery.mixitup.js",
    "public/js/nivo-lightbox.js",
    "public/js/owl.carousel.js",
    "public/js/jquery.stellar.min.js",
    "public/js/jquery.nav.js",
    "public/js/scrolling-nav.js",
    "public/js/jquery.easing.min.js",
    "public/js/smoothscroll.js",
    "public/js/jquery.slicknav.js",
    "public/js/wow.js",
    "public/js/jquery.vide.js",
    "public/js/jquery.counterup.min.js",
    "public/js/jquery.magnific-popup.min.js",
    "public/js/waypoints.min.js",
    "public/js/form-validator.min.js",
    "public/js/contact-form-script.js",
    "public/js/main.js",
    "public/js/instafeed.min.js"
];
jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});




gulp.task('images', function() {
    return gulp.src('public/img/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/img'));
});



gulp.task('default', ['scripts', 'css', 'images'])