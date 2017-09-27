const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sequence = require('gulp-sequence');
gulp.task('yang',['sass'],function(){
    connect.yang({
        root:'./',
        port:3000,
        liverload:true
    })
    gulp.watch(['./index.html','./js/*.js','./dist/index.css'],['html']);
    gulp.watch(['./scss/*.scss'],['sass'])
})
gulp.task('html',function(cb){
    gulp.src(['./index.html']).pipe(connect.reload())
    cb()
})
gulp.task('sass',function(cb){
    sass('scss/*.scss')
    .on('error',sass.logError)
    .pipe(gulp.dest('dist'));
    cb()
})