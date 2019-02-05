var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var gutil = require( 'gulp-util' );

var prefixerOptions = {
    browsers: ['last 5 versions']
};
var sassOptions = {
    outputStyle: 'expanded',
    includePaths: ['node_modules/susy/sass','node_modules/breakpoint-sass/stylesheets']
};

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(gcmq())
        .pipe(sourcemaps.write('./css'))
        .pipe(gulp.dest('./css'))
})


gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
})