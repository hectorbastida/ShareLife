var gulp = require('gulp'),
gutil = require('gulp-util'),
connect = require('gulp-connect'),
source = require('vinyl-source-stream'),
browserify = require('browserify'),
watchify = require('watchify'),
debowerify = require("debowerify"),
uglify = require('gulp-uglify'),
streamify = require('gulp-streamify');

gulp.task('watch-js',function(){
	var bundler = watchify(browserify({
		entries:['./client/app.js'],
		transform:[debowerify],
		extensions:['.js'],
		debug:true,
		cache:{},
		packageCache:{},
		fullPaths:true
		}));
	function build(file){
		if(file) gutil.log('Recompile'+file);
		return bundler
			.bundle()
			.on('error',gutil.log.bind(gutil,'Browserify Error'))
			.pipe(source('bundle.js'))
			.pipe(streamify(uglify()))
			.pipe(gulp.dest('client/dist'))
	}
	build()
	bundler.on('update',build)
});
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['webserver','watch-js']);