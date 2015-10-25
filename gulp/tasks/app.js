var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

var config = require('../config');

gulp.task('watch', function() {
	gulp
		.watch('app/**/*.js', ['app']);
});

gulp.task('app', function() {
	gulp.src([
			'app/**/*.module.js',
			'app/**/*.js'
		])
		.pipe(gulp.dest(config.assetsDir + '/src'))
		
		.pipe($.sourcemaps.init())
		
			.pipe($.concat('app.js'))
			.pipe(gulp.dest(config.assetsDir + ''))

			.pipe($.uglify(config.uglifyOptions))
			.pipe($.rename({
				extname: '.min.js'
			}))
			
		.pipe($.sourcemaps.write('./'))
		
		.pipe(gulp.dest(config.assetsDir + ''));
		
	gulp.src(['index.html'])
		.pipe($.minifyHtml())
		.pipe($.rename({
			extname: '.min.html'
		}))
		.pipe(gulp.dest('./'));

	gulp.src([config.assetsDir + '/styles.css'])
		.pipe($.minifyCss(config.cssOptions))
		.pipe($.rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest(config.assetsDir + '/'));
		
	gulp.src([config.assetsDir + '/styles.less'])
		.pipe($.less())
		.pipe(gulp.dest('less_to_css/'))
		.pipe($.minifyCss(config.cssOptions))
		.pipe($.rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest('less_to_css/'));
		
});
