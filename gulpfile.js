const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const outputPath = 'src/assets/css/';

gulp.task('styles', function() {
    return gulp.src([
        'src/assets/scss/**/*.scss',
        'src/components/**/*.scss',
        'src/containers/**/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputPath));
});

gulp.task('watch', function() {
    gulp.watch('src/**/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles'));
